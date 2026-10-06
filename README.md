# Ejemplos de carta digital

Dos modelos de carta digital para móvil, pensados para abrirse desde un QR en la mesa de un bar o restaurante.

**Ver en vivo: https://alexestepagallego.github.io/ejemplos-carta-digital/**

| Modelo | Qué es | Tecnología |
|---|---|---|
| [`pizzeria`](https://alexestepagallego.github.io/ejemplos-carta-digital/pizzeria/) | Portada con vídeo, categorías en franjas animadas y ficha a pantalla completa | Astro (estático) |
| [`bar`](https://alexestepagallego.github.io/ejemplos-carta-digital/bar/) | Carta oscura con fotos grandes, detalle de cada cóctel y alérgenos | HTML + Tailwind + JS vanilla |

Los nombres, platos y precios son ficticios: son modelos para enseñar cómo quedaría una carta, no la de un negocio real.

## Estructura

```
docs/                 Lo que sirve GitHub Pages
  index.html          Página que presenta los dos modelos
  bar/                Carta de cocktail bar (un solo HTML)
  pizzeria/           Carta de pizzería ya compilada
fuentes/pizzeria/     Código fuente de la carta de pizzería (Astro)
```

## Reconstruir la pizzería

```bash
cd fuentes/pizzeria
npm install
npm run build      # genera docs/pizzeria
```

## Contacto

Alejandro Estepa Gallego · alexestepagallego@gmail.com · [puntozerosl.es](https://puntozerosl.es)
