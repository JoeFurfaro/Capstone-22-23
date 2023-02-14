import base64
from io import BytesIO

class Object:
    """Represents a single annotation of a classified object in
    an image. Objects have a class, a confidence %, and a location
    associated with them
    """
    def __init__(self, className, confidence, color, location):
        """Initializes a new object

        className : a string that is the name of a supported object class
        confidence : a float between 0.0 and 100.0 representing the classification confidence
        color : the color of bounding box used to identify the object in the postprocessed image
            represented as a HEX string eg. #00FF00
        location : a tuple of integers (x, y, width, height) in pixels representing the
            bounding box around the classification
        """
        self.className = className
        self.confidence = confidence
        self.location = location
        self.color = color

    def json(self):
        """Exports the object as a dictionary
        """
        return {
            "className": self.className,
            "confidence": self.confidence,
            "color": self.color,
            "location": {
                "x": self.location[0],
                "y": self.location[1],
                "width": self.location[2],
                "height": self.location[3]
            }
        }

class Result:
    """Represents a single result of running an ImageNet detection.
    A result includes the original image, a postprocessed image
    and a list of annotations describing the detected object instances.
    """
    def __init__(self, original, postProcessed, annotations):
        """Initializes a new result

        original : The original unprocessed image in the PIL Image format 
        postProcessed : The post processed, classified image in the PIL Image format
        annotations : A list of Object-type objects representing objects discovered in the image
        """
        self.original = original
        self.postProcessed = postProcessed
        self.annotations = annotations

    def json(self):
        """Exports the result as a dictionary
        """
        bufferedOriginal = BytesIO()
        self.original.save(bufferedOriginal, format="PNG")
        originalB64 = base64.b64encode(bufferedOriginal.getvalue())
        bufferedPostProcessed = BytesIO()
        self.postProcessed.save(bufferedPostProcessed, format="PNG")
        postProcessedB64 = base64.b64encode(bufferedPostProcessed.getvalue())

        return {
            "original": "data:image/png;base64, " + originalB64.decode("utf-8"),
            "postProcessed": "data:image/png;base64, " + postProcessedB64.decode("utf-8"),
            "annotations": self.annotations
        }