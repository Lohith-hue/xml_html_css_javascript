var map = L.map('map').setView([24.7549411, 46.6547213], 13);  

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> NBAI contributors'}).addTo(map);

        