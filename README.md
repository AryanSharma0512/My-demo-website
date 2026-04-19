# Aryan Sharma Portfolio Website

Welcome to the personal portfolio website of Aryan Sharma. This project is built using only standard HTML, CSS, and JavaScript, making it lightweight, elegant, and ready for deployment on GitHub Pages.

## Project Structure

- `index.html`: The landing page featuring a hero section and intro.
- `about.html`: Detailed personal information, university background, and hobbies.
- `projects.html`: A showcase of key projects with descriptions and tags.
- `resume.html`: A page to view and download the professional resume.
- `style.css`: All site-wide styles, including the "Old Gold and Black" theme and dark mode.
- `script.js`: Handles interactions, dark mode toggle, and scroll animations.
- `assets/`: Folder for images and documents.

## How to Customize

### 1. Update Profile Photo
- Place your profile picture in the `assets/` folder.
- Name it `profile-placeholder.jpg` or update the `src` attribute in `index.html`.
- Currently, it uses a placeholder image from Picsum.

### 2. Update Resume
- Place your resume PDF in the `assets/` folder.
- Name it `resume-placeholder.pdf`.
- The links in `resume.html` are already configured to point to this file.

### 3. Edit Text Content
- Open any `.html` file and look for the text within tags (e.g., `<p>`, `<h1>`, `<li>`).
- Most personal data is clearly labeled with comments like `<!-- Project 1 -->` or `<!-- About Me -->`.

### 4. Change Colors
- Open `style.css`.
- Under `:root`, you can change the hex codes for `--primary-gold`, `--deep-black`, and others.
- The site will automatically update globally.

### 5. Change Fonts
- The current font is set to "Times New Roman" as per your preference.
- To change it, update the `--font-family` variable in `style.css`.

## How to Publish on GitHub Pages

1. **Create a GitHub Repository**: Log in to GitHub and create a new repository (e.g., `my-portfolio`).
2. **Upload Files**: Upload all the files in this directory to the main branch of your new repository. Ensure index.html is at the root.
3. **Enable GitHub Pages**:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment**, select **Deploy from a branch**.
   - Choose the `main` branch and `/root` folder.
   - Click **Save**.
4. **View Site**: Your site will be live at `https://yourusername.github.io/my-portfolio/` within a few minutes!

---
*Developed for Aryan Sharma | 2024*
