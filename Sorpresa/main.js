onload = () => {
        document.body.classList.remove("container");

        const audioPlayer = document.getElementById('audioPlayer');

        // Funciones para mover el reproductor
        function moveAt(pageX, pageY) {
                var movimientoY = pageY - audioPlayer.offsetHeight / 2 + 'px'
                audioPlayer.style.left = pageX - audioPlayer.offsetWidth / 2 + 'px';
                audioPlayer.style.top = movimientoY;
        }

        function onMouseMove(event) {
                moveAt(event.pageX, event.pageY + 55);
                event.preventDefault(); // Evitar el desplazamiento de la página
        }

        function onTouchMove(event) {
                moveAt(event.touches[0].pageX, event.touches[0].pageY);
                event.preventDefault(); // Evitar el desplazamiento de la página
        }

        audioPlayer.onmousedown = function (event) {

                document.addEventListener('mousemove', onMouseMove);
                // Usar una función separada para el evento mouseup
                function onMouseUp() {
                        document.removeEventListener('mousemove', onMouseMove);
                        document.removeEventListener('mouseup', onMouseUp); // Limpiar el evento
                }

                document.addEventListener('mouseup', onMouseUp); // Añadir el evento mouseup
        };


        audioPlayer.ontouchstart = function (event) {
                document.addEventListener('touchmove', onTouchMove);
                audioPlayer.ontouchend = function () {
                        document.removeEventListener('touchmove', onTouchMove);
                        audioPlayer.ontouchend = null;
                };
        };

        audioPlayer.ondragstart = function () {
                return false; // Prevenir el comportamiento de arrastre predeterminado
        };
};
