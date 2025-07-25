export const relationshipMatrix = {
  npcName: {
    bond: 75,
    rivalry: 10,
    lastEvent: "cookOffWin",
    traitAffinityBoosts: { sweet: +0.2 },
    cooldowns: {
      anger: 3, // days until reset
      admiration: 7
    }
  }
};
export const traitImpactTags = {
  publicPraise: { sweet: +0.1, blunt: -0.1 },
  betrayal: { loyal: -0.4, jaded: +0.3 },
  support: { sweet: +0.2, loyal: +0.2 }
};
function updateCooldowns(npc, daysPassed) {
  for (let emotion in npc.cooldowns) {
    npc.cooldowns[emotion] -= daysPassed;
    if (npc.cooldowns[emotion] <= 0) npc.cooldowns[emotion] = 0;
  }
}
