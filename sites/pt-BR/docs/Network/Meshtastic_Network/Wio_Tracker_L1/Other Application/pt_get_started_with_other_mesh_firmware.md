---
description: Guia para gravar o firmware MeshCore no Wio Tracker L1 Pro via Web USB ou arrastar‑e‑soltar, junto com a configuração do app para região LoRa, GPS e envio de mensagens.
title: Introdução ao MeshCore no Wio Tracker L1 Pro
keywords:
  - Meshcore
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.webp
slug: /get_started_with_other_mesh_firmware
sku: 114993648,114993649,114993653,114993654
sidebar_position: 1
last_update:
  date: 3/4/2026
  author: Michelle Huang
createdAt: '2026-02-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/get_started_with_other_mesh_firmware/
---



## Gravação de Firmware

### Método 1 via Web Flasher

Conecte seu dispositivo ao computador com um cabo USB. Certifique-se de que o cabo suporta transmissão de dados.

:::warning
Mantenha o cabo USB conectado durante a transmissão de dados, caso contrário o dispositivo pode ser danificado.
:::

Acesse o [Meshcore Web Flasher](https://flasher.meshcore.co.uk/).

Escolha `Seeed Studio Wio Tracker L1 Pro` no grupo `Community Firmware`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/L1ProMeshcoreSelection.png" alt="pir" width={800} height="auto" /></p>

Escolha `Companion Bluetooth`. Dispositivos gravados com o firmware Companion Bluetooth podem ser conectados ao APP. Se você quiser gravar outro firmware, por favor [clique aqui](https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md) para ver o tutorial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/BluetoothCompanion.png" alt="pir" width={800} height="auto" /></p>

#### Apagar Flash

Clique em `Enter DFU Mode`, escolha a porta serial chamada "L1 Pro" ou "TinyUSB serial". Depois clique em `Erase Flash` e escolha a porta serial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSe.png" alt="pir" width={800} height="auto" /></p>

Se você clicou em `Erase Flash` mas não houve resposta, clique em `Enter DFU` novamente e então clique em `Erase Flash` para garantir que entrou no modo DFU com sucesso.

Se você vir "Flashing erase firmware:100%", o dispositivo foi apagado com sucesso.

<p style={{textAlign: 'center'}}><img src=" https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSuccess.png" alt="pir" width={800} height="auto" /></p>

#### Gravar Firmware

Clique em `Enter DFU Mode`, escolha a porta serial chamada "L1 Pro" ou "TinyUSB" serial. Depois clique em `Flash` e escolha a porta serial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSe.png" alt="pir" width={800} height="auto" /></p>

Se você clicou em `Flash` mas não houve resposta, clique em `Enter DFU` novamente e então clique em `Flash` para garantir que entrou no modo DFU com sucesso.

Quando a barra de progresso estiver completamente preenchida, isso indica que o Flash foi concluído. Em seguida, o dispositivo será reiniciado automaticamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashProgress.png" alt="pir" width={800} height="auto" /></p>

### Método 2 Arrastar e Soltar

Conecte seu dispositivo ao computador com um cabo USB. Certifique-se de que o cabo suporta transmissão de dados.

:::warning
Mantenha o cabo USB conectado durante a transmissão de dados, caso contrário o dispositivo pode ser danificado.
:::

Acesse o [Meshcore Web Flasher](https://flasher.meshcore.co.uk/).

Escolha `Seeed Studio Wio Tracker L1 Pro` no grupo `Community Firmware`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/L1ProMeshcoreSelection.png" alt="pir" width={800} height="auto" /></p>

Escolha `Companion Bluetooth`. Dispositivos gravados com o firmware Companion Bluetooth podem ser conectados ao APP. Se você quiser gravar outro firmware, por favor [clique aqui](https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md) para ver o tutorial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/BluetoothCompanion.png" alt="pir" width={800} height="auto" /></p>

#### Apagar Flash

Baixe o arquivo UF2.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EraseUF2.png" alt="pir" width={800} height="auto" /></p>

Dê um clique duplo no botão RST para entrar manualmente no modo DFU. Você verá um disco chamado `TRACKER L1` aparecer após 10~15 s.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/ManualDFU.png" alt="pir" width={800} height="auto" /></p>

Arraste o arquivo UF2 baixado para o disco que apareceu.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/DragDrop.png" alt="pir" width={800} height="auto" /></p>

O disco desaparecerá após o firmware ser gravado com sucesso. Neste momento não há firmware no dispositivo, portanto o dispositivo `NÃO` será reiniciado automaticamente.

#### Gravar Firmware

Escolha a versão mais recente do firmware.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/VersionSelection.png" alt="pir" width={800} height="auto" /></p>

Baixe o arquivo UF2.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/CompanionUF2Download.png" alt="pir" width={800} height="auto" /></p>

Dê um clique duplo no botão RST para entrar manualmente no modo DFU. Você verá um disco chamado `TRACKER L1` aparecer após 10~15 s.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/ManualDFU.png" alt="pir" width={800} height="auto" /></p]

Arraste o arquivo UF2 baixado para o disco que apareceu.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/L1FlashDragDrop.png" alt="pir" width={800} height="auto" /></p>

O disco desaparecerá após o firmware ser gravado com sucesso. Neste momento não há firmware no dispositivo, portanto o dispositivo NÃO será reiniciado automaticamente.

## Configuração

### Ligar o dispositivo

Levante a chave de energia para ligá-lo.

:::tip
Se o dispositivo não responder quando você pressionar o botão, por favor carregue-o primeiro. Não use carregador de carga rápida.
:::

### Obter o APP

Baixe pela Google Store ou Apple Store. Ou [clique aqui](https://meshcore.co.uk/apps.html) para obter o Meshcore APP.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/MeshcoreAPP.png" alt="pir" width={300} height="auto" /></p>

### Conectar via App

Clique em `Connect` e escolha o dispositivo de destino. O ID de dispositivo padrão é `Meshcore-MAC Address`. O endereço MAC pode ser visto na etiqueta na parte inferior do dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/DeviceConnectAn.png" alt="pir" width={600} height="auto" /></p>

Digite o código PIN mostrado na tela do dispositivo e então clique em `Pair` para conectar o dispositivo.

:::tip
Se a conexão falhar, abra a lista de Bluetooth do seu telefone e `forget` ou `Unpair` o dispositivo. Depois tente conectar novamente.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/Unpair.jpg" alt="pir" width={300} height="auto" /></p>
:::

### Conectar via interface web（BLE）

1. Abra o [MeshCore Web App](https://app.meshcore.nz/) e clique no ícone **Settings**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue1.png" alt="pir" width={600} height="auto" /></p>

2. Selecione a aba **BLE** e depois clique em **Scan Now**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue2.png" alt="pir" width={600} height="auto" /></p>

3. No pop-up de Bluetooth do sistema, selecione seu dispositivo (por exemplo, MeshCore-xxxxxx) e clique em **Pair**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue3.png" alt="pir" width={600} height="auto" /></p>

4. Quando solicitado, insira a chave de acesso Bluetooth mostrada na tela do dispositivo e clique em **OK**. Esta chave de acesso não é `123456`.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue4.png" alt="pir" width={600} height="auto" /></p>

5. Aguarde até que o status mude para conectado e seu nó apareça na interface do MeshCore.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue5.png" alt="pir" width={600} height="auto" /></p>

### Configurar o LoRa

Para começar a se comunicar pela malha, você deve definir sua região. Essa configuração controla qual faixa de frequência seu dispositivo usa e deve ser ajustada de acordo com sua localização regional.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/SetRegion.png" alt="pir" width={600} height="auto" /></p>

Em seguida, reinicie o dispositivo, caso contrário a configuração não terá efeito.

**Lista de Regiões**

|**Código da Região**|**Descrição**|**Faixa de Frequência (MHz)**|**Ciclo de Trabalho (%)**|**Limite de Potência (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Não definido|N/D|N/D|N/D|
|US|Estados Unidos|902.0 - 928.0|100|30|
|EU_868|União Europeia 868 MHz|869.4 - 869.65|10|27|

Agora que você definiu a região LoRa no seu dispositivo, você pode continuar configurando qualquer [parâmetro LoRa](https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md#5-general) para atender às suas necessidades.

### Configurar GPS

Se você quiser usar GPS, certifique-se de ativá-lo.

Você pode ir em APP `Position Settings` para ativar o GPS. Ou você pode ir à página de GPS do dispositivo e pressionar o joystick de quatro direções para ligar ou desligar o GPS.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/GPSSetting.png" alt="pir" width={500} height="auto" /></p>

### Configurar Buzzer

Pressione o botão User quatro vezes para controlar o buzzer ligando ou desligando.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/User.png" alt="pir" width={500} height="auto" /></p>

## Transmissão de Mensagens

Se você tiver dois dispositivos compatíveis, e não houver muitos usuários MeshCore perto de você, grave ambos com o firmware BLE Companion para que você possa usar seus dispositivos para se comunicar com amigos e familiares próximos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/Frame.png" alt="pir" width={900} height="auto" /></p>

### Anúncio

MeshCore permite que você transmita manualmente seu nome, posição e chave pública de criptografia, que também é assinada para evitar falsificação. Quando você clica no botão de anúncio, ele transmite esses dados via LoRa. MeshCore chama isso de Anúncio. Existem duas maneiras de anunciar, "zero hop" e "flood".

- **Zero hop** significa que o seu anúncio é transmitido para qualquer pessoa que possa ouvi-lo, e é só isso.
- **Flooded** significa que ele é transmitido e então repetido por todos os repetidores que o ouvirem.

Você pode enviar anúncios no APP. Você também pode enviar anúncios diretamente na página de anúncio do dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/Advert.png" alt="pir" width={500} height="auto" /></p>

### Mensagem Pública

Depois de configurar o LoRa, você pode enviar mensagens no canal primário. Todas as pessoas próximas na mesma faixa de frequência irão ouvi-las.

### Mensagem Privada

Os dois dispositivos só estabelecem uma conexão quando ambos tiverem recebido o anúncio um do outro.

## FAQ

### Dispositivo brickado & Instalação do Bootloader

**Descrição:**

O dispositivo não está respondendo, sem LED, não consegue parear com seu app. Se você achar que o dispositivo está completamente morto após gravar seu próprio firmware, você também pode tentar reinstalar o bootloader.

:::danger note
Quando estiver gravando o bootloader, certifique-se de que a conexão do cabo esteja estável e **NÃO** o desconecte durante o processo de gravação.
:::

- Passo 1: [Clique aqui para baixar o Bootloader](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio_tracker_l1_bootloader.uf2)

- Passo 2: Entre no modo DFU

  Dê um duplo clique no botão RST para entrar no modo DFU. O disco com o nome "Tracker L1" irá aparecer.

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1RstButton.png" alt="pir" width={300} height="auto" /></p>

- Passo 3: Cole o arquivo do bootloader

  Substitua todos os arquivos no disco pelo arquivo de bootloader baixado.

- Passo 4: Grave o firmware

  Quando você tiver concluído os passos acima, poderá seguir este [passo](https://wiki.seeedstudio.com/pt-br/get_started_with_other_mesh_firmware/#flash-firmware-1) para gravar o firmware do aplicativo. Pode ser necessário [entrar no modo DFU manualmente](https://wiki.seeedstudio.com/pt-br/get_started_with_meshtastic_wio_tracker_l1/#unable-to-enter-dfu--entering-dfu-mode-manually)

### Não é possível entrar em DFU & Entrando no modo DFU manualmente

Conecte o dispositivo ao seu PC, pressione duas vezes o botão `Reset`. O LED amarelo permanecerá aceso, e uma nova unidade USB chamada `Tracker L1` aparecerá no seu PC.

### Saindo do modo DFU

Pressione o botão `User` uma vez para sair do modo DFU.

### Dispositivo desliga automaticamente

#### Descrição

- Após o dispositivo ligar, ele irá desligar ou reiniciar automaticamente depois de um tempo.
- O log da porta serial executa por um tempo e então para.

 Isso possivelmente é causado por reiniciar ou desligar manualmente e à força o dispositivo quando ele está nos seguintes estados: sem terminar o processo de transmissão de mensagens, estando em configuração......

#### Solução de Problemas

[Flash Erase](https://wiki.seeedstudio.com/pt-br/get_started_with_other_mesh_firmware/#flash-erase-1) o firmware

### Restauração de Fábrica

Se você quiser restaurar as configurações padrão, pode fazer a restauração de fábrica. Existem dois métodos para você fazer uma restauração de fábrica.

- [Flash Erase](https://wiki.seeedstudio.com/pt-br/get_started_with_other_mesh_firmware/#flash-erase-1) o firmware

- Clique no botão `Factory Reset` no app. O dispositivo irá reiniciar automaticamente com a configuração de fábrica.
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FactoryReset.jpg" alt="pir" width={400} height="auto" /></p>

### Qualidade do Sinal

- **SNR** reflete a qualidade do link de comunicação. Dispositivos normais geralmente operam acima de -7 dB. Um dispositivo com SNR inferior a -10 dB indica desempenho ruim.

- **RSSI** é determinado conjuntamente pelo dispositivo e seu ambiente ao redor. Um dispositivo normal geralmente opera acima de -110 dBm. Um dispositivo com RSSI inferior a -115 dBm é considerado como tendo desempenho ruim.

    Para obter o melhor efeito de sinal, utilize o dispositivo em uma área aberta, desobstruída e com interferência mínima.

### Antena Compatível

Se você precisar substituir a antena do L1 Pro, [clique aqui](https://www.seeedstudio.com/LoRa-Antenna-Kit-for-reTerminal-DM-p-5714.html) para obter uma.

## Recursos

- [Bootloader](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio_tracker_l1_bootloader.uf2)
- [Arquivo de referência para impressão 3D (V1)](https://www.printables.com/model/1355571-wio-tracker-l1-pro-for-meshtastic-enclosure-casing)
- [Arquivo de referência para impressão 3D (V2 Novo Joystick de quatro direções)](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1pro%203D%20Enclosure.zip)
- [Desafio de Design de Caixa do L1](https://www.hackster.io/contests/SeeedMeshtasticDeviceDesign2025/hardware_applications#challengeNav)
- [Arquivo de Contorno](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Wio%20Tracker%20L1%20outline.dxf)
- [Certificação TELEC](https://files.seeedstudio.com/Seeed_Certificate/documents_certificate/WioL1series-TELEC.pdf)
- [Certificação FCC](https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20FCC%20Certification.pdf)
- [Certificação CE](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20CE%20Certification.pdf)
- [Teste de Consumo de Energia e Cálculo da Vida Útil da Bateria](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20Power%20Consumption%20Test%20and%20Battery%20Life%20Calculation.xlsx)
