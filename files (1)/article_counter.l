%{
#include <stdio.h>
#include <string.h>
int article_count = 0;
%}

%%

[aA]([ \t\n]|$)              { article_count++; }
[aA][nN]([ \t\n]|$)          { article_count++; }
[tT][hH][eE]([ \t\n]|$)      { article_count++; }
[ \t\n]+                     { /* Ignore whitespace */ }
.                            { /* Ignore other characters */ }

%%

int main() {
    yylex();
    printf("Number of articles: %d\n", article_count);
    return 0;
}