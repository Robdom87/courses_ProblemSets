# Problem Set 4A
# Name: <your name here>
# Collaborators:
# Time Spent: x:xx

def get_permutations(sequence):
    '''
    Enumerate all permutations of a given string

    sequence (string): an arbitrary string to permute. Assume that it is a
    non-empty string.  

    You MUST use recursion for this part. Non-recursive solutions will not be
    accepted.

    Returns: a list of all permutations of sequence

    Example:
    >>> get_permutations('abc')
    ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']

    Note: depending on your implementation, you may return the permutations in
    a different order than what is listed here.
    '''
    #base case
    if len(sequence) == 1: return sequence
    perms = []
    #return perm list of all but first letter
    rest_perms = get_permutations(sequence[1::])
    # for every permutation in the rest permutations list
    for rest_perm in rest_perms:
        #for every spce before, between, or after each letter in the current permutation
        for i in range(len(sequence)+1):
            permArr = []
            #split string into array
            permArr[:]=rest_perm
            # at index i add the first letter of sequence
            permArr[i:i] = sequence[0]
            # convert list into string
            perm = "".join(permArr)
            #add permutation to permutation list if not already present in list
            if perm not in perms:
                perms.append(perm)
    return perms




    

if __name__ == '__main__':
#    #EXAMPLE
   example_input = 'abc'
   print('Input:', example_input)
   print('Expected Output:', ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'])
   print('Actual Output:', get_permutations(example_input))
    
#    # Put three example test cases here (for your sanity, limit your inputs
#    to be three characters or fewer as you will have n! permutations for a 
#    sequence of length n)

    # pass #delete this line and replace with your code here

