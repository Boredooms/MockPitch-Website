

# MockPitch AI 🚀

Wish you could get a practice round before the big interview? 😅 MockPitch AI is your personal training ground. 🚀 It creates a realistic interview session right in your browser. Just use your webcam, talk through your answers, and our AI coach gives you instant, genuine feedback to help you shake off the nerves and walk in ready to impress. ✨

## ✨ Features

- **AI-Powered Feedback:** Get instant, intelligent feedback on your interview answers from Google's Gemini AI.
- **Realistic Interview Experience:** Practice with a webcam and microphone to simulate a real interview environment.
- **Speech-to-Text:** Your answers are automatically transcribed for easy review and analysis.
- **Secure Authentication:** User accounts are securely managed with Clerk.
- **Cloud-Based:** Your interview data is stored securely in the cloud with Firebase.

## 🛠️ Technologies Used

- **Frontend:** React, Vite, TypeScript, Tailwind CSS
- **Authentication:** Clerk
- **Backend:** Firebase (Firestore)
- **AI:** Google Gemini AI
- **Deployment:** Vercel

## 🚀 Getting Started

1.  **Clone the repository:**

    ```bash
    git clone <your-repository-url>
    ```

2.  **Install dependencies:**

    ```bash
    cd MockPitch-Website
    npm install
    ```

3.  **Set up environment variables:**

    Create a `.env` file in the root of the project and add your Clerk and Firebase API keys:

    ```
    VITE_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
    VITE_FIREBASE_API_KEY=your-firebase-api-key
    # ... and other Firebase config if needed
    ```

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

## 🌐 Deployment

This project is ready to be deployed on Vercel. Simply push your code to a GitHub repository and import it into Vercel. The `vercel.json` file in this repository is already configured for a seamless deployment.