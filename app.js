const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const session = require('express-session')
const router = require('./router/mainRouter')
app.listen(4000)
console.log('server started on port 4000')
mongoose.connect('mongodb+srv://MantasAksenavicius:5nk7TrCYPGetp5gr@cluster0.3lc4zbg.mongodb.net/?retryWrites=true&w=majority') //pakeisti username ir pass
    .then(res => console.log('DataBase connected'))
    .catch(e => console.log(e));
app.use(cors({
    origin: true,
    credentials: true,
    methods: "GET, HEAD, PUT, PATCH, POST, DELETE"
}))
app.use(express.json())
app.use(session({
    secret: 'e?N+b)EaFmvYN0ni{tvOtt~L*}Du~x#auIZ&oA{(XaI!D9/nTFqQzp2n~TGbGuA',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false
    }
}))
app.use('/', router)