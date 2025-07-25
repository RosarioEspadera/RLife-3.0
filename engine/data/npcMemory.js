export const npcMemory = {};

// Add memory (can include emotional flavor)
export function recordMemory(npc, eventKey, tags = []) {
  if (!npcMemory[npc]) npcMemory[npc] = [];
  npcMemory[npc].push({
    event: eventKey,
    timestamp: Date.now(),
    emotionalTags: tags // e.g. ['support', 'publicPraise']
  });
}

// Get recent memories
export function getRecentMemories(npc, limit = 5) {
  return npcMemory[npc]?.slice(-limit) || [];
}
