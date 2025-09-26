---
description: Esta es la descripción general del gimbal reCamera para características, especificaciones, interfaz de hardware y lista de partes.
title: Hardware y Especificaciones
keywords:
  - Edge
  - AI
  - reCamera
  - reCamera Gimbal
  - blushless motor
  - Hardware overview
image: https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.webp
slug: /es/recamera_gimbal_hardware_and_specs
sidebar_position: 2
last_update:
  date: 03/27/2025
  author: Evelyn Chen
---

# Descripción General del reCamera Gimbal

El reCamera Gimbal Serie 2002 es el primer sistema de control de cámara de código abierto con cámara AI de 1TOPS (reCamera) y gimbal de 2 ejes. Sus motores brushless duales permiten 360° de guiñada y 180° de inclinación para cobertura completa.

## Características

- Ecosistema Completamente de Código Abierto en Hardware y Software
  - [Portal de Desarrolladores](https://github.com/Seeed-Studio/OSHW-reCamera-Series?tab=readme-ov-file#recamera-software-development-guide)
- Configuración Rápida y Movimiento de Precisión
  - Soporte de paquete de ensamblaje tipo Lego
  - Rotación de guiñada de 360° Cobertura completa y rango de inclinación de 180° Desde el suelo hasta el techo
  - Precisión del Motor Brushless: Precisión de paso de 0.01° para seguimiento suave del objetivo.
- Control de Movimiento Impulsado por IA
  - Modelos de IA Personalizados Listos: YOLO11 integrado con licencia comercial, soporte de Roboflow y SenseCraft AI.
  - Seguimiento Inteligente: La IA ajusta automáticamente el movimiento del gimbal.
- Desarrollo Flexible para Todos los Niveles de Habilidad
  - Node-RED integrado para personalización de flujo de bajo código en el movimiento del gimbal.
  - SDK de C++ soportado para desarrollo más profundo.

## Especificaciones

### Sistema de Procesamiento

| **Parámetro**          | **Valor**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **SOC**                | SG2002                                                                    |
| **CPU**                | C906@1GHz + C906@700MHz                                                  |
| **Rendimiento de IA**  | 1 Tops @ Int8                                                            |
| **MCU**                | 8051 @ 8KB SRAM                                                          |
| **Sistema Operativo**  | Linux                                                                     |
| **Memoria**            | 256 MB                                                                  |
| **Codificador de Video** | 5MP @ 30Fps                                                              |

### Básico

| **Parámetro**          | **Valor**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **eMMC**               | 8GB / 64GB                                                               |
| **Suministro de Energía** | Conector DC Jack de 12V a XT30                                       |
| **Consumo de Energía** | 12V, 185mA (estático)                                                    |

### Cámara

| **Parámetro**          | **Valor**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **Sensor**             | OV5647                                                                    |
| **Resolución**         | 5M (2592×1944) Píxeles                                                   |
| **Chip**               | Sensor CMOS de 1/4"                                                      |
| **Tamaño de Píxel**    | 1.4μm                                                                     |
| **Formato de Salida**  | RAW 10                                                                    |
| **Velocidad de Fotogramas Máxima** | Tamaño completo: 15fps                                        |
| **Apertura**           | F2.8                                                                      |
| **Distancia Focal Equivalente** | 3.46mm                                                           |
| **Campo de Visión**    | 65°                                                                      |
| **Distorsión**         | &lt;1%                                                                      |
| **Estructura de Lente** | 5P                                                                      |

### Interfaz

| **Parámetro**          | **Valor**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **USB**                | USB 2.0 Type-C                                                            |
| **Inalámbrico**        | Wi-Fi 2.4G/5G Bluetooth 4.2/5.0                                          |
| **Botón**              | 1 × Botón de Reinicio, 1 × Botón de Usuario                               |
| **LEDs de Relleno**    | 4 × Luz Blanca de 0.3W                                                    |
| **LED**                | 1 × Indicador de Alimentación, 2 × Indicador Programable de E/S           |
| **Micrófono**          | Micrófono Integrado                                                       |
| **Altavoz**            | Altavoz Externo                                                           |

### Especificaciones del Motor

| **Parámetro**          | **MS3008**               | **MS3506**          |
|------------------------|--------------------------|---------------------|
| **Vueltas**            | 54                       | 60                  |
| **Voltaje Nominal (V)**| 12                       | 12                  |
| **Velocidad Máx (rpm)**| 2000                     | 2100                |
| **Torque Nominal (N·m)**| 0.04                     | 0.05                |
| **Velocidad Nominal (rpm)**| 1160                     | 1250                |
| **Corriente Nominal (A)**| 0.64                     | 0.79                |
| **Potencia Máx (W)**   | 4.6                      | 6.4                 |
| **Polos del Motor**    | 14                       | 14                  |
| **Temperatura de Operación (℃)** | -25~60            | -25~60              |
| **Peso (g)**           | 49                       | 63                  |
| **Voltaje de Entrada del Driver (V)** | 6~16                | 6~16                |
| **Comunicación**       | CAN                      | CAN                 |
| **Frecuencia de Comunicación** | CAN@1Mbps:2KHz      | CAN@1Mbps:2KHz      |
| **Codificador**        | Codificador Magnético de 15 bits  | Codificador Magnético de 15 bits        |
| **Velocidad de Baudios CAN** | 100K、125K、250K、500K、1M   | 100K、125K、250K、500K、1M    |
| **Modo de Control**    | Lazo Abierto(24KHz) / Lazo de Velocidad(4KHz) / Lazo de Posición(2KHz)                | Lazo Abierto(24KHz) / Lazo de Velocidad(4KHz) / Lazo de Posición(2KHz)                |

### Especificaciones del Gimbal

| **Parámetro**          | **Valor**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **Rango de Inclinación**        | 0～180°                                                                    |
| **Rango de Guiñada**          | 0～360°                                                                    |

### Condiciones Ambientales

| **Parámetro**          | **Valor**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **Temperatura de Operación** | -20～50 ℃                                                                 |
| **Humedad de Operación**  | 0～90%                                                                    |

### Mecánico

| **Parámetro**          | **Valor**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **Dimensión (A × Al × P)** | 68×112×71mm                                                              |
| **Carcasa**          | Poliamida (PA) Nylon                                                      |
| **Peso (Neto)**       | 230g                                                                      |

### Otros

| **Parámetro**          | **Valor**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **Garantía**           | 1 año                                                                     |

## Descripción General del Hardware

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Interface.png" /></div>

### Placa Principal-C101

[**Haz clic para descargar el archivo PCBA de 8GB**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_Gimbal_Core_2002w_8GB_v1.zip)

[**Haz clic para descargar el archivo PCBA de 64GB**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_Gimbal_Core_2002w_64GB_v1.zip)

Vista Superior             |  Vista Inferior
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Up.png" /></div>  |  <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Bottom.png" /></div>

#### Diagrama de Bloques

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/C101_block.png" /></div>

### Placa de Sensor-S101

[**Haz clic para descargar el archivo PCBA**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_OV5647_S101_v1.1.zip)

Vista Superior             |  Vista Inferior
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/S1_ov5647_UP.png" /></div> | <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/S1_ov5647_Bottom.png" /></div>

### Placa Base-B401

[**Haz clic para descargar el archivo PCBA**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_Gimbal_B401_v1.zip)

Vista Superior             |  Vista Inferior
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/B401_Top.png" /></div> | <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/B401_Bottom.png" /></div>

#### Diagrama de Bloques

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/B401_block.png" /></div>

### Placa de Fuente de Alimentación

Esta placa de fuente de alimentación proporciona funciones duales de entrega de energía estable y protección contra sobrevoltaje. Soporta entrada de 12V DC para alimentar tanto los motores como los sistemas reCamera.

**Umbrales de Protección contra Sobrevoltaje**:

- Voltaje Máximo de Disparo: 25.66V
- Voltaje de Operación Normal: 25.54V
- Voltaje Mínimo Seguro: 25.4V

[**Haz clic para descargar el archivo PCBA**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_Gimbal_power_supply_board_v1.zip)

#### Diagrama de Bloques

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/power_supply_block.png" /></div>

## Interfaz de Hardware

- [Luz](#jump1)
- [Micrófono y Altavoz](#jump2)
- [WIFI](#jump3)
- [Botón](#jump4)
- [Motor](#jump5)
- [CAN](#jump6)

### <span id="jump1">Luz</span>

Hay 3 indicadores en la recamera, las luces **roja y azul** son indicadores programables, y el indicador **verde** es el indicador de alimentación que no es programable. **Rojo** es el indicador de estado de la CPU y **azul** es el indicador de estado de lectura de la emmc del sistema.

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

### <span id="jump2">Micrófono y Altavoz</span>

La recamera tiene un micrófono y un altavoz. Puedes invocar el micrófono y el altavoz siguiendo el comando. La recamera puede reproducir archivos de audio en formato **wav**.

```bash
sudo arecord -D hw:0,0 -r 16000 -f S16_LE -c 1 -d 5 /home/recamera/test.wav //Record five seconds of audio

sudo aplay -D hw:1,0 /home/recamera/test.wav //Playing audio
```

Los archivos de audio mp3 locales pueden convertirse a archivos wav para reproducción en recamera usando [Convert audio online](https://www.aconvert.com/audio/).
El formato predeterminado del reproductor es: tasa de bits de 16bit; La frecuencia de muestreo es 16,000

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Convert_audio_online.png" /></div>

### <span id="jump3">Wi-Fi</span>

La versión 2002w de reCamera tiene el módulo Wi-Fi en hardware. El Wi-Fi es modo dual AP+STA, que puede usarse para configurar la red del dispositivo o configurar el dispositivo en modo AP.

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

### <span id="jump4">Botón</span>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Interface.png" /></div>

#### Botón de Usuario

El **10 Botón de Usuario** está ubicado en la placa Board-B401 del **reCamera Gimbal**. Si desea restablecer el dispositivo, como cuando olvida la contraseña de su dispositivo, puede mantener presionado el botón de Usuario y luego conectar el dispositivo a la alimentación. Cuando la luz roja del dispositivo permanezca encendida constantemente en lugar de parpadear, suelte el botón de Usuario.

Si desea restaurar el firmware de su dispositivo a una versión específica, visite [control de versión del sistema operativo](https://wiki.seeedstudio.com/es/recamera_os_version_control).

#### Botón de Reinicio

El **11 Botón de Reinicio** está ubicado en la placa Board-B401 del **reCamera Gimbal**. Cuando se presiona el botón, el sistema se reiniciará.

### <span id="jump5">Motor</span>

Hay un script de Gimbal en el reCamera Gimbal que se puede usar para depurar y controlar los motores del Gimbal.
Para ver el script del gimbal en acción, ejecute el siguiente comando:

```bash
gimbal --help
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_script.png" /></div>

`gimbal` es un script de bash, puedes modificar para ver y modificar el script para lograr tus necesidades de desarrollo secundario. La ubicación del script es:

```bash
cd /usr/bin
cat gimbal
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_script_content.png" /></div>

### <span id="jump6">CAN</span>

Usa el comando `ifconfig` para ver la interfaz **can0**:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_command_ifconfig.png" /></div>

Usa el comando `cansend can0 can_id#9C.00.00.00.00.00.00.00` para enviar mensajes can:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_command_cansend.png" /></div>

Usa el comando `candump can0` para recibir mensajes can:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_command_candump.png" /></div>

## Lista de Partes

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_Partlist.png" /></div>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
