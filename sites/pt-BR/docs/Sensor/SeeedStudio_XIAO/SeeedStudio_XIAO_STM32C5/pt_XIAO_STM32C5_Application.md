---
title: Exemplos de Aplicação do XIAO STM32C5
description: ''
keywords:
  - xiao stm32c5
  - zephyr
  - platformio
  - lsm6ds3tr-c
  - imu
  - detecção de movimento
  - can fd
  - registrador can
  - matriz rgb
  - display redondo
image: https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/Seeed-Studio-XIAO-STM32C5.webp
slug: /xiao_stm32c5_application
sku: 100036669
last_update:
  date: 09/14/2026
  author: Zeller
createdAt: '2026-09-08'
updatedAt: '2026-09-14'
url: https://wiki.seeedstudio.com/pt-br/xiao_stm32c5_application/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiaostm32c5_applicaton.png" style={{width:600, height:'auto'}}/></div>

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
                  Adquira agora 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
  </table>
</div>

## Visão geral

O XIAO STM32C5 é equipado com o sensor inercial de 6 eixos LSM6DS3TR-C, que integra um acelerômetro de 3 eixos e um giroscópio de 3 eixos. Ele também possui um transceptor CAN on-board, atendendo diretamente aos requisitos de detecção de movimento e comunicação via barramento CAN. Com esses recursos de hardware, você pode implementar várias aplicações, incluindo detecção de atitude, monitoramento de vibração, wake-up por movimento de baixo consumo, controle de iluminação interativa, registro de dados CAN FD e diagnóstico de falhas.

:::tip

Este artigo utiliza PlatformIO. Se você não estiver familiarizado com ele, consulte [Introdução ao PlatformIO para XIAO STM32C5](https://wiki.seeedstudio.com/pt-br/xiao_stm32c5_getting_started/#getting-started-with-platformio).

:::

## Uso da IMU

O XIAO STM32C5 traz uma **[LSM6DS3TR‑C](https://www.st.com.cn/resource/en/datasheet/lsm6ds3tr-c.pdf) IMU de 6 eixos on‑board**, que integra um acelerômetro de 3 eixos e um giroscópio de 3 eixos. Ela pode ser aplicada à detecção de atitude, reconhecimento de movimento, monitoramento de vibração e outros casos de uso.

Para mitigar o impacto da variação de temperatura ambiente no desvio do sensor e na estabilidade das medições, a placa implementa um circuito ativo de aquecimento para compensação de temperatura. Resistores de aquecimento posicionados ao redor da IMU fornecem aquecimento uniforme para o sensor, e a potência de aquecimento pode ser ajustada via sinais PWM. Combinado com as leituras internas de temperatura da IMU, o controle por software mantém o sensor operando em uma temperatura relativamente estável. Isso reduz a deriva de medição causada pela deriva de temperatura e melhora a consistência dos dados durante a operação de longo prazo e sob condições de temperatura variável.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/gst_7.png" style={{width:600, height:'auto'}}/></div>

### Leitura de dados do sensor de 6 eixos

- **Preparação de hardware**

Uma placa XIAO STM32C5.

<div class="table-center">
<table align="center">
 <tr>
   <th>Seeed Studio XIAO STM32C5</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png" style={{width:400, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
 </tr>
</table>
</div>

- **Preparação de software**

Crie um novo projeto PlatformIO

1. Modifique a configuração da device tree em `app.overlay`

<details>

<summary> app.overlay </summary>

```dts
/*
 * No application-level devicetree overrides are required.
 *
 * The board DTS supplies imu0 as the LSM6DS3TR-C on I2C2:
 *   address 0x6a, SCL PB3, SDA PB4.
 *
 * The board DTS also describes INT1 on PC13 and the heater on PA8/TIM1_CH1,
 * but this polling-only application does not configure an IMU trigger and
 * does not enable or access PWM.  Those board-level nodes remain unchanged.
 */

```

</details>

2. Modifique `prj.conf` para habilitar a amostragem por polling em taxa fixa para o sensor de 6 eixos LSM6DS3TR-C, juntamente com a saída do console serial USB CDC ACM.

<details>

<summary>prj.conf</summary>

```conf
# LSM6DS3TR-C six-axis polling sample.
CONFIG_SENSOR=y
CONFIG_I2C=y

# Fixed sensor configuration: 104 Hz, accel +/-4g, gyro +/-500 dps.
CONFIG_LSM6DSL_ACCEL_ODR=4
CONFIG_LSM6DSL_ACCEL_FS=4
CONFIG_LSM6DSL_GYRO_ODR=4
CONFIG_LSM6DSL_GYRO_FS=500

# USB CDC ACM console for sample output.
CONFIG_SERIAL=y
CONFIG_CONSOLE=y
CONFIG_UART_CONSOLE=y
CONFIG_UF2_DFU_RESET=y
CONFIG_USB_DEVICE_STACK_NEXT=y
CONFIG_USBD_CDC_ACM_CLASS=y
CONFIG_UART_LINE_CTRL=y

# Deliberately not enabled:
# CONFIG_PWM
# CONFIG_LSM6DSL_ENABLE_TEMP
# CONFIG_LSM6DSL_TRIGGER
```

</details>

3. Modifique main.c

<details>

<summary>main.c</summary>

```c
/*
 * Copyright (c) 2026 Seeed Technology Co., Ltd.
 * SPDX-License-Identifier: Apache-2.0
 *
 * XIAO STM32C5 onboard LSM6DS3TR-C six-axis polling sample.
 */

#include <zephyr/device.h>
#include <zephyr/devicetree.h>
#include <zephyr/drivers/sensor.h>
#include <zephyr/kernel.h>
#include <zephyr/sys/printk.h>

#define IMU_NODE DT_ALIAS(imu0)
#define SAMPLE_INTERVAL_MS 100

BUILD_ASSERT(DT_NODE_HAS_STATUS(IMU_NODE, okay),
	     "imu0 alias is not defined or not okay");

static const struct device *const imu = DEVICE_DT_GET(IMU_NODE);

static void print_value(const struct sensor_value *value)
{
	int64_t micro = sensor_value_to_micro(value);
	uint64_t magnitude = micro < 0 ? (uint64_t)(-micro) : (uint64_t)micro;

	printk("%s%lld.%06llu",
	       micro < 0 ? "-" : "",
	       (long long)(magnitude / 1000000U),
	       (unsigned long long)(magnitude % 1000000U));
}

static int read_six_axis(struct sensor_value accel[3],
			 struct sensor_value gyro[3])
{
	int ret = sensor_sample_fetch(imu);

	if (ret < 0) {
		return ret;
	}

	ret = sensor_channel_get(imu, SENSOR_CHAN_ACCEL_XYZ, accel);
	if (ret < 0) {
		return ret;
	}

	return sensor_channel_get(imu, SENSOR_CHAN_GYRO_XYZ, gyro);
}

int main(void)
{
	struct sensor_value accel[3];
	struct sensor_value gyro[3];
	int ret;

	if (!device_is_ready(imu)) {
		printk("IMU device is not ready\n");
		return 0;
	}

	printk("LSM6DS3TR-C polling: accel +/-4g, gyro +/-500 dps, 104 Hz\n");
	printk("INT1 and heater PWM are not used by this application.\n");

	while (true) {
		ret = read_six_axis(accel, gyro);
		if (ret < 0) {
			printk("IMU read failed: %d\n", ret);
			k_msleep(SAMPLE_INTERVAL_MS);
			continue;
		}

		printk("accel(m/s^2) x=");
		print_value(&accel[0]);
		printk(" y=");
		print_value(&accel[1]);
		printk(" z=");
		print_value(&accel[2]);
		printk("  gyro(rad/s) x=");
		print_value(&gyro[0]);
		printk(" y=");
		print_value(&gyro[1]);
		printk(" z=");
		print_value(&gyro[2]);
		printk("\n");

		k_msleep(SAMPLE_INTERVAL_MS);
	}

	return 0;
}
```

</details>

- Resultado

Use qualquer monitor serial para observar as leituras de saída do acelerômetro e giroscópio de 3 eixos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/app_imu_1.png" style={{width:800, height:'auto'}}/></div>

:::tip

1. Se a compensação de temperatura por PWM estiver habilitada, o XIAO STM32C5 será aquecido até cerca de 40°C. Portanto, a geração de calor é normal.
2. Exemplos de código para compensação de temperatura por PWM e interrupção IMU INT1 são mostrados abaixo.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/seeed-xiao-stm32c5/zephyr-imu-temp-pid-6axis" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> IMU Temperature PID</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>
<br/>

:::

### Wake-up por movimento da IMU

A LSM6DS3TR-C on-board pode detectar movimento enquanto o XIAO STM32C5 está em um estado de baixo consumo. Quando o movimento excede o limite de wake-up configurado, a IMU aciona INT1 para acordar a placa.

- **Preparação de hardware**

<div class="table-center">
<table align="center">
 <tr>
   <th>Seeed Studio XIAO STM32C5</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png" style={{width:400, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
 </tr>
</table>
</div>

Antes de começar, prepare uma placa XIAO STM32C5.

**Preparação de software**

1. Adicione a configuração de estado de energia STOP1 ao app.overlay. O DTS da placa já define a IMU e seu pino INT1.

<details>

<summary> app.overlay </summary>

```dts
/*
 * No IMU-specific devicetree overrides are required.
 *
 * The board DTS supplies imu0 as the LSM6DS3TR-C on I2C2:
 *   address 0x6a, SCL PB3, SDA PB4.
 *
 * The board DTS also describes INT1 on PC13 and the heater on PA8/TIM1_CH1.
 */

 / {
	power-states {
		stop1: stop1 {
			compatible = "zephyr,power-state";
			power-state-name = "suspend-to-idle";
			substate-id = <1>;
			min-residency-us = <1000>;
			exit-latency-us = <100>;
		};
	};
};

&cpu0 {
	cpu-power-states = <&stop1>;
};

```

</details>

2. Modifique o arquivo de configuração `prj.conf`.

<details>

<summary> prj.conf</summary>

```conf
CONFIG_I2C=y
CONFIG_GPIO=y
CONFIG_PM=y

CONFIG_SERIAL=y
CONFIG_CONSOLE=y
CONFIG_UART_CONSOLE=y
CONFIG_PRINTK=y
CONFIG_UF2_DFU_RESET=y
CONFIG_USB_DEVICE_STACK_NEXT=y
CONFIG_USBD_CDC_ACM_CLASS=y
CONFIG_UART_LINE_CTRL=y

# The IMU heater/temperature compensation is intentionally unused.
CONFIG_PWM=n
```

</details>

3. Implemente o despertar por movimento em main.c. O IMU compara o movimento com o limite de despertar configurado e aciona INT1 quando disparado. Em seguida, o XIAO acorda, registra o evento e uma amostra do IMU, e volta a dormir.

<details>

<summary> main.c </summary>

```c
/* XIAO STM32C5 + LSM6DS3TR-C motion wake-up demo. */

#include <zephyr/device.h>
#include <zephyr/devicetree.h>
#include <zephyr/drivers/gpio.h>
#include <zephyr/drivers/i2c.h>
#include <zephyr/kernel.h>
#include <zephyr/pm/pm.h>
#include <zephyr/sys/printk.h>

#include <stm32_ll_cortex.h>
#include <stm32_ll_pwr.h>

#define IMU_NODE DT_ALIAS(imu0)

#define CTRL1_XL   0x10
#define CTRL2_G    0x11
#define CTRL3_C    0x12
#define CTRL6_C    0x15
#define WAKE_SRC   0x1b
#define OUTX_L_G   0x22
#define TAP_CFG    0x58
#define WAKE_THS   0x5b
#define WAKE_DUR   0x5c
#define MD1_CFG    0x5e

static const struct i2c_dt_spec imu = I2C_DT_SPEC_GET(IMU_NODE);
static const struct gpio_dt_spec imu_int =
	GPIO_DT_SPEC_GET(IMU_NODE, irq_gpios);
static const struct gpio_dt_spec led =
	GPIO_DT_SPEC_GET(DT_ALIAS(led0), gpios);

static struct gpio_callback imu_cb;
K_SEM_DEFINE(wake_sem, 0, 1);

extern int stm32_clock_control_init(const struct device *dev);

/* Zephyr 4.4 has no STM32C5 PM backend yet, so provide the STOP1 hooks here. */
void pm_state_set(enum pm_state state, uint8_t substate_id)
{
	if (state == PM_STATE_SUSPEND_TO_IDLE && substate_id == 1) {
		LL_PWR_SetPowerMode(LL_PWR_STOP1_MODE);
		SCB_EnableDeepSleep();
		k_cpu_idle();
	}
}

void pm_state_exit_post_ops(enum pm_state state, uint8_t substate_id)
{
	if (state == PM_STATE_SUSPEND_TO_IDLE && substate_id == 1) {
		SCB_DisableDeepSleep();
		(void)stm32_clock_control_init(NULL);
	}
	irq_unlock(0);
}

static void imu_isr(const struct device *port, struct gpio_callback *cb,
		    gpio_port_pins_t pins)
{
	ARG_UNUSED(port);
	ARG_UNUSED(cb);
	ARG_UNUSED(pins);
	k_sem_give(&wake_sem);
}

static int imu_wakeup_init(void)
{
	int ret;

	if (!i2c_is_ready_dt(&imu) || !gpio_is_ready_dt(&imu_int) ||
	    !gpio_is_ready_dt(&led)) {
		return -ENODEV;
	}

	ret = gpio_pin_configure_dt(&led, GPIO_OUTPUT_INACTIVE);
	ret |= gpio_pin_configure_dt(&imu_int, GPIO_INPUT);
	if (ret < 0) {
		return ret;
	}

	gpio_init_callback(&imu_cb, imu_isr, BIT(imu_int.pin));
	ret = gpio_add_callback(imu_int.port, &imu_cb);
	if (ret < 0) {
		return ret;
	}

	return 0;
}

static int enter_imu_low_power(void)
{
	int ret;

	/* Sleep sensing: accel 12.5 Hz low-power +/-2 g, gyro off. */
	ret = i2c_reg_write_byte_dt(&imu, MD1_CFG, 0x00);
	ret |= i2c_reg_write_byte_dt(&imu, CTRL3_C, 0x44);
	ret |= i2c_reg_write_byte_dt(&imu, CTRL2_G, 0x00);
	ret |= i2c_reg_write_byte_dt(&imu, CTRL6_C, 0x10);
	ret |= i2c_reg_write_byte_dt(&imu, CTRL1_XL, 0x10);
	ret |= i2c_reg_write_byte_dt(&imu, WAKE_THS, 0x08);
	ret |= i2c_reg_write_byte_dt(&imu, WAKE_DUR, 0x00);
	ret |= i2c_reg_write_byte_dt(&imu, TAP_CFG, 0x80);
	return ret;
}

static int arm_imu_wakeup(void)
{
	uint8_t source;
	int ret;

	/* Discard the mode-change transient only after the 500 ms settling time. */
	k_sem_reset(&wake_sem);
	ret = i2c_reg_read_byte_dt(&imu, WAKE_SRC, &source);
	ret |= i2c_reg_write_byte_dt(&imu, MD1_CFG, BIT(5));
	ret |= gpio_pin_interrupt_configure_dt(&imu_int,
					       GPIO_INT_EDGE_TO_ACTIVE);
	return ret;
}

static int16_t sample16(const uint8_t *data)
{
	return (int16_t)((uint16_t)data[0] | ((uint16_t)data[1] << 8));
}

static void print_imu_sample(void)
{
	uint8_t data[12];
	int16_t gx, gy, gz, ax, ay, az;

	/* Awake sensing: accel and gyro at 104 Hz. */
	(void)i2c_reg_write_byte_dt(&imu, MD1_CFG, 0x00);
	(void)i2c_reg_write_byte_dt(&imu, CTRL6_C, 0x00);
	(void)i2c_reg_write_byte_dt(&imu, CTRL1_XL, 0x40);
	(void)i2c_reg_write_byte_dt(&imu, CTRL2_G, 0x40);
	k_msleep(30);

	if (i2c_burst_read_dt(&imu, OUTX_L_G, data, sizeof(data)) < 0) {
		printk("IMU sample read failed\n");
		return;
	}

	gx = sample16(&data[0]);
	gy = sample16(&data[2]);
	gz = sample16(&data[4]);
	ax = sample16(&data[6]);
	ay = sample16(&data[8]);
	az = sample16(&data[10]);

	/* +/-2 g: 0.061 mg/LSB; +/-250 dps: 8.75 mdps/LSB. */
	printk("accel[mg]=%d,%d,%d gyro[mdps]=%d,%d,%d\n",
	       ax * 61 / 1000, ay * 61 / 1000, az * 61 / 1000,
	       gx * 875 / 100, gy * 875 / 100, gz * 875 / 100);
}

int main(void)
{
	uint32_t event_count = 0;
	uint8_t source;

	if (imu_wakeup_init() < 0) {
		printk("IMU wake-up init failed\n");
		return 0;
	}

	gpio_pin_set_dt(&led, 1);
	if (enter_imu_low_power() < 0) {
		printk("Failed to configure IMU low-power mode\n");
		return 0;
	}
	k_msleep(500);
	gpio_pin_set_dt(&led, 0);

	while (true) {
		if (arm_imu_wakeup() < 0) {
			printk("Failed to arm IMU wake-up\n");
			return 0;
		}

		printk("Sleeping in STOP1. Move or tap the board to wake it.\n");

		/* With no runnable work, Zephyr selects STOP1 from app.overlay. */
		k_sem_take(&wake_sem, K_FOREVER);

		(void)gpio_pin_interrupt_configure_dt(&imu_int,
						      GPIO_INT_DISABLE);
		(void)i2c_reg_write_byte_dt(&imu, MD1_CFG, 0x00);
		(void)i2c_reg_read_byte_dt(&imu, WAKE_SRC, &source);
		gpio_pin_set_dt(&led, 1);
		printk("Knock event #%u, WAKE_UP_SRC=0x%02x\n",
		       ++event_count, source);
		print_imu_sample();

		/* Let low-power acceleration settle while the LED remains on. */
		if (enter_imu_low_power() < 0) {
			printk("Failed to configure IMU low-power mode\n");
			return 0;
		}
		k_msleep(500);
		gpio_pin_set_dt(&led, 0);
	}

	return 0;
}
```

</details>

4. Resultado

- Quando o movimento excede o limite configurado, INT1 acorda a placa. O LED acende brevemente antes que a placa volte a dormir.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/app_imu_2.gif" style={{width:600, height:'auto'}}/></div>

- Cada despertar imprime um número de evento, o valor de WAKE_UP_SRC e uma amostra do IMU na porta serial.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/app_imu_2.png" style={{width:800, height:'auto'}}/></div>

### IMU Electronic Ocean

A demonstração Electronic Ocean usa o IMU para detectar a direção da gravidade e o estado de movimento do dispositivo. Duas matrizes RGB 6×10 em cascata são tratadas como uma única área de exibição 6×20 unificada. O programa calcula a orientação da superfície da água a partir dos dados do acelerômetro e controla a amplitude das ondas usando leituras do giroscópio e a intensidade do movimento. Ele também ajusta dinamicamente o nível da água, mantendo aproximadamente metade do preenchimento do "água do mar" à medida que o dispositivo gira ou se inclina. Isso simula o fluido fluindo, respingando e agitando sob a gravidade.

- Uso:
	- Após ligar, os LEDs RGB permanecem apagados por padrão, aguardando o despertar.
	- Desperte o Electronic Ocean sacudindo o dispositivo de forma perceptível ou mantendo o botão pressionado por 2 segundos.
	- Incline o dispositivo lentamente; a superfície da água se deslocará suavemente seguindo a gravidade.
	- Movimente o dispositivo moderadamente para intensificar a ondulação das ondas e os efeitos de agitação.
	- Pressione rapidamente o botão para alternar os modos de exibição: neon, azul de mar profundo, ciano do céu, respiração roxa, texto rolante e mais.
	- Mantenha o botão pressionado por 2 segundos ou sacuda o dispositivo com firmeza durante a operação para entrar manualmente no modo de suspensão.
	- Se a atitude do dispositivo permanecer quase inalterada por 90 segundos consecutivos, os LEDs RGB serão desligados automaticamente e aguardarão para serem despertados por eventos do IMU ou entrada do botão.

- **Preparação de hardware**

<div class="table-center">
<table align="center">
 <tr>
   <th>Seeed Studio XIAO STM32C5</th>
        <th>Matriz RGB 6x10 WS2812 para Seeed Studio XIAO × 2 </th>
		<th>Grove Button</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png" style={{width:300, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/6/-/6-6x10-rgb-matrix-for-xiao-feature.jpg" style={{width:300, height:'auto'}}/></div></td>
	<td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/p/e/perspectiive.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/6x10-RGB-MATRIX-for-XIAO-p-5771.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Button.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>
</div>

- **Preparação de software**

1. Modifique o arquivo `app.overlay` para habilitar os pinos configurados. Aqui, D1 é selecionado para controle do botão, e D0 serve como pino de sinal para acionar a Matriz RGB WS2812.

<details>

<summary> app.overlay </summary>

```dts
#include <zephyr/dt-bindings/gpio/gpio.h>

/ {
	aliases {
		rgb-data = &rgb_matrix_data;
		imu-wake = &imu_wake;
		mode-button = &mode_button;
	};

	mode_buttons {
		compatible = "gpio-keys";
		mode_button: mode-button {
			gpios = <&gpioa 1 (GPIO_PULL_DOWN | GPIO_ACTIVE_HIGH)>;
			label = "Grove Button on D1";
		};
	};

	imu_wake_pins {
		compatible = "gpio-keys";
		imu_wake: imu-wake {
			gpios = <&gpioc 13 GPIO_ACTIVE_HIGH>;
			label = "LSM6DS3TR-C INT1";
		};
	};

	/* D0/PA0 drives two cascaded 6 x 10 panels (first DOUT -> second DIN). */
	rgb_matrix_pins {
		compatible = "gpio-leds";

		rgb_matrix_data: rgb-matrix-data {
			gpios = <&gpioa 0 GPIO_ACTIVE_HIGH>;
		};
	};
};

/* The on-board LSM6DS3TR-C is polled at 50 Hz to animate the ocean. */
&i2c2 {
	status = "okay";
};

&lsm6ds3tr_c {
	status = "okay";
};
```

</details>

2. Modifique o arquivo de configuração `prj.conf`.

<details>

<summary> prj.conf</summary>

```conf
CONFIG_GPIO=y
CONFIG_I2C=y
CONFIG_SENSOR=y
CONFIG_LSM6DSL=y
CONFIG_PRINTK=y
CONFIG_MAIN_STACK_SIZE=4096
```

</details>

3. Implemente a lógica em `main.c`. Como o código de referência é bastante longo, navegue até o arquivo de código e copie seu conteúdo para `main.c`.

    - **📄[c-file]** [electronic-ocean-main.c](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/electronic-ocean-main.c)

4. Resultado

- Quando o dispositivo está parado ou entra em modo de suspensão, as luzes RGB se apagam e o IMU permanece em detecção de movimento de baixo consumo.
- Agite o dispositivo; a interrupção do IMU aciona o despertar e o efeito de oceano RGB acende novamente.
- Incline o dispositivo lentamente e o nível do mar se inclinará suavemente seguindo a gravidade, como a superfície da água dentro de um recipiente.
- Ao mudar a orientação do dispositivo, a água do mar flui continuamente por toda a matriz RGB.
- À medida que a intensidade do movimento ou da agitação aumenta, os efeitos de ondulação e arrebentação das ondas tornam‑se proporcionalmente mais fortes.
- Se a atitude permanecer inalterada por muito tempo, ou após uma agitação perceptível, as luzes se apagarão novamente e retornarão ao estado de espera por despertar.

<div class="table-center">
<iframe width="600" height="500" src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/app_ocean.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>
<br/>
:::tip

1. Arquivos de gabinete para impressão 3D estão disponíveis abaixo
	- [3D Ocean Shell](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/v4_eletronic_ocean.3mf)
2. A recarga via USB‑C é suportada após instalar uma bateria. Consulte [Battery Usage](https://wiki.seeedstudio.com/pt-br/xiao_stm32c5_getting_started/#battery-usage).
3. Se você pretende colocar uma bateria dentro do gabinete, a bateria de íon‑lítio recomendada é a KXW 402030 (3,7 V, 200 mAh, 0,74 Wh).

:::

## Registrador CAN

O XIAO STM32C5 possui periféricos CAN FD de dois canais integrados. Ele é equipado com o transceptor [TCAN3403-Q1](https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/tcan3403-q1.pdf), e um resistor de terminação de 120 ohms já vem pré‑configurado. Você pode usar diretamente as interfaces de ilhós de solda `CAN_H` e `CAN_L` no lado traseiro para aplicações relacionadas a CAN‑BUS.

:::tip

Para mais informações sobre o uso de CAN e CAN‑FD no XIAO STM32C5, consulte [XIAO STM32C5 CANFD Usage](https://wiki.seeedstudio.com/pt-br/xiao_stm32c5_canfd_usage/)

:::

Em aplicações de CAN BUS, a análise dos dados de payload CAN, a verificação do sucesso da transmissão e recepção, a taxa de perda de pacotes e outros fatores relacionados são críticos para a implantação prática. No entanto, o protocolo CAN BUS é complexo, o que torna a solução de problemas desafiadora para os desenvolvedores. Portanto, são necessárias certas ferramentas para identificar preliminarmente nós defeituosos no CAN BUS para diagnóstico posterior.

A seguinte demonstração de simulação de falhas em CAN FD e diagnóstico visual é construída com duas placas XIAO STM32C5 e um Round Display. Ela pode gerar quadros normais, quadros com sequências ausentes e quadros com erros de CRC na camada de aplicação. Também exibe estatísticas de recepção em tempo real, estima a taxa de perda de pacotes e mostra os resultados das verificações.

### Preparação de hardware

São necessárias duas placas XIAO STM32C5 aqui. Uma atua como o Registrador CAN para controle e análise, enquanto a outra simula um nó CAN BUS para transmitir dados e emular perda de pacotes. Conecte as duas placas via `CAN_H` e `CAN_L`. Se as placas usarem fontes de alimentação separadas, conecte também os seus terras.

<div class="table-center">
<table align="center">
 <tr>
   <th>Seeed Studio XIAO STM32C5 × 2 </th>
        <th>Round Display para Seeed Studio XIAO</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/xiao_stm32c5.png" style={{width:300, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-104030087-seeed-studio-round-display-for-xiao-new-font.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-STM32C5-p-7011.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/1-28-Round-Touch-Display-for-Seeed-Studio-XIAO-ESP32.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>
</div>

### Preparação de software


#### Nó de envio de mensagens CANFD

- Use um XIAO STM32C5 como nó transmissor CAN FD.
  - Taxa de bits da fase de arbitragem: 500 kbit/s
  - Taxa de bits da fase de dados: 2 Mbit/s
  - Comprimento do payload: 64 bytes
  - Ativar CAN FD e BRS
  - Os dados contêm número de sequência, tempo de atividade, payload de teste e CRC16-CCITT

1. Modifique o arquivo de device tree `app.overlay`

<details>

<summary>app.overlay</summary>

```overlay
/* No application-specific devicetree overlay is required.
 *
 * The board-level DTS already enables FDCAN2 and routes the console to the
 * USB CDC ACM virtual COM port:
 *   - can0 / zephyr,canbus -> &fdcan2 (RX=PB5, TX=PB13)
 *   - CAN_STB (PB14)       -> managed by the board-level can_phy0 transceiver
 *   - zephyr,console       -> &cdc_acm_uart0
 */
```

</details>

2. Modifique `prj.conf` para habilitar as configurações correspondentes.

<details>

<summary>prj.conf</summary>

```conf
CONFIG_GPIO=y
CONFIG_SERIAL=y
CONFIG_CONSOLE=y
CONFIG_UART_CONSOLE=y
CONFIG_PRINTK=y
CONFIG_USB_DEVICE_STACK_NEXT=y
CONFIG_USBD_CDC_ACM_CLASS=y
CONFIG_UART_LINE_CTRL=y
CONFIG_UF2_DFU_RESET=y
CONFIG_CAN=y
CONFIG_CAN_FD_MODE=y
CONFIG_CAN_INIT_PRIORITY=80
CONFIG_CAN_DEFAULT_BITRATE=500000
CONFIG_CAN_DEFAULT_BITRATE_DATA=2000000
CONFIG_MAIN_STACK_SIZE=4096

```

</details>

3. Escreva o programa em `main.c`. O projeto transmite ciclicamente três tipos de quadros de dados:
	- `0x100`: Dados normais
	Números de sequência contínuos com CRC16 válido na camada de aplicação.
	- `0x101`: Dados de simulação de perda de quadros
	Alguns números de sequência são intencionalmente pulados, para que o receptor possa estimar o número de quadros perdidos com base nas lacunas de sequência.
	- `0x102`: Dados com erro de checksum
	O quadro é transmitido normalmente, mas o CRC16 da camada de aplicação dentro do payload é deliberadamente adulterado para que o receptor detecte falhas de CRC.
<details>

<summary>main.c</summary>

```c
/* SPDX-License-Identifier: Apache-2.0
 * XIAO STM32C5 CAN FD logger traffic generator.
 */

#include <stdbool.h>
#include <stdint.h>
#include <string.h>
#include <zephyr/device.h>
#include <zephyr/drivers/can.h>
#include <zephyr/drivers/gpio.h>
#include <zephyr/kernel.h>
#include <zephyr/sys/printk.h>

#define CAN_NOMINAL_BITRATE 500000U
#define CAN_DATA_BITRATE    2000000U
#define PERIOD_MS           200U
#define FRAME_BYTES         64U
#define ID_NORMAL           0x100U
#define ID_LOSSY            0x101U
#define ID_BAD_CRC          0x102U
#define PACKET_MAGIC_0      0xCAU
#define PACKET_MAGIC_1      0xFDU
#define PACKET_VERSION      1U

enum packet_type { PACKET_NORMAL, PACKET_LOSSY, PACKET_BAD_CRC };

static const struct device *const can_dev =
	DEVICE_DT_GET(DT_CHOSEN(zephyr_canbus));
static const struct gpio_dt_spec led =
	GPIO_DT_SPEC_GET_OR(DT_ALIAS(led0), gpios, { 0 });
static uint32_t tx_ok;
static uint32_t tx_failed;

static uint16_t crc16_ccitt(const uint8_t *data, size_t len)
{
	uint16_t crc = 0xffffU;
	for (size_t i = 0; i < len; ++i) {
		crc ^= (uint16_t)data[i] << 8;
		for (int bit = 0; bit < 8; ++bit) {
			crc = (crc & 0x8000U) != 0U ?
				(uint16_t)((crc << 1) ^ 0x1021U) : (uint16_t)(crc << 1);
		}
	}
	return crc;
}

static void put_u32_le(uint8_t *dst, uint32_t value)
{
	dst[0] = (uint8_t)value;
	dst[1] = (uint8_t)(value >> 8);
	dst[2] = (uint8_t)(value >> 16);
	dst[3] = (uint8_t)(value >> 24);
}

static void build_packet(struct can_frame *frame, uint32_t id,
			 enum packet_type type, uint32_t sequence, bool corrupt_crc)
{
	memset(frame, 0, sizeof(*frame));
	frame->id = id;
	frame->flags = CAN_FRAME_FDF | CAN_FRAME_BRS;
	frame->dlc = can_bytes_to_dlc(FRAME_BYTES);
	frame->data[0] = PACKET_MAGIC_0;
	frame->data[1] = PACKET_MAGIC_1;
	frame->data[2] = PACKET_VERSION;
	frame->data[3] = (uint8_t)type;
	put_u32_le(&frame->data[4], sequence);
	put_u32_le(&frame->data[8], k_uptime_get_32());
	for (uint8_t i = 12U; i < FRAME_BYTES - 2U; ++i) {
		frame->data[i] = (uint8_t)(sequence + id + i * 17U);
	}
	uint16_t crc = crc16_ccitt(frame->data, FRAME_BYTES - 2U);
	if (corrupt_crc) {
		crc ^= 0x0001U;
	}
	frame->data[FRAME_BYTES - 2U] = (uint8_t)crc;
	frame->data[FRAME_BYTES - 1U] = (uint8_t)(crc >> 8);
}

static int send_packet(uint32_t id, enum packet_type type,
		       uint32_t sequence, bool corrupt_crc)
{
	struct can_frame frame;
	build_packet(&frame, id, type, sequence, corrupt_crc);
	int ret = can_send(can_dev, &frame, K_MSEC(100), NULL, NULL);
	if (ret == 0) {
		tx_ok++;
	} else {
		tx_failed++;
		printk("TX failed id=0x%03x seq=%u err=%d\n", id, sequence, ret);
	}
	return ret;
}

int main(void)
{
	uint32_t normal_seq = 0U, lossy_seq = 0U, bad_crc_seq = 0U;
	int ret;

	printk("XIAO STM32C5 CAN FD traffic generator\n");
	printk("nominal=%u data=%u payload=%u bytes BRS=on\n",
	       CAN_NOMINAL_BITRATE, CAN_DATA_BITRATE, FRAME_BYTES);
	if (!device_is_ready(can_dev)) {
		printk("CAN device is not ready\n");
		return -ENODEV;
	}
	if (led.port != NULL && gpio_is_ready_dt(&led)) {
		(void)gpio_pin_configure_dt(&led, GPIO_OUTPUT_INACTIVE);
	}
	ret = can_set_mode(can_dev, CAN_MODE_FD);
	if (ret != 0) {
		printk("Cannot enable CAN FD mode: %d\n", ret);
		return ret;
	}
	ret = can_set_bitrate(can_dev, CAN_NOMINAL_BITRATE);
	if (ret != 0) {
		printk("Cannot set nominal bitrate: %d\n", ret);
		return ret;
	}
	ret = can_set_bitrate_data(can_dev, CAN_DATA_BITRATE);
	if (ret != 0) {
		printk("Cannot set data bitrate: %d\n", ret);
		return ret;
	}
	ret = can_start(can_dev);
	if (ret != 0) {
		printk("Cannot start CAN controller: %d\n", ret);
		return ret;
	}
	printk("0x100 normal, 0x101 skips every 5th, 0x102 has bad app CRC16\n");

	while (true) {
		(void)send_packet(ID_NORMAL, PACKET_NORMAL, normal_seq++, false);
		if ((lossy_seq % 5U) != 4U) {
			(void)send_packet(ID_LOSSY, PACKET_LOSSY, lossy_seq, false);
		} else {
			printk("INTENTIONAL DROP id=0x101 seq=%u\n", lossy_seq);
		}
		lossy_seq++;
		(void)send_packet(ID_BAD_CRC, PACKET_BAD_CRC, bad_crc_seq++, true);
		if ((normal_seq % 10U) == 0U) {
			printk("TX ok=%u failed=%u seq=%u\n", tx_ok, tx_failed, normal_seq);
		}
		if (led.port != NULL) {
			(void)gpio_pin_toggle_dt(&led);
		}
		k_msleep(PERIOD_MS);
	}
}
```

</details>

#### Nó registrador CAN

- Desenvolva o firmware do registrador CAN usando um XIAO STM32C5 junto com o Round Display.
  - Receber e analisar quadros de teste CAN FD de 64 bytes
  - Verificar o tipo de quadro, comprimento do payload, identificador de protocolo e versão
  - Estimar a contagem de quadros perdidos e a taxa de perda de quadros a partir de lacunas no número de sequência
  - Detectar dados duplicados ou fora de ordem
  - Validar o CRC16-CCITT no payload
  - Ler o status do controlador CAN e os contadores de erro TX/RX
  - Usar cores diferentes para distinguir quadros normais, quadros perdidos, erros de CRC e dados brutos
  - Exibir estatísticas e as últimas 48 entradas de log em memória na tela redonda
  - Navegar pelos logs página por página por meio dos botões de toque inferiores LAST / número da página / NEXT
  - Adotar o controlador de toque CHSC6X; ler dados de toque via I²C de hardware

1. Modifique o arquivo de device tree `app.overlay` para vincular o Round Display ao Seeed Studio XIAO.

<details>

<summary>app.overlay</summary>

```overlay
#include <freq.h>
#include <zephyr/dt-bindings/display/panel.h>
#include <zephyr/dt-bindings/gpio/gpio.h>
#include <zephyr/dt-bindings/i2c/i2c.h>

/ {
	chosen {
		zephyr,display = &gc9a01_round_display;
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
	/* XIAO D4/PB7=SDA and D5/PB6=SCL. */
	clock-frequency = <I2C_BITRATE_STANDARD>;
	scl-gpios = <&gpiob 6 (GPIO_OPEN_DRAIN | GPIO_PULL_UP)>;
	sda-gpios = <&gpiob 7 (GPIO_OPEN_DRAIN | GPIO_PULL_UP)>;
	status = "okay";
};

&spi3 {
	/* D8=PE2 SCK, D9=PB0 MISO, D10=PB15 MOSI. */
	status = "okay";
	cs-gpios = <&xiao_d 1 GPIO_ACTIVE_LOW>;
};

```

</details>

2. Modifique `prj.conf` para habilitar as configurações correspondentes.

<details>

<summary>prj.conf</summary>

```conf
CONFIG_GPIO=y
CONFIG_I2C=y
CONFIG_I2C_STM32_BUS_RECOVERY=y
CONFIG_SPI=y
CONFIG_DISPLAY=y
CONFIG_MIPI_DBI=y
CONFIG_CAN=y
CONFIG_CAN_FD_MODE=y
CONFIG_CAN_INIT_PRIORITY=80
CONFIG_CAN_DEFAULT_BITRATE=500000
CONFIG_CAN_DEFAULT_BITRATE_DATA=2000000
CONFIG_SERIAL=y
CONFIG_CONSOLE=y
CONFIG_UART_CONSOLE=y
CONFIG_PRINTK=y
CONFIG_USB_DEVICE_STACK_NEXT=y
CONFIG_USBD_CDC_ACM_CLASS=y
CONFIG_UART_LINE_CTRL=y
CONFIG_UF2_DFU_RESET=y
CONFIG_MAIN_STACK_SIZE=6144

```

</details>

3. Escreva o programa em `main.c` e integre a lógica de análise CAN FD. Como o código de referência é bastante longo, navegue até o arquivo de código e copie seu conteúdo para `main.c`.

	- **📄[c-file]** <a href="https://files.seeedstudio.com/wiki/XIAO_STM32C5/res/can-logger-main.c" download="can-logger-main.c">can-logger-main.c</a>

### Resultado

O nó transmissor e o nó registrador devem ser conectados combinando `CAN_H` com `CAN_H` e `CAN_L` com `CAN_L`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/canfd_3.png" style={{width:600, height:'auto'}}/></div>

1. Exibição quando não há conexão

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/app_log_1.jpg" style={{width:600, height:'auto'}}/></div>
<br/>

2. Exibição quando os nós estão conectados

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/app_log_2.gif" style={{width:600, height:'auto'}}/></div>
<br/>

3. Desconecte o nó transmissor para visualizar dados históricos

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_STM32C5/img/app_log_3.gif" style={{width:600, height:'auto'}}/></div>
<br/>

## Resumo

Por meio desses simples exemplos de aplicação do XIAO STM32C5, você deve ter adquirido uma compreensão básica de seus cenários de uso. Desejamos que você tenha uma ótima experiência com esta pequena placa de desenvolvimento e que ela inspire mais ideias para explorar suas possibilidades de aplicação. Você também é bem-vindo para compartilhar seus projetos com a comunidade de código aberto para que todos possam ver seu trabalho.

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>