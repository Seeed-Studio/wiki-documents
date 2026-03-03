---
description: SenseCAP M2 Data Only Local Console
title: SenseCAP M2 Data Only Local Console
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/M2_Local_Console
last_update:
  date: 02/14/2023
  author: Matthew
---

**Cómo acceder a la Consola Local**
===================================

Hay dos formas de acceder a la Consola Local.

* * *

**Acceso a través del router**
------------------------------

*   **Paso 1**: Conecta tu computadora y Hotspot al mismo router.

Puedes conectar el dispositivo al router a través de un cable de red, o puedes configurar la conexión WI-FI a través de la APP SenseCAP Hotspot.

**Nota**: Tu computadora y dispositivo deben estar conectados al mismo router/red.

![SenseCAP M2 Local Console Step 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-3.png)

*   **Paso 2**: Obtén la dirección IP de tu dispositivo

Si no tienes una cuenta del Panel de SenseCAP MX, o no has agregado tu dispositivo al Panel, por favor encuentra la dirección IP de tu dispositivo en la página de administración de tu router, o ejecuta un diagnóstico en tu APP Helium para obtener la dirección IP.

Si ya tienes registrada una cuenta del Panel de SenseCAP MX y has agregado tu dispositivo, puedes encontrar la dirección IP de tu dispositivo desde el panel:

*   *   Si estás conectado a través de Wi-Fi, verás la dirección IP Wi-Fi del dispositivo para hacer clic.
    *   Si estás conectado a través de cable Ethernet o LAN local, verás la dirección LAN del dispositivo para hacer clic.

*   **Paso 3**: Obtén el nombre de usuario y contraseña de tu dispositivo

Obtén el nombre de usuario y contraseña de la información en la parte posterior del dispositivo.

**Por razones de seguridad, cada dispositivo tiene una contraseña única. Después de iniciar sesión, puedes cambiar la contraseña.**

![SenseCAP M2 Local Console Step 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-4.png)

*   **Paso 4**: Abre el navegador en la PC e inicia sesión

Ingresa la dirección IP (que obtuviste) en un navegador para entrar a la Consola Local. Luego ingresa el nombre de usuario y contraseña de tu dispositivo, y haz clic en el botón Iniciar sesión.

![SenseCAP M2 Local Console Login](https://www.sensecapmx.com/wp-content/uploads/2022/07/login.png)

* * *

**Acceso a través del hotspot AP del dispositivo**
--------------------------------------------------

*   **Paso 1**: Enciende el hotspot AP del dispositivo

Presiona el botón durante 5s hasta que el indicador azul parpadee lentamente para entrar al modo de configuración.

*   **Paso 2**: Conéctate al hotspot AP

El nombre del hotspot AP es SenseCAP_XXXXXX (dirección MAC de 6 cifras), Conecta tu computadora a este hotspot AP.

*   **Paso 3**: Obtén el nombre de usuario y contraseña de tu dispositivo
*   **Paso 4**: Abre el navegador en la PC e inicia sesión

Ingresa la dirección IP (**192.168.168.1**) en un navegador para entrar a la Consola Local. Luego ingresa el nombre de usuario y contraseña de tu dispositivo, y haz clic en el botón Iniciar sesión.

* * *

**Estado**
==========

En la página de inicio, hay principalmente algunas visualizaciones de estado, como conexión de red, paquetes LoRa enviados y recibidos, información del sistema, uso de memoria, etc.

**NOTA:** Necesitarás esperar un momento para que aparezca el mensaje completo.

![SenseCAP M2 Local Console Guide](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-5.png)

**NOTA:** En el histograma de paquetes Lora, no necesariamente son paquetes válidos de la Red Helium.

En la información del sistema, puedes ver la versión del programa helium, la dirección de los hotspots, y el parámetro de región actualmente en uso.

![SenseCAP M2 Local Console Guide Region](https://www.sensecapmx.com/wp-content/uploads/2022/07/system.png)

* * *

**Sistema**
===========

**Sistema y Hora**
------------------

*   _Ruta de página_：Sistema -> Sistema

Aquí puedes configurar los aspectos fundamentales de tu dispositivo como su nombre de host o la zona horaria. y Puedes modificar la configuración de sincronización de tiempo. Por supuesto, en general, no tienes que cambiar nada en esta página.

![SenseCAP M2 Local Console Guide Time](https://www.sensecapmx.com/wp-content/uploads/2022/07/time.png)

* * *

**Luz Respiratoria**
--------------------

*   _Ruta de página_： Sistema -> Luz Respiratoria

La Luz Respiratoria es un indicador del dispositivo hotspot, puedes configurar el comportamiento de la luz.

![SenseCAP M2 Local Console Guide Breathing Light](https://www.sensecapmx.com/wp-content/uploads/2022/07/breathing-light.png)

* * *

**Región**
----------

*   _Ruta de página_：Sistema -> Región

Aquí puedes cambiar el parámetro de región. El valor predeterminado de fábrica es 'AUTO', lo que significa：

*   Si no tienes una ubicación declarada para el hotspot, la región utilizada se basa en tu tipo de hotspot, por ejemplo, el modelo de dispositivo M2-EU868 usa la región EU868.
*   Si tienes una ubicación declarada en el hotspot, Ajuste automático de la región según la ubicación.

En general, no necesitas configurar una región. En casos especiales: Si no tienes una ubicación declarada para un hotspot (Solo Datos), puedes elegir otra región. Por ejemplo, el modelo de dispositivo M2-US915 puede configurarse a AU915 en Australia.

![SenseCAP M2 Local Console Guide Breathing Region Config](https://www.sensecapmx.com/wp-content/uploads/2022/07/region.png)

**NOTA:** Si tienes una ubicación declarada en el hotspot, La configuración de Región DEBE ser **AUTO**.

* * *

**Contraseña LuCi**
-------------------

*   **Ruta de página**：Sistema -> Administración

Aquí puedes cambiar la contraseña LuCi.

![SenseCAP M2 Local Console Guide Breathing LuCi Password](https://www.sensecapmx.com/wp-content/uploads/2022/07/change-password.png)

* * *

**Restaurar Configuración de Fábrica**
--------------------------------------

*   _Ruta de página_：Sistema -> Firmware

Puedes recuperar tu contraseña LuCi restaurando la configuración de fábrica si la has olvidado. Sin embargo, después de restaurar la configuración de fábrica, el dispositivo se actualizará nuevamente.

![SenseCAP M2 Local Console Guide Breathing LuCi Password](https://www.sensecapmx.com/wp-content/uploads/2022/07/change-password.png)

* * *

**Reiniciar**
-------------

*   _Ruta de página_：Sistema -> Reiniciar

Puedes reiniciar el dispositivo aquí o configurar un reinicio programado del dispositivo.

![SenseCAP M2 Local Console Reboot](https://www.sensecapmx.com/wp-content/uploads/2022/07/reboot.png)

* * *

**Red**
=======

**Interfaces**
--------------

*   _Ruta de Página_： Network -> Interfaces

Puedes obtener información sobre la interfaz de red aquí. La IP LAN por defecto es "192.168.168.1". Cuando la IP de puerta de enlace de tu router también sea esta, necesitas cambiar la IP LAN del dispositivo.

![SenseCAP M2 Local Console Guide Network Interface](https://www.sensecapmx.com/wp-content/uploads/2022/07/network_interface.png)

**Inalámbrico**
---------------

*   _Ruta de Página_： Network -> Wireless

Puedes conectarte a Wi-Fi aquí. Los pasos a continuación:

*   **Paso 1**: Haz clic en el botón '**scan**' para escanear Wi-Fi en tu área.

![SenseCAP M2 Local Console Guide Network Interface Wireless](https://www.sensecapmx.com/wp-content/uploads/2022/07/wireless_home.png)

*   **Paso 2**: Selecciona tu WI-FI para unirte a la red.

![SenseCAP M2 Local Console Guide Network Interface Wifi](https://www.sensecapmx.com/wp-content/uploads/2022/07/wifi_join.png)

*   **Paso 3**: Ingresa tu contraseña de Wi-Fi, luego envía y guarda.

![SenseCAP M2 Local Console Guide Network Interface Wifi Guide](https://www.sensecapmx.com/wp-content/uploads/2022/07/wifi_submit.png)

![SenseCAP M2 Local Console Guide Network Interface Wifi Save](https://www.sensecapmx.com/wp-content/uploads/2022/07/wifi_save.png)

En unos momentos, podrás conectarte a WiFi, como puedes ver en la página de interfaz.

* * *

**MultiWan**
------------

*   _Ruta de Página_： Network -> MultiWan

Aquí puedes ver la prioridad y el estado de las interfaces de red. La prioridad MultiWAN es: wan(ETH) > wwan(Wi-Fi) > wwan0 (4G\*).

![SenseCAP M2 Local Console Guide Network Interface MultiWan](https://www.sensecapmx.com/wp-content/uploads/2022/07/multiwan.png)

* * *

**Diagnósticos**
----------------

*   _Ruta de Página_：Network -> Diagnostics

Aquí puedes medir la velocidad de tu conexión a Internet.

![SenseCAP M2 Local Console Guide Network Interface Network Test](https://www.sensecapmx.com/wp-content/uploads/2022/07/network_test.png)