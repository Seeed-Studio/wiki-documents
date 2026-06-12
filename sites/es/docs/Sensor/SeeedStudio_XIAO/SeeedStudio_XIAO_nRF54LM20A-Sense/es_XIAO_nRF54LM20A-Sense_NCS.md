---
title: Uso de NRF Connect SDK con Seeed Studio XIAO nRF54LM20A Sense
description: ''
keywords:
  - xiao
  - nrf54lm20a
  - ncs
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/Seeed-Studio-XIAO-nRF54LM20A-Sense.webp
slug: /xiao_nrf54lm20a_ncs
sku: 100018440
last_update:
  date: 05/13/2026
  author: Brandy
createdAt: '2025-05-13'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/es/xiao_nrf54lm20a_ncs/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Uso de nRFConnect SDK con Seeed Studio XIAO nRF54LM20A Sense

nRF Connect SDK (NCS) es el kit de desarrollo de software oficial de Nordic Semiconductor, construido sobre el sistema operativo en tiempo real Zephyr RTOS. Proporciona un marco de desarrollo completo, nativo y altamente optimizado para los chips de la serie nRF. En comparación con PlatformIO, NCS ofrece a los desarrolladores un acceso más completo a todas las capacidades de hardware de la serie nRF54, incluyendo compatibilidad nativa con Bluetooth Low Energy (BLE), Thread, Matter y otras pilas de protocolos inalámbricos, así como una gestión de energía y control de periféricos más detallados. Nordic mantiene y actualiza oficialmente este SDK de forma continua, garantizando una compatibilidad óptima con el firmware del chip y acceso temprano a las funciones más recientes.

Este tutorial te guiará paso a paso por todo el proceso: desde la configuración del entorno de desarrollo de nRF Connect SDK y la instalación de la toolchain, hasta la creación y configuración de tu primer proyecto y, finalmente, la grabación de tu primer programa de ejemplo en la XIAO nRF54LM20A Sense para verlo en funcionamiento.

## Preparación de hardware

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

## Uso de nRF Connect SDK en VSCode

<details>

<summary>Instalar conocimientos previos sobre nRF Connect SDK</summary>

Este documento detalla cómo instalar el entorno de desarrollo de nRF Connect SDK en un ordenador con Windows 11. A continuación se muestra una visión general de las herramientas que deben instalarse

- Instalar VS Studio Code

  [Visual Studio Code - Code Editing .Redefined](https://code.visualstudio.com/ )

- nRF Command Line Tools
- nRF Connect for Desktop
- Git

- Ninja

```cpp
ninja --version
```

- CMake

```cpp
cmake --version
```

- Zephyr SDK

```cpp
west --version
```

- nRF Connect SDK
- VSCode nRF Connect plugin

***Si ya lo has preinstalado en tu ordenador, puedes comprobar la versión de tu herramienta con el siguiente comando***

</details>

<Steppers>

### Instalar la extensión

Abre VS Code y busca **nRF Connect for VS Code Extension Pack** en el Centro de Plugins. Este paquete de plugins instalará automáticamente otros plugins de VS Code necesarios para nRF Connect.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/Learn8.png" style={{width:600, height:'auto'}}/></div>
<br />
La extensión nRF Connect for VS Code permite a los desarrolladores utilizar el popular entorno de desarrollo integrado Visual Studio Code (VS Code IDE) para desarrollar, compilar, depurar y desplegar aplicaciones embebidas basadas en el nRF Connect SDK (Software Development Kit) de Nordic. La extensión incluye herramientas de desarrollo útiles como una interfaz de compilador, enlazador, sistema de compilación completo, depurador habilitado para RTOS, integración perfecta con el nRF Connect SDK, editor de visualización de device tree y un terminal serie integrado.

El paquete de extensión nRF Connect para VS Code incluye los siguientes componentes:

- nRF Connect for VS Code: La extensión principal contiene la interfaz entre el sistema de compilación y el nRF Connect SDK, así como una interfaz para gestionar la versión del nRF Connect SDK y la toolchain.
- nRF DeviceTree: Proporciona compatibilidad con el lenguaje device tree y un editor de visualización de device tree.
- nRF Kconfig: Proporciona compatibilidad con el lenguaje Kconfig.
- nRF Terminal: Terminales serie y RTT.
- Microsoft C/C++: Añade compatibilidad de lenguaje para C/C++, incluyendo funciones de IntelliSense.
- CMake: Compatibilidad con el lenguaje CMake.
- GNU Linker Mapping Files: Compatibilidad con archivos de mapeo del enlazador.
Podemos descargar cualquier versión preferida del nRF Connect SDK y su toolchain a través de la extensión. La documentación completa de nRF Connect for VS Code está disponible en https://docs.nordicsemi.com/bundle/nrf-connect-vscode/page/index.html.

### Instalación de la toolchain

La toolchain es un conjunto de herramientas que trabajan juntas para compilar aplicaciones de nRF Connect SDK, incluyendo ensamblador, compilador, enlazador y componentes de CMake.
La primera vez que abras nRF Connect for VS Code, se te pedirá que instales la toolchain. Esto suele ocurrir si la extensión no detecta ninguna toolchain instalada en tu ordenador.
Haz clic en Install Toolchain y se mostrará una lista de versiones de toolchain que se pueden descargar e instalar en tu ordenador. Selecciona la versión de la toolchain que coincida con la versión del nRF Connect SDK que planeas utilizar. Siempre recomendamos utilizar la última versión etiquetada del nRF Connect SDK.

Por defecto, nRF Connect for VS Code solo muestra la pestaña Released (es decir, la versión estable) de la toolchain. Si estás evaluando una nueva función y deseas utilizar la pestaña Preview u otro tipo de pestaña (por ejemplo, Customer Sampling -cs), haz clic en "Show all toolchain versions" como se muestra a continuación:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_7.png" style={{width:800, height:'auto'}}/></div>

:::note
**La ToolChain aquí es 3.3.0 o superior**
:::

### Instalación de nRF Connect SDK

En la extensión nRF Connect para VS Code, haz clic en Manage SDK. Desde el menú Manage SDK, podemos instalar o desinstalar la versión de nRF Connect SDK. Como es la primera vez que utilizamos la extensión, la interfaz solo mostrará dos opciones.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/install_sdk.png" style={{width:800, height:'auto'}}/></div>

Al hacer clic en Install SDK se enumerarán todas las versiones disponibles de nRF Connect SDK que se pueden descargar e instalar localmente. Selecciona la versión de nRF Connect SDK que se requiera para el desarrollo de tu proyecto.

:::note
**El nRF Connect SDK aquí es 3.2.4 o superior**
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_8_1.png" style={{width:800, height:'auto'}}/></div>


:::tip
Si no ves ninguna de estas opciones, asegúrate de tener instalada la última versión del paquete de extensión nRF Connect for VS Code.
Es importante tener en cuenta que nRF Connect SDK es independiente del IDE, lo que significa que puedes elegir utilizar cualquier IDE o ninguno. El nRF Connect SDK está disponible a través de la interfaz de línea de comandos https://www.nordicsemi.com/Products/Development-tools/nRF-Util (nrfutil). La interfaz de línea de comandos (CLI) (nrfutil) descargará e instalará nRF Connect. Sin embargo, recomendamos encarecidamente utilizar nuestra extensión nRF Connect for VS Code con VS Code, ya que integra no solo una cómoda interfaz gráfica de usuario (GUI) y una eficiente interfaz de línea de comandos (CLI), sino que también incluye una serie de funciones que simplificarán enormemente el desarrollo de firmware. Configurar otros IDE para que funcionen con nRF Connect SDK requiere pasos manuales adicionales que van más allá del alcance de este curso.
:::

### Creación de programas de usuario

En este ejercicio escribiremos una aplicación sencilla basada en el ejemplo blinky para controlar el parpadeo de los LED en una placa de desarrollo. Lo mismo se aplica a todas las placas de desarrollo compatibles de Nordic Semiconductor (series nRF54, nRF53, nRF52, nRF70 o nRF91). El objetivo es asegurarse de que todas las herramientas necesarias para compilar y grabar el ejemplo estén configuradas correctamente. El enfoque está en aprender cómo crear una aplicación, compilarla y grabarla en una placa de desarrollo con chip Nordic utilizando la plantilla “Copy Example”.

- En VS Code, haz clic en el icono de la extensión nRF Connect. En la vista Welcome, haz clic en Create New Application.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/create_project1.png" style={{width:800, height:'auto'}}/></div>

- Escribe blinky en la barra de búsqueda y selecciona el segundo ejemplo Blinky (ruta zephyr/samples/basic/blinky), como se muestra a continuación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/create_project2.png" style={{width:800, height:'auto'}}/></div>

El ejemplo Blinky hará que el LED1 de la placa de desarrollo parpadee continuamente. Sin embargo, dado que nuestro nRF54LM20A está equipado con una luz RGB, puedes modificar algunos archivos mediante los siguientes pasos para hacer que la luz RGB brille con varios efectos de iluminación.

Nuestra primera aplicación se basará en el ejemplo Blinky. El ejemplo Blinky se deriva del bloque de molde Zephyr en nRF Connect SDK, por lo que verás el nombre zephyr en la ruta del ejemplo: zephyr\samples\basic\blinky.

### Añadir la placa XIAO nRF54LM20A

<div className="github_container" style={{textAlign: 'center'}}>
    <a className="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/zephyr/boards" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar las bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

Para comenzar, **clona el repositorio desde el enlace de GitHub** en tu carpeta local preferida. Una vez clonado, navega al directorio `platform-seeedboards/zephyr/`. **Recuerda esta ruta de la carpeta `zephyr`**;

```bash
git clone https://github.com/Seeed-Studio/platform-seeedboards.git
```

Para configurar tu placa para nRF Connect en VS Code, puedes seguir estos pasos:

- Abre VS Code y ve a Settings.

- Escribe nRF Connect en el cuadro de búsqueda.

- Busca el elemento de configuración Board Roots y haz clic en Edit in settings.json.

- Añade la ruta de `zephyr` del archivo de placa descargado XIAO nRF54LM20A al array boardRoots.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/12ncs_2.PNG" style={{width:800, height:'auto'}}/></div>
<br/>
:::tip
Ten en cuenta que el punto final de la ruta añadida es la ruta de la carpeta `boards`, no la ruta de la carpeta `platform-seeedboards`.
:::

- En la vista de aplicación, haz clic en Add Build Configuration debajo del nombre de la aplicación.

- Podemos seleccionar el modelo de XIAO nRF54LM20A en Board target, y seleccionar el archivo prj.config predeterminado en Base configuration files, y finalmente hacer clic en `Generate and Build` para compilar el archivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/11ncs_1.PNG" style={{width:800, height:'auto'}}/></div>

### Descargar el complemento de grabación

<Tabs>
<TabItem  value="window" label="Window" default>

**Plugins adicionales:**

En Windows, usaremos el gestor de paquetes Chocolatey para instalar OpenOCD.

**1.Abre PowerShell (Ejecutar como administrador):**

- En la barra de búsqueda de Windows, escribe **PowerShell**.
- Haz clic derecho en **Windows PowerShell** y selecciona **Run as administrator**.

**2.Comprueba la directiva de ejecución de PowerShell:**

- Escribe `Get-ExecutionPolicy` y pulsa Intro.
- Escribe `Get-ExecutionPolicy -List` y pulsa Intro.

**3.Instala Chocolatey:**

- Pega y ejecuta el siguiente comando:

```cpp
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

Este comando omite la directiva de ejecución para la sesión actual de PowerShell e instala Chocolatey. Después de la instalación, cierra y vuelve a abrir la ventana de PowerShell (ejecutándola aún como administrador).

**4.Instala OpenOCD:**

- En la nueva ventana de PowerShell (como administrador), escribe:

```cpp
choco install openocd
```

**5.Verifica la instalación de OpenOCD:**

- Escribe `Get-Command openocd` y pulsa Intro.

- Si la instalación se ha realizado correctamente, este comando mostrará la ruta a openocd.exe.

</TabItem>

<TabItem value="mac" label="Mac OS" default>

**Plugins adicionales:**

En macOS, usaremos el gestor de paquetes Homebrew para instalar las herramientas necesarias.

**1.Instala Homebrew (si aún no está instalado):**

- Abre Terminal.app.

- Ejecuta el siguiente comando:

```cpp
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

- Sigue las indicaciones en pantalla; puede que necesites introducir la contraseña de usuario de macOS. Después de la instalación, ejecuta los comandos que te indique la terminal para añadir Homebrew a tu variable de entorno PATH `(e.g., eval "$(/opt/homebrew/bin/brew shellenv)")`. Luego cierra y vuelve a abrir la terminal.

**2.Instala Ccache:**

En la terminal, escribe:

```cpp
brew install ccache
```

**3.Instala OpenOCD:**

En la terminal, escribe:

```cpp
brew install openocd
```

**4.Verifica la instalación de OpenOCD::**

- Escribe `which openocd` y pulsa Intro.

- Si la instalación se ha realizado correctamente, este comando mostrará la ruta al ejecutable `openocd`.

</TabItem>

</Tabs>

### Programa de grabación

- Abre los archivos **src/main.c** y **prj.conf** y reemplaza el código original con el siguiente código.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_1.png" style={{width:800, height:'auto'}}/></div>

<details>
<summary>src/main.c</summary>
<div>

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

</div>
</details>

<details>
<summary>prj.conf</summary>
<div>

```prj
CONFIG_GPIO=y
CONFIG_PWM=y
CONFIG_SERIAL=n

```

</div>
</details>

<details>
<summary>board/xiao_nrf54lm20a_nrf54lm20a_cpuapp.overlay</summary>
1. Si necesitas modificar o redefinir el contenido de los nodos del árbol de dispositivos, crea un nuevo archivo **xiao_nrf54lm20a_nrf54lm20a_cpuapp.overlay** en el directorio de Zephyr para vincular explícitamente los nodos de dispositivo.
2. Si has modificado los archivos del árbol de dispositivos, limpia los archivos originales antes de recompilar para evitar que CMake no reconozca tus cambios.
<div>

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

</div>
</details>

- Luego abre **Open terminal** y escribe el comando `west flash`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ncs_2.png" style={{width:800, height:'auto'}}/></div>
<br/>
:::tip
 Si se produce un error de west flash, significa que necesitas añadir de nuevo la configuración de compilación, pero primero debes eliminar la compilación incorrecta.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/error.jpg" style={{width:800, height:'auto'}}/></div>
<br/>
:::

</Steppers>

### Explicación del código

- **src/main.c**
Punto de entrada principal de la aplicación que implementa la lógica de demostración, incluyendo la configuración del color del LED, efectos de respiración, control del ritmo de parpadeo, cambio de modo basado en botones y otros comportamientos de interacción con el hardware.

- **zephyr/prj.conf**
Archivo de configuración de Zephyr RTOS para habilitar/deshabilitar componentes del sistema y controladores de periféricos, incluyendo registro (logging), UART, PWM, I2C, SPI, gestión de bajo consumo y otras funcionalidades.

### Observa el resultado

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
