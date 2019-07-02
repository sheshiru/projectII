const express = require("express");
const router = new express.Router();
const distance = require("google-distance-matrix");

distance.key(process.env.APIKEY);

var origins = ["parcmonceauparis"];
var destinations = ["le mesnil esnard"];

distance.matrix(origins, destinations, function(err, distances) {
  if (!err) {
    console.log(distances.rows[0].elements[0].distance.text);
  }
});

module.exports = router;
