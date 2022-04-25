function autoClick() {
    $("#download").click();
}

$(document).ready(function() {
    var element = $("#htmlContent");

    $("#download").on('click', function() {

        html2canvas(element, {
            onrendered: function(canvas) {
                var imageData = canvas.toDataURL("image/jpg");
                var newData = imageData.replace(/^data:image\/jpg/, "data:application/octet-stream");
                $("#download").attr("download", "Rezultat.jpg").attr("href", newData);
            }
        });

    });
});



