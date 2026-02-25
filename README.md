## Problems Occured During Making this project
1. When installing react using vite:
    - 'Task' is not recognized as an internal or external command
    - Previous name of root folder: MERN Habit & Task Tracking Project
    - The & symbol is the problem. In PowerShell and CMD, & means "run another command". So Windows is breaking your folder name into two commands.
    - Current Name of root folder: MERN HABIT TRACKING APP

2. What is express & node ?
    - https://www.geeksforgeeks.org/node-js/node-js-vs-express-js/#express-js

3. Where to keep images in React (Either in `src/assets` or `public`)
    - If you keep images inside src/assets, React treats them like part of your code. You import them inside your component, and during production build, React (Vite) optimizes them. It can reduce size, add unique names, and remove unused images. That means your website becomes faster and safer. So for things like logo, icons, form images, product images — use src/assets.
    - If you keep images inside public, React does not touch them. They are copied directly to the final build folder. No optimization happens. You don’t import them — you directly write the path like /image.png.
    `<img src="/image.png" />` 
    This is mainly used for favicon, robots.txt or images that need a fixed public URL.

4. Why does the favicon not load when using /public/favicon.png in a Vite React project, and what is the correct way to reference files inside the public folder?
    - The problem is happening because of how **Vite** handles the `public` folder. In a Vite project, the `public` folder is automatically treated as the root (`/`) of your application when the app runs in the browser. This means you do not need to write `/public/` in the path. If you write `/public/favicon.png`, the browser will try to find a folder named `public` inside the root, but in reality, Vite already serves everything inside `public` directly from `/`. So the correct path should be `/favicon.png`, not `/public/favicon.png`. The issue is not with the `<link>` tag itself, but with the incorrect file path.
