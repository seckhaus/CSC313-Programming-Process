import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js'; // Import TileLayer from ol/layer/Tile.js
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style.js';
import { Feature } from 'ol/index.js';
import { Vector as VectorSource } from 'ol/source.js';
import { Vector as VectorLayer } from 'ol/layer.js';
import OSM from 'ol/source/OSM.js';
import { Point } from 'ol/geom.js';

const dotFeature = new Feature({
  geometry: new Point([-13431686.62739074, 4204711.411150224]),
});

const sebastianFeature = new Feature({
  geometry: new Point([-13544450.272122491, 4393141.703351565]),
});

const destineeFeature = new Feature({
  geometry: new Point([-13114683.1338874, 4032817.5725610824]),
});

const ishaFeature = new Feature({
  geometry: new Point([-13617409.53021961, 4518651.334624374]),
});

const dotStyle = new Style({
  image: new CircleStyle({
    fill: new Fill({ color: 'gold' }),
    stroke: new Stroke({ color: 'black', width: 2 }),
    radius: 30,
  }),
});

const sebastianStyle = new Style({
  image: new CircleStyle({
    fill: new Fill({ color: 'green' }),
    stroke: new Stroke({ color: 'black', width: 1 }),
    radius: 10,
  }),
});

const destineeStyle = new Style({
  image: new CircleStyle({
    fill: new Fill({ color: 'navy' }),
    stroke: new Stroke({ color: 'black', width: 1 }),
    radius: 10,
  }),
});

const ishaStyle = new Style({
  image: new CircleStyle({
    fill: new Fill({ color: 'pink' }),
    stroke: new Stroke({ color: 'black', width: 1 }),
    radius: 10,
  }),
});

dotFeature.setStyle(dotStyle);
sebastianFeature.setStyle(sebastianStyle);
destineeFeature.setStyle(destineeStyle);
ishaFeature.setStyle(ishaStyle);

const vectorLayer = new VectorLayer({
  source: new VectorSource({
    features: [dotFeature], //[sebastianStyle], [destineeStyle], [ishaStyle]
  }),
});

const sebastianLayer = new VectorLayer({
  source: new VectorSource({
    features: [sebastianFeature], 
  }),
});

const destineeLayer = new VectorLayer({
  source: new VectorSource({
    features: [destineeFeature], 
  }),
});

const ishaLayer = new VectorLayer({
  source: new VectorSource({
    features: [ishaFeature], 
  }),
});


const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
    vectorLayer,sebastianLayer,destineeLayer,ishaLayer
  ],
  view: new View({
    center: [-13431686.62739074, 4204711.411150224],
    zoom: 12.5,
  }),
});
