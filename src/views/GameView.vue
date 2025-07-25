<template>
  <div class="game-container">
    <CitySelector @citySelected="startGameFlow" />
    <SceneComposer :event="activeEvent" :npc="activeNPC" />
    <EventCard :event="activeEvent" />
    <NPCDialog :npc="activeNPC" :event="activeEvent" />
    <ReplyOptions :options="replyChoices" @reply="handleReply" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CitySelector from '../components/CitySelector.vue';
import SceneComposer from '../components/SceneComposer.vue';
import EventCard from '../components/EventCard.vue';
import NPCDialog from '../components/NPCDialog.vue';
import ReplyOptions from '../components/ReplyOptions.vue';

// Game state
const selectedCity = ref(null);
const activeEvent = ref(null);
const activeNPC = ref(null);
const replyChoices = ref([]);

function startGameFlow(city) {
  selectedCity.value = city;
  activeEvent.value = 'cookOffWin'; // example placeholder
  activeNPC.value = 'Crush Migs';
  replyChoices.value = [
    'Told you I had a secret weapon!',
    'Haha, you’re still salty about losing?',
    'We should team up next time!'
  ];
}

function handleReply(replyText) {
  console.log('Player replied:', replyText);
  // TODO: Update relationshipMatrix + memory log
}
</script>

