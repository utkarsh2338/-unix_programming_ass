# Multi-Tier Web Application

## 📌 Overview

This project is a simple web application with:

* Frontend (HTML + JS)
* Backend (Node.js + Express)
* Database (MongoDB)

It demonstrates:

* Git for version control
* Docker for containerization
* Kubernetes using Minikube

---

## 📁 Project Structure

```
multi-tier-app/
│
├── backend/
├── frontend/
├── docker-compose.yml
├── *.yaml (Kubernetes files)
```

---

## 🚀 How to Run (Docker)

```bash
docker-compose up --build
```

* Backend runs on: http://localhost:5000
* Open `frontend/index.html` in browser

---

## ☸️ How to Run (Kubernetes)

### 1. Start Minikube

```bash
minikube start
```

### 2. Build Image

```bash
eval $(minikube docker-env)
docker build -t backend-app ./backend
```

### 3. Apply Files

```bash
kubectl apply -f mongo-deployment.yaml
kubectl apply -f mongo-service.yaml
kubectl apply -f backend-deployment.yaml
kubectl apply -f backend-service.yaml
```

### 4. Check

```bash
kubectl get pods
```

### 5. Access App

```bash
minikube service backend-service
```

---

## 📸 Required Screenshots

* `git log --oneline`
* `kubectl get pods`
* Running app

---

## 🔗 GitHub Link

Add your repo link here:

```
https://github.com/your-username/multi-tier-app
```

---
