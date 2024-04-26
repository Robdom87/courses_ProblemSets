#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>
#include <cs50.h> //included to have boolean data type

int main(int argc, char *argv[])
{
    typedef uint8_t  BYTE;      //defining global varaibles within the main function
    const int BLOCK_SIZE = 512;

    //guide created input error that can easily be inputted once calling a file fails as well as for long criteria
    //but will not repeat too much so no real need for it also he made them outside of main
    //dont be afraid to abstract a function into another function, seperating the problems can make them easier to solve

    // Check command-line arguments
    if (argc != 2)
    {
        printf("Usage: ./recover IMAGE\n");
        return 1;
    }

    //Open File
    FILE *file = fopen(argv[1], "r"); //*file is the pointer, argv[1] is the name of the file
    if (file == NULL)
    {
        printf("Could not open file.\n"); // always check for nulls
        return 1;
    }



    //Used to ready every block

    char filename[8]; //creating variable to hold the name of the new files
    FILE* outputPtr = NULL; //creating new file where the pulled information can be inputted to
    //without it the the info in the buffer has no where to go

    int JPG_Count = -1;
    BYTE buffer[BLOCK_SIZE]; //also this is the buffer area where the original raw data willl be opened into
    // need to add block size array if we want to treat it as a an array and look inside it

    while (fread(buffer, sizeof(BYTE), BLOCK_SIZE, file)) //while its running it returns true or 0, but any other number if not running or false
    //must include size of also byte to know what the size of the info its reading - kinda confusing still
    //the while will stop once we reach the end of the data
    //* not needed with file
    {
        if (buffer[0]==0xff && buffer[1] == 0xd8 && buffer[2] == 0xff && (buffer[3] & 0xf0) == 0xe0) //guide summed all this long criteria in a formula
            {
                JPG_Count++;
                if (JPG_Count < 2) //if included so that the first iteration does not need to close the file
                {
                    sprintf(filename, "%03i.jpg", JPG_Count); //file name variable to hold string, %03i tells c to make the interger 3 numbers, and JPG count is what interger to include
                    outputPtr = fopen(filename, "w"); //outputptr file is where the buffer is written into "w"
                    // why doesn he write anything into it tho - maybe because they are just opening them up, once open it goes to the other if and if it is open it is no longer null, so so should just write into into file
                }
                else //for when it isnt the first run
                {
                    fclose(outputPtr);//same thing as above but we close it
                    sprintf(filename, "%03i.jpg", JPG_Count);
                    outputPtr = fopen(filename, "w");
                }
            }
        if (outputPtr!=NULL)//if file open should not be null unless failed
        {
            fwrite(buffer, sizeof(buffer), 1, outputPtr); //inputting what is on buffer to the outputPTr
        }

    }
    fclose(file);
    fclose(outputPtr);
}