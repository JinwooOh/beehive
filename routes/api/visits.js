module.exports = function(app) {
  app.post('/api/visits', function(req, res) {
    // Store the supplied visit data
    app.visits.push(req.body);
    // console.log(app.visits);
    const visitId = app.visits.length;
    console.log(`Stored visit count: ${visitId}`);

    res.status(201).json({ id: visitId });
  });
};
