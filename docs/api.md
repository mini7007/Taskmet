# API v1 Design

Base URL: `/api/v1`

## Auth
- `POST /auth/register`
- `POST /auth/login`
- `POST /auth/refresh`
- `POST /auth/logout`

Example request:
```json
{ "email": "dev@taskforge.dev", "password": "StrongPass!123" }
```
Example response:
```json
{ "accessToken": "jwt", "refreshToken": "jwt", "user": { "id": "u_1", "role": "OWNER" } }
```

## Projects
- `GET /organizations/:orgId/projects`
- `POST /organizations/:orgId/projects`
- `PATCH /projects/:projectId`

## Tickets
- `GET /projects/:projectId/tickets?status=IN_PROGRESS&assignee=u_1`
- `POST /projects/:projectId/tickets`
- `PATCH /tickets/:ticketId`
- `DELETE /tickets/:ticketId`

## Comments
- `GET /tickets/:ticketId/comments`
- `POST /tickets/:ticketId/comments`

## Search
- `GET /search/issues?q=payment+bug&projectId=p_1&labels=bug,backend`

## Notifications
- `GET /notifications/me`
- `PATCH /notifications/:id/read`
