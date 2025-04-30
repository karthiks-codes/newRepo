%{
#include <stdio.h>
#include <string.h>
%}

%%

.* {
    int len = strlen(yytext);
    printf("Reversed input: ");
    for (int i = len - 1; i >= 0; i--) {
        printf("%c", yytext[i]);
    }
    printf("\n");
}

\n { return 0; }  // Stop processing on newline.

%%

int main() {
    printf("Enter a string to reverse (press Enter to finish):\n");
    yylex();
    return 0;
}