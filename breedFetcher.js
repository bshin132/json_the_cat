const request = require("request");
const catBreed = process.argv[2];

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${catBreed}`,
  (error, response, body) => {
    if (error) {
      console.log("ERROR");
      return error;
    }
    const data = JSON.parse(body);
    if (data.length <= 0) {
      console.log("Breed not found");
      return;
    }

    const description = data[0].description;
    console.log(description);
    console.log(typeof data);
  }
);
