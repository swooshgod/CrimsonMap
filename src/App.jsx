import { useState, useMemo, useCallback } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import GameMap from './components/GameMap'
import locations from './data/locations'

const TYPES = ['boss', 'collectible', 'secret', 'territory']

function App() {
  const [activeFilters, setActiveFilters] = useState(new Set(TYPES))
  const [foundIds, setFoundIds] = useState(() => {
    try {
      const saved = localStorage.getItem('crimsonmap_found')
      return saved ? new Set(JSON.parse(saved)) : new Set()
    } catch { return new Set() }
  })
  const [search, setSearch] = useState('')
  const [selectedId, setSelectedId] = useState(null)

  const toggleFilter = useCallback((type) => {
    setActiveFilters(prev => {
      const next = new Set(prev)
      if (next.has(type)) next.delete(type)
      else next.add(type)
      return next
    })
  }, [])

  const toggleFound = useCallback((id) => {
    setFoundIds(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      localStorage.setItem('crimsonmap_found', JSON.stringify([...next]))
      return next
    })
  }, [])

  const filteredLocations = useMemo(() => {
    return locations.filter(loc => {
      if (!activeFilters.has(loc.type)) return false
      if (search && !loc.name.toLowerCase().includes(search.toLowerCase())) return false
      return true
    })
  }, [activeFilters, search])

  const progress = useMemo(() => {
    const result = {}
    for (const type of TYPES) {
      const all = locations.filter(l => l.type === type)
      const found = all.filter(l => foundIds.has(l.id))
      result[type] = { total: all.length, found: found.length }
    }
    return result
  }, [foundIds])

  return (
    <div className="app">
      <Sidebar
        locations={filteredLocations}
        activeFilters={activeFilters}
        toggleFilter={toggleFilter}
        foundIds={foundIds}
        toggleFound={toggleFound}
        search={search}
        setSearch={setSearch}
        progress={progress}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />
      <GameMap
        locations={filteredLocations}
        foundIds={foundIds}
        toggleFound={toggleFound}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />
    </div>
  )
}

export default App
