import express from 'express'
const app =express()
const port =3000
app.use(express.json())

let teaData =[]
let nextId=1

//add a tea
app.post('/teas',(req,res)=>{
    const {name,price}=req.body
    const newTea ={ id : nextId++ ,name,price}
    teaData.push(newTea)
    res.status(201).send(newTea)

})

//get all teas
app.get('/teas',(req,res)=>{
    res.status(200).send(teaData)
})

//get tea by id
app.get('/teas/:id',(req,res)=>{
    const tea = teaData.find(t=>t.id === parseInt(req.params.id))
    if(!tea){
        return res.status(400).send("Tea Not Found.Please try again using different Id")
    }
    res.status(200).send(tea)
})

//update
app.put("/teas/:id",(req,res)=>{
    const tea = teaData.find(t=>t.id === parseInt(req.params.id))
    if(!tea){
        return res.status(400).send("Tea Not Found.Please try again using different Id")
    }
    const {name ,price} =req.body
    tea.name=name
    tea.price=price
    res.status(200).send(tea)

})

//delete
app.delete("/teas/:id",(req,res)=>{
    const index = teaData.findIndex(t=>t.id === parseInt(req.params.id))
    if(index === -1 ){
        return res.status(400).send("Tea Not Found.Please try again using different Id")
    }
    teaData.splice(index,1)
    res.status(200).send('deleted')
})



app.listen(port ,()=>{
    console.log(`Server is running at ${port}`)
})
