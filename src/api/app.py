from flask import Flask, jsonify, request
from model import run
from flask_cors import cross_origin
import json
from PIL import Image
from io import BytesIO
import base64

app = Flask(__name__)

@app.route('/process', methods=["POST"])
@cross_origin()
def runImageNet():
    """Web endpoint for processing a single image using our model,
    and returning a single result including the original image, a postprocessed
    image, and a list of detected objects and their locations
    """
    image = request.json["image"]
    noPrefix = image.split(",")[1]
    im = Image.open(BytesIO(base64.b64decode(noPrefix)))

    result = run(im).json() # Run the image through the model
    resp = jsonify(result) # Convert result to JSON
    return resp