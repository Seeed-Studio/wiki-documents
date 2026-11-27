---
description: Este guia explica por que textos longos ocupam mais tempo de transmissão em LoRa e como enviá-los com OSHI Mesh em dois rastreadores SenseCAP T1000-E.
title: Transmissão de Texto Longo
draft: true
keywords:
  - Meshtastic
  - Long Text Transmission
  - OSHI Mesh
  - T1000-E
image: https://files.seeedstudio.com/wiki/SenseCAP/oshimesh/Oshifirst.png
slug: /meshtastic_long_text_transmission
sku: 114993369
sidebar_position: 1
last_update:
  date: 3/19/2026
  author: Michelle Huang
createdAt: '2026-11-25'
updatedAt: '2026-11-25'
url: https://wiki.seeedstudio.com/pt-br/meshtastic_long_text_transmission/
---

## Introdução

### Texto curto vs. texto longo em LoRa

*Airtime* é o tempo que um rádio passa transmitindo. Mais pacotes geralmente usam mais airtime com as mesmas configurações de rádio. Fatores de espalhamento mais altos ou larguras de banda mais estreitas podem fazer cada pacote demorar mais.

| | Texto curto | Texto longo com OSHI Mesh |
| --- | --- | --- |
| **Pacotes enviados** | Um pacote de dados | Vários pacotes de dados, além de um recibo de entrega e quaisquer solicitações ou novas tentativas para fragmentos ausentes. |
| **Tráfego de repetição** | Cada repetidor pode encaminhar o único pacote de dados. | Repetidores podem encaminhar cada fragmento, adicionando transmissões pela malha. |
| **Impacto em outro tráfego** | Menos airtime | Mais airtime. Em um canal ocupado, transmissões sobrepostas podem causar perda de pacotes e atrasos. |
| **Condições para entrega** | Um pacote de dados precisa chegar. | Todos os fragmentos precisam chegar. Um link estável e airtime suficiente para novas tentativas ajudam. |


### Limitação de comprimento de mensagem em LoRa

Uma mensagem de texto Meshtastic padrão cabe em aproximadamente **230 bytes** em um único pacote. Emojis e muitos caracteres que não são em inglês usam vários bytes cada.

[OSHI Mesh](https://github.com/Lastoneparis/oshi-mesh-protocol) adiciona suporte a texto longo em três etapas.

1. **Dividir.** O remetente divide a mensagem em fragmentos numerados e os transporta em pacotes compatíveis com Meshtastic.
2. **Preencher lacunas.** O receptor solicita fragmentos ausentes para que o remetente possa reenviar essas partes.
3. **Reagrupar e confirmar.** O nó receptor coloca os fragmentos em ordem e pode enviar um recibo para a mensagem completa.

![Texto longo é dividido em pacotes, o pacote ausente é reenviado via LoRa e a mensagem é remontada](https://files.seeedstudio.com/wiki/SenseCAP/oshimesh/Deliverylogic.png)

### OSHI Mesh

![Site e prévia do app OSHI Messenger](https://files.seeedstudio.com/wiki/SenseCAP/oshimesh/Oshifirst.png)

- **OSHI Mesh** é o [firmware de rádio open-source](https://github.com/Lastoneparis/oshi-mesh-firmware) da OSHI. Ele usa configurações, canais e chaves LoRa compatíveis com Meshtastic. Nós executando qualquer um dos firmwares podem retransmitir o tráfego do outro quando configurados para isso. Mensagens longas, recibos de entrega e armazenamento e encaminhamento usam o Protocolo OSHI Mesh.
- **Quando usar.** Envie atualizações ocasionais de vários parágrafos, como direções de rota ou uma passagem de turno em campo, quando o serviço celular não estiver disponível e você quiser confirmar que todo o texto chegou. Com uma versão de app compatível, você pode enviar mensagens de vários milhares de caracteres. O comprimento exato depende de quantos bytes o texto usa.

## Gravar o OSHI Mesh no T1000-E

![SenseCAP T1000-E, cabo de dados magnético e página de gravação do OSHI Mesh](https://files.seeedstudio.com/wiki/SenseCAP/oshimesh/OshiT1000-E.png)

Se ambos os rastreadores já estiverem executando o firmware OSHI Mesh `2.8.1.fda175c`, você pode seguir para a configuração do app usando o mesmo firmware.

1. Baixe o arquivo UF2 do **SenseCAP T1000-E** em **Boards that install a different way**. [OSHI Mesh flash page](https://oshi-messenger.com/lora/flash/)
2. **Entre no modo DFU manualmente.** Conecte a ponta USB do cabo de dados magnético ao computador. Mantenha pressionado o botão do rastreador e, sem soltá-lo, conecte rapidamente o conector magnético ao rastreador duas vezes. O LED verde permanece aceso e a unidade **T1000-E** aparece. [Clique aqui](https://wiki.seeedstudio.com/pt-br/sensecap_t1000_e/#step-1-enter-dfu-mode) para ver instruções detalhadas para o modo DFU.

   ![Cabo de dados magnético do T1000-E e unidade DFU no Finder](https://files.seeedstudio.com/wiki/SenseCAP/oshimesh/T1000-EDFU.png)

3. Copie o arquivo UF2 para a unidade **T1000-E**. O rastreador será reiniciado automaticamente. Repita para o segundo rastreador.

Se você já tiver o Meshtastic CLI instalado, poderá entrar no modo DFU com o rastreador conectado via USB. Substitua `<YOUR_PORT>` pela sua porta serial.

```bash
meshtastic --port <YOUR_PORT> --enter-dfu
```

## Configure o app e envie uma mensagem longa

**Requisito do app.** Use dois celulares Android com uma versão OSHI que ofereça suporte a mensagens LoRa longas em OSHI Mesh.

1. Em cada celular, abra **Settings → LoRa Node** no OSHI e emparelhe um rastreador. Se for solicitado o PIN padrão, digite `123456`.
2. Defina ambos os rastreadores para a mesma região LoRa da sua localização e use o canal padrão. 
3. Troque uma mensagem curta para que cada celular aprenda o nó de contato do outro. Isso permite que o remetente receba um recibo de entrega para a mensagem longa.
4. Envie alguns parágrafos. Observe o status progredir de **Queued** para **Sent** e depois para **Delivered**. No segundo celular, verifique se todos os parágrafos aparecem juntos e na ordem correta.

## O que esperar

- **Tempo de entrega no app.** Considere cerca de **um a dois minutos** para uma mensagem longa na configuração de curto alcance acima. Tamanho da mensagem, configurações de rádio, tráfego no canal, repetidores e novas tentativas podem afetar a espera.
- **Mensagens em fila em EU_868.** O firmware acompanha o airtime de mensagens longas em uma janela móvel de uma hora para permanecer dentro do limite regional de duty-cycle. Após vários envios longos, uma nova mensagem pode permanecer **Queued** até que mais airtime esteja disponível. Para a demonstração, envie uma mensagem longa por vez e aguarde alguns minutos entre os envios.

## Armazenar e encaminhar

Um nó OSHI pode manter uma mensagem por até **72 horas** se o nó do contato offline já for conhecido. Mantenha o nó que está segurando a mensagem ligado para que ele possa encaminhar a mensagem quando o nó do contato voltar a ficar online e acessível. [Visão geral dos recursos do OSHI Mesh](https://oshi-messenger.com/lora/why-oshi-mesh)

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