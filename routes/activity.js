const { Router } = require('express')
const Person = require('../models/PersonLogIn')
const router = Router()


router.get('/', async (req, res) => {
    const currentdate = new Date()

    // ~ удаляем все логины старше 3 дней
    await Person.schema.deleteMany({date : {$lt: new Date(Date.now() - 3*24*60*60 * 1000)}})

    await Person.schema.create({
        person: 'John',
        date: currentdate,
    })

    let persons = await Person.schema.find({}).sort({"_id": -1})

    persons = persons.map(elem => {
        return {
            person: elem.person,
            date: {
                date: elem.date.getDate(),
                month: elem.date.getMonth(),
                year: elem.date.getFullYear()
            }
        }
    })

    res.render('activity', {
        title: 'User activity',
        isActivity: true,
        persons
    })
    })

    module.exports = router