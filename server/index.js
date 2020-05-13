const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

const progects = [
    {
        total: 5000,
        target: 4000,
        backers: 1000,
        boss: 'Пупкин',
        foto: './images/img.jpeg',
        name: 'На поддержку василия пупкина',
        shortInformation: 'Покупка и доставка недельного набора продуктов для одиноких пенсионеров. Поможем пожилым людям Лиозненского района Витебской области остаться дома. Покупка и доставка недельного набора продуктов для одиноких пенсионеров. Поможем пожилым людям Лиозненского района Витебской области остаться дома.',
        information: 'leleas llfasklfkaslf lafk lasklf  lfksalfk alsfkl askf lkflsleleas llfasklfkaslf lafk lasklf  lfksalfk alsfkl askf lkflsleleas llfasklfkaslf lafk lasklf  lfksalfk alsfkl askf lkfls'
    },
    {
        total: 1000,
        target: 2000,
        backers: 10,
        boss: 'Пупкин',
        foto: './images/img.jpeg',
        name: 'На поддержку василия пупкина',
        progress: 0,
        shortInformation: 'Покупка и доставка недельного набора продуктов для одиноких пенсионеров. Поможем пожилым людям Лиозненского района Витебской области остаться дома.',
        information: 'leleas llfasklfkaslf lafk lasklf  lfksalfk alsfkl askf lkflsleleas llfasklfkaslf lafk lasklf  lfksalfk alsfkl askf lkflsleleas llfasklfkaslf lafk lasklf  lfksalfk alsfkl askf lkfls'
    },
    {
        total: 5000,
        target: 13000,
        backers: 10252,
        boss: 'Пупкин',
        foto: './images/img.jpeg',
        name: 'На поддержку василия пупкина',
        progress: 55,
        shortInformation: 'Покупка и доставка недельного набора продуктов для одиноких пенсионеров. Поможем пожилым людям Лиозненского района Витебской области остаться дома.',
        information: 'leleas llfasklfkaslf lafk lasklf  lfksalfk alsfkl askf lkflsleleas llfasklfkaslf lafk lasklf  lfksalfk alsfkl askf lkflsleleas llfasklfkaslf lafk lasklf  lfksalfk alsfkl askf lkfls'
    },
    {
        total: 5000,
        target: 13000,
        backers: 10252,
        boss: 'Pre',
        foto: './images/img.jpeg',
        name: 'На поддержку василия пупкина',
        progress: 55,
        shortInformation: 'Покупка и доставка недельного набора продуктов для одиноких пенсионеров. Поможем пожилым людям Лиозненского района Витебской области остаться дома.',
        information: 'leleas llfasklfkaslf lafk lasklf  lfksalfk alsfkl askf lkflsleleas llfasklfkaslf lafk lasklf  lfksalfk alsfkl askf lkflsleleas llfasklfkaslf lafk lasklf  lfksalfk alsfkl askf lkfls'
    },
    {
        total: 50,
        target: 1000,
        backers: 10252,
        boss: 'End',
        foto: './images/img.jpeg',
        name: 'На поддержку василия пупкина',
        progress: 55,
        shortInformation: 'Покупка и доставка недельного набора продуктов для одиноких пенсионеров. Поможем пожилым людям Лиозненского района Витебской области остаться дома.',
        information: 'leleas llfasklfkaslf lafk lasklf  lfksalfk alsfkl askf lkflsleleas llfasklfkaslf lafk lasklf  lfksalfk alsfkl askf lkflsleleas llfasklfkaslf lafk lasklf  lfksalfk alsfkl askf lkfls'
    }
];
const users = [
    {
        name: 'Alex',
        foto: './images/user.jpeg',
        age: 25,
        region: 'Минск',
        position: 'тренер',
        about: 'Качек'
    },
    {
        name: 'Иван',
        foto: './images/user.jpeg',
        age: 25,
        region: 'Гомель',
        position: 'участник',
        about: 'Хотел бы поучавствовать в проекте'
    },
    {
        name: 'Илья',
        foto: './images/user.jpeg',
        age: 25,
        region: 'Москва',
        position: 'наставник',
        about: 'Научу всему что умею сам'
    },
    {
        name: 'Алексей',
        foto: './images/user.jpeg',
        age: 25,
        region: 'Ростов',
        position: 'инвестор',
        about: 'Инвестирую во все'
    }
];

const csrf = Math.random(Math.random() * 150) * 20;

app.use(express.json())
app.use(cors())

app.post('/csrf', (req, res) => {
    res.json(csrf);
})

app.post('/login', (req, res) => {
    if (req.body.login == 'admin' && req.body.pass == 'admin' && req.body.csrf == csrf) { //типо проверило данные в базе
        res.json({ //и получили данные с бд
            id: 1,
            username: 'Ilya',
        });
    } else {
        res.status(401).json({error: 'err.stack'})
    }
})

app.post('/registration', (req, res) => {
    res.status(201).json(req.body); //типо записалось в базу и залогинило
})

app.get('/get-progects', (req, res) => {
    res.json(progects);
})
app.get('/get-progect/:progectId', (req, res) => {
    res.json(progects[req.params['progectId']])
})

app.get('/get-users', (req, res) => {
    res.json(users);
})
app.get('/get-user/:userId', (req, res) => {
    res.json(users[req.params['userId']]);
})

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})