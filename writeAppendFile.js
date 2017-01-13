var fs = require('fs');

myText = `
 ===========================

       SAMPLE TEXT

============================

* Thug Life
* Rock On!!!!

-----------------------------
`;

fs.writeFile('sample.txt', myText.trim(), function(err){
    if(err)throw err;
    else
    console.log('File Created');
});