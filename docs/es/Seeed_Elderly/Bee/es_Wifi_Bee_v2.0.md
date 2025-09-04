---
description: Wifi Bee v2.0
title: Wifi Bee v2.0
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wifi_Bee_v2.0
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/img/Wifi_bee_v2_01.jpg)

Wifi Bee v2.0 es la versión actualizada de Wifi Bee v1.0. Reemplazamos el módulo transceptor MRF24WB0MA que tiene interfaz SPI con RN-171 que usa interfaz UART. El módulo Wifi Bee v2.0 incorpora radio 802.11 b/g, procesador de 32 bits, pila TCP/IP, reloj en tiempo real, acelerador criptográfico, unidad de gestión de energía e interfaz de sensor analógico. Se puede conectar directamente a los sockets Bee y usar el puerto UART para comunicación. También puedes usar comandos AT para configuración avanzada para satisfacer tus requisitos únicos.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Wifi-Bee-v2.0-p-1637.html)

## Especificaciones

---
- Compatible con cualquier socket Bee

- Interfaz del host: UART

- Potencia de transmisión: 0dBm a 12dBm

- Frecuencia: 2402~2480 MHz

- Canal: 0~13

- Pila de protocolo TCP / IP integrada

- Antena de Chip Multicapa integrada

## Demostración

---
En esta sección, usaremos Wifi Bee para crear un servidor Web como aplicación de ejemplo. ¡Sigamos los pasos a continuación para hacerlo funcionar!
Nota: Para configurar este módulo, necesitarás un adaptador o shield Xbee que te permita comunicarte con el módulo, antes de poder conectarlo y usarlo en otros módulos.

### Instalación del Hardware

Aquí está todo el hardware necesario.

- 1) Wifi Bee

- 2) Un adaptador, como [SBee](https://www.seeedstudio.com/depot/xbee-shield-v20-p-1375.html?cPath=98_16Uart), [Grove -Xbee Carrier](https://www.seeedstudio.com/depot/grove-xbee-carrier-p-905.html?cPath=98_16), [Xbee Shield](https://www.seeedstudio.com/depot/xbee-shield-v20-p-1375.html?cPath=98_16)

- 3) Cable Mini USB

Conecta wifi bee al Socket Bee de tu adaptador, y conecta el adaptador a tu computadora mediante cable Mini USB. Antes de que wifi bee no se conecte a tu red, el indicador ASSOC está en estado parpadeante.

![](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/img/Wifi_Beev2.0.jpg)

### Configurar Wifi Bee

Necesitamos un monitor serie para configurar el Wifi Bee. Así que antes de configurar wifi bee, necesitas preparar una herramienta serie. En este caso, elegimos el usual [SSCOM3.2](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/res/Sscom32E.zip)

![](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/img/Serial_Tool.png)

- 1) Elige el puerto serie correcto y haz clic en el botón "Open Com", mostrado arriba, establece la velocidad de baudios a 9600.

- 2) No selecciones "SendNew", y envía el comando AT $$$ al wifi Bee y responderá "CMD" para indicar que entró al modo de configuración correctamente.

- 3) Selecciona "SendNew" después de entrar al modo de configuración, envía el comando AT set u b 9600 para establecer la velocidad de baudios como 9600. Por supuesto, también puedes establecerla como 38400.

- 4) Escribe show net y mostrará la configuración de red actual.

- 5) Escribe scan para ver una lista de redes Wifi cercanas.

![](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/img/Serial_Tool_Scan_net.png)

- 6) Envía el comando AT set wlan join 1, si el puerto serie responde "ADK" lo cual indica que Wifi Bee entra al modo de control automático.

- 7) Escribe join el SSID de tu router (como join Seeed-STU) para conectar y asociarse con un punto de acceso abierto. Si nos unimos a una red segura escribimos así:

set wlan ssid el SSID de tu router

set wlan pass la contraseña de tu router

save

reboot

Y el monitor responde con la dirección ip actual y el puerto abierto. Se puede ver fácilmente que la dirección ip de mi Wifi Bee es 192.168.0.28 y el puerto es 2000.

![](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/img/Join_network.png)

- 8) Usa el navegador Web para acceder a `http://ip:puerto`, como: `http://192.168.0.28:2000`, y el monitor recibe la solicitud http del navegador Web mostrada abajo. Sin embargo, el navegador Web no recibirá nada debido a que el wifi bee no responde nada.

![](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/img/Web_access.png)

Para más comandos, por favor consulta la Referencia de Comandos Wifly de la parte de Recursos.

### Conectar el servidor TCP y Wifi Bee

Aquí seleccionamos [TCPUDPbg](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/res/TCPUDPDbg.zip) para trabajar como cliente TCP y enviar comandos al Wifi Bee.

- 1) Descarga y ejecuta TCPUDPbg. Haz clic en "CreatConnection", podemos ver esta imagen:

![](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/img/TCPUDPTool.png)

- 2) Después de seleccionar Tipo TCP, escribe la dirección IP y puerto del Wifi Bee y haz clic en "Create".

- 3) Haz clic en el botón "Connect" en la barra lateral izquierda. ¡Ahora podrías enviar comandos a través del cliente TCP simulado por TCPUDPbg al wifi bee. Así TCPUDPbg también recibirá las cadenas enviadas desde el monitor Serie!

![](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/img/Communication.png)

## Seguimiento de Versiones

---

| Revisión | Descripciones | Lanzamiento |
|----------|-------------|---------|
| Wifi Bee v1.0 | módulo transceptor MRF24WB0MA que tiene interfaz SPI, y usa un chip Atmega328p | 13 Dic, 2011 |
| Wifi Bee v2.0 | reemplaza MRF24WB0MA con RN-171, cancela el chip Atmega328p | 11 Nov, 2013 |

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/res/Wifi_Bee_v2.0_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---
- [Archivo Eagle de Wifi Bee v2.0](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/res/Wifi_Bee_v2.0_Eagle_File.zip)

- [Hoja de Datos RN-171](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/res/WiFly-RN-171.pdf)

- [Referencia de Comandos Wifi](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/res/WiFly-RN-UM.pdf)

- [Hoja de Datos de la Antena](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/res/Antenna_Datasheet.pdf)

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
