---
title: Guía de usuario del firmware de fábrica del Wio-LR2021 Dev Kit
description: 'Guía del firmware de fábrica para el Wio-LR2021 Dev Kit'
keywords:
  - Wio-LR2021
  - ESP32-S3
  - firmware de fábrica
  - consola serie
image: https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/1-100038329-Wio-LR2021-Dev-Kit.webp
slug: /wio_lr2021_dev_kit_factory_firmware_user_guide
sku: 100038329
sidebar_position: 1
last_update:
  date: 11/05/2026
  author: David Du
createdAt: '2026-11-05'
updatedAt: '2026-11-05'
url: https://wiki.seeedstudio.com/es/wio_lr2021_dev_kit_factory_firmware_user_guide/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Guía de usuario del firmware de fábrica del Wio-LR2021 Dev Kit

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/1-100038329-Wio-LR2021-Dev-Kit.webp" style={{width:600, height:'auto'}}/>
</div>

Cada Wio-LR2021 Dev Kit se envía con un firmware de prueba que expone las radios, sensores, pantalla, cámara, ruta de audio y flash de la placa a través de una única consola serie. Esta guía te lleva desde el primer encendido hasta una comprobación funcional completa, e indica qué aspecto tiene un resultado correcto en cada paso.

:::note
El firmware de tu placa es la autoridad para esta página. Escribe `help` para listar los comandos que el build realmente registró; si falta algún comando aquí, tu placa ejecuta una versión diferente.
:::

### Qué proporcionan los comandos del firmware

- **Enlaces Sub-GHz y 2.4 GHz**: `lora_tx` con `lora_rx` en dos placas; el contador del receptor aumenta.
- **Modos de modulación**: `gfsk_tx`, `flrc_rx`, `lr_fhss_tx`; se cuentan los paquetes correctos y los errores de CRC.
- **Potencia de RF**: `lora_cw`; un medidor muestra la portadora.
- **BLE** — `ble -a 1`; un escáner lista `wio-lr2021-*`.
- **Wi-Fi e IP**: `sta_connect`, `ap_set`, `ping`; `got ip:` y contadores de respuestas.
- **GPIO, I²C y raíles**: `gpio_get`, `i2c_scan`, `io_exp_print`; responden `0x21` y `0x3D`.
- **Batería**: `battery_get`; milivoltios y una estimación de carga.
- **Pantalla, cámara, audio**: `oled_test`, `camera_capture`, `audio_slot_play`; patrón, `PASS`, reproducción.
- **Flash**: `flash_info`, `flash_speed`; el código de retorno `0` significa aprobado.

## Preparación

### Paso 1. Colocar las antenas y conectar la placa

Enrosca la antena Sub-GHz en `SUB-1G` y la antena de 2.4 GHz en `LR-2.4G`. Conecta el USB-C con un cable de datos — un cable solo de carga alimenta la placa pero no proporciona puerto serie.

:::caution
Nunca transmitas sin una antena. El PA entrega hasta +22 dBm en Sub-GHz y +12 dBm en 2.4 GHz a una carga desadaptada, lo que puede dañar el LR2021.
:::

### Paso 2. Encontrar el puerto serie

<Tabs groupId="operating-systems">
<TabItem value="win" label="Windows">

Abre **Device Manager** y despliega **Ports (COM & LPT)**. La placa aparece como **USB Serial Device** con un puerto como `COM5`.

</TabItem>
<TabItem value="mac" label="macOS">

```bash
ls /dev/cu.*
```

Busca `/dev/cu.usbmodem*`.

</TabItem>
<TabItem value="linux" label="Linux">

```bash
ls /dev/ttyACM*
```

La placa suele ser `/dev/ttyACM0`. Si el puerto no se abre, añade tu usuario a `dialout`.

</TabItem>
</Tabs>

### Paso 3. Abrir un terminal

| Herramienta | Plataforma | Dónde conseguirla |
| --- | --- | --- |
| PuTTY | Windows | [putty.org](https://www.putty.org/) |
| screen | macOS / Linux | Integrado; ejecuta `screen /dev/cu.usbmodem* 115200` |
| Minicom | macOS / Linux | Instálalo mediante el gestor de paquetes; ejecuta `minicom -D /dev/ttyUSB* -b 115200` |

Todas las herramientas necesitan la misma configuración de línea:

| Ajuste | Valor |
| --- | --- |
| Baud rate | 115200 |
| Bits de datos | 8 |
| Paridad | Ninguna |
| Bits de parada | 1 |
| Control de flujo | Ninguno |

### Paso 4. Confirmar el prompt

Pulsa **Enter**. La placa responde con su prompt:

```bash
cmd>
```

Escribe `help` para listar todos los comandos registrados.

```bash
cmd> help
```

## Inicio rápido

### 1. Listar los comandos

```bash
cmd> help
```

### 2. Leer la batería

```bash
cmd> battery_get
I (737306) bsp_battery: calibration scheme version is Curve Fitting
I (737306) bsp_battery: Calibration Success
I (737386) bsp_battery: VBAT channel=7 raw_max=0 sense=0 mV battery=0 mV
I (737516) bsp_battery: VBAT channel=7 raw_max=2362 sense=2068 mV battery=4136 mV
I (737516) SENSOR_TEST: Battery probe: BAT_ADC_EN=0 -> 0 mV, BAT_ADC_EN=1 -> 4136 mV
I (737516) SENSOR_TEST: Battery voltage: 4136 mV, estimated level: 92%
```

Informa del voltaje de la celda en milivoltios y de una estimación de carga. Sin batería instalada, la lectura sigue la alimentación USB.

### 3. Transmitir un paquete LoRa

:::caution
Coloca la antena Sub-GHz en `SUB-1G` antes de transmitir. Mantén la placa a un metro de otras antenas mientras esté en funcionamiento.
:::

```bash
cmd> lora_tx -f 868000000 -d hello -n 1
I (922806) LR20XX: Power          = 10 dB
I (922806) LR20XX: Frequency      = 868000000 Hz
I (922806) LR20XX: SF             = RAL_LORA_SF7
I (922806) LR20XX: BandWidth      = RAL_LORA_BW_125_KHZ
I (922806) LR20XX: CodingRate     = RAL_LORA_CR_4_5
I (922816) LR20XX: CRC            = 1
I (922816) LR20XX: IQ             = 0
I (922816) LR20XX: SyncWord       = 0x34
I (922816) LR20XX: LDO            = 0
I (922816) LR20XX: Interval       = 0
I (922816) LR20XX: Num            = 1
I (922816) LR20XX: half_power     = 0
I (922816) LR20XX: duty_cycle     = 0
I (922816) LR20XX: lf_slices      = 0
I (922816) LR20XX: is_config_pa   = 0
I (922816) LR20XX: tx len 5, payload: hello
I (922836) LR20XX: Starting LoRa TX #0
I (922876) LR20XX: LoRa tx done

I (923886) LR20XX: End of send!
```

### 4. Recibir paquetes Sub-GHz

```bash
cmd> lora_rx -f 868000000 -s 7 -b 3               
I (47044) LR20XX: Frequency      = 868000000 Hz
I (47044) LR20XX: SF             = RAL_LORA_SF7
I (47044) LR20XX: BandWidth      = RAL_LORA_BW_125_KHZ
I (47044) LR20XX: CodingRate     = RAL_LORA_CR_4_5
I (47044) LR20XX: Header_type    = RAL_LORA_PKT_EXPLICIT
I (47044) LR20XX: CRC            = 1
I (47044) LR20XX: IQ             = 0
I (47044) LR20XX: SyncWord       = 0x34
I (47044) LR20XX: LDO            = 0

W (82904) LR20XX: rx_done 0
W (82904) LR20XX: rx_hdr_err 0
W (82904) LR20XX: rx_crc_err 0

I (82904) LR20XX: End of receive!
```

Ejecuta el comando `lora_rx -f 868000000 -s 7 -b 3` en la placa A, y `lora_tx -f 868000000 -s 7 -b 3 -p 14 -d hello -n 10` en la placa B. El contador de A aumenta con cada paquete y B vuelve tras diez. Detén A con `Ctrl+C` para imprimir los totales. Un contador atascado en cero significa que las placas no coinciden en algún ajuste de radio, o falta una antena. Mantén `-i` en `200` o más, o el receptor registrará líneas `hdr err`.

**Termina la prueba** con `Ctrl+C` en ambas placas, para que ninguna permanezca en modo de recepción.

### 5. Estación Wi-Fi y ping

```bash
cmd> sta_connect <ssid> <pass>
cmd> ping 192.168.1.1 -c 4
```

La unión se ha realizado correctamente cuando aparece una línea que contiene `got ip:`.

### 6. Cámara a través del hotspot

```bash
cmd> camera_start
cmd> camera_http_start
```

Únete a `wio-lr2021-camera` con la contraseña `12345678` y abre `http://192.168.4.1`. Los fotogramas en vivo prueban la cámara y la pila Wi-Fi a la vez.

**Termina la prueba** con `camera_http_stop` y `camera_stop`, luego vuelve a unirte a tu red normal.

### 7. Dibujar un patrón en la pantalla

```bash
cmd> oled_test -m text
I (2177034) bsp_oled_ssd13xx: OLED initialized (128x64, addr 0x3d)
I (2177064) OLED_TEST: OLED test pattern displayed: text
```

```bash
cmd> oled_test -m checker
I (2262024) OLED_TEST: OLED test pattern displayed: checker
```

```bash
cmd> oled_test -m clear
I (2316714) OLED_TEST: OLED test pattern displayed: clear
```

### 8. Grabar y reproducir audio

```bash
audio_slot_record -d 5000
audio_slot_play
```

### 9. Identificar el chip de flash

```bash
cmd> flash_info
I (2491984) FLASH_TEST: ==== SPI flash identification ====
I (2491984) FLASH_TEST:  JEDEC ID        : 0xEF4018
I (2491984) FLASH_TEST:  Manufacturer    : 0xEF (Winbond)
I (2491984) FLASH_TEST:  Memory type     : 0x40
I (2491984) FLASH_TEST:  Capacity (ID)   : 0x18 => 16777216 bytes (16.00 MB)
I (2491984) FLASH_TEST:  Physical size   : 16777216 bytes (16.00 MB)
I (2491984) FLASH_TEST:  Configured size : 16777216 bytes (16.00 MB)
I (2491984) FLASH_TEST:  Partition "flashtest" : addr=0x00C10000 size=1048576 (1.00 MB) subtype=0x06
I (2491984) FLASH_TEST: ==== Tail boundary authentication ====
I (2491994) FLASH_TEST:  head sector off=0x00000000, tail sector off=0x000FF000
I (2492114) FLASH_TEST:  head verify : PASS
I (2492124) FLASH_TEST:  tail verify : PASS
I (2492124) FLASH_TEST:  boundary auth: PASS
```

## Comportamiento y límites

| Comportamiento | Comandos | Qué ocurre | Cómo salir |
| --- | --- | --- | --- |
| Recepción continua | `lora_rx`, `flrc_rx` | Cuenta paquetes, sin prompt | `Ctrl+C` |
| Transmisión infinita | `lora_tx -n 0`, `flrc_tx -c 0` | Envía sin detenerse | `Ctrl+C` |
| Onda continua | `lora_cw`, `lora_cw_pa` | Portadora no modulada, sin payload | `lora_cw_stop` |
| Tarea en segundo plano | `flash_endurance -a start` | Devuelve de inmediato, sigue borrando | `flash_endurance -a stop` |
| Duración del hotspot | `ap_set`, `camera_http_start`, `audio_slot_send` | La radio permanece activa hasta que se cierre | `wifi stop`, `camera_http_stop`, `audio_slot_stop` |

- Un comando es el dueño de la consola: durante un bucle de recepción o transmisión el firmware ignora la entrada.
- La salida es texto plano; activa el registro del terminal para tener un registro de la prueba.
- Algunos terminales asignan `Ctrl+C` a copiar; confirma que el tuyo envía la interrupción.

## Seguridad y conformidad

**1. Una antena por banda.** El conector SMA y el pad U.FL de una banda comparten una red de RF a través de un enlace de 0 Ω. Montar ambas deja ninguna antena adaptada.

**2. Nunca dejes una portadora funcionando.** `lora_cw` y `lora_cw_pa` transmiten una portadora continua sin payload. Deténlas con `lora_cw_stop` antes de mover la placa.

**3. Revisa tu plan de bandas.** La salida Sub-GHz alcanza +22 dBm y 2.4 GHz alcanza +12 dBm. 868 MHz sirve a Europa, 902 ~ 928 MHz a las Américas. Confirma tus límites nacionales y usa una caja apantallada para las pruebas de certificación.

**4. Batería y solar.** Usa una celda Li-ion de 3.7 V en `BAT-3.7V`, respetando la polaridad serigrafiada. El cargador CN3165 entrega unos 495 mA y no tiene entrada de termistor, así que no cargues sin supervisión.

**5. Credenciales por defecto.** Los hotspots de cámara y audio se envían con la contraseña `12345678`, y la página de la cámara no tiene inicio de sesión. Cambia la contraseña y cierra el hotspot en un banco compartido.

**6. La resistencia de la flash desgasta el chip.** `flash_endurance` borra sectores reales de la partición `flashtest`. Ejecútalo solo en unidades de muestra, nunca en una placa que aún necesites.

## Recurso

- [**Referencia de comandos del firmware de fábrica**](/es/wio_lr2021_dev_kit_command_reference)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte distintos tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
