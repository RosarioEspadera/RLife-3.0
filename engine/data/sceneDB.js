export const scenes = {
  moonlitFairFlashback: {
    trigger: "loveCluster",
    panelArt: "moonlit_fair_hands.png",
    caption: "A soft breeze, faint laughter, and two hands that didn't mean to touch."
  },
  // Add more scenes...
};

export function getSceneById(sceneId) {
  return scenes[sceneId] || null;
}
