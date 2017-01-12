var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("gaurav@123", salt); // create password hash and save in db

var res1 = bcrypt.compareSync("gaurav@123", hash); // true 
var res2 = bcrypt.compareSync("not_bacon", hash); // false
console.log(res1,'   ', res2);

var passDB = '';



// comapre password with hash
bcrypt.compare("B4c0/\/", hash, function(err, res) {
    console.log('wrong pass', res);
});
bcrypt.compare("gaurav@123", hash, function(err, res) {
    // res = false 
    console.log('right pass', res);
});