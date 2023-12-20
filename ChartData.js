// ChartData.js
const mongoose = require('mongoose');

const chartDataSchema = new mongoose.Schema({
  labels: [String],
  values: [Number],
});

const ChartData = mongoose.model('ChartData', chartDataSchema);

module.exports = ChartData;
