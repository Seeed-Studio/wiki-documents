---
title: Primeros pasos con XIAO nRF54LM20A Sense
description: ''
keywords:
  - xiao
  - nrf54lm20a
  - pin_multiplexing
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/Seeed-Studio-XIAO-nRF54LM20A-Sense.webp
slug: /xiao_nrf54lm20a_getting_started
sku: 100018440
last_update:
  date: 05/13/2026
  author: Zeller
createdAt: '2025-05-13'
updatedAt: '2026-06-30'
url: https://wiki.seeedstudio.com/es/xiao_nrf54lm20a_getting_started/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/get_start_1.jpg" style={{width:600, height:'auto'}}/></div>

<div className="table-center">
  <table align="center">
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html"
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

Seeed Studio XIAO nRF54LM20A Sense es una placa de desarrollo inalámbrica compacta y de ultra bajo consumo basada en el SoC nRF54LM20A de Nordic Semiconductor. Combina un procesador Arm Cortex-M33 de 128 MHz, 512 KB de RAM, 2 MB de NVM integrada, conectividad inalámbrica multiprotocolo de 2,4 GHz, IMU integrada, micrófono digital, 8 MB de flash externa, conector de antena IPEX y PMIC nPM1300 para aplicaciones avanzadas de IoT alimentadas por batería, wearables, sensado inteligente y Edge AI.

### Especificaciones

<table>
  <thead>
    <tr>
      <th>Nombre del producto</th>
      <th>Seeed Studio XIAO nRF54LM20A</th>
      <th>Seeed Studio XIAO nRF54LM20A Sense</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Procesador</strong></td>
      <td colspan="2">Arm® Cortex®-M33 128 MHz &amp; coprocesador RISC-V 128 MHz</td>
    </tr>
    <tr>
      <td><strong>RAM</strong></td>
      <td colspan="2">512KB</td>
    </tr>
    <tr>
      <td><strong>Flash</strong></td>
      <td colspan="2">2 MB de memoria no volátil (NVM)</td>
    </tr>
    <tr>
      <td><strong>Flash externa</strong></td>
      <td colspan="2">8MB de flash externa integrada</td>
    </tr>
    <tr>
      <td><strong>PMIC / Batería</strong></td>
      <td colspan="2">PMIC nPM1300 para regulación de energía y carga de batería</td>
    </tr>
    <tr>
      <td><strong>Interfaz</strong></td>
      <td colspan="2">
        28x Pin GPIO<br/>
        9x Pin analógico<br/>
        1x I2C<br/>
        1x UART<br/>
        1x SPI<br/>
        1x NFC<br/>
        1x SHPHLD
      </td>
    </tr>
    <tr>
      <td><strong>Integrado en placa</strong></td>
      <td>
        1x LED de usuario (R/G/B 3 colores)<br/>
        1x LED de carga (indicador de carga de batería)<br/>
        1x Botón de reinicio<br/>
        1x Botón de usuario<br/>
        1x Conector IPEX4 (para antena externa)
      </td>
      <td>
        1x LED de usuario (R/G/B 3 colores)<br/>
        1x LED de carga (indicador de carga de batería)<br/>
        1x Botón de reinicio<br/>
        1x Botón de usuario<br/>
        1x Conector IPEX4 (para antena externa)<br/>
        1x IMU de 6 ejes<br/>
        1x Micrófono PDM
      </td>
    </tr>
    <tr>
      <td><strong>Conectividad inalámbrica</strong></td>
      <td colspan="2">
        Bluetooth LE 6.0 (incluye Channel Sounding)<br/>
        Bluetooth Mesh<br/>
        NFC<br/>
        Thread<br/>
        Zigbee<br/>
        Matter<br/>
        Amazon Sidewalk<br/>
        Protocolos propietarios de 2,4 GHz
      </td>
    </tr>
    <tr>
      <td><strong>Entrada de alimentación</strong></td>
      <td colspan="2">
        Type-C: 5V<br/>
        Batería: 3.7V
      </td>
    </tr>
    <tr>
      <td><strong>Modo de bajo consumo (3.7V@2A)</strong></td>
      <td>/</td>
      <td>
        Light-Sleep: ~9.96µA<br/>
        Deep-Sleep (System OFF): ~4.76µA<br/>
        Deep-Sleep (System OFF, GRTC wake-up): ~4.92µA<br/>
        Ship-Mode: 0.33µA
      </td>
    </tr>
    <tr>
      <td><strong>Compatibilidad de software</strong></td>
      <td colspan="2">
        Nordic nRF Connect SDK (basado en Zephyr RTOS)<br/>
        PlatformIO (basado en Zephyr RTOS)
      </td>
    </tr>
    <tr>
      <td><strong>Temperatura de trabajo</strong></td>
      <td colspan="2">-20°C a 70°C</td>
    </tr>
    <tr>
      <td><strong>Dimensiones</strong></td>
      <td colspan="2">21 x 17.8mm</td>
    </tr>
  </tbody>
</table>

### Características

- **SoC potente con conectividad y seguridad avanzadas**

  Seeed Studio XIAO nRF54LM20A Sense es una placa de desarrollo inalámbrica compacta y de ultra bajo consumo impulsada por el SoC nRF54LM20A de Nordic Semiconductor. Incorpora un procesador Arm Cortex-M33 de 128 MHz, 512 KB de RAM, 2 MB de NVM integrada, un coprocesador RISC-V de 128 MHz, conectividad inalámbrica multiprotocolo de 2,4 GHz, IMU integrada, micrófono digital, 8MB de flash externa, conector de antena IPEX y PMIC Nordic nPM1300 para una gestión de energía eficiente. Con compatibilidad con Bluetooth LE, Bluetooth Channel Sounding, Bluetooth Mesh, Thread, Zigbee, Matter y protocolos propietarios de 2,4 GHz de hasta 4 Mbps, esta placa está diseñada para productos conectados de próxima generación. Los sensores de movimiento y audio integrados la hacen ideal para wearables, sensado inteligente, TinyML, reconocimiento de gestos, dispositivos activados por voz y aplicaciones IoT alimentadas por batería.

- **Eficiencia de ultra bajo consumo**

  Basada en Nordic nRF54LM20A y el PMIC nPM1300, XIAO nRF54LM20A Sense alcanza una corriente de deep sleep medida de solo 4.76 µA bajo alimentación BAT. Combinada con el PMIC nPM1300 y su corriente BAT en Ship Mode de 0.33 µA, en operación inalámbrica activa registra una corriente media de 3.87 mA con una entrada de batería simulada de 3.7 V y la potencia de transmisión configurada en +8 dBm; la placa es ideal para aplicaciones de sensado alimentadas por batería de larga duración, wearables y dispositivos IoT siempre activos.

- **Experiencia de desarrollo simplificada**

  La compatibilidad total con Nordic nRF Connect SDK y PlatformIO (Zephyr) permite flujos de trabajo de desarrollo embebido eficientes. (Nota: Arduino IDE actualmente no es compatible)

## Descripción general del hardware

<Tabs>
<TabItem value="XIAO nRF54LM20A" label="XIAO nRF54LM20A" default>

### Parte frontal de XIAO nRF54LM20A

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/XIAO_front.png" style={{width:800, height:'auto'}}/></div>

### Parte trasera de XIAO nRF54LM20A

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/XIAO_2.png" style={{width:800, height:'auto'}}/></div>

</TabItem>
<TabItem value="XIAO nRF54LM20A Sense" label="XIAO nRF54LM20A Sense">

### Parte frontal de XIAO nRF54LM20A Sense

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/4_pin.png" style={{width:800, height:'auto'}}/></div>

### Parte trasera de XIAO nRF54LM20A Sense

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/5_pin.png" style={{width:800, height:'auto'}}/></div>

</TabItem>
</Tabs>

## **Mapa de pines**

| Pin XIAO       | Función        | Pin del chip                       | Descripción                                                                 |
| :------------: | :------------: | :-------------------------------: | :-------------------------------------------------------------------------- |
| **Pines de alimentación** |                |                                   |                                                                             |
| VBUS           | VBUS           | -                                 | Entrada/Salida de alimentación de 5V                                       |
| GND            | GND            | -                                 | Tierra                                                                      |
| 3V3            | 3V3-OUT        | -                                 | Salida de alimentación de 3.3V                                             |
| BAT+           | BAT+           | -                                 | Entrada de batería (monitorizada por nPM1300 vía I²C)                      |
| BAT-           | BAT-           | -                                 | Terminal negativo de la batería                                            |
| SHPHLD         | SHPHLD         | -                                 | Control de modo Ship/Hibernate del PMIC (estado de envío de ultra bajo consumo) |
| **Pines de sistema y control** |        |                                   |                                                                             |
| RESET          | RESET          | -                                 | Reinicio de la placa                                                       |
| SWCLK          | SWCLK          | nRF54LM20A SWCLK / SAMD11 SWCLK   | Reloj de cable serie (para nRF54 y SAMD11)                                 |
| SWDIO          | SWDIO          | nRF54LM20A SWDIO / SAMD11 SWDIO   | Datos de cable serie (para nRF54 y SAMD11)                                 |
| SAMD11_RESET   | RESET          | SAMD11 RESET                      | Reinicio del coprocesador SAMD11                                           |
| **Pines de usuario y LED** |            |                                   |                                                                             |
| -              | USER_BUTTON    | P0.09                             | Entrada del botón de usuario                                               |
| -              | RGB-B          | P1.23                             | Canal azul del LED RGB integrado                                           |
| -              | RGB-G          | P1.24                             | Canal verde del LED RGB integrado                                          |
| -              | RGB-R          | P1.22                             | Canal rojo del LED RGB integrado                                           |
| **Pines de entrada analógica (ADC)** |      |                                   |                                                                             |
| A0             | AIN0           | P1.00                             | Entrada analógica 0 / GPIO                                                 |
| A1             | AIN1           | P1.31                             | Entrada analógica 1 / GPIO                                                 |
| A2             | AIN2           | P1.30                             | Entrada analógica 2 / GPIO                                                 |
| A3             | AIN3           | P1.29                             | Entrada analógica 3 / GPIO                                                 |
| A7             | AIN7           | P1.03                             | Entrada analógica 7 / GPIO                                                 |
| **Pines I2C**  |                |                                   |                                                                             |
| SDA            | I2C_SDA        | P1.03                             | Línea de datos I2C (IMU y periféricos)                                     |
| SCL            | I2C_SCL        | P1.07                             | Línea de reloj I2C (IMU y periféricos)                                     |
| -              | BAT_SDA        | P1.18                             | SDA I2C del monitor de batería (nPM1300)                                   |
| -              | BAT_SCL        | P1.17                             | SCL I2C del monitor de batería (nPM1300)                                   |
| **Pines UART** |                |                                   |                                                                             |
| TX             | UART_TX        | P1.08                             | Transmisión UART                                                           |
| RX             | UART_RX        | P1.09                             | Recepción UART                                                             |
| **Pines SPI**  |                |                                   |                                                                             |
| MOSI           | SPI_MOSI       | P1.06                             | SPI Master Out Slave In                                                    |
| MISO           | SPI_MISO       | P1.05                             | SPI Master In Slave Out                                                    |
| SCK            | SPI_SCK        | P1.04                             | Reloj serie SPI                                                            |
| **Pines de periféricos integrados** |      |                                   |                                                                             |
| -              | MIC_DAT        | P1.14                             | Línea de datos del micrófono                                               |
| -              | MIC_CLK        | P1.13                             | Línea de reloj del micrófono                                               |
| -              | IMU_SDA        | P0.08                             | SDA I2C de la IMU (IMU integrada)                                          |
| -              | IMU_SCL        | P0.07                             | SCL I2C de la IMU (IMU integrada)                                          |
| -              | IMU_CS         | P3.12                             | Chip Select de la IMU                                                      |
| -              | IMU_INT1       | P0.06                             | Interrupción 1 de la IMU                                                   |
| -              | NFC            | P1.02 / P1.01                     | Pines de antena NFC                                                        |
| -              | GRTC           | P0.04 / P0.05                     | Pines RTC de propósito general                                             |

## Primeros pasos con PlatformIO

En esta sección, te guiaremos para comenzar rápidamente con la XIAO nRF54LM20A mediante el efecto de parpadeo multicolor de un LED RGB.
Completa las siguientes preparaciones de hardware y software para configurar tu XIAO para el desarrollo posterior.

### Preparación de hardware

Necesitas preparar lo siguiente:

- 1 x [Seeed Studio XIAO nRF54LM20A Sense](https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html)
- 1 x Ordenador
- 1 x Cable USB Tipo-C

<div className="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio XIAO nRF54LM20A Sense</th>
    </tr>
    <tr>
      <td>
        <div style={{textAlign: 'center'}}>
          <img
            src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg"
            style={{width: 400, height: 'auto'}}
          />
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html"
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
      </td>
    </tr>
  </table>
</div>

### Descargar VS Code

Descarga [VS Code](https://code.visualstudio.com/download) según el sistema que estés utilizando

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VSCode_1.png" style={{width:800, height:'auto'}}/></div>

### Instalar la extensión PlatformIO

Abre VSCode, haz clic en Extensions, luego busca PlatformIO y selecciona instalar. Después de completar la instalación, reinicia VSCode.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VScode_2.png" style={{width:800, height:'auto'}}/></div>

### Instalar el paquete de plataforma platform-seeedboards

Las placas de la serie Seeed Studio XIAO utilizan una plataforma personalizada de PlatformIO, por lo que necesitas instalar manualmente el paquete de plataforma correspondiente.

- Ejecuta el siguiente comando para una instalación nueva:

```bash
pio pkg install -g -p "https://github.com/Seeed-Studio/platform-seeedboards.git"
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_1.png" style={{width:800, height:'auto'}}/></div>
<br/>
- Si has utilizado anteriormente placas de la serie Seeed Studio XIAO en PlatformIO, ejecuta el siguiente comando para actualizar:

```bash
pio pkg update -g -p "https://github.com/Seeed-Studio/platform-seeedboards.git"
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_1.png" style={{width:800, height:'auto'}}/></div>
<br/>
:::tip

Si quieres usar un proyecto existente de PlatformIO, reemplaza el contenido de **platformio.ini** como se muestra a continuación:

```ini
[env:seeed-xiao-nrf54lm20a]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
framework = zephyr
board = seeed-xiao-nrf54lm20a
```

:::

### Crear un nuevo proyecto

1. Abre la extensión PlatformIO y selecciona **Create New Project**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_2.png" style={{width:800, height:'auto'}}/></div>
<br/>
2. Configura el nombre del proyecto, selecciona la placa de desarrollo, el framework y la ruta de almacenamiento de archivos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_3.png" style={{width:800, height:'auto'}}/></div>
<br/>
3. Después de que se complete la creación, aparecerá un aviso para abrir el espacio de trabajo. Haz clic en OK.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_4.png" style={{width:800, height:'auto'}}/></div>
<br/>
4. Navega a la carpeta del proyecto. Los archivos se almacenan en el directorio predeterminado si no especificaste una ruta personalizada.

- Para Windows por defecto:

```bash
<path>: C:\Users\your_name\Documents\PlatformIO\Projects
```

- Para Mac / Linux por defecto:

```bash
<path>: ~/Documents/PlatformIO/Projects
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_5.png" style={{width:800, height:'auto'}}/></div>

### Añadir el programa Blink

Este tutorial se desarrolla sobre la base de Zephyr RTOS. El proyecto consta de tres archivos principales:

- `main.c`: Programa principal que contiene la lógica de la aplicación.
- `app.overlay`: Archivo overlay de devicetree para la configuración de periféricos de hardware.
- `prj.conf`: Archivo de configuración del proyecto para habilitar los módulos necesarios de Zephyr.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_6.png" style={{width:800, height:'auto'}}/></div>

1. Añadir el programa **main.c**

<details>

<summary>main.c</summary>

```c

/*
 * Copyright (c) 2016 Intel Corporation
 *
 * SPDX-License-Identifier: Apache-2.0
 */

#include <zephyr/kernel.h>
#include <zephyr/device.h>
#include <zephyr/drivers/pwm.h>
#include <nrfx_power.h>

#define PWM_PERIOD_NS 1000000U
#define STEP_TIME_MS 500

#define LED_R_NODE DT_ALIAS(pwm_led1)
#define LED_G_NODE DT_ALIAS(pwm_led2)
#define LED_B_NODE DT_ALIAS(pwm_led0)

#if !DT_NODE_EXISTS(LED_R_NODE) || !DT_NODE_EXISTS(LED_G_NODE) || !DT_NODE_EXISTS(LED_B_NODE)
#error "This RGB blink demo expects pwm-led0/pwm-led1/pwm-led2 devicetree aliases"
#endif

static const struct pwm_dt_spec led_r = PWM_DT_SPEC_GET(LED_R_NODE);
static const struct pwm_dt_spec led_g = PWM_DT_SPEC_GET(LED_G_NODE);
static const struct pwm_dt_spec led_b = PWM_DT_SPEC_GET(LED_B_NODE);

struct rgb_step {
	uint8_t r;
	uint8_t g;
	uint8_t b;
	uint32_t delay_ms;
};

static int pwm_set_u8(const struct pwm_dt_spec *led, uint8_t level)
{
	uint32_t duty_ns = (PWM_PERIOD_NS * (uint32_t)level) / 255U;

	return pwm_set_dt(led, PWM_PERIOD_NS, duty_ns);
}

static int rgb_set(uint8_t r, uint8_t g, uint8_t b)
{
	int ret;

	ret = pwm_set_u8(&led_r, r);
	if (ret < 0) {
		return ret;
	}

	ret = pwm_set_u8(&led_g, g);
	if (ret < 0) {
		return ret;
	}

	ret = pwm_set_u8(&led_b, b);
	if (ret < 0) {
		return ret;
	}

	return 0;
}

int main(void)
{
	int ret;

#if defined(CONFIG_NRFX_POWER)
	nrfx_power_constlat_mode_request();
#endif

	if (!device_is_ready(led_r.dev) || !device_is_ready(led_g.dev) || !device_is_ready(led_b.dev)) {
		return -1;
	}

	static const struct rgb_step demo[] = {
		{ 255, 0, 0, STEP_TIME_MS },
		{ 0, 255, 0, STEP_TIME_MS },
		{ 0, 0, 255, STEP_TIME_MS },
		{ 255, 255, 0, STEP_TIME_MS },
		{ 0, 255, 255, STEP_TIME_MS },
		{ 255, 0, 255, STEP_TIME_MS },
		{ 255, 255, 255, STEP_TIME_MS },
		{ 0, 0, 0, STEP_TIME_MS },
	};

	while (1) {
		for (size_t i = 0; i < ARRAY_SIZE(demo); i++) {
			ret = rgb_set(demo[i].r, demo[i].g, demo[i].b);
			if (ret < 0) {
				return ret;
			}
			k_msleep(demo[i].delay_ms);
		}
	}

	return 0;
}
```

</details>

2. Añadir el archivo app.overlay

El archivo overlay de devicetree no existe en el ejemplo en blanco recién creado. Debes añadirlo en el directorio zephyr.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_7.png" style={{width:800, height:'auto'}}/></div>

<details>

<summary>app.overlay</summary>

```dts
/*
 * Device tree overlay for XIAO nRF54LM20A RGB LED PWM demo.
 *
 * PWM20 peripheral is used for RGB LED control:
 *   - Channel 0: P1.22 (Blue LED)  -> pwm_led0
 *   - Channel 1: P1.23 (Red LED)   -> pwm_led1
 *   - Channel 2: P1.24 (Green LED) -> pwm_led2
 */

&pwm20 {
	status = "okay";
};

/ {
	pwmleds {
		compatible = "pwm-leds";

		pwm_led0: pwm_led_0 {
			pwms = <&pwm20 0 PWM_MSEC(20) PWM_POLARITY_NORMAL>;
			label = "Blue LED";
		};

		pwm_led1: pwm_led_1 {
			pwms = <&pwm20 1 PWM_MSEC(20) PWM_POLARITY_NORMAL>;
			label = "Red LED";
		};

		pwm_led2: pwm_led_2 {
			pwms = <&pwm20 2 PWM_MSEC(20) PWM_POLARITY_NORMAL>;
			label = "Green LED";
		};
	};
};

/ {
	aliases {
		pwm-led0 = &pwm_led0;
		pwm-led1 = &pwm_led1;
		pwm-led2 = &pwm_led2;
	};
};
```

</details>

3. Modifica `prj.conf` y habilita las configuraciones correspondientes.

```prj
CONFIG_GPIO=y
CONFIG_PWM=y
CONFIG_SERIAL=n
```

### Compilar y subir el programa

A continuación se presentan dos métodos para la compilación y la carga.

1. Compilar y subir mediante botón

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_8.png" style={{width:800, height:'auto'}}/></div>
<br/>
2. Compilar y subir mediante línea de comandos

```bash
pio run -e seeed-xiao-nrf54lm20a -t upload -v
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_9.png" style={{width:800, height:'auto'}}/></div>

### Observar el resultado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_5.gif" style={{width:800, height:'auto'}}/></div>

## Antena Bluetooth

Esta placa utiliza una antena Bluetooth externa. Para garantizar una mejor calidad de la señal Bluetooth y mejorar tu experiencia de uso de Bluetooth, se recomienda instalar una antena Bluetooth.
El método de conexión se muestra a continuación:

<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_6.gif"
    alt="Bluetooth antenna connection"
    style={{width: 800, height: 'auto'}}
  />
</div>

## Uso de la batería

La XIAO nRF54LM20A es capaz de utilizar una batería de litio de 3,7 V como entrada de alimentación. Puedes consultar el siguiente diagrama para el método de cableado.

<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/6_battry.png"
    alt="Battery wiring"
    style={{width: 600, height: 'auto'}}
  />
</div>

:::caution
Tenga cuidado de no provocar un cortocircuito entre los terminales positivo y negativo y quemar la batería y el equipo al soldar.
Si la batería tiene carga, nunca la suelde en la placa, ya que esto puede quemar la placa de circuito. Provocar un cortocircuito mientras el circuito está alimentado supone un riesgo significativo; se recomienda utilizar un adaptador.

:::

**Instrucciones sobre el uso de baterías:**

1. Utilice baterías calificadas que cumplan las especificaciones.
2. XIAO se puede conectar a su dispositivo informático mediante un cable de datos mientras usa la batería; puede estar tranquilo, ya que XIAO tiene un chip de protección de circuito integrado, lo cual es seguro.



### Detección de voltaje de la batería

El XIAO nRF54LM20A integra una función de detección de voltaje de batería que se centra en gestionar de forma eficiente las mediciones de potencia de la batería utilizando el interruptor de carga nPM1300-CAA. Esta guía se centrará en analizar la implementación de software de la detección de batería **(especialmente el código main.c)** y le guiará sobre cómo desplegar y utilizar fácilmente esta función en un entorno PlatformIO, evitando la complejidad del SDK Zephyr NCS.

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_10.png" alt="XIAO nRF54L15 BLE Advertising Power Consumption" style={{width:1000, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Esquema de detección de batería</em></p>
</div>

Función del chip nPM1300-CAA:

nPM1300-CAA es un circuito integrado de gestión de energía (PMIC) altamente integrado que sustituye la simple función de interruptor de carga del TPS22916. No solo controla la conmutación del voltaje de la batería para la monitorización de bajo consumo, sino que también integra carga, regulación y medición precisa del nivel de batería (mediante voltaje, corriente y temperatura) para maximizar la vida útil de la batería del nRF54LM20A.



<div className="github_container" style={{textAlign: 'center'}}>
    <a className="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-battery" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar la biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br/>

:::note
El siguiente ejemplo funciona tanto para PlatformIO como para nRF Connect SDK. Se puede usar directamente en PlatformIO, mientras que en el SDK es necesario añadir los archivos manualmente. Consulte este [enlace](https://wiki.seeedstudio.com/es/xiao_nrf54l15_sense_getting_started/#placa-alimentada-por-batería)
:::

## Descripción general de periféricos

El circuito periférico de esta placa incluye un IMU y un micrófono. Puede ver su ubicación en el siguiente diagrama:

<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/8.IMU_MIC.png"
    alt="Ubicaciones del IMU y del micrófono"
    style={{width: 400, height: 'auto'}}
  />
</div>

## IMU

El XIAO nRF54LM20A Sense incorpora un IMU LSM6DS3TR-C con un acelerómetro de 3 ejes y un giroscopio de 3 ejes.

- [Uso del IMU del XIAO nRF54LM20A](https://wiki.seeedstudio.com/es/xiao_nrf54lm20a_with_onboard/#imu)

## MIC

El XIAO nRF54LM20A Sense está equipado con un micrófono digital MSM261DGT006 para la captura de audio.
- [Uso del MIC del XIAO nRF54LM20A](https://wiki.seeedstudio.com/es/xiao_nrf54lm20a_with_onboard/#mic)

## Preguntas frecuentes (FAQ)

<!-- ### Issue 1: Stuck at **Reading CMake configuration** on macOS

When compiling and uploading programs with PlatformIO on macOS, the process may get stuck at the **Reading CMake configuration** step even after network issues have been ruled out. This is usually caused by a macOS compatibility problem that prevents the Python-based `arm-none-eabi-gdb-py` tool from running correctly.

**Recommended fix:** Replace the faulty `gdb-py` file with a symbolic link.

1. Navigate to the tool directory:
   `/Users/your_name/.platformio/packages/toolchain-gccarmnoneeabi@1.80201.181220/bin/`
2. Back up the original file by renaming `arm-none-eabi-gdb-py` to `arm-none-eabi-gdb-py.broken.bak`.
3. Create a new symbolic link named `arm-none-eabi-gdb-py` that points to `arm-none-eabi-gdb`. -->

1. **Errores de compilación después de modificar archivos de configuración**

Si anteriormente compiló el proyecto completo de Zephyr y posteriormente modificó archivos de configuración, se recomienda limpiar la caché de compilación antes de volver a compilar y cargar. Esto ayuda a evitar errores de compilación causados por archivos de caché obsoletos o dañados.

```shell
pio run -t clean  // Clean command
```

<!-- ### Issue 3: Build errors after modifying configuration files

Some USB cables can only supply power and cannot transfer data. If you don't have a USB cable or don't know if your USB cable can transmit data, you can check [Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html). -->

2. **zsh: command not found: openocd después de la instalación**

Al introducir directamente "openocd" en la terminal, el shell solo buscará en los directorios dentro de PATH; si el directorio aún no se ha añadido, indicará que no se puede encontrar el comando. Simplemente añádalo de forma permanente a ~/.zshrc, siguiendo las instrucciones a continuación.
Esta solución es solo para usuarios de macOS

```shell
echo 'export PATH="$HOME/Library/Application Support/Seeed/OpenOCD/tool-openocd/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
openocd --version
```

3. **¿Qué debo hacer si anteriormente descargué varias veces las placas de la serie Seeed Studio XIAO y ahora el desplegable del proyecto de PlatformIO falla?**

Se recomienda limpiar antes de intentarlo de nuevo. Las carpetas de la plataforma Seeed duplicadas y obsoletas acumuladas en los paquetes locales de PlatformIO provocan rutas de búsqueda de archivos demasiado largas y conflictos de versión, lo que da lugar a fallos en la carga del proyecto. Limpie los directorios redundantes de la plataforma Seeed de fuentes mixtas según los pasos siguientes y conserve únicamente la plataforma oficial que PlatformIO descarga automáticamente para evitar conflictos causados por directorios antiguos e incorrectos:
Elimine todas las carpetas que comiencen con platform-seeed- y framework-seeed-

```shell
rm -rf ~/.platformio/packages/platform-seeed-* ~/.platformio/packages/framework-seeed-*
```

## Recursos

### Seeed Studio XIAO nRF54LM20A

**Diseño de hardware**
- **📄[Datasheet]** [Nordic nRF54LM20A Datasheet](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/nRF54LM20A_nRF54LM20B_Datasheet_v1.0.pdf)
- **📄[Schematic]** [Esquemático del XIAO nRF54LM20A](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/XIAO_nRF54LM20A_Schematic.pdf )
- **🗃️[PCB Design Files]** [Proyecto KiCad del XIAO nRF54LM20A](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/XIAO_nRF54LM20A_V1.0_SCH&PCB_260508.zip )
- **🗃️[PCB Design Libraries]** 
  - [Huella KiCad de la Serie XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [Símbolos SCH KiCad de la Serie XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Pinout Diagram]**[Hoja de pines del XIAO nRF54LM20A](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/XIAO_nRF54LM20A_Pin_definition.xlsx)

<!-- **Mechanical**
- **🗃️[3D Dimensions]** [XIAO nRF54LM20A Dimension in DXF](1) -->

### Seeed Studio XIAO nRF54LM20A Sense

**Diseño de hardware**
- **📄[Datasheet]** [Nordic nRF54LM20A Datasheet](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/nRF54LM20A_nRF54LM20B_Datasheet_v1.0.pdf)
- **📄[Schematic]** [Esquemático del XIAO nRF54LM20A Sense](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/XIAO_nRF54LM20A_Schematic.pdf )
- **🗃️[PCB Design Files]** [Proyecto KiCad del XIAO nRF54LM20A](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/XIAO_nRF54LM20A_V1.0_SCH&PCB_260508.zip )
- **🗃️[PCB Design Libraries]**
  - [Huella KiCad de la Serie XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [Símbolos SCH KiCad de la Serie XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Pinout Diagram]**[Hoja de pines del XIAO nRF54LM20A Sense](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/XIAO_nRF54LM20A_Pin_definition.xlsx)

<!-- **Mechanical**
- **🗃️[3D Dimensions]** [XIAO nRF54LM20A Sense Dimension in DXF](1) -->


## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerle diferentes tipos de soporte y garantizar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
