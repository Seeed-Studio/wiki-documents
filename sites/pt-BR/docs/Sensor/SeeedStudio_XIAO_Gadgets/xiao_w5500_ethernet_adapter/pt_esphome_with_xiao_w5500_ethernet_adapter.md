---
description: ESPHome no XIAO W5500 para Home Assistant
title: ESPHome no Adaptador Ethernet XIAO(ESP32-S3) W5500 para Home Assistant
keywords:
  - esphome
  - ethernet
  - w5500
image: https://files.seeedstudio.com/wiki/xiao_w5500_poe/0.webp
sidebar_position: 2
slug: /esphome_xiao_w5500_ethernet_adapter
last_update:
  date: 12/08/2025
  author: Zeller
createdAt: '2025-12-08'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/esphome_xiao_w5500_ethernet_adapter/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113100042-xiao-w5500-ethernet-adapter.jpg" style={{width:800, height:'auto'}}/></div>

Este tutorial demonstra como implementar um **Bluetooth Proxy** usando o **XIAO W5500 Ethernet Adapter**, com integração e validação no **Home Assistant**.

Antes de prosseguir com este tutorial, certifique-se de que os seguintes pré-requisitos sejam atendidos:

1. Um dispositivo host capaz de executar o [Home Assistant](https://www.home-assistant.io/).
2. Uma conexão estável Ethernet ou Wi-Fi.
3. (Recomendado) Capacidade PoE (Power over Ethernet) ou uma fonte de alimentação externa de 5 V.
4. [XIAO(ESP32-S3) W5500 Ethernet Adapter](https://www.seeedstudio.com/XIAO-W5500-Ethernet-Adapter-p-6472.html)

<div class="table-center">
 <table>
  <tr>
   <th>XIAO(ESP32-S3) W5500 Ethernet Adapter</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113100042-xiao-w5500-ethernet-adapter.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-W5500-Ethernet-Adapter-p-6472.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Introdução ao [Home Assistant](https://www.home-assistant.io/)

O Home Assistant é uma poderosa plataforma de automação residencial de código aberto que permite controlar e monitorar seus dispositivos domésticos inteligentes a partir de uma interface única e unificada. Ele atua como o hub central da sua casa inteligente, permitindo automatizar rotinas, monitorar sensores e criar um ambiente mais inteligente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/204.png" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.home-assistant.io/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> Saiba Mais 🖱️</font></span></strong></a>
</div>

### Integração com [ESPHome](https://esphome.io/)

ESPHome é uma ferramenta de criação de firmware de código aberto projetada especificamente para dispositivos ESP8266 / ESP32. Ela permite criar firmwares personalizados usando arquivos de configuração YAML simples, que depois podem ser gravados no seu dispositivo.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://esphome.io/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> Saiba Mais 🖱️</font></span></strong></a>
</div>

## Primeiros Passos com ESPHome

### Visão Geral do Bluetooth Proxy

O Bluetooth Proxy atua como uma ponte de sensoriamento distribuída leve que estende a cobertura Bluetooth do Home Assistant além do alcance nativo do host. Ao implantar múltiplos **nós ESP32** pelo ambiente, é possível estabelecer uma rede de sensoriamento Bluetooth para toda a casa, permitindo conexões estáveis com diversos dispositivos BLE, como sensores de temperatura e umidade, sensores de porta/janela, módulos de iluminação e monitores de plantas.

**Funções Principais:**

- **Cobertura Estendida:** Remove a dependência do alcance Bluetooth do host ao utilizar nós proxy ESP32 distribuídos para alcançar conectividade Bluetooth em toda a casa.
- **Como Funciona:**
  - O **XIAO W5500 Ethernet Adapter** habilita a varredura Bluetooth
  - Ele recebe pacotes de broadcast BLE próximos (por exemplo, termômetros, fechaduras inteligentes, luzes)
  - Os dados são encaminhados ao Home Assistant via **Ethernet ou Wi-Fi**
  - O Home Assistant reconhece esses dispositivos como **entidades Bluetooth**
  - Os usuários podem visualizar temperatura, nível de bateria, intensidade de sinal e outras métricas diretamente na interface do Home Assistant

### Instalar o Firmware

Se você ainda não configurou o Home Assistant, pode clicar neste link e seguir o tutorial oficial do Home Assistant para concluir a configuração. [Home Assistant Installation](https://www.home-assistant.io/installation/)

**Passo 1.** Instalar ESPhome<br/>

  Se você já instalou o ESPHome, pode pular esta etapa.

- Vá em **Settings** -> **Add-ons**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/01.png" style={{width:800, height:'auto'}}/></div>

- **ADD-ON STORE** -> **Search ESPHome**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/02.png" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/03.png" style={{width:800, height:'auto'}}/></div>

- Iniciar ESPhome

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/04.png" style={{width:800, height:'auto'}}/></div>

**Passo 2.** Adicionar novo dispositivo

    Vá para o ESPHome e clique no botão **Add New Device** no canto inferior direito.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/add_new_device1.png" style={{width:800, height:'auto'}}/></div>

    Nomeie o equipamento e selecione o chip de controle principal correspondente. O XIAO W5500 foi projetado com base no **XIAO ESP32-S3**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/add_new_device2.png" style={{width:800, height:'auto'}}/></div><br/>

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', marginLeft:'10%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/add_new_device3.png" style={{width:'90%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3.png" style={{width:'100%', height:'auto'}}/></div>
</div>

**Passo 3.** Instalar o firmware

<details>
<summary>Clique aqui para copiar o arquivo yaml</summary>

```yaml
# Only boards produced after November 1, 2025 are supported
# ==== AUTO-SYNC START: xiao-w5500-ethernet-adapter/xiao-w5500-ethernet-adapter.yaml ====

# Only boards produced after November 1, 2025 are supported
esphome:
  name: seeed-esp32-poe
  friendly_name: "XIAO W5500 Ethernet Adapter V1.2"
  min_version: 2025.11.0
  name_add_mac_suffix: true

esp32:
  variant: esp32s3
  framework:
    type: esp-idf

ethernet:
  type: W5500
  clk_pin: GPIO7
  mosi_pin: GPIO9
  miso_pin: GPIO8
  cs_pin: GPIO2
  interrupt_pin: GPIO10

api:
logger:

ota:
  - platform: esphome
    id: ota_esphome

esp32_ble:
  max_connections: 4

esp32_ble_tracker:

bluetooth_proxy:
  active: true
  connection_slots: 4

button:
  - platform: safe_mode
    id: button_safe_mode
    name: Safe Mode Boot

  - platform: factory_reset
    id: factory_reset_btn
    name: Factory reset
# ==== AUTO-SYNC END ====
```

</details>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/add_new_device4.png" style={{width:800, height:'auto'}}/></div>

    Clique em **INSTALL** para instalar o código no dispositivo e você verá a imagem a seguir.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/add_new_device5.png" style={{width:800, height:'auto'}}/></div>

<Tabs>
<TabItem value='Install through browser'>

:::tip
Se o seu Home Assistant Host (Raspberry PI/Green/Yellow etc.) estiver longe de você, recomendamos usar este método. Você pode instalar com o computador que tem em mãos.
:::

Primeiro, você precisa clicar em **Manual download** para baixar o firmware compilado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/62.png" style={{width:500, height:'auto'}}/></div>

Abra este site onde faremos o upload do firmware para o XIAO(ESP32-S3) W5500 Ethernet Adapter.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/add_new_device5.png" style={{width:800, height:'auto'}}/></div>

Volte ao ESPHome para baixar o firmware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/64.png" style={{width:800, height:'auto'}}/></div>

Selecione o formato Factory.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/65.png" style={{width:500, height:'auto'}}/></div>

Use um cabo USB para **conectar o dispositivo ao seu computador** e clique em **CONNECT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/66.png" style={{width:800, height:'auto'}}/></div>

Selecione usbmodemxxx (no Windows é COMxxx) e clique em connect.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/67.png" style={{width:800, height:'auto'}}/></div>

Clique em **INSTALL** e selecione o firmware que você acabou de baixar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/69.png" style={{width:500, height:'auto'}}/></div>

</TabItem>

<TabItem value='Install through host'>

:::tip
Se o seu Home Assistant Host (Raspberry PI/Green/Yellow etc.) estiver por perto, recomendamos usar este método, pois é mais simples.
:::

Antes de instalar o código no dispositivo, você precisa usar um cabo USB para **conectar este dispositivo ao seu Raspberry Pi ou HA Green(Yellow) etc.** que está executando o Home Assistant.

Clique nas opções conforme mostrado na imagem para instalar o código no dispositivo.

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/6.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/7.png" style={{width:'120%', height:'auto'}}/></div>
</div>

Aguarde um momento e você verá um retorno como na imagem a seguir. Isso significa que o código está sendo executado com sucesso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/add_new_device6.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>

<TabItem value='Install through Wi-Fi'>

:::tip
Esta é a maneira mais simples, mas com a premissa de que, ao instalar o programa pela primeira vez, você deve primeiro enviar o programa para o ePaper Panel usando o método à esquerda. Depois disso, você pode enviá-lo via Wi‑Fi. Além disso, certifique-se de que sua configuração YAML inclua seções `ota` e `api` devidamente configuradas com chaves de criptografia válidas para que este método funcione.
:::

Dessa forma, você não precisa conectar o painel ePaper a nada, apenas certifique-se de que ele esteja online.

Clique na opção e então o firmware será instalado automaticamente no painel ePaper.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/72.png" style={{width:500, height:'auto'}}/></div>

Aguarde um momento e você verá um retorno como na imagem a seguir. Se falhar, pode ser devido a um sinal fraco. Por favor, aproxime o dispositivo do seu roteador.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/add_new_device7.png" style={{width:800, height:'auto'}}/></div>

</TabItem>
</Tabs>

**Passo 4.** Veja os resultados da varredura

- Navegue até **Settings** → **Devices & services** → Bluetooth e selecione o dispositivo **Bluetooth Proxy**.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/buletooth_1.png" style={{width:800, height:'auto'}}/></div>
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/buletooth_2.png" style={{width:800, height:'auto'}}/></div>
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/buletooth_3.png" style={{width:800, height:'auto'}}/></div>

- Selecione **Advertisement Monitor** para visualizar as informações dos dispositivos Bluetooth escaneados.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/buletooth_4.png" style={{width:800, height:'auto'}}/></div>

  - **Addresss**: O endereço de broadcast do dispositivo Bluetooth (em formato semelhante a MAC). Observe que este não é o endereço MAC físico real — é um endereço privado aleatório gerado pelo mecanismo de privacidade BLE, que muda periodicamente.
  - **Name**: O nome anunciado do dispositivo Bluetooth. Se o dispositivo transmitir seu nome, este campo ajuda a identificá‑lo.
  - **Device**: A entidade Bluetooth reconhecida no Home Assistant. Se o dispositivo ainda não tiver sido pareado ou identificado, este campo permanece vazio.
  - **Source**: Indica a fonte da varredura, ou seja, o nó Bluetooth Proxy específico (por exemplo, **Bluetooth Proxy 8fed20**). Isso ajuda a distinguir dados de vários nós proxy.
  - **RRSI**: Indicador de Intensidade do Sinal Recebido (em dBm). Quanto mais próximo de 0, mais forte é o sinal.

- Como alternativa, selecione **Visualization** para acessar a visualização.

    A figura mostra a Visualização de Anúncios Bluetooth no Home Assistant, ilustrando a topologia da rede de proxy Bluetooth.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/buletooth_5.jpg" style={{width:800, height:'auto'}}/></div>

:::tip
Muitos dispositivos BLE usam endereços de privacidade para segurança, o que significa que seu endereço de broadcast é aleatório e atualizado periodicamente. Como resultado, o mesmo dispositivo físico pode aparecer com endereços diferentes na lista de anúncios do Home Assistant.
Para identificar um dispositivo de forma confiável, use seu nome anunciado ou outras características, como UUIDs de serviço ou padrões de intensidade de sinal.
:::

## Aplicação

Ao aproveitar o proxy Bluetooth implementado no **XIAO(ESP32-S3) W5500 Ethernet Adapter**, você pode estender significativamente a cobertura Bluetooth para conectar dispositivos Bluetooth. Especificamente, isso pode ser alcançado com base em diferentes protocolos Bluetooth. Abaixo, tomando como exemplo as integrações existentes do Home Assistant (HA), demonstramos os métodos de implementação voltados para cenários de aplicação em casas inteligentes.

### [BTHome](https://bthome.io/)

BTHome é um formato BLE energeticamente eficiente, mas flexível, para dispositivos transmitirem seus dados de sensores e pressionamentos de botão.<br/>
Tomando como exemplo a leitura de dados de um sensor de temperatura e umidade DHT11, adicione a integração correspondente no Home Assistant (HA), leia os dados por meio de um proxy Bluetooth e obtenha uma

Além do XIAO(ESP32-S3) W5500 Ethernet Adapter, você também precisará preparar um XIAO ESP32‑C3 e um sensor de temperatura e umidade DHT11.

1. Adicione o código Arduino

:::tip
Você também precisa adicionar os arquivos BTHome e os arquivos DHT ao diretório que você criou. Os arquivos específicos podem ser acessados em: [DHT&BTHome.zip](https://files.seeedstudio.com/wiki/xiao_w5500_poe/BTHome_Temp_or_Hei_sensor.zip)
:::

```cpp
#include "BTHome.h"
#include "DHT.h"

#define DHTTYPE DHT11   // DHT 11
#define DHTPIN D0     // what pin we're connected to（DHT10 and DHT20 don't need define it）
DHT dht(DHTPIN, DHTTYPE);   //   DHT11 DHT21 DHT22

#define DEVICE_NAME "DIY-sensor"
#define ENABLE_ENCRYPT

String BIND_KEY = "231d39c1d7cc1ab1aee224cd096db912"; // Change this key with a string containing 32 of: a-f and 0-9 characters (hex) this will be asked in HA
BTHome bthome;

void setup() {
  Serial.begin(115200);
#ifdef ENABLE_ENCRYPT
  bthome.begin(DEVICE_NAME, true, BIND_KEY, false);
#else
  bthome.begin(DEVICE_NAME, false, "", false);
#endif
  Wire.begin();
  dht.begin();
}

void loop() {
  float temp_hum_val[2] = {0};
  if (!dht.readTempAndHumidity(temp_hum_val)) 
  {
    Serial.print("Humidity: ");
    Serial.print(temp_hum_val[0]);
    Serial.print(" %\t");
    Serial.print("Temperature: ");
    Serial.print(temp_hum_val[1]);
    Serial.println(" *C");
  } 
  else 
  {
    Serial.println("Failed to get temprature and humidity value.");
  }

  bthome.resetMeasurement();

  bthome.addMeasurement(ID_TEMPERATURE_PRECISE, temp_hum_val[1]);//3
  bthome.addMeasurement(ID_HUMIDITY_PRECISE, temp_hum_val[0]);//3

  bthome.sendPacket();
  bthome.stop();
  delay(500);
}
```

2. Adicione a integração

- Abra o Home Assistant e navegue até Settings. Um dispositivo BTHome será descoberto em Devices & Services. Clique em Add, insira a chave (cole o BIND_KEY de 32 caracteres do código) e selecione Submit.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/bthome_1.png" style={{width:800, height:'auto'}}/></div>

- Após o envio, você será redirecionado para uma página onde poderá visualizar os dados de temperatura e umidade transmitidos, bem como o endereço MAC do Bluetooth. Você também seleciona **Add to dashboard**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/bthome_2.png" style={{width:800, height:'auto'}}/></div>

- Clicar no endereço MAC revela que o dispositivo foi descoberto pelo proxy Bluetooth implementado no XIAO(ESP32-S3) W5500 Ethernet Adapter. Isso confirma que o proxy Bluetooth está funcionando conforme o esperado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/bthome_3.png" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/bthome_4.png" style={{width:800, height:'auto'}}/></div>

:::tip
O protocolo BTHome suporta apenas transmissão de dados unidirecional para o Home Assistant, e cada dado transmitido corresponde a um ID exclusivo. Se você quiser adicionar mais dispositivos, consulte [BThome Format](https://bthome.io/format/)
:::

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
