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
    int N,S,K,i;
    S=0;
    K=0;
    cout<<"Отгадай число"<<endl;
    f_output.open("endgame.txt");
    f_input.open("startgame.txt");
    if (f_input.fail())
        {
        cout<<"Не удалось открыть файл\n";
        return 1;
        }
        while (!f_input.eof())
        {
            f_input>>i; 
        }
        while (i>0)
        {
            cout<<"Число:"; cin>>N;
            if (N > i)
            {
                cout<<"Введенное число больше загадонного""\n"; 
            }
            if (N < i)
            {
                cout<<"Введенное число меньше загадонного""\n"; 
            }
            if (N == i)
            {
                cout<<"Конец""\n"; 
            }
            S=S+N;
            K++;
            f_output<<"Число"<<K<<":="<<N<< "\n";
            if (N == i)
            {
                cout<<"Прям конец""\n"; 
                break;
            }
        }
    f_input.close();
    //f_output.open("endgame.txt");
    //f_output<<"Число"<<K<<":="<<N<< "\n";
    f_output<<"Количество чисел:"<<K<< "\n";
    f_output<<"Сумма чисел:"<<S<<"\n";
    f_output.close();
    cout<<"Результат записан в файл endgame.txt";
    return 0;      
}