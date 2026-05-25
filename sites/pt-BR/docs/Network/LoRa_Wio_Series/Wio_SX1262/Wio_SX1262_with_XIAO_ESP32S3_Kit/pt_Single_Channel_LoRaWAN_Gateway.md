---
description: Gateway LoRaWAN de Canal Único baseado em XIAO ESP32S3 & Kit Wio-SX1262
title: Gateway LoRaWAN de Canal Único
keywords:
  - XIAO ESP32S3
  - LoRa
  - Wio SX1262
  - Gateway de Canal Único
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png
slug: /wio_sx1262_xiao_esp32s3_for_single_channel_gateway
sku: 102010611
sidebar_position: 3
last_update:
  date: 10/09/2024
  author: Evelyn Chen
createdAt: '2024-10-12'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/wio_sx1262_xiao_esp32s3_for_single_channel_gateway/
---

# **Configurando o Kit XIAO ESP32S3 & Wio-SX1262 como Gateway LoRaWAN de Canal Único**

Gateways de canal único (chamados One-Channel Hub) são ferramentas de baixo custo que permitem aos usuários começar a explorar o mundo LoRa. Esses gateways podem receber pacotes LoRa em um fator de espalhamento e canal específicos e facilitar a troca desses pacotes com a rede. Devido ao seu baixo custo, muitos usuários começaram a construir seus próprios gateways de canal único para experimentar com LoRa.

O XIAO ESP32S3 como MCU host e o kit de rádio LoRa Wio-SX1262 podem ser configurados para funcionar como gateway de canal único. Este kit oferece uma solução prática para quem tem interesse em aprofundar-se na tecnologia LoRa e estabelecer conexões com o LNS (lora network server).

Este é o projeto no GitHub: [One Channel Hub](https://github.com/Seeed-Studio/one_channel_hub/tree/xiao-esp32s3-sx1262-bt-config).

## Gravar o Firmware

O firmware está preparado para instalação e vem pré-gravado no Kit XIAO ESP32S3 & Wio-SX1262 com case 3D. Se você quiser gravar o Kit XIAO ESP32S3 & Wio-SX1262 como Gateway LoRaWAN de Canal Único, basta fazer o download a partir da [bin library](https://github.com/Seeed-Studio/one_channel_hub/tree/xiao-esp32s3-sx1262-bt-config/bin).

:::tip
O Kit XIAO ESP32S3 & Wio-SX1262 com case 3D vem pré-gravado como um gateway LoRaWAN de Canal Único, pule para a próxima seção para [configuração](https://wiki.seeedstudio.com/pt-br/wio_sx1262_xiao_esp32s3_for_single_channel_gateway/#configuration-via-sensecraft-app).
:::

:::note
Este firmware é construído com:

- Selecionar a placa Seeed XIAO ESP32S3 Gateway
- Modificar o tamanho da Flash para 8 MB
- Habilitar Get config from flash
- Desabilitar Wi-Fi provisionning
- Desabilitar OLED Display

Uso:

- Habilitar/desabilitar configuração através do botão do usuário
- Nome de broadcast Bluetooth como "GW-XIAO-ESP32S3"
- Conectar via SenseCraft APP e configurar Wi-Fi/LoRa

:::

Se você não usa o ambiente completo ESP-IDF, também é possível gravar os arquivos binários fornecidos usando o utilitário **esptool**.

Clique para baixar o firmware:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/SenseCAP/seeed_xiao_esp32s3_one_chanel_hub_2024_12_09_01.rar" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> Download ⏬ </font></span></strong></a>
</div>

**Passo 1**: Baixe o Esptool, para mais informações consulte a [documentação do Esptool](https://docs.espressif.com/projects/esptool/en/latest/esp32/).

```python
pip install esptool
```

**Passo 2**: Conecte o XIAO ESP32S3 ao seu PC.

**Passo 3**: Navegue até o arquivo baixado e abra o terminal/Command, então execute os comandos **esptool.py**.

- Para Linux/macOS

```linux
esptool.py --chip esp32s3 -p port -b 460800 --before=default_reset --after=hard_reset write_flash --flash_mode dio --flash_freq 80m --flash_size 8MB 0x0 seeed_xiao_esp32s3_devkit_bootloader.bin 0x10000 seeed_xiao_esp32s3_devkit_lorahub.bin 0x8000 seeed_xiao_esp32s3_devkit_partition-table.bin
```

- Para Windows

```linux
py -m esptool --chip esp32s3 -p COM14 -b 460800 --before=default_reset --after=hard_reset write_flash --flash_mode dio --flash_freq 80m --flash_size 8MB 0x0 seeed_xiao_esp32s3_devkit_bootloader.bin 0x10000 seeed_xiao_esp32s3_devkit_lorahub.bin 0x8000 seeed_xiao_esp32s3_devkit_partition-table.bin
```

Substitua `port` pelo nome da porta serial usada. Se a conexão falhar, veja a seção [Troubleshooting](https://docs.espressif.com/projects/esptool/en/latest/esp32/troubleshooting.html#troubleshooting).

### Gravar com esp-idf

Identifique o dispositivo serial associado ao One-Channel Hub a ser gravado.
Para Linux e Mac, é possível verificar a porta serial por

```
ls /dev/cu*
```

depois grave usando `idf.py`, substitua a **port**

```
idf.py -p port flash
```

Se for retornado um **erro de permissão**, verifique se o usuário atual faz parte do grupo dialout. Se não, faça o seguinte, reinicie a máquina Linux e tente novamente:

```
sudo usermod -a -G dialout $USERNAME
```

Em uma configuração **Windows**, supondo que o dispositivo esteja montado como COM14, o comando acima seria algo como:

```
idf.py -p COM14 flash
```

Inicie o console do monitor para ver os logs (opcional).

```
idf.py -p port monitor
```

### Gravar com esptool

Se não estiver usando o ambiente completo ESP-IDF, você pode simplesmente baixar os arquivos binários fornecidos seguindo [a primeira seção](https://wiki.seeedstudio.com/pt-br/wio_sx1262_xiao_esp32s3_for_single_channel_gateway/#flash-firmware).

### Gravar com esptool-JS

[Online esptool](https://espressif.github.io/esptool-js/) é recomendado para gravação.

**Step1**: Defina a taxa de Baud para 115200 e conecte à porta correta.

**Step2**: Escolha o arquivo bin e preencha o endereço de flash correspondente.

|**Endereço de Flash**|**Arquivo**|
|----|----|
|0x0|seeed_xiao_esp32s3_devkit_bootloader.bin|
|0x10000|seeed_xiao_esp32s3_devkit_lorahub.bin|
|0x8000|seeed_xiao_esp32s3_devkit_partition-table.bin|

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/70.png" alt="pir" width={600} height="auto" /></p>

## Configuração via Sensecraft APP

### Configuração de WiFi & LoRaWAN

**Passo 1**: Baixe o App `SenseCraft`: [Download Link](https://sensecap-mate-download.seeed.cn/)

**Passo 2**: Conecte o Kit XIAO ESP32S3 & Wio-SX1262 à alimentação.

**Passo 3**: Siga as instruções no aplicativo para configurar o WiFi e o LoRaWAN.

- Registre-se e faça login no SenseCraft APP
- Navegue até `User` → `Device Bluetooth Configuration`
- Selecione `XIAO ESP32S3 & Wio-SX1262 Kit`
- Clique em `Device is ready for configuration`
- Pressione o botão do kit uma vez. Quando o LED começar a piscar, ele entrará no modo de emparelhamento Bluetooth.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/APPOperation.gif" alt="pir" width={300} height="auto" /></p>

**Passo 4**: Registre o Gateway LoRaWAN na The Things Network (TTN).

- crie uma conta e faça login em https://eu1.cloud.thethings.network/.
- Registre o gateway.
- Copie o `gateway EUI` correto para o TTN e também preencha o `frequency plan` e o `gateway ID` corretos.
- Reinicie o módulo gateway e aguarde cerca de 2 minutos. Depois você pode verificar o status de conexão do gateway.

## Configuração via ESP BLE prov

:::note
Se você quiser configurar o Wi-Fi usando **ESP BLE prov** e configurar o LoRaWAN usando o **web client**, precisa gravar [este firmware](https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/seeed_xiao_esp32s3_one_chanel_hub_20241016.zip). Observe que não é o mesmo firmware usado para configuração via aplicativo SenseCraft. Além disso, você pode configurar `Enable Wi-Fi provisioning` seguindo [Customize and Build Firmware](https://wiki.seeedstudio.com/pt-br/wio_sx1262_xiao_esp32s3_for_single_channel_gateway/#customize-and-build-firmware).
:::

### Configuração de Wi-Fi

**Passo 1**: Baixe o App `ESP BLE prov`:

- [para Android](https://play.google.com/store/apps/details?id=com.espressif.provble)
- [para IOS](https://apps.apple.com/in/app/esp-ble-provisioning/id1473590141)

Pressione o botão `RST` na placa e, em seguida, pressione o botão `BOOT`, o LED acenderá.

**Passo 2**: Conecte o XIAO ao seu PC e abra uma ferramenta de porta serial, como PuTTY, COMTOOL ou qualquer outra ferramenta de sua preferência.

**Passo 3**: Abra a comunicação do terminal

- Para `COMTOOL`:

(1). Selecione a porta serial correta e defina a taxa de baud para **115200**

(2). Vá para Terminal e abra a comunicação

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/23.png" alt="pir" width={500} height="auto" /></p>

- Para `PuTTY`:

(1). Selecione a linha serial correta e defina a taxa de baud para **115200**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/25.png" alt="pir" width={500} height="auto" /></p>

(2). Vá para Terminal e clique em 'Implicit CR in every LF'

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/26.png" alt="pir" width={500} height="auto" /></p>

**Passo 4**: Clique em 'Provison Device' no aplicativo ESP BLE prov

Uma vez conectado com sucesso, as informações da conexão Wi-Fi e o ID do gateway LoRa serão exibidos no terminal.

<div class="table-center">
<iframe width="700" height="600" src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/wifi.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="false"> </iframe>
</div>

:::tip
Por favor, anote essas informações, elas são úteis para a configuração do Lora.

1. Endereço IP: 192.168.1.44
2. Porta: 8000
3. Gateway EUI: 0xF09E9EFFFE20D02C

:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/24.png" alt="pir" width={600} height="auto" /></p>

A mensagem do encaminhador de pacotes LoRa, que está em formato Json, pode ser verificada no Terminal.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/27.png" alt="pir" width={400} height="auto" /></p>

### Configuração LoRaWAN

Como anotamos o endereço IP e a porta, a interface web está disponível em: `http://ip_address:8000`, e abra-a no navegador.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/28.png" alt="pir" width={400} height="auto" /></p>

A interface web permite configurar os seguintes parâmetros:

Parâmetros de canal:

- Frequência
- Spreading Factor
- Largura de banda

Servidor de rede LoRaWAN:

- Endereço
- Porta

Endereço do servidor SNTP: para obter a hora UTC

Há 2 botões na parte inferior do formulário de configuração:

`Configure`: quando pressionado, os parâmetros definidos no formulário HTML são gravados na memória flash (NVS).<br/>
`Reboot`: quando pressionado, um comando de reinicialização é acionado, o LoRaHub será reiniciado e a nova configuração será aplicada.

:::note
Observe que a configuração gravada na memória flash só é levada em consideração na próxima reinicialização.
:::

Tudo está configurado. Agora podemos conectar o kit XIAO ESP32S3 & SX1262 LoRa ao servidor de rede LoRa como TTN (The Things Network) e Chirpstack.

- [Conectar ao TTN](https://wiki.seeedstudio.com/pt-br/wio_sx1262_xiao_esp32s3_LNS_TTN/)
- [Conectar ao Chirpstack](https://wiki.seeedstudio.com/pt-br/wio_sx1262_xiao_esp32s3_LNS_Chirpstack/)

## Personalizar e compilar o firmware

Se você quiser redefinir a configuração, a instrução a seguir pode ajudá-lo a compilar o firmware por conta própria no ambiente ESP-IDF.

### Configurar ambiente

Este projeto é baseado no desenvolvimento Espressif ESP-IDF, consulte este [guia](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html#installation ) para configurar o ambiente.

#### Obter o ESP-IDF

```linux
mkdir -p ~/esp
cd ~/esp
git clone -b v5.2.1 --recursive https://github.com/espressif/esp-idf.git
```

#### Configurar ferramentas

```linux
cd esp-idf/
./install.sh
```

### Instalação do One Channel Hub

**Passo 1**: Clone o hub para o repositório local e navegue até o caminho do projeto.

```linux
git clone https://github.com/Seeed-Studio/one_channel_hub.git

cd ~/this_project_directory
```

**Passo 2**: Instale o driver necessário

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

### Compilar o firmware

**Passo 1**: Entre no diretório do lorahub.

```
cd lorahub
```

Prepare seu terminal Linux/MAC para compilar com ESP-IDF a partir da linha de comando. Esta etapa pode ser ignorada no Windows, pois a ferramenta instalada 'ESP-IDF x.x CMD' preparará o ambiente automaticamente.

```
. ~/esp/esp-idf/export.sh
```

Configure o alvo ESP32 para o qual será feita a compilação.

```
idf.py set-target esp32s3
```

Personalize a compilação se necessário:

```
idf.py menuconfig
```

(1) Defina o **tipo de placa**:

`LoRaWAN 1-CH HUB Configuration` → `Hardware Configuration` → `Board type` → `Seeed XIAO ESP32S3 Gateway`

A configuração padrão do tipo de rádio LoRa é `sx1262`.

Não se esqueça de desativar o Display OLED.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/21.png" alt="pir" width={800} height="auto" /></p>

(2) Defina o **tamanho da flash**:

`Serial flasher config` → `Flash size` → para XIAO ESP32S3 é `8MB`.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/22.png" alt="pir" width={800} height="auto" /></p>

 (3) Defina o **Wi-Fi Provisionning**:

- Defina o Wi-Fi Provisionning via **SenseCraft APP**:
 `LoRaWAN 1-CH HUB Configuration` → `WiFi Configuration` → `Disable WiFi Provisionning over BLE`

- Defina o Wi-Fi Provisionning via **ESP BLE prov**:
 `LoRaWAN 1-CH HUB Configuration` → `WiFi Configuration` → `Enable WiFi Provisionning over BLE`

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/100.png" alt="pir" width={800} height="auto" /></p>

Compile o projeto:

```
idf.py all
```

## Recursos

- [Firmware One Channel Hub para XIAO ESP32S3 & Wio-SX1262 Kit via SenseCraft APP](https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/seeed_xiao_esp32s3_one_chanel_hub_2024120201.zip)
- [Firmware One Channel Hub para XIAO ESP32S3 & Wio-SX1262 Kit via ESP BLE prov](https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/seeed_xiao_esp32s3_one_chanel_hub_20241016.zip)
- [Repositório Github](https://github.com/Seeed-Studio/one_channel_hub/tree/xiao-esp32s3-sx1262-bt-config)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
