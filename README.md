# Salman Abbas - Personal Portfolio

**Live Preview:** [dev-salmanabbas.vercel.app](https://dev-salmanabbas.vercel.app/)

A sleek, highly interactive, and fully dynamic personal portfolio website built to showcase my journey as a Full Stack Developer. 

This repository (`dev-salmanabbas`) contains the complete source code for my frontend and backend logic, featuring a custom dark-themed UI, smooth animations, and a secure real-time admin panel.

## 🚀 Features

* **Dynamic Admin Dashboard:** A secure, password-protected Supabase backend to manage projects, certificates, and skills on the fly.
* **Real-time Comments System:** Visitors can leave comments and likes on the portfolio, completely managed (approve/pin/delete) from the admin panel.
* **Seamless Contact Form:** Integrated with Web3Forms to deliver client messages straight to my email without page reloads.
* **Fluid Animations:** Beautiful page transitions and hover effects powered by Framer Motion.
* **Fully Responsive:** Carefully crafted with Tailwind CSS to look perfect on mobile, tablet, and desktop screens.

## 💻 Tech Stack

**Frontend:**
* HTML & CSS
* React JS
* Next.js (App Router)
* Tailwind CSS
* Framer Motion (Animations)
* SweetAlert2 (Popups)

**Backend & Data:**
* Supabase (PostgreSQL Database & Authentication)
* Web3Forms (Email API)

## 🛠️ Local Development Setup

To run this project locally on your machine, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine. 

### 1. Clone the repository
```bash
git clone [https://github.com/salman-abbas-dev/dev-salmanabbas.git](https://github.com/salman-abbas-dev/dev-salmanabbas.git)
cd dev-salmanabbas
2. Install dependencies
Bash
npm install
3. Set up Environment Variables
Create a .env.local file in the root of your project and add your Supabase credentials:

Code snippet
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
(Note: Your Web3Forms access key is already configured directly in the Contact Component).

4. Run the development server
Bash
npm run dev
Open http://localhost:3000 with your browser to see the result. To access the admin panel, navigate to /admin/login.

🌐 Deployment
This project is deployed live on Vercel and can be viewed here: dev-salmanabbas.vercel.app.

To deploy your own version:
Simply connect your GitHub repository to Vercel, add your Supabase environment variables in the Vercel dashboard, and hit deploy.

👨‍💻 Author
Salman Abbas

GitHub: @salman-abbas-dev

LinkedIn: salman-abbas-dev

Designed and built by Salman Abbas.
