#include <cs50.h>
#include <stdio.h>

int collatz (int n);
int counter = 0;


int main (void)
{
    printf("it was done %i times!\n", collatz (27));
}

int collatz (int n)
{
    if ( n== 1)
    {
        return 0;
    }
    else if (n%2 != 0) //odd
    {
        n = (3*n) + 1;
        counter++;
        collatz (n);
    }
    else if (n%2 == 0) // even
    {
        n = n/2;
        counter++;
        collatz (n);
    }
    return counter;
}
