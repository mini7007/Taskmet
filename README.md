# TaskForge

TaskForge is a portfolio-grade, Jira-like issue tracking SaaS architecture built fully with free/open-source tooling.

## 1) System architecture diagram

```mermaid
flowchart LR
  U[User Browser]\nNext.js 14 --> CDN[Vercel Edge]
  CDN --> FE[Next.js App Router + React Query + Zustand]
  FE -->|REST v1 + JWT| API[NestJS API]
  FE -->|WebSocket| WS[Socket.io Gateway]
  API --> PG[(Neon PostgreSQL)]
  API --> REDIS[(Upstash Redis)]
  API --> Q[BullMQ Workers]
  API --> SEARCH[(Meilisearch)]
  API --> FILES[(Cloudinary)]
  API --> EMAIL[Resend]
  API --> OBS[Sentry + PostHog]
  Q --> EMAIL
  Q --> OBS
```

## 2) Tech stack explanation

- **Frontend:** Next.js 14 App Router, TypeScript, TailwindCSS, shadcn/ui, TanStack Query, Zustand, Framer Motion.
- **Backend:** NestJS with modular architecture, API versioning, DTO validation, repository pattern.
- **Data:** PostgreSQL (Neon), Prisma ORM, Redis (cache, rate limit, queues), Meilisearch.
- **Realtime:** Socket.io gateway with Redis adapter for horizontal scalability.
- **Auth:** NextAuth + OAuth (Google/GitHub) + JWT access/refresh for API service auth.
- **DevOps:** Docker, docker-compose, GitHub Actions CI/CD.

## 3) Database schema

See `backend/prisma/schema.prisma` and `docs/er-diagram.md`.

## 4) Folder structure

See `docs/folder-structure.md`.

## 5) Backend implementation

See `backend/` for NestJS scaffold with modules and architectural conventions.

## 6) Frontend implementation

See `frontend/` for Next.js App Router scaffold and route layout.

## 7) API endpoints

See `docs/api.md` for contract-first REST design and request/response examples.

## 8) Realtime architecture

See `docs/realtime.md` for channels/events and scaling model.

## 9) Deployment steps

See `docs/deployment.md` for Vercel + Railway + Neon + Upstash + Cloudinary + Meilisearch.

## 10) GitHub project structure

- Monorepo with `frontend`, `backend`, `shared`, `docs`.
- CI pipeline in `.github/workflows/ci.yml`.

## 11) Future improvements

- Multi-region read replicas
- Event sourcing for activity timeline
- AI issue triage and sprint planning assistant
- SOC2 hardening checklist and audit automation
