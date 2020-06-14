ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:25831").setExtent([425774.025948, 4577805.932925, 438193.620978, 4587223.961803]);
var wms_layers = [];


        var lyr_EsriGraydark_0 = new ol.layer.Tile({
            'title': 'Esri Gray (dark)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_movil_onfoot_1216_1 = new ol.format.GeoJSON();
var features_movil_onfoot_1216_1 = format_movil_onfoot_1216_1.readFeatures(json_movil_onfoot_1216_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
var jsonSource_movil_onfoot_1216_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_movil_onfoot_1216_1.addFeatures(features_movil_onfoot_1216_1);
var lyr_movil_onfoot_1216_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_movil_onfoot_1216_1, 
                style: style_movil_onfoot_1216_1,
                interactive: true,
    title: 'movil_onfoot_1216<br />\
    <img src="styles/legend/movil_onfoot_1216_1_0.png" /> 0 - 95 <br />\
    <img src="styles/legend/movil_onfoot_1216_1_1.png" /> 95 - 316 <br />\
    <img src="styles/legend/movil_onfoot_1216_1_2.png" /> 316 - 671 <br />\
    <img src="styles/legend/movil_onfoot_1216_1_3.png" /> 671 - 1211 <br />\
    <img src="styles/legend/movil_onfoot_1216_1_4.png" /> 1211 - 1849 <br />'
        });

lyr_EsriGraydark_0.setVisible(true);lyr_movil_onfoot_1216_1.setVisible(true);
var layersList = [lyr_EsriGraydark_0,lyr_movil_onfoot_1216_1];
lyr_movil_onfoot_1216_1.set('fieldAliases', {'id_0': 'id_0', 'fid': 'fid', 'id': 'id', 'movil_onfoot_1216': 'movil_onfoot_1216', });
lyr_movil_onfoot_1216_1.set('fieldImages', {'id_0': 'TextEdit', 'fid': 'Range', 'id': 'TextEdit', 'movil_onfoot_1216': 'TextEdit', });
lyr_movil_onfoot_1216_1.set('fieldLabels', {'id_0': 'no label', 'fid': 'no label', 'id': 'no label', 'movil_onfoot_1216': 'inline label', });
lyr_movil_onfoot_1216_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});