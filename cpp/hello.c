#include <stdio.h>

// {
//  "cmd": ["gcc", "$file_name", "-o", "${file_base_name}", "&&", "./${file_base_name}"],
//  "file_patterns": ["*.c"]
// }

int main(){
    printf("hello world \n");
    for (int i = 0; i < 5; ++i)
    {
        // for (int j = 0; j < i; ++j)
        // {
        //     printf(" ");
        // }
        for (int j = i; j < 4; ++j)
        {
            printf("∑");
        }
        printf("\n");
    }
    return 0;
}
