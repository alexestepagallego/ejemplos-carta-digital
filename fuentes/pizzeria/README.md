# Carta digital · Pizzería (modelo)

Carta para móvil hecha con **Astro**: un scroll con portada en vídeo, un índice de
categorías en franjas triangulares y una ficha a pantalla completa por categoría.
Sitio estático de una sola página, pensado para abrirse desde un QR en mesa.

## Arranque

```bash
npm install
npm run dev        # http://localhost:4321/ejemplos-carta-digital/pizzeria
npm run build      # → ../../docs/pizzeria (lo que sirve GitHub Pages)
npm run check      # typecheck de .astro y .ts
```

## Estructura

```
src/
  data/carta.ts            Carta de ejemplo + tokens de color
  lib/geometry.ts          Reparto e inclinación de las franjas (build y cliente)
  lib/menu.ts              Estado en cliente: categoría activa, cabecera, fichas
  components/              Portada, índice de franjas y ficha de categoría
  layouts/Base.astro       <head>, fuentes, metadatos
  pages/index.astro        Composición de la página
  styles/global.css        Tokens y estilos
```

## Por qué está montado así

- **Todo el contenido se renderiza en el build.** Las fichas van en el HTML; la
  carta se lee aunque falle el script y no hay saltos de contenido al cargar.
- **`lib/geometry.ts` se comparte entre build y cliente**, así que la primera
  pintura ya sale con la geometría correcta.
- **CSS inline y una sola página:** menos peticiones al escanear el QR.

Para adaptarla a un negocio: cambia `src/data/carta.ts`, el logo en
`src/assets/logo.png`, las fotos de `src/assets/` y el vídeo de `public/portada/`.
