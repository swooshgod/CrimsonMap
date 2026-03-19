// Seed data — known locations from press materials and community sources
// Coordinates use Leaflet's CRS.Simple with y-inverted image coords
const locations = [
  // Bosses
  { id: 1, type: 'boss', name: 'Stoneback Crab', description: 'Giant crustacean boss found near the eastern shore. Weak to fire attacks.', x: 62, y: -45, verified: true },
  { id: 2, type: 'boss', name: 'Corrupted Knight Commander', description: 'Fallen knight guarding the ruined fortress. High physical defense.', x: 38, y: -30, verified: true },
  { id: 3, type: 'boss', name: 'Sand Wyrm', description: 'Massive desert serpent. Burrows underground between attacks.', x: 75, y: -70, verified: true },
  { id: 4, type: 'boss', name: 'The Grey Wolf', description: 'Alpha predator of the northern forests. Fast and relentless.', x: 25, y: -15, verified: true },
  { id: 5, type: 'boss', name: 'Flame Guardian', description: 'Elemental boss at the volcanic summit. Immune to fire.', x: 80, y: -25, verified: true },

  // Collectibles
  { id: 6, type: 'collectible', name: 'Ancient Scroll Fragment #1', description: 'Part of the lost chronicle. Found in a hidden cave behind the waterfall.', x: 30, y: -40, verified: true },
  { id: 7, type: 'collectible', name: 'Ancient Scroll Fragment #2', description: 'Second piece of the chronicle. Hidden in the library ruins.', x: 50, y: -35, verified: true },
  { id: 8, type: 'collectible', name: 'Crimson Gemstone', description: 'Rare gemstone that glows in darkness. Trade to the jeweler for upgrades.', x: 45, y: -55, verified: true },
  { id: 9, type: 'collectible', name: 'War Horn of Pywell', description: 'Legendary artifact. Unlocks a hidden questline when brought to the castle.', x: 55, y: -20, verified: true },
  { id: 10, type: 'collectible', name: 'Dragon Scale', description: 'Shed scale from an ancient dragon. Used in high-tier crafting.', x: 70, y: -40, verified: true },

  // Secrets
  { id: 11, type: 'secret', name: 'Hidden Underground Passage', description: 'Secret tunnel connecting the capital to the eastern fort.', x: 42, y: -38, verified: true },
  { id: 12, type: 'secret', name: 'Phantom Merchant', description: 'Appears only at night. Sells rare items not found elsewhere.', x: 33, y: -50, verified: true },
  { id: 13, type: 'secret', name: 'Sunken Shrine', description: 'Underwater temple with ancient blessings. Requires diving ability.', x: 60, y: -60, verified: true },
  { id: 14, type: 'secret', name: 'Whispering Stones', description: 'Circle of stones that reveal lore when activated in sequence.', x: 20, y: -35, verified: true },

  // Territories
  { id: 15, type: 'territory', name: 'Pywell Kingdom', description: 'Central kingdom and main story hub. Largest settlement in the world.', x: 50, y: -30, verified: true },
  { id: 16, type: 'territory', name: 'Deadlands', description: 'Scorched desert region to the southeast. High-level enemies.', x: 72, y: -65, verified: true },
  { id: 17, type: 'territory', name: 'Northern Pinelands', description: 'Dense forest region. Home to bandits and wildlife.', x: 28, y: -18, verified: true },
  { id: 18, type: 'territory', name: 'Crimson Coast', description: 'Coastal region with fishing villages and naval encounters.', x: 65, y: -50, verified: true },
]

export default locations
