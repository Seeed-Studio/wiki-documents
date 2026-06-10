---
title: Bluetooth LE para XIAO nRF54LM20A Sense
description: ''
keywords:
  - xiao
  - nrf54lm20a
  - bluetooth de baixa energia
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/xiao_nrf54lm20a_ble.webp
slug: /xiao_nrf54lm20a_with_bluetooth_lowpower
sku: 100018440
last_update:
  date: 05/13/2026
  author: Zeller
createdAt: '2025-05-20'
updatedAt: '2026-05-21'
url: https://wiki.seeedstudio.com/pt-br/xiao_nrf54lm20a_with_ble/
---

# Bluetooth LE para XIAO nRF54LM20A Sense

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/xiao_nrf54lm20a_ble.png" style={{width:400, height:'auto'}}/></div>

Bluetooth Low Energy (BLE) é um padrão de comunicação sem fio de baixo consumo introduzido no Bluetooth 4.0. Projetado para transmissão intermitente de pequenos dados, ele permite conectividade sem fio em dezenas de metros enquanto mantém um consumo médio de corrente ultrabaixo em nível de microampères. É amplamente aplicado em dispositivos vestíveis, sensores de casa inteligente, posicionamento interno e cenários de IoT industrial.

Alimentado pelo SoC nRF54LM20A, o XIAO nRF54LM20A Seires suporta Bluetooth LE, Matter, Thread, Zigbee e protocolos proprietários de 2,4 GHz, oferecendo uma taxa de dados de pico de 4 Mbps ideal para cenários de baixa latência. Ele também oferece suporte a Bluetooth Channel Sounding e Bluetooth Mesh. Este artigo ilustra sua funcionalidade BLE por meio de três programas de exemplo progressivos, começando com a transmissão básica de Beacon de broadcast e estendendo-se ainda para comunicação UART bidirecional e upload de dados de sensores em tempo real.

:::tip

- Este tutorial foi desenvolvido com base no sistema de build PlatformIO e no Zephyr RTOS. Se você não estiver familiarizado com a criação de um projeto para o XIAO nRF54LM20A no PlatformIO, você pode ir para [Getting Sarted With Seeed Studio XIAO nRF54LM20A](https://wiki.seeedstudio.com/pt-br/xiao_nrf54lm20a_getting_started/)
- Se você quiser aprender mais sobre o SoC nRF54LM20A e BLE, visite os links abaixo: [**nRF54LM20A SoC Introduction**](https://www.nordicsemi.com/Products/nRF54LM20A) e [**Bluetooth-Low-Energy for Nordic**](https://www.nordicsemi.com/Products/Wireless/Bluetooth-Low-Energy)

:::

## Preparação de hardware

Antes de iniciar a implementação da rotina, você precisa preparar pelo menos um XIAO nRF54LM20A Sense.

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
 </tr>
</table>
</div>

## Antena Bluetooth

Esta placa usa uma antena Bluetooth externa. Para garantir uma melhor qualidade de sinal Bluetooth e aprimorar sua experiência de uso de Bluetooth, é recomendável instalar uma antena Bluetooth.
O método de conexão é mostrado abaixo:

<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_6.gif"
    alt="Bluetooth antenna connection"
    style={{width: 600, height: 'auto'}}
  />
</div>

### Instalação da antena

Dentro da embalagem do Seeed Studio XIAO nRF54LM20A, há um conector dedicado de antena Wi-Fi/BT. Para obter a força ideal do sinal WiFi/Bluetooth, você precisa retirar a antena incluída no pacote e conectá-la ao conector.
<!--  -->
<div class="table-center">
 <table>
  <tr>
   <th>Antena FPC 2,4GHz A-04 para XIAO nRF54 Series</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-100039813-2.4ghz-fpc-antenna-_1.86dbi_-for-xiao-nrf54l15.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/2-4GHz-FPC-Antenna-1-86dBi-for-XIAO-nRF54L15-p-6578.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Aplicação

Esta seção apresenta os principais recursos de BLE e o método de uso de BLE no XIAO nRF54LM20A Sense por meio de casos práticos.

### BLE Beacon

Este projeto implementa uma função de BLE Beacon no XIAO nRF54LM20A. O dispositivo continua transmitindo pacotes de advertising contendo Manufacturer Specific Data após a energização. O pacote contém um valor de contador que aumenta a cada segundo, e a variação de dados em tempo real pode ser verificada via nRF Connect.

#### Software

1. As configurações relevantes da device tree devem ser habilitadas em `app.overlay` para alternar o controlador BLE para a implementação nativa do Zephyr.

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

2. Habilite as configurações relevantes de Bluetooth em `prj.conf`, defina o modo de saída de log e renomeie o nome do dispositivo Bluetooth para **XIAO-Beacon**.

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

3. Escreva o código dentro de main.c, personalizando o formato e o conteúdo da transmissão de dados.

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

1. Após enviar o firmware, instale o aplicativo nRF Connect para escanear e detectar dispositivos BLE.

Enquanto isso, você pode pesquisar e baixar o aplicativo nRF Connect nas principais lojas de aplicativos móveis, o que permite que seu telefone pesquise e se conecte a dispositivos Bluetooth.

- Android: [nRF Connect](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en)
- IOS: [nRF Connect](https://apps.apple.com/us/app/nrf-connect-for-mobile/id1054362403)

2. Após instalar o software, escaneie o dispositivo Bluetooth chamado **XIAO-Beacon** e verifique os Manufacturer Data recebidos. Ao mesmo tempo, abra a porta serial para visualizar os logs de saída.

<div className="table-center">
<table align="center">
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_beacon_1.jpg" style={{width:300, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_beacon_2.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
</table>
</div>

- Os Manufacturer Data obtidos são o valor hexadecimal `<0x0059> 0x03000000AABB`. Ao verificar o código do programa, o segmento `0x03000000` indica que o valor atual do contador é 3.

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

- Abra a ferramenta de porta serial e verifique se os valores do contador são impressos linha por linha, com a contagem atual chegando a 3.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_beacon_3.png" style={{width:800, height:'auto'}}/></div>
<br/>
A partir dos resultados acima, o processo de transmissão de pacotes de advertising BLE personalizados no XIAO nRF54LM20A Sense pode ser claramente compreendido, o que facilita pesquisas adicionais sobre as características de operação do BLE. Em cenários de aplicação específicos, os dados de advertising podem ser adotados para julgar condições de disparo sem estabelecer conexões reais.

### BLE UART

Este exemplo demonstra como estabelecer um canal de dados bidirecional via BLE no XIAO nRF54LM20A Sense. Com base no Nordic UART Service (NUS), ele realiza uma interação básica em que celulares enviam dados de string para o dispositivo para feedback de eco. Enquanto isso, o dispositivo relata o contador de status uma vez por segundo por meio de Notify, ilustrando dois modos centrais de transmissão de dados BLE GATT: Write e Notify.

#### Software

1. As configurações relevantes da device tree devem ser habilitadas em `app.overlay` para alternar o controlador BLE para a implementação nativa do Zephyr.

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

2. Habilite as configurações relacionadas a Bluetooth em prj.conf

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

3. Configure a lógica de assinatura e o mecanismo de feedback de dados em `main.c`


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

1. Após enviar o firmware, instale o aplicativo nRF Connect para escanear e detectar dispositivos BLE.

Ao mesmo tempo, você pode pesquisar e baixar o aplicativo nRF Connect nas principais lojas de aplicativos móveis, o que permite que seu telefone pesquise e se conecte a dispositivos Bluetooth.

- Android: [nRF Connect](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en)
- IOS: [nRF Connect](https://apps.apple.com/us/app/nrf-connect-for-mobile/id1054362403)

2. Após baixar o software, escaneie e procure o dispositivo Bluetooth **XIAO BLE UART** e conecte-se seguindo os passos abaixo

<div className="table-center">
<table align="center">
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_uart_1.jpg" style={{width:300, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_uart_2.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
</table>
</div>

3. Siga os passos abaixo para habilitar a assinatura Notify.

- Localize o Nordic UART Service na lista de serviços, expanda a TX Characteristic e clique no botão de assinatura Notify para receber as informações de contagem enviadas pelo XIAO nRF54LM20A Sense.

<div className="table-center">
<table align="center">
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_uart_3.jpg" style={{width:300, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_uart_4.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
</table>
</div>

- Abra o log da porta serial, onde o status de habilitação de Notify e o valor atual do contador serão impressos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_uart_7.png" style={{width:800, height:'auto'}}/></div>

4. Envie dados para demonstrar o efeito do encaminhamento dos dados recebidos.

- Expanda a RX Characteristic, clique no botão **Write**, insira uma string como `hello World` e envie-a para o XIAO nRF54LM20A Sense. Ao mesmo tempo, a string encaminhada pode ser recebida via TX Characteristic.

<div className="table-center">
<table align="center">
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_uart_5.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_uart_5_1.jpg" style={{width:300, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_uart_6.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
</table>
</div>

- Abra o assistente de porta serial, e ele imprimirá os dados recebidos e enviados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_uart_8.png" style={{width:800, height:'auto'}}/></div>
<br/>
Nesta seção, você obterá uma compreensão básica do **mecanismo de assinatura BLE Notify**, bem como do **mecanismo de recepção e encaminhamento de dados**. Em determinados cenários específicos, combinar a conectividade Bluetooth com **controle acionado por sensor** permite que o dispositivo funcione como um **controlador personalizado utilizável offline**.

### Sensor BLE

Esta seção implementa a função de relatório em tempo real de dados de movimento do IMU baseado em BLE no XIAO nRF54LM20A Sense. Após o início do programa, o dispositivo habilita automaticamente a publicidade BLE. Os usuários podem se conectar ao dispositivo e assinar Notify via nRF Connect em telefones celulares para receber dados de aceleração X/Y/Z em tempo real. O LED integrado acende quando a aceleração resultante excede o limite predefinido e apaga quando está abaixo do limite, realizando detecção básica de movimento e indicação visual.

:::tip

A série XIAO nRF54LM20A é equipada com o sensor de seis eixos LSM6DS3TR-C. Consulte [Uso dos sensores integrados do XIAO nRF54LM20A Sense](https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/ble_usage_1.jpg).

:::

#### Software

1. Habilite as configurações relevantes da device tree em `app.overlay`.

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

2. Habilite a configuração do IMU e defina o nome do dispositivo Bluetooth como **XIAO-IMU**.

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

3. Escreva a lógica de leitura do IMU e o mecanismo de assinatura Notify em main.c.

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

1. Após enviar o firmware, instale o aplicativo nRF Connect para escanear e detectar dispositivos BLE.

Enquanto isso, você pode pesquisar e baixar o aplicativo nRF Connect nas principais lojas de aplicativos móveis, o que permite que seu telefone pesquise e se conecte a dispositivos Bluetooth.

- Android: [nRF Connect](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en)
- IOS: [nRF Connect](https://apps.apple.com/us/app/nrf-connect-for-mobile/id1054362403)

2. Após iniciar o software, escaneie o dispositivo Bluetooth **XIAO BLE IMU** e conecte‑se a ele seguindo as etapas abaixo.

<div className="table-center">
<table align="center">
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_imu_1_1.jpg" style={{width:300, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_imu_2.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
</table>
</div>

3. Assine e receba dados de IMU do XIAO nRF54LM20A Sense por meio do mecanismo de assinatura Notify no nRF Connect.

<div className="table-center">
<table align="center">
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_imu_3.jpg" style={{width:300, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_imu_4_1.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
</table>
</div>

- Abra a ferramenta de porta serial para verificar o formato dos dados e confirmar que a assinatura está ativada.

<div className="table-center"> <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_imu_5.png" style={{width:800, height:'auto'}}/></div></td></div>

4. Agite o XIAO nRF54LM20A Sense para acionar o mecanismo de alarme de limite.

- O valor do alarme de limite pode ser modificado por meio de definição de macro. O valor estático padrão da aceleração gravitacional padrão na Terra é 9,8 m/s².

```c
/* Motion threshold in m/s^2 - acceleration vector magnitude */
#define MOTION_THRESHOLD  12.0f
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/ble_imu_6.gif" style={{width:800, height:'auto'}}/></div>

## Resumo

Por meio dos exemplos acima, você obterá uma compreensão sólida da aplicação BLE no XIAO nRF54LM20A. Sinta‑se à vontade para criar seus próprios projetos criativos e compartilhar seus resultados.

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
