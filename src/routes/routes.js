const express = require('express')

const router = express.Router()
const axios = require('axios')

const call = async (page)=>{
    const response = await axios.get(URL + page)
    const data = await response.data
    return data
}


router.get('',(req,res)=>{
    res.send('funcionando')
})



router.get('/posts/:id',async (req,res)=>{
    const page = req.params.id
    try{
        const data = await call(page)
        res.send(data)
    }
    catch(error){
        console.log(error)
        res.send(error)
    }
    
})

router.get('/posts/',async (req,res)=>{
    const page = ""
    try{
        const data = await call(page)
        res.send(data)
    }
    catch(error){
        console.log(error)
        res.send(error)
    }
    
})

router.get('/ejs',(req,res)=>{
    const title = 'hola desde una variable'

    res.render('index',{title})
})

router.get('/cat', async(req,res)=>{
    const response = await axios.get('https://api.thecatapi.com/v1/images/search')
    const data = await response.data
    cat = data[0].url
    res.render('cat',{cat})

})

router.get('*',(req,res)=>{
    res.send(`la ruta NO EXISTE`)
})




module.exports = router;