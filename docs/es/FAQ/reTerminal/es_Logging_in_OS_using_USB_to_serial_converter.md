---
description: reTerminal-FAQ
title: Cómo iniciar sesión en Raspberry Pi OS/ Ubuntu OS u otros OS usando un convertidor USB a serie
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Logging_in_OS_using_USB_to_serial_converter
last_update:
  date: 6/21/2023
  author: Seraphina
---

<!-- ## Q5: How can I log in to Raspberry Pi OS/ Ubuntu OS or other OS using a USB to serial converter -->

Si tienes un **Convertidor USB a Serie**, puedes usar los siguientes pasos para iniciar sesión en Raspberry Pi OS

Conecta cables puente desde un Convertidor USB a Serie a los **pines UART** en el conector de 40 pines GPIO del reTerminal como sigue

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/USB-UART.png" alt="pir" width={1000} height="auto" /></p>

Ahora configuremos el software en la computadora. Por favor sigue según tu sistema operativo

### Para Windows

- **Paso 1.** Conecta el Convertidor USB a Serie a la PC

- **Paso 2.** Abre el **Administrador de dispositivos** escribiendo **Administrador de dispositivos** en la caja de búsqueda de windows

- **Paso 3.** Haz clic en la flecha desplegable de **Puertos (COM y LPT)** y encuentra el nombre del puerto serie conectado (ej: **COM7**)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/COM7-dev-show.jpg" alt="pir" width={320} height="auto" /></p>

- **Paso 4.** Descarga e instala **Putty** visitando [este enlace](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

**Nota:** Putty es un cliente SSH y telnet donde puedes usarlo para conectarte al reTerminal vía SSH. Puedes omitir este paso si ya tienes Putty instalado

- **Paso 5.** Abre Putty para conectar la PC al reTerminal

- **Paso 6.** Selecciona **Serial** bajo el **Tipo de Conexión**

- **Paso 7.** Configura los ajustes como sigue:

  - Línea serie: COM7 (elige tu puerto COM)
  - Velocidad: 9600

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/COM7-Putty-connect.jpg" alt="pir" width={450} height="auto" /></p>

- **Paso 8.** Haz clic en **Abrir**

- **Paso 9.** En la ventana de Putty, ingresa los detalles de inicio de sesión como sigue

```sh
- Username: pi
- Password: raspberry
```

- **Paso 10.** Si has iniciado sesión exitosamente en el Raspberry Pi OS, verás la siguiente salida

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi.png" alt="pir" width={900} height="auto" /></p>

### Para Mac/Linux

- **Paso 1.** Conecta el Convertidor USB a Serie a la PC

- **Paso 2.** Abre una **ventana de terminal** en Mac/Linux

- **Paso 3.** Escribe lo siguiente para actualizar la **lista de paquetes**

```sh
sudo apt-get update
```

- **Paso 4.** Escribe lo siguiente para instalar **minicom**

```sh
sudo apt-get install minicom
```

- **Paso 5.** Escribe lo siguiente en el terminal para ver los dispositivos serie conectados

```sh
dmesg | grep tty
```

> <p style={{fontSize: 16}}>Ej: <br/>
    [ 1562.048241] cdc_acm 1-3:1.0: ttyACM0: USB ACM device</p>

- **Paso 6.** Conéctate al dispositivo serie escribiendo lo siguiente

```sh
minicom -D /dev/ttyACM0 -b 9600
```

**Nota:** La velocidad de baudios está configurada a 9600

- **Paso 7.** Después de las conexiones de hardware mencionadas arriba, enciende la alimentación desde el enchufe de pared para encender el reTerminal

¡Ahora has iniciado sesión exitosamente en Raspberry Pi OS!