---
description: RS485 750cm Ultrasonic Level Sensor
title: RS485 750cm Ultrasonic Level Sensor
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/RS485_750cm_Ultrasonic_Sensor-1
last_update:
  date: 07/24/2025
  author: Guillermo
---

# Sensor Ultrasónico de Nivel RS485 750 cm

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/750cm%20ultrasonic%20sensor/image1.jpeg"/></div>

El **Sensor Ultrasónico de Nivel RS485 750 cm** utiliza tecnología de detección ultrasónica para medir distancias, con un rango de medición de 28 cm a 750 cm. Equipado con una bocina de tipo embudo, puede detectar objetos hasta 750 cm con una resolución de 1 mm. Gracias a su transductor ultrasónico impermeable IP67, se puede usar en diversas aplicaciones como monitoreo de niveles de aguas residuales, gestión inteligente de basureros, evasión de obstáculos en robots y sistemas de control automático.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/RS485-750cm-Ultrasonic-Level-Sensor-p-5587.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%202.png" border="0" /></a></p>

## Actualizable a Sensores Industriales

Con el [registrador de datos SenseCAP S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html?queryID=ec697c44483ad32db968bd7daaf7839d&objectID=5361&indexName=bazaar_retailer_products), puedes convertir fácilmente este sensor en un sensor compatible con LoRaWAN®.  
Seeed no solo te ayuda a crear prototipos, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de robustos [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

# Usa el Registrador de Datos LoRaWAN S2100

En esta página, te guiamos paso a paso para conectar el **registrador de datos LoRaWAN S2100** con el **sensor ultrasónico de nivel de 750 cm**, lo que te permitirá construir un sensor inalámbrico robusto de grado industrial listo para usarse comercialmente en solo cinco minutos.

## Primeros Pasos

### Preparación
#### Hardware
##### Materiales necesarios

<table align="center">
	<tr>
	    <th>SenseCAP S2100 Data Logger</th>
      <th>750cm Ultrasonic Level Sensor</th>
    <th>Desarmador de Cruz</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%205.png" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/750cm%20ultrasonic%20sensor/image1.jpeg" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%206.png" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html?queryID=ec697c44483ad32db968bd7daaf7839d&objectID=5361&indexName=bazaar_retailer_products" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/RS485-750cm-Ultrasonic-Level-Sensor-p-5587.html?queryID=2bee749eb1a41d36e0d4d5fbdcbfb36f&objectID=5587&indexName=bazaar_retailer_products" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

## 1. Prepara el registrador de datos, el sensor ultrasónico RS485 de 750 cm, gateway y herramientas

1. **Registrador de datos**: Es un convertidor LoRaWAN que transforma sensores MODBUS RS485/Analógicos/GPIO en sensores compatibles con LoRa, permitiendo la transmisión de datos por LoRaWAN.

2. **Sensor ultrasónico RS485 de 750 cm**: Utiliza tecnología ultrasónica para medir distancias. El rango de medición es de 28 cm a 750 cm y su resolución puede alcanzar 1 mm. Con un transductor ultrasónico IP67, tiene alta resistencia para ambientes exigentes.

3. **Desarmador de cruz**: Para ensamblar la sonda del sensor.

4. **Gateway**: El sensor LoRaWAN transmite los datos a un gateway LoRaWAN, que luego los transmite al servidor en la nube. Si no tienes un gateway, tienes dos opciones:
   - **Opción 1**: Utilizar sensores en zonas con cobertura de la red Helium. (Consulta en [Helium Explorer](https://explorer.helium.com/))
   - **Opción 2**: Comprar un [gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html)

5. Descarga la aplicación **SenseCAP Mate** para la configuración:

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%207.png"/></div>

<div align="center">SenseCAP Mate App iOS & Android</div>

¡Preparación lista! ¡Comencemos!

## 2. Arquitectura de Red

Vamos a comenzar con la arquitectura de red LoRaWAN.  
El registrador convierte los datos del sensor a formato LoRa y los envía al gateway. El gateway luego los sube al servidor.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%208.png"/></div>

## 3. Conectar el Sensor Ultrasónico RS485 de 750 cm al Registrador de Datos SenseCAP

- **Paso 1:** Desatornilla los tres tornillos del registrador de datos.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/70.jpg"/></div>

- **Paso 2:** Retira la cubierta inferior y extrae la PCB interna hasta acceder a los terminales de tornillo. No es necesario extraer toda la placa.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/71.jpg"/></div>

- **Paso 3:** Quita la tapa roscada girándola en sentido antihorario.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/72.jpg"/></div>

- **Paso 4:** Pasa el cable incluido por la tapa roscada y por la cubierta inferior.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/73.jpg"/></div>

- **Paso 5:** Conecta los cables del sensor a los terminales como se indica:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/71.jpg"/></div>

**Consejo**: Si usas otro protocolo como 4–20 mA, consulta la tabla de pines:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2023.png"/></div>

Secuencia de cables del sensor RS485 de 750 cm:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/750cm%20ultrasonic%20sensor/Picture3.png"/></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/750cm%20ultrasonic%20sensor/image%203.png"/></div>

- **Paso 6:** Coloca de nuevo la unidad de hardware en su lugar, cierra la tapa inferior y atornilla.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/75.jpg"/></div>

- **Paso 7:** Ajusta la tapa roscada y asegura el cable.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/76.jpg"/></div>

Una vez realizadas las conexiones, el conjunto debería verse como se muestra:

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/750cm%20ultrasonic%20sensor/Picture4.png"/></div>

## 4. Configurar la Comunicación entre el Registrador de Datos y el Sensor Ultrasónico RS485 de 750 cm

- **Paso 1:** Selecciona **S2100 Data Logger** y haz clic en **Setup** en la página de configuración.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2014.png"/></div>

- **Paso 2:** Presiona el botón durante **3 segundos**. El LED verde parpadeará cada 1 s. Luego haz clic en **Scan** para buscar el registrador vía Bluetooth.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2021.gif"/></div>

- **Paso 3:** Configura los parámetros de LoRaWAN y los del sensor (incluido el comando RS485 Modbus-RTU).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2015.png"/></div>

### Cómo importar una plantilla

- **Paso 1:** Haz clic en el siguiente enlace para descargar la plantilla:  
[http://sensecap.seeed.cc/portalapi/template/23ad5050-c24b-11ed-af3d-4b3b31721270](http://sensecap.seeed.cc/portalapi/template/23ad5050-c24b-11ed-af3d-4b3b31721270)

- **Paso 2:** Toca el icono "➕" en la esquina superior derecha, selecciona "Import Template", elige el archivo descargado y la plantilla se importará.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2016.png"/></div>

- **Paso 3:** Haz clic en **Send** y prueba el sensor con el botón **Measure**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2017.png"/></div>

¡Distancia y temperatura obtenidas correctamente!

## 5. Subir los Datos a SenseCAP Portal y Mate App

- **Paso 1:** Regresa a la pantalla principal de la app. Los LEDs rojos del registrador parpadearán unos segundos, seguidos por los LEDs verdes, indicando una conexión LoRaWAN exitosa y transmisión de datos.  
También puedes presionar el botón del registrador para forzar el envío.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/100.gif"/></div>

Ahora debemos añadir el sensor a la plataforma SenseCAP para visualizar los datos en la nube.

- **Paso 2:** Escanea el código QR del registrador para vincularlo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2018.png"/></div>

- **Paso 3:** Revisa los datos en la app y en el portal:  
[https://sensecap.seeed.cc/](https://sensecap.seeed.cc/)

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2019.png"/></div>

## 6. Probar el Sensor en un Entorno Real

Aplicación rápida al aire libre para monitoreo a largo plazo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2020.png"/></div>

Actualmente, el sensor LoRaWAN está listo para funcionar.

## Recursos

- **[PDF]** [Sensor Ultrasónico RS485 de 750 cm](https://files.seeedstudio.com/wiki/RS485-Ultrasonic-Level-Sensor/RS485-750cm-Ultrasonic-Level-Sensor.pdf)  
- **[PDF]** [Guía de Usuario del Registrador de Datos SenseCAP S2100](https://files.seeedstudio.com/products/SenseCAP/S2100/SenseCAP%20S2100%20LoRaWAN%20Data%20Logger%20User%20Guide.pdf)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos!  
Estamos disponibles para brindarte distintos canales de soporte que aseguren una experiencia fluida y satisfactoria.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
