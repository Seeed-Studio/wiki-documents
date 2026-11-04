---
title:  Multiplexación de pines con XIAO STM32C5
description: ''
keywords:
  - xiao
  - stm32
  - stm32c5
  - multiplexación de pines
image: https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/Seeed-Studio-XIAO-STM32C5.webp
slug: /xiao_stm32c5_pin_multiplexing
sku: 100036669
last_update:
  date: 08/26/2026
  author: Zeller
createdAt: '2026-08-26'
updatedAt: '2026-09-01'
url: https://wiki.seeedstudio.com/es/xiao_stm32c5_pin_multiplexing/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiaostm32c5_pinmux.png" style={{width:600, height:'auto'}}/></div>

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

El XIAO STM32C5 cuenta con abundantes recursos de pines y admite de forma nativa el desarrollo con varias interfaces periféricas estándar, incluidas Digital, Analógica, SPI e IIC. Este artículo muestra implementaciones relevantes con casos de aplicación prácticos.

:::tip

Este tutorial se desarrolla sobre la base del sistema de compilación PlatformIO y Zephyr RTOS.
Si no estás familiarizado con la creación de un proyecto para el XIAO STM32C5 en PlatformIO, puedes ir a [Primeros pasos con Seeed Studio XIAO STM32C5](https://wiki.seeedstudio.com/es/xiao_stm32c5_getting_started/#getting-started-with-platformio)

:::

## Digital

Los pines digitales realizan principalmente el control de encendido y apagado de sensores y actuadores externos mediante la salida de niveles lógicos altos y bajos. Combinado con la placa de expansión Grove Base for XIAO y los módulos periféricos estándar Grove, esta sección detalla la lógica del controlador subyacente y los métodos prácticos de invocación de los pines digitales en el XIAO STM32C5.

### Preparación de hardware

<table align="center">
 <tr>
   <th>Seeed Studio XIAO STM32C5</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - LED Pack</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png" style={{width:300, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:300, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/r/grove-led-pack-all-2.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-LED-Pack-p-4364.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Preparación de software

Según el pinout del XIAO STM32C5, se puede seleccionar D1 como pin de control para el Grove - LED Pack

:::tip

- Para el pinout del XIAO STM32C5, haz clic en [Lista de pines de XIAO STM32C5](https://wiki.seeedstudio.com/es/xiao_stm32c5_getting_started/#hardware-overview) para ver los detalles.

:::

Escribe el programa para main.c

```cpp
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

#define SLEEP_TIME_MS 1000

#define D1_PIN 1

static const struct device *const d1_gpio = DEVICE_DT_GET(DT_NODELABEL(gpioa));

int main(void)
{
	int ret;
	bool led_state = true;

	if (!device_is_ready(d1_gpio)) {
		return 0;
	}

	ret = gpio_pin_configure(d1_gpio, D1_PIN, GPIO_OUTPUT_ACTIVE);
	if (ret < 0) {
		return 0;
	}

	while (1) {
		ret = gpio_pin_toggle(d1_gpio, D1_PIN);
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

### Resultado

Después de flashear el firmware, el LED rojo parpadea.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/pin_mux_1.gif" style={{width:600, height:'auto'}}/></div>

Abre el Monitor Serie y ajusta la velocidad en baudios a **115200**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_4_2.png" style={{width:600, height:'auto'}}/></div>

## PWM

PWM es una función de salida de forma de onda temporizada implementada sobre la base de GPIOs de salida digital. Cambia rápidamente los niveles del pin a una frecuencia fija y ajusta dinámicamente el ciclo de trabajo del nivel alto dentro de un solo ciclo, para así entregar señales analógicas equivalentes a los periféricos. En aplicaciones de ingeniería práctica, PWM se utiliza ampliamente para el control preciso del ángulo de servomotores y el ajuste suave del brillo de los LEDs.

### Controlar un servomotor

#### Preparación de hardware

<table align="center">
 <tr>
   <th>Seeed Studio XIAO STM32C5</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Servo</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedimg2016-06rjmxymiq9lqxkkxxwg6udxfm.jpg" style={{width:400, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Servo.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

#### Preparación de software

Según el pinout del XIAO STM32C5, **D0** se puede seleccionar como pin de control para el **Grove-Servo**.

:::tip

- Para el pinout del XIAO STM32C5, haz clic en [Lista de pines de XIAO STM32C5](https://wiki.seeedstudio.com/es/xiao_stm32c5_getting_started/#hardware-overview) para ver los detalles.

:::

1. Modifica el archivo `app.overlay`. En el XIAO STM32C5, D0 corresponde al pin PA0. Configurando PA0 como la función alternativa AF1 en el DeviceTree, se puede usar TIM2_CH1 para generar una señal PWM.

<details>
<summary>app.overlay</summary>

```dts
#include <zephyr/dt-bindings/pwm/pwm.h>

&{/pwmleds} {
	servo: servo {
		pwms = <&pwm2 1 PWM_MSEC(20) PWM_POLARITY_NORMAL>;
	};
};

&timers2 {
	st,prescaler = <143>;
	status = "okay";

	pwm2: pwm {
		pinctrl-0 = <&tim2_ch1_pa0>;
		pinctrl-names = "default";
		status = "okay";
	};
};

```
</details>

2. Modifica el archivo `prj.conf` para habilitar las configuraciones PWM relevantes.

```prj
CONFIG_PWM=y
```

3. Escribe el programa main.c para implementar la función de control del servo por PWM y configurar parámetros como el periodo de PWM.

<details>

<summary>main.c</summary>

```cpp
#include <zephyr/kernel.h>
#include <zephyr/device.h>
#include <zephyr/drivers/pwm.h>
#include <zephyr/sys/printk.h>

#define SERVO_PERIOD_NS PWM_MSEC(20)
#define SERVO_MIN_NS PWM_USEC(500)
#define SERVO_MAX_NS PWM_USEC(2500)
#define SERVO_CHANNEL 1
#define STEP_FWD_MS 10
#define STEP_RET_MS 30

static const struct device *pwm_dev = DEVICE_DT_GET(DT_NODELABEL(pwm2));

static int set_angle(int degrees)
{
	uint32_t pulse = SERVO_MIN_NS +
		(uint32_t)((uint64_t)degrees *
		(SERVO_MAX_NS - SERVO_MIN_NS) / 180U);

	return pwm_set(pwm_dev, SERVO_CHANNEL, SERVO_PERIOD_NS, pulse,
		PWM_POLARITY_NORMAL);
}

int main(void)
{
	printk("=== boot ===\n");

	if (!device_is_ready(pwm_dev)) {
		printk("Error: PWM device not ready\n");
		return -1;
	}

	printk("Servo control started on D0\n");

	while (1) {
		for (int angle = 0; angle <= 180; angle++) {
			if (set_angle(angle)) {
				printk("PWM error at %d deg\n", angle);
			} else {
				printk("Angle: %d deg\n", angle);
			}
			k_msleep(STEP_FWD_MS);
		}

		for (int angle = 180; angle >= 0; angle--) {
			if (set_angle(angle)) {
				printk("PWM error at %d deg\n", angle);
			} else {
				printk("Angle: %d deg\n", angle);
			}
			k_msleep(STEP_RET_MS);
		}
	}

	return 0;
}
```

</details>

#### Resultado

El ángulo ordenado avanza 1° cada 10 ms desde 0° hasta 180°, luego disminuye 1° cada 30 ms. La velocidad de movimiento real depende del servo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/pin_mux_2.gif" style={{width:600, height:'auto'}}/></div>

### Controlar un zumbador

La Seeed Studio Expansion Board Base for XIAO está equipada con un zumbador electromagnético pasivo integrado que puede ser accionado por señales PWM. Ajustando la frecuencia, el ciclo de trabajo y el tiempo de salida del PWM, se pueden controlar el tono, el volumen y la duración del sonido del zumbador, lo que permite funciones como sonidos de aviso de teclas, alertas de estado y alarmas.

#### Preparación de hardware

<table align="center">
 <tr>
   <th>Seeed Studio XIAO STM32C5</th>
        <th>Seeed Studio Expansion Board Base for XIAO</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/z/h/zheng2.jpg" style={{width:400, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

#### Preparación de software

:::tip

- Para el pinout del XIAO STM32C5, haz clic en [XIAO STM32C5 Pin List](https://wiki.seeedstudio.com/es/xiao_stm32c5_getting_started/#visión-general-del-hardware) para ver los detalles.

:::

1. Modifica el archivo `app.overlay`. En el XIAO STM32C5, A3/D3 corresponde al pin PA3, que está conectado al zumbador electromagnético pasivo LET5020CS-03L integrado a través de un MOSFET 2N7002PW en la Seeed Studio Expansion Board Base for XIAO. Configurando PA3 como la función alternativa AF1 en el DeviceTree, TIM2_CH4 puede generar una señal PWM de 4 kHz con un período de 250 μs y un ciclo de trabajo del 50% para accionar el zumbador.

<details>
<summary>app.overlay</summary>

```dts
#include <zephyr/dt-bindings/gpio/gpio.h>
#include <zephyr/dt-bindings/input/input-event-codes.h>
#include <zephyr/dt-bindings/pwm/pwm.h>

/ {
	buttons {
		compatible = "gpio-keys";

		expansion_button: button {
			gpios = <&xiao_d 1 (GPIO_PULL_UP | GPIO_ACTIVE_LOW)>;
			zephyr,code = <INPUT_KEY_0>;
		};
	};

	pwmleds {
		compatible = "pwm-leds";

		expansion_buzzer: buzzer {
			/* LET5020CS-03L: 4 kHz resonant frequency. */
			pwms = <&pwm2 4 PWM_USEC(250) PWM_POLARITY_NORMAL>;
		};
	};

	aliases {
		sw1 = &expansion_button;
		buzzer = &expansion_buzzer;
	};
};

&timers2 {
	st,prescaler = <143>;
	status = "okay";

	pwm2: pwm {
		pinctrl-0 = <&tim2_ch4_pa3>;
		pinctrl-names = "default";
		status = "okay";
	};
};
```
</details>

2. Modifica el archivo `prj.conf` para habilitar las configuraciones PWM relevantes.

```prj
CONFIG_GPIO=y
CONFIG_PWM=y
```

3. Modifica el programa main.c.
<details>

<summary>main.c</summary>

```cpp
/*
 * Copyright (c) 2026 Seeed Technology Co., Ltd.
 * SPDX-License-Identifier: Apache-2.0
 *
 * Expansion Board Base for XIAO buzzer demo:
 * press the onboard button (D1) to sound the onboard buzzer (A3/D3).
 */

#include <zephyr/kernel.h>
#include <zephyr/drivers/gpio.h>
#include <zephyr/drivers/pwm.h>
#include <zephyr/sys/printk.h>

static const struct gpio_dt_spec button =
	GPIO_DT_SPEC_GET(DT_ALIAS(sw1), gpios);
static const struct pwm_dt_spec buzzer =
	PWM_DT_SPEC_GET(DT_ALIAS(buzzer));

int main(void)
{
	bool buzzer_on = false;
	int ret;

	if (!gpio_is_ready_dt(&button) || !pwm_is_ready_dt(&buzzer)) {
		printk("Button or buzzer device not ready\n");
		return -1;
	}

	ret = gpio_pin_configure_dt(&button, GPIO_INPUT);
	if (ret < 0) {
		printk("Button configuration failed: %d\n", ret);
		return ret;
	}

	ret = pwm_set_dt(&buzzer, buzzer.period, 0);
	if (ret < 0) {
		printk("Buzzer configuration failed: %d\n", ret);
		return ret;
	}

	printk("Press the D1 button to sound the A3 buzzer\n");

	while (1) {
		int pressed = gpio_pin_get_dt(&button);

		if (pressed < 0) {
			printk("Button read failed: %d\n", pressed);
			return pressed;
		}

		if ((pressed != 0) != buzzer_on) {
			ret = pwm_set_dt(&buzzer, buzzer.period,
					 pressed ? buzzer.period / 2U : 0U);
			if (ret < 0) {
				printk("Buzzer control failed: %d\n", ret);
				return ret;
			}

			buzzer_on = pressed != 0;
			printk("Buzzer: %s\n", buzzer_on ? "ON" : "OFF");
		}

		k_msleep(20);
	}
}
```

</details>

#### Resultado

Cuando se presiona el botón en la Seeed Studio Expansion Board Base for XIAO, el zumbador sonará. Abre el Monitor Serie y ajusta la velocidad en baudios a **115200**, y se imprimirá el estado correspondiente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/pin_mux_4_1.png" style={{width:600, height:'auto'}}/></div>

## Analógico

La E/S analógica se basa en un convertidor analógico-digital (ADC) y se utiliza principalmente para capturar señales de voltaje analógicas continuas generadas por sensores externos. Después de obtener los valores digitales de muestreo en bruto (Raw Data), se pueden mapear a valores reales de medición de ingeniería utilizando algoritmos de conversión lineales o no lineales específicos. Esta función se utiliza ampliamente en escenarios como el muestreo de voltaje de batería y la monitorización en tiempo real de magnitudes físicas, incluyendo la humedad del suelo y la temperatura ambiente.

### Preparación de hardware

<table align="center">
 <tr>
   <th>Seeed Studio XIAO STM32C5</th>
        <th>Seeed Studio Grove Base for XIAO </th>
        <th>Grove - Capacitive Soil Moisture Sensor</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/_/2_1_1.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Capacitive-Moisture-Sensor-Corrosion-Resistant-p-2580.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Preparación de software

1. Modifica el archivo `app.overlay`. En el DTS a nivel de placa del XIAO STM32C5, A0 ya está completamente configurado como PA0, canal 0 de ADC1, con resolución de 12 bits. Por lo tanto, en `app.overlay`, `zephyr,user` debe hacer referencia al canal 0 de ADC1.

```dts
/ {
	zephyr,user {
		io-channels = <&adc1 0>;
	};
};
```

2. Modifica el archivo `prj.conf` para habilitar las configuraciones relacionadas con el ADC.

```prj
CONFIG_ADC=y
```

3. Modifica el programa main.c.

<details>

<summary>main.c</summary>

```cpp
#include <zephyr/kernel.h>
#include <zephyr/drivers/adc.h>
#include <zephyr/sys/printk.h>

static const struct adc_dt_spec adc_ch =
	ADC_DT_SPEC_GET(DT_PATH(zephyr_user));

int main(void)
{
	int ret;
	int16_t buffer;
	struct adc_sequence sequence = {
		.buffer = &buffer,
		.buffer_size = sizeof(buffer),
	};

	if (!adc_is_ready_dt(&adc_ch)) {
		printk("ADC not ready\n");
		return -1;
	}

	ret = adc_channel_setup_dt(&adc_ch);
	if (ret < 0) {
		printk("ADC channel setup failed: %d\n", ret);
		return ret;
	}

	adc_sequence_init_dt(&adc_ch, &sequence);
	printk("A0 ADC example started\n");

	while (1) {
		ret = adc_read_dt(&adc_ch, &sequence);
		if (ret < 0) {
			printk("ADC read error: %d\n", ret);
		} else {
			printk("ADC raw: %d\n", buffer);
		}

		k_msleep(500);
	}
}
```

</details>

### Resultado

Después de flashear el programa, inserta el Grove-Capacitive Soil Moisture Sensor en plantas en maceta domésticas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/pin_mux_3.jpg" style={{width:600, height:'auto'}}/></div>
<br/>
Abre el asistente de puerto serie en tu ordenador y observa los valores de salida.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/pin_mux_3_1.png" style={{width:800, height:'auto'}}/></div>
<br/>
:::tip

Tabla de lectura de referencia de voltaje

| Estado | Voltaje de salida del sensor | Valor bruto del ADC |
| -------------- | -------------- | ---------------- |
| En el aire (seco) | ~2.0–2.4V | ~3400–4095 |
| En suelo húmedo | ~1.3–1.8V | ~2200–3000 |
| Totalmente sumergido en agua | ~0.8–1.2V | ~1365–2048 |

:::

:::note

Los resultados de las mediciones pueden variar bajo diferentes condiciones ambientales. Consulta los valores realmente medidos.

:::

## UART

El receptor/transmisor asíncrono universal (UART) es un protocolo estándar de comunicación serie asíncrona. No requiere señales de reloj externas para la sincronización y realiza la transmisión y recepción de datos de forma asíncrona basándose en la velocidad en baudios preestablecida por ambas partes de la comunicación. En cuanto al cableado físico, se puede establecer un enlace de datos full-dúplex simplemente cruzando los pines TX y RX de los dispositivos y conectando sus tierras en común. Gracias a su coste de hardware mínimo y a la compatibilidad con el envío y la recepción simultáneos, UART se adopta ampliamente en sistemas embebidos para la salida de registros de consola, la depuración de periféricos modulares y la comunicación de datos punto a punto de bajo ancho de banda.

### Preparación de hardware

<table align="center">
 <tr>
   <th>Seeed Studio XIAO STM32C5</th>
        <th>USB to TTL Converter</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-317990026-ch340g-usb-to-serial-_ttl_-module_adapter.jpg" style={{width:400, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/CH340G-USB-to-Serial-TTL-Module-Adapter-p-2359.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Preparación de software

1. Modifica app.overlay. En el XIAO STM32C5, D6 corresponde a PA9 / USART1_TX y D7 corresponde a PA10 / USART1_RX. El nodo correspondiente en DeviceTree es usart1. Establece la velocidad en baudios predeterminada en 115200.

```dtsi
/ {
	chosen {
		zephyr,console = &usart1;
		zephyr,shell-uart = &usart1;
	};
};
```

2. Modifica prj.conf para habilitar la compatibilidad con la consola serie.

```prj
CONFIG_SERIAL=y
CONFIG_CONSOLE=y
CONFIG_UART_CONSOLE=y
CONFIG_UART_INTERRUPT_DRIVEN=y
CONFIG_PRINTK=y
```

3. El programa imprime el mapeo de pines UART al inicio, hace eco de los datos recibidos e imprime un mensaje periódico de estado de funcionamiento.

<details>

<summary>main.c</summary>

```c
#include <zephyr/kernel.h>
#include <zephyr/device.h>
#include <zephyr/drivers/uart.h>
#include <zephyr/sys/printk.h>

#define RX_BUFFER_SIZE 128
#define RX_TIMEOUT_MS  50

static const struct device *const uart = DEVICE_DT_GET(DT_NODELABEL(usart1));
K_MSGQ_DEFINE(rx_msgq, sizeof(uint8_t), RX_BUFFER_SIZE, 1);

static void uart_rx_isr(const struct device *dev, void *user_data)
{
	uint8_t data[16];
	int length;

	ARG_UNUSED(user_data);

	if (!uart_irq_update(dev)) {
		return;
	}

	while (uart_irq_rx_ready(dev)) {
		length = uart_fifo_read(dev, data, sizeof(data));
		if (length <= 0) {
			break;
		}

		for (int i = 0; i < length; i++) {
			(void)k_msgq_put(&rx_msgq, &data[i], K_NO_WAIT);
		}
	}
}

int main(void)
{
	char rx_buffer[RX_BUFFER_SIZE];
	size_t rx_length = 0;
	int64_t last_rx_time = 0;
	int64_t last_debug_time = k_uptime_get();

	if (!device_is_ready(uart)) {
		return -1;
	}

	if (uart_irq_callback_user_data_set(uart, uart_rx_isr, NULL) < 0) {
		return -1;
	}

	uart_irq_rx_enable(uart);

	printk("\r\nXIAO STM32C5 UART demo\r\n");
	printk("D6: TX, D7: RX, 115200 8N1\r\n");
	printk("Type a character to test RX and echo.\r\n");

	while (1) {
		uint8_t data;
		int64_t now;

		while (k_msgq_get(&rx_msgq, &data, K_NO_WAIT) == 0) {
			last_rx_time = k_uptime_get();

			if (data == '\r' || data == '\n') {
				if (rx_length > 0) {
					rx_buffer[rx_length] = '\0';
					printk("RX: %s\r\n", rx_buffer);
					rx_length = 0;
				}
			} else if (rx_length < RX_BUFFER_SIZE - 1) {
				rx_buffer[rx_length++] = (char)data;
			}
		}

		now = k_uptime_get();

		/* Also print strings sent without a trailing CR/LF. */
		if (rx_length > 0 && now - last_rx_time >= RX_TIMEOUT_MS) {
			rx_buffer[rx_length] = '\0';
			printk("RX: %s\r\n", rx_buffer);
			rx_length = 0;
		}

		if (now - last_debug_time >= 1000) {
			printk("UART debug: system running\r\n");
			last_debug_time = now;
		}

		k_msleep(1);
	}
}
```

</details>

### Resultado

1. Cablea de acuerdo con el orden de la tabla

| XIAO STM32C5 | CH340 |
| --------------- | ----- |
| GND             | GND   |
| D6 - TX      | RX    |
| D7 - RX      | TX    |

2. Puedes usar un monitor serie para ver la información en tiempo de ejecución. También puedes enviar datos a través del puerto serie, y los datos recibidos se imprimirán en la consola.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/pin_mux_4.png" style={{width:800, height:'auto'}}/></div>

## I2C

I2C es un protocolo de comunicación de datos síncrono y half-dúplex. Permite la conexión de múltiples dispositivos mediante direccionamiento a través de la línea de reloj SCL y la línea de datos SDA, y se utiliza comúnmente para leer datos de sensores que requieren tasas de transmisión relativamente altas, como IMU y sensores de temperatura/humedad, o para la salida de pantallas OLED.

### Preparación de hardware

<table align="center">
 <tr>
   <th>Seeed Studio XIAO STM32C5</th>
        <th>Seeed Studio Expansion Board Base for XIAO</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/z/h/zheng2.jpg" style={{width:400, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Preparación de software

1. En el XIAO STM32C5, D4 corresponde a PB7 / I2C1_SDA y D5 corresponde a PB6 / I2C1_SCL. Dado que I2C1 ya está habilitado en el DTS a nivel de placa, añade un nodo de pantalla SSD1306 en la dirección I2C 0x3C. Modifica app.overlay como se indica a continuación:

```dts
/ {
	chosen {
		zephyr,display = &oled;
	};
};

&i2c1 {
	oled: ssd1306@3c {
		compatible = "solomon,ssd1306";
		reg = <0x3c>;
		width = <128>;
		height = <64>;
		segment-offset = <0>;
		page-offset = <0>;
		display-offset = <0>;
		multiplex-ratio = <63>;
		segment-remap;
		com-invdir;
		prechargep = <0x22>;
	};
};

```

2. Modifica el archivo `prj.conf` para habilitar las configuraciones relacionadas con I2C y la pantalla.

```conf
CONFIG_DISPLAY=y
CONFIG_CHARACTER_FRAMEBUFFER=y
CONFIG_HEAP_MEM_POOL_SIZE=2048
```

3. Escribe la función principal para establecer la posición de la pantalla y las funciones para la cadena.

<details>

<summary>main.c</summary>

```c
#include <zephyr/device.h>
#include <zephyr/display/cfb.h>
#include <zephyr/sys/printk.h>

int main(void)
{
	const struct device *display = DEVICE_DT_GET(DT_CHOSEN(zephyr_display));

	if (!device_is_ready(display)) {
		printk("OLED not ready\n");
		return -1;
	}

	if (cfb_framebuffer_init(display)) {
		return -1;
	}

	cfb_framebuffer_clear(display, true);
	cfb_framebuffer_set_font(display, 0);
	cfb_print(display, "XIAO STM32C5", 4, 8);
	cfb_print(display, "Hello World", 9, 32);
	cfb_framebuffer_finalize(display);
	display_blanking_off(display);

	return 0;
}
```

</details>

### Resultado

Después de que el programa se ejecute, la pantalla OLED muestra **XIAO STM32C5 Hello World**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/pin_mux_5.jpg" style={{width:600, height:'auto'}}/></div>

## SPI

SPI es un protocolo de comunicación de alta velocidad, síncrono y full-dúplex. A diferencia de la comunicación asíncrona, SPI se basa en una línea de reloj SCLK dedicada para una sincronización precisa de los datos. Generalmente adopta la topología clásica de hardware de cuatro hilos que consta de los pines MOSI, MISO y de selección de chip CS/SS. Equipado con canales independientes de envío y recepción de datos y una alta frecuencia de reloj de bus, SPI ofrece un excelente rendimiento de transferencia de datos. Se utiliza ampliamente en escenarios de control de periféricos que exigen un gran ancho de banda, como dispositivos de almacenamiento masivo, incluidas memorias Flash y tarjetas SD, pantallas de alta resolución y alta frecuencia de actualización, y sensores de muestreo de alta frecuencia.

A continuación, se demostrará un ejemplo con una tarjeta SD: leer el tamaño de la tarjeta SD y escribir en ella un archivo llamado `XIAOTEST.TXT`, con el contenido **Hello XIAO STM32C5**.

### Preparación de hardware

<table align="center">
 <tr>
   <th>Seeed Studio XIAO STM32C5</th>
        <th>Seeed Studio Expansion Board Base for XIAO</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/z/h/zheng2.jpg" style={{width:400, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

:::tip

Además, también necesitas preparar una tarjeta SD formateada como FAT32, con una capacidad de almacenamiento de **32 GB o menos**.

:::

### Preparación de software

1. Los pines predeterminados del bus SPI del XIAO STM32C5 son D8 - SPI_SCK, D9 - SPI_MISO y D10 - SPI_MOSI. El nodo correspondiente en el DTS a nivel de placa es `SPI3`. Además, es necesario seleccionar un pin CS de selección de chip, y aquí se selecciona D2.

<details>

<summary>app.overlay</summary>

```dts
#include <zephyr/dt-bindings/gpio/gpio.h>

/ {
	chosen {
		zephyr,display = &oled;
	};
};

&i2c1 {
	oled: ssd1306@3c {
		compatible = "solomon,ssd1306";
		reg = <0x3c>;
		width = <128>;
		height = <64>;
		segment-offset = <0>;
		page-offset = <0>;
		display-offset = <0>;
		multiplex-ratio = <63>;
		segment-remap;
		com-invdir;
		prechargep = <0x22>;
	};
};

&spi3 {
	cs-gpios = <&gpioa 2 GPIO_ACTIVE_LOW>; /* D2: SD card CS */

	sdhc0: sdhc@0 {
		compatible = "zephyr,sdhc-spi-slot";
		reg = <0>;
		status = "okay";
		spi-max-frequency = <8000000>;

		mmc {
			compatible = "zephyr,sdmmc-disk";
			disk-name = "SD";
			status = "okay";
		};
	};
};

```

</details>
<br/>

2. Modifica prj.conf para habilitar las configuraciones relacionadas con SPI.

```prj
CONFIG_DISK_ACCESS=y
CONFIG_FILE_SYSTEM=y
CONFIG_FAT_FILESYSTEM_ELM=y
CONFIG_SDHC=y
CONFIG_SDMMC_SUBSYS=y

CONFIG_DISPLAY=y
CONFIG_CHARACTER_FRAMEBUFFER=y

CONFIG_MAIN_STACK_SIZE=4096
CONFIG_HEAP_MEM_POOL_SIZE=4096
CONFIG_PRINTK=y
```

3. Modifica el programa main.c.

<details>

<summary>main.c</summary>

```c
/*
 * XIAO STM32C5 SD card read/write example.
 *
 * SD card (SPI3, FAT32):
 *   D8  - SCK
 *   D9  - MISO
 *   D10 - MOSI
 *   D2  - CS
 *
 * 0.96-inch SSD1306 OLED (128x64, I2C address 0x3C):
 *   D4 - SDA
 *   D5 - SCL
 *
 * The example waits 500 ms after power-on, reads the SD card capacity,
 * creates /XIAOTEST.TXT, writes "Hello XIAO STM32C5", then reads the file
 * back for verification. Card size, write progress, and the final result
 * are displayed on the OLED and printed through the USB CDC console.
 */

#include <errno.h>
#include <string.h>
#include <zephyr/device.h>
#include <zephyr/display/cfb.h>
#include <zephyr/fs/fs.h>
#include <zephyr/kernel.h>
#include <zephyr/storage/disk_access.h>
#include <zephyr/sys/printk.h>
#include <ff.h>

#define DISK_NAME   "SD"
#define MOUNT_POINT "/SD:"
#define TEST_FILE   MOUNT_POINT "/XIAOTEST.TXT"
#define TEST_TEXT   "Hello XIAO STM32C5"

static const struct device *const oled = DEVICE_DT_GET(DT_CHOSEN(zephyr_display));
static FATFS fat_fs;
static struct fs_mount_t mount = {
	.type = FS_FATFS,
	.fs_data = &fat_fs,
	.mnt_point = MOUNT_POINT,
};

static void oled_show(const char *line1, const char *line2,
		      const char *line3, const char *line4)
{
	cfb_framebuffer_clear(oled, false);
	cfb_print(oled, line1, 0, 0);
	cfb_print(oled, line2, 0, 16);
	cfb_print(oled, line3, 0, 32);
	cfb_print(oled, line4, 0, 48);
	cfb_framebuffer_finalize(oled);
}

int main(void)
{
	uint32_t sector_count;
	uint32_t sector_size;
	uint64_t size_mb;
	char size_line[24];
	char readback[sizeof(TEST_TEXT)] = { 0 };
	struct fs_file_t file;
	int ret;

	/* Allow the USB CDC console time to become available after power-on. */
	k_msleep(500);
	printk("\n=== XIAO STM32C5 SD Card Test ===\n");
	printk("SD: D8=SCK, D9=MISO, D10=MOSI, D2=CS\n");
	printk("OLED: D4=SDA, D5=SCL\n");

	if (!device_is_ready(oled) || cfb_framebuffer_init(oled) != 0) {
		printk("OLED initialization failed\n");
		return -1;
	}

	cfb_framebuffer_set_font(oled, 0);
	display_blanking_off(oled);
	oled_show("SD Card Test", "Initializing...", "", "");

	/* Initialize the SD card and read its physical capacity. */
	ret = disk_access_ioctl(DISK_NAME, DISK_IOCTL_CTRL_INIT, NULL);
	if (ret != 0) {
		oled_show("SD Card Test", "SD init FAILED", "Check card/wires", "");
		printk("SD card initialization failed: %d\n", ret);
		return ret;
	}
	printk("SD card initialized\n");

	ret = disk_access_ioctl(DISK_NAME, DISK_IOCTL_GET_SECTOR_COUNT,
				&sector_count);
	ret |= disk_access_ioctl(DISK_NAME, DISK_IOCTL_GET_SECTOR_SIZE,
				 &sector_size);
	if (ret != 0) {
		oled_show("SD Card Test", "Read size FAILED", "", "");
		printk("Failed to read SD card capacity: %d\n", ret);
		return ret;
	}

	size_mb = ((uint64_t)sector_count * sector_size) / (1024U * 1024U);
	snprintk(size_line, sizeof(size_line), "Size: %llu MB", size_mb);
	oled_show("SD Card Test", size_line, "Mounting FAT32", "");
	printk("SD card size: %llu MB\n", size_mb);
	printk("Mounting FAT32 file system...\n");

	ret = fs_mount(&mount);
	if (ret != 0) {
		oled_show("SD Card Test", size_line, "Mount FAILED", "Use FAT32 card");
		printk("FAT32 mount failed: %d\n", ret);
		return ret;
	}
	printk("FAT32 mounted\n");

	/* Create or replace the test file and write the requested text. */
	oled_show("SD Card Test", size_line, "Writing file...", "");
	printk("Writing %s...\n", TEST_FILE);
	fs_file_t_init(&file);
	ret = fs_open(&file, TEST_FILE, FS_O_CREATE | FS_O_WRITE | FS_O_TRUNC);
	if (ret == 0) {
		ret = fs_write(&file, TEST_TEXT, sizeof(TEST_TEXT) - 1);
		if (ret == sizeof(TEST_TEXT) - 1) {
			ret = fs_sync(&file);
		} else if (ret >= 0) {
			ret = -EIO;
		}
		fs_close(&file);
	}

	/* Read the file back so SUCCESS means the stored data was verified. */
	if (ret == 0) {
		fs_file_t_init(&file);
		ret = fs_open(&file, TEST_FILE, FS_O_READ);
		if (ret == 0) {
			ret = fs_read(&file, readback, sizeof(readback) - 1);
			fs_close(&file);
			if (ret == sizeof(TEST_TEXT) - 1 &&
			    strcmp(readback, TEST_TEXT) == 0) {
				ret = 0;
			} else if (ret >= 0) {
				ret = -EIO;
			}
		}
	}

	fs_unmount(&mount);
	if (ret == 0) {
		oled_show("SD Card Test", size_line, "Write: SUCCESS", "File verified");
		printk("Write successful: %s\n", TEST_TEXT);
		printk("Readback verification successful\n");
	} else {
		oled_show("SD Card Test", size_line, "Write: FAILED", "Check SD card");
		printk("SD card write failed: %d\n", ret);
	}

	return ret;
}

```

</details>
<br/>

### Resultado

- La pantalla mostrará información como el estado de montaje de la tarjeta SD, la capacidad de la tarjeta SD y si el archivo se escribió correctamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/pin_mux_6.jpg" style={{width:600, height:'auto'}}/></div>

- Abre el Monitor Serie para ver la información de escritura del archivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/pin_mux_6_1.png" style={{width:600, height:'auto'}}/></div>

- Retira la tarjeta SD e insértala en un lector de tarjetas conectado a tu ordenador para inspeccionar el archivo escrito.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/pin_mux_6_2.png" style={{width:600, height:'auto'}}/></div>

## RTC

RTC (Real-Time Clock) es un periférico de temporización de hardware de bajo consumo que se utiliza para mantener continuamente información precisa de hora y calendario. Normalmente funciona a partir de una fuente de reloj independiente de baja frecuencia, como un oscilador de cristal de 32,768 kHz, y puede seguir funcionando a través del dominio de alimentación de respaldo cuando el sistema principal está apagado. Los periféricos RTC suelen admitir segundos, minutos, horas, fechas, días de la semana, meses y años, así como funciones de alarma, despertador periódico y marca de tiempo. El RTC se utiliza ampliamente en aplicaciones que requieren cronometraje a largo plazo, activación programada, registro de eventos y funcionamiento de bajo consumo, como registradores de datos, controladores industriales, dispositivos de hogar inteligente e instrumentos portátiles.

El Round Display for Seeed Studio XIAO incorpora un circuito RTC integrado. A continuación se muestra el funcionamiento de la función de reloj RTC con el XIAO STM32C5.

### Preparación de hardware

<table align="center">
 <tr>
   <th>Seeed Studio XIAO STM32C5</th>
        <th>Round Display for Seeed Studio XIAO</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-104030087-seeed-studio-round-display-for-xiao-new-font.jpg" style={{width:400, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/1-28-Round-Touch-Display-for-Seeed-Studio-XIAO-ESP32.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Preparación de software

1. Modifica app.overlay: El Round Display for Seeed Studio XIAO incorpora una pantalla LCD GC9A01 de 240 × 240. En el XIAO STM32C5, la LCD utiliza D8 (SCK), D10 (MOSI), D1 (CS) y D3 (DC). Dado que D8 y D10 están asignados a SPI3, se debe habilitar SPI3 y se debe añadir un nodo de pantalla GC9A01. El RTC PCF8563 integrado se comunica mediante I²C usando D4 (SDA) y D5 (SCL), que están asignados a I2C1. Por lo tanto, también se debe habilitar I2C1 y añadir un nodo de dispositivo RTC PCF8563.

<details>

<summary>app.overlay</summary>

```dts
#include <freq.h>
#include <zephyr/dt-bindings/display/panel.h>
#include <zephyr/dt-bindings/gpio/gpio.h>

/ {
	chosen {
		zephyr,display = &gc9a01_round_display;
	};

	aliases {
		rtc = &pcf8563_round_display;
	};

	backlight_leds {
		compatible = "gpio-leds";

		display_backlight: backlight {
			gpios = <&xiao_d 6 GPIO_ACTIVE_HIGH>;
		};
	};

	round_display_mipi_dbi {
		compatible = "zephyr,mipi-dbi-spi";
		spi-dev = <&spi3>;
		dc-gpios = <&xiao_d 3 GPIO_ACTIVE_HIGH>;
		write-only;
		#address-cells = <1>;
		#size-cells = <0>;

		gc9a01_round_display: gc9a01@0 {
			compatible = "galaxycore,gc9x01x";
			reg = <0>;
			status = "okay";
			mipi-max-frequency = <DT_FREQ_M(8)>;
			pixel-format = <PANEL_PIXEL_FORMAT_RGB_565>;
			width = <240>;
			height = <240>;
			display-inversion;
		};
	};
};

&usart1 {
	/* Release D6 (PA9) for the display backlight. */
	status = "disabled";
};

&i2c1 {
	clock-frequency = <I2C_BITRATE_FAST>;

	pcf8563_round_display: pcf8563@51 {
		compatible = "nxp,pcf8563";
		reg = <0x51>;
		status = "okay";
	};
};

&spi3 {
	/* D8=PE2 SCK, D9=PB0 MISO, D10=PB15 MOSI. */
	status = "okay";
	cs-gpios = <&xiao_d 1 GPIO_ACTIVE_LOW>;
};
```

</details>
<br/>

2. Modifica prj.conf para habilitar las configuraciones.

```prj
CONFIG_GPIO=y
CONFIG_SPI=y
CONFIG_I2C=y
CONFIG_RTC=y
CONFIG_RTC_PCF8563=y

CONFIG_DISPLAY=y
CONFIG_MIPI_DBI=y

CONFIG_MAIN_STACK_SIZE=4096
CONFIG_PRINTK=y
```

3. Escribe main.c para leer el RTC PCF8563 y mostrar la fecha, la hora y el día de la semana en la pantalla redonda.

<details>

<summary>main.c</summary>

```c
/*
 * Copyright (c) 2026 Seeed Technology Co., Ltd.
 * SPDX-License-Identifier: Apache-2.0
 *
 * RTC clock demo for XIAO STM32C5 and Round Display for XIAO.
 *
 * Display: GC9A01, 240x240, hardware SPI3
 *          (D8 SCK, D10 MOSI, D1 CS, D3 DC)
 *          D8=PE2, D9=PB0 and D10=PB15.
 * RTC:     PCF8563 on the Round Display (D4 SDA, D5 SCL)
 * BL:      D6
 *
 * Reads the PCF8563 once per second and shows the date, time and weekday.
 * An invalid RTC value is initialized to 2026-06-16 12:00:00.
 */

#include <stdbool.h>
#include <zephyr/device.h>
#include <zephyr/drivers/display.h>
#include <zephyr/drivers/gpio.h>
#include <zephyr/drivers/rtc.h>
#include <zephyr/kernel.h>
#include <zephyr/sys/printk.h>

#define LCD_WIDTH  240
#define LCD_HEIGHT 240

#define COLOR_WHITE  0xFFFFU
#define COLOR_GREEN  0x07E0U
#define COLOR_CYAN   0x07FFU
#define COLOR_NAVY   0x0842U
#define COLOR_GRAY   0x8410U

static const struct device *const display =
	DEVICE_DT_GET(DT_CHOSEN(zephyr_display));
static const struct device *const rtc = DEVICE_DT_GET(DT_ALIAS(rtc));
static const struct gpio_dt_spec backlight =
	GPIO_DT_SPEC_GET(DT_NODELABEL(display_backlight), gpios);

/* Full RGB565 frame buffer, kept global to avoid using the thread stack. */
static uint16_t framebuffer[LCD_WIDTH * LCD_HEIGHT];
static const struct display_buffer_descriptor frame_desc = {
	.buf_size = sizeof(framebuffer),
	.width = LCD_WIDTH,
	.height = LCD_HEIGHT,
	.pitch = LCD_WIDTH,
};

static uint16_t rgb565_be(uint16_t color)
{
	return (uint16_t)((color >> 8) | (color << 8));
}

static void set_pixel(int x, int y, uint16_t color)
{
	if (x >= 0 && x < LCD_WIDTH && y >= 0 && y < LCD_HEIGHT) {
		framebuffer[y * LCD_WIDTH + x] = rgb565_be(color);
	}
}

static void fill_rect(int x, int y, int width, int height, uint16_t color)
{
	for (int py = y; py < y + height; py++) {
		for (int px = x; px < x + width; px++) {
			set_pixel(px, py, color);
		}
	}
}

static void draw_circle(int cx, int cy, int radius, uint16_t color)
{
	int x = radius;
	int y = 0;
	int error = 1 - radius;

	while (x >= y) {
		set_pixel(cx + x, cy + y, color);
		set_pixel(cx + y, cy + x, color);
		set_pixel(cx - y, cy + x, color);
		set_pixel(cx - x, cy + y, color);
		set_pixel(cx - x, cy - y, color);
		set_pixel(cx - y, cy - x, color);
		set_pixel(cx + y, cy - x, color);
		set_pixel(cx + x, cy - y, color);
		y++;
		if (error < 0) {
			error += 2 * y + 1;
		} else {
			x--;
			error += 2 * (y - x) + 1;
		}
	}
}

static void draw_filled_circle(int cx, int cy, int radius, uint16_t color)
{
	for (int y = -radius; y <= radius; y++) {
		for (int x = -radius; x <= radius; x++) {
			if (x * x + y * y <= radius * radius) {
				set_pixel(cx + x, cy + y, color);
			}
		}
	}
}

static void draw_digit(int x, int y, int width, int height, int thickness,
		       int digit, uint16_t color)
{
	static const uint8_t segments[10] = {
		0x3F, 0x06, 0x5B, 0x4F, 0x66,
		0x6D, 0x7D, 0x07, 0x7F, 0x6F
	};
	uint8_t mask = segments[digit];
	int half = height / 2;

	if (mask & BIT(0)) {
		fill_rect(x + thickness, y, width - 2 * thickness, thickness, color);
	}
	if (mask & BIT(1)) {
		fill_rect(x + width - thickness, y + thickness,
			  thickness, half - thickness, color);
	}
	if (mask & BIT(2)) {
		fill_rect(x + width - thickness, y + half,
			  thickness, half - thickness, color);
	}
	if (mask & BIT(3)) {
		fill_rect(x + thickness, y + height - thickness,
			  width - 2 * thickness, thickness, color);
	}
	if (mask & BIT(4)) {
		fill_rect(x, y + half, thickness, half - thickness, color);
	}
	if (mask & BIT(5)) {
		fill_rect(x, y + thickness, thickness, half - thickness, color);
	}
	if (mask & BIT(6)) {
		fill_rect(x + thickness, y + half - thickness / 2,
			  width - 2 * thickness, thickness, color);
	}
}

static void draw_colon(int x, int y, int size, uint16_t color)
{
	fill_rect(x, y, size, size, color);
	fill_rect(x, y + 23, size, size, color);
}

static int write_frame(void)
{
	return display_write(display, 0, 0, &frame_desc, framebuffer);
}

static void clear_frame(uint16_t color)
{
	uint16_t value = rgb565_be(color);

	for (int i = 0; i < LCD_WIDTH * LCD_HEIGHT; i++) {
		framebuffer[i] = value;
	}
}

static bool rtc_time_valid(const struct rtc_time *time)
{
	return time->tm_year >= (2024 - 1900) &&
	       time->tm_year <= (2099 - 1900) &&
	       time->tm_mon >= 0 && time->tm_mon <= 11 &&
	       time->tm_mday >= 1 && time->tm_mday <= 31 &&
	       time->tm_hour >= 0 && time->tm_hour <= 23 &&
	       time->tm_min >= 0 && time->tm_min <= 59 &&
	       time->tm_sec >= 0 && time->tm_sec <= 59;
}

static int render_clock(const struct rtc_time *time)
{
	int year = time->tm_year + 1900;
	int month = time->tm_mon + 1;
	int day = time->tm_mday;
	static const uint8_t date_x[] = { 48, 62, 76, 90, 118, 132, 160, 174 };
	static const uint8_t time_x[] = { 24, 54, 96, 126, 168, 198 };
	uint8_t date_digits[] = {
		(year / 1000) % 10, (year / 100) % 10,
		(year / 10) % 10, year % 10,
		month / 10, month % 10, day / 10, day % 10
	};
	uint8_t time_digits[] = {
		time->tm_hour / 10, time->tm_hour % 10,
		time->tm_min / 10, time->tm_min % 10,
		time->tm_sec / 10, time->tm_sec % 10
	};

	clear_frame(COLOR_NAVY);
	draw_circle(120, 120, 116, COLOR_CYAN);
	draw_circle(120, 120, 115, COLOR_CYAN);
	fill_rect(75, 39, 90, 3, COLOR_CYAN);

	for (int i = 0; i < ARRAY_SIZE(date_digits); i++) {
		draw_digit(date_x[i], 54, 12, 24, 3,
			   date_digits[i], COLOR_GREEN);
	}
	fill_rect(106, 65, 8, 3, COLOR_GREEN);
	fill_rect(148, 65, 8, 3, COLOR_GREEN);

	for (int i = 0; i < ARRAY_SIZE(time_digits); i++) {
		draw_digit(time_x[i], 94, 26, 54, 5,
			   time_digits[i], COLOR_WHITE);
	}
	draw_colon(84, 107, 6, COLOR_CYAN);
	draw_colon(156, 107, 6, COLOR_CYAN);

	for (int i = 0; i < 7; i++) {
		uint16_t color = (i == time->tm_wday) ? COLOR_GREEN : COLOR_GRAY;
		draw_filled_circle(75 + i * 15, 188, 4, color);
	}
	fill_rect(88, 207, 64, 3, COLOR_CYAN);

	return write_frame();
}

int main(void)
{
	struct rtc_time now = { 0 };
	int ret;

	if (!gpio_is_ready_dt(&backlight) || !device_is_ready(display) ||
	    !device_is_ready(rtc)) {
		printk("Display, backlight, or RTC device not ready\n");
		return -1;
	}

	ret = gpio_pin_configure_dt(&backlight, GPIO_OUTPUT_ACTIVE);
	if (ret < 0) {
		printk("Cannot enable display backlight: %d\n", ret);
		return ret;
	}

	ret = display_set_pixel_format(display, PIXEL_FORMAT_RGB_565);
	if (ret < 0) {
		printk("Cannot set RGB565 pixel format: %d\n", ret);
		return ret;
	}
	display_blanking_off(display);

	ret = rtc_get_time(rtc, &now);
	if (ret < 0 || !rtc_time_valid(&now)) {
		struct rtc_time initial_time = {
			.tm_year = 2026 - 1900,
			.tm_mon = 5,
			.tm_mday = 16,
			.tm_hour = 12,
			.tm_min = 0,
			.tm_sec = 0,
			.tm_wday = 2,
		};

		ret = rtc_set_time(rtc, &initial_time);
		if (ret < 0) {
			printk("Cannot set RTC time: %d\n", ret);
			return ret;
		}
		printk("RTC initialized to 2026-06-16 12:00:00\n");
	}

	printk("Round Display RTC clock started\n");

	while (1) {
		ret = rtc_get_time(rtc, &now);
		if (ret < 0) {
			printk("Cannot read RTC time: %d\n", ret);
		} else {
			ret = render_clock(&now);
			if (ret < 0) {
				printk("Display write failed: %d\n", ret);
			}
			printk("%04d-%02d-%02d %02d:%02d:%02d\n",
			       now.tm_year + 1900, now.tm_mon + 1, now.tm_mday,
			       now.tm_hour, now.tm_min, now.tm_sec);
		}
		k_msleep(1000);
	}
}
```

</details>
<br/>

### Resultado

Este ejemplo configura y lee la fecha y la hora desde el RTC PCF8563 en la pantalla redonda a través de I²C y muestra el resultado en la pantalla LCD circular. Sin una batería de respaldo para el RTC, el PCF8563 mantiene la hora mientras el sistema está alimentado, pero no se garantiza que la hora se conserve después de cortar la alimentación. Con una batería tipo moneda CR927 instalada, el RTC puede seguir funcionando mientras la alimentación principal está desconectada y conservar la hora correcta cuando el sistema se encienda de nuevo.
Si el RTC no contiene una hora válida, el ejemplo lo inicializa a 2026-06-16 12:00:00 a modo de demostración. Configura el RTC a la hora actual por separado; este ejemplo no lo sincroniza automáticamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/pin_mux_7.gif" style={{width:400, height:'auto'}}/></div>

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
