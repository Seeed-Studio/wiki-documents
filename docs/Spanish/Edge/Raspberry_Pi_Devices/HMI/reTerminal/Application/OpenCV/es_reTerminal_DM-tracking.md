---
description: Seguimiento de objetos con reTerminal y cámara Pi usando OpenCV
title: Seguimiento de objetos con reTerminal y cámara Pi usando OpenCV
keywords:
  - Edge
  - reTerminal 
  - piCamera
  - OpenCV
  - Object Tracking
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminal_DM_Face-tracking
last_update:
  date: 04/03/2025
  author: Erick González
---

## Introducción

El seguimiento de objetos (Object tracking) consiste en ubicar de forma coherente un objeto específico a través de fotogramas consecutivos en un video. En el ámbito de los rastreadores de objeto único (single object trackers), el primer fotograma sirve como referencia, marcando el objeto de interés con un rectángulo delimitador (bounding box). Posteriormente, los fotogramas siguientes utilizan algoritmos de seguimiento para seguir y trazar el movimiento del objeto. Por lo general, estos rastreadores se utilizan junto con detectores de objetos en aplicaciones del mundo real, combinando las fortalezas de ambas tecnologías para lograr mayor precisión y eficiencia.

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/facetrack.gif" /></center>

## Comenzando

Antes de iniciar este proyecto, podría ser necesario preparar tu hardware y software como se describe a continuación.

### Preparación de Hardware

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Cómpralo ahora 🖱️</font></span></strong>
          </a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/reTerminal-piCam/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Más información</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

### Preparación de Software

Recomendamos instalar la versión **Bullseye** o **Bookworm** del sistema operativo Raspberry Pi de 64 bits desde su sitio web oficial. Si prefieres instalar un nuevo sistema operativo Raspbian, sigue los pasos descritos en esta [**guía**](https://wiki.seeedstudio.com/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc).

:::note

Recomendamos encarecidamente revisar nuestro tutorial anterior sobre [**Introducción a OpenCV**](https://wiki.seeedstudio.com/reTerminal_DM_opencv/), ya que este tutorial es una continuación de nuestra serie.

:::

## Seguimiento vs. Detección

En wikis anteriores, cubrimos la [**detección de rostros**](https://wiki.seeedstudio.com/reTerminal_DM_Face_detection/) y la [**detección de color**](https://wiki.seeedstudio.com/reTerminal_DM_Color_detection/), pero notamos su naturaleza intermitente. Aquí tienes una comparación rápida:

1. **Ventaja de Velocidad:**
   El seguimiento (tracking) es más rápido que la detección. Al aprovechar los datos del fotograma anterior, los algoritmos de seguimiento predicen las ubicaciones del objeto. Por su parte, los algoritmos de detección a menudo comienzan desde cero en cada fotograma.
2. **Manejo de Fallos:**
   Si un detector de rostros falla debido a oclusión, los algoritmos de seguimiento ofrecen ventajas. Pueden gestionar obstrucciones parciales y brindar un rendimiento sólido cuando la detección no es suficiente.
3. **Persistencia de Identidad:**
   La detección de objetos proporciona únicamente rectángulos de los objetos detectados pero carece de persistencia de identidad. El seguimiento sobresale al mantener una identidad de objeto consistente en los fotogramas, algo crucial en muchas aplicaciones del mundo real.

## ¿Cuáles son los algoritmos en el ámbito del seguimiento?

A continuación, algunos de los algoritmos más importantes de seguimiento de objetos, con sus pros y contras:

**BOOSTING**
- Pros: Sencillo y en tiempo real. Buen rendimiento con movimiento uniforme.
- Contras: Dificultades con movimientos complejos y oclusiones.
- Velocidad: Rápida.
- Precisión: Moderada.

**MIL (Multiple Instance Learning)**
- Pros: Eficaz ante oclusiones y cambios en la apariencia del objeto.
- Contras: Puede ser sensible al ruido y al desorden del fondo.
- Velocidad: Moderada.
- Precisión: Buena.

**KCF (Kernelized Correlation Filter)**
- Pros: Alto rendimiento en velocidad. Resistente ante variaciones de escala.
- Contras: Sensible a escenarios fuera de visión (out-of-view).
- Velocidad: Rápida.
- Precisión: De Moderada a Alta.

**TLD (Tracking, Learning, and Detection)**
- Pros: Se autoactualiza y puede redetectar objetos perdidos.
- Contras: Propenso a errores de deriva (drift) y dificultades con movimiento rápido.
- Velocidad: Moderada.
- Precisión: Moderada.

**MEDIANFLOW**
- Pros: Robusto ante cambios bruscos de movimiento y oclusiones.
- Contras: Puede tener problemas con cambios significativos en la apariencia del objeto.
- Velocidad: Rápida.
- Precisión: Moderada.

**MOSSE (Minimum Output Sum of Squared Error)**
- Pros: Extremadamente rápido y adecuado para aplicaciones en tiempo real.
- Contras: Robusteza limitada en condiciones desafiantes.
- Velocidad: Muy rápida.
- Precisión: Moderada.

**CSRT (Channel and Spatial Reliability Tracker)**
- Pros: Alta precisión y robustez incluso en escenarios complejos.
- Contras: Más costoso computacionalmente.
- Velocidad: Moderada.
- Precisión: Alta.


## Ejecutar el código

Asegúrate de estar en la carpeta correcta. Si no:

```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam

```

Luego, o si lo prefieres, puedes usar Thonny IDE para ejecutar el script de Python:

```sh
python Tracking.py
```

El script de Python anterior está diseñado para rastrear rostros. El siguiente fragmento de código maneja el escenario en el que el seguimiento falla, haciendo que el sistema inicie un nuevo proceso de detección y viceversa.

```sh
python DetectandTrack.py
```

## Soporte técnico

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ponemos a tu disposición varios canales de comunicación para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
