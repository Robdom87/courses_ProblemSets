#include <cs50.h>
#include <stdio.h>

int main(void)
{
    long CC;
    do
    {
        CC = get_long ("Credit Card Number (No Hyphens): ");
        }
    while ( CC < 0);
    long CC1 = ((CC % 100)/10)*2;
    long CC2 = ((CC % 10000)/1000)*2;
    long CC3 = ((CC % 1000000)/100000)*2;
    long CC4 = ((CC % 100000000)/10000000)*2;
    long CC5 = ((CC % 10000000000)/1000000000)*2;
    long CC6 = ((CC % 1000000000000)/100000000000)*2;
    long CC7 = ((CC % 100000000000000)/10000000000000)*2;
    long CC8 = ((CC % 10000000000000000)/1000000000000000)*2;
    CC1 = ((CC1 % 100)/10) + CC1 % 10;
    CC2 = ((CC2 % 100)/10) + CC2 % 10;
    CC3 = ((CC3 % 100)/10) + CC3 % 10;
    CC4 = ((CC4 % 100)/10) + CC4 % 10;
    CC5 = ((CC5 % 100)/10) + CC5 % 10;
    CC6 = ((CC6 % 100)/10) + CC6 % 10;
    CC7 = ((CC7 % 100)/10) + CC7 % 10;
    CC8 = ((CC8 % 100)/10) + CC8 % 10;
    long CCT = CC1 + CC2 + CC3 + CC4 + CC5 + CC6 + CC7 + CC8;
    long CCN1 = (CC % 10);
    long CCN2 = ((CC % 1000)/100);
    long CCN3 = ((CC % 100000)/10000);
    long CCN4 = ((CC % 10000000)/1000000);
    long CCN5 = ((CC % 1000000000)/100000000);
    long CCN6 = ((CC % 100000000000)/10000000000);
    long CCN7 = ((CC % 10000000000000)/1000000000000);
    long CCN8 = ((CC % 1000000000000000)/100000000000000);
    long CCNT = CCN1 + CCN2 + CCN3 + CCN4 + CCN5 + CCN6 + CCN7 + CCN8;

    long CCTNT = (CCT + CCNT)%10;

    int length = 0;
    long V = CC;
    long A = CC;
    long M = CC;
    // inlcude the long V, A , M at this point before we mess with the CC

     if (CCTNT != 0)
    {
       printf("INVALID\n");
       return 0; //used to stop the program from running
    }

    while (CC > 0)
    {
        CC = CC/10;
        length++;
    }
    // Visa
    while (V >= 10)
    {
        V = V/10;
    }
    if (V == 4 && (length == 13 || length == 16))
    {
        printf("VISA\n");
        return 0;
    }

    // Amex
    A = A/10000000000000;
    if(( A == 34 || A == 37) && length == 15)
    {
        printf("AMEX\n");
        return 0;
    }
    
    //Mastercard
    M = M/100000000000000;
    if( length == 16 && ( M == 51 || M == 52 || M == 53 || M == 54 || M == 55 ))
    {
        printf("MASTERCARD\n");
        return 0;
    }
    else
    {
        printf("INVALID\n");
       return 0;
    }
}
