$(document).ready(function() {
  $("#procurement-table").dynatable({
    dataset: {
      perPageDefault: 1e6,
    },
    params: {
      records: "agencies"
    }
  });
});
