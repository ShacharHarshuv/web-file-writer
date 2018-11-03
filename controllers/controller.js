const bodyParser = require('body-parser');
const fs = require('fs');
const urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

// app.get('/', function(req, res){ //should be the same as the next one - TODO - erase this
//     //get file array
//     fs.readdir('./files', function(err, items){
//         //console.log(items);
//         res.render('browse', {files: items});
//     });
// });

//load file
app.use('/', function(req, res){

    let dir = './files' + req.url;
    console.log("req.url = ", req.url);

    fs.readFile(dir, 'utf8', function(err, data){
        if (err) {
            //file does not exist, check if folder exists
            fs.readdir(dir, function(err, items){
                if (err){
                    //directory doesn't exist
                    res.render('notexist',  {dir: req.url});
                }
                else{
                    //a folder exist in the directory
                    res.render('browse', {dir: req.url, files: items});
                }
            });
        }
        else{
            //a file exist in the directory
            console.log(dir);
            res.render('writer', {dir: dir, content: data});
        }
        
    });
})
//save file
app.post('/:file', urlencodedParser, function(req, res){
    console.log(req.body);
    fs.writeFile('./files/' + req.params.file, req.body.content, function(err, data){
        if (err) throw err;
        res.end();
    });
});

} //end of export function