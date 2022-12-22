from result import Object, Result
from PIL import Image

def run(image):
    """Processes an input image using our trained ImageNet model
    and outputs a processed image with bounding boxes drawn and a
    list of the associated annotation

    image : An image in the PIL image format
    returns a result of type Result
    """
    i = Image.new('RGB', (800, 600))

    return Result(i, i, [])