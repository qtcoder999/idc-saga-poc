import axios from "axios";

export async function fetchLinksFromServer() {
  //Generate a random number between 1 to 362802
  var randomNumber = Math.floor(Math.random() * 362802) + 1;
  return axios
    .get(
      "https://api.harvardartmuseums.org/Image?size=1&page="+ randomNumber + "&apikey=6802de50-0503-11e9-8fc2-7765c49b991f"
    ).then(function (response) {
      return response.data;
    })
    .catch(function(error) {
      console.log(error);
    });
}
