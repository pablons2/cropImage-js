
document.addEventListener('DOMContentLoaded', function() {
    var cropper;

    document.getElementById('input-foto-user').addEventListener('change', function(event) {
        var input = event.target;
        var reader = new FileReader();

        reader.onload = function() {
            var dataURL = reader.result;
            document.getElementById('image').src = dataURL;

            if (cropper) {
                cropper.destroy();
            }

            cropper = new Cropper(document.getElementById('image'), {
                aspectRatio: 1,
                crop: function(event) {
                    event.detail.width = 100;
                    event.detail.height = 100;
                    // Aqui você pode acessar as coordenadas do recorte utilizando event.detail.x, event.detail.y, event.detail.width, event.detail.height
                }
            });
        };

        reader.readAsDataURL(input.files[0]);
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            validarCorte();
        }
    });

    function validarCorte() {
        if (cropper) {
            var croppedCanvas = cropper.getCroppedCanvas();
            var croppedImage = croppedCanvas.toDataURL('image/png');
            document.getElementById('image').src = croppedImage;
            cropper.destroy();
            var imagemfinal = croppedImage
       
        }
    }
});






