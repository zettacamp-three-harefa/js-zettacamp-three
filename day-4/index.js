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
            console.log('book out of stock');
            break;
        } else {
            const sisaStock = stock - purchasedBook;
            if (!detailBook) {
                return 'Please enter the book';
            } else if (!discount && !tax) {
                return 'Please enter a discount amount and a tax amount';
            } else {
                const amountDiscount = (discount / 100) * detailBook.price;
                const priceAfterDiscount = (detailBook.price * purchasedBook) - (detailBook.price * (discount / 100));
                const amountOfTask = priceAfterDiscount * (tax / 100);
                const priceAfterTax = priceAfterDiscount + (priceAfterDiscount * (tax / 100));
                const remainingStock = sisaStock < 1 ? `You cannot buy this book again. Remaining stock ${sisaStock}`
                    : `You can buy this book again. Remaining stock ${sisaStock}`;

                return {
                    detailBook,
                    discount,
                    amountDiscount,
                    priceAfterDiscount,
                    tax,
                    amountOfTask,
                    priceAfterTax,
                    stock,
                    purchasedBook,
                    remainingStock,
                }
            }
        }
    }

    // Using while loop 
    // let i = 0;

    // while (i < stock) {
    //     if (stock < purchasedBook) {
    //         console.log('Book out of stock');
    //         break;
    //     } else {
    //         const sisaStock = stock - purchasedBook;
    //         if (sisaStock < 1) {
    //             return `You cannot buy this book again. Remaining stock ${sisaStock}`;
    //         } else if (!detailBook) {
    //             return 'Please enter the book';
    //         } else if (!discount && !tax) {
    //             return 'Please enter a discount amount and a tax amount';
    //         } else {
    //             const amountDiscount = (discount / 100) * detailBook.price;
    //             const priceAfterDiscount = (detailBook.price * purchasedBook) - (detailBook.price * (discount / 100));
    //             const amountOfTask = priceAfterDiscount * (tax / 100);
    //             const priceAfterTax = priceAfterDiscount + (priceAfterDiscount * (tax / 100));
    //             const remainingStock = `You can buy this book again. Remaining stock ${sisaStock}`;

    //             i++;

    //             return {
    //                 detailBook,
    //                 discount,
    //                 amountDiscount,
    //                 priceAfterDiscount,
    //                 tax,
    //                 amountOfTask,
    //                 priceAfterTax,
    //                 stock,
    //                 purchasedBook,
    //                 remainingStock,
    //             }
    //         }
    //     }
    // }

    // using for-of loop
    // for (const stk of stock) {
    //     if (stock < purchasedBook) {
    //         console.log('book out of stock');
    //         break;
    //     } else {
    //         const sisaStock = stock - purchasedBook;
    //         if (sisaStock < 1) {
    //             return `You cannot buy this book again. Remaining stock ${sisaStock}`;
    //         } else if (!detailBook) {
    //             return 'Please enter the book';
    //         } else if (!discount && !tax) {
    //             return 'Please enter a discount amount and a tax amount';
    //         } else {
    //             const amountDiscount = (discount / 100) * detailBook.price;
    //             const priceAfterDiscount = (detailBook.price * purchasedBook) - (detailBook.price * (discount / 100));
    //             const amountOfTask = priceAfterDiscount * (tax / 100);
    //             const priceAfterTax = priceAfterDiscount + (priceAfterDiscount * (tax / 100));
    //             const remainingStock = `You can buy this book again. Remaining stock ${sisaStock}`;

    //             return {
    //                 detailBook,
    //                 discount,
    //                 amountDiscount,
    //                 priceAfterDiscount,
    //                 tax,
    //                 amountOfTask,
    //                 priceAfterTax,
    //                 stock,
    //                 purchasedBook,
    //                 remainingStock,
    //             }
    //         }
    //     }
    // }
}

const book = {
    title: 'Rich dad poor dad',
    description: 'lorem ipsum dolor sit amet, consectetur adip',
    price: 100000,
    pages: 250,
    author: 'Kiyosaki'
}

// while looping 

// let n = 0;
// while (n < 10) {
//     console.log(n);
//     n++;
// }

console.log(PurchasingBook(book, 45, 6, 5, 3));
