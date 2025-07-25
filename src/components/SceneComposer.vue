<template>
  <div v-if="scene" class="sceneComposer">
    <img :src="`/assets/panels/${scene.panelArt}`" class="sceneImage" />
    <p class="sceneCaption">{{ scene.caption }}</p>
  </div>
</template>

<script setup>
import { getSceneById } from '../engine/data/sceneDB.js';

const currentScene = ref(null);
function triggerScene(sceneId) {
  const sceneData = getSceneById(sceneId);
  currentScene.value = sceneData;
}
</script>
