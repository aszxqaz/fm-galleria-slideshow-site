import { defineConfig } from "astro/config";

console.log(process.env.NODE_ENV);

const config =
  process.env.NODE_ENV == "production"
    ? defineConfig({
        site: "https://aszxqaz.github.io",
        base: "/fm-galleria-slideshow-site",
        prefetch: true,
      })
    : defineConfig({
        prefetch: true,
      });

export default config;
