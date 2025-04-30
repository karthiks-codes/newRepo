%{
#include <stdio.h>
#include <stdlib.h>

void calculate_factorial(int num);
%}

%%

[0-9]+ {
    int num = atoi(yytext);  // Convert the matched number string to an integer
    calculate_factorial(num);
}

\n { return 0; }  // Stop processing on a newline

. { /* Ignore other characters */ }

%%

void calculate_factorial(int num) {
    if (num < 0) {
        printf("Factorial is not defined for negative numbers.\n");
        return;
    }

    unsigned long long factorial = 1;  // To handle large factorials
    for (int i = 1; i <= num; i++) {
        factorial *= i;
    }

    printf("Factorial of %d is %llu\n", num, factorial);
}

int main() {
    printf("Enter a number to calculate its factorial (press Enter to finish):\n");
    yylex();  // Start lexical analysis
    return 0;
}