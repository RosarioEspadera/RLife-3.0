export function getMemoryClusters(npc, threshold = 3) {
  const memories = npcMemory[npc] || [];
  const clusters = {};

  memories.forEach(mem => {
    mem.emotionalTags.forEach(tag => {
      if (!clusters[tag]) clusters[tag] = [];
      clusters[tag].push(mem);
    });
  });

  // Filter clusters with enough depth
  return Object.entries(clusters)
    .filter(([, mems]) => mems.length >= threshold)
    .map(([tag, mems]) => ({ tag, memories: mems }));
}
