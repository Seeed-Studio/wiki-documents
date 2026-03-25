---
description: Breakout para LinkIt Smart 7688 v2.0
title: Breakout para LinkIt Smart 7688 v2.0
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Breakout_for_LinkIt_Smart_7688_v2.0
sku: 103100022
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Breakout_for_LinkIt_Smart_7688_v2.0/
---

:::danger
Devido ao encerramento da MediaTek Labs, todos os links relacionados se tornaram inválidos. Se você precisar baixar arquivos relevantes, pesquise-os no seguinte link: [https://github.com/MediaTek-Labs](https://github.com/MediaTek-Labs).
:::

---
**Breakout for LinkIt Smart 7688 v2.0** é uma placa de expansão com portas Grove integradas para a placa de desenvolvimento LinkItTM Smart 7688. Esta breakout ajudará iniciantes a começar rapidamente porque pode economizar muito trabalho e tornar a prototipagem mais fácil por meio de fiação simplificada. Ela vem com portas USB, Ethernet e Áudio de 3,5 mm e suporta barramentos seriais como I2C, UART.

![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688_v2_0/image/Breakout_for_LinkIt_Smart_7688_v2.0_product_view_700.jpg)

**Rastreamento de Versão**

|Revisão do produto | Data de lançamento |Status de suporte |Notas                  |
|------------------|--------------|---------------|-----------------------|
|Versão 1.0       |Novembro de 2015 |Suportada      | Nenhuma                  |
|Versão 2.0       |Abril de 2016   |Suportada      | Consulte Novos Recursos |

**Novos recursos:**

- Suporta funcionalidade de gravação.
- Para o conector de telefone de 3,5 mm (conector de áudio), ele suporta os protocolos OMTP e CTIA. Você pode usar qualquer um dos protocolos alternando uma chave. Sobre como alternar o protocolo, role a página para baixo para ler **How to switch phone connector protocol between OMTP and CTIA**

[![enter image description here](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688_v2_0/image/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/Breakout-for-LinkIt-Smart-7688-v20-p-2641.html)

## Recursos

---
- A interface Grove torna a fiação mais fácil e permite expansões com módulos Grove.
- Host USB
- Saída de Áudio
- Porta Ethernet
- Custo-benefício
- Suporta funcionalidade de gravação
- Alternância entre OMTP e CTIA

## Ideias de aplicação

---
- Dispositivo IoT/Gateway.
- Robótica
- Dispositivos multimídia inteligentes
- Ensino e aprendizado

## Especificação

---

|Tensão de entrada|Tensão de operação|
|:---------------:|:---------------:|
|5.0V(Com porta de alimentação USB)  |  3.3V  |

:::note
    Os pinos de depuração, pinos Ethernet e pinos do host USB tipo A se conectam ao MT7688, outros pinos se conectam ao ATmega32U4.
:::

## Visão Geral de Hardware

---
![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688_v2_0/image/Breakout_for_LinkIt_Smart_7688_v2.0_hardware_connections_1200_s.jpg)

|Hardware|Qtd|Hardware|Qtd|Hardware|Qtd|
|---|---|---|---|---|---|
|Porta de depuração |1|Porta de headset|1|Pinos Aux|2|
|Porta Ethernet |1|Pinos para alternar protocolo |6|Conector Grove|3|
|USB tipo A |1|Interface de driver de Alto-falante Estéreo|1|Porta de headset| 1|

### Sobre a interface Grove

Se você já usou produtos [Grove](https://www.seeedstudio.com/wiki/Grove_System) da Seeed, você vai se apaixonar por esse tipo de módulo. Com esse tipo de portas, você pode dizer adeus a fios jumper e trabalho de soldagem, e pode fazer aplicações mais poderosas com esses módulos funcionais.

### Como alternar o protocolo do conector de telefone entre OMTP e CTIA

![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688_v2_0/image/Breakout_for_LinkIt_Smart_7688_v2.0_switch_procotol_1200_.jpg)

Se você comparar a V1.0 e a V2.0, poderá notar que há seis pinos e dois jumpers no canto inferior direito. Esses pinos são usados para alternar o protocolo do conector de telefone. Quando você ajusta o pequeno jumper (ambos) para os quatro pinos da esquerda, o protocolo OMTP é usado. Quando você ajusta o pequeno jumper (ambos) para os quatro pinos da direita (como mostra a figura anterior), o protocolo CTIA é usado. Como mostram as figuras a seguir:
Breakout for LinkIt Smart 7688 v2.0 CTIA OMTP Switch Manner.JPG
Observe que, para usar a funcionalidade de gravação, você precisa atualizar o firmware onboard para o firmware Breakout for LinkIt Smart 7688 (acima da versão v0.9.2).

![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688_v2_0/image/Breakout_for_LinkIt_Smart_7688_v2.0_CTIA_OMTP_Switch_Manner.JPG)

:::note
 * Como a velocidade de Escrita/Leitura da memória flash onboard é limitada, recomendamos que você use um dispositivo de armazenamento externo.
:::

## Primeiros passos

---
Neste tutorial, você vai fazer um simples reprodutor de MP3 com a Breakout for LinkIt Smart 7688 V2.0.

### Material necessário

Exceto pela Breakout for Linkit Smart 7688 V2.0, aqui estão outros materiais necessários para a aplicação. Antes de começar, certifique-se de que você tem tudo em mãos, ou você pode visitar o [Bazaar](https://www.seeedstudio.com/) da Seeed para obtê-los.

|LinkIt Smart 7688 × 1|Cabo USB (tipo A para micro tipo-B) × 2|UARTBee × 1|Fios jumper × 3
|:---:|:---:|:---:|:---:|
|![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688_v2_0/image/linkit%20smart%207688.jpg)|![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688_v2_0/image/48cmUSBc.jpg)|![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688_v2_0/image/UartSBee%20V5_01.jpg)|![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688_v2_0/image/jw100n.jpg)
|[Adquira agora](https://www.seeedstudio.com/Breakout-for-LinkIt-Smart-7688-v2.0-p-2641.html)|[Adquira agora](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)|[Adquira agora](https://www.seeedstudio.com/UartSBee-V5-p-1752.html)|[Adquira agora](https://www.seeedstudio.com/1-pin-dual-female-jumper-wire-100mm-50pcs-pack-p-260.html)|

Para os 2 itens abaixo, acredito que você certamente já os tenha.

- Alto-falante Estéreo (com cabo de áudio de 3,5 mm) × 1
- Pendrive USB (com arquivo de áudio em formato MP3 dentro) × 1

**Step1:** Consulte [aqui](https://www.seeedstudio.com/wiki/LinkIt_Smart_7688#Introdução) para conectar seu LinkIt Smart 7688 à Internet.

:::note
    Você pode conectar fios jumper à porta MT7688 UART2 em vez de soldá-los aos pinos 8, 9 e GND.
:::
:::note
    Em casos raros, você pode não conseguir se conectar à Internet com sucesso, reinicie o sistema operacional embarcado.
:::
**Step2:** Abra um console com o adaptador USB para Serial.

**Step3:** Conecte todas as partes como a seguir:

![](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688_v2_0/image/Breakout_for_LinkIt_Smart_7688_demo_connection_New.jpg)

:::note
    Esta é uma figura da Breakout for LinkIt Smart 7688(v1.0).
:::
**Step4:** Entre na pasta do USB digitando **cd /Media/USB-A1** no console.

**Step5:** Reproduza música com o utilitário **Madplay**(instalado no OpenWRT) digitando **madplay filename.mp3** no console.

**Step6:** Agora você ouvirá a música.

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688_v2_0/resource/Breakout_for_LinkIt_Smart_7688_v2.0_schematic_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

- [Arquivos de esquemático](https://files.seeedstudio.com/wiki/Breakout_for_LinkIt_Smart_7688_v2_0/resource/Breakout_for_LinkIt_Smart_7688_v2.0_schematic_files.zip)
- [LinkIt smart 7688](https://www.seeedstudio.com/wiki/LinkIt_Smart_7688)
- [OpenWrt](http://wiki.openwrt.org/doc/howto/user.beginner)
- [Link para comprar um LinkIt Smart 7688](https://www.seeedstudio.com/depot/LinkIt-Smart-7688-p-2573.html?cPath=122_142)

## Projeto

**Smart Vendy** Acompanhando as vendas dos fornecedores para gerenciar efetivamente qual estoque precisa ser comprado para reabastecer as máquinas antes que fiquem sem produtos.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/sainath-komakula/smart-vendy-cd197e/embed' width='350'></iframe>

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
