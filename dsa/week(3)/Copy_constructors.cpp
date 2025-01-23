#include <iostream>
using namespace std;

class Book
{
    public:
    string Title;
    string Author;
    float* Rates;
    int RatesCounter;
    ~Book();
    Book(string title,string author); // Declaration
    Book(const Book &original);   //copy constructor
    void display();
};
// Definition outside the class
Book::Book(string title,string author)
{
        Title=title;
        Author=author;
        RatesCounter=2;
        Rates=new float[RatesCounter];
        Rates[0]=5;
        Rates[1]=4;
}
Book::~Book()
{
    delete[]Rates;
    Rates=nullptr;
}
void Book::display(){
     cout<<this->Author<<" "<<this->RatesCounter<<endl;
     int n=sizeof(Rates)/sizeof(Rates[0]);
     cout<<n<<endl;

}
Book::Book(const Book &original){ //shallow copy 
       Title=original.Title;
        Author=original.Author;
        RatesCounter=original.RatesCounter;
        Rates=original.Rates;
        Rates[0]=5;
        Rates[1]=4;
}
// Book::Book(const Book &original){ //deep copy
//        Title=original.Title;
//         Author=original.Author;
//         RatesCounter=original.RatesCounter;
//         Rates=new float[original.RatesCounter];
//         Rates[0]=5;
//         Rates[0]=4;
// }



int main(){
    Book book1("Millionaire","M.J. DeMarco");
    Book book2("Millionaire","M.J. DeMarco");
    book2.display();
    
    

    Book book3(book2);
    book3.display();
    return 0;
}

// Default copy constructor​ uses shallow copy
