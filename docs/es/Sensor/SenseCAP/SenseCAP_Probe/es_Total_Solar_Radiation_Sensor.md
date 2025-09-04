---
description: Sensor de Radiación Solar Total
title: Sensor de Radiación Solar Total
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image1.webp
slug: /es/total_solar_radiation_sensor
last_update:
  date: 4/23/2025
  author: Leo
---

# Sensor de Radiación Solar Total

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image1.png" alt="pir" width={800} height="auto" /></p>

El Sensor de Radiación Solar Total IP68 RS485 mide la radiación solar total en tiempo real de 300 a 1100 nanómetros. Es ideal para monitoreo ambiental y agricultura. Combínalo con el SenseCAP Sensor Hub 4G Data Logger o el SenseCAP S2100 LoRaWAN® Data Logger para una recolección y gestión de datos sin problemas.

## Actualizable a Sensores Industriales

Con el [registrador de datos](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html?queryID=ec697c44483ad32db968bd7daaf7839d&objectID=5361&indexName=bazaar_retailer_products) SenseCAP S2100, puedes convertir fácilmente este sensor en un sensor LoRaWAN®. Seeed no solo te ayuda con el prototipado, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

## Uso con el Registrador de Datos LoRaWAN S2100

En esta página, te guiaremos a través del proceso de conectar el Registrador de Datos LoRaWAN S2100 con un Sensor de Radiación Solar Total, permitiéndote crear un sensor inalámbrico LoRaWAN robusto de grado industrial que puede usarse comercialmente en solo cinco minutos.

### Preparación del Hardware

<table align="center">
 <tr>
     <th>Registrador de Datos SenseCAP S2100</th>
      <th>Sensor de Radiación Solar Total</th>
    <th>Destornillador de cruz</th>
 </tr>
 <tr>
     <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image1.png" alt="pir" width={800} height="auto" /></p></td>
     <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image2.png" alt="pir" width={800} height="auto" /></p></td>
      <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image3.png" alt="pir" width={800} height="auto" /></p></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/RS485-p-5691.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
  <td>
  </td>
 </tr>
</table>

**Registrador de datos**: Es un convertidor LoRaWAN que convierte sensores MODBUS RS485/Analógicos/GPIO en sensores habilitados para LoRa y por lo tanto transfiere datos a través del protocolo LoRaWAN.

**Sensor de Radiación Solar Total**: El sensor de radiación solar total utiliza un fotodetector de silicio que genera una señal de corriente proporcional a la intensidad de la luz incidente cuando se irradia luz y puede generar directamente un valor medido en W/㎡.

**Destornillador de cruz**: Se utiliza para ensamblar la sonda del sensor.

**Gateway**: El sensor LoRaWAN transmite datos a un gateway LoRaWAN, que luego los transmite al servidor en la nube. Si no tienes un gateway, hay dos opciones:

- Opción 1: Los sensores funcionan en áreas cubiertas por Helium Network (Consulta en [Helium Explorer](https://explorer.helium.com/)). Donde esté disponible la red helium, puedes usar sensores para transferir datos sin comprar un gateway.
- Opción 2: Comprar un [gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html).

**Descarga la aplicación SenseCAP Mate para la configuración:**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image4.png" alt="pir" width={300} height="auto" /></p>

La preparación está completa. ¡Comencemos!

### 2. Arquitectura de Red

Comencemos con la red de LoRaWAN.
El registrador de datos convierte los datos del sensor en datos LoRa y sube los datos al gateway. El gateway sube los datos al servidor.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image5.png" alt="pir" width={800} height="auto" /></p>

### Conectar el Sensor de Radiación Solar Total al Registrador de Datos SenseCAP

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

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image6.png" alt="pir" width={800} height="auto" /></p>

Secuencia de cables del Sensor de Radiación Solar Total, el conector impermeable está incluido por defecto, para conectar con S2100, necesitas cortar el conector:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image7.png" alt="pir" width={800} height="auto" /></p>

- **Paso 6:** Vuelve a colocar la unidad de hardware dentro de la carcasa, ciérrala desde la cubierta inferior y atorníllala de vuelta

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/75.jpg"/></div>

- **Paso 7:** Aprieta la tapa roscada y asegura el cable en su lugar

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/76.jpg"/></div>

Una vez que todas las conexiones estén hechas para el Sensor de Radiación Solar Total y el Registrador de Datos, debería verse como se muestra a continuación

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image8.jpg" alt="pir" width={800} height="auto" /></p>

### Configurar Ajustes para Comunicación RS485

**Paso 1:** Selecciona **S2100 Data Logger** y haz clic en **Setup** en la página de configuración.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image9.png" alt="pir" width={800} height="auto" /></p>

**Paso 2:** Presiona el botón y manténlo presionado durante **3** segundos, el LED verde parpadeará a una frecuencia de 1s. Luego haz clic en **Scan** para comenzar a escanear el Bluetooth del registrador de datos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/gif1.gif" alt="pir" width={800} height="auto" /></p>

**Paso 3:** Configura los parámetros de LoRaWAN y del sensor (incluyendo el comando RS485 Modbus-RTU).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image10.png" alt="pir" width={800} height="auto" /></p>

#### Cómo importar plantilla

**Paso 1:** Por favor haz clic en el siguiente enlace y elige tu navegador para descargarlo. [Total Solar Radiation Sensor](https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/Total%20Solar%20Radiation%20Sensor.seeed)

**Paso 2:** Toca "➕" en la esquina superior derecha, selecciona "import Template", luego selecciona el archivo descargado, y la plantilla será importada.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image11.png" alt="pir" width={800} height="auto" /></p>

**Paso 3:** Haz clic en Send y prueba el sensor haciendo clic en **Measure**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image12.png" alt="pir" width={600} height="auto" /></p>

¡La radiación solar total del sensor se obtuvo exitosamente!

## Recursos

- **[PDF]** [Manual de Usuario del Sensor de Radiación Solar Total](https://files.seeedstudio.com/products/SenseCAP/rs485%E4%BC%A0%E6%84%9F%E5%99%A8/Total%20Solar%20Radiation%20Sensor%20(S-ZFS-02)%20User's%20Manual.pdf)
- **[PDF]** [Guía de Usuario del Registrador de Datos SenseCAP S2100](https://files.seeedstudio.com/products/SenseCAP/S2100/SenseCAP%20S2100%20LoRaWAN%20Data%20Logger%20User%20Guide.pdf)

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
