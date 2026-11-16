---
description: Este guia explica como usar o EasySkyMesh com o MeshTracker X1 para construir redes de sensores IoT de baixo consumo de energia baseadas em MeshCore.
title: Economia de Energia
keywords:
  - EasySkyMesh
  - MeshCore
  - MeshTracker X1
  - LoRa Mesh
  - MeshCore Sensor
  - PowerSaving
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/easyskymeshx1.png
slug: /easyskymesh_x1
sku: 114993369
sidebar_position: 1
last_update:
  date: 11/13/2026
  author: Michelle Huang
createdAt: 2026-11-13T00:00:00.000Z
updatedAt: '2026-11-13'
url: https://wiki.seeedstudio.com/pt-br/easyskymesh_x1/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Firmware EasySkyMesh IoT para MeshTracker X1

[EasySkyMesh](https://github.com/IoTThinks/EasySkyMesh) é um projeto da comunidade baseado em [MeshCore](https://meshcore.io/) que se concentra na criação de firmware de baixo consumo de energia.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/easyskymeshx1.png" style={{width:600, height:'auto'}}/></div>

EasySkyMesh adiciona recursos para **economia de energia e coleta de dados de sensores**. Os dados dos sensores podem ser coletados por nós MeshCore e transmitidos por meio de uma rede MeshCore existente. É particularmente útil para:

* Redes de sensores de baixo consumo
* Monitoramento remoto
* Implantações alimentadas por energia solar
* Monitoramento ambiental
* Monitoramento de infraestrutura
* Prototipagem de IoT

## Gravação do Firmware

### Preparação de Hardware

Antes de gravar o firmware, prepare:

* MeshTracker X1. [Clique aqui](https://www.seeedstudio.com/sensecap-meshtracker-x1-meshtastic-gps-tracker-p-6935.html) para obter um.
* Cabo USB
* Computador

Conecte o X1 ao seu computador usando a porta USB Type-C.

### Baixar o Firmware EasySkyMesh

Acesse a página de [Releases do EasySkyMesh](https://github.com/IoTThinks/EasySkyMesh/releases). Selecione uma release que ofereça suporte à sua placa.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/easyskymeshx1firmware.png"style={{width:600, height:'auto'}}/></div>


As releases do EasySkyMesh podem fornecer diferentes arquivos de firmware para diferentes hardwares e diferentes cenários de atualização. Para uma nova instalação, o projeto geralmente fornece uma imagem de firmware de instalação limpa. Para uma instalação existente, use o firmware de atualização quando quiser preservar a configuração existente.


### Gravar o Firmware

O projeto EasySkyMesh recomenda usar o MeshCore Web Flasher para dispositivos compatíveis.

**Passo 1:** Abra o [MeshCore Web Flasher](https://meshcore.io/flasher)

**Passo 2:** Selecione **Custom Firmware**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/Choose_Custom_Firmware_MeshCore_EasySkyMesh.png" style={{width:600, height:'auto'}}/></div>

**Passo 3:** Selecione o arquivo de firmware EasySkyMesh.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/x1folder.png" style={{width:600, height:'auto'}}/></div>

**Passo 4:** Entre no modo DFU, se necessário.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/X1Enter.png" style={{width:900, height:'auto'}}/></div>

**Passo 5:** Inicie a gravação. Aguarde até que o processo de gravação seja concluído. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/X1Flash.png" style={{width:900, height:'auto'}}/></div>

**Passo 6:** Reinicie o dispositivo.

## Economia de Energia

O projeto fornece releases de firmware PowerSaving com otimizações para diferentes placas MeshCore. As releases do EasySkyMesh introduziram recursos de economia de energia para dispositivos baseados em ESP32 e nRF52, bem como funções adicionais de gerenciamento de energia para diferentes papéis MeshCore.

### Firmware Companion

Todos os recursos de PowerSaving são ativados por padrão. O RX PowerSaving é definido como "balanced".

### Firmware de Repeater & Room Server

O PowerSaving vem desativado por padrão. Você pode ativar o PowerSaving por meio do MeshCore CLI.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Wio_Tracker_L1/EasySkyMesh/EasySkyMesh_Powersaving_On.png" style={{width:900, height:'auto'}}/></div>

Ative o PowerSaving por meio de:

```text
powersaving on
```

Para verificar o status atual do PowerSaving:

```text
powersaving
```

[Clique aqui](https://github.com/IoTThinks/EasySkyMesh/wiki/PowerSaving#11-repeaters-and-room-servers) para usar mais comandos.

## Solução de Problemas

### O Dispositivo Não Aparece no Flasher

1. Certifique-se de que o cabo USB suporta transferência de dados.
2. Reconecte o X1.
3. Entre novamente no modo DFU.
4. Atualize o Web Flasher.
5. Tente outra porta ou cabo USB.


Se o problema persistir, verifique o [repositório EasySkyMesh no GitHub](https://github.com/IoTThinks/EasySkyMesh) para a documentação e issues mais recentes.

## Recursos

* [Repositório EasySkyMesh no GitHub](https://github.com/IoTThinks/EasySkyMesh)
* [Instruções de Gravação do EasySkyMesh](https://github.com/IoTThinks/EasySkyMesh/blob/main/firmware/Instruction-to-flash-firmware.md)
* [Instruções de Sensores do EasySkyMesh](https://github.com/IoTThinks/EasySkyMesh/blob/main/firmware/Add-sensors-to-repeaters.md)

## Suporte Técnico & Discussão de Produto
<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>