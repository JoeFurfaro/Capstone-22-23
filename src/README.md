# 2022-23 Capstone Source Code

## General Breakdown
This directory contains all of the source code for our Capstone project. There are three main directories:
- `app`: The frontend interface of our project, and a microservice for serving an optimized compiled version of the interface
- `ml`:  The main app used for training and exporting our image classfication model. All model and training parameters are set here
- `api`: The backend microservice responsible for running our image detection algorithms on user-uploaded photos and videos.

## Design, Framework, and Language Choices
One of our goals for this project was to learn new projects, frameworks, and architectures that would be applicable down the road in our careers. To achieve this goal, we have chosen to take a multi-language, multi-framework microservice approach. At first, this design may seem convoluted, but it enables us to maximize the new skills learned and gained from this project. We have decided to use the following scheme:

### Frontend Systems
- *Main app*: The main app (`app/src/`) will be implemented using the frontend framework Svelte (tbd), which combines JavaScript, HTML, and CSS

### Backend Systems
- *App server*: The app-serving microservice (`app/serve/`) will be implemented using Node JS and Express
- *API processing server*: The processing microservice `api/` will be implemented using Flask, a common Python web microservice framework, and will perform the main ML data processing

### Composition
All microservices will exist in independent Docker containers, and will be composed to run in parallel using `docker-compose`. This will make our system more scalable, and easier to deploy to the internet.
