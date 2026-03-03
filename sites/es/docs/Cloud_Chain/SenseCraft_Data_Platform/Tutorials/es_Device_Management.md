---
sidebar_position: 3
description: Gestión de Dispositivos del Portal SenseCAP
title: Gestión de Dispositivos
keywords:
- Cloud and Chain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png        
slug: /es/sensecraft-data-platform/tutorials/device-management
aliases:
  - /es/Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Device_Management
last_update:
  date: 02/14/2023
  author: Matthew
---


Aquí se te ofrecen varios métodos para gestionar dispositivos SenseCAP, incluyendo Gestión de Gateway, Gestión de Grupos de Nodos y Gestión de Nodos Sensores.

## Gateway

① Filtrar el gateway basado en EUI, frecuencia, estado y tiempo de registro.
② Lista de gateways, mostrando EUI, nombre, estado, y así sucesivamente.
③ Hacer clic en EUI para ingresar a la página de detalles del dispositivo para ver información básica, ubicación, vinculación, etc.

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-1.jpg)

## Gestión de Grupos de Nodos

Puedes gestionar dispositivos convenientemente por grupos. Puedes crear nuevos grupos, eliminar grupos o mover dispositivos a un grupo determinado.
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-2.jpg)

## Gestión de Nodos Sensores

En la página de Nodos Sensores, puedes ver todos los Nodos Sensores vinculados a tu cuenta.
① Los dispositivos contienen tipos como "LoRa" y "NB-IoT" y pueden ser visualizados por categoría.
② Criterios de filtro, según EUI, frecuencia, grupo, estado y tiempo de registro filtrar nodo.
③ Lista de Nodos Sensores, mostrando EUI, nombre, estado, tipo de datos, y así sucesivamente.
④ Hacer clic en EUI para ingresar a la página de detalles del dispositivo.
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-3.jpg)

## Información General

En la página de información general, puedes establecer el nombre del dispositivo, y verificar el estado del dispositivo, estado de la batería, registro reciente en línea y etc..

- Estado de la Batería: si muestra "Batería Insuficiente", significa que la batería está por debajo del 10%.
- Registro reciente en línea: el gateway se desconectará en minutos, y otros dispositivos se desconectarán después (típicamente tres intervalos de carga).

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-4.jpg)

## Canal

Dispositivo de Canal Único: Solo un canal, lo que significa que el nodo solo puede conectar una sonda, como el Nodo Sensor LoRaWAN.
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-5.jpg)
Dispositivo Multicanal: Con múltiples canales, se pueden conectar múltiples sondas sensoras, como el Sensor Hub.
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-6.jpg)

## Datos

Puedes verificar los datos del período de cada canal, así como los datos del estado del dispositivo.
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-7.jpg)

## Configuraciones

Clave de Solo Lectura / Clave de Acceso Completo: Esto se usa con API.
Configuraciones del Dispositivo: Ajustar la frecuencia de recolección de datos del dispositivo, que va de 5 a 43,200 minutos. La nueva frecuencia de recolección tomará efecto la próxima vez que el dispositivo cargue datos.
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-8.jpg)

## Ubicación

Si el dispositivo tiene función GPS, la información de ubicación se actualizará automáticamente aquí.
Si el dispositivo no tiene GPS, puedes establecer manualmente el GPS: "Buscar ubicación" - "Puntuación en mapa" - "Establecer como dirección".

:::note
Cuando uses el GPS del Dispositivo, trata de colocar el dispositivo al aire libre sin protección arriba.
:::

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-9.jpg)

## Vincular Dispositivo

Si quieres cambiar el dispositivo a otra cuenta o eliminar el dispositivo, puedes hacerlo en esta página.
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-10.jpg)
