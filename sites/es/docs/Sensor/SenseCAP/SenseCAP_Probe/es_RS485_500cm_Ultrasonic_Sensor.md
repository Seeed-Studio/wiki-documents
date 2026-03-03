---
description: RS485 Sensor de Nivel Ultrasónico de 500cm
title: RS485 Sensor de Nivel Ultrasónico de 500cm
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Sensor/SenseCAP/SenseCAP_Probe/RS485_500cm_Ultrasonic_Sensor
last_update:
  date: 3/28/2023
  author: Yvonne
---

# RS485 Sensor de Nivel Ultrasónico de 500cm

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%201.png"/></div>

El Sensor de Nivel Ultrasónico RS485 de 500cm ofrece alta precisión y tiene un rango de medición de 25 a 500cm. Utiliza tecnología de detección ultrasónica avanzada para entregar mediciones de distancia precisas con una resolución de hasta 1mm. También proporcionamos herramientas de puerto serie para configuración de parámetros y actualizaciones de firmware para asegurar una operación sin problemas, haciéndolo ideal para una variedad de aplicaciones, incluyendo medición horizontal, sistemas de gestión de contenedores de basura inteligentes, evasión de robots y control automático.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/RS485-500cm-Ultrasonic-Level-Sensor-p-5588.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%202.png" border="0" /></a></p>

## Actualizable a Sensores Industriales

Con el [registrador de datos](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html?queryID=ec697c44483ad32db968bd7daaf7839d&objectID=5361&indexName=bazaar_retailer_products) SenseCAP S2100, puedes convertir fácilmente este sensor en un sensor LoRaWAN®. Seeed no solo te ayuda con el prototipado sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

# Juega con el Registrador de Datos LoRaWAN S2100

En esta página, te guiaremos a través del proceso de conectar el Registrador de Datos LoRaWAN S2100 con un Sensor de Nivel Ultrasónico de 500cm, permitiéndote crear un sensor inalámbrico LoRaWAN robusto de grado industrial que puede ser usado comercialmente en solo cinco minutos.
## Comenzar

### Preparación
#### Hardware
##### Materiales requeridos

<table align="center">
	<tr>
	    <th>Registrador de Datos SenseCAP S2100</th>
      <th>Sensor de Nivel Ultrasónico de 500cm</th>
    <th>Destornillador de cruz</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%205.png" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%201.png" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%206.png" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html?queryID=ec697c44483ad32db968bd7daaf7839d&objectID=5361&indexName=bazaar_retailer_products" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/RS485-500cm-Ultrasonic-Level-Sensor-p-5588.html?queryID=b2f7f18dfc97aa5f70b2a759a49a00ab&objectID=5588&indexName=bazaar_retailer_products" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

## 1. Prepara el registrador de datos, sensor ultrasónico de nivel RS485 de 500cm, gateway y herramientas.

1. **Registrador de datos**: Es un convertidor LoRaWAN que convierte sensores MODBUS RS485/Analógicos/GPIO en sensores habilitados para LoRa y por lo tanto transfiere datos a través del protocolo LoRaWAN.

2. **Sensor ultrasónico de nivel RS485 de 500cm**: Utiliza tecnología de detección ultrasónica para medición de distancia. Rango de medición de 25cm a 500cm, y la resolución puede alcanzar 1mm. Con un transductor ultrasónico impermeable IP67, tiene una fuerte adaptabilidad al entorno de trabajo.
3. **Destornillador de cruz**: Utilizado para ensamblar la sonda del sensor.
4. **Gateway**: El sensor LoRaWAN transmite datos a un gateway LoRaWAN, que luego los transmite al servidor en la nube. Si no tienes un gateway, hay dos opciones:
- Opción 1: Los sensores funcionan en áreas cubiertas por la Red Helium (Consulta en [Helium Explorer](https://explorer.helium.com/)). Donde esté disponible la red helium, puedes usar sensores para transferir datos sin comprar un gateway.
- Opción 2: Comprar un [gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html).

5. Descarga la aplicación SenseCAP Mate para configuración:

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%207.png"/></div>

<div align="center">Aplicación SenseCAP Mate iOS&Android</div>

La preparación está completa. ¡Comencemos!

### 2. Arquitectura de Red

Comencemos con la red de LoRaWAN.
El registrador de datos convierte los datos del sensor en datos LoRa y sube los datos al gateway. El gateway sube los datos al servidor.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%208.png"/></div>

### 3. Conectar el sensor ultrasónico de nivel RS485 de 500cm al registrador de datos SenseCAP


- **Paso 1:** Desatornilla los tres tornillos del registrador de datos

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/70.jpg"/></div>

- **Paso 2:** Retira la cubierta inferior y saca la PCBA interior hasta que los terminales de tornillo sean accesibles. No necesitas sacar toda la placa

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/71.jpg"/></div>

- **Paso 3:** Retira la tapa roscada desenroscando en dirección contraria a las agujas del reloj

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/72.jpg"/></div>

- **Paso 4:** Pasa el cable incluido a través de la tapa roscada y la cubierta inferior

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/73.jpg"/></div>

- **Paso 5:** Conecta los cables del cable en el terminal de tornillo como sigue


<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/71.jpg"/></div>

**Consejos**: Si estás usando otro protocolo, como 4-20mA, por favor consulta la tabla de pines:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2023.png"/></div>

Secuencia de cables del sensor ultrasónico de nivel RS485 de 500cm:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2024.png"/></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2010.png"/></div>

- **Paso 6:** Vuelve a colocar la unidad de hardware dentro de la carcasa, ciérrala desde la cubierta inferior y atorníllala de vuelta

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/75.jpg"/></div>

- **Paso 7:** Aprieta la tapa roscada y asegura el cable en su lugar

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/76.jpg"/></div>

Una vez que todas las conexiones estén hechas para el sensor ultrasónico de nivel y el registrador de datos, debería verse como se muestra a continuación

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2013.png"/></div>


### 4. Configurar ajustes para la comunicación entre el registrador de datos y el sensor ultrasónico de nivel RS485 de 500cm

- **Paso 1:** Selecciona **Registrador de datos S2100** y haz clic en **Configurar** en la página de configuración.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2014.png"/></div>

- **Paso 2:** Presiona el botón y manténlo presionado durante **3** segundos, el LED verde parpadeará a una frecuencia de 1s. Luego haz clic en **Escanear** para comenzar a escanear el Bluetooth del registrador de datos.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2021.gif"/></div>

- **Paso 3:** Configura los parámetros de LoRaWAN y del sensor (incluyendo el comando RS485 Modbus-RTU).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2015.png"/></div>

#### Cómo importar plantilla

- **Paso 1:** Por favor haz clic en este enlace de plantilla y elige tu navegador para descargarla.
(http://sensecap.seeed.cc/portalapi/template/23ad5050-c24b-11ed-af3d-4b3b31721270)

- **Paso 2:** Toca "➕" en la esquina superior derecha, selecciona "importar Plantilla", luego selecciona el archivo descargado, y la plantilla será importada.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2016.png"/></div>

- **Paso 3:** Haz clic en Enviar y prueba el sensor haciendo clic en **Medir**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2017.png"/></div>

¡La distancia y temperatura del sensor se obtienen exitosamente!

### 5. Subir los datos al portal SenseCAP y la aplicación Mate

- **Paso 1:** Regresa a la página de inicio de la aplicación y los LEDs rojos del registrador de datos comenzarán a parpadear durante un par de segundos seguidos por LEDs verdes parpadeando por un breve período de tiempo para indicar que la conexión LoRaWAN es exitosa y los datos son enviados. Alternativamente puedes hacer clic en el botón del registrador de datos una vez, para forzar este envío de datos.
Antes de subir datos, asegúrate de que el gateway esté funcionando correctamente o tenga cobertura de red helium.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/100.gif"/></div>

Ahora necesitamos agregar este sensor a la plataforma SenseCAP para poder ver los datos en la nube

- **Paso 2:** Vincular el registrador de datos escaneando el código QR.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2018.png"/></div>

- **Paso 3:** Verificar los datos en la App y el Portal.(https://sensecap.seeed.cc/)

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2019.png"/></div>


### 6. Probar el sensor en un entorno real.

Aplicación rápida al escenario real exterior para monitoreo a largo plazo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2020.png"/></div>

Actualmente, se ha desarrollado un sensor LoRaWAN.

## Recursos

- **[PDF]** [Sensor de Nivel Ultrasónico RS485 de 500cm](https://files.seeedstudio.com/wiki/RS485-Ultrasonic-Level-Sensor/RS485-500cm-Ultrasonic-Level-Sensor.pdf)
- **[PDF]** [Guía del Usuario del Registrador de Datos SenseCAP S2100](https://files.seeedstudio.com/products/SenseCAP/S2100/SenseCAP%20S2100%20LoRaWAN%20Data%20Logger%20User%20Guide.pdf)

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
