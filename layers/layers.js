var wms_layers = [];


        var lyr_BingMap_0 = new ol.layer.Tile({
            'title': 'Bing Map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://ecn.dynamic.t0.tiles.virtualearth.net/comp/CompositionHandler/{q}?mkt=en-us&it=G,VE,BX,L,LA&shading=hill'
            })
        });

        var lyr_GoogleLabels_1 = new ol.layer.Tile({
            'title': 'Google Labels',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });
var format_vegetation_2 = new ol.format.GeoJSON();
var features_vegetation_2 = format_vegetation_2.readFeatures(json_vegetation_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vegetation_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vegetation_2.addFeatures(features_vegetation_2);
var lyr_vegetation_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vegetation_2, 
                style: style_vegetation_2,
                popuplayertitle: 'vegetation',
                interactive: true,
    title: 'vegetation<br />\
    <img src="styles/legend/vegetation_2_0.png" /> crop<br />\
    <img src="styles/legend/vegetation_2_1.png" /> forest<br />\
    <img src="styles/legend/vegetation_2_2.png" /> shrub<br />\
    <img src="styles/legend/vegetation_2_3.png" /> <br />' });
var format_ThoroughfarePlan_3 = new ol.format.GeoJSON();
var features_ThoroughfarePlan_3 = format_ThoroughfarePlan_3.readFeatures(json_ThoroughfarePlan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ThoroughfarePlan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ThoroughfarePlan_3.addFeatures(features_ThoroughfarePlan_3);
var lyr_ThoroughfarePlan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ThoroughfarePlan_3, 
                style: style_ThoroughfarePlan_3,
                popuplayertitle: 'Thoroughfare Plan',
                interactive: true,
                title: '<img src="styles/legend/ThoroughfarePlan_3.png" /> Thoroughfare Plan'
            });
var format_LandUse_4 = new ol.format.GeoJSON();
var features_LandUse_4 = format_LandUse_4.readFeatures(json_LandUse_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LandUse_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LandUse_4.addFeatures(features_LandUse_4);
var lyr_LandUse_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LandUse_4, 
                style: style_LandUse_4,
                popuplayertitle: 'Land Use',
                interactive: true,
    title: 'Land Use<br />\
    <img src="styles/legend/LandUse_4_0.png" /> Commercial<br />\
    <img src="styles/legend/LandUse_4_1.png" /> Industial<br />\
    <img src="styles/legend/LandUse_4_2.png" /> Industrial<br />\
    <img src="styles/legend/LandUse_4_3.png" /> Parks<br />\
    <img src="styles/legend/LandUse_4_4.png" /> PD<br />\
    <img src="styles/legend/LandUse_4_5.png" /> PD-High Res<br />\
    <img src="styles/legend/LandUse_4_6.png" /> PD-MH<br />\
    <img src="styles/legend/LandUse_4_7.png" /> PD-SF<br />\
    <img src="styles/legend/LandUse_4_8.png" /> Public_SemiPublic<br />\
    <img src="styles/legend/LandUse_4_9.png" /> Residential-Medium<br />\
    <img src="styles/legend/LandUse_4_10.png" /> Residential-SF<br />\
    <img src="styles/legend/LandUse_4_11.png" /> <br />' });
var format_Zoning_5 = new ol.format.GeoJSON();
var features_Zoning_5 = format_Zoning_5.readFeatures(json_Zoning_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zoning_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zoning_5.addFeatures(features_Zoning_5);
var lyr_Zoning_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zoning_5, 
                style: style_Zoning_5,
                popuplayertitle: 'Zoning',
                interactive: true,
    title: 'Zoning<br />\
    <img src="styles/legend/Zoning_5_0.png" /> AG<br />\
    <img src="styles/legend/Zoning_5_1.png" /> C1<br />\
    <img src="styles/legend/Zoning_5_2.png" /> C2<br />\
    <img src="styles/legend/Zoning_5_3.png" /> DB<br />\
    <img src="styles/legend/Zoning_5_4.png" /> M1<br />\
    <img src="styles/legend/Zoning_5_5.png" /> M2<br />\
    <img src="styles/legend/Zoning_5_6.png" /> MH<br />\
    <img src="styles/legend/Zoning_5_7.png" /> P<br />\
    <img src="styles/legend/Zoning_5_8.png" /> PD<br />\
    <img src="styles/legend/Zoning_5_9.png" /> PD-R2<br />\
    <img src="styles/legend/Zoning_5_10.png" /> R1<br />\
    <img src="styles/legend/Zoning_5_11.png" /> R2<br />\
    <img src="styles/legend/Zoning_5_12.png" /> R3<br />\
    <img src="styles/legend/Zoning_5_13.png" /> <br />' });
var format_Parcels_6 = new ol.format.GeoJSON();
var features_Parcels_6 = format_Parcels_6.readFeatures(json_Parcels_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcels_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcels_6.addFeatures(features_Parcels_6);
var lyr_Parcels_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parcels_6, 
                style: style_Parcels_6,
                popuplayertitle: 'Parcels',
                interactive: true,
                title: '<img src="styles/legend/Parcels_6.png" /> Parcels'
            });
var format_AledoAddressPoints_7 = new ol.format.GeoJSON();
var features_AledoAddressPoints_7 = format_AledoAddressPoints_7.readFeatures(json_AledoAddressPoints_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AledoAddressPoints_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AledoAddressPoints_7.addFeatures(features_AledoAddressPoints_7);
var lyr_AledoAddressPoints_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AledoAddressPoints_7, 
                style: style_AledoAddressPoints_7,
                popuplayertitle: 'Aledo Address Points',
                interactive: true,
                title: '<img src="styles/legend/AledoAddressPoints_7.png" /> Aledo Address Points'
            });
var format_CityOwnedBuilding_8 = new ol.format.GeoJSON();
var features_CityOwnedBuilding_8 = format_CityOwnedBuilding_8.readFeatures(json_CityOwnedBuilding_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CityOwnedBuilding_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CityOwnedBuilding_8.addFeatures(features_CityOwnedBuilding_8);
var lyr_CityOwnedBuilding_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CityOwnedBuilding_8, 
                style: style_CityOwnedBuilding_8,
                popuplayertitle: 'City Owned Building',
                interactive: true,
                title: '<img src="styles/legend/CityOwnedBuilding_8.png" /> City Owned Building'
            });
var format_ETJ_9 = new ol.format.GeoJSON();
var features_ETJ_9 = format_ETJ_9.readFeatures(json_ETJ_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ETJ_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ETJ_9.addFeatures(features_ETJ_9);
var lyr_ETJ_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ETJ_9, 
                style: style_ETJ_9,
                popuplayertitle: 'ETJ',
                interactive: true,
                title: '<img src="styles/legend/ETJ_9.png" /> ETJ'
            });
var format_CityLimits_10 = new ol.format.GeoJSON();
var features_CityLimits_10 = format_CityLimits_10.readFeatures(json_CityLimits_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CityLimits_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CityLimits_10.addFeatures(features_CityLimits_10);
var lyr_CityLimits_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CityLimits_10, 
                style: style_CityLimits_10,
                popuplayertitle: 'City Limits',
                interactive: true,
                title: '<img src="styles/legend/CityLimits_10.png" /> City Limits'
            });
var format_RoadCenterline_11 = new ol.format.GeoJSON();
var features_RoadCenterline_11 = format_RoadCenterline_11.readFeatures(json_RoadCenterline_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoadCenterline_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoadCenterline_11.addFeatures(features_RoadCenterline_11);
var lyr_RoadCenterline_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoadCenterline_11, 
                style: style_RoadCenterline_11,
                popuplayertitle: 'Road Centerline',
                interactive: true,
                title: '<img src="styles/legend/RoadCenterline_11.png" /> Road Centerline'
            });
var format_Railroadshp_12 = new ol.format.GeoJSON();
var features_Railroadshp_12 = format_Railroadshp_12.readFeatures(json_Railroadshp_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Railroadshp_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Railroadshp_12.addFeatures(features_Railroadshp_12);
var lyr_Railroadshp_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Railroadshp_12, 
                style: style_Railroadshp_12,
                popuplayertitle: 'Railroad.shp',
                interactive: false,
                title: '<img src="styles/legend/Railroadshp_12.png" /> Railroad.shp'
            });
var format_SidewalkRoute_13 = new ol.format.GeoJSON();
var features_SidewalkRoute_13 = format_SidewalkRoute_13.readFeatures(json_SidewalkRoute_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SidewalkRoute_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SidewalkRoute_13.addFeatures(features_SidewalkRoute_13);
var lyr_SidewalkRoute_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SidewalkRoute_13, 
                style: style_SidewalkRoute_13,
                popuplayertitle: 'Sidewalk Route',
                interactive: true,
                title: '<img src="styles/legend/SidewalkRoute_13.png" /> Sidewalk Route'
            });
var format_Streams_14 = new ol.format.GeoJSON();
var features_Streams_14 = format_Streams_14.readFeatures(json_Streams_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Streams_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Streams_14.addFeatures(features_Streams_14);
var lyr_Streams_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Streams_14, 
                style: style_Streams_14,
                popuplayertitle: 'Streams',
                interactive: true,
                title: '<img src="styles/legend/Streams_14.png" /> Streams'
            });
var format_Trails_15 = new ol.format.GeoJSON();
var features_Trails_15 = format_Trails_15.readFeatures(json_Trails_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trails_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trails_15.addFeatures(features_Trails_15);
var lyr_Trails_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trails_15, 
                style: style_Trails_15,
                popuplayertitle: 'Trails',
                interactive: true,
    title: 'Trails<br />\
    <img src="styles/legend/Trails_15_0.png" /> <br />\
    <img src="styles/legend/Trails_15_1.png" /> Blue Loop<br />\
    <img src="styles/legend/Trails_15_2.png" /> Gray Loop<br />\
    <img src="styles/legend/Trails_15_3.png" /> Green Loop<br />\
    <img src="styles/legend/Trails_15_4.png" /> Orange Loop<br />\
    <img src="styles/legend/Trails_15_5.png" /> Purple Trail<br />\
    <img src="styles/legend/Trails_15_6.png" /> Red Loop<br />\
    <img src="styles/legend/Trails_15_7.png" /> Violet Trail<br />\
    <img src="styles/legend/Trails_15_8.png" /> Yellow Loop<br />' });
var group_ZoningMap = new ol.layer.Group({
                                layers: [lyr_Zoning_5,lyr_Parcels_6,lyr_AledoAddressPoints_7,lyr_CityOwnedBuilding_8,lyr_ETJ_9,lyr_CityLimits_10,lyr_RoadCenterline_11,lyr_Railroadshp_12,lyr_SidewalkRoute_13,lyr_Streams_14,lyr_Trails_15,],
                                fold: 'open',
                                title: 'Zoning Map'});
var group_LandUsemap2026 = new ol.layer.Group({
                                layers: [lyr_ThoroughfarePlan_3,lyr_LandUse_4,],
                                fold: 'close',
                                title: 'Land Use map 2026'});

lyr_BingMap_0.setVisible(true);lyr_GoogleLabels_1.setVisible(true);lyr_vegetation_2.setVisible(true);lyr_ThoroughfarePlan_3.setVisible(true);lyr_LandUse_4.setVisible(true);lyr_Zoning_5.setVisible(true);lyr_Parcels_6.setVisible(true);lyr_AledoAddressPoints_7.setVisible(true);lyr_CityOwnedBuilding_8.setVisible(true);lyr_ETJ_9.setVisible(true);lyr_CityLimits_10.setVisible(true);lyr_RoadCenterline_11.setVisible(true);lyr_Railroadshp_12.setVisible(true);lyr_SidewalkRoute_13.setVisible(true);lyr_Streams_14.setVisible(true);lyr_Trails_15.setVisible(true);
var layersList = [lyr_BingMap_0,lyr_GoogleLabels_1,lyr_vegetation_2,group_LandUsemap2026,group_ZoningMap];
lyr_vegetation_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'subtype': 'subtype', 'vegetation': 'vegetation', });
lyr_ThoroughfarePlan_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrLock': 'LyrLock', 'LyrOn': 'LyrOn', 'LyrVPFrzn': 'LyrVPFrzn', 'LyrHandle': 'LyrHandle', 'Color': 'Color', 'EntColor': 'EntColor', 'LyrColor': 'LyrColor', 'BlkColor': 'BlkColor', 'Linetype': 'Linetype', 'EntLinetyp': 'EntLinetyp', 'LyrLnType': 'LyrLnType', 'BlkLinetyp': 'BlkLinetyp', 'Elevation': 'Elevation', 'Thickness': 'Thickness', 'LineWt': 'LineWt', 'EntLineWt': 'EntLineWt', 'LyrLineWt': 'LyrLineWt', 'BlkLineWt': 'BlkLineWt', 'RefName': 'RefName', 'LTScale': 'LTScale', 'ExtX': 'ExtX', 'ExtY': 'ExtY', 'ExtZ': 'ExtZ', 'DocName': 'DocName', 'DocPath': 'DocPath', 'DocType': 'DocType', 'DocVer': 'DocVer', 'Shape_Leng': 'Shape_Leng', 'Show': 'Show', 'TF_TYPE': 'TF_TYPE', 'Shape_Le_1': 'Shape_Le_1', });
lyr_LandUse_4.set('fieldAliases', {'fid': 'fid', 'FID_': 'FID_', 'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrLock': 'LyrLock', 'LyrOn': 'LyrOn', 'LyrVPFrzn': 'LyrVPFrzn', 'LyrHandle': 'LyrHandle', 'Color': 'Color', 'EntColor': 'EntColor', 'LyrColor': 'LyrColor', 'BlkColor': 'BlkColor', 'Linetype': 'Linetype', 'EntLinetyp': 'EntLinetyp', 'LyrLnType': 'LyrLnType', 'BlkLinetyp': 'BlkLinetyp', 'Elevation': 'Elevation', 'Thickness': 'Thickness', 'LineWt': 'LineWt', 'EntLineWt': 'EntLineWt', 'LyrLineWt': 'LyrLineWt', 'BlkLineWt': 'BlkLineWt', 'RefName': 'RefName', 'LTScale': 'LTScale', 'ExtX': 'ExtX', 'ExtY': 'ExtY', 'ExtZ': 'ExtZ', 'DocName': 'DocName', 'DocPath': 'DocPath', 'DocType': 'DocType', 'DocVer': 'DocVer', 'Land_Use': 'Land_Use', 'Public_Use': 'Public_Use', 'Show': 'Show', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Zoning_5.set('fieldAliases', {'fid': 'fid', 'HANDLE': 'HANDLE', 'LAYER': 'LAYER', 'LYRHANDLE': 'LYRHANDLE', 'COLOR': 'COLOR', 'LTSCALE': 'LTSCALE', 'DOCNAME': 'DOCNAME', 'DOCPATH': 'DOCPATH', 'ZONING': 'ZONING', 'TEMPID': 'TEMPID', 'ZONINGUDC': 'ZONINGUDC', 'ELETED': 'ELETED', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Parcels_6.set('fieldAliases', {'fid': 'fid', 'Prop_ID': 'Prop_ID', 'GEO_ID': 'GEO_ID', 'OWNER_NAME': 'OWNER_NAME', 'NAME_CARE': 'NAME_CARE', 'LEGAL_AREA': 'LEGAL_AREA', 'LGL_AREA_U': 'LGL_AREA_U', 'GIS_AREA': 'GIS_AREA', 'GIS_AREA_U': 'GIS_AREA_U', 'LEGAL_DESC': 'LEGAL_DESC', 'STAT_LAND_': 'STAT_LAND_', 'LOC_LAND_U': 'LOC_LAND_U', 'LAND_VALUE': 'LAND_VALUE', 'IMP_VALUE': 'IMP_VALUE', 'MKT_VALUE': 'MKT_VALUE', 'SITUS_ADDR': 'SITUS_ADDR', 'SITUS_NUM': 'SITUS_NUM', 'SITUS_STRE': 'SITUS_STRE', 'SITUS_ST_1': 'SITUS_ST_1', 'SITUS_ST_2': 'SITUS_ST_2', 'SITUS_CITY': 'SITUS_CITY', 'SITUS_STAT': 'SITUS_STAT', 'SITUS_ZIP': 'SITUS_ZIP', 'MAIL_ADDR': 'MAIL_ADDR', 'MAIL_LINE1': 'MAIL_LINE1', 'MAIL_LINE2': 'MAIL_LINE2', 'MAIL_CITY': 'MAIL_CITY', 'MAIL_STAT': 'MAIL_STAT', 'MAIL_ZIP': 'MAIL_ZIP', 'SOURCE': 'SOURCE', 'DATE_ACQ': 'DATE_ACQ', 'FIPS': 'FIPS', 'COUNTY': 'COUNTY', 'TAX_YEAR': 'TAX_YEAR', 'YEAR_BUILT': 'YEAR_BUILT', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADDRESS': 'ADDRESS', });
lyr_AledoAddressPoints_7.set('fieldAliases', {'fid': 'fid', 'Prop_ID': 'Prop_ID', 'GEO_ID': 'GEO_ID', 'OWNER_NAME': 'OWNER_NAME', 'NAME_CARE': 'NAME_CARE', 'LEGAL_AREA': 'LEGAL_AREA', 'LGL_AREA_U': 'LGL_AREA_U', 'GIS_AREA': 'GIS_AREA', 'GIS_AREA_U': 'GIS_AREA_U', 'LEGAL_DESC': 'LEGAL_DESC', 'STAT_LAND_': 'STAT_LAND_', 'LOC_LAND_U': 'LOC_LAND_U', 'LAND_VALUE': 'LAND_VALUE', 'IMP_VALUE': 'IMP_VALUE', 'MKT_VALUE': 'MKT_VALUE', 'SITUS_ADDR': 'SITUS_ADDR', 'SITUS_NUM': 'SITUS_NUM', 'SITUS_STRE': 'SITUS_STRE', 'SITUS_ST_1': 'SITUS_ST_1', 'SITUS_ST_2': 'SITUS_ST_2', 'SITUS_CITY': 'SITUS_CITY', 'SITUS_STAT': 'SITUS_STAT', 'SITUS_ZIP': 'SITUS_ZIP', 'MAIL_ADDR': 'MAIL_ADDR', 'MAIL_LINE1': 'MAIL_LINE1', 'MAIL_LINE2': 'MAIL_LINE2', 'MAIL_CITY': 'MAIL_CITY', 'MAIL_STAT': 'MAIL_STAT', 'MAIL_ZIP': 'MAIL_ZIP', 'SOURCE': 'SOURCE', 'DATE_ACQ': 'DATE_ACQ', 'FIPS': 'FIPS', 'COUNTY': 'COUNTY', 'TAX_YEAR': 'TAX_YEAR', 'YEAR_BUILT': 'YEAR_BUILT', 'SUITE': 'SUITE', 'ADDRESS': 'ADDRESS', });
lyr_CityOwnedBuilding_8.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'prop_id': 'prop_id', 'rnumber': 'rnumber', 'combined': 'combined', 'ORIG_FID': 'ORIG_FID', 'Bldgnum': 'Bldgnum', 'BldgName': 'BldgName', });
lyr_ETJ_9.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'CITY': 'CITY', 'TYPE': 'TYPE', 'FIPSCODE': 'FIPSCODE', 'GEOID': 'GEOID', 'NOTES': 'NOTES', 'UPDATE_YEA': 'UPDATE_YEA', 'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrLock': 'LyrLock', 'LyrOn': 'LyrOn', 'LyrVPFrzn': 'LyrVPFrzn', 'LyrHandle': 'LyrHandle', 'Color': 'Color', 'EntColor': 'EntColor', 'LyrColor': 'LyrColor', 'BlkColor': 'BlkColor', 'Linetype': 'Linetype', 'EntLinetyp': 'EntLinetyp', 'LyrLnType': 'LyrLnType', 'BlkLinetyp': 'BlkLinetyp', 'Elevation': 'Elevation', 'Thickness': 'Thickness', 'LineWt': 'LineWt', 'EntLineWt': 'EntLineWt', 'LyrLineWt': 'LyrLineWt', 'BlkLineWt': 'BlkLineWt', 'RefName': 'RefName', 'LTScale': 'LTScale', 'ExtX': 'ExtX', 'ExtY': 'ExtY', 'ExtZ': 'ExtZ', 'DocName': 'DocName', 'DocPath': 'DocPath', 'DocType': 'DocType', 'DocVer': 'DocVer', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_CityLimits_10.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'CITY': 'CITY', 'TYPE': 'TYPE', 'FIPSCODE': 'FIPSCODE', 'GEOID': 'GEOID', 'NOTES': 'NOTES', 'UPDATE_YEA': 'UPDATE_YEA', 'ELETED': 'ELETED', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_RoadCenterline_11.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SOURCE': 'SOURCE', 'LF_ADDR': 'LF_ADDR', 'LT_ADDR': 'LT_ADDR', 'RF_ADDR': 'RF_ADDR', 'RT_ADDR': 'RT_ADDR', 'ADD_LOW': 'ADD_LOW', 'ADD_HIGH': 'ADD_HIGH', 'PREFIX': 'PREFIX', 'NAME': 'NAME', 'TYPE': 'TYPE', 'SUFFIX': 'SUFFIX', 'FULL_NAME': 'FULL_NAME', 'ROAD_CLASS': 'ROAD_CLASS', 'CLASS': 'CLASS', 'SURFACE': 'SURFACE', 'ESN_L': 'ESN_L', 'ESN_R': 'ESN_R', 'CITY_L': 'CITY_L', 'CITY_R': 'CITY_R', 'COUNTY_L': 'COUNTY_L', 'COUNTY_R': 'COUNTY_R', 'STATE': 'STATE', 'POSTAL_L': 'POSTAL_L', 'POSTAL_R': 'POSTAL_R', 'ZIP_L': 'ZIP_L', 'ZIP_R': 'ZIP_R', 'MAINT_AUTH': 'MAINT_AUTH', 'ONE_WAY': 'ONE_WAY', 'SPEED': 'SPEED', 'F_ZLEV': 'F_ZLEV', 'T_ZLEV': 'T_ZLEV', 'FUNCL': 'FUNCL', 'ALT_PREFIX': 'ALT_PREFIX', 'ALT_PRETYP': 'ALT_PRETYP', 'ALT_NAME': 'ALT_NAME', 'ALT_TYPE': 'ALT_TYPE', 'ALT_SUFFIX': 'ALT_SUFFIX', 'NCTCOG_CLA': 'NCTCOG_CLA', 'ShapeSTLen': 'ShapeSTLen', 'Shape_Leng': 'Shape_Leng', });
lyr_Railroadshp_12.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAME': 'NAME', 'COUNTY': 'COUNTY', 'TRACKAGE': 'TRACKAGE', 'OPERATOR': 'OPERATOR', 'OWNER': 'OWNER', 'TOTAL_TRAI': 'TOTAL_TRAI', 'STATUS': 'STATUS', 'RAIL_TYPE': 'RAIL_TYPE', 'TYPE_DESC': 'TYPE_DESC', 'ShapeSTLen': 'ShapeSTLen', 'Shape_Leng': 'Shape_Leng', });
lyr_SidewalkRoute_13.set('fieldAliases', {'fid': 'fid', 'Shape_Leng': 'Shape_Leng', 'Status': 'Status', });
lyr_Streams_14.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'FDATE': 'FDATE', 'GNIS_ID': 'GNIS_ID', 'GNIS_NAME': 'GNIS_NAME', 'LENGTHKM': 'LENGTHKM', 'FTYPE': 'FTYPE', 'FCODE': 'FCODE', 'ShapeSTLen': 'ShapeSTLen', 'Shape_Leng': 'Shape_Leng', });
lyr_Trails_15.set('fieldAliases', {'fid': 'fid', 'Shape_Leng': 'Shape_Leng', 'Name': 'Name', 'Mile': 'Mile', });
lyr_vegetation_2.set('fieldImages', {'fid': '', 'OBJECTID': 'TextEdit', 'subtype': 'TextEdit', 'vegetation': 'TextEdit', });
lyr_ThoroughfarePlan_3.set('fieldImages', {'fid': '', 'OBJECTID': 'TextEdit', 'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrLock': 'Range', 'LyrOn': 'Range', 'LyrVPFrzn': 'Range', 'LyrHandle': 'TextEdit', 'Color': 'Range', 'EntColor': 'Range', 'LyrColor': 'Range', 'BlkColor': 'Range', 'Linetype': 'TextEdit', 'EntLinetyp': 'TextEdit', 'LyrLnType': 'TextEdit', 'BlkLinetyp': 'TextEdit', 'Elevation': 'TextEdit', 'Thickness': 'TextEdit', 'LineWt': 'Range', 'EntLineWt': 'Range', 'LyrLineWt': 'Range', 'BlkLineWt': 'Range', 'RefName': 'TextEdit', 'LTScale': 'TextEdit', 'ExtX': 'TextEdit', 'ExtY': 'TextEdit', 'ExtZ': 'TextEdit', 'DocName': 'TextEdit', 'DocPath': 'TextEdit', 'DocType': 'TextEdit', 'DocVer': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Show': 'TextEdit', 'TF_TYPE': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_LandUse_4.set('fieldImages', {'fid': '', 'FID_': 'TextEdit', 'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrLock': 'Range', 'LyrOn': 'Range', 'LyrVPFrzn': 'Range', 'LyrHandle': 'TextEdit', 'Color': 'Range', 'EntColor': 'Range', 'LyrColor': 'Range', 'BlkColor': 'Range', 'Linetype': 'TextEdit', 'EntLinetyp': 'TextEdit', 'LyrLnType': 'TextEdit', 'BlkLinetyp': 'TextEdit', 'Elevation': 'TextEdit', 'Thickness': 'TextEdit', 'LineWt': 'Range', 'EntLineWt': 'Range', 'LyrLineWt': 'Range', 'BlkLineWt': 'Range', 'RefName': 'TextEdit', 'LTScale': 'TextEdit', 'ExtX': 'TextEdit', 'ExtY': 'TextEdit', 'ExtZ': 'TextEdit', 'DocName': 'TextEdit', 'DocPath': 'TextEdit', 'DocType': 'TextEdit', 'DocVer': 'TextEdit', 'Land_Use': 'TextEdit', 'Public_Use': 'TextEdit', 'Show': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Zoning_5.set('fieldImages', {'fid': '', 'HANDLE': 'TextEdit', 'LAYER': 'TextEdit', 'LYRHANDLE': 'TextEdit', 'COLOR': 'TextEdit', 'LTSCALE': 'TextEdit', 'DOCNAME': 'TextEdit', 'DOCPATH': 'TextEdit', 'ZONING': 'TextEdit', 'TEMPID': 'TextEdit', 'ZONINGUDC': 'TextEdit', 'ELETED': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Parcels_6.set('fieldImages', {'fid': '', 'Prop_ID': 'TextEdit', 'GEO_ID': 'TextEdit', 'OWNER_NAME': 'TextEdit', 'NAME_CARE': 'TextEdit', 'LEGAL_AREA': 'TextEdit', 'LGL_AREA_U': 'TextEdit', 'GIS_AREA': 'TextEdit', 'GIS_AREA_U': 'TextEdit', 'LEGAL_DESC': 'TextEdit', 'STAT_LAND_': 'TextEdit', 'LOC_LAND_U': 'TextEdit', 'LAND_VALUE': 'TextEdit', 'IMP_VALUE': 'TextEdit', 'MKT_VALUE': 'TextEdit', 'SITUS_ADDR': 'TextEdit', 'SITUS_NUM': 'TextEdit', 'SITUS_STRE': 'TextEdit', 'SITUS_ST_1': 'TextEdit', 'SITUS_ST_2': 'TextEdit', 'SITUS_CITY': 'TextEdit', 'SITUS_STAT': 'TextEdit', 'SITUS_ZIP': 'TextEdit', 'MAIL_ADDR': 'TextEdit', 'MAIL_LINE1': 'TextEdit', 'MAIL_LINE2': 'TextEdit', 'MAIL_CITY': 'TextEdit', 'MAIL_STAT': 'TextEdit', 'MAIL_ZIP': 'TextEdit', 'SOURCE': 'TextEdit', 'DATE_ACQ': 'TextEdit', 'FIPS': 'TextEdit', 'COUNTY': 'TextEdit', 'TAX_YEAR': 'TextEdit', 'YEAR_BUILT': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADDRESS': 'TextEdit', });
lyr_AledoAddressPoints_7.set('fieldImages', {'fid': '', 'Prop_ID': '', 'GEO_ID': '', 'OWNER_NAME': '', 'NAME_CARE': '', 'LEGAL_AREA': '', 'LGL_AREA_U': '', 'GIS_AREA': '', 'GIS_AREA_U': '', 'LEGAL_DESC': '', 'STAT_LAND_': '', 'LOC_LAND_U': '', 'LAND_VALUE': '', 'IMP_VALUE': '', 'MKT_VALUE': '', 'SITUS_ADDR': '', 'SITUS_NUM': '', 'SITUS_STRE': '', 'SITUS_ST_1': '', 'SITUS_ST_2': '', 'SITUS_CITY': '', 'SITUS_STAT': '', 'SITUS_ZIP': '', 'MAIL_ADDR': '', 'MAIL_LINE1': '', 'MAIL_LINE2': '', 'MAIL_CITY': '', 'MAIL_STAT': '', 'MAIL_ZIP': '', 'SOURCE': '', 'DATE_ACQ': '', 'FIPS': '', 'COUNTY': '', 'TAX_YEAR': '', 'YEAR_BUILT': '', 'SUITE': '', 'ADDRESS': '', });
lyr_CityOwnedBuilding_8.set('fieldImages', {'fid': '', 'OBJECTID': 'TextEdit', 'prop_id': 'TextEdit', 'rnumber': 'TextEdit', 'combined': 'TextEdit', 'ORIG_FID': 'TextEdit', 'Bldgnum': 'TextEdit', 'BldgName': 'TextEdit', });
lyr_ETJ_9.set('fieldImages', {'fid': '', 'OBJECTID_1': 'TextEdit', 'CITY': 'TextEdit', 'TYPE': 'TextEdit', 'FIPSCODE': 'TextEdit', 'GEOID': 'TextEdit', 'NOTES': 'TextEdit', 'UPDATE_YEA': 'TextEdit', 'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'TextEdit', 'LyrLock': 'TextEdit', 'LyrOn': 'TextEdit', 'LyrVPFrzn': 'TextEdit', 'LyrHandle': 'TextEdit', 'Color': 'TextEdit', 'EntColor': 'TextEdit', 'LyrColor': 'TextEdit', 'BlkColor': 'TextEdit', 'Linetype': 'TextEdit', 'EntLinetyp': 'TextEdit', 'LyrLnType': 'TextEdit', 'BlkLinetyp': 'TextEdit', 'Elevation': 'TextEdit', 'Thickness': 'TextEdit', 'LineWt': 'TextEdit', 'EntLineWt': 'TextEdit', 'LyrLineWt': 'TextEdit', 'BlkLineWt': 'TextEdit', 'RefName': 'TextEdit', 'LTScale': 'TextEdit', 'ExtX': 'TextEdit', 'ExtY': 'TextEdit', 'ExtZ': 'TextEdit', 'DocName': 'TextEdit', 'DocPath': 'TextEdit', 'DocType': 'TextEdit', 'DocVer': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_CityLimits_10.set('fieldImages', {'fid': '', 'OBJECTID_1': 'TextEdit', 'CITY': 'TextEdit', 'TYPE': 'TextEdit', 'FIPSCODE': 'TextEdit', 'GEOID': 'TextEdit', 'NOTES': 'TextEdit', 'UPDATE_YEA': 'TextEdit', 'ELETED': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_RoadCenterline_11.set('fieldImages', {'fid': '', 'OBJECTID': 'TextEdit', 'SOURCE': 'TextEdit', 'LF_ADDR': 'TextEdit', 'LT_ADDR': 'TextEdit', 'RF_ADDR': 'TextEdit', 'RT_ADDR': 'TextEdit', 'ADD_LOW': 'TextEdit', 'ADD_HIGH': 'TextEdit', 'PREFIX': 'TextEdit', 'NAME': 'TextEdit', 'TYPE': 'TextEdit', 'SUFFIX': 'TextEdit', 'FULL_NAME': 'TextEdit', 'ROAD_CLASS': 'Range', 'CLASS': 'TextEdit', 'SURFACE': 'TextEdit', 'ESN_L': 'Range', 'ESN_R': 'Range', 'CITY_L': 'TextEdit', 'CITY_R': 'TextEdit', 'COUNTY_L': 'TextEdit', 'COUNTY_R': 'TextEdit', 'STATE': 'TextEdit', 'POSTAL_L': 'TextEdit', 'POSTAL_R': 'TextEdit', 'ZIP_L': 'TextEdit', 'ZIP_R': 'TextEdit', 'MAINT_AUTH': 'TextEdit', 'ONE_WAY': 'TextEdit', 'SPEED': 'Range', 'F_ZLEV': 'Range', 'T_ZLEV': 'Range', 'FUNCL': 'Range', 'ALT_PREFIX': 'TextEdit', 'ALT_PRETYP': 'TextEdit', 'ALT_NAME': 'TextEdit', 'ALT_TYPE': 'TextEdit', 'ALT_SUFFIX': 'TextEdit', 'NCTCOG_CLA': 'TextEdit', 'ShapeSTLen': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Railroadshp_12.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'NAME': 'TextEdit', 'COUNTY': 'TextEdit', 'TRACKAGE': 'TextEdit', 'OPERATOR': 'TextEdit', 'OWNER': 'TextEdit', 'TOTAL_TRAI': 'TextEdit', 'STATUS': 'TextEdit', 'RAIL_TYPE': 'TextEdit', 'TYPE_DESC': 'TextEdit', 'ShapeSTLen': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_SidewalkRoute_13.set('fieldImages', {'fid': '', 'Shape_Leng': '', 'Status': '', });
lyr_Streams_14.set('fieldImages', {'fid': '', 'OBJECTID': 'TextEdit', 'FDATE': 'DateTime', 'GNIS_ID': 'TextEdit', 'GNIS_NAME': 'TextEdit', 'LENGTHKM': 'TextEdit', 'FTYPE': 'TextEdit', 'FCODE': 'TextEdit', 'ShapeSTLen': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Trails_15.set('fieldImages', {'fid': '', 'Shape_Leng': 'TextEdit', 'Name': 'TextEdit', 'Mile': 'TextEdit', });
lyr_vegetation_2.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'subtype': 'no label', 'vegetation': 'no label', });
lyr_ThoroughfarePlan_3.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrLock': 'no label', 'LyrOn': 'no label', 'LyrVPFrzn': 'no label', 'LyrHandle': 'no label', 'Color': 'no label', 'EntColor': 'no label', 'LyrColor': 'no label', 'BlkColor': 'no label', 'Linetype': 'no label', 'EntLinetyp': 'no label', 'LyrLnType': 'no label', 'BlkLinetyp': 'no label', 'Elevation': 'no label', 'Thickness': 'no label', 'LineWt': 'no label', 'EntLineWt': 'no label', 'LyrLineWt': 'no label', 'BlkLineWt': 'no label', 'RefName': 'no label', 'LTScale': 'no label', 'ExtX': 'no label', 'ExtY': 'no label', 'ExtZ': 'no label', 'DocName': 'no label', 'DocPath': 'no label', 'DocType': 'no label', 'DocVer': 'no label', 'Shape_Leng': 'no label', 'Show': 'no label', 'TF_TYPE': 'no label', 'Shape_Le_1': 'no label', });
lyr_LandUse_4.set('fieldLabels', {'fid': 'no label', 'FID_': 'no label', 'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrLock': 'no label', 'LyrOn': 'no label', 'LyrVPFrzn': 'no label', 'LyrHandle': 'no label', 'Color': 'no label', 'EntColor': 'no label', 'LyrColor': 'no label', 'BlkColor': 'no label', 'Linetype': 'no label', 'EntLinetyp': 'no label', 'LyrLnType': 'no label', 'BlkLinetyp': 'no label', 'Elevation': 'no label', 'Thickness': 'no label', 'LineWt': 'no label', 'EntLineWt': 'no label', 'LyrLineWt': 'no label', 'BlkLineWt': 'no label', 'RefName': 'no label', 'LTScale': 'no label', 'ExtX': 'no label', 'ExtY': 'no label', 'ExtZ': 'no label', 'DocName': 'no label', 'DocPath': 'no label', 'DocType': 'no label', 'DocVer': 'no label', 'Land_Use': 'no label', 'Public_Use': 'no label', 'Show': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Zoning_5.set('fieldLabels', {'fid': 'no label', 'HANDLE': 'no label', 'LAYER': 'no label', 'LYRHANDLE': 'no label', 'COLOR': 'no label', 'LTSCALE': 'no label', 'DOCNAME': 'no label', 'DOCPATH': 'no label', 'ZONING': 'no label', 'TEMPID': 'no label', 'ZONINGUDC': 'no label', 'ELETED': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Parcels_6.set('fieldLabels', {'fid': 'no label', 'Prop_ID': 'no label', 'GEO_ID': 'no label', 'OWNER_NAME': 'no label', 'NAME_CARE': 'no label', 'LEGAL_AREA': 'no label', 'LGL_AREA_U': 'no label', 'GIS_AREA': 'no label', 'GIS_AREA_U': 'no label', 'LEGAL_DESC': 'no label', 'STAT_LAND_': 'no label', 'LOC_LAND_U': 'no label', 'LAND_VALUE': 'no label', 'IMP_VALUE': 'no label', 'MKT_VALUE': 'no label', 'SITUS_ADDR': 'no label', 'SITUS_NUM': 'no label', 'SITUS_STRE': 'no label', 'SITUS_ST_1': 'no label', 'SITUS_ST_2': 'no label', 'SITUS_CITY': 'no label', 'SITUS_STAT': 'no label', 'SITUS_ZIP': 'no label', 'MAIL_ADDR': 'no label', 'MAIL_LINE1': 'no label', 'MAIL_LINE2': 'no label', 'MAIL_CITY': 'no label', 'MAIL_STAT': 'no label', 'MAIL_ZIP': 'no label', 'SOURCE': 'no label', 'DATE_ACQ': 'no label', 'FIPS': 'no label', 'COUNTY': 'no label', 'TAX_YEAR': 'no label', 'YEAR_BUILT': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADDRESS': 'no label', });
lyr_AledoAddressPoints_7.set('fieldLabels', {'fid': 'no label', 'Prop_ID': 'no label', 'GEO_ID': 'no label', 'OWNER_NAME': 'no label', 'NAME_CARE': 'no label', 'LEGAL_AREA': 'no label', 'LGL_AREA_U': 'no label', 'GIS_AREA': 'no label', 'GIS_AREA_U': 'no label', 'LEGAL_DESC': 'no label', 'STAT_LAND_': 'no label', 'LOC_LAND_U': 'no label', 'LAND_VALUE': 'no label', 'IMP_VALUE': 'no label', 'MKT_VALUE': 'no label', 'SITUS_ADDR': 'no label', 'SITUS_NUM': 'no label', 'SITUS_STRE': 'no label', 'SITUS_ST_1': 'no label', 'SITUS_ST_2': 'no label', 'SITUS_CITY': 'no label', 'SITUS_STAT': 'no label', 'SITUS_ZIP': 'no label', 'MAIL_ADDR': 'no label', 'MAIL_LINE1': 'no label', 'MAIL_LINE2': 'no label', 'MAIL_CITY': 'no label', 'MAIL_STAT': 'no label', 'MAIL_ZIP': 'no label', 'SOURCE': 'no label', 'DATE_ACQ': 'no label', 'FIPS': 'no label', 'COUNTY': 'no label', 'TAX_YEAR': 'no label', 'YEAR_BUILT': 'no label', 'SUITE': 'no label', 'ADDRESS': 'no label', });
lyr_CityOwnedBuilding_8.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'prop_id': 'no label', 'rnumber': 'no label', 'combined': 'no label', 'ORIG_FID': 'no label', 'Bldgnum': 'no label', 'BldgName': 'no label', });
lyr_ETJ_9.set('fieldLabels', {'fid': 'no label', 'OBJECTID_1': 'no label', 'CITY': 'no label', 'TYPE': 'no label', 'FIPSCODE': 'no label', 'GEOID': 'no label', 'NOTES': 'no label', 'UPDATE_YEA': 'no label', 'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrLock': 'no label', 'LyrOn': 'no label', 'LyrVPFrzn': 'no label', 'LyrHandle': 'no label', 'Color': 'no label', 'EntColor': 'no label', 'LyrColor': 'no label', 'BlkColor': 'no label', 'Linetype': 'no label', 'EntLinetyp': 'no label', 'LyrLnType': 'no label', 'BlkLinetyp': 'no label', 'Elevation': 'no label', 'Thickness': 'no label', 'LineWt': 'no label', 'EntLineWt': 'no label', 'LyrLineWt': 'no label', 'BlkLineWt': 'no label', 'RefName': 'no label', 'LTScale': 'no label', 'ExtX': 'no label', 'ExtY': 'no label', 'ExtZ': 'no label', 'DocName': 'no label', 'DocPath': 'no label', 'DocType': 'no label', 'DocVer': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Le_2': 'no label', 'Shape_Area': 'no label', });
lyr_CityLimits_10.set('fieldLabels', {'fid': 'no label', 'OBJECTID_1': 'no label', 'CITY': 'no label', 'TYPE': 'no label', 'FIPSCODE': 'no label', 'GEOID': 'no label', 'NOTES': 'no label', 'UPDATE_YEA': 'no label', 'ELETED': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_RoadCenterline_11.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'SOURCE': 'no label', 'LF_ADDR': 'no label', 'LT_ADDR': 'no label', 'RF_ADDR': 'no label', 'RT_ADDR': 'no label', 'ADD_LOW': 'no label', 'ADD_HIGH': 'no label', 'PREFIX': 'no label', 'NAME': 'no label', 'TYPE': 'no label', 'SUFFIX': 'no label', 'FULL_NAME': 'no label', 'ROAD_CLASS': 'no label', 'CLASS': 'no label', 'SURFACE': 'no label', 'ESN_L': 'no label', 'ESN_R': 'no label', 'CITY_L': 'no label', 'CITY_R': 'no label', 'COUNTY_L': 'no label', 'COUNTY_R': 'no label', 'STATE': 'no label', 'POSTAL_L': 'no label', 'POSTAL_R': 'no label', 'ZIP_L': 'no label', 'ZIP_R': 'no label', 'MAINT_AUTH': 'no label', 'ONE_WAY': 'no label', 'SPEED': 'no label', 'F_ZLEV': 'no label', 'T_ZLEV': 'no label', 'FUNCL': 'no label', 'ALT_PREFIX': 'no label', 'ALT_PRETYP': 'no label', 'ALT_NAME': 'no label', 'ALT_TYPE': 'no label', 'ALT_SUFFIX': 'no label', 'NCTCOG_CLA': 'no label', 'ShapeSTLen': 'no label', 'Shape_Leng': 'no label', });
lyr_Railroadshp_12.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAME': 'no label', 'COUNTY': 'no label', 'TRACKAGE': 'no label', 'OPERATOR': 'no label', 'OWNER': 'no label', 'TOTAL_TRAI': 'no label', 'STATUS': 'no label', 'RAIL_TYPE': 'no label', 'TYPE_DESC': 'no label', 'ShapeSTLen': 'no label', 'Shape_Leng': 'no label', });
lyr_SidewalkRoute_13.set('fieldLabels', {'fid': 'inline label - always visible', 'Shape_Leng': 'no label', 'Status': 'no label', });
lyr_Streams_14.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'FDATE': 'no label', 'GNIS_ID': 'no label', 'GNIS_NAME': 'no label', 'LENGTHKM': 'no label', 'FTYPE': 'no label', 'FCODE': 'no label', 'ShapeSTLen': 'no label', 'Shape_Leng': 'no label', });
lyr_Trails_15.set('fieldLabels', {'fid': 'no label', 'Shape_Leng': 'inline label - always visible', 'Name': 'no label', 'Mile': 'no label', });
lyr_Trails_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});