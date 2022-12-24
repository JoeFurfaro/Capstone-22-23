from result import Object, Result
from PIL import Image, ImageDraw

def run(image):
    """Processes an input image using our trained ImageNet model
    and outputs a processed image with bounding boxes drawn and a
    list of the associated annotation

    image : An image in the PIL image format
    returns a result of type Result
    """
    original = image.copy()

    # TEST -> Draw a white rectangle in the top left corner of the postprocessed image
    draw = ImageDraw.Draw(image)  
    draw.rectangle([(0, 0), (100, 100)], outline ="#00ff00", width=10) 

    return Result(original, image, ["""Object("Test Class", 37, "#00FF00", (0, 0, 100, 100))"""])