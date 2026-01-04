# FinAI Academy - India Edition

FinAI Academy is a specialized AI training platform tailored for the Indian Banking, Financial Services, and Insurance (BFSI) sector. It leverages Google's Gemini API to provide personalized career roadmaps and intelligent advisory services compliant with Indian regulations (RBI, SEBI, DPDP Act).

## Features

*   **Localized Context**: Content and currency (INR) adapted for the Indian market.
*   **AI Curriculum Generator**: Creates custom learning paths referencing India Stack (UPI, Aadhaar) and local compliance.
*   **FinAI Advisor**: A chatbot assistant that answers queries with context about the Indian financial landscape.
*   **Responsive Design**: Built with React and Tailwind CSS.

## Prerequisites

*   **Node.js**: Version 18 or higher (LTS recommended).
*   **Gemini API Key**: You need a valid API key from [Google AI Studio](https://aistudio.google.com/).

## Quick Start (WSL / Ubuntu / macOS)

1.  **Clone the repository**
    ```bash
    git clone <repository_url>
    cd finai-academy-india
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**
    Create a `.env` file in the root directory:
    ```bash
    cp .env.example .env 2>/dev/null || touch .env
    ```
    Open `.env` and add your API Key:
    ```env
    API_KEY=your_actual_api_key_here
    ```

4.  **Run Development Server**
    ```bash
    npm run dev
    ```
    Open your browser at `http://localhost:5173`.

## Detailed Setup for WSL (Windows Subsystem for Linux)

If you are setting this up on a fresh Ubuntu instance in WSL:

1.  **Install Node.js via NVM**:
    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
    source ~/.bashrc
    nvm install --lts
    ```

2.  **Project Setup**:
    Follow the "Quick Start" steps above.

3.  **Troubleshooting**:
    *   If `localhost:5173` does not open in Windows, verify you are running WSL 2 (`wsl -l -v` in PowerShell).
    *   Ensure no other service is blocking port 5173.

## Project Structure

*   `services/geminiService.ts`: Interactions with Google Gemini API.
*   `components/`: UI components (CourseCard, ChatBot, CurriculumGenerator).
*   `App.tsx`: Main application layout.
*   `types.ts`: TypeScript definitions.

## Tech Stack

*   **Framework**: React 18 + Vite
*   **Language**: TypeScript
*   **Styling**: Tailwind CSS
*   **AI**: Google Generative AI SDK (`@google/generative-ai`)
