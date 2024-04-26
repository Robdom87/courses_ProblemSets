#include <cs50.h>
#include <stdio.h>

int main(void)
{

bool valid_triangle(int a, int b, int c);

int triangle_side [3];
triangle_side [0] = get_int ("Triangle Side 1: ");
triangle_side [1] = get_int ("Triangle Side 2: ");
triangle_side [2] = get_int ("Triangle Side 3: ");

if ( valid_triangle ( triangle_side [0], triangle_side [1], triangle_side [2]) == 1)
{
    printf("Valid\n");
}
else
{
    printf("Invalid\n");
}
}


bool valid_triangle(int a, int b, int c)
{
    bool valid = 0;
    if ( a > 0 && b > 0 && c > 0 && a + b > c && b + c > a && c + a > b)
    {
        valid = 1;
        return valid;
    }
    else
    {
        valid = 0;
        return valid;
    }
}
