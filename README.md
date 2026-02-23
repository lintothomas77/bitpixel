# BitPixel Solutions

Corporate website for **BitPixel Solutions** — _Transforming Bits and Pixels into Digital Solutions._

Built with **React 18** and **Vite 5**, styled using **styled-components**, and deployed on **Vercel**.

---

## Tech Stack

| Layer      | Technology                        |
|------------|-----------------------------------|
| Framework  | React 18                          |
| Bundler    | Vite 5                            |
| Styling    | styled-components v6              |
| Deployment | Vercel                            |
| Fonts      | Space Grotesk & Inter (Google Fonts) |

---

## Project Structure

```
bitpixel/
├── public/               # Static assets served as-is
├── images/               # Logo and image assets
├── src/
│   ├── components/       # Page sections
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Stats.jsx
│   │   ├── Team.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── hooks/            # Custom React hooks
│   ├── styles/           # Shared styles and theme
│   ├── App.jsx           # Root component
│   └── main.jsx          # Entry point
├── index.html            # HTML shell
├── vite.config.js        # Vite configuration
├── vercel.json           # Vercel deployment config
└── package.json
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the project root for local overrides. A `.env.production` file is used for production builds. These files are **not committed** to version control.

### Development

```bash
npm run dev
```

Starts the Vite dev server at `http://localhost:5173`.

### Production Build

```bash
npm run build
```

Output is written to the `dist/` directory.

### Preview Production Build Locally

```bash
npm run preview
```

---

## Deployment

The project is configured for **Vercel**. The `vercel.json` specifies:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "installCommand": "npm install"
}
```

Push to the connected Git branch to trigger an automatic Vercel deployment.

---

## License

Private — All rights reserved © BitPixel Solutions.
