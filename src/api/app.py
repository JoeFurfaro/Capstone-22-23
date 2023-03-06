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
    # File type check
    mimeType = request.json["type"]
    if mimeType not in ("image/png", "image/jpeg", "image/jpg"):
        resp = jsonify({})
        resp.status = 415
        return resp

    # Open the image
    image = request.json["image"]
    noPrefix = image.split(",")[1]
    decoded = base64.b64decode(noPrefix)
    im = Image.open(BytesIO(decoded))

    # Aspect ratio check
    width, height = im.size
    if width / height > 2 or height / width > 2:
        resp = jsonify({})
        resp.status = 400
        return resp

    result = run(im).json() # Run the image through the model
    resp = jsonify(result) # Convert result to JSON
    return resp