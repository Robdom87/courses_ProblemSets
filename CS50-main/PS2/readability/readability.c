#include <cs50.h>
#include <stdio.h>
#include <string.h>

int count_letters(string text);
int count_words(string text);
int count_sentences(string text);

int main(void)
{
    // request user to input string "Text: "
    string text = get_string ("Text: ");

    // count letters - uppercase or lowercase
    float letters = count_letters (text);
    printf( "%0.f letters\n", letters);

    float words = count_words (text);
    printf( "%0.f words\n", words);

    float sentences = count_sentences (text);
    printf( "%0.f sentences\n", sentences);

    float L = 100*(letters/words);

    float S = 100*(sentences/words);

    float level = (0.0588 * L) - (0.296 * S) - 15.8;

    if ( level < 1)
    {
        printf( "Before Grade 1\n" );
    }
    else if ( level >= 1 && level <= 16)
    {
        printf( "Grade %0.f\n", level );
    }
    else if ( level > 16)
    {
        printf( "Grade 16+\n");
    }
// count words- wordsrun loop that adds 1 to a couneter after every space in a string, specially following any letter or punctuation
//  count sentences - anything that ends with punctuation is a sentenece, counter until a punctuation is found


}

int count_letters(string text)
{
    int length = 0;

    for (int i=0, n = strlen (text); i < n; i++)
    {
        if ((text[i] >= 'A' && text[i] <= 'Z') || (text[i] >= 'a' && text[i] <= 'z'))
        {
            length++;
        }

    }

    return length;
}

int count_words(string text)
{
    int length = 1;

    for (int i=0, n = strlen (text); i < n; i++)
    {
        if (text[i] == ' ')
        {
            length++;
        }

    }

    return length;
}

int count_sentences(string text)
{
    int length = 0;

    for (int i=0, n = strlen (text); i < n; i++)
    {
        if (text[i] == '.' || text[i] == '!' || text[i] == '?')
        {
            length++;
        }

    }

    return length;
}