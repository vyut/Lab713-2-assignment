import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

// app.get('/test', (req, res) => {
//     let returnObj = {
//         name: 'test',
//         age: 20,
//         address: 'Thai'
//     }
//     res.send(returnObj);
// });

app.get('/test', (req: Request, res: Response) => {
    const id = req.query.id;
    const output = `id: ${id}`;
    res.send(output)
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

app.get('/events', (req, res) => {
    res.json(events);
});