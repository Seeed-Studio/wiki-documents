---
description: Introduce el uso de RSS, una función bajo la plataforma SenseCraft HMI.
title: Función RSS
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/sensecraft_hmi_rss
sidebar_position: 6
last_update:
  date: 07/21/2025
  author: Citric
---

# Usando RSS en SenseCraft HMI

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/80.jpg" style={{width:800, height:'auto'}}/></div>

## Introducción

La función RSS en [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) te permite transformar tus dispositivos con pantalla en pantallas de información en tiempo real. Al conectarte a feeds RSS de medios de noticias, blogs, servicios meteorológicos y más, puedes crear pantallas dinámicas que se actualizan automáticamente con el contenido más reciente. Esta función es perfecta para crear tickers de noticias, tableros de información o paneles personales que te mantienen informado sin intervención manual.

Este tutorial te guiará para entender los feeds RSS y usar la función RSS en SenseCraft HMI para mostrar contenido en tu dispositivo.

Este artículo usará el [reTerminal E1002](https://wiki.seeedstudio.com/es/getting_started_with_reterminal_e1002/) como ejemplo para explicar cómo usar esta función en la plataforma SenseCraft HMI.

## Entendiendo RSS

### ¿Qué es RSS?

RSS (Really Simple Syndication) es un formato de feed web estandarizado usado para publicar contenido actualizado frecuentemente como:

- Artículos de noticias

- Publicaciones de blog

- Podcasts

- Actualizaciones de video

- Pronósticos del tiempo

- Datos del mercado de valores

Los feeds RSS permiten a los usuarios mantenerse actualizados sin tener que visitar cada sitio web individualmente. En su lugar, el nuevo contenido se entrega automáticamente a tu lector RSS o, en este caso, a tu dispositivo habilitado con SenseCraft HMI.

### Cómo Funciona RSS

1. **Los editores de contenido** (sitios web, blogs, medios de noticias) crean feeds RSS que contienen su contenido más reciente en un formato XML estandarizado

2. **Los lectores de feeds** (como la función RSS en SenseCraft HMI) verifican regularmente estos feeds en busca de actualizaciones

3. Cuando se publica nuevo contenido, el lector de feeds **recupera y muestra** las actualizaciones

### Beneficios de Usar RSS

- **Actualizaciones en tiempo real**: Obtén la información más reciente sin actualización manual

- **Agregación de contenido**: Combina múltiples fuentes en una sola pantalla

- **Información filtrada**: Solo recibe el contenido que te interesa

- **Eficiente en ancho de banda**: Los feeds RSS contienen solo contenido esencial, no páginas web completas

- **Sin publicidad**: RSS típicamente entrega contenido limpio sin anuncios

## Comenzando con RSS en SenseCraft HMI

### Accediendo a la Función RSS

Paso 1. Navega a la plataforma SenseCraft HMI a continuación.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />

Paso 2. Conecta tu dispositivo o selecciona un dispositivo ya emparejado para usar.

Paso 3. Haz clic en la pestaña "RSS" en la barra lateral izquierda

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/77.png" style={{width:1000, height:'auto'}}/></div>

### Entendiendo la Interfaz RSS

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/85.png" style={{width:1000, height:'auto'}}/></div>

La interfaz RSS consta de tres secciones principales:

1. **Panel de Configuración**: Ubicado en el lado derecho, donde puedes ingresar y validar URLs de feeds RSS

2. **Área de Visualización**: La sección principal donde se mostrará el contenido RSS después de la configuración

3. **Botones de Control**: Ubicados en la parte superior, incluyendo opciones de Vista Previa, Guardar y Desplegar

Al acceder por primera vez a la función RSS, verás un mensaje indicando "No RSS Feed Configured" con instrucciones para configurar ajustes en el panel derecho.

## Configurando Feeds RSS

### Agregando un Feed RSS

Paso 1. Localiza el panel "RSS Configuration" en el lado derecho de la pantalla

Paso 2. Encuentra el campo de entrada "RSS URL"

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/78.png" style={{width:1000, height:'auto'}}/></div>

Paso 3. Ingresa una URL de feed RSS válida en el campo (ej., https://news.google.com/rss)

Paso 4. Haz clic en el botón "Set" para validar y aplicar el feed RSS

Paso 5. Si la URL es válida, el sistema comenzará a obtener y mostrar contenido del feed

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/79.png" style={{width:1000, height:'auto'}}/></div>

### Configuraciones de Visualización y Personalización

Una vez que tu feed RSS esté configurado, puedes ajustar cómo se muestra el contenido:

Paso 1. Usa las mismas configuraciones de intervalo y modo de difuminado encontradas en la función Gallery:

- **Interval(min)**: Establece qué tan frecuentemente la pantalla se actualiza con nuevo contenido

- **Dither Mode**: Elige entre "Full Color" o "Black and White" basado en tu tipo de pantalla

Paso 2. Haz clic en "Save" para almacenar tu configuración

Paso 3. Haz clic en "Preview" para ver cómo se mostrará el contenido RSS en tu dispositivo

Paso 4. Haz clic en "Deploy" para enviar la configuración a tu dispositivo conectado

## Encontrando y Usando Feeds RSS

### Fuentes Populares de Feeds RSS

Aquí hay algunos feeds RSS populares y confiables que puedes usar con SenseCraft HMI:

**Noticias:**

- BBC News: https://feeds.bbci.co.uk/news/world/rss.xml

- Reuters: https://www.reutersagency.com/feed/

- CNN: https://rss.cnn.com/rss/edition.rss

- The New York Times: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml

**Tecnología:**

- Wired: https://www.wired.com/feed/rss

- TechCrunch: https://techcrunch.com/feed/

- Ars Technica: https://feeds.arstechnica.com/arstechnica/index

- Hackaday: https://hackaday.com/blog/feed/

**Clima:**

- National Hurricane Center: https://www.nhc.noaa.gov/index-at.xml

**Ciencia:**

- NASA Breaking News: https://www.nasa.gov/rss/dyn/breaking_news.rss

- Science Daily: https://www.sciencedaily.com/rss/all.xml

### Cómo Encontrar Feeds RSS para Sitios Web

Muchos sitios web ofrecen feeds RSS, pero no siempre son fáciles de encontrar. Aquí hay algunos métodos para localizar feeds RSS:

#### Método 1: Buscar Iconos RSS

Muchos sitios web muestran un icono RSS (usualmente naranja) o enlaces etiquetados como "RSS," "Feed," o "Subscribe" en su pie de página o barra lateral.

#### Método 2: Agregar "/feed" a URLs de Blog

Para muchos sitios basados en WordPress, agregar "/feed" al final de la URL a menudo funciona:

```
https://example.com/feed
```

#### Método 3: Usar Extensiones del Navegador

Las extensiones del navegador como "RSS Feed Reader" para Chrome o "Awesome RSS" para Firefox pueden detectar feeds disponibles en los sitios web que visitas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/81.png" style={{width:1000, height:'auto'}}/></div>

#### Método 4: Verificar el Código Fuente

1. Visita el sitio web

2. Haz clic derecho y selecciona "Ver código fuente de la página"

3. Busca (Ctrl+F) "rss" o "feed"

4. Busca enlaces con "application/rss+xml" en el atributo type

#### Método 5: Usar Buscadores de Feeds RSS

Servicios como:

- [Feed Finder](https://feedfinder.mackerron.com/)

- [RSS.app](https://rss.app/rss-feed)

Estos pueden ayudar a descubrir feeds RSS para sitios web que no los anuncian de manera prominente.

## Creando Feeds RSS Personalizados

Si no puedes encontrar un feed RSS para el contenido que quieres mostrar, puedes crear el tuyo propio usando varias herramientas:

### Servicios de Creación de Feeds RSS

1. **RSS.app**: https://rss.app/

- Crea feeds RSS desde sitios web, redes sociales u otras fuentes

- No requiere programación

- Opciones gratuitas y de pago disponibles

2. **Feedly**: https://feedly.com/

- Crea tableros de contenido que pueden exportarse como RSS

- Bueno para curación de contenido

3. **Zapier**: https://zapier.com/

- Crea flujos de trabajo automatizados que pueden generar feeds RSS desde varios disparadores

- Requiere una suscripción de pago para características avanzadas

### Agregadores de Feeds

También puedes combinar múltiples feeds RSS en un solo feed usando agregadores:

1. **FeedBlendr**: http://feedblendr.com/

- Combina múltiples feeds en uno

- Simple de usar

2. **RSSMix**: http://www.rssmix.com/

- Fusiona múltiples feeds RSS

- Servicio gratuito

## Consejos Avanzados para Mostrar RSS

### Optimizando el Contenido RSS para tu Pantalla

Para la mejor experiencia con feeds RSS en tu dispositivo SenseCraft HMI:

1. **Elige feeds con longitud de contenido apropiada**:

- Los feeds con títulos y descripciones cortos funcionan mejor para pantallas pequeñas

- Los feeds de artículos completos pueden ser demasiado pesados en texto para pantallas de tinta electrónica

2. **Considera la frecuencia de actualización**:

- Ajusta tu configuración de intervalo a la frecuencia de actualización del feed

- Los feeds de noticias pueden actualizarse cada hora, mientras que los feeds de blogs pueden actualizarse diariamente

3. **Prueba diferentes modos de difuminado**:

- El modo "Blanco y Negro" funciona mejor para feeds RSS con mucho texto en pantallas de tinta electrónica

- "Color Completo" es mejor para feeds con imágenes en pantallas LCD

4. **Ten en cuenta el contenido de imágenes**:

- Algunos feeds RSS incluyen imágenes que pueden no mostrarse bien en todos los dispositivos

- Los feeds con imágenes grandes pueden cargar más lentamente

## Solución de Problemas

### Problemas Comunes de RSS y Soluciones

1. **Error "Feed RSS Inválido"**:

- Verifica que la URL sea correcta e incluya el prefijo http:// o https://

- Verifica si el feed es accesible pegando la URL en un navegador

- Algunos feeds pueden requerir autenticación o tener restricciones de acceso

2. **El Feed Carga pero No Aparece Contenido**:

- El feed puede estar vacío o no estar publicando contenido actualmente

- El formato del feed podría no ser compatible (prueba un feed alternativo)

- Prueba un feed diferente y más activo

3. **El Contenido Aparece Distorsionado o Incorrectamente Formateado**:

- Prueba un modo de difuminado diferente

- El feed podría contener caracteres especiales o formato que no es compatible

- Considera usar un servicio de filtrado de feeds para limpiar el contenido

4. **El Feed Deja de Actualizarse**:

- El sitio web fuente puede haber cambiado la URL de su feed

- Puede haber problemas temporales del servidor

- Intenta eliminar y volver a agregar el feed

5. **Falla el Despliegue**:

- Asegúrate de que tu dispositivo esté correctamente conectado a SenseCraft HMI

- Verifica la conexión a internet de tu dispositivo

- Reinicia tu dispositivo e intenta desplegar nuevamente

## Conclusión

La función RSS en SenseCraft HMI proporciona una manera poderosa de convertir tus dispositivos con pantalla en pantallas de información dinámicas. Al conectarte a feeds RSS, puedes crear pantallas que se actualizan automáticamente para noticias, clima, actualizaciones técnicas o cualquier otro contenido disponible vía RSS.

Recuerda que la calidad de tu pantalla RSS depende en gran medida de los feeds que elijas. Experimenta con diferentes feeds, intervalos de actualización y configuraciones de pantalla para crear la pantalla de información perfecta para tus necesidades.

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
