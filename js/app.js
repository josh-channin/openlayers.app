var key =
    'pk.eyJ1Ijoiam9zaC1jaGFubmluIiwiYSI6ImNqaWM1Ynk4cDFwMWIza25ib3V1M25xbDAifQ.i0piwRhrypyAPvVNg1EjtQ';
var layers = {
    dark: new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: 'https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=' +
                key + '',

        }),
        visible: true
    }),
    outdoors: new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: 'https://api.mapbox.com/styles/v1/mapbox/outdoors-v9/tiles/256/{z}/{x}/{y}?access_token=' +
                key + '',

        }),
        visible: false
    }),
    light: new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: 'https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=' +
                key + '',

        }),
        visible: false
    }),
    satellite: new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: 'https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}?access_token=' +
                key + '',

        }),
        visible: false
    }),
    streets: new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: 'https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/256/{z}/{x}/{y}?access_token=' +
                key + '',

        }),
        visible: false
    }),
    vintage: new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: 'https://api.mapbox.com/styles/v1/josh-channin/cjicanex30a6w2st4l87omv04/tiles/256/{z}/{x}/{y}?access_token=' +
                key + '',

        }),
        visible: false
    }),
    terminal: new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: 'https://api.mapbox.com/styles/v1/josh-channin/cjicay4n007hj2rrwnqmreq9e/tiles/256/{z}/{x}/{y}?access_token=' +
                key + '',

        }),
        visible: false
    }),
    decimal: new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: 'https://api.mapbox.com/styles/v1/josh-channin/cjicay5jj0aft2slbblb9o38e/tiles/256/{z}/{x}/{y}?access_token=' +
                key + '',

        }),
        visible: false
    }),
    north: new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: 'https://api.mapbox.com/styles/v1/josh-channin/cjhm5cd6u03l82rsesictjy3o/tiles/256/{z}/{x}/{y}?access_token=' +
                key + '',

        }),
        visible: false
    }),
}
var map = new ol.Map({
    controls: new ol.control.defaults({
        attribution: false,
        zoom: false,
        rotate: false
    }),
    layers: [
        layers.outdoors,
        layers.dark,
        layers.light,
        layers.satellite,
        layers.streets,
        layers.vintage,
        layers.terminal,
        layers.decimal,
        layers.north
    ],
    target: 'map',
    view: new ol.View({
        center: [-10827819, 4633985],
        zoom: 5
    })
});
map.getViewport().style.cursor = "-webkit-grab";
map.on('pointerdrag', function () {
    map.getViewport().style.cursor = "-webkit-grabbing";
});

map.on('pointerup', function () {
    map.getViewport().style.cursor = "-webkit-grab";
});
var counter = 0;
document.querySelector('.fa-map').addEventListener('click', function () {
    counter >= Object.keys(layers).length - 1 ? counter = 0 : counter++;
    Object.keys(layers).forEach(function (l) {
        layers[l].setVisible(false)
    })
    layers[Object.keys(layers)[counter]].setVisible(true);
});