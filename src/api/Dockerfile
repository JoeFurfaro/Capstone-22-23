FROM python:3.8-slim-buster

WORKDIR /api

RUN pip3 install flask Pillow flask_cors

COPY . .

EXPOSE 5000

CMD [ "python3", "-m", "flask", "run", "--host=0.0.0.0", "-p", "5000" ]