<template>
  <div class="event-card" :class="eventData.moodTag">
    <div class="event-icon">{{ eventData.emoji || '🏆' }}</div>
    <div class="event-title">{{ eventData.title }}</div>
    <p class="event-description">{{ eventData.description }}</p>
    <div class="event-tags">
      <span v-for="tag in eventData.traits" :key="tag" class="tag">{{ tag }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useGameStore } from '../store/gameState'; // or plain inject if store-less

const game = useGameStore(); // adapt based on your current architecture

const eventData = computed(() => {
  const event = game.activeEvent || 'cookOffWin';
  const eventLookup = {
    cookOffWin: {
      title: "Davao Cook-Off Champion 🎉",
      description: "Your kaldereta blew the judges away! Migs is speechless.",
      emoji: "🍲",
      moodTag: "proud",
      traits: ["Ambitious", "Creative", "Confident"]
    },
    // Add more events here...
  };
  return eventLookup[event];
});
</script>

<style scoped>
.event-card {
  padding: 1rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}
.event-icon {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}
.event-tags .tag {
  background: #eee;
  padding: 0.25rem 0.5rem;
  margin-right: 0.25rem;
  border-radius: 8px;
}
</style>
