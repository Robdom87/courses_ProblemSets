import csv
import sys


def main():

    # TODO: Check for command-line usage
    if len(sys.argv) != 3:
        sys.exit("Usage: python dna.py data.csv sequence.txt") #sys.exit is usefult as it end the program if it is activated

    # TODO: Read database file into a variable
    Data_Base = []
    with open(sys.argv[1]) as DB:
        DB_Reader = csv.DictReader (DB)
        for row in DB_Reader:
            Data_Base.append(row)

    # TODO: Read DNA sequence file into a variable
    with open(sys.argv[2]) as Sqnc:
        Sqnc_Reader = Sqnc.read() #this read function just pulls info from the text file as a string



    # TODO: Find longest match of each STR in DNA sequence
    counts = {}  #curly brackers means its a dictionary

    for subseq_str in DB_Reader.fieldnames[1:]:# why does this only work with DBreadr straight from the csv dict reader # so for new variable subsequest string, counts subsequent string with filed names after the first one, will repeat by the amount iof names
        counts[subseq_str]= longest_match(Sqnc_Reader, subseq_str) # will then use that same substring as the keey in the counts dictionary and equal that indexed vaue to the longest match

    # TODO: Check database for matching profiles
    for row in Data_Base: # row through every row in the database
        if all(counts[subseq_str]==int(row[subseq_str]) for subseq_str in counts): # all basically checks all columns in a dictionary, but if all in the counts dictionary matches the same sub string in the database for each subsequent sting in counts
            print(row["name"]) #then print database name
            return
    else:
        print("No Match")




    return


def longest_match(sequence, subsequence):
    """Returns length of longest run of subsequence in sequence."""

    # Initialize variables
    longest_run = 0
    subsequence_length = len(subsequence)
    sequence_length = len(sequence)

    # Check each character in sequence for most consecutive runs of subsequence
    for i in range(sequence_length):

        # Initialize count of consecutive runs
        count = 0

        # Check for a subsequence match in a "substring" (a subset of characters) within sequence
        # If a match, move substring to next potential match in sequence
        # Continue moving substring and checking for matches until out of consecutive matches
        while True:

            # Adjust substring start and end
            start = i + count * subsequence_length
            end = start + subsequence_length

            # If there is a match in the substring
            if sequence[start:end] == subsequence:
                count += 1

            # If there is no match in the substring
            else:
                break

        # Update most consecutive matches found
        longest_run = max(longest_run, count)

    # After checking for runs at each character in seqeuence, return longest run found
    return longest_run


main()
