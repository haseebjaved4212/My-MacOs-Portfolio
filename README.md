# MacOS Portfolio

A modern, interactive developer portfolio inspired by macOS. Built with React, Tailwind CSS, and GSAP, it features a fully functional desktop environment with draggable windows, a dock, and integrated apps to showcase projects, skills, and contact information.



## 🚀 Key Features

-   **MacOS Desktop Simulation**: Authentic look and feel with a functional Dock, Menu Bar, and Desktop Icons.
-   **Draggable Windows**: Interactive windows that can be dragged, minimized, and closed.
-   **Finder App**: Navigate through "projects" (folders) and view details.
-   **Photos App (Gallery)**: View a gallery of personal photos and images with a dedicated viewer window.
-   **Text Viewer**: Open and read `.txt` files representing project descriptions.
-   **Image Viewer**: Preview project screenshots and images in a standalone window.
-   **Contact App**: A dedicated window to get in touch, featuring copy-to-clipboard email and social links.
-   **Interactive Dock**: Animated dock with tooltips and bounce effects for apps like Finder, Safari (Portfolios), Photos, and Terminal.
-   **Animations**: Smooth transitions and effects powered by GSAP.

## 🛠️ Tech Stack

-   **Framework**: [React](https://react.dev/) (Vite)
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
-   **Animations**: [GSAP](https://gsap.com/) (Draggable, Tween)
-   **State Management**: [Zustand](https://zustand-demo.pmnd.rs/) with Immer
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Utilities**: CLSX, React Tooltip

## 📂 Project Structure

-   `src/components`: UI components like Dock, Navbar, WindowControls, and Home (Desktop).
-   `src/windows`: Application window components:
    -   `Finder.jsx`: Browses locations and projects.
    -   `Photos.jsx`: Gallery application.
    -   `Contact.jsx`: Contact form and social links.
    -   `Text.jsx`: Text file viewer.
    -   `Image.jsx`: Image file viewer.
    -   `Terminal.jsx`, `Safari.jsx`, etc.
-   `src/store`: Zustand stores (`window.js`, `location.js`) for managing app state.
-   `src/constants`: Configuration data (projects, navigation, dock apps).
-   `src/hoc`: Higher-Order Components (e.g., `WindowWrapper` for draggability).

## 🏃‍♂️ Getting Started

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/macos-portfolio.git
    cd macos-portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

## 📝 Customization

You can customize the content by editing `src/constants/index.js`:
-   **`dockApps`**: Change dock icons and labels.
-   **`locations`**: Update project folders and files shown in Finder.
-   **`socials`**: Update your social media links.
-   **`gallery` & `photosLinks`**: Update images for the Photos app.

## 📄 License

This project is open source and available For Personal Use.

