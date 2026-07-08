---
title: Modos de bajo consumo para XIAO nRF54LM20A Sense
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
updatedAt: '2026-06-15'
url: https://wiki.seeedstudio.com/es/xiao_nrf54lm20a_with_low_power/
---

# Modos de bajo consumo para XIAO nRF54LM20A Sense

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/xiao_nrf54lm20a_power.png" style={{width:400, height:'auto'}}/></div>

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

El XIAO nRF54LM20A está basado en el SoC nRF54LM20 y se caracteriza por un consumo de energía ultrabajo. Su excelente rendimiento de bajo consumo prolonga de forma efectiva el tiempo de funcionamiento del dispositivo en aplicaciones críticas para batería, como wearables, nodos finales de IoT y unidades de sensado remoto. Este documento describe cómo implementar y desplegar varios modos de bajo consumo en el XIAO nRF54LM20A.

:::tip

Este tutorial se ha desarrollado sobre la base del sistema de compilación PlatformIO y Zephyr RTOS. Si no estás familiarizado con la creación de un proyecto para el XIAO nRF54LM20A en PlatformIO, puedes ir a [Getting Sarted With Seeed Studio XIAO nRF54LM20A](https://wiki.seeedstudio.com/es/xiao_nrf54lm20a_getting_started/).

:::

## Preparación de hardware

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
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
</table>
</div>

## Alimentado por batería

Todos los modos implementados en este capítulo adoptan alimentación por batería a través de las almohadillas inferiores del XIAO nRF54LM20A en lugar de alimentación por USB-C.
El XIAO nRF54LM20A es capaz de utilizar una batería de litio de 3,7 V como entrada de alimentación. Puedes consultar el siguiente diagrama para el método de cableado.

<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/getting_start/6_battry.png"alt="Battery wiring" style={{width: 600, height: 'auto'}}
  />
</div>

:::caution

Ten cuidado de no cortocircuitar los terminales positivo y negativo y quemar la batería y el equipo al soldar.
Si la batería tiene carga, nunca la sueldes a la placa, ya que esto puede quemar la placa de circuito. Un cortocircuito mientras el circuito está alimentado supone un riesgo significativo; se recomienda utilizar un adaptador.

:::

## Modo de bajo consumo

El modo de bajo consumo se implementa en el XIAO nRF54LM20A utilizando funciones como System ON Sleep. En este modo, se reduce el consumo de energía mientras el sistema permanece operativo. El reloj de la CPU se bloquea y se suspende, pero el contenido de la RAM, los estados de los periféricos y el contexto del programa se conservan por completo, y los temporizadores de bajo consumo, incluido el GRTC, siguen funcionando. Esta sección verifica el modo de bajo consumo con la función `k_sleep` y la publicidad BLE.

### Software

1. Modifica el archivo del árbol de dispositivos que termina con `.overlay`.

```dts
/ {
    chosen {
        zephyr,bt-hci = &bt_hci_controller;
    };
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

2. Modifica el archivo de configuración `prj.conf` para habilitar los ajustes de gestión de energía del sistema.

```conf
CONFIG_GPIO=y
CONFIG_ARM_MPU=n
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
CONFIG_BT_CTLR_ASSERT_OPTIMIZE_FOR_SIZE=n
CONFIG_BT_CTLR_ASSERT_DEBUG=n
CONFIG_BT_CTLR_ASSERT_OVERHEAD_START=n
```

3. Modifica el programa main.c, habilita el modo de bajo consumo con `k_sleep(K_SECONDS(10))` y configura BLE para difundir mensajes periódicamente con un intervalo de 1 segundo.

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

Después de flashear el firmware, podemos utilizar un medidor de consumo para medir la corriente de funcionamiento del XIAO nRF54LM20A en condiciones de bajo consumo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/low_power_1.png" style={{width:800, height:'auto'}}/></div>
<br/>
Mientras tanto, puedes escanear mediante Bluetooth y encontrar el dispositivo anunciándose con el nombre `XIAO nRF54LM20A`.

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

Los resultados de prueba anteriores se miden en condiciones de laboratorio. Los valores pueden variar con diferentes entornos e instrumentos de prueba; consulta el rendimiento medido en la práctica.

:::

## Modo de ultrabajo consumo

El XIAO nRF54LM20A alcanza el modo de ultrabajo consumo mediante System OFF. Al entrar en este modo, todos los relojes de los periféricos se detienen y la mayoría de los periféricos se apagan por completo, lo que da como resultado una corriente en espera tan baja como 5 µA. Los desencadenantes de activación incluyen el temporizador GRTC o interrupciones GPIO. El estado del sistema no se conserva; después de la activación, el chip se comporta como si se hubiera ciclado la alimentación y el programa se reinicia desde la función main().

Esta sección verifica el rendimiento práctico del modo System OFF en el XIAO nRF54LM20A utilizando el despertar por interrupción GPIO.

### Software

En este ejemplo, la Flash debe deshabilitarse manualmente; de lo contrario, introducirá una corriente de fuga adicional de aproximadamente 15 µA y afectará negativamente a las aplicaciones de ultrabajo consumo.

1. Modifica el archivo del árbol de dispositivos con el sufijo `.overlay`.

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

2. Modifica el archivo `prj.conf` para habilitar configuraciones que incluyen la gestión de energía.

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

3. Escribe el programa main.c para despertar el chip del modo de ultrabajo consumo cuando se pulse el botón Boot integrado.

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

El dispositivo entra en modo de ultra bajo consumo de forma predeterminada después de encenderse. El XIAO nRF54LM20A se mide con un probador de consumo de energía, obteniendo una corriente de funcionamiento promedio de aproximadamente 5,43 µA cuando se alimenta con una batería de 3,7 V.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/low_power_4.png" style={{width:800, height:'auto'}}/></div>
<br/>
Al presionar el botón BOOT integrado a través de un monitor serie, puedes despertar el chip para imprimir información de estado antes de que vuelva a entrar en sueño profundo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/low_power_5.png" style={{width:800, height:'auto'}}/></div>
<br/>
:::tip

Los resultados de prueba anteriores se miden en condiciones de laboratorio. Los valores pueden variar según diferentes entornos e instrumentos de prueba; consulta el rendimiento realmente medido.

:::

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
