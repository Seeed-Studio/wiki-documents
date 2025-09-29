---
description: Módulo W600
title: Módulo W600
keywords:
- Air602_WiFi_Development_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/W600_Module
last_update:
  date: 01/20/2023
  author: Matthew
---

![](https://files.seeedstudio.com/wiki/W600_Module/img/113020031-preview.png)

El Módulo W600 es un módulo WiFi de 2.4GHz rentable que soporta 802.11b/g/n. El Módulo W600 de Seeed está basado en el chip W600 que cuenta con ARM Cortex-M3 con 1MB de flash en chip y kernel freeRTOS.

Sacamos los pines del chip W600 y los colocamos en la parte posterior de la placa, incluyendo I2S/I2C/SPI/GPIO/PWM/UART/SDIO. Además, este módulo tiene una Antena PCB integrada, no es necesario diseñar la antena por separado, por lo que puedes desplegar rápidamente el módulo en tu propia placa. También hemos obtenido la certificación CE/FCC para este módulo y puedes usarlo directamente para proyectos comerciales.

<a href="https://www.seeedstudio.com/W600-Module-p-4020.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a>

## Características

• CPU Cortex-M3 Embebido de 32bit integrado, frecuencia de operación 80MHz

• 288KB RAM integrada

• 1MB FLASH integrada

**Interfaz**

• Controlador de dispositivo GPIO integrado

• 2 interfaces UART integradas, soporta RTS/CTS, velocidad de baudios: 1200bps~2Mbps

• Un controlador SPI de alta velocidad integrado, frecuencia de operación: 0~50MHz;

**Inalámbrico**

• Soporta IEEE802.11 b/g/e/i/d/k/r/s/w/n

• Soporta 2.4~2.4835 GHz

• Soporta Wi-Fi WMM/WMM-PS/WPA/WPA2/WPS

• Soporta Wi-Fi Direct

• STBC、GreenField、Short-GI

• Soporta múltiples protocolos de red: TCP/UDP/ICMP/DHCP/DNS/HTTP

**Otros**

• Soporta protocolo de instrucciones AT+ basado en codificación ASCII (interfaz UART)

• Soporte para control GPIO programable por el usuario

• Antena integrada

## Especificaciones

|Categoría|Elemento|Parámetro|
|--|---|---|
|Inalámbrico|Modo Wi‐Fi Soportado|IEEE802.11b/g/n|
||Impedancia del sistema RF|50Ω|
||Rango de Frecuencia|2.4~2.4835 GHz|
||Sensibilidad de recepción|20MHz MCS7@‐71dBm;<br />40MHz MCS7@‐68dBm;<br />54Mbps@‐73dBm;<br />11Mbps@‐86dBm;<br />1Mbps@‐95dBm;|
||Velocidad de datos de capa física|802.11n MCS 0~7   150Mbps|
||Modulación|DSSS、OFDM、DBPSK、DQPSK、CCK、QAM16/64|
||Potencia de Salida|IEEE802.11b, DSSS 1Mbps, POUT = +17dBm;<br />IEEE802.11g, OFDM 54Mbps, POUT = +10dBm;<br />IEEE802.11n, OFDM MCS7, POUT = +10dBm|
|Hardware|Tipo de Interfaz|UART/SPI/GPIO|
||Velocidad de interfaz|2Mbps@UART (Máx) <br />50Mbps@SPI (Máx)|
||Voltaje de Operación|3.3V(Módulo)/5V(Placa de Desarrollo)|
||Humedad de operación|5%~90% (Sin condensación)|
||Temperatura de almacenamiento|‐40~+125 ℃|
||Temperatura de operación|‐40~+85℃|
|Software|Tipo de Red|STA/AP/AP+STA/Wi‐Fi Direct|
||Verificación|WEP/WPA‐PSK/WPA2‐PSK|
||Encriptación|WEP64/WEP128/TKIP/CCMP(AES)|
||Función WPS|WPS|
||Ahorro de energía|PS‐POLL/Standby|
||Protocolo de red|TCP/UDP/ARP/ICMP/DHCP/DNS/HTTP|
||Protocolo de Interfaz| Conjunto de instrucciones AT+|

:::note
Para más detalles sobre las especificaciones, por favor consulte el W600 [Specification V1.0.0_EN.pdf](https://files.seeedstudio.com/wiki/W600_Module/res/W600%20Specification%20V1.0.0_EN.pdf) y [W600 HardwareDesignGuide_v1.0.1.pdf](https://files.seeedstudio.com/wiki/W600_Module/res/W600%20HardwareDesignGuide_v1.0.1.pdf)
:::

## Aplicaciones Típicas

- electrodomésticos inteligentes
- hogar inteligente
- audio y video inalámbrico
- juguetes inteligentes
- monitoreo médico
- control industrial
- otras aplicaciones de Internet de las Cosas

## Descripción General del Hardware

### Diagrama de Bloques

<div align="center">
  <figure>
    <a href="https://files.seeedstudio.com/wiki/W600_Module/img/block.png" target="_blank">
      <img src="https://files.seeedstudio.com/wiki/W600_Module/img/block.png" alt="block diagram of W600 Module" title="block diagram of W600 Module"></img>
    </a>
    <figcaption><i>haz clic para ver el archivo original más claro</i></figcaption>
  </figure>
</div>

### Pinout

<div align="center">
  <figure>
    <a href="https://files.seeedstudio.com/wiki/W600_Module/img/pinout_w600_module.jpg" target="_blank">
      <img src="https://files.seeedstudio.com/wiki/W600_Module/img/pinout_w600_module.jpg" alt="pinout of W600 Module" title="pinout of W600 Module"></img>
    </a>
    <figcaption><i>haz clic para ver el archivo original más claro</i></figcaption>
  </figure>
</div>

## Primeros Pasos

Para usar el **Módulo W600**, necesitas usar [Herramientas USB-a-Serie](https://www.seeedstudio.com/PL2303-USB-to-Serial-TTL-Module-Adapter-p-2358.html) para conectar los pines RX/TX a tu computadora, también necesitas alimentar este módulo con los pines **3.3v** y **GND**.

:::note
Para mac, hemos encontrado que algunas versiones del sistema mac no pueden reconocer el chip USB-a-Serie integrado CH330N, por favor consulta aquí para la solución [Problema de controlador Mac os](https://forum.seeedstudio.com/viewtopic.php?f=106&t=8299&sid=aa548f2de0fb26380f50e0b328a49a80)
:::

Usamos la herramienta de puerto serie **sscom** para enviar el comando AT. Puedes usar tu herramienta de puerto serie favorita, en caso de que quieras usar **sscom**, puedes descargarla [Aquí](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/res/sscom51.zip).

En cualquier caso, por favor asegúrate de haber marcado la opción **AddCrLf**, y establecer la velocidad de baudios a **115200**

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/AT_2.jpg)

Escribe **AT+** luego haz clic en **SEND** o presiona la tecla ++enter++ para verificar si la conexión se estableció exitosamente.

```cpp
AT+
```

Cuando devuelve **+OK**, puedes usar el comando AT para controlar este módulo.

### Proceso de creación de SoftAP

- 1- **WPRT** establece el modo de funcionamiento de la tarjeta de red inalámbrica a SoftAP:

```cpp
AT+WPRT=2
```

- 2- **APSSID** Establece el SSID del AP para la STA, p. ej. *MyAP*:

```cpp
AT+APSSID=MyAp
```

- 3- **APENCRY** Establece el modo de seguridad de la tarjeta de red inalámbrica a WEP64:

```cpp
AT+APENCRY=1
```

Parámetro：

abierto：0，WEP64：1，WEP128：2

- 4- **APKEY** Establecer la clave de la tarjeta de red inalámbrica a *12345*

```cpp
AT+APKEY=1,1,12345
```

Parámetro 1：Formato de clave， 0 significa HEX, 1 significa ASCII  

Parámetro 2：índice:  Número de índice de clave, 1 a 4 se usan para claves de cifrado WEP, y otros métodos de cifrado están fijados en 0.  

Parámetro 3：clave inalámbrica, ej.：12345  

- 5- **APNIP** Establecer la dirección ip y máscara de subred

```cpp
AT+APNIP=1,192.168.1.1,255.255.255.0,192.168.1.1,192.168.1.1
```

Parámetro 1：tipo de dirección: 0 significa asignación dinámica usando DHCP, 1 significa dirección estática  
parámetro 2：ip:192.168.1.1  
parámetro 3：máscara de red：255.255.255.0  
parámetro 4：puerta de enlace：192.168.1.1  
parámetro 5：dns：192.168.1.1  

- 6- **PMTF** guarda los parámetros anteriores en la flash spi, simplemente comienza desde el paso 7 con el siguiente arranque.

```cpp
AT+PMTF
```

- 7- **WJOIN** Crear red inalámbrica *MyAp*

```cpp
AT+WJOIN
```

- 8- **SLIST**  Consulta la información de STA que se conectó a tu SoftAP.

```cpp
AT+SLIST
```

### Proceso de Escaneo de AP

El comando AT de la tarjeta de red inalámbrica para escanear AP es：

```cpp
AT+WSCAN
```

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/AT_3.jpg)

El último parámetro es la intensidad de la señal, unidad db

### Proceso de unión de STA al AP

- 1- **WPRT** Establecer el modo de trabajo a STA

```cpp
AT+WPRT=0
```

- 2- **SSID** Establece el nombre del AP al que unirse. ej. *TEST_AP*

```cpp
AT+SSID=TEST_AP
```

- 3- **KEY** Establece la clave inalámbrica del AP al que quieres unirte. ej. *12345678*

```cpp
AT+KEY=1,0,12345678
```

parámetro 1：0 significa HEX, 1 significa ASCII

parámetro 2：índice: El número de índice de la clave, 1 a 4 se usa para la clave de cifrado WEP. Los otros métodos de cifrado están fijados en 0.

parámetro 3： Clave inalámbrica  ej.：12345678

- 4- **NIP** Habilitar DHCP

```cpp
AT+NIP=0
```

- 5- PMTF Guarda los parámetros anteriores en la memoria flash SPI, simplemente comienza desde el paso 6 con el siguiente arranque

```cpp
AT+PMTF
```

- 6- WJOIN Unirse a la red inalámbrica TEST_AP

```cpp
AT+WJOIN
```

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/AT_4.jpg)

### Crear un proceso APSTA

- 1- **WPRT** Establecer el modo de trabajo a APSTA

```cpp
AT+WPRT=3
```

- 2- **SSID** Establece el nombre del AP al que unirse, como *TEST_AP*

```cpp
AT+SSID=TEST_AP
```

- 3- **KEY** Establece la clave inalámbrica del AP al que quieres unirte. ej. *12345678*

```cpp
AT+KEY=1,0,12345678
```

parámetro 1：0 significa HEX, 1 significa ASCII

parámetro 2：índice: El número de índice de la clave, 1 a 4 se usa para la clave de cifrado WEP. Los otros métodos de cifrado están fijados en 0.

parámetro 3： Clave inalámbrica ej.：12345678

- 4- **APSSID** Establece el nombre de red del SOFTAP creado

```cpp
AT+APSSID=”MYSoftAP”
```

- 5-  **APENCRY** Establece el tipo de cifrado del SoftAP (como WPA2-TKIP)

```cpp
AT+APENCRY=5
```

- 6- **APKEY**  Establecer la contraseña para SoftAP (ej. código ASCII 87654321)

```cpp
AT+APKEY=1,0,87654321
```

- 7- **APNIP**  Establecer la dirección IP y la máscara de subred

```cpp
AT+APNIP=1,192.168.1.1,255.255.255.0,192.168.1.1,192.168.1.1
```

- 8- **PMTF** Guarda los parámetros anteriores en la flash SPI, simplemente comienza desde el paso 9

```cpp
AT+PMTF
```

- 9- **WJOIN** Unirse a la red inalámbrica TEST_AP

```cpp
AT+WJOIN
```

:::note
Para más detalles sobre comandos AT, por favor consulte el [WM_W60X_SDK_AT Command_V1.0.2.pdf](https://files.seeedstudio.com/wiki/W600_Module/res/WM_W60X_SDK_AT%20Command_V1.0.2.pdf)
:::

## Programación de Firmware

Para la programación de firmware por favor consulte aquí:

[WM_W60X_SDK_User Manual_V1.0.0.pdf](https://files.seeedstudio.com/wiki/W600_Module/res/WM_W60X_SDK_User%20Manual_V1.0.0.pdf) y [WM_W60X_Firmware Generación Guide_V1.1.pdf](https://files.seeedstudio.com/wiki/W600_Module/res/WM_W60X_Firmware%20Generation%20Guide_V1.1.pdf)

## FAQ

**P1. ¿Cómo desconecta la STA el AP?**

R: El comando AT para que la tarjeta de red inalámbrica desconecte el AP:

```cpp
AT+WLEAV
```

**Q2.SoftAP desconectado**

A: El comando AT para desconectar la red SoftAP es:

```cpp
AT+WLEAV=2
```

**P3. Cómo ve STA el estado actual**

R: El comando AT para que la tarjeta de red inalámbrica vea el estado de la tarjeta de red actual es:

```cpp
AT+LKSTT
```

**P4. Cómo ver el estado actual de SoftAP**

R: El comando AT para ver el estado actual de SoftAP es:

```cpp
AT+APLKSTT
```

## Visor Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/W600_Module/res/W600%20Module%20schemaic.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[PDF]** [WM_W60X_SDK_AT Command_V1.0.2.pdf](https://files.seeedstudio.com/wiki/W600_Module/res/WM_W60X_SDK_AT%20Command_V1.0.2.pdf)

- **[PDF]** [W600 HardwareDesignGuide_v1.0.1.pdf](https://files.seeedstudio.com/wiki/W600_Module/res/W600%20HardwareDesignGuide_v1.0.1.pdf)

- **[PDF]** [W60X_SDK_User Manual_V1.0.0.pdf](https://files.seeedstudio.com/wiki/W600_Module/res/WM_W60X_SDK_User%20Manual_V1.0.0.pdf)

- **[PDF]** [WM_W60X_Firmware Generation Guide_V1.1.pdf](https://files.seeedstudio.com/wiki/W600_Module/res/WM_W60X_Firmware%20Generation%20Guide_V1.1.pdf)

- **[ZIP]** [Archivos esquemáticos del Módulo W600](https://files.seeedstudio.com/wiki/W600_Module/res/W600%20Module%20schemaic.zip)

- **[ZIP]** [sscom](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/res/sscom51.zip)

## Soporte Técnico y Discusión de Productos

<br />
¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
