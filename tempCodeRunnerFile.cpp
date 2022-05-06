#include<iostream>
using namespace std;

int main()
{
    int n;
    cout<<"Enter the number of elements in the Array:-";
    cin>>n;
    if(n<1||n>100){
        cout << "Invalid";
    }
    int arr[n];
    for(int i=0;i<n;i++){
        cout<<"Enter the number of mangoes:- " <<i+1<<" :-";
        cin>>arr[i];
    }
    int L,R,sum=0;
    if(L<1||L>100||R<1||R>100){
        cout << "Invalid";
    }
    cout<<"Enter the lower and upper limmit:- ";cin>>L;
    cin>>R;
    while(n--){
        if(arr[n]<=R && arr[n]>=L ){
            sum+=arr[n];
        }
    }
    cout<<"The total sum is:- "<< sum;
    return 0;
}