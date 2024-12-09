# Node.js CI/CD Pipeline

This repository demonstrates a CI/CD pipeline for a Node.js application.

## Features
- Runs tests on pull requests.
- Builds Docker images and deploys to Kubernetes.
- Notifies on deployment success or failure.

## Setup
1. Clone the repository.
2. Add necessary secrets for DockerHub and Slack.
3. Push to `main` to trigger the pipeline.

## Folder Structure
- `src/`: Source code.
- `test/`: Test files.
- `k8s/`: Kubernetes manifests.
- `.github/workflows/`: CI/CD pipeline configuration.

## Commands
- `npm start`: Start the app.
- `npm test`: Run tests.
