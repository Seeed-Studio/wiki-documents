---
title: Demo de monitoreo de plazas de aparcamiento con IA usando reCamera
description: Este wiki presenta una demostración de monitoreo de plazas de aparcamiento basada en IA usando reCamera, que muestra la detección y visualización en tiempo real de la disponibilidad de estacionamiento.
keywords:
  - Detección de plazas de aparcamiento
  - reCamera
  - Visión IA en el borde
  - Aparcamiento inteligente
slug: /ai_parking_slot_monitoring_demo_with_recamera_bak
sku: 100029708,102991896
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
sidebar_position: 3
last_update:
  date: 2025-12-17
  author: John Xiang
createdAt: '2025-12-31'
updatedAt: '2026-01-29'
url: https://wiki.seeedstudio.com/es/reCamera/reCamera_Basic/application/ai_parking_slot_monitoring_demo_with_recamera_bak/
---

# Demo de gestión de aparcamiento con IA usando reCamera

## Introducción

La disponibilidad de plazas de aparcamiento es un requisito común en escenarios como **aparcamientos comerciales**, **garajes residenciales**, **parques industriales** y **gestión de aparcamientos en campus**, donde los operadores y usuarios quieren entender rápidamente qué plazas están ocupadas o disponibles.

Este proyecto proporciona una demo lista para usar que se centra en las siguientes capacidades de aplicación:

- **Detección de plazas de aparcamiento**: Detecta el estado de ocupación de cada plaza de aparcamiento en el campo de visión de la cámara.
- **Antivibración / Estabilización**: Reduce el temblor visual y las fluctuaciones de detección a corto plazo para que los resultados sean más estables.
- **Conteo y resumen**: Resume automáticamente el estado actual del aparcamiento, como el número de plazas disponibles.
- **Visualización en pantalla**: Muestra los resultados de detección y el estado de las plazas directamente en la interfaz de vista previa para una verificación y demostración rápidas.


## Preparación de hardware

Para ejecutar esta demo de gestión de aparcamiento, solo se necesita **un dispositivo reCamera**.  
Se admiten todas las variantes de reCamera.

Puedes elegir **cualquier versión de reCamera** según tus necesidades de despliegue:

- reCamera 2002 Serie (Wi-Fi)
- reCamera Gimbal (Pan-Tilt)
- reCamera HQ PoE (Ethernet + PoE)

> **Nota:**  
> La versión PoE no admite Wi-Fi y debe conectarse a la misma red local a través de un switch con PoE.

<table align="center">
 <tr>
  <th>reCamera 2002 Series</th>
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
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora </font></span></strong>
      </a>
    </div>
  </td>
  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora </font></span></strong>
      </a>
    </div>
  </td>
  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora </font></span></strong>
      </a>
    </div>
  </td>
 </tr>
</table>

## Configurar la demo 
### Paso 1: Configurar reCamera

Primero, sigue la guía oficial de primeros pasos para completar la configuración básica de reCamera: [Configuración básica de reCamera](https://wiki.seeedstudio.com/es/recamera_getting_started/)

Después de completar la configuración inicial, asegúrate de que el dispositivo esté encendido y correctamente conectado a la red.  
Luego, accede a la interfaz de gestión de reCamera y entra en la página del **flujo de trabajo de Node-RED**.

Si puedes acceder correctamente a la interfaz del flujo de trabajo de Node-RED como se muestra a continuación, significa que la configuración se ha completado correctamente.

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload5.png" />
</div>

### Paso 2: Descargar y subir el archivo de flujo de trabajo

Esta demo proporciona un **archivo de flujo de trabajo preconfigurado**, en el que todos los nodos y conexiones necesarios ya han sido configurados.  
**No** necesitas crear ni configurar manualmente ningún nodo de Node-RED.

Descarga el archivo de flujo de trabajo desde nuestra **plataforma SenseCraft AI** y luego impórtalo directamente en reCamera. Para el tutorial de SenseCraft AI, consulta el enlace [Access SenseCraft AI reCamera Dashboards](https://wiki.seeedstudio.com/es/recamera_getting_started/#access-recamera-preview-dashboard).  

Después de importar el flujo de trabajo:

- Todos los nodos de detección, visualización y procesamiento de datos estarán listos para usar.
- No se requiere configuración adicional de parámetros.
- La demo se puede iniciar inmediatamente después del despliegue.

Una vez que el flujo de trabajo se haya subido y desplegado correctamente, reCamera comenzará automáticamente a ejecutar en segundo plano la demo de monitoreo de plazas de aparcamiento. Este flujo de trabajo está diseñado como una **tubería de monitoreo de plazas de aparcamiento de extremo a extremo**, que se ejecuta completamente en reCamera. La lógica de alto nivel es la siguiente:

1. **Entrada de vídeo**  
   La cámara captura continuamente fotogramas de vídeo y los envía al nodo de inferencia de IA.

2. **Detección con IA**  
   El modelo de detección identifica objetos relacionados con el aparcamiento y genera cajas delimitadoras con etiquetas de clase (`free` / `car`) y puntuaciones de confianza.

3. **Asociación de plazas y estabilización**  
   - Las cajas detectadas se emparejan entre fotogramas usando **IoU (Intersection over Union)**.
   - Cada plaza entra en un *estado estable* solo después de ser detectada de forma consistente durante un número fijo de fotogramas.
   - Se toleran pérdidas a corto plazo para evitar cambios de estado falsos.

4. **Gestión del pool de plazas**  
   - Cada plaza de aparcamiento se almacena en un pool de plazas con su posición, historial de estados y contador de estabilidad.
   - Las plazas que desaparecen durante demasiado tiempo se eliminan automáticamente.

5. **Capa de visualización**  
   - Las cajas delimitadoras, marcadores centrales, etiquetas y paneles de estado se renderizan como superposiciones SVG.
   - La visualización se actualiza en tiempo real a través de WebSocket.

6. **Ejecución automática en segundo plano**  
   Una vez desplegado, el flujo de trabajo se ejecuta automáticamente en segundo plano sin activación manual.

Los resultados de la detección se ilustran a continuación:

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
</div]
<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/test5.jpg" />
</div>
<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/test6.jpg" />
</div>


A partir de los resultados mostrados, puedes observar los siguientes elementos:

- **Cajas delimitadoras**  
  Cada plaza de aparcamiento se asocia con una región detectada. El sistema clasifica cada región como `free` o `car` según la salida del modelo de IA.

- **Marcador central (círculo)**  
  Se dibuja un círculo en el centro de cada plaza de aparcamiento *estable*.  
  - El **círculo verde** indica una plaza libre  
  - El **círculo rojo** indica una plaza ocupada  

- **Etiquetas de plazas y coordenadas**  
  Cada plaza se etiqueta (por ejemplo, `Slot1`, `Slot2`, `Slot3`) junto con sus coordenadas centrales `(x, y)`.  
  Estas etiquetas se asignan a partir de la lista de nombres de plazas que proporcionas a través de Node-RED.

- **Panel de estado (esquina superior izquierda)**  
  El panel superpuesto resume el estado general:
  - **Plazas monitorizadas**: Todas las plazas que se están rastreando actualmente
  - **Plazas libres**: Plazas que se confirman como libres tras la validación en múltiples fotogramas

El sistema utiliza un mecanismo de estabilización multi-fotograma para evitar resultados parpadeantes causados por oclusiones temporales, cambios de iluminación o ruido en la detección.
:::note
La lógica actual de detección de plazas de aparcamiento está diseñada específicamente para **tres plazas de aparcamiento adyacentes dispuestas lado a lado**. En esta demo, **reCamera se instala frente a las plazas de aparcamiento**, mirando directamente a los vehículos, en lugar de usar una vista cenital (vista de pájaro).  

Como resultado, la asociación de plazas, el posicionamiento del punto central y la lógica de estabilidad están optimizados para una **perspectiva frontal**. Si planeas usar una cámara cenital u otra disposición de aparcamiento, es posible que sea necesario ajustar en consecuencia la asignación de plazas y la lógica de detección.
:::


## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Si necesitas orientación sobre objetivos de personalización específicos o quieres ampliar aún más el flujo de trabajo, no dudes en ponerte en contacto. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
