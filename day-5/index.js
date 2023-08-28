// Task Day 5
function PurchasingBook(detailBook, discount, tax, stock, purchasedBook, terms) {

    let amountDiscount = 0;
    let priceAfterDiscount = 0;
    let amountOfTax = 0;
    let priceAfterTax = 0;
    let canByAgainOrNot = '';

    const remainingStock = stock - purchasedBook;

    if (!stock && !purchasedBook) {
        return 'Enter stock and the purchased book'
    }

    for (let i = 0; i <= stock; i++) {
        if (stock < purchasedBook) {
            console.log('book out of stock');
            break;
        } else if (!detailBook) {
            return 'Please enter the book';
        } else if (!discount && !tax) {
            return 'Please enter a discount amount and a tax amount';
        } else {
            amountDiscount = (discount / 100) * detailBook.price;
            priceAfterDiscount = (detailBook.price * purchasedBook) - (detailBook.price * (discount / 100));
            amountOfTax = priceAfterDiscount * (tax / 100);
            priceAfterTax = priceAfterDiscount + (priceAfterDiscount * (tax / 100));

            canByAgainOrNot = remainingStock < 1 ? `You cannot buy this book again. Remaining stock ${remainingStock}`
                : `You can buy this book again. Remaining stock ${remainingStock}`;

            const TotalTerms = CalcTerms(terms, priceAfterTax);

            return {
                detailBook,
                discount,
                amountDiscount,
                priceAfterDiscount,
                tax,
                amountOfTax,
                priceAfterTax,
                stock,
                purchasedBook,
                canByAgainOrNot,
                TotalTerms
            }
        }
    }

    return '';
}

function CalcTerms(terms, priceAfterTax) {
    let allTerms = [];

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dueDate = new Date();

    const termsAfterTax = priceAfterTax / terms
    for (let i = 1; i <= terms; i++) {

        let future = new Date(dueDate.getFullYear(), dueDate.getMonth() + i);
        let month = months[future.getMonth()];
        let year = future.getFullYear();
        let day = dueDate.getDate();

        const formatDate = `${day} ${month} ${year}`;

        allTerms.push(`${formatDate}: ${termsAfterTax}`)
    }

    return allTerms;
}

const book = {
    title: 'Rich dad poor dad',
    description: 'lorem ipsum dolor sit amet, consectetur adip',
    price: 100000,
    pages: 250,
    author: 'Kiyosaki'
}


console.log(PurchasingBook(book, 45, 6, 5, 3, 5));