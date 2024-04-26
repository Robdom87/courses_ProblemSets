import cs50

CC = cs50.get_int("Credit Card Number (No Hyphens): ")


def Algorithm (CC):
    sum = 0
    CC = int (CC)
    if CC < 0:
        return False
        print("INVALID")
    else:
        CC = str (CC)
        for i in range(len(CC)):
            CC = int (CC)
            if i % 2 == 0: #looks for even i, i starts at zero
                sum += CC % 10 #will pull the  first digit
            else:
                digit = 2 * (CC % 10)
                sum +=  digit//10 + digit%10
            CC =  CC // 10
    if sum%10 == 0:
        return True
    else:
        return False
        print("INVALID")



#get first few numbers


#will do if and statements first
if Algorithm(CC) == True:
    CC = str(CC)
    V = CC[0]
    A = CC[:-13]
    M = CC[:-14]

    V = int(V)
    A = int(A)
    M = int(M)
    if (len(CC)==13 or len (CC)==16) and V == 4:
        print("VISA")
    elif len(CC)==15 and (A == 34 or A == 37):
        print("AMEX")
    elif len(CC)==16 and (M == 51 or M == 52 or M == 53 or M == 54 or M == 55):
        print("MASTER")
    else:
        print("INVALID")
else:
    print("INVALID")





