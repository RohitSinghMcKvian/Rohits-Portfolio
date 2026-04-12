# Rohit Singh — Dynamic Resume Website

A modern, animated, single-page resume website built with Angular 18 and ASP.NET Core 9.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Angular 18, TypeScript, SCSS |
| Backend | ASP.NET Core 9 Web API |
| Database | Microsoft SQL Server |
| Animations | AOS (Animate On Scroll), ngx-typed-js |
| Icons | Font Awesome 6 |
| Fonts | Google Fonts (Inter, Fira Code) |
| Hosting | GitHub Pages + Azure App Service |

## Project Structure

```
D:\ClaudeCode_AG_26B\
├── frontend/                 # Angular 18 SPA
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/   # All section components
│   │   │   ├── services/     # ThemeService, ContactService
│   │   │   └── data/         # resume-data.ts (all content)
│   │   └── styles/           # SCSS theme variables
│   └── angular.json
├── backend/                  # ASP.NET Core Web API
│   ├── Controllers/          # ContactController
│   ├── Models/               # ContactMessage entity
│   ├── Data/                  # ResumeDbContext (EF Core)
│   └── Program.cs            # CORS, DI, middleware
├── SPEC.md                    # This specification
└── .github/workflows/         # CI/CD pipeline
```

## Local Development

### Frontend
```bash
cd frontend
npm install
ng serve
# → http://localhost:4200
```

### Backend
```bash
cd backend
dotnet restore
dotnet run
# → http://localhost:5000/api/contact
```

### Prerequisites
- Node.js 18+
- .NET 9 SDK
- SQL Server (local or Azure)
- Update `ConnectionStrings:DefaultConnection` in `backend/appsettings.json`

## Deployment

### Frontend → GitHub Pages
Push to `main` branch — GitHub Actions automatically builds and deploys.
Base href is set to `/resume/` for GitHub Pages subdirectory support.

### Backend → Azure App Service
```bash
az webapp up --name rohit-resume-api --resource-group <rg> --plan <plan> --sku B1
```
Set the `DefaultConnection` app setting in Azure Portal pointing to your Azure SQL Database.

## Features

- Dark/Light mode toggle (persisted to localStorage)
- Animated gradient hero background
- Typed text animation for job title
- Scroll-triggered AOS animations
- Expandable experience timeline
- Project cards with modal detail view
- Reactive contact form with validation
- Fully responsive (mobile + desktop)
- SEO meta tags + Open Graph
