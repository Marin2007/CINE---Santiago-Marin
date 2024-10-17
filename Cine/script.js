function recomendar(genero) {
    const edad = document.getElementById('edad').value;
    let recomendacion = '';

    if (edad === '') {
        recomendacion = 'Por favor, ingresa tu edad.';
    } else {
        switch(genero) {
            case 'comedia':
                if (edad >= 16) {
                    recomendacion = 'Se recomienda ver: The Wolf of Wall Street';
                } else if (edad >= 13) {
                    recomendacion = 'Se recomienda ver: The Truman Show';
                } else {
                    recomendacion = 'Se recomienda ver: Back to the Future';
                }
                break;
            case 'crimen':
                if (edad >= 16) {
                    recomendacion = 'Se recomienda ver: The Godfather';
                } else if (edad >= 13) {
                    recomendacion = 'Se recomienda ver: El secreto de sus ojos';
                } else {
                    recomendacion = 'No hay películas de crimen disponibles para tu edad.';
                }
                break;
            case 'drama':
                if (edad >= 16) {
                    recomendacion = 'Se recomienda ver: Taxi Driver';
                } else if (edad >= 13) {
                    recomendacion = 'Se recomienda ver: The Shawshank Redemption';
                } else {
                    recomendacion = 'Se recomienda ver:: Casablanca';
                }
                break;
            case 'musical':
                if (edad >= 16) {
                    recomendacion = 'Se recomienda ver: The Rocky Horror Picture Show';
                } else if (edad >= 13) {
                    recomendacion = 'Se recomienda ver: Les Miserables';
                } else {
                    recomendacion = 'Se recomienda ver: La La Land';
                }
                break;
            default:
                recomendacion = 'No se encontró este genéro';
        }
    }

    document.getElementById('recomendacion').innerText = recomendacion;
}