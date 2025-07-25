<template>
  <div class="reply-options">
    <button
      v-for="reply in replies"
      :key="reply.text"
      @click="handleReply(reply)"
      class="reply-button"
    >
      {{ reply.text }}
    </button>
  </div>
</template>

<script setup>
import { useGameStore } from '../store/gameState';
import { updateRelationship } from '../engine/data/relationshipMatrix';
import { applyMoodlet } from '../engine/data/npcMoodlet';
applyMoodlet(game.activeNPC, reply.effect);

const game = useGameStore();
const replies = game.currentReplies || [
  { text: "Thanks, that means a lot 💖", effect: "positive" },
  { text: "Wasn’t even trying tbh 😎", effect: "neutral" },
  { text: "You could’ve done better 🙄", effect: "negative" }
];
const unlocked = checkMemoryUnlocks(npc);
if (unlocked.includes('defensiveReplyOption')) {
  options.push({ label: "Why are you always like this?", trait: "stubborn" });
}

function handleReply(reply) {
  updateRelationship(game.activeNPC, reply.effect);
  game.log.push({
    type: "reply",
    npc: game.activeNPC,
    text: reply.text,
    effect: reply.effect
  });
  game.advanceScene();
}
</script>

<style scoped>
.reply-button {
  margin: 0.5rem 0;
  padding: 0.6rem 1.2rem;
  background-color: #fff7e6;
  border: 2px solid #f4c542;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s ease;
}
.reply-button:hover {
  background-color: #fff1cc;
}
</style>
