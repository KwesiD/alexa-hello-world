const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');
const app = express();
const publicPath = path.resolve(__dirname, "public");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(publicPath));




app.get('/',(req,res) => {
	res.sendFile('test.json', { root: path.join(__dirname, 'public') });
});


app.listen(process.env.PORT || 3000);