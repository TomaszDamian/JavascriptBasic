1.	Null er ekkert en undefined er eitthvað sem er til en það er ekki búið að skilgreina það.
2.	Use strict gerir það að javascript kvartar ef það vantar ; eða window. Í alert falli
3.	Var er global variable en let virkar bara í sinni blokk, virkar ekki í blokk fyrir neðan.
4.  
```javascript
function app(){}

var app2 = function(){};

function = (a, b) => { return a+b };
```
5.Birtir glugga sem er með textanum í og svigarnaring gera functionið að expression.

6. það returnar 8 því það er eins og þú sért að breata bar functioninu.
svona lítur kóðinn út eftir að þýðandinn er búinn að fara yfir það.
```javascript
function foo(){
  function bar() {
    return 3;
  }
  function bar() {
    return 8;
  }
  return bar();
}
alert(foo()); 
```
7.
```javascript
let list = [4, 5, 6];

//for of nær í öll gildin (ignorar samt non-index properties)
for (let i of list) {
   console.log(i); // "4", "5", "6"
}
//for in nær bara í indexið á hlutunum
for (let i in list){
   console.log(i); // "0", "1", "2"
}
```
8.
```javascript
var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];

test.forEach(function(number/*variable*/, index/*index of said variable*/, theArray/*the whole array itself*/){
    if(number % 3 === 0){
        test[index] = number + 100;
    }
});
```
9..map() takes the array and then changes what you wanted to have changed then creates a new array/replaces the one you were using
```javascript
var bills = [50.23, 19.12, 34.01,
    100.11, 12.15, 9.90, 29.11, 12.99,
    10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];
var totals = bills.map(function(amount){
   amount *= 1.15;
   let shortenedAmount = amount.toFixed(2);
   shortenedAmount = parseFloat(shortenedAmount);
   return shortenedAmount;
});
```
10.
```javascript
var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
]

for(let i of numbers){
    for(let numberIndex in i){
        if(i[numberIndex] % 2 === 0){
            i[numberIndex] = "even";
        }
        else{
            i[numberIndex] = "odd";
        };
    }
}
```
