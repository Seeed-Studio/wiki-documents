---
description: Conectar a la Red Helium
title: Conectar a la Red Helium
keywords:
- SenseCAP Sensor_Probe&Accessories
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/How-to-Connect-SenseCAP-S210X-to-Helium-Network
last_update:
  date: 11/26/2023
  author: Leo
---

# Conectar a la Red Helium

## Consola Helium

La Consola Helium es una herramienta de gestión de dispositivos basada en web alojada por la Fundación Helium que permite a los desarrolladores registrar, autenticar y gestionar sus dispositivos en la red Helium. Además de la gestión de dispositivos, la Consola proporciona conexiones preconfiguradas llamadas Integraciones para enrutar datos de dispositivos a través de HTTPs o MQTT; o directamente a servicios en la nube como AWS IoT.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/003.png)

## Conectar a la Red Helium

### Crear una Nueva cuenta

Por favor vaya a &lt;https://console.helium.com/&gt;  , y registre su cuenta.

### Configurar el Sensor

(1) Abra la App SenseCAP Mate

(2) Presione el botón y manténgalo presionado durante 3 segundos, el LED parpadeará con una frecuencia de 1s.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/004.png)

(3) Por favor haga clic en el botón "Setup" para activar Bluetooth y haga clic en "Scan" para comenzar a escanear el Bluetooth del sensor.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/005.png)

(4) Seleccione el Sensor por S/N (etiqueta). Luego, la información básica del sensor se mostrará después de ingresar.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/006.png)       ![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/007.png)

### Configurar Frecuencia del Sensor a través de la App SenseCAP Mate

Configure la banda de frecuencia correspondiente basándose en la banda de frecuencia del gateway.

(1) Haga clic en "Setting" y seleccione que la plataforma es "**Helium**".

![wecom-temp-114185-2959d45aab4ab735f22b5fbf68a22c91](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/008.png)     ![wecom-temp-88582-e758abc6d2f73925e20290cddfebc421](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/009.png)

(2) Seleccione el Plan de Frecuencia, si el gateway es US915, configure el sensor a US915.

(3) Haga clic en el botón "Send", envíe la configuración al sensor para que surta efecto.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0010.png)

(4) Haga clic en el botón "Home", la App desconectará la conexión Bluetooth.

Luego, el sensor se reiniciará.

(5) Cuando el dispositivo se desconecta del Bluetooth, el LED se enciende durante **15 segundos** y luego parpadea como una **luz que respira**.

(6) Después de unirse a la red exitosamente, el LED **parpadea rápidamente durante 2s**.

# Configuración de la Consola Helium

## Agregar Nuevo Dispositivo

(1) Haga clic en "Devices" –> "Add New Device"

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0011.png)

(2) Ingrese el Device EUI, App EUI, App Key: por favor consulte la APP SenseCAP mate para más detalles.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0012.png)

(3) Guarde el dispositivo.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0013.png)

(4）Agregue una nueva etiqueta, luego agregue la etiqueta a un dispositivo.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0014.png)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0015.png)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0016.png)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0017.png)

## Verificar los datos en Helium

(1) Ingresa a la página de detalles del dispositivo y busca los REAL TIME PACKETS.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0018.png)

(2) Enciende el Sensor, mostrará los datos sin procesar.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0019.png)

## Subir Datos desde Helium a Datacake

### Crear una Cuenta de Datacake

(1) Crea una nueva cuenta, sitio web: &lt;https://datacake.co/&gt;

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0020.png)

(2) Haz clic en "Edit Profile" -> "API" -> Obtener token de API.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0021.png)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0022.png)

### Agregar Nueva Integración en la Consola de Helium

(1) Haz clic en "Integrations" -> "Add New Integration" -> "Datacake".

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0023.png)

(2) Ingresa el Token de Datacake (Consulta [la sección](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/#_Create_a_Datacake)) y nombra tu integración.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0024.png)

### Configurar los Flujos en Helium

(1) Haz clic en "Flows".

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0025.png)

(2) Arrastra la Etiqueta a un lugar en blanco.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0026.png)

(3) Arrastra la Integración a un lugar en blanco.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0027.png)

(4) Conecta los dos bloques.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0028.png)

(5) Guarda los Cambios.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0029.png)

### Agregar el Sensor en Datacake

(1) Regresa al Panel de Datacake, y haz clic en "Device" -> "Add Device"

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0030.png)

(2) Busca "Seeed", Puedes seleccionar algunos sensores directamente.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0031.png)

(3) Selecciona la Plantilla del Sensor.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0032.png)

(4) Selecciona "Helium".

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0033.png)

(5) Ingresa tu EUI del Dispositivo y Nombre.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0034.png)

(6) Selecciona tu Plan y agrega el dispositivo.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0035.png)

### Verificar Datos desde Datacake

Haz clic en el botón Debug, mostrará el registro de depuración.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0036.png)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0037.png)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0038.png)
