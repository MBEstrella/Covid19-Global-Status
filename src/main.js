import express from 'express'
import axios from 'axios'

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'public/views')
app.use(express.static('public'))

app.get('/', async (req, res) => {
    const { data } = await axios.get('https://coronavirus-19-api.herokuapp.com/countries')

    res.render('index', { countrieList: data })
})

app.get('/:countryName', async (req, res) => {
    const { countryName } = req.params
    const { data } = await axios.get('https://coronavirus-19-api.herokuapp.com/countries')

    const country = data.find(({ country, cases, active, deaths }) => {
        if (countryName === country) {
            return { country, cases, active, deaths }
        }
    })



    res.render('findCountry', { country })
})

app.listen(3000)