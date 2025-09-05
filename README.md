# MockPitch AI 🚀

Wish you could get a practice round before the big interview? 😅 MockPitch AI is your personal training ground. 🚀 It creates a realistic interview session right in your browser. Just use your webcam, talk through your answers, and our AI coach gives you instant, genuine feedback to help you shake off the nerves and walk in ready to impress. ✨

## ✨ Features

- **AI-Powered Feedback:** Get instant, intelligent feedback on your interview answers from Google's Gemini AI.
- **Realistic Interview Experience:** Practice with a webcam and microphone to simulate a real interview environment.
- **Speech-to-Text:** Your answers are automatically transcribed for easy review and analysis.
- **Secure Authentication:** User accounts are securely managed with Clerk.
- **Cloud-Based:** Your interview data is stored securely in the cloud with Firebase.

## Website View

The website is built with a component-based architecture, making it modular and easy to maintain. Here's a breakdown of the key components:

*   **`header.tsx`**: The main navigation bar of the website, containing the logo, navigation links, and user profile section.
*   **`logo-container.tsx`**: Displays the website's logo and links back to the homepage.
*   **`navigation-routes.tsx`**: Manages the navigation links in the header.
*   **`profile-container.tsx`**: Shows the user's profile information and provides access to user-specific actions.
*   **`form-mock-interview.tsx`**: The form where users can start a new mock interview session.
*   **`question-section.tsx`**: Displays the interview questions to the user.
*   **`record-answer.tsx`**: Handles the recording of the user's answers using the webcam and microphone.
*   **`footer.tsx`**: The footer of the website, containing additional links and information.
*   **`ui/`**: This directory contains reusable UI components like buttons, dialogs, cards, and forms, built with `shadcn/ui`.

## Website Workflow

1.  **Authentication:** Users can sign up or sign in to their accounts. Authentication is handled securely by Clerk.
2.  **Start a Mock Interview:** Once logged in, users can start a new mock interview by filling out a form with details about the job they are interviewing for.
3.  **Interview Process:** The user is presented with a series of interview questions. They can answer the questions using their webcam and microphone. The application records their answers and provides a speech-to-text transcription.
4.  **AI Feedback:** After the interview is complete, the user's answers are sent to the Google Gemini AI, which provides detailed feedback on their performance.
5.  **Review and Improve:** Users can review their past interviews and feedback to identify areas for improvement.

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
