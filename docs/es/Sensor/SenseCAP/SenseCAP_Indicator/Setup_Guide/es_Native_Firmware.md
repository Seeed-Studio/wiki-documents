---
description: Comenzar con el Firmware Nativo del SenseCAP Indicator
title: Firmware Nativo
keywords:
- SenseCAP Indicator
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_Indicator_Native_Firmware
sidebar_position: 1
last_update:
  date: 11/16/2023
  author: Spencer
---

# **Firmware Nativo**

Las versiones D1S y D1Pro del SenseCAP Indicator tienen sensores tVOC y CO2 integrados, y un sensor Grove TH externo para lecturas de datos precisas. El firmware nativo de SenseCAP proporciona una interfaz de usuario de detector de calidad del aire para mostrar los datos del sensor. Para las versiones D1 y D1L que no incluyen los sensores, la página de datos mostrará N/A.

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_8.png"/></div>

Pasos simples para configurar el SenseCAP Indicator en la página de configuración.

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/setting.png"/></div>

## **Configuración Wi-Fi**

Selecciona el nombre de la Wi-Fi e ingresa la contraseña y conéctala.

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_9.png"/></div>
Una vez que veas el ícono verde de Wi-Fi, ya está todo listo.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_10.png"/></div>

## **Configuración de Pantalla**

- **Brillo**: Ajusta el brillo de la pantalla.
- **Modo de Suspensión**: Apaga la pantalla según el intervalo que configures. Durante el modo de suspensión, la pantalla se apaga y no muestra ningún contenido.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_15.png"/></div>

## **Configuración de Fecha y Hora**

- **Formato de Hora:** Puedes configurar formato de 24H o 12H.
- **Actualización Automática de Hora/Actualización Automática de Zona**: Cuando el dispositivo está conectado a WiFi, obtendrá automáticamente la zona horaria y fecha correspondientes.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_16.png"/></div>

**Configuración manual**: Si la hora obtenida a través de la zona horaria no puede identificar automáticamente el horario de invierno o el dispositivo está desconectado, entonces puedes configurar manualmente la zona horaria

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_17.png"/></div>

## **Datos del Sensor**

Ofrecemos cuatro versiones diferentes: D1, D1S, D1L y D1Pro. Cada versión está diseñada para satisfacer diferentes necesidades de aplicación sin costo adicional por hardware innecesario. Aquí están las diferencias entre las versiones:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/version.png"/></div>

El firmware del dispositivo tiene dos páginas que muestran datos para tVOC, CO2, temperatura y humedad.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_12.png"/></div>

:::caution **Nota:**
La interfaz de usuario para el firmware nativo permanece igual para todas las versiones del SenseCAP Indicator. Para las versiones D1 y D1L que no tienen sensores integrados, los datos del sensor mostrarán 'N/A'. Puedes conectar con otros sensores Grove y crear tu propia interfaz de usuario personalizada.
:::

Haz clic en el sensor específico para entrar a la página de información detallada, y puedes elegir mostrar el valor en las últimas 24h o una semana. Los datos se mantendrán dentro de una semana.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_13.png"/></div>

:::tip ¿Buscas ChatGPT x DALL·E?
Ve a [SenseCAP Indicator X OpenAI](/es/SenseCAP_Indicator_OpenAI_X_Overview)
:::
