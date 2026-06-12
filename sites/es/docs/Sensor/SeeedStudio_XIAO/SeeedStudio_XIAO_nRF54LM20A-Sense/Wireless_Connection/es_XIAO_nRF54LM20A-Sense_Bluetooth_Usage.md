---
title: Bluetooth LE para XIAO nRF54LM20A Sense
description: ''
keywords:
  - xiao
  - nrf54lm20a
  - bluetooth de bajo consumo
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/xiao_nrf54lm20a_ble.webp
slug: /xiao_nrf54lm20a_with_bluetooth_lowpower
sku: 100018440
last_update:
  date: 05/13/2026
  author: Zeller
createdAt: '2025-05-20'
updatedAt: '2026-05-21'
url: https://wiki.seeedstudio.com/es/xiao_nrf54lm20a_with_ble/
---

# Bluetooth LE para XIAO nRF54LM20A Sense

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/xiao_nrf54lm20a_ble.png" style={{width:400, height:'auto'}}/></div>

Bluetooth Low Energy (BLE) es un estándar de comunicación inalámbrica de bajo consumo introducido en Bluetooth 4.0. Diseñado para la transmisión intermitente de pequeños datos, permite la conectividad inalámbrica dentro de decenas de metros mientras mantiene un consumo de corriente promedio ultrabajo a nivel de microamperios. Se aplica ampliamente en dispositivos wearables, sensores de hogar inteligente, posicionamiento en interiores y escenarios de IoT industrial.

Impulsado por el SoC nRF54LM20A, la Serie XIAO nRF54LM20A es compatible con Bluetooth LE, Matter, Thread, Zigbee y protocolos propietarios de 2,4 GHz, ofreciendo una tasa de datos máxima de 4 Mbps ideal para escenarios de baja latencia. También admite Bluetooth Channel Sounding y Bluetooth Mesh. Este artículo ilustra su funcionalidad BLE mediante tres programas de ejemplo progresivos, comenzando con la transmisión básica de balizas de difusión (Beacon) y ampliándose a comunicación UART bidireccional y carga de datos de sensores en tiempo real.

:::tip

- Este tutorial está desarrollado sobre el sistema de compilación PlatformIO y Zephyr RTOS. Si no estás familiarizado con la creación de un proyecto para el XIAO nRF54LM20A en PlatformIO, puedes ir a [Getting Sarted With Seeed Studio XIAO nRF54LM20A](https://wiki.seeedstudio.com/es/xiao_nrf54lm20a_getting_started/)
- Si deseas aprender más sobre el SoC nRF54LM20A y BLE, visita los siguientes enlaces: [**nRF54LM20A SoC Introduction**](https://www.nordicsemi.com/Products/nRF54LM20A) y [**Bluetooth-Low-Energy for Nordic**](https://www.nordicsemi.com/Products/Wireless/Bluetooth-Low-Energy)

:::

## Preparación de hardware

Antes de comenzar con la implementación de la rutina, necesitas preparar al menos un XIAO nRF54LM20A Sense.

<div className="table-center">
<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20A Sense</th>
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

## Antena Bluetooth

Esta placa utiliza una antena Bluetooth externa. Para garantizar una mejor calidad de señal Bluetooth y mejorar tu experiencia de uso de Bluetooth, se recomienda instalar una antena Bluetooth.
El método de conexión se muestra a continuación:

<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_6.gif"
    alt="Bluetooth antenna connection"
    style={{width: 600, height: 'auto'}}
  />
</div>

### Instalación de la antena

Dentro del embalaje del Seeed Studio XIAO nRF54LM20A, hay un conector dedicado para antena Wi-Fi/BT. Para obtener una intensidad óptima de la señal WiFi/Bluetooth, debes sacar la antena incluida en el paquete y conectarla al conector.
<!--  -->
<div class="table-center">
 <table>
  <tr>
   <th>Antena FPC de 2,4 GHz A-04 para XIAO nRF54 Serie</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-100039813-2.4ghz-fpc-antenna-_1.86dbi_-for-xiao-nrf54l15.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/2-4GHz-FPC-Antenna-1-86dBi-for-XIAO-nRF54L15-p-6578.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Aplicación

Esta sección presenta las funciones principales de BLE y el método de uso de BLE en XIAO nRF54LM20A Sense mediante casos prácticos.

### BLE Beacon

Este proyecto implementa una función de BLE Beacon en XIAO nRF54LM20A. El dispositivo sigue emitiendo paquetes de advertising que contienen Manufacturer Specific Data después de encenderse. El paquete contiene un valor de contador que aumenta cada segundo, y la variación de datos en tiempo real puede comprobarse a través de nRF Connect.

#### Software

1. Las configuraciones relevantes del device tree deben habilitarse en `app.overlay` para cambiar el controlador BLE a la implementación nativa de Zephyr.

```dts
/* Disable Nordic SoftDevice Controller (not available in mainline Zephyr) */
&bt_hci_sdc {
	status = "disabled";
};

/* Enable Zephyr native BLE controller (LL SW Split) */
&bt_hci_controller {
	status = "okay";
};

/ {
	chosen {
		zephyr,bt-hci = &bt_hci_controller;
	};
};
```

2. Habilita las configuraciones de Bluetooth relevantes en `prj.conf`, establece el modo de salida de registro y cambia el nombre del dispositivo Bluetooth a **XIAO-Beacon**.

```prj
# GPIO
CONFIG_GPIO=y
# Regulator (for power_en)
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
CONFIG_BT_DEVICE_NAME="XIAO-Beacon"
# Disable auto-procedures to avoid LL Procedure Collision on nRF54L
CONFIG_BT_AUTO_PHY_UPDATE=n
CONFIG_BT_DATA_LEN_UPDATE=n
# Memory
CONFIG_HEAP_MEM_POOL_SIZE=8192
# System workqueue stack
CONFIG_SYSTEM_WORKQUEUE_STACK_SIZE=2048
# Assert level
CONFIG_ASSERT=y
```

3. Escribe el código dentro de main.c y personaliza el formato y contenido de la transmisión de datos.

<details>

<summary>main.c</summary>

```c
#include <stdio.h>

#include <zephyr/kernel.h>
#include <zephyr/device.h>
#include <zephyr/drivers/gpio.h>
#include <zephyr/drivers/regulator.h>
#include <zephyr/bluetooth/bluetooth.h>
#include <zephyr/bluetooth/hci.h>
#include <zephyr/logging/log.h>

LOG_MODULE_REGISTER(ble_beacon, LOG_LEVEL_INF);

/* Manufacturer Data configuration */
#define MANUF_COMPANY_ID    0x0059
#define MANUF_DATA_SIZE     8

static uint32_t manufacturer_counter;

/* Power enable regulator (GPIO1_12) - must be enabled before BLE init */
static const struct device *const power_en_dev =
	DEVICE_DT_GET(DT_NODELABEL(power_en));

static void adv_update_work_handler(struct k_work *work);

static K_WORK_DELAYABLE_DEFINE(adv_update_work, adv_update_work_handler);

static int enable_power(void)
{
	int ret;

	if (!device_is_ready(power_en_dev)) {
		LOG_ERR("power_en regulator is not ready");
		return -ENODEV;
	}

	ret = regulator_enable(power_en_dev);
	if (ret < 0 && ret != -EALREADY) {
		LOG_ERR("Failed to enable power_en: %d", ret);
		return ret;
	}

	k_sleep(K_MSEC(20));
	LOG_INF("Power rail enabled");
	return 0;
}

static void adv_update_work_handler(struct k_work *work)
{
	int err;
	uint8_t manuf_data[MANUF_DATA_SIZE];

	manufacturer_counter++;

	/* Build manufacturer data: [Company ID (2B)][Counter (4B)][Custom (2B)] */
	manuf_data[0] = MANUF_COMPANY_ID & 0xFF;
	manuf_data[1] = (MANUF_COMPANY_ID >> 8) & 0xFF;
	manuf_data[2] = (manufacturer_counter >> 0) & 0xFF;
	manuf_data[3] = (manufacturer_counter >> 8) & 0xFF;
	manuf_data[4] = (manufacturer_counter >> 16) & 0xFF;
	manuf_data[5] = (manufacturer_counter >> 24) & 0xFF;
	manuf_data[6] = 0xAA;
	manuf_data[7] = 0xBB;

	const struct bt_data ad[] = {
		BT_DATA_BYTES(BT_DATA_FLAGS, (BT_LE_AD_GENERAL | BT_LE_AD_NO_BREDR)),
		BT_DATA(BT_DATA_NAME_COMPLETE, CONFIG_BT_DEVICE_NAME,
			sizeof(CONFIG_BT_DEVICE_NAME) - 1),
		BT_DATA(BT_DATA_MANUFACTURER_DATA, manuf_data, sizeof(manuf_data)),
	};

	err = bt_le_adv_update_data(ad, ARRAY_SIZE(ad), NULL, 0);
	if (err < 0) {
		LOG_ERR("Failed to update advertising data (err %d)", err);
	} else {
		LOG_INF("Manufacturer counter: %u", manufacturer_counter);
	}

	k_work_schedule(&adv_update_work, K_SECONDS(1));
}

int main(void)
{
	int err;
	uint8_t init_data[MANUF_DATA_SIZE];

	LOG_INF("BLE Manufacturer Data Beacon");

	/* Enable board power rail before BLE initialization */
	err = enable_power();
	if (err < 0) {
		LOG_ERR("Power enable failed (err %d)", err);
		return err;
	}

	LOG_INF("Initializing BLE...");

	err = bt_enable(NULL);
	if (err < 0) {
		LOG_ERR("Bluetooth enable failed (err %d)", err);
		return err;
	}

	LOG_INF("BLE initialized");

	/* Initial advertising data with counter = 0 */
	init_data[0] = MANUF_COMPANY_ID & 0xFF;
	init_data[1] = (MANUF_COMPANY_ID >> 8) & 0xFF;
	init_data[2] = 0;
	init_data[3] = 0;
	init_data[4] = 0;
	init_data[5] = 0;
	init_data[6] = 0xAA;
	init_data[7] = 0xBB;

	const struct bt_data ad[] = {
		BT_DATA_BYTES(BT_DATA_FLAGS, (BT_LE_AD_GENERAL | BT_LE_AD_NO_BREDR)),
		BT_DATA(BT_DATA_NAME_COMPLETE, CONFIG_BT_DEVICE_NAME,
			sizeof(CONFIG_BT_DEVICE_NAME) - 1),
		BT_DATA(BT_DATA_MANUFACTURER_DATA, init_data, sizeof(init_data)),
	};

	err = bt_le_adv_start(BT_LE_ADV_NCONN, ad, ARRAY_SIZE(ad), NULL, 0);
	if (err < 0) {
		LOG_ERR("Advertising failed to start (err %d)", err);
		return err;
	}

	LOG_INF("BLE advertising started");

	/* Schedule counter update after 1 second */
	k_work_schedule(&adv_update_work, K_SECONDS(1));

	for (;;) {
		k_sleep(K_FOREVER);
	}

	return 0;
}
```

</details>

#### Resultado

1. Después de cargar el firmware, instala la app nRF Connect para escanear y detectar dispositivos BLE.

Mientras tanto, puedes buscar y descargar la app nRF Connect en las principales tiendas de aplicaciones móviles, lo que permite que tu teléfono busque y se conecte a dispositivos Bluetooth.

- Android: [nRF Connect](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en)
- IOS: [nRF Connect](https://apps.apple.com/us/app/nrf-connect-for-mobile/id1054362403)

2. Después de instalar el software, escanea el dispositivo Bluetooth llamado **XIAO-Beacon** y comprueba los Manufacturer Data recibidos. Al mismo tiempo, abre el puerto serie para ver los registros de salida.

<div className="table-center">
<table align="center">
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_beacon_1.jpg" style={{width:300, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_beacon_2.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
</table>
</div>

- Los Manufacturer Data obtenidos son el valor hexadecimal `<0x0059> 0x03000000AABB`. Al comprobar el código del programa, el segmento `0x03000000` indica que el valor actual del contador es 3.

```c
#define MANUF_COMPANY_ID    0x0059
static uint32_t manufacturer_counter;
...
manuf_data[0] = MANUF_COMPANY_ID & 0xFF;
manuf_data[1] = (MANUF_COMPANY_ID >> 8) & 0xFF;
manuf_data[2] = (manufacturer_counter >> 0) & 0xFF;
manuf_data[3] = (manufacturer_counter >> 8) & 0xFF;
manuf_data[4] = (manufacturer_counter >> 16) & 0xFF;
manuf_data[5] = (manufacturer_counter >> 24) & 0xFF;
manuf_data[6] = 0xAA;
manuf_data[7] = 0xBB;
```

- Abre la herramienta de puerto serie y comprueba que los valores del contador se imprimen línea por línea, alcanzando el recuento actual 3.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_beacon_3.png" style={{width:800, height:'auto'}}/></div>
<br/>
A partir de los resultados anteriores, se puede comprender claramente el proceso de transmisión de paquetes de publicidad BLE personalizados en XIAO nRF54LM20A Sense, lo que facilita una investigación más profunda sobre las características de funcionamiento de BLE. En escenarios de aplicación específicos, se pueden adoptar datos de publicidad para juzgar las condiciones de disparo sin establecer conexiones reales.

### BLE UART

Este ejemplo demuestra cómo establecer un canal de datos bidireccional a través de BLE en el XIAO nRF54LM20A Sense. Basado en el Nordic UART Service (NUS), realiza una interacción básica en la que los teléfonos móviles envían datos de cadena al dispositivo para obtener una respuesta de eco. Mientras tanto, el dispositivo informa el contador de estado una vez por segundo mediante Notify, ilustrando dos modos principales de transmisión de datos BLE GATT: Write y Notify.

#### Software

1. Las configuraciones relevantes del árbol de dispositivos deben habilitarse en `app.overlay` para cambiar el controlador BLE a la implementación nativa de Zephyr.

```dts
/*
 * BLE UART (NUS) overlay for XIAO nRF54LM20A.
 */

&bt_hci_sdc {
	status = "disabled";
};

&bt_hci_controller {
	status = "okay";
};

/ {
	chosen {
		zephyr,bt-hci = &bt_hci_controller;
	};
};
```

2. Habilita las configuraciones relacionadas con Bluetooth en prj.conf

```
# Standard output and console
CONFIG_STDOUT_CONSOLE=y
CONFIG_CBPRINTF_FP_SUPPORT=y

# Logging
CONFIG_LOG=y

# Bluetooth peripheral
CONFIG_BT=y
CONFIG_BT_PERIPHERAL=y
CONFIG_BT_DEVICE_NAME="XIAO BLE UART"
```

3. Configura la lógica de suscripción y el mecanismo de retroalimentación de datos en `main.c`


<details>

<summary>main.c</summary>

```c
#include <stdio.h>
#include <string.h>

#include <zephyr/kernel.h>
#include <zephyr/bluetooth/bluetooth.h>
#include <zephyr/bluetooth/conn.h>
#include <zephyr/bluetooth/gatt.h>
#include <zephyr/bluetooth/uuid.h>
#include <zephyr/logging/log.h>

LOG_MODULE_REGISTER(ble_uart, LOG_LEVEL_INF);

#define DEVICE_NAME     CONFIG_BT_DEVICE_NAME
#define DEVICE_NAME_LEN (sizeof(DEVICE_NAME) - 1)

/* NUS UUIDs — same as Nordic UART Service but defined here to avoid
 * the NUS library's STRUCT_SECTION_ITERABLE dependency.
 */
#define BT_UUID_NUS_SRV_VAL \
	BT_UUID_128_ENCODE(0x6e400001, 0xb5a3, 0xf393, 0xe0a9, 0xe50e24dcca9e)
#define BT_UUID_NUS_RX_CHAR_VAL \
	BT_UUID_128_ENCODE(0x6e400002, 0xb5a3, 0xf393, 0xe0a9, 0xe50e24dcca9e)
#define BT_UUID_NUS_TX_CHAR_VAL \
	BT_UUID_128_ENCODE(0x6e400003, 0xb5a3, 0xf393, 0xe0a9, 0xe50e24dcca9e)

#define BT_UUID_NUS_SRV BT_UUID_DECLARE_128(BT_UUID_NUS_SRV_VAL)
#define BT_UUID_NUS_TX  BT_UUID_DECLARE_128(BT_UUID_NUS_TX_CHAR_VAL)
#define BT_UUID_NUS_RX  BT_UUID_DECLARE_128(BT_UUID_NUS_RX_CHAR_VAL)

static struct bt_conn *current_conn;
static uint32_t notify_counter;
static bool notify_enabled;

extern const struct bt_gatt_service_static nus_svc;

static void nus_ccc_cfg_changed(const struct bt_gatt_attr *attr, uint16_t value)
{
	notify_enabled = (value == BT_GATT_CCC_NOTIFY);
	if (notify_enabled) {
		LOG_INF("BLE notify enabled");
	} else {
		LOG_INF("BLE notify disabled");
	}
}

static ssize_t nus_rx_write(struct bt_conn *conn,
			    const struct bt_gatt_attr *attr,
			    const void *buf, uint16_t len,
			    uint16_t offset, uint8_t flags)
{
	char rx_buf[128] = {0};
	char tx_buf[256] = {0};

	if (len > sizeof(rx_buf) - 1) {
		len = sizeof(rx_buf) - 1;
	}
	memcpy(rx_buf, buf, len);
	rx_buf[len] = '\0';

	LOG_INF("RX data: %s", rx_buf);

	snprintf(tx_buf, sizeof(tx_buf), "echo: %s", rx_buf);
	LOG_INF("TX echo: %s", rx_buf);

	int ret = bt_gatt_notify(conn, &nus_svc.attrs[1], tx_buf, strlen(tx_buf));
	if (ret) {
		LOG_ERR("BLE notify failed");
		LOG_ERR("Error code: %d", ret);
	}

	return len;
}

BT_GATT_SERVICE_DEFINE(nus_svc,
	BT_GATT_PRIMARY_SERVICE(BT_UUID_NUS_SRV),
	BT_GATT_CHARACTERISTIC(BT_UUID_NUS_TX,
		BT_GATT_CHRC_NOTIFY,
		BT_GATT_PERM_NONE,
		NULL, NULL, NULL),
	BT_GATT_CCC(nus_ccc_cfg_changed,
		BT_GATT_PERM_READ | BT_GATT_PERM_WRITE),
	BT_GATT_CHARACTERISTIC(BT_UUID_NUS_RX,
		BT_GATT_CHRC_WRITE | BT_GATT_CHRC_WRITE_WITHOUT_RESP,
		BT_GATT_PERM_WRITE,
		NULL, nus_rx_write, NULL),
);

static void connected(struct bt_conn *conn, uint8_t err)
{
	if (err) {
		LOG_ERR("Connection failed, error code: %d", err);
		return;
	}

	current_conn = bt_conn_ref(conn);
	LOG_INF("Device connected");
}

static void disconnected(struct bt_conn *conn, uint8_t reason)
{
	LOG_INF("Device disconnected, reason: %d", reason);
	if (current_conn) {
		bt_conn_unref(current_conn);
		current_conn = NULL;
	}
	notify_enabled = false;
}

BT_CONN_CB_DEFINE(conn_callbacks) = {
	.connected = connected,
	.disconnected = disconnected,
};

static void notify_work_handler(struct k_work *work);

static K_WORK_DELAYABLE_DEFINE(notify_work, notify_work_handler);

static void notify_work_handler(struct k_work *work)
{
	if (current_conn && notify_enabled) {
		char msg[64];

		notify_counter++;
		snprintf(msg, sizeof(msg), "status counter: %u", notify_counter);

		LOG_INF("Notify counter: %u", notify_counter);

		int ret = bt_gatt_notify(current_conn, &nus_svc.attrs[1],
					  msg, strlen(msg));
		if (ret) {
			LOG_ERR("BLE notify failed");
			LOG_ERR("Error code: %d", ret);
		}
	}

	k_work_schedule(&notify_work, K_SECONDS(1));
}

static const struct bt_data ad[] = {
	BT_DATA_BYTES(BT_DATA_FLAGS, (BT_LE_AD_GENERAL | BT_LE_AD_NO_BREDR)),
	BT_DATA(BT_DATA_NAME_COMPLETE, DEVICE_NAME, DEVICE_NAME_LEN),
};

int main(void)
{
	int ret;

	LOG_INF("BLE UART (NUS) example for XIAO nRF54LM20A");
	LOG_INF("BLE initialization started");

	ret = bt_enable(NULL);
	if (ret) {
		LOG_ERR("Bluetooth init failed");
		LOG_ERR("Error code: %d", ret);
		return 0;
	}
	LOG_INF("Bluetooth initialized");

	ret = bt_le_adv_start(BT_LE_ADV_CONN_FAST_1, ad, ARRAY_SIZE(ad), NULL, 0);
	if (ret) {
		LOG_ERR("Advertising start failed");
		LOG_ERR("Error code: %d", ret);
		return 0;
	}
	LOG_INF("BLE advertising started");

	k_work_schedule(&notify_work, K_SECONDS(1));

	while (1) {
		k_sleep(K_FOREVER);
	}

	return 0;
}
```

</details>

#### Resultado

1. Después de cargar el firmware, instala la app nRF Connect para escanear y detectar dispositivos BLE.

Mientras tanto, puedes buscar y descargar la app nRF Connect en las principales tiendas de aplicaciones móviles, lo que permite que tu teléfono busque y se conecte a dispositivos Bluetooth.

- Android: [nRF Connect](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en)
- IOS: [nRF Connect](https://apps.apple.com/us/app/nrf-connect-for-mobile/id1054362403)

2. Después de descargar el software, escanea y busca el dispositivo Bluetooth **XIAO BLE UART**, y conéctate siguiendo los pasos a continuación.

<div className="table-center">
<table align="center">
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_uart_1.jpg" style={{width:300, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_uart_2.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
</table>
</div>

3. Sigue los pasos a continuación para habilitar la suscripción Notify.

- Localiza el Nordic UART Service en la lista de servicios, despliega la TX Characteristic y haz clic en el botón de suscripción Notify para recibir la información de conteo enviada por XIAO nRF54LM20A Sense.

<div className="table-center">
<table align="center">
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_uart_3.jpg" style={{width:300, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_uart_4.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
</table>
</div>

- Abre el registro del puerto serie, donde se imprimirán el estado habilitado de Notify y el valor actual del contador.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_uart_7.png" style={{width:800, height:'auto'}}/></div>

4. Envía datos para demostrar el efecto del reenvío de los datos recibidos.

- Despliega la RX Characteristic, haz clic en el botón **Write**, introduce una cadena como `hello World` y envíala a XIAO nRF54LM20A Sense. Al mismo tiempo, la cadena reenviada se puede recibir a través de la TX Characteristic.

<div className="table-center">
<table align="center">
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_uart_5.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_uart_5_1.jpg" style={{width:300, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_uart_6.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
</table>
</div>

- Abre el asistente de puerto serie y este imprimirá los datos recibidos y enviados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_uart_8.png" style={{width:800, height:'auto'}}/></div>
<br/>
En esta sección, obtendrás una comprensión básica del **mecanismo de suscripción BLE Notify**, así como del **mecanismo de recepción y reenvío de datos**. En ciertos escenarios específicos, combinar la conectividad Bluetooth con el **control activado por sensores** permite que el dispositivo funcione como un **controlador personalizado utilizable sin conexión**.

### Sensor BLE

Esta sección implementa la función de reporte en tiempo real de datos de movimiento IMU basados en BLE en XIAO nRF54LM20A Sense. Después de que el programa se inicie, el dispositivo habilita automáticamente la publicidad BLE. Los usuarios pueden conectarse al dispositivo y suscribirse a Notify mediante nRF Connect en teléfonos móviles para recibir datos de aceleración X/Y/Z en tiempo real. El LED integrado se enciende cuando la aceleración resultante supera el umbral preestablecido y se apaga cuando está por debajo del umbral, logrando una detección de movimiento básica y una indicación visual.

:::tip

La serie XIAO nRF54LM20A está equipada con el sensor de seis ejes LSM6DS3TR-C. Consulta [Uso de los sensores integrados para XIAO nRF54LM20A Sense](https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/ble_usage_1.jpg).

:::

#### Software

1. Habilita las configuraciones relevantes del árbol de dispositivos en `app.overlay`.

```dts
/*
 * BLE Sensor overlay for XIAO nRF54LM20A.
 *
 * Enables nPM1300 PMIC LDO1 (imu_vdd) at 3.3V for IMU power,
 * and marks IMU for deferred initialization so the application
 * can enable power before the sensor driver probes.
 *
 * nRF54LM20A does not have rfsw_pwr / vbat_pwr regulators.
 *
 * BLE: The board DTS sets zephyr,bt-hci = &bt_hci_sdc (Nordic SDC),
 * but SDC is not available in the PlatformIO SDK. We keep the node
 * label (so the chosen reference stays valid) but change its
 * compatible string to the Zephyr open-source split LL driver.
 */

&pmic_i2c {
	sda-gpios = <&gpio1 18 GPIO_ACTIVE_HIGH>;
	scl-gpios = <&gpio1 17 GPIO_ACTIVE_HIGH>;
	status = "okay";
};

&pwm20 {
	status = "disabled";
};

&green_led {
	gpios = <&gpio1 24 GPIO_ACTIVE_LOW>;
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
	wakeup-source;
	zephyr,deferred-init;
};

/* Replace SDC compatible with Zephyr open-source split LL */
&bt_hci_sdc {
	compatible = "zephyr,bt-hci-ll-sw-split";
};
```

2. Habilita la configuración del IMU y establece el nombre del dispositivo Bluetooth en **XIAO-IMU**.

```prj
# Standard output
CONFIG_STDOUT_CONSOLE=y
CONFIG_CBPRINTF_FP_SUPPORT=y

# Logging
CONFIG_LOG=y
CONFIG_LOG_BACKEND_UART=y
CONFIG_LOG_DEFAULT_LEVEL=3

# I2C and Sensor drivers
CONFIG_I2C=y
CONFIG_SENSOR=y
CONFIG_LSM6DSL=y
CONFIG_LSM6DSL_ACCEL_ODR=1
CONFIG_MFD=y

# Regulator support (nPM1300 on nrf54lm20a)
CONFIG_REGULATOR=y

# GPIO for LED
CONFIG_GPIO=y

# BLE
CONFIG_BT=y
CONFIG_BT_PERIPHERAL=y
CONFIG_BT_DEVICE_NAME="XIAO-IMU"
CONFIG_BT_DEVICE_APPEARANCE=0
CONFIG_BT_MAX_CONN=1
CONFIG_BT_MAX_PAIRED=1
CONFIG_BT_LL_SW_SPLIT=y

# BLE buffer configuration for reliable notify
CONFIG_BT_BUF_ACL_TX_COUNT=5

# Increased stack sizes for BLE + sensor processing
CONFIG_MAIN_STACK_SIZE=4096
CONFIG_SYSTEM_WORKQUEUE_STACK_SIZE=2048

# Enable Zephyr Power Management
CONFIG_PM=y
CONFIG_PM_DEVICE=y
```

3. Escribe la lógica de lectura del IMU y el mecanismo de suscripción Notify en main.c.

<details>

<summary>main.c</summary>

```c
#include <stdio.h>
#include <math.h>
#include <zephyr/kernel.h>
#include <zephyr/device.h>
#include <zephyr/drivers/gpio.h>
#include <zephyr/drivers/sensor.h>
#include <zephyr/drivers/regulator.h>
#include <zephyr/logging/log.h>

#include <zephyr/bluetooth/bluetooth.h>
#include <zephyr/bluetooth/gatt.h>
#include <zephyr/bluetooth/hci.h>
#include <zephyr/bluetooth/uuid.h>

LOG_MODULE_REGISTER(ble_imu, LOG_LEVEL_INF);

/*===========================================================================*/
/* Device Definitions                                                        */
/*===========================================================================*/

#define IMU_NODE DT_ALIAS(imu0)

static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(DT_NODELABEL(green_led), gpios);

/*===========================================================================*/
/* Configurable Parameters                                                    */
/*===========================================================================*/

/* Motion threshold in m/s^2 - acceleration vector magnitude */
#define MOTION_THRESHOLD  12.0f

/* BLE notify interval in milliseconds */
#define NOTIFY_INTERVAL_MS 100

/*===========================================================================*/
/* nRF54LM20A IMU Power Management                                           */
/*===========================================================================*/

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
	k_sleep(K_MSEC(20));
#endif

	return 0;
}

/*===========================================================================*/
/* BLE GATT Service: IMU Acceleration Data                                   */
/*===========================================================================*/

/* Custom 128-bit UUIDs for the IMU service and data characteristic */
#define BT_UUID_IMU_SERVICE_VAL \
	BT_UUID_128_ENCODE(0x00000001, 0x1234, 0x5678, 0x9abc, 0xdef012345678)
#define BT_UUID_IMU_DATA_VAL \
	BT_UUID_128_ENCODE(0x00000002, 0x1234, 0x5678, 0x9abc, 0xdef012345678)

static struct bt_uuid_128 imu_svc_uuid = BT_UUID_INIT_128(
	BT_UUID_IMU_SERVICE_VAL);
static struct bt_uuid_128 imu_data_uuid = BT_UUID_INIT_128(
	BT_UUID_IMU_DATA_VAL);

static bool notify_enabled;
static struct bt_conn *current_conn;

static void imu_data_ccc_cfg_changed(const struct bt_gatt_attr *attr,
				     uint16_t value)
{
	notify_enabled = (value & BT_GATT_CCC_NOTIFY);
	LOG_INF("Notify %s", notify_enabled ? "enabled" : "disabled");
}

/* CCC user data — defined separately to avoid GCC 8.x compound literal issues */
static struct bt_gatt_ccc_managed_user_data imu_ccc_data =
	BT_GATT_CCC_MANAGED_USER_DATA_INIT(imu_data_ccc_cfg_changed, NULL, NULL);

/* GATT Service definition — auto-registered via iterable section */
BT_GATT_SERVICE_DEFINE(imu_svc,
	BT_GATT_PRIMARY_SERVICE(&imu_svc_uuid),
	BT_GATT_CHARACTERISTIC(&imu_data_uuid.uuid,
		BT_GATT_CHRC_NOTIFY,
		BT_GATT_PERM_NONE,
		NULL, NULL, NULL),
	BT_GATT_CCC_MANAGED(&imu_ccc_data,
		BT_GATT_PERM_READ | BT_GATT_PERM_WRITE),
);

/*===========================================================================*/
/* BLE Connection Callbacks                                                  */
/*===========================================================================*/

static void connected(struct bt_conn *conn, uint8_t err)
{
	if (err) {
		LOG_ERR("Connection failed (err %u)", err);
		return;
	}
	current_conn = bt_conn_ref(conn);
	LOG_INF("Device connected");
}

static void disconnected(struct bt_conn *conn, uint8_t reason)
{
	if (current_conn) {
		bt_conn_unref(current_conn);
		current_conn = NULL;
	}
	notify_enabled = false;
	LOG_INF("Device disconnected (reason %u)", reason);
}

BT_CONN_CB_DEFINE(conn_callbacks) = {
	.connected = connected,
	.disconnected = disconnected,
};

/*===========================================================================*/
/* BLE Initialization                                                        */
/*===========================================================================*/

static int ble_init(void)
{
	int ret;

	ret = bt_enable(NULL);
	if (ret) {
		LOG_ERR("BLE init failed (err %d)", ret);
		return ret;
	}
	LOG_INF("BLE initialized");

	ret = bt_le_adv_start(BT_LE_ADV_CONN_NAME, NULL, 0, NULL, 0);
	if (ret) {
		LOG_ERR("BLE advertising start failed (err %d)", ret);
		return ret;
	}
	LOG_INF("BLE advertising started");

	return 0;
}

/*===========================================================================*/
/* IMU Data Reading                                                          */
/*===========================================================================*/

static float sv_to_float(const struct sensor_value *val)
{
	return (float)val->val1 + (float)val->val2 / 1000000.0f;
}

static int imu_read_accel(const struct device *dev,
			  float *x, float *y, float *z)
{
	struct sensor_value sv_x, sv_y, sv_z;
	int ret;

	ret = sensor_sample_fetch(dev);
	if (ret) {
		LOG_ERR("IMU sample fetch failed: %d", ret);
		return ret;
	}

	sensor_channel_get(dev, SENSOR_CHAN_ACCEL_X, &sv_x);
	sensor_channel_get(dev, SENSOR_CHAN_ACCEL_Y, &sv_y);
	sensor_channel_get(dev, SENSOR_CHAN_ACCEL_Z, &sv_z);

	*x = sv_to_float(&sv_x);
	*y = sv_to_float(&sv_y);
	*z = sv_to_float(&sv_z);

	return 0;
}

static float compute_accel_magnitude(float x, float y, float z)
{
	return sqrtf(x * x + y * y + z * z);
}

/*===========================================================================*/
/* LED Control                                                               */
/*===========================================================================*/

static void led_set(bool on)
{
	static bool current_state;

	if (on == current_state) {
		return;
	}
	current_state = on;
	gpio_pin_set_dt(&led, on ? 1 : 0);
	LOG_INF("LED %s", on ? "ON" : "OFF");
}

/*===========================================================================*/
/* BLE Notify                                                                */
/*===========================================================================*/

static int ble_send_imu_data(float x, float y, float z)
{
	char buf[64];
	int len;
	int ret;

	if (!notify_enabled || !current_conn) {
		return -EAGAIN;
	}

	len = snprintf(buf, sizeof(buf), "X:%.1f Y:%.1f Z:%.1f",
		       (double)x, (double)y, (double)z);
	if (len < 0 || len >= (int)sizeof(buf)) {
		LOG_ERR("Notify payload formatting failed");
		return -ENOMEM;
	}

	ret = bt_gatt_notify(NULL, &imu_svc.attrs[1], buf, len);
	if (ret && ret != -EAGAIN) {
		LOG_ERR("BLE notify failed: %d", ret);
	}
	return ret;
}

/*===========================================================================*/
/* Main                                                                      */
/*===========================================================================*/

int main(void)
{
	const struct device *imu_dev = DEVICE_DT_GET(IMU_NODE);
	float accel_x, accel_y, accel_z;
	float magnitude;
	bool motion_active = false;
	int ret;

	/* LED initialization */
	if (!gpio_is_ready_dt(&led)) {
		LOG_ERR("LED device not found");
		return 0;
	}
	gpio_pin_configure_dt(&led, GPIO_OUTPUT_INACTIVE);

	LOG_INF("XIAO nRF54LM20A BLE + IMU Sensor starting...");

	/* LED blink on startup */
	gpio_pin_set_dt(&led, 1);
	k_sleep(K_MSEC(250));
	gpio_pin_set_dt(&led, 0);

	/* Enable IMU power (regulators on nRF54LM20A) */
	ret = enable_imu_power();
	if (ret < 0) {
		LOG_ERR("Failed to enable IMU power: %d", ret);
		return 0;
	}

	/* Initialize IMU (deferred-init on nRF54LM20A) */
	if (!device_is_ready(imu_dev)) {
		ret = device_init(imu_dev);
		if (ret < 0 && ret != -EALREADY) {
			LOG_ERR("Failed to init IMU device: %d", ret);
			return 0;
		}
	}

	if (!device_is_ready(imu_dev)) {
		LOG_ERR("IMU device not ready");
		return 0;
	}
	LOG_INF("IMU sensor initialized: %s", imu_dev->name);

	/* Initialize BLE */
	ret = ble_init();
	if (ret < 0) {
		LOG_ERR("Failed to initialize BLE: %d", ret);
		return 0;
	}

	LOG_INF("Setup complete. Starting IMU + BLE notify loop.");
	LOG_INF("Motion threshold: %.1f m/s^2",
		(double)MOTION_THRESHOLD);
	LOG_INF("Notify interval: %d ms", NOTIFY_INTERVAL_MS);

	/* Main loop: read IMU, check motion, control LED, send notify */
	while (1) {
		ret = imu_read_accel(imu_dev, &accel_x, &accel_y, &accel_z);
		if (ret) {
			LOG_ERR("IMU read failed. Error code: %d", ret);
			k_sleep(K_MSEC(NOTIFY_INTERVAL_MS));
			continue;
		}

		magnitude = compute_accel_magnitude(accel_x, accel_y, accel_z);

		LOG_INF("IMU X=%.2f Y=%.2f Z=%.2f",
			(double)accel_x, (double)accel_y, (double)accel_z);

		/* Motion threshold detection */
		if (!motion_active && magnitude > MOTION_THRESHOLD) {
			motion_active = true;
			led_set(true);
			LOG_INF("Motion threshold triggered (mag=%.2f)",
				(double)magnitude);
		} else if (motion_active && magnitude <= MOTION_THRESHOLD) {
			motion_active = false;
			led_set(false);
			LOG_INF("Motion below threshold (mag=%.2f)",
				(double)magnitude);
		}

		/* Send IMU data via BLE notify if subscribed */
		ret = ble_send_imu_data(accel_x, accel_y, accel_z);
		if (ret && ret != -EAGAIN) {
			LOG_ERR("BLE send failed: %d", ret);
		}

		k_sleep(K_MSEC(NOTIFY_INTERVAL_MS));
	}

	return 0;
}
```

</details>

#### Resultado

1. Después de cargar el firmware, instala la app nRF Connect para escanear y detectar dispositivos BLE.

Mientras tanto, puedes buscar y descargar la app nRF Connect en las principales tiendas de aplicaciones móviles, lo que permite que tu teléfono busque y se conecte a dispositivos Bluetooth.

- Android: [nRF Connect](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en)
- IOS: [nRF Connect](https://apps.apple.com/us/app/nrf-connect-for-mobile/id1054362403)

2. Después de iniciar el software, escanea el dispositivo Bluetooth **XIAO BLE IMU** y conéctate siguiendo los pasos a continuación.

<div className="table-center">
<table align="center">
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_imu_1_1.jpg" style={{width:300, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_imu_2.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
</table>
</div>

3. Suscríbete y recibe datos IMU desde XIAO nRF54LM20A Sense mediante el mecanismo de suscripción Notify en nRF Connect.

<div className="table-center">
<table align="center">
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_imu_3.jpg" style={{width:300, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_imu_4_1.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
</table>
</div>

- Abre la herramienta de puerto serie para comprobar el formato de los datos y confirmar que la suscripción está habilitada.

<div className="table-center"> <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_imu_5.png" style={{width:800, height:'auto'}}/></div></td></div>

4. Agita el XIAO nRF54LM20A Sense para activar el mecanismo de alarma por umbral.

- El valor de alarma de umbral se puede modificar mediante definición de macro. El valor estático predeterminado de la aceleración gravitacional estándar en la Tierra es 9.8 m/s².

```c
/* Motion threshold in m/s^2 - acceleration vector magnitude */
#define MOTION_THRESHOLD  12.0f
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_imu_6.gif" style={{width:800, height:'auto'}}/></div>

## Resumen

A través de los ejemplos anteriores, obtendrás una comprensión sólida de la aplicación BLE en XIAO nRF54LM20A. Siéntete libre de diseñar tus propios proyectos creativos y compartir tus logros.

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
