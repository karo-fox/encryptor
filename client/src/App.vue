<script setup lang="ts">
import { useFormStore } from "./stores/form";
import { useI18n } from "vue-i18n";

import { useToggleDarkMode } from "./composables/toggleDarkMode";

import CipherSelect from "./components/form/CipherSelect.vue";
import ParamsPanel from "./components/form/ParamsPanel.vue";
import MessageInput from "./components/form/MessageInput.vue";
import CopiableBlock from "./components/CopiableBlock.vue";
import AppHeader from "./components/header/AppHeader.vue";
import ActionSwitch from "./components/form/ActionSwitch.vue";
import InfoLink from "./components/InfoLink.vue";
import ActionButton from "./components/form/ActionButton.vue";
import DescriptionPanel from "./components/description/DescriptionPanel.vue";

const formStore = useFormStore();
const { t } = useI18n();

useToggleDarkMode();
</script>

<template>
  <div
    class="antialiased bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50"
  >
    <header
      class="sticky top-0 w-full bg-slate-300 text-slate-900 shadow-md z-40"
    >
      <div class="py-6 mx-4 xl:mx-auto xl:px-4 xl:max-w-7xl">
        <div class="relative flex items-center">
          <AppHeader />
        </div>
      </div>
    </header>
    <div class="overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <main class="mt-16">
          <p class="flex justify-center text-slate-500">
            {{ t("action-desc") }}
          </p>
          <div class="flex justify-center py-4 mb-4">
            <ActionSwitch />
          </div>
          <p class="flex justify-center text-slate-500">
            {{ t("choose-cipher") }}
          </p>
          <div class="flex justify-center items-center py-4">
            <CipherSelect />
            <InfoLink :link-to="`info-${formStore.cipher}`" />
          </div>
          <div class="grid md:grid-cols-3">
            <div class="py-4 md:col-span-2">
              <p class="text-slate-500">{{ t("type-message") }}</p>
              <div class="py-4">
                <MessageInput />
              </div>
            </div>
            <div class="py-4 md:ml-8 lg:ml-16">
              <div id="params" class="py-4 flex flex-col">
                <p class="text-slate-500">{{ t("cipher-settings") }}</p>
                <ParamsPanel />
              </div>
            </div>
          </div>
          <div class="flex justify-end py-4">
            <ActionButton />
          </div>
          <output>
            <div class="pb-8" id="result-panel">
              <div class="text-xl py-4">{{ t("results") }}:</div>
              <div
                class="min-h-[16rem] bg-slate-50 dark:bg-slate-900 rounded-md border-cyan-500 border-2 border-solid"
              >
                <CopiableBlock :result="formStore.result" id="result-block" />
              </div>
            </div>
          </output>
        </main>
        <section class="mb-32">
          <DescriptionPanel />
        </section>
        <footer></footer>
      </div>
    </div>
  </div>
</template>

<i18n>
  {
    "pl": {
      "action-desc": "Co chcesz zrobić?",
      "choose-cipher": "Wybierz szyfr",
      "type-message": "Tutaj wpisz swoją wiadomość",
      "cipher-settings": "Dobierz ustawienia szyfru",
      "results": "Twój wynik",
    },
    "en": {
      "action-desc": "What do you want to do?",
      "choose-cipher": "Choose the cipher",
      "type-message": "Type your message here",
      "cipher-settings": "Adjust cipher settings",
      "results": "Your result",
    }
  }
</i18n>
