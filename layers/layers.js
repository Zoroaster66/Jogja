var wms_layers = [];


        var lyr_OpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_BDH_Karangmojo_1 = new ol.format.GeoJSON();
var features_BDH_Karangmojo_1 = format_BDH_Karangmojo_1.readFeatures(json_BDH_Karangmojo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BDH_Karangmojo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BDH_Karangmojo_1.addFeatures(features_BDH_Karangmojo_1);
var lyr_BDH_Karangmojo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BDH_Karangmojo_1, 
                style: style_BDH_Karangmojo_1,
                popuplayertitle: 'BDH_Karangmojo',
                interactive: true,
                title: '<img src="styles/legend/BDH_Karangmojo_1.png" /> BDH_Karangmojo'
            });
var format_BDH_KPBNTL_2 = new ol.format.GeoJSON();
var features_BDH_KPBNTL_2 = format_BDH_KPBNTL_2.readFeatures(json_BDH_KPBNTL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BDH_KPBNTL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BDH_KPBNTL_2.addFeatures(features_BDH_KPBNTL_2);
var lyr_BDH_KPBNTL_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BDH_KPBNTL_2, 
                style: style_BDH_KPBNTL_2,
                popuplayertitle: 'BDH_KPBNTL',
                interactive: true,
                title: '<img src="styles/legend/BDH_KPBNTL_2.png" /> BDH_KPBNTL'
            });
var format_BDH_Paliyam_3 = new ol.format.GeoJSON();
var features_BDH_Paliyam_3 = format_BDH_Paliyam_3.readFeatures(json_BDH_Paliyam_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BDH_Paliyam_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BDH_Paliyam_3.addFeatures(features_BDH_Paliyam_3);
var lyr_BDH_Paliyam_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BDH_Paliyam_3, 
                style: style_BDH_Paliyam_3,
                popuplayertitle: 'BDH_Paliyam',
                interactive: true,
                title: '<img src="styles/legend/BDH_Paliyam_3.png" /> BDH_Paliyam'
            });
var format_BDH_Panggang_4 = new ol.format.GeoJSON();
var features_BDH_Panggang_4 = format_BDH_Panggang_4.readFeatures(json_BDH_Panggang_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BDH_Panggang_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BDH_Panggang_4.addFeatures(features_BDH_Panggang_4);
var lyr_BDH_Panggang_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BDH_Panggang_4, 
                style: style_BDH_Panggang_4,
                popuplayertitle: 'BDH_Panggang',
                interactive: true,
                title: '<img src="styles/legend/BDH_Panggang_4.png" /> BDH_Panggang'
            });
var format_BDH_Playen_5 = new ol.format.GeoJSON();
var features_BDH_Playen_5 = format_BDH_Playen_5.readFeatures(json_BDH_Playen_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BDH_Playen_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BDH_Playen_5.addFeatures(features_BDH_Playen_5);
var lyr_BDH_Playen_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BDH_Playen_5, 
                style: style_BDH_Playen_5,
                popuplayertitle: 'BDH_Playen',
                interactive: true,
                title: '<img src="styles/legend/BDH_Playen_5.png" /> BDH_Playen'
            });

lyr_OpenTopoMap_0.setVisible(true);lyr_BDH_Karangmojo_1.setVisible(true);lyr_BDH_KPBNTL_2.setVisible(true);lyr_BDH_Paliyam_3.setVisible(true);lyr_BDH_Panggang_4.setVisible(true);lyr_BDH_Playen_5.setVisible(true);
var layersList = [lyr_OpenTopoMap_0,lyr_BDH_Karangmojo_1,lyr_BDH_KPBNTL_2,lyr_BDH_Paliyam_3,lyr_BDH_Panggang_4,lyr_BDH_Playen_5];
lyr_BDH_Karangmojo_1.set('fieldAliases', {'FID': 'FID', });
lyr_BDH_KPBNTL_2.set('fieldAliases', {'FID': 'FID', });
lyr_BDH_Paliyam_3.set('fieldAliases', {'FID': 'FID', });
lyr_BDH_Panggang_4.set('fieldAliases', {'FID': 'FID', });
lyr_BDH_Playen_5.set('fieldAliases', {'FID': 'FID', });
lyr_BDH_Karangmojo_1.set('fieldImages', {'FID': '', });
lyr_BDH_KPBNTL_2.set('fieldImages', {'FID': '', });
lyr_BDH_Paliyam_3.set('fieldImages', {'FID': '', });
lyr_BDH_Panggang_4.set('fieldImages', {'FID': '', });
lyr_BDH_Playen_5.set('fieldImages', {'FID': '', });
lyr_BDH_Karangmojo_1.set('fieldLabels', {'FID': 'no label', });
lyr_BDH_KPBNTL_2.set('fieldLabels', {'FID': 'no label', });
lyr_BDH_Paliyam_3.set('fieldLabels', {'FID': 'no label', });
lyr_BDH_Panggang_4.set('fieldLabels', {'FID': 'no label', });
lyr_BDH_Playen_5.set('fieldLabels', {'FID': 'no label', });
lyr_BDH_Playen_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});