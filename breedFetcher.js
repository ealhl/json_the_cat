const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      if (error) return callback(error, null);

      if (response && body.length <= 2)
        return callback(error, null);

      if (!error && response && body.length > 2) {
        const data = JSON.parse(body);
        callback(error, data[0].description);
      }
    }
  );
};

module.exports = { fetchBreedDescription };
