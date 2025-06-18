# Ahmad Alawwad's Portfolio

A modern, responsive portfolio website built with Next.js 14 and Tailwind CSS.

## Features

- Clean, modern design with smooth animations
- Fully responsive layout
- Server-side rendering with Next.js
- Gradient background
- Interactive components
- Contact form

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Add your images to the public folder:
   - `profile-placeholder.jpg` (400x400) - Your profile photo
   - `project1.jpg` (800x600) - Drone Person Detection project image
   - `project2.jpg` (800x600) - Mosque Water Platform project image
   - `project3.jpg` (800x600) - Emergency Response AI App image
   - `project4.jpg` (800x600) - Future project placeholder

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Technologies Used

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Hero Icons

## Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
└── public/
    ├── profile-placeholder.jpg
    ├── project1.jpg
    ├── project2.jpg
    ├── project3.jpg
    └── project4.jpg
```

## Customization

1. Update the content in each component to match your personal information
2. Replace the placeholder images with your own project images
3. Modify the color scheme by updating the Tailwind configuration
4. Add or remove sections as needed

## Contact Form

The contact form is currently set up as a static form. To make it functional:

1. Choose a form submission service (e.g., FormSpree, Netlify Forms)
2. Update the form action in the Contact component
3. Add the necessary form handling logic

## License

This project is open-source and available under the MIT License.
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
