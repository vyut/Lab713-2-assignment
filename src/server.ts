import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

interface Event {
    id: number;
    category: string;
    title: string;
    description: string;
    location: string;
    date: string;
    time: string;
    petsAllowed: boolean;
    organizer: string;
};

const events: Event[] = [
    {
        id: 1,
        category: "Music",
        title: "Concert",
        description: "A live concert",
        location: "London",
        date: "2021-07-01",
        time: "19:00",
        petsAllowed: false,
        organizer: "Live Nation",
    },
    {
        id: 2,
        category: "Sport",
        title: "Football match",
        description: "A football match",
        location: "Manchester",
        date: "2021-07-02",
        time: "20:00",
        petsAllowed: false,
        organizer: "FIFA",
    },
    {
        id: 3,
        category: "Music",
        title: "Festival",
        description: "A music festival",
        location: "Bristol",
        date: "2021-07-03",
        time: "21:00",
        petsAllowed: true,
        organizer: "Glastonbury",
    },
    {
        id: 4,
        category: "Sport",
        title: "Tennis match",
        description: "A tennis match",
        location: "Liverpool",
        date: "2021-07-04",
        time: "22:00",
        petsAllowed: false,
        organizer: "Wimbledon",
    },
    {
        id: 5,
        category: "Music",
        title: "Concert",
        description: "A live concert",
        location: "London",
        date: "2021-07-01",
        time: "19:00",
        petsAllowed: false,
        organizer: "Live Nation",
    },
    {
        id: 6,
        category: "Sport",
        title: "Football match",
        description: "A football match",
        location: "Manchester",
        date: "2021-07-02",
        time: "20:00",
        petsAllowed: false,
        organizer: "FIFA",
    },
]

interface Book {
    id: number;
    title: string;
    author: string;
    description: string;
    group: string;
}

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

app.get("/events", (req, res) => {
    if (req.query.category) {
        const category = req.query.category as string;
        const filteredEvents = events.filter((event) => event.category === category);
        res.send(filteredEvents);
    } else {
        res.json(events);
    }
});

app.get("/events/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const event = events.find((event) => event.id === id);
    if (event) {
        res.json(event);
    } else {
        res.status(404).send("Event not found");
    }
});

app.post("/events", (req, res) => {
    const newEvent: Event = req.body;
    newEvent.id = events.length + 1;
    events.push(newEvent);
    res.json(newEvent);
});

app.get("/books", (req, res) => {
    if (req.query.group) {
        const group = req.query.group as string;
        const filteredBooks = books.filter((book) => book.group === group);
        res.json(filteredBooks);
    } else {
        res.json(books);
    }
});

app.get("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find((book) => book.id === id);
    if (book) {
        res.json(book);
    } else {
        res.status(404).send("Book not found");
    }
});

app.post("/books", (req, res) => {
    const newBook: Book = req.body;
    newBook.id = books.length + 1;
    books.push(newBook);
    res.json(newBook);
});

