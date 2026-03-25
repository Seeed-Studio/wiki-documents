---
description: Xadow - Adaptador Pebble Time
title: Xadow - Adaptador Pebble Time
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_Pebble_Time_Adapter
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Xadow_Pebble_Time_Adapter/
---

![](https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/img/Xadow_Pebble_Time_Adapter_wiki.png)

A introdução dos módulos RePhone (Xadow) torna seu smartwatch ainda mais inteligente. Com base na [nova porta de acessório inteligente na parte de trás do Pebble Time](http://developer.getpebble.com/guides/hardware/), nós integramos os módulos RePhone finos e pequenos – Xadow GPS v2 e Xadow NFC v2, ao ecossistema existente do Pebble, para ajudar a aprimorar sua capacidade do ponto de vista da eletrônica integrada. O Xadow Pebble Time Adapter permite que os módulos RePhone(Xadow) se comuniquem com o Pebble Time por meio da interface Smartstrap usando o protocolo serial de um fio (One-wire).

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/RePhone-Strap-Kit-for-Pebble-Time-p-2633.html)

Especificações
--------------

O ‘GND’ e ‘PWR’ na estrutura traseira significam que você pode carregar seu Pebble Time sem tirar a carcaça.

![](https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/img/Pebble_base_2.png)

Visão geral de hardware
-----------------

### Processo de montagem

No uso diário, os módulos são colocados de forma uniforme em cada lado do relógio e interconectados com cabos FPC. As conexões entre o módulo e o adaptador são especialmente projetadas para ter uma forma extensível, de modo que puxões inesperados na conexão possam ser evitados. As portas de carregamento do Pebble Time ainda são acessíveis na parte de trás do adaptador para carregamentos diários do relógio.

Um desenho esquemático do processo de montagem do RePhone Strap Kit para Pebble Time é fornecido abaixo

![](https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/img/Xadow_Pebble_Time_Adapter_assembly3.png)

Baixar o aplicativo Xadow para Pebble Time
--------------------------------------

Você pode seguir as instruções para baixar o aplicativo Xadow para Pebble Time, acessar as informações de GPS e o ID da Tag no seu Pebble Time.

O aplicativo de demonstração pode ser baixado em [pebbleapp_jack.pbw 下载地址](https://github.com/Seeed-Studio/Xadow_Strap/raw/master/build/pebbleapp_jack.pbw). Você pode baixá-lo em seu smartphone ou enviá-lo do PC para o smartphone. Em seguida, selecione abri-lo com o aplicativo "Pebble Time" no seu telefone. Você terá a opção de instalar o aplicativo de demonstração no seu Pebble Time.

![](https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/img/Xadow_Pebble_Time_Adapter_APP_UI.png)

Guia de programação
-----------------

### Conversando com o adaptador

O firmware do adaptador implementa o protocolo descrito na documentação oficial do Pebble: [Pebble Smartstrap Protocol](http://developer.getpebble.com/guides/hardware/smartstrap-protocol/)

Portanto, os recursos que podem ser chamados a partir do lado do watchapp são os seguintes:

<table>
<thead>
<tr class="header">
<th>Serviço</th>
<th>Atributo</th>
<th>R/W</th>
<th>Tipo de dado</th>
<th>Dado</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>0x0 Dados brutos</td>
<td>0x0 Dados brutos</td>
<td>RW</td>
<td>uint8 *buffer</td>
<td>Sem manipulador no lado do adaptador, deixa a expansibilidade para o programador do firmware do adaptador</td>
</tr>
<tr class="even">
<td>0x2003 Serviço de bateria</td>
<td>0x1001 Obter tensão da bateria</td>
<td>R</td>
<td>uint16</td>
<td>A tensão da bateria da pulseira em Volt com precisão de 1/100. Por exemplo, a tensão é 3,70 V, o que seria especificado como 370.</td>
</tr>
<tr class="odd">
<td>0x2003 Serviço de bateria</td>
<td>0x1002 Ativar ou desativar o carregamento do pebble com a bateria da pulseira</td>
<td>RW</td>
<td>uint8</td>
<td>0: Não carregar o pebble. 1: Carregar o pebble.</td>
</tr>
<tr class="even">
<td>0x2001 Serviço de localização e navegação</td>
<td>0x0001 Localização</td>
<td>R</td>
<td>sint32[2]</td>
<td>A longitude e latitude atuais em graus com precisão de 1/10^7. A latitude vem antes da longitude nos dados. Por exemplo, a sede do Pebble fica em (37.4400662, -122.1583808), o que seria especificado como {374400662, -1221583808}.</td>
</tr>
<tr class="odd">
<td>0x2001 Serviço de localização e navegação</td>
<td>0x0003 Velocidade</td>
<td>R</td>
<td>uint16</td>
<td>A velocidade atual em metros por segundo com precisão de 1/100. Por exemplo, 1,5 m/s seria especificado como 150.</td>
</tr>
<tr class="even">
<td>0x2001 Serviço de localização e navegação</td>
<td>0x1001 Altitude</td>
<td>R</td>
<td>uint16</td>
<td>A altitude atual em metros com precisão de 1/100. Por exemplo, 100 m seriam especificados como 10000.</td>
</tr>
<tr class="odd">
<td>0x2001 Serviço de localização e navegação</td>
<td>0x0101 Satélites GPS</td>
<td>R</td>
<td>uint8</td>
<td>O número de satélites GPS (normalmente reportado via NMEA). Observe que esse número é para satélites visíveis.</td>
</tr>
<tr class="even">
<td>0x2001 Serviço de localização e navegação</td>
<td>0x0102 Qualidade do fix GPS</td>
<td>R</td>
<td>uint8</td>
<td>A qualidade do fix do GPS (reportada via NMEA). Os valores possíveis estão listados na <a href="http://www.gpsinformation.org/dale/nmea.htm#GGA">especificação NMEA</a>.</td>
</tr>
<tr class="odd">
<td>0x1E01 Serviço NFC</td>
<td>0x1001 Obter UID de uma tag NFC</td>
<td>R</td>
<td>uint8 *</td>
<td>O UID será retornado com comprimento variável que pode ser indicado no SmartstrapReadHandler com o parâmetro length.
<strong>Esse atributo pode ser notificado no SmartstrapNotifyHandler.</strong></td>
</tr>
<tr class="even">
<td>0x1E01 Serviço NFC</td>
<td>0x1002 Ler dados NDEF</td>
<td>R</td>
<td>uint8 *</td>
<td>Os dados NDEF serão retornados com comprimento variável que pode ser indicado no SmartstrapReadHandler com o parâmetro length.</td>
</tr>
<tr class="odd">
<td>0x1E01 Serviço NFC</td>
<td>0x1003 Gravar dados NDEF</td>
<td>W</td>
<td>uint8 *</td>
<td>Grava um buffer uint8 na tag NFC</td>
</tr>
<tr class="even">
<td>0x1E01 Serviço NFC</td>
<td>0x1004 Apagar dados NDEF</td>
<td>W</td>
<td>qualquer tipo</td>
<td>Grave qualquer conteúdo ou vazio para acionar a exclusão.</td>
</tr>
</tbody>
</table>

O código-fonte do aplicativo de demonstração para o Pebble pode ser baixado no GitHub: [Xadow_Strap Repository](https://github.com/Seeed-Studio/Xadow_Strap)

Este aplicativo é apenas para demonstração de chamada parcial de atributos, sinta-se à vontade para imaginar seu próprio aplicativo Pebble fantástico com base na capacidade de GPS, NFC e muito mais.

### Programando o adaptador

O adaptador é construído com LPC11U35 e executa software mbed. O firmware inicial está localizado em mbed.org. Dê uma olhada em [Xadow Smartstrap for Pebble](https://developer.mbed.org/teams/Seeed/code/xadow_smartstrap_for_pebble/)

O esquema em Eagle do adaptador pode ser baixado [aqui:](https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/res/Xadow_Pebble_Time_Adapter.rar)

Depois de compilar o binário do firmware, você pode seguir os passos abaixo para gravar o binário no adaptador.

1) Hackear um cabo USB e soldar os fios nas ilhas de solda de acordo.

![](https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/img/Hack_USB_cable-03.png)

2) Certifique-se de que a bateria esteja desconectada e conecte o USB ao PC.

3) Faça um curto entre os pinos "ISP" e "GND".

![](https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/img/ShortISP_GND.PNG)

4) Conecte a bateria para ligar o adaptador

5) Haverá uma unidade USB no seu PC, abra-a e exclua qualquer coisa dentro do disco, então copie o binário do firmware para o disco.

6) Desligue e ligue, o firmware estará atualizado.

Comunidade RePhone
-----------------

[![](https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/img/RePhone_Community-2.png)](https://community.seeedstudio.com/discover.html?t=RePhone)

Temos procurado um lugar melhor onde nossos apoiadores (usuários do RePhone) possam se sentar juntos, de forma acolhedora e confortável, conversar sobre o RePhone, discutir problemas técnicos, compartilhar ideias/projetos e dar feedback sobre o desenvolvimento dos módulos no futuro. E então aqui está, a Comunidade RePhone.

Agora junte-se a nós na [Comunidade RePhone](https://community.seeedstudio.com/discover.html?t=RePhone)! Juntos buscamos respostas, fazemos coisas interessantes, cuidamos uns dos outros e compartilhamos nossas experiências.


## Visualizador de esquemático online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/res/Xadow_Pebble_Time_Adapter.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


Recursos
---------

- [Arquivos Eagle do Xadow Pebble Time Adapter](https://files.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter/res/Xadow_Pebble_Time_Adapter.rar)
- [Perguntas frequentes sobre RePhone (FAQs)](https://forum.seeedstudio.com/viewtopic.php?f=71&t=6664&p=23753)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Xadow_Pebble_Time_Adapter -->

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer a você diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
