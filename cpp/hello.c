#include <stdio.h>

int main(){
	printf("hello world \n");
	for (int i = 0; i < 5; ++i)
	{
		for (int j = 0; j < i; ++j)
		{
			printf(" ");
		}
		for (int j = i; j < 4; ++j)
		{
			printf("X");
		}
		printf("\n");
	}
	return 0;
}
