from testLib import *

print("2.1 Image Aspect Ratio Constraint Test Cases", end="\n\n")

t1 = Test("400px x 100px image meeting all other upload constraints", "aspect_wide.png", 400)
t2 = Test("100px x 400px image meeting all other upload constraints", "aspect_tall.png", 400)
t3 = Test("100px x 100px image meeting all other upload constraints", "aspect_good.png", 200)

runTests([t1,t2,t3])

print()
print("2.2 Image File Type Constraint Test Cases", end="\n\n")

t1 = Test("file_type.txt meeting all other upload constraints", "file_type.txt", 415)
t2 = Test("file_type.gif meeting all other upload constraints", "file_type.gif", 415)
t3 = Test("file_type.png meeting all other upload constraints", "file_type.png", 200)
t4 = Test("file_type.jpeg meeting all other upload constraints", "file_type.jpeg", 200)
t5 = Test("file_type.jpg meeting all other upload constraints", "file_type.jpg", 200)

runTests([t1,t2,t3,t4,t5])