---
title: Guía de inicio rápido de Wifi Halow
description: Este caso de aplicación demuestra el rendimiento extremo y los datos medidos al ejecutar el último modelo YOLO11n en la plataforma de computación perimetral reCamera.
keywords:
  - reCamera
  - Edge AI
  - Wifi Halow
slug: /wifi_halow_getting_started
sku: 100063704
image: https://files.seeedstudio.com/wiki/reCamera/reCamera_Wifi_Halow/getting_start/wifi_halow_log.jpg
sidebar_position: 1
last_update:
  date: 2026-06-02
  author: Sizhao zhou
createdAt: '2026-06-02'
updatedAt: '2026-06-26'
url: https://wiki.seeedstudio.com/es/wifi_halow_getting_started/
---

# Guía de inicio rápido de Wifi Halow

Antes de comenzar la configuración, asegúrate de tener el siguiente hardware listo:
* **Cable de datos**: Un cable USB Type-C con capacidad de transferencia de datos (no utilices cables que solo tengan función de carga).
* **reCamera**: Un dispositivo reCamera 2002 con la placa inferior retirada.
---


## Introducción

Wifi Halow es un módulo de red inalámbrica para reCamera, que te permite conectar la reCamera a una red inalámbrica para monitorización y gestión remotas. En comparación con las conexiones Wifi tradicionales, Wifi Halow tiene una mayor capacidad de penetración de paredes y de señal, una distancia de transmisión ultra larga, un consumo de energía extremadamente bajo y la ventaja de una enorme capacidad de conexión de dispositivos.

---


## Desempaquetado y montaje

Después de recibir el producto, encontrarás los siguientes tres elementos en la caja:

1. Módulo Wifi Halow
2. Tapa trasera
3. Tornillos

![Item List](https://files.seeedstudio.com/wiki/reCamera/reCamera_Wifi_Halow/wifi_halow_list.png)

A continuación, necesitas preparar una reCamera con la tapa trasera retirada, como se muestra en la siguiente imagen:

![reCamera with back cover removed](https://files.seeedstudio.com/wiki/reCamera/reCamera_Wifi_Halow/reCamera_uncover.jpg)

Vídeo del tutorial de instalación:
<video
  src="https://raw.githubusercontent.com/6zsz6/seeed_wiki_video/main/Wifi_Halow_install.mp4"
  controls
  width="100%"
  preload="metadata">
  Tu navegador no admite la reproducción de este vídeo.
</video>



:::note Note
La versión del sistema operativo de tu reCamera debe ser la más reciente, de lo contrario el módulo Wifi Halow no se reconocerá correctamente. Para las actualizaciones de la versión del sistema operativo, consulta [Upgrade OS Version](https://wiki.seeedstudio.com/cn/recamera_gimbal_getting_started/#ota-%E7%B3%BB%E7%BB%9F%E5%8D%87%E7%BA%A7).
:::


## Interfaces de hardware

El módulo Wifi Halow tiene múltiples interfaces, que son:
- Interfaz BAT: Se utiliza para conectar una batería, la especificación del conector es MX1.25-2P
- Interfaz DC: Se utiliza para conectar una fuente de alimentación DC de 12 V, la especificación del conector es PH2.0-2P
- Puerto del cable adaptador USB: Se utiliza para conectar el dispositivo reCamera, la especificación del conector es GH1.25-4P
![Interface diagram](https://files.seeedstudio.com/wiki/reCamera/reCamera_Wifi_Halow/getting_start/wifi_halow_line.png)

---


## Introducción a la interfaz de conexión web

Después de conectar el cable USB e iniciar sesión en la interfaz web a través de la dirección IP ***192.168.42.1***, haz clic en ***Network*** en el lado izquierdo para entrar en la interfaz de configuración de red, como se muestra a continuación:

![Network Settings Interface](https://files.seeedstudio.com/wiki/reCamera/reCamera_Wifi_Halow/wifi_halow_network_set.png)
- ***Enable Halow***: Interruptor para habilitar el módulo Wifi Halow
- ***Keep-Alive***: Interruptor para la función Keep-Alive para mantener la conexión con el servidor (el intervalo de tiempo de Keep-Alive se puede ajustar en la configuración hasta un mínimo de 1 s) y evitar desconexiones
- ***Networks Found***: Muestra la lista de redes inalámbricas escaneadas actualmente (si la red wifi a la que deseas conectarte no se ha escaneado, puedes hacer clic en el botón '+' de la derecha para añadir una red manualmente)
- ***IPEX Antenna***: Cambiar antenas (hay dos antenas en el módulo Wifi Halow: una antena SMA externa y una antena IPEX interna). Al activarlo se habilita la antena interna, consulta la siguiente imagen para más detalles:

  ![Antenna location](https://files.seeedstudio.com/wiki/reCamera/reCamera_Wifi_Halow/wifi_halow_antenna.jpg)

---

## Conexión a una red Wi‑Fi HaLow

1. Selecciona la red Wifi Halow a la que deseas unirte en ***Networks Found***
2. Haz clic en la red a la que deseas conectarte, mantén la misma configuración que tu red, introduce la contraseña y haz clic en ***Confirm*** para conectar
3. Después de una conexión exitosa, haz clic en la red en ***My Networks*** para ver información detallada como la IP, como se muestra en la siguiente imagen:
![Antenna location](https://files.seeedstudio.com/wiki/reCamera/reCamera_Wifi_Halow/wifi_halow_detial.png)

---


## Comprobación del voltaje de la batería

Hay una interfaz PH en el módulo Wifi Halow para conectar una batería, y junto a ella hay dos indicadores LED. La luz roja se enciende cuando la batería se está cargando y la luz verde se enciende cuando está completamente cargada, como se muestra en la siguiente imagen:

![Battery](https://files.seeedstudio.com/wiki/reCamera/reCamera_Wifi_Halow/wifi_halow_BAT.jpg)

### 1. Comprobar el voltaje de la batería mediante el módulo Node-Red
Busca la sección ***reCamera*** en la lista del lado izquierdo del panel de ***node-red***. Debajo de ella hay un módulo ***Battery Voltage***. El propósito de este módulo es comprobar el nivel de la batería. Arrástralo al panel y luego haz clic en deploy en la esquina superior derecha. Después de una implementación exitosa, el voltaje de la batería se mostrará debajo de él, como se muestra en la siguiente imagen:
![node-red_battery_voltage](https://files.seeedstudio.com/wiki/reCamera/reCamera_Wifi_Halow/wifi_halow_node-red_bat.png)

### 2. Comprobar el voltaje de la batería mediante un comando de Linux

Después de conectarte a la reCamera usando el comando ***ssh***, introduce el siguiente comando en la terminal para ver el voltaje de la batería (el valor obtenido está en unidades de ***mV***):
```bash
curl -s [http://192.168.42.1/api/deviceMgr/queryBatteryInfo](http://192.168.42.1/api/deviceMgr/queryBatteryInfo) | python3 -c 'import sys,json; print(json.load(sys.stdin)["data"]["voltage"])'
```

El efecto se muestra en la siguiente imagen:
![linux_battery_voltage](https://files.seeedstudio.com/wiki/reCamera/reCamera_Wifi_Halow/wifi_halow_linux_bat.png)

:::note Note
1. Cuando no hay ninguna batería conectada, los valores mostrados por los dos métodos anteriores fluctuarán de forma irregular.
2. Cuando se realiza una transmisión de vídeo continua a larga distancia, debido al alto consumo de energía de la antena en ese momento, toda la placa se calentará de forma más intensa.
:::

---


## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte para garantizar que tu experiencia al usar nuestros productos sea lo más fluida posible. Ofrecemos múltiples canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
