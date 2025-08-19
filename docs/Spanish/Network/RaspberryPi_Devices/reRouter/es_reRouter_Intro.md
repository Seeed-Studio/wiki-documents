---
description: reRouter Guide
title: Guía reRouter
keywords:
- reRouter
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reRouter_Intro
last_update:
  date: 10/06/2025
  author: Guillermo
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/mini_router_overview.png" style={{width:500, height:'auto'}}/></div>

Este mini router está equipado con puertos Ethernet Gigabit duales y puertos USB 3.0 duales, lo que lo hace adecuado para aplicaciones de router por software, manteniendo el hardware al mínimo. Hemos preinstalado un módulo Raspberry Pi Compute Module 4 con 4 GB de RAM y 32 GB de eMMC para permitir tiempos de arranque rápidos y una experiencia general fluida.

## Primeros Pasos con reRouter

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Primeros Pasos con OpenWrt en tu Router</th>
      <th class="table-trnobg">Placa base reRouter - Vista General del Hardware</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/mini_router.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Mini_Router/thumb.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>En esta wiki, explora OpenWrt, un sistema operativo Linux de código abierto para routers y dispositivos embebidos. Ofrece funciones mejoradas, mayor rendimiento y seguridad, con un sistema de archivos personalizable y gestión de paquetes. Al acceder al router, se presenta un panel interactivo y atractivo. </font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>En esta wiki, explora la vista general del hardware de un router de pequeña escala: la Placa Carrier Dual Gigabit alimentada por Raspberry Pi Compute Module 4. Con puertos Ethernet Gigabit dobles, puertos USB 3.0 y múltiples periféricos de E/S, es ideal para aplicaciones de router por software, manteniendo un diseño compacto. Adecuado para creadores de HTPC, desarrolladores de Linux y usuarios de Raspberry Pi. </font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Raspberry-OpenWrt-Getting-Started/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Dual-Gigabit-Ethernet-Carrier-Board-for-Raspberry-Pi-CM4/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

## Aplicaciones

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Primeros Pasos con OpenWRT</th>
      <th class="table-trnobg">Servidor Multimedia Plex</th>
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
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>En esta wiki, ofrecemos una visión detallada de OpenWrt, destacando sus funciones en la interfaz gráfica. Explora cómo usar OpenWrt como un router por software y como un punto de acceso WiFi.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Esta guía explica cómo configurar el servidor multimedia Plex como un contenedor Docker en el firmware OpenWrt de Seeed. Con Plex, puedes transmitir tus archivos multimedia locales a nivel global. OpenWrt puede ejecutarse en la placa ODYSSEY – X86 o en la Placa Carrier Dual Gigabit para el Raspberry Pi Compute Module 4. </font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>En esta wiki, configura el cliente Mender en una Placa Carrier Dual Gigabit para el Raspberry Pi Compute Module 4 y recibe actualizaciones OTA desde un servidor Mender alojado o autohospedado. </font></td>
    </tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/OpenWrt-Getting-Started/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/OpenWrt-Plex-Media-Server-on-Docker/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Mender-Client-dual-GbE-CM4/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Aprende Más</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

## ✨ Proyecto de Colaboradores

- Tenemos una lista de tareas para actualizar esta página, la cual está categorizada dentro de nuestro [proyecto de colaboradores](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479), ya que estamos comprometidos a mejorar la experiencia del usuario y brindar un mejor soporte a través del desarrollo de nuestra plataforma wiki.
- ¡[Tu contribución a esta página](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33962991) es esencial para nosotros! Valoramos mucho tus aportes y agradeceríamos enormemente tu ayuda generando ideas.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
