export function composeScene(event, npc, city) {
  const backdrop = cityBackdrops[city] || "defaultPlaza";
  const overlays = [];

  if (event.tags.includes("publicPraise")) overlays.push("confettiBurst");
  if (npc.traits.sweet > 0.6) overlays.push("softGlow");
  if (event.tags.includes("food")) overlays.push("steamRising");

  return {
    backdrop,
    overlays,
    lighting: npc.traits.blunt > 0.5 ? "harsh" : "warm"
  };
}
