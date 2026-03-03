---
sidebar_position: 1
description: Conceptos Básicos del Dashboard
title: Conceptos Básicos del Dashboard
keywords:
- Cloud and Chain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/sensecraft-blockchain/blockchain-dashboard/dashboard-basics
aliases:
  - /es/Cloud_Chain/SenseCAP_Dashboard/Dashboard_Basics
last_update:
  date: 02/14/2023
  author: Matthew
---

# Conceptos Básicos del Dashboard

**Pantalla Principal del Dashboard**
=========================

Una vez que hayas registrado tu hotspot en el dashboard, encontrarás lo siguiente (ver captura de pantalla a continuación).

![SenseCAP M1 Dashboard](https://www.sensecapmx.com/wp-content/uploads/2022/07/sensecap-m1-dashboard.png)

Podrás ver rápidamente todas las actualizaciones de estado del hotspot en esta página. Si registras más de 1 hotspot, se agregarán como filas separadas.

Simplemente haz clic en el nombre del hotspot o SN para ver más detalles explicados a continuación.

* * *

**Qué Información Puedes Encontrar**
=================================

El dashboard te permite monitorear la configuración de tus hotspots, incluyendo **temperatura de CPU, configuración de red**, **progreso de sincronización de blockchain, y mucho más**. A continuación se presenta un desglose de lo que representa cada configuración.

**Nota**: La información presentada dentro del dashboard se actualiza cada 5 minutos. Si actualizas cambios en la configuración de red, actualizar el dashboard en 5 minutos proporcionará datos actualizados.

**Detalles del Hotspot**
-------------------

- **SN**: El número de serie de tu hotspot registrado.
- **Nombre del Hotspot**: Nombre de tu hotspot registrado en la blockchain.
- **Estado Hotspot Online**: Basado en tu hotspot.
- **Estado Helium Online**: El estado del hotspot se basa estrictamente en la API de helium o ETL-API, dependiendo de qué datos P2P estén actualizados.
- **Dirección del Hotspot**: La dirección blockchain de tu hotspot. Puedes hacer clic en la dirección del hotspot para ver tu hotspot en el sitio web de Helium Explorer.
- **Propietario del Hotspot**: Tu billetera (a quien está registrado el hotspot en la 'Helium App') Puedes hacer clic en el propietario del hotspot para ver detalles de toda tu cuenta en el sitio web de Helium Explorer.
- **Dirección IP Pública:** La dirección IP pública de tu Hotspot.

**Detalles Adicionales del Hotspot Continuación**
----------------------------------------

- **Tiempo de Recolección**: La última vez que se recolectaron datos del hotspot. -UTC7.
- **Agregado a la Red Helium**: Muestra cuándo el hotspot fue registrado en la blockchain de Helium. -UTC7.
- **Tiempo de Producción**: Muestra cuándo el hotspot fue fabricado. -UTC7.

**Detalles de Antena y Región**
----------------------------

- **Antena**: Los datos de ganancia de la antena provienen de Helium APP. Si has cambiado la antena, necesitarás completar el proceso "Actualizar Antena" en la Helium APP para mostrar la ganancia correcta aquí.
- **Región**: Esta región se basa en la ubicación afirmada del hotspot en la Helium APP.
  - Puede que no veas una "**Región**" hasta que afirmes una ubicación, puede resultar en "Desconocido".
- **Coordenadas**: Muestra las coordenadas GPS de la ubicación afirmada de tu Hotspot.

**Detalles Adicionales**
----------------------

- **Nombre del Lote**: Fecha de fabricación del hotspot.
- **Etiqueta Personalizada**: Cualquier etiqueta personalizada que hayas asociado con este Hotspot.
  - Si estás ejecutando múltiples hotspots en diferentes ubicaciones, hemos hecho más fácil para ti etiquetar cada hotspot y ordenar por etiquetas dentro del dashboard. Simplemente agrega una etiqueta personalizada para diferenciar hotspots entre diferentes ubicaciones/hosts.

**Detalles Adicionales de Red**
------------------------------

- **Nombre Wi-fi**: Si el hotspot está conectado vía Wi-Fi, mostrará el nombre del Wi-Fi aquí, si está conectado vía cable Ethernet, no mostrará nada.
- **Dirección IP Wi-Fi**: Si tu Hotspot está conectado con Wi-Fi, verás la dirección IP de tu red interna aquí.
- **Dirección IP LAN**: Si tu Hotspot está conectado con un cable Ethernet, verás la dirección de tu red interna aquí.

**Detalles de Hardware del Hotspot**
----------------------------

- **Versión de Firmware**: Versión actual de firmware instalada en tu Hotspot.
- **Tiempo de Actividad**: El tiempo de actividad indica la duración desde el último encendido del hotspot, que se actualizará cuando haya conexión a internet. Si no podemos detectar un estado dentro de 30 minutos, el tiempo de actividad mostraría **NINGUNO**.
- **ID de CPU:** El ID # de CPU de la CPU de tu hotspot.
  - El ID de CPU será requerido para ingresar cuando desees hacer **TurboSync** en tu dispositivo. Puedes hacer clic en el ícono a la derecha del ID de CPU para copiar.
- **Temperatura de CPU**: Temperatura actual de funcionamiento de tu CPU.
- **Estado del Ventilador**: Muestra si el ventilador está funcionando con fecha + marca de tiempo del último estado cuando estaba ENCENDIDO o APAGADO.
  - El ventilador se encenderá automáticamente cuando la temperatura de la CPU esté por encima de 70℃, y no se apagará hasta que se enfríe a 45℃.
- **Uso de CPU**: Muestra el uso actual de la CPU en unidades de %.
- **Uso de Memoria**: Muestra el uso actual de memoria en unidades de %.
- **Nota**: Dependiendo del modelo que compres, puedes ver diferentes detalles de memoria.
  - 1900 MB = 2GB Raspberry Pi
  - 3845 MB = 4GB Raspberry Pi
  - 7690 MB = 8GB Raspberry Pi
- **Uso de SD**: Muestra el uso actual de memoria de la tarjeta SD.
  - 58776 MB = tarjeta SD de 64GB

**Detalles de Recompensas del Hotspot**
--------------------------

**Recompensas del Hotspot**: Muestra tus recompensas HNT.

- **Últimas 24H**: Cuál fue tu recompensa de las últimas 24 horas (ventana móvil de 24H).
- **Últimos 7D**: Cuál fue tu recompensa de los últimos 7 días (ventana móvil de 7D).
- **Últimos 30D:** Cuál fue tu recompensa de los últimos 30 días (ventana móvil de 30D).
- **Total**: Muestra el total de HNT recompensado desde que está online.

Hay un mecanismo complejo para las recompensas. Mientras la configuración de red, ubicación del hotspot, antena, conexión a internet y estado del hotspot estén en buen estado/saludables, el dispositivo funcionará en consecuencia. La Documentación de Helium siempre es un gran lugar para aprender más sobre el mecanismo de recompensas. >>[**https://docs.helium.com/blockchain/**](https://docs.helium.com/blockchain/mining)

**Detalles de Enlaces Útiles**
------------------------

![Useful Links](https://www.sensecapmx.com/wp-content/uploads/2022/07/useful-links-1.png)

- **Centro de Documentación**: >> Enlace al Centro de Documentación/Soporte de SenseCAP
- **Verificador de Puerto**: Enlace a >> PortChecker.co para determinar si tu PUERTO está abierto.
- **Encontrar Dirección IP**: Enlace a WhatIsMyIPAddress.com para mostrar tu IP actual.

**Detalles de Cuenta**
-------------------

Después de iniciar sesión en tu panel de control, deberías ver un panel de navegación en el lado izquierdo como se muestra a continuación.

![SenseCAP Dashboard](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-13-1.png)

- **Dashboard**: Página de inicio del panel de control.
- **Hotspot**: Lista todos tus hotspots que están registrados.
- **Account**: Página de gestión de cuenta, incluyendo credenciales de API, restablecimiento de contraseñas, etc.
