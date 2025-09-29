---
description: SenseCAP S2107
title: SenseCAP S2107
keywords:
- SenseCAP Sensor_Probe&Accessories
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_S2107
last_update:
  date: 9/25/2023
  author: KeweiLee
---

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/0.jpg" /></div>

# Descripción del Producto

El Sensor de Temperatura SenseCAP LoRaWAN® S2107 mide temperatura en el rango de -50°C~300°C. Un sensor de temperatura PT1000 de alta precisión que puede soportar detección de temperatura en rangos amplios de temperatura y escenarios industriales.
Los sensores Pt1000 (sensores de temperatura de 1000 ohm) son el tipo más común de termómetro de resistencia de platino. El S2107 soporta un circuito de tres cables para sensores PT1000 y permite la conexión de hasta tres sensores simultáneamente.
La temperatura de contacto directo es un indicador importante en muchos escenarios, especialmente en detección de líquidos, monitoreo de alimentos, cadena de frío de almacenamiento, calderas industriales, soluciones de acuicultura. El S2107 está específicamente optimizado para OTA con Bluetooth integrado, lo que permite configuración y actualización rápidas. Beneficiándose del diseño LoRa e IP66, este sensor presenta estabilidad y confiabilidad y puede cubrir un rango de transmisión largo mientras mantiene un menor consumo de energía. A diferencia de los dispositivos cableados, funciona con batería, reduciendo la carga de trabajo y complejidad del despliegue, y puede ser desensamblado e instalado en pocos minutos.


[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html)

# Características

- Compatible con Redes LoRaWAN® Mundiales: Compatible con diferentes tipos de gateways LoRaWAN® para habilitar conexión rápida con redes LoRaWAN® (soporta el plan de frecuencia universal de 863MHz ~928MHz).
- Largo Alcance y Alimentado por Batería: Rango de transmisión ultra-amplio de 2km en escenas urbanas y 10km en escenas de línea de vista. Alimentado por batería estándar Li-SOCl2 fácilmente reemplazable (tipo: ER34615) con máximo 10 años de vida útil de batería.
- Diseñado para Usar en Ambientes Hostiles: -40℃ ~ 85℃ temperatura de operación y carcasa clasificada IP66, adecuada para uso exterior, alta exposición UV, lluvia intensa, condiciones polvorientas, etc.
- Configuración y Calibración Simple: SenseCAP proporciona una experiencia sin código que permite a los usuarios terminar la configuración y calibración a través de la APP SenseCAP Mate.
- **Almacenamiento local: Cuando la red LoRaWAN está desconectada, el dispositivo puede almacenar localmente hasta 2000 registros de subida**.

# Aplicaciones

- Detección de líquidos
- Monitoreo de alimentos
- Cadena de frío de almacenamiento
- Soluciones de acuicultura

# Especificaciones

|**Temperatura**||
| :- | :- |
|Rango|<p>-50 a 300 ℃ </p><p>(Personalización de otro rango contactar ventas)</p>|
|Precisión|±0.5℃|
|Resolución|0.1℃|
|**Parámetros Generales**||
|Modelo del Producto|S2107|
|Microcontrolador|Wio-E5|
|Protocolo Soportado|LoRaWAN v1.0.3 Clase A|
|Bluetooth Integrado|Herramienta de App para cambiar parámetros|
|Plan de Canal LoRaWAN|IN865/EU868/US915/AU915/ AS923/KR920/RU864 \*|
|Potencia Máxima Transmitida|19dBm|
|Sensibilidad|-136dBm@SF12 BW=125KHz|
|Distancia de Comunicación|2 a 10 km (dependiendo de la antena del gateway y ambientes|
|Clasificación IP|IP66|
|Temperatura de Operación|-40 a +85 °C (LoRa DTU);-50 a 200℃(Cable); -50 a 300℃ (Sonda)|
|Humedad de Operación|0 a 100 %RH (sin condensación)|
|Peso del Dispositivo|360g|
|Longitud del Cable|3 metros|
|Certificación|CE / FCC / RoHS / TELEC|
|**Batería (Contenida en el equipo)**||
|Vida de la Batería|Hasta 10 años\*\*|
|Capacidad de la Batería|19Ah (no recargable)|
|Tipo de Batería|Batería SOCl2 Estándar Tamaño D|

# Cómo agregar 3 sensores PT1000 al S2107

## Preparación del Hardware

Conecte 3 sensores PT1000 como se muestra en el diagrama
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/1.jpg" /></div>

## Preparación del Software

Use la App SenseCAP Mate para configurar los sensores PT1000.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/2.png" /></div>

# Decodificador de Payload

## Código del Decodificador

Por favor diríjase al [Decodificador S210X](https://github.com/Seeed-Solution/SenseCAP-Decoder/tree/main/S210X) de SenseCAP

## Ejemplo de Análisis de Datos

Paquete de medición del Sensor de Temperatura:
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/3.png" /></div>

Paquetes enviados cuando se recupera de desconexión:
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/4.png" /></div>

Información de Batería para S2107:
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/s2107/5.png" /></div>

# Soporte Técnico de SenseCAP

¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://discord.gg/sensecap" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>