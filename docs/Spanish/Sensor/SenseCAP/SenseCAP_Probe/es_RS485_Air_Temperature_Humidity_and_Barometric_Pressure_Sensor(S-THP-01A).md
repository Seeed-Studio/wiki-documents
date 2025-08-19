---
description: RS485 RS485 Air Temperature, Humidity and Barometric Pressure Sensor(S-THP-01A)
title: RS485 Air Temperature, Humidity and Barometric Pressure Sensor(S-THP-01A)
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/RS485_Air_Temperature_Humidity_and_Barometric_Pressure_Sensor
last_update:
  date: 07/23/2025
  author: Guillermo
---

# Sensor RS485 de Temperatura, Humedad y Presión Barométrica del Aire (S-THP-01A)

<div align="center"><img width={800} src="https://files.seeedstudio.com/products/101991101/image1.png"/></div>

Este sensor RS485 con protección IP56 mide temperatura del aire, humedad relativa y presión barométrica en un amplio rango de operación: 0–100% HR, -40 a 125 °C y 300–1100 hPa. Es ideal para aplicaciones como agricultura inteligente, monitoreo climático, cálculo de evapotranspiración, prevención de moho, entre otras.  
Al integrarlo con el [registrador de datos SenseCAP S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), se facilita la recolección y gestión inalámbrica de datos mediante LoRaWAN®.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/RS485-Air-Temperature-Humidity-and-Pressure-Sensor-p-5801.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%202.png" border="0" /></a></p>

## Actualizable a Sensores Industriales

Con el [registrador de datos SenseCAP S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), puedes convertir fácilmente este sensor en un dispositivo inalámbrico compatible con LoRaWAN®.  
Seeed te permite no solo prototipar, sino también escalar a soluciones industriales con su línea de [sensores SenseCAP](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP).

# Conectando el Registrador de Datos LoRaWAN S2100

Esta guía te mostrará cómo conectar el registrador S2100 con el sensor RS485 de temperatura, humedad y presión barométrica del aire, para crear un sensor LoRaWAN robusto en solo cinco minutos.

## Primeros Pasos

### Preparación
#### Hardware
##### Materiales necesarios

<table align="center">
	<tr>
	    <th>SenseCAP S2100 Data Logger</th>
      <th>RS485 RS485 Air Temperature, Humidity and Barometric Pressure Sensor</th>
    <th>Desarmador de Cruz</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%205.png" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/products/101991101/image1.png" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%206.png" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html?queryID=ec697c44483ad32db968bd7daaf7839d&objectID=5361&indexName=bazaar_retailer_products" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/RS485-Air-Temperature-Humidity-and-Pressure-Sensor-p-5801.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

### 1. Prepara el registrador de datos, sensor RS485, gateway y herramientas

1. **Registrador de datos**: Convierte sensores MODBUS RS485/Analógicos/GPIO a sensores LoRaWAN, enviando datos mediante dicho protocolo.

2. **Sensor RS485**: Mide con precisión temperatura (-40 a 125 °C), humedad (0–100% RH) y presión (300–1100 hPa). Diseñado para aplicaciones industriales.

3. **Desarmador de cruz**: Para ensamblar la sonda del sensor si es necesario.

4. **Gateway LoRaWAN**:
   - **Opción 1**: Verifica si hay cobertura de la red Helium ([Helium Explorer](https://explorer.helium.com/)).
   - **Opción 2**: Compra un [gateway LoRaWAN](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html).

5. **App SenseCAP Mate** (para configuración):

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%207.png"/></div>
<div align="center">Disponible para iOS y Android</div>

¡Todo listo! Continuemos.

### 2. Arquitectura de Red

El registrador convierte los datos del sensor a LoRaWAN y los envía al gateway, que a su vez los sube a un servidor en la nube.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%208.png"/></div>

### 3. Conectar el Sensor al Registrador de Datos

- **Paso 1:** Desatornilla los tres tornillos del registrador.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/70.jpg"/></div>

- **Paso 2:** Retira la tapa inferior y extrae parcialmente la PCB para acceder a los terminales.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/71.jpg"/></div>

- **Paso 3:** Quita la tapa roscada girándola en sentido antihorario.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/72.jpg"/></div>

- **Paso 4:** Pasa el cable por la tapa roscada y la carcasa inferior.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/73.jpg"/></div>

- **Paso 5:** Conecta los cables al bloque de terminales según corresponda:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/71.jpg"/></div>

**Consejo**: Si usas protocolo 4–20 mA, revisa la tabla de pines:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2023.png"/></div>

Secuencia de conexión del sensor RS485 de temperatura, humedad y presión:

<div align="center"><img width={800} src="https://files.seeedstudio.com/products/101991101/image8.png"/></div>
<div align="center"><img width={800} src="https://files.seeedstudio.com/products/101991101/image10.png"/></div>

- **Paso 6:** Vuelve a colocar el hardware, cierra la carcasa inferior y atornilla.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/75.jpg"/></div>

- **Paso 7:** Ajusta la tapa roscada y fija el cable en su lugar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/76.jpg"/></div>

Vista final del montaje:

<div align="center"><img width={500} src="https://files.seeedstudio.com/products/101991101/image9.png"/></div>

### 4. Configurar Comunicación entre Registrador y Sensor

- **Paso 1:** En la app, selecciona **S2100 Data Logger** y haz clic en **Setup**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2014.png"/></div>

- **Paso 2:** Presiona el botón durante **3 s** hasta que el LED verde parpadee. Luego haz clic en **Scan**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2021.gif"/></div>

- **Paso 3:** Configura los parámetros de LoRaWAN y del sensor RS485 (incluido el comando Modbus-RTU).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2015.png"/></div>

#### Cómo importar plantilla

- **Paso 1:** Descarga la plantilla desde:  
[http://sensecap.seeed.cc/portalapi/template/23ad5050-c24b-11ed-af3d-4b3b31721270](http://sensecap.seeed.cc/portalapi/template/23ad5050-c24b-11ed-af3d-4b3b31721270)

- **Paso 2:** Toca el botón "➕", selecciona "Import Template" y elige el archivo descargado.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2016.png"/></div>

- **Paso 3:** Haz clic en **Send** y luego en **Measure** para probar.

¡Los valores de temperatura, humedad y presión deben aparecer correctamente!

### 5. Subir los Datos a SenseCAP Portal y App

- **Paso 1:** Regresa al inicio de la app. El LED rojo parpadeará seguido por el verde al enviar datos correctamente.  
También puedes presionar el botón del registrador para forzar el envío.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/100.gif"/></div>

- **Paso 2:** Escanea el código QR del registrador para vincularlo a la plataforma.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2018.png"/></div>

- **Paso 3:** Consulta los datos desde la app o en [https://sensecap.seeed.cc/](https://sensecap.seeed.cc/)

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2019.png"/></div>

### 6. Probar en Entorno Real

Ideal para instalación exterior y monitoreo continuo de condiciones ambientales.

<div align="center"><img width={800} src="https://files.seeedstudio.com/products/101991101/image7.png"/></div>

Ahora tienes un sensor LoRaWAN ambiental completamente operativo.

## Recursos

- **[PDF]** [Guía del Sensor de Temperatura, Humedad y Presión](https://files.seeedstudio.com/products/101991101/Air%20Temperature%20&%20Humidity%20&%20Barometric%20Sensor%20User%20Guide%20v1.0.pdf)  
- **[PDF]** [Guía del Registrador de Datos SenseCAP S2100](https://files.seeedstudio.com/products/SenseCAP/S2100/SenseCAP%20S2100%20LoRaWAN%20Data%20Logger%20User%20Guide.pdf)

## Soporte Técnico y Comunidad

¡Gracias por elegir nuestros productos!  
Estamos disponibles para ayudarte con distintos canales de soporte y asegurar que tu experiencia sea lo más fluida posible.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
