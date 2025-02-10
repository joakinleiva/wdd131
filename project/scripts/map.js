// Map
var map = L.map('map').setView([-29.9058174, -71.2501308], 12); // Coordenadas de La Serena, Coquimbo

        // Capa de mapa de OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Marcador
        L.marker([-29.9058174, -71.2501308]).addTo(map)
            .bindPopup('La Serena, Coquimbo')
            .openPopup();