function generateNPCLine(npc, event) {
  const traits = traitAffinity[npc]; // e.g. { jaded: 0.7, sweet: 0.3 }
  const responses = dialogResponses[event];
  const memory = memoryLog[npc] || [];

  let baseTrait = Object.keys(traits).reduce((a, b) => traits[a] > traits[b] ? a : b);
  let line = responses?.[baseTrait] || "They blink, quietly. You’re not sure what they mean.";

  if (memory.includes(event)) {
    line += " (They remember this… differently.)";
  }

  return line;
}
function recallEvent(npc, playerTrait) {
  const memory = getRecentMemories(npc).find(mem => mem.emotionalTags.includes('publicPraise'));
  if (memory && playerTrait === 'sweet') {
    return "Still proud of your cook-off win. That kaldereta slapped. 😋";
  } else if (memory) {
    return "You’ve been kinda loud since the fiesta, huh.";
  }
  return null;
}
