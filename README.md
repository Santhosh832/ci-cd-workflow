
# 🚀 Node.js CI/CD Pipeline with GitHub Actions, Jenkins & Docker

A hands-on DevOps project demonstrating **Continuous Integration and Continuous Deployment (CI/CD)** for a Node.js application using **GitHub Actions, Jenkins, and Docker**.

This project contains two CI/CD implementations in the same GitHub repository:

* **Task 1:** CI/CD using GitHub Actions + Docker
* **Task 2:** CI/CD using Jenkins + Docker

The purpose of this project is to understand how modern DevOps tools can automate application building, containerization, and deployment.

---

## 📌 Project Overview

The application is a simple Node.js web application containerized using Docker.

Two separate CI/CD pipelines were implemented:

```text
                    GitHub Repository
                           │
                           │
              ┌────────────┴────────────┐
              │                         │
              ▼                         ▼
       GitHub Actions                Jenkins
          Task 1                     Task 2
              │                         │
              ▼                         ▼
       Docker Build                Docker Build
              │                         │
              ▼                         ▼
       Docker Image               Docker Image
              │                         │
              ▼                         ▼
          Deployment               Deployment
```

---

# 🛠️ Technologies Used

| Technology     | Purpose                       |
| -------------- | ----------------------------- |
| Node.js        | Application runtime           |
| Docker         | Application containerization  |
| Git            | Version control               |
| GitHub         | Source code management        |
| GitHub Actions | CI/CD automation – Task 1     |
| Jenkins        | CI/CD automation – Task 2     |
| Docker Hub     | Container image registry      |
| PowerShell     | Local development environment |

---

# 📂 Project Structure

```text
ci-cd-nodejs-app/
│
├── .github/
│   └── workflows/
│       └── docker-build.yml
│
├── Dockerfile
├── .dockerignore
├── Jenkinsfile
├── README.md
├── package.json
├── package-lock.json
└── server.js
```

---

# 🎯 Task 1 — GitHub Actions CI/CD

## Objective

Automate the application build and Docker image creation using **GitHub Actions**.

## CI/CD Flow

```text
Developer
    │
    ▼
Git Push
    │
    ▼
GitHub Repository
    │
    ▼
GitHub Actions
    │
    ├── Checkout Code
    ├── Setup Node.js
    ├── Install Dependencies
    ├── Build Docker Image
    └── Push Docker Image
    │
    ▼
Docker Hub
```

## GitHub Actions Workflow

The workflow is stored at:

```text
.github/workflows/docker-build.yml
```

The workflow automatically runs when changes are pushed to the repository.

### Main Steps

1. Checkout source code
2. Set up Node.js
3. Install application dependencies
4. Build the Docker image
5. Authenticate with Docker Hub
6. Push the image to Docker Hub

---

# 🎯 Task 2 — Jenkins CI/CD

## Objective

Create a Jenkins pipeline to automatically build and deploy the Node.js application using Docker.

## Jenkins Pipeline Flow

```text
GitHub
   │
   ▼
Jenkins
   │
   ├── Checkout
   │
   ├── Build Docker Image
   │
   ├── Stop Previous Container
   │
   └── Deploy New Container
   │
   ▼
Docker
   │
   ▼
Node.js Application
```

---

## Jenkinsfile

The Jenkins pipeline is defined in:

```text
Jenkinsfile
```

### Pipeline Stages

### 1. Checkout

Jenkins pulls the source code from the `main` branch.

```groovy
stage('Checkout') {
    steps {
        git branch: 'main',
            url: 'https://github.com/Santhosh832/ci-cd-workflow.git'
    }
}
```

### 2. Build Docker Image

```groovy
stage('Build Docker Image') {
    steps {
        sh 'docker build -t ci-cd-nodejs-app:jenkins .'
    }
}
```

### 3. Stop Previous Container

```groovy
stage('Stop Old Container') {
    steps {
        sh 'docker stop jenkins-nodejs-app || true'
        sh 'docker rm jenkins-nodejs-app || true'
    }
}
```

### 4. Deploy Application

```groovy
stage('Deploy Application') {
    steps {
        sh 'docker run -d --name jenkins-nodejs-app -p 3001:3000 ci-cd-nodejs-app:jenkins'
    }
}
```

---

# 🐳 Docker

The Node.js application is packaged using Docker.

### Build Image

```bash
docker build -t ci-cd-nodejs-app .
```

### Run Container

```bash
docker run -d -p 3000:3000 ci-cd-nodejs-app
```

The application listens on:

```text
Container Port: 3000
```

For the Jenkins deployment:

```text
Host Port: 3001
Container Port: 3000
```

Application:

```text
http://localhost:3001
```

---

# ⚙️ Jenkins Environment

Jenkins was configured using Docker.

### Jenkins Dashboard

```text
http://localhost:8081
```

### Jenkins Pipeline Job

```text
ci-cd-nodejs-jenkins
```

### Application

```text
http://localhost:3001
```

Jenkins uses a Docker-in-Docker environment to build and deploy the application container.

```text
Jenkins
   │
   ▼
Docker-in-Docker
   │
   ▼
ci-cd-nodejs-app:jenkins
   │
   ▼
jenkins-nodejs-app
```

---

# ✅ Pipeline Verification

The Jenkins pipeline completed successfully with:

```text
Finished: SUCCESS
```

The deployed container can be verified using:

```powershell
docker exec jenkins-docker docker ps
```

Expected container:

```text
jenkins-nodejs-app
```

Port mapping:

```text
3001 → 3000
```

---

# 🌐 Application Output

After successful deployment, the application displays:

```text
CI/CD Deployment Successful 🚀

Node.js + Docker + GitHub Actions + Docker Hub + AWS EC2
```

---

# 🔄 CI/CD Comparison

| Feature                | Task 1         | Task 2      |
| ---------------------- | -------------- | ----------- |
| CI/CD Tool             | GitHub Actions | Jenkins     |
| Source Control         | GitHub         | GitHub      |
| Containerization       | Docker         | Docker      |
| Docker Image           | Yes            | Yes         |
| Automated Build        | Yes            | Yes         |
| Deployment             | Docker         | Docker      |
| Pipeline Configuration | YAML           | Jenkinsfile |
| Pipeline as Code       | Yes            | Yes         |

---

# 🧠 DevOps Concepts Practiced

This project provided hands-on experience with:

* CI/CD
* Git and GitHub
* GitHub Actions
* Jenkins
* Jenkins Pipeline
* Jenkinsfile
* Docker
* Dockerfile
* Docker image creation
* Docker containers
* Docker Hub
* Docker-in-Docker
* Port mapping
* Pipeline troubleshooting
* Application deployment
* Infrastructure automation

---

# 🐛 Troubleshooting Experience

During the project, several real-world DevOps issues were encountered and resolved, including:

### Jenkins Port Conflict

Jenkins was configured on:

```text
8081 → 8080
```

### Docker-in-Docker Networking

The Jenkins Docker daemon required proper network and port configuration.

### Application Port Exposure

The application was deployed internally through Docker-in-Docker and required port forwarding to make it accessible from the Windows host.

### Git Synchronization

Local and remote Git histories were synchronized using Git rebase before pushing changes.

These troubleshooting steps provided practical experience with debugging CI/CD infrastructure.

---

# 📈 Future Improvements

The project can be extended with:

* GitHub Webhook → Jenkins automatic triggering
* Docker Hub automated image publishing from Jenkins
* Automated unit testing
* SonarQube integration
* Trivy security scanning
* AWS EC2 deployment
* Kubernetes deployment
* Prometheus monitoring
* Grafana dashboards
* Slack notifications
* Email notifications
* Blue-Green deployment
* Rolling deployment
* Automated rollback

---

# 🔗 GitHub Repository

**Repository:**

https://github.com/Santhosh832/ci-cd-workflow

---

# 👨‍💻 Author

**C. Santhosh**

B.Tech – Information Technology

Aspiring DevOps Engineer

GitHub:

https://github.com/Santhosh832

---

# ⭐ Project Status

```text
Task 1 — GitHub Actions CI/CD       ✅ COMPLETED
Task 2 — Jenkins + Docker CI/CD     ✅ COMPLETED
Docker Containerization              ✅ COMPLETED
Jenkins Deployment                   ✅ COMPLETED
GitHub Integration                   ✅ COMPLETED
```

## 🚀 Overall Status: COMPLETED
