<template>
  <div class="memoryVisualizer">
    <div v-for="memory in recentMemories" :key="memory.timestamp" class="memoryCard">
      <img :src="getEventIcon(memory.event)" class="icon" />
      <p>{{ renderMemoryText(memory) }}</p>
    </div>
  </div>
</template>

<script setup>
import { getRecentMemories } from '../data/npcMemory.js';

const recentMemories = getRecentMemories(props.npc);
function renderMemoryText(mem) {
  if (mem.emotionalTags.includes('love')) return "Sweet moment at the moonlit fair. ✨";
  if (mem.emotionalTags.includes('awkward')) return "That tricycle ride was... intense.";
  return "A shared memory from way back.";
}
function getEventIcon(eventKey) {
  // eventually replace with custom illustrations
  return `/assets/icons/${eventKey}.png`;
}
</script>
