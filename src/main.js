import express from 'express'
import axios from 'axios'

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'public/views')
app.set(express.static, 'public')

app.get('/', async (req, res) => {
    const { data } = await axios.get('https://coronavirus-19-api.herokuapp.com/countries')

    res.render('index', { countrieList: data })
})

app.listen(3000)