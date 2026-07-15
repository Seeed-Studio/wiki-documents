---
description: Gravar a versão Sidewalk para a versão LoRaWAN
title: Gravar a versão Sidewalk para a versão LoRaWAN
keywords:
  - Rastreador
  - sidewalk
  - Amazon
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /flash_to_wio_tracker
last_update:
  date: 12/22/2023
  author: Jessie
createdAt: '2023-12-22'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/flash_to_wio_tracker/
---

Este tutorial orientará os usuários a gravar a LPWAN Dev Board para Amazon Sidewalk para a Wio Tracker 1110 Dev Board, para aqueles que desejam usar a rede LoRaWAN.

### Preparação

- LPWAN Dev Kit para Amazon Sidewalk x 1

- Computador x 1

- Cabo USB Tipo-C x 1

- Programador de depuração J-Link x 1

- [Arquivo de Bootloader](https://github.com/Seeed-Studio/Adafruit_nRF52_Arduino/tree/master/bootloader/Seeed_Wio_Tracker_1110)

- [Firmware de Aplicação](https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/wio_tracker_app_release_sw_0.5_2024-06-06.uf2)

:::note
Observe que, depois de gravar a placa, ela não poderá usar a SenseCAP Cloud, porque não há chaves da SenseCAP Cloud, mas você pode usar outras plataformas como TTN, Helium, AWS, etc.
:::

### Conecte a placa

Conecte a Dev Board ao Programador de Depuração J-Link da seguinte forma:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/connection-pin.png" alt="pir" width={700} height="auto" /></p>

:::info Conexão:
**DIO** (Wio-WM1110 Dev Board Pin2) -> **SWDIO** (J-Link Debug Programmer Pin7)  
**CLK** (Wio-WM1110 Dev Board Pin4) -> **SWDCLK** (J-Link Debug Programmer Pin9)  
**GND** (Wio-WM1110 Dev Board Pin5) -> **GND** (J-Link Debug Programmer GND)
:::

### Gravar o bootloader

- **Passo 1**: Criar um novo projeto

Abra o JFlash e selecione `Create new project`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/jlink-create.png" alt="pir" width={700} height="auto" /></p>

Clique em `...` para selecionar o dispositivo de destino.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/jlink-create.png" alt="pir" width={700} height="auto" /></p>

Selecione `nRF52840_xxAA`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/choose-device.png" alt="pir" width={700} height="auto" /></p>

Interface de destino: `SWD`, depois clique em `OK`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/new-created.png" alt="pir" width={700} height="auto" /></p>

- **Passo 2**: Conectar ao dispositivo de destino

Ligue a placa e conecte ao JLink, depois clique em `Target` -> `Connect`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/connect-target.png" alt="pir" width={700} height="auto" /></p>

Quando a conexão for bem-sucedida, será exibido um aviso como este:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/connected-.png" alt="pir" width={700} height="auto" /></p>

<details>

<summary>Backup de Dados</summary>

Antes de começarmos a gravar a placa, é recomendado fazer um backup por precaução.

Clique em `Target` -> `Manual Programming` -> `Read Back` -> `Entire chip`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/entire-chip.png" alt="pir" width={700} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/entire-success.png" alt="pir" width={700} height="auto" /></p>

Em seguida, salve os dados, clique em `File` -> `Save data file as`.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/files-save.png" alt="pir" width={700} height="auto" /></p>

</details>

- **Passo 3**: Fazer o download do arquivo

Clique em `File` -> Open `data file`, selecione o arquivo de [bootloader](https://github.com/Seeed-Studio/Adafruit_nRF52_Arduino/tree/master/bootloader/Seeed_Wio_Tracker_1110) da Wio Tracker 1110 Dev Board.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/open-data-file.png" alt="pir" width={700} height="auto" /></p>

Clique em `Target` -> `Production Programming`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/flashing.png" alt="pir" width={700} height="auto" /></p>

Quando a programação for bem-sucedida, será exibido um aviso como este:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/flash-success.png" alt="pir" width={700} height="auto" /></p>

### Baixar a aplicação

Dê um clique duplo no botão `Reset`, deverá aparecer um disco `BOOT` no seu PC.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/boot-disk.png" alt="pir" width={700} height="auto" /></p>

Copie o arquivo .uf2 para o disco, o download será executado automaticamente e, em seguida, o disco será desconectado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/uf2-file.png" alt="pir" width={700} height="auto" /></p>

Você também pode atualizar sua própria aplicação via Arduino.

### Verificar o log

Em seguida, podemos abrir o monitor serial para verificar o log.
Após a gravação, o DevEUI/AppEUI/Appkey será 0.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/join-fail.png" alt="pir" width={700} height="auto" /></p>

Você pode usar o SenseCAP Mate APP para escolher a plataforma e definir o DevEUI/AppEUI/Appkey, consulte o [Get Started](https://wiki.seeedstudio.com/pt-br/Get_Started_with_Wio-Trakcer_1110/#configure-the-frequency-and-connect-to-the-gateway) para mais detalhes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tracker_appconfig.png" alt="pir" width={300} height="auto" /></p>

:::info note
Se você quiser usar a SenseCAP Cloud, entre em contato com sensecap@seeed.cc
:::

Após as configurações, a placa será reiniciada e irá se reconectar à rede.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/joined.png" alt="pir" width={700} height="auto" /></p>
