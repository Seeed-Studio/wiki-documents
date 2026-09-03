---
description: Guia para gravar o firmware MeshCore no Wio Tracker L1 Pro via Web USB ou arrastar‑e‑soltar, juntamente com a configuração do app para região LoRa, GPS e envio de mensagens.
title: Introdução ao MeshCore no Wio Tracker L1 Pro
keywords:
  - Meshcore
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wio-tracker-l1.webp
slug: /get_started_with_other_mesh_firmware
sku: 114993648,114993649,114993653,114993654
sidebar_position: 3
last_update:
  date: 09/02/2026
  author: Advent Jiang
createdAt: '2026-02-28'
updatedAt: '2026-08-10'
url: https://wiki.seeedstudio.com/pt-br/get_started_with_other_mesh_firmware/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/1-100030144-wio-tracekr-l1-pro-meshcore.jpg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Tracker-L1-Pro-for-Meshcore-p-6717.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

<br></br>

## Gravação de firmware

### Método 1 via Web Flasher

Conecte seu dispositivo ao computador com um cabo USB. Certifique-se de que o cabo suporta transmissão de dados.

:::warning
Mantenha o cabo USB conectado durante a transmissão de dados, caso contrário o dispositivo pode ser danificado.
:::

Acesse o [Meshcore Web Flasher](https://meshcore.io/flasher).

Escolha `Seeed Studio Wio Tracker L1 Pro` no grupo `Community Firmware`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/L1ProMeshcoreSelection.png" alt="pir" width={800} height="auto" /></p>

Escolha `Companion Bluetooth`. Dispositivos gravados com o firmware Companion Bluetooth podem ser conectados ao APP. Se você quiser gravar outro firmware, por favor [clique aqui](https://docs.meshcore.io/) para ver o tutorial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/BluetoothCompanion.png" alt="pir" width={800} height="auto" /></p>

#### Apagar Flash

Clique em `Enter DFU Mode`, escolha a porta serial chamada "L1 Pro" ou "TinyUSB serial". Em seguida, clique em `Erase Flash` e escolha a porta serial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSe.png" alt="pir" width={800} height="auto" /></p>

Se você clicou em `Erase Flash` mas não houve resposta, clique em `Enter DFU` novamente e depois clique em `Erase Flash` para garantir que entrou no modo DFU com sucesso.

Se você vir "Flashing erase firmware:100%", o dispositivo foi apagado com sucesso.

<p style={{textAlign: 'center'}}><img src=" https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FlashEraseSuccess.png" alt="pir" width={800} height="auto" /></p>

#### Gravar firmware

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

Escolha `Companion Bluetooth`. Dispositivos gravados com o firmware Companion Bluetooth podem ser conectados ao APP. Se você quiser gravar outro firmware, por favor [clique aqui](https://docs.meshcore.io/) para ver o tutorial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/BluetoothCompanion.png" alt="pir" width={800} height="auto" /></p>

#### Apagar Flash

Baixe o arquivo UF2.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EraseUF2.png" alt="pir" width={800} height="auto" /></p>

Clique duas vezes no botão RST para entrar manualmente no modo DFU. Você verá um disco chamado `TRACKER L1` aparecer após 10~15 s.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/ManualDFU.png" alt="pir" width={800} height="auto" /></p>

Arraste o arquivo UF2 baixado para o disco que apareceu.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/DragDrop.png" alt="pir" width={800} height="auto" /></p>

O disco desaparecerá após o firmware ser gravado com sucesso. Neste momento não há firmware no dispositivo, portanto o dispositivo `NÃO` será reiniciado automaticamente.

#### Gravar firmware

Escolha a versão mais recente do firmware.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/VersionSelection.png" alt="pir" width={800} height="auto" /></p>

Baixe o arquivo UF2.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/CompanionUF2Download.png" alt="pir" width={800} height="auto" /></p>

Clique duas vezes no botão RST para entrar manualmente no modo DFU. Você verá um disco chamado `TRACKER L1` aparecer após 10~15 s.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/ManualDFU.png" alt="pir" width={800} height="auto" /></p>

Arraste o arquivo UF2 baixado para o disco que apareceu.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/L1FlashDragDrop.png" alt="pir" width={800} height="auto" /></p>

O disco desaparecerá após o firmware ser gravado com sucesso. Neste momento não há firmware no dispositivo, portanto o dispositivo NÃO será reiniciado automaticamente.

## Configuração

### Ligar o dispositivo

Levante o interruptor de energia para ligá-lo.

:::tip
Se o dispositivo não responder quando você pressionar o botão, carregue-o primeiro. Não use carregador de carga rápida.
:::

### Obter o APP

Baixe pela Google Store ou Apple Store. Ou [clique aqui](https://meshcore.io/#download) para obter o APP Meshcore.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/MeshcoreAPP.png" alt="pir" width={300} height="auto" /></p>

### Conectar via App

Clique em `Connect` e escolha o dispositivo de destino. O ID de dispositivo padrão é `Meshcore-MAC Address`. O endereço MAC pode ser visto na etiqueta na parte inferior do dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/DeviceConnectAn.png" alt="pir" width={600} height="auto" /></p>

Digite o código PIN mostrado na tela do dispositivo e clique em `Pair` para conectar o dispositivo.

:::tip
Se a conexão falhar, abra a lista de Bluetooth do seu telefone e `forget` ou `Unpair` o dispositivo. Em seguida, tente conectar novamente.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/Unpair.jpg" alt="pir" width={300} height="auto" /></p>
:::

### Conectar via interface web（BLE）

1. Abra o [MeshCore Web App](https://app.meshcore.nz/) e clique no ícone **Settings**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue1.png" alt="pir" width={600} height="auto" /></p>

2. Selecione a aba **BLE** e clique em **Scan Now**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue2.png" alt="pir" width={600} height="auto" /></p>

3. Na janela pop-up de Bluetooth do sistema, selecione seu dispositivo (por exemplo, MeshCore-xxxxxx) e clique em **Pair**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue3.png" alt="pir" width={600} height="auto" /></p>

4. Quando solicitado, insira a senha Bluetooth mostrada na tela do dispositivo e clique em **OK**. Esta senha não é `123456`.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue4.png" alt="pir" width={600} height="auto" /></p>

5. Aguarde até que o status mude para conectado e seu nó apareça na interface do MeshCore.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/meshcorewebblue5.png" alt="pir" width={600} height="auto" /></p>

### Configurar o LoRa

Para começar a se comunicar pela malha, você deve definir sua região. Essa configuração controla qual faixa de frequência seu dispositivo usa e deve ser ajustada de acordo com sua localização regional.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/SetRegion.png" alt="pir" width={600} height="auto" /></p>

Em seguida, reinicie o dispositivo, caso contrário a configuração não terá efeito.

**Lista de regiões**

|**Código da região**|**Descrição**|**Faixa de frequência (MHz)**|**Duty Cycle (%)**|**Limite de potência (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Não definido|N/A|N/A|N/A|
|US|Estados Unidos|902.0 - 928.0|100|30|
|EU_868|União Europeia 868 MHz|869.4 - 869.65|10|27|

Agora que você definiu a região LoRa no seu dispositivo, pode continuar configurando qualquer [parâmetro LoRa](https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md#5-general) para atender às suas necessidades.

### Configurar GPS

Se você quiser usar o GPS, ative-o.

Você pode ir ao APP `Position Settings` para ativar o GPS. Ou pode ir à página de GPS do dispositivo e pressionar o joystick de quatro direções para ligar ou desligar o GPS.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/GPSSetting.png" alt="pir" width={500} height="auto" /></p>

### Configurar o buzzer

Clique no botão User quatro vezes para controlar o buzzer ligando ou desligando.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/User.png" alt="pir" width={500} height="auto" /></p>

### Configurar sensor

O Wio Tracker L1 é enviado com o firmware MeshCore `1.12` pré-instalado. O suporte a sensores Grove por meio do conector Grove integrado foi adicionado no firmware `1.13`; a versão mais recente é `1.16`.

:::note
Sensores Grove exigem firmware `1.13` ou posterior. Se o seu dispositivo ainda estiver executando a versão de fábrica `1.12`, siga o [Method1 via Web Flasher](#method1-via-web-flasher) e selecione a versão mais recente.
:::

A partir da versão `1.13`, isso possibilita a integração direta de sensores ambientais — temperatura, umidade, qualidade do ar e mais — por meio do conector Grove integrado do L1, sem qualquer soldagem ou hardware adicional. Conecte um sensor Grove compatível ao conector e ele será reconhecido automaticamente.

## Transmissão de mensagens

Se você tiver dois dispositivos compatíveis, e não houver muitos usuários MeshCore perto de você, grave o firmware BLE Companion em ambos para que você possa usar seus dispositivos para se comunicar com amigos e familiares próximos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/Frame.png" alt="pir" width={900} height="auto" /></p>

### Anúncio (Advert)

MeshCore permite que você transmita manualmente seu nome, posição e chave pública de criptografia, que também é assinada para evitar falsificação. Quando você clica no botão de anúncio, ele transmite esses dados via LoRa. MeshCore chama isso de Advert. Há duas maneiras de anunciar, "zero hop" e "flood".

- **Zero hop** significa que seu anúncio é transmitido para qualquer pessoa que possa ouvi-lo, e só isso.
- **Flooded** significa que ele é transmitido e depois repetido por todos os repetidores que o ouvirem.

Você pode enviar anúncios no APP. Também é possível enviar anúncios diretamente na página de anúncio do dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/Advert.png" alt="pir" width={500} height="auto" /></p>

### Mensagem pública

Depois de configurar o LoRa, você pode enviar mensagens no canal primário. Todas as pessoas próximas na mesma faixa de frequência irão ouvi-las.

### Mensagem privada

Os dois dispositivos só estabelecem uma conexão quando ambos tiverem recebido o anúncio um do outro.

## FAQ

### Dispositivo travado (bricked) e recuperação do bootloader {#device-bricked--bootloader-installation}

**Descrição:**

O dispositivo não responde, nenhum LED acende, não é possível parear com o seu app. Se você achar que o dispositivo está completamente morto após gravar seu próprio firmware, também pode tentar reinstalar o bootloader.

O bootloader é restaurado pela porta serial USB (Serial DFU) com `adafruit-nrfutil`.

:::danger note
Durante a gravação, mantenha a conexão do cabo estável e **NÃO** o desconecte — mesmo que o número da porta serial mude.
:::

**Passo 1: Preparar**

- Um dispositivo da série Wio Tracker L1 (L1 / L1 Pro)
- Um cabo de dados USB em bom estado (não apenas de carregamento)
- Um PC com Windows, macOS ou Linux com Python 3 e pip
- O pacote do bootloader: [Clique aqui para baixar o Bootloader](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip) — NÃO extraia o ZIP; `adafruit-nrfutil` o utiliza como está

**Passo 2: Instalar o adafruit-nrfutil**

<Tabs>
<TabItem value="windows" label="Windows">

Verifique se o Python 3 e o pip estão disponíveis (se o pip estiver ausente, execute primeiro `python -m ensurepip --upgrade`):

```
python --version
python -m pip --version
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/00_python_pip_check.png" alt="Check Python and pip on Windows" width={600} height="auto" /></p>

Em seguida, instale e verifique (a versão testada para este guia é `0.5.3.post16`):

```
python -m pip install --user adafruit-nrfutil
adafruit-nrfutil version
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/01_nrfutil_version.png" alt="adafruit-nrfutil version output on Windows" width={600} height="auto" /></p>

</TabItem>

<TabItem value="macos" label="macOS">

```
python3 --version
python3 -m pip install --user adafruit-nrfutil
adafruit-nrfutil version
```

Se o pip estiver ausente, execute primeiro `python3 -m ensurepip --upgrade`.

</TabItem>

<TabItem value="linux" label="Linux">

```
python3 --version
python3 -m pip install --user adafruit-nrfutil
adafruit-nrfutil version
```

Se o pip estiver ausente, execute primeiro `python3 -m ensurepip --upgrade`.

</TabItem>
</Tabs>

:::note
Sempre verifique a versão com `adafruit-nrfutil version`. NÃO use `adafruit-nrfutil --version`.
:::

**Passo 3: Verificar a porta serial**

Anote a porta serial do dispositivo — os exemplos abaixo variam conforme o PC:

<Tabs>
<TabItem value="windows" label="Windows">

Abra **Device Manager → Ports (COM & LPT)**, por exemplo:

```
USB Serial Device (COM43)
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/02_normal_com_port.png" alt="Wio Tracker L1 serial port in Windows Device Manager" width={600} height="auto" /></p>

</TabItem>

<TabItem value="macos" label="macOS">

```
ls /dev/cu.*
```

O dispositivo aparece como `/dev/cu.usbmodemXXXX`.

</TabItem>

<TabItem value="linux" label="Linux">

```
ls /dev/ttyACM*
```

O dispositivo geralmente aparece como `/dev/ttyACM0`; se nada for listado, tente também `ls /dev/ttyUSB*`.

</TabItem>
</Tabs>

**Passo 4: Gravar o bootloader**

Substitua a porta pela que você encontrou no Passo 3:

<Tabs>
<TabItem value="windows" label="Windows">

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p COM43 -b 115200 --singlebank --touch 1200
```

Se o ZIP não estiver na pasta atual do seu terminal, passe o caminho completo para `--package`, por exemplo `"C:\path\to\wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip"`.

</TabItem>

<TabItem value="macos" label="macOS">

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p /dev/cu.usbmodemXXXX -b 115200 --singlebank --touch 1200
```

</TabItem>

<TabItem value="linux" label="Linux">

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p /dev/ttyACM0 -b 115200 --singlebank --touch 1200
```

</TabItem>
</Tabs>

**Passo 5: Lidar com a mudança de porta serial**

`--touch 1200` reinicia o dispositivo em modo DFU, então a porta serial geralmente muda e o primeiro comando pode parar com um traceback como este:

```
Touched serial port COM43
...
FileNotFoundError: could not open port 'COM43'
```

Isto NÃO é uma falha — o dispositivo já entrou em modo DFU em uma NOVA porta. No PC com Windows testado, por exemplo, ela mudou de `COM43` para `COM45`:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/03_dfu_com_port.png" alt="DFU serial port after re-enumeration in Windows Device Manager" width={600} height="auto" /></p>

**Mantenha o cabo USB conectado.** Encontre a nova porta (atualize **Device Manager → Ports (COM & LPT)**, ou execute novamente `ls /dev/cu.*` / `ls /dev/ttyACM*`), depois grave novamente na nova porta SEM `--touch 1200`:

<Tabs>
<TabItem value="windows" label="Windows">

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p COM45 -b 115200 --singlebank
```

</TabItem>

<TabItem value="macos" label="macOS">

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p /dev/cu.usbmodemXXXX -b 115200 --singlebank
```

</TabItem>

<TabItem value="linux" label="Linux">

```
adafruit-nrfutil --verbose dfu serial --package "wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip" -p /dev/ttyACM0 -b 115200 --singlebank
```

</TabItem>
</Tabs>

**Passo 6: Confirmar o resultado**

A gravação foi bem-sucedida quando a saída termina com `Device programmed.`:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/04_flash_success.png" alt="adafruit-nrfutil output ending with Device programmed" width={600} height="auto" /></p>

Depois disso, uma unidade UF2 aparece no seu PC (captura de tela do PC com Windows testado). Seu rótulo de volume varia conforme a compilação do bootloader — a unidade testada mostrava `XIAO-BOOT` — e NÃO é um critério de aprovação/reprovação; não julgue o resultado pelo nome da unidade ou por `INFO_UF2.TXT`:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/05_uf2_drive.png" alt="UF2 drive appears after bootloader flashing" width={600} height="auto" /></p>

**Passo 7: Reinstalar o firmware da aplicação**

:::warning
Restaurar o bootloader NÃO reinstala o firmware da aplicação — o dispositivo ainda não tem um firmware funcional até que você o grave novamente.
:::

Quando você tiver concluído as etapas acima, siga [Firmware Flashing](https://wiki.seeedstudio.com/pt-br/get_started_with_other_mesh_firmware/#firmware-flashing) para gravar o firmware da aplicação.

**Solução de problemas**

- `adafruit-nrfutil` não é reconhecido após a instalação: o diretório de scripts de usuário do Python não está no seu PATH (`Scripts` no Windows, `bin` no seu diretório pessoal no macOS/Linux) — adicione-o ao PATH ou reinstale sem `--user`.
- Porta ocupada / acesso negado: feche monitores seriais, abas do web flasher, Arduino IDE ou qualquer outra coisa que esteja usando a porta.
- `FileNotFoundError: could not open port ...` após `Touched serial port ...`: o dispositivo entrou em modo DFU em uma nova porta — siga o Passo 5.
- Não é possível entrar em modo DFU: veja [Unable to enter DFU & Entering DFU Mode Manually](https://wiki.seeedstudio.com/pt-br/get_started_with_other_mesh_firmware/#unable-to-enter-dfu--entering-dfu-mode-manually).

**Recuperação manual via DFU**

Se `--touch 1200` não conseguir colocar o dispositivo no modo DFU (por exemplo, o firmware está completamente sem resposta), entre nele manualmente: conecte o dispositivo, pressione duas vezes `Reset` (o LED amarelo permanece aceso), encontre a porta serial DFU como no Passo 3 e então execute o comando do Passo 5 nessa porta SEM `--touch 1200`. O sucesso é igual ao do Passo 6.

### Não é possível entrar em DFU e entrando no modo DFU manualmente

Conecte o dispositivo ao seu PC e pressione duas vezes o botão `Reset` — o LED amarelo permanece aceso e uma porta serial DFU aparece no seu PC.

Para gravar o bootloader neste modo, siga [Device Bricked & Bootloader Recovery](https://wiki.seeedstudio.com/pt-br/get_started_with_other_mesh_firmware/#dispositivo-bloqueado--instalação-do-bootloader), mas ignore `--touch 1200` — o dispositivo já está no modo DFU.

### Saindo do modo DFU

Pressione o botão `Reset` uma vez para sair do modo DFU.

### Dispositivo desliga automaticamente

#### Descrição

- Após o dispositivo ligar, ele desligará ou reiniciará automaticamente depois de um tempo.
- O log da porta serial executa por um tempo e depois para.

 Isso pode ser causado por reiniciar ou desligar o dispositivo manualmente e à força quando o dispositivo está nos seguintes estados: sem concluir o processo de transmissão de mensagens, sendo configurado......

#### Solução de problemas

[Flash Erase](https://wiki.seeedstudio.com/pt-br/get_started_with_other_mesh_firmware/#flash-erase-1) do firmware

### Restauração de fábrica

Se você quiser restaurar as configurações padrão, pode fazer a restauração de fábrica. Existem dois métodos para você fazer uma restauração de fábrica.

- [Flash Erase](https://wiki.seeedstudio.com/pt-br/get_started_with_other_mesh_firmware/#flash-erase-1) do firmware

- Clique no botão `Factory Reset` no aplicativo. O dispositivo será reiniciado automaticamente com a configuração de fábrica.
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/FactoryReset.jpg" alt="pir" width={400} height="auto" /></p>

### Qualidade do sinal

- **SNR** reflete a qualidade do link de comunicação. Dispositivos normais geralmente operam acima de -7 dB. Um dispositivo com SNR abaixo de -10 dB indica baixo desempenho.

- **RSSI** é determinado em conjunto pelo dispositivo e pelo ambiente ao seu redor. Um dispositivo normal geralmente opera acima de -110 dBm. Um dispositivo com RSSI abaixo de -115 dBm é considerado como tendo baixo desempenho.

    Para obter o melhor efeito de sinal, use o dispositivo em uma área aberta, desobstruída e com interferência mínima.

### Antena compatível

Se você precisar substituir a antena do L1 Pro, [clique aqui](https://www.seeedstudio.com/LoRa-Antenna-Kit-for-reTerminal-DM-p-5714.html) para obter uma.

## Recursos

- [Bootloader (pacote Serial DFU)](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/adafruit/wio_tracker_l1_bootloader-0.10.0_s140_7.3.0.zip)
- [Arquivo de referência para impressão 3D (V1)](https://www.printables.com/model/1355571-wio-tracker-l1-pro-for-meshtastic-enclosure-casing)
- [Arquivo de referência para impressão 3D (V2 Novo joystick de quatro direções)](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1pro%203D%20Enclosure.zip)
- [Desafio de design de gabinete L1](https://www.hackster.io/contests/SeeedMeshtasticDeviceDesign2025/hardware_applications#challengeNav)
- [Arquivo de contorno](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Wio%20Tracker%20L1%20outline.dxf)
- [Certificação TELEC](https://files.seeedstudio.com/Seeed_Certificate/documents_certificate/WioL1series-TELEC.pdf)
- [Certificação FCC](https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20FCC%20Certification.pdf)
- [Certificação CE](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20CE%20Certification.pdf)
- [Teste de consumo de energia e cálculo da vida útil da bateria](http://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%20L1%20Power%20Consumption%20Test%20and%20Battery%20Life%20Calculation.xlsx)

## Suporte técnico e discussão sobre o produto

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
        <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
    </div>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
        <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
    </div>
</div>