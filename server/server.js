//requires
let express = require(`express`);
let app = express();
let bodyParser = require(`body-parser`);
const port=5000;
let quotesArray = [`butt`,`butt`,`butt`,`butt`,`butt`,`butt`,`butt`,`butt`,`butt`,`butt`,`butt`,`butt`,`butt`,`butt`,];
//uses
app.use(express.static(`server/public`));
//boop
app.use( bodyParser.urlencoded({extended: true}));
app.listen(port, ()=> console.log('listening on port', port));


app.get(`/quote`, (req,res) => {
console.log('GET request is being handled for /quote', req.body);
res.send(quotesArray)}); //end get quotes

app.post(`/quote`, (req, res)=> {
    console.log('in POST hit for /quote route', req.body);
    quotesArray.push(req.body.name);
    res.sendStatus(200);
    
});//end quotes POST