---
sidebar_position: 1
title: Descripción General
description: Guía de inicio rápido para la Plataforma de Datos SenseCraft — gestiona tus dispositivos SenseCAP y visualiza datos de sensores con una plataforma en la nube segura y confiable.
keywords:
- Cloud and Chain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png        
slug: /es/cloud/sensecraft-data/sensecraft-data-platform/overview
aliases:
  - /es/Cloud_Chain/SenseCAP_Portal/QuickStart
last_update:
  date: 06/06/2025
  author: Matthew
---

# Inicio Rápido de la Plataforma de Datos SenseCraft

:::tip
**Aviso:**  
A partir de 2025, **SenseCAP Portal** ha sido oficialmente renombrado a **Plataforma de Datos SenseCraft**. La funcionalidad permanece igual, con mejoras continuas para brindar mejor soporte a escenarios AIoT y multi-sensor.
:::

¿Cómo trabajar con la Plataforma de Datos SenseCraft? ¡Vamos!

## Introducción

La función principal de la Plataforma de Datos SenseCraft es gestionar dispositivos SenseCAP y almacenar datos. Está construida sobre Azure, un servicio en la nube seguro y confiable de Microsoft. Puedes solicitar una cuenta y vincular todos los dispositivos a esta cuenta. SenseCraft proporciona una plataforma web y API. La plataforma web incluye Panel de Control, Gestión de Dispositivos, Gestión de Datos y Gestión de Claves de Acceso, mientras que la API está abierta a los usuarios para desarrollo adicional.

## Sitio Web

- Estación Global: <a href="https://sensecap.seeed.cc/">https://sensecap.seeed.cc</a>

## Crear una nueva cuenta

① Selecciona "Registrar Cuenta", ingresa la información del correo electrónico y haz clic en "Registrar". Se enviará un correo de registro a tu buzón.

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-register-1.jpg)

② Abre el correo "SenseCAP..." o "SenseCraft…", haz clic en el enlace, completa la información relevante y finaliza el registro.
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-register-2.jpg)

③ Regresa a la interfaz de inicio de sesión y completa el inicio de sesión.
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-register-3.jpg)

:::note
Si no puedes encontrar el correo, puede que haya sido identificado automáticamente como "spam" y puesto en la "papelera".<br />
Si olvidas tu contraseña al iniciar sesión, puedes recuperarla a través de tu correo electrónico.
:::

## Descargar la App SenseCAP

Instala `SenseCraft App` e inicia sesión.

- Android: <a href="http://sensecap-app-download.seeed.cn/">Descargar App</a> aquí, y escanea el código QR.
- iOS: Busca "SenseCraft" en la App Store.

## Vincular Dispositivo

Cada dispositivo SenseCAP tiene una etiqueta en la carcasa como se muestra en la figura a continuación. El EUI es el código único de un dispositivo SenseCAP. La Clave es un campo de encriptación y puede ser ignorado.
En la página principal de la App SenseCAP, haz clic en el botón "Vincular", luego escanea el código QR para vincular el dispositivo.

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/label.jpg)

## Verificar Datos

Inicia sesión en la `Plataforma de Datos SenseCraft`, verifica el estado del dispositivo e información básica en la sección "Dispositivo/Nodo Sensor", y visualiza los datos del sensor en la sección "Datos/Tabla".
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/data_overview.jpg)
