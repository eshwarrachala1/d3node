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
            success: function (records, status, jqXHR) {

                options = {}; //<--- RESET
                options.destroy = true;
                options.responsive = true;
                options.data = records.data;
                options.columns = records.columns;
                options.searching = false;
                if ($.fn.dataTable.isDataTable('#example')) {
                    $('#example').DataTable().destroy();
                    $('#example tbody').empty();
                    $('#example tHead').empty();
                }
                $('#example').DataTable(options).draw();

            },
            error: function (jqXHR, status) {
                console.log(jqXHR);
            }
        });

    });

})();