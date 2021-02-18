
//USER CONTROLS==================================================
//Scalable box to crop map to certain area-- this should be visible as the top part of the screen at all times
//Organized into a tabbed window sort of thing
//TAB 1- CONTENTS
//spiral-down menus to toggle visibility of categories/individual bits 
//Each level of contents should have a 'layer' option box to show which layer it will be a part of/ the ability to make its own layer
//Content subclasses include:
// -Land Area
// -Land area Label
// 
//TAB 2- STYLE
//
var map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([37.41, 8.82]),
      zoom: 4
    })
  });
