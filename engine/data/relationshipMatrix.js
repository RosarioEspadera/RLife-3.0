// relationshipMatrix.js
export const relationshipMatrix = {};

export function updateRelationship(npc, effect) {
  if (!relationshipMatrix[npc]) relationshipMatrix[npc] = { score: 0, log: [] };

  let delta = 0;
  if (effect === "positive") delta = 10;
  else if (effect === "neutral") delta = 0;
  else if (effect === "negative") delta = -10;

  relationshipMatrix[npc].score += delta;
  relationshipMatrix[npc].log.push({ effect, timestamp: Date.now() });
}

export function getRelationshipScore(npc) {
  return relationshipMatrix[npc]?.score || 0;
}

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
