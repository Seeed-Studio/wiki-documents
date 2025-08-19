---
description: Getting with RS485 Vision AI Camera
title: RS485 Vision AI Camera
keywords:
- RS485 Vision
- Camera
image: https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/top.webp
slug: /es/getting_started_with_rs485_vision_ai_cam
sidebar_position: 4
last_update:
  date: 07/21/2025
  author: Guillermo
---


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/top.jpg" style={{width:800, height:'auto'}}/></div>

## Resumen de Software Soportado

- [**Inicio sin código con SenseCraft AI**](#jump1)
   - [¿Qué es SenseCraft AI?](#jump2)
   - [Primeros pasos con el Asistente de Modelos SenseCraft AI](#jump3)
- [**Programación en Arduino conectando con la placa Seeed Studio XIAO**](#jump4)
   - [Introducción a la biblioteca Arduino](#jump5)
   - [Primeros pasos con Seeed Studio XIAO](#jump6)


## Resumen de Hardware

### Introducción

La Cámara AI de Visión RS485 de Seeed Studio es un dispositivo inteligente que combina un microcontrolador ESP32-C3 (Seeed Studio XIAO) con un procesador Himax WiseEye2 HX6538, que integra un Arm Cortex-M55 dual-core y un procesador neural integrado Ethos-U55. Esta avanzada cámara ofrece reconocimiento AI de alto rendimiento a una resolución de 480×480 píxeles y 10 FPS, manteniendo un bajo consumo energético mediante opciones flexibles para transmitir los resultados de inferencia. 

Con una interfaz estándar Modbus RS485, se integra fácilmente en sistemas industriales y soporta conectividad LoRaWAN y 4G mediante SenseCAP DTUs u otros dispositivos DTU RS485 estándar. Protegida con un encapsulado con certificación IP66, resiste condiciones ambientales adversas, ideal para aplicaciones interiores y exteriores. La cámara sobresale en tareas de visión computacional como conteo de personas, detección y clasificación de objetos. 

Los usuarios pueden desplegar modelos de más de 300 modelos preentrenados o entrenar modelos personalizados en la plataforma SenseCraft AI sin código. Además, soporta modelos AI en frameworks TensorFlow y PyTorch. Para proteger la privacidad, está diseñada para transmitir solo los resultados de inferencia, con opción de enviar imágenes clave vía Wi-Fi si se requiere.

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

- Potente capacidad de procesamiento AI visual: inferencia local hasta 480×480 a 10 FPS con el procesador WiseEye2 HX6538 que cuenta con Arm Cortex-M55 dual-core y Ethos-U55 integrado.
- Computación en el borde para alta seguridad de datos: inferencia de imagen local, envía solo el resultado final, ideal para aplicaciones con transmisión limitada y alta privacidad.
- Modelos AI multifuncionales: incluye 3 modelos integrados para detección humana, conteo de personas y lectura de medidores. Fácil despliegue de modelos públicos o personalizados en SenseCraft AI con pocos clics. Soporta TensorFlow y PyTorch.
- Protocolos de transmisión múltiples: soporta transmisión de resultados via protocolo RS485 estándar; conexión con SenseCAP S2100/4G Sensor Hub DTU para obtener resultados vía LoRaWAN o 4G. También soporta transmisión de imágenes clave vía Wi-Fi.
- Resistencia al polvo y agua: certificación IP66 para despliegue estable a largo plazo en interiores y exteriores.
- Gestión de modelos vía app SenseCraft: configura y cambia entre modelos AI preinstalados fácilmente. Ajusta umbrales de confianza para optimizar según tu caso de uso.

### Especificaciones

<table align="center">
	<tr>
	    <th>Modelo del producto</th>
        <th>S-VA-01B</th>
	</tr>
	<tr>
	    <th>Corriente de entrada</th>
        <th>1A</th>
	</tr>
	<tr>
	    <th>Voltaje de entrada</th>
        <th>5V/12V</th>
	</tr>
	<tr>
	    <th>Microcontrolador</th>
        <td align="center">
          Visión AI: <strong>Himax-6538</strong><br/>
          Red: <strong>XIAO ESP32C3</strong><br/>
        </td>
	</tr>
    <tr>
        <th>Cámara</th>
        <td align="center">
            Tamaño lente: <strong>“1/4"</strong><br />
            Longitud focal: <strong>3.4 mm (ajustable)</strong><br />
            Resolución: <strong>2592 × 1944 píxeles</strong><br />
            Tamaño de píxel: <strong>1.4 µm × 1.4 µm</strong><br />
            Velocidad máxima de cuadros: <strong>1080p @ 30 fps, 720p @ 60 fps</strong><br />
            Ángulo de visión (FOV): <strong>62°</strong>
        </td>
    </tr>
    <tr>
	    <th>Ejecuta modelos e inferencias</th>
        <th>480 × 480 > 10 fps</th>	
    </tr>
    <tr>
        <th>Modbus RS485</th>
        <td align="center">
            Chip: <strong>TP8485E, transceptor half-duplex</strong><br />
            Protocolo: <strong>RS485 Modbus-RTU</strong><br />
            Conexión terminal: <strong>Terminal de 3 pines para señal y 3 pines para alimentación</strong><br />
            Alcance de transmisión: <strong>hasta 1200 metros (varía según ambiente)</strong><br />
            Velocidad de transmisión: <strong>250k bps (máximo)</strong>
        </td>
    </tr>
    <tr>
        <th>Compatibilidad</th>
        <td align="center">
            DTU Modbus RS485<br />
            SenseCAP Sensor Hub 4G DTU<br />
            SenseCAP S2100 LoRaWAN DTU
        </td>
    </tr>
	<tr>
	    <th>Memoria</th>
        <th>Tarjeta MicroSD 8GB (Clase 10)</th>
	</tr>
	<tr>
	    <th>Certificación IP</th>
        <th>IP66</th>
	</tr>
	<tr>
	    <th>Temperatura de operación</th>
        <th>0 - 70 °C</th>
	</tr>
	<tr>
	    <th>Humedad de operación</th>
        <th>0 - 100 %RH (sin condensación)</th>
	</tr>
	<tr>
	    <th>Tamaño del dispositivo</th>
        <th>180 mm × 75 mm × 70 mm</th>
	</tr>
	<tr>
	    <th>Peso del dispositivo</th>
        <th>439 g</th>
	</tr>
	<tr>
	    <th>Longitud del cable</th>
        <th>2 metros</th>
	</tr>
</table>

### Diagrama de pines

Según la imagen siguiente, los diferentes colores de cable del A1102 corresponden a diferentes funciones de pin. Las funciones específicas son las siguientes:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/pin.png" style={{width:600, height:'auto'}}/></div>

Encuentra la función que corresponde al registrador de datos para conectar.

:::tip
Si usas alimentación de 5V, no necesitas conectar 12V; 12V y 5V son opciones alternativas, ¡no uses ambas al mismo tiempo!
:::

## Resumen de Software

### Despliegue de modelos AI de fábrica

#### Flujo de software

**Paso 1:** Después de iniciar sesión en la app, haz clic en “Usuario” en el recuadro inferior y luego busca la configuración del dispositivo conectado vía Bluetooth.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/30.png" style={{width:400, height:'auto'}}/></div>

**Paso 2:** Verifica el dispositivo “RS485 Vision AI Camera”.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/31.png" style={{width:400, height:'auto'}}/></div>

**Paso 3:** Escanea tras encender la Cámara AI de Visión RS485.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/40.jpg" style={{width:400, height:'auto'}}/></div>

**Paso 4:** Haz clic en “AI Model” para ver los modelos AI preinstalados y desplegar el que desees.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/42.jpg" style={{width:400, height:'auto'}}/></div>

**Paso 5:** Si necesitas enlazar un “DataLogger”, ingresa el número de serie correspondiente. Si no deseas ajustar la “confianza”, haz clic en “Preview” para ver imágenes capturadas por el sensor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/33.png" style={{width:400, height:'auto'}}/></div>

**Paso 6:** Visualiza la imagen capturada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/41.jpg" style={{width:400, height:'auto'}}/></div>

¡Felicidades por usar exitosamente el dispositivo RS485 Vision AI V2 en la app SenseCraft! 🎉

### Modelos AI personalizados con SenseCraft AI

Si deseas personalizar tu modelo, aquí te guiamos para usar SenseCraft AI y desplegar tu modelo favorito de machine learning en la cámara RS485 Vision AI para aplicaciones personalizadas.

#### Flujo de hardware

Conecta el puerto Type-C de Vision AI V2 a tu computadora según la imagen:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/1.gif" style={{width:700, height:'auto'}}/></div>

#### Flujo de software

**Paso 1:** Entra a [SenseCraftAI](https://sensecraft.seeed.cc/ai/#/home) y en la barra de menú superior selecciona **“Pretrained Models”**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/1.png" style={{width:700, height:'auto'}}/></div>

**Paso 2:** Busca **“SenseCAP A1102”** en la sección de Dispositivos soportados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/2.png" style={{width:700, height:'auto'}}/></div>

**Paso 3:** Selecciona el modelo **“Detección de Rostros”** como ejemplo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/3.png" style={{width:700, height:'auto'}}/></div>

**Paso 4:** Dentro del modelo, encuentra la opción **“Deploy Model”**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/4.png" style={{width:700, height:'auto'}}/></div>

**Paso 5:** Selecciona el dispositivo conectado, opción **“SenseCAP A1102”**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/5.png" style={{width:700, height:'auto'}}/></div>

**Paso 6:** Conecta tu dispositivo A1102 y selecciona el puerto serial correspondiente para conectar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/6.png" style={{width:700, height:'auto'}}/></div>

**Paso 7:** Finalmente, verás el modelo cargado y los resultados mostrados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/7.png" style={{width:700, height:'auto'}}/></div>

`Confianza:`  
  - Se refiere al nivel de certeza o probabilidad que el modelo asigna a sus predicciones.

`IoU:`  
  - Es una métrica para evaluar la precisión de las cajas delimitadoras predichas en comparación con las reales.

En este punto hemos desplegado exitosamente el modelo necesario en la cámara RS485 Vision AI. ¡Procedemos al siguiente paso!

### Lectura de datos con XIAO

Para leer datos desde modelos quemados en la cámara a través de XIAO, visita este [wiki](https://wiki.seeedstudio.com/grove_vision_ai_v2_software_support/) que explica en detalle cómo leer datos de Vision AI V2 con XIAO.

### Transmisión de datos RS485

#### Esquema de conexión

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/Camera_Connecting.png" style={{width:900, height:'auto'}}/></div>

:::tip 
Si usas alimentación de 5V, no necesitas conectar 12V; 12V y 5V son opciones alternativas, ¡no uses ambas al mismo tiempo!
:::

Una vez conectado según el diagrama, visita este [wiki](https://wiki.seeedstudio.com/grove_vision_ai_v2_rs485/) para una explicación detallada de cómo usar el código para manejar el dispositivo.

## Recursos

- 📄 **[PDF]** [Esquema de la Cámara AI de Visión RS485 de Seeed Studio](https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/SenseCraft_APP/SenseCAP_RS485_Vision_AI_Sensor_SCH.pdf)

## Soporte Técnico y Discusión del Producto

Gracias por elegir nuestros productos. Estamos aquí para brindarte soporte y asegurarnos de que tu experiencia sea lo más satisfactoria posible. Ofrecemos varios canales de comunicación para diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>