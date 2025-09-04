---
description: Comenzando con la Cámara Vision AI RS485
title: Cámara Vision AI RS485
keywords:
- RS485 Vision
- Camera
image: https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/top.webp
slug: /es/getting_started_with_rs485_vision_ai_cam
sidebar_position: 4
last_update:
  date: 12/26/2024
  author: Jason
---


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/top.jpg" style={{width:800, height:'auto'}}/></div>

## Resumen del Software Soportado

- [**Comenzando sin código con SenseCraft AI**](#jump1)
  - [¿Qué es SenseCraft AI?](#jump2)
  - [Comenzando con el Asistente de Modelos SenseCraft AI](#jump3)
- [**Programar en Arduino conectando con la Placa Seeed Studio XIAO**](#jump4)
  - [Introducción a la Librería Arduino](#jump5)
  - [Comenzando con Seeed Studio XIAO](#jump6)

## Resumen del Hardware

### Introducción

La Cámara Vision AI RS485 de Seeed Studio es un dispositivo inteligente que combina un MCU ESP32-C3 (Seeed Studio XIAO) con un procesador Himax WiseEye2 HX6538, que cuenta con Arm Cortex-M55 de doble núcleo y un procesador neural Ethos-U55 integrado. Esta cámara avanzada ofrece reconocimiento AI de alto rendimiento a resolución 480×480 y 10 FPS, mientras mantiene bajo consumo de energía a través de opciones flexibles para transmitir resultados de inferencia. Con su interfaz estándar Modbus RS485, se integra perfectamente con sistemas industriales y soporta conectividad tanto LoRaWAN como 4G a través de DTUs SenseCAP u otros dispositivos DTU RS485 estándar. Protegida por una carcasa con clasificación IP66, resiste condiciones ambientales adversas, haciéndola ideal para aplicaciones tanto interiores como exteriores. La cámara sobresale en varias tareas de visión por computadora incluyendo conteo de personas, detección de objetos y clasificación. Los usuarios pueden desplegar modelos de más de 300 modelos pre-entrenados o entrenar modelos personalizados en la plataforma sin código SenseCraft AI, mientras que se soportan modelos AI en frameworks TensorFlow y PyTorch. Las preocupaciones de privacidad se abordan a través de su diseño para transmitir solo resultados de inferencia, con transmisión opcional de fotogramas clave Wi-Fi cuando sea necesario.

### Preparación del Equipo

<div class="table-center">
<table align="center">
    <tr>
        <th>Cámara Vision AI RS485 </th>
    </tr>
    <tr>
    <td><div align="center"><img width ={550} src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/shop.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/RS485-Vision-AI-Camera-p-6346.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

### Características

- Potente Capacidad de Procesamiento de IA Visual: inferencia local de hasta 480*480 10FPS con el procesador WiseEye2 HX6538 que cuenta con dual-core Arm Cortex-M55 y unidad de red neuronal Arm Ethos-U55 integrada.

- Computación en el Borde para Alta Seguridad de Datos: inferencia de imagen local, envía solo el resultado final, adecuado para aplicaciones que requieren transmisión limitada de datos y alta privacidad de datos.

- Modelos de IA Multifuncionales: viene con 3 modelos integrados de detección humana, conteo de personas y lectura de medidores, y también es fácil implementar modelos de IA públicos o entrenar modelos de IA personalizados en SenseCraft AI con unos pocos clics. Compatible con frameworks TensorFlow y PyTorch.

- Múltiples Protocolos de Transmisión: Compatible con la transmisión de resultados de inferencia a través del protocolo estándar RS485; conecta con SenseCAP S2100/ 4G Sensor Hub DTU para obtener los resultados vía LoRaWAN o 4G. También compatible con la transmisión de fotogramas clave vía Wi-Fi.

- Resistencia al Polvo y Agua: protección con clasificación IP66 garantiza un despliegue estable a largo plazo en entornos interiores y exteriores.

- Gestión de Modelos vía Aplicación SenseCraft: Configura y cambia entre modelos de IA preinstalados con solo unos toques. Ajusta fácilmente los Umbrales de Confianza del Modelo para optimizar el rendimiento para tu caso de uso específico.

### Especificaciones

<table align="center">
 <tr>
     <th>Modelo del Producto</th>
        <th>S-VA-01B</th>
 </tr>
 <tr>
     <th>Entrada de Corriente</th>
        <th>1A</th>
 </tr>
 <tr>
     <th>Entrada de Voltaje</th>
        <th>5V/12V</th>
 </tr>
 <tr>
     <th>Microcontrolador</th>
        <td align="center">IA de Visión: <strong>Himax-6538</strong> <br></br> Red: <strong>XIAO ESP32C3</strong> <br></br></td>
 </tr>
    <tr>
        <th>Cámara</th>
        <td align="center">
            Tamaño del lente: <strong>"1/4"</strong><br />
            Distancia focal: <strong>3.4 mm (ajustable)</strong><br />
            Resolución: <strong>2592 × 1944 píxeles</strong><br />
            Tamaño del píxel: <strong>1.4 µm × 1.4 µm</strong><br />
            Velocidad de fotogramas máxima: <strong>1080p @ 30 fps, 720p @ 60 fps</strong><br />
            FOV: <strong>62°</strong>
        </td>
    </tr>
    <tr>
     <th>Ejecución e Inferencia del Modelo</th>
        <th>480 * 480  >10 fps</th> 
    </tr>
    <tr>
        <th>Modbus RS485</th>
        <td align="center">
            Chip:<strong>TP8485E, transceptor half-duplex
            Protocolo RS485 Modbus-RTU</strong><br />
            Conexión de Terminal: <strong>Conexión de Terminal: terminal de 3 pines para cable de señal y terminal de 3 pines para alimentación</strong><br />
            Rango de Transmisión:<strong>Rango de Transmisión: hasta 1200 metros (varía según el entorno)</strong><br />
            Velocidad de Transmisión: <strong>Velocidad de Transmisión: 250k bps (Máx)</strong>
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
     <th>Clasificación IP</th>
        <th>IP66</th>
 </tr>
 <tr>
     <th>Temperatura de Operación</th>
        <th>0 - 70 °C</th>
 </tr>
 <tr>
     <th>Humedad de Operación</th>
        <th>0 - 100 %RH (sin condensación)</th>
 </tr>
 <tr>
     <th>Tamaño del Dispositivo</th>
        <th>180mm*75mm*70mm</th>
 </tr>
 <tr>
     <th>Peso del Dispositivo</th>
        <th>439g</th>
 </tr>
 <tr>
     <th>Longitud del Cable</th>
        <th>2 metros</th>
 </tr>
</table>

### Diagrama de Pines

Según la imagen a continuación, los diferentes colores de cable del A1102 corresponden a diferentes funciones de pin. Las funciones específicas de los pines son las siguientes:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/pin.png" style={{width:600, height:'auto'}}/></div>

Encuentra la función que corresponde al datalogger para conectar

:::tip
Si accedes a 5v, no necesitas acceder a 12v, 12v y 5v elige uno de los suministros de voltaje, ¡recuerda no usar ambos juntos!
:::

## Descripción General del Software

### Despliegue de modelos de IA de fábrica

#### Flujo de Trabajo del Software

**Paso 1 :** Después de iniciar sesión en la aplicación, haz clic en "Usuario" en el cuadro de abajo, y luego encuentra la configuración del dispositivo conectado por Bluetooth.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/30.png" style={{width:400, height:'auto'}}/></div>

**Paso 2 :** Verifica el dispositivo "RS485 Vision AI Camera".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/31.png" style={{width:400, height:'auto'}}/></div>

**Paso 3 :** Escaneo después de encender la RS485 Vision AI Camera

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/40.jpg" style={{width:400, height:'auto'}}/></div>

**Paso 4 :** Haz clic en "AI Model" para ver el modelo de IA configurado de fábrica y despliega el tipo que desees.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/42.jpg" style={{width:400, height:'auto'}}/></div>

**Paso 5 :** Si necesitas vincular el "DataLogger", por favor ingresa el número SN correspondiente, si no configuras la "confianza" que necesitas, haz clic en "Preview", puedes ir al sensor de imagen para recopilar la imagen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/33.png" style={{width:400, height:'auto'}}/></div>

**Paso 6 :** Mostrar imagen

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/41.jpg" style={{width:400, height:'auto'}}/></div>

¡Felicidades por usar exitosamente el dispositivo RS485 Vision AI V2 en la APP SenseCraft!🎉

### Modelos de IA Personalizados con SenseCraft AI

Si quieres personalizar tu modelo, te guiaremos sobre cómo usar SenseCraft AI para desplegar tu modelo de aprendizaje automático favorito en el dispositivo RS485 Vision AI Camera para personalizar características y aplicaciones.

#### Flujo de Trabajo del Hardware

Conecta el puerto Type-C al Vision AI V2 a tu computadora según las siguientes instrucciones

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/1.gif" style={{width:700, height:'auto'}}/></div>

#### Flujo de Trabajo del Software

**Paso 1 .** Primero, Haz clic en [SenseCraftAI](https://sensecraft.seeed.cc/ai/#/home) y encuentra **"Pretrained Models"** en la barra de menú en la parte superior del sitio web de SenseCraft AI y haz clic en él.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/1.png" style={{width:700, height:'auto'}}/></div>

**Paso 2 .** Encuentra el **"SenseCAP A1102"** en la sección de Dispositivos Compatibles. Aquí necesitas encontrar el modelo de dispositivo que corresponde al modelo adaptado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/2.png" style={{width:700, height:'auto'}}/></div>

**Paso 3 .** Aquí elegimos el modelo de **"Face Detection"** en la página 31 como demo de ejemplo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/3.png" style={{width:700, height:'auto'}}/></div>

**Paso 4 .** Una vez dentro del modelo, encuentra la opción **"Deploy Model"**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/4.png" style={{width:700, height:'auto'}}/></div>

**Paso 5 .** Encuentra Connect Device y la opción correspondiente **"SenseCAP A1102"**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/5.png" style={{width:700, height:'auto'}}/></div>

**Paso 6 .** Una vez dentro, conecta tu dispositivo A1102 y encuentra el puerto serie correspondiente para conectar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/6.png" style={{width:700, height:'auto'}}/></div>

**Paso 7 .** Finalmente podemos ver el modelo grabado y mostrar los resultados correspondientes

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/7.png" style={{width:700, height:'auto'}}/></div>

`Confidence:`
    - Confidence se refiere al nivel de certeza o probabilidad asignado por un modelo a sus predicciones.

`IoU:`
    - IoU se usa para evaluar la precisión de las cajas delimitadoras predichas comparadas con las cajas delimitadoras de verdad.

En este punto, hemos desplegado exitosamente el modelo que necesitamos en el dispositivo RS485 Vision AI Camera. A continuación, procedemos al siguiente paso de la operación！

### XIAO Leyendo Datos

Para leer datos de modelos grabados a través de XIAO, por favor ve a este [wiki](https://wiki.seeedstudio.com/es/grove_vision_ai_v2_software_support/), que explica en detalle cómo leer datos del Vision AI V2 a través de XIAO.

### Transmisión de Datos RS485

#### Esquema de Conexión

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/Camera_Connecting.png" style={{width:900, height:'auto'}}/></div>

:::tip
Si accedes a 5v, no necesitas acceder a 12v, 12v y 5v elige uno de los suministros de voltaje, ¡recuerda no usar ambos juntos!
:::

Una vez que te hayas conectado exitosamente según el diagrama anterior, haz clic en este enlace [wiki](https://wiki.seeedstudio.com/es/grove_vision_ai_v2_rs485/) para una explicación más detallada de cómo usar el código para manejar el

## Recursos

- 📄 **[PDF]** [Seeed Studio RS485 Vision AI Camera Schematic](https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/SenseCAP_RS485_Vision_AI_Sensor_SCH.pdf)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
