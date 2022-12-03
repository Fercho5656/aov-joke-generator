<template>
  <div class="dark:bg-gray-dark w-full h-full p-4 flex justify-center items-center">
    <div class="max-w-xs flex flex-col gap-y-3">
      <message>
        {{ joke?.setup }}
      </message>
      <message position="right" v-show="showAnswer">
        {{ joke?.delivery }}
      </message>
      <f-button v-show="!showAnswer" @click="onShowAnswer">🤔 Tell me!</f-button>
      <f-button v-show="showAnswer" @click="onGetJoke">LMAO tell me another one!</f-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import FButton from './components/FButton.vue';
import Message from './components/Message.vue';
import IJoke from '../interfaces/IJoke';
import getJoke from '../services/getJoke'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
useToggle(isDark)
const joke = ref<IJoke>()
const showAnswer = ref<boolean>(false)

onMounted(async () => {
  joke.value = await getJoke()
})

const onShowAnswer = () => {
  showAnswer.value = true
}

const onGetJoke = async () => {
  joke.value = await getJoke()
  showAnswer.value = false
}
</script>
