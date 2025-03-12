#include <stdio.h>

int main() {
    int k = 0, a = 0, b = 0, instance[5], availability[5], allocated[10][5], need[10][5], MAX[10][5], process, P[10], no_of_resources, cnt = 0, i, j;
    int op[10]; // Declare the op array

    printf("\n Enter the number of resources: ");
    scanf("%d", &no_of_resources);

    printf("\n Enter the max instances of each resource\n");
    for (i = 0; i < no_of_resources; i++) {
        availability[i] = 0;
        printf("%c= ", (i + 97));
        scanf("%d", &instance[i]);
    }

    printf("\n Enter the number of processes: ");
    scanf("%d", &process);

    printf("\n Enter the allocation matrix \n     ");
    for (i = 0; i < no_of_resources; i++) {
        printf(" %c", (i + 97));
    }
    printf("\n");

    for (i = 0; i < process; i++) {
        P[i] = i;
        printf("P[%d]  ", P[i]);
        for (j = 0; j < no_of_resources; j++) {
            scanf("%d", &allocated[i][j]);
            availability[j] += allocated[i][j];
        }
    }
}