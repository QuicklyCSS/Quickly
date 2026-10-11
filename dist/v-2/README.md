# QuicklyCSS V2

> **Versión preliminar:** QuicklyCSS `2.0.0-alpha.1` está actualmente en desarrollo. Sus clases, componentes y comportamientos pueden cambiar antes de la publicación estable.

Distribución compilada de **QuicklyCSS V2** para evaluación, pruebas y desarrollo.

## Archivos

```text
v-2/
├── css/
│   └── quicklycss_v2.min.css
├── js/
│   └── quicklycss_v2_components.js
└── README.md
```

### `quicklycss_v2.min.css`

Bundle completo y minificado del framework. Incluye:

- Núcleo y fundamentos.
- Estructuras y containers.
- Contenidos.
- Utilidades.
- Componentes.
- Estilos para templates.

### `quicklycss_v2_components.js`

Incluye el comportamiento necesario para los componentes interactivos del framework.

## Instalación

Añade ambos archivos a tu documento HTML:

```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Proyecto con QuicklyCSS V2</title>

  <link rel="stylesheet" href="css/quicklycss_v2.min.css">
</head>
<body>
  <main class="qy-cont-8 qy-cont-768-10">
    <h1>QuicklyCSS V2</h1>

    <button class="btn btn-primary" type="button">
      Comenzar
    </button>
  </main>

  <script src="js/quicklycss_v2_components.js" defer></script>
</body>
</html>
```

## Orden de carga

1. Carga `quicklycss_v2.min.css` dentro de `<head>`.
2. Carga `quicklycss_v2_components.js` antes de cerrar `<body>` o utiliza el atributo `defer`.

No es necesario cargar otros archivos CSS: `quicklycss_v2.min.css` contiene todos los módulos del framework.

## Uso recomendado

Esta versión está destinada a evaluación y pruebas. No se recomienda utilizarla en proyectos críticos de producción sin realizar validaciones previas.

## Documentación

La documentación, ejemplos y templates están disponibles en:

[quicklycss.github.io/Quickly](https://quicklycss.github.io/Quickly/)

## Licencia

QuicklyCSS V2 se distribuye bajo la licencia  
[Creative Commons Attribution-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/).

Diseñado y construido en Chile por **Alexander Osses**.
