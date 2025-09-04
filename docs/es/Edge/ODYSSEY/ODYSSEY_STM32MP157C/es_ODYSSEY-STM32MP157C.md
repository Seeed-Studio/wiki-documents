---
description: ODYSSEY – STM32MP157C
title: ODYSSEY – STM32MP157C
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/ODYSSEY-STM32MP157C
last_update:
  date: 01/03/2023
  author: w0x7ce

---

# ODYSSEY – STM32MP157C

 ![](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/perspective-19.png)

El ODYSSEY – STM32MP157C es una computadora de placa única basada en STM32MP157C, un procesador de núcleo dual Arm-Cortex-A7 que opera a 650Mhz. El procesador también integra un coprocesador Arm Cortex-M4, lo que lo hace adecuado para tareas en tiempo real. El ODYSSEY – STM32MP157C está creado en forma de SoM (sistema en módulo) más una placa portadora. El SoM consta del MPU, PMIC, RAM y la placa portadora tiene el factor de forma de Raspberry Pi. La placa portadora incluye todos los periféricos necesarios incluyendo Ethernet Gigabit, WiFi/BLE, alimentación DC, hosts USB, USB-C, MIPI-DSI, DVP para cámara, audio, etc. Con esta placa, los clientes pueden evaluar rápidamente el SoM e implementar el SoM en su propia placa portadora de manera fácil y rápida.

[![Consigue uno ahora](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/ODYSSEY-STM32MP157C-p-4464.html)

## Características

- Procesador de núcleo dual Arm-Cortex-A7 con Cortex-M4 integrado
- SoM (sistema en módulo) incluye MPU, PMIC, RAM.
- Placa portadora compatible con 40 pines de Raspberry Pi.
- Tamaño compacto y potente
- hardware/SDK/API/BSP/OS de código abierto

## Especificaciones

|Elemento|Valores|
|----|------|
|Interfaz de periféricos| 2 x host USB<br />1 x interfaz Ethernet gigabit<br />1 x interfaz de audio de 3.5mm<br />1 x interfaz de pantalla MIPI DSI<br />1 x interfaz de cámara DVP<br />2 x Grove (GPIO &amp; I2C)<br />1 x interfaz de tarjeta SD (en la parte posterior de la placa)|
|WiFi/Bluetooth|WiFi 802.11 b/g/n 2.4GHz<br />Bluetooth 4.1|
|LED integrado|1 x LED de reinicio<br />3 x LED definidos por el usuario<br />1 x LED de alimentación|
|Alimentación|1 x interfaz DC (se recomienda entrada de alimentación de 12V/2A)<br />1 x USB Tipo - C|
|Botón|1 x botón de reinicio<br />1 x botón de usuario<br />1 x tecla de código de marcación|
|dimensión|56mm x 85mm|
|Temperatura de funcionamiento | 0 ~ 75 ℃ |

## Aplicación

- Industrial (gateways CAN-Ethernet, etc.)
- Electrodomésticos (refrigeradores, microondas, etc.)
- Médico (registradores de datos, etc.)
- Wearables de alta gama (dispositivos VR, etc.)
- Dispositivos de Hogar Inteligente

## Descripción General del Hardware

<iframe src="https://3dwarehouse.sketchup.com/embed/6eecf961-5dd1-4baf-94e4-72f130c5542d" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} width={580} height={326} allowFullScreen />

ODYSSEY – STM32MP157C consta de dos partes: Placa portadora y Seeed SoM - STM32MP157C.

Los detalles del hardware de la placa portadora son los siguientes:

 ![](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/front.png)

 ![](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/back.png)

- **1.Placa portadora:** Área de instalación del Seeed SoM-STM32MP157C, si el usuario desea remover la placa principal, incline lentamente la placa principal hacia arriba y luego remuévala, nunca la remueva con las manos.

- **2.Puerto de Entrada de Alimentación DC:** 12V~24V/2A (se recomienda entrada de alimentación de 12V/2A)(barril de 5.5x2.1mm centro-positivo).

- **3.Interfaz ETH:** La interfaz de cable de red puede conectarse a una red de nivel gigabit.

- **4.USB Host:** Dos puertos USB Host.

- **5.USB Device:** USB 2.0 Tipo C. Si el Tipo C se usa como entrada de alimentación de la placa, se debe usar un adaptador de alimentación de 5V/3A.

- **6.Interfaz Grove Digital:** Conecte la interfaz Grove al pin digital.

- **7.Interfaz Grove IIC:** Conecte la interfaz Grove al pin IIC.

- **8.Estándar Americano 3.5mm:** Interfaz de audio.

- **9.Interfaz MIPI DSI:** Conecte a una pantalla con interfaz MIPI DSI(FPC 20Pin 1.0mm).

- **10.Interfaz GPIO de 40 PINES:** Compatible con el 40-PIN de Raspberry Pi.

- **11.AP6236:** Chip de control 2.4G WiFi & BT 4.2.

- **12.Interruptor Deslizante:** Se puede usar para seleccionar tarjeta SD o eMMC para iniciar.

- **13.UART de Depuración:** El puerto serie de depuración predeterminado del sistema puede ingresar a este puerto serie para acceder al sistema, hablaremos más sobre cómo hacer eso más adelante.

- **14.JST 1.0mm:** Interfaz de batería 3VRTC.

- **15.Tecla RST:** Tecla de reinicio del sistema.

- **16.Botón PWR:** Presión larga de aproximadamente 8S para apagar, presión corta para arrancar.

- **17.Botón de Usuario:** Botones programables por el usuario.

- **18.LED PWR:** LED de alimentación de la placa de desarrollo.

- **19.LED de Usuario:** LED programable por el usuario.

- **20.ACA-5036-A2-CC-S:** Antena cerámica 2.4G integrada.

- **21.IPEX 1ra generación:** Conector de antena externa 2.4G externa(Al usar una antena externa, necesita remover R49, R51 soldadura de 0Ω)

- **22. Ranura para tarjeta SD:** Es el área donde se inserta una tarjeta micro-sd con el sistema.

- **23.Interfaz de cámara DVP:** Conecte a cámara con interfaz DVP (FPC 20Pin 1.0mm).

- **24.KSZ9031:** Tarjeta de red de controlador de cable de red 1000M.

- **25.STMPS2252MTR:** Chip de interruptor de alimentación.

- **26.MP9943:** Chip de alimentación Buck DCDC.

- **27.WM8960:** Chip codec de audio.

- **28.MP2161:** Chip de alimentación Buck DCDC.

### Función de Pines

![](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/GPIO.png)

El conector de 40 pines de ODYSSEY - STM32MP157C es totalmente compatible con el 40PIN de Raspberry Pi, incluyendo pines GPIO, IIC, UART, SPI, IIS y PWM.

## Introducción al Software

### Trabajo Preparatorio

**Materiales Requeridos**

- ODYSSEY – STM32MP157C
- Red Wi-Fi
- Tarjeta SD de 4GB (o más memoria) y lector de tarjetas SD
- PC o Mac
- [Adaptador USB a Uart](https://www.seeedstudio.com/USB-To-Uart-5V%26amp%3B3V3-p-1832.html) (opcional)
- Adaptador de interfaz DC de 12V/2A para suministro de energía (opcional)
- Un cable USB tipo-c

<div className="admonition warning">
  <p className="admonition-title">Precaución</p>
  Por favor conecte el cable USB suavemente, de lo contrario puede dañar la interfaz. Por favor use el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no está seguro sobre el cable que tiene, puede hacer clic <a href="https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html"><b>aquí</b></a> para comprar
</div>

**Instalación de Imagen**

Como Raspberry Pi, necesita instalar la imagen de ODYSSEY – STM32MP157C desde su tarjeta SD para ponerla en funcionamiento. Ofrecemos dos formas de iniciar ODYSSEY – STM32MP157C. Puede arrancar desde una tarjeta SD o desde eMMC.

**A. Arrancar desde tarjeta SD**

- **Paso 1.** Seleccione el [firmware](https://files.seeedstudio.com/linux/ODYSSEY%E2%80%93STM32MP157C/stm32mp1-debian-buster-console-armhf-latest-2gb.img.xz) que desea descargar:

- **Paso 2.** Conecte una tarjeta SD a una PC o MAC con un lector de tarjetas SD, se requiere una tarjeta SD con más de 4G de memoria.

- **Paso 3.** <font face>Haga clic aquí para descargar <a href="https://etcher.io/">Etcher</a>, luego use Etcher para escribir el archivo ```*.img.xz``` directamente a la tarjeta SD. O extraiga el archivo ```*.img.xz``` en un archivo ```*.img```, y luego grábelo en una tarjeta SD usando otra herramienta de escritura de imagen. <br /><br />Haga clic en el ícono más para agregar el archivo de imagen recién descargado y el software seleccionará automáticamente la tarjeta SD que insertó. Luego haga clic en Flash! para escribir. Toma aproximadamente 10 minutos terminar.</font>

![](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/stm32_flash_sd.png)

- **Paso 4.** Después de escribir la imagen en la tarjeta SD, inserte la tarjeta SD en ODYSSEY – STM32MP157C. Use el puerto USB tipo-c para alimentar la placa portadora. No saque la tarjeta SD durante la escritura. ODYSSEY – STM32MP157C arrancará desde la tarjeta SD, puede ver los LED PWR y USER encendiéndose en el SOM. Ahora, vaya a la siguiente sección: la consola serie.

<div class="admonition note" >
<p class="admonition-title">Nota</p>
significa que el arranque falló si el LED USER no parpadea. Por favor verifique si el interruptor de arranque está en SD_CARD.
</div>

- **Paso 5.** Después de escribir la imagen en la tarjeta SD, inserte la tarjeta SD en ODYSSEY – STM32MP157C. Use el puerto USB tipo-c para alimentar la placa portadora. No saque la tarjeta SD durante la escritura. ODYSSEY – STM32MP157C arrancará desde la tarjeta SD, puede ver los LED PWR y USER encendiéndose en el SOM. Ahora, vaya a la siguiente sección: la consola serie.

**B. Arrancar desde eMMC**

<div class="admonition note" >
<p class="admonition-title">Nota</p>
Si desea arrancar desde eMMC, debe acceder primero a la siguiente sección: la consola serie.
</div>

- **Paso 1.** el proceso es el mismo que **A. Arrancar desde tarjeta SD** si inicia por primera vez el ODYSSEY – STM32MP157C.

- **Paso 2.** Edita /boot/uEnv.txt para iniciar el arranque eMMC y luego reinicia.

```bash
sudo sh -c "echo cmdline=init=/opt/scripts/tools/eMMC/init-eMMC-flasher-v3-stm32mp1.sh >> /boot/uEnv.txt"
sudo reboot
```

- **Paso 3.** Espera a que el LED USER se encienda de forma continua. Esto indica que el arranque eMMC fue exitoso si el LED USER se enciende de forma continua.

- **Paso 4.** Apaga y desconecta la tarjeta SD.

- **Paso 5.** Configura el interruptor deslizante en EMMC y reinicia.

**Consola Serial**

Ahora que tu ODYSSEY – STM32MP157C está funcionando, es posible que quieras acceder a tu sistema Linux a través de la consola, luego configurar la Red, y así sucesivamente. Se proporciona un método de acceso por puerto serial para el acceso a Linux:

- Puerto UART - Usado para depurar problemas de bajo nivel.(recomendado)

**Conectar vía puerto UART**

En esta sección, te guiaremos a través del uso del adaptador USB a TTL, que se conecta al puerto Uart del ODYSSEY – STM32MP157C (ubicado en la parte superior derecha del ODYSSEY – STM32MP157C), para establecer una conexión entre tu computadora y ODYSSEY -STM32MP157C.

![](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/uart_connection.png)

- **Paso 1.** Conecta el puerto Uart a PC/Mac usando el Adaptador USB a TTL. Si no tienes un Adaptador USB a TTL, haz clic [AQUÍ](https://www.seeedstudio.com/catalogsearch/result/?q=UART) para comprar.（RX->TX,TX->RX）

- **Paso 2.** Usando las siguientes herramientas de depuración serial, la velocidad de baudios es 115200:
  - Windows : Usa [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html), selecciona el protocolo ```Serial```, completa el puerto COM correspondiente al ODYSSEY -STM32MP157C, velocidad de baudios ```115200```, 8 bits, sin bits de paridad, 1 bit de parada, sin control de flujo.
  - Linux : Dependiendo del Adaptador USB a TTL, debería ser ```screen /dev/ttyACM0(,1, y así sucesivamente) 115200``` o ```screen /dev/ttyUSB0(,1, y así sucesivamente) 115200```.
  - Mac : Dependiendo del Adaptador USB a TTL, debería ser ```screen /dev/cu.usbserial1412(,1422, y así sucesivamente) 115200``` o ```screen /dev/cu.usbmodem1412(,1422, y así sucesivamente) 115200```.

- **Paso 3.** El nombre de usuario predeterminado es ```debian```, la contraseña es ```temppwd```

- **Paso 4.** Si no tienes un Adaptador USB a TTL, también puedes usar Arduino. Si usas Arduino, conecta un extremo del jumper al pin RESET del Arduino y el otro extremo al pin GND del Arduino. Esto omitirá el MCU ATMEGA de tu Arduino y convertirá tu Arduino en un adaptador USB a TTL. Por favor consulta [AQUÍ](https://www.youtube.com/watch?v=qqSLwK1DP8Q) el tutorial en video. Ahora conecta el pin GND del Arduino al pin GND del puerto Uart del ODYSSEY -STM32MP157C. Conecta los pines Rx del Arduino a los pines Rx del puerto Uart del ODYSSEY -STM32MP157C. Conecta el pin Tx del Arduino al pin Tx del puerto Uart del ODYSSEY -STM32MP157C. Finalmente, conecta el Arduino a la PC/Mac a través del cable USB del Arduino. Ahora verifica si tu PC/Mac ha encontrado tu Arduino escribiendo el siguiente comando:

```
ls /dev/cu.usb* (Mac)
ls /dev/ttyACM* (Linux)
```

Deberías recibir comentarios como este:

```
/dev/cu.usbmodem14XX where XX will vary depending on which USB port you used (on Mac)
/dev/ttyACMX where X will vary depending on which USB port you used  (on Linux)
```

Ahora sigue los pasos anteriores para conectarte a ODYSSEY – STM32MP157C a través de una conexión serie. Esto es usualmente lo que necesitamos hacer cuando arrancamos por primera vez, ya que luego configurarás ODYSSEY – STM32MP157C para la conexión Wi-Fi y después la conexión SSH.

**Configuración de Red**

**A. Conexión Ethernet**

Puedes conectarte a la red usando un cable Ethernet. Solo conecta el cable Ethernet a Internet.
Ahora, ve a la siguiente sección: la instalación de herramientas básicas.

**B. Configuración Wi-Fi**

<div className="admonition note">
  <p className="admonition-title">Nota</p>
  Si quieres usar Wi-Fi, tienes que acceder primero a la siguiente sección: instalación de herramientas básicas.
</div>

- **Paso 1.** Verifica la versión del kernel de Linux en el entorno actual e instala el archivo de cabecera de la versión del kernel.

```bash
sudo apt install linux-headers-$(uname -r) -y
```

- **Paso 2.** Crear e instalar el controlador de stm32p1 desde `seeed-linux-dtverlays` en GitHub.

```bash
git clone https://github.com/Seeed-Studio/seeed-linux-dtverlays
cd seeed-linux-dtverlays
make all_stm32mp1 CUSTOM_MOD_FILTER_OUT="jtsn-wm8960" && sudo make install_stm32mp1 CUSTOM_MOD_FILTER_OUT="jtsn-wm8960"
```

- **Paso 3.** añadir el paquete dtbo en `/boot/uEnv.txt` para que se haga efectivo después del reinicio.

```bash
sudo sh -c "echo uboot_overlay_addr0=/lib/firmware/stm32mp1-seeed-ap6236.dtbo >> /boot/uEnv.txt"
sudo reboot
```

- **Paso 4.** Conectar el wifi

Configure la red del ODYSSEY – STM32MP157C a través de la herramienta de gestión de red `connmanctl`, que ha sido instalada en la imagen del ODYSSEY -STM32MP157C. Siga estas instrucciones para completar fácilmente la configuración.

```
robot@ev3dev:~$ sudo connmanctl
Error getting VPN connections: The name net.connman.vpn was not provided by any
connmanctl> enable wifi
Enabled wifi
connmanctl> scan wifi
Scan completed for wifi
connmanctl> services
*AO Wired                ethernet_b827ebbde13c_cable
                         wifi_e8de27077de3_hidden_managed_none
    AH04044914           wifi_e8de27077de3_41483034303434393134_managed_psk
    Frissie              wifi_e8de27077de3_46726973736965_managed_psk
    ruijgt gast          wifi_e8de27077de3_7275696a67742067617374_managed_psk
    schuur               wifi_e8de27077de3_736368757572_managed_psk
connmanctl> agent on
Agent registered
connmanctl> connect wifi_e8de27077de3_41      # You can use the TAB key at this point to autocomplete the name
connmanctl> connect wifi_e8de27077de3_41483034303434393134_managed_psk
Agent RequestInput wifi_e8de27077de3_41483034303434393134_managed_psk
  Passphrase = [ Type=psk, Requirement=mandatory ]
Passphrase? *************
Connected wifi_e8de27077de3_41483034303434393134_managed_psk
connmanctl> quit
```

Ahora usa el siguiente comando para encontrar la dirección IP de ODYSSEY – STM32MP157C.

```
ifconfig
```

**Instalación de herramientas básicas**

***1.SSH***

SSH, abreviatura de Secure Shell, está formulado por el Network Working Group de IETF. SSH es un protocolo de seguridad basado en la capa de aplicación. SSH es un protocolo más confiable que proporciona seguridad para sesiones de inicio de sesión remoto y otros servicios de red. No hay protocolo SSH en la imagen proporcionada por nosotros, por lo que necesitamos configurarlo a través del puerto serie, para así realizar la comunicación entre el dispositivo y la computadora a través del protocolo SSH. Ingrese el siguiente comando para instalar el servicio SSH en ODYSSEY -STM32MP157C.

```bash
sudo apt install ssh -y
```

A continuación, usaremos SSH para acceder a ODYSSEY – STM32MP157C. Los usuarios de Windows pueden usar clientes SSH de terceros. Para usuarios de Linux/Mac, el cliente SSH está integrado.

- Usuarios de Windows : Usa PUTTY, selecciona el protocolo SSH, completa la dirección IP correcta y haz clic en abrir. El nombre de usuario es debian y la contraseña es temppwd.

- Usuarios de Linux/Mac :

```
ssh debian@IP
// password: temppwd
```

<div class="admonition note" >
<p class="admonition-title">Nota</p>
Si la experiencia de rendimiento se degrada mientras usas SSH, por favor cambia a una red WiFi más accesible.
</div>

***2.GIT***

Git es un sistema de control de versiones distribuido gratuito y de código abierto diseñado para manejar todo, desde proyectos pequeños hasta muy grandes, con velocidad y eficiencia.

```bash
sudo apt install git -y
```

***3.MAKE***

```bash
sudo apt install make device-tree-compiler gcc -y
```

***4.WGET***

```bash
sudo apt install wget -y
```

**Configuración de Bluetooth**

- **Paso 1.** Verificar la versión del kernel de Linux en el entorno actual e instalar el archivo de cabecera de la versión del kernel.

```bash
sudo apt install linux-headers-$(uname -r) -y
```

- **Paso 2.** Crear e instalar el controlador de stm32p1 desde `seeed-linux-dtverlays` en GitHub.

```bash
git clone https://github.com/Seeed-Studio/seeed-linux-dtverlays
cd seeed-linux-dtverlays
make all_stm32mp1 CUSTOM_MOD_FILTER_OUT="jtsn-wm8960" && sudo make install_stm32mp1 CUSTOM_MOD_FILTER_OUT="jtsn-wm8960"
```

- **Paso 3.** añadir el paquete dtbo en `/boot/uEnv.txt` para que se haga efectivo después del reinicio.

```bash
sudo sh -c "echo uboot_overlay_addr0=/lib/firmware/stm32mp1-seeed-ap6236.dtbo >> /boot/uEnv.txt"
sudo reboot
```

**Activar el bluetooth**

Luego activa el bluetooth con el comando:

```
sudo apt -y install bluetooth bluez bluez-tools rfkill
systemctl is-enabled bluetooth.service
```

**Conectar el bluetooth**

- **Paso 1.** Escanear el bluetooth usando bluetoothctl

bluetoothctl es una herramienta que controla el Bluetooth para conectar con otros dispositivos Bluetooth.

```
debian@npi:~$ bluetoothctl
[NEW] Controller 43:43:A0:12:1F:AC ReSpeaker-1FAC [default]
Agent registered
[bluetooth]# scan on
Discovery started
[CHG] Controller 43:43:A0:12:1F:AC Discovering: yes
[NEW] Device C8:69:CD:BB:9B:B3 C8-69-CD-BB-9B-B3
[NEW] Device E1:D9:68:0E:51:C0 MTKBTDEVICE
[NEW] Device 62:15:9C:3F:40:AA 62-15-9C-3F-40-AA
[NEW] Device 56:AF:DE:C0:34:25 56-AF-DE-C0-34-25
[NEW] Device B8:86:87:99:FB:10 SOLARRAIN
[CHG] Device B8:86:87:99:FB:10 Trusted: yes
[NEW] Device 04:5D:4B:81:35:84 MDR-1000X
[CHG] Device 04:5D:4B:81:35:84 Trusted: yes
[CHG] Device 4C:04:59:38:D3:25 ManufacturerData Key: 0x004c
[CHG] Device 4C:04:59:38:D3:25 ManufacturerData Value:
  10 05 0b 10 99 18 0a                             .......
[bluetooth]# scan off
[CHG] Device 04:5D:4B:81:35:84 RSSI is nil
[CHG] Device B8:86:87:99:FB:10 TxPower is nil
[CHG] Device B8:86:87:99:FB:10 RSSI is nil
[CHG] Device 4C:04:59:38:D3:25 RSSI is nil
[CHG] Device 58:44:98:93:35:24 RSSI is nil
Discovery stopped
[bluetooth]#

```

- **Paso 2.** Ahora usa el comando `pair + ID del dispositivo` para emparejar el dispositivo bluetooth con el ODYSSEY – STM32MP157C.

- **Paso 3.** Cuando veas el mensaje `Pairing successful`, toca `connect + ID del dispositivo`.

```
[bluetooth]# pair 04:5D:4B:81:35:84
Attempting to pair with 04:5D:4B:81:35:84
[CHG] Device 04:5D:4B:81:35:84 Connected: yes
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 00001108-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 0000110b-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 0000110c-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 0000110e-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 0000111e-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 ServicesResolved: yes
[CHG] Device 04:5D:4B:81:35:84 Paired: yes
Pairing successful
[CHG] Controller 43:43:A0:12:1F:AC Discoverable: no
[CHG] Device 04:5D:4B:81:35:84 ServicesResolved: no
[CHG] Device 04:5D:4B:81:35:84 Connected: no
[CHG] Controller 43:43:A0:12:1F:AC Discoverable: yes
[bluetooth]# connect 04:5D:4B:81:35:84
Attempting to connect to 04:5D:4B:81:35:84
[CHG] Device 04:5D:4B:81:35:84 Connected: yes
Connection successful
[CHG] Device 04:5D:4B:81:35:84 ServicesResolved: yes
[CHG] Controller 43:43:A0:12:1F:AC Discoverable: no
[MDR-1000X]#
```

Si aparece `Connection successful`, ¡configuración exitosa!

## Comunicación CANBUS

El siguiente es el proceso de comunicación CANBUS usando [2 Channel CAN BUS FD Shield for Raspberry Pi](https://www.seeedstudio.com/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi-p-4072.html) basado en ODYSSEY -- STM32MP157C, primero usa [Seeeduino V4.2](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html) para recopilar la temperatura y humedad del ambiente, y luego a través del Seeeduino V4.2 [CAN - BUS shields V2](https://www.seeedstudio.com/CAN-BUS-Shield-V2.html) arriba y el ODYSSEY – STM32MP157C Channel 2 CAN BUS FD shields arriba para comunicación Raspberry Pi.

### Trabajo de Preparación

**Materiales Requeridos**

- ODYSSEY - STM32MP157C
- Red Wi-Fi
- Tarjeta SD de 4GB (o más de 4GB) y lector de tarjeta SD
- PC o Mac
- [USB To Uart Adapter](https://www.seeedstudio.com/USB-To-Uart-5V%26amp%3B3V3-p-1832.html)(opcional)
- Adaptador de interfaz DC 12V/2A para suministro de energía (opcional)
- Un cable USB tipo-c
- Dos líneas dupont doble-macho
- [CAN-BUS Shield V2](https://www.seeedstudio.com/CAN-BUS-Shield-V2.html)
- [Seeeduino V4.2](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html)
- [2 Channel CAN BUS FD Shield for Raspberry Pi](https://www.seeedstudio.com/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi-p-4072.html)
- [Grove - Light Sensor v1.2](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2.html)
- [Grove - I2C High Accuracy Temp&Humi Sensor (SHT35)](https://www.seeedstudio.com/catalogsearch/result/?q=sht35)

**Conexión de Hardware**

- **Paso 1.** Según la [guía de instalación](https://wiki.seeedstudio.com/es/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/#mounting-guide) inserta 2 Channel CAN BUS FD Shield for Raspberry Pi en ODYSSEY - STM32MP157C.
- **Paso 2.** Inserta CAN BUS Shield V2 en Seeeduino V4.2.
- **Paso 3.** Conecta Channel CAN BUS FD Shield for Raspberry Pi a can-bus Shield V2 usando cable puente.

|2 Channel CAN BUS FD Shield for Raspberry Pi|CAN-BUS Shield V2|
|:----:|:------:|
|CAN_0_L|CANL|
|CAN_0_H|CANH|

- **Paso 4.** Alimentar ODYSSEY STM32MP157C y Seeeduino V4.2

**Instalación de dependencias**

- **Paso 1.** Instalar el entorno para `python`.

```bsah
sudo apt update
sudo apt install python3 python3-distutils python3-pyqt5  python3-pip python3-numpy -y
sudo pip3 install python-can pyqtgraph
```

- **Paso 2.** Instalar `git`.

```bsah
sudo apt install git -y
```

- **Paso 3.** Instala el entorno relacionado con `make`.

```bsah
sudo apt install make device-tree-compiler gcc -y
```

### instalación de software

**Instalar controladores de CAN-HAT y LCD**

- **Paso 1.** Verificar la versión del kernel de Linux en el entorno actual e instalar el archivo de cabecera de la versión del kernel.

```bash
sudo apt install linux-headers-$(uname -r) -y
```

- **Paso 2.** Crear e instalar el controlador de stm32p1 desde `seeed-linux-dtverlays` en GitHub.

```bash
git clone https://github.com/Seeed-Studio/seeed-linux-dtverlays
cd seeed-linux-dtverlays
make all_stm32mp1 CUSTOM_MOD_FILTER_OUT="jtsn-wm8960" && sudo make install_stm32mp1 CUSTOM_MOD_FILTER_OUT="jtsn-wm8960"
```

- **Paso 3.** añadir el paquete dtbo en `/boot/uEnv.txt` para que se haga efectivo después del reinicio.

```bash
sudo sh -c "echo uboot_overlay_addr7=/lib/firmware/stm32mp1-seeed-lcd-01.dtbo >> /boot/uEnv.txt"
sudo sh -c "echo uboot_overlay_addr8=/lib/firmware/stm32mp1-MCP2517FD-can0.dtbo >> /boot/uEnv.txt"
sudo reboot
```

- **Paso 4.** Verifica si el controlador se instaló correctamente usando `dmesg`, verás la siguiente información si fue exitoso.

```bash
debian@npi:~$ sudo insmod /lib/modules/$(uname -r)/extra/seeed/mcp25xxfd-can.ko
debian@npi:~$ dmesg | grep spi
[    1.057609] spi_stm32 44009000.spi: driver initialized
[    9.852726] mcp25xxfd spi0.0: Linked as a consumer to regulator.6
[    9.966510] mcp25xxfd spi0.0: MCP2517 successfully initialized.

debian@npi:~$ ifconfig -a
can0: flags=128<NOARP>  mtu 16
        unspec 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00  txqueuelen 10  (UNSPEC)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

**Configurar CAN-HAT y LCD**

- **Paso 1.** Configurar `can-bus`

```bash
sudo ip link set can0 up type can bitrate 500000 dbitrate 8000000 restart-ms 1000 berr-reporting on fd on
sudo ifconfig can0 txqueuelen 65536

debian@npi:~$ ip -details link show can0
3: can0: <NOARP,UP,LOWER_UP,ECHO> mtu 16 qdisc pfifo_fast state UNKNOWN mode DEFAULT group default qlen 10
    link/can  promiscuity 0 minmtu 0 maxmtu 0
    can state ERROR-ACTIVE (berr-counter tx 0 rx 0) restart-ms 0
          bitrate 500000 sample-point 0.875
          tq 25 prop-seg 34 phase-seg1 35 phase-seg2 10 sjw 1
          mcp25xxfd: tseg1 2..256 tseg2 1..128 sjw 1..128 brp 1..256 brp-inc 1
          mcp25xxfd: dtseg1 1..32 dtseg2 1..16 dsjw 1..16 dbrp 1..256 dbrp-inc 1
          clock 40000000numtxqueues 1 numrxqueues 1 gso_max_size 65536 /gso_max_segs 65535
```

- **Paso 2.** Configurar el entorno `lcd`

```bash
export QT_QPA_PLATFORM=linuxfb:fb=/dev/fb0
```

### Ejecutar la Demostración

Ejecuta el siguiente código en 'ODYSSEY - STM32MP157C'

```bash
cd ~
git clone https://github.com/SeeedDocument/ODYSSEY-STM32MP157C.git
cd ~/ODYSSEY-STM32MP157C/examples
python3 QtViewerForStm32p1.py
```

Ejecuta [CanBus_SendForArduino.ino](https://files.seeedstudio.com/wiki/Seeed-NPi-STM32MP157C/examples/CanBus_SendForArduino.ino) en `Seeeduino V4.2`.

![](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/can_bus_demo.png)

## Jugar con GPIO

Esta parte introducirá cómo usar **grove.py** para controlar GPIO y el Socket Grove en ODYSSEY STM32MP157C. Existen dos formas de conectar con el Socket Grove en esta placa. Por un lado está usando la Interfaz Grove Digital y la Interfaz Grove IIC, por el otro está usando los 40 pines de ODYSSEY - STM32MP157C. La descripción de las definiciones de PIN para los 40 pines de ODYSSEY - STM32MP157C por favor consulta [Función de Pin](#Pin Function). Es conveniente para ti usar estos 40 pines de ODYSSEY - STM32MP157C. Así que, vamos.

### Configurar al modo gpio

- **Paso 1.** Verifica la versión del kernel de Linux en el entorno actual e instala el archivo de cabecera de la versión del kernel.

```bash
sudo apt install linux-headers-$(uname -r) -y
```

- **Paso 2.** Crear e instalar el controlador de stm32p1 desde `seeed-linux-dtverlays` en GitHub.

```bash
git clone https://github.com/Seeed-Studio/seeed-linux-dtverlays
cd seeed-linux-dtverlays
make all_stm32mp1 CUSTOM_MOD_FILTER_OUT="jtsn-wm8960" && sudo make install_stm32mp1 CUSTOM_MOD_FILTER_OUT="jtsn-wm8960"
```

- **Paso 3.** añadir el paquete dtbo en `/boot/uEnv.txt` para que se haga efectivo después del reinicio.

```bash
sudo sh -c "echo uboot_overlay_addr1=/lib/firmware/stm32mp1-seeed-spi5.dtbo >> /boot/uEnv.txt"
sudo sh -c "echo uboot_overlay_addr2=/lib/firmware/stm32mp1-seeed-usart2.dtbo >> /boot/uEnv.txt"
sudo sh -c "echo uboot_overlay_addr3=/lib/firmware/stm32mp1-seeed-i2c4.dtbo >> /boot/uEnv.txt"
sudo reboot
```

- **Paso 4.** Instala el entorno para `python3`.

```bsah
sudo apt install python3 python3-pip -y
```

### Salida digital en Basehat usando Grove.py

#### Hardware

- **Paso 1**. Elementos utilizados en este proyecto:

| ODYSSEY – STM32MP157C |  Grove - Buzzer | Grove Base Hat para Raspberry Pi |
|--------------|-------------|----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/perspective-19-210X157.png)|![enter image description here](https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Buzzer.png)|![image](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/thumbnail.jpg)|
|[Consigue UNO Ahora](https://www.seeedstudio.com/ODYSSEY-STM32MP157C-p-4464.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Buzzer.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|

- **Paso 2**. Conecta el Grove Base Hat al ODYSSEY - STM32MP157C.

- **Paso 3**. Conecta el Grove Buzzer al puerto D5 del Base Hat.

- **Paso 4**. Conecta el ODYSSEY - STM32MP157C a la PC a través del cable USB.

#### Software

- **Paso 1**. Instala el Grove.py

```bash
sudo pip3 install Seeed-grove.py
```

- **Paso 2**. Descarga el archivo fuente clonando la biblioteca grove.py.

```bash
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **Paso 3**. Ejecuta el siguiente comando para ejecutar el código.

```bash
cd grove.py/grove
sudo python3 grove_gpio.py 5
```

<div class="admonition note" >
<p class="admonition-title">Nota</p>
escucharemos sonido del zumbador si todo ha funcionado bien.
</div>

### Entrada Digital en Basehat usando Grove.py

#### Hardware

- **Paso 1**. Elementos utilizados en este proyecto:

| ODYSSEY – STM32MP157C |  Grove - Button | Grove Base Hat for Raspberry Pi |
|--------------|-------------|----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/perspective-19-210X157.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Button/img/button_s.jpg)|![image](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/thumbnail.jpg)|
|[Obtener UNO Ahora](https://www.seeedstudio.com/ODYSSEY-STM32MP157C-p-4464.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Button-P.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|

- **Paso 2**. Conecta el Grove Base Hat al ODYSSEY - STM32MP157C.

- **Paso 3**. Conecta el Grove Button al puerto D5 del Base Hat.

- **Paso 4**. Conecta el ODYSSEY - STM32MP157C a la PC a través del cable USB.

#### Software

- **Paso 1**. Instala el Grove.py

```bash
sudo pip3 install Seeed-grove.py
```

- **Paso 2**. Descarga el archivo fuente clonando la biblioteca grove.py.

```bash
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **Paso 3**. Ejecuta el siguiente comando para ejecutar el código.

```bash
cd grove.py/grove
sudo python3 grove_button.py 5
```

<div class="admonition note" >
<p class="admonition-title">Nota</p>
veremos alguna información en la terminal si se ha presionado el botón.
</div>

### ADC en Basehat usando Grove.py

#### Hardware

- **Paso 1**. Elementos utilizados en este proyecto:

| ODYSSEY – STM32MP157C |  Grove - Sensor de Temperatura | Grove Base Hat para RasPi |
|--------------|-------------|----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/perspective-19-210X157.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Grove_Temperature_Sensor_View_little.jpg)|![image](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/thumbnail.jpg)|
|[Consigue UNO Ahora](https://www.seeedstudio.com/ODYSSEY-STM32MP157C-p-4464.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|

- **Paso 2**. Conecta el Grove Base Hat al ODYSSEY - STM32MP157C.

- **Paso 3**. Conecta el sensor de temperatura al puerto A0 del Base Hat.

- **Paso 4**. Conecta el ODYSSEY - STM32MP157C a la PC a través del cable USB.

#### Software

- **Paso 1**. Instala el Grove.py

```bash
sudo pip3 install Seeed-grove.py
```

- **Paso 2**. Descarga el archivo fuente clonando la biblioteca grove.py.

```bash
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **Paso 3**. Ejecuta el siguiente comando para ejecutar el código.

```bash
cd grove.py/grove
sudo python3 grove_temperature_sensor.py 0
```

<div class="admonition note" >
<p class="admonition-title">Nota</p>
veremos los datos de temperatura en el terminal si todo ha ido bien.
</div>

### UART en Basehat usando Grove.py

#### Hardware

- **Paso 1**. Elementos utilizados en este proyecto:

| ODYSSEY – STM32MP157C | Grove Base Hat para RasPi |
|--------------|----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/perspective-19-210X157.png)|![image](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|
|[Consigue UNO Ahora](https://www.seeedstudio.com/ODYSSEY-STM32MP157C-p-4464.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|

- **Paso 2**. Conecta el Grove Base Hat al ODYSSEY - STM32MP157C.

- **Paso 3**. Conecta RX a TX en el Basehat usando un puente

- **Paso 4**. Conecta el ODYSSEY - STM32MP157C a la PC a través del cable USB.

#### Software

- **Paso 1**. Instala el Grove.py

```bash
sudo pip3 install Seeed-grove.py
```

- **Paso 2**. Descarga el archivo fuente clonando la biblioteca grove.py.

```bash
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **Paso 3**. Ejecuta el siguiente comando para ejecutar el código.

```bash
cd grove.py/grove
python uart.py
```

si conectamos el TX al RX obtendremos `hello seeder` en el terminal. y la ubicación del TX y RX podemos verla en [Función de Pines](https://wiki.seeedstudio.com/es/ODYSSEY-STM32MP157C/#pin-function).

### I2S en ODYSSEY-STM32MP157C

En esta sección, explicaremos el principio de control de la programación I2S de Linux. Ahora usaremos I2S y ReSpeaker 2-Mics Pi HAT para mostrarte cómo usarlo.

#### Hardware

- **Paso 1**. Elementos utilizados en este proyecto:

| ODYSSEY – STM32MP157C | ReSpeaker 2-Mics Pi HAT |
|--------------|----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/perspective-19-210X157.png)|![image](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/res-thumbnail.png)|
|[Consigue UNO Ahora](https://www.seeedstudio.com/ODYSSEY-STM32MP157C-p-4464.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT.html)|

- **Paso 2.** Según la [guía de instalación de hardware](https://wiki.seeedstudio.com/es/ReSpeaker_2_Mics_Pi_HAT/#getting-started) inserta ReSpeaker 2-Mics Pi HAT en ODYSSEY – STM32MP157C.

#### Software

- **Paso 1.** Instala alsa-utils usando `apt`

```bash
sudo apt install alsa-utils -y
```

- **Paso 2.** Ve a la ubicación del archivo dtbs y descarga el archivo dtb stm32mp1.

```sh
debian@npi:~$ cd /boot/dtbs/4.19.9-stm32-r1/
debian@npi:/boot/dtbs/4.19.9-stm32-r1$ sudo wget https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/res/stm32mp1-seeed-npi-full-rpi-exp.dtb
```

**Nota:** También puedes descargar el archivo `.dtb` de stm32mp1 [**aquí**](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/res/stm32mp1-seeed-npi-full-rpi-exp.dtb)

- **Paso 3.** Configura el `uEnv.txt` como sigue:

```sh
debian@npi:~$ sudo vi /boot/uEnv.txt
```

Cambia la configuración dtb a

```
dtb=stm32mp1-seeed-npi-full-rpi-exp.dtb
```

- **Paso 4.** reiniciar

```
sudo reboot
```

- **Paso 5.** Ingresa a la carpeta `seeed-linux-dtverleys` y configura soundstate como sigue:

```sh
debian@npi:~$ cd ~/seeed-linux-dtverlays/
debian@npi:~/seeed-linux-dtverlays$ sudo cp extras/wm8960_asound-stm32mp1 /var/lib/alsa/asound.state
debian@npi:~/seeed-linux-dtverlays$ sudo alsactl restore
```

- **Paso 6.** Verifica si el controlador se instaló correctamente usando `aplay` y `arecord`, verás la información a continuación si fue exitoso.

```sh
debian@npi:~/seeed-linux-dtverlays$ aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: seeed2micvoicec [seeed-2mic-voicecard], device 0: 4000b000.audio-controller-wm8960-hifi wm8960-hifi-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: STM32MP1SEEEDNP [STM32MP1-SEEEDNPi], device 0: 4400b004.audio-controller-wm8960-hifi0 wm8960-hifi0-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
debian@npi:~/seeed-linux-dtverlays$ arecord -l
**** List of CAPTURE Hardware Devices ****
card 0: seeed2micvoicec [seeed-2mic-voicecard], device 0: 4000b000.audio-controller-wm8960-hifi wm8960-hifi-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: STM32MP1SEEEDNP [STM32MP1-SEEEDNPi], device 1: 4400b024.audio-controller-wm8960-hifi1 wm8960-hifi1-1 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

- **Paso 7.** ¡Ahora puedes empezar a jugar con ReSpeaker 2-Mics Pi Hat! Para pruebas simples de grabación y reproducción, ejecuta el siguiente comando:

1. Para grabar un audio a `test.wav`:

```sh
arecord -f cd -r 48000 -Dhw:0 test.wav
```

2. Para reproducir el audio `test.wav`. Recuerda conectar unos auriculares o un altavoz para emitir el audio.

```sh
aplay -Dhw:0 -r 48000 test.wav
```

<div class="admonition note" >
<p class="admonition-title">Nota</p>
si no puedes obtener ningún sonido, tal vez puedas reiniciar de nuevo.
</div>

Para más información sobre el ReSpeaker 2-Mics Pi HAT puedes visitar [wiki](https://wiki.seeedstudio.com/es/ReSpeaker_2_Mics_Pi_HAT/)

## Recursos

-----

- **[PDF]** [Hoja de datos STM32MP157C](https://files.seeedstudio.com/wiki/Seeed-NPi-STM32MP157C/Hardware/stm32mp157c.pdf)
- **[SCH]** [Seeed SoM - STM32MP157C](https://files.seeedstudio.com/wiki/Seeed-NPi-STM32MP157C/Hardware/Seeed%20SoM%20-%20STM32MP157C%20v1.0_191212.pdf)
- **[SCH]** [ODYSSEY-STM32MP157C](https://files.seeedstudio.com/wiki/Seeed-NPi-STM32MP157C/Hardware/Seeed%20NPi%20-%20STM32MP157C%20v1.0_191212.pdf)
- **[Archivo3D]** [ODYSSEY-STM32MP157C](https://files.seeedstudio.com/wiki/Seeed-NPi-STM32MP157C/Hardware/st.skp)
- **[OrCAD]** [ODYSSEY-STM32MP157C](https://files.seeedstudio.com/wiki/Seeed-NPi-STM32MP157C/Hardware/Seeed%20NPi%20-%20STM32MP157C%20v1.0_SCH%20%26%20PCB.zip)
- **[OrCAD]** [Seeed SoM - STM32MP157C](https://files.seeedstudio.com/wiki/Seeed-NPi-STM32MP157C/Hardware/Seeed%20SoM%20-%20STM32MP157C%20v1.0_SCH%20%26%20PCB%20.zip)
- **[PDF]** [Archivo 2d ODYSSEY-STM32MP157C](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/STM32-2d-file.pdf)
- **[PDF]** [Guía de referencia STM32](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/STM32+Reference+Guide+V1.0.pdf)
- **[URL]** [Desarrollo avanzado de sistemas](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C)

# ODYSSEY-STM32MP157C Desarrollo avanzado de sistemas

- [Disponibilidad](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-Availability)
- [Documentación del proveedor](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-VendorDocumentation)
- [Requisitos básicos](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-BasicRequirements)
- [Compilador cruzado ARM: GCC](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-ARMCrossCompiler:GCC)
- [Cargador de arranque: U-Boot](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-Bootloader:U-Boot)
- [Kernel de Linux](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-LinuxKernel)
- [Sistema de archivos raíz](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-RootFileSystem)
  - [Debian 10](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-Debian10)
  - [Ubuntu 20.04 LTS](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-Ubuntu20.04LTS)
- [Configurar tarjeta microSD](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-SetupmicroSDcard)
- [Instalar kernel y sistema de archivos raíz](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-InstallKernelandRootFileSystem)
- [Copiar sistema de archivos raíz](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-CopyRootFileSystem)
- [Establecer uname_r en /boot/uEnv.txt](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-Setuname_rin/boot/uEnv.txt)
- [Binario del árbol de dispositivos](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-DeviceTreeBinary)
- [Copiar imagen del kernel](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-CopyKernelImage)
- [Copiar binarios del árbol de dispositivos del kernel](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-CopyKernelDeviceTreeBinaries)
- [Copiar módulos del kernel](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-CopyKernelModules)
- [Tabla de sistemas de archivos (/etc/fstab)](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-FileSystemsTable(/etc/fstab))
- [Retirar tarjeta microSD/SD](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-RemovemicroSD/SDcard)
- [Comentarios](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-Comments)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
