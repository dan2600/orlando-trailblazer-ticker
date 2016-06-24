var router = require('express').Router({ mergeParams: true });
var fs = require('fs');
module.exports = router;

router.get('/', function(req, res) {
    var obj;
    var timeNow = new Date();
    res.type('application/xml; charset=utf-8');

    fs.readFile('public/write/number.json', 'utf8', function(err, data) {
        if (err){ throw err;}
      //  console.log(data);
        obj = JSON.parse(data);

        if (timeNow.getTime() > (obj.time + 5000)) {
            var newnumber = obj.number + 1;
            if(newnumber > 73){newnumber = 0}; 
            fs.writeFile("public/write/number.json", "{\"number\": " + newnumber + ", \"time\": " + timeNow.getTime() + "}", function(err) {
                if (err) {
                    return console.log(err);
                }

                //  console.log("The file was saved!");
            });
            return res.status(200).send("<number>" + obj.number + "</number>");
        } else {
            var remainingTime = -1 * (Math.ceil((timeNow.getTime() - (obj.time + 5000)) / 1000));
            //    console.log("too fast! wait " + remainingTime + " more seconds");
            return res.status(200).send("<number>" + (obj.number - 1) + "</number>");

        }

    });

});
