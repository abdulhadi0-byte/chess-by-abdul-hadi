# 👑 Chess Game by Abdul_hadi

A premium, interactive web-based chess application engineered with a sleek **Glassmorphism Dark UI**, real-time legal move visual assistance, and an asynchronous cloud-based **Stockfish AI Engine** integration with variable computing depths.

This project is built from scratch using frontend web technologies, making it an excellent showcase of asynchronous JavaScript, API management, algorithmic state tracking, and professional UI/UX design patterns.

---

## 🚀 Live Demo & Repository
* **Live Application:** [Deploy your live URL here via GitHub Pages]
* **Source Code Repo:** [Insert your GitHub Repository link here]

---

## ✨ Key Features

### 🤖 1. Dynamic Stockfish AI Engine
* **Cloud API Integration:** Harnesses advanced processing power via real-time `POST` calls to calculate optimal responses asynchronously without blocking user interface rendering.
* **Variable Difficulty Depths:** * **Casual Mode (Depth 1):** Optimized for beginners or quick gameplay testing.
  * **Club Player (Depth 5):** Leverages foundational positional evaluations for an intermediate challenge.
  * **Master Engine (Depth 12):** Executes deeper positional calculations for advanced players.

### 🎯 2. Dual-Input Control & Live Highlights
* **Click-to-Move Engine:** Clicking any piece automatically scans for valid paths, highlights the selected piece in cyan, and draws glowing destination target dots across the board.
* **Drag-and-Drop Capability:** Fully supports classic desktop click-and-drag mechanics natively alongside click-selection.

### ↩️ 3. Intelligent Turn-State Undo System
* **Dual-Step Reversal:** Designed natively for Player vs. AI environments—clicking "Undo Move" cleanly rewinds both the computer's last counter-move and your matching move simultaneously while re-synchronizing UI tracking states instantly.

### 🎨 4. Premium Responsive UI Layout
* **Modern Aesthetic:** Designed with a striking Glassmorphic color palette featuring deep gradient backgrounds, backdrop blur styling (`backdrop-filter`), and distinct neon accent glow dividers.
* **Mobile Adaptive:** Features flexible media breakpoint queries ensuring structural scaling and usability on desktops, tablets, and smartphones alike.

---

## 🛠️ Built With

The stack relies entirely on modern client-side engines and web standards:
* **HTML5 & CSS3:** Structural foundation layered with standard semantic formatting, custom CSS properties/variables, and layout configurations.
* **JavaScript (ES6+):** Manages interactive inputs, DOM manipulation loops, and asynchronous fetch handling.
* **Chess.js:** Evaluates full standard board state logic—governing edge cases like en passant capture, castling criteria, checking vectors, checkmate flags, and stalemate resolutions.
* **Chessboard.js:** Handles graphical square interactions, animation transitions, and visual canvas layouts.
* **Stockfish Cloud API:** High-performance, open-source asynchronous API evaluating standard FEN configurations on demand.

---

## 📦 How to Run Locally

Since this application is serverless and self-contained, no complex compilation or development dependencies are required:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/yourusername/chess-by-abdul-hadi.git](https://github.com/yourusername/chess-by-abdul-hadi.git)
