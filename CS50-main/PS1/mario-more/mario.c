#include <cs50.h>
#include <stdio.h>

int main(void)
{
    // Looping question that keeps on asking question until an appropriate answer is received
    int n;
    do
    {
        n = get_int ("Height: ");
    }
    while (n < 1 || n > 8);

    //Building both towers

    for ( int i = 0; i < n; i++)
    {
        for ( int e = 0 ; e < n - (i + 1) ; e++)
        {
            printf(" ");
        }
        for ( int e = 0 ; e < i + 1 ; e++)
        {
            printf("#");
        }
        printf("  ");
        for ( int e = 0 ; e < i + 1 ; e++)
        {
            printf("#");
        }
        printf("\n");
    }

}