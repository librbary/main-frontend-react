# liBRBary - frontend service
[![Build & Deploy Frontend application](https://github.com/librbary/main-frontend-react/actions/workflows/workflow-deploy.yml/badge.svg?branch=develop)](https://github.com/librbary/main-frontend-react/actions/workflows/workflow-deploy.yml)

## liBRBary Application
> liBRBary Website [GitHub Pages](https://librbary.github.io/main-frontend-react).

## Local workspace setup guidelines
* After checking out your feature branch in your local, first install the packages using below command 
``` npm install ```

* To run you project in local, use below command
``` npm start ```

* To buid you application in local, use below command
``` npm run build ```

* For deployment of your changes to **github-pages** from your local, you can use the below command. ***THIS APPROACH IS NOT RECOMMENDED***
``` npm run deploy ```

## CI/CD Pipeline
We are using **github-actions** for continous integration and continous delivery. You can refer the worflows yml to add/update the jobs in the build/deploy workflow yml.
