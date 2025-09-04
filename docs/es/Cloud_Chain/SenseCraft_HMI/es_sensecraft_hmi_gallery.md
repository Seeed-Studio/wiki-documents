---
description: Introduce el uso de Gallery, una función bajo la plataforma SenseCraft HMI.
title: Función Gallery
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/sensecraft_hmi_gallery
sidebar_position: 3
last_update:
  date: 07/21/2025
  author: Citric
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Usando Gallery en SenseCraft HMI

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/66.jpg" style={{width:800, height:'auto'}}/></div>

## Introducción

La función Gallery en [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) te permite transformar tus dispositivos con pantalla en hermosos marcos de fotos digitales. Puedes subir imágenes locales o importarlas desde URLs, luego mostrarlas con intervalos de transición personalizables y efectos visuales. Esta función es perfecta para crear pantallas ambientales, pantallas de información o álbumes de fotos decorativos usando tus dispositivos de pantalla de Seeed Studio.

Este tutorial te guiará a través del uso de la función Gallery en SenseCraft HMI, cubriendo métodos de carga de imágenes, configuraciones de pantalla y consideraciones importantes para un rendimiento óptimo.

Este artículo usará el [reTerminal E1002](https://wiki.seeedstudio.com/es/getting_started_with_reterminal_e1002/) como ejemplo para explicar cómo usar esta función en la plataforma SenseCraft HMI.

## Primeros Pasos con Gallery

### Accediendo a la Función Gallery

Paso 1. Navega a la plataforma SenseCraft HMI a continuación.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />

Paso 2. Conecta tu dispositivo o selecciona un dispositivo ya emparejado para usar.

Paso 3. Haz clic en la pestaña "Gallery" en la barra lateral izquierda

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/67.png" style={{width:1000, height:'auto'}}/></div>

### Entendiendo la Interfaz de Gallery

La interfaz de Gallery consiste en varios elementos clave:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/68.png" style={{width:1000, height:'auto'}}/></div>

1. **Panel de Control**: Ubicado en la parte superior, esta área contiene configuraciones para tiempo de intervalo, modo de difuminado y botones de acción

2. **Área de Visualización de Imagen**: La sección principal donde se muestra tu imagen actual

3. **Barra de Herramientas de Imagen**: Contiene herramientas para ajustar, descargar o eliminar la imagen actual

4. **Tira de Miniaturas**: Ubicada en la parte inferior, muestra todas las imágenes subidas en tu galería

5. **Botones de Acción**: Botones de Guardar, Vista Previa y Desplegar para probar y aplicar tu galería al dispositivo

## Agregando Imágenes a Tu Gallery

SenseCraft HMI proporciona dos métodos para agregar imágenes a tu galería: subir archivos locales o importar desde URLs.

### Subir Imágenes Locales

Paso 1. Haz clic en el botón "Add Photos" en el panel de control

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/70.png" style={{width:1000, height:'auto'}}/></div>

Paso 2. En el diálogo que aparece, asegúrate de que la pestaña "Upload Files" esté seleccionada

Paso 3. Haz clic en "Select Photos" y elige las imágenes que quieres subir desde tu computadora

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/69.png" style={{width:600, height:'auto'}}/></div>

Paso 4. Requisitos y limitaciones importantes de las imágenes:

- Soporta formatos JPG, PNG y GIF

- Las fotos de más de 2MB serán comprimidas automáticamente

- Las relaciones de aspecto que no sean 5:3 serán ajustadas con relleno blanco

- Resolución objetivo: 800x480 píxeles (o la resolución nativa de tu dispositivo)

- Sin una tarjeta MicroSD, puedes subir un máximo de 3 fotos

- Con una tarjeta MicroSD, puedes subir hasta 20 fotos

Paso 5. Selecciona múltiples archivos usando Ctrl/Cmd + Clic si lo deseas

Paso 6. Haz clic en "Open" para subir las imágenes seleccionadas

### Importar Imágenes desde URL

Paso 1. Haz clic en el botón "Add Photos" en el panel de control

Paso 2. En el diálogo que aparece, selecciona la pestaña "Import from URL"

Paso 3. Ingresa la URL directa de la imagen en el campo proporcionado

Paso 4. Haz clic en "Import" para agregar la imagen a tu galería

:::tip
Al importar desde URLs, asegúrate de usar enlaces directos de imagen que terminen con extensiones de archivo como .jpg, .png o .gif. Los enlaces a páginas web que contienen imágenes pueden no funcionar.
:::

## Gestionando Tu Gallery

### Configurando el Intervalo de Visualización

La configuración de intervalo determina cuánto tiempo se muestra cada imagen antes de hacer la transición a la siguiente:

Paso 1. Localiza el campo "Interval(min):" en el panel de control

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/71.png" style={{width:600, height:'auto'}}/></div>

Paso 2. Ingresa tu tiempo de visualización deseado en minutos (ej., 1 para un minuto por imagen)

### Eligiendo el Modo de Difuminado

El modo de difuminado afecta cómo se procesan las imágenes para una visualización óptima en tu dispositivo específico:

Paso 1. Encuentra el menú desplegable "Dither Mode:" en el panel de control

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/72.png" style={{width:600, height:'auto'}}/></div>

Paso 2. Selecciona la opción apropiada para tu dispositivo:

- **Full Color**: Mejor para pantallas LCD a color, preserva toda la información de color

- **Black and White**: Convierte las imágenes a blanco y negro puro, ideal para pantallas e-paper monocromáticas

:::tip
Para pantallas e-paper/e-ink, selecciona el modo "Black and White" para una calidad de visualización óptima y velocidades de actualización más rápidas. Para pantallas LCD, "Full Color" proporcionará la mejor experiencia visual.
:::

### Usando la Barra de Herramientas de Imagen

Cada imagen en tu galería puede ser ajustada usando la barra de herramientas que aparece encima de la imagen:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/73.png" style={{width:700, height:'auto'}}/></div>

De izquierda a derecha, las herramientas son:

1. **Llenar Horizontalmente**: Ajusta la imagen para llenar la pantalla horizontalmente manteniendo la relación de aspecto

2. **Llenar Verticalmente**: Ajusta la imagen para llenar la pantalla verticalmente manteniendo la relación de aspecto

3. **Descargar**: Guarda la imagen procesada en tu computadora

4. **Eliminar**: Remueve la imagen de tu galería

:::tip
Usa la opción "Rellenar Horizontalmente" para imágenes horizontales y "Rellenar Verticalmente" para imágenes verticales para aprovechar al máximo el espacio de tu pantalla evitando la distorsión de la imagen.
:::

### Reordenar Imágenes

Puedes cambiar el orden de visualización de tus imágenes usando la tira de miniaturas:

Paso 1. Localiza la miniatura de la imagen que quieres mover en la tira en la parte inferior de la pantalla

Paso 2. Haz clic y arrastra la miniatura a una nueva posición en la secuencia

Paso 3. Suelta para establecer el nuevo orden

## Desplegando Tu Galería en Tu Dispositivo

Una vez que hayas agregado y configurado tus imágenes, puedes desplegar la galería en tu dispositivo conectado:

Paso 1. Haz clic en el botón "Guardar" para almacenar la configuración de tu galería

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/74.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Después de subir o diseñar una imagen, haz clic habitualmente en el botón guardar para asegurar que tu diseño de diseño no se pierda fácilmente.
:::

Paso 2. (Opcional) Haz clic en "Vista Previa" para ver cómo aparecerá tu galería en el dispositivo sin desplegarlo completamente

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/75.png" style={{width:1000, height:'auto'}}/></div>

Paso 3. Haz clic en "Desplegar" para enviar tu galería al dispositivo conectado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/76.png" style={{width:1000, height:'auto'}}/></div>

Paso 4. Espera el mensaje de confirmación del despliegue

:::tip
Después de hacer clic en el botón desplegar, el dispositivo puede no actualizar el álbum inmediatamente. El dispositivo podría estar en modo de suspensión. Descargará las últimas imágenes del álbum cuando se despierte la próxima vez. Si quieres actualizar las fotos inmediatamente, puedes hacer clic en el botón verde arriba del dispositivo, y el dispositivo se despertará instantáneamente y descargará las actualizaciones del panel.
:::

Después del despliegue, tu dispositivo comenzará a mostrar las imágenes según tu configuración de intervalo.

## Consideraciones de Almacenamiento

### Requisitos de Tarjeta MicroSD

Para almacenar más de 3 imágenes en tu dispositivo, necesitarás usar una tarjeta MicroSD:

1. **Formato**: La tarjeta MicroSD debe estar formateada como FAT32

2. **Tamaño**: Se recomienda 8GB o más (hasta 32GB soportado)

3. **Velocidad**: Se recomienda Clase 10 o superior para mejor rendimiento

:::warning
Usar sistemas de archivos diferentes a FAT32 puede resultar en que el dispositivo no reconozca la tarjeta MicroSD o falle al guardar imágenes correctamente.
:::

### Cómo Formatear una Tarjeta MicroSD como FAT32

<Tabs>
<TabItem value="On Windows" label="En Windows" default>

Paso 1. Inserta tu tarjeta MicroSD en tu computadora

Paso 2. Abre el Explorador de Archivos y haz clic derecho en la tarjeta MicroSD

Paso 3. Selecciona "Formatear..."

Paso 4. Elige "FAT32" del menú desplegable Sistema de Archivos

Paso 5. Haz clic en "Iniciar" para comenzar el formateo

</TabItem>
<TabItem value="On macOS" label="En macOS">

Paso 1. Inserta tu tarjeta MicroSD en tu computadora

Paso 2. Abre Utilidad de Discos (Aplicaciones > Utilidades > Utilidad de Discos)

Paso 3. Selecciona tu tarjeta MicroSD de la barra lateral

Paso 4. Haz clic en "Borrar"

Paso 5. Elige "MS-DOS (FAT)" como el formato

Paso 6. Haz clic en "Borrar" para formatear la tarjeta

</TabItem>
</Tabs>

### Insertando la Tarjeta MicroSD

Paso 1. Apaga tu dispositivo

Paso 2. Localiza la ranura de la tarjeta MicroSD en tu dispositivo

Paso 3. Inserta la tarjeta MicroSD correctamente formateada

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/133.jpg" style={{width:700, height:'auto'}}/></div>

Paso 4. Enciende tu dispositivo

Paso 5. Reconéctate a SenseCraft HMI para verificar que el almacenamiento expandido sea reconocido

## Optimizando Imágenes para Tu Pantalla

Para obtener los mejores resultados visuales en la pantalla de tu dispositivo:

1. **Coincidir la resolución**: Prepara imágenes que coincidan con la resolución nativa de tu dispositivo (típicamente 800x480 píxeles)

2. **Considerar la relación de aspecto**: Usa imágenes con una relación de aspecto 5:3 para evitar relleno blanco

3. **Optimizar para el tipo de pantalla**:

- Para LCD a color: Las imágenes a color estándar funcionan bien
- Para e-paper/e-ink: Imágenes de mayor contraste con menos gradientes de color
- Para e-paper de 2 colores: Imágenes en blanco y negro o de alto contraste

4. **Tamaño de archivo**: Mantén las imágenes bajo 2MB para evitar compresión automática

5. **Brillo/contraste**: Ajusta según las características específicas de tu pantalla

## Solución de Problemas

### Problemas Comunes y Soluciones

1. **Las imágenes no se suben**:

- Verifica que tu imagen esté en un formato soportado (JPG, PNG, GIF)

- Asegúrate de que el tamaño del archivo no sea demasiado grande (idealmente bajo 2MB)

- Prueba un navegador diferente o limpia la caché de tu navegador

2. **No se pueden subir más de 3 imágenes**:

- Verifica que tengas una tarjeta MicroSD correctamente formateada insertada en tu dispositivo

- Verifica que la tarjeta MicroSD esté formateada como FAT32

- Asegúrate de que el dispositivo esté detectando correctamente la tarjeta MicroSD

3. **Las imágenes se muestran incorrectamente**:

- Ajusta el brillo/contraste usando la barra de herramientas de imagen

- Prepara imágenes que coincidan con la resolución de tu dispositivo

4. **El despliegue falla**:

- Asegúrate de que tu dispositivo esté correctamente conectado a SenseCraft HMI

- Verifica que tu dispositivo tenga suficiente espacio de almacenamiento

- Reinicia tu dispositivo e intenta desplegar nuevamente

## Conclusión

La función Galería en SenseCraft HMI proporciona una manera fácil de transformar tus dispositivos con pantalla en marcos de fotos digitales. Siguiendo esta guía, puedes subir, gestionar y mostrar imágenes en tu dispositivo con configuraciones personalizadas para una visualización óptima.

Recuerda que para almacenar más de 3 imágenes, necesitarás una tarjeta MicroSD correctamente formateada insertada en tu dispositivo. Con la configuración correcta, puedes crear hermosas presentaciones de diapositivas y pantallas que muestren tus imágenes favoritas en tus dispositivos de pantalla de Seeed Studio.

## Recursos

- [Plataforma SenseCraft HMI](https://sensecraft.seeed.cc/hmi)
- [Dispositivos Compatibles - reTerminal E10xx](https://wiki.seeedstudio.com/es/reterminal_e10xx_main_page/)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>
