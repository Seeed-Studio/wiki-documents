---
description: Guia da Série Edge
title: Guia da Série Edge
keywords:
  - Edge Series
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Edge_series_Intro
last_update:
  date: 10/24/2023
  author: Kasun Thushara
createdAt: '2023-07-21'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Edge_series_Intro/
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-platform/collection_page/Edge_Series_wiki_front.png" style={{width:1000, height:'auto'}}/></div>

## Introdução à Série Edge

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">EdgeBox ESP 100</th>
      <th class="table-trnobg">EdgeBox RPI 200</th>
      <th class="table-trnobg">EdgeLogix RPI 1000</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/e/d/edgebox-esp100_1.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Logix/edgelogix.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>O EdgeBox-ESP-100 é um controlador versátil e leve, com recursos sem fio e múltiplas opções de Fieldbus. Ele funciona como um CLP autônomo para automação em campo ou serve como um gateway industrial, permitindo a comunicação com o CLP original para conectividade de rede e nuvem.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Controladores industriais de computação de borda “tudo em um” baseados em Raspberry Pi. Alta escalabilidade, design robusto, ricos recursos de E/S e compatibilidade com o ecossistema de software industrial do Raspberry Pi o tornam uma escolha ideal para automação inteligente e soluções de IIoT.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Poderoso controlador industrial Raspberry Pi com ampla E/S, design modular, suporte a barramentos industriais e recursos sem fio. Ideal para automação “tudo em um”, destacando-se no gerenciamento de sistemas complexos com integração perfeita à nuvem.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/edge_box_esp/EdgeBox-ESP-100-User_Manual.pdf" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/Edge_Box/EdgeBox-RPi-200_Edge_Computing_Controller_User_Manual.pdf" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/Edge_Logix/EdgeLogix-RPI-1000-Datasheet-V1.0.pdf" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

## Aplicação do EdgeBox RPI 200

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Codesys para Edge Box RPi 200</font></th>
      <th class="table-trnobg"><font size={"4"}>Configuração do balena OS no EdgeBox RPi 200</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/codesys/codesysicon.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/balena.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>O wiki usa o Codesys Development System V3 para programar o EdgeBox-RPI-200, um CLP baseado em Raspberry Pi. Ele instala o runtime CODESYS Control for Raspberry Pi MC. Codesys é um software IEC 61131-3 para programação de controladores industriais.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Balena: plataforma de IoT para desenvolvedores implantarem e gerenciarem aplicações em frotas de dispositivos. Suporta diversas arquiteturas, permitindo atualizações fáceis e operação segura e confiável dos dispositivos em campo.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/Edgebox-rpi-200-codesys/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/Edgebox-rpi-200-balena-OS-setup/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
  </tr>
 </table>
</div]

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>EdgeBox RPi 200 com N3uron</font></th>
      <th class="table-trnobg"><font size={"4"}>EdgeBox RPi 200 com Módulo LoRaWAN®</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/n3uron/n3uron1.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114992991-wio-wm1302-lorawan-gateway-module-_spi_---us915-m---first.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Plataforma de borda industrial para IIoT e DataOps que facilita a integração perfeita entre o chão de fábrica e aplicações de terceiros. Possibilita pipelines de dados bidirecionais, desacopla dispositivos de aplicações e consolida, modela, processa e visualiza dados operacionais em uma única fonte de verdade. Melhora a disponibilidade de dados em toda a organização.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>WM1302: módulo de gateway LoRaWAN® de próxima geração no formato mini-PCIe. Alimentado pelo chip LoRaWAN® de banda base Semtech® SX1302, ele aprimora a transmissão sem fio de longa distância com maior sensibilidade, consumo reduzido de energia e menor temperatura de operação. O wiki aborda detalhes de instalação e uso.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/Edgebox-rpi-200-n3uron/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/EdgeBox-rpi-200-with-LoRaWAN-module/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

### Ignition Edge

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Primeiros Passos com Ignition Edge no Edgebox RPI 200</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/EdgeBox-200-Ignition/EdgeBox-200_Ignition_Edge.png" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Ignition Edge da Inductive Automation®: soluções de software Ignition® personalizadas e leves para dispositivos de campo e dispositivos OEM na borda da rede. Simplifica e torna a computação de borda mais acessível, permitindo a extensão perfeita da coleta de dados, visualização e gerenciamento de sistemas até a borda da rede.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/Edgebox-rpi-200-ignition-edge/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
    </tr>
 </table>
</div>

## Aplicação do EdgeBox ESP 100

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Primeiros Passos com Arduino no EdgeBox-ESP-100</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
    <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/e/d/edgebox-esp100_1.jpg" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> EdgeBox-ESP-100: Controlador baseado em ESP32 para automação leve. Possui entrada analógica para monitoramento e controle remotos, adequado para malhas de controle PID, sequenciamento lógico ou atuação como gateway com expansão de sensores sem fio e de campo. O wiki abrange a visão geral do hardware e instruções de programação em Arduino.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/Edgebox-ESP-100-Arduino/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
    </tr>
 </table>
</div>

## ✨ Projeto de Contribuição

- Temos uma lista de tarefas para atualizar esta página, que está categorizada em nosso [projeto de contribuição](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479), pois somos dedicados a aprimorar a experiência do usuário e fornecer melhor suporte por meio do desenvolvimento da nossa plataforma wiki.
- [Sua contribuição para esta página](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33963241) é essencial para nós! Valorizamos muito o seu feedback e agradeceríamos imensamente a sua ajuda na geração de ideias.

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
