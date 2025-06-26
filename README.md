
# SakhiCopilot - Your Business Companion

A comprehensive business assistance application built with React and TypeScript.

## Project info

**URL**: https://yourusername.github.io/sakhicopilot

## Features

- **Business Chat**: Interactive chat interface for business queries
- **Voice Recognition**: Support for Hindi and English voice input
- **Text-to-Speech**: Audio responses in multiple languages
- **Poster Generator**: Create business posters and marketing materials
- **Settings Management**: Customize language, voice, and preferences
- **Comprehensive Database**: Extensive business knowledge base covering various topics

## How to run this project

There are several ways to run and edit this application.

**Local Development**

If you want to work locally using your own IDE, you can clone this repo and start development.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone https://github.com/yourusername/sakhicopilot.git

# Step 2: Navigate to the project directory.
cd sakhicopilot

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## Technologies Used

This project is built with:

- **React** - Frontend framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Component library
- **Lucide React** - Icon library
- **React Router** - Client-side routing

## Architecture

- **Components**: Modular React components for different features
- **Utils**: Business logic and service utilities
- **Hooks**: Custom React hooks for state management
- **UI Components**: Reusable UI components built with shadcn/ui

## Deployment

You can deploy this project using GitHub Pages for free:

1. Go to your repository settings
2. Navigate to "Pages" section
3. Select "Deploy from a branch" and choose "main"
4. Your app will be available at `https://yourusername.github.io/sakhicopilot`

Alternative deployment options:
- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist` folder after running `npm run build`
- **GitHub Pages**: Enable in repository settings for free hosting

## Custom Domain

For GitHub Pages, you can connect a custom domain:
1. Go to repository Settings > Pages
2. Add your custom domain in the "Custom domain" field
3. Create a CNAME file in your repository root with your domain

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the [MIT License](LICENSE).
