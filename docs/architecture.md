# Architecture (Clean + Modular)

## Layers

1. **Presentation Layer**: Controllers / WebSocket gateways.
2. **Application Layer**: Use-cases in services.
3. **Domain Layer**: Entities + business rules.
4. **Infrastructure Layer**: Prisma repositories, Redis cache, Meilisearch adapter, Cloudinary adapter.

## Backend module boundaries

- `auth`: identity, JWT/refresh, OAuth handshake.
- `organizations`: workspaces, members, roles.
- `projects`: project lifecycle and membership.
- `tickets`: issue CRUD, assignment, status, labels, priority.
- `comments`: discussion threads and markdown support.
- `sprints`: planning and progress metrics.
- `notifications`: in-app + email dispatch.
- `search`: indexing and advanced filters.
- `realtime`: ticket/comment/board/notification events.
- `common`: error handling, logging, guards, interceptors.
