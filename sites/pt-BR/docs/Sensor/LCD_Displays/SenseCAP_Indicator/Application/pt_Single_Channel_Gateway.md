---
description: Este projeto demonstra como implementar um gateway LoRa de canal único (LoRaHub) usando o SenseCAP Indicator.
title: Gateway de Canal Único - SenseCAP Indicator
keywords:
  - SenseCAP Indicator
  - LoRaWAN
  - ESP32S3
  - Gateway de Canal Único
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/61.webp
slug: /SenseCAP_Indicator_Single_Channel_Gateway
sku: 114993532
toc_max_heading_level: 4
sidebar_position: 5
last_update:
  date: 02/11/2025
  author: Leo Liu
createdAt: '2024-10-31'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/SenseCAP_Indicator_Single_Channel_Gateway/
---

# Gateway LoRaWAN de Canal Único - SenseCAP Indicator

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/61.png" style={{width:800, height:'auto'}}/></div>

<div class="table-center">
  <table align="center">
    <tr>
      <th>SenseCAP Indicator D1Pro</th>
      <th>SenseCAP Indicator D1L</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.png" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1Pro-p-5644.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1L-p-5646.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

Este projeto demonstra como implementar um gateway LoRaWAN de canal único (LoRaHub) usando o SenseCAP Indicator, que utiliza o ESP32S3 como MCU principal e o rádio LoRa SX1262, e construir uma aplicação LoRaWAN na The Things Network (TTN). A atualização do firmware oferece uma solução prática para quem deseja se aprofundar na tecnologia LoRa e estabelecer conexões com o LNS (LoRa Network Server).

Para gateways de canal único (chamados One-Channel Hub), que são ferramentas de baixo custo que permitem aos usuários começar a explorar o mundo LoRa. Esses gateways podem receber pacotes LoRa em um fator de espalhamento e canal específicos e facilitar a troca desses pacotes com a rede. Devido ao seu baixo custo, muitos usuários começaram a construir seus próprios gateways de canal único para experimentar com LoRa.

Este é o projeto no GitHub: [SenseCAP Indicator LoRaHub Demonstration](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/tree/main/examples/indicator_lorahub).

## Gravar o Firmware

O firmware está pronto para instalação. Basta baixar a versão mais recente da [biblioteca de binários](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/releases/tag/v1.0.3-beta-lorahub-demo).

:::tip
Também fornecemos uma versão mesclada do firmware no GitHub. A instrução a seguir é baseada na versão separada para facilitar o entendimento dos iniciantes. Se você quiser gravar diretamente [a versão mesclada](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/releases/tag/v1.0.3-beta-lorahub-demo), defina o endereço de gravação como 0x0.
:::

Se você não usar o ambiente completo do ESP-IDF, também é possível gravar os arquivos binários fornecidos usando o utilitário **esptool**.

Clique para baixar o firmware:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Indicator_single_channel_gateway_20241106.zip" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Download ⏬ </font></span></strong>
    </a>
</div>

## Personalizar e compilar o firmware

Se você quiser redefinir a configuração, as instruções a seguir podem ajudá-lo a compilar o firmware por conta própria no ambiente ESP-IDF.

### Configurar o ambiente

Este projeto é baseado no desenvolvimento Espressif ESP-IDF, consulte este [guia](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html#installation ) para configurar o ambiente.

#### Obter o ESP-IDF

```linux
mkdir -p ~/esp
cd ~/esp
git clone -b v5.2.1 --recursive https://github.com/espressif/esp-idf.git
```

#### Configurar as Ferramentas

```linux
cd esp-idf/
./install.sh
```

### Instalação do One Channel Hub

**Passo 1**: Clone o hub para o repositório local e navegue até o caminho do projeto.

```linux
git clone https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32.git

cd ~/this_project_directory/
```

**Passo 2**: Instale o driver necessário

- Obtenha os drivers de rádio:

```
cd ~/this_project_directory/components/radio_drivers
```

- Driver SX126x (sx1261, sx1262, sx1268):

```
git clone -b v2.3.2 https://github.com/Lora-net/sx126x_driver.git sx126x_driver
```

- Driver llcc68:

```
git clone -b v2.3.2 https://github.com/Lora-net/llcc68_driver.git llcc68_driver
```

- Driver lr11xx (lr1121):

```
git clone -b v2.4.1 https://github.com/Lora-net/SWDR001.git lr11xx_driver
```

### Compilar o Firmware

**Passo 1**: Entre no diretório lorahub.

```
cd ~/this_project_directory/lorahub
```

Prepare seu terminal Linux/MAC para compilar com o ESP-IDF a partir da linha de comando. Esta etapa pode ser ignorada no Windows, pois a ferramenta instalada 'ESP-IDF x.x CMD' preparará o ambiente automaticamente.

```
. ~/esp/esp-idf/export.sh
```

Configure o alvo ESP32 para o qual será feita a compilação.

```
idf.py set-target esp32s3
```

Personalize a compilação, se necessário:

```
idf.py menuconfig
```

Compile o projeto:

```
idf.py all
```

### Gravar com esp-idf

Identifique o dispositivo serial associado ao One-Channel Hub que será gravado.
Para Linux e Mac, é possível verificar a porta serial por

```
ls /dev/cu*
```

então grave usando `idf.py`, substitua a **port**

```
idf.py -p port flash
```

Se um **erro de permissão** for retornado, verifique se o usuário atual faz parte do grupo dialout. Caso não faça, execute o seguinte, reinicie a máquina Linux e tente novamente:

```
sudo usermod -a -G dialout $USERNAME
```

Em uma configuração **Windows**, supondo que o dispositivo esteja montado como COM14, o comando acima ficaria assim:

```
idf.py -p COM14 flash
```

Inicie o console do monitor para ver os logs (opcional).

```
idf.py -p port monitor
```

### Gravar com esptool

Se não estiver usando o ambiente completo do ESP-IDF, também é possível gravar os arquivos binários fornecidos usando o utilitário `esptool`.

https://docs.espressif.com/projects/esptool/en/latest/esp32/

```cpp
// Merged version
esptool.py --chip esp32s3 -p port -b 460800 --before=default_reset --after=hard_reset write_flash --flash_mode dio --flash_freq 80m --flash_size 8MB 0x0 Indicator_Lorahub_v1.0.0.bin
// Seperated version
esptool.py --chip esp32s3 -p port -b 460800 --before=default_reset --after=hard_reset write_flash --flash_mode dio --flash_freq 80m --flash_size 8MB 0x0 bootloader.bin 0x10000 indicator_lorahub.bin 0x8000 partition-table.bin
```

Em uma configuração Windows, o comando esptool para gravação seria:

```cpp
// Merged version
py -m esptool --chip esp32s3 -p COM -b 460800 --before=default_reset --after=hard_reset write_flash --flash_mode dio --flash_freq 80m --flash_size 8MB 0x0 Indicator_Lorahub_v1.0.0.bin
// Seperated version
py -m esptool --chip esp32s3 -p COM -b 460800 --before=default_reset --after=hard_reset write_flash --flash_mode dio --flash_freq 80m --flash_size 8MB 0x0 bootloader.bin 0x10000 indicator_lorahub.bin 0x8000 partition-table.bin
```

Substitua `port` e `COM` pelo nome da porta serial usada. Se a conexão falhar, veja a seção [Troubleshooting](https://docs.espressif.com/projects/esptool/en/latest/esp32/troubleshooting.html#troubleshooting).

### Gravar com esptool-JS

O [esptool online](https://espressif.github.io/esptool-js/) é recomendado para gravação.

**Passo 1**: Defina o Baud rate para 115200 e conecte à porta correta.

**Passo 2**: Escolha o arquivo bin e preencha o endereço de gravação correspondente.

- Versão mesclada:

|**Endereço de Gravação**|**Arquivo**|
|----|----|
|0x0|Indicator_Lorahub_v1.0.0.bin|

- Versão separada:

|**Endereço de Gravação**|**Arquivo**|
|----|----|
|0x0|bootloader.bin|
|0x10000|indicator_lorahub.bin|
|0x8000|partition-table.bin|

## Configuração do Indicator

**Passo 1**. Entre na página **Wi-Fi** para configurar a rede, selecione o SSID apropriado e digite a senha.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/pics/image.png" style={{width:480, height:'auto'}}/></div>

**Passo 2**. Configure os parâmetros na página **LoRa Gateway**, defina o LNS e a porta como "1700", clique em "configure" e depois clique em "reboot".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/62.png" style={{width:480, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/pics/image1.png" style={{width:480, height:'auto'}}/></div>

## Conectar à The Things Network (TTN)

**Passo 1:** Faça login na plataforma TTN e vá para o `console`, clique em `Gateways->Register gateway`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/pics/image2.png" style={{width:600, height:'auto'}}/></div>

**Passo 2:** Insira o `Gateway ID` do Indicator em `Gateway EUI`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/pics/image3.png" style={{width:600, height:'auto'}}/></div>

**Passo 3:** Depois de preencher o nome personalizado do gateway, selecione o plano de Frequência correspondente (que deve corresponder à configuração no Indicator) e clique em `Register gateway`. Neste ponto, o gateway de canal único do Indicator foi adicionado ao TTN.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/pics/image4.png" style={{width:600, height:'auto'}}/></div>

**Passo 4:** Após adicionar o gateway de canal único Indicator, clique em `Applications` para adicionar um dispositivo. Neste exemplo, o `SenseCAP T1000 Tracker` é usado como dispositivo nó. Para etapas detalhadas de conexão, consulte o Wiki: https://wiki.seeedstudio.com/pt-br/SenseCAP_T1000_tracker_TTN/. Em `End devices`->`General settings`->`Network layer`->`Advanced MAC settings`, você precisa definir `Adaptive data rate (ADR)` para **Static mode**, e o `ADR data rate index` precisa ser configurado de acordo com o `spreading factor` definido no Indicator. Por exemplo, se o `spreading factor` estiver configurado para 9, o `ADR data rate index` deve ser definido como 3, e de forma semelhante para outros valores.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/pics/image5.png" style={{width:600, height:'auto'}}/></div>

**Passo 5:** Como mostrado abaixo, você pode verificar os `EVENT DETAILS` nos dados em tempo real do dispositivo nó adicionado para visualizar os logs relacionados. Você pode ver que o dispositivo nó relata dados por meio do novo gateway de canal único Indicator.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/pics/image6.png" style={{width:600, height:'auto'}}/></div>

## Conectar ao ChirpStack

**Passo 1:** Instale o ChirpStack consultando <a  href="https://www.chirpstack.io/docs/getting-started/debian-ubuntu.html" target="_blank"><span> Setup ChirpStack on Ubuntu/Debian</span></a>.

**Passo 2:** Após instalar o ChirpStack, você precisa adicionar uma definição de região de canal único ao diretório `/etc/chirpstack`.

Neste Wiki, criamos uma definição de canal único na banda EU868, usando o canal 868,1 MHz.
<details>
<summary>region_eu868_1ch.toml</summary>

```toml
# This file contains an example EU868 configuration.
[[regions]]

  # ID is an user-defined identifier for this region.
  id="eu868_1ch"

  # Description is a short description for this region.
  description="EU868_1CH"

  # Common-name refers to the common-name of this region as defined by
  # the LoRa Alliance.
  common_name="EU868"


  # Gateway configuration.
  [regions.gateway]

    # Force gateways as private.
    #
    # If enabled, gateways can only be used by devices under the same tenant.
    force_gws_private=false


    # Gateway backend configuration.
    [regions.gateway.backend]

      # The enabled backend type.
      enabled="mqtt"

      # MQTT configuration.
      [regions.gateway.backend.mqtt]

        # Topic prefix.
        #
        # The topic prefix can be used to define the region of the gateway.
        # Note, there is no need to add a trailing '/' to the prefix. The trailing
        # '/' is automatically added to the prefix if it is configured.
        topic_prefix="eu868"

        # MQTT server (e.g. scheme://host:port where scheme is tcp, ssl or ws)
        server="tcp://$MQTT_BROKER_HOST:1883"

        # Connect with the given username (optional)
        username=""

        # Connect with the given password (optional)
        password=""

        # Quality of service level
        #
        # 0: at most once
        # 1: at least once
        # 2: exactly once
        #
        # Note: an increase of this value will decrease the performance.
        # For more information: https://www.hivemq.com/blog/mqtt-essentials-part-6-mqtt-quality-of-service-levels
        qos=0

        # Clean session
        #
        # Set the "clean session" flag in the connect message when this client
        # connects to an MQTT broker. By setting this flag you are indicating
        # that no messages saved by the broker for this client should be delivered.
        clean_session=false

        # Client ID
        #
        # Set the client id to be used by this client when connecting to the MQTT
        # broker. A client id must be no longer than 23 characters. If left blank,
        # a random id will be generated by ChirpStack.
        client_id=""

        # Keep alive interval.
        #
        # This defines the maximum time that that should pass without communication
        # between the client and server.
        keep_alive_interval="30s"

        # CA certificate file (optional)
        #
        # Use this when setting up a secure connection (when server uses ssl://...)
        # but the certificate used by the server is not trusted by any CA certificate
        # on the server (e.g. when self generated).
        ca_cert=""

        # TLS certificate file (optional)
        tls_cert=""

        # TLS key file (optional)
        tls_key=""

  # Region specific network configuration.
  [regions.network]

    # Installation margin (dB) used by the ADR engine.
    #
    # A higher number means that the network-server will keep more margin,
    # resulting in a lower data-rate but decreasing the chance that the
    # device gets disconnected because it is unable to reach one of the
    # surrounded gateways.
    installation_margin=10

    # RX window (Class-A).
    #
    # Set this to:
    # 0: RX1 / RX2
    # 1: RX1 only
    # 2: RX2 only
    rx_window=0

    # RX1 delay (1 - 15 seconds).
    rx1_delay=1

    # RX1 data-rate offset
    rx1_dr_offset=0

    # RX2 data-rate
    rx2_dr=0

    # RX2 frequency (Hz)
    rx2_frequency=869525000

    # Prefer RX2 on RX1 data-rate less than.
    #
    # Prefer RX2 over RX1 based on the RX1 data-rate. When the RX1 data-rate
    # is smaller than the configured value, then the Network Server will
    # first try to schedule the downlink for RX2, failing that (e.g. the gateway
    # has already a payload scheduled at the RX2 timing) it will try RX1.
    rx2_prefer_on_rx1_dr_lt=0

    # Prefer RX2 on link budget.
    #
    # When the link-budget is better for RX2 than for RX1, the Network Server will first
    # try to schedule the downlink in RX2, failing that it will try RX1.
    rx2_prefer_on_link_budget=false

    # Downlink TX Power (dBm)
    #
    # When set to -1, the downlink TX Power from the configured band will
    # be used.
    #
    # Please consult the LoRaWAN Regional Parameters and local regulations
    # for valid and legal options. Note that the configured TX Power must be
    # supported by your gateway(s).
    downlink_tx_power=-1

    # ADR is disabled.
    adr_disabled=true

    # Minimum data-rate.
    min_dr=5

    # Maximum data-rate.
    max_dr=5

    # Add the following after min_dr/max_dr configuration 
    enabled_uplink_channels=[0] 
```

</details>

Você também pode personalizar sua região de canal único, veja <a  href="https://semtech.my.salesforce.com/sfc/p/#E0000000JelG/a/RQ000005dqn4/HobR.KifrmqWNy0bUjfceXByxDWzvwtR37OE5EouVu8" target="_blank"><span> LoRaWAN theory for the One-Channle Hub</span></a>.

**Passo 3:** Modifique o `/etc/chirpstack/chirpstack.toml` para habilitar a nova região definida.

```toml
enabled_regions={
  ...,
  "eu868_1ch",
  ...,
}
```

**Passo 4:** Faça login no console do ChirpStack e adicione o gateway de canal único.

Antes de adicionar um gateway, verifique se a região de canal único foi habilitada com sucesso.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Single_Channel_Gateway/single-channel-1.png" alt="pir" width={600} height="auto" /></p>

Se a região de canal único estiver habilitada com sucesso, adicione o gateway de canal único ao ChirpStack.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Single_Channel_Gateway/single-channel-2.png" alt="pir" width={600} height="auto" /></p>

**Passo 5:** Configure os parâmetros na página LoRa Gateway, defina o endereço para o endereço do seu servidor ChirpStack, clique em `configure` e depois clique em `reboot`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/pics/image1.png" alt="pir" width={600} height="auto" /></p>

Após a reinicialização, você poderá ver o status mudar para online no console do ChirpStack.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Single_Channel_Gateway/single-channel-3.png" alt="pir" width={600} height="auto" /></p>

**Passo 6:** Podemos otimizar o tempo de conexão do dispositivo final usando a mesma taxa de dados com um gateway de canal único.

Referindo-se à configuração do gateway de canal único `SF7 BW125`, ajustamos a taxa de dados do T1000-A para `DR5`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Single_Channel_Gateway/single-channel-4.png" alt="pir" width={600} height="auto" /></p>

Depois de configurar a taxa de dados do T1000-A, precisamos criar um perfil de dispositivo para ele.

Selecione `EU868` para a região e `EU868_1CH` para a configuração da região.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Single_Channel_Gateway/single-channel-5.png" alt="pir" width={600} height="auto" /></p>

Como você pode ver na figura abaixo, é possível ver que o T1000-A enviou dados com sucesso para o ChirpStack por meio do gateway de canal único.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Single_Channel_Gateway/single-channel-6.png" alt="pir" width={600} height="auto" /></p>

## Recursos

- [Firmware One Channel Hub para SenseSAP Indicator](https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/Indicator_single_channel_gateway_20241031.zip)
- [Repositório Github](https://github.com/Lora-net/one_channel_hub)
- [Nota de Aplicação da Semtech](https://semtech.my.salesforce.com/sfc/p/#E0000000JelG/a/RQ000005dqn4/HobR.KifrmqWNy0bUjfceXByxDWzvwtR37OE5EouVu8)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
