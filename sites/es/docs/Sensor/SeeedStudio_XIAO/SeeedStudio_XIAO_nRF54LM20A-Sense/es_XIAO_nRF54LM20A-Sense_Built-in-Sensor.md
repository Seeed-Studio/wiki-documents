---
title: Uso de los sensores integrados en XIAO nRF54LM20A Sense
description: ''
keywords:
  - xiao
  - nrf54lm20a
  - pin_multiplexing
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/XIAO_nRF54LM20A_IMU_MIC.webp
slug: /xiao_nrf54lm20a_with_onboard
sku: 100018440
last_update:
  date: 05/13/2026
  author: Zeller
createdAt: '2025-05-15'
updatedAt: '2026-07-08'
url: https://wiki.seeedstudio.com/es/xiao_nrf54lm20a_with_onboard/
---

# Uso de los sensores integrados en XIAO nRF54LM20A Sense

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/8.IMU_MIC.png" style={{width:400, height:'auto'}}/></div>

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

El XIAO nRF54LM20A Sense está equipado con abundantes sensores integrados para admitir aplicaciones en múltiples escenarios. Incluye el sensor de seis ejes LSM6DS3TR-C para reconocimiento de postura y el micrófono digital MEMS MSM261DGT006 que admite salida digital PDM y captación de sonido omnidireccional, lo que lo hace adecuado para escenarios de voz inteligente. Este artículo presenta los métodos de desarrollo y uso basados en los ricos periféricos integrados del XIAO nRF54LM20A.

:::tip

- Este artículo se desarrolla sobre la base del sistema de compilación PlatformIO y Zephyr RTOS. Si no tienes experiencia previa con ellos, consulta [Getting Started With SeeedStudio XIAO nRF54LM20A](https://wiki.seeedstudio.com/es/xiao_nrf54lm20a_sense_getting_started/)

:::

## Preparación de hardware

Este artículo se desarrolla basándose en el XIAO nRF54LM20A Sense, y necesitas preparar el hardware correspondiente con antelación.

<div className="table-center">
<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
   <th>Matriz RGB WS2812 6x10 para Seeed Studio XIAO</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/7/-/7-6x10-rgb-matrix-for-xiao-feature_1.jpg" style={{width:400, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/6x10-RGB-MATRIX-for-XIAO-p-5771.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
 </tr>
</table>
</div>

## IMU

El LSM6DS3TR-C es un sensor de seis ejes que integra un acelerómetro digital de 3 ejes y un giroscopio digital de 3 ejes, que pertenece a la unidad de medición inercial (IMU) iNEMO lanzada por STMicroelectronics. En el XIAO nRF54LM20A Sense, este sensor admite salida de datos activada por interrupción. Presenta un rango de aceleración a escala completa de ±2/±4/±8/±16 g y un rango de velocidad angular de ±125/±250/±500/±1000/±2000 dps, y admite un modo de bajo consumo persistente, lo que lo hace adecuado para diversos escenarios de detección de movimiento. El chip integrado se comunica con él mediante el protocolo I2C para adquirir los datos.
:::tip

- Para obtener más información sobre el LSM6DS3TR-C, visita: [Product overview for LSM6DS3TR-C](https://www.st.com/en/mems-and-sensors/lsm6ds3tr-c.html) y [LSM6DS3TR-C Datasheet](https://www.st.com/resource/en/datasheet/lsm6ds3tr-c.pdf)

:::

### Obtener datos de seis ejes

1. Modifica el archivo del árbol de dispositivos `app.overlay` para vincular los pines de hardware utilizados por el LSM6DS3TR-C al árbol de dispositivos. Vincula IMU_SDA e IMU_SCL al nodo i2c30, que corresponde a P0.08 y P0.07 en el XIAO nRF54LM20A Sense. Vincula el pin de disparo de interrupción IMU_INT1 a P0.06.

:::tip

- Para ver el pinout del XIAO nRF54LM20A, haz clic en [XIAO nRF54LM20A Sense Pin List](https://wiki.seeedstudio.com/es/xiao_nrf54lm20a_getting_started/#hardware-overview) para ver los detalles.

:::

```dtsi
&pmic_i2c {
        sda-gpios = <&gpio1 18 GPIO_ACTIVE_HIGH>;
        scl-gpios = <&gpio1 17 GPIO_ACTIVE_HIGH>;
        status = "okay";
};

&pmic {
        regulators {
                imu_vdd: LDO1 {
                        regulator-min-microvolt = <3300000>;
                        regulator-max-microvolt = <3300000>;
                        regulator-boot-on;
                };
        };
};

&lsm6ds3tr_c {
        zephyr,deferred-init;
};


```

2. Modifica el archivo prj.conf para habilitar las configuraciones de I2C y de disparo por interrupción.

```prj
CONFIG_STDOUT_CONSOLE=y

CONFIG_LOG=y
CONFIG_LOG_BACKEND_UART=y
CONFIG_LOG_BACKEND_SHOW_COLOR=n
CONFIG_LOG_DEFAULT_LEVEL=3
CONFIG_MAIN_STACK_SIZE=2048
CONFIG_SYSTEM_WORKQUEUE_STACK_SIZE=2048
CONFIG_GPIO=y
CONFIG_I2C=y
CONFIG_MFD=y
CONFIG_REGULATOR=y
CONFIG_SENSOR=y
CONFIG_LSM6DSL=y
CONFIG_LSM6DSL_TRIGGER_GLOBAL_THREAD=y
CONFIG_CBPRINTF_FP_SUPPORT=y
CONFIG_CBPRINTF_COMPLETE=y

```

3. Escribe un programa para enviar los datos adquiridos del acelerómetro digital de 3 ejes y del giroscopio digital de 3 ejes a través del puerto serie USB.

<details>

<summary>main.c</summary>

```c
#include <errno.h>
#include <zephyr/kernel.h>
#include <zephyr/device.h>
#include <zephyr/drivers/sensor.h>
#include <zephyr/drivers/regulator.h>
#include <zephyr/logging/log.h>

LOG_MODULE_REGISTER(zephyr_imu, LOG_LEVEL_INF);

#define IMU_NODE DT_ALIAS(imu0)

/*
 * nrf54lm20a needs power_en (fixed regulator on gpio1.12) and imu_vdd
 * (PMIC NPM1300 LDO1) enabled before the IMU can be used.
 * nrf54l15 has pdm_imu_pwr with regulator-boot-on; power is already on.
 */
#if defined(DT_N_NODELABEL_power_en)
static const struct device *const power_en_dev =
    DEVICE_DT_GET(DT_NODELABEL(power_en));
#endif

#if defined(DT_N_NODELABEL_imu_vdd)
static const struct device *const imu_vdd_dev =
    DEVICE_DT_GET(DT_NODELABEL(imu_vdd));
#endif

static int enable_imu_power(void)
{
#if defined(DT_N_NODELABEL_power_en) || defined(DT_N_NODELABEL_imu_vdd)
    int ret;
#endif

#if defined(DT_N_NODELABEL_power_en)
    if (!device_is_ready(power_en_dev)) {
        LOG_ERR("power_en regulator is not ready");
        return -ENODEV;
    }
    ret = regulator_enable(power_en_dev);
    if (ret < 0 && ret != -EALREADY) {
        LOG_ERR("Failed to enable power_en: %d", ret);
        return ret;
    }
#endif

#if defined(DT_N_NODELABEL_imu_vdd)
    if (!device_is_ready(imu_vdd_dev)) {
        LOG_ERR("imu_vdd regulator is not ready");
        return -ENODEV;
    }
    ret = regulator_enable(imu_vdd_dev);
    if (ret < 0 && ret != -EALREADY) {
        LOG_ERR("Failed to enable imu_vdd: %d", ret);
        return ret;
    }
#endif

#if defined(DT_N_NODELABEL_power_en) || defined(DT_N_NODELABEL_imu_vdd)
    /* Wait for power rail to stabilize */
    k_sleep(K_MSEC(20));
#endif

    return 0;
}

static inline float out_ev(struct sensor_value *val)
{
    return (val->val1 + (float)val->val2 / 1000000);
}

static void fetch_and_display(const struct device *dev)
{
    struct sensor_value x, y, z;
    static int trig_cnt;

    trig_cnt++;

    /* lsm6dsl accel */
    sensor_sample_fetch_chan(dev, SENSOR_CHAN_ACCEL_XYZ);
    sensor_channel_get(dev, SENSOR_CHAN_ACCEL_X, &x);
    sensor_channel_get(dev, SENSOR_CHAN_ACCEL_Y, &y);
    sensor_channel_get(dev, SENSOR_CHAN_ACCEL_Z, &z);

    LOG_INF("accel x:%f m/s^2 y:%f m/s^2 z:%f m/s^2",
            (double)out_ev(&x), (double)out_ev(&y), (double)out_ev(&z));

    /* lsm6dsl gyro */
    sensor_sample_fetch_chan(dev, SENSOR_CHAN_GYRO_XYZ);
    sensor_channel_get(dev, SENSOR_CHAN_GYRO_X, &x);
    sensor_channel_get(dev, SENSOR_CHAN_GYRO_Y, &y);
    sensor_channel_get(dev, SENSOR_CHAN_GYRO_Z, &z);

    LOG_INF("gyro x:%f rad/s y:%f rad/s z:%f rad/s",
            (double)out_ev(&x), (double)out_ev(&y), (double)out_ev(&z));

    LOG_INF("trig_cnt:%d", trig_cnt);
}

static int set_sampling_freq(const struct device *dev)
{
    int ret = 0;
    struct sensor_value odr_attr;

    /* set accel/gyro sampling frequency to 12.5 Hz */
    odr_attr.val1 = 12;
    odr_attr.val2 = 500000;

    ret = sensor_attr_set(dev, SENSOR_CHAN_ACCEL_XYZ,
            SENSOR_ATTR_SAMPLING_FREQUENCY, &odr_attr);
    if (ret != 0) {
        LOG_ERR("Cannot set sampling frequency for accelerometer.");
        return ret;
    }

    ret = sensor_attr_set(dev, SENSOR_CHAN_GYRO_XYZ,
            SENSOR_ATTR_SAMPLING_FREQUENCY, &odr_attr);
    if (ret != 0) {
        LOG_ERR("Cannot set sampling frequency for gyro.");
        return ret;
    }

    return 0;
}

#ifdef CONFIG_LSM6DSL_TRIGGER
static void trigger_handler(const struct device *dev,
                const struct sensor_trigger *trig)
{
    fetch_and_display(dev);
}

static void test_trigger_mode(const struct device *dev)
{
    struct sensor_trigger trig;

    if (set_sampling_freq(dev) != 0) {
        return;
    }

    trig.type = SENSOR_TRIG_DATA_READY;
    trig.chan = SENSOR_CHAN_ACCEL_XYZ;

    if (sensor_trigger_set(dev, &trig, trigger_handler) != 0) {
        LOG_ERR("Could not set sensor type and channel");
        return;
    }

    while (1) {
        k_sleep(K_MSEC(1000));
    }
}

#else
static void test_polling_mode(const struct device *dev)
{
    if (set_sampling_freq(dev) != 0) {
        return;
    }

    while (1) {
        fetch_and_display(dev);
        k_sleep(K_MSEC(1000));
    }
}
#endif

int main(void)
{
    const struct device *const dev = DEVICE_DT_GET(IMU_NODE);
    int ret;

    /* On nrf54lm20a, enable power_en + imu_vdd before accessing IMU.
     * On nrf54l15, these nodes don't exist; function returns immediately.
     */
    ret = enable_imu_power();
    if (ret < 0) {
        LOG_ERR("Failed to enable IMU power: %d", ret);
        return 0;
    }

    /* On nrf54lm20a, IMU has zephyr,deferred-init; must init manually.
     * On nrf54l15, device auto-inits at boot; device_is_ready() is true.
     */
    if (!device_is_ready(dev)) {
        ret = device_init(dev);
        if (ret < 0 && ret != -EALREADY) {
            LOG_ERR("Failed to initialize %s: %d", dev->name, ret);
            return 0;
        }
    }

    if (!device_is_ready(dev)) {
        LOG_ERR("%s: device not ready.", dev->name);
        return 0;
    }

#ifdef CONFIG_LSM6DSL_TRIGGER
    LOG_INF("Testing LSM6DSL sensor in trigger mode.");
    test_trigger_mode(dev);
#else
    LOG_INF("Testing LSM6DSL sensor in polling mode.");
    test_polling_mode(dev);
#endif
    return 0;
}
```
</details>

<br/>

:::tip
Si deseas verificar directamente el rendimiento de la IMU, clona el repositorio Platform-seeedboards, localiza el ejemplo zephyr-imu en el directorio examples, luego compila y flashea el programa para iniciar la prueba.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/zephyr/boards" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar las bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

:::

#### Resultado

Después de flashear el firmware, puedes abrir el asistente de puerto serie en tu PC para visualizar los datos. La frecuencia de disparo es de 12,5 Hz con un intervalo de 80 milisegundos.

- Acelerómetro digital de 3 ejes: mide la aceleración a lo largo de los ejes X, Y y Z.
- Giroscopio digital de 3 ejes: mide la velocidad angular alrededor de los ejes X, Y y Z.

:::tip

1. Configura la velocidad en baudios a 115200 cuando visualices datos mediante el monitor serie.
2. Especifica la velocidad en baudios como 115200 en el archivo de configuración **platformio.ini** para el monitor serie de PlatformIO IDE.

```ini
[env:seeed-xiao-nrf54lm20a]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
framework = zephyr
board = seeed-xiao-nrf54lm20a
monitor_speed = 115200
```

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/onboar_imu_1.png" style={{width:800, height:'auto'}}/></div>

### Aplicación

La IMU puede fusionar datos de aceleración de tres ejes para calcular los ángulos de actitud de cabeceo, guiñada y alabeo para el reconocimiento de postura. También puede trabajar con los controladores correspondientes para realizar control de movimiento, o aplicarse en escenarios de bajo consumo como el despertar activado por actitud.

#### Océano electrónico

Este es un ejemplo basado en la IMU integrada de XIAO nRF54LM20A Sense. Recoge datos de actitud y fusiona información de aceleración para mapear los estados de movimiento en el panel de luz RGB, logrando efectos visuales de ritmo oceánico.

- **Control de nivel de agua por inclinación** — Ajusta la altura del nivel de agua mediante la inclinación de alabeo hacia la izquierda y la derecha
- **Animación de olas** — Superposición de ondas de tres capas de frecuencia, propagación de ondas 2D y efecto de reflexión en los bordes
- **Inercia del fluido** — Superficie de agua con momento; una inclinación rápida provoca sobreimpulso y posterior vaivén de retorno
- **Detección de volteo** — La pantalla se invierte automáticamente cuando la placa se voltea
- **Color dinámico** — Cambio aleatorio de gradiente de tonos oceánicos para cada columna

Además, puedes modificar la configuración de la matriz RGB de la placa mediante definiciones de macros en main.c.

```cpp
#define COLS 10          // Number of matrix columns
#define ROWS  6          // Number of matrix rows
#define BRIGHTNESS 5     // Overall brightness (0-100)
#define WATER_CENTER 3.5f // Water level when placed horizontally
#define WATER_MIN 0.5f   // Minimum water level
#define WATER_MAX 6.5f   // Maximum water level
```

##### Instrucciones de uso

1. Copia el contenido del programa correspondiente [imu_ocean-main.c](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/imu_ocean_main.c) y pégalo en main.c.<br/>

2. Modifica el archivo de árbol de dispositivos `app.overlay`.

```dts
&lsm6ds3tr_c {
	zephyr,deferred-init;
};

/*
 * The board DTS lists PMIC I2C on gpio1.15/16, but the actual XIAO
 * nRF54LM20A Sense hardware uses gpio1.18 (SDA) and gpio1.17 (SCL).
 * Override here to match the working reference example.
 */
&pmic_i2c {
	sda-gpios = <&gpio1 18 GPIO_ACTIVE_HIGH>;
	scl-gpios = <&gpio1 17 GPIO_ACTIVE_HIGH>;
};

/*
 * Give LDO1 the label "imu_vdd" so main() can call regulator_enable().
 * Voltage is 3.3 V as used by the reference example.
 */
&pmic {
	regulators {
		imu_vdd: LDO1 {
			regulator-min-microvolt = <3300000>;
			regulator-max-microvolt = <3300000>;
			regulator-boot-on;
		};
	};
};

/* WS2812 LED strip on SPI24 (spi21/22 conflict with uart21/i2c22) */
&pinctrl {
	spi24_ws2812_default: spi24_ws2812_default {
		group1 {
			psels = <NRF_PSEL(SPIM_MOSI, 1, 0)>,
				<NRF_PSEL(SPIM_SCK, 1, 1)>;
		};
	};

	spi24_ws2812_sleep: spi24_ws2812_sleep {
		group1 {
			psels = <NRF_PSEL(SPIM_MOSI, 1, 0)>,
				<NRF_PSEL(SPIM_SCK, 1, 1)>;
			low-power-enable;
		};
	};
};


&spi24 {
	status = "okay";
	pinctrl-0 = <&spi24_ws2812_default>;
	pinctrl-1 = <&spi24_ws2812_sleep>;
	pinctrl-names = "default", "sleep";

	led_strip: ws2812@0 {
		compatible = "worldsemi,ws2812-spi";
		reg = <0>;
		/*
		 * 8 MHz SPI: each clock = 125 ns, 8 clocks = 1 µs per WS2812 bit.
		 * 0xF8 = 11111000: T1H=625 ns  T1L=375 ns
		 * 0xC0 = 11000000: T0H=250 ns  T0L=750 ns
		 */
		spi-max-frequency = <8000000>;
		spi-one-frame  = <0xF8>;
		spi-zero-frame = <0xC0>;
		chain-length = <60>;
		color-mapping = <1 0 2>;
		reset-delay = <250>;
	};
};

/ {
	aliases {
		led-strip = &led_strip;
	};
};
```

3. Habilita las configuraciones relacionadas con el uso de la IMU

```prj
CONFIG_STDOUT_CONSOLE=y
CONFIG_LOG=y
CONFIG_LOG_BACKEND_UART=y
CONFIG_LOG_DEFAULT_LEVEL=3
CONFIG_MAIN_STACK_SIZE=4096
CONFIG_SYSTEM_WORKQUEUE_STACK_SIZE=2048
CONFIG_GPIO=y
CONFIG_I2C=y
CONFIG_MFD=y
CONFIG_REGULATOR=y
CONFIG_SENSOR=y
CONFIG_LSM6DSL=y
CONFIG_SPI=y
CONFIG_LED_STRIP=y
CONFIG_WS2812_STRIP_SPI=y
CONFIG_CBPRINTF_FP_SUPPORT=y
CONFIG_CBPRINTF_COMPLETE=y
CONFIG_FAULT_DUMP=2
CONFIG_LOG_MODE_IMMEDIATE=y
```

- Agita el dispositivo para activar el efecto visual de olas oceánicas.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/WHPSAryN-W4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div><br/>

- Al mismo tiempo, el puerto serie también emitirá los datos correspondientes de la IMU y la altura actual del nivel de agua de las olas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/onboard_imu_2.png" style={{width:800, height:'auto'}}/></div>

#### Despertar por IMU

En esta rutina, el canal verde del RGB se enciende y apaga después del encendido, luego el sistema entra en modo de suspensión de ultra bajo consumo. Cuando la placa detecta un toque, XIAO nRF54LM20A Sense se despertará mediante una interrupción. El evento de toque se registrará e imprimirá a través del puerto serie.

Descarga la rutina para implementar la función de despertar mediante la IMU.

1. Descarga el programa [imu-click-main.c](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/imu_click_main.c) y reemplaza con él el contenido de main.c.

2. Modifica el archivo de árbol de dispositivos `app.overlay` y añade las configuraciones de nodo necesarias.

```dts
/*
 * Disable PWM20 and PWM LEDs to release P1.22/23/24 as GPIO.
 * The board DTS assigns these pins to PWM_OUT0/1/2 via pinctrl,
 * which prevents gpio-leds from controlling them.
 */
&pwm20 {
	status = "disabled";
};

&green_led {
	gpios = <&gpio1 24 GPIO_ACTIVE_LOW>;
};

/* PMIC I2C pin configuration for NPM1300 power management */
&pmic_i2c {
	sda-gpios = <&gpio1 18 GPIO_ACTIVE_HIGH>;
	scl-gpios = <&gpio1 17 GPIO_ACTIVE_HIGH>;
	status = "okay";
};

/* IMU power rail via PMIC LDO1 at 3.3V */
&pmic {
	regulators {
		imu_vdd: LDO1 {
			regulator-min-microvolt = <3300000>;
			regulator-max-microvolt = <3300000>;
			regulator-boot-on;
		};
	};
};

/* Configure I2C30 for LSM6DS3TR-C */
&i2c30 {
	pinctrl-0 = <&i2c30_default>;
	pinctrl-1 = <&i2c30_sleep>;
	pinctrl-names = "default", "sleep";
	status = "okay";
	clock-frequency = <I2C_BITRATE_STANDARD>;

	lsm6ds3tr_c: lsm6ds3tr-c@6a {
		compatible = "st,lsm6dsl";
		reg = <0x6a>;
		irq-gpios = <&gpio0 6 GPIO_ACTIVE_HIGH>;
		status = "okay";
		zephyr,deferred-init;
	};
};

/* Pin control configuration for I2C30 */
&pinctrl {
	i2c30_default: i2c30_default {
		group1 {
			psels = <NRF_PSEL(TWIM_SDA, 0, 8)>,
				<NRF_PSEL(TWIM_SCL, 0, 7)>;
		};
	};

	i2c30_sleep: i2c30_sleep {
		group1 {
			psels = <NRF_PSEL(TWIM_SDA, 0, 8)>,
				<NRF_PSEL(TWIM_SCL, 0, 7)>;
			low-power-enable;
		};
	};
};
```

3. Habilita las configuraciones relevantes de la IMU en prj.conf

```prj
CONFIG_STDOUT_CONSOLE=y
CONFIG_LOG=y
CONFIG_LOG_BACKEND_UART=y
CONFIG_LOG_DEFAULT_LEVEL=3
CONFIG_MAIN_STACK_SIZE=4096
CONFIG_SYSTEM_WORKQUEUE_STACK_SIZE=2048
CONFIG_GPIO=y
CONFIG_I2C=y
CONFIG_MFD=y
CONFIG_REGULATOR=y
CONFIG_SENSOR=y
CONFIG_LSM6DSL=y
CONFIG_LSM6DSL_TRIGGER_GLOBAL_THREAD=y
CONFIG_SPI=y
CONFIG_LED_STRIP=y
CONFIG_WS2812_STRIP_SPI=y
CONFIG_CBPRINTF_FP_SUPPORT=y
CONFIG_CBPRINTF_COMPLETE=y
CONFIG_FAULT_DUMP=2
CONFIG_LOG_MODE_IMMEDIATE=y
```

<br/>
- Después de flashear y encender, el LED RGB-G parpadeará brevemente. Toca en cualquier parte de la placa para encender el LED RGB-G.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/onboard_imu_3_1.gif" style={{width:800, height:'auto'}}/></div>

- Al mismo tiempo, la información del evento de toque también se emitirá a través del puerto serie.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/onboard_imu_3.png" style={{width:800, height:'auto'}}/></div>
<br/>
:::tip

La posición de detección es solo de referencia. El reconocimiento preciso de la posición del toque depende del algoritmo de control de fusión de la IMU.

:::

## RTC

El chip adoptado por XIAO nRF54LM20A Sense está equipado con recursos de hardware GRTC integrados, lo que permite funciones de RTC sin módulos RTC adicionales.

El RTC admite el conteo de marcas de tiempo y puede registrar el tiempo de funcionamiento incluso después de un fallo de alimentación, lo que facilita el registro de logs y el seguimiento del tiempo.

Esta sección presenta un programa de ejemplo implementado en XIAO nRF54LM20A Sense. Después de encender, obtiene marcas de tiempo a partir del momento de compilación mediante el RTC y muestra los datos cada segundo. Tras entrar en el modo System OFF, el sistema será despertado por la alarma del RTC para continuar el conteo.

1. Copia [rtc-main.c](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/rtc-main.c) en el archivo main.c. Usa las funciones del RTC para imprimir la marca de tiempo.

2. Modifica el device tree `app.overlay` para habilitar el nodo RTC.

```dts
/ {
    cpuapp_sram@2007ec00 {
        compatible = "zephyr,memory-region", "mmio-sram";
        reg = <0x2007ec00 DT_SIZE_K(4)>;
        zephyr,memory-region = "RetainedMem";
        status = "okay";

        retainedmem0: retainedmem {
            compatible = "zephyr,retained-ram";
            status = "okay";
        };
    };

    aliases {
        retainedmemdevice = &retainedmem0;
    };
};

&cpuapp_sram {
    /* Shrink SRAM to avoid overlap with retained memory region:
     * 511 - 4 = 507 KB = 0x7EC00
     */
    reg = <0x20000000 DT_SIZE_K(507)>;
    ranges = <0x0 0x20000000 0x7ec00>;
};
```

3. Edita el archivo prj.conf para habilitar las configuraciones relacionadas con el RTC.

```prj
# Console and serial
CONFIG_SERIAL=y
CONFIG_CONSOLE=y
CONFIG_PRINTK=y

# Power management and System OFF
CONFIG_PM=y
CONFIG_PM_DEVICE=y
CONFIG_POWEROFF=y

# Hardware info (reset cause detection)
CONFIG_HWINFO=y

# Retained memory (survives System OFF)
CONFIG_RETAINED_MEM=y

# CRC for retained data validation
CONFIG_CRC=y

# Newlib C library (required for sscanf, strcmp etc.)
# Note: mktime() and gmtime() are NOT used — custom tm_to_unix()
# and unix_to_tm() avoid newlib's TZ environment dependency.
CONFIG_NEWLIB_LIBC=y
```

### Resultado

- El programa comienza a contar desde el momento de la compilación y la grabación en la memoria flash. Abre la herramienta de puerto serie para observar el efecto de ejecución, y se implementan todas las funciones esperadas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/onboard_rtc_1.png" style={{width:800, height:'auto'}}/></div>
<br/>

## MIC 

El XIAO nRF54LM20A Sense está equipado con el micrófono digital MEMS MSM261DGT006 para entrada de voz. Se conecta directamente a través de la interfaz PDM sin necesidad de un ADC. Es adecuado para dispositivos wearables, dispositivos inteligentes, reconocimiento de voz, grabación de audio y otros escenarios de aplicación que requieren funciones de detección acústica.

:::tip

Entre la serie XIAO nRF54LM20A, solo el XIAO nRF54M20A Sense está equipado con un micrófono, que se encuentra en la esquina inferior izquierda de la placa de desarrollo.

:::

### Grabación de audio y carga por BLE

Esta sección demuestra la función del micrófono mediante un ejemplo de voz. El proceso específico es el siguiente:

- Pulsa el botón BOOT, el LED RGB-G permanecerá encendido y comenzará la grabación; vuelve a pulsarlo para detener la grabación (máximo 10 segundos).
- Después de la grabación, el archivo de audio se enviará al ordenador host mediante Bluetooth. El LED RGB-G parpadea durante la transmisión.
- Ejecuta el script de recepción en Windows para guardar el archivo de audio en el escritorio.
- El LED RGB-G se apaga después de que se complete la transmisión.

1. Copia el programa desde <a href="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/mic-main.c" download>mic-main.c</a> en `main.c`.

2. Modifica el archivo del device tree `app.overlay` para enlazar el nodo BLE.

```dts

dmic_dev: &pdm20 {
	status = "okay";
};

/* Disable Nordic SoftDevice Controller (not available in mainline Zephyr) */
&bt_hci_sdc {
	status = "disabled";
};

/* Enable Zephyr native BLE controller (LL SW Split) */
&bt_hci_controller {
	status = "okay";
};

&pwm20 {
	status = "disabled";
};

&pmic_i2c {
	sda-gpios = <&gpio1 18 GPIO_ACTIVE_HIGH>;
	scl-gpios = <&gpio1 17 GPIO_ACTIVE_HIGH>;
	status = "okay";
};

&pmic {
	regulators {
		dmic_vdd: LDO1 {
			regulator-min-microvolt = <3300000>;
			regulator-max-microvolt = <3300000>;
			regulator-boot-on;
		};
	};
};

&uart20 {
	current-speed = <921600>;
};

/ {
	chosen {
		zephyr,bt-hci = &bt_hci_controller;
	};

	leds {
		compatible = "gpio-leds";
		led2: led_2 {
			gpios = <&gpio1 24 GPIO_ACTIVE_LOW>;
		};
	};
};

/* External 8MB SPI NOR Flash for audio storage */
&py25q64 {
	status = "okay";
};
```

2. Modifica el archivo `prj.conf` para habilitar las configuraciones de Bluetooth y del micrófono, y establece el nombre del dispositivo Bluetooth como **XIAO MIC**.

```prj
# Audio / DMIC
CONFIG_AUDIO=y
CONFIG_AUDIO_DMIC=y

# GPIO
CONFIG_GPIO=y

# I2C / PMIC
CONFIG_I2C=y
CONFIG_MFD=y
CONFIG_REGULATOR=y

# Logging
CONFIG_LOG=y

# UART for console logging
CONFIG_SERIAL=y
CONFIG_UART_ASYNC_API=y
CONFIG_UART_20_ASYNC=y
CONFIG_UART_21_ASYNC=y
CONFIG_UART_NRFX_UARTE_ENHANCED_RX=y

# BLE
CONFIG_BT=y
CONFIG_BT_PERIPHERAL=y
CONFIG_BT_DEVICE_NAME="XIAO-MIC"
CONFIG_BT_DEVICE_APPEARANCE=833
CONFIG_BT_MAX_CONN=1
CONFIG_BT_MAX_PAIRED=1

# BLE log level: ERR only.  Fixed 30 ms application pacing prevents
# buffer exhaustion; this just silences WRN/INF noise from the stack.
CONFIG_BT_LOG_LEVEL_ERR=y

# Disable auto-procedures to avoid LL Procedure Collision (reason 35)
# on nRF54L with Zephyr native BLE controller
CONFIG_BT_AUTO_PHY_UPDATE=n
CONFIG_BT_GAP_AUTO_UPDATE_CONN_PARAMS=n
CONFIG_BT_CTLR_CONN_PARAM_REQ=n

# Disable data length auto-update (can also cause LL races)
CONFIG_BT_DATA_LEN_UPDATE=n

# BLE buffer tuning for high-throughput NUS notifications
# nRF54LM20A has 1.5MB RAM, generous buffer allocation
CONFIG_BT_BUF_ACL_TX_SIZE=251
CONFIG_BT_BUF_ACL_TX_COUNT=32
CONFIG_BT_BUF_EVT_RX_COUNT=33
CONFIG_BT_BUF_ACL_RX_SIZE=251
CONFIG_BT_L2CAP_TX_MTU=247
CONFIG_BT_L2CAP_TX_BUF_COUNT=24
CONFIG_BT_L2CAP_TX_FRAG_COUNT=12
CONFIG_BT_ATT_TX_COUNT=24
CONFIG_BT_CONN_TX_MAX=32

# Note: BT_CTLR_DATA_LENGTH is selected indirectly (e.g. by BT_DATA_LEN_UPDATE).
# It cannot be set directly, so BT_CTLR_DATA_LENGTH_MAX is also omitted.

# BLE NUS
CONFIG_BT_ZEPHYR_NUS=y
CONFIG_BT_ZEPHYR_NUS_DEFAULT_INSTANCE=y

# Memory
CONFIG_HEAP_MEM_POOL_SIZE=16384

# System workqueue stack (increased for BLE work items)
CONFIG_SYSTEM_WORKQUEUE_STACK_SIZE=4096

# External SPI NOR Flash (8MB PY25Q64HA)
CONFIG_SPI=y
CONFIG_SPI_NOR=y
CONFIG_FLASH=y
CONFIG_FLASH_PAGE_LAYOUT=y

# Assert level
CONFIG_ASSERT=y
CONFIG_BT_CTLR_ASSERT_OPTIMIZE_FOR_SIZE=n

```

### Resultado

Compila y graba el programa en la placa, luego utiliza un ordenador con Windows para recibir el audio grabado mediante Bluetooth con la ayuda de scripts.

1. Ejecuta el script de Python

Instala las bibliotecas dependientes necesarias antes de la ejecución:

```bash
pip install bleak 
```

<br/>

Copia el archivo de script de Python.

<details>

<summary>ble_recorder_receiver.py</summary>

```py
"""
BLE Audio Receiver for XIAO nRF54LM20A BLE Audio Recorder

Connects to "XIAO-MIC" via BLE, subscribes to Nordic UART Service (NUS)
notifications, receives WAV audio data, and saves it to a file.

Requirements: pip install bleak

Usage: python ble_recorder_receiver.py
"""

import asyncio
import sys
import os
from datetime import datetime

from bleak import BleakScanner, BleakClient, BleakError

# Nordic UART Service (NUS) UUIDs
NUS_SERVICE_UUID = "6E400001-B5A3-F393-E0A9-E50E24DCCA9E"
NUS_TX_CHAR_UUID = "6E400003-B5A3-F393-E0A9-E50E24DCCA9E"  # Notify (device -> host)

DEVICE_NAME = "XIAO-MIC"
OUTPUT_DIR = "./recordings"


def make_output_path():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    return os.path.join(OUTPUT_DIR, f"recording_{timestamp}.wav")


async def main():
    output_path = make_output_path()
    total_bytes = 0
    transfer_complete = asyncio.Event()
    connected = False

    def notification_handler(sender, data):
        nonlocal total_bytes
        with open(output_path, "ab") as f:
            f.write(data)
        total_bytes += len(data)
        sys.stdout.write(f"\rReceived: {total_bytes} bytes")
        sys.stdout.flush()

    def disconnected_callback(client):
        nonlocal connected
        connected = False
        print("\nDevice disconnected")
        transfer_complete.set()

    client = None
    try:
        # Step 1: scan with active scanning (find_device_by_name does active scan)
        print(f"Scanning for '{DEVICE_NAME}'...")
        device = await BleakScanner.find_device_by_name(
            DEVICE_NAME, timeout=10.0,
        )

        if device is None:
            print(f"Device '{DEVICE_NAME}' not found. Check:")
            print("  1. XIAO is powered on")
            print("  2. PC Bluetooth is enabled")
            sys.exit(1)

        print(f"Found: {device.name} ({device.address})")

        # Step 2: connect with service UUID filtering
        # By specifying the NUS service UUID, we help Windows discover only what we need
        print("Connecting (this may take up to 30s on Windows)...")

        client = BleakClient(
            device.address,
            disconnected_callback=disconnected_callback,
            timeout=30.0,
            services=[NUS_SERVICE_UUID],
        )
        await client.connect()
        connected = True
        print("Connected")

        # Step 3: subscribe to notifications
        await client.start_notify(NUS_TX_CHAR_UUID, notification_handler)
        print("Subscribed to NUS TX notifications")
        print(f"Saving to: {output_path}")
        print()
        print("Waiting for audio data... Press Ctrl+C to stop.")
        print("On the XIAO: press BOOT button once to start recording,")
        print("press again (or wait 10s) to stop and transfer.\n")

        try:
            await asyncio.wait_for(
                transfer_complete.wait(),
                timeout=600.0,
            )
        except asyncio.TimeoutError:
            print("\nTimeout: no activity for 10 minutes")
        except KeyboardInterrupt:
            print("\nStopped by user")

    except (BleakError, asyncio.TimeoutError) as e:
        print(f"\nBLE error: {e}")
        print()
        print("Windows BLE workarounds:")
        print("  1. Windows Settings > Bluetooth & devices > Devices")
        print("     Remove 'XIAO-MIC' if listed")
        print("  2. Toggle Bluetooth OFF then ON")
        print("  3. Reset XIAO board (replug USB)")
        print("  4. Reboot PC if all else fails")
        sys.exit(1)
    finally:
        if client and connected:
            try:
                await client.stop_notify(NUS_TX_CHAR_UUID)
                await client.disconnect()
            except Exception:
                pass

    file_size = os.path.getsize(output_path) if os.path.exists(output_path) else 0
    print(f"\n{'='*50}")
    print(f"Saved: {output_path}")
    print(f"File size: {file_size} bytes")
    if file_size > 44:
        print("Valid WAV file, ready to play")
    elif file_size > 0:
        print("File may be incomplete (header only)")
    else:
        print("No data received")
    print(f"{'='*50}")


if __name__ == "__main__":
    asyncio.run(main())
```

</details>
<br/>

Comando de ejecución del script:

```bash
python ble_recorder_receiver.py
```

:::tip
El UUID BLE ya está configurado en el programa de Python, por lo que se conectará automáticamente después de ejecutar el script.
:::

2. Comprobar el resultado

- Pulsa la tecla BOOT para empezar a grabar. El LED RGB verde fijo indica que la grabación está en curso. Puedes hablar en voz alta hacia el micrófono y, a continuación, pulsar de nuevo la tecla BOOT para detener la grabación. El LED RGB verde parpadeante significa que se está transmitiendo el archivo de audio.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/onboard_mic_1.gif" style={{width:800, height:'auto'}}/></div>
<br/>

- Abre el puerto serie, se imprimirá el registro. Por favor, ajusta la velocidad en baudios a 921600.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/onboard_mic_2.png" style={{width:800, height:'auto'}}/></div>
<br/>

- Se mostrarán el archivo de audio recibido y su tamaño en bytes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/onboard_mic_3.png" style={{width:800, height:'auto'}}/></div>
<br/>

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
