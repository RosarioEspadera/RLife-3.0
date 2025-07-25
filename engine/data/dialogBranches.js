export function getNPCResponses(npc, event, relationshipScore) {
  const traits = traitAffinity[npc];
  const baseTrait = Object.keys(traits).reduce((a, b) => traits[a] > traits[b] ? a : b);
  const responses = dialogResponses[event]?.[baseTrait] || {};

  return relationshipScore > 70 ? responses.high : responses.low;
}
