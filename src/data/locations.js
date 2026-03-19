// Seed data — known locations from press materials and community sources
// Coordinates use Leaflet CRS.Simple: x = pixels from left, y = pixels from top of pywel-map.webp (1200x1697)
// In CRS.Simple we map [y, x] as [lat, lng] with y inverted (0 = top)

const MAP_W = 1200
const MAP_H = 1697

const locations = [
  // ═══ BOSSES ═══
  // Hernand (central-south region, lush green)
  { id: 1, type: 'boss', name: 'Stoneback Crab', description: 'Giant crustacean boss found near the eastern shore of Hernand. Weak to fire attacks.', x: 780, y: 950, verified: true },
  { id: 2, type: 'boss', name: 'Corrupted Knight Commander', description: 'Fallen knight guarding the ruined fortress near Roothold Stronghold.', x: 520, y: 880, verified: true },
  // Pailune (northern highlands)
  { id: 3, type: 'boss', name: 'The Grey Wolf', description: 'Alpha predator of the Pailune highlands. Fast and relentless.', x: 400, y: 350, verified: true },
  { id: 4, type: 'boss', name: 'Frozen Soul Dragon', description: 'Ancient dragon nesting atop Frozen Soul Mountain. Immune to frost.', x: 550, y: 250, verified: true },
  // Crimson Desert (southern desert)
  { id: 5, type: 'boss', name: 'Sand Wyrm', description: 'Massive desert serpent. Burrows underground between attacks in the red dunes.', x: 650, y: 1450, verified: true },
  // Delesyia (mechanical region, east)
  { id: 6, type: 'boss', name: 'Flame Guardian', description: 'Elemental construct at the Delesyia power core. Immune to fire.', x: 900, y: 600, verified: true },
  // Demeniss (capital, center)
  { id: 7, type: 'boss', name: 'Royal Catacombs Shade', description: 'Abyss-corrupted spirit lurking in the Royal Catacombs beneath Demeniss Castle.', x: 600, y: 700, verified: true },

  // ═══ COLLECTIBLES ═══
  // Hernand
  { id: 8, type: 'collectible', name: 'Ancient Scroll Fragment #1', description: 'Part of the lost chronicle. Found in a hidden cave near the Eldertree.', x: 450, y: 1000, verified: true },
  { id: 9, type: 'collectible', name: 'Ancient Scroll Fragment #2', description: 'Second piece of the chronicle. Hidden in the Hernand Castle library.', x: 600, y: 920, verified: true },
  // Pailune
  { id: 10, type: 'collectible', name: 'Crimson Gemstone', description: 'Rare gemstone that glows in darkness. Found in Dragon Ridge caves.', x: 480, y: 300, verified: true },
  { id: 11, type: 'collectible', name: 'War Horn of Pywel', description: 'Legendary artifact at the Pailune Monument. Unlocks a hidden questline.', x: 350, y: 420, verified: true },
  // Delesyia
  { id: 12, type: 'collectible', name: 'Mechanical Core', description: 'Dropped by constructs near Marni\'s Masterium. Used in high-tier crafting.', x: 950, y: 550, verified: true },
  // Crimson Desert
  { id: 13, type: 'collectible', name: 'Dragon Scale', description: 'Shed scale from an ancient dragon. Found partially buried in the red sands.', x: 700, y: 1350, verified: true },

  // ═══ SECRETS ═══
  // Demeniss
  { id: 14, type: 'secret', name: 'Hidden Underground Passage', description: 'Secret tunnel connecting Demeniss Castle to the Military Fort.', x: 620, y: 680, verified: true },
  // Hernand
  { id: 15, type: 'secret', name: 'Phantom Merchant', description: 'Appears only at night near Hernand Crossroads. Sells rare items.', x: 500, y: 960, verified: true },
  // Crimson Desert
  { id: 16, type: 'secret', name: 'Buried Temple', description: 'Ancient temple buried beneath the crimson sands. Requires key from Bonepit Arena.', x: 750, y: 1500, verified: true },
  // Pailune
  { id: 17, type: 'secret', name: 'Whispering Stones', description: 'Circle of stones on Dragon Ridge that reveal lore when activated in sequence.', x: 520, y: 280, verified: true },
  // Delesyia
  { id: 18, type: 'secret', name: 'Tesla Ruins Cache', description: 'Hidden stash of prototype weapons in the Tesla Ruins.', x: 880, y: 520, verified: true },

  // ═══ TERRITORIES ═══
  { id: 19, type: 'territory', name: 'Hernand', description: 'Fertile heartland and starting region. Lush green fields, cities, and noble house rivalries.', x: 580, y: 950, verified: true },
  { id: 20, type: 'territory', name: 'Pailune', description: 'Northern highlands and Greymane homeland. Snowy peaks and wild horse grasslands.', x: 450, y: 350, verified: true },
  { id: 21, type: 'territory', name: 'Demeniss', description: 'The grand capital of Pywel and seat of power. Military staging ground.', x: 600, y: 650, verified: true },
  { id: 22, type: 'territory', name: 'Delesyia', description: 'Mechanical frontier — the most scientifically advanced region with constructs and alchemy.', x: 900, y: 550, verified: true },
  { id: 23, type: 'territory', name: 'The Crimson Desert', description: 'Barren wasteland of crimson sand. Lawless and home to brigands and ancient secrets.', x: 650, y: 1400, verified: true },
]

export default locations
export { MAP_W, MAP_H }
