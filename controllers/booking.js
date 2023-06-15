const User = require("../models/users");

exports.getBookings = (req, res, next) => {
  User.findAll().then((booking) => {
    res.json(booking);
  });
};

exports.getBooking = (req, res, next) => {
  const bookId = req.params.id;
  console.log(bookId);
  User.findByPk(bookId).then((booking) => {
    res.json(booking);
  });
};

exports.addBooking = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const DoA = req.body.DoA;
  User.create({
    name: name,
    email: email,
    phone: phone,
    DoA: DoA,
  });
  res.send("1");
};

exports.updateBooking = (req, res, next) => {
  const bookId = req.params.id;
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const DoA = req.body.DoA;
  User.findByPk(bookId).then((booking) => {
    booking.set({
      name: name,
      email: email,
      phone: phone,
      DoA: DoA,
    });

    booking.save();
    res.send("Update Booking");
  });
};

exports.DeleteBooking = (req, res, next) => {
  const bookId = req.params.id;
  console.log(bookId);
  User.findByPk(bookId).then((booking) => {
    booking.destroy().then(res.send("Deleted"));
  });
};
