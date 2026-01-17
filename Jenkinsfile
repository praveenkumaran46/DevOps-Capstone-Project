pipeline {
    agent any

    tools {
        nodejs 'node18'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test || true'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t nodejs-app:latest .'
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                docker stop nodejs-app || true
                docker rm nodejs-app || true
                docker run -d -p 3000:3000 --name nodejs-app nodejs-app:latest
                '''
            }
        }
    }
}

