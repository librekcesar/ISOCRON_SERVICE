var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_mxs_mty_gdl_2_1 = new ol.format.GeoJSON();
var features_mxs_mty_gdl_2_1 = format_mxs_mty_gdl_2_1.readFeatures(json_mxs_mty_gdl_2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mxs_mty_gdl_2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mxs_mty_gdl_2_1.addFeatures(features_mxs_mty_gdl_2_1);
var lyr_mxs_mty_gdl_2_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mxs_mty_gdl_2_1, 
                style: style_mxs_mty_gdl_2_1,
                interactive: true,
    title: 'mxs_mty_gdl_2<br />\
    <img src="styles/legend/mxs_mty_gdl_2_1_0.png" /> ESTACION<br />\
    <img src="styles/legend/mxs_mty_gdl_2_1_1.png" /> INTER_CERCANA<br />\
    <img src="styles/legend/mxs_mty_gdl_2_1_2.png" /> SERVICE_PARTNER<br />\
    <img src="styles/legend/mxs_mty_gdl_2_1_3.png" /> <br />'
        });
var format_UBICA_ESTACION_sinhuix_2 = new ol.format.GeoJSON();
var features_UBICA_ESTACION_sinhuix_2 = format_UBICA_ESTACION_sinhuix_2.readFeatures(json_UBICA_ESTACION_sinhuix_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UBICA_ESTACION_sinhuix_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UBICA_ESTACION_sinhuix_2.addFeatures(features_UBICA_ESTACION_sinhuix_2);
var lyr_UBICA_ESTACION_sinhuix_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UBICA_ESTACION_sinhuix_2, 
                style: style_UBICA_ESTACION_sinhuix_2,
                interactive: true,
                title: '<img src="styles/legend/UBICA_ESTACION_sinhuix_2.png" /> UBICA_ESTACION_sinhuix'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_mxs_mty_gdl_2_1.setVisible(true);lyr_UBICA_ESTACION_sinhuix_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_mxs_mty_gdl_2_1,lyr_UBICA_ESTACION_sinhuix_2];
lyr_mxs_mty_gdl_2_1.set('fieldAliases', {'zonificacion': 'zonificacion', 'station_code': 'station_code', 'region': 'region', 'station_name': 'station_name', 'km2': 'km2', 'inter': 'inter', });
lyr_UBICA_ESTACION_sinhuix_2.set('fieldAliases', {'Estado': 'Estado', 'Municipio': 'Municipio', 'Dirección': 'Dirección', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'STATION': 'STATION', });
lyr_mxs_mty_gdl_2_1.set('fieldImages', {'zonificacion': 'TextEdit', 'station_code': 'TextEdit', 'region': 'TextEdit', 'station_name': 'TextEdit', 'km2': 'TextEdit', 'inter': 'TextEdit', });
lyr_UBICA_ESTACION_sinhuix_2.set('fieldImages', {'Estado': 'TextEdit', 'Municipio': 'TextEdit', 'Dirección': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'STATION': 'TextEdit', });
lyr_mxs_mty_gdl_2_1.set('fieldLabels', {'zonificacion': 'header label', 'station_code': 'header label', 'region': 'header label', 'station_name': 'header label', 'km2': 'header label', 'inter': 'header label', });
lyr_UBICA_ESTACION_sinhuix_2.set('fieldLabels', {'Estado': 'no label', 'Municipio': 'no label', 'Dirección': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'STATION': 'no label', });
lyr_UBICA_ESTACION_sinhuix_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});