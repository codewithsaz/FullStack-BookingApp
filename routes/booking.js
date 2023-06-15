const express = require("express");

const router = express.Router();
const bookingController = require("../controllers/booking");

router.get("/bookings", bookingController.getBookings);

router.get("/booking/:id", bookingController.getBooking);

router.post("/add-booking", bookingController.addBooking);

router.put("/update-booking/:id", bookingController.updateBooking);

router.delete("/delete-booking/:id", bookingController.DeleteBooking);

module.exports = router;
