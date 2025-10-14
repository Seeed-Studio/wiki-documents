---
description: RS485 Sensor de Temperatura del Aire, Humedad y Presión Barométrica(S-THP-01A)
title: RS485 Sensor de Temperatura del Aire, Humedad y Presión Barométrica(S-THP-01A)
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/RS485_Air_Temperature_Humidity_and_Barometric_Pressure_Sensor
last_update:
  date: 10/14/2023
  author: Yvonne
---

# RS485 Sensor de Temperatura del Aire, Humedad y Presión Barométrica(S-THP-01A)

<div align="center"><img width={800} src="https://files.seeedstudio.com/products/101991101/image1.png"/></div>


Un sensor RS485 de temperatura del aire, humedad y presión barométrica con clasificación IP56 tiene un amplio rango de operación de 0-100% HR, -40 a 125°C, y 300-1100 hPa. Es ideal para aplicaciones como agricultura inteligente, monitoreo meteorológico, cálculo de evapotranspiración, prevención de moho y más. Al integrar este sensor con el [registrador de datos](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html?queryID=ec697c44483ad32db968bd7daaf7839d&objectID=5361&indexName=bazaar_retailer_products) SenseCAP S2100, los usuarios pueden lograr una recolección y gestión de datos sin problemas.


<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/RS485-Air-Temperature-Humidity-and-Pressure-Sensor-p-5801.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%202.png" border="0" /></a></p>


## Actualizable a Sensores Industriales

Con el [registrador de datos](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html?queryID=ec697c44483ad32db968bd7daaf7839d&objectID=5361&indexName=bazaar_retailer_products) SenseCAP S2100, puedes convertir fácilmente este sensor en un sensor LoRaWAN®. Seeed no solo te ayuda con la creación de prototipos, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

# Trabajar con el Registrador de Datos LoRaWAN S2100

En esta página, te guiaremos a través del proceso de conectar el Registrador de Datos LoRaWAN S2100 con un Sensor RS485 de Temperatura del Aire, Humedad y Presión Barométrica, permitiéndote crear un sensor inalámbrico LoRaWAN robusto de grado industrial que puede ser usado comercialmente en solo cinco minutos.
## Comenzar

### Preparación
#### Hardware
##### Materiales requeridos


<table align="center">
	<tr>
	    <th>Registrador de Datos SenseCAP S2100</th>
      <th>RS485 Sensor de Temperatura del Aire, Humedad y Presión Barométrica</th>
    <th>Destornillador de cruz</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%205.png" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/products/101991101/image1.png" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%206.png" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html?queryID=ec697c44483ad32db968bd7daaf7839d&objectID=5361&indexName=bazaar_retailer_products" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/RS485-Air-Temperature-Humidity-and-Pressure-Sensor-p-5801.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

## 1. Prepare el registrador de datos, sensor de temperatura del aire, humedad y presión barométrica RS485, gateway y herramientas.

1. **Registrador de datos**: Es un convertidor LoRaWAN que convierte sensores MODBUS RS485/Analógicos/GPIO en sensores habilitados para LoRa y por lo tanto transfiere datos a través del protocolo LoRaWAN.

2. **Sensor de temperatura del aire, humedad y presión barométrica RS485**: Este sensor mide con precisión la temperatura del aire, humedad y presión barométrica dentro de los rangos de 0-100% HR, -40 a 125°C y 300-1100 hPa. Es adecuado para aplicaciones precisas de monitoreo ambiental industrial.

3. **Destornillador de cruz**: Se utiliza para ensamblar la sonda del sensor.

4. **Gateway**: El sensor LoRaWAN transmite datos a un gateway LoRaWAN, que luego los transmite al servidor en la nube. Si no tienes un gateway, hay dos opciones:
- Opción 1: Los sensores funcionan en áreas cubiertas por la Red Helium (Consulta en [Helium Explorer](https://explorer.helium.com/)). Donde esté disponible la red helium, puedes usar sensores para transferir datos sin comprar un gateway.
- Opción 2: Comprar un [gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html).

5. Descarga la aplicación SenseCAP Mate para la configuración:

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%207.png"/></div>

<div align="center">Aplicación SenseCAP Mate iOS&Android</div>

La preparación está completa. ¡Comencemos!

### 2. Arquitectura de red

Comencemos con la red de LoRaWAN.
El registrador de datos convierte los datos del sensor en datos LoRa y carga los datos al gateway. El gateway carga los datos al servidor.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%208.png"/></div>

### 3. Conectar el sensor de temperatura del aire, humedad y presión barométrica RS485


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

**Consejos**: Si estás usando otro protocolo, como 4-20mA, consulta la tabla de pines:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2023.png"/></div>

Secuencia de cables del sensor de temperatura del aire, humedad y presión barométrica RS485:

<div align="center"><img width={800} src="https://files.seeedstudio.com/products/101991101/image8.png"/></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/products/101991101/image10.png"/></div>

- **Paso 6:** Vuelve a colocar la unidad de hardware dentro de la carcasa, ciérrala desde la cubierta inferior y atorníllala de vuelta

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/75.jpg"/></div>

- **Paso 7:** Aprieta la tapa roscada y asegura el cable en su lugar

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/76.jpg"/></div>

Una vez que todas las conexiones estén hechas para el sensor de nivel ultrasónico y el registrador de datos, debería verse como se muestra a continuación

<div align="center"><img width={500} src="https://files.seeedstudio.com/products/101991101/image9.png"/></div>


### 4. Configurar ajustes para la comunicación del registrador de datos y el sensor de temperatura del aire, humedad y presión barométrica RS485

- **Paso 1:** Selecciona **S2100 Data Logger** y haz clic en **Setup** en la página de configuración.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2014.png"/></div>

- **Paso 2:** Presiona el botón y manténlo presionado durante **3** segundos, el LED verde parpadeará con una frecuencia de 1s. Luego haz clic en **Scan** para comenzar a escanear el Bluetooth del registrador de datos.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2021.gif"/></div>

- **Paso 3:** Configura los parámetros de LoRaWAN y del sensor (incluyendo el comando RS485 Modbus-RTU).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2015.png"/></div>

#### Cómo importar plantilla

- **Paso 1:** Haz clic en este enlace de plantilla y elige tu navegador para descargarla.
(http://sensecap.seeed.cc/portalapi/template/23ad5050-c24b-11ed-af3d-4b3b31721270)

- **Paso 2:** Toca "➕" en la esquina superior derecha, selecciona "import Template", luego selecciona el archivo descargado, y la plantilla será importada.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2016.png"/></div>

- **Paso 3:** Haz clic en Send y prueba el sensor haciendo clic en **Measure**

¡La distancia y temperatura del sensor se obtienen exitosamente!

### 5. Cargar los datos al portal SenseCAP y la aplicación Mate

- **Paso 1:** Regresa a la página de inicio de la aplicación y los LEDs rojos del registrador de datos comenzarán a parpadear durante un par de segundos seguidos por LEDs verdes parpadeando brevemente para indicar que la conexión LoRaWAN es exitosa y los datos son enviados. Alternativamente puedes hacer clic en el botón del registrador de datos una vez, para forzar este envío de datos.
Antes de cargar datos, asegúrate de que el gateway esté funcionando correctamente o tenga cobertura de red helium.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/100.gif"/></div>

Ahora necesitamos agregar este sensor a la plataforma SenseCAP para poder ver los datos en la nube

- **Paso 2:** Vincular el registrador de datos escaneando el código QR.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2018.png"/></div>

- **Paso 3:** Verificar los datos en la App y el Portal.(https://sensecap.seeed.cc/)

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2019.png"/></div>


### 6. Probar el sensor en un entorno real.

Aplicación rápida al escenario real al aire libre para monitoreo a largo plazo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/products/101991101/image7.png"/></div>

En la actualidad, se ha desarrollado un sensor LoRaWAN.

## Recursos

- **[PDF]** [RS485 Sensor de Temperatura del Aire, Humedad y Presión Barométrica](https://files.seeedstudio.com/products/101991101/Air%20Temperature%20&%20Humidity%20&%20Barometric%20Sensor%20User%20Guide%20v1.0.pdf)
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
