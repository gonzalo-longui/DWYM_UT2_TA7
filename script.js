function getTheTitles(books) {
    let nuevoArray = [];
    for (const book of books) {
        nuevoArray.push(book["title"]);
    }
    console.log(nuevoArray);
}

const books = [
    {
        title: 'Book',
        author: 'Name'
    },
    {
        title: 'Book2',
        author: 'Name2'
    },
    {
        title: 'To Kill A Mockingbird',
        author: 'Harper Lee'
    },
    {
        title: 'The Adventures of Huckleberry Finn',
        author: 'Mark Twain'
    }
];

getTheTitles(books);
