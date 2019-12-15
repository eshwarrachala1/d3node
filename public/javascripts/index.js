(function () {
    // d3.select(".jumbotron").style('background-color', 'lime');

    $(document).ready(function () {
        $('#example').DataTable();
    });

    $("#report").on('click', function (event) {
        event.preventDefault();
        alert($('#textInput')[0].value.split(/\b\s+/));
    });

})();