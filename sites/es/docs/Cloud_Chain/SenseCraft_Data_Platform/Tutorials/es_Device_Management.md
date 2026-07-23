---
sidebar_position: 3
description: Gestión de dispositivos de SenseCAP Portal
title: Gestión de dispositivos
keywords:
  - Cloud and Chain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecraft-data-platform/tutorials/device-management
aliases:
  - /Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Device_Management
last_update:
  date: 02/14/2023
  author: Matthew
createdAt: '2023-03-01'
updatedAt: '2026-07-13'
url: https://wiki.seeedstudio.com/es/sensecraft-data-platform/tutorials/device-management/
---


Aquí se te ofrecen varios métodos para gestionar dispositivos SenseCAP, incluyendo Gestión de Gateway, Gestión de Grupos de Nodos y Gestión de Nodos Sensor.

## Gateway

- ① Filtra el gateway según EUI, frecuencia, estado y hora de registro.
- ② Lista de gateways, que muestra EUI, nombre, estado, etc.
- ③ Haz clic en el EUI para entrar en la página de detalles del dispositivo y ver información básica, ubicación, vinculación, etc.

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-1.jpg)

## Gestión de grupos de nodos

Puedes gestionar los dispositivos cómodamente por grupos. Puedes crear grupos nuevos, eliminar grupos o mover dispositivos a un determinado grupo.
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-2.jpg)

## Gestión de nodos sensor

En la página de Nodos Sensor, puedes ver todos los Nodos Sensor vinculados a tu cuenta.
- ① Los dispositivos incluyen tipos como “LoRa” y “NB-IoT” y se pueden ver por categoría.
- ② Criterios de filtrado, según EUI, frecuencia, grupo, estado y hora de registro para filtrar nodos.
- ③ Lista de Nodos Sensor, que muestra EUI, nombre, estado, tipo de datos, etc.
- ④ Haz clic en el EUI para entrar en la página de detalles del dispositivo.
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-3.jpg)

## Información general

En la página de información general, puedes configurar el nombre del dispositivo y comprobar el estado del dispositivo, el estado de la batería, el registro reciente en línea, etc.

- Estado de la batería: si muestra “Insufficient Battery”, significa que la batería está por debajo del 10%.
- Registro reciente en línea: el gateway se desconectará en cuestión de minutos y otros dispositivos se desconectarán más tarde (normalmente tres intervalos de carga).

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-4.jpg)

## Canal

Dispositivo de canal único: Solo tiene un canal, lo que significa que el nodo solo puede conectar una sonda, como el LoRaWAN Sensor Node.
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-5.jpg)
Dispositivo multicanal: Con múltiples canales, se pueden conectar múltiples sondas de sensor, como el Sensor Hub.
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-6.jpg)

## Datos

Puedes comprobar los datos periódicos de cada canal, así como los datos de estado del dispositivo.
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-7.jpg)

## Configuración

Only Read Key / Full Access Key: Esto se utiliza con la API.
Configuración del dispositivo: Ajusta la frecuencia de recopilación de datos del dispositivo, que va de 5 a 43.200 minutos. La nueva frecuencia de recopilación entrará en vigor la próxima vez que el dispositivo cargue datos.
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-8.jpg)

## Ubicación

Si el dispositivo tiene función GPS, la información de ubicación se actualizará automáticamente aquí.
Si el dispositivo no tiene GPS, puedes configurar el GPS manualmente: “Search location” - “Map punctuation” - “Set as address”.

:::note
Cuando utilices el GPS del dispositivo, intenta colocar el dispositivo en exteriores sin nada que lo cubra por encima.
:::

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-9.jpg)

## Vincular dispositivo
Si quieres vincular un dispositivo nuevo, ve a la página del **Dashboard** y haz clic en **Bind Device**.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Overview/SenseCAP-Platform-overview2.png" /></div>

Introduce el EUI y la KEY del dispositivo para completar la vinculación.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Overview/SenseCAP-Platform-overview3.png" /></div>

Si quieres cambiar el dispositivo a otra cuenta o eliminar el dispositivo, puedes hacerlo en esta página.
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-10.jpg)
