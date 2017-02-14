/*
*    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    |
│    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
│    │    │    │    └───── month (1 - 12)
│    │    │    └────────── day of month (1 - 31)
│    │    └─────────────── hour (0 - 23)
│    └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, OPTIONAL)
*/


var schedule = require('node-schedule');
 
var j = schedule.scheduleJob('15 * * * *', function(){
  console.log('The answer to life, the universe, and everything!');
});

var x = schedule.scheduleJob({hour: 15, minute: 25, dayOfWeek: 3}, function(){
  console.log('Time for tea!');
});