$(document).ready(function() {
  function rawNumber(str) {
    return parseInt(str.replace(/\$|,/g, ""));
  }

  function parseFormattedNumber(column) {
    return function(cell, record) {
      var html = $(cell).html();

      record[column + "-num"] = rawNumber(html);
      return html;
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
    }
  });
});
