%{
#include <stdio.h>

int char_count = 0;   // Counter for characters
int word_count = 0;   // Counter for words
int line_count = 0;   // Counter for lines
int blank_count = 0;  // Counter for blanks
int in_word = 0;      // Flag to track if inside a word
%}

%%

\n              { line_count++; char_count++; }  // Increment line and character count for each newline
[ \t]           { blank_count++; char_count++; if (in_word) { word_count++; in_word = 0; } } // Count blanks and end words
.               { char_count++; in_word = 1; }  // Count characters and mark start of a word
%%

int main() {
    printf("Enter input (Ctrl+D to end):\n");
    yylex();  // Start lexical analysis

    if (in_word) word_count++;  // If the last character is part of a word, count it
    printf("Characters: %d\n", char_count);
    printf("Words: %d\n", word_count);
    printf("Lines: %d\n", line_count);
    printf("Blanks: %d\n", blank_count);

    return 0;
}