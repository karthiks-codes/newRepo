%{
#include <stdio.h>

int paren_balance = 0;   // Counter for parentheses ()
int brace_balance = 0;   // Counter for braces {}
int bracket_balance = 0; // Counter for brackets []
int unbalanced = 0;      // Flag to detect unbalanced order
%}

%%

\(      { paren_balance++; }   // Increment for '('
\)      { 
    if (paren_balance > 0) {
        paren_balance--; 
    } else {
        unbalanced = 1;  // Extra closing ')'
    }
}
\{      { brace_balance++; }   // Increment for '{'
\}      { 
    if (brace_balance > 0) {
        brace_balance--; 
    } else {
        unbalanced = 1;  // Extra closing '}'
    }
}
\[      { bracket_balance++; } // Increment for '['
\]      { 
    if (bracket_balance > 0) {
        bracket_balance--; 
    } else {
        unbalanced = 1;  // Extra closing ']'
    }
}

.|\n    {
    if (yytext[0] == '\n') {
        // Check for unbalanced symbols
        if (unbalanced || paren_balance > 0 || brace_balance > 0 || bracket_balance > 0) {
            printf("Unbalanced symbols detected.\n");
        } else {
            printf("All symbols are balanced.\n");
        }
        // Reset counters for next input
        paren_balance = 0;
        brace_balance = 0;
        bracket_balance = 0;
        unbalanced = 0;
        return 0;
    }
}

%%

int main() {
    printf("Enter a string to check for balanced (), {}, [] (press Enter to finish):\n");
    yylex();  // Start lexical analysis
    return 0;
}