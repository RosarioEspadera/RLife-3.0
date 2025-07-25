<template>
  <div class="npc-dialog">
    <div class="npc-name">{{ npcName }}</div>
    <p class="npc-line">{{ npcLine }}</p>
    <div class="npc-traits">
      <span v-for="trait in npcTraits" :key="trait" class="trait-tag">{{ trait }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useGameStore } from '../store/gameState';
import { generateNPCLine } from '../engine/data/dialogBuilder.js';
import { checkMemoryUnlocks } from '../engine/data/relationshipEngine.js';

const npcUnlocks = checkMemoryUnlocks(props.npc);

if (npcUnlocks.includes('moonlitFairSideQuest')) {
  dialogOptions.push({
    label: "Let's revisit the fair tonight.",
    trigger: "moonlitFairFlashback"
  });
}

const game = useGameStore();
const npcName = computed(() => game.activeNPC || "Migs");
const npcTraits = computed(() => Object.keys(game.traitAffinity[npcName.value] || {}));
const npcLine = computed(() =>
  generateNPCLine(npcName.value, game.activeEvent || "cookOffWin")
);
</script>

<style scoped>
.npc-dialog {
  margin: 1rem 0;
  padding: 1rem;
  background: #fefbf6;
  border-left: 6px solid #f4c542;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
}
.npc-name {
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}
.trait-tag {
  background-color: #ffd985;
  color: #333;
  border-radius: 6px;
  padding: 0.25rem 0.5rem;
  margin-right: 0.3rem;
  font-size: 0.8rem;
}
</style>
