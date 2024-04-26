# TODO
import cs50

N = cs50.get_int("Height: ")

while N < 1 or N > 8:
    N = cs50.get_int("Height: ")

if N == 1:
    print("#  #")

if N == 2:
    print(" #  #")
    print("##  ##")
