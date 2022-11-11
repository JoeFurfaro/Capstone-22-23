# 2022-23 Capstone Source Code

## General Breakdown
This directory contains all of the source code for our Capstone project. There are three main directories:
- `app`: The frontend interface of our project, and a microservice for serving an optimized compiled version of the interface
- `api`: The backend root of our project that accepts incoming requests for image and video processing. It forwards requests to the `alg` microservice
- `alg`: The backend microservice responsible for running our image detection algorithms on user-uploaded photos and videos. It processes work requested by the `api` microservice

## Design, Framework, and Language Choices
One of our goals for this project was to learn new projects, frameworks, and architectures that would be applicable down the road in our careers. To achieve this goal, we have chosen to take a multi-language, multi-framework microservice approach. At first, this design may seem convoluted, but it enables us to maximize the new skills learned and gained from this project. We have decided to use the following scheme:

### Frontend Systems
- *Main app*: The main app (`app/src/`) will be implemented using the frontend framework Svelte (tbd), which combines JavaScript, HTML, and CSS

### Backend Systems
- *App server*: The app-serving microservice (`app/serve/`) will be implemented using GoLang
- *API server*: The main API microservice `api/` will be implemented using Express, a common Node.js web microservice framework
- *Algorithm processing servicer*: The processing microservice `alg/` will be implemented using Flash, a common Python web microservice framework, and will perform the main ML data processing

### Composition
All microservices will exist in independent Docker containers, and will be composed to run in parallel using `docker-compose`. This will make our system more scalable, and easier to deploy to the internet.