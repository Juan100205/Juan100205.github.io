import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
// https://astro.build/config
export default defineConfig({
  site: 'https://Juan100205.github.io',
  base: 'mi-repo',
  integrations: [tailwind()]

})

