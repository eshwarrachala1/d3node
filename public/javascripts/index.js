(function () {
    $("#report").on('click', function (event) {
        event.preventDefault();
        $.ajax({
            type: "Get",
            url: "http://localhost:8080/NlSql",
            data: { "message": $('#textInput')[0].value},
            contentType: "application/json; charset=utf-8",
            crossDomain: true,
            dataType: "json",
            success: function (records, status, jqXHR) {
                $('#example').DataTable({
                    data: records.data,
                    columns: records.columns,
                    bDestroy: true,
                    dom: "Bfrtip",
                    language: {
                        infoEmpty: "No matching records found",
                    }
                });
            },
            error: function (jqXHR, status) {
                console.log(jqXHR);
            }
        });

    });

})();