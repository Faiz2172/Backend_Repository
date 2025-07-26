const http =require('http')
const hostname ='127.0.0.1';
const port =3000

const server =http.createServer((req,res)=>{
    if (req.url ==='/') {
        res.statusCode=200
        res.setHeader('Content-Type','text/plain') ;
        res.end("hello world");
    }
    else if(req.url=== '/about'){
        res.statusCode=200
        res.setHeader('Content-Type','text/plain') ;
        res.end("hello about page");
    }
    else if(req.url=== '/contact'){
        res.statusCode=200
        res.setHeader('Content-Type','text/plain') ;
        res.end("hello contact page");
    }
    else {
        res.statusCode=200
        res.setHeader('Content-Type','text/plain') ;
        res.end("Enter a valid url Sirji");
    }
})

server.listen(port,hostname,()=>{
    console.log(`Server listening at http://${hostname}:${port}`);
})