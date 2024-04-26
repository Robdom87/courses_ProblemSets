#include "helpers.h"
#include <math.h>

// Convert image to grayscale
// take average of average red green and blue and covert the pixel to that for all 3 factors
void grayscale(int height, int width, RGBTRIPLE image[height][width])
{
    for ( int h=0 ; h < height ; h++ )
    {
        for (int w=0 ; w < width ; w++ )
        {
            int average = round ((image[h][w].rgbtRed + image[h][w].rgbtGreen + image[h][w].rgbtBlue)/3.0);//added .0 to make it an integer instead of a float?
            image[h][w].rgbtRed = average; // notation used to go to individual sections within a struct
            image[h][w].rgbtGreen = average;
            image[h][w].rgbtBlue = average;
        }
    }

    return;
}

void swap(RGBTRIPLE* pixel1, RGBTRIPLE* pixel2) //good example of pointer use
{
    RGBTRIPLE temp = *pixel1;
    *pixel1 = *pixel2;
    *pixel2 = temp;
}

// Reflect image horizontally
void reflect(int height, int width, RGBTRIPLE image[height][width])
//split the image in half (vertical cut) then change the pixels the from each extreme to another
// check if the image width is even or odd, will change how you pull from each side
//will need temp place to hold the value of the pixel, as well as use pointers to actually change the contents and not just make a copy
{
    //check if image width is odd or even


//will prep swich currently without pointers to get the jist of it

        for (int h=0 ; h < height; h++ )
        {
        for (int w=0 ; w < width/2 ; w++ )
        {

            swap(&image[h][w], &image[h][width - 1 - w]);

        }
        }
    return;
}

// Blur image
void blur(int height, int width, RGBTRIPLE image[height][width])
{
    //do the blur calc for middle section of the image not the edges
    // make all changes in new image so we still have the old image as a reference throughout, then copy at the end, crazy

    RGBTRIPLE new_image;

    for (int h=1 ; h < height - 2 ; h++ )
        {
        for (int w=1 ; w < width - 2 ; w++ )
        {
            int Red_Average = round ((image[h][w].rgbtRed+image[h+1][w].rgbtRed+image[h+1][w+1].rgbtRed+image[h][w+1].rgbtRed+image[h-1][w+1].rgbtRed+image[h-1][w].rgbtRed+image[h-1][w-1].rgbtRed+image[h][w-1].rgbtRed+image[h+1][w-1].rgbtRed)/9);
            int Green_Average = round ((image[h][w].rgbtGreen+image[h+1][w].rgbtGreen+image[h+1][w+1].rgbtGreen+image[h][w+1].rgbtGreen+image[h-1][w+1].rgbtGreen+image[h-1][w].rgbtGreen+image[h-1][w-1].rgbtGreen+image[h][w-1].rgbtGreen+image[h+1][w-1].rgbtGreen)/9);
            int Blue_Average = round ((image[h][w].rgbtBlue+image[h+1][w].rgbtBlue+image[h+1][w+1].rgbtBlue+image[h][w+1].rgbtBlue+image[h-1][w+1].rgbtBlue+image[h-1][w].rgbtBlue+image[h-1][w-1].rgbtBlue+image[h][w-1].rgbtBlue+image[h+1][w-1].rgbtBlue)/9);

            image[h][w].rgbtRed = Red_Average;
            image[h][w].rgbtGreen = Green_Average;
            image[h][w].rgbtBlue = Blue_Average;

        }
        }

    //do blur calc on the edges - check if H or W are 0 or if they are the heigt or width (account as lesss for one)
    for (int h=1 ; h < height - 2 ; h++ )
        {
        for (int w=1 ; w < width - 2 ; w++ )
        {}
        }
}

// Detect edges
void edges(int height, int width, RGBTRIPLE image[height][width])
{
// detect edges for the middle section
    for (int h=1 ; h < height - 2 ; h++ )
        {
        for (int w=1 ; w < width - 2 ; w++ )
        {
            //multiply all the values by the amounts in the grid
             // then sum all of them.
            int Red_Gx = (image[h][w].rgbtRed*0+image[h+1][w].rgbtRed*0+image[h+1][w+1].rgbtRed*1+image[h][w+1].rgbtRed*2+image[h-1][w+1].rgbtRed*1+image[h-1][w].rgbtRed*0+image[h-1][w-1].rgbtRed*-1+image[h][w-1].rgbtRed*-2+image[h+1][w-1].rgbtRed*-1);
            int Red_Gy = (image[h][w].rgbtRed*0+image[h+1][w].rgbtRed*-2+image[h+1][w+1].rgbtRed*-1+image[h][w+1].rgbtRed*0+image[h-1][w+1].rgbtRed*1+image[h-1][w].rgbtRed*2+image[h-1][w-1].rgbtRed*1+image[h][w-1].rgbtRed*0+image[h+1][w-1].rgbtRed*-1);

            int Green_Gx = (image[h][w].rgbtGreen*0+image[h+1][w].rgbtGreen*0+image[h+1][w+1].rgbtGreen*1+image[h][w+1].rgbtGreen*2+image[h-1][w+1].rgbtGreen*1+image[h-1][w].rgbtGreen*0+image[h-1][w-1].rgbtGreen*-1+image[h][w-1].rgbtGreen*-2+image[h+1][w-1].rgbtGreen*-1);
            int Green_Gy = (image[h][w].rgbtGreen*0+image[h+1][w].rgbtGreen*-2+image[h+1][w+1].rgbtGreen*-1+image[h][w+1].rgbtGreen*0+image[h-1][w+1].rgbtGreen*1+image[h-1][w].rgbtGreen*2+image[h-1][w-1].rgbtGreen*1+image[h][w-1].rgbtGreen*0+image[h+1][w-1].rgbtGreen*-1);

            int Blue_Gx = (image[h][w].rgbtBlue*0+image[h+1][w].rgbtBlue*0+image[h+1][w+1].rgbtBlue*1+image[h][w+1].rgbtBlue*2+image[h-1][w+1].rgbtBlue*1+image[h-1][w].rgbtBlue*0+image[h-1][w-1].rgbtBlue*-1+image[h][w-1].rgbtBlue*-2+image[h+1][w-1].rgbtBlue*-1);
            int Blue_Gy = (image[h][w].rgbtBlue*0+image[h+1][w].rgbtBlue*-2+image[h+1][w+1].rgbtBlue*-1+image[h][w+1].rgbtBlue*0+image[h-1][w+1].rgbtBlue*1+image[h-1][w].rgbtBlue*2+image[h-1][w-1].rgbtBlue*1+image[h][w-1].rgbtBlue*0+image[h+1][w-1].rgbtBlue*-1);


            // apply sobel Gx^2 + Gy^2 and round to integer
            int Red_Sobel = round (sqrt(Red_Gx*Red_Gx + Red_Gy*Red_Gy));
            int Green_Sobel = round (sqrt(Green_Gx*Green_Gx + Green_Gy*Green_Gy));
            int Blue_Sobel = round (sqrt(Blue_Gx*Blue_Gx + Blue_Gy*Blue_Gy));

            // could have set boundary for claing valid pixels - looking if pixel location was within height and widuth
            // could have set array from 3x3 square calculations
            // int Gx[3][3]= {{-1,0,1},{-2,0,2},{-1,0,1}};


            //check if greater than 255, if so, bring down to 255
            if (Red_Sobel > 255)
            {
                Red_Sobel = 255;
            }

            if (Green_Sobel > 255)
            {
                Green_Sobel = 255;
            }

            if (Blue_Sobel > 255)
            {
                Blue_Sobel = 255;
            }


            //then replace the pixel info with the amount calculated
            image[h][w].rgbtRed = Red_Sobel;
            image[h][w].rgbtGreen = Green_Sobel;
            image[h][w].rgbtBlue = Blue_Sobel;
        }
        }
    return;
}
//need to dos
// update edges and blur to average red blue and green individually not just the whole thing
