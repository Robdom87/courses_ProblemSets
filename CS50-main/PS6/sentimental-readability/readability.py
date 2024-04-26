# TODO
import cs50

def main():

    text = cs50.get_string("Text: ")

    #pull number of letter
    #numbers of words
    #pull number of sentences

    L = 100*(letters(text)/words(text))
    S = 100*(sentences(text)/words(text))
    level = round((0.0588 * L) - (0.296 * S) - 15.8)

    if level < 1:
        print("Before Grade 1")
    elif level > 16:
        print("Grade 16+")
    else:
        print(f"Grade {level}")


def letters(text):
    l= 0
    for i in range(len(text)):
        if text[i].isalpha():
            l += 1
    return l

def words(text):
    w = 0
    for i in range(len(text)):
        if(text[i] == ' '):
            w += 1
    return w

def sentences(text):
    s = 0
    for i in range(len(text)):
        if text[i] =='.' or text[i] =='!' or text[i] =='?':
            s += 1
    return s


if __name__ == "__main__":
    main()

