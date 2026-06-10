---
title: Modos de baixo consumo para XIAO nRF54LM20A Sense
description: ''
keywords:
  - xiao
  - nrf54lm20a
  - low_power
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/xiao_nrf54lm20a_power.webp
slug: /xiao_nrf54lm20a_with_low_power
sku: 100018440
last_update:
  date: 06/01/2026
  author: Zeller
createdAt: '2025-06-01'
updatedAt: '2026-06-02'
url: https://wiki.seeedstudio.com/pt-br/xiao_nrf54lm20a_with_low_power/
---

# Modos de baixo consumo para XIAO nRF54LM20A Sense

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/xiao_nrf54lm20a_power.png" style={{width:400, height:'auto'}}/></div>

O XIAO nRF54LM20A é construído em torno do SoC nRF54LM20 e apresenta consumo de energia ultrabaixo. Seu desempenho excepcional em baixo consumo estende de forma eficaz o tempo de operação do dispositivo para aplicações críticas em bateria, como wearables, nós finais de IoT e unidades de sensoriamento remoto. Este documento descreve como implementar e implantar vários modos de baixo consumo no XIAO nRF54LM20A.

:::tip

Este tutorial foi desenvolvido com base no sistema de build PlatformIO e no Zephyr RTOS. Se você não estiver familiarizado com a criação de um projeto para o XIAO nRF54LM20A no PlatformIO, você pode ir para [Getting Sarted With Seeed Studio XIAO nRF54LM20A](https://wiki.seeedstudio.com/pt-br/xiao_nrf54lm20a_getting_started/).

:::

## Preparação de hardware

<div className="table-center">
<table align="center">
    <tr>
        <th>SeeedStudio XIAO nRF54LM20A Sense</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:400, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
</table>
</div>

## Alimentado por bateria

Todos os modos implementados neste capítulo adotam alimentação por bateria através dos pads inferiores do XIAO nRF54LM20A em vez de alimentação via USB-C.
O XIAO nRF54LM20A é capaz de usar uma bateria de lítio de 3,7 V como entrada de alimentação. Você pode consultar o diagrama a seguir para o método de fiação.

<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/6_battry.png"alt="Battery wiring" style={{width: 600, height: 'auto'}}
  />
</div>

:::caution

Tenha cuidado para não causar curto-circuito entre os terminais positivo e negativo e queimar a bateria e o equipamento durante a soldagem.
Se a bateria estiver com carga, nunca a solde na placa, pois isso pode queimar a placa de circuito. Um curto-circuito enquanto o circuito estiver energizado representa um risco significativo; é recomendável usar um adaptador.

:::

## Modo de baixo consumo

O modo de baixo consumo é implementado no XIAO nRF54LM20A usando funções como System ON Sleep. Nesse modo, o consumo de energia é reduzido enquanto o sistema permanece operacional. O clock da CPU é bloqueado e suspenso, porém o conteúdo da RAM, os estados dos periféricos e o contexto do programa são totalmente preservados, e temporizadores de baixo consumo, incluindo o GRTC, continuam em execução. Esta seção verifica o modo de baixo consumo com a função `k_sleep` e publicidade BLE.

### Software

1. Modifique o arquivo device tree com extensão `.overlay`.

```dts
/* Switch BT HCI from Nordic SDC (needs nrfxlib binary) to Zephyr SW controller */
/ {
    chosen {
        zephyr,bt-hci = &bt_hci_controller;
    };
};

&bt_hci_sdc {
    status = "disabled";
};

&bt_hci_controller {
    status = "okay";
};

/* Disable unused regulators to reduce standby power */
&power_en {
    /delete-property/ regulator-boot-on;
};

&pmic {
    regulators {
        LDO1 {
            /delete-property/ regulator-boot-on;
        };
    };
};
```

2. Modifique o arquivo de configuração `prj.conf` para habilitar as configurações de gerenciamento de energia do sistema.

```conf
CONFIG_GPIO=y
CONFIG_NRFX_POWER=y
CONFIG_POWEROFF=y
CONFIG_HWINFO=y
CONFIG_CRC=y

# Device power management (peripheral level)
CONFIG_PM_DEVICE=y
CONFIG_PM_DEVICE_RUNTIME=y

# Bluetooth
CONFIG_BT=y
CONFIG_BT_BROADCASTER=y
CONFIG_BT_DEVICE_NAME="XIAO nRF54LM20A"
```

3. Modifique o programa main.c, habilite o modo de baixo consumo com `k_sleep(K_SECONDS(10))` e configure o BLE para transmitir mensagens periodicamente em um intervalo de 1 segundo.

```c
/*
 * BLE Low Power Broadcasting Demo for XIAO nRF54LM20A
 */
#include <zephyr/kernel.h>
#include <zephyr/bluetooth/bluetooth.h>
#include <zephyr/bluetooth/hci.h>

/* 1000ms / 0.625ms = 1600 = 0x0640 */
#define ADV_INTERVAL_1S 0x0640

static const struct bt_data ad[] = {
    BT_DATA_BYTES(BT_DATA_FLAGS, (BT_LE_AD_GENERAL | BT_LE_AD_NO_BREDR)),
    BT_DATA(BT_DATA_NAME_COMPLETE, "XIAO nRF54LM20A", 15),
};

static void bt_ready(int err)
{
    if (err) {
        return;
    }

    struct bt_le_adv_param param = BT_LE_ADV_PARAM_INIT(
        BT_LE_ADV_OPT_NONE,
        ADV_INTERVAL_1S,
        ADV_INTERVAL_1S,
        NULL
    );

    bt_le_adv_start(&param, ad, ARRAY_SIZE(ad), NULL, 0);
}

int main(void)
{
    bt_enable(bt_ready);

    /* BLE controller handles advertising autonomously; CPU sleeps */
    while (1) {
        k_sleep(K_SECONDS(10));
    }

    return 0;
}
```

### Resultado

Após gravar o firmware, podemos usar um medidor de consumo de energia para medir a corrente de operação do XIAO nRF54LM20A em condições de baixo consumo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/low_power_1.png" style={{width:800, height:'auto'}}/></div>
<br/>
Ao mesmo tempo, você pode fazer a varredura via Bluetooth e encontrar o dispositivo anunciando sob o nome `XIAO nRF54LM20A`.

- Android: [nRF Connect](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en)
- IOS: [nRF Connect](https://apps.apple.com/us/app/nrf-connect-for-mobile/id1054362403)

<div className="table-center">
<table align="center">
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/low_power_2.jpg" style={{width:300, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/low_power_3.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
</table>
</div>
<br/>
:::tip

Os resultados de teste acima foram medidos em condições de laboratório. Os valores podem variar com diferentes ambientes e instrumentos de teste; consulte o desempenho medido na prática.

:::

## Modo de ultrabaixo consumo

O XIAO nRF54LM20A atinge o modo de ultrabaixo consumo por meio do System OFF. Ao entrar nesse modo, todos os clocks dos periféricos são interrompidos e a maioria dos periféricos é totalmente desligada, resultando em uma corrente de standby tão baixa quanto 5 µA. Os gatilhos de despertar incluem o temporizador GRTC ou interrupções de GPIO. O estado do sistema não é mantido; após o despertar, o chip se comporta como se tivesse sido reinicializado pela alimentação e o programa reinicia a partir da função main().

Esta seção verifica o desempenho prático do modo System OFF no XIAO nRF54LM20A usando o despertar por interrupção de GPIO.

### Software

Neste exemplo, a Flash deve ser desativada manualmente; caso contrário, ela introduzirá uma corrente de fuga adicional de aproximadamente 15 µA e afetará negativamente as aplicações de ultrabaixo consumo.

1. Modifique o arquivo device tree com o sufixo `.overlay`.

```dts
&power_en {
	// /delete-property/ regulator-boot-on;
};

&pmic {
	regulators {
		LDO1 {
			// /delete-property/ regulator-boot-on;
		};
	};
};

&py25q64 {
	status = "okay";
	// hold-gpios = <&gpio2 0 GPIO_ACTIVE_LOW>;
};
```

2. Modifique o arquivo `prj.conf` para habilitar configurações incluindo gerenciamento de energia.

```conf
CONFIG_SERIAL=y
CONFIG_CONSOLE=y
CONFIG_UART_CONSOLE=y
CONFIG_PRINTK=y

CONFIG_GPIO=y
CONFIG_SPI=y
CONFIG_FLASH=y
CONFIG_SPI_NOR=y

CONFIG_PM_DEVICE=y
CONFIG_NRFX_POWER=y
CONFIG_POWEROFF=y
CONFIG_HWINFO=y
```

3. Escreva o programa main.c para acordar o chip do modo de ultrabaixo consumo quando o botão Boot onboard for pressionado.

<details>

<summary>main.c</summary>

```c
/*
 * Copyright (c) 2019 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: Apache-2.0
 */
#include <errno.h>
#include <inttypes.h>
#include <stdio.h>

#include <zephyr/device.h>
#include <zephyr/drivers/gpio.h>
#include <zephyr/drivers/hwinfo.h>
#include <zephyr/kernel.h>
#include <zephyr/pm/device.h>
#include <zephyr/sys/poweroff.h>

static const struct gpio_dt_spec sw0 = GPIO_DT_SPEC_GET(DT_ALIAS(sw0), gpios);
static const struct device *const cons = DEVICE_DT_GET(DT_CHOSEN(zephyr_console));
static const struct device *const flash_dev = DEVICE_DT_GET(DT_NODELABEL(py25q64));

static void print_reset_cause(uint32_t reset_cause)
{
	if (reset_cause & RESET_DEBUG) {
		printf("Reset by debugger.\n");
	} else if (reset_cause & RESET_CLOCK) {
		printf("Wakeup from System OFF by clock source.\n");
	} else if (reset_cause & RESET_LOW_POWER_WAKE) {
		printf("Wakeup from System OFF by GPIO.\n");
	} else if (reset_cause != 0U) {
		printf("Other wake up cause 0x%08" PRIX32 ".\n", reset_cause);
	} else {
		printf("Power-on reset or reset cause unavailable.\n");
	}
}

static int configure_gpio_wakeup(void)
{
	int rc;

	if (!gpio_is_ready_dt(&sw0)) {
		printf("sw0 GPIO device not ready.\n");
		return -ENODEV;
	}

	rc = gpio_pin_configure_dt(&sw0, GPIO_INPUT);
	if (rc < 0) {
		printf("Could not configure sw0 GPIO (%d)\n", rc);
		return rc;
	}

	rc = gpio_pin_interrupt_configure_dt(&sw0, GPIO_INT_LEVEL_ACTIVE);
	if (rc < 0) {
		printf("Could not configure sw0 GPIO interrupt (%d)\n", rc);
		return rc;
	}

	return 0;
}

/*
 * SPI pin assignments for PY25Q64HA:
 *   P2.05 = CS#    -> OUTPUT HIGH  (keep flash deselected, prevent DPD wake)
 *   P2.00 = HOLD#  -> OUTPUT HIGH  (inactive)
 *   P2.03 = WP#    -> OUTPUT HIGH  (inactive)
 *   P2.01 = SCK    -> OUTPUT LOW   (deterministic level)
 *   P2.02 = MOSI   -> OUTPUT LOW   (deterministic level)
 *   P2.04 = MISO   -> INPUT PULL_DOWN (flash output, pull to known level)
 *
 * Datasheet requires all flash inputs at 0V or Vcc during DPD for 0.2uA typ.
 */
static int configure_spi_pins_for_system_off(void)
{
	const struct device *gpio2 = DEVICE_DT_GET(DT_NODELABEL(gpio2));
	int rc;

	if (!device_is_ready(gpio2)) {
		printf("GPIO2 not ready.\n");
		return -ENODEV;
	}

	/* CS# = HIGH: keep flash deselected */
	rc = gpio_pin_configure(gpio2, 5, GPIO_OUTPUT_HIGH);
	if (rc < 0) {
		return rc;
	}

	/* HOLD# = HIGH: inactive */
	rc = gpio_pin_configure(gpio2, 0, GPIO_OUTPUT_HIGH);
	if (rc < 0) {
		return rc;
	}

	/* WP# = HIGH: inactive */
	rc = gpio_pin_configure(gpio2, 3, GPIO_OUTPUT_HIGH);
	if (rc < 0) {
		return rc;
	}

	/* SCK = LOW */
	rc = gpio_pin_configure(gpio2, 1, GPIO_OUTPUT_LOW);
	if (rc < 0) {
		return rc;
	}

	/* MOSI = LOW */
	rc = gpio_pin_configure(gpio2, 2, GPIO_OUTPUT_LOW);
	if (rc < 0) {
		return rc;
	}

	/* MISO = input with pull-down */
	rc = gpio_pin_configure(gpio2, 4, GPIO_INPUT | GPIO_PULL_DOWN);
	if (rc < 0) {
		return rc;
	}

	return 0;
}

static int suspend_external_flash(void)
{
	const struct device *flash_bus = DEVICE_DT_GET(DT_BUS(DT_NODELABEL(py25q64)));
	int rc;

	if (!device_is_ready(flash_dev)) {
		printf("Flash device %s is not ready.\n", flash_dev->name);
		return -ENODEV;
	}

	printf("Flash device: %s\n", flash_dev->name);

	/* Step 1: Suspend flash — spi-nor driver sends DPD (0xB9) automatically */
	printf("Suspending external flash (entering DPD)...\n");
	rc = pm_device_action_run(flash_dev, PM_DEVICE_ACTION_SUSPEND);
	if (rc < 0) {
		printf("Could not suspend external flash (%d)\n", rc);
		return rc;
	}
	printf("External flash suspended.\n");

	/* Step 2: Suspend SPI bus */
	if (device_is_ready(flash_bus)) {
		rc = pm_device_action_run(flash_bus, PM_DEVICE_ACTION_SUSPEND);
		if (rc < 0) {
			printf("Could not suspend SPI bus (%d)\n", rc);
			return rc;
		}
		printf("SPI bus suspended.\n");
	}

	/* Step 3: Drive all SPI GPIOs to deterministic levels */
	rc = configure_spi_pins_for_system_off();
	if (rc < 0) {
		printf("Could not configure SPI pins (%d)\n", rc);
		return rc;
	}
	printf("SPI GPIO pins configured for system_off.\n");

	return 0;
}

int main(void)
{
	int rc;

	if (!device_is_ready(cons)) {
		printf("%s: console device not ready.\n", cons->name);
		return 0;
	}

	printf("\n=== %s system off demo with PY25Q64HA ===\n", CONFIG_BOARD);

	uint32_t reset_cause = 0U;

	rc = hwinfo_get_reset_cause(&reset_cause);
	if (rc == 0) {
		print_reset_cause(reset_cause);
	} else {
		printf("Could not read reset cause (%d)\n", rc);
	}

	rc = configure_gpio_wakeup();
	if (rc < 0) {
		return 0;
	}

	rc = suspend_external_flash();
	if (rc < 0) {
		printf("Aborting system off because flash did not enter low power.\n");
		return 0;
	}

	printf("Entering system off; press sw0 to restart\n");

	rc = pm_device_action_run(cons, PM_DEVICE_ACTION_SUSPEND);
	if (rc < 0) {
		printf("Could not suspend console (%d)\n", rc);
		return 0;
	}

	rc = hwinfo_clear_reset_cause();
	if (rc < 0) {
		printf("Could not clear reset cause (rc=%d)\n", rc);
		return 0;
	}

	sys_poweroff();

	return 0;
}
```

</details>

### Resultado

O dispositivo entra no modo de consumo ultrabaixo de energia por padrão após ser ligado. O XIAO nRF54LM20A é medido com um testador de consumo de energia, resultando em uma corrente média de operação de aproximadamente 5,43 µA quando alimentado por uma bateria de 3,7 V.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/low_power_4.png" style={{width:800, height:'auto'}}/></div>
<br/>
Ao pressionar o botão BOOT onboard por meio de um monitor serial, você pode acordar o chip para imprimir informações de status antes que ele entre novamente em sono profundo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/low_power_5.png" style={{width:800, height:'auto'}}/></div>
<br/>
:::tip

Os resultados de teste acima foram medidos em condições de laboratório. Os valores podem variar com diferentes ambientes e instrumentos de teste; consulte o desempenho realmente medido.

:::

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
