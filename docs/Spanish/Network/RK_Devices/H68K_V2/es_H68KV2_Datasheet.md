---
description: LinkStar-V2 manual instuction
title: Introducción a LinkStar-V2
keywords:
- Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/h68kv2_datasheet
last_update:
  date: 06/10/2025
  author: Guillermo
---

<!-- ---
name: 
category: 
bzurl: 
prodimagename:
surveyurl: 
sku: 102110958
tags:
--- -->

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/01.jpg" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LinkStar-H68K-1432-V2-p-5886.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Introducción

El router LinkStar-H68K-V2 está equipado con un chip quad-core Cortex-A55 RK3568, que cuenta con 4 interfaces Ethernet para doble 2.5G y doble 1G, junto con tecnología Wi-Fi 6, ofreciendo además alta capacidad de almacenamiento y funcionalidad de reproductor multimedia, recomendado para uso en interiores. En comparación con la primera generación H68K, no solo tiene mejor comunicación y disipación de calor, sino que también el diseño de los puertos es más razonable y conveniente. En esta wiki te mostraremos una visión general del hardware y cómo comenzar rápidamente con LinkStar-V2.

## Visión General del Hardware

Esta es la visión general del hardware del LinkStar - H68K - V2, aquí te presentaremos los detalles de cada componente.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/02.jpg" /></div>

### Fuente de Alimentación

<!-- <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-y6fn{background-color:#c0c0c0;text-align:left;vertical-align:top}\n.tg .tg-0lax{text-align:left;vertical-align:top}\n" }} /> -->

<table className="tg">
  <thead>
    <tr>
      <th className="tg-y6fn">Voltaje de Operación</th>
      <th className="tg-0lax">Soporta entrada de voltaje DC amplio de 5V a 20V, con requerimiento de potencia >10W</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="tg-y6fn">Adaptador de corriente DC</td>
      <td className="tg-0lax">Se canceló la alimentación por interfaz DC de 12V</td>
    </tr>
    <tr>
      <td className="tg-y6fn"><span style={{fontWeight: 400, fontStyle: 'normal'}}>Alimentación por Tipo-C</span></td>
      <td className="tg-0lax">Soporta carga rápida PD a través de la línea CC</td>
    </tr>
  </tbody>
</table>

### Ethernet Networking

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/03.jpg" /></div>

### Chip Performace

RK3568 is a 4K flagship SoC chip with high cost performance owned by SWICK. It adopts ARM architecture and integrates a quad-core Cortex-A55 with a separate NEON coprocessor to support 4K video decoding and 3K video encoding. Many powerful embedded hardware engines provide optimized performance for high-end applications.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/04.png" /></div>
<br/>
<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/05.png" /></div>

### Interfaces

<!-- <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}\n.tg .tg-w2ai{background-color:#FFF;border-color:inherit;color:#3D3D3D;text-align:left;vertical-align:top}\n.tg .tg-2e9t{background-color:#FFF;color:#3D3D3D;text-align:left;vertical-align:top}\n" }} /> -->

<table class="tg">
<tbody>
  <tr>
    <td class="tg-0pky">ETH0</td>
    <td class="tg-0pky">Soporta Ethernet de 1G con chip PHY RTL8211F</td>
  </tr>
  <tr>
    <td class="tg-0pky">ETH1</td>
    <td class="tg-0pky">Soporta Ethernet de 1G con chip PHY RTL8211F</td>
  </tr>
  <tr>
    <td class="tg-0pky">ETH2</td>
    <td class="tg-0pky">Soporta Ethernet de 2.5G/1G con chip PHY RTL8211F</td>
  </tr>
  <tr>
    <td class="tg-0pky">ETH3</td>
    <td class="tg-0pky">Soporta Ethernet de 2.5G/1G con chip PHY RTL8211F</td>
  </tr>
    <tr>
    <td class="tg-0pky">USB3.0 Type-C</td>
    <td class="tg-0pky">Soporta carga rápida PD mediante línea CC y entrada de voltaje DC de 5V a 20V</td>
  </tr>
    <tr>
    <td class="tg-0pky">USB 3.0 Type-A</td>
    <td class="tg-0pky">x1</td>
  </tr>
    <tr>
    <td class="tg-0pky">USB 2.0 Type-A</td>
    <td class="tg-0pky">x1</td>
  </tr>
  <tr>
    <td class="tg-0pky">M2 WIFI</td>
    <td class="tg-0pky">Módulo MT7921 con interfaz PCIE2.0</td>
  </tr>
    <tr>
    <td class="tg-0pky">HDMI</td>
    <td class="tg-0pky">HDMI 2.0 para salida 4K, audio y video</td>
  </tr>
  <tr>
    <td class="tg-0pky">Receptor Infrarrojo</td>
    <td class="tg-0pky">Modelo IRM-3638</td>
  </tr>
  <tr>
    <td class="tg-0pky">Ranura para tarjeta TF</td>
    <td class="tg-0pky">Señal SDIO SDMMC0</td>
  </tr>
</tbody>
</table>

### Luz Indicadora

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LinkStar_V2/06.png" /></div>

<!-- <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-y698{background-color:#efefef;border-color:inherit;text-align:left;vertical-align:top}\n.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}\n" }} /> -->

<table class="tg">
<thead>
  <tr>
    <th class="tg-y698">Encendido</th>
    <th class="tg-y698">Indicador de Disco Duro</th>
    <th class="tg-y698">Indicador ETH</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">Indicador de operación/actividad</td>
    <td class="tg-0pky">Indicación de conexión del disco duro</td>
    <td class="tg-0pky">Indicación de conexión de red</td>
  </tr>
</tbody>
</table>

## Inicio Rápido

Con el sistema OpenWRT preinstalado, puedes usar directamente tu LinkStar una vez que recibas el paquete.

### Preparativos

- LinkStar-H68K-V2
- Cable de Red x2
- Adaptador de corriente compatible con carga rápida PD mediante línea CC

### Instalación

- **Paso 1.** ETH0 es el puerto WAN y los otros puertos de red son puertos LAN. Si deseas administrar el OpenWRT del LinkStar-V2 mediante un cable de red, conecta el cable a un puerto LAN diferente de ETH0.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LinkStar_V2/33.png" /></div>

- **Paso 2.** Enciéndelo conectando un adaptador de corriente rápida PD con línea CC.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LinkStar_V2/32.png" /></div>

- **Paso 3.** Administra el backend de OpenWRT

Usa un cable de red para conectarte al puerto de red ETH1/ETH2/ETH3 del LinkStar-V2. Luego ingresa la dirección: `192.168.100.1` en tu navegador para acceder al panel de administración.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/31.png" /></div>

El usuario y contraseña inicial para el sistema son los siguientes.

```text
account: root
password: password
```

## Recursos

LinkStar H68K-V2 es hardware de código abierto. A continuación se encuentran los enlaces de descarga de materiales relevantes.

| Versión                     | Descripción             | Descarga                                                    |
| -------------------------- | ----------------------- | ----------------------------------------------------------- |
| OpenWRT R22.11.18          | Añade soporte para Docker | [Descargar](https://files.seeedstudio.com/wiki/LinkStar_V2/download/openwrt-rockchip-R22.11.18.zip) |
| Armbian 24.5.0 desktop (Opcional) | -                     | [Descargar](https://files.seeedstudio.com/wiki/LinkStar_V2/download/Armbian_community_24.5.0_trunk.389_h68k_desktop.zip) |
| Herramienta y driver para flashear a eMMC | -         | [Descargar](https://files.seeedstudio.com/wiki/LinkStar_V2/download/H68K_Flash_Tools.zip) |
| balenaEtcher               | Herramienta para grabar ISO | [Descargar](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/balenaEtcher-Portable-1.5.109.zip) |
| H68K-V2-SCH                | Esquemáticos del H68K   | [Descargar](https://files.seeedstudio.com/wiki/LinkStar_V2/H68K_V2_Schematic.pdf) |
| Hoja de datos RK3568       | -                       | [Descargar](https://files.seeedstudio.com/wiki/LinkStar/RK3568_Brief_Datasheet.pdf) |
| Módulo Wi-Fi M7921E        | -                       | [Descargar](https://files.seeedstudio.com/wiki/LinkStar/M7921E_Wi-Fi_Module.pdf) |

## Soporte Técnico y Discusión sobre el Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y asegurar que tu experiencia sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a tus preferencias y necesidades.


<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
