---
sidebar_position: 2
title: Precios de API para SenseCraft Data Platform
description: Precios de API para SenseCraft Data Platform
keywords:
- Cloud
- SenseCraft Data Platform
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png        
slug: /es/sensecraft-fee/sensecraft-data-platform-api-pricing
aliases:
  - /es/Cloud_Chain/SenseCAP_API/API_pricing
last_update:
  date: 06/06/2025
  author: Jancee
---

# Precios de API para SenseCraft Data Platform

===============


Con el portal web de `SenseCraft Data Platform`, solo pagas por lo que usas sin tarifas mínimas o uso obligatorio de servicios.

*   um (up-message): El número de mensajes subidos por el sensor.
*   dm(download-message): El número de mensajes que obtienen datos históricos a través de la API.

Reglas
-----

1.  Agregar un dispositivo sensor a cada cuenta de usuario, y el sistema distribuirá una cierta cantidad de um y dm de forma gratuita.
2.  Por cada dato subido por el sensor, se consume 1 um.
3.  Obtener un dato histórico por HTTP, y consume 1 dm.
4.  La suscripción a datos del sensor por medio de MQTT no consumirá dm.
5.  um /dm puede comprar el código de recarga en línea, y luego ingresar el código de recarga en la cuenta para completar la recarga.
6.  Cuando um/dm es 0, el sistema enviará un mensaje para recordar al usuario sobre la tarifa vencida. Si el tiempo es más de 1 mes, la función de la cuenta no podrá ser utilizada.

Nivel Gratuito  

------------

| Tipo de Dispositivo (un dispositivo) | um (up-message) | dm (download-message) |
| --- | --- | --- |
| Nodo Sensor LoRaWAN | 100,000 | 1000,000 |
| SensorHub | 250,000 | 2,500,000 |

Tarifas  

-------

| Precio | um (up-message) | dm (download-message) |
| --- | --- | --- |
| $ 0.99 | 100,000 | 1,000,000 |

Prepago
--------

Por favor contacte al personal de ventas de SenseCAP para recargar.

Consejos
----

*   Se recomienda suscribirse a los datos del sensor usando MQTT sin consumir el número de dm (download-message).
*   La subida de datos del Sensor LoRaWAN se ve afectada por Internet (el gateway se conecta al Portal a través de Internet). Cuando el acceso a Internet es inestable, el Nodo Sensor reenviará los datos hasta tres veces para asegurar que los datos puedan ser transmitidos exitosamente al Portal SenseCAP. El Nivel Gratuito se basa en el peor escenario de la red, por lo que cuánto tiempo lo uses depende de la situación.

Ejemplo
-------

Según el tipo de dispositivo y el intervalo de subida de datos, el tiempo aproximado disponible es el siguiente:

| Tipo de Dispositivo (un dispositivo)                | Intervalo de Datos | Tiempo          |
|-----------------------------------------|---------------|---------------|
| Sensor de Temperatura y Humedad LoRaWAN | 1 hora        | 2 ~ 5 años   |
|                                         | 30 minutos    | 1 ~ 2.5 años |
|                                         | 5 minutos     | 4 ~ 10 meses |
| Sensor de Intensidad de Luz LoRaWAN          | 1 hora        | 4 ~ 10 años  |
|                                         | 30 minutos    | 2 ~ 5 años   |
|                                         | 5 minutos     | 8 ~ 20 meses |
| SensorHub (5 tipos de mediciones)     | 1 hora        | 5.6 años     |
|                                         | 30 minutos    | 2.8 años     |
|                                         | 5 minutos     | 11 meses     |
| SensorHub (7 tipos de mediciones)     | 1 hora        | 4 años       |
|                                         | 30 minutos    | 2 años       |
|                                         | 5 minutos     | 8 meses      |
