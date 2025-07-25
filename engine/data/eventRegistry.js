import fs from 'fs';
const events = fs.readdirSync('./engine/cards/events').map(file => file.replace('.json', ''));
// Optional: add rarity, city, moodlet, NPC links
