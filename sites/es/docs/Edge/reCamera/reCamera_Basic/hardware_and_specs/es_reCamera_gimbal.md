---
description: Esta es la descripción general de las funciones, especificaciones, interfaz de hardware y lista de piezas.
title: reCamera Gimbal
keywords:
  - Edge
  - reCamera
  - Descripción general del hardware
image: https://files.seeedstudio.com/wiki/reCamera/image.webp
slug: /recamera_gimbal_hardware_and_specs
sidebar_position: 2
last_update:
  date: 02/18/2025
  author: Parker Hu
createdAt: '2024-12-20'
updatedAt: '2025-12-05'
url: https://wiki.seeedstudio.com/es/reCamera/reCamera_Basic/hardware_and_specs/recamera_gimbal_hardware_and_specs
---

# Descripción general de reCamera Gimbal

La reCamera Gimbal 2002 Serie es el primer sistema de control de cámara de código abierto con cámara de IA de 1TOPS (reCamera) y gimbal de 2 ejes. Sus motores duales sin escobillas permiten 360° de guiñada y 180° de inclinación para una cobertura total.

## Características

- Ecosistema totalmente de código abierto en hardware y software
  - [Developer Portal](https://github.com/Seeed-Studio/OSHW-reCamera-Series?tab=readme-ov-file#recamera-software-development-guide)
- Configuración rápida y movimiento de precisión
  - Soporte de paquete de ensamblaje tipo Lego
  - Rotación de guiñada de 360° Cobertura total e inclinación de 180° Rango desde el suelo hasta el techo
  - Precisión del motor sin escobillas: precisión de paso de 0.01° para un seguimiento de objetivos fluido.
- Control de movimiento impulsado por IA
  - Modelos de IA personalizados listos para usar: YOLO11 integrado con licencia comercial, compatibilidad con Roboflow y SenseCraft AI.
  - Seguimiento inteligente: la IA ajusta automáticamente el movimiento del gimbal.
- Desarrollo flexible para todos los niveles de habilidad
  - Node-RED integrado para personalización de flujos de bajo código en el movimiento del gimbal.
  - SDK de C++ compatible para un desarrollo más profundo.

## Especificaciones

### Sistema de procesamiento

| **Parámetro**          | **Valor**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **SOC**                | SG2002                                                                    |
| **CPU**                | C906@1GHz + C906@700MHz                                                  |
| **Rendimiento de IA**  | 1 Tops @ Int8                                                            |
| **MCU**                | 8051 @ 8KB SRAM                                                          |
| **Sistema operativo**  | Linux                                                                     |
| **Memoria**            | 256 MB                                                                  |
| **Codificador de video** | 5MP @ 30Fps                                                              |

### Básico

| **Parámetro**          | **Valor**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **eMMC**               | 8GB / 64GB                                                               |
| **Fuente de alimentación** | Conector de 12V DC Jack a XT30                                         |
| **Consumo de energía** | 12V, 185mA (estático)                                                   |

### Cámara

| **Parámetro**          | **Valor**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **Sensor**             | OV5647                                                                    |
| **Resolución**         | 5M (2592×1944) píxeles                                                   |
| **Chip**               | Sensor CMOS de 1/4"                                                      |
| **Tamaño de píxel**    | 1.4μm                                                                     |
| **Formato de salida**  | RAW 10                                                                    |
| **Frecuencia de cuadro máxima** | Tamaño completo: 15fps                                             |
| **Apertura**           | F2.8                                                                      |
| **Longitud focal equivalente** | 3.46mm                                                              |
| **Campo de visión**    | 65°                                                                      |
| **Distorsión**         | &lt;1%                                                                      |
| **Estructura de la lente** | 5P                                                                     |

### Interfaz

| **Parámetro**          | **Valor**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **USB**                | USB 2.0 Tipo-C                                                            |
| **Inalámbrico**        | Wi-Fi 2.4G/5G Bluetooth 4.2/5.0                                          |
| **Botón**              | 1 × Botón de reinicio, 1 × Botón de usuario                              |
| **LEDs de relleno**    | 4 × 0.3W Luz blanca                                                       |
| **LED**                | 1 × Indicador de encendido, 2 × Indicadores programables de E/S          |
| **Micrófono**          | Micrófono integrado                                                       |
| **Altavoz**            | Altavoz externo                                                           |

### Especificación del motor

| **Parámetro**          | **MS3008**               | **MS3506**          |
|------------------------|--------------------------|---------------------|
| **Vueltas**            | 54                       | 60                  |
| **Voltaje nominal (V)** | 12                      | 12                  |
| **Velocidad máxima (rpm)** | 2000                  | 2100                |
| **Par nominal (N·m)**  | 0.04                     | 0.05                |
| **Velocidad nominal (rpm)** | 1160                 | 1250                |
| **Corriente nominal (A)** | 0.64                   | 0.79                |
| **Potencia máxima (W)** | 4.6                     | 6.4                 |
| **Polos del motor**    | 14                       | 14                  |
| **Temperatura de funcionamiento (℃)** | -25~60     | -25~60              |
| **Peso (g)**          | 49                       | 63                  |
| **Voltaje de entrada de la unidad (V)** | 6~16     | 6~16                |
| **Comunicación**      | CAN                      | CAN                 |
| **Frecuencia de comunicación** | CAN@1Mbps:2KHz   | CAN@1Mbps:2KHz      |
| **Codificador**       | Codificador magnético de 15 bits | Codificador magnético de 15 bits        |
| **Velocidad en baudios CAN** | 100K、125K、250K、500K、1M   | 100K、125K、250K、500K、1M    |
| **Modo de control**   | Bucle abierto(24KHz) / Bucle de velocidad(4KHz) / Bucle de posición(2KHz) | Bucle abierto(24KHz) / Bucle de velocidad(4KHz) / Bucle de posición(2KHz)                |

### Especificación del gimbal

| **Parámetro**          | **Valor**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **Rango de inclinación** | 0～180°                                                                  |
| **Rango de guiñada**   | 0～360°                                                                    |

### Condiciones ambientales

| **Parámetro**          | **Valor**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **Temperatura de funcionamiento** | -20～50 ℃                                                          |
| **Humedad de funcionamiento** | 0～90%                                                               |

### Mecánico

| **Parámetro**          | **Valor**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **Dimensiones (W × H × D)** | 68×112×71mm                                                           |
| **Carcasa**            | Poliamida (PA) Nailon                                                     |
| **Peso (neto)**        | 230g                                                                      |

### Otros

| **Parámetro**          | **Valor**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **Garantía**           | 1 año                                                                     |

## Descripción general del hardware

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Interface.png" /></div>

### Placa principal-C101

[**Haz clic para descargar el archivo PCBA de 8GB**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_Gimbal_Core_2002w_8GB_v1.zip)

[**Haz clic para descargar el archivo PCBA de 64GB**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_Gimbal_Core_2002w_64GB_v1.zip)

Vista superior          |  Vista inferior
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Up.png" /></div>  |  <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Bottom.png" /></div>

#### Diagrama de bloques

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/C101_block.png" /></div>

### Placa de sensor-S101

[**Haz clic para descargar el archivo PCBA**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_OV5647_S101_v1.1.zip)

Vista superior          |  Vista inferior
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/S1_ov5647_UP.png" /></div> | <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/S1_ov5647_Bottom.png" /></div>

### Placa base-B401

[**Haz clic para descargar el archivo PCBA**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_Gimbal_B401_v1.zip)

Vista superior          |  Vista inferior
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/B401_Top.png" /></div> | <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/B401_Bottom.png" /></div>

#### Diagrama de bloques

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/B401_block.png" /></div>

### Placa de alimentación

Esta placa de alimentación proporciona funciones duales de suministro de energía estable y protección contra sobretensión. Admite entrada de 12V CC para alimentar tanto los motores como los sistemas reCamera.

**Umbrales de protección contra sobretensión**:

- Voltaje máximo de disparo: 25.66V
- Voltaje de funcionamiento normal: 25.54V
- Voltaje mínimo seguro: 25.4V

[**Haz clic para descargar el archivo de PCBA**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_Gimbal_power_supply_board_v1.zip)

#### Diagrama de bloques

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/power_supply_block.png" /></div>

## Interfaz de hardware

- [Luz](#jump1)
- [Micrófono y altavoz](#jump2)
- [WIFI](#jump3)
- [Botón](#jump4)
- [Motor](#jump5)
- [CAN](#jump6)

### <span id="jump1">Luz</span>

Hay 3 indicadores en la reCamera, las luces **roja y azul** son indicadores programables, y el indicador **verde** es el indicador de encendido que no es programable. La **roja** es el indicador de estado de la CPU y la **azul** es el indicador de estado de lectura de la eMMC del sistema.

**Estado de los indicadores luminosos**:

| LED(color) | Estado | Descripción |
| ---- | ---- | ---- |
| LED1 - Verde | ENCENDIDO | Encendido |
| LED2 - Rojo | Parpadeando | CPU funcionando (definido por el usuario) |
| LED3 - Azul | Parpadeando | Lectura/escritura de eMMC |

Ejemplo 1: Usa el comando de Linux para cambiar el brillo del **LED rojo** a cero

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

### <span id="jump2">Micrófono y altavoz</span>

La reCamera tiene un micrófono y un altavoz. Puedes invocar el micrófono y el altavoz mediante el siguiente comando. La reCamera puede reproducir archivos de audio en formato **wav**.

```bash
sudo arecord -D hw:0,0 -r 16000 -f S16_LE -c 1 -d 5 /home/recamera/test.wav //Record five seconds of audio

sudo aplay -D hw:1,0 /home/recamera/test.wav //Playing audio
```

Los archivos de audio mp3 locales se pueden convertir a archivos wav para su reproducción en reCamera utilizando [Convert audio online](https://www.aconvert.com/audio/).
El formato predeterminado del reproductor es: tasa de bits de 16 bits; La frecuencia de muestreo es 16 000

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Convert_audio_online.png" /></div>

### <span id="jump3">Wi-Fi</span>

La versión 2002w de reCamera tiene el módulo Wi-Fi en el hardware. El Wi-Fi es de modo dual AP+STA, que se puede usar para configurar la red del dispositivo o configurar el dispositivo en modo AP.

El **SSID** del Wi-Fi en modo AP es: `reCamera_+ the last six bits of MAC`.

La **contraseña** del Wi-Fi en modo AP es: `12345678`.

El ssid y la contraseña del WiFi_AP se pueden configurar en el archivo `/etc/hostapd_2g4.conf` en el sistema de reCamera.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-2.png" /></div>

El archivo de configuración STA de reCamera está en **/etc/wpa_supplicant.conf**, donde configuras la cuenta y la contraseña de Wi-Fi a la que conectarte.
En modo STA, conéctate a Wi-Fi en la banda de **5G**.

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

### <span id="jump4">Botón</span>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Interface.png" /></div>

#### Botón de usuario

El **Botón de usuario 10** está ubicado en la placa **reCamera Gimbal** Board-B401. Si deseas restablecer el dispositivo, por ejemplo, si olvidas el código de acceso de tu dispositivo, puedes mantener presionado el botón de usuario y luego conectar el dispositivo a la alimentación. Cuando la luz roja del dispositivo permanezca encendida en lugar de parpadear, suelta el botón de usuario.

Si deseas restaurar el firmware de tu dispositivo a una versión específica, visita [os version control](https://wiki.seeedstudio.com/es/recamera_os_version_control).

#### Botón de reinicio

El **Botón de reinicio 11** está ubicado en la placa **reCamera Gimbal** Board-B401. Cuando se presiona el botón, el sistema se reiniciará.

### <span id="jump5">Motor</span>

Hay un script de Gimbal en la reCamera Gimbal que se puede usar para depurar y controlar los motores del Gimbal.
Para ver el script del gimbal en acción, ejecuta el siguiente comando:

```bash
gimbal --help
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_script.png" /></div>

`gimbal` es un script bash, puedes modificarlo para ver y modificar el script y así satisfacer tus necesidades de desarrollo secundario. La ubicación del script es:

```bash
cd /usr/bin
cat gimbal
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_script_content.png" /></div>

### <span id="jump6">CAN</span>

Usa el comando `ifconfig` para ver la interfaz **can0**:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_command_ifconfig.png" /></div>

Usa el comando `cansend can0 can_id#9C.00.00.00.00.00.00.00` para enviar mensajes CAN:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_command_cansend.png" /></div>

Usa el comando `candump can0` para recibir mensajes CAN:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_command_candump.png" /></div>

## Lista de piezas

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_Partlist.png" /></div>

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
