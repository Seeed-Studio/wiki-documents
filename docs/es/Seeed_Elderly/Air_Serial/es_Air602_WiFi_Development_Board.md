---
description: Air602_WiFi_Development_Board
title: Placa de Desarrollo WiFi Air602
keywords:
- Air602_WiFi_Development_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Air602_WiFi_Development_Board
last_update:
  date: 01/20/2023
  author: Matthew
---

![picture](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/main.jpg)

Esta wiki funciona tanto para la Placa de Desarrollo WiFi Air602 como para el Módulo WiFi Air602.

El Air602 es un módulo Wi-Fi de 2.4G basado en el chip SoC Wi-Fi integrado (W600) con una Interfaz de Expansión de Orificios de Sello de 12 pines. Milagrosamente, es incluso más pequeño que un sello. Mide solo 12mm*10mm, pequeño pero completo, ofrece una interfaz rica y funcionalidad completa. Este módulo soporta IEEE802.11b/g/n y comandos AT.

La Placa de Desarrollo WiFi Air602 está basada en el módulo Wi-Fi Air602 e integra interfaz USB y Antena. Si conectas esta placa a tu computadora, será reconocida como un Puerto (COM & LPT), para que puedas programarla con herramientas de puerto serie. Este módulo soporta IEEE802.11b/g/n y comandos AT.

<a href="https://www.seeedstudio.com/Air602-WiFi-Module-p-3139.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a>

<a href="https://www.seeedstudio.com/Air602-WiFi-Development-Board-p-3140.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a>

## Características

**Interfaz**

• Interfaz USB

• UART/SPI

• Controlador de dispositivo GPIO integrado

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
||Cifrado|WEP64/WEP128/TKIP/CCMP(AES)|
||Función WPS|WPS|
||Ahorro de energía|PS‐POLL/Standby|
||Protocolo de red|TCP/UDP/ARP/ICMP/DHCP/DNS/HTTP|
||Protocolo de Interfaz| Conjunto de instrucciones AT+|

## Aplicaciones Típicas

- electrodomésticos inteligentes
- hogar inteligente
- audio y video inalámbrico
- juguetes inteligentes
- monitoreo médico
- control industrial
- otras aplicaciones de Internet de las Cosas

## Distribución de Pines

![](https://files.seeedstudio.com/wiki/Bazaar_file/113990576/PIN_MAP.jpg)
![](https://files.seeedstudio.com/wiki/Bazaar_file/113990576/PIN_table.jpg)
![](https://files.seeedstudio.com/wiki/Bazaar_file/113990576/PIN_MAP_B.jpg)

## Primeros Pasos

Para la **Placa de Desarrollo WiFi Air602**, simplemente puedes conectarla a tu computadora, será reconocida como un Puerto (COM & LPT).
Para el **Módulo WiFi Air602**, necesitas usar Herramientas USB-a-Serie para conectar los pines RX/TX a tu computadora.

:::note
Para mac, hemos encontrado que algunas versiones del sistema mac no pueden reconocer el chip USB-a-Serie integrado CH330N, por favor revisa aquí para la solución [Problema de controlador Mac os](https://forum.seeedstudio.com/viewtopic.php?f=106&t=8299&sid=aa548f2de0fb26380f50e0b328a49a80)
:::

Usamos la herramienta de puerto serie **sscom** para enviar el comando AT. Puedes usar tu herramienta de puerto serie favorita, en caso de que quieras usar **sscom**, puedes descargarla [Aquí](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/res/sscom51.zip).

En cualquier caso, por favor asegúrate de haber marcado la opción **AddCrLf**, y establecer la velocidad de baudios a **115200**

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/AT_2.jpg)

Escribe **AT+** luego haz clic en **SEND** o presiona la tecla `enter` para verificar si la conexión se estableció exitosamente.

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

El comando AT de la tarjeta de red inalámbrica para escanear AP es:

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

- 5- PMTF Guarda los parámetros anteriores en la flash SPI, simplemente comienza desde el paso 6 con el siguiente arranque

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

- 4- **APSSID** Establecer el nombre de red del SOFTAP creado

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

## Programación de Firmware

Para la programación de firmware, por favor consulta aquí:

[Manual de Programación de Firmware Air602](https://wiki.seeedstudio.com/es/Air602_Firmware_Programming_Manual)

## FAQ

**P1. Cómo desconecta la STA el AP**

R: El comando AT de la tarjeta de red inalámbrica desconecta el AP:

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

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Air602_WiFi_Module/res/AIR602_lbr.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[PDF]** [Manual de Usuario de Comandos AT Air602](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/res/Air602%20AT%20Command%20User%20Manual.pdf)

- **[PDF]** [Manual de Diseño de Hardware Air602](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/res/Air602%20Hardware%20Design%20Manual.pdf)

- **[ZIP]** [AIR602_lbr para eagle](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/res/AIR602_lbr.zip)

- **[ZIP]** [sscom](https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/res/sscom51.zip)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
