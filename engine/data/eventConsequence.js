export function applyEventConsequences(npc, eventTags) {
  const modifiers = {};

  if (eventTags.includes("publicPraise")) {
    modifiers.rivalry = (npc.traits.blunt || 0) > 0.5 ? +5 : -3;
    modifiers.bond = (npc.traits.sweet || 0) > 0.5 ? +4 : +1;
  }

  if (eventTags.includes("betrayal")) {
    modifiers.rivalry = +20;
    modifiers.trust = -15;
  }

  return modifiers;
}
