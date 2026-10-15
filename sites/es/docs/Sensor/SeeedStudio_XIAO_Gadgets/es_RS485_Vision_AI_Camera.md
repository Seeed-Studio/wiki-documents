---
description: Introducción a RS485 Vision AI Camera
title: RS485 Vision AI Camera
keywords:
  - RS485 Vision
  - Camera
image: https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/top.webp
slug: /getting_started_with_rs485_vision_ai_cam
sku: 110992084
sidebar_position: 4
last_update:
  date: 12/26/2024
  author: Jason
createdAt: '2025-01-03'
updatedAt: '2026-05-07'
url: https://wiki.seeedstudio.com/es/getting_started_with_rs485_vision_ai_cam/
---


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/top.jpg" style={{width:800, height:'auto'}}/></div>

## Descripción general del software compatible

- [**Inicio sin código con SenseCraft AI**](#jump1)
  - [¿Qué es SenseCraft AI?](#jump2)
  - [Primeros pasos con SenseCraft AI Model Assistant](#jump3)
- [**Programar en Arduino conectando con la placa Seeed Studio XIAO**](#jump4)
  - [Introducción a la biblioteca de Arduino](#jump5)
  - [Primeros pasos con Seeed Studio XIAO](#jump6)

## Descripción general del hardware

### Introducción

La cámara Seeed Studio RS485 Vision AI es un dispositivo inteligente que combina un MCU ESP32-C3 (Seeed Studio XIAO) con un procesador Himax WiseEye2 HX6538, que incorpora un Arm Cortex-M55 de doble núcleo y un procesador neuronal Ethos-U55 integrado. Esta cámara avanzada ofrece reconocimiento de IA de alto rendimiento a una resolución de 480×480 y 10 FPS, manteniendo un bajo consumo de energía gracias a opciones flexibles para transmitir los resultados de la inferencia. Con su interfaz estándar Modbus RS485, se integra perfectamente en sistemas industriales y admite conectividad LoRaWAN y 4G a través de SenseCAP DTU u otros dispositivos DTU RS485 estándar. Protegida por una carcasa con clasificación IP66, soporta condiciones ambientales adversas, lo que la hace ideal tanto para aplicaciones en interiores como en exteriores. La cámara destaca en diversas tareas de visión por computadora, como conteo de personas, detección de objetos y clasificación. Los usuarios pueden desplegar modelos a partir de más de 300 modelos preentrenados o entrenar modelos personalizados en la plataforma sin código SenseCraft AI, mientras que también se admiten modelos de IA en los frameworks TensorFlow y PyTorch. Las preocupaciones de privacidad se abordan mediante su diseño para transmitir solo los resultados de la inferencia, con transmisión opcional de fotogramas clave por Wi‑Fi cuando sea necesario.

### Preparación del equipo

<div class="table-center">
<table align="center">
    <tr>
        <th>RS485 Vision AI Camera </th>
    </tr>
    <tr>
    <td><div align="center"><img width ={550} src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/shop.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/RS485-Vision-AI-Camera-p-6346.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

### Características

- Potente capacidad de procesamiento de IA visual: inferencia local de hasta 480*480 10FPS con el procesador WiseEye2 HX6538 que incorpora Arm Cortex-M55 de doble núcleo y unidad de red neuronal Arm Ethos-U55 integrada.

- Computación en el borde para alta seguridad de datos: inferencia de imágenes local, solo se envía el resultado final, adecuada para aplicaciones que requieren transmisión de datos limitada y alta privacidad de datos.  

- Modelos de IA multifuncionales: se entrega con 3 modelos integrados de detección de personas, conteo de personas y lectura de medidores, y también es fácil desplegar modelos de IA públicos o entrenar modelos de IA personalizados en SenseCraft AI con unos pocos clics. Compatible con los frameworks TensorFlow y PyTorch.

- Múltiples protocolos de transmisión: admite la transmisión de resultados de inferencia mediante el protocolo estándar RS485; conéctese con SenseCAP S2100/ 4G Sensor Hub DTU para obtener los resultados a través de LoRaWAN o 4G. También admite la transmisión de fotogramas clave por Wi‑Fi.

- Resistencia al polvo y al agua: la protección con clasificación IP66 garantiza un despliegue estable a largo plazo en entornos interiores y exteriores.

- Gestión de modelos mediante la app SenseCraft: configura y cambia entre modelos de IA preinstalados con solo unos toques. Ajusta fácilmente los umbrales de confianza del modelo para optimizar el rendimiento según tu caso de uso específico.

### Especificaciones

<table align="center">
 <tr>
     <th>Modelo de producto</th>
        <th>S-VA-01B</th>
 </tr>
 <tr>
     <th>Corriente de entrada</th>
        <th>1A</th>
 </tr>
 <tr>
     <th>Tensión de entrada</th>
        <th>5V/12V</th>
 </tr>
 <tr>
     <th>Microcontrolador</th>
        <td align="center">Vision AI: <strong>Himax-6538</strong> <br></br> Red: <strong>XIAO ESP32C3</strong> <br></br></td>
 </tr>
    <tr>
        <th>Cámara</th>
        <td align="center">
            Tamaño de lente: <strong>“1/4"</strong><br />
            Distancia focal: <strong>3.4 mm (ajustable)</strong><br />
            Resolución: <strong>2592 × 1944 píxeles</strong><br />
            Tamaño de píxel: <strong>1.4 µm × 1.4 µm</strong><br />
            Frecuencia de cuadro máxima: <strong>1080p @ 30 fps, 720p @ 60 fps</strong><br />
            FOV: <strong>62°</strong>
        </td>
    </tr>
    <tr>
     <th>Ejecución e inferencia de modelos</th>
        <th>480 * 480  >10 fps</th>
    </tr>
    <tr>
        <th>Modbus RS485</th>
        <td align="center">
            Chip:<strong>TP8485E, transceptor half-duplex
            Protocolo RS485 Modbus-RTU</strong><br />
            Conexión de terminal: <strong>Conexión de terminal: bloque de terminales de 3 pines para cable de señal y bloque de terminales de 3 pines para alimentación</strong><br />
            Alcance de transmisión:<strong>Alcance de transmisión: hasta 1200 metros (varía según el entorno)</strong><br />
            Velocidad de transmisión: <strong>Velocidad de transmisión: 250k bps (máx.)</strong>
        </td>
    </tr>
    <tr>
        <th>Compatibilidad</th>
        <td align="center">
            Modbus RS485 DTU<br />
            SenseCAP Sensor Hub 4G DTU<br />
            SenseCAP S2100 LoRaWAN DTU
        </td>
    </tr>
 <tr>
     <th>Memoria</th>
        <th>Tarjeta MicroSD de 8GB (Clase 10)</th>
 </tr>
 <tr>
     <th>Grado de protección IP</th>
        <th>IP66</th>
 </tr>
 <tr>
     <th>Temperatura de funcionamiento</th>
        <th>0 - 70 °C</th>
 </tr>
 <tr>
     <th>Humedad de funcionamiento</th>
        <th>0 - 100 %RH (sin condensación)</th>
 </tr>
 <tr>
     <th>Tamaño del dispositivo</th>
        <th>180mm*75mm*70mm</th>
 </tr>
 <tr>
     <th>Peso del dispositivo</th>
        <th>439g</th>
 </tr>
 <tr>
     <th>Longitud del cable</th>
        <th>2 metros</th>
 </tr>
</table>

### Diagrama de pines

Según la imagen siguiente, los diferentes colores de los cables del A1102 corresponden a diferentes funciones de pines. Las funciones específicas de los pines son las siguientes:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/pin.png" style={{width:600, height:'auto'}}/></div>

Encuentra la función que corresponde al datalogger para conectar

:::tip
Si utilizas 5v, no necesitas utilizar 12v; 12v y 5v elige una de las fuentes de alimentación, ¡recuerda no usarlas juntas!
:::

## Descripción general del software

### Despliegue de modelos de IA de fábrica

#### Flujo de trabajo del software

**Paso 1 :** Después de iniciar sesión en la app, haz clic en “User” en el cuadro de abajo y luego busca los ajustes del dispositivo conectado por Bluetooth.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/30.png" style={{width:400, height:'auto'}}/></div>

**Paso 2 :** Comprueba el dispositivo “RS485 Vision AI Camera”.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/31.png" style={{width:400, height:'auto'}}/></div>

**Paso 3 :** Escanea después de encender la RS485 Vision AI Camera

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/40.jpg" style={{width:400, height:'auto'}}/></div>

**Paso 4 :** Haz clic en “AI Model” para ver el modelo de IA configurado de fábrica y desplegar el tipo que desees.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/42.jpg" style={{width:400, height:'auto'}}/></div>

**Paso 5 :** Si necesitas vincular el “DataLogger”, introduce el número de SN correspondiente; si no configuras la “confidence” que necesitas, haz clic en “Preview” para ir al sensor de imagen y capturar la imagen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/33.png" style={{width:400, height:'auto'}}/></div>

**Paso 6 :** Mostrar imagen

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/41.jpg" style={{width:400, height:'auto'}}/></div>

¡Felicidades por usar con éxito el dispositivo RS485 Vision AI V2 en la app SenseCraft!🎉

### Modelos de IA personalizados con SenseCraft AI

Si quieres personalizar tu modelo, te guiaremos sobre cómo usar SenseCraft AI para desplegar tu modelo de aprendizaje automático favorito en el dispositivo RS485 Vision AI Camera y así personalizar funciones y aplicaciones.

#### Flujo de trabajo del hardware

Conecta el puerto Type-C al Vision AI V2 a tu ordenador según las siguientes instrucciones

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/1.gif" style={{width:700, height:'auto'}}/></div>

#### Flujo de trabajo del software

**Step 1 .** Open [SenseCraft AI](https://sensecraft.seeed.cc/ai) and navigate to **`Models`** > **`Model Library`**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/1.png" style={{width:700, height:'auto'}}/></div>

**Paso 2 .** Busca el **“SenseCAP A1102”** en la sección Supported Devices. Aquí necesitas encontrar el modelo de dispositivo que corresponde al modelo adaptado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/2.png" style={{width:700, height:'auto'}}/></div>

**Paso 3 .** Aquí elegimos el modelo de **“Face Detection”** en la página 31 como demo de ejemplo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/3.png" style={{width:700, height:'auto'}}/></div>

**Paso 4 .** Una vez dentro del modelo, busca la opción **“Deploy Model”**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/4.png" style={{width:700, height:'auto'}}/></div>

**Paso 5 .** Busca Connect Device y la opción correspondiente **“SenseCAP A1102”**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/5.png" style={{width:700, height:'auto'}}/></div>

**Paso 6.** Una vez dentro, conecta tu dispositivo A1102 y encuentra el puerto serie correspondiente para conectarte.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/6.png" style={{width:700, height:'auto'}}/></div>

**Paso 7.** Finalmente podemos ver el modelo grabado y mostrar los resultados correspondientes

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/7.png" style={{width:700, height:'auto'}}/></div>

`Confidence:`
    - La confianza se refiere al nivel de certeza o probabilidad asignado por un modelo a sus predicciones.

`IoU:`
    - IoU se utiliza para evaluar la precisión de los cuadros delimitadores predichos en comparación con los cuadros delimitadores reales.

En este punto, hemos implementado con éxito el modelo que necesitamos en el dispositivo RS485 Vision AI Camera. A continuación, procedemos al siguiente paso de la operación.

### Lectura de datos con XIAO

Para leer datos de modelos grabados mediante XIAO, por favor dirígete a este [wiki](https://wiki.seeedstudio.com/es/grove_vision_ai_v2_software_support/), que explica en detalle cómo leer datos de Vision AI V2 a través de XIAO.

### Transmisión de datos RS485

#### Esquema de conexión

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/Camera_Connecting.png" style={{width:900, height:'auto'}}/></div>

:::tip
Si utilizas 5 V, no necesitas utilizar 12 V; 12 V y 5 V son opciones alternativas de alimentación, recuerda no usarlas juntas.
:::

Una vez que te hayas conectado correctamente según el diagrama anterior, haz clic en este enlace de [wiki](https://wiki.seeedstudio.com/es/grove_vision_ai_v2_rs485/) para obtener una explicación más detallada de cómo usar el código para controlar la cámara.

## Recursos

- 📄 **[PDF]** [Esquemático de la Seeed Studio RS485 Vision AI Camera](https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/SenseCAP_RS485_Vision_AI_Sensor_SCH.pdf)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
