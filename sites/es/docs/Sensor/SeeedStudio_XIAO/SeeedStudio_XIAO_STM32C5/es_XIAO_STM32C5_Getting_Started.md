---
title: Introducción a XIAO STM32C5
description: ''
keywords:
  - xiao
  - stm32
  - stm32c5
  - can fd
image: https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/Seeed-Studio-XIAO-STM32C5.webp
slug: /xiao_stm32c5_getting_started
sku: 100036669
last_update:
  date: 08/11/2026
  author: Zeller
createdAt: '2026-08-07'
updatedAt: '2026-08-11'
url: https://wiki.seeedstudio.com/es/xiao_stm32c5_getting_started/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png" style={{width:600, height:'auto'}}/></div>

<div className="table-center">
  <table align="center">
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html"
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

## Descripción general

Conoce el primer XIAO basado en STM32. Construido alrededor del STM32C5A3CG con un núcleo Arm Cortex-M33 a 144MHz, XIAO STM32C5 aporta conectividad CAN FD, 16MB de Flash externa y una IMU de seis ejes con calentamiento programable al formato compacto XIAO. Resistencias de calentamiento dedicadas alrededor de la IMU permiten un calentamiento controlado por firmware para proyectos de robótica y detección de movimiento. Dos controladores CAN FD nativos, incluido un canal con un transceptor TCAN3403-Q1 integrado en la placa, proporcionan un punto de partida para adaptadores USB‑a‑CAN, sensores conectados y proyectos de control de robots. El USB‑C y la carga de batería integrada admiten tanto el desarrollo de escritorio como las aplicaciones portátiles.

## Características

- **El primer XIAO basado en STM32**: Construido con el STM32C5A3CG, que incorpora un procesador Arm Cortex-M33 a 144MHz, compatibilidad con coma flotante e instrucciones DSP para control embebido y procesamiento de sensores.
- **Conectividad CAN FD integrada**: Dos controladores CAN FD nativos, con un canal conectado a un transceptor TCAN3403-Q1 integrado en la placa y pads accesibles CANH/CANL. Añade un transceptor externo para usar el segundo canal.
- **IMU de 6 ejes con calentamiento programable**: El acelerómetro y giróscopo LSM6DS3TR-C integrados en la placa se combinan con resistencias de calentamiento dedicadas alrededor del sensor. El calentamiento controlado por GPIO permite un calentamiento programable y, con firmware de retroalimentación de temperatura, una regulación de temperatura en lazo cerrado para ayudar a reducir la deriva relacionada con la temperatura en aplicaciones de robótica y detección de movimiento.
- **Flash externa de 16MB**: Almacena datos de aplicación, registros de sensores, archivos de configuración y registros de mensajes CAN mediante el firmware de la aplicación.
- **Cristal externo para temporización de comunicaciones**: Un cristal externo de alta velocidad integrado en la placa proporciona una referencia de reloj para CAN FD y otras aplicaciones sensibles al tiempo.
- **USB‑C y carga de batería**: Desarrolla a través de USB‑C o crea dispositivos alimentados por batería utilizando el circuito de carga de baterías de litio integrado en la placa y los pads de conexión de batería.
- **Diseño compacto y fácil de integrar**: El formato XIAO y los pads bordeados tipo castellated admiten prototipado en breadboard con pines y la integración en placas portadoras personalizadas.

## Especificaciones

| Elemento                   | Especificación                                                                                                        |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Producto                   | Seeed Studio XIAO STM32C5                                                                                             |
| Microcontrolador           | STMicroelectronics STM32C5A3CG                                                                                        |
| CPU                        | Arm Cortex-M33 de un solo núcleo, hasta 144MHz, con FPU e instrucciones DSP                                           |
| Encapsulado del MCU        | UFQFPN48                                                                                                              |
| Flash interna de programa  | 1MB                                                                                                                   |
| SRAM                       | 256KB                                                                                                                 |
| Flash externa              | 16MB                                                                                                                  |
| Controladores CAN          | 2 controladores CAN FD nativos                                                                                        |
| Transceptor CAN integrado  | 1 x TI TCAN3403-Q1                                                                                                    |
| Conexión de bus CAN        | Pads CANH/CANL; usar GND de la placa como referencia de señal                                                         |
| Segundo canal CAN          | Señales digitales TX/RX; se requiere un transceptor CAN externo                                                       |
| Terminación CAN            | 120 ohmios, habilitada por defecto; se puede desconectar mediante un puente de soldadura recortable                  |
| Aislamiento CAN            | Sin aislamiento galvánico integrado en la placa                                                                       |
| IMU                        | STMicroelectronics LSM6DS3TR-C, acelerómetro de tres ejes y giróscopo de tres ejes                                    |
| Calentamiento de la IMU    | Resistencias de calentamiento dedicadas alrededor de la IMU con accionamiento controlado por GPIO                    |
| Regulación de temperatura  | Calentamiento programable; la regulación de punto de consigna en lazo cerrado requiere retroalimentación de temperatura y firmware de aplicación adecuado |
| Reloj externo              | Cristal externo de alta velocidad integrado en la placa                                                               |
| USB                        | USB‑C; USB 2.0 Full Speed, velocidad de señalización de 12Mbps                                                        |
| Nivel lógico               | 3,3V                                                                                                                  |
| Alimentación               | Entrada de 5V por USB‑C o batería de litio compatible a través de los pads BAT                                       |
| Carga de batería           | Circuito de carga integrado en la placa                                                                               |
| Controles de usuario       | Botón de reinicio y botón de arranque                                                                                 |
| Indicadores                | LED de usuario e indicador de carga                                                                                   |
| Interfaz de depuración     | SWD                                                                                                                   |
| Factor de forma            | Módulo XIAO compacto con pads bordeados tipo castellated                                                              |

## Descripción general del hardware

<Tabs>
<TabItem value="XIAO STM32C5" label="XIAO STM32C5" default>

### Parte frontal de XIAO STM32C5

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/XIAO STM32C5_Front_1.png" style={{width:1000, height:'auto'}}/></div>
<br/>
### Parte trasera de XIAO STM32C5

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/XIAO STM32C5_Back_1.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>
</Tabs>

## **Mapa de pines**

| Pin / Señal XIAO | Función         | Pin del chip | Funciones alternativas | Descripción                                                   |
| :---------------: | :-------------: | :-------: | :-----------------: | :----------------------------------------------------------- |
| VBUS              | Alimentación    |           | USB 5V              | Entrada/salida de alimentación de 5V                         |
| GND               | Tierra          |           |                     | Tierra de alimentación                                       |
| 3V3 / 3.3V-OUT    | Alimentación    |           | VOUT_3V3            | Salida regulada de 3,3V                                      |
| D0                | Analógico       | PA0       | A0, ADC             | GPIO y entrada analógica                                     |
| D1                | Analógico       | PA1       | A1, ADC             | GPIO y entrada analógica                                     |
| D2                | Analógico       | PA2       | A2, ADC             | GPIO y entrada analógica                                     |
| D3                | Analógico       | PA3       | A3, ADC             | GPIO y entrada analógica                                     |
| D4                | I2C             | PB7       | I2C1_SDA            | GPIO y datos I2C                                             |
| D5                | I2C             | PB6       | I2C1_SCL            | GPIO y reloj I2C                                             |
| D6                | UART            | PA9       | UART_TX             | GPIO y transmisión UART                                      |
| D7                | UART            | PA10      | UART_RX             | GPIO y recepción UART                                        |
| D8                | SPI             | PE2       | SPI_SCK             | GPIO y reloj SPI                                             |
| D9                | SPI             | PB0       | SPI_MISO            | GPIO y entrada de datos SPI                                  |
| D10               | SPI             | PB15      | SPI_MOSI            | GPIO y salida de datos SPI                                   |
| D11               | CAN FD          | PB8       | FDCAN1_RX           | GPIO y recepción de FDCAN1                                   |
| D12               | CAN FD          | PB9       | FDCAN1_TX           | GPIO y transmisión de FDCAN1                                 |
| D13               | CAN FD          | PB5       | FDCAN2_RX           | GPIO y recepción del transceptor CAN integrado en la placa   |
| D14               | CAN FD          | PB13      | FDCAN2_TX           | GPIO y transmisión del transceptor CAN integrado en la placa |
| D15               | Control CAN     | PB14      | CAN_STB             | Controla el modo de espera del transceptor CAN integrado en la placa |
| CAN_H             | Bus CAN         |           | TCAN3403 CANH       | Línea alta diferencial del bus CAN FD                        |
| CAN_L             | Bus CAN         |           | TCAN3403 CANL       | Línea baja diferencial del bus CAN FD                        |
| CANFD2_TERM       | Terminación CAN |           | JP1, 120 ohm        | Cortar/abrir para desactivar la resistencia de terminación de 120 ohm integrada en la placa |
| BAT+              | Alimentación de batería |           | VBAT                | Terminal positivo para una batería Li‑ion/LiPo de 3,7V       |
| BAT-              | Tierra de batería |           | GND                 | Terminal negativo de la batería                              |
| BAT_EN            | Monitor de batería | PA15      |                     | Habilita el circuito de medición de tensión de batería       |
| BAT_READ          | Analógico       | PA4       | ADC                 | Lee la tensión de la batería; la entrada ADC es aproximadamente VBAT / 2 |
| SWCLK             | Depuración      | PA14      | SWD Clock           | Pad de reloj Serial Wire Debug                               |
| SWDIO             | Depuración      | PA13      | SWD Data            | Pad de datos Serial Wire Debug                               |
| RST               | Sistema         | NRST      | STM32C5_RESET       | Pad de prueba de reinicio por hardware                       |
| USB_D+            | USB             | PA12      | USB_DP              | Datos diferenciales USB 2.0 positivos                        |
| USB_D-            | USB             | PA11      | USB_DN              | Datos diferenciales USB 2.0 negativos                        |
| BOOT              | Sistema         | PH2-BOOT0 | STM32C5_BOOT        | Pad de prueba de modo de arranque y señal del botón de arranque |
| CHARGE_LED        | Indicador       |           | Salida NCHG del cargador | LED rojo de estado de carga controlado por el CI cargador    |
| USER_LED          | Indicador GPIO  | PB12      | GPIO25 / User_LED   | LED verde de usuario; conectado activo en bajo               |
| IMU_SDA           | IMU integrada   | PB4       | I2C2_SDA            | Datos I2C para la IMU LSM6DS3TR-C integrada en la placa      |
| IMU_SCL           | IMU integrada   | PB3       | I2C2_SCL            | Reloj I2C para la IMU LSM6DS3TR-C integrada en la placa      |
| IMU_INT           | IMU integrada   | PC13      | IMU_INT1            | Salida de interrupción de la IMU integrada en la placa       |
| IMU_HEATER_PWM    | Calentador de IMU | PA8       | PWM                 | Control PWM para el calentador de compensación de temperatura de la IMU |

## Uso del bootloader

El XIAO STM32C5 viene de fábrica con un bootloader compatible con UF2, destinado principalmente a actualizaciones de firmware. Antes de flashear un archivo `.uf2`, pulsa rápidamente dos veces el botón de Reset integrado. En tu PC se montará una unidad de almacenamiento masivo llamada **XIAOC5BOOT**. Luego podrás copiar el archivo de firmware a esta unidad para completar el flasheo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_disk_1.png" style={{width:400, height:'auto'}}/></div>

## Primeros pasos con PlatformIO

Esta sección muestra el desarrollo y uso del XIAO STM32C5 encendiendo el LED de usuario integrado, utilizando la plataforma de desarrollo PlatformIO con el framework Zephyr RTOS.

### Preparación de hardware

Necesitas preparar lo siguiente:

- 1 x [Seeed Studio XIAO STM32C5](https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html)
- 1 x Ordenador
- 1 x Cable USB Type-C

<div className="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio XIAO STM32C5</th>
    </tr>
    <tr>
      <td>
       <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png" style={{width:400, height:'auto'}}/></div>
      </td>
    </tr>
    <tr>
      <td>
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html"
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

### Preparación de software

**Paso 1.** Descargar VS Code

Descarga [VS Code](https://code.visualstudio.com/download) según el sistema que estés utilizando

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VSCode_1.png" style={{width:800, height:'auto'}}/></div>
<br/>
**Paso 2.** Instalar la extensión PlatformIO

Abre VSCode, haz clic en Extensions, luego busca PlatformIO y selecciona instalar. Después de completar la instalación, reinicia VSCode.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VScode_2.png" style={{width:800, height:'auto'}}/></div>
<br/>

**Paso 3.** Instalar el paquete de plataforma platform-seeedboards

Las placas de la serie Seeed Studio XIAO utilizan una plataforma personalizada de PlatformIO, por lo que necesitas instalar manualmente el paquete de plataforma correspondiente.

- Ejecuta el siguiente comando para una instalación nueva:

```bash
pio pkg install -g -p "https://github.com/Seeed-Studio/platform-seeedboards.git"
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_new_1.png" style={{width:800, height:'auto'}}/></div>
<br/>

- Si has utilizado anteriormente placas de la serie Seeed Studio XIAO en PlatformIO, ejecuta el siguiente comando para actualizar:


```bash
# for Windows
pio pkg update -g -p "https://github.com/Seeed-Studio/platform-seeedboards.git"

# for macOS/Linux
pio pkg uninstall -g -p "SeeedStudio" && pio pkg install -g -p "SeeedStudio=https://github.com/Seeed-Studio/platform-seeedboards.git" --force
``` 

:::tip

Si quieres usar un proyecto existente de PlatformIO, reemplaza el contenido de **platformio.ini** como se muestra a continuación:

```ini
[env:seeed-xiao-stm32c5]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
framework = zephyr
board = seeed-xiao-stm32c5
```

:::

**Paso 4.** Crear un nuevo proyecto

- En la interfaz del plugin PlatformIO, selecciona crear un nuevo proyecto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_1.png" style={{width:800, height:'auto'}}/></div>

- Pon nombre a tu proyecto, elige **Seeed Studio XIAO STM32C5** como la placa de destino y configura el framework de desarrollo y la ruta de almacenamiento del proyecto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_2.png" style={{width:800, height:'auto'}}/></div>

:::tip

La creación del proyecto puede tardar algún tiempo en el primer inicio, espera con paciencia.

:::

### Compilar y subir

**Paso 1.** Escribir el programa de parpadeo del LED

El XIAO STM32C5 incorpora un LED de usuario asignado al GPIO PB12. El LED se enciende con un nivel lógico bajo; este ejemplo lo configura para parpadear cada 500 ms.

El proyecto consta de tres archivos principales:

- `main.c`: Programa principal que contiene la lógica de la aplicación.
- `app.overlay`: Archivo overlay de Devicetree para la configuración de periféricos de hardware.
- `prj.conf`: Archivo de configuración del proyecto para habilitar los módulos necesarios de Zephyr.

Sigue los pasos a continuación para encender el LED:

- Abre tu proyecto recién creado y crea el archivo devicetree `app.overlay` dentro de la carpeta `zephyr`.

```overlay
/* USB CDC console and the user LED are configured by the board DTS. */
```

- Crea el archivo de configuración `prj.conf` dentro de la carpeta `zephyr`.

```conf
# GPIO for LED control
CONFIG_GPIO=y
```

- Copia el código de referencia que se muestra a continuación en `main.c`.

```c
/*
 * Copyright (c) 2026 Seeed Technology Co., Ltd.
 * SPDX-License-Identifier: Apache-2.0
 *
 * Blinky example for XIAO STM32C5 with TinyUF2 bootloader support.
 * Based on Zephyr samples/basic/blinky.
 *
 * The 1200-bps UF2 bootloader trigger is armed automatically by the
 * board support package — no code changes needed in this example.
 */

#include <zephyr/kernel.h>
#include <zephyr/drivers/gpio.h>

#define SLEEP_TIME_MS 500

#define LED0_NODE DT_ALIAS(led0)

static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(LED0_NODE, gpios);

int main(void)
{
	int ret;
	bool led_state = true;

	if (!gpio_is_ready_dt(&led)) {
		return 0;
	}

	ret = gpio_pin_configure_dt(&led, GPIO_OUTPUT_ACTIVE);
	if (ret < 0) {
		return 0;
	}

	while (1) {
		ret = gpio_pin_toggle_dt(&led);
		if (ret < 0) {
			return 0;
		}

		led_state = !led_state;
		printk("LED state: %s\n", led_state ? "ON" : "OFF");
		k_msleep(SLEEP_TIME_MS);
	}

	return 0;
}
```

**Paso 2.** Compilar y subir el programa

- En la barra de herramientas inferior, ejecuta la compilación del proyecto con un solo clic.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_3.png" style={{width:800, height:'auto'}}/></div>

Alternativamente, también puedes compilar mediante la interfaz de línea de comandos.

```bash
pio run -e seeed-xiao-stm32c5
```

- Subir el firmware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_4.png" style={{width:800, height:'auto'}}/></div>

De manera similar, la carga del firmware también se puede completar a través de la línea de comandos.

```bash
pio run -e seeed-xiao-stm32c5 -t upload
```

- Resultado de la ejecución del programa

El LED integrado del XIAO STM32C5 parpadea con un intervalo de 500 ms.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_4_1.gif" style={{width:500, height:'auto'}}/></div>

Mientras tanto, el puerto serie muestra el estado de encendido/apagado del LED.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_4_2.png" style={{width:600, height:'auto'}}/></div>

## Uso de la batería

En la parte posterior del XIAO STM32C5 se reserva un conector de batería **BAT** para la alimentación mediante una batería de ion‑litio de 3,7 V‑4,2 V.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_5.png" style={{width:600, height:'auto'}}/></div>

### Lectura del voltaje de la batería

El XIAO STM32C5 incorpora circuitería de sensado de voltaje de batería y circuitería de carga de batería.

Dentro del circuito de sensado, **BAT_EN / PA15** habilita el chip TPS22916CNYFPR, mientras que **BAT_Reading / PA4** lee el voltaje de la batería. Se utilizan dos resistencias divisoras de voltaje de 10 kΩ, por lo que el valor medido equivale a la mitad del voltaje real de la batería de ion‑litio.

El Charge_LED parpadea durante la carga de la batería y se apaga una vez que la carga se completa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_6.png" style={{width:550, height:'auto'}}/></div>

- Modifica el código de aplicación correspondiente.

<details>

<summary>app.overlay</summary>

```overlay
/ {
	/* Expose the battery ADC input to the application. */
	zephyr,user {
		io-channels = <&adc1 4>;
	};
};

&adc1 {
	/* Add the battery input on PA4 (ADC1_IN4). */
	pinctrl-0 = <&adc1_in0_pa0 &adc1_in1_pa1 &adc1_in2_pa2
		     &adc1_in3_pa3 &adc1_in4_pa4>;

	channel@4 {
		reg = <4>;
		zephyr,gain = "ADC_GAIN_1";
		zephyr,reference = "ADC_REF_INTERNAL";
		zephyr,acquisition-time = <ADC_ACQ_TIME(ADC_ACQ_TIME_TICKS, 289)>;
		zephyr,resolution = <12>;
	};
};
```

</details>

<details>

<summary>prj.conf</summary>

```overlay
# Battery voltage measurement. USB CDC console support is supplied by the board.
CONFIG_ADC=y
CONFIG_GPIO=y
```

</details>

<details>

<summary>main.c</summary>

```c
/*
 * Copyright (c) 2026 Seeed Technology Co., Ltd.
 * SPDX-License-Identifier: Apache-2.0
 *
 * Read the XIAO STM32C5 battery voltage once per second.
 * printk() output uses USB CDC;
 * BAT_Reading/PA4 is added by app.overlay. BAT_EN/PA15 and USB CDC are
 * supplied by the board devicetree.
 */

#include <zephyr/device.h>
#include <zephyr/drivers/adc.h>
#include <zephyr/drivers/gpio.h>
#include <zephyr/kernel.h>
#include <zephyr/sys/printk.h>

#if !DT_NODE_EXISTS(DT_PATH(zephyr_user)) || \
	!DT_NODE_HAS_PROP(DT_PATH(zephyr_user), io_channels)
#error "No battery ADC io-channel specified"
#endif

#define BATTERY_ADC_NODE        DT_PATH(zephyr_user)
#define BAT_EN_NODE             DT_ALIAS(baten)
#define BATTERY_ENABLE_DELAY_MS 5
#define ADC_AVG_SAMPLES         16
#define SAMPLE_PERIOD_MS        1000

static const struct adc_dt_spec battery_adc =
	ADC_DT_SPEC_GET_BY_IDX(BATTERY_ADC_NODE, 0);
static const struct gpio_dt_spec bat_en =
	GPIO_DT_SPEC_GET(BAT_EN_NODE, gpios);

int main(void)
{
	uint16_t raw;
	struct adc_sequence sequence = {
		.buffer = &raw,
		.buffer_size = sizeof(raw),
	};
	int err;

	if (!device_is_ready(battery_adc.dev) || !gpio_is_ready_dt(&bat_en)) {
		printk("Battery ADC hardware is not ready\n");
		return 0;
	}

	err = gpio_pin_configure_dt(&bat_en, GPIO_OUTPUT_ACTIVE);
	if (err) {
		printk("BAT_EN configure failed: %d\n", err);
		return 0;
	}

	k_msleep(BATTERY_ENABLE_DELAY_MS);

	err = adc_channel_setup_dt(&battery_adc);
	if (err) {
		printk("Battery ADC channel setup failed: %d\n", err);
		return 0;
	}

	err = adc_sequence_init_dt(&battery_adc, &sequence);
	if (err) {
		printk("Battery ADC sequence init failed: %d\n", err);
		return 0;
	}

	printk("Battery voltage monitor (USB CDC)\n");

	while (1) {
		uint32_t raw_sum = 0;
		uint16_t raw_avg;
		int32_t adc_mv;

		/* Discard the first conversion after the one-second idle period. */
		err = adc_read(battery_adc.dev, &sequence);
		for (int i = 0; !err && i < ADC_AVG_SAMPLES; i++) {
			err = adc_read(battery_adc.dev, &sequence);
			raw_sum += raw;
		}

		if (!err) {
			raw_avg = raw_sum / ADC_AVG_SAMPLES;
			adc_mv = raw_avg;
			err = adc_raw_to_millivolts_dt(&battery_adc, &adc_mv);
			if (err) {
				printk("Battery voltage conversion failed: %d\n", err);
			} else {
				/* The 1:1 divider halves the battery voltage. */
				printk("Battery: %d mV\n", adc_mv * 2);
			}
		} else {
			printk("Battery ADC read failed: %d\n", err);
		}

		k_msleep(SAMPLE_PERIOD_MS);
	}

	return 0;
}
```

</details>

- Resultado de lectura de voltaje

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_6_1.png" style={{width:550, height:'auto'}}/></div>

## IMU

El XIAO STM32C5 incorpora un **[LSM6DS3TR‑C](https://www.st.com.cn/resource/en/datasheet/lsm6ds3tr-c.pdf) sensor inercial de 6 ejes** a bordo, que integra un acelerómetro de 3 ejes y un giroscopio de 3 ejes. Puede aplicarse a la detección de actitud, reconocimiento de movimiento, monitorización de vibraciones y otros casos de uso.

Para mitigar el impacto de la variación de la temperatura ambiente en el sesgo del sensor y la estabilidad de la medición, la placa implementa un circuito de calentamiento con compensación activa de temperatura. Las resistencias de calentamiento colocadas alrededor de la IMU proporcionan un calentamiento uniforme para el sensor, y la potencia de calentamiento puede ajustarse mediante señales PWM. Combinado con las lecturas de temperatura internas de la IMU, el control por software mantiene el sensor funcionando a una temperatura relativamente estable. Esto reduce la deriva de medición causada por la deriva de temperatura y mejora la consistencia de los datos durante el funcionamiento a largo plazo y en condiciones de temperatura variable.

- Uso de referencia: [XIAO STM32C5 IMU Usage](https://wiki.seeedstudio.com/es/xiao_stm32c5_application/#imu-usage)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_7.png" style={{width:550, height:'auto'}}/></div>

## CAN FD

El XIAO STM32C5 tiene dos controladores CAN FD. FDCAN1 expone pines TX y RX a nivel lógico y requiere un transceptor CAN externo para la conexión a un bus CAN. FDCAN2 está conectado al transceptor integrado [TCAN3403-Q1](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/tcan3403-q1.pdf) y se conecta al bus a través de las almohadillas CAN_H y CAN_L. La placa también puede intercambiar tramas CAN Clásico. Sin embargo, los nodos solo CAN Clásico no pueden decodificar tramas CAN FD, por lo que debes confirmar que los nodos activos en el bus admiten CAN FD antes de transmitir tráfico FD. CAN FD admite cargas útiles de hasta 64 bytes y, cuando la conmutación de velocidad de bits está habilitada, una velocidad de bits más alta durante la fase de datos.

La placa tiene una resistencia de terminación integrada de 120 Ω desconectable, habilitada por defecto. Mantenla habilitada cuando el XIAO esté en un extremo físico del bus CAN y ese extremo no tenga otro terminador. Deshabilítala cuando el XIAO sea un nodo intermedio o ya haya otro terminador instalado en el mismo extremo. Asegúrate de que el extremo opuesto del bus también esté correctamente terminado. El transceptor admite el modo de espera para reducir el consumo de energía cuando no se necesita comunicación CAN.

- Uso de referencia: [XIAO STM32C5 CANFD Usage](https://wiki.seeedstudio.com/es/xiao_stm32c5_canfd_usage/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_2.png" style={{width:550, height:'auto'}}/></div>

## Recursos

**Diseño de hardware**
- **📄[Datasheet]** [STM32C5A3CG](https://www.st.com/resource/en/datasheet/stm32c5a3cg.pdf)
- **📄[Datasheet]** [LSM6DS3TR-C](https://www.st.com.cn/resource/en/datasheet/lsm6ds3tr-c.pdf)
- **📄[Datasheet]** [TCAN3403D4BQ1](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/tcan3403-q1.pdf)
- **📄[Esquemático]** [XIAO STM32C5 Schematic](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/Seeed-Studio-XIAO-STM32C5-v1.0.pdf)
- **🗃️[Archivos de diseño de PCB]** 
  - [ XIAO STM32C5 Proyecto KiCad](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/XIAO_STM32C5_v1.0_SCH&PCB.zip)
  - [XIAO STM32C5 Proyecto Eagle](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/XIAO_STM32C5_v1.0_SCH&PCB.zip)
- **🗃️[Bibliotecas de diseño de PCB]** 
  - [XIAO Serie huellas KiCad](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip)
  - [XIAO Serie símbolos SCH KiCad](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip)
- **📄[Diagrama de pinout]** [XIAO STM32C5 hoja de pinout](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/XIAO-STM32C5-pinout_sheet.xlsx)

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
