i = 10
p = [i]  # Use a list to simulate pointer-like behavior
print(p)

# Pointer arithmetic doesn't exist in Python, but we can mimic the logic
p_offset = 2  # Simulate p = p + 2
print(f"Pointer offset: {p_offset}")

p_offset -= 2  # Simulate p = p - 2
print(f"Pointer reset offset: {p_offset}")

d = 102.3
dp = [d]  # Simulate pointer behavior for a double
print(dp)

# Simulate dp++
dp_offset = 1
print(f"Pointer increment: {dp_offset}")
