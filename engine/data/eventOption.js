if (npcUnlocks.includes('moonlitFairSideQuest')) {
  eventOptions.push({
    label: "Revisit the fair tonight",
    onSelect: () => {
      triggerScene('moonlitFairFlashback');
      startSideQuest('moonlitFairSideQuest');
    }
  });
}
