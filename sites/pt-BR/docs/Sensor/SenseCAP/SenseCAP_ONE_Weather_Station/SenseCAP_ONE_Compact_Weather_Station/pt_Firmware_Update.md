---
description: Atualização de firmware do sensor meteorológico SenseCAP ONE
title: Atualização de firmware
keywords:
  - SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /firmware_update
last_update:
  date: 03/19/2026
  author: Kian
createdAt: '2026-03-19'
url: https://wiki.seeedstudio.com/pt-br/firmware_update/
updatedAt: '2026-03-31'
---
## Atualização de firmware do sensor meteorológico SenseCAP ONE

:::tip
    Esta atualização de firmware é destinada exclusivamente à estação meteorológica SenseCAP ONE V2.
:::

### Estações meteorológicas V1 vs V2

As estações meteorológicas V1 e V2 podem ser identificadas pelo **SKU no rótulo branco** ou pelo design da base.

Além disso, a porta USB Type-C está localizada em posições diferentes: na V1, ela fica no mesmo lado do rótulo branco, enquanto na V2, fica no lado oposto.

<div class="table-center">

| Nome do produto      |      SKU V1          |       SKU V2         |
| -------------------- | -------------------- | -------------------- |
| S200                 |        Nenhum        |      101991044       |
| S500                 |      101990693       |      101991021       |
| S600-A               |        Nenhum        |      101991232       |
| S700                 |      101990787       |      101991022       |
| S700-A               |        Nenhum        |      101991050       |
| S700-B               |        Nenhum        |      101991102       |
| S700-C               |        Nenhum        |      101991141       |
| S800                 |        Nenhum        |      101991023       |
| S900                 |      101990784       |        Nenhum        |
| S1000                |      101990902       |      101991024       |

</div>

### SenseCAP ONE Configuration Tool

O SenseCAP ONE Configuration Tool oferece uma interface gráfica para você configurar o dispositivo. Você pode baixar a ferramenta pelo link do GitHub abaixo:

&lt;https://github.com/Seeed-Solution/SenseCAP-One-Configuration-Tool/releases&gt;

Selecione o software para o respectivo sistema operacional, Windows, macOS ou Linux, de acordo com suas necessidades.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image18.png" /></div>

A imagem a seguir mostra a interface principal do SenseCAP ONE Configuration Tool.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image19.png" /></div>

### Procedimento de atualização de firmware

1. Abra o `SenseCAP One Configuration Tool`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_One_Configuration_Tool.png" /></div>

2. Conecte o dispositivo ao computador por meio do cabo Type-C

3. Abra o software, selecione a porta `COM` correta para o dispositivo e clique em `"Connect"`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Connect.png" /></div>

4. Após conectar, clique em `"Firmware Update"`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Firmware_Update.png" /></div>

5. Selecione a placa de destino e o arquivo de firmware correspondente

- Selecione a `Master board` ou `Slave Board1`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Master_board.png" /></div>

- Clique em `"Local File"` e navegue até a pasta do firmware

- Clique em `"Update"`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Update.png" /></div>

6. Pressione o botão Reset no dispositivo (localizado ao lado da porta Type-C) após clicar em `"Update"`.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Reset.png" /></div>

O processo de atualização começará alguns segundos após pressionar o botão.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Update2.png" /></div>

7. Quando a atualização for concluída, pressione o botão Reset novamente e, em seguida, clique em `"OK"` na tela.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Reset2.png" /></div>

8. Repita as etapas acima para gravar outro firmware em `Slave Board 1`.

9. Feche a janela Firmware Update após a conclusão e clique em `"Disconnect"`.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Disconnect.png" /></div>

Isso conclui todas as etapas de atualização de firmware para a estação meteorológica.

## Recursos de firmware

### 2025-04

- [Firmware da Master Board](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_ONE/Firmware/sensecap-one-communication-v2_v4.7_release_20250407_154759.bin)

- [Firmware da Slave Board 1](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_ONE/Firmware/sensecap-one-driver-v2_v4.1_release_20250423_194038.bin)
