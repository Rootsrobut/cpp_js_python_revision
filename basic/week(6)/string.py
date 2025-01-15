# Example string
s = "  Hello World!  "

# Basic Methods
print(len(s))                  # Get length of the string: 15
print(s.lower())               # Convert to lowercase: '  hello world!  '
print(s.upper())               # Convert to uppercase: '  HELLO WORLD!  '
print(s.strip())               # Remove leading/trailing whitespace: 'Hello World!'
print(s.lstrip())              # Remove leading whitespace: 'Hello World!  '
print(s.rstrip())              # Remove trailing whitespace: '  Hello World!'

# Search and Match
print(s.find("World"))         # Find index of substring: 8
print(s.rfind("o"))            # Find last index of substring: 9
print(s.index("World"))        # Find index (raises error if not found): 8
print(s.count("o"))            # Count occurrences of a substring: 2
print("World" in s)            # Check if substring is present: True
print("Hello" not in s)        # Check if substring is not present: False
print(s.startswith("  Hello")) # Check if starts with substring: True
print(s.endswith("!  "))       # Check if ends with substring: True

# Extracting and Slicing
print(s[2:7])                  # Extract a slice: 'Hello'
print(s[:5])                   # Slice from start to index 5: '  He'
print(s[-6:])                  # Slice from the end: 'World!  '

# Replace and Modify
print(s.replace("World", "Python"))  # Replace substring: '  Hello Python!  '
print(s.replace("o", "*", 1))        # Replace first occurrence: '  Hell* World!  '
print(s.center(20, "-"))             # Center align with padding: '---  Hello World! ---'
print(s.ljust(20, "-"))              # Left align with padding: '  Hello World!  -------'
print(s.rjust(20, "-"))              # Right align with padding: '-------  Hello World!  '

# Splitting and Joining
words = s.strip().split()            # Split into words: ['Hello', 'World!']
print(words)
print("-".join(words))               # Join with a separator: 'Hello-World!'

# Encoding and Decoding
encoded = s.encode("utf-8")          # Encode string: b'  Hello World!  '
print(encoded)
print(encoded.decode("utf-8"))       # Decode bytes to string: '  Hello World!  '

# Formatting
print("Hello, {}!".format("Python")) # Format string: 'Hello, Python!'
print("The number is {:.2f}".format(3.14159))  # Format with precision: 'The number is 3.14'
print(f"Welcome, {s.strip()}!")      # f-String formatting: 'Welcome, Hello World!'

# Checking Properties
print(s.isalpha())             # Check if all characters are alphabetic: False
print(s.strip().isalpha())     # Check if stripped string is alphabetic: False
print("12345".isdigit())       # Check if all characters are digits: True
print("abc123".isalnum())      # Check if all characters are alphanumeric: True
print("hello".islower())       # Check if all characters are lowercase: True
print("HELLO".isupper())       # Check if all characters are uppercase: True
print("   ".isspace())         # Check if all characters are whitespace: True
print("Hello World".istitle()) # Check if title-cased: True

# Other Methods
print(s.swapcase())            # Swap case of all characters: '  hELLO wORLD!  '
print(s.title())               # Convert to title case: '  Hello World!  '
print(s.capitalize())          # Capitalize first character: '  hello world!  '
print(s.zfill(20))             # Pad with zeros: '00000  Hello World!  '
print("abc".rjust(5, "*"))     # Pad with custom character: '**abc'

# Translating and Removing Characters
table = str.maketrans("Helo", "1234") # Create translation table
print(s.translate(table))      # Apply translation: '  12334 W4r1d!  '

print(s.strip().removeprefix("Hello")) # Remove prefix (Python 3.9+): ' World!'
print(s.strip().removesuffix("!"))     # Remove suffix (Python 3.9+): 'Hello World'

