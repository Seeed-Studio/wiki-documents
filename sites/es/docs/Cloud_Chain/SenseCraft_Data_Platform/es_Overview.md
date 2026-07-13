---
sidebar_position: 1
title: Descripción general
description: Guía de inicio rápido para SenseCraft Data Platform - gestiona tus dispositivos SenseCAP y visualiza datos de sensores con una plataforma en la nube segura y fiable.
keywords:
  - Cloud and Chain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cloud/sensecraft-data/sensecraft-data-platform/overview
aliases:
  - /Cloud_Chain/SenseCAP_Portal/QuickStart
last_update:
  date: 06/06/2025
  author: Matthew
createdAt: '2023-03-01'
updatedAt: '2025-07-10'
url: https://wiki.seeedstudio.com/es/cloud/sensecraft-data/sensecraft-data-platform/overview/
---

# Inicio rápido de SenseCraft Data Platform

:::tip
**Aviso:**  
A partir de 2025, **SenseCAP Portal** ha pasado a llamarse oficialmente **SenseCraft Data Platform**. La funcionalidad sigue siendo la misma, con mejoras continuas para ofrecer un mejor soporte a escenarios de AIoT y multi-sensor.
:::

¿Cómo trabajar con SenseCraft Data Platform? ¡Vamos allá!

## Introducción

La función principal de SenseCraft Data Platform es gestionar los dispositivos SenseCAP y almacenar los datos. Está construida sobre Azure, un servicio en la nube seguro y fiable de Microsoft. Puedes solicitar una cuenta y vincular todos los dispositivos a esta cuenta. SenseCraft proporciona una plataforma web y una API. La plataforma web incluye Panel de control, Gestión de dispositivos, Gestión de datos y Gestión de claves de acceso, mientras que la API está abierta a los usuarios para un desarrollo posterior.

## Sitio web

- Estación global: <a href="https://sensecap.seeed.cc/">https://sensecap.seeed.cc</a>

## Crear una nueva cuenta

① Selecciona "Register Account", introduce la información de correo electrónico y haz clic en “Register”. Se enviará un correo de registro a tu buzón.

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-register-1.jpg)

② Abre el correo "SenseCAP..." o "SenseCraft…", haz clic en el enlace, rellena la información correspondiente y completa el registro.
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-register-2.jpg)

③ Vuelve a la interfaz de inicio de sesión y completa el acceso.
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-register-3.jpg)

:::note
Si no encuentras el correo, es posible que se haya identificado automáticamente como “spam” y se haya colocado en la “papelera”.<br />
Si olvidas tu contraseña al iniciar sesión, puedes recuperarla a través de tu correo electrónico.
:::

## Descargar la App SenseCAP

Instala `SenseCraft App` e inicia sesión.

- Android: <a href="http://sensecap-app-download.seeed.cn/">Download App</a> aquí y escanea el código QR.
- iOS: Busca “SenseCraft” en la App Store.

## Vincular dispositivo

Cada dispositivo SenseCAP tiene una etiqueta en la carcasa como se muestra en la figura siguiente. El EUI es el código único de un dispositivo SenseCAP. La Key es un campo de cifrado y se puede ignorar.

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/label.jpg)


En la página principal de la App SenseCAP, haz clic en el botón “Bind” y luego escanea el código QR para vincular el dispositivo.

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Overview/SenseCAP-Platform-overview1.png" /></div>

En SenseCAP Platform, ve a la página del Panel de control y haz clic en **Bind Device**.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Overview/SenseCAP-Platform-overview2.png" /></div>

Introduce el EUI y la KEY del dispositivo para completar la vinculación.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Overview/SenseCAP-Platform-overview3.png" /></div>

## Comprobar datos

Inicia sesión en `SenseCraft Data Platform`, comprueba el estado del dispositivo y la información básica en la sección “Device/Sensor Node” y visualiza los datos del sensor en la sección “Data/Table”.

<div align="left"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCraft_Data_Platform/Overview/SenseCAP-Platform-overview4.png" /></div>
