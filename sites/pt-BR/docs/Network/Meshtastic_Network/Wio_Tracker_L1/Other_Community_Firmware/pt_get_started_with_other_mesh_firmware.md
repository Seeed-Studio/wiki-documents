---
description: Guia para gravar o firmware MeshCore no Wio Tracker L1 Pro via Web USB ou arrastar-e-soltar, junto com a configuração do app para região LoRa, GPS e envio de mensagens.
title: Primeiros passos com MeshCore no Wio Tracker L1 Pro
keywords:
  - Meshcore
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.webp
slug: /get_started_with_other_mesh_firmware
sku: 114993648,114993649,114993653,114993654
sidebar_position: 3
last_update:
  date: 3/4/2026
  author: Michelle Huang
createdAt: '2026-02-28'
updatedAt: '2026-04-03'
url: https://wiki.seeedstudio.com/pt-br/get_started_with_other_mesh_firmware/
---

## Gravação de firmware

### Método 1 via Web Flasher

Conecte seu dispositivo ao computador com um cabo USB. Certifique-se de que o cabo suporta transmissão de dados.

:::warning
Mantenha o cabo USB conectado durante a transmissão de dados, caso contrário o dispositivo pode ser danificado.
:::

Acesse o [Meshcore Web Flasher](https://meshcore.io/flasher).

Escolha `Seeed Studio Wio Tracker L1 Pro` no grupo `Community Firmware`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/L1ProMeshcoreSelection.png" alt="pir" width={800} height="auto" /></p>

Escolha `Companion Bluetooth`. Dispositivos gravados com o firmware Companion Bluetooth podem ser conectados ao APP. Se quiser gravar outro firmware, por favor [clique aqui](https://docs.meshcore.io/) para ver o tutorial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/BluetoothCompanion.png" alt="pir" width={800} height="auto" /></p>

#### Apagar Flash

Clique em `Enter DFU Mode`, escolha a porta serial chamada "L1 Pro" ou "TinyUSB serial". Em seguida, clique em `Erase Flash` e escolha a porta serial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSe.png" alt="pir" width={800} height="auto" /></p>

Se você clicou em `Erase Flash` mas não houve resposta, clique em `Enter DFU` novamente e depois clique em `Erase Flash` para garantir que entrou no modo DFU com sucesso.

Se você vir "Flashing erase firmware:100%", o dispositivo foi apagado com sucesso.

<p style={{textAlign: 'center'}}><img src=" https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSuccess.png" alt="pir" width={800} height="auto" /></p>

#### Gravar Firmware

Clique em `Enter DFU Mode`, escolha a porta serial chamada "L1 Pro" ou "TinyUSB" serial. Em seguida, clique em `Flash` e escolha a porta serial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSe.png" alt="pir" width={800} height="auto" /></p>

Se você clicou em `Flash` mas não houve resposta, clique em `Enter DFU` novamente e depois clique em `Flash` para garantir que entrou no modo DFU com sucesso.

Quando a barra de progresso estiver completamente preenchida, isso indica que o Flash foi concluído. Em seguida, o dispositivo será reiniciado automaticamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashProgress.png" alt="pir" width={800} height="auto" /></p>

### Método 2 Arrastar e Soltar

Conecte seu dispositivo ao computador com um cabo USB. Certifique-se de que o cabo suporta transmissão de dados.

:::warning
Mantenha o cabo USB conectado durante a transmissão de dados, caso contrário o dispositivo pode ser danificado.
:::

Acesse o [Meshcore Web Flasher](https://meshcore.io/flasher).

Escolha `Seeed Studio Wio Tracker L1 Pro` no grupo `Community Firmware`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/L1ProMeshcoreSelection.png" alt="pir" width={800} height="auto" /></p>

Escolha `Companion Bluetooth`. Dispositivos gravados com o firmware Companion Bluetooth podem ser conectados ao APP. Se quiser gravar outro firmware, por favor [clique aqui](https://docs.meshcore.io/) para ver o tutorial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/BluetoothCompanion.png" alt="pir" width={800} height="auto" /></p>

#### Apagar Flash

Baixe o arquivo UF2.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EraseUF2.png" alt="pir" width={800} height="auto" /></p>

Dê um clique duplo no botão RST para entrar manualmente no modo DFU. Você verá que um disco chamado `TRACKER L1` aparecerá após 10~15 s.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/ManualDFU.png" alt="pir" width={800} height="auto" /></p>

Arraste o arquivo UF2 baixado para o disco que apareceu.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/DragDrop.png" alt="pir" width={800} height="auto" /></p>

O disco desaparecerá após o firmware ser gravado com sucesso. Neste momento não há firmware no dispositivo, portanto ele `NÃO` será reiniciado automaticamente.

#### Gravar Firmware

Escolha a versão mais recente do firmware.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/VersionSelection.png" alt="pir" width={800} height="auto" /></p>

Baixe o arquivo UF2.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/CompanionUF2Download.png" alt="pir" width={800} height="auto" /></p>

Dê um clique duplo no botão RST para entrar manualmente no modo DFU. Você verá que um disco chamado `TRACKER L1` aparecerá após 10~15 s.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/ManualDFU.png" alt="pir" width={800} height="auto" /></p>

Arraste o arquivo UF2 baixado para o disco que apareceu.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/L1FlashDragDrop.png" alt="pir" width={800} height="auto" /></p>

O disco desaparecerá após o firmware ser gravado com sucesso. Neste momento não há firmware no dispositivo, portanto ele NÃO será reiniciado automaticamente.

## Configuração

### Ligar o dispositivo

Levante o interruptor de energia para ligá-lo.

:::tip
Se o dispositivo não responder quando você pressionar o botão, por favor carregue-o primeiro. Não use o carregador de carregamento rápido.
:::

### Obter o APP

Baixe na Google Store ou Apple Store. Ou [clique aqui](https://meshcore.co.uk/apps.html) para obter o APP Meshcore.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/MeshcoreAPP.png" alt="pir" width={300} height="auto" /></p>

### Conectar via App

Clique em `Connect` e escolha o dispositivo de destino. O ID de dispositivo padrão é `Meshcore-MAC Address`. O endereço MAC pode ser visto na etiqueta na parte inferior do dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/DeviceConnectAn.png" alt="pir" width={600} height="auto" /></p>

Digite o código PIN mostrado na tela do dispositivo e depois clique em `Pair` para conectar o dispositivo.

:::tip
Se a conexão falhar, abra a lista de Bluetooth do seu telefone e `forget` ou `Unpair` o dispositivo. Em seguida, tente conectar novamente.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/Unpair.jpg" alt="pir" width={300} height="auto" /></p>
:::

### Conectar via interface web (BLE)

1. Abra o [MeshCore Web App](https://app.meshcore.nz/) e clique no ícone **Settings**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue1.png" alt="pir" width={600} height="auto" /></p>

2. Selecione a aba **BLE** e clique em **Scan Now**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue2.png" alt="pir" width={600} height="auto" /></p>

3. Na janela pop-up Bluetooth do sistema, selecione seu dispositivo (por exemplo, MeshCore-xxxxxx) e clique em **Pair**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue3.png" alt="pir" width={600} height="auto" /></p>

4. Quando solicitado, insira a chave de acesso Bluetooth mostrada na tela do dispositivo e clique em **OK**. Esta chave não é `123456`.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue4.png" alt="pir" width={600} height="auto" /></p>

5. Aguarde até que o status mude para conectado e seu nó apareça na interface do MeshCore.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue5.png" alt="pir" width={600} height="auto" /></p>

### Configurar o LoRa

Para começar a se comunicar pela malha, você deve definir a sua região. Esta configuração controla qual faixa de frequência o dispositivo usa e deve ser ajustada de acordo com a sua localização regional.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/SetRegion.png" alt="pir" width={600} height="auto" /></p>

Em seguida, reinicie o dispositivo, caso contrário a configuração não terá efeito.

**Lista de Regiões**

|**Region Code**|**Description**|**Frequency Range (MHz)**|**Duty Cycle (%)**|**Power Limit (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Não definido|N/A|N/A|N/A|
|US|Estados Unidos|902.0 - 928.0|100|30|
|EU_868|União Europeia 868 MHz|869.4 - 869.65|10|27|

Agora que você definiu a região LoRa no seu dispositivo, pode continuar configurando qualquer [parâmetro LoRa](https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md#5-general) para atender às suas necessidades.

### Configurar GPS

Se você quiser usar o GPS, certifique-se de habilitá-lo.

Você pode ir para `Position Settings` no APP para habilitar o GPS. Ou pode ir para a página de GPS do dispositivo e pressionar o joystick de quatro direções para ligar ou desligar o GPS.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/GPSSetting.png" alt="pir" width={500} height="auto" /></p>

### Configurar o buzzer

Clique no botão de usuário quatro vezes para controlar o buzzer ligando ou desligando.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/User.png" alt="pir" width={500} height="auto" /></p>

## Transmissão de mensagens

Se você tiver dois dispositivos compatíveis e não houver muitos usuários MeshCore perto de você, grave ambos com o firmware BLE Companion para que possa usar seus dispositivos para se comunicar com amigos e familiares próximos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/Frame.png" alt="pir" width={900} height="auto" /></p>

### Anúncio

MeshCore permite que você transmita manualmente seu nome, posição e chave pública de criptografia, que também é assinada para evitar falsificação. Quando você clica no botão de anúncio, ele transmite esses dados via LoRa. MeshCore chama isso de Anúncio. Existem duas maneiras de anunciar, "zero hop" e "flood".

- **Zero hop** significa que seu anúncio é transmitido para qualquer pessoa que puder ouvi-lo, e só isso.
- **Flooded** significa que ele é transmitido e depois repetido por todos os repetidores que o ouvirem.

Você pode enviar anúncios no APP. Você também pode enviar anúncios diretamente na página de anúncios do dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/Advert.png" alt="pir" width={500} height="auto" /></p>

### Mensagem pública

Depois de configurar o LoRa, você pode enviar mensagens no canal primário. Todas as pessoas próximas na mesma faixa de frequência irão ouvi-las.

### Mensagem privada

Os dois dispositivos só estabelecem uma conexão quando ambos tiverem recebido o anúncio um do outro.

## FAQ

### Dispositivo brickado e instalação do Bootloader

**Descrição:**

O dispositivo não está respondendo, nenhum LED, não é possível parear com seu aplicativo. Se você perceber que o dispositivo está completamente morto após gravar seu próprio firmware, você também pode tentar reinstalar o bootloader.

:::danger note
Quando estiver gravando o bootloader, certifique-se de que a conexão do cabo esteja estável e **NÃO** o desconecte durante o processo de gravação.
:::

- Etapa 1: [Clique aqui para baixar o Bootloader](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio_tracker_l1_bootloader.uf2)

- Etapa 2: Entre no modo DFU

  Clique duas vezes no botão RST para entrar no modo DFU. O disco com o nome "Tracker L1" aparecerá.

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1RstButton.png" alt="pir" width={300} height="auto" /></p>

- Etapa 3: Cole o arquivo do bootloader

  Substitua todos os arquivos no disco pelo arquivo de bootloader baixado.

- Etapa 4: Grave o firmware

  Quando você tiver concluído as etapas acima, poderá seguir esta [etapa](https://wiki.seeedstudio.com/pt-br/get_started_with_other_mesh_firmware/#flash-firmware-1) para gravar o firmware do aplicativo. Talvez seja necessário [entrar no modo DFU manualmente](https://wiki.seeedstudio.com/pt-br/get_started_with_meshtastic_wio_tracker_l1/#incapaz-de-entrar-no-dfu--entrando-no-modo-dfu-manualmente)

### Incapaz de entrar em DFU e entrar no modo DFU manualmente

Conecte o dispositivo ao seu PC, pressione duas vezes o botão `Reset`. O LED amarelo ficará aceso continuamente e uma nova unidade USB chamada `Tracker L1` aparecerá no seu PC.

### Saindo do modo DFU

Pressione o botão `User` uma vez para sair do modo DFU.

### Dispositivo desliga automaticamente

#### Descrição

- Depois que o dispositivo é ligado, ele desliga ou reinicia automaticamente após um tempo.
- O log da porta serial roda por um tempo e depois para.

 Isso pode ser causado por reiniciar ou desligar manualmente e à força o dispositivo quando ele estiver nos seguintes estados: não ter concluído o processo de transmissão de mensagens, estar sendo configurado......

#### Solução de problemas

[Flash Erase](https://wiki.seeedstudio.com/pt-br/get_started_with_other_mesh_firmware/#flash-erase-1) o firmware

### Reset de fábrica

Se quiser restaurar as configurações padrão, você pode fazer o reset de fábrica. Existem dois métodos para você fazer um reset de fábrica.

- [Flash Erase](https://wiki.seeedstudio.com/pt-br/get_started_with_other_mesh_firmware/#flash-erase-1) o firmware

- Clique no botão `Factory Reset` no aplicativo. O dispositivo será reiniciado automaticamente com a configuração de fábrica.
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FactoryReset.jpg" alt="pir" width={400} height="auto" /></p>

### Qualidade do sinal

- **SNR** reflete a qualidade do link de comunicação. Dispositivos normais geralmente operam acima de -7 dB. Um dispositivo com SNR inferior a -10 dB indica desempenho ruim.

- **RSSI** é determinado conjuntamente pelo dispositivo e pelo ambiente ao seu redor. Um dispositivo normal geralmente opera acima de -110 dBm. Um dispositivo com RSSI inferior a -115 dBm é considerado como tendo desempenho ruim.

    Para obter o melhor efeito de sinal, use o dispositivo em uma área aberta, desobstruída e com interferência mínima.

### Antena compatível

Se você precisar substituir a antena do L1 Pro, [clique aqui](https://www.seeedstudio.com/LoRa-Antenna-Kit-for-reTerminal-DM-p-5714.html) para obter uma.

## Recurso

- [Bootloader](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio_tracker_l1_bootloader.uf2)
- [Arquivo de referência para impressão 3D (V1)](https://www.printables.com/model/1355571-wio-tracker-l1-pro-for-meshtastic-enclosure-casing)
- [Arquivo de referência para impressão 3D (V2 Novo joystick de quatro direções)](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1pro%203D%20Enclosure.zip)
- [Desafio de design do gabinete L1](https://www.hackster.io/contests/SeeedMeshtasticDeviceDesign2025/hardware_applications#challengeNav)
- [Arquivo de contorno](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Wio%20Tracker%20L1%20outline.dxf)
- [Certificação TELEC](https://files.seeedstudio.com/Seeed_Certificate/documents_certificate/WioL1series-TELEC.pdf)
- [Certificação FCC](https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20FCC%20Certification.pdf)
- [Certificação CE](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20CE%20Certification.pdf)
- [Teste de consumo de energia e cálculo da vida útil da bateria](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20Power%20Consumption%20Test%20and%20Battery%20Life%20Calculation.xlsx)
