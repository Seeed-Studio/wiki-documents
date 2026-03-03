---
description: SenseCAP M2 Data Only Quick Start
title: Inicio Rápido de SenseCAP M2 Data Only
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M2_Data_Only/Quick_Start
last_update:
  date: 02/14/2023
  author: Matthew
---

Inicio Rápido de SenseCAP M2 Data Only
=======================================

¡A continuación encontrarás los pasos necesarios para configurar fácilmente tu hotspot en pocos minutos!

**Instrucciones en Video**
==========================

* * *

**Paso 1: Instalar las Apps de Helium y SenseCAP y Crear Cuentas**
==================================================================

- Instalar las Apps Helium Hotspot y SenseCAP MX Hotspot
- Busca y descarga "Helium Hotspot" y "SenseCAP MX Hotspot" desde la Apple Store o Google Play e instala estas dos Apps en tu teléfono.

La App "**Helium Hotspot**" es la App oficial de Helium y es necesaria para la autenticación de la billetera Helium. Puedes usarla para registrar y gestionar la billetera Helium y realizar transacciones de Hotspot y HNT.

![Helium Hotspot App](https://www.sensecapmx.com/wp-content/uploads/2022/07/helium-app-logos-1.webp)

La App "**SenseCAP MX Hotspot**" es la App oficial de hotspot SenseCAP desarrollada por el equipo SenseCAP MX. Puedes usarla para registrar y gestionar tu hotspot SenseCAP.

![SenseCAP Hotspot App](https://www.sensecapmx.com/wp-content/uploads/2022/07/SenseCAP-Hotspot-App.png)

- Crear una Billetera Helium en la App Helium

Al generar una nueva billetera Helium, se te mostrará una contraseña de 12 palabras. Por favor, anota o respalda la contraseña de 12 palabras en orden y mantenla en un lugar seguro ya que la contraseña de 12 palabras NUNCA puede ser recuperada si se ha perdido.

- Crear una Cuenta en la App SenseCAP MX Hotspot

Vincula la Billetera Helium a tu Cuenta SenseCAP, y estarás listo para agregar el nuevo hotspot.

![Deeplink Helium Wallet App](https://www.sensecapmx.com/wp-content/uploads/2022/07/deeplink-1.png)

**Cómo Descargar la App Helium y Crear una Billetera**
======================================================

**Cómo Descargar SenseCAP y Crear una Cuenta**
==============================================

* * *

**Paso 2: Configurar SenseCAP M2 y Conectar a Internet**
========================================================

- Configurar SenseCAP M2

Conecta la antena, el adaptador de corriente y el cable ethernet (no necesario) al hotspot y enciéndelo.

El **LED de alimentación se mostrará** en **rojo**, y en aproximadamente 15s (si usas PoE para alimentar, este tiempo de espera será un poco más largo), el indicador en la parte superior parpadeará en **verde**, indicando que el hotspot se está iniciando.

Después del arranque en aproximadamente 1 min, el indicador mostrará **verde** sólido si el hotspot se ha conectado a internet a través de un cable ethernet; o mostrará **azul** sólido cuando esté esperando configuración adicional de Wi-Fi.

![SenseCAP M2 Quick Start](https://www.sensecapmx.com/wp-content/uploads/2022/07/m2-1.png)

**Actualización de Firmware**
=============================

Durante el primer arranque, se sugiere conectar el hotspot a internet a través del cable ethernet y esperar aproximadamente 30 minutos para finalizar la actualización del firmware antes de tomar pasos adicionales. (También puedes hacer este paso después de que el hotspot esté conectado a la red Wi-Fi).

La actualización del firmware es automática y tomará 10-30 minutos. El indicador cambiará de parpadear en **naranja** a **verde** sólido durante el proceso de actualización una o dos veces. El hotspot se reiniciará después de que la actualización del firmware esté completada, y el indicador se mantendrá en **verde** sólido.

**NOTA**: Procesar pasos adicionales antes de que el hotspot haya sido actualizado al firmware más reciente resultará en un error inesperado y no podrá continuar, por favor ten paciencia con el proceso de actualización y no apagues o desconectes internet.

**Conexión PoE**
================

SenseCAP M2 soporta PoE (Power on Ethernet) y es compatible con el estándar IEEE 802.3 af. Necesitarás tener un switch PoE adicional que proporcione alimentación DC de 40V-57V como PSE (Power Sourcing Equipment) si tu módem/router no soporta PoE.

![SenseCAP M2 POE Connection Setup](https://www.sensecapmx.com/wp-content/uploads/2022/07/m2-poe.png)

- Conectar el Hotspot vía Bluetooth en la App SenseCAP Hotspot

Presiona el botón por 5s hasta que el indicador azul parpadee lentamente para entrar al modo de configuración y sigue las instrucciones en la App para conectar el hotspot.

![SenseCAP M2 Setup - App](https://www.sensecapmx.com/wp-content/uploads/2022/07/m2-setup-app-scaled.jpg)

**NOTA**: Por favor elige "**SenseCAP M2 (Data-Only)**" para el Hotspot SenseCAP M2 Data Only. Si tienes más de un hotspot alrededor, puedes identificar el hotspot con la dirección MAC de 6 cifras bajo el nombre del hotspot.

- Configurar la Conexión Wi-Fi

Haz clic en "Scan Networks", selecciona el Wi-Fi, e ingresa la contraseña; o haz clic en "Use Ethernet Instead" si ya usas un cable ethernet.

![SenseCAP M2 Wifi Setup](https://www.sensecapmx.com/wp-content/uploads/2022/07/wifi.png)

* * *

**Paso 3: Incorporación del Hotspot Helium y Afirmar Ubicación**
================================================================

- Agregar el Hotspot a la Red Helium

Por favor sigue las instrucciones de la App para agregar el hotspot a la Red Helium.

**NOTA**: Por favor nota que las tarifas de incorporación NO están incluidas en el producto. Una tarifa de incorporación de \$10 y una tarifa de afirmación de ubicación de \$5 serán deducidas de las billeteras de los usuarios para incorporar. Por favor asegúrate de tener suficiente Crédito de Datos Helium en la Billetera cuando procedas con el proceso de incorporación.

- Afirmar Ubicación del Hotspot

Por favor sigue las instrucciones de la App, elige la ubicación de colocación real en el mapa, y afirma la ubicación.

* * *

**¡Tu SenseCAP M2 está listo para funcionar! ¡Bienvenido a The People's Network!**
===================================================================================

![Longfi](https://www.sensecapmx.com/wp-content/uploads/2022/06/longfi.webp)
