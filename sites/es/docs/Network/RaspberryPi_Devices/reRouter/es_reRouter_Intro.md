---
description: Guía de reRouter
title: Guía de reRouter
keywords:
- reRouter
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reRouter_Intro
last_update:
  date: 10/16/2023
  author: Kasun Thushara
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/mini_router_overview.png" style={{width:500, height:'auto'}}/></div>

Este Mini Router está equipado con puertos Ethernet Gigabit duales y puertos USB 3.0 duales, lo que lo hace adecuado para aplicaciones de router por software, manteniendo el hardware al mínimo. Hemos preinstalado un Raspberry Pi Compute Module 4 con 4GB de RAM y 32GB de eMMC para permitir tiempos de arranque rápidos y una experiencia general fluida.

## Comenzando con reRouter

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Comenzando con OpenWrt en tu Router</th>
      <th class="table-trnobg">Placa portadora reRouter - Descripción del Hardware</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/mini_router.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/thumb.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>En esta wiki, explora OpenWrt—un SO Linux de código abierto para routers y dispositivos embebidos. Ofrece características mejoradas, rendimiento y seguridad, con un sistema de archivos personalizable y gestión de paquetes. Acceder al router presenta un panel de control hermoso e interactivo. </font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>En esta wiki, explora la descripción del hardware de un router de pequeña escala—la Placa Portadora Gigabit Dual alimentada por Raspberry Pi Compute Module 4. Con puertos Ethernet Gigabit duales, puertos USB 3.0 y varios periféricos de E/S, es ideal para aplicaciones de router por software manteniendo un factor de forma compacto. Adecuado para fabricantes de HTPC, desarrolladores de Linux y usuarios de Raspberry Pi. </font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Raspberry-OpenWrt-Getting-Started/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Dual-Gigabit-Ethernet-Carrier-Board-for-Raspberry-Pi-CM4/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

## Aplicación

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Primeros Pasos con OpenWRT</th>
      <th class="table-trnobg">Plex Media Server</th>
      <th class="table-trnobg">Uso de Mender</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/openwrt-wiki-thumb.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/rpi-tv.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/mender.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>En esta wiki, proporcionamos una vista en profundidad de OpenWrt, discutiendo sus características en la GUI. Explora cómo usar OpenWrt como un router por software y un punto de acceso WiFi.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Esta guía explica cómo configurar Plex Media Server como un contenedor Docker en el firmware Seeed OpenWrt. Con Plex, puedes transmitir tus archivos multimedia locales globalmente. OpenWrt puede ejecutarse en la ODYSSEY – X86 Board o en la Dual Gigabit Ethernet Carrier Board para Raspberry Pi Compute Module 4. </font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>En esta wiki, configura el Mender Client en una Dual Gigabit Ethernet Carrier Board para Raspberry Pi Compute Module 4 y recibe actualizaciones OTA desde un Mender Server Alojado o Auto-Alojado. </font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/OpenWrt-Getting-Started/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/OpenWrt-Plex-Media-Server-on-Docker/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/Mender-Client-dual-GbE-CM4/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

## ✨ Proyecto de Colaboradores

- Tenemos una lista de tareas para actualizar esta página, que está categorizada bajo nuestro [proyecto de colaboradores](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479), ya que estamos dedicados a mejorar la experiencia del usuario y brindar mejor soporte a través del desarrollo de nuestra plataforma wiki.
- [Tu contribución a esta página](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33962991) es esencial para nosotros! Realmente valoramos tu aporte y agradeceríamos mucho tu asistencia para generar ideas.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
