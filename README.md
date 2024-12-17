# 🎉 Event Manager Fullstack Application

![Event Manager Banner](https://via.placeholder.com/1200x300.png?text=Event+Manager)  
*Manage your events efficiently and monitor the system's health all in one place!* 

## ✨ Overview

Welcome to the **Event Manager**, a fully integrated **Fullstack** application designed to seamlessly manage events while providing comprehensive observability. This project integrates:

- **Backend (Java/Spring Boot)**: A RESTful API to perform CRUD operations on events.
- **Frontend (React)**: An intuitive interface for creating, editing, listing, and deleting events.
- **Database (H2 in-memory)**: Quick and easy setup without external dependencies.
- **Monitoring (Prometheus & Grafana)**: Metrics and dashboards for real-time performance insights.
- **API Documentation (Swagger UI)**: Interactive documentation of all available endpoints.
- **Observability Page**: A dedicated page that unifies API docs, Grafana dashboards, and Prometheus queries in a single screen.

## 🛠 Technologies & Tools

- **Backend**: Java 17+, Spring Boot, Spring Data JPA, H2 Database, Maven
- **Frontend**: React (CRA), Axios, Bootstrap, React Router
- **Monitoring**: Prometheus, Grafana
- **Documentation**: Swagger UI
- **Containerization**: Docker & Docker Compose (optional)

## 🌟 Key Features

1. **Event Management**
   - Create, update, list, and delete events.
   - Enforce validation rules (e.g., `endDate` cannot precede `startDate`).
   
2. **User-Friendly Interface**
   - Bootstrap-based responsive UI.
   - A sidebar for navigation.
   - A prominent **"Observability"** button on the main events page to access the Observability Page.

3. **Observability & Monitoring**
   - **Observability Page**: A single route displaying:
     - **API Docs (Swagger)**: Explore endpoints interactively.
     - **Grafana Dashboards**: Visualize metrics and performance trends.
     - **Prometheus UI**: Query low-level metrics.
   - Integrates seamlessly for a holistic view of system health.

## 🎉 Getting Started (Without Docker)

### Prerequisites
- **Java 17+**
- **Maven 3.8+**
- **Node.js (LTS) & npm**

### Run the Backend
```bash
cd backend
mvn spring-boot:run
```
- Backend will start at: http://localhost:8002.

### Run the Frontend
```bash
cd frontend
npm install
npm start
```
- Frontend will start at: http://localhost:3000
- Access the Application
- Events Page (default): http://localhost:3000
- Observability Page: Click the "Observability" button on the Events page or navigate to http://localhost:3000/observability
- Swagger UI (API Docs): http://localhost:8002/swagger-ui.html
- Prometheus: http://localhost:9090 (if running locally)
- Grafana: http://localhost:3001 (if running locally)
-  🐳 Running with Docker & Docker Compose

### Build the backend JAR:
```bash

cd backend
mvn clean package -DskipTests
cd ..
Run Docker Compose:
```
# RUN WITH DOCKER
```bash
docker-compose up --build
```
### Services:
- Backend: http://localhost:8002
- Frontend: http://localhost:3000
- vPrometheus: http://localhost:9090
- vGrafana: http://localhost:3001
- Open http://localhost:3000 and use the "Observability" button to view metrics and docs.

### 📝 Technical Decisions
- Database: H2 for simplicity and quick testing. For production, consider a persistent DB like PostgreSQL.
- Styling: Bootstrap for rapid, responsive UI development.
- Monitoring Stack: Prometheus + Grafana chosen for their ecosystem and reliability.
- Documentation: Swagger UI for clear, interactive API understanding.

