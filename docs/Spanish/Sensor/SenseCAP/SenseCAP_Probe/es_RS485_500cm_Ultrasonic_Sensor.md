---
description: RS485 500cm Ultrasonic Level Sensor
title: Sensor Ultrasónico de Nivel RS485 500cm
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Sensor/SenseCAP/SenseCAP_Probe/RS485_500cm_Ultrasonic_Sensor
last_update:
  date: 07/24/2025
  author: Guillermo
---

# Sensor Ultrasónico de Nivel RS485 500cm

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%201.png"/></div>

El Sensor Ultrasónico de Nivel RS485 500cm ofrece alta precisión y tiene un rango de medición de 25 a 500 cm. Utiliza tecnología avanzada de detección ultrasónica para proporcionar mediciones de distancia precisas con una resolución de hasta 1 mm. También proporcionamos herramientas de puerto serie para la configuración de parámetros y actualizaciones de firmware, lo que garantiza un funcionamiento fluido. Es ideal para diversas aplicaciones como medición de distancia horizontal, gestión inteligente de basureros, evitación de obstáculos en robots y control automático.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/RS485-500cm-Ultrasonic-Level-Sensor-p-5588.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%202.png" border="0" /></a></p>

## Actualizable a sensores industriales

Con el [registrador de datos SenseCAP S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html?queryID=ec697c44483ad32db968bd7daaf7839d&objectID=5361&indexName=bazaar_retailer_products), puedes convertir fácilmente este sensor en un sensor LoRaWAN®. Seeed no solo te ayuda con el prototipado, sino que también te ofrece la posibilidad de escalar tu proyecto con la serie SenseCAP de robustos [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

# Prueba con el registrador de datos LoRaWAN S2100

En esta página, te guiaremos en el proceso de conexión del registrador de datos LoRaWAN S2100 con un sensor ultrasónico de nivel de 500 cm, lo que te permitirá crear un sensor inalámbrico LoRaWAN de grado industrial que puede usarse comercialmente en tan solo cinco minutos.

## Primeros pasos

### Preparación
#### Hardware
##### Materiales necesarios

<table align="center">
	<tr>
	    <th>SenseCAP S2100 Data Logger</th>
      <th>500cm Ultrasonic Level Sensor</th>
    <th>Cross screwdriver</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%205.png" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%201.png" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%206.png" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html?queryID=ec697c44483ad32db968bd7daaf7839d&objectID=5361&indexName=bazaar_retailer_products" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/RS485-500cm-Ultrasonic-Level-Sensor-p-5588.html?queryID=b2f7f18dfc97aa5f70b2a759a49a00ab&objectID=5588&indexName=bazaar_retailer_products" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>



## 1. Prepara el registrador de datos, sensor ultrasónico RS485 de 500 cm, gateway y herramientas

1. **Registrador de datos**: Es un convertidor LoRaWAN que transforma sensores MODBUS RS485/Analógicos/GPIO en sensores compatibles con LoRa, transmitiendo así los datos mediante el protocolo LoRaWAN.

2. **Sensor ultrasónico RS485 de 500 cm**: Utiliza tecnología de detección ultrasónica para medir distancias. Su rango de medición va de 25 cm a 500 cm, con una resolución de hasta 1 mm. Con un transductor ultrasónico IP67 resistente al agua, tiene una gran adaptabilidad al entorno de trabajo.

3. **Desarmador de cruz**: Se utiliza para montar la sonda del sensor.

4. **Gateway**: El sensor LoRaWAN transmite los datos a un gateway LoRaWAN, que a su vez los envía al servidor en la nube. Si no cuentas con un gateway, hay dos opciones:
   - **Opción 1**: Utilizar sensores en zonas con cobertura de la red Helium. (Consulta en [Helium Explorer](https://explorer.helium.com/)). Donde haya red Helium disponible, puedes usar los sensores sin necesidad de comprar un gateway.
   - **Opción 2**: Comprar un [gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html).

5. Descarga la app **SenseCAP Mate** para la configuración:

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%207.png"/></div>

<div align="center">SenseCAP Mate App iOS & Android</div>

¡La preparación está lista! ¡Comencemos!

## 2. Arquitectura de red

Comencemos con la arquitectura de red de LoRaWAN.  
El registrador de datos convierte la información del sensor en datos LoRa y los sube al gateway.  
El gateway sube los datos al servidor.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%208.png"/></div>

## 3. Conectar el sensor ultrasónico RS485 de 500 cm al registrador de datos SenseCAP

- **Paso 1:** Retira los tres tornillos del registrador de datos.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/70.jpg"/></div>

- **Paso 2:** Quita la tapa inferior y extrae la PCBA interna hasta que se pueda acceder a los terminales de tornillo (no es necesario sacar toda la placa).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/71.jpg"/></div>

- **Paso 3:** Retira la tapa roscada girándola en sentido antihorario.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/72.jpg"/></div>

- **Paso 4:** Pasa el cable incluido por la tapa roscada y la cubierta inferior.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/73.jpg"/></div>

- **Paso 5:** Conecta los cables al bloque de terminales de tornillo como se muestra a continuación:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/71.jpg"/></div>

**Consejo**: Si utilizas otro protocolo, como 4–20 mA, consulta la tabla de pines:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2023.png"/></div>

Secuencia de cables del sensor ultrasónico RS485 de 500 cm:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2024.png"/></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2010.png"/></div>

- **Paso 6:** Coloca nuevamente la unidad de hardware dentro de la carcasa, cierra la tapa inferior y atornilla.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/75.jpg"/></div>

- **Paso 7:** Ajusta la tapa roscada y asegura el cable en su lugar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/76.jpg"/></div>

Una vez realizadas todas las conexiones entre el sensor y el registrador de datos, debe verse como en la siguiente imagen:

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2013.png"/></div>

## 4. Configurar la comunicación entre el registrador de datos y el sensor ultrasónico RS485 de 500 cm

- **Paso 1:** Selecciona **S2100 Data Logger** y haz clic en **Setup** en la página de configuración.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2014.png"/></div>

- **Paso 2:** Mantén presionado el botón durante **3 segundos**, el LED verde parpadeará cada 1 s. Luego haz clic en **Scan** para comenzar la búsqueda por Bluetooth del registrador.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2021.gif"/></div>

- **Paso 3:** Configura los parámetros de LoRaWAN y del sensor (incluyendo el comando RS485 Modbus-RTU).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2015.png"/></div>

### Cómo importar la plantilla

- **Paso 1:** Haz clic en este enlace de plantilla y elige tu navegador para descargar el archivo:  
[http://sensecap.seeed.cc/portalapi/template/23ad5050-c24b-11ed-af3d-4b3b31721270](http://sensecap.seeed.cc/portalapi/template/23ad5050-c24b-11ed-af3d-4b3b31721270)

- **Paso 2:** Toca el icono "➕" en la esquina superior derecha, selecciona "Import Template", elige el archivo descargado y se importará la plantilla.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2016.png"/></div>

- **Paso 3:** Haz clic en **Send** y prueba el sensor con el botón **Measure**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2017.png"/></div>

¡La distancia y temperatura del sensor se han obtenido exitosamente!

## 5. Subir los datos a SenseCAP Portal y Mate App

- **Paso 1:** Regresa a la pantalla principal de la app. Los LEDs rojos del registrador parpadearán por unos segundos, seguidos por los LEDs verdes, indicando que la conexión LoRaWAN fue exitosa y que los datos han sido enviados.  
También puedes hacer clic en el botón del registrador una vez para forzar el envío de datos.  
Antes de subir datos, asegúrate de que el gateway esté funcionando correctamente o que haya cobertura Helium.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/100.gif"/></div>

Ahora necesitamos agregar el sensor a la plataforma SenseCAP para ver los datos en la nube.

- **Paso 2:** Escanea el código QR del registrador para vincularlo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2018.png"/></div>

- **Paso 3:** Consulta los datos en la app o en el portal:  
[https://sensecap.seeed.cc/](https://sensecap.seeed.cc/)

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2019.png"/></div>

## 6. Prueba del sensor en un entorno real

Aplicación rápida en exteriores para monitoreo a largo plazo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2020.png"/></div>

Actualmente, el sensor LoRaWAN ya está listo para su funcionamiento.

## Recursos

- **[PDF]** [Sensor ultrasónico RS485 de 500 cm](https://files.seeedstudio.com/wiki/RS485-Ultrasonic-Level-Sensor/RS485-500cm-Ultrasonic-Level-Sensor.pdf)  
- **[PDF]** [Guía de usuario del registrador de datos SenseCAP S2100](https://files.seeedstudio.com/products/SenseCAP/S2100/SenseCAP%20S2100%20LoRaWAN%20Data%20Logger%20User%20Guide.pdf)

## Soporte técnico y discusión del producto

¡Gracias por elegir nuestros productos!  
Estamos aquí para brindarte distintos canales de soporte y asegurar que tu experiencia sea lo más fluida posible.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
