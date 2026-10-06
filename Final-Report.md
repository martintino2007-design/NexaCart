# MartinMart Final Report

## 1. Problem statement
MartinMart is a multi-seller marketplace where sellers list products, buyers browse/search products, manage carts and place orders, while an admin manages users, orders and listings.

## 2. Architecture
Layered MVC over Servlets using Front Controller concepts. Browser → Filters → Servlets → Services → DAOs → HikariCP → H2.

## 3. Technology
Java 17, Maven, Tomcat 9, JSP/JSTL, vanilla JS/fetch, H2, JDBC, HikariCP, Gson, jBCrypt, JUnit 5, Mockito, SLF4J/Logback.

## 4. Features
F1–F8 implemented. O4 chatbot implemented with provider abstraction; optional Gemini mode is configuration-driven.

## 5. Design patterns
DAO, Front Controller, Singleton-style datasource lifecycle, Factory/provider selection, Strategy through swappable chat/payment-related channels, Builder-ready DTO design.

## 6. Security
Prepared statements, bcrypt, session ID regeneration, protected routes, output escaping in JSPs, server-side API key handling, rate limiting and error-page stack-trace protection.

## 7. Known limitations
The checkout is intentionally a mock payment flow. The Gemini provider requires a valid API key and current provider availability. Production deployment should use a managed secret store and HTTPS.
