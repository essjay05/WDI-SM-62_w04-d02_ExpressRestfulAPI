const 
    express = express(),
    app = express();

app.listen(3000, err => {
    console.log(err || `App listening on ${3000}`)
})
