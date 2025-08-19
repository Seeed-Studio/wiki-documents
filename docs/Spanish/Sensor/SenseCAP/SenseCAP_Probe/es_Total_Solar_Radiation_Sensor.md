---
description: Total Solar Radiation Sensor
title: Sensor de Radiación Solar Total
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image1.webp
slug: /es/total_solar_radiation_sensor
last_update:
  date: 07/24/2025
  author: Guillermo
---

# Sensor de Radiación Solar Total

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image1.png" alt="pir" width={800} height="auto" /></p>

El Sensor de Radiación Solar Total RS485 IP68 mide en tiempo real la radiación solar total en un rango de 300 a 1100 nanómetros. Es ideal para monitoreo ambiental y agricultura. Puedes usarlo junto con el SenseCAP Sensor Hub 4G Data Logger o el SenseCAP S2100 LoRaWAN® Data Logger para una recolección y gestión de datos sencilla.

## Actualizable a Sensores Industriales

Con el [data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html?queryID=ec697c44483ad32db968bd7daaf7839d&objectID=5361&indexName=bazaar_retailer_products) SenseCAP S2100, puedes convertir fácilmente este sensor en un sensor LoRaWAN®. Seeed no solo te ayuda con el prototipado sino que también te ofrece la posibilidad de ampliar tu proyecto con la serie SenseCAP de robustos [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

## Uso con S2100 LoRaWAN Data Logger

En esta página te guiaremos en el proceso de conectar el S2100 LoRaWAN Data Logger con un Sensor de Radiación Solar Total, permitiéndote crear un sensor inalámbrico LoRaWAN robusto y de grado industrial que puede ser usado comercialmente en solo cinco minutos.

### Preparación del Hardware

<table align="center">
 <tr>
     <th>SenseCAP S2100 Data Logger</th>
      <th>Total Solar Radiation Sensor</th>
    <th>Desarmador de Cruz</th>
 </tr>
 <tr>
     <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image1.png" alt="pir" width={800} height="auto" /></p></td>
     <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image2.png" alt="pir" width={800} height="auto" /></p></td>
      <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image3.png" alt="pir" width={800} height="auto" /></p></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/RS485-p-5691.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
  <td>
  </td>
 </tr>
</table>

**Data Logger**: Es un convertidor LoRaWAN que convierte sensores MODBUS RS485/Analógico/GPIO en sensores habilitados para LoRa y por lo tanto transfiere datos mediante el protocolo LoRaWAN.

**Sensor de Radiación Solar Total**: El sensor de radiación solar total utiliza un fotodetector de silicio que genera una señal de corriente proporcional a la intensidad de la luz incidente cuando la luz incide sobre él, y puede entregar directamente un valor medido en W/㎡.

**Destornillador de cruz**: Utilizado para ensamblar la sonda del sensor.

**Gateway**: El sensor LoRaWAN transmite datos a un gateway LoRaWAN, que luego los transmite al servidor en la nube. Si no cuentas con un gateway, tienes dos opciones:

- Opción 1: Los sensores funcionan en áreas cubiertas por la red Helium (ver en [Helium Explorer](https://explorer.helium.com/)). Donde la red Helium esté disponible, puedes usar sensores para transferir datos sin comprar un gateway.
- Opción 2: Comprar un [gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html).

**Descarga la app SenseCAP Mate para la configuración:**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image4.png" alt="pir" width={300} height="auto" /></p>

La preparación está lista. ¡Comencemos!

### 2. Arquitectura de la Red

Comencemos con la red LoRaWAN.  
El registrador de datos convierte los datos del sensor en datos LoRa y los sube al gateway. El gateway envía los datos al servidor.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image5.png" alt="pir" width={800} height="auto" /></p>

### Conectar el Sensor de Radiación Solar Total al Registrador de Datos SenseCAP

- **Paso 1:** Desatornilla los tres tornillos del registrador de datos

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/70.jpg"/></div>

- **Paso 2:** Retira la tapa inferior y saca la PCBA interna hasta que los terminales de tornillo queden accesibles. No necesitas sacar toda la placa.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/71.jpg"/></div>

- **Paso 3:** Quita la tapa roscada desenroscándola en sentido contrario a las agujas del reloj.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/72.jpg"/></div>

- **Paso 4:** Pasa el cable incluido a través de la tapa roscada y la tapa inferior

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/73.jpg"/></div>

- **Paso 5:** Conecta los cables del cable en el terminal de tornillo como sigue:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/71.jpg"/></div>

**Consejo**: Si usas otro protocolo, como 4-20mA, por favor consulta la tabla de pines:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image6.png" alt="pir" width={800} height="auto" /></p>

Secuencia de cables del Sensor de Radiación Solar Total. El conector impermeable viene incluido por defecto, para conectar con el S2100, necesitas cortar el conector:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image7.png" alt="pir" width={800} height="auto" /></p>

- **Paso 6:** Vuelve a colocar la unidad de hardware dentro de la caja, cierra la tapa inferior y atornilla.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/75.jpg"/></div>

- **Paso 7:** Aprieta la tapa roscada y asegura el cable en su lugar

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/76.jpg"/></div>

Cuando todas las conexiones estén hechas para el Sensor de Radiación Solar Total y el Registrador de Datos, debería verse así:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image8.jpg" alt="pir" width={800} height="auto" /></p>

### Configurar Ajustes para Comunicación RS485

**Paso 1:** Selecciona **Registrador de Datos S2100** y haz clic en **Setup** en la página de configuración.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image9.png" alt="pir" width={800} height="auto" /></p>

**Paso 2:** Presiona el botón y mantenlo pulsado por **3** segundos, el LED verde parpadeará con frecuencia de 1 segundo. Luego haz clic en **Scan** para comenzar a escanear el Bluetooth del registrador.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/gif1.gif" alt="pir" width={800} height="auto" /></p>

**Paso 3:** Configura los parámetros LoRaWAN y del sensor (incluyendo el comando RS485 Modbus-RTU).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image10.png" alt="pir" width={800} height="auto" /></p>

#### Cómo importar la plantilla

**Paso 1:** Haz clic en el siguiente enlace y elige tu navegador para descargarla: [Sensor de Radiación Solar Total](https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/Total%20Solar%20Radiation%20Sensor.seeed)

**Paso 2:** Pulsa "➕" en la esquina superior derecha, selecciona "importar plantilla", luego selecciona el archivo descargado y la plantilla será importada.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image11.png" alt="pir" width={800} height="auto" /></p>

**Paso 3:** Haz clic en Enviar y prueba el sensor haciendo clic en **Measure**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Total_Solar_Radiation_Sensor/image12.png" alt="pir" width={600} height="auto" /></p>

¡La radiación solar total del sensor se obtuvo exitosamente!

## Recursos

- **[PDF]** [Manual de Usuario del Sensor de Radiación Solar Total](https://files.seeedstudio.com/products/SenseCAP/rs485%E4%BC%A0%E6%84%9F%E5%99%A8/Total%20Solar%20Radiation%20Sensor%20(S-ZFS-02)%20User's%20Manual.pdf)
- **[PDF]** [Guía de Usuario del Registrador de Datos SenseCAP S2100](https://files.seeedstudio.com/products/SenseCAP/S2100/SenseCAP%20S2100%20LoRaWAN%20Data%20Logger%20User%20Guide.pdf)

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
