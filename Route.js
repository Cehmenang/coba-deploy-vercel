import express from 'express'
import User from './Model.js'

const router = express.Router()

async function findUsers(req, res, next){
    try{
        const users = await User.find({})
        req.users = users
        next()
    }catch(e){ return res.status(400).send(e) }
}

router.get('/', findUsers, (req,res)=>{ 
    return res.render('index', { title: `Register Page`, users: req.users })
})

router.post('/', async(req,res)=>{
    const {username, email, kota} = req.body
    try{
        await User.create({ username, email, kota})
        return res.redirect('/')
    }catch(e){ return res.status(400).send(e) }
})

router.post('/search', async(req,res)=>{
    let payload = req.body.payload.trim()
    let search = await User.find({username: { $regex : '.*' + payload + '.*' } }).exec()
    search = search.slice(0,10)
    res.send(search)
})

export default router