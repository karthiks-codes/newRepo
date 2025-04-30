%{
#include <stdio.h>
%}

%%

aa[b]*    { printf("Matched: %s\n", yytext); }   // Match exactly 2 'a's followed by 0 or more 'b's
.|\n      { printf("Not Matched: %s\n", yytext); } // For everything else, print "Not Matched"

%%

int main() {
    printf("Enter a string to check if it matches 'aa followed by any number of b':\n");
    yylex(); // Start lexical analysis
    return 0;
}