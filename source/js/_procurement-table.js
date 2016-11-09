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

  // 
  function filterBreakpoints(column) {
    return function (record, queryValue) {
      var match;
      if(match = queryValue.match("([0-9,]+).*to[^0-9]*([0-9,]+)")) {
        return between(record[column], rawNumber(match[1]), rawNumber(match[2]) - 1);
      } else if(match = queryValue.match("<[^0-9]*([0-9,]+)")) {
        return between(record[column], 0, rawNumber(match[1]) - 1);
      } else if(match = queryValue.match(">[^0-9]*([0-9,]+)")) {
        return between(record[column], rawNumber(match[1]), Infinity);
      } else {
        return true;
      }
    }
  }

  function between(value, min, max) {
    return value >= min && value <= max;
  }

  $(".procurement-table")
 .bind("dynatable:init", function(e, dynatable) {
    dynatable.queries.functions["threshold"] = filterBreakpoints("threshold");
  }) 
  .dynatable({
    features: {
      paginate: false
    },
    params: {
      records: "agencies"
    },
    table: {
      copyHeaderAlignment: false,
      copyHeaderClass: true,
    },
    readers: {
      discretionaryThreshold: parseFormattedNumber("discretionaryThreshold"),
      formalThreshold: parseFormattedNumber("formalThreshold"),
      population: parseFormattedNumber("population")
    },
    writers: {
      discretionaryThreshold: writeFormattedNumber("discretionaryThreshold"),
      formalThreshold: writeFormattedNumber("formalThreshold"),
      population: writeFormattedNumber("population")
    },
    inputs: {
      queries: $(
        "#filter-state, #filter-type"
      )
    }
  });
});
