# MartinMart

MartinMart is a multi-seller e-commerce marketplace built for the Anna University R2025 Semester 3 Java Capstone requirements. It uses Java 17, Servlets/Tomcat 9, JSP/JSTL, JDBC, H2, HikariCP, Gson and jBCrypt.

## Mandatory features
- F1: Buyer/Seller registration and login; seeded Admin
- F2: Seller product CRUD
- F3: Buyer browse/search/filter
- F4: Cart add/update/remove and running total
- F5: Mock-payment checkout
- F6: Buyer order history and seller incoming orders
- F7: Admin users/orders management
- F8: Reviews and 1–5 star ratings after delivered orders
- O4: AI chatbot with Mock provider and optional Gemini provider

## Project structure
`controller/` HTTP orchestration · `service/` business rules · `dao/` JDBC abstraction · `model/` entities · `dto/` API DTOs · `filter/` security/request filters · `listener/` datasource lifecycle · `util/` utilities · `ai/` chatbot providers.

## Run locally
1. Install JDK 17, Maven and Tomcat 9.0.x.
2. Start an H2 server if desired, or use the local file URL in `src/main/resources/config.properties or environment variables`.
3. Run `mvn clean verify`.
4. Deploy `target/MartinMart.war` to Tomcat `webapps/`.
5. Open `http://localhost:8080/MartinMart/`.

Demo credentials (seed): `buyer@MartinMart.local / password`, `seller@MartinMart.local / password`, `admin@MartinMart.local / password`.

## Production configuration
Use environment variables from `.env.example`; never commit real credentials. The chatbot API key is server-side only.

## API
`GET /api/v1/health` → `{success:true,data:{status:"UP",db:"UP"},error:null}`.
`POST /api/chat` with `message=...` returns the fixed response envelope.

## Diagrams
See `docs/D1_ER.puml`, `docs/D2_UseCase.puml`, and `docs/D3_Sequence.puml`.

## Engineering checklist
All SQL uses PreparedStatement; passwords use bcrypt; sessions use HttpSession with session ID regeneration; protected routes use AuthFilter; SQL resources use try-with-resources; JSON uses versioned API conventions; schema changes belong in numbered migrations.

## Release
v1.0.0 = F1–F8 build; v1.1.0 = chatbot phase.

## Run the redesigned UI directly in VS Code

For a simple frontend demonstration, open the `MartinMart` folder in VS Code and run the root `index.html` with **Live Server**. The standalone UI uses `style.css`, `app.js`, and browser `localStorage`, so it does not require Tomcat or Maven for the UI demo.

- `index.html` — MartinMart frontend entry point
- `style.css` — redesigned responsive UI
- `app.js` — product/cart/order/seller/admin/chat demo logic
- `RUN_IN_VSCODE.md` — step-by-step VS Code instructions

The Java Servlet/JDBC backend is still preserved under `src/` for the full Anna University capstone deployment.


## MartinMart v5 UI update
- Website opens on a separate login screen first.
- Demo login: `buyer@martinmart.local` / `password`.
- Create-account tab is included for the frontend demo.
- Product cards now use real product photography instead of placeholder/emoji visuals.
- Marketplace UI has a modern responsive login-first design.
- The redesigned frontend remains runnable directly with VS Code Live Server; no Maven/Tomcat is needed for the UI demo.
