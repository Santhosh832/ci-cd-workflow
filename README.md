# Node.js CI/CD Pipeline with Docker & GitHub Actions

## 📌 Project Overview

This project demonstrates a basic **CI/CD pipeline for a Node.js application** using **GitHub Actions and Docker**.

Whenever new code is pushed to the `main` branch, GitHub Actions automatically:

1. Checks out the source code
2. Logs in securely to Docker Hub
3. Builds a Docker image
4. Pushes the Docker image to Docker Hub

This project demonstrates practical DevOps concepts including **Git, GitHub, Docker, containerization, CI/CD, GitHub Actions, and Docker Hub**.

---

## 🏗️ Architecture

```text
Developer
    │
    │ git push
    ▼
GitHub Repository
    │
    │ GitHub Actions Trigger
    ▼
GitHub Actions
    │
    ├── Checkout Source Code
    │
    ├── Docker Hub Login
    │
    ├── Build Docker Image
    │
    └── Push Docker Image
    │
    ▼
Docker Hub
    │
    │ docker pull
    ▼
Docker Container
    │
    ▼
Node.js Application
```

---

## 🛠️ Technologies Used

| Technology     | Purpose                      |
| -------------- | ---------------------------- |
| Node.js        | Application runtime          |
| npm            | Package management           |
| Git            | Version control              |
| GitHub         | Source code repository       |
| Docker         | Application containerization |
| Docker Hub     | Docker image registry        |
| GitHub Actions | CI/CD automation             |

---

## 📁 Project Structure

```text
node-cicd-app/
│
├── .github/
│   └── workflows/
│       └── docker-build.yml
│
├── .dockerignore
├── .gitignore
├── Dockerfile
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

---

## 🚀 Application Setup

### Prerequisites

Install the following:

* Node.js
* npm
* Git
* Docker
* GitHub account
* Docker Hub account

---

## ▶️ Run the Application Locally

Clone the repository:

```bash
git clone https://github.com/Santhosh832/ci-cd-workflow.git
```

Go to the project directory:

```bash
cd ci-cd-workflow
```

Install dependencies:

```bash
npm install
```

Start the application:

```bash
node server.js
```

Open your browser:

```text
http://localhost:3000
```

---

## 🐳 Run with Docker

### Build the Docker image

```bash
docker build -t node-cicd-app:latest .
```

### Run the container

```bash
docker run -d -p 3000:3000 --name node-cicd-container node-cicd-app:latest
```

Open:

```text
http://localhost:3000
```

### Check running containers

```bash
docker ps
```

### View container logs

```bash
docker logs node-cicd-container
```

### Stop the container

```bash
docker stop node-cicd-container
```

### Remove the container

```bash
docker rm node-cicd-container
```

---

# 🔄 CI/CD Pipeline

The CI/CD workflow is located at:

```text
.github/workflows/docker-build.yml
```

The workflow is triggered whenever code is pushed to the `main` branch.

```yaml
on:
  push:
    branches:
      - main
```

### Pipeline Steps

#### 1. Checkout Code

GitHub Actions retrieves the latest source code.

```yaml
uses: actions/checkout@v4
```

#### 2. Login to Docker Hub

Docker Hub credentials are stored as GitHub repository secrets.

```text
DOCKERHUB_USERNAME
DOCKERHUB_TOKEN
```

The credentials are not hard-coded in the workflow.

#### 3. Build Docker Image

GitHub Actions builds the Docker image using the project's `Dockerfile`.

#### 4. Push Image to Docker Hub

The generated image is pushed to:

```text
YOUR_DOCKERHUB_USERNAME/node-cicd-app:latest
```

---

## 🔐 GitHub Secrets

The following repository secrets are required:

```text
DOCKERHUB_USERNAME
DOCKERHUB_TOKEN
```

### DOCKERHUB_USERNAME

Your Docker Hub username.

### DOCKERHUB_TOKEN

A Docker Hub Personal Access Token used by GitHub Actions for authentication.

**Never commit credentials, passwords, or access tokens to the repository.**

---

## 📦 Docker Image

After a successful GitHub Actions run, the Docker image is available in Docker Hub.

Pull the image using:

```bash
docker pull YOUR_DOCKERHUB_USERNAME/node-cicd-app:latest
```

Run it:

```bash
docker run -d -p 3000:3000 YOUR_DOCKERHUB_USERNAME/node-cicd-app:latest
```

---

## ✅ CI/CD Workflow Result

A successful workflow should show:

```text
✓ Checkout code
✓ Log in to Docker Hub
✓ Build and push Docker image
```

The Docker image is then available in Docker Hub.

---

## 🎯 DevOps Concepts Demonstrated

This project demonstrates:

* Git version control
* GitHub repository management
* Git branching
* Dockerfile creation
* Docker image creation
* Docker containers
* Docker Hub image registry
* GitHub Actions
* CI/CD automation
* GitHub Secrets
* Automated Docker image publishing

---

## 🔮 Future Improvements

The pipeline can be extended to include:

* Automated deployment to AWS EC2
* AWS ECR
* Kubernetes deployment
* Docker Compose
* Infrastructure provisioning with Terraform
* Automated testing
* Security scanning
* Prometheus monitoring
* Grafana dashboards
* Blue/Green deployment
* Production and development environments

---

## 👨‍💻 Author

**C. Santhosh**

B.Tech – Information Technology

GitHub:
https://github.com/Santhosh832

---

## 📄 License

This project is created for learning and demonstrating DevOps and CI/CD practices.
