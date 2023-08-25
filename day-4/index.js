// task 1 tanpa loops
// function PurchasingBook(detailBook, discount, tax, stock, purchasedBook) {

//     const isAvailable = true;

//     if (isAvailable) {
//         if (discount == null || tax == null) {
//             return 'please enter a discount amount and tax amount'
//         } else if (typeof discount != typeof tax) {
//             return 'please enter number'
//         } else if (detailBook == null) {
//             return 'please enter a detail book'
//         } else if (stock < purchasedBook) {
//             return 'book out of stock';
//         } else {
//             const amountDiscount = (discount / 100) * detailBook.price;
//             const priceAfterDiscount = (detailBook.price * stock) - (detailBook.price * (discount / 100));
//             const amountOfTask = priceAfterDiscount * (tax / 100);
//             const priceAfterTax = priceAfterDiscount + (priceAfterDiscount * (tax / 100));
//             return {
//                 detailBook,
//                 discount,
//                 amountDiscount,
//                 priceAfterDiscount,
//                 tax,
//                 amountOfTask,
//                 priceAfterTax,
//                 stock,
//                 purchasedBook
//             }
//         }
//     } else {
//         return 'Book not available';
//     }
// }

function PurchasingBook(detailBook, discount, tax, stock, purchasedBook) {

    for (let i = 1; i <= stock; i++) {
        if (stock < purchasedBook) {
            return 'book out of stock'
        } else {
            const sisaStock = stock - purchasedBook;
            if (sisaStock < 1) {
                console.log(`You cannot buy this book again. Remaining stock ${sisaStock}`);
                break;
            } else {
                console.log(`You can buy this book again. Remaining stock ${sisaStock}`);
                break;
            }
        }
    }


    if (!detailBook) {
        return 'Please enter the book';
    } else if (!discount && !tax) {
        return 'Please enter a discount amount and a tax amount';
    } else {
        const amountDiscount = (discount / 100) * detailBook.price;
        const priceAfterDiscount = (detailBook.price * purchasedBook) - (detailBook.price * (discount / 100));
        const amountOfTask = priceAfterDiscount * (tax / 100);
        const priceAfterTax = priceAfterDiscount + (priceAfterDiscount * (tax / 100));
        const remainingStock = stock - purchasedBook;

        return {
            detailBook,
            discount,
            amountDiscount,
            priceAfterDiscount,
            tax,
            amountOfTask,
            priceAfterTax,
            stock,
            remainingStock,
            purchasedBook,
        }
    }
}



const book = {
    title: 'Rich dad poor dad',
    description: 'lorem ipsum dolor sit amet, consectetur adip',
    price: 100000,
    pages: 250,
    author: 'Kiyosaki'
}

console.log(PurchasingBook(book, 45, 6, 10, 5));