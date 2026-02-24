
# loops in python
#range(startIndex,endIndex,Stepsize)
# range(startIndex)
# range(startIndex,endIndex)
# range(startIndex,endIndex,stepSize)
# startIndex -default - 0
# stepsize - default -1
# 
# 
# 
# 
# 
#  

for x in range(5):
    print(x)

for x in range(1,6):
    print(x)

for x in range(1,11):
    print(x*2)

# for x in range(1,11):
#     print(x*5)

# 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21
for x in range(2,21,2):
    print(x)

for x in range(5,51,5):
    print(x)

for x in range(50,4,-5):
    print(x)

for x in range(30,2,-3):
    print(x)


for x in range(5,0,-1):
    print(x)

# break

for x in range(1,6):
    if x == 3:
        break
    print(x) #1 #2



