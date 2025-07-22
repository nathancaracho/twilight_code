// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import catppuccin from "@catppuccin/starlight";

import astroD2 from 'astro-d2'

export default defineConfig({
  site: 'https://nathancaracho.github.io',
  base: '/twilight_code',
  integrations: [starlight({
    title: 'Twilight code',
    social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/nathancaracho/twilight_code' }],
    plugins: [catppuccin({})]

  }), astroD2()],
});
