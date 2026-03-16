---
description: Construindo um centro de controle de casa inteligente em torno do Home Assistant
title: Construindo um centro de controle de casa inteligente em torno do Home Assistant
keywords:
  - LinkStar
  - Primeiros passos
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /h68k-ha-esphome
sku: 113991054,102110777,101991030,102010633
last_update:
  date: 2/1/2023
  author: jianjing Huang
createdAt: '2023-02-01'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/h68k-ha-esphome/
---

<p><meta name="google-site-verification" content="2bq3L0F_PFVokQM-qT-al7x9FcSNJOO8TtJfAHW43lE" /></p>

# Construindo um centro de controle de casa inteligente em torno do Home Assistant

Neste artigo, detalharemos como configurar o Home Assistant no novo produto LinkStar H68K da Seeed Studio e implantar o ambiente ESPHome. ESPHome é um serviço muito comum no Home Assistant. Devido às limitações do sistema de roteamento por software, usaremos ESPHome como exemplo para guiá-lo através de um método inteligente de instalação desse serviço.

## Primeiros Passos

Se você quiser seguir este tutorial até o fim, precisará preparar o seguinte.

<table align="center">
 <tr>
     <th>LinkStar H68K com Wi-Fi 6</th>
      <th>reRouter CM4 1432 (Opcional)</th>
      <th>XIAO ESP32C3</th>
 </tr>
  <tr>
      <td><div align="center"><img width ={210} src="https://files.seeedstudio.com/wiki/LinkStar/OVerview.jpg"/></div></td>
      <td><div align="center"><img width ={210} src="https://files.seeedstudio.com/wiki/Mini_Router/mini_router_overview.png"/></div></td>
      <td><div align="center"><img width ={100} src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png"/></div></td>
  </tr>
 <tr>
      <td align = "center"><a href="https://www.seeedstudio.com/LinkStar-H68K-1432-p-5501.html">Adquira Agora</a></td>
      <td align = "center"><a href="https://www.seeedstudio.com/Dual-GbE-Carrier-Board-with-4GB-RAM-32GB-eMMC-RPi-CM4-Case-p-5029.html">Adquira Agora</a></td>
      <td align = "center"><a href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html">Adquira Agora</a></td>
 </tr>
</table>

*O reRouter CM4 1432 também é compatível com este tutorial. Você pode adquirir o LinkStar ou o reRouter.

O objetivo deste projeto é instalar Home Assitant e ESPHome usando o serviço Docker do LinkStar e, em seguida, configurar um hotspot LinkStar para conectar-se ao LinkStar usando os recursos de WiFi do XIAO ESP32C3 para completar a rede.

Então, combinado com o vasto ecossistema Grove, você pode criar ainda mais possibilidades no Home Assistant.

O conteúdo deste tutorial passará amplamente pelas etapas a seguir.

1. [Configurar o ambiente Docker no LinkStar OpenWRT](#configure-home-assistant-panel)
2. [Instalação e configuração do Home Assistant, ESPHome](#installation-and-configuration-of-home-assistant-esphome)
3. [Adicionar Seeed Studio XIAO ESP32C3 ao ESPHome](#add-seeed-studio-xiao-esp32c3-to-esphome)
4. [Módulos Grove com ESPHome e Home Assistant](#grove-modules-with-esphome-and-home-assistant)

## Configurar o ambiente Docker no LinkStar OpenWRT

### Passo 1. Instalar OpenWRT para o LinkStar

Detalhamos como instalar vários sistemas para o LinkStar na Wiki do LinkStar. Neste tutorial, tomaremos o sistema OpenWRT como exemplo e explicaremos como instalar o Home Assistant Container garantindo que o LinkStar atue como um roteador por software.

- [Gravar o OpenWRT no cartão TF](https://wiki.seeedstudio.com/pt-br/linkstar-install-system/#flash-openwrt-to-the-tf-card)
- [Gravar o OpenWRT na eMMC](https://wiki.seeedstudio.com/pt-br/linkstar-install-system/#flash-openwrt-to-emmc)

Selecione acima o local do sistema onde você gostaria de instalar o OpenWRT para o LinkStar.

### Passo 2. Configurar a rede do LinkStar

Conecte-se ao LinkStar por meio de um cabo de rede e digite o endereço IP: `192.168.100.1` no seu navegador para acessar o backend de operação do OpenWRT.

A conta e senha iniciais são:

```
Account: root
Password: password
```

Em seguida, precisamos conectar o LinkStar à Internet.

Você precisa comprar um LinkStar com rede sem fio, assim você pode escolher conectar um cabo de rede ao LinkStar ou conectá-lo ao WiFi.

- Se for uma rede cabeada, configure sua rede de acordo com as instruções do seu provedor de internet.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/53.png"/></div>

- Se você quiser usar uma rede sem fio, pode procurar uma rede nas opções **Wireless**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/54.png"/></div>

Depois disso, basta inserir a senha da sua rede, clicar em **Save and Apply**.

Certifique-se de ter um bom estado de rede antes de continuar com as próximas etapas.

### Passo 3. Alocar mais espaço para o Docker

Por padrão, o Docker tem apenas cerca de 250 MB de tamanho, o que não é suficiente para instalarmos a imagem, então primeiro precisamos expandir a capacidade para o Docker.

Clique em **System** --> **Disk Man** --> **EDIT**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/1.png"/></div>

Na última linha, escreva o tamanho do espaço de armazenamento a ser adicionado na coluna END SECTOR. No meu caso, é `+20G`. Em seguida, clique no botão **NEW**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/2.png"/></div>

Escolha o formato **ext4**, depois clique no botão **FORMAT**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/3.png"/></div>

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/4.png"/></div>

Quando terminar, você verá que um novo espaço de 20 GB foi adicionado. No entanto, é um espaço livre agora, você precisa montá-lo no Docker.

Então escolha **System** --> **Mount Points**, encontre a seção **Mount Point**, clique no botão **ADD**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/5.png"/></div>

Escolha o novo espaço que você acabou de criar.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/6.png"/></div>

Escolha o ponto de montagem **Use as Docker data (/opt)**. Não se esqueça de marcar a caixa de seleção **Enable this mount**, depois clique no botão **SAVE & APPLY**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/7.png"/></div>

Todas as configurações para a expansão estão completas, só é preciso reiniciar para torná-las válidas.

Escolha **System** --> **Reboot**, clique no botão **PERFORM REBOOT**. Aguarde o OpenWRT reiniciar e faça login novamente.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/8.png"/></div>

## Instalação e configuração do Home Assistant, ESPHome

### Passo 4. Instalar o Home Assistant com Docker

Uma forma melhor de instalar o Home Assistant no OpenWRT é fazê-lo no Docker, o que garante que o LinkStar seja estável como um roteador por software e também permite que o Home Assistant seja implantado.

Então tudo o que precisamos fazer é puxar a imagem específica do Home Assistant. Essa imagem nos atenderá bem na instalação do serviço ESPHome mais tarde.

```
homeassistant/qemuarm-64-homeassistant:latest
```

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/12.png"/></div>

Usamos a imagem baixada para criar um Container.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/11.png"/></div>

Na página onde o container é criado, precisamos fazer algumas configurações simples.

- Container Name: nome do seu container
- Docker Image: escolha a imagem **qemuarm-64-homeassistant** que acabou de ser baixada
- Network: escolha o modo **host**
- Environment Variables(-e): sua variável de ambiente

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/13.png"/></div>

Depois de preencher o conteúdo acima, salve e aplique. Você verá que o Container foi criado. Vamos iniciá-lo.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/14.png"/></div>

### Passo 5. Instalar ESPHome com Docker

Como estamos instalando o Home Assistant Container, não podemos simplesmente baixar o serviço ESPHome pela loja de Add-on, então é necessário um compromisso.

Repetindo as etapas acima, baixamos a imagem ESPHome.

```
esphome/esphome:latest
```

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/17.png"/></div>

Na página onde o container é criado, precisamos fazer algumas configurações simples.

- Container Name: nome do seu container
- Docker Image: escolha a imagem **esphome** que acabou de ser baixada
- Network: escolha o modo **host**
- Environment Variables(-e): sua variável de ambiente

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/18.png"/></div>

Depois de preencher o conteúdo acima, salve e aplique. Você verá que o Container foi criado. Você também precisa iniciá-lo.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/19.png"/></div>

### Passo 6. Adicionar o serviço ESPHome ao Home Assistant

Para alcançar o mesmo efeito de baixar o ESPHome no Home Assistant, precisamos modificar o arquivo de configuração no Home Assistant.

Vá para o Home Assistant Container.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/55.png"/></div>

Vamos ao terminal no Home Assistant.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/56.png"/></div>

Digite o seguinte comando no terminal.

```sh
vi configuration.yaml
```

Adicione o seguinte conteúdo ao final de `configuration.yaml`.

```
# Example configuration.yaml entry
panel_iframe:
  esphome:
    title: "ESPHome"
    url: "http://192.168.100.1:6052"
    icon: mdi:chip
```

Saia do container docker digitando ```exit``` no shell do Home Assistant Container. Depois disso, reinicie o container do Home Assistant.

Crie uma nova página do navegador, digite o endereço IP `192.168.100.1:8123` e registre sua conta do Home Assistant e você verá o ESPHome aparecer na barra de ferramentas à esquerda.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/57.png"/></div>

## Adicionar Seeed Studio XIAO ESP32C3 ao ESPHome

- **Passo 1.** Clique em **+ NEW DEVICE**

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/8.png"/></div>

- **Passo 2.** Clique em **CONTINUE**

<div align="center"><img width ={350} src="https://files.seeedstudio.com/wiki/ESPHome/9.png"/></div>

- **Passo 3.** Insira um **Name** para o dispositivo e insira as credenciais de WiFi, como **Network name** e **Password**. Depois clique em **NEXT**

<div align="center"><img width ={350} src="https://files.seeedstudio.com/wiki/ESPHome/10.png"/></div>

- **Passo 4.** Selecione **ESP32-C3** e clique

<div align="center"><img width ={350} src="https://files.seeedstudio.com/wiki/ESPHome/11.png"/></div>

- **Passo 5.** Clique em **SKIP** porque vamos configurar esta placa manualmente

<div align="center"><img width ={350} src="https://files.seeedstudio.com/wiki/ESPHome/12.png"/></div>

- **Passo 6.** Clique em **EDIT** abaixo da placa recém-criada

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/ESPHome/13.png"/></div>

- **Passo 7.** Isso abrirá um arquivo **YAML** e este arquivo será usado para definir todas as configurações da placa. Edite o conteúdo em **esp32** como segue

```sh
esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    version: 2.0.5
    platform_version: 5.2.0
```

**Nota:** Aqui estamos usando a versão mais recente do [Arduino core for ESP32](https://github.com/espressif/arduino-esp32/releases) e [ESP32 support for PlatformIO](https://github.com/platformio/platform-espressif32/releases)

<div align="center"><img width ={350} src="https://files.seeedstudio.com/wiki/ESPHome/14.png"/></div>

- **Passo 8.** então, clique no botão **Save** no canto superior direito.

O LinkStar H68K não suporta reconhecimento de dispositivos MCU externos, precisamos primeiro baixar o firmware compilado e depois enviar o firmware por meio de outro PC.

- **Passo 9.** Clique no botão **Install** no canto superior direito. Em seguida, selecione o último item **Manual download**.

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/30.png"/></div>

- **Passo 10.** Selecione **Modern format**.

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/31.png"/></div>

Em seguida, levará bastante tempo para baixar e compilar, portanto seja paciente. Quando tudo estiver pronto, o firmware será baixado automaticamente para o seu computador.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/33.png"/></div>

- **Passo 11.** Para enviar o firmware para o XIAO ESP32C3 há algumas opções, aqui mostramos 2 maneiras de fazer isso:

  - Opção 1: usando a [ferramenta Web do ESPhome](https://web.esphome.io/?dashboard_install) para enviar.

Certifique-se de ter os drivers corretos instalados. Abaixo estão os drivers para chips comuns usados em dispositivos ESP.

1. Drivers CP2102: [Windows & Mac](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)
2. Drivers CH342, CH343, CH9102: [Windowns](https://www.wch.cn/downloads/CH343SER_ZIP.html), [Mac](https://www.wch.cn/downloads/CH34XSER_MAC_ZIP.html)
3. Drivers CH340, CH341: [Windowns](https://www.wch.cn/downloads/CH341SER_ZIP.html), [Mac](https://www.wch.cn/downloads/CH341SER_MAC_ZIP.html)

Abra a [ferramenta Web do ESPhome](https://web.esphome.io/?dashboard_install) com o navegador Chrome ou Edge.

Clique em **CONNECT**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/34.png"/></div>

selecione a porta serial do XIAO ESP32 na janela pop-up.

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/64.png"/></div>

Clique em **INSTALL** e então selecione o arquivo `.bin` baixado nos passos acima.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/35.png"/></div>

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/38.png"/></div>

- Opção 2: Usando a [ferramenta esphome-flasher](https://github.com/esphome/esphome-flasher).

Se você ainda não conseguir enviar o firmware usando o primeiro método após instalar o driver e trocar de navegador, então pode tentar usar o segundo método. Consulte o tutorial oficial para métodos de instalação específicos e instruções.

:::tip
Se você deseja observar as mensagens de log do XIAO ESP32C3, também pode visualizá-las através do botão View Logs deste software.
<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/41.png"/></div>
:::

Quando o envio estiver concluído, você pode desconectar o XIAO ESP32C3 do PC (a menos que precise visualizar os logs) e simplesmente alimentar o XIAO separadamente.

Se tudo correr bem, o XIAO ESP32C3 irá procurar e se conectar ao WiFi que você configurou para ele.

Assim como eu, uso a rede do LinkStar H68K. Você pode encontrá-la nas opções de rede e ver o endereço IP atribuído a ela pelo LinkStar H68K.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/42.png"/></div>

- **Passo 12.** Se você vir o status da placa como **ONLINE**, isso significa que a placa foi conectada ao WiFi com sucesso

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/ESPHome/21.png"/></div>

- **Passo 13.** Conectar ao XIAO ESP32C3

Se você não tiver muitos dispositivos Home Assistant na sua LAN, o Home Assistant pode pesquisar e adicionar automaticamente seus dispositivos ESP na aba Devices. Você pode ver este dispositivo dentro da aba **Devices & Services** em **Settings**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/66.png"/></div>

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/67.png"/></div>

Se ele não pesquisar automaticamente, você também pode se conectar ao XIAO ESP32C3 com base em seu endereço IP.

Clique em **ADD INTEGRSTION** e pesquise por **esphome**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/43.png"/></div>

Depois insira o endereço IP do XIAO ESP32C3 com o número de porta **6053**. Em seguida, clique em **SUBMIT**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/44.png"/></div>

Se o endereço IP e o número da porta inseridos estiverem corretos, você verá que será solicitado a inserir a chave de criptografia, que pedimos para salvar no arquivo yaml.

Depois clique em **SUBMIT**.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/68.png"/></div>

Neste ponto, as etapas para adicionar o dispositivo foram concluídas com sucesso.

## Módulos Grove com ESPHome e Home Assistant

Agora iremos conectar módulos Grove ao Seeed Studio XIAO ESP32C3 para que possamos exibir dados de sensores ou controlar os dispositivos usando o Home Assistant!

### Conectar Módulos Grove ao XIAO ESP32C3

Para usar módulos Grove com o Seeed Studio XIAO ESP32C3, usaremos um [Grove Shield para Seeed Studio XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html) e conectaremos o XIAO ESP32C3 nele.

<div align="center"><img width ={450} src="https://files.seeedstudio.com/wiki/ESPHome/51.png"/></div>

Depois disso, os conectores Grove na placa podem ser usados para conectar módulos Grove

### Definições de Pinos

Você precisa seguir a tabela abaixo para usar os números de pinos internos apropriados ao conectar os módulos Grove aos conectores Grove no Grove Shield para Seeed Studio XIAO.

| Número de Pino Interno  | Mapeamento de Pino  |
|--- |--- |
| 2  | D0  |
| 3  | D1  |
| 4  | D2  |
| 5  | D3  |
| 6  | D4  |
| 7  | D5  |
| 21  | D6  |
| 20  | D7  |
| 8  | D8  |
| 9  | D9  |
| 10  | D10  |
| 6  | SDA  |
| 7  | SCL  |

Por exemplo, se você quiser conectar um módulo Grove à porta **D0**, você precisa definir o pino no ESPHome como **2**

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/ESPHome/50.png"/></div>

### Lista de Compatibilidade Grove com ESPHome

Atualmente, os seguintes módulos Grove são suportados pelo ESPHome

<table>
<thead>
  <tr>
    <th>Módulo Grove</th>
    <th>Categoria</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Laser-PM2-5-Sensor-HM3301.html">Grove - Laser PM2.5 Dust Sensor</a></td>
    <td>Gás</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-All-in-one-Environmental-Sensor-SEN55-p-5373.html">Grove - SEN55 All-in-one environmental sensor</a>, NOx, PM, VOC, RH, Temp</td>
    <td>Gás</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-All-in-one-Environmental-Sensor-SEN54-p-5374.html">Grove - SEN54 All-in-one environmental sensor</a>, PM, VOC, RH, Temperature</td>
    <td>Gás</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD30-p-2911.html">Grove - CO2 & Temperature & Humidity Sensor (SCD30)</a></td>
    <td>Gás</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD41-p-5025.html">Grove - CO2 & Temperature & Humidity Sensor - SCD41</a></td>
    <td>Gás</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-VOC-and-eCO2-Gas-Sensor-for-Arduino-SGP30.html">Grove - VOC and eCO2 Gas Sensor - SGP30</a></td>
    <td>Gás</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-ADS1115-16-bit-ADC-p-4599.html">Grove - 4 Channel 16-bit ADC (ADS1115)</a></td>
    <td>ADC</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Time-of-Flight-Distance-Sensor-VL53L0X.html">Grove - Time of Flight Distance Sensor(VL53L0X)</a></td>
    <td>Distância</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Ultrasonic-Distance-Sensor.html">Grove - Ultrasonic Distance Sensor</a></td>
    <td>Distância</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-AHT20-I2C-Industrial-grade-temperature-and-humidity-sensor-p-4497.html">Grove - AHT20 I2C Industrial Grade Temperature and Humidity Sensor</a></td>
    <td>Ambiental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html">Grove - Sensor de Temperatura e Umidade V2.0 (DHT20)</a></td>
    <td>Ambiental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-Pro-AM2302-DHT22.html">Grove - Sensor de Temperatura e Umidade Pro (DHT22/AM2302)</a></td>
    <td>Ambiental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html">Grove - Sensor de Temperatura, Umidade e Barômetro (BME280)</a></td>
    <td>Ambiental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html">Grove - Sensor de Temperatura, Umidade, Pressão e Gás para Arduino - BME680</a></td>
    <td>Ambiental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Barometer-Sensor-BMP280.html">Grove Sensor de Temperatura e Barômetro (BMP280)</a></td>
    <td>Ambiental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/One-Wire-Temperature-Sensor-p-1235.html">Sensor de Temperatura One Wire - DS18B20</a></td>
    <td>Ambiental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html">Grove - Sensor de Temperatura e Umidade (DHT11)</a></td>
    <td>Ambiental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html">Grove - Sensor de Temperatura I2C de Alta Precisão - MCP9808</a></td>
    <td>Ambiental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html">Grove - Sensor de Temperatura e Umidade (SHT31)</a></td>
    <td>Ambiental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Temp-Humi-Sensor-SHT40-p-5384.html" target="_blank" rel="noopener noreferrer">Grove - Sensor de Temperatura e Umidade (SHT40)</a></td>
    <td>Ambiental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html" target="_blank" rel="noopener noreferrer">Grove - Sensor Barométrico de Alta Precisão (DPS310)</a></td>
    <td>Ambiental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-I2C-Thermocouple-Amplifier-MCP9600.html" target="_blank" rel="noopener noreferrer">Grove - Amplificador de Termopar I2C (MCP9600)</a></td>
    <td>Ambiental</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-I2C-Color-Sensor-V2.html">Grove - Sensor de Cor I2C V2</a></td>
    <td>Cor</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-I2C-Color-Sensor-V2.html">Grove - Sensor de Luz Digital - TSL2561</a></td>
    <td>Luz</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-ADC-for-Load-Cell-HX711-p-4361.html">Grove - ADC para Célula de Carga (HX711)</a></td>
    <td>Peso</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-12-Key-Capacitive-I2C-Touch-Sensor-V3-MPR121-p-4694.html">Grove - Sensor de Toque Capacitivo I2C de 12 Teclas V3 (MPR121)</a></td>
    <td>Capacitivo</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-16-Channel-PWM-Driver-PCA9685.html">Grove - Driver PWM de 16 Canais (PCA9685)</a></td>
    <td>PWM</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-4-Digit-Display.html">Grove - Display de 4 Dígitos</a></td>
    <td>Display</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-OLED-Display-0-66-SSD1306-v1-0-p-5096.html">Grove - Display OLED 0,66" (SSD1306)</a></td>
    <td>Display</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Relay.html">Grove - Relé</a></td>
    <td>Relé</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-SPDT-Relay-30A.html">Grove - Relé SPDT (30A)</a></td>
    <td>Relé</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Solid-State-Relay-V2-p-3128.html">Grove - Relé de Estado Sólido V2</a></td>
    <td>Relé</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-2-Channel-SPDT-Relay.html">Grove - Relé SPDT de 2 Canais</a></td>
    <td>Relé</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-PIR-Motion-Sensor.html">Grove - Sensor de Movimento PIR</a></td>
    <td>Movimento</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-mini-PIR-motion-sensor-p-2930.html">Grove - sensor de movimento PIR mini</a></td>
    <td>Movimento</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Digital-PIR-Motion-Sensor-p-4524.html">Grove - Sensor de Movimento PIR Digital (12m)</a></td>
    <td>Movimento</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Servo.html" target="_blank" rel="noopener noreferrer">Grove - Servo</a></td>
    <td>Atuador</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-8-Channel-I2C-Hub-TCA9548A-p-4398.html" target="_blank" rel="noopener noreferrer">Grove - Multiplexador I2C/Hub I2C de 8 Canais (TCA9548A)</a></td>
    <td>Multiplexador</td>
  </tr>
</tbody>
</table>

Agora vamos selecionar 6 módulos Grove da tabela acima e explicar como eles podem ser conectados com ESPHome e Home Assistant.

### Grove - Sensor de Temperatura e Umidade (AHT20)

#### Configuração de Instalação

- **Etapa 1.** Conecte o [Grove - Sensor de Temperatura e Umidade (AHT20)](https://www.seeedstudio.com/Grove-AHT20-I2C-Industrial-grade-temperature-and-humidity-sensor-p-4497.html) a um dos conectores I2C no Grove Shield para Seeed Studio XIAO

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/ESPHome/52.png"/></div>

- **Etapa 2.** Dentro do arquivo **xiao-esp32c3.yaml** que criamos antes, adicione o seguinte ao final do arquivo e envie OTA para o XIAO ESP32C3

```sh
i2c:
  sda: 6
  scl: 7

sensor:
  - platform: aht10
    temperature:
      name: "Temperature"
    humidity:
      name: "Humidity"
```

Você pode aprender mais sobre o **componente AHT10** [aqui](https://esphome.io/components/sensor/aht10.html). Ele permite que você use sensores baseados em **AHT10, AHT20** e **AHT21**. Aqui adicionamos o componente [I²C Bus](https://esphome.io/components/i2c.html) porque o AHT20 se comunica usando o protocolo I2C.

#### Visualizar no Dashboard

- **Etapa 1.** Na página **Overview** do Home Assistant, clique nos **3 pontos** e clique em **Edit Dashboard**

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/30.png"/></div>

- **Etapa 2.** Clique em **+ ADD CARD**

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/31.png"/></div>

- **Etapa 3.** Selecione **By ENTITY**, escreva **temperature** e marque a **check box** ao lado de **Temperature**

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/ESPHome/32.png"/></div>

- **Etapa 4.** Repita o mesmo para **Humidity**

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/ESPHome/33.png"/></div>

- **Etapa 5.** Clique em **CONTINUE**

<div align="center"><img width ={250} src="https://files.seeedstudio.com/wiki/ESPHome/34.png"/></div>

- **Etapa 6.** Clique em **ADD TO DASHBOARD**

<div align="center"><img width ={450} src="https://files.seeedstudio.com/wiki/ESPHome/35.png"/></div>

Agora o seu dashboard do Home Assistant ficará como abaixo

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/37.png"/></div>

- **Etapa 7.** Você também pode visualizar os dados do sensor como medidores. Clique em **Gauge** em **BY CARD**

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/39.png"/></div>

- **Etapa 8.** Selecione **Temperature** no menu suspenso

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ESPHome/42.png"/></div>

- **Etapa 9.** Clique em **SAVE**

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/43.png"/></div>

- **Etapa 10.** Repita o mesmo para **Humidity**

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/44.png"/></div>

Agora o seu dashboard ficará como abaixo

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/45.png"/></div>

Para o **Grove - Sensor de Gás VOC e eCO2 (SGP30)** e o **Grove - Sensor de CO2 e Temperatura e Umidade (SCD41)** neste wiki, você pode seguir um procedimento semelhante para visualizar os dados do sensor no dashboard

### Grove - Sensor de Gás VOC e eCO2 (SGP30)

#### Configuração de instalação

- **Etapa 1.** Conecte o [Grove - Sensor de Gás VOC e eCO2 (SGP30)](https://www.seeedstudio.com/Grove-VOC-and-eCO2-Gas-Sensor-for-Arduino-SGP30.html) a um dos conectores I2C no Grove Shield para Seeed Studio XIAO

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/ESPHome/52.png"/></div>

- **Etapa 2.** Dentro do arquivo **xiao-esp32c3.yaml** que criamos antes, adicione o seguinte ao final do arquivo e envie OTA para o XIAO ESP32C3

```sh
i2c:
  sda: 6
  scl: 7

sensor:
  - platform: sgp30
    eco2:
      name: "eCO2"
      accuracy_decimals: 1
    tvoc:
      name: "TVOC"
      accuracy_decimals: 1
```

Você pode aprender mais sobre o **componente SGP30** [aqui](https://esphome.io/components/sensor/sgp30.html).

### Grove - Sensor de CO2 e Temperatura e Umidade (SCD41)

#### Configuração de instalação

- **Etapa 1.** Conecte o [Grove - Sensor de CO2 e Temperatura e Umidade (SCD41)](https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD41-p-5025.html) a um dos conectores I2C no Grove Shield para Seeed Studio XIAO

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/ESPHome/52.png"/></div>

- **Etapa 2.** Dentro do arquivo **xiao-esp32c3.yaml** que criamos antes, adicione o seguinte ao final do arquivo e envie OTA para o XIAO ESP32C3

```sh
i2c:
  sda: 6
  scl: 7

sensor:
  - platform: scd4x
    co2:
      name: "CO2"
    temperature:
      name: "Temperature"
    humidity:
      name: "Humidity"
```

Você pode aprender mais sobre o **componente SGP4x** [aqui](https://esphome.io/components/sensor/scd4x.html)

### Grove - Relay

#### Configuração de instalação

- **Passo 1.** Conecte o [Grove - Relay](https://www.seeedstudio.com/Grove-Relay.html) a uma das portas **Digitais** no Grove Shield para Seeed Studio XIAO. Aqui selecionamos a porta **D0**

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/ESPHome/53.png"/></div>

- **Passo 2.** Dentro do arquivo **xiao-esp32c3.yaml** que criamos antes, adicione o seguinte ao final do arquivo e envie via OTA para o XIAO ESP32C3

```sh
switch:
  - platform: gpio
    pin: 2
    name: "Relay"
```

Você pode aprender mais sobre o **componente Relay** [aqui](https://esphome.io/cookbook/relay.html)

#### Visualizar no Dashboard

- **Passo 1.** Em **+ ADD CARD** que mencionamos antes, selecione **BY ENTITY**, digite **relay**, selecione e clique em **CONTINUE**

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/55.png"/></div>

- **Passo 2.** Clique em **ADD TO DASHBOARD**

<div align="center"><img width ={450} src="https://files.seeedstudio.com/wiki/ESPHome/56.png"/></div>

Agora você pode ligar e desligar o relay (**ON/OFF**) usando a chave de alternância

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/57.jpg"/></div>

### Grove - mini PIR motion sensor

#### Configuração de instalação

- **Passo 1.** Conecte o [Grove - mini PIR motion sensor](https://www.seeedstudio.com/Grove-mini-PIR-motion-sensor-p-2930.html) a uma das portas **Digitais** no Grove Shield para Seeed Studio XIAO. Aqui selecionamos a porta **D0**

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/ESPHome/53.png"/></div>

- **Passo 2.** Dentro do arquivo **xiao-esp32c3.yaml** que criamos antes, adicione o seguinte ao final do arquivo e envie via OTA para o XIAO ESP32C3

```sh
binary_sensor:
  - platform: gpio
    pin: 2
    name: "PIR Sensor"
    device_class: motion
```

Você pode aprender mais sobre o **componente PIR** [aqui](https://esphome.io/cookbook/pir.html)

#### Visualizar no Dashboard

- **Passo 1.** Em **+ ADD CARD** que mencionamos antes, selecione **BY ENTITY**, digite **pir**, selecione e clique em **CONTINUE**

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/58.png"/></div>

- **Passo 2.** Clique em **ADD TO DASHBOARD**

<div align="center"><img width ={450} src="https://files.seeedstudio.com/wiki/ESPHome/59.png"/></div>

Agora, se um movimento for detectado, ele será exibido como **Detected**

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/60.png"/></div>

## O que vem a seguir?

Parabéns, você aprendeu a concluir a implantação do Home Assistant no LinkStar e a usar o plugin ESPHome. Para qualquer situação semelhante em que não seja possível instalar um Home Assistant Container com Add-on, você pode usar este método para instalar outro plugin do Home Assistant.

Também esperamos que você se junte ao nosso time de criadores e nos traga mais exemplos úteis!

Claro, o XIAO ESP32C3 não se resume apenas ao suporte para o MR24HPCB1 no Home Assistant, e você pode encontrar mais tutoriais para o seu próprio uso neste documento.

- [Conecte módulos Grove ao Home Assistant usando ESPHome (Odyssey)](https://wiki.seeedstudio.com/pt-br/Connect-Grove-to-Home-Assistant-ESPHome/)
- [XIAO ESP32C3 acessa o Home Assistant via serviço ESPHome](https://wiki.seeedstudio.com/pt-br/xiao-esp32c3-esphome/)

Liberte sua criatividade!

## Solução de problemas

**FAQ1: Recebi o seguinte erro ao enviar o firmware usando a ferramenta ESPhome Web, como posso corrigi-lo?**

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/37.png"/></div>

> R: Se este aviso aparecer durante o envio, desconecte o XIAO ESP32C3 do PC. Em seguida, mantenha pressionado o BOOT BUTTON, conecte a placa ao seu PC enquanto mantém o botão BOOT pressionado e depois solte-o para entrar no modo bootloader. Neste ponto, basta reconectar e enviar o firmware novamente.

**FAQ2: Não consigo instalar o esphome flasher no Linux seguindo o tutorial do esphome flasher. O que fazer?**

> R: Ao executar os seguintes comandos, você precisa selecionar a versão do seu sistema, caso contrário ocorrerá um erro. Por exemplo, meu computador é Ubuntu 22.04, então o comando que deve ser executado é o seguinte.

```
sudo apt install python3

pip3 install -U \
    -f https://extras.wxpython.org/wxPython4/extras/linux/gtk3/ubuntu-22.04/ \
    wxPython

pip3 install esphomeflasher
```

**FAQ3: Preenchi corretamente o WiFi e a senha, por que não vejo o endereço IP do XIAO ESP32C3?**

> R: Quando você encontrar esse problema, verifique se a antena do XIAO ESP32C3 está conectada corretamente. Se a antena já estiver conectada, verifique se o XIAO não está a mais de 3 m do LinkStar, se possível (a menos que você tenha substituído a antena por uma mais potente).
Se você ainda não conseguir ver o XIAO, pode usar o software [esphome flasher](https://github.com/esphome/esphome-flasher) para verificar as informações de log do XIAO e checar a conexão do XIAO por meio dos logs.
Você pode reconectar o XIAO para que ele tente procurar o WiFi e se conectar novamente.

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
