# 🎨 ProjectSync - Frontend (React + Tailwind CSS)

## 🌟 Project Overview

This repository contains the web user interface for ProjectSync, which allows users to visually interact with the REST API to manage projects. The application is built using React, with modern and responsive styles defined by Tailwind CSS.

### Key Technologies

* **Framework:** React (Vite)
* **Language:** JavaScript
* **Styles:** Tailwind CSS
* **API Communication:** `fetch` / Axios
* **Server:** Runs on a local port different from the backend (e.g., `http://localhost:5173`)

## 🛠️ Frontend Configuration and Setup

### 1. Prerequisites

* Node.js (LTS version recommended)
* The Spring Boot backend must be running on `http://localhost:8080`

### 2. API Configuration

The application assumes the backend is running on `http://localhost:8080`. If the backend port changes, you must update the base URL in the environment configuration file (or wherever `fetch` requests are defined).

### 3. Running the Project

1. Clone this repository:

```bash
git clone https://github.com/your-repository/projectsync-frontend
cd projectsync-frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development application:

```bash
npm run dev
```

4. The interface will be available in your browser, typically at: `http://localhost:5173` (or the port indicated in the terminal).

## 📝 Implemented Features

* **Visualization:** Dynamic and responsive table to list all projects
* **Creation:** Validated form to register new projects
* **Editing:** Form that preloads data for editing with instant updates
* **Deletion:** Button with confirmation modal before sending the DELETE request

## 🔗 Integration with Backend

The frontend communicates with the backend through the following endpoints:

| Operation | Method | Endpoint | Description |
|-----------|--------|----------|-------------|
| List Projects | GET | `/api/projects` | Retrieves all projects |
| Create Project | POST | `/api/projects` | Creates a new project |
| Update Project | PUT | `/api/projects/{id}` | Updates an existing project |
| Delete Project | DELETE | `/api/projects/{id}` | Deletes a project |

## 🎨 Design and User Experience

* **Responsive Design:** The interface adapts to different screen sizes using Tailwind CSS utilities
* **Modern UI:** Clean and intuitive interface with smooth transitions
* **Form Validation:** Client-side validation to ensure data integrity before sending to the backend
* **User Feedback:** Visual confirmation messages for successful operations and error handling

## 📦 Project Structure

```
projectsync-frontend/
├── src/
│   ├── components/     # Reusable React components
│   ├── pages/          # Main application pages
│   ├── services/       # API communication logic
│   ├── styles/         # Global styles and Tailwind configuration
│   └── App.jsx         # Main application component
├── public/             # Static assets
├── package.json        # Project dependencies
└── vite.config.js      # Vite configuration
```

## 🧪 Testing

To run tests (if configured):

```bash
npm run test
```

## 🚀 Building for Production

To create a production build:

```bash
npm run build
```

The optimized files will be generated in the `dist/` folder.

## 🧑‍💻 Team Roles and Responsibilities

| Role | Team Member(s) | Key Responsibilities |
|------|----------------|---------------------|
| Dev1 | Emmanuel Rendon | Implementation of Create & Read (Backend + Frontend) |
| Dev2 | Juan Andres Aristizabal Vallejo | Implementation of Update & Delete (Backend + Frontend) |
| Lead/DevOps | Yeferson Alejandro Garcia Marin | Git Flow Management, Azure DevOps Traceability, Documentation, Code Review |

## 💡 Lessons Learned and Conclusions

### Key Lessons

* **State Management:** Proper state management in React was essential for keeping the UI synchronized with backend data
* **API Integration:** Implementing error handling and loading states improved user experience significantly
* **Responsive Design:** Using Tailwind CSS utilities made it easy to create a responsive interface that works across devices
* **Component Reusability:** Breaking down the UI into reusable components facilitated parallel development and maintenance

### Conclusions

The ProjectSync frontend successfully provides an intuitive and responsive interface for managing projects. The combination of React and Tailwind CSS enabled rapid development while maintaining code quality and user experience standards. The clear separation between frontend and backend allowed for independent development and testing of each layer.
