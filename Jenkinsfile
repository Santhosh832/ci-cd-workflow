pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Santhosh832/ci-cd-workflow.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t ci-cd-nodejs-app:jenkins .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh 'docker stop jenkins-nodejs-app || true'
                sh 'docker rm jenkins-nodejs-app || true'
            }
        }

        stage('Deploy Application') {
            steps {
                sh 'docker run -d --name jenkins-nodejs-app -p 3001:3000 ci-cd-nodejs-app:jenkins'
            }
        }
    }

    post {
        success {
            echo 'CI/CD Pipeline completed successfully!'
            echo 'Application deployed on http://localhost:3001'
        }

        failure {
            echo 'Pipeline failed!'
        }
    }
}