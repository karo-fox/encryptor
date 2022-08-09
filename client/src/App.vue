<script setup lang="ts">
import { useToggleDarkMode } from "./composables/toggleDarkMode";
import IconSun from "./components/icons/IconSun.vue";
import IconMoon from "./components/icons/IconMoon.vue";
import IconGithub from "./components/icons/IconGithub.vue";
import IconQuestion from "./components/icons/IconQuestion.vue";

useToggleDarkMode();
</script>

<template>
  <div>
    <header class="sticky top-0 w-full">
      <div class="py-4 mx-4 xl:mx-auto xl:px-4 xl:max-w-7xl">
        <div class="relative flex items-start">
          <span class="mr-2 text-2xl">Cipherator</span>
          <div class="ml-auto">
            <button><IconMoon class="h-4" /></button>
            <button class="ml-2"><IconSun class="h-4" /></button>
          </div>
          <div class="ml-8">
            <a href="#">
              <button>
                <IconGithub class="h-4" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </header>
    <div class="overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <main>
          <form action="post">
            <div class="flex justify-around py-4">
              <input
                name="action"
                type="button"
                value="encrypt"
                class="text-lg"
              />
              <input
                name="action"
                type="button"
                value="decrypt"
                class="text-lg"
              />
            </div>
            <div class="flex justify-center items-center py-4">
              <select name="cipher" class="text-lg">
                <option value="ceasar">Ceasar's</option>
                <option value="switch">Switch</option>
              </select>
              <a href="#info-ceasar" class="ml-4"><IconQuestion /></a>
            </div>
            <div class="grid md:grid-cols-3">
              <div class="py-4 md:col-span-2">
                <div class="py-4">
                  <textarea
                    name="message"
                    id="message"
                    class="w-full min-h-[24rem] p-4"
                  >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illum aliquam temporibus corrupti eos provident dignissimos consequuntur repellat, necessitatibus facere error natus cum molestiae molestias ad odio totam quae vitae.
                  </textarea>
                </div>
              </div>
              <div class="py-4 md:ml-8 lg:ml-16">
                <div id="props" class="py-4 flex flex-col">
                  <div class="py-4 flex items-center">
                    <label for="shift" class="text-lg">Shift</label>
                    <a href="#info-shift" class="ml-4"><IconQuestion /></a>
                  </div>
                  <input type="range" name="shift" id="shift" class="py4" />
                  <div class="py-4 flex items-center">
                    <label for="alphabet" class="text-lg">Alphabet</label>
                    <a href="#info-alphabet" class="ml-4"><IconQuestion /></a>
                  </div>
                  <select id="alphabet" name="alphabet" class="py-4">
                    <option value="en">English</option>
                    <option value="pl">Polish</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="flex justify-end py-4">
              <button class="border rounded-md py-4 px-8">Encrypt</button>
            </div>
          </form>
          <output>
            <div class="pb-8">
              <div class="text-xl py-4">Your results:</div>
              <div class="p-4 border border-solid min-h-[16rem]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repellendus natus ipsum enim ab quam tempora id voluptate omnis
                nulla maiores rerum alias praesentium rem velit, excepturi
                necessitatibus, perspiciatis libero eius!
              </div>
            </div>
          </output>
        </main>
        <section>
          <div class="my-4">
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
          <div class="my-2">
            <h3 id="info-shift" class="text-lg py-4">Shift</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
              dolorum consectetur facere nulla fugit reprehenderit a, laboriosam
              veritatis? Culpa repudiandae earum ducimus laboriosam totam quis
              debitis consectetur deleniti repellat a.
            </p>
          </div>
          <div class="my-2">
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

class="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0
dark:border-slate-300/10 mx-4 lg:mx-0"
