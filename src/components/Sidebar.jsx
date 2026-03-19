const TYPE_COLORS = {
  boss: 'var(--boss)',
  collectible: 'var(--collectible)',
  secret: 'var(--secret)',
  territory: 'var(--territory)',
}

const TYPE_LABELS = {
  boss: 'Bosses',
  collectible: 'Collectibles',
  secret: 'Secrets',
  territory: 'Territories',
}

function Sidebar({ locations, activeFilters, toggleFilter, foundIds, toggleFound, search, setSearch, progress, selectedId, setSelectedId }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1>CrimsonMap</h1>
        <p>Interactive Crimson Desert Map</p>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search locations..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div className="filters">
        <h3>Filter</h3>
        <div className="filter-buttons">
          {Object.entries(TYPE_LABELS).map(([type, label]) => (
            <button
              key={type}
              className={`filter-btn ${activeFilters.has(type) ? 'active' : ''}`}
              data-type={type}
              onClick={() => toggleFilter(type)}
            >
              <span className="filter-dot" style={{ background: TYPE_COLORS[type] }} />
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="progress-section">
        <h3>Progress</h3>
        {Object.entries(progress).map(([type, { total, found }]) => (
          <div className="progress-bar-container" key={type}>
            <div className="progress-label">
              <span>{TYPE_LABELS[type]}</span>
              <span>{found}/{total}</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: total > 0 ? `${(found / total) * 100}%` : '0%',
                  background: TYPE_COLORS[type],
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="location-list">
        {locations.map(loc => (
          <div
            key={loc.id}
            className={`location-item ${foundIds.has(loc.id) ? 'found' : ''}`}
            onClick={() => setSelectedId(loc.id)}
          >
            <span className="dot" style={{ background: TYPE_COLORS[loc.type] }} />
            <div className="info">
              <div className="name">{loc.name}</div>
              <div className="type-label">{loc.type}</div>
            </div>
            <button
              className={`check ${foundIds.has(loc.id) ? 'checked' : ''}`}
              onClick={e => { e.stopPropagation(); toggleFound(loc.id) }}
            >
              {foundIds.has(loc.id) ? '✓' : ''}
            </button>
          </div>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
