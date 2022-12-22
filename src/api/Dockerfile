FROM python:3.8-slim-buster

WORKDIR /alg

RUN pip3 install flask Pillow

COPY . .


CMD [ "python3", "-m", "flask", "run", "--host=0.0.0.0" ]