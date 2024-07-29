const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')

const Movie = require('./Schemas/moviesSchema')

main().catch(err => console.log(err))
async function main() {
    await mongoose.connect('mongodb+srv://rosereed1212:5sH5hGk0wVlQ0Srz@expenses.o60l2oe.mongodb.net/movies_database?retryWrites=true&w=majority&appName=Expenses')
}

app.use(cors())
app.use(express.json())

//movies
app.get('/movies', async (req, res) => {
    const movies = await Movie.find({})
    res.json(movies)
})

//create movie
app.post('/movies', async (req, res) => {
    const body = req.body
    const movie = new Movie({
        name: body.name,
        year: parseInt(body.year)
    })

    const newMovie = await movie.save()
    res.json(newMovie)
})


//http://localhost:8080/movies
app.listen(8080, () => {
    console.log('Server is running...')
})