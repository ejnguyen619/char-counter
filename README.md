# Coding Challenge: Character Counter

## Scenario

A spy is trying to decrypt an encrypted code and
needs a tool that lets them count the number of times a
character appears in the text. Help them build a dashboard
that uses a fast character counting algorithm that displays
the number of characters in the text and the 5 most
frequent characters.

## Requirements

- Uses text area of any length
- Count and display number of times each character appeared in the text
- Character and counts displayed based on insertion order
- Highlight top five most frequent characters in text

## Edge Cases/Notes

- Empty text prints error message
- Most frequent characters can be less than 5 depending on input
- Count white spaces as a character
- IF multiple characters compete for top 5, priority is given based on insertion order
