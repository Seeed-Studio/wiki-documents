---
title: Primeros pasos con el Wio-LR2021 Dev Kit
description: 'Comienza con el Wio-LR2021 Dev Kit'
keywords:
  - Wio-LR2021
  - Semtech LR2021
  - ESP32-S3
  - LoRa
  - FLRC
  - Dev Kit
image: https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/1-100038329-Wio-LR2021-Dev-Kit.webp
slug: /wio_lr2021_dev_kit_getting_started
sku: 100038329
sidebar_position: 1
last_update:
  date: 11/02/2026
  author: David Du
createdAt: '2026-11-02'
updatedAt: '2026-11-02'
url: https://wiki.seeedstudio.com/es/wio_lr2021_dev_kit_getting_started/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Primeros pasos con el Wio-LR2021 Dev Kit

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/1-100038329-Wio-LR2021-Dev-Kit.webp" style={{width:600, height:'auto'}}/>
</div>

<div className="table-center">
  <table align="center">
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Wio-LR2021-Dev-Kit-p-7040.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span>
                <font color="#FFFFFF" size="4">
                  Consigue uno ahora 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
  </table>
</div>

## Introducción

El **Wio-LR2021 Dev Kit** es un kit de desarrollo LoRa de doble banda que combina el transceptor LR2021 de Semtech con un **ESP32-S3**. El módulo de radio cubre desde 150 ~ 960 MHz y la banda de 2400 ~ 2500 MHz en un solo encapsulado, por lo que una sola placa puede cambiar entre enlaces de largo alcance y canales globales mediante software. FLRC añade ráfagas de hasta 2.6 Mbps para imágenes y audio, y el ESP32-S3R8, con 8 MB de PSRAM y 16 MB de flash, puede evaluar un fotograma de cámara antes de que llegue al aire.

Un Media HAT desmontable incorpora una **cámara GC2145 de 2 MP**, un **micrófono MEMS**, un **códec ES8311** y un **amplificador NS4150B** con un conector para altavoz. En la placa principal también tienes un OLED de 128 × 64, un **expansor PCA9535** que conmuta cuatro raíles de alimentación periféricos, una entrada para Li-ion de 3.7 V y una entrada solar de 5 V detrás de un cargador CN3165, un puerto Grove y dos cabeceras de 16 pines.

El kit se envía con un firmware de fábrica, de modo que puedes comprobar la radio, la cámara, la pantalla, la ruta de audio y la batería desde un terminal antes de escribir cualquier firmware.

### Especificaciones

<table>
  <thead>
    <tr>
      <th>Parámetro</th>
      <th>Valor</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>MCU</td>
      <td>**ESP32-S3R8**, doble núcleo Xtensa LX7 hasta 240 MHz</td>
    </tr>
    <tr>
      <td>Transceptor RF</td>
      <td>Semtech LR2021, integrado en el **módulo Wio-LR2021**</td>
    </tr>
    <tr>
      <td>Bandas de frecuencia</td>
      <td>150 ~ 960 MHz y 2400 ~ 2500 MHz</td>
    </tr>
    <tr>
      <td>Modulación</td>
      <td>LoRa (SF5 ~ SF12), (G)FSK, FLRC, LR-FHSS</td>
    </tr>
    <tr>
      <td>Potencia de transmisión</td>
      <td>hasta `+22` dBm (sub-GHz), hasta `+12` dBm (2.4 GHz)</td>
    </tr>
    <tr>
      <td>Wi-Fi y Bluetooth</td>
      <td>802.11 b/g/n 2.4 GHz, Bluetooth 5 LE</td>
    </tr>
    <tr>
      <td>Conectores de antena</td>
      <td>2 × SMA (sub-GHz, 2.4 GHz) más 3 × U.FL</td>
    </tr>
    <tr>
      <td>Interfaz Type-C</td>
      <td>USB-C con USB-Serial-JTAG nativo, sin chip puente</td>
    </tr>
    <tr>
      <td>Interfaz Grove</td>
      <td>Puerto Grove más 2 × cabeceras de 16 pines de 2.54 mm</td>
    </tr>
    <tr>
      <td>Botones y LEDs</td>
      <td>Botones USER, BOOT y RESET; 1 LED de alimentación; 1 LED de usuario</td>
    </tr>
    <tr>
      <td>Expansor de E/S</td>
      <td>**PCA9535**, 16 E/S, dirección I2C: `0x21`</td>
    </tr>
    <tr>
      <td>OLED</td>
      <td>128 × 64 monocromo, 0.96 pulgadas, controlador **CH1116**, dirección I2C: `0x3D`</td>
    </tr>
    <tr>
      <td>Cámara (HAT)</td>
      <td>**GC2145**, 2 MP, interfaz DVP de 8 bits</td>
    </tr>
    <tr>
      <td>Audio (HAT)</td>
      <td>Códec **ES8311**, amplificador **NS4150B**, micrófono MEMS, conector para altavoz</td>
    </tr>
    <tr>
      <td>Interfaz de alimentación</td>
      <td>USB-C 5 V, solar 5 V (JST), Li-ion 3.7 V (JST)</td>
    </tr>
    <tr>
      <td>IC de carga</td>
      <td>**CN3165**, corriente de carga de 495 mA</td>
    </tr>
    <tr>
      <td>Reguladores</td>
      <td>Convertidor buck **TPS62A03** (sistema de 3.3 V), LDO **SGM2059** (raíl de radio)</td>
    </tr>
    <tr>
      <td>Dimensiones</td>
      <td>Placa principal de 55 × 38.5 mm, Media HAT de 55 × 38.5 mm</td>
    </tr>
    <tr>
      <td>Agujero de montaje</td>
      <td>3 × orificios M2</td>
    </tr>
  </tbody>
</table>

### Características

- **Radio de doble banda:** Sub-GHz y 2.4 GHz comparten un solo módulo, por lo que un único diseño cubre bandas en todo el mundo.
- **Ráfagas rápidas:** FLRC transporta una imagen a hasta 2.6 Mbps y luego vuelve a LoRa cuando importa el alcance.
- **Visión en el dispositivo:** 8 MB de PSRAM almacenan en búfer los fotogramas de la cámara, de modo que la radio envía una conclusión en lugar de píxeles.
- **Media HAT desmontable:** Cámara, micrófono, códec y amplificador montados sobre dos conectores de 16 pines.
- **Alimentación de campo:** Una entrada solar de 5 V y un conector Li-ion de 3.7 V mantienen un nodo funcionando fuera de la red.
- **Raíles conmutables:** El PCA9535 conmuta por software los raíles de la cámara, audio, OLED y Grove.
- **Pantalla integrada:** Un OLED de 128 × 64 en el bus I2C compartido muestra lecturas o el estado del enlace sin hardware adicional.
- **USB nativo:** USB-Serial-JTAG no necesita chip puente, por lo que la programación y la consola comparten un solo cable.

## Descripción general del hardware

El kit tiene dos placas que comparten un formato de 55 × 38.5 mm. La placa principal incorpora la radio, la pantalla y la ruta de alimentación; el Media HAT añade la cámara y la ruta de audio.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/Wio-LR2021_Dev_Kit_hardware.webp" style={{width:1000, height:'auto'}}/>
</div>

### Parte frontal de la placa principal

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/main_board_front.webp" style={{width:1000, height:'auto'}}/>
</div>

1. **ESP32-S3R8** con 16 MB de flash SPI NOR
2. **Módulo Wio-LR2021** que incorpora el transceptor LR2021, con un TCXO de 32 MHz integrado
3. **Conector SMA sub-GHz** para el puerto de 150 ~ 960 MHz
4. **Conector SMA de 2.4 GHz** para el puerto de 2400 ~ 2500 MHz
5. **Tres pads U.FL:** ESP32-S3 2.4 GHz, LR2021 2.4 GHz y LR2021 sub-GHz
6. **Puerto USB-C** con USB-Serial-JTAG nativo
7. **Entrada solar** en un conector JST de 2 pines, etiquetado `Solar-5V`
8. **Entrada de batería** en un conector JST de 2 pines, etiquetado `BAT-3.7V`
9. **Dos cabeceras de 16 pines de 2.54 mm**, una a lo largo de cada borde largo

:::note
Los conectores SMA y los pads U.FL están conectados a las mismas dos redes RF mediante enlaces de 0 Ω. De forma predeterminada, los **conectores SMA** están habilitados. Para usar la interfaz U.FL en su lugar, vuelve a soldar los enlaces de 0 Ω a los pads alternativos correspondientes.
:::

### Parte trasera de la placa principal

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/main_board_back.webp" style={{width:1000, height:'auto'}}/>
</div>

1. **OLED de 128 × 64**, controlado por I2C en la dirección `0x3D`
2. **Botón USER** en `GPIO46`, con una resistencia pull-up de 10 kΩ y un condensador de rebote de 100 nF
3. **Botón BOOT** en `GPIO0`, fuerza al chip al modo de descarga si está habilitado al reiniciar
4. **Botón RESET**, cableado al pin de habilitación del ESP32-S3 (activo en nivel BAJO)
5. **Conector Grove**, un zócalo estándar de 4 pines y 2.0 mm
6. **LED de usuario**, controlado por el `P06` del PCA9535 (activo en nivel BAJO)
7. **LED de alimentación**, encendido siempre que la placa tenga una alimentación activa

:::caution
El botón USER se encuentra en `GPIO46`, que es un pin de configuración (strapping) en el ESP32-S3. Si se mantiene pulsado el botón mientras se suelta RESET, el chip muestrea un nivel BAJO en ese pin de configuración y entra en modo de descarga en lugar de arrancar. Suelta el botón antes de reiniciar.
:::

### Media HAT

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/media_hat_front.webp" style={{width:1000, height:'auto'}}/>
</div>

1. **Cámara GC2145**, 2 MP, conectada mediante un bus `8-bit DVP` en un FPC de 24 pines
2. **Micrófono MEMS** con salida analógica, cableado al códec
3. **Códec ES8311**, audio I2S de entrada y salida, configurado por I2C
4. **Amplificador NS4150B Clase D** que acciona el conector de altavoz etiquetado `SPK`

## Mapa de pines

La placa principal expone dos **cabeceras de 16 pines** con paso de 2.54 mm. El Media HAT expone dos **zócalos de 14 pines** con paso de 2.54 mm que pueden conectarse a ambas cabeceras de la placa principal.

:::caution
Dado que la **placa principal** utiliza un `16‑pin header` mientras que la placa de expansión **Media Hat** utiliza solo un `14‑pin socket`, se DEBE prestar mucha atención a la orientación durante la instalación. Asegúrate de que los pines estén correctamente **ALINEADOS**. Una instalación incorrecta puede causar un mal funcionamiento y podría provocar daños irreversibles en el dispositivo.
:::

<br />

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/pinout_1.webp" style={{width:1000, height:'auto'}}/>
</div>


| Índice | Función | Pin ESP32-S3 | Descripción |
| --- | --- | --- | --- |
| 1 | VSYS | — | Raíl del sistema, 5 V desde USB o solar, 3.0 ~ 4.2 V en batería |
| 2 | GND | — | Tierra |
| 3 | IIC0_SCL | GPIO48 | Bus I2C compartido: OLED, PCA9535, códec del HAT |
| 4 | IIC0_SDA | GPIO47 | Bus I2C compartido: OLED, PCA9535, códec del HAT |
| 5 | CODEC_I2S0_MCLK | GPIO41 | Reloj de audio para el ES8311 |
| 6 | CODEC_I2S0_LRCK | GPIO42 | Selección de canal izquierdo y derecho |
| 7 | GROVE_DAT_2 | GPIO43 | Bit de datos Grove 2, UART0_TXD |
| 8 | GROVE_DAT_1 | GPIO44 | Bit de datos Grove 1, UART0_RXD |
| 9 | CODEC_I2S0_SCLK | GPIO9 | Reloj de bits de audio |
| 10 | CODEC_I2S0_DSDIN | GPIO1 | Datos de reproducción hacia el códec |
| 11 | CODEC_I2S0_SDOUT | GPIO2 | Datos grabados desde el códec |
| 12 | EXP_PWR_AUDIO_EN | PCA9535 `P02` | Habilita el raíl de audio en el HAT |
| 13 | EXP_CAM_RESET | PCA9535 `P07` | Pin de reinicio de la cámara |
| 14 | EXP_PWR_CAM_EN | PCA9535 `P01` | Habilita el raíl de la cámara en el HAT |
| 15 | EXP_GPIO_P16 | PCA9535 `P16` | E/S libre a través del expansor |
| 16 | EXP_GPIO_P17 | PCA9535 `P17` | E/S libre a través del expansor |

<br />

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/pinout_2.webp" style={{width:1000, height:'auto'}}/>
</div>

| Índice | Función | Pin ESP32-S3 | Descripción |
| --- | --- | --- | --- |
| 1 | VCC_3V3 | — | Raíl del sistema de 3.3 V |
| 2 | GND | — | Tierra |
| 3 | DVP_VSYNC | GPIO38 | Sincronización vertical de la cámara, `VSYNC` en el HAT |
| 4 | DVP_HSYNC | GPIO39 | Sincronización horizontal de la cámara, `HSYNC` en el HAT |
| 5 | DVP_D7 | GPIO21 | Bit de datos de cámara 7 |
| 6 | DVP_D6 | GPIO18 | Bit de datos de cámara 6 |
| 7 | DVP_D5 | GPIO17 | Bit de datos de cámara 5 |
| 8 | DVP_D4 | GPIO16 | Bit de datos de cámara 4 |
| 9 | DVP_D0 | GPIO15 | Bit de datos de cámara 0 |
| 10 | DVP_D3 | GPIO14 | Bit de datos de cámara 3 |
| 11 | DVP_PCLK | GPIO13 | Reloj de píxeles de la cámara |
| 12 | DVP_D1 | GPIO12 | Bit de datos de cámara 1 |
| 13 | DVP_D2 | GPIO11 | Bit de datos de cámara 2 |
| 14 | DVP_XCLK | GPIO10 | Reloj maestro de la cámara, generado por el ESP32-S3 |
| 15 | EXP_GPIO_P14 | PCA9535 `P14` | E/S libre a través del expansor |
| 16 | EXP_GPIO_P15 | PCA9535 `P15` | E/S libre a través del expansor |

<br />

### Expansor de E/S

El **PCA9535** responde en la dirección I2C `0x21`, y su línea de interrupción va a `GPIO3`. Sus 16 pines se inician como entradas al encender, por lo que cada riel y reinicio que se indica a continuación permanece inactivo hasta que el firmware lo active.

| Puerto | Función | Notas |
| --- | --- | --- |
| P00 | — | No conectado |
| P01 | EXP_PWR_CAM_EN | Habilitación del riel de la cámara |
| P02 | EXP_PWR_AUDIO_EN | Habilitación del riel de audio |
| P03 | EXP_PWR_OLED_EN | Habilitación del riel OLED |
| P04 | EXP_PWR_GROVE_EN | Habilitación del riel Grove |
| P05 | EXP_OLED_RST | Reinicio de la OLED |
| P06 | EXP_User_LED | LED de usuario (activo en LOW) |
| P07 | EXP_CAM_RESET | Reinicio de la cámara |
| P10 | EXP_BAT_ADC_CTR | Conecta el divisor de batería a `GPIO8` |
| P11 | EXP_Sig_CHG_Done | Indicador de carga completada desde el CN3165 |
| P12 | EXP_Sig_CHGING | Indicador de carga en progreso desde el CN3165 |
| P13 | EXP_LoRa_RST | Reinicio del Wio-LR2021 |
| P14 | EXP_GPIO_P14 | PCA9535 `P14` |
| P15 | EXP_GPIO_P15 | PCA9535 `P15` |
| P16 | EXP_GPIO_P16 | PCA9535 `P16` |
| P17 | EXP_GPIO_P17 | PCA9535 `P17` |

<br />

### Fuente de alimentación

| Riel | Rango | Notas |
| --- | --- | --- |
| VSYS | 3.0 ~ 5.5 V | Sigue al USB o al panel solar cuando están presentes, de lo contrario a la batería |
| VCC_3V3 | 3.3 V | Salida del convertidor buck, hasta el límite de corriente del regulador |
| VCC_Grove | 3.3 V | Conmutado por `P04`, protegido por un fusible de 350 mA |
| Solar+ | 5.0 V nominal | Bloqueo inverso y protección contra sobretensión |
| BAT+ | 3.0 ~ 4.2 V | Celda de ion-litio, cargada por el CN3165 |

:::caution
`VSYS` no es un riel fijo de 3.3 V. Con USB o solar conectado se sitúa cerca de 5.0 V y dañará un periférico solo de 3.3 V.
:::

<br />

### Pines de configuración (strapping)

El ESP32-S3 muestrea cuatro pines al reiniciar: `GPIO0`, `GPIO3`, `GPIO45` y `GPIO46`. Dos de ellos están enrutados hacia el exterior en la placa principal.

| Pin | Llega a | Descripción |
| --- | --- | --- |
| GPIO0 | Botón BOOT | Mantenido en **LOW** junto con el botón USER, el chip entra en modo de descarga serie en lugar de arrancar el firmware |
| GPIO46 | Botón USER | Mantenido en **LOW** junto con el botón BOOT, el chip entra en modo de descarga serie en lugar de arrancar el firmware |
| GPIO3 | No expuesto | usado como pin `INTERRUPT` del PCA9535 |
| GPIO45 | No expuesto | usado como pin `IRQ` del Wio-LR2021 |

## Primeros pasos

### Preparación de hardware

#### Paso 1 — Colocar las antenas

Enrosca la antena Sub-GHz en el conector marcado `SUB-1G` y la antena de 2.4 GHz en el conector marcado `LR-2.4G`. Aprieta solo con la mano. Si en su lugar utilizas antenas U.FL, vuelve a soldar los puentes de 0 Ω a las almohadillas correspondientes y deja los conectores SMA vacíos.

:::caution
Nunca transmitas sin una antena. El LR2021 no tiene protección contra un puerto abierto, y una onda continua o una transmisión prolongada hacia una carga abierta puede destruir el amplificador de potencia.
:::

#### Paso 2 — Instalar el Media HAT (opcional)

Alinea los dos zócalos de 14 pines del HAT con los dos encabezados de 16 pines de la placa principal y presiona uniformemente en ambos extremos. El HAT toma su alimentación de la placa principal, por lo que no se necesita ningún cable adicional. Retíralo de la misma manera, levantando ambos extremos a la vez.

:::note
La parte posterior de la placa de expansión está marcada con las posiciones de los correspondientes puertos USB Type‑C en la placa base, lo que puede utilizarse para determinar la orientación correcta de instalación. A continuación, localiza los pines correspondientes según la serigrafía de los pines en el PCB.
:::

Los zócalos se encuentran en el Media HAT, y la serigrafía junto a cada uno imprime el número de pin del ESP32-S3, por lo que puedes comprobar la orientación sin un diagrama.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/media_hat_back.webp" style={{width:1000, height:'auto'}}/>
</div>

#### Paso 3 — Elegir una fuente de alimentación

Cualquiera de las tres entradas encenderá la placa: USB-C a 5 V, un panel solar de 5 V en el conector JST `Solar-5V`, o una celda de ion-litio de 3.7 V en el conector `BAT-3.7V`. USB-C es la opción adecuada para el primer arranque, porque también transporta la consola serie.

## Recursos

- 📄 [Hoja de datos del ESP32-S3](https://documentation.espressif.com/esp32-s3_datasheet_en.pdf)

- 📄 [Hoja de datos del módulo Wio-LR2021](https://files.seeedstudio.com/products/100058045/Wio-LR2021%20Module%20Datasheet.pdf)

- 📄 [Esquemático de la placa principal del Wio-LR2021 Dev Kit](https://files.seeedstudio.com/products/100038329/doc/Wio-LR2021_Dev_Kit_Schematic.pdf)

- 📄 [Esquemático del Media HAT del Wio-LR2021 Dev Kit](https://files.seeedstudio.com/products/100038329/doc/Wio-LR2021_Dev_Kit_Media_HAT_Schematic.pdf)

- 📄 [Modelo 3D de la placa principal del Wio-LR2021 Dev Kit](https://files.seeedstudio.com/products/100038329/doc/Wio-LR2021_Dev_Kit_Main_Board.step)

- 📄 [Modelo 3D del Media HAT del Wio-LR2021 Dev Kit](https://files.seeedstudio.com/products/100038329/doc/Wio-LR2021_Dev_Kit_Media_HAT.step)

- 🗃️ [Documentación de componentes de hardware](https://files.seeedstudio.com/products/100038329/doc/Hardware_Component_Documentation.zip)

- 📄 [Diagrama de pinout](https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/pinout_diagram.webp)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>