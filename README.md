# Regex Spellcaster · La mazmorra del Oniromante

Juego educativo de Pascal (2025), renovado como aplicación web en 2026.

## Jugar y desarrollar

Necesitas Node.js 22 o posterior. No hay paquetes que instalar ni servicios externos.

```sh
npm test
npm run check
npm run build
npm run dev
```

Abre `http://localhost:4173`. **No abras index.html con doble clic**: los módulos, los workers y la aplicación sin conexión necesitan HTTP/HTTPS. `npm run build` prepara `dist/`; `npm run dev` sirve ese resultado. Vuelve a compilar tras cambiar código.

## Publicar en GitHub Pages

El repositorio es `Blai3ePascal/regexspellcaster`. El paquete incluye `.github/workflows/pages.yml`. En cada push a `main` ejecuta pruebas, comprobaciones y compilación, y publica `dist/` mediante las acciones oficiales de Pages. Las pull requests solo validan y no publican.

1. Crea un repositorio nuevo con ese nombre (público si usas GitHub Free).
2. Sube los archivos de este proyecto a `main`, incluida la carpeta `.github`.
3. En **Settings → Pages → Build and deployment → Source**, elige **GitHub Actions**.
4. Ejecuta el workflow desde **Actions → Test and deploy Regex Spellcaster → Run workflow** si fuera necesario.
5. Usa la URL que muestre el despliegue exitoso. La URL prevista no es una prueba de publicación.

El helper `scripts/deploy-github.ps1` automatiza la creación de un repositorio nuevo y la activación de Pages desde Windows con Git, GitHub CLI y Node.js instalados. Te muestra el destino y pide confirmación antes de publicar. No necesita copiar tokens en ningún archivo.

## Funciones conservadas y mejoras

- Los 40 niveles, sus códigos originales (incluido `CONTRASEÑA29`), nombres de criaturas, historia, daño y recompensas.
- Vida inicial 150, oro inicial 100, pérdida de 10 de vida cada tres intentos fallidos. Varias conjuraciones cuando la resistencia de una criatura lo exige.
- Tienda original: poción de 200 oro, revelación de 350 oro, dos compras de cada una antes de la sala 15; gema única desde la sala 4, retroceso de dos niveles por cada 100 oro y recepción del doble de oro gastado.
- Códigos, reinicio confirmado, trofeos, atribución a Pascal y explicaciones sobre regex.
- Siete criaturas nuevas con reposo, impacto y derrota; composición adaptable a móvil y escritorio.
- Probar sin atacar, casos positivos y negativos visibles, resaltado de coincidencias, pistas gratuitas, referencia con búsqueda y explicación de errores.
- Exportación e importación de partidas; guardado de resistencia del enemigo, fallos y victoria. Migración del antiguo guardado si se encuentra **en el mismo origen del navegador**. Las partidas de un HTML abierto como archivo o de otro dominio no se transfieren automáticamente.
- Texto ampliable, contraste adicional, movimiento reducido, controles de teclado, diálogo nativo y estados anunciados a lectores de pantalla.
- Manifest y service worker: después de una primera carga correcta, permite volver a jugar sin conexión. En sistemas compatibles puede instalarse desde el navegador. Una actualización entra cuando se cierran las pestañas de la versión anterior; no interrumpe una partida abierta.

## Errores corregidos

- La solución antigua de IPv4 admitía 256–999. La nueva exige octetos 0–255 y no acepta ceros iniciales.
- La contraseña ahora exige una letra y un número, como prometía el enunciado.
- Se comprueban todas las muestras visibles y ejemplos de rechazo. Se aceptan expresiones equivalentes a la solución, no solo su escritura exacta.
- El modo «texto completo» agrupa la expresión sin crear capturas adicionales y exige inicio y fin absolutos; el motor puede retroceder y escoger la alternativa que cubre todo el texto. El modo «búsqueda» exige los fragmentos concretos solicitados.
- Las reglas de campos ya no permiten atravesar separadores; «dos letras» no acepta dígitos; «sin vocales» describe consonantes inglesas de manera explícita.
- Los ejercicios de HTML, fechas y correo describen su alcance didáctico y no prometen analizar HTML o validar calendarios/correos generales.
- Se corrigen las explicaciones de `\w`, `!`, retroreferencias y eliminación de palabras con sed.
- Un lanzamiento no puede recibir oro dos veces; el avance es único y explícito. Una victoria no vuelve a abrir al jefe con vida completa al recargar.
- Guardados dañados y almacenamiento no disponible no bloquean el inicio. El alumno recibe un aviso si necesita exportar su partida.
- La evaluación ocurre en un worker descartable, con límite temporal, para que una expresión problemática no congele la interfaz.
- Se elimina el script opaco externo del HTML suministrado y la dependencia de Tailwind y fuentes por CDN. La aplicación sirve todo localmente.

Los casos finitos comprueban el objetivo del ejercicio, no prueban matemáticamente que un patrón funcione sobre cualquier texto posible. La solución propuesta permite generalizar; memorizar todas las muestras con alternativas también puede superar un reto.

## Estructura

- `src/levels.js`: datos revisados de los 40 desafíos, casos y soluciones.
- `src/engine.js`: evaluación, combate, tienda y persistencia.
- `src/regex-worker.js`: evaluación aislada con tiempo máximo aplicado por la interfaz.
- `src/app.js`, `src/style.css`, `index.html`: interfaz y animaciones.
- `src/reference.js`: guía revisada.
- `public/`: imágenes locales, iconos y manifest.
- `scripts/build.mjs`: compilación reproducible sin dependencias y caché versionada.
- `tests/game.test.mjs`: pruebas de los retos y reglas del juego.
- `.github/workflows/pages.yml`: validación y publicación.

Las siete ilustraciones de criaturas se generaron con IA para esta edición. Los nombres y textos de la aventura proceden del original de Pascal. No se añade una licencia abierta sin decisión del autor.

## Verificación de esta entrega

- `npm test`: 15/15 pruebas PASS, incluidas las 40 soluciones, una aventura completa, reglas de la tienda y recuperación de partidas exportadas.
- `npm run check`: sintaxis, imágenes locales y unicidad de IDs PASS.
- `npm run build`: PASS; rutas relativas para Pages.
- Navegador real: las 40 soluciones superan todos los casos en la interfaz; probados ataque, prueba gratuita, error de sintaxis sin daño, resistencia parcial tras recarga, daño tras tres fallos, reinicio y victoria persistente.
- Revisión visual: escritorio y anchuras de 320/390 px, incluido texto máximo; sin desbordamiento horizontal ni imágenes rotas en esas vistas.
- Importación de JSON confirmada en la interfaz; comprobados los valores restaurados y las compras de poción, revelación y gema. La serialización y validación también están cubiertas por pruebas.
- La descarga JSON no ha podido confirmarse de extremo a extremo en el navegador remoto. La funcionalidad sin conexión requiere comprobarse en el despliegue HTTPS.

La comprobación visual opcional es `node scripts/browser-smoke.mjs`; requiere Playwright y su navegador Chromium instalados aparte. Las pruebas de este entorno se hicieron en un navegador real conectado, porque la descarga local de Chromium no estuvo disponible.

Las comprobaciones descritas no garantizan ausencia de todos los errores en cualquier navegador o dispositivo.
