const Flight = require('../models/flight')

module.exports ={
    index,
    show,
    new: newFlight,
    create,
    
};

function index(req,res) {
    Flight.find({}, function(err, flights){
        res.render('flights/index', { title: 'All Flights', flights });
    });
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight){
        console.log(flight);
        res.render('flights/show', {title: 'Flight Details', flight });
    });
}

function create (req, res) {
const flight = new Flight(req.body);
flight.save(function(err) {
    if (err) return res.redirect('/flights/new');
    res.redirect('/flights');
});
}

function newFlight(req, res) {
   res.render('flights/new'); 
}