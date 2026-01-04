# FinAI Academy - India Edition

FinAI Academy is a specialized AI training platform tailored for the Indian Banking, Financial Services, and Insurance (BFSI) sector. It leverages Google's Gemini API to provide personalized career roadmaps and intelligent advisory services compliant with Indian regulations (RBI, SEBI, DPDP Act).

## Features

*   **Localized Context**: Content and currency (INR) adapted for the Indian market.
*   **AI Curriculum Generator**: Creates custom learning paths referencing India Stack (UPI, Aadhaar) and local compliance.
*   **FinAI Advisor**: A chatbot assistant that answers queries with context about the Indian financial landscape.
*   **Responsive Design**: Built with React and Tailwind CSS.

## Prerequisites

*   **Node.js**: Version 18 or higher.
*   **Gemini API Key**: You need a valid API key from Google AI Studio.

## Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone <repository_url>
    cd finai-academy-india
    ```

2.  **Install Dependencies**
    Run the following command to install the required libraries (React, Vite, Google GenAI SDK, etc.):
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**
    Create a file named `.env` in the root directory of the project. Add your Gemini API Key:

    ```env
    API_KEY=your_actual_api_key_here
    ```
    *(Note: Do not commit this file to GitHub. It is already added to .gitignore).*

4.  **Run the Project**
    Start the local development server:
    ```bash
    npm run dev
    ```
    Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`).

## Project Structure

*   `services/geminiService.ts`: Handles interactions with Google Gemini API.
*   `components/`: Reusable UI components (CourseCard, ChatBot, CurriculumGenerator).
*   `App.tsx`: Main application layout and logic.
*   `types.ts`: TypeScript definitions.

## Tech Stack

*   React 18
*   TypeScript
*   Tailwind CSS
*   Google Gemini API (via `@google/genai`)
*   Vite
