<template>
  <div class="clusterVisualizer">
    <div v-for="cluster in clusters" :key="cluster.tag" class="clusterBlock">
      <h3>{{ cluster.tag }}</h3>
      <ul>
        <li v-for="mem in cluster.memories" :key="mem.timestamp">
          {{ formatMemory(mem) }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { getMemoryClusters } from '../data/memoryCluster.js';
const clusters = getMemoryClusters(props.npc);
function formatMemory(mem) {
  return `${new Date(mem.timestamp).toLocaleDateString()}: ${mem.event}`;
}
</script>
