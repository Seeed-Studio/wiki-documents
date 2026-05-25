---
description: Mbed Shield
title: Mbed Shield
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /mbed_Shield
sku: 103030002
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-02'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/mbed_Shield/
---
![](https://files.seeedstudio.com/wiki/mbed_Shield/img/Mbed_Shield_01.jpg)

O Mbed Shield é a placa de aplicação Mbed baseada na Placa de Protótipo Mbed LPC1768. Tente imaginar controlar dispositivos Ethernet usando dados ambientais de sensores. Ele integra uma série de interfaces externas, como CAN, Ethernet, USB e 4 soquetes Grove padrão, todas juntas em uma única placa. O Mbed Shield também é compatível com outros shields Arduino padrão, oferecendo a você uma extensão ainda mais poderosa para o seu Mbed.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/mbed-shield-p-1390.html?cPath=132_134)

##   Características
---
*   Design em formato de shield padrão
*   Pinos base compatíveis com Arduino
*   Várias interfaces on-board: CAN, Ethernet, USB, Grove

##   Visão geral de hardware
---
![](https://files.seeedstudio.com/wiki/mbed_Shield/img/mBed_Shield_Hardware_Overview.jpg)

##   Primeiros passos
---
Aqui está uma breve descrição de como ler dados Ethernet e dados de um disco removível.
### Conexão

- Conecte o conector USB da Placa de Protótipo Mbed à porta USB do computador.
- Aguarde o aviso de novo hardware encontrado.
- Baixe [o Driver de porta serial do Mbed](https://files.seeedstudio.com/wiki/mbed_Shield/res/MbedDriver.zip) e instale-o.
- Conecte a Placa de Protótipo Mbed ao Mbed Base Shield.

### Ler um disco U

 O Universal Serial Bus (USB) é o barramento mais amplamente usado nos computadores atuais. O USB foi projetado especialmente para padronizar conexões entre o computador e periféricos. Por exemplo, teclados, mouses, dispositivos de áudio USB, impressoras, scanners, unidades de disco ou câmeras podem usar o mesmo barramento para trocar dados com um computador. Uma pilha de dispositivos USB foi desenvolvida para fornecer todos os ótimos recursos do USB ao mbed.

- Conecte um disco U na interface USB.
- Baixe [MSCUsbHost.bin](https://files.seeedstudio.com/wiki/mbed_Shield/res/MSCUsbHost.zip) e copie o arquivo para o Disco Mbed.

:::note
    1) O arquivo MSCUsbHost.bin é gerado pelo compilador online do Mbed. 2) Exclua quaisquer arquivos bin não relacionados que apareçam no disco Mbed.
:::
- Pressione o botão Reset. A porta serial deve receber as seguintes informações.

![](https://files.seeedstudio.com/wiki/mbed_Shield/img/MSCUsbHost.jpg)

### Ler dados Ethernet

Este exemplo demonstra como começar a usar a função Ethernet.

- Conecte um cabo Ethernet disponível na interface Ethernet.
![](https://files.seeedstudio.com/wiki/mbed_Shield/img/Mbed_Shield1.jpg)
- Baixe [TCPSocket_HelloWorld.bin](https://files.seeedstudio.com/wiki/mbed_Shield/res/TCPSocket_HelloWorld.zip) e copie o arquivo para o Disco MBED.

:::note
    Exclua quaisquer arquivos bin não relacionados que apareçam no disco Mbed.
:::
- Pressione o botão Reset. A porta serial deve receber as seguintes informações.
![](https://files.seeedstudio.com/wiki/mbed_Shield/img/Ethernet_Connector_Data.jpg)
- Abra a página da web e você poderá visualizar as informações retornadas.
![](https://files.seeedstudio.com/wiki/mbed_Shield/img/Mbed_Ethernet.jpg)


## Visualizador de esquemático online
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/mbed_Shield/res/Mbed_Shield_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



##   Recursos
---
- **[Eagle]**[Arquivo Eagle do Mbed Shield](https://files.seeedstudio.com/wiki/mbed_Shield/res/Mbed_Shield_Eagle_File.zip)
- **[PDF]**[Arquivo de esquemático do Mbed Shield](https://files.seeedstudio.com/wiki/mbed_Shield/res/mbed%20shield%20v0.9b%20Sch.pdf)
- **[PDF]**[Arquivo de PCB do Mbed Shield](https://files.seeedstudio.com/wiki/mbed_Shield/res/mbed%20shield%20v0.9b%20PCB.pdf)
- **[Tools]**[MSCUsbHost](https://files.seeedstudio.com/wiki/mbed_Shield/res/MSCUsbHost.zip)
- **[Tools]**[MbedDriver](https://files.seeedstudio.com/wiki/mbed_Shield/res/MbedDriver.zip)
- **[Tools]**[TCPSocket_HelloWorld](https://files.seeedstudio.com/wiki/mbed_Shield/res/TCPSocket_HelloWorld.zip)

## Suporte técnico & Discussão de produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer a você diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
