# 🤖 AI Persona Chat Application

A modern, interactive chat application that lets you have conversations with AI-powered personas of famous tech educators and personalities. Built with Next.js, React, and OpenAI API.

![AI Chat Demo](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 🎯 Core Features

- **AI Persona Chat**: Chat with AI-powered versions of famous tech educators
- **Character-Specific Responses**: Each persona has unique personality and expertise
- **Real-time Conversations**: Smooth, responsive chat interface
- **Message Persistence**: Chat history saved locally for each character
- **Modern UI/UX**: Clean, minimal design with smooth animations

### 🎨 Design & UX

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Smooth Animations**: Hover effects, loading indicators, and transitions
- **Custom Theme**: White gradient background with red accent colors
- **Professional Interface**: Clean chat bubbles and intuitive navigation

### 🔧 Technical Features

- **Next.js 14**: Latest React framework with App Router
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first styling with custom design system
- **OpenAI Integration**: GPT-powered responses with conversation context
- **Local Storage**: Persistent chat history and character data
- **Context API**: Global state management for character data

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- OpenAI API key

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd legendbot
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:

   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎭 Available Characters

### Hitesh Choudhary

- **Expertise**: JavaScript, React, Node.js, DevOps, System Design
- **Teaching Style**: Practical, hands-on approach with real-world examples
- **Personality**: Encouraging, enthusiastic, and supportive
- **Language**: Hinglish (Hindi + English) with casual conversation style

### Piyush Garg

- **Expertise**: System Design, React, Node.js, Python, Web Development
- **Teaching Style**: Problem-first approach with step-by-step explanations
- **Personality**: Relatable tech friend with practical insights
- **Language**: Primarily English with Hindi for emphasis

## 🛠️ Project Structure

```
legendbot/
├── src/
│   ├── app/
│   │   ├── [personaName]/     # Dynamic chat pages
│   │   ├── api/openai/        # OpenAI API route
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Landing page
│   ├── components/
│   │   └── ui/
│   │       └── focus-cards.tsx # Character cards component
│   ├── context/
│   │   └── CharacterContext.tsx # Global character state
│   ├── characters/
│   │   ├── hitesh.ts          # Hitesh character prompt
│   │   ├── piyush.ts          # Piyush character prompt
│   │   └── index.ts           # Character exports
│   └── lib/
│       └── utils.ts           # Utility functions
├── public/                    # Static assets
├── next.config.ts            # Next.js configuration
└── package.json              # Dependencies
```

## 🎨 Customization

### Adding New Characters

1. **Create character file**

   ```typescript
   // src/characters/new-character.ts
   export const newCharacter = {
     name: "Character Name",
     slug: "character-slug",
     prompt: `Your detailed character prompt here...`,
   };
   ```

2. **Update character index**

   ```typescript
   // src/characters/index.ts
   import { newCharacter } from "./new-character";

   export const characters = {
     // ... existing characters
     "character-slug": newCharacter,
   };
   ```

3. **Add to landing page**
   Update the characters array in `src/app/page.tsx`

### Customizing Prompts

Each character has a detailed prompt that defines their:

- **Personality traits**
- **Teaching style**
- **Expertise areas**
- **Communication patterns**
- **Catchphrases and expressions**

Edit the `prompt` variable in each character file to customize responses.

### Styling Customization

The app uses CSS custom properties for theming:

```css
:root {
  --primary-red: #dc2626;
  --primary-red-light: #ef4444;
  --primary-red-dark: #b91c1c;
  --white-gradient-start: #ffffff;
  --white-gradient-end: #f8fafc;
  --gray-light: #f1f5f9;
  --gray-medium: #64748b;
  --gray-dark: #334155;
}
```

## 🔧 API Configuration

### OpenAI API Setup

1. **Get API Key**: Sign up at [OpenAI](https://platform.openai.com/)
2. **Add to Environment**: Set `OPENAI_API_KEY` in `.env.local`
3. **Configure Model**: Currently uses `gpt-3.5-turbo` (configurable in API route)

### API Endpoints

- `POST /api/openai`: Handles chat messages and returns AI responses
  - **Body**: `{ messages: [], characterSlug: string }`
  - **Response**: `{ reply: string }`

## 📱 Usage

### Landing Page

1. **Browse Characters**: Click the primary button to scroll to character list
2. **Select Character**: Choose from available personas
3. **Start Chatting**: Click "Start Chatting" to begin conversation

### Chat Interface

1. **Character Info**: Left panel shows character details and status
2. **Chat Area**: Right panel displays conversation history
3. **Send Messages**: Type and press Enter or click send button
4. **Clear History**: Use "Clear Messages" button to reset conversation
5. **Auto-scroll**: Chat automatically scrolls to latest messages

### Features

- **Message Persistence**: Chat history saved per character
- **Loading Indicators**: Visual feedback during AI responses
- **Responsive Design**: Works on all device sizes
- **Smooth Navigation**: Seamless transitions between pages

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository**: Link your GitHub repo to Vercel
2. **Add Environment Variables**: Set `OPENAI_API_KEY` in Vercel dashboard
3. **Deploy**: Automatic deployment on push to main branch

### Other Platforms

- **Netlify**: Similar process with environment variables
- **Railway**: Supports Node.js applications
- **DigitalOcean**: App Platform deployment

## 🤝 Contributing

1. **Fork the repository**
2. **Create feature branch**: `git checkout -b feature/new-character`
3. **Make changes**: Add new characters or improve features
4. **Test thoroughly**: Ensure all functionality works
5. **Submit PR**: Create pull request with detailed description

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Hitesh Choudhary**: For inspiring the teaching persona
- **Piyush Garg**: For the tech education perspective
- **OpenAI**: For providing the AI capabilities
- **Next.js Team**: For the amazing framework
- **Tailwind CSS**: For the utility-first styling

## 📞 Support

- **Issues**: Report bugs and feature requests on GitHub
- **Discussions**: Join community discussions
- **Email**: Contact for business inquiries

---

**Made with ❤️ by Balu**

[LinkedIn](https://linkedin.com/in/your-profile) • [GitHub](https://github.com/your-username)
