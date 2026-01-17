pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "praveenkumaran46/nodejs-capstone"
        DOCKER_TAG = "latest"
    }

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
                sh 'docker build -t $DOCKER_IMAGE:$DOCKER_TAG .'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh '''
                    echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
                    docker push $DOCKER_IMAGE:$DOCKER_TAG
                    '''
                }
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                docker stop nodejs-app || true
                docker rm nodejs-app || true
                docker run -d -p 80:3000 --name nodejs-app $DOCKER_IMAGE:$DOCKER_TAG
                '''
            }
        }
    }
}

