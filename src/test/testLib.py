import requests
import base64
import mimetypes

class Test:
    def __init__(self, name, testFileName, expectedResponseCode):
        self.name, self.file, self.code = name, testFileName, expectedResponseCode
        with open(f"inputs/{testFileName}", "rb") as file:
            self.b64 = base64.b64encode(file.read())

def runTests(tests):
    for test in tests:
        mt = mimetypes.guess_type(test.file)[0]
        mt = mt if mt != None else ""
        dataString = f"data:{mt};base64,{test.b64.decode('ascii')}"
        data = {"image": dataString, "type": mt}
        try:
            result = requests.post("http://localhost/process", json=data)
        except:
            print("Cannot connect to Capstone Image Recognition API: are you sure the docker app is running?")
            break

        resText = "FAILED"
        if result.status_code == test.code:
            resText = "PASSED"
        print(f"[{resText}] {test.name}: expected {test.code}, got {result.status_code}")
