#include "helpers.h"
#include <math.h>

// Convert image to grayscale
void grayscale(int height, int width, RGBTRIPLE image[height][width])
{
    for (int h = 0; h < height; h++)
    {
        for (int w = 0; w < width; w++)
        {
            int average = round((image[h][w].rgbtRed + image[h][w].rgbtGreen + image[h][w].rgbtBlue) / 3.0); // added .0 to make it an integer instead of a float?
            image[h][w].rgbtRed = average;                                                                   // notation used to go to individual sections within a struct
            image[h][w].rgbtGreen = average;
            image[h][w].rgbtBlue = average;
        }
    }
    return;
}

// Convert image to sepia
void sepia(int height, int width, RGBTRIPLE image[height][width])
{
    for (int h = 0; h < height; h++)
    {
        for (int w = 0; w < width; w++)
        {
            int sepiaRed = round(.393 * image[h][w].rgbtRed + .769 * image[h][w].rgbtGreen + .189 * image[h][w].rgbtBlue);
            if (sepiaRed > 255) {
                sepiaRed = 255;
            }
            int sepiaGreen = round(.349 * image[h][w].rgbtRed + .686 * image[h][w].rgbtGreen + .168 * image[h][w].rgbtBlue);
            if (sepiaGreen > 255) {
                sepiaGreen = 255;
            }
            int sepiaBlue = round(.272 * image[h][w].rgbtRed + .534 * image[h][w].rgbtGreen + .131 * image[h][w].rgbtBlue);
            if (sepiaBlue > 255) {
                sepiaBlue = 255;
            }
            image[h][w].rgbtRed = sepiaRed; // notation used to go to individual sections within a struct
            image[h][w].rgbtGreen = sepiaGreen;
            image[h][w].rgbtBlue = sepiaBlue;
        }
    }

    // rounded and capped at 255
    return;
}

void swap(RGBTRIPLE *pixel1, RGBTRIPLE *pixel2) // good example of pointer use
{
    RGBTRIPLE temp = *pixel1;
    *pixel1 = *pixel2;
    *pixel2 = temp;
}

// Reflect image horizontally
void reflect(int height, int width, RGBTRIPLE image[height][width])
{
    // will prep swich currently without pointers to get the jist of it

    for (int h = 0; h < height; h++)
    {
        for (int w = 0; w < width / 2; w++)
        {

            swap(&image[h][w], &image[h][width - 1 - w]);
        }
    }
    return;
}

// Blur image
void blur(int height, int width, RGBTRIPLE image[height][width])
{

    // do the blur calc for middle section of the image not the edges
    //  make all changes in new image so we still have the old image as a reference throughout, then copy at the end, crazy

    RGBTRIPLE new_image;

    for (int h = 1; h < height - 2; h++)
    {
        for (int w = 1; w < width - 2; w++)
        {
            int Red_Average = round((image[h][w].rgbtRed + image[h + 1][w].rgbtRed + image[h + 1][w + 1].rgbtRed + image[h][w + 1].rgbtRed + image[h - 1][w + 1].rgbtRed + image[h - 1][w].rgbtRed + image[h - 1][w - 1].rgbtRed + image[h][w - 1].rgbtRed + image[h + 1][w - 1].rgbtRed) / 9);
            int Green_Average = round((image[h][w].rgbtGreen + image[h + 1][w].rgbtGreen + image[h + 1][w + 1].rgbtGreen + image[h][w + 1].rgbtGreen + image[h - 1][w + 1].rgbtGreen + image[h - 1][w].rgbtGreen + image[h - 1][w - 1].rgbtGreen + image[h][w - 1].rgbtGreen + image[h + 1][w - 1].rgbtGreen) / 9);
            int Blue_Average = round((image[h][w].rgbtBlue + image[h + 1][w].rgbtBlue + image[h + 1][w + 1].rgbtBlue + image[h][w + 1].rgbtBlue + image[h - 1][w + 1].rgbtBlue + image[h - 1][w].rgbtBlue + image[h - 1][w - 1].rgbtBlue + image[h][w - 1].rgbtBlue + image[h + 1][w - 1].rgbtBlue) / 9);

            image[h][w].rgbtRed = Red_Average;
            image[h][w].rgbtGreen = Green_Average;
            image[h][w].rgbtBlue = Blue_Average;
        }
    }

    // do blur calc on the edges - check if H or W are 0 or if they are the heigt or width (account as lesss for one)
    for (int h = 1; h < height - 2; h++)
    {
        for (int w = 1; w < width - 2; w++)
        {
        }
    }
    return;
}
