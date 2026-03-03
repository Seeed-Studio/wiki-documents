---
description: Conectar a The Things Network
title: Conectar a The Things Network
keywords:
- SenseCAP Sensor_Probe&Accessories
image: https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/003.webp
slug: /es/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/How-to-Connect-SenseCAP-S210X-to-The-Things-Network
last_update:
  date: 11/25/2024
  author: Leo
---

# Conectar a The Things Network

## The Things Network

The Things Stack es un servidor de red LoRaWAN de grado empresarial, construido sobre un núcleo de código abierto. The Things Stack te permite construir y gestionar redes LoRaWAN en tu propio hardware o en la nube.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/003.png)

## Conectar a The Things Network

### Crear una Nueva Cuenta

Sitio web de TTN: &lt;https://www.thethingsnetwork.org/&gt;

### Configurar el Sensor

(1) Abrir la aplicación SenseCAP Mate

(2) Presionar el botón y mantener durante 3 segundos, el LED parpadeará con una frecuencia de 1s.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/004.png)

(3) Por favor, haz clic en el botón "Setup" para activar Bluetooth y haz clic en "Scan" para comenzar a escanear el Bluetooth del sensor.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/005.png)

(4) Selecciona el Sensor por S/N (etiqueta). Luego, la información básica del sensor se mostrará después de ingresar.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/006.png)
![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/007.png)

### Configurar la Frecuencia del Sensor a través de la Aplicación SenseCAP Mate

Configura la banda de frecuencia correspondiente basándote en la banda de frecuencia del gateway.

(1) Haz clic en "Setting" y selecciona que la plataforma es "The Things Network".

![wecom-temp-81208-6d8da19d41a879a504ad54c71bf4961c](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/008.png)

(2) Selecciona el Plan de Frecuencia, si tu gateway es US915, configura el sensor a US915.

![wecom-temp-73569-56429bfa7490c37c5ec3c5b2fc8ba435](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/009.png)

(3) El dispositivo usa OTAA para unirse a la red LoRaWAN por defecto. Así que, podemos configurar el EUI del dispositivo, App EUI y APP Key aquí.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0010.png)

|**Parámetro**|**Tipo**|
| - | - |
|Device EUI|16, hexadecimal de 0 ~ F|
|App EUI|16, hexadecimal de 0 ~ F|
|App Key|32, hexadecimal de 0 ~ F|

(4) Configurar la Política de Paquetes. La estrategia de paquetes de enlace ascendente del sensor tiene tres modos.

|**Parámetro**|**Descripción**|
| - | - |
|2C+1N (predeterminado)|2C+1N (2 paquetes de confirmación y 1 sin confirmación) es la mejor estrategia, el modo puede minimizar la tasa de pérdida de paquetes, sin embargo el dispositivo consumirá la mayor cantidad de paquetes de datos en TTN, o créditos de datos en la red Helium.|
|1C|1C (1 confirmación) el dispositivo entrará en suspensión después de obtener 1 paquete de confirmación recibido del servidor.|
|1N|1N (1 sin confirmación) el dispositivo solo envía el paquete y luego comienza a suspenderse, sin importar si el servidor recibió los datos o no.|

(5) Haz clic en el botón "Send", envía la configuración al sensor para que surta efecto.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0011.png)

(6) Haz clic en el botón "Home", la App desconectará la conexión Bluetooth.

Luego, el sensor se reiniciará.

(7) Cuando el dispositivo se desconecta del Bluetooth, el LED se enciende durante **5 segundos** y luego parpadea como una **luz de respiración**.

## Configuración de TTN

### Registro del Gateway en TTN

Crea un Gateway en la consola de TTN basado en la información real.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0012.png)

### Crear la Aplicación

Crea una aplicación en tu consola de TTN. Dentro de las aplicaciones, puedes registrar y gestionar dispositivos finales y sus datos de red. Después de configurar tu flota de dispositivos, usa una de nuestras muchas opciones de integración para pasar datos relevantes a tus servicios externos.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0013.png)

## Agregar Sensor a la Consola de TTN

(1) Selecciona la Aplicación que has creado, y haz clic en 'Register end device' para agregar tu dispositivo final.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0014.png)

(2) Selecciona el dispositivo final en el Repositorio de Dispositivos LoRaWAN.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0015.png)

Y luego basado en la marca, configura elementos como los siguientes.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0016.png)

- End device brand: Selecciona SenseCAP.
- Model: Selecciona tu modelo de sensor. (Si no está, usa agregar manual)
- Hardware / Firmware Version: Usualmente, elige la más reciente.
- Profile(Region)/Frequency plan: Obténlo de la App SenseCAP Mate

|**Frecuencia del Sensor**|**Nombre Común**|**Descripción**|
| - | - | - |
|EU863-870|EU868|Europa 863-870 MHz (SF9 para RX2 -recomendado)|
|US902-928|US915|Estados Unidos 902-928 MHz, FSB 2 (usado por TTN)|
|AU915-928|AU915|Australia 915-928 MHz, FSB 2 (usado por TTN)|
|KR920-923|KR920|--------|
|IN865-867|IN865|--------|
|AS923|AS923-1|Asia 920-923 MHZ|
||AS923-2||

Diferentes países y servidores de red LoRaWAN utilizan diferentes planes de frecuencia.

Para la red Helium, consulte:

[Planes de Frecuencia de Helium](https://docs.helium.com/lorawan-on-helium/frequency-plans)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0017.png)

(3) Configure 'Información de aprovisionamiento'.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0018.png)

- JoinEUI: que significa el **APP EUI**, puede obtenerlo desde la aplicación SenseCAP Mate.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0019.png)

- Device EUI/ App Key: Obténgalo desde la página de configuración a través de la aplicación SenseCAP Mate. Como en la imagen de abajo.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0020.png)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0021.png)

(4) Registrar dispositivo final.

Después de completar los elementos anteriores, haga clic en "Register end device" para guardar su modificación.

:::tip note
Si se une a la red exitosamente, el LED **parpadeará rápidamente durante 2s**.
:::

## Verificar Datos en la Consola de TTN

En la página de Datos, el paquete de datos se está cargando. Para el formato de la carga útil, consulte la sección de Decodificación de Carga Útil.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0022.png)
