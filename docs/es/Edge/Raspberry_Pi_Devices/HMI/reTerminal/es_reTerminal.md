---
description: Introducción a reTerminal
title: Introducción a reTerminal
keywords:
  - Edge
  - reTerminal 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminal
sku: 110070048,102110638,103060001,E2025081502,E2025081503
last_update:
  date: 1/31/2023
  author: jianjing Huang
---
# Introducción a reTerminal

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki_thumb.png" alt="pir" width="600" height="auto"/></p>

Presentamos reTerminal, un nuevo miembro de nuestra familia reThings. Este dispositivo de Interfaz Humano-Máquina (HMI) preparado para el futuro puede trabajar fácil y eficientemente con sistemas IoT y en la nube para desbloquear escenarios infinitos en el edge.

reTerminal está alimentado por un Raspberry Pi Compute Module 4 (CM4) que es una CPU Quad-Core Cortex-A72 funcionando a 1.5GHz y una pantalla táctil capacitiva IPS de 5 pulgadas con una resolución de 1280 x 720. Tiene una cantidad suficiente de RAM (4GB) para realizar multitarea y también tiene una cantidad suficiente de almacenamiento eMMC (32GB) para instalar un sistema operativo, permitiendo tiempos de arranque rápidos y una experiencia general fluida. Tiene conectividad inalámbrica con Wi-Fi de banda dual 2.4GHz/5GHz y Bluetooth 5.0 BLE.

reTerminal consiste en una interfaz de expansión de alta velocidad y E/S rica para mayor expandibilidad. Este dispositivo tiene características de seguridad como un coprocesador criptográfico con almacenamiento de claves seguro basado en hardware. También tiene módulos integrados como un acelerómetro, sensor de luz y un RTC (Reloj de Tiempo Real). reTerminal tiene un Puerto Ethernet Gigabit para conexiones de red más rápidas y también tiene puertos USB 2.0 Tipo-A duales. El header de 40 pines en el reTerminal lo abre para una amplia gama de aplicaciones IoT.


reTerminal se envía con Raspberry Pi OS listo para usar. Así que, todo lo que tienes que hacer es conectarlo a la alimentación y comenzar a construir tus proyectos maker, construcciones IoT y de automatización del hogar hasta experimentos DIY fuera de la red

| Fecha de Lanzamiento | SO Preinstalado | Firmware STM32 Preinstalado | Versión de Placa | Información Adicional |
|---|---|---|---|---|
| 06/15/2021 | 2021-06-02-Raspbian(modificado)-32-bit | V1.0 | v1.3 | Inicial |
| 08/03/2021 | 2021-06-02-Raspbian(modificado)-32-bit | V1.1 | v1.4 |  |
| 09/03/2021 | 2021-06-02-Raspbian(modificado)-32-bit | V1.6 | v1.6 | Cambio del Chip de Expansión IO de MCP23008-E a PCA9554, <br />Cambio del Microchip de Encriptación de ATECC608A-SSHDA-B a ATECC608A-TNGTLSS-G [Más Información](#../reTerminal-FAQ#q13-how-to-check-if-the-encryption-chip-is-atecc608a-sshda-b-or-atecc608a-tngtlss-g) |
| 11/02/2021 | 2021-09-14-Raspbian(modificado)-32-bit | V1.8 | v1.6 |  |



<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Características

- Diseño modular integrado con alta estabilidad y expandibilidad
- Alimentado por Raspberry Pi Computer Module 4 con 4GB RAM y 32GB eMMC
- Pantalla táctil capacitiva IPS de 5 pulgadas a 1280 x 720 y 293 PPI
- Conectividad inalámbrica con Wi-Fi de banda dual 2.4GHz/5GHz y Bluetooth 5.0 BLE
- Interfaz de expansión de alta velocidad y E/S rica para mayor expandibilidad
- Coprocesador criptográfico con almacenamiento de claves seguro basado en hardware
- Módulos integrados como acelerómetro, sensor de luz y RTC
- Puerto Ethernet Gigabit y puertos USB 2.0 Tipo-A duales
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
      <td>SoC de 64-bit @ 1.5GHz</td>
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
      <td>LCD de 5 pulgadas 720x1280</td>
    </tr>
    <tr>
      <td>Panel Táctil</td>
      <td>Panel táctil capacitivo (soporte multi-táctil)</td>
    </tr>
    <tr>
      <td rowSpan={5}>Video</td>
      <td>HDMI</td>
      <td>1 x salida Micro HDMI (hasta 4Kp60 soportado)</td>
    </tr>
    <tr>
      <td>CSI</td>
      <td>1 x interfaz de cámara MIPI CSI de 2 carriles</td>
    </tr>
    <tr>
      <td rowSpan={3}>Multimedia</td>
      <td>H.265 (decodificación 4Kp60)</td>
    </tr>
    <tr>
      <td>H.264 (decodificación 1080p60, codificación 1080p30)</td>
    </tr>
    <tr>
      <td>Gráficos OpenGL ES 3.0</td>
    </tr>
    <tr>
      <td rowSpan={10}>Módulos Integrados</td>
      <td rowSpan={2}>Reloj de Tiempo Real</td>
      <td>NXP Semiconductors PCF8563T</td>
    </tr>
    <tr>
      <td>Corriente de respaldo baja; típica 0.25μA a VDD = 3.0 V y Temperatura = 25 ℃</td>
    </tr>
    <tr>
      <td rowSpan={2}>Acelerómetro</td>
      <td>STMicroelectronics LIS3DHTR</td>
    </tr>
    <tr>
      <td>16-bit, escala completa dinámicamente seleccionable ±2g/±4g/±8g/±16g</td>
    </tr>
    <tr>
      <td rowSpan={2}>Encriptación</td>
      <td>Microchip ATECC608A</td>
    </tr>
    <tr>
      <td>Almacenamiento de Claves Seguro Basado en Hardware, Firma Asimétrica, Verificación, Acuerdo de Claves</td>
    </tr>
    <tr>
      <td rowSpan={2}>Sensor de Luz</td>
      <td>Levelek LTR-303ALS-01</td>
    </tr>
    <tr>
      <td>Sensor de luz digital</td>
    </tr>
    <tr>
      <td>Expansión IO<br />Interna</td>
      <td>Microchip MCP23008-E/ PCA9554</td>
    </tr>
    <tr>
      <td>Zumbador</td>
      <td>≥85dB @10cm 2700±300Hz</td>
    </tr>
    <tr>
      <td rowSpan={12}>E/S Externa</td>
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
      <td>1 × DPI (Pantalla RGB Paralela)</td>
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
      <td rowSpan={4}>Interfaz de expansión<br />vertical</td>
      <td>1 × PCIe 1-carril Host, Gen 2 (5Gbps)</td>
    </tr>
    <tr>
      <td>1 × puerto USB 2.0 (alta velocidad)</td>
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
      <td>3A(Mínimo)</td>
    </tr>
    <tr>
      <td>Temperatura</td>
      <td>Temperatura de Operación</td>
      <td>0 - 70°C( Para la Pantalla LCD: 0 - 60°C)</td>
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

## Descripción General del Hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Fix/reTerminal.png" alt="pir" width="1000" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Fix/reTerminal_1.png" alt="pir" width="1000" height="auto"/></p>

## Diagrama de Bloques

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Fix/reTerminal_2.png" alt="pir" width="1000" height="auto"/></p>

## Diagrama de Pines

**Nota:** Por favor asegúrate de mantener el reTerminal en la orientación como se ilustra a continuación. Aquí el LCD está mirando hacia el lado derecho y la parte trasera está mirando hacia el lado izquierdo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/pinout-v2.jpg" alt="pir" width="1000" height="auto"/></p>

:::note
Por favor presta atención cuidadosamente a la orientación del reTerminal en el diagrama anterior. El LCD y los botones integrados están en el lado derecho mientras que la parte trasera del reTerminal está en el lado izquierdo. También todo el dispositivo está volteado boca abajo.
:::

## Inicio Rápido con reTerminal

Si quieres comenzar con el reTerminal de la manera más rápida y fácil, puedes seguir la guía a continuación.

### Hardware Requerido

Necesitas preparar el siguiente hardware antes de comenzar con reTerminal

- reTerminal
- Cable Ethernet o conexión Wi-Fi
- Adaptador de alimentación (5V/3A)
- Cable USB Tipo-C

### Configuración de Software

#### Iniciar sesión en Raspberry Pi OS

reTerminal viene con Raspberry Pi OS preinstalado listo para usar. ¡Así que podemos encender el reTerminal e iniciar sesión en Raspberry Pi OS directamente!

- **Paso 1.** Conecta un extremo de un cable USB Tipo-C al reTerminal y el otro extremo a un adaptador de alimentación (5V/4A)

- **Paso 2.** Una vez que Raspberry Pi OS haya arrancado, presiona **OK** para la ventana de **Warning**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-1-new-1.png" alt="pir" width="800" height="auto"/></p>

- **Paso 3.** En la ventana **Welcome to Raspberry Pi**, presiona **Next** para comenzar con la configuración inicial

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-2-new.png" alt="pir" width="400" height="auto"/></p>

- **Paso 4.** Elige tu **país, idioma, zona horaria** y presiona **Next**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-3-new.png" alt="pir" width="400" height="auto"/></p>

- **Paso 5.** Para cambiar la contraseña, primero haz clic en el icono de **Raspberry Pi**, navega a `Universal Access > Onboard` para abrir el teclado en pantalla

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-4-new.png" alt="pir" width="400" height="auto"/></p>

- **Paso 6.** Ingresa tu contraseña deseada y haz clic en **Next**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-5-new.png" alt="pir" width="400" height="auto"/></p>

**Nota:** Si quieres mantener la contraseña predeterminada como **raspberry**, puedes dejar esto en blanco y hacer clic en **Next**

- **Paso 7.** Haz clic en **Next** para lo siguiente

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-6-new.png" alt="pir" width="400" height="auto"/></p>

- **Paso 8.** Si quieres conectarte a una red WiFi, puedes elegir una red, conectarte a ella y presionar **Next**. Sin embargo, si quieres configurarlo más tarde, puedes presionar **Skip**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-7-new.png" alt="pir" width="400" height="auto"/></p>

- **Paso 9.** **Este paso es muy importante.** Debes asegurarte de presionar **Skip** para omitir la actualización del software. Sin embargo, si quieres actualizar el software, puedes seguir [este wiki](https://wiki.seeedstudio.com/es/reTerminal-FAQ/#q3-how-to-upgrade-raspberry-pi-os-and-the-installed-packages)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-8-new.png" alt="pir" width="400" height="auto"/></p>

- **Paso 10.** Finalmente presiona **Done** para finalizar la configuración

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/setup-9-new.png" alt="pir" width="400" height="auto"/></p>

**Nota:** El botón en la esquina superior izquierda se puede usar para encender el reTerminal después de apagarlo usando software

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/power-button-press.jpg" alt="pir" width="650" height="auto"/></p>

**Consejo:** Si quieres experimentar el Raspberry Pi OS en una pantalla más grande, puedes conectar una pantalla al puerto micro-HDMI del reTerminal y también conectar un teclado y un ratón a los puertos USB del reTerminal.

## Introducción al reTerminal (Extendido)

Si quieres instalar Raspberry Pi OS por ti mismo, instalar otro OS como Ubuntu de 64 bits, iniciar sesión en reTerminal vía SSH sobre WiFi, SSH sobre Ethernet y Adaptador USB a Serial, ¡puedes seguir la guía a continuación!

### Hardware Requerido

Necesitas preparar el siguiente hardware

- reTerminal
- Computadora (Windows/Mac/Linux)
- Tarjeta micro-SD de 8GB (o más) (opcional)
- Lector de tarjetas micro-SD (opcional)
- Convertidor USB a serial (opcional)
- Cable Ethernet (opcional)
- Conexión Wi-Fi (opcional)
- Adaptador de corriente (5V/3A)
- Cable USB Type-C

### <span id="jump2">Flashear Raspberry Pi OS/ Ubuntu OS de 64 bits u Otro OS al eMMC</span>

Podemos flashear **Raspberry Pi OS/ Ubuntu OS de 64 bits u otro OS** en el **almacenamiento eMMC** del CM4 en el reTerminal. Una vez que los controladores necesarios estén instalados, solo tienes que conectar el puerto USB Type-C del reTerminal a tu PC, y se mostrará como una unidad externa. Comienza removiendo la carcasa trasera del reTerminal.

> **Nota:** La imagen del sistema más reciente empaquetada por Seeed, incluyendo los controladores apropiados: [pi-gen-expand](https://github.com/Seeed-Studio/pi-gen-expand)


- **Paso 1.** Remueve las 4 cubiertas de goma y abre la carcasa trasera del reTerminal desatornillando los 4 tornillos debajo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remove-screw-1.png" alt="pir" width="450" height="auto"/></p>

- **Paso 2.** Remueve los 2 tornillos para desensamblar el disipador de calor

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/remove-screw-heatsink-2.jpg" alt="pir" width="600" height="auto"/></p>

- **Paso 3.** Voltea hacia abajo el **interruptor de modo de arranque** según el diagrama a continuación

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/boot-switch-2.jpg" alt="pir" width="600" height="auto"/></p>

Ahora pasemos a la configuración del software. Sigue los pasos según tu sistema operativo deseado

##### Para Windows

- **Paso 1.** Descarga el **instalador de configuración rpiboot** haciendo clic en **[este enlace](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe)** para instalar los controladores necesarios y la herramienta de arranque

- **Paso 2.** Conecta reTerminal a la PC vía cable USB Type-C

Windows ahora encontrará el hardware e instalará los controladores necesarios

- **Paso 3.** Busca la herramienta **rpiboot** que instalamos antes y ábrela

- **Paso 4.** Abre el **explorador de archivos** y verás el eMMC del Computer Module 4 mostrado como un **dispositivo de almacenamiento masivo USB**

- **Paso 5.** Descarga el software **Raspberry Pi Imager** visitando **[este enlace](https://www.raspberrypi.org/software/)**

- **Paso 6.** Abre el software Raspberry Pi Imager

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Paso 7.** Presiona **CTRL + SHIFT + X** en el teclado para abrir la ventana de **Advanced options**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

Aquí puedes **establecer un nombre de host, habilitar SSH, establecer una contraseña, configurar wifi, establecer configuraciones locales** y más

- **Paso 8.** Haz clic en **CHOOSE OS** y selecciona tu OS preferido

:::note
Si estás intentando instalar Raspbian OS, hemos realizado pruebas y encontrado que tanto las versiones de *32 bits como de 64 bits* de **Bullseye** funcionan bien con reTerminal sin encontrar ningún [**problema de pantalla negra**](https://wiki.seeedstudio.com/es/reterminal_black_screen/#flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal). Además, también hemos probado la nueva versión **Bookworm** de *64 bits*, y funciona sin problemas en reTerminal.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTA:** Puedes seleccionar otro OS como **Ubuntu de 64 bits** navegando a **Other general purpose OS**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **Paso 9.** Haz clic en **CHOOSE STORAGE** y selecciona la unidad eMMC conectada

- **Paso 10.** Finalmente, haz clic en **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

Por favor espera unos minutos hasta que el proceso de flasheo esté completo.

- **Paso 11.** Voltea el **interruptor de Modo de Arranque** de vuelta a la posición original y ensambla la carcasa del reTerminal

Ahora puedes saltar a **[aquí](#log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-ssh-over-wi-fi-ethernet)**

##### Para MAC

:::caution
**Necesitas instalar [homebrew](https://brew.sh/) antes de proceder con los siguientes pasos.**
Por favor abre una terminal y escribe ```brew -V``` para verificar si has configurado el entorno homebrew correcto, deberías ver la versión del entorno homebrew que has instalado.
:::

- **Paso 1.** Clona el repositorio **usbboot**

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **Paso 2.** Instala **libusb**

```sh
brew install libusb
```

- **Paso 3.** Instala **pkg-config**

```sh
brew install pkg-config
```

- **Paso 4.** Construye usando make

```sh
make
```

- **Paso 5.** Ejecuta el binario

```sh
sudo ./rpiboot
```

- **Paso 6.** Conecta reTerminal a tu computadora Mac vía cable USB Type-C

- **Paso 7.** Descarga e Instala la Aplicación **Raspberry Pi Imager** visitando [este enlace](https://www.raspberrypi.org/software/)

- **Paso 8.** Abre la Aplicación **Raspberry Pi Imager**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Paso 9.** Presiona **CTRL + SHIFT + X** en el teclado para abrir la ventana de **Advanced options**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

Aquí puedes **establecer un nombre de host, habilitar SSH, establecer una contraseña, configurar wifi, establecer configuraciones locales** y más

- **Paso 10.** Haz clic en **CHOOSE OS** y selecciona tu OS preferido

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTA:** Puedes seleccionar OS como **Ubuntu de 64 bits** navegando a **Other general purpose OS**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **Paso 11.** Haz clic en **CHOOSE STORAGE** y selecciona la unidad eMMC conectada

- **Paso 12.** Finalmente, haz clic en **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

Por favor espera unos minutos hasta que el proceso de flasheo esté completo.

- **Paso 13.** Voltea el **interruptor de Modo de Arranque** de vuelta a la posición original y ensambla la carcasa del reTerminal

Ahora puedes saltar a **[aquí](#log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-ssh-over-wi-fi-ethernet)**

##### Para Linux

Usaremos Git para obtener el código fuente de **rpiboot**, así que asegúrate de que Git esté instalado

- **Paso 1.** Abre una ventana de **Terminal** y escribe lo siguiente para actualizar la **lista de paquetes**

```sh
sudo apt-get update
```

- **Paso 2.** Instala **Git** con el siguiente comando

```sh
sudo apt install git pkg-config make gcc libusb-1.0-0-dev
```

- **Paso 3.** Git podría producir un error si la fecha no está configurada correctamente. Escribe lo siguiente para corregir esto

```sh
sudo date MMDDhhmm
```

**NOTA:** Donde **MM** es el mes, **DD** es la fecha, y **hh** y **mm** son horas y minutos respectivamente.

- **Paso 4.** Clona el repositorio de la herramienta **usbboot**

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **Paso 5.** Construye e instala la herramienta usbboot

```sh
make
```

- **Paso 6.** Ejecuta la herramienta usbboot y esperará una conexión

```sh
sudo ./rpiboot
```

- **Paso 7.** Conecta reTerminal al PC mediante cable USB Type-C

- **Paso 8.** Descarga el software **Raspberry Pi Imager** visitando [este enlace](https://www.raspberrypi.org/software/)

- **Paso 9.** Abre el software Raspberry Pi Imager

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Paso 10.** Presiona **CTRL + SHIFT + X** en el teclado para abrir la ventana de **Advanced options**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

Aquí puedes **establecer un hostname, habilitar SSH, establecer una contraseña, configurar wifi, establecer configuraciones de idioma** y más

- **Paso 11.** Haz clic en **CHOOSE OS** y selecciona tu SO preferido

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTA:** Puedes seleccionar SO como **64-bit Ubuntu** navegando a **Other general purpose OS**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **Paso 12.** Haz clic en **CHOOSE STORAGE** y selecciona la unidad eMMC conectada

- **Paso 13.** Finalmente, haz clic en **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

Por favor espera unos minutos hasta que el proceso de grabación esté completo.

- **Paso 14.** Cambia el **Boot Mode switch** de vuelta a la posición original y ensambla la carcasa del reTerminal

### Iniciar sesión en Raspberry Pi OS/ Ubuntu OS u otro SO usando SSH por Wi-Fi/ Ethernet

Si quieres iniciar sesión en Raspberry Pi OS usando **SSH por Wi-Fi/ Ethernet**, puedes seguir los pasos a continuación. Primero configura Wi-Fi/Ethernet en el reTerminal y luego SSH usando Windows/Mac/Linux.

**Nota:** Si has configurado WiFi y habilitado SSH usando Raspberry Pi Imager, puedes omitir los pasos 1 - 4

- **Paso 1.** Si tienes una **conexión Wi-Fi**, haz clic en el **icono Wi-Fi** en la esquina superior derecha del escritorio de Raspberry Pi OS, selecciona tu red Wi-Fi e ingresa la contraseña usando el teclado virtual en pantalla

**Nota:** La ubicación de la configuración Wi-Fi puede ser diferente para otros SO

- **Paso 2.** Si no tienes una **conexión Wi-Fi**, puedes conectar un cable ethernet desde tu router al puerto ethernet del reTerminal

**Nota:** Asegúrate de que el reTerminal y tu computadora estén conectados a la misma red

- **Paso 3.** Toca el icono de Raspberry Pi en la esquina superior izquierda y navega a `Preferences > Raspberry Pi Configuration` y haz clic en la pestaña **Interfaces**

- **Paso 4.** Selecciona **Enable** que está junto a **SSH** y haz clic en **OK**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/ssh-select-2.jpg" alt="pir" width="1000" height="auto"/></p>

Ahora configuremos el software en la computadora. Por favor sigue según tu sistema operativo

##### Para Windows

- **Paso 1.** Abre **Command Prompt** y escribe lo siguiente

```sh
ssh pi@raspberrypi.local
```

- **Paso 2.** Escribe **yes** para la solicitud

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows-prompt.png" alt="pir" width="750" height="auto"/></p>

- **Paso 3.** Ingresa la contraseña como sigue

```sh
raspberry
```

- **Paso 4.** Si has iniciado sesión exitosamente en Raspberry Pi OS, verás la siguiente salida

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows.png" alt="pir" width="1000" height="auto"/></p>

##### Para Mac/Linux

- **Paso 1.** Abre **Terminal** en la computadora y escribe lo siguiente

```sh
ssh pi@raspberrypi.local
```

- **Paso 2.** Escribe **yes** para el siguiente mensaje

```sh
ECDSA key fingerprint is SHA256:XXXXXXX.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

- **Paso 3.** Cuando solicite la contraseña, escribe lo siguiente

```sh
raspberry
```

- **Paso 4.** Si has iniciado sesión exitosamente en Raspberry Pi OS, verás la siguiente salida

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi_Linux.png" alt="pir" width="900" height="auto"/></p>

### <span id="jump1">Instalar controladores de reTerminal después de grabar nuevo Raspberry Pi OS/ Ubuntu OS u otro SO</span>

reTerminal viene con los controladores necesarios preinstalados desde fábrica, por lo que no necesitas instalar controladores adicionales. Sin embargo, si grabas un nuevo SO por ti mismo, necesitas instalar los controladores necesarios por separado. El hardware que necesita controladores incluye la **pantalla LCD de 5 pulgadas, panel táctil, acelerómetro, sensor de luz, LEDs de usuario, botones de usuario, RTC, zumbador, coprocesador criptográfico**.

- **Paso 1.** Clona el siguiente repositorio

```sh
sudo apt install git -y
git clone --depth 1 https://github.com/Seeed-Studio/seeed-linux-dtoverlays
```

- **Paso 2.** Entra al repositorio

```sh
cd seeed-linux-dtoverlays
```

:::note
Para **SO de 32bit** necesitarás agregar el siguiente paso antes de ejecutar `sudo ./scripts/reTerminal.sh`. Después de completar la instalación, recuerda **reiniciar** reTerminal para que los cambios surtan efecto.
```
echo arm_64bit=0 | sudo tee -a /boot/config.txt
sudo reboot
```
:::

- **Paso 3.** Escribe lo siguiente para instalar los controladores

```sh
sudo ./scripts/reTerminal.sh
```

:::note

Escribe lo siguiente si no quieres actualizar el kernel al mismo tiempo:

```sh
sudo ./scripts/reTerminal.sh --keep-kernel
```
:::

Verás la siguiente salida si has instalado exitosamente los controladores

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/driver-success.png" alt="pir" width="1000" height="auto"/></p>


- **Paso 4.** Reinicia el reTerminal

```sh
sudo reboot
```

### Grabar Raspberry Pi OS con controladores de seeed a eMMC

- **Paso 1.** Como con los pasos normales de grabación de imagen, necesitas seleccionar primero el modelo del dispositivo:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/01.png" alt="pir" width="700" height="auto"/></p>

- **Paso 2.** Al elegir un sistema operativo, necesitas descargar el sistema que necesitas, descomprimirlo en la carpeta local, y luego seleccionarlo.

- **Descarga el Raspberry Pi OS visitando los enlaces a continuación**

| Versión                     | Descripción      | TAG                                                     |
| --------------------------- | ---------------- | ------------------------------------------------------------ |
| [2024-03-14-Raspbian-reTerminal-arm64](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2024-03-14-Raspbian-reTerminal/2024-03-14-Raspbian-reTerminal-arm64.zip)              | 64bit Debian12(bookworm) Linux versión 6.6.20 | más reciente |
| [2024-03-14-Raspbian-reTerminal-armhf](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2024-03-14-Raspbian-reTerminal/2024-03-14-Raspbian-reTerminal-armhf.zip) |  32bit Debian12(bookworm) Linux versión 6.6.20           | más reciente |
| [2022-07-21-Raspbian-reTerminal-arm64](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2022-07-21-Raspbian-reTerminal-arm64/64bit-20220721T012743Z-001.zip)               | 64bit Debian11(Bullseye) Linux versión 5.15.32-v7+  | lanzamiento |
| [2022-07-21-Raspbian-reTerminal-armhf](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2022-07-21-Raspbian-reTerminal-arm64/32bit-20220721T012743Z-001.zip)                    | 32bit Debian11(Bullseye) Linux versión 5.15.32-v7+  | lanzamiento |

<br />
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/02.png" alt="pir" width="700" height="auto"/></p>

Selecciona el SO que descargaste, debe terminar en **.img**.
<br />
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/03.png" alt="pir" width="700" height="auto"/></p>

:::caution

Si instalas la versión más reciente de bookworm de la imagen. No vayas a configurar haciendo clic en el botón de opción avanzada. No entres a esta interfaz para ninguna configuración inicial.
¡¡¡De lo contrario, pueden ocurrir situaciones inesperadas de error de controlador!!!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/notice.png" alt="pir" width="450" height="auto"/></p>

Si accidentalmente haces una configuración avanzada y obtienes un error de volteo de pantalla, necesitarás [reinstalar el controlador](#jump1) para solucionar el problema.

:::

- **Paso 3.** Para otras operaciones, consulta los [pasos anteriores](#jump2).
Después de que la imagen esté instalada, no necesitas instalar el controlador para usarla. (La imagen que proporcionamos incluye el archivo del controlador)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/04.png" alt="pir" width="700" height="auto"/></p>

### Guía de Desmontaje de reTerminal

Por favor revisa el video a continuación sobre cómo desmontar reTerminal:

<div class="video-container">
<iframe width="800" height="500" src="https://www.youtube.com/embed/hAfdb603emw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## FAQ

Para Preguntas Frecuentes, [haz clic aquí](https://wiki.seeedstudio.com/es/reTerminal-FAQ) para visitar las FAQ del wiki de uso de reTerminal

## Recursos

- **[PDF]** [Esquemáticos de reTerminal v1.6](https://files.seeedstudio.com/wiki/ReTerminal/reTerminal-v1.6_SCH.pdf)

- **[ZIP]** [Esquemáticos de reTerminal v1.6](https://files.seeedstudio.com/wiki/ReTerminal/reTerminal-v1.6_SCH.zip)

- **[PDF]** [Esquemáticos de reTerminal v1.3](https://files.seeedstudio.com/wiki/ReTerminal/reTerminal-v1.3_SCH.pdf)

- **[ZIP]** [Esquemáticos de reTerminal v1.3](https://files.seeedstudio.com/wiki/ReTerminal/reTerminal-v1.3_SCH.zip)

- **[STP]** [Modelo 3D de reTerminal](https://files.seeedstudio.com/wiki/ReTerminal/resources/reTerminal-3d-model.stp)

- **[PDF]** [Hoja de Datos del Raspberry Pi Compute Module 4](https://datasheets.raspberrypi.org/cm4/cm4-datasheet.pdf)

- **[Página Web]** [Documentación Oficial de Raspberry Pi](https://www.raspberrypi.org/documentation/)

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
