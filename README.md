# Real-Time Liver Ranking UI

A dynamic, real-time leaderboard application built for a live streaming event featuring 10 participants. The application updates liver scores randomly every second, showcasing smooth positional and numerical animations without relying on any external animation libraries.

## 🚀 Features & Requirements Fulfilled

* **Real-Time Score Updates:** Simulates a highly competitive event by updating scores every second using `Math.random()`.
* **Smooth Position Transitions:** When a liver's rank changes, their list item smoothly glides to the new position.
* **Fluid Score Count-Up Animation:** The score does not just snap to the new value; it smoothly transitions from the original score to the final score like a slot machine.
* **Strict Tech Stack:** Built exclusively with React (Functional Components & Hooks), TypeScript, and `styled-components`. No other third-party libraries were used.
* **Cross-Browser Compatibility:** Designed and tested to run smoothly on the latest version of Google Chrome.

## 🛠 Tech Stack

* React (Functional Components & Hooks)
* TypeScript
* styled-components

## 💡 Technical Highlights & Implementation Intent

To meet the requirement of keeping the code clean, modular, and performant, I focused on the following architectural decisions:

### 1. Position Update Animation (FLIP-like Approach)
Instead of forcing the browser to re-render and re-order the actual DOM nodes (which causes expensive layout thrashing), I implemented a GPU-accelerated approach.
* **How it works:** The parent container is set to `position: relative`, and each `<RankingItem>` is set to `position: absolute`.
* **The Math:** The application calculates the real-time rank index (0-9) based on the sorted scores. It then applies `transform: translateY(index * height)` combined with a CSS `transition`.
* **Result:** This ensures 60fps smooth vertical swapping animations without triggering layout repaints.

### 2. Score Update Animation (`requestAnimationFrame`)
To achieve a buttery-smooth numerical transition between the old score and the newly generated score, I created a dedicated, modular `<AnimatedScore>` component.
* **Why not `setInterval`?:** Relying on `setInterval` for rapid DOM text updates can lead to choppy animations.
* **The Solution:** I utilized the browser's native `requestAnimationFrame` API. It calculates the elapsed time and mathematically interpolates the score progress, resulting in a perfectly smooth count-up effect synced with the display's refresh rate.

### 3. Modularity and Clean Code
* **Separation of Concerns:** The logic for ranking calculation (Parent), layout/styling (`RankingItem`), and complex numerical animation (`AnimatedScore`) are strictly separated into highly cohesive functional components.
* **Memory Management:** Careful attention was paid to the `useEffect` hooks. Both the data-fetching simulation (`setInterval`) and the animation loops (`requestAnimationFrame`) are properly cleaned up (`clearInterval`, `cancelAnimationFrame`) upon component unmount to prevent memory leaks.

## 💻 How to Run

To run this project locally:

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
# (or `npm start` if using Create React App)
```

Open `http://localhost:5173/` (or `http://localhost:3000/`) in your browser to view the application.