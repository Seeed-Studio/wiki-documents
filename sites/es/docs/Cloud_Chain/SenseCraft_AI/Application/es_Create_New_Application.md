---
description: Cómo crear una nueva aplicación en SenseCraft AI.
title: Creación de una nueva aplicación
keywords:
  - crear aplicación
  - sensecraft ai
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /sensecraft-ai/application/create-new-application
sidebar_position: 1
last_update:
  date: 03/30/2026
  author: Rida
createdAt: '2026-03-30'
updatedAt: '2026-03-30'
url: https://wiki.seeedstudio.com/es/sensecraft-ai/application/create-new-application/
---
# Creación de una nueva aplicación en SenseCraft AI

## Creación de la aplicación

Ve a la página `My Applications` y haz clic en `Create App > Upload`.

<div style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/app_creation/creating-application.png" alt="Create application" style={{width: '100%'}} />
</div>

Para proteger tu trabajo, una vez que entres en la página de edición, tus cambios se **guardarán automáticamente**, y la barra de navegación mostrará el estado de guardado en tiempo real.

## Creación de la aplicación

El proceso de creación de la aplicación se divide en cuatro pasos claros, entre los que puedes cambiar en cualquier momento usando la barra de navegación superior.

### Paso 1: Información de la aplicación

Esta es la primera forma en que otros conocerán tu aplicación. Piénsalo con cuidado para que tu app resulte más atractiva.

#### Nombre y descripción de la aplicación

Dale a tu aplicación un nombre claro para que otros puedan entender lo que hace de un vistazo, y resume el escenario principal, las tecnologías, los dispositivos, etc. con un lenguaje conciso.

El nombre de la aplicación está limitado a **60 caracteres**, y la descripción está limitada a **300 caracteres**.

#### Escena

Elige la etiqueta de categoría más adecuada para tu aplicación. Esto es importante para el descubrimiento y la promoción.

Escenas disponibles: `Maker/DIY`, `Smart Home`, `Industrial`, `Agriculture`, `Security`, `Education`, `Healthcare`, `Retail`, `Other`.

#### Licencia

Configura aquí tu licencia, incluyendo si otros pueden copiar y modificar tu trabajo, y si se permite el uso comercial.

- **Permitir que otros dupliquen y modifiquen tu app**: Otros pueden duplicar tu aplicación en un nuevo proyecto editable propio, incluyendo todas las imágenes, documentación, modelos, código y configuraciones. Si se desactiva, otros aún pueden ver y desplegar tu app, pero no pueden crear su propia copia. Solo habilítalo si tienes los derechos para redistribuir todos los recursos del proyecto.
- **Permitir que tu trabajo se use con fines comerciales**: Otros pueden usar tu aplicación —y cualquier trabajo derivado que creen a partir de ella— en productos comerciales, servicios de pago u otros contextos que generen ingresos, sin deberte regalías ni permisos adicionales.

:::caution
Si cambias la licencia más adelante, las acciones que ya se hayan realizado antes del cambio (como duplicados) y sus resultados no se verán afectados.
:::

#### Imágenes

Las imágenes de presentación influyen en gran medida en lo atractiva que se ve tu aplicación. La primera imagen se usa como portada de forma predeterminada. Puedes subir hasta 16 imágenes; cada archivo debe ser de 2 MB o menos. Se recomienda una relación de aspecto **4:3**.

### Paso 2: Documentación

Esta es el área central de tu aplicación. Escribe una **introducción de la aplicación** y un flujo de **despliegue** detallados. Usa el botón en la esquina superior derecha para mostrar u ocultar la vista previa en vivo en cualquier momento, de modo que puedas revisar el flujo de despliegue y probar el despliegue desde la perspectiva de otro usuario.

#### Editar con Markdown

El editor de texto usa Markdown. Escribe `/` mientras editas para abrir un menú de atajos para insertar encabezados o bloques de herramientas (disponible en una actualización futura).

#### Introducción de la aplicación

Aquí puedes describir el contexto, los principios y el diseño de tu proyecto en texto libre. En esta sección no puedes añadir Tool Blocks que llamen a capacidades de SenseCraft.

#### Despliegue de la aplicación

Describe tu proceso de despliegue paso a paso para que otros puedan reproducir tu aplicación, incluyendo los requisitos previos de cada paso. Haz clic en el control `+` para añadir pasos de despliegue. Mantén un orden lógico y unas instrucciones detalladas. Activa la vista previa en vivo para comprobar si otra persona podría seguir tus pasos con éxito.

#### Uso de Tool Blocks

En el flujo de despliegue puedes insertar con un solo clic las funciones integradas de SenseCraft AI. Simplifican tanto tu experiencia de autoría como el despliegue para el usuario final.

Tool Blocks disponibles:

- **[AI Vision](/sensecraft-ai/application/tool-blocks#visión-por-ia)** — Despliega modelos de visión para reconocimiento, detección y clasificación de objetos en hardware compatible.
- **[AI Audio](/sensecraft-ai/application/tool-blocks#audio-por-ia)** — Despliega modelos de reconocimiento de voz en hardware compatible.
- **[AI Vibration](/sensecraft-ai/application/tool-blocks#vibración-por-ia)** — Detecta anomalías de vibración aprendiendo los patrones de vibración normales y marcando las desviaciones.
- **[Node-RED](/sensecraft-ai/application/tool-blocks#node-red)** — Crea y despliega flujos lógicos visuales para reCamera.
- **[Aily Blockly](/sensecraft-ai/application/tool-blocks#aily-blockly)** — Graba en los dispositivos perimetrales los programas creados en el entorno visual Aily Blockly.
- **[Deploy container app](/sensecraft-ai/application/tool-blocks#desplegar-aplicación-de-contenedor)** — Despliega aplicaciones contenedorizadas en hardware compatible.
- **[Flash firmware](/sensecraft-ai/application/tool-blocks#grabar-firmware)** — Graba imágenes de firmware en los dispositivos con un solo clic.
- **Debug tools** *(próximamente)* — Inspecciona y soluciona problemas de comportamiento del dispositivo durante el despliegue.

Consulta [Tool Blocks](/sensecraft-ai/application/tool-blocks) para ver los detalles completos de configuración de cada bloque.

### Paso 3: Lista de materiales (BOM)

Enumera todo lo necesario para reproducir tu aplicación.

#### De Seeed Studio

Busca y añade directamente hardware oficial de Seeed.

#### Otros materiales

Para las piezas que no son de Seeed (elementos de fijación, cables especiales, piezas impresas en 3D, etc.), proporciona nombre, breve descripción y cantidad. Los enlaces de compra son de ayuda.

#### Software y plataformas (próximamente)

Enumera el software o las plataformas necesarias —por ejemplo Arduino IDE, Home Assistant o Edge Impulse.

### Paso 4: Vista previa y publicación

Revisa la aplicación completa como lo haría un usuario final. Antes de **Publish**, confirma que los campos obligatorios estén completos y acepta la [Declaration for Publishing](https://sensecraft.seeed.cc/legal/en/declaration), donde debes confirmar que tienes derecho a distribuir el código y los recursos, y que no se incluye nada confidencial ni ilegal.

Después de publicar, el borrador de la aplicación se enviará a revisión. No podrás editar ese borrador hasta que la revisión se complete. Si no estás listo para publicar, sal del editor: el progreso seguirá guardándose automáticamente. Obtén más información sobre el proceso de publicación en la siguiente sección.

## Publicación de la aplicación

:::caution
Si tu aplicación usa modelos que aún no son públicos (por ejemplo, un modelo que entrenaste/subiste tú mismo), al publicar la app esos modelos también pasarán a estar disponibles públicamente. Te lo recordaremos antes de que ocurra.
:::

:::caution
Si tu aplicación depende del modelo de otra persona y ese modelo se elimina más adelante, se te notificará. Tu aplicación puede seguir publicada, pero el modelo ya no estará disponible durante los despliegues.
:::

### Revisión de la aplicación

:::tip
Después de enviar la aplicación a revisión, puedes retirar la solicitud en cualquier momento si necesitas seguir editando.
:::

Los administradores revisan las siguientes áreas:

1. **Contenido y seguridad**

   - **Derechos de autor y licencias de código abierto:** Debes ser propietario o tener derechos sobre todo el código, modelos, imágenes y recursos, o cumplir estrictamente con las licencias de origen (MIT, Apache, etc.).

   - **Privacidad y seguridad de los datos:** Especialmente para el uso de cámara o micrófono, no debe haber exfiltración oculta, cargas no autorizadas ni puertas traseras.

   - **Ley y normas de la comunidad:** Nada de secretos comerciales, material ilegal, malware ni contenido violento, sexual u odioso.

2. **Calidad del modelo y adecuación al hardware**

   - **Usabilidad del modelo:** Los modelos personalizados deben cargarse y analizarse correctamente en la plataforma.

   - **Precisión:** El rendimiento en el mundo real debe coincidir con lo que describes; no se permiten afirmaciones exageradas.

   - **Correspondencia con el hardware:** El tamaño del modelo y la lógica deben ajustarse a las placas que afirmas soportar.

3. **Documentación y reproducibilidad**

   - **Aspectos básicos claros:** El nombre, el extracto, las etiquetas y la imagen de portada son precisos y no inducen a error.

   - **BOM precisa:** El hardware listado coincide con lo que realmente usan los pasos de despliegue.

   - **Despliegue reproducible:** Los pasos siguen un orden lógico y los detalles concretos como el cableado de pines, valores de umbral y ajustes de MQTT están claramente especificados.

4. **Normas de la comunidad**

   - **Sin spam:** No se permiten duplicados sin sentido ni anuncios sin valor técnico.

:::caution
Para mantener la comunidad de SenseCraft AI segura y confiable, todas las decisiones de revisión se toman en última instancia a discreción de la plataforma. Las aplicaciones que infrinjan leyes, políticas de la plataforma o estándares de seguridad pueden ser rechazadas o eliminadas en cualquier momento.
:::

## Gestión de la app

Cada aplicación tiene dos estados que pueden divergir con el tiempo:

- **Borrador**: la copia de trabajo que editas. Siempre privada, solo visible para ti.
- **Versión publicada**: la instantánea visible actualmente en la Application Store. Solo se actualiza cuando un nuevo borrador supera la revisión.

Puedes gestionar una aplicación desde dos lugares, y las acciones disponibles dependen de sobre qué copia estés actuando.

### Desde la Application Store

Cuando abres **tu propia aplicación publicada** desde la tienda, las acciones se aplican a la **versión publicada**.

- **Duplicate:** Crea un nuevo proyecto independiente a partir de la versión publicada. Útil para ramificar desde una versión estable conocida.

- **Edit:** Entra en el editor para el borrador de esta app (igual que abrirla desde **My Applications**).

- **Unpublish:** Quita la app de la tienda y cambia su estado de nuevo a privado. El borrador no se ve afectado.

### Desde My Applications

Las acciones aquí operan sobre tu **borrador**.

- **Edit:** Abre el borrador en el editor. Los cambios no afectan a la versión publicada hasta que vuelvas a publicar.

- **Duplicate:** Crea un nuevo proyecto independiente a partir del borrador actual.

- **Publish** / **Publish update:** Envía el borrador a revisión. El botón se etiqueta como **Publish** la primera vez y como **Publish update** después. Tras la aprobación, la nueva versión sustituye al listado público existente en la Application Store.

- **Unpublish:** Retira una app pública de la tienda y devuélvela al estado privado.

:::tip
Si tu borrador ha avanzado más allá de la versión publicada, al anular la publicación te quedarás sin un acceso sencillo a esa instantánea pública anterior. Si crees que podrías querer seguir construyendo a partir de ella, **Duplica** la versión publicada (desde la Application Store) antes de anular la publicación.
:::

- **Delete:** Elimina la aplicación de forma permanente.

:::caution
Al eliminar una aplicación que está publicada actualmente, primero se anula su publicación de la tienda y luego se elimina. Esta acción no se puede deshacer.
:::
