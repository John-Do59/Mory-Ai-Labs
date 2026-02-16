# Mory AI Labs Website

A modern, high-performance website for an AI/Data agency, built with:

- **HTML5**
- **Tailwind CSS (v4)**
- **GSAP** (Animations)
- **Vanilla JavaScript**

## Project Structure

- `index.html`: Home page (Hero, Marquee, Selected Works)
- `about.html`: Agency mission and vision
- `services.html`: Detailed service offerings
- `contact.html`: Inquiry form
- `src/`: Source files (CSS, JS)
- `assets/`: Compiled CSS and images

## Development

1. Install dependencies:

    ```bash
    npm install
    ```

2. Watch for CSS changes (optional, if modifying styles):

    ```bash
    npx @tailwindcss/cli -i ./src/css/input.css -o ./assets/css/style.css --watch
    ```

3. Serve locally using VS Code Live Server or python:

    ```bash
    python3 -m http.server
    ```

## Deployment

This project is ready for GitHub Pages.

1. Push this folder to a GitHub repository.
2. Go to Settings > Pages.
3. Select the `main` branch and `/` root folder.
4. Save.
