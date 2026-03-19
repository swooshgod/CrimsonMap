import { useEffect, useRef } from 'react'
import { MapContainer, ImageOverlay, CircleMarker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { MAP_W, MAP_H } from '../data/locations'

const TYPE_COLORS = {
  boss: '#ff4444',
  collectible: '#44aaff',
  secret: '#aa44ff',
  territory: '#44ff88',
}

// CRS.Simple bounds: [[0,0], [height, width]] — y=0 is top of image
const MAP_BOUNDS = [[0, 0], [MAP_H, MAP_W]]

function FlyToSelected({ selectedId, locations }) {
  const map = useMap()
  useEffect(() => {
    if (selectedId) {
      const loc = locations.find(l => l.id === selectedId)
      if (loc) {
        // In CRS.Simple with our setup: lat = MAP_H - y (invert y so 0=bottom), lng = x
        map.flyTo([MAP_H - loc.y, loc.x], 1, { duration: 0.5 })
      }
    }
  }, [selectedId, locations, map])
  return null
}

function GameMap({ locations, foundIds, toggleFound, selectedId, setSelectedId }) {
  const markerRefs = useRef({})

  useEffect(() => {
    if (selectedId && markerRefs.current[selectedId]) {
      markerRefs.current[selectedId].openPopup()
    }
  }, [selectedId])

  return (
    <div className="map-area">
      <MapContainer
        center={[MAP_H / 2, MAP_W / 2]}
        zoom={0}
        minZoom={-1}
        maxZoom={3}
        crs={L.CRS.Simple}
        maxBounds={[[-100, -100], [MAP_H + 100, MAP_W + 100]]}
        maxBoundsViscosity={0.8}
        style={{ height: '100%', width: '100%' }}
        zoomControl={true}
      >
        <ImageOverlay url="/pywel-map.webp" bounds={MAP_BOUNDS} />
        <FlyToSelected selectedId={selectedId} locations={locations} />
        {locations.map(loc => {
          const isFound = foundIds.has(loc.id)
          // Convert pixel coords to CRS.Simple: lat = MAP_H - y (invert), lng = x
          const latLng = [MAP_H - loc.y, loc.x]
          return (
            <CircleMarker
              key={loc.id}
              center={latLng}
              radius={loc.type === 'territory' ? 14 : 9}
              pathOptions={{
                color: TYPE_COLORS[loc.type],
                fillColor: TYPE_COLORS[loc.type],
                fillOpacity: isFound ? 0.2 : 0.7,
                weight: isFound ? 1 : 2,
                opacity: isFound ? 0.4 : 1,
              }}
              eventHandlers={{
                click: () => setSelectedId(loc.id),
              }}
              ref={ref => { if (ref) markerRefs.current[loc.id] = ref }}
            >
              <Popup>
                <div className="location-popup">
                  <h3>{loc.name}</h3>
                  <div className="popup-type" style={{ color: TYPE_COLORS[loc.type] }}>
                    {loc.type}
                  </div>
                  <p>{loc.description}</p>
                  <button
                    className={`mark-btn ${isFound ? 'found' : ''}`}
                    onClick={() => toggleFound(loc.id)}
                  >
                    {isFound ? 'Unmark' : 'Mark as Found'}
                  </button>
                </div>
              </Popup>
            </CircleMarker>
          )
        })}
      </MapContainer>
    </div>
  )
}

export default GameMap
