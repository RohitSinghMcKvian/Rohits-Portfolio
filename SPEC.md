# Dynamic Resume Website — SPEC.md

## 1. Project Overview

- **Name**: Rohit Singh — Dynamic Resume Website
- **Type**: Single-page dynamic resume/portfolio website
- **Core Functionality**: Interactive, animated, responsive resume website showcasing career, skills, projects, and contact form
- **Target Users**: Recruiters, hiring managers, collaborators

## 2. Tech Stack

### Frontend
- Angular 18 (standalone components, SCSS)
- Bootstrap 5 (grid, utilities)
- AOS (Animate on Scroll)
- ngx-typed-js (typed text animation)
- Font Awesome 6 (icons)
- Google Fonts (Inter, Fira Code)
- TypeScript 5.x

### Backend
- ASP.NET Core 9 Web API
- Entity Framework Core 9 (SQL Server)
- CORS for cross-origin requests

### Database
- Microsoft SQL Server
- Table: `ContactMessages` (Id, Name, Email, Message, Timestamp)

### Infrastructure
- Frontend: GitHub Pages
- Backend: Azure App Service

## 3. Features & Interactions

### Sections
1. **Hero** — Full-screen, animated gradient background, typed title, social icon buttons, scroll indicator
2. **About** — Two-column bio, location/language badges, stats (years, projects, companies)
3. **Experience** — Vertical timeline, 3 entries (CargoFlash, CIGNEX, TATA), click to expand projects with tech stacks
4. **Skills** — Categorized grid (Frontend, Backend, Database, ML/AI, Tools) with proficiency bars and hover effects
5. **Projects** — Card grid with modal overlay for full details, technologies, and outcomes
6. **Education** — Card layout for B.Tech and secondary education
7. **Achievements** — Grid of achievement badges with icons (Karate, CS, IIT certificates)
8. **Interests** — Icon+label interest cards
9. **Contact** — Reactive form with validation, success/error states, linked to backend API

### Global Features
- **Dark/Light mode** — Toggle in navbar, persisted to localStorage, CSS variable-based theming
- **Smooth scroll** — CSS scroll-behavior + scroll-padding for fixed navbar
- **AOS animations** — Scroll-triggered fade/slide animations on all sections
- **Responsive** — Mobile-first breakpoints, hamburger menu on mobile
- **SEO** — Meta tags, Open Graph, semantic HTML

## 4. Component Structure

```
src/app/
├── components/
│   ├── shared/
│   │   ├── navbar/
│   │   └── footer/
│   ├── hero/
│   ├── about/
│   ├── experience/
│   ├── skills/
│   ├── projects/
│   ├── education/
│   ├── achievements/
│   ├── interests/
│   └── contact/
├── services/
│   ├── theme.service.ts
│   └── contact.service.ts
└── data/
    └── resume-data.ts
```

## 5. API Design

### POST /api/contact
**Request Body:**
```json
{ "name": "string", "email": "string", "message": "string" }
```
**Response (200):** `{ "success": true, "message": "Your message has been received..." }`
**Response (400):** `{ "success": false, "message": "Invalid form data..." }`

### GET /api/contact
Returns all stored messages (for admin purposes).

## 6. Database Schema

### ContactMessages
| Column   | Type         | Constraints       |
|----------|--------------|-------------------|
| Id       | int          | PK, Auto-increment |
| Name     | nvarchar(100)| NOT NULL          |
| Email    | nvarchar(255)| NOT NULL          |
| Message  | nvarchar(2000)| NOT NULL         |
| Timestamp| datetime     | DEFAULT GETUTCDATE() |

## 7. Deployment

- **Frontend**: `frontend/dist/frontend/` → GitHub Pages (`/resume/` base href)
- **Backend**: Azure App Service, connected to Azure SQL Database
- **CORS**: API allows `https://rohitsinghdev.github.io` and `http://localhost:4200`

## 8. Environment Variables

### Backend
- `ConnectionStrings:DefaultConnection` — SQL Server connection string

### Frontend
- `ContactService.apiUrl` — Azure API endpoint URL (hardcoded for simplicity)
