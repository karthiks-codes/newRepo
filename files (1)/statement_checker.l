%{
#include <stdio.h>
int has_open = 0, has_close = 0;
%}

%%

"{"             { has_open = 1; }
"}"             { has_close = 1; }
.|\n|[ \t]+     { /* Ignore all other characters */ }

%%

int main() {
    yylex();
    if (has_open && has_close)
        printf("Compound statement\n");
    else
        printf("Simple statement\n");
    return 0;
}