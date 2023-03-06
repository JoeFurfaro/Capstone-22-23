# 2022-23 Capstone Project
This repository will act as the home for our source code and submissions for our 2022-23 Capstone project for COMPSCI 4ZP6 at McMaster University.

## Group Members
- Tinson Chen (MACID: chenc160)
- Nihal Azavedo (MACID: azavedon)
- Joe Furfaro (MACID: furfaroj)

## How to Run the Demo
1. Install `docker` and `docker-compose` (more info on [their website](https://www.docker.com/))
2. Navigate into the `src` folder using `cd src`
3. Build the project using `docker-compose build`
4. Run an instance of the containerized application using `docker-compose up`
5. View the live application demo in your browser at `http://localhost`

*Note: make sure port 80 is free on your machine before running the demo!*

## How to Run the Automated Tests
1. Install `python` ([more info here](https://python.org))
2. Install the Python `requests` library by running `pip install requests`
3. Run the demo via Docker (see steps in above section)
4. Navigate to `src/test` using `cd src/test`
5. Run the test file by running `python test.py`
6. Observe test results in the program's output