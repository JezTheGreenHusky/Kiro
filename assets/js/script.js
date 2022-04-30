window.addEventListener("load", ()=> {
    let hero_text = document.querySelectorAll(".hero__text");

    // transition del css en 2s
    let loop = (t) => {
        hero_text.forEach((text, index) => {
            setTimeout(() => {
                text.classList.remove("fadeOut");
                text.classList.add("fadeIn");
            }, t * 3000);
    
            t += 2;
    
            setTimeout(() => {
                text.classList.remove("fadeIn");
                text.classList.add("fadeOut");
            }, t * 3000);

            t++

            if(index == hero_text.length - 1){
                loop(t)
            }
        })
    }



    // setTimeout(() => {
    //     hero_text.forEach(text => {
    //         text.classList.remove("fadeIn");
    //         text.classList.add("fadeOut");
    //     });
    // }, 200);

    // setTimeout(() => {
    //     hero_text.forEach(text => {
    //         text.classList.remove("fadeOut");
    //         text.classList.add("fadeIn");
    //     });
    // }, 1200);
    
    /*======================
    -----------
    GALERIA
    -----------
    ======================*/

    let modulo_galeria = () => {
        const grid = new Muuri('.grid', {
            dragEnabled: true,
            layout: {
                rounding: false,
            }
        });
        
        grid.refreshItems();
        grid.refreshItems().layout();
    
        document.getElementById('grid').classList.add('imagenes-cargadas');
    
        // Agregamos listener para las imagenes
        const overlay = document.getElementById('overlay');
        document.querySelectorAll('.grid .item img').forEach((elemento) => {
            elemento.addEventListener('click', () => {
                const ruta = elemento.getAttribute('src');
                const descripcion = elemento.parentNode.parentNode.dataset.descripcion;
    
                overlay.classList.add('activo');
                document.querySelector('#overlay img').src = ruta;
                document.querySelector('#overlay .descripcion').innerHTML = descripcion;
            });
        });
    
        // Eventlistener del boton de cerrar
        document.querySelector('#btn-cerrar-popup').addEventListener('click', () => {
            overlay.classList.remove('activo');
        });
    
        // Eventlistener del overlay
        overlay.addEventListener('click', (evento) => {
            evento.target.id === 'overlay' ? overlay.classList.remove('activo') : '';
        });
    };
    
    modulo_galeria();
    loop(0)
});