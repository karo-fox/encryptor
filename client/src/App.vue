<script setup lang="ts">
import { useToggleDarkMode } from "./composables/toggleDarkMode";
import CopiableBlock from "./components/CopiableBlock.vue";
import AppHeader from "./components/header/AppHeader.vue";
import ActionSwitch from "./components/form/ActionSwitch.vue";
import InfoLink from "./components/InfoLink.vue";
import { useFormStore } from "./stores/form";
import CipherSelect from "./components/form/CipherSelect.vue";
import TextInput from "./components/form/TextInput.vue";

const formStore = useFormStore();

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
            What do you want to do?
          </p>
          <div class="flex justify-center py-4 mb-4">
            <ActionSwitch />
          </div>
          <p class="flex justify-center text-slate-500">Choose the cipher</p>
          <div class="flex justify-center items-center py-4">
            <CipherSelect />
            <InfoLink link-to="info-ceasar" />
          </div>
          <div class="grid md:grid-cols-3">
            <div class="py-4 md:col-span-2">
              <p class="text-slate-500">Type your message here</p>
              <div class="py-4">
                <TextInput />
              </div>
            </div>
            <div class="py-4 md:ml-8 lg:ml-16">
              <div id="params" class="py-4 flex flex-col">
                <p class="text-slate-500">Adjust cipher settings</p>
                <div class="py-4 flex items-center ml-16 md:ml-0">
                  <label for="shift" class="text-lg">Shift</label>
                  <InfoLink link-to="info-shift" />
                </div>
                <input
                  type="range"
                  name="shift"
                  id="shift"
                  class="py-4 w-64 mx-auto"
                />
                <div class="py-4 flex items-center ml-16 md:ml-0">
                  <label for="alphabet" class="text-lg">Alphabet</label>
                  <InfoLink link-to="info-alphabet" />
                </div>
                <select
                  id="alphabet"
                  name="alphabet"
                  class="p-4 w-64 mx-auto bg-slate-300 rounded-md text-slate-900"
                >
                  <option value="en">English</option>
                  <option value="pl">Polish</option>
                </select>
              </div>
            </div>
          </div>
          <div class="flex justify-end py-4">
            <button
              class="rounded-md bg-cyan-500 text-slate-50 dark:bg-cyan-500 dark:text-slate-900 py-4 px-8 lg:px-16"
              @click="formStore.sendForm()"
            >
              Encrypt
            </button>
          </div>
          <output>
            <div class="pb-8">
              <div class="text-xl py-4">Your results:</div>
              <div
                class="min-h-[16rem] bg-slate-50 dark:bg-slate-900 rounded-md border-cyan-500 border-2 border-solid"
              >
                <CopiableBlock :result="formStore.result" />
              </div>
            </div>
          </output>
        </main>
        <section class="mb-32">
          <div class="py-4 border-b border-slate-300 dark:border-slate-700">
            <h2 id="info-ceasar" class="text-xl py-4">
              How does the Ceasar's work?
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              quasi laudantium, assumenda sunt incidunt aperiam dolor,
              repellendus dolores aliquid ullam doloribus magni, doloremque
              alias nihil nemo perspiciatis veritatis tenetur iusto?
            </p>
          </div>
          <div class="py-4 border-b border-slate-300 dark:border-slate-700">
            <h3 id="info-shift" class="text-lg py-4">Shift</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
              dolorum consectetur facere nulla fugit reprehenderit a, laboriosam
              veritatis? Culpa repudiandae earum ducimus laboriosam totam quis
              debitis consectetur deleniti repellat a.
            </p>
          </div>
          <div class="py-4 border-b border-slate-300 dark:border-slate-700">
            <h3 id="info-alphabet" class="text-lg py-4">Alphabet</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex unde
              eius quidem nostrum ipsum obcaecati, pariatur totam exercitationem
              repudiandae? Ut sed voluptatum error in ratione nulla excepturi
              praesentium ullam nesciunt!
            </p>
          </div>
        </section>
        <footer></footer>
      </div>
    </div>
  </div>
</template>
