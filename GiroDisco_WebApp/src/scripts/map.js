var map = L.map("map").setView([40.64095818867095, -8.653921595656492], 15);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(map);

var geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "Xrecords"
      },
      geometry: {
        coordinates: [-8.65230552671622, 40.63815571249049],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        name: "MegaHits"
      },
      geometry: {
        coordinates: [-8.654572328836025, 40.64210328193036],
        type: "Point",
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Adágio Aveiro"
      },
      geometry: {
        coordinates: [
          -8.644115006862137,
          40.64329681312205
        ],
        type: "Point"
      }
    }
  ],
};

L.geoJSON(geojson, {
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng);
  },
  onEachFeature: function (feature, layer) {
    layer.bindPopup("<h3>" + feature.properties.name + "</h3>");
  },
}).addTo(map);

$(".leaflet-control-attribution").remove();
