function PurchasingBook(detailBook, discount, tax) {

    const isAvailable = true;

    if (isAvailable) {
        if (discount == null || tax == null) {
            return 'please enter a discount amount and tax amount'
        } else if (typeof discount != typeof tax) {
            return 'please enter number'
        } else if (detailBook == null) {
            return 'please enter a detail book'
        } else {
            const priceAfterDiscount = detailBook.price - ((discount / 100) * detailBook.price);
            const amountOfTask = priceAfterDiscount * (tax / 100);
            const priceAfterTax = priceAfterDiscount + (priceAfterDiscount * (tax / 100));
            return { detailBook, discount, priceAfterDiscount, tax, amountOfTask, priceAfterTax }
        }
    } else {
        return 'Book not available';
    }
}

const book = {
    title: 'Rich dad poor dad',
    description: 'lorem ipsum dolor sit amet, consectetur adip',
    price: 100000,
    pages: 250,
    author: 'Kiyosaki'
}

console.log(PurchasingBook(book, 50, 10));