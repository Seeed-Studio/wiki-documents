---
description: Explore o ZephCore, um firmware MeshCore baseado em Zephyr, em dispositivos LoRa mesh da Seeed Studio.
title: Desenvolvimento com Zephyr
keywords:
  - ZephCore
  - Zephyr RTOS
  - MeshCore
  - LoRa mesh
image: https://files.seeedstudio.com/wiki/SenseCAP/zephcore/Zephcorephoto.png" 
slug: /zephcore_getting_started_p1
sku: 114993633,114993643
sidebar_position: 3
last_update:
  date: 11/24/2026
  author: Michelle Huang
createdAt: 2026-11-24T00:00:00.000Z
updatedAt: '2026-11-24'
url: https://wiki.seeedstudio.com/pt-br/zephcore_getting_started_p1/
---

## Como o ZephCore se relaciona com o MeshCore

MeshCore permite que dispositivos LoRa troquem mensagens fora da rede convencional. O [projeto ZephCore](https://github.com/liquidraver/ZephCore) é uma portabilidade comunitária do MeshCore construída sobre o sistema operacional Zephyr. Você pode testar o ZephCore em um dispositivo e enviar uma mensagem para um amigo executando MeshCore. Ambos os rádios precisam de configurações correspondentes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/zephcore/Zephcorephoto.png" alt="Projeto ZephCore no GitHub" width={800} height="auto" /></p>

| O que muda para você? | Firmware MeshCore | Firmware ZephCore |
| --- | --- | --- |
| Plataforma de firmware | Firmware MeshCore baseado em Arduino | Uma portabilidade construída sobre o Zephyr RTOS |
| Rede LoRa | Uma malha LoRa MeshCore | A mesma malha MeshCore |
| Aplicativo móvel | Aplicativo MeshCore com um Companion BLE | Mesmo aplicativo com uma compilação compatível de Companion BLE |

## O que é Zephyr?

Zephyr é um sistema operacional de tempo real de código aberto para dispositivos pequenos. Em um rastreador, ele pode acordar o processador quando um botão é pressionado, ler um receptor GPS ou atualizar um display. ZephCore usa esses serviços para executar um nó de malha.

## Escolha seu dispositivo

Escolha **Companion** se você quiser enviar mensagens do seu telefone via Bluetooth. Escolha **Repeater** se você quiser que o dispositivo encaminhe mensagens para nós próximos.

| Dispositivo | Imagem | Nome da placa no ZephCore |
| --- | --- | --- |
| [Wio Tracker L1 Pro](https://www.seeedstudio.com/Wio-Tracker-L1-Pro-for-Meshcore-p-6717.html) | <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/1-100030144-wio-tracekr-l1-pro-meshcore.jpg" alt="Wio Tracker L1 Pro no guia de primeiros passos do MeshCore" width={160} height="auto" /></p> | `wio_tracker_l1` |
| [SenseCAP MeshTracker X1](https://www.seeedstudio.com/sensecap-meshtracker-x1-meshtastic-gps-tracker-p-6935.html) | <p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100093876._._.png" alt="SenseCAP MeshTracker X1 no guia de primeiros passos do MeshCore" width={160} height="auto" /></p> | `meshtracker_x1` |
| [SenseCAP T1000-E](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html) | <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/intro-e.png" alt="SenseCAP T1000-E no guia de primeiros passos do MeshCore" width={160} height="auto" /></p> | `t1000_e` |
| [SenseCAP Solar Node P1 Pro](https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-Pro-for-Meshcore-p-6741.html) | <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/image1_2.jpeg" alt="SenseCAP Solar Node P1 Pro no guia de primeiros passos do MeshCore" width={160} height="auto" /></p> | `sensecap_solar` é o nome de placa relacionado |

Verifique quais builds estão disponíveis para sua placa na [lista de placas](https://github.com/liquidraver/ZephCore/blob/master/docs/supported_boards.md) e nos [lançamentos de firmware](https://github.com/liquidraver/ZephCore/releases).

## Gravar o ZephCore

Antes de trocar o firmware, salve as configurações do rádio e faça backup da identidade do nó se quiser mantê-la. Trocar o firmware exige configurar o nó novamente.

1. **Conectar.** Conecte o dispositivo ao computador com um cabo de dados USB. Abra o [ZephCore Web Flasher](https://zephcore.meshcore.dev/) no Chrome ou Edge.
2. **Selecionar.** Escolha exatamente sua placa e função usando a tabela acima.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/zephcore/ZephcoreSeeedproduct.png" alt="Dispositivos Seeed Studio no ZephCore Web Flasher" width={900} height="auto" /></p>

3. **Gravar.** Siga as instruções para selecionar o dispositivo USB e instalar o firmware. Aguarde até que o gravador informe a conclusão.
4. **Testar.** Selecione o mesmo preset regional de rádio que um nó MeshCore próximo. Para um Companion, faça o pareamento no aplicativo MeshCore, envie uma mensagem e peça uma resposta. Para um Repeater, verifique se uma mensagem alcança um segundo nó através do repetidor.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/zephcore/Zephcorefirst.jpg" alt="Tela inicial do ZephCore no L1 Pro" width={550} height="auto" /></p>

## O que você pode testar com o ZephCore?

### Medir o uso da bateria

Ouvir pacotes LoRa consome energia mesmo quando ninguém envia uma mensagem. Em rádios SX126x compatíveis, o ZephCore pode ouvir em janelas curtas para **reduzir a corrente média**. 

### Verificar o L1 Pro sem tirar o telefone do bolso

No L1 Pro, use o joystick para navegar pelas telas de status do OLED e verificar o nível da bateria no próprio dispositivo. Isso é útil quando o rastreador está na sua mão e o telefone está guardado. Nos X1 e T1000-E, que não têm tela, use o aplicativo MeshCore para ver o status do Companion.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/zephcore/ZephCore%20Menu.jpg" alt="Menu do ZephCore no OLED do L1 Pro" width={550} height="auto" /></p>

### Explorar jogos no Zephyr

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/zephcore/Zephcoregame.gif" alt="Demonstração de jogo do ZephCore" width={480} height="auto" /></p>

## Compile seu primeiro firmware ZephCore

Instale o Git, as ferramentas do Zephyr e o SDK exigido pela sua revisão do ZephCore. [Instruções de compilação do ZephCore](https://github.com/liquidraver/ZephCore)

A partir de uma nova pasta, baixe o projeto e suas dependências:

```bash
git clone https://github.com/liquidraver/ZephCore.git zephcore
west init -l zephcore
west update
```

Na mesma pasta, compile o firmware do L1 Pro:

```bash
west build -b wio_tracker_l1 zephcore --pristine
```

Aqui, `west` é a ferramenta de linha de comando do Zephyr e `-b` seleciona a placa. O comando compila o firmware no seu computador. Para testar uma primeira edição, altere um rótulo na tela de status do L1 Pro, recompile e siga as instruções do projeto para instalar sua compilação local. O novo rótulo oferece uma verificação visível de que o seu próprio firmware está em execução.

À medida que você explora o código-fonte, procure por **Devicetree** para ver como o hardware está conectado e por **Kconfig** para ver quais recursos uma compilação habilita.

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

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>