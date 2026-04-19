/**
 * Albums Page Logic
 * Handles interactive 3D Globe and Album Modal
 */

// 1. Data Structure for Albums
// Easily extendable by adding new objects to this array
const albumData = [
    {
        id: 'tokyo-2024',
        name: 'Tokyo',
        location: 'Japan',
        lat: 35.6762,
        lng: 139.6503,
        title: 'Neon Nights in Shinjuku',
        description: 'Exploring the vibrant streets, hidden shrines, and culinary wonders of Tokyo. A mix of tradition and futuristic energy.',
        photoCount: 42,
        year: 2024
    },
    {
        id: 'chicago-2023',
        name: 'Chicago',
        location: 'Illinois, USA',
        lat: 41.8781,
        lng: -87.6298,
        title: 'The Windy City Chronicles',
        description: 'Architecture tours on the river, deep-dish pizza, and the metallic reflection of the Cloud Gate.',
        photoCount: 28,
        year: 2023
    },
    {
        id: 'ahmedabad-memories',
        name: 'Ahmedabad',
        location: 'Gujarat, India',
        lat: 23.0225,
        lng: 72.5714,
        title: 'Heritage & Heart',
        description: 'Walking through the pols of the old city, the Sabarmati Riverfront at sunset, and the flavors of home.',
        photoCount: 120,
        year: 2024
    },
    {
        id: 'indy-campus',
        name: 'Indianapolis',
        location: 'Indiana, USA',
        lat: 39.7684,
        lng: -86.1581,
        title: 'Circle City Vibes',
        description: 'Weekend trips from West Lafayette to the heart of Indiana. Exploring the canal walk and local monuments.',
        photoCount: 15,
        year: 2023
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const globeContainer = document.getElementById('globeViz');
    const modal = document.getElementById('album-modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.getElementById('close-modal');

    // 2. Initialize Globe
    const myGlobe = Globe()
        (globeContainer)
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg') // Dark base
        .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
        .backgroundColor('rgba(0,0,0,0)') // Transparent to show CSS gradient
        .showAtmosphere(true)
        .atmosphereColor('#CEB888') // Gold atmosphere
        .atmosphereDaylightIntensity(0.1)
        
        // Stylizing landmasses
        .pointsData(albumData)
        .pointLat('lat')
        .pointLng('lng')
        .pointColor(() => '#CEB888') // Pure gold pins
        .pointAltitude(0.1)
        .pointRadius(0.5)
        .pointsTransitionDuration(1000)
        
        // Marker Interaction
        .onPointClick((point) => {
            showAlbumPreview(point);
            // Move camera to the point
            myGlobe.pointOfView({ lat: point.lat, lng: point.lng, altitude: 2 }, 1000);
        });

    // 3. Globe Styling & Auto-rotation
    myGlobe.controls().autoRotate = true;
    myGlobe.controls().autoRotateSpeed = 0.5;
    myGlobe.controls().enableZoom = true;

    // Interaction adjustments
    myGlobe.onZoom(() => {
        // Slow down rotation if user interacts
        myGlobe.controls().autoRotateSpeed = 0.1;
    });

    // 4. Modal Logic
    function showAlbumPreview(album) {
        modalBody.innerHTML = `
            <div class="modal-header">
                <h2>${album.title}</h2>
                <span class="modal-location">${album.name}, ${album.location}</span>
            </div>
            
            <div class="modal-cover-placeholder">
                <span>[ Album Cover Placeholder ]</span>
            </div>
            
            <div class="modal-description">
                <p>${album.description}</p>
            </div>
            
            <div class="modal-meta">
                <span><strong>Year:</strong> ${album.year}</span>
                <span><strong>Photos:</strong> ${album.photoCount} items</span>
            </div>
            
            <div class="modal-actions">
                <button class="btn btn-primary" style="width: 100%; margin: 0;">Explore Full Album</button>
            </div>
        `;
        
        modal.classList.add('active');
    }

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        myGlobe.controls().autoRotateSpeed = 0.5; // Resume rotation speed
    });

    // Close modal on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal.classList.remove('active');
            myGlobe.controls().autoRotateSpeed = 0.5;
        }
    });

    // 5. Handle responsiveness
    window.addEventListener('resize', () => {
        myGlobe.width(window.innerWidth);
        myGlobe.height(window.innerHeight);
    });
});
