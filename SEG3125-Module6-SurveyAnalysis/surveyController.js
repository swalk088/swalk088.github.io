// required packages
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var fs = require('fs');
const { data } = require('jquery');

// read the data file
function readData(fileName) {
    let dataRead = fs.readFileSync('./data/' + fileName + '.json');

    let infoRead = JSON.parse(dataRead);
    return infoRead;
}

// read the data file
function writeData(info, fileName) {
    var data = JSON.stringify(info);
    fs.writeFileSync('./data/' + fileName + '.json', data);
}

// update the data file, I use "name" to be equal to fruit, or animal or color
// to match with the file names
// I assume we always just add 1 to a single item


// This is the controler per se, with the get/post
module.exports = function(app) {

    // when a user goes to localhost:3000/analysis
    // serve a template (ejs file) which will include the data from the data files
    app.get('/analysis', function(req, res) {
        console.log("got to render")
        try {
            var submissions = readData("submission");

        } catch {
            var submissions = []
        }
        console.log(submissions)
        res.render('showResults', { results: submissions });
        console.log([submissions]);
    });

    // when a user goes to localhost:3000/niceSurvey
    // serve a static html (the survey itself to fill in)
    app.get('/niceSurvey', function(req, res) {
        res.sendFile(__dirname + '/views/niceSurvey.html');
    });

    // when a user types SUBMIT in localhost:3000/niceSurvey 
    // the action.js code will POST, and what is sent in the POST
    // will be recuperated here, parsed and used to update the data files
    app.post('/niceSurvey', urlencodedParser, function(req, res) {

        var json = req.body;

        try {
            var info = readData("submission")
        } catch {
            var info = []
        }

        info.push(json);

        writeData(info, "submission");

        console.log(info);

        res.sendFile(__dirname + "/views/niceSurvey.html");
    });

};