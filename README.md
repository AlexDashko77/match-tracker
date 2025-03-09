# React App Setup Guide

## 📌 Prerequisites
Before running the project, make sure you have the following installed:
- [Node.js](https://nodejs.org/) (Recommended: LTS version)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## 🚀 Installation & Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/AlexDashko77/match-tracker.git
   cd match-tracker
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```
   _or using yarn:_
   ```sh
   yarn install
   ```

## 🔧 Running the Project

3. **Start the development server:**
   ```sh
   npm run dev
   ```
   _or using yarn:_
   ```sh
   yarn dev
   ```
   
   This will start the project in development mode. The app will be accessible at:
   ```
   http://localhost:3000
   ```

## 🏗️ Building for Production

4. **Create a production build:**
   ```sh
   npm run build
   ```
   _or using yarn:_
   ```sh
   yarn build
   ```
   
   This command will generate an optimized production build inside the `dist` folder.

## ✅ Running Production Build

5. **Serve the built project:**
   ```sh
   npm run preview
   ```
   _or using yarn:_
   ```sh
   yarn preview
   ```
   
   This will start a local server for testing the production build.

## 🛠️ Additional Commands
- **Linting the code:**
  ```sh
  npm run lint
  ```
- **Running tests:**
  ```sh
  npm test
  ```

## 📄 Environment Variables
Create a `.env` file in the root directory and configure the required environment variables:
```
REACT_APP_API_URL=https://your-api-url.com
REACT_APP_OTHER_KEY=your-value
```

## 🔗 Useful Links
- [React Documentation](https://react.dev/)
- [Vite Documentation (if using Vite)](https://vitejs.dev/)

---

### 🎉 Now you are ready to develop your React application!

