d3.select(".jumbotron").style('background-color', 'lime');

$("#report").on('click', function (event) {
    event.preventDefault();
    alert($('#textInput')[0].value.split(/\b\s+/));
});

