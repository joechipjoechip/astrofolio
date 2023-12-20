import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import react from "@astrojs/react";

import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// https://astro.build/config
export default defineConfig({
  integrations: [
    // vue(), 
    vue({ appEntrypoint: '/src/pages/_app' }),
    react()
  ],
  // output: 'hybrid',

  renderers: ['@astrojs/renderer-vue'],

  vite: {
    resolve: {
      alias: {
        '@/': `${path.resolve(__dirname, 'src')}/`
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          // path to your scss variables
          additionalData: `@import "@/assets/styles/main.scss";`
        }
      }
    }
  }

});