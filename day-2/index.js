// task 1

let bookName1 = 'Laskar pelangi';
let bookName2 = 'Laskar pelangi';

const result = bookName1 === bookName2;


console.log(result);

// task 2
// 2a highest prices
const priceBook1 = 900000;
const priceBook2 = 900000;

if (priceBook1 > priceBook2) {
    console.log('Highest price:', priceBook1);
} else if (priceBook1 == priceBook2) {
    console.log('Price of book is same');
} else {
    console.log('High price:', priceBook2);
}

// 2b average price
const averagePrice = (priceBook1 + priceBook2) / 2;
console.log('Average price:', averagePrice);

// 2c expensive or cheap price
const expensiveOrCheapPrice = averagePrice > 500000 ? 'expensive' : 'cheap';
console.log('Is expensive or cheap price?', expensiveOrCheapPrice);

let arr = [
    {
        title: 'Laskar pelangi',
        description: 'lorem Ipsum is simply dummy text and cannot be safely interpreted',
        price: 200000,
        pages: 150
    }
];

const bookObj = {
    title: 'Rich dad poor dad',
    description: 'lorem Ipsum is simply dummy text and cannot be safely interpreted',
    price: 200000,
    pages: 150
}

arr.push(bookObj);

arr.forEach(val => {
    console.log(val);
})

let num = 5n + 1n;
console.log(num);


// find big number in array
const bigArr = [899, 3, 235, 24, 32, 644, 235, 343, 234];
let bigArrMax = bigArr[0];
for (let index = 0; index < bigArr.length; index++) {

    if (bigArr[index] > bigArrMax) {
        bigArrMax = bigArr[index];
    }

}

console.log(bigArrMax);