const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

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
        Ticket.find({flight: req.params.id}, function (err, tickets) {
            console.log(flight);
            res.render('flights/show', {title: 'Flight Details', flight, tickets });
        } );
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