# Realtime Architecture

Socket namespace: `/ws`

Events:
- `ticket.created`
- `ticket.updated`
- `ticket.deleted`
- `comment.created`
- `board.moved`
- `notification.created`

Rooms:
- `org:{orgId}`
- `project:{projectId}`
- `user:{userId}`

Scale with Redis pub/sub adapter so multiple API instances broadcast consistently.
