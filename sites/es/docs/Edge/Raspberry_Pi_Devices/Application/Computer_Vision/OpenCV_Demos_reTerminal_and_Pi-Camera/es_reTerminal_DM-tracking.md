---
description: Seguimiento de objetos con reTerminal y cámara Pi con OpenCV
title: Seguimiento de objetos con reTerminal y cámara Pi con OpenCV
keywords:
  - Edge
  - reTerminal 
  - piCamera
  - OpenCV
  - Object Tracking
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal_DM_Face-tracking
last_update:
  date: 11/7/2023
  author: Kasun Thushara
---

## Una Introducción

El seguimiento de objetos es el proceso de localizar consistentemente un objeto específico a través de fotogramas consecutivos en un video. En el ámbito de los rastreadores de objetos individuales, el fotograma inicial sirve como referencia, con el objeto objetivo marcado por un rectángulo delimitador. Los fotogramas subsiguientes luego emplean algoritmos de seguimiento para seguir y rastrear el movimiento del objeto. Típicamente, estos rastreadores se utilizan junto con detectores de objetos en aplicaciones del mundo real, combinando las fortalezas de ambas tecnologías para mejorar la precisión y eficiencia.

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/facetrack.gif" /></center>

## Comenzando

Antes de iniciar este proyecto, es posible que necesites preparar tu hardware y software con anticipación como se describe aquí.

### Preparación del hardware

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reTerminal</th>
      <th class="table-trnobg">PiCam</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/reterminal.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/picam2.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html?queryID=26220f25bcce77bc420c9c03059787c0&objectID=4904&indexName=bazaar_retailer_products" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
          </a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/reTerminal-piCam/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprender Más</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

### Preparación del Software

Recomendamos instalar la versión **Bullesye** o **Bookworm** del SO Raspberry Pi de 64 bits desde su sitio web oficial. Si prefieres instalar un nuevo SO Raspbian, por favor sigue los pasos descritos en esta [**guía**](https://wiki.seeedstudio.com/es/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc).

:::note
Recomendamos encarecidamente revisar nuestro tutorial anterior sobre [**Primeros pasos con OpenCV**](https://wiki.seeedstudio.com/es/reTerminal_DM_opencv/), ya que este tutorial sirve como una continuación en nuestra serie.
:::

## Seguimiento vs. Detección

En wikis anteriores, cubrimos la [**detección de rostros**](https://wiki.seeedstudio.com/es/reTerminal_DM_Face_detection/) y [**detección de colores**](https://wiki.seeedstudio.com/es/reTerminal_DM_Color_detection/), pero notamos su naturaleza intermitente. Aquí hay una comparación rápida:

1. **Ventaja de Velocidad:**
El seguimiento es más rápido que la detección. Al aprovechar los datos de fotogramas anteriores, los algoritmos de seguimiento predicen las ubicaciones de objetos, mientras que los algoritmos de detección a menudo comienzan desde cero en cada fotograma.
2. **Manejo de Fallos:**
Si un detector de rostros falla debido a oclusión, los algoritmos de seguimiento sobresalen. Pueden manejar obstrucción parcial, ofreciendo rendimiento robusto cuando la detección se queda corta.
3. **Persistencia de Identidad:**
La detección de objetos proporciona rectángulos de objetos detectados pero carece de persistencia de identidad. El seguimiento sobresale en mantener identidad de objeto consistente a través de fotogramas, crucial para muchas aplicaciones del mundo real.

## ¿Cuáles son los algoritmos en el dominio de Seguimiento?

Aquí hay algunos algoritmos principales de seguimiento de objetos con sus pros y contras

**BOOSTING**

- Pros: Simple y en tiempo real. Funciona bien con movimiento consistente.
- Contras: Lucha con patrones de movimiento complejos y oclusiones.
- Velocidad: Rápida.
- Precisión: Moderada.

**MIL (Multiple Instance Learning)**

- Pros: Efectivo en manejar oclusiones y cambios en la apariencia del objeto.
- Contras: Puede ser sensible al ruido y desorden de fondo.
- Velocidad: Moderada.
- Precisión: Buena.

**KCF (Kernelized Correlation Filter)**

- Pros: Rendimiento de alta velocidad. Robusto contra variaciones de escala.
- Contras: Sensible a escenarios fuera de vista.
- Velocidad: Rápida.
- Precisión: Moderada a Alta.

**TLD (Tracking, Learning, and Detection)**

- Pros: Auto-actualizante y capaz de re-detectar objetos perdidos.
- Contras: Propenso a deriva y puede tener dificultades con movimiento rápido.
- Velocidad: Moderada.
- Precisión: Moderada.

**MEDIANFLOW**

- Pros: Robusto en manejar cambios de movimiento abruptos y oclusiones.
- Contras: Puede luchar con cambios significativos en la apariencia del objeto.
- Velocidad: Rápida.
- Precisión: Moderada.

**MOSSE (Minimum Output Sum of Squared Error)**

- Pros: Extremadamente rápido y adecuado para aplicaciones en tiempo real.
- Contras: Robustez limitada bajo condiciones desafiantes.
- Velocidad: Muy Rápida.
- Precisión: Moderada.

**CSRT (Channel and Spatial Reliability Tracker)**

- Pros: Alta precisión y robustez contra escenarios desafiantes.
- Contras: Computacionalmente más costoso.
- Velocidad: Moderada.
- Precisión: Alta.

## Ejecutemos el código

Asegúrate de que estás en la carpeta correcta. Si no

 ```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam

 ```

Entonces o incluso puedes usar el IDE Thonny para ejecutar el script de Python.

 ```sh
python Tracking.py
 ```

El script de Python anterior está diseñado para rastrear rostros. El siguiente fragmento de código maneja el escenario donde el rastreo falla, indicando al sistema que inicie un nuevo proceso de detección y viceversa.

 ```sh
python DetectandTrack.py
 ```

## Soporte técnico

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
