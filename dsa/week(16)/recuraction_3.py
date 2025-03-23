def get_string(d):
    switcher = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    }
    return switcher.get(d, "")

def keypad(input_num):
    
    if input_num == 0:
        return [""]

    last_digit = input_num % 10
    small_number = input_num // 10
    small_output = keypad(small_number)

    options = get_string(last_digit)
    total_combinations = []

    for option in options:
        for small_combination in small_output:
            total_combinations.append(small_combination + option)

    return total_combinations

def print_subsequences(input_str, output=""):
    
    if not input_str:
        print(output)
        return

    # Exclude the first character
    print_subsequences(input_str[1:], output)
    # Include the first character
    print_subsequences(input_str[1:], output + input_str[0])

def subsequences(input_str):
    """Function to return all subsequences of a string."""
    if not input_str:
        return [""]

    small_string = input_str[1:]
    small_output = subsequences(small_string)

    total_subsequences = []
    for small_subsequence in small_output:
        total_subsequences.append(small_subsequence)
        total_subsequences.append(input_str[0] + small_subsequence)

    return total_subsequences

def main():
    # Test Keypad Problem
    n = int(input("Enter a number for keypad combinations: "))
    keypad_output = keypad(n)
    print("Keypad Combinations:")
    for combination in keypad_output:
        print(combination)

    # Test Subsequence Problem
    input_str = input("Enter a string for subsequences: ")

    # Print subsequences
    print("Subsequences (printed):")
    print_subsequences(input_str)

    # Store and print subsequences
    subsequence_output = subsequences(input_str)
    print("Subsequences (stored):")
    for subsequence in subsequence_output:
        print(subsequence)

if __name__ == "__main__":
    main()
