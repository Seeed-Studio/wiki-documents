---
sidebar_position: 1
description: Panel de Control del Portal SenseCAP
title: Panel de Control
keywords:
- Cloud and Chain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png        
slug: /es/sensecraft-data-platform/tutorials/dashboard
aliases:
  - /es/Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Dashboard
last_update:
  date: 02/14/2023
  author: Matthew
---


El Panel de Control te permite monitorear el estado del dispositivo y los datos del sensor en tiempo real.

## Descripción General

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-dashboard-1.jpg)

① Agregar "Escena" o "Gráfico".
② Resumen de Dispositivos: muestra el número total de dispositivos.
③ Monitoreo: cuenta todos los dispositivos desconectados y dispositivos con batería baja.
④ Intervalo de actualización de datos: establece cómo y en qué momento se actualiza la página (página web).
⑤ Anuncio: aviso para actualización de versión del portal y otra información.
⑥ Escena: el módulo de visualización correspondiente se configura según el área del sensor.
⑦ Gráfico: se pueden seleccionar uno o más sensores del mismo tipo para mostrar datos históricos durante un tiempo.

## Configurar Escena

Según el sitio de instalación o escenario de aplicación, puedes elegir crear datos de escena, agrupando diferentes datos y mostrando los datos más recientes en forma de iconos.
Ejemplo: Hay varios grupos bajo la cuenta: estación-1, estación-2, estación-3…Crear una escena para estación-1.
① Personaliza el nombre, crea la visualización de escena de "estación-1", y selecciona "Agregar tipo de medición".

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-dashboard-2.jpg)

② Selecciona los datos de medición que se mostrarán bajo el grupo "estación-1" y confirma.

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-dashboard-3.jpg)

## Configurar Gráficos

Puedes crear gráficos para mostrar información como tipo de medición, EUI del dispositivo, rango de tiempo, etc.
① Selecciona "Agregar"- "Gráfico".
② Personaliza el nombre y selecciona "agregar tipo de medición".
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-dashboard-4.jpg)
③ Selecciona el tipo de datos y tiempo a mostrar.
④ Selecciona un grupo.
⑤ Selecciona el nodo sensor específico bajo el grupo.
⑥ Selecciona el tipo de medición.
⑦ Confirma.

:::note
Solo se puede agregar un tipo de medición por gráfico. Agregar hasta 5 curvas por gráfico.
:::

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-dashboard-5.jpg)
