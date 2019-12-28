(function () {

    $("#report").on('click', function (event) {
        event.preventDefault();
     
        $.ajax({
            type: "Get",
            url: "http://localhost:8080/NlSql",
            data: {
                "message": $('#textInput')[0].value
            },
            contentType: "application/json; charset=utf-8",
            crossDomain: true,
            dataType: "json",
            success: function (data, status, jqXHR) {
                // console.log(data);
                table = $('#example').DataTable({
                    retrieve: true,
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