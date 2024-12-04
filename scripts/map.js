// Initialize the map
const map = L.map('map').setView([-3.4653, -62.2159], 5); // Centered on the Amazon region

// Add a tile layer (map background)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
}).addTo(map);

// Sample GeoJSON data for deforestation areas
const amazonData = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [-60.0, -2.0],
                        [-59.0, -2.0],
                        [-59.0, -3.0],
                        [-60.0, -3.0],
                        [-60.0, -2.0]
                    ]
                ]
            },
            "properties": {
                "name": "Region 1",
                "deforestationLevel": 70 // Example percentage
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [-61.0, -4.0],
                        [-60.0, -4.0],
                        [-60.0, -5.0],
                        [-61.0, -5.0],
                        [-61.0, -4.0]
                    ]
                ]
            },
            "properties": {
                "name": "Region 2",
                "deforestationLevel": 30 
            }
        }
    ]
};

// Function to style regions based on deforestation level
function styleRegions(feature) {
    const deforestationLevel = feature.properties.deforestationLevel;
    let fillColor = "green"; // Default color for minimal deforestation

    if (deforestationLevel > 50) {
        fillColor = "red"; // High deforestation
    } else if (deforestationLevel > 20) {
        fillColor = "orange"; // Moderate deforestation
    }

    return {
        color: "black", // Border color
        fillColor: fillColor,
        fillOpacity: 0.5,
        weight: 1
    };
}

// Add GeoJSON data to the map with styling
/* L.geoJSON(amazonData, {
    style: styleRegions,
    onEachFeature: function (feature, layer) {
        const regionName = feature.properties.name;
        const deforestationLevel = feature.properties.deforestationLevel;
        layer.bindPopup(`<strong>${regionName}</strong><br>Deforestation Level: ${deforestationLevel}%`);
    }
}).addTo(map);
*/
// Event listeners for map buttons
document.getElementById('deforestation-btn').addEventListener('click', () => {
    map.setView([-3.4653, -62.2159], 5); // Reset view to the Amazon region
});

