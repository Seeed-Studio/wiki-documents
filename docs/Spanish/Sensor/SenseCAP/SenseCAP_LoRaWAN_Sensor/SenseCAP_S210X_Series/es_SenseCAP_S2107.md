---
description: SenseCAP S2107
title: SenseCAP S2107
keywords:
- SenseCAP Sensor_Probe&Accessories
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_S2107
last_update:
  date: 07/23/2025
  author: Guillermo
---

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/0.jpg" /></div>

# Sensor de Temperatura SenseCAP LoRaWAN® S2107

El sensor de temperatura SenseCAP S2107 mide temperaturas en el rango de -50 °C a 300 °C. Integra un sensor PT1000 de alta precisión que permite la detección en amplios rangos de temperatura para escenarios industriales. Los sensores Pt1000 (termómetros de resistencia de platino de 1000 ohmios) son los más comunes de su tipo. El S2107 admite una conexión de tres hilos para sensores PT1000 y permite conectar hasta **tres sensores simultáneamente**.

La temperatura por contacto directo es un indicador clave en muchos casos, como detección en líquidos, monitoreo de alimentos, cadena de frío, calderas industriales y acuicultura. El S2107 está optimizado para actualizaciones OTA mediante Bluetooth integrado, lo cual permite una configuración rápida y sin cables. Gracias a su diseño con tecnología LoRa y carcasa IP66, este sensor es estable, confiable, y capaz de cubrir largas distancias de transmisión con bajo consumo. A diferencia de dispositivos cableados, funciona con batería, lo que reduce la complejidad de instalación, pudiendo desmontarse o colocarse en minutos.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html)

# Características

- **Compatible con redes LoRaWAN® a nivel mundial:** Soporta gateways LoRaWAN® con planes de frecuencia de 863 MHz a 928 MHz.
- **Larga distancia & batería de larga duración:** Transmisión de hasta 2 km en áreas urbanas y 10 km en línea de vista. Funciona con batería Li-SOCl₂ estándar (ER34615), reemplazable, con vida útil de hasta 10 años.
- **Diseñado para ambientes extremos:** Temperatura de operación de -40 °C a 85 °C y carcasa IP66, ideal para exteriores con alta exposición solar, lluvia intensa o polvo.
- **Configuración y calibración sencilla:** SenseCAP Mate App permite configurar y calibrar sin necesidad de programar.
- **Almacenamiento local:** En caso de desconexión de la red LoRaWAN, el sensor puede almacenar localmente hasta **2000 registros** de datos.

# Aplicaciones

- Detección en líquidos
- Monitoreo de alimentos
- Cadena de frío en almacenamiento
- Soluciones para acuicultura

# Especificaciones

|**Temperatura**||
| :- | :- |
|Rango|<p>-50 a 300 °C</p><p>(Otros rangos bajo solicitud)</p>|
|Precisión|±0.5 °C|
|Resolución|0.1 °C|

|**Parámetros Generales**||
| :- | :- |
|Modelo|S2107|
|Microcontrolador|Wio-E5|
|Protocolo Soportado|LoRaWAN v1.0.3 Clase A|
|Bluetooth Integrado|App para configuración|
|Plan de Frecuencia LoRaWAN|IN865/EU868/US915/AU915/AS923/KR920/RU864 *|
|Potencia Máx. de Transmisión|19 dBm|
|Sensibilidad|-136 dBm @ SF12 BW=125 kHz|
|Distancia de Comunicación|2 a 10 km (dependiendo del entorno y antena del gateway)|
|Clasificación IP|IP66|
|Temperatura de Operación|-40 a +85 °C (LoRa DTU); -50 a 200 °C (cable); -50 a 300 °C (sonda)|
|Humedad de Operación|0 a 100 % RH (sin condensación)|
|Peso del Dispositivo|360 g|
|Longitud del Cable|3 m|
|Certificaciones|CE / FCC / RoHS / TELEC|

|**Batería (incluida)**||
| :- | :- |
|Duración Estimada|Hasta 10 años**|
|Capacidad|19 Ah (no recargable)|
|Tipo de Batería|SOCl₂ estándar tamaño D|

# Cómo conectar 3 sensores PT1000 al S2107

## Preparación de Hardware

Cablea los 3 sensores PT1000 como se muestra en el siguiente diagrama:  

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/1.jpg" /></div>

## Preparación de Software

Usa la app SenseCAP Mate para configurar los sensores PT1000:  

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/2.png" /></div>

# Decodificador de Payload

## Código del Decodificador

Consulta el repositorio de SenseCAP en GitHub: [S210X Decoder](https://github.com/Seeed-Solution/SenseCAP-Decoder/tree/main/S210X)

## Ejemplo de Análisis de Datos

### Paquete de medición del sensor de temperatura:
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/3.png" /></div>

### Paquetes enviados al recuperar conexión:
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/4.png" /></div>

### Información de la batería:
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/5.png" /></div>

## Soporte Técnico SenseCAP

¡Gracias por elegir nuestros productos! Estamos aquí para ayudarte a tener la mejor experiencia posible. Ofrecemos varios canales de soporte según tus preferencias.

<div class="button_tech_support_container">
<a href="https://discord.gg/sensecap" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
