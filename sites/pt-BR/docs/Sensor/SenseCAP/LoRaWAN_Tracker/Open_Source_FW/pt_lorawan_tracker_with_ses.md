---
description: Comece a usar o SenseCAP Card Tracker T1000-E para LoRaWAN via SES
title: Primeiros Passos com o SES
keywords:
  - Tracker
image: https://files.seeedstudio.com/wiki/SenseCAP/LoRaWAN_Tracker/lorawan_opensource.webp
slug: /open_source_lorawan
sidebar_position: 3
last_update:
  date: 9/1/2026
  author: Advent Jiang
createdAt: '2025-01-09'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/open_source_lorawan/
---


## Preparação

:::caution note
Antes de gravar o firmware, certifique-se de que seu dispositivo é a versão `T1000-E for LoRaWAN` e não grave outro firmware Meshtastic ou MeshCore neste modelo de tracker, pois isso pode fazer com que o dispositivo pare de funcionar completamente.
:::

### Preparação de Hardware

- SenseCAP T1000-E x 1
- Cabo USB x 1
- Computador x 1

### Preparação de Software

Antes de começar o desenvolvimento, são necessárias as seguintes ferramentas de software.

#### SEGGER Embedded Studio (SES)

SES é uma solução tudo‑em‑um para gerenciar, compilar, testar e implantar aplicações embarcadas. Isso significa operações de desenvolvimento suaves e eficientes graças à sua ampla gama de recursos. O poderoso gerenciador de projetos permite o gerenciamento de projetos grandes e pequenos. Os recursos de controle de versão possibilitam a implantação automática de aplicações.

Baixe o pacote de instalação correspondente de acordo com o seu sistema operacional.

<a  href="https://www.segger.com/products/development-tools/embedded-studio/" target="_blank"><span>SEGGER Embedded Studio (SES)-Download</span></a>

:::tip
É recomendado usar a versão 5.68.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/5.68version.png" alt="pir" width={800} height="auto" /></p>

#### nRF5 SDK

O nRF5 SDK fornece um ambiente de desenvolvimento rico para dispositivos da Série nRF5, incluindo uma ampla seleção de drivers, bibliotecas e exemplos para periféricos, SoftDevices e protocolos de rádio proprietários.

<a  href="https://www.nordicsemi.com/Products/Development-software/nRF5-SDK/Download#infotabs" target="_blank"><span>nRF5 SDK-Download</span></a>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/SDK_version.png" alt="pir" width={800} height="auto" /></p>

#### Pacote de Exemplo Seeed T1000-E

A Seeed fornece um projeto de exemplo para que os desenvolvedores comecem mais rapidamente. Este exemplo inclui comunicação LoRaWAN, aquisição de informações de posicionamento, aquisição de dados de sensores onboard, etc.

<a  href="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Seeed_T1000_E_Dev_Board_Alpha-main.zip" target="_blank"><span>Seeed Example-Download</span></a>

**Adicionar o arquivo de Exemplo Seeed ao nRF5 SDK**

Copie o `Seeed T1000-E Example file` para o seguinte caminho do nRF5 SDK:
`.../nRF5_SDK_17.1.0_ddde560/examples/ble_peripheral/`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/file-path.png" alt="pir" width={600} height="auto" /></p>

### Verificar as informações do Bootloader

Antes de começar, verifique primeiro as informações do bootloader.

- **Passo 1:** Entrar no modo DFU

 Conecte o cabo USB ao seu PC, mantenha pressionado o botão do dispositivo e, em seguida, conecte rapidamente o cabo de carregamento; um driver chamado `T1000-E` deve ser exibido.

:::danger note
Se nenhuma janela de driver aparecer após pressionar e segurar o botão do dispositivo ao conectar o cabo, toque rapidamente duas vezes no cabo de carregamento, como mostrado na operação abaixo.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/dfu-mode2.gif" alt="pir" width={400} height="auto" /></p>

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/e-driver.png" alt="pir" width={600} height="auto" /></p>

- **Passo 2:** Verificar o INFO_UF2.TXT

 As informações corretas do bootloader são mostradas na figura:

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/bootloader-info.png" alt="pir" width={600} height="auto" /></p>

### Executar o Projeto de Exemplo LoRaWAN

**Importar Projeto de Exemplo**

Aqui tomamos o projeto `08_ses_lorawan_gnss` como exemplo.
Abra o SES e abra o projeto de exemplo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/opensolution.png" alt="pir" width={800} height="auto" /></p>

**Modificar os Parâmetros LoRaWAN**

Defina REGION/DEVICE_EUI/JOIN_EUI/APP_KEY em `lorawan_key_config.h`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/keys-define.png" alt="pir" width={800} height="auto" /></p>

**Compilar o projeto modificado**

Selecione o projeto necessário no Project Explorer.<br/>
Escolha `Build` > `Build` ou pressione `F7`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/build-done.png" alt="pir" width={800} height="auto" /></p>

#### Converter para arquivo UF2

Depois que a compilação for bem‑sucedida, haverá um arquivo `.hex` na pasta de saída. Incluímos um script Python `uf2conv.py` na pasta `Firmware` para converter o arquivo hex em arquivo uf2.

Navegue até o caminho do arquivo e execute o script:

```py
python uf2conv.py filename.hex -c -f 0xADA52840 -o filename.uf2
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/convert-uf2.png" alt="pir" width={600} height="auto" /></p>

#### Gravar o Firmware da Aplicação

- **Passo 1:** Entrar no modo DFU

 Conecte o cabo USB ao seu PC, mantenha pressionado o botão do dispositivo e, em seguida, conecte o cabo de carregamento; um driver chamado `T1000-E` deve ser exibido.

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/e-driver.png" alt="pir" width={600} height="auto" /></p>

- **Passo 2:** Gravar o Firmware da Aplicação LoRaWAN

 Copie o arquivo `UF2` para a unidade DFU. O firmware deve ser gravado depois que o arquivo for copiado e o dispositivo reiniciar.

### Conectar a um LNS

Nesta seção, conectaremos o dispositivo ao LNS (aqui usamos o TTN como exemplo) para visualizar os dados e verificar a localização via TTN Mapper.

Para começar, registre uma conta na The Things Industries ou na The Things Network.

#### Passo 1: Criar uma aplicação

Navegue até a página Applications e clique em "+Create application".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application.png" alt="pir" width={800} height="auto" /></p>

Digite um Application ID e clique em Create Application para salvar suas alterações.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application1.png" alt="pir" width={800} height="auto" /></p>

#### Passo 2: Registrar o Dispositivo

Clique em "Register end device".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device.png" alt="pir" width={800} height="auto" /></p>

Defina os seguintes parâmetros:

**Frequency Plan**: Selecione o plano de frequência apropriado para a região de destino

**LoRaWAN version**: LoRaWAN Specification 1.0.4

**Regional Parameters version**: PR002 Regional Parameters V1.0.3

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device1.png" alt="pir" width={800} height="auto" /></p>

:::tip
JoinEUI/DevEUI/APPEUI: São os que você definiu no arquivo 'lorawan_key_config.h' na configuração anterior.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/keys-define.png" alt="pir" width={600} height="auto" /></p>
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device5.png" alt="pir" width={800} height="auto" /></p>

**Verificar Dados em Tempo Real**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/payload-data.png" alt="pir" width={800} height="auto" /></p>

### Restaurar o Firmware de Fábrica

- Para usar novamente o firmware de fábrica, grave o firmware `t1000_e_dev_kit_11_lorawan_tracker.uf2`.
- Para usar a nuvem SenseCAP, é necessário importar as chaves SenseCAP escaneando o código QR no rótulo do dispositivo.
