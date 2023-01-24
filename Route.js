import express from 'express'
import User from './Model.js'

const router = express.Router()

async function findUsers(req, res, next){
    try{
        const users = await User.find({})
        req.users = users
        next()
    }catch(e){ return res.status(400).json(e) }
}

router.get('/', findUsers, (req,res)=>{ 
    return res.status(200).render('index', { title: `Register Page`, users: req.users })
})

router.post('/', async(req,res)=>{
    const {username, email, kota} = req.body
    try{
        await User.create({ username, email, kota})
        return res.status(200).redirect('/')
    }catch(e){ return res.status(400).json(e) }
})

export default router