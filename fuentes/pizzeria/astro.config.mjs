// @ts-check
import { defineConfig } from 'astro/config';

// Se publica en GitHub Pages bajo /ejemplos-carta-digital/pizzeria/ y el build
// sale directamente a docs/pizzeria (la carpeta que sirve Pages).
export default defineConfig({
  base: '/ejemplos-carta-digital/pizzeria',
  outDir: '../../docs/pizzeria',
  image: {
    // Las fotos se colocan con tamaños fijos en px y se animan; nada de layout responsive.
    layout: 'none',
  },
  build: {
    // Una sola página: el CSS va inline y ahorra un round-trip en el primer escaneo del QR.
    inlineStylesheets: 'always',
  },
});
