# Deploy — My Portfolio

## Prerequisites

- Docker & Docker Compose (recommended)
- Node.js 22+ (for local/manual deployment)
- A Linux server with a public IP and domain pointing to it (for production)

---

## Option 1 — Docker Compose (recommended)

Deploys Next.js behind an Nginx reverse proxy.

```bash
# 1. Clone and enter the project
git clone <repo-url> my-portfolio
cd my-portfolio

# 2. Start services
docker compose up -d --build

# 3. Check logs
docker compose logs -f
```

The app will be available on **port 80**.

### Useful commands

| Action                   | Command                          |
| ------------------------ | -------------------------------- |
| Stop services            | `docker compose down`            |
| Rebuild and restart      | `docker compose up -d --build`   |
| View logs (Next.js)      | `docker compose logs -f nextjs`  |
| View logs (Nginx)        | `docker compose logs -f nginx`   |
| Shell into Next.js       | `docker compose exec nextjs sh`  |

> No `.env` file is required — the app runs without environment variables by default.

---

## Option 2 — Manual (without Docker)

Requires Node.js 22+.

```bash
# 1. Install dependencies
npm ci

# 2. Build
npm run build

# 3. Start production server
npm start
```

The app starts on **port 3000** by default.

---

## Production setup with a domain

### 1. Configure Nginx (standalone server)

If you are **not** using the Docker Compose Nginx and want to run Next.js directly behind a system-level Nginx:

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 2. SSL with Certbot

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

If using Docker Compose, mount certs into the Nginx container or use a reverse proxy like Caddy that handles TLS automatically.

---

## Architecture

```
                        Port 80
                          |
                      [ Nginx ]        ← reverse proxy, SSL, caching
                          |
                     [ Next.js ]       ← App server (port 3000)
                    port 3000
```

- Nginx handles HTTP termination, caching of static assets (`/_next/static` cached for 1 year), and security headers.
- Next.js runs in `standalone` output mode — only the runtime files are copied into the final image.
- Both services share a dedicated Docker bridge network (`portfolio`).

---

## File structure (relevant to deployment)

```
├── Dockerfile          # Multi-stage build (deps → builder → runner)
├── docker-compose.yml  # Service orchestration
├── nginx.conf          # Nginx reverse proxy configuration
├── next.config.mjs     # Next.js config (standalone output)
├── .gitignore
└── DEPLOY.md
```
