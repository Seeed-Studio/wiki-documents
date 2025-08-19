---
description: Guía de Inicio con reTerminal
title: Comenzando con reTerminal
keywords:
  - Edge
  - reTerminal
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminal
last_update:
  date: 04/03/2025
  author: Erick González
---

# Comenzando con reTerminal

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki_thumb.png" alt="pir" width="600" height="auto"/></p>

Presentamos reTerminal, un nuevo miembro de la familia reThings. Este dispositivo HMI (Interfaz Humano-Máquina) está listo para el futuro y puede trabajar de forma sencilla y eficiente con sistemas IoT y en la nube para habilitar escenarios infinitos en el Edge.

reTerminal está impulsado por una Raspberry Pi Compute Module 4 (CM4), con CPU Quad-Core Cortex-A72 a 1.5GHz y una pantalla IPS capacitiva multi-touch de 5 pulgadas con resolución 1280 x 720. Posee 4GB de RAM, suficiente para multitarea, y 32GB de eMMC, permitiendo arranques rápidos y experiencia fluida. Cuenta con conectividad inalámbrica de doble banda Wi-Fi 2.4GHz/5GHz y Bluetooth 5.0 BLE.

reTerminal incluye una interfaz de expansión de alta velocidad e I/O rico para mayor capacidad de expansión. Este dispositivo ofrece funciones de seguridad, como un co-procesador criptográfico con almacenamiento seguro de claves en hardware. Además, integra módulos como acelerómetro, sensor de luz y un RTC (reloj de tiempo real). Tiene un puerto Gigabit Ethernet para conexiones de red más rápidas y, además, dos puertos USB 2.0 Tipo A. El header de 40 pines en el reTerminal abre muchas posibilidades de IoT.

reTerminal se envía con Raspberry Pi OS preinstalado. ¡Simplemente conéctalo a la corriente y comienza a construir tus aplicaciones de IoT, HMI y Edge AI de inmediato!

| Fecha de lanzamiento | OS preinstalado           | Firmware STM32 preinstalado | Versión de placa | Información adicional                                                                                                                                   |
|----------------------|---------------------------|-----------------------------|------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| 06/15/2021           | 2021-06-02-Raspbian(modified)-32-bit | V1.0                        | v1.3             | Initial                                                                                                                                                 |
| 08/03/2021           | 2021-06-02-Raspbian(modified)-32-bit | V1.1                        | v1.4             |                                                                                                                                                        |
| 09/03/2021           | 2021-06-02-Raspbian(modified)-32-bit | V1.6                        | v1.6             | Cambia Chip de Expansión IO de MCP23008-E a PCA9554,<br />Cambia chip de encriptación de ATECC608A-SSHDA-B a ATECC608A-TNGTLSS-G [Más Info](#../reTerminal-FAQ#q13-how-to-check-if-the-encryption-chip-is-atecc608a-sshda-b-or-atecc608a-tngtlss-g) |
| 11/02/2021           | 2021-09-14-Raspbian(modified)-32-bit | V1.8                        | v1.6             |                                                                                                                                                        |

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> ¡Cómpralo Ahora 🖱️</font></span></strong>
    </a>
</div>

## Características

- Diseño modular integrado con alta estabilidad y posibilidad de expansión
- Impulsado por Raspberry Pi Compute Module 4 con 4GB RAM & 32GB eMMC
- Pantalla IPS capacitiva multitáctil de 5" a 1280x720 y 293 PPI
- Conectividad inalámbrica Wi-Fi 2.4GHz/5GHz y Bluetooth 5.0 BLE
- Interfaz de expansión de alta velocidad e I/O rico para mayor expandibilidad
- Co-procesador criptográfico con almacenamiento seguro de claves en hardware
- Módulos integrados: acelerómetro, sensor de luz y RTC
- Puerto Gigabit Ethernet y dos puertos USB 2.0 Tipo A
- Header de 40 pines para aplicaciones IoT

## Especificaciones

<table style={{tableLayout: 'fixed', width: 743}}>
  <colgroup>
    <col style={{width: 146}} />
    <col style={{width: 198}} />
    <col style={{width: 399}} />
  </colgroup>
  <thead>
    <tr>
      <th colSpan={2}>Especificación</th>
      <th>Detalles</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={2}>Plataforma</td>
      <td>Procesador</td>
      <td>Broadcom BCM2711 quad-core Cortex-A72 (ARM v8)</td>
    </tr>
    <tr>
      <td>Frecuencia</td>
      <td>SoC 64-bit @ 1.5GHz</td>
    </tr>
    <tr>
      <td rowSpan={2}>Memoria</td>
      <td>Capacidad</td>
      <td>4GB</td>
    </tr>
    <tr>
      <td>Tecnología</td>
      <td>LPDDR4 con ECC integrado</td>
    </tr>
    <tr>
      <td>eMMC</td>
      <td>Capacidad</td>
      <td>32GB</td>
    </tr>
    <tr>
      <td rowSpan={2}>Inalámbrico</td>
      <td>Wi-Fi</td>
      <td>2.4GHz y 5.0GHz IEEE 802.11b/g/n/ac</td>
    </tr>
    <tr>
      <td>Bluetooth</td>
      <td>Bluetooth 5.0, BLE</td>
    </tr>
    <tr>
      <td rowSpan={2}>Pantalla</td>
      <td>LCD</td>
      <td>Pantalla de 5" 720x1280</td>
    </tr>
    <tr>
      <td>Panel Táctil</td>
      <td>Capacitivo (soporta multi-touch)</td>
    </tr>
    <tr>
      <td rowSpan={5}>Video</td>
      <td>HDMI</td>
      <td>1 x Micro HDMI (hasta 4Kp60)</td>
    </tr>
    <tr>
      <td>CSI</td>
      <td>1 x interfaz de cámara MIPI CSI de 2 carriles</td>
    </tr>
    <tr>
      <td rowSpan={3}>Multimedia</td>
      <td>H.265 (4Kp60 decode)</td>
    </tr>
    <tr>
      <td>H.264 (1080p60 decode,1080p30 encode)</td>
    </tr>
    <tr>
      <td>Gráficos OpenGL ES 3.0</td>
    </tr>
    <tr>
      <td rowSpan={10}>Módulos Integrados</td>
      <td rowSpan={2}>Reloj de tiempo real</td>
      <td>NXP Semiconductors PCF8563T</td>
    </tr>
    <tr>
      <td>Bajo consumo de respaldo, típico 0.25μA @ VDD=3.0V y T=25℃</td>
    </tr>
    <tr>
      <td rowSpan={2}>Acelerómetro</td>
      <td>STMicroelectronics LIS3DHTR</td>
    </tr>
    <tr>
      <td>16-bit, ±2g/±4g/±8g/±16g rango dinámico seleccionable</td>
    </tr>
    <tr>
      <td rowSpan={2}>Encriptación</td>
      <td>Microchip ATECC608A</td>
    </tr>
    <tr>
      <td>Almacenamiento seguro de claves en hardware, ECDSA</td>
    </tr>
    <tr>
      <td rowSpan={2}>Sensor de luz</td>
      <td>Levelek LTR-303ALS-01</td>
    </tr>
    <tr>
      <td>Sensor de luz digital</td>
    </tr>
    <tr>
      <td>Expansión IO interna</td>
      <td>Microchip MCP23008-E/ PCA9554</td>
    </tr>
    <tr>
      <td>Buzzer</td>
      <td>≥85dB @10cm 2700±300Hz</td>
    </tr>
    <tr>
      <td rowSpan={12}>I/O Externo</td>
      <td rowSpan={8}>GPIOs</td>
      <td>Hasta 5 × UART</td>
    </tr>
    <tr>
      <td>Hasta 5 × I2C</td>
    </tr>
    <tr>
      <td>Hasta 5 × SPI</td>
    </tr>
    <tr>
      <td>1 × interfaz SDIO</td>
    </tr>
    <tr>
      <td>1 × DPI (Parallel RGB)</td>
    </tr>
    <tr>
      <td>1 × PCM</td>
    </tr>
    <tr>
      <td>1 × canal PWM</td>
    </tr>
    <tr>
      <td>Hasta 3× salidas GPCLK</td>
    </tr>
    <tr>
      <td rowSpan={4}>Interfaz vertical<br />de expansión</td>
      <td>1 × PCIe 1-lane Host, Gen 2 (5Gbps)</td>
    </tr>
    <tr>
      <td>1 × puerto USB 2.0 (highspeed)</td>
    </tr>
    <tr>
      <td>26 x GPIOs</td>
    </tr>
    <tr>
      <td>POE</td>
    </tr>
    <tr>
      <td rowSpan={2}>Alimentación</td>
      <td>Voltaje</td>
      <td>5V DC</td>
    </tr>
    <tr>
      <td>Corriente</td>
      <td>3A (Mínimo)</td>
    </tr>
    <tr>
      <td>Temperatura</td>
      <td>Temp. Operación</td>
      <td>0 - 70°C (Para la pantalla LCD: 0 - 60°C)</td>
    </tr>
    <tr>
      <td rowSpan={2}>Mecánico</td>
      <td>Dimensiones</td>
      <td>140mm x 95mm x 21mm</td>
    </tr>
    <tr>
      <td>Peso</td>
      <td>285g</td>
    </tr>
  </tbody>
</table>

## Descripción General de Hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/HW_overview.png" alt="pir" width="1000" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/hw-overview-internal-v1.3.jpg" alt="pir" width="1000" height="auto"/></p>

## Diagrama de Bloques

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/reTerminal_block_diagram-v1.3.png" alt="pir" width="1000" height="auto"/></p>

## Diagrama de Pinout

**Nota:** Asegúrate de mantener el reTerminal en la orientación ilustrada abajo. La LCD se ubica a la derecha y la parte trasera a la izquierda.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/pinout-v2.jpg" alt="pir" width="1000" height="auto"/></p>

:::note
Pon atención a la orientación en el diagrama. La LCD y los botones están a la derecha mientras la parte trasera está a la izquierda. Además, el dispositivo está volteado boca abajo.
:::

## Inicio Rápido con reTerminal

Si deseas comenzar con reTerminal de la forma más rápida y sencilla, sigue la guía abajo.

### Hardware Necesario

- reTerminal
- Cable Ethernet o conexión Wi-Fi
- Adaptador de corriente (5V/3A)
- Cable USB Tipo-C

### Configuración de Software

#### Iniciar sesión en Raspberry Pi OS

reTerminal viene con Raspberry Pi OS preinstalado. ¡Enciéndelo y arranca directamente!

1. Conecta un extremo de USB-C a reTerminal y el otro a un adaptador de 5V/4A.
2. Cuando arranque Raspberry Pi OS, presiona **OK** en la ventana de **Warning**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-1-new-1.png" alt="pir" width="800" height="auto"/></p>

3. En la ventana **Welcome to Raspberry Pi**, presiona **Next** para el set up inicial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-2-new.png" alt="pir" width="400" height="auto"/></p>

4. Elige **país, idioma, zona horaria** y presiona **Next**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-3-new.png" alt="pir" width="400" height="auto"/></p>

5. Para cambiar la contraseña, primero clic en **Raspberry Pi** icon => `Universal Access > Onboard` para teclado en pantalla.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-4-new.png" alt="pir" width="400" height="auto"/></p>

6. Ingresa la contraseña deseada y clic **Next**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-5-new.png" alt="pir" width="400" height="auto"/></p>

**Nota:** Si deseas mantener la contraseña por defecto **raspberry**, deja en blanco y clic en **Next**.

7. Clic **Next**:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-6-new.png" alt="pir" width="400" height="auto"/></p>

8. Si deseas conectarte a WiFi, elige tu red y contraseña, luego **Next**. O presiona **Skip** para omitir.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-7-new.png" alt="pir" width="400" height="auto"/></p>

9. **Muy importante**. Presiona **Skip** para omitir actualizar software. Si quieres actualizar, sigue [esta wiki](https://wiki.seeedstudio.com/reTerminal-FAQ/#q3-how-to-upgrade-raspberry-pi-os-and-the-installed-packages).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-8-new.png" alt="pir" width="400" height="auto"/></p>

10. Finalmente, clic **Done** para terminar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-9-new.png" alt="pir" width="400" height="auto"/></p>

**Nota:** El botón en la esquina superior izquierda puede encender el reTerminal tras apagar usando software.

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/power-button-press.jpg" alt="pir" width="650" height="auto"/></p>

**Tip:** Si quieres experimentar Raspberry Pi OS en una pantalla más grande, conecta un display al micro-HDMI y un teclado + mouse a los puertos USB.

## Comenzando con reTerminal (Extendido)

Si quieres instalar Raspberry Pi OS por tu cuenta, instalar otro OS (ej. Ubuntu 64-bit), iniciar sesión vía SSH por WiFi/Ethernet/USB a Serial, sigue la guía abajo.

### Hardware Necesario

- reTerminal
- PC (Windows/Mac/Linux)
- Tarjeta micro-SD de 8GB o más (opcional)
- Lector micro-SD (opcional)
- Convertidor USB a Serial (opcional)
- Cable Ethernet (opcional)
- Conexión Wi-Fi (opcional)
- Adaptador de corriente (5V/3A)
- Cable USB Tipo-C

### <span id="jump2">Flashear Raspberry Pi OS/ Ubuntu 64-bit u otro OS en eMMC</span>

Podemos flashear un SO a la eMMC del CM4 del reTerminal. Una vez instalados los drivers, basta conectar el puerto USB-C a tu PC y aparecerá como unidad externa. Empieza quitando la carcasa trasera.

> **Nota:** La imagen del sistema empaquetada por Seeed que incluye drivers apropiados: [pi-gen-expand](https://github.com/Seeed-Studio/pi-gen-expand)

1. Quita los 4 tapones de goma y desatornilla la tapa trasera.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remove-screw-1.png" alt="pir" width="450" height="auto"/></p>

2. Quita 2 tornillos para desmontar el disipador.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/remove-screw-heatsink-2.jpg" alt="pir" width="600" height="auto"/></p>

3. Mueve el interruptor **boot mode** hacia abajo según la imagen:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/boot-switch-2.jpg" alt="pir" width="600" height="auto"/></p>

Ahora, config. de software según tu OS deseado.

#### Para Windows

1. Descarga **rpiboot_setup.exe** de [este enlace](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe). Instálalo.
2. Conecta reTerminal al PC por cable USB-C.
3. Windows instalará drivers. Busca **rpiboot** e inícialo.
4. Abre **Explorador de archivos** y verás la eMMC del CM4 como unidad USB.
5. Descarga **Raspberry Pi Imager** de [aquí](https://www.raspberrypi.org/software/).
6. Abre Raspberry Pi Imager.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

7. Pulsa **CTRL + SHIFT + X** para **Advanced options**.

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

Allí puedes configurar hostname, SSH, password, wifi, etc.

8. Clic en **CHOOSE OS** y selecciona el OS deseado.

:::note
Para Raspbian OS, hemos probado Bullseye (32-bit/64-bit) sin problema de [pantalla en negro](https://wiki.seeedstudio.com/reterminal_black_screen/#flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal), y también Bookworm 64-bit funciona bien.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**Nota:** Puedes seleccionar otro OS como Ubuntu 64-bit dentro de **Other general purpose OS**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

9. Clic en **CHOOSE STORAGE** y selecciona la eMMC.

10. Finalmente, clic en **WRITE**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

Espera unos minutos.

11. Regresa el interruptor **Boot Mode** a su posición original y ensambla la carcasa.

Ahora sigue [aquí](#log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-ssh-over-wi-fi-ethernet).

#### Para Mac

:::caution
**Necesitas [homebrew](https://brew.sh/) instalado.**
Verifica con `brew -V`.
:::

1. Clona repo **usbboot**:

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

2. Instala **libusb**:

```sh
brew install libusb
```

3. Instala **pkg-config**:

```sh
brew install pkg-config
```

4. Compila:

```sh
make
```

5. Ejecuta binario:

```sh
sudo ./rpiboot
```

6. Conecta reTerminal al Mac por USB-C.

7. Descarga e instala **Raspberry Pi Imager** de [este link](https://www.raspberrypi.org/software/).

8. Abre Raspberry Pi Imager.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

9. Pulsa **CTRL + SHIFT + X** para "Advanced options".

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

Configura SSH, wifi, etc.

10. **CHOOSE OS** y selecciona tu OS preferido.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**Nota:** Para Ubuntu 64-bit => **Other general purpose OS**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

11. **CHOOSE STORAGE** => eMMC.

12. **WRITE**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

Espera.

13. Regresa el interruptor boot mode y ensambla.

Ahora sigue [aquí](#log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-ssh-over-wi-fi-ethernet).

#### Para Linux

Asegúrate de tener Git instalado.

1. `sudo apt-get update`
2. `sudo apt install git pkg-config make gcc libusb-1.0-0-dev`
3. Si Git da error por fecha, `sudo date MMDDhhmm`.

4. Clona repo usbboot:

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

5. Compila e instala:

```sh
make
```

6. Ejecuta:

```sh
sudo ./rpiboot
```

7. Conecta reTerminal al PC por USB-C.

8. Descarga Raspberry Pi Imager de [aquí](https://www.raspberrypi.org/software/).

9. Abre Raspberry Pi Imager.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

10. **CTRL + SHIFT + X** => Advanced options.

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

11. **CHOOSE OS** => tu OS preferido.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**Nota:** Para Ubuntu 64-bit => **Other general purpose OS**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

12. **CHOOSE STORAGE** => eMMC.

13. **WRITE**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

Espera.

14. Regresa el interruptor boot mode y ensambla.

### <span id="log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-ssh-over-wi-fi-ethernet">Iniciar sesión en Raspberry Pi OS/Ubuntu/otro OS vía SSH sobre Wi-Fi/Ethernet</span>

Si quieres iniciar sesión vía **SSH por Wi-Fi/Ethernet**, sigue:

**Nota:** si configuraste WiFi y SSH en Raspberry Pi Imager, salta pasos 1-4.

1. Si tienes Wi-Fi, haz clic en el ícono Wi-Fi arriba a la derecha (en Raspberry Pi OS), elige red y pon clave.

2. Si no tienes Wi-Fi, conecta un cable ethernet desde tu router al reTerminal.

**Nota:** Asegúrate de que tu PC y reTerminal estén en la misma red.

3. En Raspberry Pi OS, ve a `Preferences > Raspberry Pi Configuration > Interfaces` y habilita **SSH**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/ssh-select-2.jpg" alt="pir" width="1000" height="auto"/></p>

4. Listo. Ahora en tu PC:

#### Windows

1. Abre **Command Prompt**:

```sh
ssh pi@raspberrypi.local
```

2. Acepta con **yes**.

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows-prompt.png" alt="pir" width="750" height="auto"/></p>

3. Contraseña:

```sh
raspberry
```

4. Si iniciaste sesión correctamente:

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows.png" alt="pir" width="1000" height="auto"/></p>

#### Mac/Linux

1. Abre terminal:

```sh
ssh pi@raspberrypi.local
```

2. Acepta con **yes**.

3. Contraseña:

```sh
raspberry
```

4. Si todo OK:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi_Linux.png" alt="pir" width="900" height="auto"/></p>

### <span id="jump1">Instalar drivers reTerminal tras flashear un OS nuevo (Raspberry Pi OS/Ubuntu u otro)</span>

reTerminal viene con drivers necesarios preinstalados de fábrica. Pero si flasheas un OS nuevo, debes instalarlos manualmente. Entre ellos, drivers para **pantalla LCD de 5", panel táctil, acelerómetro, sensor de luz, LEDs de usuario, botones de usuario, RTC, buzzer, co-procesador criptográfico**.

1. Clona el repo:

```sh
sudo apt install git -y
git clone --depth 1 https://github.com/Seeed-Studio/seeed-linux-dtoverlays
```

2. Entra al repo:

```sh
cd seeed-linux-dtoverlays
```

:::note
Para **32bit OS** debes hacer:

```
echo arm_64bit=0 | sudo tee -a /boot/config.txt
sudo reboot
```

y luego `sudo ./scripts/reTerminal.sh`.
:::

3. Instala drivers:

```sh
sudo ./scripts/reTerminal.sh
```

:::note
Si no quieres actualizar el kernel simultáneamente:

```sh
sudo ./scripts/reTerminal.sh --keep-kernel
```
:::

Verás algo así si se instala con éxito:

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/driver-success.png" alt="pir" width="1000" height="auto"/></p>

4. Reinicia:

```sh
sudo reboot
```

### Flashear Raspberry Pi OS con drivers de Seeed a eMMC

1. Como en los pasos normales, primero elige el modelo de dispositivo:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/01.png" alt="pir" width="700" height="auto"/></p>

2. Al elegir el sistema, descarga el que necesites, descomprímelo y selecciónalo.

- **Descarga Raspberry Pi OS**:

| Versión                                                          | Descripción                                  | TAG      |
|------------------------------------------------------------------|----------------------------------------------|----------|
| [2024-03-14-Raspbian-reTerminal-arm64](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2024-03-14-Raspbian-reTerminal/2024-03-14-Raspbian-reTerminal-arm64.zip)             | 64bit Debian12(bookworm) Linux 6.6.20        | lastest  |
| [2024-03-14-Raspbian-reTerminal-armhf](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2024-03-14-Raspbian-reTerminal/2024-03-14-Raspbian-reTerminal-armhf.zip)            | 32bit Debian12(bookworm) Linux 6.6.20        | lastest  |
| [2022-07-21-Raspbian-reTerminal-arm64](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2022-07-21-Raspbian-reTerminal-arm64/64bit-20220721T012743Z-001.zip)                | 64bit Debian11(Bullseye) Linux 5.15.32-v7+   | release  |
| [2022-07-21-Raspbian-reTerminal-armhf](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2022-07-21-Raspbian-reTerminal-arm64/32bit-20220721T012743Z-001.zip)                 | 32bit Debian11(Bullseye) Linux 5.15.32-v7+   | release  |

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/02.png" alt="pir" width="700" height="auto"/></p>

Elige el OS con extensión **.img**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/03.png" alt="pir" width="700" height="auto"/></p>

:::caution
Si instalas la versión Bookworm más reciente, **no** configures nada en la opción "Advanced options". Evita esa interfaz para evitar errores de driver.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/notice.png" alt="pir" width="450" height="auto"/></p>

Si accidentalmente configuras algo y aparece un error de rotación de pantalla, [reinstala drivers](#jump1) para corregirlo.
:::

3. Para otras operaciones, consulta los [pasos previos](#jump2). Tras la instalación, no necesitas instalar drivers (ya vienen incluidos).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/04.png" alt="pir" width="700" height="auto"/></p>

### Guía de Desarmado de reTerminal

Mira el siguiente video para desarmar reTerminal:

<p align="center"><iframe width="800" height="500" src="https://www.youtube.com/embed/hAfdb603emw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>></p>

## FAQ

Para preguntas frecuentes, [clic aquí](https://wiki.seeedstudio.com/reTerminal-FAQ) para la wiki de FAQs del reTerminal.

## Recursos

- **[PDF]** [reTerminal Schematics v1.6](https://files.seeedstudio.com/wiki/ReTerminal/reTerminal-v1.6_SCH.pdf)

- **[ZIP]** [reTerminal Schematics v1.6](https://files.seeedstudio.com/wiki/ReTerminal/reTerminal-v1.6_SCH.zip)

- **[PDF]** [reTerminal Schematics v1.3](https://files.seeedstudio.com/wiki/ReTerminal/reTerminal-v1.3_SCH.pdf)

- **[ZIP]** [reTerminal Schematics v1.3](https://files.seeedstudio.com/wiki/ReTerminal/reTerminal-v1.3_SCH.zip)

- **[STP]** [Modelo 3D de reTerminal](https://files.seeedstudio.com/wiki/ReTerminal/resources/reTerminal-3d-model.stp)

- **[PDF]** [Datasheet Raspberry Pi Compute Module 4](https://datasheets.raspberrypi.org/cm4/cm4-datasheet.pdf)

- **[Página Web]** [Documentación Oficial Raspberry Pi](https://www.raspberrypi.org/documentation/)

## Soporte Técnico & Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte soporte y asegurar que tu experiencia sea lo más fluida posible. Ofrecemos varios canales de comunicación para distintas preferencias.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
