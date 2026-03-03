---
title: Uso de BLE del Seeed Studio XIAO nRF54L15 Sense
description: |
  Guía completa para usar Bluetooth Low Energy (BLE) con XIAO nRF54L15 Sense, incluyendo publicidad, conexiones, servicios GATT y optimización de energía.
image: https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/1-101991422-XIAO-nRF54L15-Sense.webp
slug: /es/xiao_nrf54l15_sense_bluetooth_usage
keywords:
  - XIAO
  - nRF54L15
  - BLE
  - Bluetooth
  - Zephyr
last_update:
  date: 7/2/2025
  author: Jason
sidebar_position: 3
---

El siguiente código de ejemplo está diseñado para PlatformIO, pero también es compatible con el nRF Connect SDK.

:::tip
Basado en VS Code, si deseas usar el siguiente caso en el nRF Connect SDK, consulta la conexión proporcionada, agrega el archivo app.overlay y modifica el contenido en prj.conf

[XIAO nRF54L15 Agregar archivo overlay y modificar archivo conf](https://wiki.seeedstudio.com/es/xiao_nrf54l15_sense_getting_started/#/add-overlay-and-modify-the-conf-file/).

:::

## BLE Oberver

Una aplicación simple que demuestra la funcionalidad del rol Observer de Bluetooth Low Energy. La aplicación escaneará periódicamente dispositivos cercanos. Si encuentra alguno, imprime la dirección del dispositivo, el valor RSSI, el tipo de publicidad y la longitud de los datos de publicidad en la consola.

Si el controlador Bluetooth Low Energy utilizado soporta escaneo extendido, puedes habilitar `CONFIG_BT_EXT_ADV` en el archivo de configuración del proyecto `prj.conf`. Consulta el archivo de configuración del proyecto para más detalles.

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/obersever.png" alt="XIAO nRF54L15 Observer" style={{width:900, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Resultado del Escaneo</em></p>
</div>

### Agregar Placa XIAO nRF54L15

Para agregar la placa XIAO nRF54L15(Sense) al NCS (nRF Connect SDK), puedes consultar la guía ["Primeros Pasos"](https://wiki.seeedstudio.com/es/xiao_nrf54l15_sense_getting_started/) en el Wiki de Seeed Studio. Esta guía proporcionará instrucciones detalladas sobre el proceso.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/zephyr/boards" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar las Librerías</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

### Código BLE Observer

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/zephyrproject-rtos/zephyr/tree/main/samples/bluetooth/observer" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar las Librerías</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

**Main.c**

```cpp
#include <zephyr/sys/printk.h>
#include <zephyr/bluetooth/bluetooth.h>

int observer_start(void);

int main(void)
{
 int err;

 printk("Starting Observer Demo\n");

 err = bt_enable(NULL);
 if (err) {
  printk("Bluetooth init failed (err %d)\n", err);
  return 0;
 }

 (void)observer_start();

 printk("Exiting %s thread.\n", __func__);
 return 0;
}
```

:::note

- `main.c:` Inicializa el subsistema Bluetooth e inicia la demostración del observer.

- `bt_enable(NULL):` Inicializa el Subsistema Bluetooth.

- `observer_start():` Llama a la función que inicia el observer.

- `printk("Exiting %s thread.\n", __func__):` Imprime un mensaje cuando la función principal está saliendo.

:::

**observer.c**

```cpp
#include <zephyr/sys/printk.h>
#include <zephyr/bluetooth/bluetooth.h>
#include <zephyr/bluetooth/hci.h>

#define NAME_LEN 30

static void device_found(const bt_addr_le_t *addr, int8_t rssi, uint8_t type,
    struct net_buf_simple *ad)
{
 char addr_str[BT_ADDR_LE_STR_LEN];

 bt_addr_le_to_str(addr, addr_str, sizeof(addr_str));
 printk("Device found: %s (RSSI %d), type %u, AD data len %u\n",
        addr_str, rssi, type, ad->len);
}

#if defined(CONFIG_BT_EXT_ADV)
static bool data_cb(struct bt_data *data, void *user_data)
{
 char *name = user_data;
 uint8_t len;

 switch (data->type) {
 case BT_DATA_NAME_SHORTENED:
 case BT_DATA_NAME_COMPLETE:
  len = MIN(data->data_len, NAME_LEN - 1);
  (void)memcpy(name, data->data, len);
  name[len] = '\0';
  return false;
 default:
  return true;
 }
}

static const char *phy2str(uint8_t phy)
{
 switch (phy) {
 case BT_GAP_LE_PHY_NONE: return "No packets";
 case BT_GAP_LE_PHY_1M: return "LE 1M";
 case BT_GAP_LE_PHY_2M: return "LE 2M";
 case BT_GAP_LE_PHY_CODED: return "LE Coded";
 default: return "Unknown";
 }
}

static void scan_recv(const struct bt_le_scan_recv_info *info,
        struct net_buf_simple *buf)
{
 char le_addr[BT_ADDR_LE_STR_LEN];
 char name[NAME_LEN];
 uint8_t data_status;
 uint16_t data_len;

 (void)memset(name, 0, sizeof(name));

 data_len = buf->len;
 bt_data_parse(buf, data_cb, name);

 data_status = BT_HCI_LE_ADV_EVT_TYPE_DATA_STATUS(info->adv_props);

 bt_addr_le_to_str(info->addr, le_addr, sizeof(le_addr));
 printk("[DEVICE]: %s, AD evt type %u, Tx Pwr: %i, RSSI %i "
        "Data status: %u, AD data len: %u Name: %s "
        "C:%u S:%u D:%u SR:%u E:%u Pri PHY: %s, Sec PHY: %s, "
        "Interval: 0x%04x (%u ms), SID: %u\n",
        le_addr, info->adv_type, info->tx_power, info->rssi,
        data_status, data_len, name,
        (info->adv_props & BT_GAP_ADV_PROP_CONNECTABLE) != 0,
        (info->adv_props & BT_GAP_ADV_PROP_SCANNABLE) != 0,
        (info->adv_props & BT_GAP_ADV_PROP_DIRECTED) != 0,
        (info->adv_props & BT_GAP_ADV_PROP_SCAN_RESPONSE) != 0,
        (info->adv_props & BT_GAP_ADV_PROP_EXT_ADV) != 0,
        phy2str(info->primary_phy), phy2str(info->secondary_phy),
        info->interval, info->interval * 5 / 4, info->sid);
}

static struct bt_le_scan_cb scan_callbacks = {
 .recv = scan_recv,
};
#endif /* CONFIG_BT_EXT_ADV */

int observer_start(void)
{
 struct bt_le_scan_param scan_param = {
  .type       = BT_LE_SCAN_TYPE_PASSIVE,
  .options    = BT_LE_SCAN_OPT_FILTER_DUPLICATE,
  .interval   = BT_GAP_SCAN_FAST_INTERVAL,
  .window     = BT_GAP_SCAN_FAST_WINDOW,
 };
 int err;

#if defined(CONFIG_BT_EXT_ADV)
 bt_le_scan_cb_register(&scan_callbacks);
 printk("Registered scan callbacks\n");
#endif /* CONFIG_BT_EXT_ADV */

 err = bt_le_scan_start(&scan_param, device_found);
 if (err) {
  printk("Start scanning failed (err %d)\n", err);
  return err;
 }
 printk("Started scanning...\n");

 return 0;
}
```

:::note

- `device_found:`Función de callback que se llama cuando se encuentra un dispositivo durante un escaneo. Imprime la dirección del dispositivo, RSSI, tipo y longitud de datos AD.

- `scan_recv:` Función de callback para publicidad extendida que imprime información detallada sobre el paquete de publicidad recibido, incluyendo la dirección del dispositivo, potencia Tx, RSSI y datos de publicidad.

- `data_cb:`Función de callback utilizada por bt_data_parse para extraer el nombre del dispositivo de los datos de publicidad. Maneja tanto nombres abreviados como completos.

- `phy2str:` Función auxiliar que convierte el valor PHY (Capa Física) a una cadena legible (ej. "LE 1M", "LE 2M", etc.).

- `observer_start:`La función principal para iniciar el observer. Define los parámetros de escaneo e inicia el proceso de escaneo.

- `bt_le_scan_start:` Función que inicia el escaneo BLE con los parámetros especificados y una función de callback para cuando se encuentren dispositivos.

:::

## BLE Advertising

Este tutorial de publicidad Bluetooth está basado en el código de [ejemplo](https://academy.nordicsemi.com/courses/bluetooth-low-energy-fundamentals/lessons/lesson-2-bluetooth-le-advertising/topic/blefund-lesson-2-exercise-1/) oficial modificado para ejecutarse en el Nordic Connect SDK. Con nuestra placa de desarrollo combinada con la documentación oficial, puedes profundizar en más [aplicaciones](https://academy.nordicsemi.com/courses/bluetooth-low-energy-fundamentals/) Bluetooth.

Mientras el teléfono no esté conectado al XIAO nRF54L15, el indicador a bordo permanecerá encendido permanentemente. Una vez que el teléfono se conecte exitosamente, el indicador comenzará a parpadear para indicar que se ha establecido una conexión.

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/BLE.gif" alt="XIAO nRF54L15 Consumo Ultra-bajo de Energía en Modo System Off" style={{width:900, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Conexión de Teléfono Celular XIAO nRF54L15</em></p>
</div>

### Instalación de Software BLE Advertising

Para este ejemplo, necesitarás descargar la [aplicación](https://www.nordicsemi.com/Products/Development-tools/nRF-Connect-for-mobile) oficial de pruebas Bluetooth, nRF Connect, en tu teléfono móvil.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nrfconnect_app.png" style={{width:600, height:'auto'}}/></div>
Una vez que hayas flasheado el programa en tu placa XIAO nRF54L15 Sense, puedes abrir la página principal de la aplicación nRF Connect para interactuar con ella.

- Paso 1. En la aplicación nRF Connect, haz clic en el botón de escaneo en la esquina superior derecha para comenzar a escanear dispositivos Bluetooth.

- Paso 2. A continuación, ingresa el nombre de tu dispositivo XIAO nRF54L15 Sense en el campo "Nombre". Esto te ayudará a filtrar y localizar rápidamente tu dispositivo.

- Paso 3. En el área de resultados del escaneo, encuentra tu dispositivo XIAO nRF54L15 Sense y haz clic en el botón "Conectar" junto a él.

Al conectarse exitosamente, serás dirigido a la página de detalles del dispositivo. En esta página, puedes observar la distribución de la intensidad de la señal Bluetooth (RSSI) en diferentes períodos de tiempo, lo que te ayuda a entender la estabilidad de la conexión del dispositivo.

<div class="table-center">
 <table align="center">
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/ble_image.jpg" style={{width:300, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/ble_image2.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
 </table>
</div>

### Agregar la Placa XIAO nRF54L15

Para agregar la placa XIAO nRF54L15(Sense) al NCS (nRF Connect SDK), puedes consultar la guía ["Primeros Pasos"](https://wiki.seeedstudio.com/es/xiao_nrf54l15_sense_getting_started/) en el Wiki de Seeed Studio. Esta guía proporcionará instrucciones detalladas sobre el proceso.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/zephyr/boards" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar las Librerías</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

### Código de Publicidad BLE

```c
#include <zephyr/kernel.h>
#include <zephyr/logging/log.h>
#include <zephyr/bluetooth/bluetooth.h>
#include <zephyr/bluetooth/gap.h>
#include <zephyr/bluetooth/conn.h>
#include <zephyr/sys/printk.h>
#include <zephyr/drivers/gpio.h>
#include <zephyr/dt-bindings/gpio/nordic-nrf-gpio.h>

LOG_MODULE_REGISTER(BLE_LowPower, LOG_LEVEL_INF);

#define DEVICE_NAME CONFIG_BT_DEVICE_NAME
#define DEVICE_NAME_LEN (sizeof(DEVICE_NAME) - 1)

static const struct gpio_dt_spec led0 = GPIO_DT_SPEC_GET(DT_ALIAS(led0), gpios);

static const struct bt_data ad[] = {
    BT_DATA_BYTES(BT_DATA_FLAGS, BT_LE_AD_GENERAL | BT_LE_AD_NO_BREDR),
    BT_DATA(BT_DATA_NAME_COMPLETE, DEVICE_NAME, DEVICE_NAME_LEN),
};

static unsigned char url_data[] = {
    0x17,
    '/', '/', 'a', 'c', 'a', 'd', 'e', 'm', 'y', '.',
    'n', 'o', 'r', 'd', 'i', 'c', 's', 'e', 'm', 'i', '.',
    'c', 'o', 'm'
};

static const struct bt_data sd[] = {
    BT_DATA(BT_DATA_URI, url_data, sizeof(url_data)),
};

static bool device_connected = false;

static void connected(struct bt_conn *conn, uint8_t err)
{
    if (err) {
        LOG_ERR("Connection failed (err 0x%02x)\n", err);
    } else {
        LOG_INF("Device connected\n");
        device_connected = true;
    }
}

static void disconnected(struct bt_conn *conn, uint8_t reason)
{
    LOG_INF("Device disconnected (reason 0x%02x)\n", reason);
    device_connected = false;

    int err = bt_le_adv_start(BT_LE_ADV_CONN, ad, ARRAY_SIZE(ad), sd, ARRAY_SIZE(sd));
    if (err) {
        LOG_ERR("Failed to restart advertising (err %d)\n", err);
    } else {
        LOG_INF("Advertising successfully restarted (connectable)\n");
    }
}

BT_CONN_CB_DEFINE(conn_callbacks) = {
    .connected = connected,
    .disconnected = disconnected,
};

int main(void)
{
    int err;

    if (!gpio_is_ready_dt(&led0)) {
        LOG_ERR("Error: LED device %s is not ready\n", led0.port->name);
        return -1;
    }

    err = gpio_pin_configure_dt(&led0, GPIO_OUTPUT_INACTIVE);
    if (err) {
        LOG_ERR("Error: Failed to configure LED pin %d (err %d)\n", led0.pin, err);
        return -1;
    }

    LOG_INF("LED configured, initially off.");

    err = bt_enable(NULL);
    if (err) {
        LOG_ERR("Bluetooth initialization failed (err %d)\n", err);
        return -1;
    }
    LOG_INF("Bluetooth initialized\n");

    err = bt_le_adv_start(BT_LE_ADV_CONN, ad, ARRAY_SIZE(ad), sd, ARRAY_SIZE(sd));
    if (err) {
        LOG_ERR("Advertising failed to start (err %d)\n", err);
        return -1;
    }
    LOG_INF("Advertising successfully started (connectable)\n");

    while (1) {
        if (device_connected) {
            gpio_pin_toggle_dt(&led0);
            k_sleep(K_MSEC(500));
        } else {
            gpio_pin_set_dt(&led0, 0);
            k_sleep(K_MSEC(1000));
        }
    }

    return 0;
}
```

:::note

- `ad:` Define los datos de publicidad, incluyendo las banderas para descubrible general y sin soporte BR/EDR, y el nombre completo del dispositivo.

- `sd:` Define los datos de respuesta de escaneo, que contienen un URI (Identificador de Recurso Uniforme).

- `connected:` Esta función de callback se ejecuta cuando un dispositivo Bluetooth se conecta exitosamente. Establece la bandera device_connected en verdadero.

- `disconnected:` Esta función de callback se ejecuta cuando un dispositivo Bluetooth se desconecta. Establece la bandera device_connected en falso y reinicia la publicidad para permitir nuevas conexiones.

- `conn_callbacks:` Una estructura que define los callbacks de conexión, asignando las funciones connected y disconnected a sus respectivos eventos.

- `main:` La función principal del programa.

- `gpio_is_ready_dt:` Verifica si el dispositivo GPIO del LED está listo.

- `gpio_pin_configure_dt:` Configura el pin del LED como salida, inicialmente establecido como inactivo.

- `bt_enable(NULL):` Inicializa el subsistema Bluetooth.

- `bt_le_adv_start:` Inicia la publicidad Bluetooth. Este código inicia la publicidad conectable usando los datos ad y sd.

- `while (1):` Un bucle infinito que controla el comportamiento del LED basado en el estado de conexión.

- `gpio_pin_toggle_dt:` Alterna el LED entre encendido y apagado.

- `k_sleep:` Pone el hilo en suspensión por una cantidad específica de tiempo.

- `device_connected:` Una bandera booleana que rastrea el estado de conexión. El LED parpadea en intervalos de 500ms cuando un dispositivo está conectado. Cuando un dispositivo no está conectado, el LED se apaga y el programa duerme por 1000ms.

- `LOG_INF, LOG_ERR:` Funciones para registrar información y errores.

:::

## BLE Central/GATT Write

En conjunto, estos archivos de código implementan un dispositivo Central de Bluetooth Low Energy (BLE). El Central escanea continuamente periféricos Bluetooth cercanos y establece automáticamente una conexión cuando encuentra un dispositivo específico (RSSI mayor a -50). Una vez establecida la conexión, realiza un intercambio de MTU (Unidad Máxima de Transmisión) GATT (Perfil de Atributo Genérico) para optimizar la eficiencia de transferencia de datos.

La función principal del programa es enviar continuamente comandos GATT Write Without Response al periférico conectado. Esto se usa frecuentemente para pruebas de rendimiento, por ejemplo para medir el rendimiento de datos o la tasa de escritura de una conexión Bluetooth.

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/gatt.png" alt="XIAO nRF54L15 gatt" style={{width:900, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Resultado gatt</em></p>
</div>

### Agregar la Placa XIAO nRF54L15

Para agregar la placa XIAO nRF54L15(Sense) al NCS (nRF Connect SDK), puedes consultar la guía ["Primeros Pasos"](https://wiki.seeedstudio.com/es/xiao_nrf54l15_sense_getting_started/) en el Wiki de Seeed Studio. Esta guía proporcionará instrucciones detalladas sobre el proceso.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/zephyr/boards" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar las Librerías</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

### Código BLE Central/GATT

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/zephyrproject-rtos/zephyr/tree/main/samples/bluetooth/central_gatt_write" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar las Librerías</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>
**Main.c**

```cpp
#include <stdint.h>

extern uint32_t central_gatt_write(uint32_t count);

int main(void)
{
 (void)central_gatt_write(0U);
 return 0;
}

```

:::note

- `main:` El punto de entrada del programa. Llama a la función `central_gatt_write` con un conteo de `0U`, lo que significa que los comandos de escritura se enviarán indefinidamente.

:::
**central_gatt_write.c**

```cpp
/*
 * Copyright (c) 2022 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: Apache-2.0
 */

#include <zephyr/kernel.h>
#include <zephyr/sys/printk.h>

#include <zephyr/bluetooth/bluetooth.h>
#include <zephyr/bluetooth/conn.h>
#include <zephyr/bluetooth/gatt.h>
#include <zephyr/bluetooth/hci.h>

extern int mtu_exchange(struct bt_conn *conn);
extern int write_cmd(struct bt_conn *conn);
extern struct bt_conn *conn_connected;
extern uint32_t last_write_rate;
extern void (*start_scan_func)(void);

static void device_found(const bt_addr_le_t *addr, int8_t rssi, uint8_t type,
    struct net_buf_simple *ad)
{
 char dev[BT_ADDR_LE_STR_LEN];
 struct bt_conn *conn;
 int err;

 bt_addr_le_to_str(addr, dev, sizeof(dev));
 printk("[DEVICE]: %s, AD evt type %u, AD data len %u, RSSI %i\n",
        dev, type, ad->len, rssi);

 /* We're only interested in connectable events */
 if (type != BT_GAP_ADV_TYPE_ADV_IND &&
     type != BT_GAP_ADV_TYPE_ADV_DIRECT_IND) {
  return;
 }

 /* connect only to devices in close proximity */
 if (rssi < -50) {
  return;
 }

 err = bt_le_scan_stop();
 if (err) {
  printk("%s: Stop LE scan failed (err %d)\n", __func__, err);
  return;
 }

 err = bt_conn_le_create(addr, BT_CONN_LE_CREATE_CONN,
    BT_LE_CONN_PARAM_DEFAULT, &conn);
 if (err) {
  printk("%s: Create conn failed (err %d)\n", __func__, err);
  start_scan_func();
 } else {
  bt_conn_unref(conn);
 }
}

static void start_scan(void)
{
 int err;

 err = bt_le_scan_start(BT_LE_SCAN_ACTIVE, device_found);
 if (err) {
  printk("%s: Scanning failed to start (err %d)\n", __func__,
         err);
  return;
 }

 printk("%s: Scanning successfully started\n", __func__);
}

void mtu_updated(struct bt_conn *conn, uint16_t tx, uint16_t rx)
{
 printk("Updated MTU: TX: %d RX: %d bytes\n", tx, rx);
}

static struct bt_gatt_cb gatt_callbacks = {
 .att_mtu_updated = mtu_updated
};

uint32_t central_gatt_write(uint32_t count)
{
 int err;

 err = bt_enable(NULL);
 if (err) {
  printk("Bluetooth init failed (err %d)\n", err);
  return 0U;
 }
 printk("Bluetooth initialized\n");

 bt_gatt_cb_register(&gatt_callbacks);

 conn_connected = NULL;
 last_write_rate = 0U;

 start_scan_func = start_scan;
 start_scan_func();

 while (true) {
  struct bt_conn *conn = NULL;

  if (conn_connected) {
   /* Get a connection reference to ensure that a
    * reference is maintained in case disconnected
    * callback is called while we perform GATT Write
    * command.
    */
   conn = bt_conn_ref(conn_connected);
  }

  if (conn) {
   (void)write_cmd(conn);
   bt_conn_unref(conn);

   if (count) {
    count--;
    if (!count) {
     break;
    }
   }

   k_yield();
  } else {
   k_sleep(K_SECONDS(1));
  }
 }

 return last_write_rate;
}

```

:::note

- `device_found:` Función de callback que se activa cuando se encuentra un nuevo dispositivo durante un escaneo. Imprime información sobre el dispositivo encontrado e intenta conectarse a dispositivos que sean conectables y estén en proximidad cercana (RSSI mayor a -50). Detiene el proceso de escaneo antes de crear una conexión.

- `start_scan:` Función que inicia un escaneo BLE activo con `device_found` como callback para dispositivos encontrados.

- `mtu_updated:` Función de callback para actualizaciones de MTU GATT que imprime los nuevos tamaños de MTU TX y RX.

- `gatt_callbacks:` Una estructura que registra la función `mtu_updated` como callback para eventos GATT.

- `central_gatt_write:` La función principal de la aplicación del dispositivo central. Inicializa el subsistema Bluetooth, registra los callbacks GATT e inicia el escaneo de dispositivos. Luego entra en un bucle, donde espera una conexión y llama repetidamente a write_cmd para realizar escrituras GATT. El bucle puede configurarse para ejecutarse un número específico de veces o indefinidamente.

:::

**gatt_write_common.c**

```cpp
/*
 * Copyright (c) 2022 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: Apache-2.0
 */

#include <zephyr/kernel.h>
#include <zephyr/sys/printk.h>

#include <zephyr/bluetooth/bluetooth.h>
#include <zephyr/bluetooth/conn.h>
#include <zephyr/bluetooth/gatt.h>
#include <zephyr/bluetooth/hci.h>

static struct bt_gatt_exchange_params mtu_exchange_params;
static uint32_t write_count;
static uint32_t write_len;
static uint32_t write_rate;
struct bt_conn *conn_connected;
uint32_t last_write_rate;
void (*start_scan_func)(void);

static void write_cmd_cb(struct bt_conn *conn, void *user_data)
{
 static uint32_t cycle_stamp;
 uint64_t delta;

 delta = k_cycle_get_32() - cycle_stamp;
 delta = k_cyc_to_ns_floor64(delta);

 if (delta == 0) {
  /* Skip division by zero */
  return;
 }

 /* if last data rx-ed was greater than 1 second in the past,
  * reset the metrics.
  */
 if (delta > (1U * NSEC_PER_SEC)) {
  printk("%s: count= %u, len= %u, rate= %u bps.\n", __func__,
         write_count, write_len, write_rate);

  last_write_rate = write_rate;

  write_count = 0U;
  write_len = 0U;
  write_rate = 0U;
  cycle_stamp = k_cycle_get_32();
 } else {
  uint16_t len;

  write_count++;

  /* Extract the 16-bit data length stored in user_data */
  len = (uint32_t)user_data & 0xFFFF;

  write_len += len;
  write_rate = ((uint64_t)write_len << 3) * (1U * NSEC_PER_SEC) /
        delta;
 }
}

static void mtu_exchange_cb(struct bt_conn *conn, uint8_t err,
       struct bt_gatt_exchange_params *params)
{
 printk("%s: MTU exchange %s (%u)\n", __func__,
        err == 0U ? "successful" : "failed",
        bt_gatt_get_mtu(conn));
}

static int mtu_exchange(struct bt_conn *conn)
{
 int err;

 printk("%s: Current MTU = %u\n", __func__, bt_gatt_get_mtu(conn));

 mtu_exchange_params.func = mtu_exchange_cb;

 printk("%s: Exchange MTU...\n", __func__);
 err = bt_gatt_exchange_mtu(conn, &mtu_exchange_params);
 if (err) {
  printk("%s: MTU exchange failed (err %d)", __func__, err);
 }

 return err;
}

static void connected(struct bt_conn *conn, uint8_t conn_err)
{
 struct bt_conn_info conn_info;
 char addr[BT_ADDR_LE_STR_LEN];
 int err;

 bt_addr_le_to_str(bt_conn_get_dst(conn), addr, sizeof(addr));

 if (conn_err) {
  printk("%s: Failed to connect to %s (%u)\n", __func__, addr,
         conn_err);
  return;
 }

 err = bt_conn_get_info(conn, &conn_info);
 if (err) {
  printk("Failed to get connection info (%d).\n", err);
  return;
 }

 printk("%s: %s role %u\n", __func__, addr, conn_info.role);

 conn_connected = bt_conn_ref(conn);

 (void)mtu_exchange(conn);

#if defined(CONFIG_BT_SMP)
 if (conn_info.role == BT_CONN_ROLE_CENTRAL) {
  err = bt_conn_set_security(conn, BT_SECURITY_L2);
  if (err) {
   printk("Failed to set security (%d).\n", err);
  }
 }
#endif
}

static void disconnected(struct bt_conn *conn, uint8_t reason)
{
 struct bt_conn_info conn_info;
 char addr[BT_ADDR_LE_STR_LEN];
 int err;

 bt_addr_le_to_str(bt_conn_get_dst(conn), addr, sizeof(addr));

 err = bt_conn_get_info(conn, &conn_info);
 if (err) {
  printk("Failed to get connection info (%d).\n", err);
  return;
 }

 printk("%s: %s role %u, reason %u %s\n", __func__, addr, conn_info.role,
        reason, bt_hci_err_to_str(reason));

 conn_connected = NULL;

 bt_conn_unref(conn);

 if (conn_info.role == BT_CONN_ROLE_CENTRAL) {
  start_scan_func();
 }
}

static bool le_param_req(struct bt_conn *conn, struct bt_le_conn_param *param)
{
 printk("%s: int (0x%04x, 0x%04x) lat %u to %u\n", __func__,
        param->interval_min, param->interval_max, param->latency,
        param->timeout);

 return true;
}

static void le_param_updated(struct bt_conn *conn, uint16_t interval,
        uint16_t latency, uint16_t timeout)
{
 printk("%s: int 0x%04x lat %u to %u\n", __func__, interval,
        latency, timeout);
}

#if defined(CONFIG_BT_SMP)
static void security_changed(struct bt_conn *conn, bt_security_t level,
        enum bt_security_err err)
{
 printk("%s: to level %u, err %s(%u)\n", __func__, level, bt_security_err_to_str(err), err);
}
#endif

BT_CONN_CB_DEFINE(conn_callbacks) = {
 .connected = connected,
 .disconnected = disconnected,
 .le_param_req = le_param_req,
 .le_param_updated = le_param_updated,
#if defined(CONFIG_BT_SMP)
 .security_changed = security_changed,
#endif
};

int write_cmd(struct bt_conn *conn)
{
 static uint8_t data[BT_ATT_MAX_ATTRIBUTE_LEN] = {0, };
 static uint16_t data_len;
 uint16_t data_len_max;
 int err;

 data_len_max = bt_gatt_get_mtu(conn) - 3;
 if (data_len_max > BT_ATT_MAX_ATTRIBUTE_LEN) {
  data_len_max = BT_ATT_MAX_ATTRIBUTE_LEN;
 }

#if TEST_FRAGMENTATION_WITH_VARIABLE_LENGTH_DATA
 /* Use incremental length data for every write command */
 /* TODO: Include test case in BabbleSim tests */
 static bool decrement;

 if (decrement) {
  data_len--;
  if (data_len <= 1) {
   data_len = 1;
   decrement = false;
  }
 } else {
  data_len++;
  if (data_len >= data_len_max) {
   data_len = data_len_max;
   decrement = true;
  }
 }
#else
 /* Use fixed length data for every write command */
 data_len = data_len_max;
#endif

 /* Pass the 16-bit data length value (instead of reference) in
  * user_data so that unique value is pass for each write callback.
  * Using handle 0x0001, we do not care if it is writable, we just want
  * to transmit the data across.
  */
 err = bt_gatt_write_without_response_cb(conn, 0x0001, data, data_len,
      false, write_cmd_cb,
      (void *)((uint32_t)data_len));
 if (err) {
  printk("%s: Write cmd failed (%d).\n", __func__, err);
 }

 return err;
}
```

:::note

- `write_cmd_cb:` Una función de callback para bt_gatt_write_without_response_cb. Calcula e imprime el conteo de escrituras, la longitud y la velocidad de datos en bits por segundo (bps). Reinicia estas métricas si el tiempo transcurrido desde que se recibieron los últimos datos excede un segundo.

- `mtu_exchange_cb:` Una función de callback que se llama después de un procedimiento de intercambio de MTU (Unidad Máxima de Transmisión). Imprime si el intercambio fue exitoso o falló y muestra el nuevo tamaño de MTU.
- `mtu_exchange:`Inicia un procedimiento de intercambio de MTU. Primero imprime el MTU actual y luego intenta intercambiarlo, usando mtu_exchange_cb como callback.

- `connected:`Una función callback ejecutada cuando se establece una conexión. Imprime la dirección del dispositivo conectado y su rol. Luego almacena una referencia a la conexión e inicia un intercambio de MTU. Si la seguridad está habilitada, intenta establecer el nivel de seguridad.

- `disconnected:`Una función callback ejecutada cuando se termina una conexión. Imprime la dirección del dispositivo desconectado, su rol y la razón de la desconexión. Limpia la referencia de conexión y, si el dispositivo era un central, reinicia el escaneo.

- `le_param_req:` Una función callback para manejar solicitudes de actualización de parámetros de conexión LE desde el periférico. Imprime los parámetros solicitados (intervalo, latencia y timeout).

- `le_param_updated:` Una función callback que se llama cuando los parámetros de conexión se actualizan exitosamente. Imprime los nuevos valores de intervalo, latencia y timeout.

- `security_changed:`Una función callback que se llama cuando el nivel de seguridad de una conexión cambia.

- `write_cmd:` Una función que prepara y envía un comando de escritura GATT sin respuesta. Determina la longitud máxima de datos basada en el MTU actual y envía los datos al handle 0x0001. Usa write_cmd_cb como callback.

:::

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
