---
description: Esta es la descripción general de características, especificaciones, interfaz de hardware y lista de componentes.
title: Hardware y Especificaciones
keywords:
  - Edge
  - reCamera
  - reCamera HQ POE
  - POE
  - HQ
  - M12
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /es/recamera_hd_poe_hardware
sidebar_position: 2
last_update:
  date: 09/25/2025
  author: Parker Hu
---

# Descripción General de reCamera HQ POE

reCamera 2002 HQ PoE está equipada con un sensor CMOS avanzado para imágenes más nítidas y claras. Tiene una montura de lente M12—flexible para reemplazar la lente predeterminada con cualquier lente M12 de 2MP compatible. También soporta PoE (Power over Ethernet): no necesita alimentación USB/DC separada, solo un cable Ethernet a un switch PoE para energía y datos.


## Características

- Alta Calidad: Equipada con un sensor CMOS GC2053 de 1/2.9 pulgadas, proporcionando calidad de imagen superior.
- Montura de Lente M12: FOV predeterminado de 90°, fácilmente reemplazable con cualquier lente M12 estándar.
- Ethernet con PoE (Power over Ethernet): Soporta datos y energía sobre un solo cable, solo Modo A de PoE.
- Extensión IO/UART: Conector de 6 pines con 1×UART y 3×GPIO.

## Especificaciones

### Sistema de Procesamiento

| **Parámetro**          | **Valor**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **SOC**                | SG2002                                                                    |
| **CPU**                | C906@1GHz + C906@700MHz                                                  |
| **Rendimiento AI**     | 1 Tops @ Int8                                                            |
| **MCU**                | 8051 @ 8KB SRAM                                                          |
| **Sistema Operativo**  | Linux                                                                     |
| **Memoria**            | 256 MB                                                                    |
| **Codificador de Video** | 5MP @ 30Fps                                                            |

### Básico

| **Parámetro**          | **Valor**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **eMMC**               | 8GB / 64GB                                                               |
| **Fuente de Alimentación** | Conector DC de 12V a conector XT30                                   |
| **Consumo de Energía** | 12V, 185mA (estático)                                                    |


| Sensor                | GC2053                             |
| --------------------- | ---------------------------------- |
| Formato Óptico        | 1/2.9 pulgadas                    |
| Resolución            | 1920x1080                          |
| Velocidad de Fotogramas Máx. | 30fps@tamaño completo       |
| montura de lente      | M12                                |
| FOV                   | 93°                                |
| Ethernet              | 100Mbps con PoE                   |
| USB                   | USB Type-C(2.0)                   |
| Dimensión             | 40x40x45.8mm40x40x53.1mm con lente |
| Temperatura de Operación | -20～50°C                       |
| Humedad de Operación  | 95%                                |


### [Placa Principal-C101](https://github.com/litxaohu/OSHW-reCamera-Series/tree/main?tab=readme-ov-file#core-board)
<!-- 搬运github说明和图 -->
| Placa         | Características                    | Versión |
| ------------- | ---------------------------------- | ------------ |
| C1_2002w    | - eMMC <br /> - Módulo WiFi/BLE <br /> - Antena integrada <br /> - Conector de antena externa| 1.2 |
| C1_2002       | - eMMC <br /> - SDIO adicional a placa base <br /> - UART adicional a placa base | 1.2 |

Vista Superior           |  Vista Inferior
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Up.png" /></div>  |  <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Bottom.png" /></div>

### [Placa de Sensor-S101](https://github.com/litxaohu/OSHW-reCamera-Series/tree/main?tab=readme-ov-file#sensor-board)
<!-- 搬运github说明和图 -->

Vista Superior           |  Vista Inferior
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/S1_ov5647_UP.png" /></div> | <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/S1_ov5647_Bottom.png" /></div>

#### ⚙️ características

<div>
  <table>
    <tbody>
      <tr>
        <td style={{ fontWeight: 'bold' }}>Sensor</td>
        <td className="dbon">GC2053</td>
        <td style={{ fontWeight: 'bold' }}>Tamaño CMOS</td>
        <td className="dbon">1/2.9"</td>
      </tr>
      <tr>
        <td style={{ fontWeight: 'bold' }}>Píxeles</td>
        <td className="dbon">2MP</td>
        <td style={{ fontWeight: 'bold' }}>Apertura</td>
        <td className="dbon">F2.8</td>
      </tr>
      <tr>
        <td style={{ fontWeight: 'bold' }}>Distancia Focal</td>
        <td className="dbon">2.9mm ±0.5%</td>
        <td style={{ fontWeight: 'bold' }}>Campo de Visión</td>
        <td>DFOV 93°   HFOV 84°  VFOV 54°</td>
      </tr>
      <tr>
        <td style={{ fontWeight: 'bold' }}>Distorsión</td>
        <td>0.5 %</td>
        <td style={{ fontWeight: 'bold' }}>Iluminación Relativa</td>
        <td>30% ± 5%</td>
      </tr>
      <tr>
        <td style={{ fontWeight: 'bold' }}>Rango de Enfoque</td>
        <td>39~69.5 CM </td>
        <td style={{ fontWeight: 'bold' }}>Altura de enfoque</td>
        <td>50 CM</td>
      </tr>
      <tr>
        <td style={{ fontWeight: 'bold' }}>Video</td>
        <td colspan="3">1920 x 1080p @30fps, 1280 x 720p @30fps</td>
      </tr>
      <tr>
        <td style={{ fontWeight: 'bold' }}>Interfaces</td>
        <td colspan="3">- 1 x micrófono<br />- 1 x altavoz<br />- 3 x indicador LED</td>
      </tr>
    </tbody>
  </table>
</div>

## Interfaz de Hardware

- [Luz](#jump2)
- [Micrófono y Altavoz](#jump3)
- [WIFI](#jump4)
- [Tarjeta SD](#jump5)
- [Uart (Debug)](#jump6)
- [Botón de Usuario](#jump7)

### <span id="jump2">Luz</span>

Hay 3 indicadores en la reCamera, las luces **roja y azul** son indicadores programables, y el indicador **verde** es el indicador de energía que no es programable. **Rojo** es el indicador de estado de la CPU y **azul** es el indicador de estado de lectura del eMMC del sistema.

**Estado de los Indicadores de Luz**:

| LED(color) | Estado | Declaración |
| ---- | ---- | ---- |
| LED1 - Verde | ENCENDIDO | Energía Encendida |
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

Hay cuatro luces **blancas**, que son las luces de relleno de la cámara. El interruptor de las luces de relleno puede ser controlado por las siguientes instrucciones.

``` bash
echo 1 > /sys/devices/platform/leds/leds/white/brightness //light on
echo 0 > /sys/devices/platform/leds/leds/white/brightness //light off
```

### <span id="jump3">Micrófono y Altavoz</span>

La reCamera tiene un micrófono y un altavoz. Puedes invocar el micrófono y altavoz siguiendo el comando. La reCamera puede reproducir archivos de audio en formato **wav**.

El formato predeterminado del reproductor es: tasa de bits de 16bit; La frecuencia de muestreo es 16,000

```bash
sudo arecord -D hw:0,0 -r 16000 -f S16_LE -c 1 -d 5 /home/recamera/test.wav //Record five seconds of audio

sudo aplay -D hw:1,0 /home/recamera/test.wav //Playing audio
```

### <span id="jump4">Wi-Fi</span>

La versión 2002w de reCamera tiene el módulo Wi-Fi en hardware. El Wi-Fi es modo dual AP+STA, que puede ser usado para configurar la red del dispositivo o configurar el dispositivo en modo AP.

El **SSID** del wifi en modo AP es: `reCamera_+ los últimos seis bits de MAC`.

La **Contraseña** del wifi en modo AP es: `12345678`.

El ssid y contraseña del WiFi_AP pueden ser configurados en el archivo `/etc/hostapd_2g4.conf` en el sistema reCamera.

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

La ranura de tarjeta SD puede expandir el espacio de almacenamiento de la reCamera. Después de insertar la tarjeta SD, puedes encontrar la existencia de tu SD usando el comando `lsblk`.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-5.png" /></div>

Una vez que hayas encontrado un dispositivo de almacenamiento como mmcblk1p1, puedes montarlo a tu sistema usando el siguiente comando.
<br/>

Nota que reCamera solo reconoce sistemas de archivos **ext4**.

```bash
sudo blkid /dev/mmcblk1p1 #If TYPE is not ext4, the filesystem needs to be formatted
/dev/mmcblk1p1: UUID="F080-C970" BLOCK_SIZE="512" TYPE="exfat" PARTUUID="04ec0085-01"

sudo mkfs.ext4 /dev/mmcblk1p1 #Format the filesystem to ext4
mkdir /userdata/mmcblk1 #Create a mount file
sudo mount -t ext4 /dev/mmcblk1p1 /userdata/mmcblk1 #Mount the SD card to the /userdata/mmcblk1 path
```

Verifica el resultado del montaje con `lsblk`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-6.png" /></div>

### <span id="jump6">Uart (Debug)</span>

La placa de circuito base de la reCamera tiene tres contactos tx, rx y gnd, que sirven como puerto serie de depuración de la reCamera.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/image-7.png" /></div>

El dispositivo tiene una velocidad de baudios del puerto serie de 115200 y puede iniciar sesión en el sistema reCamera.

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
| reCamera 2002x HQ PoE | x1 |
| Cable USB Type-C | x1 |
| Cable Ethernet | x1 |
| Manual de Usuario | x1 |
| Cable de 6 Pines | x1 |


## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
