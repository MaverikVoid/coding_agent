def find_second_largest(numbers):
    """
    Find the second largest distinct number in a list.
    
    Args:
        numbers: List of numbers (int or float)
    
    Returns:
        The second largest distinct number, or None if it doesn't exist
    """
    # Remove duplicates by converting to set and back to list
    distinct_numbers = list(set(numbers))
    
    # Check if we have at least two distinct numbers
    if len(distinct_numbers) < 2:
        return None
    
    # Sort in descending order
    distinct_numbers.sort(reverse=True)
    
    # Return the second largest (index 1)
    return distinct_numbers[1]


# Test cases
test_lists = [
    [1, 2, 3, 4, 5],  # Normal case
    [5, 5, 5, 5, 5],  # All duplicates
    [10],  # Single element
    [3, 3, 2, 2, 1, 1],  # Multiple duplicates
    [7.5, 3.2, 7.5, 9.1, 9.1],  # Float values with duplicates
    [-5, -1, -3, -1, -5],  # Negative numbers
    []  # Empty list
]

# Execute and print results
for i, test_list in enumerate(test_lists):
    result = find_second_largest(test_list)
    print(f"Test {i+1}: {test_list}")
    if result is None:
        print(f"  Result: No second largest distinct number exists")
    else:
        print(f"  Result: {result}")
    print()