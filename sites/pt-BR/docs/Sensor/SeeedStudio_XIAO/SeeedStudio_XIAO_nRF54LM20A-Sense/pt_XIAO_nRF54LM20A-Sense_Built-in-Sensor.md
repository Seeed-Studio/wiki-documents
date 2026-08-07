---
title: Uso dos sensores integrados do XIAO nRF54LM20A Sense
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
url: https://wiki.seeedstudio.com/pt-br/xiao_nrf54lm20a_with_onboard/
---

# Uso dos sensores integrados do XIAO nRF54LM20A Sense

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
                  Adquira agora 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
  </table>
</div>

O XIAO nRF54LM20A Sense está equipado com abundantes sensores integrados para suportar aplicações em múltiplos cenários. Ele inclui o sensor de seis eixos LSM6DS3TR-C para reconhecimento de postura e o microfone digital MEMS MSM261DGT006, que suporta saída digital PDM e captação de som omnidirecional, sendo adequado para cenários de voz inteligente. Este artigo apresenta os métodos de desenvolvimento e uso com base nos ricos periféricos integrados do XIAO nRF54LM20A.

:::tip

- Este artigo é desenvolvido com base no sistema de build PlatformIO e no Zephyr RTOS. Se você não tiver experiência prévia com eles, consulte [Getting Started With SeeedStudio XIAO nRF54LM20A](https://wiki.seeedstudio.com/pt-br/xiao_nrf54lm20a_sense_getting_started/)

:::

## Preparação de hardware

Este artigo é desenvolvido com base no XIAO nRF54LM20A Sense, e você precisa preparar o hardware relevante com antecedência.

<div className="table-center">
<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
   <th>Matriz RGB 6x10 WS2812 para Seeed Studio XIAO</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/7/-/7-6x10-rgb-matrix-for-xiao-feature_1.jpg" style={{width:400, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/6x10-RGB-MATRIX-for-XIAO-p-5771.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
 </tr>
</table>
</div>

## IMU

O LSM6DS3TR-C é um sensor de seis eixos que integra um acelerômetro digital de 3 eixos e um giroscópio digital de 3 eixos, pertencente à unidade de medição inercial (IMU) iNEMO lançada pela STMicroelectronics. No XIAO nRF54LM20A Sense, esse sensor suporta saída de dados acionada por interrupção. Ele possui uma faixa de aceleração de escala completa de ±2/±4/±8/±16 g e uma faixa de velocidade angular de ±125/±250/±500/±1000/±2000 dps, e suporta modo de baixo consumo persistente, tornando-o adequado para vários cenários de detecção de movimento. O chip integrado se comunica com ele por meio do protocolo I2C para adquirir dados.
:::tip

- Para mais informações sobre o LSM6DS3TR-C, visite: [Product overview for LSM6DS3TR-C](https://www.st.com/en/mems-and-sensors/lsm6ds3tr-c.html) e [LSM6DS3TR-C Datasheet](https://www.st.com/resource/en/datasheet/lsm6ds3tr-c.pdf)

:::

### Obter dados de seis eixos

1. Modifique o arquivo de device tree `app.overlay` para vincular os pinos de hardware usados pelo LSM6DS3TR-C à device tree. Vincule IMU_SDA e IMU_SCL ao nó i2c30, correspondendo a P0.08 e P0.07 no XIAO nRF54LM20A Sense. Vincule o pino de disparo de interrupção IMU_INT1 a P0.06.

:::tip

- Para o pinout do XIAO nRF54LM20A, clique em [XIAO nRF54LM20A Sense Pin List](https://wiki.seeedstudio.com/pt-br/xiao_nrf54lm20a_getting_started/#visão-geral-do-hardware) para ver os detalhes.

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

2. Modifique o arquivo prj.conf para habilitar as configurações de I2C e de disparo por interrupção.

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

3. Escreva um programa para enviar os dados adquiridos do acelerômetro digital de 3 eixos e do giroscópio digital de 3 eixos pela porta serial USB.

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
Se você quiser verificar diretamente o desempenho da IMU, clone o repositório Platform-seeedboards, localize o exemplo zephyr-imu no diretório examples, depois compile e grave o programa para iniciar o teste.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/zephyr/boards" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar as bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

:::

#### Resultado

Após gravar o firmware, você pode abrir o assistente de porta serial no seu PC para visualização dos dados. A frequência de disparo é de 12,5 Hz com um intervalo de 80 milissegundos.

- Acelerômetro digital de 3 eixos: mede a aceleração ao longo dos eixos X, Y e Z.
- Giroscópio digital de 3 eixos: mede a velocidade angular em torno dos eixos X, Y e Z.

:::tip

1. Defina a taxa de transmissão para 115200 ao visualizar dados via monitor serial.
2. Especifique a taxa de transmissão como 115200 no arquivo de configuração **platformio.ini** para o monitor serial da IDE PlatformIO.

```ini
[env:seeed-xiao-nrf54lm20a]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
framework = zephyr
board = seeed-xiao-nrf54lm20a
monitor_speed = 115200
```

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/onboar_imu_1.png" style={{width:800, height:'auto'}}/></div>

### Aplicação

A IMU pode fundir dados de aceleração de três eixos para calcular os ângulos de atitude de pitch, yaw e roll para reconhecimento de postura. Ela também pode trabalhar com controladores correspondentes para realizar controle de movimento, ou ser aplicada em cenários de baixo consumo de energia, como despertar acionado por atitude.

#### Oceano Eletrônico

Este é um exemplo baseado na IMU integrada da XIAO nRF54LM20A Sense. Ele coleta dados de atitude e funde informações de aceleração para mapear estados de movimento no painel de luz RGB, alcançando efeitos visuais de ritmo oceânico.

- **Controle de nível de água por inclinação** — Ajuste a altura do nível de água por meio da inclinação de roll para a esquerda e para a direita
- **Animação de ondas** — Superfície de ondas com sobreposição de três camadas de frequência, propagação de ondas 2D e efeito de reflexão nas bordas
- **Inércia do fluido** — Superfície da água com momento; inclinação rápida causa overshoot e subsequente oscilação de retorno
- **Detecção de inversão** — A exibição é espelhada automaticamente quando a placa é virada
- **Cor dinâmica** — Troca de tons oceânicos em gradiente aleatório para cada coluna

Além disso, você pode modificar a configuração da matriz RGB da placa por meio de definições de macro em main.c.

```cpp
#define COLS 10          // Number of matrix columns
#define ROWS  6          // Number of matrix rows
#define BRIGHTNESS 5     // Overall brightness (0-100)
#define WATER_CENTER 3.5f // Water level when placed horizontally
#define WATER_MIN 0.5f   // Minimum water level
#define WATER_MAX 6.5f   // Maximum water level
```

##### Instruções de uso

1. Copie o conteúdo do programa correspondente [imu_ocean-main.c](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/imu_ocean_main.c) e cole em main.c.<br/>

2. Modifique o arquivo de árvore de dispositivo `app.overlay`.

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

3. Habilite as configurações relacionadas ao uso da IMU

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

- Agite o dispositivo para acionar o efeito visual de ondas do oceano.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/WHPSAryN-W4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div><br/>

- Ao mesmo tempo, a porta serial também irá exibir os dados correspondentes da IMU e a altura atual do nível de água das ondas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/onboard_imu_2.png" style={{width:800, height:'auto'}}/></div>

#### Despertar por IMU

Nesta rotina, o canal verde do RGB acende e apaga após a energização, e então o sistema entra em modo de sono de ultrabaixo consumo. Quando um toque é detectado pela placa, o XIAO nRF54LM20A Sense será despertado via interrupção. O evento de toque será registrado e impresso pela porta serial.

Baixe a rotina para implementar a função de despertar por IMU.

1. Baixe o programa [imu-click-main.c](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/imu_click_main.c) e substitua com ele o conteúdo de main.c.

2. Modifique o arquivo de árvore de dispositivo `app.overlay` e adicione as configurações de nós necessárias.

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

3. Habilite as configurações relevantes da IMU em prj.conf

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
- Após gravar e ligar, o LED RGB-G piscará brevemente. Toque em qualquer lugar da placa para acender o LED RGB-G.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/onboard_imu_3_1.gif" style={{width:800, height:'auto'}}/></div>

- Ao mesmo tempo, as informações do evento de toque também serão exibidas pela porta serial.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/onboard_imu_3.png" style={{width:800, height:'auto'}}/></div>
<br/>
:::tip

A posição de detecção é apenas para referência. O reconhecimento preciso da posição do toque depende do algoritmo de controle de fusão da IMU.

:::

## RTC

O chip adotado pela XIAO nRF54LM20A Sense é equipado com recursos de hardware GRTC integrados, permitindo funções de RTC sem módulos RTC adicionais.

O RTC oferece suporte à contagem de carimbos de data e hora e pode registrar o tempo de operação mesmo após uma falha de energia, o que facilita o registro de logs e o rastreamento de tempo.

Esta seção apresenta um programa de exemplo implementado no XIAO nRF54LM20A Sense. Após a energização, ele obtém carimbos de data e hora a partir do horário de compilação via RTC e imprime os dados a cada segundo. Após entrar no modo System OFF, o sistema será acordado pelo alarme do RTC para continuar a contagem.

1. Copie o arquivo [rtc-main.c](https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/rtc-main.c) para o arquivo main.c. Use as funções de RTC para imprimir o carimbo de data e hora.

2. Modifique a árvore de dispositivo `app.overlay` para habilitar o nó do RTC.

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

3. Edite o arquivo prj.conf para habilitar as configurações relevantes do RTC.

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

- O programa começa a contar a partir do momento de compilação e gravação. Abra a ferramenta de porta serial para observar o efeito de execução, e todas as funções esperadas são implementadas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/onboard_rtc_1.png" style={{width:800, height:'auto'}}/></div>
<br/>

## MIC 

O XIAO nRF54LM20A Sense está equipado com o microfone digital MEMS MSM261DGT006 para entrada de voz. Ele se conecta diretamente via interface PDM sem necessidade de um ADC. É adequado para dispositivos vestíveis, dispositivos inteligentes, reconhecimento de voz, gravação de áudio e outros cenários de aplicação que exigem funções de detecção acústica.

:::tip

Entre a série XIAO nRF54LM20A, apenas o XIAO nRF54M20A Sense está equipado com um microfone, que está localizado no canto inferior esquerdo da placa de desenvolvimento.

:::

### Gravação de áudio e upload via BLE

Esta seção demonstra a função do microfone por meio de um exemplo de voz. O processo específico é o seguinte:

- Pressione o botão BOOT, o LED RGB-G permanecerá aceso e iniciará a gravação; pressione-o novamente para parar a gravação (máximo de 10 segundos).
- Após a gravação, o arquivo de áudio será enviado para o computador host via Bluetooth. O LED RGB-G pisca durante a transmissão.
- Execute o script de recepção no Windows para salvar o arquivo de áudio na área de trabalho.
- O LED RGB-G apaga após a conclusão da transmissão.

1. Copie o programa de <a href="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/RES/mic-main.c" download>mic-main.c</a> para `main.c`.

2. Modifique o arquivo de árvore de dispositivo `app.overlay` para vincular o nó BLE.

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

2. Modifique o arquivo `prj.conf` para habilitar as configurações de Bluetooth e microfone, e defina o nome do dispositivo Bluetooth como **XIAO MIC**.

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

Compile e grave o programa e, em seguida, use um computador com Windows para receber o áudio gravado via Bluetooth com a ajuda de scripts.

1. Execute o script em Python

Instale as bibliotecas dependentes necessárias antes da execução:

```bash
pip install bleak 
```

<br/>

Copie o arquivo de script em Python.

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

Comando de execução do script:

```bash
python ble_recorder_receiver.py
```

:::tip
O UUID BLE já está configurado no programa Python, portanto a conexão será feita automaticamente após executar o script.
:::

2. Verificar o resultado

- Pressione a tecla BOOT para iniciar a gravação. O LED RGB verde constante indica que a gravação está em andamento. Você pode falar em voz alta em direção ao microfone e, em seguida, pressionar a tecla BOOT novamente para parar a gravação. O LED RGB verde piscando significa que o arquivo de áudio está sendo transmitido.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/onboard_mic_1.gif" style={{width:800, height:'auto'}}/></div>
<br/>

- Abra a porta serial, ela irá imprimir o log. Defina a taxa de transmissão para 921600.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/onboard_mic_2.png" style={{width:800, height:'auto'}}/></div>
<br/>

- O arquivo de áudio recebido e seu tamanho em bytes serão exibidos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/onboard_mic_3.png" style={{width:800, height:'auto'}}/></div>
<br/>

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
