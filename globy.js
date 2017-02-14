const globby = require('globby');
 
globby(['*', '!cake']).then(function (paths) {
    console.log(paths);
    //=> ['unicorn', 'rainbow'] 
});