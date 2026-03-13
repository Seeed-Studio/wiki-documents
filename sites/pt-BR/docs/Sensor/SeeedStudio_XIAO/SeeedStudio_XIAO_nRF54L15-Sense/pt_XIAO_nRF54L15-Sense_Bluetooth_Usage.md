---
title: Uso de BLE do Seeed Studio XIAO nRF54L15 Sense
description: |
  Guia completo para uso de Bluetooth Low Energy (BLE) com XIAO nRF54L15 Sense, incluindo advertising, conexões, serviços GATT e otimização de energia.
image: https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/1-101991422-XIAO-nRF54L15-Sense.webp
slug: /xiao_nrf54l15_sense_bluetooth_usage
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
createdAt: '2025-07-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xiao_nrf54l15_sense_bluetooth_usage/
---

O código de exemplo a seguir foi desenvolvido para PlatformIO, mas também é compatível com o nRF Connect SDK.

:::tip
Baseado no VS Code, se você quiser usar o caso a seguir no nRF Connect SDK, consulte a conexão fornecida, adicione o arquivo app.overlay e modifique o conteúdo em prj.conf

[XIAO nRF54L15 Adicionar arquivo overlay e modificar o arquivo conf](https://wiki.seeedstudio.com/pt-br/xiao_nrf54l15_sense_getting_started/#/add-overlay-and-modify-the-conf-file/).

:::

## Observador BLE

Uma aplicação simples que demonstra a funcionalidade do papel de Observador Bluetooth Low Energy. A aplicação irá periodicamente varrer dispositivos próximos. Se algum for encontrado, imprime o endereço do dispositivo, o valor RSSI, o tipo de Advertising e o comprimento dos dados de Advertising no console.

Se o controlador Bluetooth Low Energy utilizado suportar Varredura Estendida, você pode habilitar `CONFIG_BT_EXT_ADV` no arquivo de configuração do projeto `prj.conf`. Consulte o arquivo de configuração do projeto para mais detalhes.

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/obersever.png" alt="XIAO nRF54L15 Observer" style={{width:900, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Resultado da Varredura</em></p>
</div>

### Adicionar Placa XIAO nRF54L15

Para adicionar a placa XIAO nRF54L15(Sense) ao NCS (nRF Connect SDK), você pode consultar o guia ["Primeiros Passos"](https://wiki.seeedstudio.com/pt-br/xiao_nrf54l15_sense_getting_started/) na Wiki da Seeed Studio. Este guia fornecerá instruções detalhadas sobre o processo.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/zephyr/boards" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar as Bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

### Código do Observador BLE

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/zephyrproject-rtos/zephyr/tree/main/samples/bluetooth/observer" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar as Bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
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

- `main.c:` Inicializa o subsistema Bluetooth e inicia a demonstração do observador.

- `bt_enable(NULL):` Inicializa o Subsistema Bluetooth.

- `observer_start():` Chama a função que inicia o observador.

- `printk("Exiting %s thread.\n", __func__):` Imprime uma mensagem quando a função principal está encerrando.

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

- `device_found:` Função de callback chamada quando um dispositivo é encontrado durante uma varredura. Imprime o endereço do dispositivo, RSSI, tipo e comprimento dos dados AD.

- `scan_recv:` Função de callback para advertising estendido que imprime informações detalhadas sobre o pacote de advertisement recebido, incluindo o endereço do dispositivo, potência Tx, RSSI e dados de advertisement.

- `data_cb:` Função de callback usada por bt_data_parse para extrair o nome do dispositivo dos dados de advertisement. Trata tanto nomes abreviados quanto completos.

- `phy2str:` Função auxiliar que converte o valor PHY (Camada Física) em uma string legível por humanos (ex.: "LE 1M", "LE 2M", etc.).

- `observer_start:` A função principal para iniciar o observador. Define os parâmetros de varredura e inicia o processo de varredura.

- `bt_le_scan_start:` Função que inicia a varredura BLE com os parâmetros especificados e uma função de callback para quando dispositivos são encontrados.

:::

## Advertising BLE

Este tutorial de advertising Bluetooth é baseado no código [de exemplo](https://academy.nordicsemi.com/courses/bluetooth-low-energy-fundamentals/lessons/lesson-2-bluetooth-le-advertising/topic/blefund-lesson-2-exercise-1/) oficial modificado para rodar no Nordic Connect SDK. Com nossa placa de desenvolvimento combinada com a documentação oficial, você pode se aprofundar em mais [aplicações](https://academy.nordicsemi.com/courses/bluetooth-low-energy-fundamentals/) Bluetooth.

Enquanto o telefone não estiver conectado ao XIAO nRF54L15, o indicador integrado permanecerá aceso permanentemente. Assim que o telefone for conectado com sucesso, o indicador começará a piscar para indicar que uma conexão foi estabelecida.

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/BLE.gif" alt="XIAO nRF54L15 Ultra-low Power Consumption in System Off Mode" style={{width:900, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Conexão do Celular com o XIAO nRF54L15</em></p>
</div>

### Instalação de Software para Advertising BLE

Para este exemplo, você precisará baixar o [aplicativo](https://www.nordicsemi.com/Products/Development-tools/nRF-Connect-for-mobile) oficial de teste Bluetooth, nRF Connect, em seu celular.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nrfconnect_app.png" style={{width:600, height:'auto'}}/></div>

Depois de gravar o programa na sua placa XIAO nRF54L15 Sense, você pode abrir a página principal do aplicativo nRF Connect para interagir com ela.

- Passo 1 . No aplicativo nRF Connect, clique no botão de varredura no canto superior direito para iniciar a busca por dispositivos Bluetooth.

- Passo 2 . Em seguida, insira o nome do seu dispositivo XIAO nRF54L15 Sense no campo "Name". Isso ajudará você a filtrar e localizar rapidamente o seu dispositivo.

- Passo 3 . Na área de resultados da varredura, encontre o seu dispositivo XIAO nRF54L15 Sense e clique no botão "Connect" ao lado dele.

Após a conexão bem-sucedida, você será direcionado à página de detalhes do dispositivo. Nessa página, você pode observar a distribuição da intensidade do sinal Bluetooth (RSSI) ao longo de diferentes períodos de tempo, o que ajuda a entender a estabilidade da conexão do dispositivo.

<div class="table-center">
 <table align="center">
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/ble_image.jpg" style={{width:300, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/ble_image2.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
 </table>
</div>

### Adicionar a Placa XIAO nRF54L15

Para adicionar a placa XIAO nRF54L15(Sense) ao NCS (nRF Connect SDK), você pode consultar o guia ["Primeiros Passos"](https://wiki.seeedstudio.com/pt-br/xiao_nrf54l15_sense_getting_started/) na Wiki da Seeed Studio. Este guia fornecerá instruções detalhadas sobre o processo.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/zephyr/boards" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar as Bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

### Código de Advertising BLE

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

- `ad:` Define os dados de advertising, incluindo os flags para modo geral detectável e sem suporte a BR/EDR, além do nome completo do dispositivo.

- `sd:` Define os dados de resposta de varredura, que contêm um URI (Identificador Uniforme de Recursos).

- `connected:` Esta função de callback é executada quando um dispositivo Bluetooth se conecta com sucesso. Ela define o flag device_connected como verdadeiro.

- `disconnected:` Esta função de callback é executada quando um dispositivo Bluetooth se desconecta. Ela define o flag device_connected como falso e reinicia o advertising para permitir novas conexões.

- `conn_callbacks:` Uma estrutura que define os callbacks de conexão, atribuindo as funções connected e disconnected aos seus respectivos eventos.

- `main:` A função principal do programa.

- `gpio_is_ready_dt:` Verifica se o dispositivo GPIO do LED está pronto.

- `gpio_pin_configure_dt:` Configura o pino do LED como saída, inicialmente definido como inativo.

- `bt_enable(NULL):` Inicializa o subsistema Bluetooth.

- `bt_le_adv_start:` Inicia o advertising Bluetooth. Este código inicia o advertising conectável usando os dados ad e sd.

- `while (1):` Um loop infinito que controla o comportamento do LED com base no status da conexão.

- `gpio_pin_toggle_dt:` Alterna o LED entre ligado e desligado.

- `k_sleep:` Coloca a thread em suspensão por um período de tempo especificado.

- `device_connected:` Um flag booleano que rastreia o status da conexão. O LED pisca em intervalos de 500ms quando um dispositivo está conectado. Quando nenhum dispositivo está conectado, o LED é apagado e o programa dorme por 1000ms.

- `LOG_INF, LOG_ERR:` Funções para registrar informações e erros.

:::

## BLE Central/GATT Write

Juntos, esses arquivos de código implementam um dispositivo Central de Bluetooth Low Energy (BLE). O Central varre continuamente periféricos Bluetooth próximos e estabelece automaticamente uma conexão ao encontrar um dispositivo específico (RSSI maior que -50). Uma vez estabelecida a conexão, ele realiza uma troca de MTU (Maximum Transmission Unit) via GATT (Generic Attribute Profile) para otimizar a eficiência da transferência de dados.

A função principal do programa é enviar continuamente comandos GATT Write Without Response ao periférico conectado. Isso é frequentemente usado para testes de desempenho, por exemplo, para medir a taxa de transferência de dados ou a taxa de escrita de uma conexão Bluetooth.

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/gatt.png" alt="XIAO nRF54L15 gatt" style={{width:900, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>Resultado do gatt</em></p>
</div>

### Adicionar a Placa XIAO nRF54L15

Para adicionar a placa XIAO nRF54L15(Sense) ao NCS (nRF Connect SDK), você pode consultar o guia ["Primeiros Passos"](https://wiki.seeedstudio.com/pt-br/xiao_nrf54l15_sense_getting_started/) na Wiki da Seeed Studio. Este guia fornecerá instruções detalhadas sobre o processo.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/zephyr/boards" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar as Bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

### Código BLE Central/GATT

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/zephyrproject-rtos/zephyr/tree/main/samples/bluetooth/central_gatt_write" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar as Bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
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

- `main:` O ponto de entrada do programa. Ele chama a função `central_gatt_write` com uma contagem de `0U`, o que significa que os comandos de escrita serão enviados indefinidamente.

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

- `device_found:` Função de callback acionada quando um novo dispositivo é encontrado durante uma varredura. Ela imprime informações sobre o dispositivo encontrado e tenta se conectar a dispositivos que sejam conectáveis e estejam próximos (RSSI maior que -50). Ela interrompe o processo de varredura antes de criar uma conexão.

- `start_scan:` Função que inicia uma varredura BLE ativa com `device_found` como callback para dispositivos encontrados.

- `mtu_updated:` Função de callback para atualizações de MTU do GATT que imprime os novos tamanhos de MTU de TX e RX.

- `gatt_callbacks:` Uma estrutura que registra a função` mtu_updated `como callback para eventos GATT.

- `central_gatt_write:` A função principal da aplicação do dispositivo central. Ela inicializa o subsistema Bluetooth, registra os callbacks GATT e inicia a varredura por dispositivos. Em seguida, entra em um loop, onde aguarda uma conexão e chama repetidamente write_cmd para realizar escritas GATT. O loop pode ser configurado para executar um número específico de vezes ou indefinidamente.

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

- `write_cmd_cb:` Uma função de callback para bt_gatt_write_without_response_cb. Ela calcula e imprime a contagem de escritas, o comprimento e a taxa de dados em bits por segundo (bps). Ela redefine essas métricas se o tempo desde o último dado recebido exceder um segundo.

- `mtu_exchange_cb:` Uma função de callback chamada após um procedimento de troca de MTU (Unidade Máxima de Transmissão). Ela imprime se a troca foi bem-sucedida ou falhou e exibe o novo tamanho do MTU.

- `mtu_exchange:`Inicia um procedimento de troca de MTU. Primeiro imprime o MTU atual e, em seguida, tenta trocá-lo, usando mtu_exchange_cb como callback.

- `connected:`Uma função de callback executada quando uma conexão é estabelecida. Imprime o endereço do dispositivo conectado e sua função. Em seguida, armazena uma referência à conexão e inicia uma troca de MTU. Se a segurança estiver habilitada, tenta definir o nível de segurança.

- `disconnected:`Uma função de callback executada quando uma conexão é encerrada. Imprime o endereço do dispositivo desconectado, sua função e o motivo da desconexão. Limpa a referência de conexão e, se o dispositivo era um central, reinicia a varredura.

- `le_param_req:` Uma função de callback para lidar com solicitações de atualização de parâmetros de conexão LE do periférico. Imprime os parâmetros solicitados (intervalo, latência e tempo limite).

- `le_param_updated:` Uma função de callback chamada quando os parâmetros de conexão são atualizados com sucesso. Imprime os novos valores de intervalo, latência e tempo limite.

- `security_changed:`Uma função de callback chamada quando o nível de segurança de uma conexão é alterado.

- `write_cmd:` Uma função que prepara e envia um comando de escrita GATT sem resposta. Determina o comprimento máximo dos dados com base no MTU atual e envia os dados para o handle 0x0001. Usa write_cmd_cb como callback.

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
