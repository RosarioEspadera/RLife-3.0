export function checkMemoryUnlocks(npc) {
  const clusters = getMemoryClusters(npc);
  const unlocks = [];

  if (clusters.some(c => c.tag === 'love')) {
    unlocks.push('palengke_flashback', 'moonlitFairSideQuest');
  }

  if (clusters.some(c => c.tag === 'awkward')) {
    unlocks.push('apologyQuest', 'defensiveReplyOption');
  }

  return unlocks;
}
