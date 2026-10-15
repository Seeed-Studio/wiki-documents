---
description: Configure_the_Parameters_of_Wio_Tracker_1110
title: Configuração de Parâmetros
keywords:
  - Tracker
  - Wio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /configure_param_for_wio_tracker
sidebar_position: 9
sidebar_class_name: hidden
last_update:
  date: 9/14/2023
  author: Jessie
createdAt: '2023-09-14'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/configure_param_for_wio_tracker/
---


Antes de começar, verifique primeiro [Configure sua toolchain](https://wiki.seeedstudio.com/pt-br/setup_toolchain_for_wio_tracker).

### Configuração de região

A região padrão do firmware de fábrica é EU868. Para configurar a região e atender aos requisitos de frequência de diferentes regiões, você pode seguir as etapas abaixo para alterar a região.

Substitua a parte `Region` no exemplo de LoRaWAN.

```cpp
REGION = SMTC_MODEM_REGION_'Region'
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/set-region.png" alt="pir" width={800} height="auto" /></p>

Em seguida, clique em `Upload` para enviar o programa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/program.png" alt="pir" width={800} height="auto" /></p>

Você também pode usar o botão `Serial Monitor` no canto superior direito para verificar os logs.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/port-monitor.png" alt="pir" width={800} height="auto" /></p>

### Configuração das informações da tríade

A placa de desenvolvimento Wio Tracker 1110 permite que os usuários definam o DevEUI, AppEUI e AppKey, o que é necessário ao registrar-se em outros servidores de rede.

Abra o `LoRaWAN/TTN Example`, defina as informações da tríade e clique em `Upload`.

```cpp
static const uint8_t DEV_EUI[8]  = { 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 };
static const uint8_t JOIN_EUI[8] = { 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 };
static const uint8_t APP_KEY[16] = { 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 };
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/change-3-codes.png" alt="pir" width={800} height="auto" /></p>

<details>
<summary>Informações</summary>

Ou você pode simplesmente obter as informações da tríade geradas pelo servidor de rede, depois preencher na parte `Constants` e executá-la na sua placa.

exemplo: do TTS.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device3.png" alt="pir" width={800} height="auto" /></p>

</details>
