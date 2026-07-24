
const express = require('express')
const app = express()
const { Sequelize, DataTypes } = require("sequelize")
const initialize = require('./initialize').default
app.use(express.json())

// Development
const database = new Sequelize("postgres://postgres:postgres@localhost:5432/mapflap", {
    logging: false //Set to true to log DB actions
})

// Production (use this code when deploying to production in Heroku)
// const pg = require('pg')
// pg.defaults.ssl = true
// const database = new Sequelize(process.env.DATABASE_URL, {
//   ssl: true,
//   dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
// })



// Function that will initialize the connection to the database
async function initializeDatabaseConnection() {
    await database.authenticate()

    // define entities
    const Work = database.define("work", {
        codeWork: {type: DataTypes.INTEGER, primaryKey: true},
        name: DataTypes.STRING,
        shortName: DataTypes.STRING,
        image: DataTypes.STRING,
        description: DataTypes.TEXT,
        category: DataTypes.INTEGER,
        url: DataTypes.STRING,
        finished: DataTypes.INTEGER
    })
    const Category = database.define("categoryi", {
        category: {type: DataTypes.INTEGER, primaryKey: true},
        name: DataTypes.STRING,
    })
    const Technology = database.define("technology", {
        codeTech: {type: DataTypes.INTEGER, primaryKey: true},
        name: DataTypes.STRING,
        image: DataTypes.STRING,
        url: DataTypes.STRING,
    })
    const WorkTechnology = database.define("work_technology", {
        codeWork: DataTypes.INTEGER,
        codeTech: DataTypes.INTEGER,
    })


    // define entities relationships

    Work.belongsTo(Category)
    Category.hasMany(Work)

    Technology.belongsToMany(Work, { through: WorkTechnology, foreignKey: 'codeTech' })
    Work.belongsToMany(Technology, { through: WorkTechnology, foreignKey: 'codeWork' })


    // careful force true will wipe out db data
    await database.sync({ force: true })

    return {
        Work,
        Category,
        Technology,
        WorkTechnology
    }
}


async function runMainApi() {
    const models = await initializeDatabaseConnection()
    await initialize(models)

    /* ----------------- geospatial APIs ----------------- */
    app.get('/geospatial-works', async (req, res) => {
        const result = await models.Work.findAll({
            /* attributes:['codeWork','name','shortName','image','description'], */
            where: {
                category: 1
            }
        })
        return res.json(result)
    })
    app.get('/geospatial-work/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.Work.findOne({
            where: { codeWork: id },
            attributes: {exclude:['createdAt','updatedAt']},
            include: [{
                model: models.Technology,
                attributes: ['codeTech', 'name', 'image'],
                /* through: { attributes: [''] } */
            }, 
            ]
        })
        return res.json(result)
    })

    /* ----------------- Machine Learning APIs ----------------- */
    app.get('/machineLearning-works', async (req, res) => {
        const result = await models.Work.findAll({
            /* attributes:['codeWork','name','shortName','image','description'], */
            where: {
                category: 2
            }
        })
        return res.json(result)
    })
    app.get('/machineLearning-work/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.Work.findOne({
            where: { codeWork: id },
            attributes: {exclude:['createdAt','updatedAt']},
            include: [{
                model: models.Technology,
                attributes: ['codeTech', 'name', 'image'],
                /* through: { attributes: [''] } */
            }, 
            ]
        })
        return res.json(result)
    })

    /* ----------------- Just Beacuse APIs ----------------- */
    app.get('/justBecause-works', async (req, res) => {
        const result = await models.Work.findAll({
            /* attributes:['codeWork','name','shortName','image','description'], */
            where: {
                category: 3
            }
        })
        return res.json(result)
    })
    app.get('/justBecause-work/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.Work.findOne({
            where: { codeWork: id },
            attributes: {exclude:['createdAt','updatedAt']},
            include: [{
                model: models.Technology,
                attributes: ['codeTech', 'name', 'image'],
                /* through: { attributes: [''] } */
            }, 
            ]
        })
        return res.json(result)
    })
}

runMainApi()

export default app
