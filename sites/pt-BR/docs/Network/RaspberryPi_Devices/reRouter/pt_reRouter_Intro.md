---
description: Guia do reRouter
title: Guia do reRouter
keywords:
  - reRouter
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reRouter_Intro
last_update:
  date: 10/16/2023
  author: Kasun Thushara
createdAt: '2023-07-20'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reRouter_Intro/
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/mini_router_overview.png" style={{width:500, height:'auto'}}/></div>

Este Mini Router é equipado com duas portas Ethernet Gigabit e duas portas USB 3.0, tornando‑o adequado para aplicações de roteador por software, mantendo o hardware no mínimo. Pré-instalamos um Raspberry Pi Compute Module 4 com 4GB de RAM e 32GB de eMMC para permitir tempos de inicialização rápidos e uma experiência geral fluida.

## Primeiros Passos com o reRouter

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Primeiros Passos com OpenWrt no seu Roteador</th>
      <th class="table-trnobg">Placa carrier do reRouter - Visão Geral do Hardware</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/mini_router.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/thumb.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Neste wiki, explore o OpenWrt — um sistema operacional Linux de código aberto para roteadores e dispositivos embarcados. Ele oferece recursos, desempenho e segurança aprimorados, com um sistema de arquivos personalizável e gerenciamento de pacotes. Acessar o roteador apresenta um painel bonito e interativo. </font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Neste wiki, explore a visão geral de hardware de um roteador de pequeno porte — a Dual Gigabit Carrier Board alimentada por Raspberry Pi Compute Module 4. Com portas Ethernet Gigabit duplas, portas USB 3.0 e vários periféricos de E/S, é ideal para aplicações de roteador por software mantendo um formato compacto. Adequado para makers de HTPC, desenvolvedores Linux e usuários de Raspberry Pi. </font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/Raspberry-OpenWrt-Getting-Started/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/Dual-Gigabit-Ethernet-Carrier-Board-for-Raspberry-Pi-CM4/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

## Aplicação

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Primeiros Passos com OpenWRT</th>
      <th class="table-trnobg">Plex Media Server</th>
      <th class="table-trnobg">Uso do Mender</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/openwrt-wiki-thumb.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/rpi-tv.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/mender.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Neste wiki, fornecemos uma visão aprofundada do OpenWrt, discutindo seus recursos na interface gráfica. Explore como usar o OpenWrt como um roteador por software e um ponto de acesso WiFi.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Este guia explica como configurar o Plex Media Server como um contêiner Docker no firmware OpenWrt da Seeed. Com o Plex, você pode transmitir seus arquivos de mídia locais globalmente. O OpenWrt pode ser executado na placa ODYSSEY – X86 ou na Dual Gigabit Ethernet Carrier Board para Raspberry Pi Compute Module 4. </font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Neste wiki, configure o Mender Client em uma Dual Gigabit Ethernet Carrier Board para Raspberry Pi Compute Module 4 e receba atualizações OTA de um Mender Server hospedado ou auto-hospedado. </font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/OpenWrt-Getting-Started/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/OpenWrt-Plex-Media-Server-on-Docker/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/Mender-Client-dual-GbE-CM4/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Saiba Mais</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

## ✨ Projeto de Contribuidores

- Temos uma lista de tarefas para atualizar esta página, que está categorizada em nosso [projeto de contribuidores](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479), pois estamos empenhados em aprimorar a experiência do usuário e fornecer melhor suporte por meio do desenvolvimento da nossa plataforma wiki.
- [Sua contribuição para esta página](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33962991) é essencial para nós! Valorizamos muito a sua opinião e apreciaríamos imensamente sua ajuda na geração de ideias.

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
