# DevOps-Capstone-Project
Node Js Capstone Project
📌 **Project Description**

This project demonstrates a complete end-to-end DevOps CI/CD pipeline for a Node.js web application using industry-standard tools. The pipeline automates source code integration, testing, Docker image creation, deployment to AWS EC2, and real-time monitoring using Prometheus and Grafana.

The goal is to showcase real-world DevOps practices including automation, containerization, infrastructure monitoring, and continuous deployment.

🛠 **Tech Stack**
Category	Tools
Source Control	GitHub
CI/CD	Jenkins
Language	Node.js
Containerization	Docker
Cloud	AWS EC2
Monitoring	Prometheus, Grafana
Metrics Exporters	Node Exporter, cAdvisor
OS	Ubuntu Linux
Scripting	Bash
**⚙️ Setup Instructions**
🔹 Prerequisites

AWS EC2 instance (Ubuntu)

Docker installed

Jenkins installed

Node.js installed

Docker Hub account

🔹 **Clone Repository**
git clone https://github.com/praveenkumaran46/DevOps-Capstone-Project.git
cd DevOps-Capstone-Project

🔹**Run Application Locally**
npm install
npm start


**Access app:**

http://localhost:3000

🔹 **Build and Run Docker Image Locally**
docker build -t nodejs-capstone .
docker run -d -p 3000:3000 nodejs-capstone

🔄 **CI/CD Pipeline Flow**

Developer pushes code to GitHub

Jenkins pipeline is triggered automatically

Jenkins installs dependencies and runs tests

Docker image is built and pushed to Docker Hub

Latest image is deployed on EC2 as a container

Prometheus monitors system and container metrics

Grafana visualizes metrics on dashboards

📊 **Monitoring Setup**

Prometheus scrapes metrics from:

Node Exporter (system metrics)

cAdvisor (container metrics)

Grafana displays dashboards for:

Server health

Docker containers

Application performance

📁 **Project Structure**
.
├── Jenkinsfile
├── Dockerfile
├── app.js
├── package.json
├── prometheus.yml
└── README.md

✅ **Outcome**

✔ Fully automated CI/CD pipeline
✔ Dockerized application deployment
✔ Real-time infrastructure and container monitoring
✔ Resume-ready DevOps project

👨‍💻 Author
Praveen Kumaran
