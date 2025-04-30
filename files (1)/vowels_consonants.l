%{
#include <stdio.h>

int vowels = 0;      // Counter for vowels
int consonants = 0;  // Counter for consonants
%}

%%

[aeiouAEIOU]      { vowels++; }        // Match vowels (both uppercase and lowercase)
[a-zA-Z]          { consonants++; }    // Match any letter (alphabets only) which is not a vowel
[^a-zA-Z\n]       { /* Ignore non-alphabetic characters */ }
\n                { return 0; }        // Stop processing on a newline

%%

int main() {
    printf("Enter text (press Enter to finish):\n");
    yylex();  // Start lexical analysis
    printf("Number of vowels: %d\n", vowels);
    printf("Number of consonants: %d\n", consonants);
    return 0;
}