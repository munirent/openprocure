$(document).ready(function() {
  // Make a plain integer
  function rawNumber(str) {
    return Number(str.replace(/\$|,/g, "")) || 0;
  }

  // Save the formatted number and return a plain integer
  function parseFormattedNumber(column) {
    return function(cell, record) {
      record[column + "-formatted"] = cell.innerHTML;
      return rawNumber(cell.textContent);
    }
  }

  // Write back the saved formatted number
  function writeFormattedNumber(column) {
    return function(record) {
      return record[column + "-formatted"];
    }
  }

  $(".procurement-table").dynatable({
    features: {
      paginate: false
    },
    params: {
      records: "agencies"
    },
    readers: {
      threshold: parseFormattedNumber("threshold"),
      population: parseFormattedNumber("population")
    },
    writers: {
      threshold: writeFormattedNumber("threshold"),
      population: writeFormattedNumber("population")
    },
  });
});
