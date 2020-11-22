const moment = require('moment');
const axios = require('axios');

function formatMessage(message){
  return {
      message,
      time: moment().format('h:mm a')
  };
}

async function getSimilarity(text1, text2) {
  //gets the similarity score between two strings

  var url = "https://api.dandelion.eu/datatxt/sim/v1";

  var plusText1 = text1.replace(/\s/g, "+");
  var plusText2 = text2.replace(/\s/g, "+");
  url +=
    "?text1=" +
    plusText1 +
    "&text2=" +
    plusText2 +
    "&lang=en" +
    "&token=c8a3cb3ba95d4a2094179673eb720550";

  console.log(url);

  let res = await axios.get(url);
  return res.data.similarity;
}

module.exports = { formatMessage, getSimilarity };