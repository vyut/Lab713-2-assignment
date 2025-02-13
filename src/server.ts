import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

interface Book {
    id: number;
    title: string;
    author: string;
    description: string;
    group: string;
};

const books: Book[] = [
    {
        id: 1,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        description: 'The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.',
        group: 'Fiction'
    },
    {
        id: 2,
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        description: 'The story of a young daughter of a lawyer who witnesses a drama in her small town.',
        group: 'Classic'
    },
    {
        id: 3,
        title: '1984',
        author: 'George Orwell',
        description: 'A dystopian novel about a totalitarian regime and an ordinary day-to-day worker.',
        group: 'Dystopian'
    },
    {
        id: 4,
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        description: 'The story of the Bennet family and their five unmarried daughters.',
        group: 'Romance'
    },
    {
        id: 5,
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        description: 'The story of a teenager Holden Caulfield and his experiences in New York City.',
        group: 'Coming-of-Age'
    },
    {
        id: 6,
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        description: 'The adventure of Bilbo Baggins as he sets out on a quest to win a share of the treasure guarded by Smaug the dragon.',
        group: 'Fantasy'
    }
];

app.get('/books', (req, res) => {
    res.json(books);
});