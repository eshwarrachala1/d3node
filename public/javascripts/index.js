(function () {
    // d3.select(".jumbotron").style('background-color', 'lime');
    var data = [{
            "name": "Tiger Nixon",
            "position": "System Architect",
            "salary": "$3,120",
            "start_date": "2011/04/25",
            "office": "Edinburgh",
            "extn": "5421"
        },
        {
            "name": "Garrett Winters",
            "position": "Director",
            "salary": "$5,300",
            "start_date": "2011/07/25",
            "office": "Edinburgh",
            "extn": "8422"
        },
        {
            "name": "Tiger Nixon",
            "position": "System Architect",
            "salary": "$3,120",
            "start_date": "2011/04/25",
            "office": "Edinburgh",
            "extn": "5421"
        },
        {
            "name": "Garrett Winters",
            "position": "Director",
            "salary": "$5,300",
            "start_date": "2011/07/25",
            "office": "Edinburgh",
            "extn": "8422"
        },
        {
            "name": "Tiger Nixon",
            "position": "System Architect",
            "salary": "$3,120",
            "start_date": "2011/04/25",
            "office": "Edinburgh",
            "extn": "5421"
        },
        {
            "name": "Garrett Winters",
            "position": "Director",
            "salary": "$5,300",
            "start_date": "2011/07/25",
            "office": "Edinburgh",
            "extn": "8422"
        },
        {
            "name": "Tiger Nixon",
            "position": "System Architect",
            "salary": "$3,120",
            "start_date": "2011/04/25",
            "office": "Edinburgh",
            "extn": "5421"
        },
        {
            "name": "Garrett Winters",
            "position": "Director",
            "salary": "$5,300",
            "start_date": "2011/07/25",
            "office": "Edinburgh",
            "extn": "8422"
        },
        {
            "name": "Garrett Winters",
            "position": "Director",
            "salary": "$5,300",
            "start_date": "2011/07/25",
            "office": "Edinburgh",
            "extn": "8422"
        },
        {
            "name": "Tiger Nixon",
            "position": "System Architect",
            "salary": "$3,120",
            "start_date": "2011/04/25",
            "office": "Edinburgh",
            "extn": "5421"
        },
        {
            "name": "Garrett Winters",
            "position": "Director",
            "salary": "$5,300",
            "start_date": "2011/07/25",
            "office": "Edinburgh",
            "extn": "8422"
        },
        {
            "name": "Tiger Nixon",
            "position": "System Architect",
            "salary": "$3,120",
            "start_date": "2011/04/25",
            "office": "Edinburgh",
            "extn": "5421"
        },
        {
            "name": "Garrett Winters",
            "position": "Director",
            "salary": "$5,300",
            "start_date": "2011/07/25",
            "office": "Edinburgh",
            "extn": "8422"
        },
        {
            "name": "Tiger Nixon",
            "position": "System Architect",
            "salary": "$3,120",
            "start_date": "2011/04/25",
            "office": "Edinburgh",
            "extn": "5421"
        },
        {
            "name": "Garrett Winters",
            "position": "Director",
            "salary": "$5,300",
            "start_date": "2011/07/25",
            "office": "Edinburgh",
            "extn": "8422"
        }
    ];

    $(document).ready(function () {
        $('#example').DataTable({
            data: data,
            columns: [{
                    data: 'name'
                },
                {
                    data: 'position'
                },
                {
                    data: 'salary'
                },
                {
                    data: 'office'
                }
            ]


        });
    });

    $("#report").on('click', function (event) {
        event.preventDefault();

        var words = $('#textInput')[0].value.split(/\b\s+/);

        var data = {};
        data.title = "title";
        data.message = "message";

        $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: 'http://localhost:8080/NlSQl',
            success: function (data) {
                console.log('success');
                console.log(JSON.stringify(data));
            }
        });
    });

})();