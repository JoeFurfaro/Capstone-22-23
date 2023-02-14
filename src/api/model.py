from result import Object, Result
from PIL import Image, ImageDraw
from loadTensorFlowLobe import TFModel

import random

def run(image):
    """Processes an input image using our trained ImageNet model
    and outputs a processed image with bounding boxes drawn and a
    list of the associated annotation

    image : An image in the PIL image format
    returns a result of type Result
    """
    original = image.copy()

    downSize = image.resize((32, 32))

    model = TFModel()
    outputs = model.predict(downSize)

    return Result(original, image, outputs)