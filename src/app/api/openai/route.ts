import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { getCharacterPrompt } from "@/characters";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    // Check if OpenAI API key is configured
    if (!process.env.OPENAI_API_KEY) {
      console.error("OpenAI API key not configured");
      return NextResponse.json(
        {
          reply:
            "OpenAI API key not configured. Please check your environment variables.",
        },
        { status: 500 }
      );
    }

    const { messages, characterSlug } = await request.json();

    // Basic validation
    if (!Array.isArray(messages)) {
      return NextResponse.json({ reply: "Invalid format." }, { status: 400 });
    }

    // Get character-specific prompt
    const characterPrompt =
      getCharacterPrompt(characterSlug) ||
      "You are a helpful assistant that mimics a famous person.";

    console.log("Sending request to OpenAI with messages:", messages);
    console.log("Using character prompt for:", characterSlug);

    const response = await client.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: characterPrompt,
        },
        ...messages, // user and assistant roles
      ],
    });

    return NextResponse.json({
      reply: response.choices[0].message.content,
    });
  } catch (error) {
    console.error("OpenAI API Error:", error);
    return NextResponse.json(
      {
        reply:
          "Sorry, I'm having trouble responding right now. Please try again.",
      },
      { status: 500 }
    );
  }
}
