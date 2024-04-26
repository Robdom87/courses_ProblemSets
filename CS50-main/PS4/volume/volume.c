// Modifies the volume of an audio file

#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>

// Number of bytes in .wav header
const int HEADER_SIZE = 44;

int main(int argc, char *argv[])
{
    // Check command-line arguments
    if (argc != 4)
    {
        printf("Usage: ./volume input.wav output.wav factor\n");
        return 1;
    }

    // Open files and determine scaling factor
    FILE *input = fopen(argv[1], "r"); // why is *input a pointer
    if (input == NULL)
    {
        printf("Could not open file.\n"); // always check for nulls
        return 1;
    }

    FILE *output = fopen(argv[2], "w");
    if (output == NULL)
    {
        printf("Could not open file.\n");
        return 1;
    }

    float factor = atof(argv[3]); // converting a string to a float

    // TODO: Copy header from input file to output file
    uint8_t header [HEADER_SIZE]; //using uint8_t because just encasulates a byte so seeing that the data file should not have its own data type, can be used to create variable just based on data size
    fread(&header, HEADER_SIZE, 1, input); //input and output are the file folders
    fwrite(&header, HEADER_SIZE, 1, output);

    // TODO: Read samples from input file and write updated data to output file
    int16_t bit;

    while(fread(&bit, sizeof(int16_t), 1, input))  //why does the & need to be included now but not before
    {

        bit = factor * bit;
        fwrite(&bit, sizeof(int16_t), 1, output);
    }

    // Close files
    fclose(input);
    fclose(output);
}
