const express = require('express');
const app = express();
const port = 3300;
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const STATIC_PATH = path.join(__dirname, 'dist');
const IMAGES_PATH = path.join(__dirname, 'images');

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

app.use(express.static(STATIC_PATH));
app.use('/images', express.static(IMAGES_PATH));

// Set the default views directory to html folder
app.set('views', path.join(__dirname, 'src'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index',{});
});

app.get('/favico.ico' , function(req , res){/*code*/});


app.get('/:pageName', (req, res) => {
    const pagename = req.params.pageName;
    res.render(`pages/${pagename}/${pagename}`,{});
});

const server = app.listen(port,  () => {
    const host = server.address().address;
    const port = server.address().port;
    
    console.log("Example app listening at http://%s:%s", host, port);
})