# Alanmox — Developer Portfolio

A personal portfolio for Alanmox, a full-stack developer and cloud engineer. It highlights services, selected web and mobile projects, technical skills, and ways to get in touch.

## What's inside

- Services in product engineering, cloud deployment, and infrastructure support
- Project case studies with screenshots, technology stacks, and links
- Responsive layout with theme switching and animated sections
- Contact details and social links

## Tech stack

Next.js 16, React 19, TypeScript, Tailwind CSS 4, and Radix UI components.

## Run locally

Install Node.js 22 or newer, then run:

```bash
npm ci
npm run dev
```

Open [http://localhost:3001](http://localhost:3001). The development server uses port 3001; the production server uses port 3000 by default.

To build and run the production version:

```bash
npm run build
npm start
```

## Project structure

| Path | Purpose |
| --- | --- |
| `app/` | Pages, layout, and metadata |
| `components/` | UI and portfolio components |
| `public/` | Images and other static assets |
| `styles/` | Shared styles |
| `DEPLOY.md` | Deployment instructions |

See [DEPLOY.md](DEPLOY.md) for Docker and server setup. The current Docker Compose configuration binds Nginx to `127.0.0.1:3333` for use behind a reverse proxy.
