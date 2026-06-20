# ♟️ Interactive Web Chess Game with Stockfish AI

[![GitHub Pages](https://img.shields.io/badge/Deployment-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://abdulhadi726.github.io/Abdul_hadi/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
[![Built With-JS](https://img.shields.io/badge/Built%20With-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

A premium, dark-themed responsive web chess game built using HTML5, CSS3, and JavaScript. This project communicates asynchronously with a hosted Stockfish AI engine to offer an advanced standalone portfolio experience.

## 🌐 Live Demo
Play the game live right in your browser:  
👉 **[Launch Live Chess Arena](https://abdulhadi726.github.io/Abdul_hadi/)**

---

## 🚀 Key Features

* **Sleek Glassmorphic UI:** Modern dark-mode interface utilizing CSS variables and blur backdrops for a premium aesthetic.
* **Smart Move Validation:** Powered by `chess.js` to strictly enforce standard chess rules, detect checks, and block illegal attempts.
* **Real-time Legal Highlights:** Click or drag a piece to instantly see valid target squares illuminated with glowing neon indicators.
* **Stockfish AI Integration:** Sends the current game state via FEN strings to a cloud-hosted Stockfish engine (`chess-api.com`) to calculate optimal counter-moves dynamically.
* **Match Control System:** Multi-step match history reversal (**Undo function**) and a dynamic system log monitoring active game states.
* **Smooth Piece Animations:** Fully animated slide and transition configurations powered by `chessboard.js` logic.

---

## 🛠️ Technology Stack & Architecture

The application operates as a pure frontend solution pulling data from external engine APIs:

* **UI Layer:** HTML5 & CSS3 Custom Transitions (Futuristic Dark Theme)
* **Board Rendering Engine:** `chessboard.js` (Handles drag-and-drop bindings & animations)
* **Game Logic Validator:** `chess.js` (Tracks internal board state & rules)
* **AI Core Integration:** Stockfish REST API (Handles depth calculations)
* **Helper Utilities:** `jQuery` (For rapid asynchronous AJAX operations)

---

## 💻 How to Run Locally

Since this is a lightweight frontend application, no compiler or heavy environment configuration is required.

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/abdulhadi726/Abdul_hadi.git](https://github.com/abdulhadi726/Abdul_hadi.git)
