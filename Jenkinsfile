pipeline {
    agent any

    stages {
        stage('Checkout SCM') {
            git branch: 'master', url: 'https://github.com/kossonou93/pharmaplus-web.git'
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build --prod'
            }
            post {
                always {
                    archiveArtifacts artifacts: 'dist/*', fingerprint: true
                }
            }
        }

        stage('Test') {
            steps {
                sh 'npm run test -headless'
            }
            post {
                always {
                    junit 'dist/test-results.xml'
                    jacoco(execPattern: 'dist/**/!(*test*).js', classPattern: '**/!(*test*).js', sourcePattern: 'src/**/*.ts', inclusionPattern: '**/*.*', exclusionPattern: '**/node_modules/**')
                }
            }
        }

        stage('Copy') {
            steps {
                sh 'cp -r dist/* /var/www/pharmaplus-web/html'
            }
        }

        stage('Deploy') {
            steps {
                sh 'npm run deploy'
            }
        }
    }
}
