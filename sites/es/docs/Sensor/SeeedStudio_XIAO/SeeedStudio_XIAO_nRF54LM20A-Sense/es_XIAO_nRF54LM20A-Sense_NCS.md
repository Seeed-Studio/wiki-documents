---
title: NRF Connect SDK con Seeed Studio XIAO nRF54LM20A Sense
description: ''
keywords:
  - xiao
  - nrf54lm20a
  - ncs
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/Seeed-Studio-XIAO-nRF54LM20A-Sense.webp
slug: /xiao_nrf54lm20a_ncs
sku: 100018440
last_update:
  date: 06/15/2026
  author: Brandy
createdAt: '2025-05-13'
updatedAt: '2026-06-15'
url: https://wiki.seeedstudio.com/es/xiao_nrf54lm20a_ncs/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_first.png" style={{width:600, height:'auto'}}/></div>

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

nRF Connect SDK (NCS) es el kit de desarrollo de software oficial de Nordic Semiconductor, construido sobre el sistema operativo en tiempo real Zephyr RTOS. Proporciona un marco de desarrollo completo, nativo y altamente optimizado para los chips de la serie nRF. En comparación con PlatformIO, NCS ofrece a los desarrolladores un acceso más completo a todas las capacidades de hardware de la serie nRF54, incluyendo compatibilidad nativa con Bluetooth Low Energy (BLE), Thread, Matter y otras pilas de protocolos inalámbricos, así como una gestión de energía y control de periféricos más detallados. Nordic mantiene y actualiza oficialmente este SDK de forma continua, garantizando una compatibilidad óptima con el firmware del chip y acceso temprano a las funciones más recientes.

Este tutorial te guiará paso a paso por todo el proceso: desde la configuración del entorno de desarrollo de nRF Connect SDK y la instalación de la toolchain, hasta la creación y configuración de tu primer proyecto, y finalmente la grabación de tu primer programa de ejemplo en la XIAO nRF54LM20A Sense para verlo en funcionamiento.

## Primeros pasos con NCS

### Preparación de hardware

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

Descarga según el sistema que estés utilizando [VS Code](https://code.visualstudio.com/download)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VSCode_1.png" style={{width:800, height:'auto'}}/></div>

### Instalar la extensión nRF Connect for VS Code Extension Pack

1. Abre VS Code, busca e instala **nRF Connect for VS Code Extension Pack**. Esta extensión instalará automáticamente todas las subextensiones necesarias para la toolchain completa, incluyendo nRF Connect, Kconfig, DeviceTree y más.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_1.png" style={{width:800, height:'auto'}}/></div>
<br/>
2. nRF Connect for VS Code Extension Pack instalará automáticamente las siguientes extensiones por ti.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_2.png" style={{width:800, height:'auto'}}/></div>

### Instalar la toolchain

1. Instala la toolchain requerida para nRF Connect SDK. Utiliza la versión compatible; se recomienda **v3.2.4**.

:::tip

- La serie Seeed Studio XIAO nRF54LM20A es compatible con la versión v3.2.x. Las versiones v3.3.x y superiores no son compatibles por ahora.
- La instalación inicial de la toolchain tomará algo de tiempo. Espera pacientemente.

:::
<br/>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_3.png" style={{width:800, height:'auto'}}/></div>

### Instalar el paquete SDK

1. Abre la extensión nRF Connect, selecciona **Install SDK** y luego elige **nRF Connect SDK**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_4.png" style={{width:800, height:'auto'}}/></div>
<br/>
2. Selecciona la versión que coincida con tu toolchain: **v3.2.4**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_5.png" style={{width:800, height:'auto'}}/></div>
<br/>
3. Se recomienda utilizar la ruta de instalación predeterminada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_6.png" style={{width:800, height:'auto'}}/></div>
<br/>
:::tip

nRF Connect SDK es bastante grande. Asegúrate de tener una conexión de red estable durante la instalación para evitar fallos.

:::

### Verificación del entorno

Después de instalar la toolchain de desarrollo, el entorno integrado para nRF Connect SDK se configurará automáticamente. Para garantizar un desarrollo fluido posterior, recomendamos verificar el entorno en este paso.

1. Inicia **nRF Terminal**, una terminal integrada de nRF Connect SDK.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_7.png" style={{width:800, height:'auto'}}/></div>
<br/>
2. Introduce comandos para comprobar la información de versión de las herramientas necesarias. Puedes copiar y ejecutar los comandos uno por uno para la verificación.

```bash
# Check west (project manager & build entry) version
west --version

# Check CMake (build system generator) version
cmake --version

# Check Ninja (build executor) version
ninja --version

# Check Python (scripting runtime for west & Zephyr tools) version
python --version

# Check ARM cross-compiler (Zephyr toolchain for Cortex-M) version
arm-zephyr-eabi-gcc --version

# Check OpenOCD (on-chip debugger & flasher via CMSIS-DAP) version
openocd --version
```

- La salida se muestra a continuación. Si falta algún componente, vuelve a instalar la toolchain y asegúrate de tener una red estable durante la instalación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_8.png" style={{width:800, height:'auto'}}/></div>

### Añadir la ruta de la placa personalizada

Las definiciones de placa para la serie XIAO nRF54LM20A aún no se han fusionado en el repositorio oficial de NCS, por lo que debes añadir la ruta de la placa manualmente.

1. Clona el repositorio **platform-seeedboards** en tu directorio preferido.

```bash
git clone https://github.com/Seeed-Studio/platform-seeedboards.git
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_9.png" style={{width:800, height:'auto'}}/></div>
<br/>
2. Abre **Settings** en la esquina inferior izquierda de VS Code.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_10.png" style={{width:800, height:'auto'}}/></div>
<br/>
3. Busca **nRF Connect**, modifica **Board Roots** y añade la ruta `~\your_path\platform-seeedboards\zephyr`. Aquí se almacenan las definiciones de placa para la serie XIAO nRF54LM20A.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_11.png" style={{width:800, height:'auto'}}/></div>

### Crear una nueva aplicación

En esta sección, modificaremos un proyecto de ejemplo en blanco.

1. En la extensión, selecciona **Create a blank application** para duplicar la plantilla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_12.png" style={{width:800, height:'auto'}}/></div>
<br/>
2. Nombra el proyecto `blinky` y elige una ruta de almacenamiento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_13.png" style={{width:800, height:'auto'}}/></div>
<br/>
3. Una vez creado, abre el proyecto copiado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_14.png" style={{width:800, height:'auto'}}/></div>
<br/>

4. Elimina las configuraciones originales. Este paso elimina interferencias para configurar los ajustes relacionados con XIAO nRF54LM20A en la siguiente fase.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_15.png" style={{width:800, height:'auto'}}/></div>

### Escribir el programa Blinky

Dado que la serie XIAO nRF54LM20A utiliza devicetree y asignaciones de pines de hardware personalizadas, es necesario modificar varios archivos. Los archivos que se deben editar se enumeran a continuación.

- `main.c`: Programa principal que contiene la lógica de la aplicación.
- `app.overlay`: Archivo overlay de devicetree para la configuración de periféricos de hardware.
- `prj.conf`: Archivo de configuración del proyecto para habilitar los módulos Zephyr necesarios.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_16.png" style={{width:800, height:'auto'}}/></div>
<br/>

1. Modificar el código en main.c

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

2. Añade **xiao_nrf54lm20a_nrf54lm20a_cpuapp.overlay**

- Crea una carpeta **board** en el directorio raíz del proyecto blinky, al mismo nivel que carpetas como src.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_17.png" style={{width:600, height:'auto'}}/></div>
<br/>

- Crea el archivo devicetree **xiao_nrf54lm20a_nrf54lm20a_cpuapp.overlay** dentro de la carpeta board.

<details>

<summary>xiao_nrf54lm20a_nrf54lm20a_cpuapp.overlay</summary>

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

3. Modifica el archivo prj.conf para habilitar las configuraciones correspondientes.

```conf
CONFIG_GPIO=y
CONFIG_PWM=y
CONFIG_SERIAL=n
```

1. Ve a la sección **APPLICATIONS** de la extensión y selecciona **Add build configuration**. Confirma las versiones del SDK y del toolchain. Establece **Board Target** en `xiao_nrf54lm20a/nrf54lm20a/cpuapp` y **base configuration files** en `prj.conf`, luego haz clic en **Generate and Build** para crear las configuraciones correspondientes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_18.png" style={{width:800, height:'auto'}}/></div>
<br/>

:::tip

Si `xiao_nrf54lm20a/nrf54lm20a/cpuapp` no se puede encontrar aquí, comprueba si la ruta se añadió correctamente en la sección [Add Custom Board Path](#add-custom-board-path).

:::

2. Si la compilación se realiza correctamente, se mostrará la siguiente información en la terminal.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_19.png" style={{width:800, height:'auto'}}/></div>
<br/>

### Programar el flasheo

En esta sección, utilizamos la herramienta west del nRF Connect SDK para flashear el programa.

1. Conecta el XIAO nRF54LM20A Sense con un cable USB-C. Abre el nRF Terminal e introduce el comando west para flashear el programa.

```bash
west flash
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_new_20.png" style={{width:800, height:'auto'}}/></div>
<br/>

:::tip

Si el firmware que se va a flashear se genera a partir del primer archivo de configuración creado en **Add build configuration**, debes especificar la ruta de configuración cuando existan varias carpetas de configuración como `build` y `build_1`.

```bash
# examples: west flash configgration build_1
west flash --build-dir build_1
```

:::

### Observar el resultado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_5.gif" style={{width:600, height:'auto'}}/></div>

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
