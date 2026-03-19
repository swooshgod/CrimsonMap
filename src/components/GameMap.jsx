import { useEffect, useRef } from 'react'
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const TYPE_COLORS = {
  boss: '#ff4444',
  collectible: '#44aaff',
  secret: '#aa44ff',
  territory: '#44ff88',
}

function FlyToSelected({ selectedId, locations }) {
  const map = useMap()
  useEffect(() => {
    if (selectedId) {
      const loc = locations.find(l => l.id === selectedId)
      if (loc) {
        map.flyTo([loc.y, loc.x], 4, { duration: 0.5 })
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
        center={[-40, 50]}
        zoom={3}
        minZoom={2}
        maxZoom={6}
        style={{ height: '100%', width: '100%' }}
        zoomControl={true}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='CrimsonMap | Tiles &copy; CartoDB'
        />
        <FlyToSelected selectedId={selectedId} locations={locations} />
        {locations.map(loc => {
          const isFound = foundIds.has(loc.id)
          return (
            <CircleMarker
              key={loc.id}
              center={[loc.y, loc.x]}
              radius={loc.type === 'territory' ? 12 : 8}
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
