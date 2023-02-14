FROM tensorflow/tensorflow


COPY . .

RUN apt update
RUN apt install python3 python3-pip -y
RUN python3 -m pip install --upgrade pip
RUN python3 -m pip install --upgrade pillow
RUN pip3 install flask Pillow flask_cors numpy


EXPOSE 5000

CMD [ "python3", "-m", "flask", "run", "--host=0.0.0.0", "-p", "5000" ]