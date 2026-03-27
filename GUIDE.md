# 🛠️ Obsidian Vault: The Architect's Guide

Welcome to your high-performance portfolio. This guide will help you customize every aspect of your vault, from the 3D background to your project archives.

---

## 📄 1. The Resume Download
To make the "DOWNLOAD_RESUME.PDF" button work:
1.  **Upload your PDF**: Rename your resume to `resume.pdf`.
2.  **Place it in the `public` folder**: Move the file into the `public/` directory of this project.
3.  **Test**: Clicking the button in the hero section will now open your resume in a new tab.

---

## 🚀 2. Adding New Projects (Detailed)
Projects now support a rich detail view (Modal) with videos, galleries, and summaries.

### Where to add them:
- **Home Page (Featured)**: `src/components/ProjectsSection.tsx`
- **Full Archives Page**: `src/components/ProjectsPage.tsx`

### The Project Data Structure:
Add a new object to the `allProjects` or `featuredProjects` array:
```tsx
{
  title: "PROJECT NAME",
  category: "SYSTEM TYPE",
  description: "A short 1-sentence teaser for the card.",
  summary: "A long, detailed explanation of the project's mission and technical challenges.",
  image: "https://link-to-main-image.jpg",
  gallery: [
    "https://image1.jpg",
    "https://image2.jpg",
    "https://image3.jpg"
  ],
  videoUrl: "https://player.vimeo.com/video/YOUR_ID", // Optional: Supports Vimeo/YouTube embeds
  tech: ["C++", "Vulkan", "HLSL"]
}
```

---

## 🖼️ 3. Media & Lightbox
- **Video**: If you provide a `videoUrl`, it will be the primary visual in the project modal.
- **Gallery**: The modal displays up to 3 gallery images on the side.
- **Lightbox**: Clicking any image (main or gallery) opens it in a full-screen lightbox. Click the "X" or anywhere outside the image to close it.

---

## ✍️ 4. Changing Text & Titles
### Main Hero Title
1. Open `src/App.tsx`.
2. Find the `<h1>` tag (around line 134).
3. Change `OBSIDIAN<br />VAULT` to your name.
4. Change the `<p>` tag below it to update your role.

### Skills & Tags
1. Open `src/components/SkillsSection.tsx`.
2. Edit the `skillGroups` array to change categories or individual skills.

---

## 🎨 5. Styling & Colors
The vault uses a "Cyber-Obsidian" theme.
- **Accent Color**: `#00F0FF` (Cyan). You can find and replace this in `src/index.css` or component files to change the primary glow color.
- **Background**: `#0B0B0C` (Deep Charcoal).
- **Glass Panels**: Most UI elements use the `.glass-panel` class defined in `src/index.css`.

---

## 📬 6. Contact & Socials
- **Contact Form**: Logic is in `src/components/ContactSection.tsx`.
- **Social Links**: Found at the bottom of `src/components/ContactSection.tsx` and `src/components/ProjectsPage.tsx`. Replace the `#` with your actual links.

---

## 🛠️ 7. The 3D Monolith
The rotating center-piece is in `src/components/Monolith.tsx`.
- Change the `wireframe` property in the `<meshBasicMaterial>` to toggle the grid look.
- Adjust the `rotation` speed in `src/App.tsx` inside the `Scene` component.

---

## 🚀 Pro Tip: Terminal Logs
The system logs in the bottom-left corner are in `src/components/Terminal.tsx`. Add your own custom messages to the `logs` array for extra personality!
