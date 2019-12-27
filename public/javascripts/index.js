(function () {

    $("#report").on('click', function (event) {
        event.preventDefault();
        var param = $('#textInput')[0].value
        var data = {
            param: param
        };
        data.title = "title";
        data.message = "message";

        $.ajax({
            type: "Get",
            url: "http://localhost:8080/NlSql",
            data: JSON.stringify(data), // now data come in this function
            contentType: "application/json; charset=utf-8",
            crossDomain: true,
            dataType: "json",
            success: function (data, status, jqXHR) {
                console.log(data);

                $('#example').DataTable({
                    data: data,
                    columns: [{
                            data: 'id'
                        },
                        {
                            data: 'cityName'
                        }
                    ]
                });
            },
            error: function (jqXHR, status) {
                // error handler
                console.log(jqXHR);
                alert('fail' + status.code);
            }
        });

    });

})();