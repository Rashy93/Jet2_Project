var mongoose  = require("mongoose");

var timeSheetSchema = mongoose.Schema({
  date:       { type: String },
  hours:      { type: String },
  totalHours: { type: String },
  comment:    { type: String },
  approval:   { type: Boolean}
});

module.exports = mongoose.model("Timesheet", timeSheetSchema);;
