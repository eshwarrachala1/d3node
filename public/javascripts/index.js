(function () {
    $("#report").on('click', function (event) {
        event.preventDefault();
        $.ajax({
            type: "Get",
            url: "http://localhost:8080/NlSql",
            data: {"message": $('#textInput')[0].value},
            contentType: "application/json; charset=utf-8",
            crossDomain: true,
            dataType: "json",
            success: function (data, status, jqXHR) {
                $('#example').DataTable({
                    data: data,
                    columns: [{
                            data: 'id',
                            title:'id'
                        },
                        {
                            data: 'cityName',
                            title:'city'
                        },
                        {
                            data: 'people',
                            title:'people'
                        }
                    ],
                    "bDestroy": true
                });
            },
            error: function (jqXHR, status) {
                console.log(jqXHR);
                alert('fail' + status.code);
            }
        });

    });

})();