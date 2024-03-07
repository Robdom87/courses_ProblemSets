# Problem Set 2, hangman.py
# Name: 
# Collaborators:
# Time spent:

# Hangman Game
# -----------------------------------
# Helper code
# You don't need to understand this helper code,
# but you will have to know how to use the functions
# (so be sure to read the docstrings!)
import random
import string

#remember to be in ps2 folder when running code
WORDLIST_FILENAME = "words.txt"


def load_words():
    """
    Returns a list of valid words. Words are strings of lowercase letters.
    
    Depending on the size of the word list, this function may
    take a while to finish.
    """
    print("Loading word list from file...")
    # inFile: file
    inFile = open(WORDLIST_FILENAME, 'r')
    # line: string
    line = inFile.readline()
    # wordlist: list of strings
    wordlist = line.split()
    print("  ", len(wordlist), "words loaded.")
    return wordlist



def choose_word(wordlist):
    """
    wordlist (list): list of words (strings)
    
    Returns a word from wordlist at random
    """
    return random.choice(wordlist)

# end of helper code

# -----------------------------------

# Load the list of words into the variable wordlist
# so that it can be accessed from anywhere in the program
wordlist = load_words()

def is_word_guessed(secret_word, letters_guessed):
    '''
    secret_word: string, the word the user is guessing; assumes all letters are
      lowercase
    letters_guessed: list (of letters), which letters have been guessed so far;
      assumes that all letters are lowercase
    returns: boolean, True if all the letters of secret_word are in letters_guessed;
      False otherwise
    '''

    secret_letters = []
    secret_letters.extend(secret_word)
    unique_secret = unique(secret_letters)
    for letter in letters_guessed:
      if letter in unique_secret:
        unique_secret.remove(letter)
    if len(unique_secret)>0: return False
    else: return True

def unique(list):
    unique = []
    for elem in list:
      if elem not in unique:
        unique.append(elem)
    return unique

def get_guessed_word(secret_word, letters_guessed):
    '''
    secret_word: string, the word the user is guessing
    letters_guessed: list (of letters), which letters have been guessed so far
    returns: string, comprised of letters, underscores (_), and spaces that represents
      which letters in secret_word have been guessed so far.
    '''
    # FILL IN YOUR CODE HERE AND DELETE "pass"
    guessed_word_list = ["_"] * len(secret_word)
    for i, letter in enumerate(secret_word):
      if letter in letters_guessed:
        guessed_word_list[i] = letter

    return " ".join(guessed_word_list)

def get_available_letters(letters_guessed):
    '''
    letters_guessed: list (of letters), which letters have been guessed so far
    returns: string (of letters), comprised of letters that represents which letters have not
      yet been guessed.
    '''
    # FILL IN YOUR CODE HERE AND DELETE "pass"
    avail_letters = []
    avail_letters.extend(string.ascii_lowercase)
    for letter in letters_guessed:
      if letter in avail_letters:
        avail_letters.remove(letter)
    return ' '.join(avail_letters)

secret_word = "dumbbell"
    
def hangman(secret_word):
    '''
    secret_word: string, the secret word to guess.
    
    Starts up an interactive game of Hangman.
    
    * At the start of the game, let the user know how many 
      letters the secret_word contains and how many guesses s/he starts with.
      
    * The user should start with 6 guesses

    * Before each round, you should display to the user how many guesses
      s/he has left and the letters that the user has not yet guessed.
    
    * Ask the user to supply one guess per round. Remember to make
      sure that the user puts in a letter!
    
    * The user should receive feedback immediately after each guess 
      about whether their guess appears in the computer's word.

    * After each guess, you should display to the user the 
      partially guessed word so far.
    
    Follows the other limitations detailed in the problem write-up.
    '''
    # FILL IN YOUR CODE HERE AND DELETE "pass"
    guesses = 6
    warnings = 3
    letters_guessed = []
    length = len(secret_word)
    score = 0
    avail_letters = []
    guessed_word = ""
    still_guessing = True
    secret_letters = []
    secret_letters.extend(secret_word)
    unique_secret = unique(secret_letters)

    print("Welcome to the game Hangman!")
    print(f"I am thinking of a word that is {length} letters long.")
    print(f"You have {warnings} warnings left.")
    while still_guessing:
      print("-------------")
      print(f"You have {guesses} guesses left.")
      print(f"Available letters: {get_available_letters(letters_guessed)}")
      letter = input("Please guess a letter: ")
      avail_letters = []
      avail_letters.extend(string.ascii_lowercase)
      if (letter not in avail_letters):
        warnings -= 1
        guessed_word = get_guessed_word(secret_word, letters_guessed)
        warnings_message = warning_message(warnings,guesses,guessed_word)
        print(f"Oops! That is not a valid letter.{warnings_message[0]}")
        if(warnings_message[1]== 1):
          guesses -= 1
      elif letter in letters_guessed:
        warnings -= 1
        guessed_word = get_guessed_word(secret_word, letters_guessed)
        warnings_message = warning_message(warnings,guesses, guessed_word)
        print(f"Oops! You've already guessed that letter.{warnings_message[0]}")
        if(warnings_message[1]== 1):
          guesses -= 1
      elif letter not in unique_secret:
        letters_guessed.append(letter)
        reduce_amt = vowel_check(letter)
        guesses -= reduce_amt
        print("Oops! That letter is not in my word.")
      else:
        letters_guessed.append(letter)
        guessed_word = get_guessed_word(secret_word, letters_guessed)
        print(f"Good guess: {guessed_word}")

      if guesses <= 0:
        still_guessing = False
        print("-------------")
        print(f"Sorry, you ran out of guesses. The word was {secret_word}.")
      elif is_word_guessed(secret_word, letters_guessed):
        still_guessing = False
        score = guesses * len(unique(secret_word))
        print("-------------")
        print(f"Congratulations, you won!")
        print(f"Your total score for this game is: {score}")

    # print(f"")
    
def warning_message(warnings, guesses, guessed_word):
  if warnings <= 0:
    return (f'You have no warnings left so you lose one guess: {guessed_word}',1)
  else:
    return (f'You have {warnings} warnings left: {guessed_word}',0)

def vowel_check(letter):
  vowels = ['a','e','i','o','u']
  if letter in vowels:
    return 2
  return 1
    











# When you've completed your hangman function, scroll down to the bottom
# of the file and uncomment the first two lines to test
#(hint: you might want to pick your own
# secret_word while you're doing your own testing)


# -----------------------------------


def match_with_gaps(my_word, other_word):
    '''
    my_word: string with _ characters, current guess of secret word
    other_word: string, regular English word
    returns: boolean, True if all the actual letters of my_word match the 
        corresponding letters of other_word, or the letter is the special symbol
        _ , and my_word and other_word are of the same length;
        False otherwise: 

    '''
    # FILL IN YOUR CODE HERE AND DELETE "pass"
    rem_spaces = my_word.replace(" ", "")
    my_list = []
    other_list = []
    my_list.extend(rem_spaces)
    other_list.extend(other_word)
    if len(rem_spaces) != len(other_word):
      return False
    for i, letter in enumerate(my_list):
      if letter != "_" and letter != other_list[i]:
        # print('hello', letter, i)
        return False
    return True


# word2 = "dumpell"

# print(match_with_gaps(word, word2))

def show_possible_matches(my_word):
    '''
    my_word: string with _ characters, current guess of secret word
    returns: nothing, but should print out every word in wordlist that matches my_word
             Keep in mind that in hangman when a letter is guessed, all the positions
             at which that letter occurs in the secret word are revealed.
             Therefore, the hidden letter(_ ) cannot be one of the letters in the word
             that has already been revealed.

    '''
    # FILL IN YOUR CODE HERE AND DELETE "pass"
    possible_matches = []
    for word in wordlist:
      if match_with_gaps(my_word,word):
        possible_matches.append(word)
    if len(possible_matches) > 0:
      print(' '.join(possible_matches))
    else:
      print("No Matches Found")

word = "d _ _ r"
show_possible_matches(word)
    



def hangman_with_hints(secret_word):
    '''
    secret_word: string, the secret word to guess.
    
    Starts up an interactive game of Hangman.
    
    * At the start of the game, let the user know how many 
      letters the secret_word contains and how many guesses s/he starts with.
      
    * The user should start with 6 guesses
    
    * Before each round, you should display to the user how many guesses
      s/he has left and the letters that the user has not yet guessed.
    
    * Ask the user to supply one guess per round. Make sure to check that the user guesses a letter
      
    * The user should receive feedback immediately after each guess 
      about whether their guess appears in the computer's word.

    * After each guess, you should display to the user the 
      partially guessed word so far.
      
    * If the guess is the symbol *, print out all words in wordlist that
      matches the current guessed word. 
    
    Follows the other limitations detailed in the problem write-up.
    '''
    # FILL IN YOUR CODE HERE AND DELETE "pass"
    pass



# When you've completed your hangman_with_hint function, comment the two similar
# lines above that were used to run the hangman function, and then uncomment
# these two lines and run this file to test!
# Hint: You might want to pick your own secret_word while you're testing.


if __name__ == "__main__":
    pass

    # To test part 2, comment out the pass line above and
    # uncomment the following two lines.
    
    # secret_word = choose_word(wordlist)
    # hangman(secret_word)

###############
    
    # To test part 3 re-comment out the above lines and 
    # uncomment the following two lines. 
    
    #secret_word = choose_word(wordlist)
    #hangman_with_hints(secret_word)
