---
description: Gravação de firmware do Kit Wio Tracker Meshtastic®
title: Gravar firmware
keywords:
  - Meshtastic
  - Tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /flash_meshtastic_kit
last_update:
  date: 12/3/2025
  author: Michelle Huang
createdAt: '2024-06-21'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/pt-br/flash_meshtastic_kit/
---
:::danger note
Quando o dispositivo estiver nos estados abaixo, não o reinicie manualmente nem o desligue. Caso contrário, o dispositivo pode ficar inutilizável.
1. Não tiver concluído o processo de transmissão de mensagens
2. Estiver sendo configurado
:::
Este tutorial irá guiar os usuários para gravar o [Wio Tracker 1110 Dev Board](https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html) com a versão Meshtastic, para aqueles que desejam usar a rede Meshtastic.

:::tip
Se você quiser gravar a placa de volta para a versão LoRaWAN, consulte este [tutorial](https://wiki.seeedstudio.com/pt-br/flash_to_wio_tracker/). Por favor, `don't use NRF-OTA` para atualizar o firmware, isso pode fazer com que o dispositivo fique completamente inutilizável.
:::

### Preparação

- Placa Wio Tracker 1110 x 1
- Computador x 1
- Cabo USB Tipo-C x 1

### Fiação

Conecte a Dev Board ao seu PC por meio do cabo USB.

### Gravar o bootloader

<Tabs>
<TabItem value="uf2" label="UF2">

- [Download do bootloader](https://files.seeedstudio.com/wiki/SenseCAP/respeaker/update-wio_tracker_1110_bootloader-0.9.1_nosd.uf2)

Clique duas vezes no botão `Reset`, deverá aparecer uma unidade `WM1110_BOOT` no seu PC.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wm1110-boot.png" alt="pir" width={600} height="auto" /></p>

Arraste o arquivo `update-wio_tracker_1110_bootloader-0.9.1_nosd.uf2` para a unidade. O download será executado automaticamente e, em seguida, a unidade será desconectada.

</TabItem>
<TabItem value="serial" label="Serial">

- [Download do bootloader](https://files.seeedstudio.com/wiki/SenseCAP/respeaker/wio_tracker_1110_bootloader-0.9.1_s140_7.3.0.zip)

**Passo 1: Instalação do Adafruit-nrfutil**

**Pré-requisitos**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="pypi" label="Instalando a partir do PyPI">

Este é o método recomendado para instalar a versão mais recente:

```
pip3 install --user adafruit-nrfutil
```

</TabItem>

<TabItem value="sou" label="Instalando a partir do código-fonte">

Use este método se você tiver problemas ao instalar com o PyPi ou quiser modificar a ferramenta. Primeiro, clone este repositório e entre na pasta dele.

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

Observação: os comandos a seguir usam `python3`, porém, se você estiver no Windows, talvez seja necessário alterá-lo para `python`, já que a instalação do python 3.x no Windows ainda usa o nome python.exe

Para instalar no espaço do usuário no seu diretório pessoal:

```
pip3 install -r requirements.txt
python3 setup.py install
```

Se você receber erros de permissão ao executar `pip3 install`, seu `pip3` é antigo ou está configurado para tentar instalar nos diretórios do sistema. Nesse caso, use a opção `--user`:

```
pip3 install -r --user requirements.txt
python3 setup.py install
```

Se você quiser instalar nos diretórios do sistema (geralmente não recomendado):

```
sudo pip3 install -r requirements.txt
sudo python3 setup.py install
```

Para gerar um binário executável independente da ferramenta (Windows e MacOS), execute estes comandos:

```
pip3 install pyinstaller
cd Adafruit_nRF52_nrfutil
pip3 install -r requirements.txt
cd Adafruit_nRF52_nrfutil\nordicsemi
pyinstaller __main__.py --onefile --clean --name adafruit-nrfutil
```

Você encontrará o .exe em `Adafruit_nRF52_nrfutil\nordicsemi\dist\adafruit-nrfutil` (com `.exe` se você estiver no Windows).
Copie ou mova-o para outro lugar para sua conveniência, como um diretório no seu %PATH%.

</TabItem>
</Tabs>

**Passo 2: Gravar o bootloader**

Clique duas vezes no botão `Reset` na placa e execute o seguinte comando:

- **Para Windows**:

```
adafruit-nrfutil --verbose dfu serial --package wio_tracker_1110_bootloader-0.9.1_s140_7.3.0.zip -p COMxx -b 115200
```

- **Para outros**:

```
adafruit-nrfutil --verbose dfu serial --package wio_tracker_1110_bootloader-0.9.1_s140_7.3.0.zip -p /dev/tty.SLAB_USBtoUART -b 115200
```

Substitua a porta serial pela porta do seu dispositivo. Exemplo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>
</TabItem>
</Tabs>

### Baixar o aplicativo

Você pode usar o [Meshtastic Web Flasher](https://flasher.meshtastic.org/) para baixar e copiar o firmware.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flasher.png" alt="pir" width={800} height="auto" /></p>

Selecione o dispositivo como `Seeed Wio WM1110 Tracker` e o firmware mais recente, e baixe o arquivo `UF2`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/download-uf2.png" alt="pir" width={800} height="auto" /></p>

<Tabs>
<TabItem value="uf2" label="UF2">

Clique duas vezes no botão `Reset`, deverá aparecer uma unidade `WM1110_BOOT` no seu PC.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/wm1110-boot.png" alt="pir" width={600} height="auto" /></p>

Arraste o arquivo `.uf2` para a unidade. O download será executado automaticamente e, em seguida, a unidade será desconectada.

:::tip
Apenas ignore este aviso de erro, o dispositivo na verdade já foi atualizado com sucesso.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/error-prompt.png" alt="pir" width={600} height="auto" /></p>
:::

</TabItem>

<TabItem value="serial" label="Serial">

Clique duas vezes no botão `Reset` na placa e execute o seguinte comando:

- **Para Windows**:

```
adafruit-nrfutil --verbose dfu serial --package wio_tracker_1110_bootloader-0.9.1_s140_7.3.0.zip -p COMxx -b 115200
```

- **Para outros**:

```
adafruit-nrfutil --verbose dfu serial --package firmware-wio-tracker-wm1110-2.3.14.681ae9d8.zip --port /dev/tty.SLAB_USBtoUART -b 115200
```

Gravação concluída com sucesso:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/mesh-flash-done.png" alt="pir" width={800} height="auto" /></p>

</TabItem>
</Tabs>

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