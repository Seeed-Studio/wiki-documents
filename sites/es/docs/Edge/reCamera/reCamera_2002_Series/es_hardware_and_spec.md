---
description: Esta es la descripción general de las características, especificaciones, interfaz de hardware y lista de componentes.
title: Hardware y Especificaciones
keywords:
  - Edge
  - reCamera
  - Hardware overview
image: https://files.seeedstudio.com/wiki/reCamera/image.webp
slug: /es/recamera_hardware_and_specs
sidebar_position: 2
last_update:
  date: 02/18/2025
  author: Parker Hu
---

# Descripción General de reCamera

reCamera es una cámara de IA de código abierto y compacta, programable y personalizable, impulsada por SoC RISC-V, que ofrece un rendimiento de IA en el dispositivo de 1 TOPS con codificación de video de 5MP @30 FPS. El diseño de hardware modular y las interfaces expandibles ofrecen la plataforma más versátil para desarrolladores que construyen sistemas de IA de visión.

## Características

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/reCamera_3x.png" alt="pir" width={600} height="auto" /></p>

## Especificaciones

<table style={{width: '72.2022%'}}>
            <tbody>
                <tr></tr>
                <tr>
                    <td style={{width: '35.3932%'}} colspan="2" rowspan="1" width="208">
                        <p><strong><span data-font-family='"Source Sans Pro", sans-serif'>Serie reCamera 2002</span></strong></p>
                    </td>
                    <td style={{width: '28.7153%'}} colspan="1" rowspan="1" width="169">
                        <p><strong><span data-font-family='"Source Sans Pro", sans-serif'>reCamera 2002</span></strong></p>
                    </td>
                    <td style={{width: '35.7271%'}} colspan="1" rowspan="1" width="210">
                        <p><strong><span data-font-family='"Source Sans Pro", sans-serif'>reCamera 2002w</span></strong></p>
                    </td>
                </tr>
                <tr>
                    <td style={{width: '16.528%'}} colspan="1" rowspan="6" width="97">
                        <p><span data-font-family="Montserrat">Sistema de Procesador</span></p>
                    </td>
                    <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                        <p><span data-font-family="Montserrat">Rendimiento IA</span></p>
                    </td>
                    <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                        <p><span data-font-family="Montserrat">1TOPS@Int8</span></p>
                    </td>
                </tr>
                <tr>
                    <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                        <p><span data-font-family="Montserrat">SOC</span></p>
                    </td>
                    <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                        <p><span data-font-family="Montserrat">SG2002</span></p>
                    </td>
                </tr>
                <tr>
                    <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                        <p><span data-font-family="Montserrat">CPU</span></p>
                    </td>
                    <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                        <p><span data-font-family="Montserrat">C906@1GHz + C906@700MHz</span></p>
                    </td>
                </tr>
                <tr>
                    <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                        <p><span data-font-family="Montserrat">MCU</span></p>
                    </td>
                    <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                        <p><span data-font-family="Montserrat">8051@8KB SRAM</span></p>
                    </td>
                </tr>
                <tr>
                    <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                        <p><span data-font-family="Montserrat">Memoria</span></p>
                    </td>
                    <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                        <p><span data-font-family="Montserrat">256MB</span></p>
                    </td>
                </tr>
                <tr>
                    <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                        <p><span data-font-family="Montserrat">Codificación de Video</span></p>
                    </td>
                    <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                        <p><span data-font-family="Montserrat">5MP @ 30Fps</span></p>
                    </td>
                </tr>
                <tr>
                    <td style={{width: '35.3932%'}} colspan="2" rowspan="1" width="208">
                        <p><span data-font-family="Montserrat">Sensor de Cámara</span></p>
                    </td>
                    <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                        <p><span data-font-family="Montserrat">OV5647</span></p>
                    </td>
                </tr>
                <tr>
                    <td style={{width: '16.528%'}} colspan="1" rowspan="2" width="97">
                        <p><span data-font-family="Montserrat">Almacenamiento</span></p>
                    </td>
                    <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                        <p><span data-font-family="Montserrat">eMMC</span></p>
                    </td>
                    <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                        <p><span data-font-family="Montserrat">(versión1) 8GB (versión2) 64GB</span></p>
                    </td>
                </tr>
                <tr>
                    <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                        <p><span data-font-family="Montserrat">Expansión</span></p>
                    </td>
                    <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                        <p><span data-font-family="Montserrat">tarjeta TF extraíble (hasta 2TB, no incluida)</span></p>
                    </td>
                </tr>
                <tr>
                    <td style={{width: '16.528%'}} colspan="1" rowspan="6" width="97">
                        <p><span data-font-family="Montserrat">E/S</span></p>
                    </td>
                    <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                        <p><span data-font-family="Montserrat">Ethernet</span></p>
                    </td>
                    <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                        <p><span data-font-family="Montserrat">100Mbps</span></p>
                    </td>
                </tr>
                <tr>
                    <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                        <p><span data-font-family="Montserrat">Inalámbrico</span></p>
                    </td>
                    <td style={{width: '28.7153%'}} colspan="1" rowspan="1" width="169">
                        <p><span data-font-family="Montserrat">/</span></p>
                    </td>
                    <td style={{width: '35.7271%'}} colspan="1" rowspan="1" width="210">
                        <p><span data-font-family="Montserrat">WIFI2.4G/5G BT4.2/5.0</span></p>
                    </td>
                </tr>
                <tr>
                    <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                        <p><span data-font-family="Montserrat">USB</span></p>
                    </td>
                    <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                        <p><span data-font-family="Montserrat">USB Type-C(2.0)</span></p>
                    </td>
                </tr>
                <tr>
                    <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                        <p><span data-font-family="Montserrat">Botón</span></p>
                    </td>
                    <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                        <p><span data-font-family="Montserrat">1 Botón de Reinicio, 1 Botón de Arranque</span></p>
                    </td>
                </tr>
                <tr>
                    <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                        <p><span data-font-family="Montserrat">Luz de Relleno</span></p>
                    </td>
                    <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                        <p><span data-font-family="Montserrat">Luz Blanca de 0.3w</span></p>
                    </td>
                </tr>
                <tr>
                    <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                        <p><span data-font-family="Montserrat">Luz de Estado</span></p>
                    </td>
                    <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                        <p><span data-font-family="Montserrat">1 Indicador de Alimentación, 2 IO Programables</span></p>
                    </td>
                </tr>
                <tr>
                    <td style={{width: '16.528%'}} colspan="1" rowspan="2" width="97">
                        <p><span data-font-family="Montserrat">Audio</span></p>
                    </td>
                    <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                        <p><span data-font-family="Montserrat">Micrófono</span></p>
                    </td>
                    <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                        <p><span data-font-family="Montserrat">Micrófono Integrado</span></p>
                    </td>
                </tr>
                <tr>
                    <td style={{width: '18.8653%'}} colspan="1" rowspan="1" width="111">
                        <p><span data-font-family="Montserrat">Altavoz</span></p>
                    </td>
                    <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                        <p><span data-font-family="Montserrat">Altavoz Externo</span></p>
                    </td>
                </tr>
                <tr>
                    <td style={{width: '35.3932%'}} colspan="2" rowspan="1" width="208">
                        <p><span data-font-family="Montserrat">Dimensiones</span></p>
                    </td>
                    <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                        <p><span data-font-family="Montserrat">40x40x36.5mm</span></p>
                    </td>
                </tr>
                <tr>
                    <td style={{width: '35.3932%'}} colspan="2" rowspan="1" width="208">
                        <p><span data-font-family="Montserrat">Alimentación</span></p>
                    </td>
                    <td style={{width: '64.4424%'}} colspan="2" rowspan="1" width="379">
                        <p><span data-font-family="default">5V 1A</span></p>
                    </td>
                </tr>
            </tbody>
        </table>

## Descripción General del Hardware

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-12.png" /></div>

### [Placa Principal-C101](https://github.com/Seeed-Studio/OSHW-reCamera-Series/tree/main?tab=readme-ov-file#core-board)
<!-- 搬运github说明和图 -->
| Placa         | Características                           | Versión |
| ------------- | ---------------------------------- | ------------ |
| C1_2002w    | - eMMC <br /> - Módulo WiFi/BLE <br /> - Antena integrada <br /> - Conector de antena externa| 1.2 |
| C1_2002       | - eMMC <br /> - SDIO adicional a la placa base <br /> - UART adicional a la placa base | 1.2 |

Vista Superior             |  Vista Inferior
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Up.png" /></div>  |  <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Bottom.png" /></div>

### [Placa de Sensor-S101](https://github.com/Seeed-Studio/OSHW-reCamera-Series/tree/main?tab=readme-ov-file#sensor-board)
<!-- 搬运github说明和图 -->

Vista Superior             |  Vista Inferior
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/S1_ov5647_UP.png" /></div> | <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/S1_ov5647_Bottom.png" /></div>

#### ⚙️ características

<div>

<table ><tbody>
<tr >
    <td >SENSOR</td>
    <td class="dbon">OV5647</td>
    <td class="dbon">TAMAÑO CMOS</td>
    <td class="dbon">1/4"</td>
</tr>
<tr >
    <td class="dbon">PÍXELES</td>
    <td class="dbon">5MP</td>
    <td class="dbon">APERTURA</td>
    <td class="dbon">F2.8</td>
</tr>
<tr >
    <td >LONGITUD FOCAL</td>
    <td class="dbon">3.46mm</td>
    <td class="dbon">CAMPO DE VISIÓN</td>
    <td >65°</td>
</tr>
<tr >
    <td >DISTORSIÓN</td>
    <td >&lt;1%</td>
    <td >Imagen</td>
    <td >2592 x 1944(imagen fija)</td>
</tr>
<tr >
    <td >IMAGEN</td>
    <td  colspan="3">Resolución de imagen fija 2592 x 1944</td>
</tr>
<tr >
    <td >VIDEO</td>
    <td  colspan="3">1920 x 1080p @30fps, 1280 x 720p @60fps, 640 x 480p @60fps, 640 x 480p @90fps</td>
</tr></tbody>
</table>
</div>

- 4 x luces de relleno LED
- 1 x micrófono
- 1 x altavoz
- 3 x indicador LED

### [Placa Base-B101](https://github.com/Seeed-Studio/OSHW-reCamera-Series/tree/main?tab=readme-ov-file#base-board)
<!-- 搬运github说明和图 -->
Vista Superior             |  Vista Inferior
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/B1_Default_Upper.png" /></div>  |  <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/B1_Default_Bottom.png" /></div>

#### ⚙️ Características

- 1 x puerto Type-C para entrada de alimentación y comunicación.
- 1 x Módulo Transformador de Puerto Único para soporte de comunicación Ethernet.
- 1 x lector de tarjeta SD para almacenamiento e intercambio de datos.

## Interfaz de Hardware

- [Luz](#jump2)
- [Micrófono y Altavoz](#jump3)
- [WIFI](#jump4)
- [Tarjeta SD](#jump5)
- [Uart (Debug)](#jump6)
- [Botón de Usuario](#jump7)

### <span id="jump2">Luz</span>

Hay 3 indicadores en la recamera, las luces **roja y azul** son indicadores programables, y el indicador **verde** es el indicador de alimentación que no es programable. **Rojo** es el indicador de estado de la CPU y **azul** es el indicador de estado de lectura del emmc del sistema.

**Estados de los Indicadores de Luz**:

| LED(color) | Estado | Descripción |
| ---- | ---- | ---- |
| LED1 - Verde | ENCENDIDO | Alimentación Encendida |
| LED2 - Rojo | Parpadeando | CPU Funcionando(definido por usuario) |
| LED3 - Azul | Parpadeando | eMMC Leyendo/Escribiendo |

Ejemplo 1: Usar comando de linux para cambiar el brillo del **led rojo** a cero

``` bash
echo 0 | sudo tee /sys/class/leds/red/brightness
```

Ejemplo 2: apagar completamente la **luz roja**

``` bash
echo none | sudo tee /sys/class/leds/red/trigger
```

Hay cuatro luces **blancas**, que son las luces de relleno de la cámara. El interruptor de las luces de relleno se puede controlar mediante las siguientes instrucciones.

``` bash
echo 1 > /sys/devices/platform/leds/leds/white/brightness //light on
echo 0 > /sys/devices/platform/leds/leds/white/brightness //light off
```

### <span id="jump3">Micrófono y Altavoz</span>

La recamera tiene un micrófono y un altavoz. Puedes invocar el micrófono y el altavoz siguiendo el comando. La recamera puede reproducir archivos de audio en formato **wav**.

El formato predeterminado del reproductor es: tasa de bits de 16 bits; La frecuencia de muestreo es 16,000

```bash
sudo arecord -D hw:0,0 -r 16000 -f S16_LE -c 1 -d 5 /home/recamera/test.wav //Record five seconds of audio

sudo aplay -D hw:1,0 /home/recamera/test.wav //Playing audio
```

### <span id="jump4">Wi-Fi</span>

La versión 2002w de reCamera tiene el módulo Wi-Fi en el hardware. El Wi-Fi es de modo dual AP+STA, que puede usarse para configurar la red del dispositivo o configurar el dispositivo en modo AP.

El **SSID** del wifi en modo AP es: `reCamera_+ los últimos seis bits de MAC`.

La **Passwd** del wifi en modo AP es: `12345678`.

El ssid y passwd del WiFi_AP pueden configurarse en el archivo `/etc/hostapd_2g4.conf` en el sistema recamera.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-2.png" /></div>

El archivo de configuración STA de reCamera está en **/etc/wpa_supplicant.conf**, donde configuras la cuenta y contraseña de Wi-Fi a la que conectarse.
En modo STA, por favor conéctate a Wi-Fi en banda **5G**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-3.png" /></div>

En la terminal, puedes escanear y conectarte a Wi-Fi con el siguiente comando:

```bash
wpa_cli -i wlan0 scan                           #Start a scan

wpa_cli -i wlan0 scan_results                   #Returns wifi scan results

wpa_cli add_network                             # Adding a new network,Returns a network ID
wpa_cli set_network ID ssid "your_wifi_name"    # set network SSID
wpa_cli set_network ID psk "your_wifi_password" # set network passwd
wpa_cli enable_network ID                       # enable network and connect
wpa_cli status                                  # Checking connection status
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-4.png" /></div>

### <span id="jump5">Tarjeta SD</span>

La ranura para tarjeta SD puede expandir el espacio de almacenamiento de la recamera. Después de insertar la tarjeta SD, puedes encontrar la existencia de tu SD usando el comando `lsblk`.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-5.png" /></div>

Una vez que hayas encontrado un dispositivo de almacenamiento como mmcblk1p1, puedes montarlo en tu sistema usando el siguiente comando.
<br/>

Ten en cuenta que recamera solo reconoce sistemas de archivos **ext4**.

```bash
sudo blkid /dev/mmcblk1p1 #If TYPE is not ext4, the filesystem needs to be formatted
/dev/mmcblk1p1: UUID="F080-C970" BLOCK_SIZE="512" TYPE="exfat" PARTUUID="04ec0085-01"

sudo mkfs.ext4 /dev/mmcblk1p1 #Format the filesystem to ext4
mkdir /userdata/mmcblk1 #Create a mount file
sudo mount -t ext4 /dev/mmcblk1p1 /userdata/mmcblk1 #Mount the SD card to the /userdata/mmcblk1 path
```

Verifica el resultado del montaje con `lsblk`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-6.png" /></div>

### <span id="jump6">Uart (Depuración)</span>

La placa de circuito base de la recamera tiene tres contactos tx, rx y gnd, que sirven como puerto serie de depuración de la recamera.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/image-7.png" /></div>

El dispositivo tiene una velocidad de baudios del puerto serie de 115200 y puede iniciar sesión en el sistema de la recamera.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-8.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-9.png" /></div>

### <span id="jump7">Botón de Usuario</span>

El botón usr de la reCamera puede ser personalizado por el usuario.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/image-10.png" /></div>

```bash
echo "510" > /sys/class/gpio/export
echo "in" > /sys/class/gpio/gpio510/direction #Enable the input mode
cat /sys/class/gpio/gpio510/value #When the key is pressed, 0 is printed
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-11.png" /></div>

## Lista de partes

| Artículo | Cantidad |
|--|--|
| reCamera Serie 2002 | x1 |
| Cable USB tipo-C | x1 |
| Cable Ethernet | x1 |

<!-- ## Accessories List -->

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
