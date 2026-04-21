---
description: Guia para gravar o firmware de repetidor MeshCore no ESP32S3 via Web USB, juntamente com a configuração do app para região LoRa e definição de rota.
title: Introdução ao ESP32 MeshCore
keywords:
  - Meshcore
  - ESP32 MeshCore
image: https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/t2.jpg
slug: /get_started_with_esp32s3_meshcore
sku: 102010611,113110064
sidebar_position: 3
last_update:
  date: 4/20/2026
  author: Michelle Huang
createdAt: '2026-04-20'
updatedAt: '2026-04-07'
url: https://wiki.seeedstudio.com/pt-br/get_started_with_esp32s3_meshcore/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/t2.jpg" alt="pir" width={800} height="auto" /></p>

[MeshCore](https://meshcore.io/) é um sistema de código aberto para habilitar comunicações seguras baseadas em texto utilizando hardware LoRa Mes. Você pode usar o repetidor MeshCore e o nó companheiro MeshCore para construir sua rede MeshCore. O [XIAO ESP32S3 & Wio-SX1262 Kit](https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html) é uma solução flexível para desenvolver um nó MeshCore.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

<br></br>

## Gravação de Firmware

Conecte seu dispositivo ao computador com um cabo USB. Certifique-se de que o cabo suporta transmissão de dados. 

:::warning
Mantenha o cabo USB conectado durante a transmissão de dados, caso contrário o dispositivo pode ser danificado.
:::

Acesse o [Meshcore Web Flasher](https://meshcore.io/flasher). 

Escolha `Seeed Studio Xiao S3 Wio` no grupo `Community Firmware`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/ScreenShot_2026-04-20_140721_194.png" alt="pir" width={800} height="auto" /></p>

Escolha `Repeater`. Se você quiser gravar outro firmware, por favor [clique aqui](https://docs.meshcore.io/) para ver o tutorial.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/RepeaterFirmware.png" alt="pir" width={800} height="auto" /></p>


Selecione a versão do firmware.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/FirmwareVersion.png" alt="pir" width={600} height="auto" /></p>

Enquanto pressiona o botão `Boot(B)`, pressione o botão `Reset(R)` para entrar no modo de gravação.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/RB.png" alt="pir" width={300} height="auto" /></p>

Escolha `Erase device `, depois clique em `Flash` e escolha a porta serial chamada `Xiao xxx` ou `debug unit xxx`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/Flash1.png" alt="pir" width={800} height="auto" /></p>

Quando a barra de progresso estiver completamente preenchida, isso indica que o Flash foi concluído. Em seguida, o dispositivo será reiniciado automaticamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/FlashigComplete.png" alt="pir" width={800} height="auto" /></p>

Clique no botão `Reset(R)` para reiniciar o dispositivo.

## Conexão do Dispositivo

### Conectado ao SX-1262

O SX-1262 pode ser conectado ao Xiao ESP32-S3 através da interface B2B. O SX-1262 usa SPI para se comunicar com o Xiao ESP32-S3.

O diagrama a seguir mostra o mapeamento de pinos B2B entre o XIAO ESP32S3 e o Wio-SX1262.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/img/ESP32-S3B2B%E5%BA%A7%E5%AD%90%E5%BC%95%E8%84%9A%E5%9B%BE.png" style={{width:700, height:'auto'}} alt="B2B pin mapping between XIAO ESP32S3 and Wio-SX1262"/>
</div>
:::warning
O SX-1262 compatível só pode ser comprado dentro do kit.
:::

### (Opcional) Conectado à bateria

O XIAO ESP32S3 possui um chip de gerenciamento de energia integrado que permite que o XIAO ESP32S3 seja alimentado de forma independente usando uma bateria ou que carregue a bateria através da porta USB do XIAO ESP32S3.

Se você quiser conectar a bateria ao XIAO, recomendamos que você compre uma bateria recarregável `3.7V lithium` qualificada com `protection circuit`. Ao soldar a bateria, tenha cuidado para distinguir entre os terminais positivo e negativo. O terminal negativo da fonte de alimentação deve ser o lado mais próximo da porta USB, e o terminal positivo da fonte de alimentação é o lado mais distante da porta USB.

<div class="table-center">
<iframe width="730" height="420" src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/Xiao%20Esp32S3%20Battery%20Connection.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### (Opcional) Conectado à placa de expansão

A placa de expansão é uma boa ferramenta para conexão e aplicações adicionais, como adicionar sensores e módulos Grove com facilidade.

<table align="center">
<tbody><tr>
<th>Kit XIAO ESP32S3 & Wio-SX1262 para Meshtastic & LoRa</th>
<th>(Opcional) Módulo L76K GNSS</th>
</tr>
<tr>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/t2.jpg" style={{width:300, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/Expansion.jpg" style={{width:350, height:'auto'}}/></div></td>
</tr>
<tr>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank" rel="noopener noreferrer">
<strong><span><font color={'FFFFFF'} size={"4"}> Ver mais🖱️</font></span></strong>
</a>
</div></td>
</tr>
</tbody></table>

## Configuração

### Configuração Inicial

Quando o firmware de repetidor MeshCore é gravado em um dispositivo MeshCore pela primeira vez, é necessário definir a frequência do dispositivo para que ele utilize a frequência que é legal em seu país ou região.

[Clique aqui](https://config.meshcore.io/) para configurar o repetidor.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Altere a região LoRa e salve a configuração. Em seguida, o dispositivo será reiniciado automaticamente. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/Configure.png" alt="pir" width={800} height="auto" /></p>

**Lista de Regiões**

|**Código da Região**|**Descrição**|**Faixa de Frequência (MHz)**|**Ciclo de Trabalho (%)**|**Limite de Potência (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Não definido|N/A|N/A|N/A|
|US|Estados Unidos|902.0 - 928.0|100|30|
|EU_868|União Europeia 868MHz|869.4 - 869.65|10|27|

:::info
**EU_868** deve obedecer a uma limitação de ciclo de trabalho horário de 10%, calculada a cada minuto com base em uma janela móvel de 1 hora. Seu dispositivo irá parar de transmitir se você atingir esse limite, até que seja permitido novamente.
:::

Então você pode começar a testar sua própria rede Mesh.

### Enviar Anúncio

Clique em "send advert" para permitir que outros dispositivos Meshcore vejam este repetidor. Em seguida, o repetidor poderá ser visto na lista de dispositivos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/SendAdvert.png" alt="pir" width={800} height="auto" /></p>

### Login de Administrador

A senha padrão de administrador para um repetidor é `password`. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/Admin.png" alt="pir" width={800} height="auto" /></p>

Após fazer login, você pode ver a página de configuração. Agora você pode ajustar a configuração do repetidor no aplicativo hone.

### Definir Rota

Antes de adicionar o repetidor à sua rota, talvez seja necessário usar o repetidor para enviar anúncio primeiro. O repetidor enviará anúncios automaticamente em intervalos regulares. Esse intervalo pode ser de várias horas (padrão 3 horas). Portanto, você precisa enviar anúncios manualmente ou então terá que esperar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/ESP32S3/SendAdvert.png" alt="pir" width={800} height="auto" /></p>

Você pode definir manualmente a rota de envio de mensagens. Conecte seu dispositivo companheiro Bluetooth ao aplicativo do telefone. Abra uma janela de mensagem privada. Então você pode escolher o repetidor descoberto para formar sua rota.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/SetPath1.png" alt="pir" width={600} height="auto" /></p>

Após definir a rota, o método de transmissão será alterado para "n hop". Por exemplo, se você adicionar 1 repetidor à sua rota, ele será alterado para 1 hop.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/1Hop.png" alt="pir" width={300} height="auto" /></p>

### (Opcional) Outras Configurações

Se você quiser mostrar a posição do repetidor em um mapa de nós MeshCore, primeiro precisa instalar um módulo GPS no kit. 

<table align="center">
<tbody><tr>
<th>Kit XIAO ESP32S3 & Wio-SX1262 para Meshtastic & LoRa</th>
<th>(Opcional) Módulo L76K GNSS</th>
</tr>
<tr>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/t2.jpg" style={{width:300, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg" style={{width:350, height:'auto'}}/></div></td>
</tr>
<tr>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank" rel="noopener noreferrer">
<strong><span><font color={'FFFFFF'} size={"4"}> Ver mais🖱️</font></span></strong>
</a>
</div></td>
</tr>
</tbody></table>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Coonection.png" style={{width:800, height:'auto'}}/></div>

Em seguida, faça login no administrador para ativar o GPS.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/GPSS.jpg" alt="pir" width={300} height="auto" /></p>

Além disso, você pode ajustar o intervalo de transmissão do anúncio. A faixa de intervalo de `auto zero hop advert` é de 60-240 minutos. A faixa de intervalo de `auto flood advert` é de 3-168 horas. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/SolarNode/AdvertInterval.jpg" alt="pir" width={300} height="auto" /></p>

## Recursos
- **[PDF]**[Diagrama esquemático do SX1262 compatível com Xiao ESP32-S3](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Schematic_Diagram_Wio-SX1262_for_XIAO.pdf)
- **[PDF]**[Datasheet do módulo Wio-SX1262](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_Module_Datasheet.pdf)
- **[RAR]**[Arquivo 3D do Wio-SX1262 para XIAO](https://files.seeedstudio.com/products/SenseCAP/Wio_SX1262/Wio-SX1262_for_XIAO_3D_file.rar)
- **[PDF]** [Esquemático do Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_SCH_v1.2.pdf)
- [Biblioteca Kicad do Kit XIAO ESP32S3](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20Wio%20SX1262%20for%20XIAO%20ESP32S3)
- **[STEP]** [Modelo 3D do Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/seeed-studio-xiao-esp32s3-3d_model.zip)
- **[ZIP]** [Bibliotecas Eagle do Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_SCH&PCB_230327.zip)
- **[DXF]** [Dimensões do Seeed Studio XIAO ESP32S3 em DXF](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_v1.1_Dimensioning.dxf)
- **[LBR]** [Footprint Eagle do Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/Seeed-Studio-XIAO-ESP32S3-footprint-eagle.lbr)
- **[ZIP]** [Firmware de fábrica do Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-firmware-20240814.zip)
- **[XLSX]** [Planilha de pinout do Seeed Studio XIAO ESP32S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO_ESP32S3_Sense_Pinout.xlsx)
- 🔗 **[Kicad]** [FootPrint do Seeed Studio XIAO ESP32S3](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)
- [Arquivo 3D do case](https://www.thingiverse.com/thing:6888371)
## Recursos do curso

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[Ebook]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)
## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
