mapboxgl.accessToken = 'pk.eyJ1IjoiYnJ1bm9iZ2YiLCJhIjoiY2trcmE5M2Z1MHFyczJxbnkza2hucXNpaiJ9.RMLPEe9w1AtkWoHebg3HCw';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    //longitude x latitude 
    center: [-43.9419179, -19.9223924],
    zoom: 15,
});

const geojson = {
    type: 'FeatureCollection',
    features: [{
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-43.9380, -19.9320]
            },
            properties: {
                title: 'Praça da Liberdade',
                description: ' Descrição: Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam iure voluptate neque, blanditiis laudantium similique iusto! Exercitationem praesentium soluta eius. '
            }
        }, {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-43.9259, -19.9170]
            },
            properties: {
                title: 'Benvinda',
                description: ' Descrição: Serviço que realiza orientação, atendimento e acompanhamento às mulheres a partir de 18 anos que já vivenciaram e/ou vivenciam situações de violência doméstica e familiar com base no gênero, sejam elas psicológica, física, sexual, patrimonial ou moral, de acordo com a Lei Maria da Penha (Lei N° 11.340/06). É ligado à Diretoria de Políticas para as Mulheres, da Subsecretaria de Direitos de Cidadania.'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-43.9551, -19.9207]
            },
            properties: {
                title: 'Delegacia de plantão especializada ',
                description: ' Descrição: Delegacia de plantão especializada em atendimento a mulher, criança, adolescente e vítimas de intolerância. Horário de Funcionamento: 08:30 às 18:30 horas'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-43.9184, -19.9164]
            },
            properties: {
                title: 'Mulheres das Gerais ',
                description: ' Descrição: A Casa Sempre Viva é um dos projetos mantidos pelo Consórcio de Promoção da Cidadania Mulheres das Gerais cujo objetivo é acolher temporariamente mulheres em situação de violência de gênero com risco iminente de morte.'
            }
        },

        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-43.9324, -19.9318]
            },
            properties: {
                title: 'Casa de Referência da Mulher Tina Martins ',
                description: ' Descrição: A Casa de Referência da Mulher Tina Martins é um espaço, o qual visa fortalecer mulheres em situações de vulnerabilidade e/ou violência doméstica. Trabalha em 4 eixos: Formação politica, abrigo, acolhimento e encaminhamento'
            }
        },

        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-43.9541, -19.9187]
            },
            properties: {
                title: 'DEPAM - Delegacia de Plantão de Atendimento à Mulher ',
                description: ' Descrição: Delegacia aberta 24 horas'
            }
        },

        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-43.9399, -19.9190]
            },
            properties: {
                title: ' NUDEM – Defensoria publica de defesa da mulher',
                description: ' Descrição: fornecem atendimento jurídico à mulheres em situação de violência, sendo responsáveis por prestar orientação jurídica e defesa em juízo, em todos os graus, das cidadãs de baixa renda'
            }
        },

        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-43.9398, -19.9193]
            },
            properties: {
                title: ' Centro Risoleta Neves de Atendimento',
                description: ' Descrição: fornecem atendimento das 8:00 às 18:00'
            }
        },


    ]
};

// add markers to map
for (const feature of geojson.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
        .setLngLat(feature.geometry.coordinates)
        .setPopup(
            new mapboxgl.Popup({
                offset: 25
            }) // add popups
            .setHTML(
                `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
            )
        ).addTo(map);
}