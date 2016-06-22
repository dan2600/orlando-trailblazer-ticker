var exports = module.exports;


exports.theXML = function(req, res) {

res.type('text/xml');
  

res.status(200).send('<textblocks><message><name>Brenda Lee Marquez McCool, 49</name><story>Mother of 11 children and two-time cancer survivor</story><death>Orlando, FL, 2016</death></message><message><name>Edward Sotomayor Jr., 34</name><story>Worked for a travel agency that catered to the gay community</story><death>Orlando, FL, 2016</death></message><message><name>Stanley Almodovar III, 23</name><story>Pharmacy technician who loved his family</story><death>Orlando, FL, 2016</death></message><message><name>Luis Omar Ocasio-Capo, 20</name><story>His mom says he loved others and lived as who he was</story><death>Orlando, FL, 2016</death></message><message><name>Islan Nettles, 21</name><story>Assistant fashion designer and self-proclaimed “fashion forward young individual”</story><death>New York, NY, 2013</death></message></textblocks>');
//res.send("shit");
// Just responding with a string, without any template:
// send('Hello World');
};
