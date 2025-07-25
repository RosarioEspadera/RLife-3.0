// npcMoodlet.js
export const moodlets = {};

export function applyMoodlet(npc, moodletKey) {
  if (!moodlets[npc]) moodlets[npc] = [];
  moodlets[npc].push({
    key: moodletKey,
    timestamp: Date.now()
  });
}

export function getMoodlets(npc) {
  return moodlets[npc]?.slice(-3) || []; // only show recent 3
}

export function clearExpiredMoodlets(npc, duration = 3600000) {
  const now = Date.now();
  moodlets[npc] = moodlets[npc]?.filter(
    m => now - m.timestamp < duration
  ) || [];
}
