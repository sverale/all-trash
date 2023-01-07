#define _CRT_SECURE_NO_WARNINGS
#include <iostream>
#include <fstream>
#include <math.h>
#include <locale.h>

using namespace std;
int main()
{
    setlocale(LC_ALL, "Russian");
    ifstream f_input;
    ofstream f_output;
    int N,S=0,i,K=0,max=2;
    cout<<"Сумма четных чисел до предела"<<endl;
    f_output.open("kolmax.txt");
    f_input.open("predel.txt");
    if (f_input.fail())
        {
        cout<<"Не удалось открыть файл\n";
        return 1;
        }
        S=0;
        while (!f_input.eof())
        {
            f_input>>i;
        }
        while (i>S)
        {
            cout<<"Число:"; cin>>N;
            if (N % 2 == 0)
            {
                S=S+N;
                K++;
                if(N==max || N>max) 
                {
                max=N;
                }
                f_output<<"Число"<<K<<":="<<N<< "\n";
            }
            else 
            {
                S=S+0;
            }  
        }  
    f_input.close();
    f_output<<"Количество четных чисел:"<<K<< "\n";
    f_output<<"Сумма четных чисел:"<<S<<"\n";
    f_output<<"Максимальное число:" <<max<<"\n";
    f_output.close();
    cout<<"Результат записан в файл kolmax.txt";
    return 0;      
}