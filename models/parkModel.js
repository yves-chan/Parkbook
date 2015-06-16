/**
 * Created by vincentchan on 15-06-14.
 */

var mongoose = require('mongoose');

var parkSchema = new mongoose.Schema({
    name: String,
    streetNumber: String,
    streetName: String,
    lat: Number,
    lon: Number
},
    {collection: 'parks'});

var parkModel = mongoose.model('Park', parkSchema);

//Constructor
function Park(park){
    this.name = park.name;
    this.streetNumber = park.streetNumber;
    this.streetName = park.streetName;
    this.lat = park.lat;
    this.lon = park.lon;
}

Park.prototype.save = function() {
    var park = {
        name: this.name,
        streetNumber: this.streetNumber,
        streetName: this.streetName,
        lat: this.lat,
        lon: this.lon
    };
    var newPark = new parkModel(park);
    newPark.save(function(err) {
        if (err) {
            console.error("park save failed [parkModel.js]");
        }
    });
};

module.exports = Park;
module.exports.parkModel = parkModel;