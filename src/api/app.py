from flask import Flask, jsonify
from imagenet import run

app = Flask(__name__)

@app.route('/imagenet', methods=["POST", "GET"])
def runImageNet():
    """Web endpoint for processing a single image using our ImageNet model,
    and returning a single result including the original image, a postprocessed
    image, and a list of detected objects and their locations.
    """
    result = run(None).json() # Run the image through the model
    resp = jsonify(result) # Convert result to JSON
    return resp