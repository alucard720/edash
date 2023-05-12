pipeline {
  agent {
    node {
      label 'build'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh ''' pipeline{
        agent any
        stages("Build"){
                 steps{
                 sh "sudo npm install"
                  }
 
              }      
}'''
        }
      }

    }
  }