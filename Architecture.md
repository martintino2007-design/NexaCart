# Architecture

Browser → EncodingFilter / RequestIdFilter / AuthFilter → Servlet → Service → DAO → HikariCP → H2.

The AI widget calls `/api/chat`, which applies validation/rate limiting/cache and then delegates to a `ChatProvider` implementation.
