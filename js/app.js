var key =
    'pk.eyJ1Ijoiam9zaC1jaGFubmluIiwiYSI6ImNqaWM1Ynk4cDFwMWIza25ib3V1M25xbDAifQ.i0piwRhrypyAPvVNg1EjtQ';
var NTAD =
    'https://maps.bts.dot.gov/services/rest/services/NTAD'
var layers = {
    strategicPorts: new ol.layer.Tile({
        visible: false,
        source: new ol.source.TileArcGISRest({
            params: {
                layers: 'show:0',
                FORMAT: 'png',
                DPI: 96
            },
            url: `${NTAD}/Strategic_Ports/MapServer`
        }),
    }),
    militaryBases: new ol.layer.Tile({
        visible: false,
        source: new ol.source.TileArcGISRest({
            params: {
                layers: 'show:0',
                FORMAT: 'png',
                DPI: 96
            },
            url: `${NTAD}/MilitaryBases/MapServer`
        }),
    }),
}
var basemaps = {
    dark: new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: 'https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=' +
                key + '',

        }),
        visible: false
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
    'satellite-streets': new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: 'https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v10/tiles/256/{z}/{x}/{y}?access_token=' +
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
        visible: true
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
    'whamm!': new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: 'https://api.mapbox.com/styles/v1/josh-channin/cjiccdo4i0cpt2rpebzbl39cw/tiles/256/{z}/{x}/{y}?access_token=' +
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
        basemaps.outdoors,
        basemaps.dark,
        basemaps.light,
        basemaps.satellite,
        basemaps['satellite-streets'],
        basemaps.streets,
        basemaps.vintage,
        basemaps.terminal,
        basemaps.decimal,
        basemaps.north,
        basemaps['whamm!'],
        layers.strategicPorts,
        layers.militaryBases
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
document.querySelector('.basemaps span').innerHTML = '<span>' + Object.keys(basemaps)[0] + '</span>';
document.querySelector('.basemaps').addEventListener('click', function () {
    counter >= Object.keys(basemaps).length - 1 ? counter = 0 : counter++;
    Object.keys(basemaps).forEach(function (l) {
        basemaps[l].setVisible(false)
    })
    basemaps[Object.keys(basemaps)[counter]].setVisible(true);
    document.querySelector('.basemaps span').innerHTML = '<span>' + Object.keys(basemaps)[counter] + '</span>';
});

document.querySelectorAll('.layers span').forEach(el => el.addEventListener('click', function (e) {
    // console.log(e.srcElement.id);
    layers[e.srcElement.id] ?
        !layers[e.srcElement.id].getVisible() ?
            layers[e.srcElement.id].setVisible(true) :
            layers[e.srcElement.id].setVisible(false)
        : console.log('no layer');
}));