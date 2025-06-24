# 🎾 TennisLore.com

**TennisLore.com** is a community-powered platform where fans share match-point tales, court-side memories, and personal tennis narratives. It supports public story submissions, community voting, and optional paid "boosts" to promote stories.

---

## 🌐 Live Links

- **Frontend (Vercel)**: [https://candidate-00-x-tennislore-module-md.vercel.app/](https://candidate-00-x-tennislore-module-md.vercel.app/)  
- **Backend (Render)**: [https://candidate-00x-tennislore-module-md-atif.onrender.com](https://candidate-00x-tennislore-module-md-atif.onrender.com)  


---

## 🛠️ Tech Stack

- **Frontend**: React + Vite + Tailwind CSS  
- **Backend**: Node.js + Express  
- **Database**: MongoDB Atlas  
- **ORM**: Mongoose  
- **Payments**: Stripe (for story boost feature)  
- **Hosting**:  
  - Frontend: Vercel  
  - Backend: Render  
  - DB: MongoDB Atlas  

---

## 🚀 Features

### ✅ Module A: Story Submission
- `/submit-story`: Form to submit name, email, date, and tennis story.
- API: `POST /api/story-submit`

### ✅ Module B: Community Voting
- `/stories/:id`: Each story has a vote widget.
- APIs:
  - `POST /api/story-vote`
  - `GET /api/story/:id/votes`

### ✅ Module C: Paid Boost
- Stripe Checkout to boost a story’s visibility ($2).
- APIs:
  - `POST /api/create-boost-session`
  - `GET /api/boost-status?storyId=...&email=...`

---

## 📁 Project Structure
```tennislore/
├── client/ # React frontend (Vite)
│ ├── pages/
│ ├── components/
│ ├── App.jsx
│ └── vite.config.js
├── server/ # Express backend
│ ├── models/
│ ├── routes/
│ ├── index.js
```
## 🧰 Installation & Setup
📦 Prerequisites  
-Node.js (v18 or later)   
-MongoDB Atlas account  
-Stripe account   
-Git installed

🔧 1. Clone the Repository
```bash
git clone https://github.com/atifx17/candidate-00X-tennislore-module-Md_Atif   
cd tennislore
```
🖥️ 2. Setup Backend (Express API)
```bash
cd server
npm install
```
Create a .env file in the server folder:
```bash
MONGO_URI=your_mongodb_atlas_uri
STRIPE_SECRET=your_stripe_secret_key
CLIENT_URL=your_frontent_url
```
Start the backend server:
```bash
node index.js
```
🌐 3. Setup Frontend (React + Vite)
```bash
cd ../client
npm install
```
Create a .env file in the client folder:
```bash
VITE_API_BASE=your_backend_url
```
Start the frontend:
```bash
npm run dev
```

## 🧑‍💻 Author
**[MD Atif Alam](https://www.linkedin.com/in/atifx17/)**  
Full Stack Developer | MERN | Cloud Computing Enthusiast  
[LinkedIn](https://www.linkedin.com/in/atifx17/) • [GitHub](https://github.com/atifx17)
