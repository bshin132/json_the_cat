const request = require("request");
const catBreed = process.argv[2];

const fetchBreedDescription = function(breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      //WITH INSTRUCTOR
      if (error != null) {
        callback(error, null)
      } else {
        data = JSON.parse(body);
        if (data.length === 0) {
          callback("Breed not found", null)
        } else {
          callback(null, data[0].description)
        }
      }



      //MY CODE
      // console.log(error)
      // callback(error, null)
      // let data = null;
      // if (!error) {
      //   if (JSON.parse(body).length === 0) {
      //     error = "Breed not found";
      //   } else {
      //     data = JSON.parse(body)[0]["description"];
      //   }
      // }
      // callback(error, data);
    }
  );
};

module.exports = { fetchBreedDescription };
