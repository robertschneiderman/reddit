var request = require('request');

module.exports = {
    get(req, res) {
        request('https://www.reddit.com/hot.json', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                // console.log(body); // Show the HTML for the Google homepage.
                let result = JSON.parse(body);
                result = result.data.children;
                res.json(result);
            }
        });
    }
};