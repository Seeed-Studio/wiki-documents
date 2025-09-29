---
description: Introduce el uso de Web, una función bajo la plataforma SenseCraft HMI.
title: Función Web
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/sensecraft_hmi_web
sidebar_position: 7
last_update:
  date: 07/21/2025
  author: Citric
---

# Usando la Función Web en SenseCraft HMI

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/88.jpg" style={{width:800, height:'auto'}}/></div>

## Introducción

La función Web en [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) te permite mostrar contenido web directamente en tus dispositivos con pantalla. Esta poderosa función transforma tu dispositivo en una pantalla web dedicada, capaz de mostrar paneles de control, sistemas de monitoreo, documentación, o cualquier contenido web que necesites. A diferencia de los navegadores tradicionales, la función Web de SenseCraft HMI está optimizada para pantallas embebidas y dispositivos IoT, haciéndola perfecta para crear quioscos de información, monitores de estado, o interfaces web dedicadas.

Este tutorial te guiará a través del uso de la función Web en SenseCraft HMI, cubriendo la configuración, vista previa y despliegue de contenido web a tu dispositivo.

Este artículo usará el [reTerminal E1002](https://wiki.seeedstudio.com/es/getting_started_with_reterminal_e1002/) como ejemplo para explicar cómo usar esta función en la plataforma SenseCraft HMI.

## Primeros Pasos con la Función Web

### Accediendo a la Función Web

Paso 1. Navega a la plataforma SenseCraft HMI a continuación.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />

Paso 2. Conecta tu dispositivo o selecciona un dispositivo ya emparejado para usar.

Paso 3. Haz clic en la pestaña "Web" en la barra lateral izquierda

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/83.png" style={{width:1000, height:'auto'}}/></div>

### Entendiendo la Interfaz Web

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/82.png" style={{width:1000, height:'auto'}}/></div>

La interfaz Web consiste en tres secciones principales:

1. **Panel de Configuración de URL**: Ubicado en el lado derecho, donde puedes ingresar direcciones web

2. **Área de Visualización**: La sección principal donde se mostrará el contenido web después de la vista previa o despliegue

3. **Botones de Control**: Ubicados en la parte superior, incluyendo opciones de Vista Previa, Guardar y Desplegar

Al acceder por primera vez a la función Web, el área de visualización estará vacía hasta que configures y veas una página web en vista previa.

## Configurando Contenido Web

### Agregando una Página Web

Paso 1. Localiza el panel de Configuración Web en el lado derecho de la pantalla

Paso 2. Encuentra el campo de entrada "URL"

Paso 3. Ingresa una dirección web válida en el campo (ej., https://weather.gov/)

:::tip
Asegúrate de incluir la URL completa incluyendo el prefijo https:// o http://.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/84.png" style={{width:1000, height:'auto'}}/></div>

Paso 4. Haz clic en el botón "Set" para validar la URL

### Vista Previa del Contenido Web

A diferencia de otras funciones en SenseCraft HMI, la función Web requiere un paso explícito de vista previa para mostrar contenido:

Paso 1. Después de ingresar y configurar una URL, haz clic en el botón "Preview" en la barra de herramientas superior

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/86.png" style={{width:1000, height:'auto'}}/></div>

Paso 2. Espera a que la página web se cargue en el área de visualización

Paso 3. Verifica si el contenido web se muestra correctamente y es apropiado para el tamaño de pantalla de tu dispositivo

:::note
El paso de vista previa es crucial ya que te permite verificar que el contenido web se mostrará correctamente en tu dispositivo antes del despliegue.
:::

### Guardando y Desplegando Contenido Web

Una vez que hayas visto en vista previa y confirmado que el contenido web se ve bien:

Paso 1. Haz clic en el botón "Save" para almacenar tu configuración web

Paso 2. Haz clic en "Deploy" para enviar la configuración a tu dispositivo conectado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/87.png" style={{width:1000, height:'auto'}}/></div>

Paso 3. Espera el mensaje de confirmación del despliegue

Después del despliegue exitoso, tu dispositivo mostrará la página web configurada.

## Optimizando Contenido Web para Dispositivos

No todos los sitios web están diseñados para pantallas pequeñas o dispositivos embebidos. Aquí tienes consejos para seleccionar y optimizar contenido web:

### Seleccionando Contenido Web Amigable

1. **Elige sitios web responsivos para móviles**:

- Los sitios diseñados para dispositivos móviles típicamente se mostrarán mejor en pantallas más pequeñas

- Busca sitios con diseños adaptativos que funcionen bien en la resolución de tu dispositivo

2. **Considera páginas simples y ligeras**:

- Los sitios web complejos con JavaScript pesado pueden cargar lentamente o consumir más recursos

- Las páginas estáticas típicamente funcionan mejor que las aplicaciones web dinámicas

3. **Evita sitios que requieren autenticación**:

- Las sesiones de inicio de sesión pueden expirar, requiriendo intervención manual

- Algunos métodos de autenticación pueden no funcionar bien en dispositivos embebidos

### Tipos de Contenido Web Recomendados

Aquí hay algunos tipos de contenido web que funcionan particularmente bien con la función Web de SenseCraft HMI:

1. **Paneles de control del clima**:

- [Weather.gov](https://weather.gov)

- [Windy.com](https://www.windy.com/)

- [AccuWeather](https://www.accuweather.com/)

2. **Paneles de control de monitoreo**:

- Paneles de control de Grafana

- Paneles de control de automatización del hogar

- Páginas de estado del sistema

3. **Pantallas de información**:

- Horarios de transporte

- Información de vuelos

- Disponibilidad de salas de reuniones

4. **Documentación o referencia**:

- Wikis locales

- Guías de procedimientos

- Información de referencia rápida

## Creando Contenido Web Personalizado

Para la mejor experiencia, considera crear páginas web personalizadas específicamente diseñadas para la pantalla de tu dispositivo:

### Páginas HTML Simples

Puedes crear páginas HTML básicas optimizadas para la resolución de tu dispositivo. Aquí hay un ejemplo simple:

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Device Dashboard</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            font-size: 18px;
        }
        .container {
            padding: 15px;
        }
        .title {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 15px;
        }
        .info-box {
            border: 1px solid #ccc;
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="title">Device Status</div>
        <div class="info-box">Temperature: 22.5°C</div>
        <div class="info-box">Humidity: 45%</div>
        <div class="info-box">Battery: 87%</div>
    </div>
</body>
</html>
```

### Opciones de Alojamiento para Páginas Personalizadas

Para mostrar contenido web personalizado, necesitarás alojarlo en algún lugar accesible para tu dispositivo:

1. **Servidor de red local**:

- Configura un servidor web simple en tu red local

- Usa herramientas como XAMPP, NGINX, o una Raspberry Pi ejecutando un servidor web

2. **Servicios gratuitos de alojamiento estático**:

- [GitHub Pages](https://pages.github.com/)

- [Netlify](https://www.netlify.com/)

- [Vercel](https://vercel.com/)

3. **Servicios en la nube con niveles gratuitos**:

- [Firebase Hosting](https://firebase.google.com/products/hosting)

- [AWS S3 Static Website Hosting](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)

## Casos de Uso Especiales

### Mostrar Recursos de Red Local

La función Web puede usarse para mostrar recursos en tu red local:

1. **Paneles de automatización del hogar**:

- Home Assistant: `http://homeassistant.local:8123`

- OpenHAB: `http://openhab.local:8080`

2. **Herramientas de monitoreo de red**:

- Paneles de administración del router

- Paneles de monitoreo de red

3. **Servidores multimedia locales**:

- Página de estado de Plex

- Interfaces web de NAS

:::warning
Por razones de seguridad, ten cuidado al mostrar interfaces administrativas en dispositivos públicamente visibles.
:::

### Rotación Automática de Páginas

Si quieres mostrar múltiples páginas web en rotación:

1. Crea una página HTML simple con JavaScript para alternar entre URLs:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Page Rotator</title>
    <style>
        body, html, iframe {
            margin: 0;
            padding: 0;
            height: 100%;
            width: 100%;
            border: none;
            overflow: hidden;
        }
    </style>
    <script>
        // Array of URLs to rotate through
        const urls = [
            'https://weather.gov',
            'https://example.com/dashboard',
            'https://example.com/calendar'
        ];

        let currentIndex = 0;

        function rotatePages() {
            document.getElementById('display-frame').src = urls[currentIndex];
            currentIndex = (currentIndex + 1) % urls.length;
            setTimeout(rotatePages, 30000); // Change page every 30 seconds
        }

        window.onload = rotatePages;
    </script>
</head>
<body>
    <iframe id="display-frame" src="about:blank"></iframe>
</body>
</html>
```

2. Aloja esta página usando uno de los métodos mencionados anteriormente

3. Ingresa la URL de esta página rotadora en la función Web de SenseCraft HMI

## Solución de Problemas

### Problemas Comunes de Visualización Web y Soluciones

1. **La página web no carga**:

- Verifica que la URL sea correcta e incluya el prefijo http:// o https://. A veces, aunque hayas ingresado la URL correcta, aún no puedes previsualizar, puedes intentar agregar "/" al final de la URL, puede tener un efecto milagroso.

- Verifica si la página es accesible probándola en un navegador regular

- Asegúrate de que tu dispositivo tenga conectividad a internet

- Algunos sitios web pueden bloquear la incrustación o tener restricciones de seguridad

2. **El contenido se muestra incorrectamente**:

- El sitio web puede no estar optimizado para el tamaño de pantalla de tu dispositivo

- Prueba una versión específica para móviles del sitio si está disponible

- Considera crear una página personalizada específicamente para las dimensiones de tu pantalla

3. **Problemas de rendimiento**:

- Los sitios web complejos con animaciones o JavaScript pesado pueden ejecutarse lentamente

- Prueba páginas más simples o alternativas construidas a medida

- Algunos sitios web pueden usar más memoria de la que tu dispositivo puede manejar

4. **Falla el despliegue**:

- Asegúrate de que tu dispositivo esté correctamente conectado a SenseCraft HMI

- Verifica la conexión a internet de tu dispositivo

- Reinicia tu dispositivo e intenta desplegar nuevamente

5. **El contenido necesita actualización frecuente**:

- Algún contenido dinámico puede no actualizarse automáticamente

- Considera establecer un intervalo de actualización en una página personalizada, o

- Redesplegar periódicamente la configuración

## Mejores Prácticas

### Consideraciones de Seguridad

Al usar la función Web, ten en cuenta estas consideraciones de seguridad:

1. **Evita información sensible**:

- No muestres páginas que contengan información personal o confidencial en dispositivos públicamente visibles

- Ten cuidado con paneles de administración o interfaces de control

2. **Usa HTTPS cuando sea posible**:

- Prefiere URLs seguras (https://) sobre las no seguras (http://)

- Esto ayuda a proteger los datos transmitidos a tu dispositivo

3. **Considera el aislamiento de red**:

- Para pantallas que muestran recursos internos, considera usar una red separada

- Usa reglas de firewall para limitar a qué puede acceder tu dispositivo

### Consejos de Mantenimiento

Para mantener tus pantallas web funcionando sin problemas:

1. **Verificaciones periódicas**:

- Verifica regularmente que el contenido mostrado siga funcionando correctamente

- Los sitios web pueden cambiar sus diseños o URLs sin aviso

2. **Actualiza marcadores**:

- Mantén una lista de URLs útiles para tus pantallas

- Prueba alternativas en caso de que tus sitios preferidos cambien

3. **Crea respaldos**:

- Para pantallas críticas, crea y aloja páginas de respaldo que puedan desplegarse rápidamente

- Esto asegura continuidad si un recurso web principal se vuelve no disponible

## Conclusión

La función Web en SenseCraft HMI proporciona una forma flexible de mostrar contenido web en tus dispositivos con pantalla. Siguiendo esta guía, puedes configurar, previsualizar y desplegar páginas web para crear pantallas de información, paneles o pantallas de referencia adaptadas a tus necesidades.

Recuerda que no todo el contenido web es adecuado para pantallas pequeñas o dispositivos embebidos. Para la mejor experiencia, considera usar sitios web responsivos para móviles o crear páginas web personalizadas específicamente diseñadas para las dimensiones y capacidades de tu dispositivo.

## Recursos

- [Plataforma SenseCraft HMI](https://sensecraft.seeed.cc/hmi)
- [Dispositivos Compatibles - reTerminal E10xx](https://wiki.seeedstudio.com/es/reterminal_e10xx_main_page/)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

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
