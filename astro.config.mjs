import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://jade-entremet-66e60d.netlify.app/",
  integrations: [react()]
});