---
description: Introduce el uso de Canvas, una función de la plataforma SenseCraft HMI.
title: Función Canvas
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/sensecraft_hmi_canvas
sidebar_position: 4
last_update:
  date: 07/21/2025
  author: Citric
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Usando Canvas en SenseCraft HMI

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/141.jpg" style={{width:800, height:'auto'}}/></div>

## Introducción

La función Canvas en [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) es la característica más poderosa y flexible de la plataforma, permitiéndote crear interfaces personalizadas, paneles de control y visualizaciones de datos. Con Canvas, puedes diseñar pantallas hermosas que combinan elementos estáticos con datos dinámicos de varias fuentes, incluyendo sensores de dispositivos, información meteorológica, datos bursátiles y más.

Esta guía completa te guiará a través del uso de la función Canvas para crear pantallas profesionales para tus dispositivos Seeed. Desde formas básicas y texto hasta widgets de datos en tiempo real y plantillas prediseñadas, aprenderás todo lo que necesitas para construir interfaces personalizadas que satisfagan tus necesidades específicas.

Este artículo utilizará el [reTerminal E1002](https://wiki.seeedstudio.com/es/getting_started_with_reterminal_e1002/) como ejemplo para explicar cómo usar esta función en la plataforma SenseCraft HMI.

## Primeros Pasos con Canvas

### Accediendo a la Función Canvas

Paso 1. Navega a la plataforma SenseCraft HMI a continuación.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />

Paso 2. Conecta tu dispositivo o selecciona un dispositivo ya emparejado para usar.

Paso 3. Haz clic en la pestaña "Canvas" en la barra lateral izquierda

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/89.png" style={{width:1000, height:'auto'}}/></div>

### Entendiendo la Interfaz de Canvas

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/90.png" style={{width:1000, height:'auto'}}/></div>

La interfaz de Canvas consiste en varias secciones clave:

1. **Barra Lateral de Componentes**: Panel izquierdo que contiene todos los elementos disponibles categorizados en Básico, Dispositivo, Datos y Plantillas

2. **Área de Canvas**: Espacio de trabajo central donde diseñas tu interfaz

3. **Barra de Herramientas**: Barra superior con herramientas de diseño, configuraciones y opciones de formato

4. **Panel de Propiedades**: Aparece cuando se seleccionan elementos, permitiendo personalizar la apariencia y comportamiento

5. **Botones de Acción**: Botones de Guardar, Vista Previa y Desplegar para probar y aplicar tu diseño

## Componentes Básicos

La sección Básico proporciona elementos fundamentales para crear el diseño de tu interfaz:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/91.png" style={{width:1000, height:'auto'}}/></div>

### Texto

El componente Texto te permite agregar etiquetas, títulos y otro contenido de texto a tu canvas.

Paso 1. Haz clic en el componente "Texto" en la sección Básico. El texto se coloca automáticamente en el centro del canvas

Paso 2. Arrastra el texto al área donde quieres colocarlo

Paso 3. Aparece una caja de texto predeterminada con la palabra "Texto"

Paso 4. Usa el panel de propiedades para personalizar:

- Tamaño de fuente (predeterminado es 30px)

- Estilo de texto (negrita, cursiva, subrayado)

- Alineación (izquierda, centro, derecha)

- Color

- Familia de fuente

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/92.png" style={{width:1000, height:'auto'}}/></div>

#### Haciendo el Texto Dinámico

También puedes configurar el texto para mostrar datos dinámicos:

Paso 1. Selecciona tu elemento de texto

Paso 2. Haz clic en el icono de enlace de datos dinámicos en la barra de herramientas

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/93.png" style={{width:1000, height:'auto'}}/></div>

Paso 3. En el panel de Configuración de Datos Dinámicos:

- Cambia de "Estático" a "Dinámico"

- Ingresa la ruta de la clave de datos (ej., "data.custom")

- Configura las opciones de formato

:::tip
Esta función es una característica Developer Premium y no se recomienda si no sabes qué es.
:::

### Imagen

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/94.png" style={{width:1000, height:'auto'}}/></div>

El componente Imagen te permite agregar imágenes a tu canvas.

Paso 1. Haz clic en el componente "Imagen"

Paso 2. En el panel de propiedades, haz clic en "Subir" para agregar tu imagen o ingresa una URL de imagen

Paso 3. Ajusta el tamaño y posición según sea necesario

### Formas

SenseCraft HMI Canvas ofrece varios componentes de formas:

- **Rectángulo**: Crea un rectángulo estándar o cuadrado

- **Rectángulo Redondeado**: Crea un rectángulo con esquinas redondeadas

- **Círculo**: Crea un círculo perfecto

- **Elipse**: Crea una forma ovalada

- **Triángulo**: Crea una forma de tres lados

- **Polígono**: Crea formas de múltiples lados

- **Línea**: Crea líneas rectas

- **Dibujo**: Habilita el dibujo a mano alzada

Para cada forma:

Paso 1. Haz clic en el componente de forma deseado

Paso 2. Haz clic y arrastra en el canvas para determinar la colocación final

Paso 3. Usa el panel de propiedades para personalizar:

- Color de relleno

- Color y ancho del borde

- Opacidad

- Radio de esquina (para rectángulos)

- Otras propiedades específicas de la forma

### Fecha

El componente Fecha muestra una fecha, hora o marca de tiempo que puede configurarse en varios formatos.

Paso 1. Haz clic en el componente "Fecha" en la sección Datos

Paso 2. El componente se colocará automáticamente en la esquina superior izquierda de tu canvas con un formato de fecha predeterminado (usualmente MM/DD/YYYY)

Paso 3. Haz clic en el icono del calendario en la barra de herramientas para abrir el panel de Configuración de Fecha

Paso 4. En el panel de Configuración de Fecha:

- Establece una fecha específica usando el selector de fecha o campo de entrada

- Selecciona un formato de fecha del menú desplegable (ej., MM/DD/YYYY, DD/MM/YYYY, YYYY-MM-DD)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/105.png" style={{width:1000, height:'auto'}}/></div>

Paso 5. Usa el panel de propiedades para personalizar aún más:

- Tamaño y estilo de fuente

- Color del texto

- Alineación

- Fondo (si se desea)

:::note
La fecha mostrada en el Canvas es estática y representa lo que has configurado en la Configuración de Fecha. Cuando se despliega en tu dispositivo, el componente Fecha puede:

- Mostrar la fecha estática que configuraste (útil para fechas límite, fechas de eventos, etc.)

- Si se establece en modo dinámico, mostrar la fecha/hora actual que se actualizará automáticamente en el dispositivo

:::

## Componentes del Dispositivo

La sección Dispositivo contiene componentes que muestran automáticamente datos de los sensores de tu dispositivo conectado de la serie Seeed reTerminal E10xx:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/95.png" style={{width:400, height:'auto'}}/></div>

<Tabs>
<TabItem value="Battery" label="Battery" default>

El componente Batería muestra el nivel actual de batería de tu dispositivo conectado.

Paso 1. Haz clic en el componente "Battery"

Paso 2. El componente mostrará automáticamente el porcentaje de batería de tu dispositivo

Paso 3. Usa el panel de propiedades para personalizar:

- Tamaño de fuente (por defecto es 30px)

- Estilo de texto (negrita, cursiva, subrayado)

- Alineación (izquierda, centro, derecha)

- Color

- Familia de fuente

</TabItem>
<TabItem value="Temperature" label="Temperature">

El componente Temperatura muestra la lectura actual de temperatura del sensor de tu dispositivo.

Paso 1. Haz clic en el componente "Temperature"

Paso 2. El componente mostrará automáticamente la lectura de temperatura de tu dispositivo

Paso 3. Usa el panel de propiedades para personalizar:

- Tamaño de fuente (por defecto es 30px)

- Estilo de texto (negrita, cursiva, subrayado)

- Alineación (izquierda, centro, derecha)

- Color

- Familia de fuente

</TabItem>
<TabItem value="Humidity" label="Humidity">

El componente Humedad muestra la lectura actual de humedad del sensor de tu dispositivo.

Paso 1. Haz clic en el componente "Humidity"

Paso 2. El componente mostrará automáticamente el porcentaje de humedad de tu dispositivo

Paso 3. Usa el panel de propiedades para personalizar:

- Tamaño de fuente (por defecto es 30px)

- Estilo de texto (negrita, cursiva, subrayado)

- Alineación (izquierda, centro, derecha)

- Color

- Familia de fuente

</TabItem>
</Tabs>

## Componentes de Datos

La sección Datos contiene componentes que se conectan a fuentes de datos externas para mostrar información como clima, acciones y más:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/96.png" style={{width:400, height:'auto'}}/></div>

### Clima

El componente Clima muestra información meteorológica actual para una ubicación especificada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/99.png" style={{width:1000, height:'auto'}}/></div>

Paso 1. Haz clic en el componente "Weather" en la sección Datos

Paso 2. El componente se colocará automáticamente en la esquina superior izquierda de tu canvas con el texto por defecto "Temperature"

Paso 3. Usando la barra de herramientas en la parte superior, configura las opciones de visualización del clima:

- Selecciona una ubicación (ej., "New York") del campo de ubicación

- Elige qué datos meteorológicos mostrar del menú desplegable:

  - Clima Actual (temperatura, condiciones)

  - Hoy (pronóstico de hoy)

  - Día 2 hasta Día 7 (pronósticos futuros)

Paso 4. Usa el panel de propiedades para personalizar aún más la apariencia

:::note
Los datos meteorológicos mostrados en el Canvas son solo para propósitos de visualización y no representan el clima en tiempo real. La información meteorológica real solo se mostrará después de desplegar el diseño en tu dispositivo, que luego obtendrá datos reales de los servicios meteorológicos.
:::

### Icono del Clima

El componente Icono del Clima muestra una representación visual de las condiciones meteorológicas actuales.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/100.png" style={{width:1000, height:'auto'}}/></div>

Paso 1. Haz clic en el componente "Weather Icon" en la sección Datos

Paso 2. El componente se colocará automáticamente en la esquina superior izquierda de tu canvas con un icono de sol por defecto

Paso 3. Usando la barra de herramientas en la parte superior, selecciona la ubicación (ej., "New York") del campo de ubicación

Paso 4. Usa el panel de propiedades para personalizar:

- Tamaño y posición
- Estilo del icono

:::note
El icono mostrado en el Canvas es solo un marcador de posición. Después del despliegue en tu dispositivo, el componente obtendrá y mostrará el icono meteorológico apropiado basado en las condiciones meteorológicas reales para la ubicación especificada.
:::

### Acciones

El componente Acciones muestra información del mercado de valores en tiempo real para símbolos especificados.

Paso 1. Haz clic en el componente "Stock" en la sección Datos

Paso 2. El componente se colocará automáticamente en la esquina superior izquierda de tu canvas con un texto por defecto "AAPL" (símbolo de acciones de Apple)

Paso 3. Haz clic en el botón "Config" en la barra de herramientas para abrir el panel de Configuración de Acciones

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/101.png" style={{width:1000, height:'auto'}}/></div>

Paso 4. En el panel de Configuración de Acciones:

- Ingresa un símbolo de acción (ej., "AAPL", "MSFT", "GOOGL") en el campo Símbolo de Acción

- Haz clic en "Search" para validar el símbolo

- Ingresa tu clave API de Twelve Data en el campo proporcionado

Paso 5. Del menú desplegable "Symbol" en la barra de herramientas, selecciona qué datos de acciones mostrar:

- Symbol (solo muestra el símbolo ticker de la acción)

- Current Price (muestra el precio más reciente de la acción)

- Change (muestra el cambio de precio desde el cierre anterior)

- Change Percent (muestra el cambio porcentual)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/102.png" style={{width:1000, height:'auto'}}/></div>

Paso 6. Usa el panel de propiedades para personalizar la apariencia del componente de acciones

#### Obtener una Clave API de Twelve Data

Para usar el componente Acciones, necesitarás una clave API gratuita de Twelve Data:

Paso 1. Visita [twelvedata.com](https://twelvedata.com/)

Paso 2. Haz clic en "Get Started Free" o "Sign Up"

Paso 3. Crea una cuenta con tu dirección de correo electrónico y contraseña

Paso 4. Una vez registrado e iniciado sesión, navega a tu panel de control

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/103.png" style={{width:1000, height:'auto'}}/></div>

Paso 5. Localiza y copia tu clave API

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/104.png" style={{width:800, height:'auto'}}/></div>

Paso 6. Pega esta clave API en el campo "Twelve Data API Key" en el panel de Configuración de Acciones

:::note

- El nivel gratuito de Twelve Data permite un número limitado de llamadas API por minuto y por día.

- Los datos de acciones mostrados en el Canvas son solo para propósitos de visualización. La información de acciones en tiempo real solo se mostrará después de desplegar el diseño en tu dispositivo, que luego obtendrá datos actuales de los servidores de Twelve Data.

- Para la experiencia más confiable, considera actualizar a un plan pagado de Twelve Data si necesitas actualizaciones frecuentes de acciones.

:::

:::tip
Para propósitos de prueba, puedes usar símbolos de acciones comunes como:

- AAPL (Apple)

- MSFT (Microsoft)

- GOOGL (Alphabet/Google)

- AMZN (Amazon)

- TSLA (Tesla)

:::

### GitHub

El componente GitHub muestra información sobre un perfil de usuario de GitHub.

Paso 1. Haz clic en el componente "GitHub" en la sección Data

Paso 2. El componente se colocará automáticamente en la esquina superior izquierda de tu canvas con texto predeterminado mostrando "Seeed Studio" u otro marcador de posición

Paso 3. En la barra de herramientas, verás un campo de nombre de usuario de GitHub (ej., "seeed-studio") y un menú desplegable

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/106.png" style={{width:1000, height:'auto'}}/></div>

Paso 4. Ingresa un nombre de usuario válido de GitHub en el campo y haz clic en "Validate" en el panel de Configuración de Usuario de GitHub que aparece

Paso 5. Del menú desplegable etiquetado "Display Name" (o similar), selecciona qué información del usuario de GitHub quieres mostrar:

- Display Name (muestra el nombre de visualización del usuario)

- Username (muestra el identificador de GitHub del usuario)

- Followers (muestra el número de seguidores)

- Following (muestra el número de usuarios seguidos)

- Public Repos (muestra el número de repositorios públicos)

- Public Gists (muestra el número de gists públicos)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/107.png" style={{width:1000, height:'auto'}}/></div>

Paso 6. Usa el panel de propiedades para personalizar la apariencia del componente GitHub

:::note

- El componente GitHub requiere acceso a internet en tu dispositivo para obtener datos de GitHub en tiempo real.

- Lo que ves en el Canvas es solo un marcador de posición. La información real de GitHub se mostrará después del despliegue en tu dispositivo.

- La API de GitHub tiene límites de velocidad, por lo que la actualización excesiva puede deshabilitar temporalmente el componente.

:::

:::tip
Prueba estos nombres de usuario de GitHub para testing:

- seeed-studio (GitHub oficial de Seeed Studio)

- torvalds (Linus Torvalds, creador de Linux)

- microsoft (GitHub oficial de Microsoft)

- google (GitHub oficial de Google)

:::

### GitHub Repo

El componente GitHub Repo muestra información sobre un repositorio específico de GitHub.

Paso 1. Haz clic en el componente "GitHub Repo" en la sección Data

Paso 2. El componente se colocará automáticamente en la esquina superior izquierda de tu canvas con texto predeterminado mostrando "wiki-documents"

Paso 3. En el panel de Configuración de Repositorio de GitHub que aparece:

- Puedes ver el estado actual del usuario y repositorio

- Busca repositorios ingresando palabras clave o dejando el campo vacío para mostrar todos los repositorios de un usuario

- Ingresa manualmente un repositorio específico en el formato "Usuario/Repositorio" (ej., "Seeed-Studio/wiki-documents")

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/108.png" style={{width:1000, height:'auto'}}/></div>

Paso 4. Haz clic en "Search" para encontrar y validar el repositorio

Paso 5. Del menú desplegable en la barra de herramientas, selecciona qué información del repositorio quieres mostrar:

- Name (muestra el nombre del repositorio)

- Full Name (muestra el formato usuario/repositorio)

- Stars (muestra el número de estrellas)

- Forks (muestra el número de forks)

- Watchers (muestra el número de observadores)

- Description (muestra la descripción del repositorio)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/109.png" style={{width:1000, height:'auto'}}/></div>

Paso 6. Usa el panel de propiedades para personalizar la apariencia del componente GitHub Repo

:::note

- Como el componente de usuario de GitHub, el componente GitHub Repo requiere acceso a internet en tu dispositivo para obtener datos.

- El Canvas muestra texto de marcador de posición. La información real del repositorio solo aparecerá después del despliegue en tu dispositivo.

- La API de GitHub tiene límites de velocidad que pueden afectar la frecuencia con la que los datos pueden actualizarse.

:::

### YouTube

El componente YouTube muestra información y estadísticas sobre un canal de YouTube.

Paso 1. Haz clic en el componente "YouTube" en la sección Data

Paso 2. El componente se colocará automáticamente en la esquina superior izquierda de tu canvas con texto predeterminado mostrando "No API key configured"

Paso 3. En el panel de Configuración de YouTube que aparece:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/110.png" style={{width:1000, height:'auto'}}/></div>

- Ingresa un ID de Canal de YouTube (ej., "UC_x5XG1OV2P6uZZ5FSM9Ttw") en el campo YouTube Channel

- Haz clic en "Search" para validar el canal

- Ingresa tu Clave API de YouTube Data en el campo proporcionado

- Haz clic en el enlace "Google Cloud Console" para obtener una clave API gratuita si no tienes una

Paso 4. Del menú desplegable en la barra de herramientas, selecciona qué información del canal quieres mostrar:

- Channel Name (muestra el nombre del canal de YouTube)

- Channel ID (muestra el ID del canal de YouTube)

- Description (muestra la descripción del canal)

- Subscribers (muestra el número de suscriptores)

- Views (muestra el número total de visualizaciones)

- Videos (muestra el número de videos subidos)

- Published At (muestra la fecha de creación del canal)

- Custom URL (muestra la URL personalizada si está disponible)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/111.png" style={{width:1000, height:'auto'}}/></div>

Paso 5. Usa el panel de propiedades para personalizar la apariencia del componente de YouTube

#### Obtener una Clave de API de YouTube Data

:::note
Si no sabes cómo obtener una Clave de API, también puedes leer [la documentación oficial de Google](https://developers.google.com/youtube/v3/getting-started).
:::

Para usar el componente de YouTube, necesitarás una clave de API gratuita de Google Cloud Console:

Paso 1. Visita [Google Cloud Console](https://console.cloud.google.com/)

Paso 2. Crea un nuevo proyecto o selecciona uno existente

Paso 3. Navega a "APIs & Services" > "Library"

Paso 4. Busca "YouTube Data API v3" y habilítalo

Paso 5. Ve a "APIs & Services" > "Credentials"

Paso 6. Haz clic en "Create Credentials" > "API Key"

Paso 7. Copia tu nueva clave de API

Paso 8. Pega esta clave de API en el campo "YouTube Data API Key" en el panel de Configuración de YouTube

:::note

- El componente de YouTube requiere acceso a internet en tu dispositivo para obtener datos del canal.

- El Canvas muestra "No API key configured" hasta que proporciones una clave de API válida y un ID de canal.

- La API de YouTube Data de Google tiene cuotas y límites de velocidad que pueden afectar el uso.

- Algunas estadísticas (como el conteo exacto de suscriptores) pueden estar redondeadas o aproximadas según las políticas de YouTube.

:::

## Plantillas

Las plantillas proporcionan diseños prediseñados que combinan múltiples componentes en una pantalla cohesiva y lista para usar. Ahorran tiempo y aseguran resultados profesionales sin tener que diseñar diseños desde cero.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/113.png" style={{width:350, height:'auto'}}/></div>

### Plantilla de Visualización del Clima

La Plantilla de Visualización del Clima ofrece un panel de clima completo que muestra las condiciones actuales y un pronóstico de 7 días para cualquier ciudad.

Paso 1. Haz clic en la plantilla "Weather Display" en la sección de Plantillas

Paso 2. En el diálogo "Configure Template: Weather Display" que aparece:

- Selecciona tu unidad de temperatura preferida (Celsius °C o Fahrenheit °F)

- Ingresa el nombre de una ciudad en el campo "City Name"

- Haz clic en "Search" para verificar que la ciudad existe en la base de datos del clima

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/114.png" style={{width:800, height:'auto'}}/></div>

Paso 3. Después de una búsqueda exitosa, haz clic en "OK" para continuar

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/115.png" style={{width:700, height:'auto'}}/></div>

Paso 4. Aparecerá una ventana de "Template Preview" mostrando:

- Panel izquierdo con fecha actual, condición del clima, temperatura, máxima/mínima y humedad

- Panel derecho con nombre de la ciudad y pronóstico de 7 días incluyendo íconos de condiciones y rangos de temperatura

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/116.png" style={{width:700, height:'auto'}}/></div>

Paso 5. Revisa la vista previa y nota:

- La plantilla reemplazará todos los elementos actuales en tu canvas

- Todos los elementos de la plantilla recibirán IDs únicos para evitar conflictos

- Puedes modificar la plantilla después de aplicarla al canvas

Paso 6. Haz clic en "Apply to Canvas" para agregar la plantilla a tu espacio de trabajo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/117.png" style={{width:1000, height:'auto'}}/></div>

Paso 7. La plantilla de Visualización del Clima ahora está en tu canvas, lista para implementación o personalización adicional

:::note

- La plantilla de Visualización del Clima usa datos de API del clima en tiempo real que requiere conectividad a internet en tu dispositivo.

- La plantilla es completamente personalizable después de ser aplicada a tu canvas - puedes redimensionar, reposicionar o modificar cualquier elemento.

- Los datos del clima se actualizan automáticamente según el intervalo de actualización establecido en la configuración de tu proyecto.

:::

### Plantilla de Panel de Acciones

La Plantilla de Panel de Acciones proporciona una visualización limpia y profesional de datos del mercado de valores en tiempo real incluyendo precio, cambio diario y cambio porcentual.

Paso 1. Haz clic en la plantilla "Stock Dashboard" en la sección de Plantillas

Paso 2. En el diálogo "Configure Template: Stock Dashboard" que aparece:

- Ingresa tu [Clave de API de Twelve Data](#obtener-una-clave-de-api-de-twelve-data) en el campo proporcionado (enmascarado por seguridad)

- Ingresa un símbolo de acción (ej., "AAPL" para Apple Inc.) en el campo Stock Symbol

- Haz clic en "Search" para encontrar la acción

Paso 3. Después de buscar, aparece una lista de acciones coincidentes. Selecciona tu acción deseada de los resultados (ej., "AAPL Apple Inc.")

Paso 4. Haz clic en "OK" para confirmar tu selección

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/118.png" style={{width:700, height:'auto'}}/></div>

Paso 5. Aparecerá una ventana de "Template Preview" mostrando:

- Panel izquierdo con el símbolo de la acción en texto grande

- Panel derecho mostrando el precio actual de la acción, cambio de precio y cambio porcentual

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/119.png" style={{width:700, height:'auto'}}/></div>

Paso 6. Revisa la vista previa y nota:

- La plantilla reemplazará todos los elementos actuales en tu canvas

- Todos los elementos de la plantilla recibirán IDs únicos para evitar conflictos

- Puedes modificar la plantilla después de aplicarla al canvas

Paso 7. Haz clic en "Apply to Canvas" para agregar la plantilla a tu espacio de trabajo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/120.png" style={{width:1000, height:'auto'}}/></div>

:::note

- La plantilla de Panel de Acciones requiere acceso a internet en tu dispositivo para obtener datos del mercado en tiempo real.

- Los datos del mercado de valores tienen un retraso de al menos 15 minutos en el nivel gratuito de Twelve Data.

- Los datos se actualizan según la configuración del intervalo de actualización de tu proyecto.

- Los datos del mercado solo están disponibles durante las horas de negociación de las respectivas bolsas.

:::

### Plantilla de Perfil de GitHub

La Plantilla de Perfil de GitHub crea un panel integral que muestra la información del perfil de un usuario de GitHub y repositorios seleccionados con sus estadísticas.

Paso 1. Haz clic en la plantilla "GitHub Profile" en la sección de Plantillas

Paso 2. En el diálogo "Configure Template: GitHub Profile" que aparece:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/121.png" style={{width:800, height:'auto'}}/></div>

- Ingresa un nombre de usuario de GitHub en el campo requerido (ej., "seeed-studio")

- Opcionalmente ingresa palabras clave en el campo Repository Search para filtrar repositorios

- Deja el campo de búsqueda vacío para mostrar todos los repositorios del usuario

Paso 3. Haz clic en el botón "Search all '[username]' repositories" para recuperar los repositorios del usuario

Paso 4. De la lista de repositorios mostrados, selecciona hasta 3 repositorios que quieras mostrar

- Cada repositorio muestra su nombre, descripción, lenguaje de programación principal y conteo de estrellas

- Puedes usar el campo de filtro para reducir la lista de repositorios

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/122.png" style={{width:700, height:'auto'}}/></div>

Paso 5. Haz clic en "OK" para confirmar tus selecciones

Paso 6. Aparecerá una ventana "Template Preview" mostrando:

- El nombre de visualización del usuario de GitHub en la parte superior

- Etiqueta "Github" con conteo de seguidores

- Una línea divisoria horizontal

- Repositorios seleccionados con sus nombres y conteos de estrellas

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/123.png" style={{width:700, height:'auto'}}/></div>

Paso 7. Revisa la vista previa y nota:

- La plantilla reemplazará todos los elementos actuales en tu lienzo

- Todos los elementos de la plantilla recibirán IDs únicos para evitar conflictos

- Puedes modificar la plantilla después de aplicarla al lienzo

Paso 8. Haz clic en "Apply to Canvas" para agregar la plantilla a tu espacio de trabajo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/124.png" style={{width:1000, height:'auto'}}/></div>

:::note

- A diferencia de otras plantillas que pueden requerir claves API, la plantilla GitHub Profile usa la API pública de GitHub y no requiere autenticación.

- La plantilla tiene dos modos de búsqueda claramente explicados en la interfaz:

  1. Solo usuario: Ingresa solo el nombre de usuario para mostrar todos los repositorios

  2. Usuario + palabras clave: Ingresa nombre de usuario y palabras clave específicas para filtrar repositorios

- La selección de repositorios está limitada a 3 para asegurar una visualización óptima en pantallas más pequeñas.

- Algunas estadísticas de GitHub pueden ser aproximadas (como conteos de seguidores sobre 1,000 mostrados como "1.0K").

:::

### Plantilla de Estadísticas de Canal de YouTube

La Plantilla de Estadísticas de Canal de YouTube muestra la marca, eslogan y conteo de suscriptores de un canal de YouTube en un diseño limpio y moderno.

Paso 1. Haz clic en la plantilla "YouTube Channel Stats" en la sección de Plantillas

Paso 2. En el diálogo "Configure Template: YouTube Channel Stats" que aparece:

- Ingresa tu [Clave de API de YouTube Data](#getting-a-youtube-data-api-key) (enmascarada por seguridad)

- Ingresa un Identificador de Canal de YouTube en uno de los formatos soportados:

  - ID de Canal: cadena de 24 caracteres que comienza con "UC" (ej., UC_x5XG1OV2P6uZZ5FSM9Ttw)
  - @Handle: identificador de canal que comienza con @ (ej., @seeedstudiosz)
  - URL de Canal: URL completa de YouTube (ej., youtube.com/@seeedstudiosz)

Paso 3. Haz clic en "Validate Channel" para verificar que el canal existe y recuperar sus datos

Paso 4. Si la validación es exitosa, verás un mensaje de confirmación (ej., "Found channel: Seeed Studio • 20.4K")

Paso 5. Haz clic en "OK" para continuar

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/125.png" style={{width:800, height:'auto'}}/></div>

Paso 6. Aparecerá una ventana "Template Preview" mostrando:

- Panel izquierdo con el nombre del canal y eslogan/descripción en un elegante fondo negro

- Panel derecho con etiqueta "YouTube", conteo de suscriptores y texto "Subscribers"

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/126.png" style={{width:800, height:'auto'}}/></div>

Paso 7. Revisa la vista previa y nota:

- La plantilla reemplazará todos los elementos actuales en tu lienzo

- Todos los elementos de la plantilla recibirán IDs únicos para evitar conflictos

- Puedes modificar la plantilla después de aplicarla al lienzo

Paso 8. Haz clic en "Apply to Canvas" para agregar la plantilla a tu espacio de trabajo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/127.png" style={{width:1000, height:'auto'}}/></div>

:::note

- La plantilla de Estadísticas de Canal de YouTube requiere acceso a internet en tu dispositivo para obtener datos del canal.

- La API de YouTube Data tiene cuotas y límites de velocidad que pueden afectar el uso.

- La plantilla recupera automáticamente el eslogan o descripción del canal cuando está disponible.

- Para canales con un gran número de suscriptores, el conteo puede ser abreviado (ej., "1.2M" para 1,200,000).

:::

## Características Avanzadas del Lienzo

### Depuración y Edición de JSON

SenseCraft HMI Canvas proporciona capacidades avanzadas de depuración:

Paso 1. Haz clic en el ícono de depuración en la barra de herramientas

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/128.png" style={{width:400, height:'auto'}}/></div>

Paso 2. Se abrirá un modal mostrando los datos actuales del diseño en formato JSON

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/129.png" style={{width:700, height:'auto'}}/></div>

Paso 3. Puedes:

- Ver la estructura JSON de tu diseño

- Hacer clic en "Manual Edit JSON" para modificar directamente el código del diseño

- Hacer clic en "Copy to Clipboard" para guardar el JSON como respaldo o para compartir

- Hacer clic en "Generate HTML" para crear una versión HTML de tu diseño

Esta característica es particularmente útil para:

- Entender cómo está estructurado tu diseño

- Hacer ajustes precisos que podrían ser difíciles en el editor visual

- Crear respaldos de diseños complejos

- Compartir diseños con otros

### Importar Exportar y Compartir

SenseCraft HMI proporciona funciones convenientes de Importar y Exportar que te permiten guardar, compartir y restaurar fácilmente tu trabajo de diseño. Estas dos características están ubicadas en la barra de herramientas superior de la interfaz, claramente identificadas por sus íconos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/142.png" style={{width:1000, height:'auto'}}/></div>

#### Exportar Diseños

La función de Exportar te permite guardar tu diseño de interfaz actual como un archivo:

**Paso 1.** Después de completar tu diseño de interfaz, haz clic en el botón **Exportar** (icono de flecha hacia afuera) en la barra de herramientas superior.

**Paso 2.** En el diálogo de guardar archivo que aparece, elige una ubicación de guardado y nombra tu archivo.

**Paso 3.** Haz clic en "Guardar" para completar el proceso de exportación.

Tu diseño se guardará como un archivo JSON que contiene toda la información de la interfaz, que puede usarse para respaldo o compartir.

#### Importar Diseños

La función de Importar te permite cargar diseños o plantillas previamente exportados:

**Paso 1.** Haz clic en el botón **Importar** (icono de flecha hacia adentro) en la barra de herramientas superior.

**Paso 2.** En el diálogo de selección de archivo, localiza y selecciona tu archivo de diseño previamente exportado.

**Paso 3.** Haz clic en "Abrir" y el diseño seleccionado se cargará en tu espacio de trabajo actual.

:::tip
La operación de importar reemplazará el contenido del espacio de trabajo actual. Se recomienda exportar tu diseño actual antes de importar para prevenir pérdida de datos.
:::

Estas características son particularmente útiles para:

- Respaldar diseños antes de hacer cambios importantes
- Compartir diseños de interfaz con miembros del equipo
- Transferir proyectos entre diferentes dispositivos
- Iniciar rápidamente nuevos proyectos usando plantillas prediseñadas

### Generador de Diseño con IA

SenseCraft HMI Canvas incluye un generador de diseño impulsado por IA:

Paso 1. Haz clic en el botón "Generador IA" en la parte superior derecha

Paso 2. Ingresa una descripción del diseño que quieres crear

Paso 3. Haz clic en "Generar" para que la IA cree un diseño basado en tu descripción

Paso 4. Personaliza el diseño generado según sea necesario

Esta característica es excelente para crear rápidamente diseños sin empezar desde cero.

:::tip
Para instrucciones detalladas sobre el uso de esta sección, consulta **[Usar Generación IA en SenseCraft HMI](https://wiki.seeedstudio.com/es/sensecraft_hmi_ai_generation/)**.
:::

## Desplegar en tu Dispositivo

Una vez que hayas creado tu diseño de canvas, querrás desplegarlo en tu dispositivo Seeed:

### Vista Previa Antes del Despliegue

Paso 1. Haz clic en el botón "Vista Previa" en la barra de herramientas superior

Paso 2. Revisa cómo aparecerá tu diseño en el dispositivo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/130.png" style={{width:700, height:'auto'}}/></div>

Paso 3. Realiza los ajustes necesarios

### Guardar tu Diseño

Paso 1. Haz clic en el botón "Guardar" para almacenar tu diseño actual

Paso 2. Tu diseño se guardará en la nube de SenseCraft HMI

### Desplegar en el Dispositivo

Paso 1. Asegúrate de que tu dispositivo esté conectado y muestre el estado "En línea"

Paso 2. Haz clic en el botón "Desplegar"

Paso 3. Espera a que el proceso de despliegue se complete

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/131.png" style={{width:1000, height:'auto'}}/></div>

Paso 4. Tu diseño aparecerá en tu dispositivo conectado

### Consideraciones de Despliegue

Para un despliegue exitoso en dispositivos Seeed:

1. **Compatibilidad del Dispositivo**: Asegúrate de que tu diseño esté optimizado para la resolución de pantalla específica de tu dispositivo

2. **Estado de Conexión**: Asegúrate de que tu dispositivo muestre el estado "En línea" antes de desplegar

3. **Componentes de Datos**: Si usas componentes de datos (Clima, Acciones, etc.), asegúrate de que tu dispositivo tenga conectividad a internet

4. **Sensores del Dispositivo**: Los componentes como Batería, Temperatura y Humedad solo funcionarán con dispositivos compatibles de la serie Seeed reTerminal E10xx que tengan los sensores apropiados

5. **Tasa de Actualización**: Establece un tiempo de intervalo apropiado basado en qué tan frecuentemente tus datos necesitan actualizarse y las capacidades de tu dispositivo

## Solución de Problemas

### Problemas Comunes del Canvas y Soluciones

1. **Los componentes no muestran datos**:
   - Verifica la conexión a internet de tu dispositivo
   - Verifica que la fuente de datos esté disponible
   - Asegúrate de que la ruta de clave de datos sea correcta para componentes dinámicos
   - Intenta actualizar el canvas o redesplegar

2. **Problemas de diseño en el dispositivo**:
   - Usa la función de Vista Previa para probar antes del despliegue
   - Evita colocar elementos demasiado cerca de los bordes del canvas

3. **El despliegue falla**:
   - Asegúrate de que tu dispositivo esté correctamente conectado a SenseCraft HMI
   - Verifica la conexión a internet de tu dispositivo
   - Intenta guardar tu diseño y luego desplegar nuevamente
   - Reinicia tu dispositivo e intenta desplegar nuevamente

4. **Los datos del sensor del dispositivo no se muestran**:
   - Verifica que tu dispositivo tenga los sensores requeridos
   - Verifica que el firmware de tu dispositivo esté actualizado
   - Asegúrate de que el dispositivo esté correctamente conectado a SenseCraft HMI

5. **El texto o las imágenes aparecen distorsionados**:
   - Ajusta el tamaño y posición de los componentes
   - Verifica la configuración de fuente para componentes de texto
   - Para imágenes, asegúrate de que tengan una resolución apropiada para tu pantalla

## Conclusión

La función Canvas en SenseCraft HMI proporciona una plataforma poderosa para crear interfaces personalizadas y paneles de control para tus dispositivos Seeed. Al combinar elementos de diseño básicos con componentes de datos dinámicos y plantillas prediseñadas, puedes crear pantallas de aspecto profesional que sirven para una amplia gama de propósitos.

Ya sea que estés construyendo una estación meteorológica, monitor de dispositivo, pantalla de información o panel de control, Canvas te da las herramientas para dar vida a tu visión. La interfaz intuitiva de arrastrar y soltar combinada con características avanzadas como vinculación de datos dinámicos y herramientas de depuración la hace accesible para principiantes mientras aún ofrece la profundidad que los usuarios experimentados necesitan.

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
