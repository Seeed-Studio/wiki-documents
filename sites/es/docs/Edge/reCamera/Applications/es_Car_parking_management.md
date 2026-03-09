---
title: Demo de Monitoreo de Espacios de Estacionamiento con IA usando reCamera
description: Este wiki presenta un demo de monitoreo de espacios de estacionamiento basado en IA usando reCamera, mostrando detección y visualización de disponibilidad de estacionamiento en tiempo real.
keywords:
  - Detección de Espacios de Estacionamiento
  - reCamera
  - Visión IA Edge
  - Estacionamiento Inteligente
slug: /ai_parking_slot_monitoring_demo_with_recamera
sku: 100029708,102991896
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
sidebar_position: 3
last_update:
  date: 2025-12-17T00:00:00.000Z
  author: John Xiang
createdAt: '2025-12-31'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/ai_parking_slot_monitoring_demo_with_recamera/
---

# Demo de Gestión de Estacionamiento con IA usando reCamera

## Introducción

La disponibilidad de estacionamiento es un requisito común en escenarios como **estacionamientos comerciales**, **garajes residenciales**, **parques industriales** y **gestión de estacionamiento en campus**, donde los operadores y usuarios quieren entender rápidamente qué espacios están ocupados o disponibles.

Este proyecto proporciona un demo listo para usar que se enfoca en las siguientes capacidades de aplicación:

- **Detección de Espacios de Estacionamiento**: Detecta el estado de ocupación de cada espacio de estacionamiento en la vista de la cámara.
- **Anti-vibración / Estabilización**: Reduce las vibraciones visuales y las fluctuaciones de detección a corto plazo para hacer los resultados más estables.
- **Conteo y Resumen**: Resume automáticamente el estado actual del estacionamiento, como el número de espacios disponibles.
- **Visualización en Pantalla**: Muestra los resultados de detección y el estado de los espacios directamente en la interfaz de vista previa para verificación rápida y demostración.


## Preparación del Hardware

Para ejecutar este demo de gestión de estacionamiento, solo se requiere **un dispositivo reCamera**.  
Todas las variantes de reCamera son compatibles.

Puedes elegir **cualquier versión de reCamera** según tus necesidades de implementación:

- reCamera 2002 Serie (Wi-Fi)
- reCamera Gimbal (Pan-Tilt)
- reCamera HQ PoE (Ethernet + PoE)

> **Nota:**  
> La versión PoE no soporta Wi-Fi y debe conectarse a la misma red local a través de un switch habilitado para PoE.

<table align="center">
 <tr>
  <th>reCamera 2002 Serie</th>
  <th>reCamera Gimbal</th>
  <th>reCamera HQ PoE</th>
 </tr>
 <tr>
  <td>
    <div style={{textAlign:'center'}}>
      <img src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" style={{width:300, height:'auto'}}/>
    </div>
  </td>
  <td>
    <div style={{textAlign:'center'}}>
      <img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/>
    </div>
  </td>
  <td>
    <div style={{textAlign:'center'}}>
      <img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:300, height:'auto'}}/>
    </div>
  </td>
 </tr>
 <tr>
  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora </font></span></strong>
      </a>
    </div>
  </td>
  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora </font></span></strong>
      </a>
    </div>
  </td>
  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora </font></span></strong>
      </a>
    </div>
  </td>
 </tr>
</table>

## Configurar Demo 
### Paso 1: Configurar reCamera

Primero, por favor sigue la guía oficial de inicio para completar la configuración básica de reCamera: [Configuración Básica de reCamera](https://wiki.seeedstudio.com/es/recamera_getting_started/)

Después de completar la configuración inicial, asegúrate de que el dispositivo esté encendido y conectado a la red correctamente.  
Luego, accede a la interfaz de gestión de reCamera y entra a la página de **flujo de trabajo Node-RED**.

Si puedes acceder exitosamente a la interfaz de flujo de trabajo Node-RED como se muestra a continuación, significa que la configuración se ha completado exitosamente.

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload5.png" />
</div>

### Paso 2: Descargar y Subir el Archivo de Flujo de Trabajo

Este demo proporciona un **archivo de flujo de trabajo preconfigurado**, en el cual todos los nodos y conexiones requeridos ya han sido configurados.  
**No** necesitas crear o configurar manualmente ningún nodo de Node-RED.

Por favor descarga el archivo de flujo de trabajo desde nuestra **plataforma SenseCraft AI**, y luego impórtalo directamente en reCamera. Para el tutorial de Sensecraft AI, por favor consulta el enlace [Acceder a los Dashboards de SenseCraft AI reCamera](https://wiki.seeedstudio.com/es/recamera_getting_started/#access-recamera-preview-dashboard).  

Después de importar el flujo de trabajo:

- Todos los nodos de detección, visualización y procesamiento de datos estarán listos para usar.
- No se requiere configuración adicional de parámetros.
- El demo puede lanzarse inmediatamente después del despliegue.

Una vez que el flujo de trabajo se haya subido y desplegado exitosamente, reCamera comenzará automáticamente a ejecutar el demo de monitoreo de espacios de estacionamiento en segundo plano. Este flujo de trabajo está diseñado como un **pipeline de monitoreo de espacios de estacionamiento de extremo a extremo**, ejecutándose completamente en reCamera. La lógica de alto nivel es la siguiente:

1. **Entrada de Video**  
   La cámara captura continuamente fotogramas de video y los envía al nodo de inferencia de IA.

2. **Detección de IA**  
   El modelo de detección identifica objetos relacionados con estacionamiento y produce cajas delimitadoras con etiquetas de clase (`free` / `car`) y puntuaciones de confianza.

3. **Asociación de Espacios y Estabilización**  
   - Las cajas detectadas se emparejan a través de fotogramas usando **IoU (Intersección sobre Unión)**.
   - Cada espacio entra en un *estado estable* solo después de ser detectado consistentemente por un número fijo de fotogramas.
   - Se toleran fallos a corto plazo para prevenir cambios de estado falsos.

4. **Gestión del Pool de Espacios**  
   - Cada espacio de estacionamiento se almacena en un pool de espacios con su posición, historial de estado y contador de estabilidad.
   - Los espacios que desaparecen por demasiado tiempo se eliminan automáticamente.

5. **Capa de Visualización**  
   - Las cajas delimitadoras, marcadores centrales, etiquetas y paneles de estado se renderizan como superposiciones SVG.
   - La visualización se actualiza en tiempo real vía WebSocket.

6. **Ejecución Automática en Segundo Plano**  
   Una vez desplegado, el flujo de trabajo se ejecuta automáticamente en segundo plano sin activación manual.

Los resultados de detección se ilustran a continuación:

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/test1.jpg" />
</div>
<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/test2.jpg" />
</div>
<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/test3.jpg" />
</div>
<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/test4.jpg" />
</div>
<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/test5.jpg" />
</div>
<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/test6.jpg" />
</div>


De los resultados mostrados, puedes observar los siguientes elementos:

- **Cajas Delimitadoras**  
  Cada espacio de estacionamiento está asociado con una región detectada. El sistema clasifica cada región como `free` o `car` basado en la salida del modelo de IA.

- **Marcador Central (Círculo)**  
  Se dibuja un círculo en el centro de cada espacio de estacionamiento *estable*.  
  - **Círculo verde** indica un espacio libre  
  - **Círculo rojo** indica un espacio ocupado  

- **Etiquetas y Coordenadas de Espacios**  
  Cada espacio está etiquetado (ej., `Slot1`, `Slot2`, `Slot3`) junto con sus coordenadas centrales `(x, y)`.  
  Estas etiquetas se mapean desde la lista de nombres de espacios que proporcionas vía Node-RED.

- **Panel de Estado (Esquina Superior Izquierda)**  
  El panel de superposición resume el estado general:
  - **Monitoring Slots**: Todos los espacios actualmente siendo rastreados
  - **Free Slots**: Espacios que están confirmados como libres después de validación multi-fotograma

El sistema usa un mecanismo de estabilización multi-fotograma para evitar resultados parpadeantes causados por oclusión temporal, cambios de iluminación o ruido de detección.
:::note
La lógica actual de detección de espacios de estacionamiento está específicamente diseñada para **tres espacios de estacionamiento adyacentes dispuestos lado a lado**. En este demo, **reCamera está instalada frente a los espacios de estacionamiento**, mirando directamente a los vehículos, en lugar de usar una vista desde arriba (vista de pájaro).  

Como resultado, la asociación de espacios, posicionamiento de puntos centrales y lógica de estabilidad están optimizados para una **perspectiva frontal**. Si planeas usar una cámara aérea o un diseño de estacionamiento diferente, el mapeo de espacios y la lógica de detección pueden necesitar ajustarse en consecuencia.
:::


## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Si necesitas orientación sobre objetivos de personalización específicos o quieres extender el flujo de trabajo más, no dudes en contactarnos. Estamos aquí para proporcionarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
