const request = require("request");

let breedName = process.argv[2];
if (process.argv.length === 2) {
  breedName = "Siberian";
}
// console.log("breedName", breedName);
request(
  `https://api.thecasstapi.com/v1/breeds/search?q=${breedName}`,
  (error, response, body) => {
    if (response) {
      if (body.length > 2) {
        const data = JSON.parse(body);
        console.log(data);
      } else {
        console.log("Breed not found");
      }
    } else {
      console.log("Request Failed");
      console.log("error", error.code);
    }
  }
);
