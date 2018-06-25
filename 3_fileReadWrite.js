var fs = require('fs');

fs.readFile('testFile.txt', 'utf-8', function(err, data){
    fs.writeFile('testWrite.txt', data, function(msg){
        console.log("done!")
    });
});

