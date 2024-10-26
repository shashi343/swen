import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        servicesAirFreight: resolve(__dirname, "services-air-freight.html"),
        servicesContainerLeasing: resolve(__dirname, "refrigerated-cargo.html"),
        servicesContainerTrading: resolve(
          __dirname,
          "project-and-over-dimensional-cargo.html"
        ),
        servicesFreightForwarding: resolve(
          __dirname,
          "services-freight-forwarding.html"
        ),
        servicesOceanFreight: resolve(__dirname, "nvocc-agency-handling.html"),
        servicesWarehousingDistribution: resolve(
          __dirname,
          "warehouse-total-logistics.html"
        ),
        resources: resolve(__dirname, "resources.html"),
        gallery: resolve(__dirname, "gallery.html"),
        ourLocations: resolve(__dirname, "our-locations.html"),
        contactUs: resolve(__dirname, "contact-us.html"),
        aboutUs: resolve(__dirname, "about-us.html"),
        error404: resolve(__dirname, "404.html"),
      },
    },
  },
});
