---
description: Manual de instrucciones del LinkStar-V2
title: Introducción al LinkStar-V2
keywords:
- Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/h68kv2_datasheet
last_update:
  date: 04/18/2024
  author: Parker
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
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Introducción

El router LinkStar-H68K-V2 está equipado con el chip RK3568 Cortex-A55 de cuatro núcleos, cuenta con 4 interfaces Ethernet para dual-2.5G y dual-1G, junto con tecnología Wi-Fi 6, mientras proporciona alta capacidad de almacenamiento y funcionalidad de reproductor multimedia, funcionando recomendado para uso en interiores. Comparado con la primera generación H68K, no solo tiene mejor comunicación y efecto de disipación de calor, sino que también el diseño de la interfaz es más razonable y conveniente. En esta wiki te mostraremos la descripción general del hardware y cómo comenzar rápidamente con LinkStar-V2.

## Descripción General del Hardware

Esta es la descripción general del hardware del LinkStar - H68K - V2, aquí te presentaremos los detalles sobre cada componente.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/02.jpg" /></div>

### Fuente de Alimentación

<!-- <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-y6fn{background-color:#c0c0c0;text-align:left;vertical-align:top}\n.tg .tg-0lax{text-align:left;vertical-align:top}\n" }} /> -->

<table className="tg">
  <thead>
    <tr>
      <th className="tg-y6fn">Voltaje de Operación</th>
      <th className="tg-0lax">Soporta entrada DC de voltaje amplio de 5V-20V, requerimiento de potencia >10W</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="tg-y6fn">Adaptador de Alimentación DC</td>
      <td className="tg-0lax">Fuente de alimentación de interfaz DC de 12V cancelada</td>
    </tr>
    <tr>
      <td className="tg-y6fn"><span style={{fontWeight: 400, fontStyle: 'normal'}}>Fuente de alimentación Type-C</span></td>
      <td className="tg-0lax">Soporta carga rápida PD por línea CC</td>
    </tr>
  </tbody>
</table>

### Redes Ethernet

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/03.jpg" /></div>

### Rendimiento del Chip

RK3568 es un chip SoC insignia 4K con alto rendimiento de costo propiedad de SWICK. Adopta arquitectura ARM e integra un Cortex-A55 de cuatro núcleos con un coprocesador NEON separado para soportar decodificación de video 4K y codificación de video 3K. Muchos motores de hardware embebido potentes proporcionan rendimiento optimizado para aplicaciones de alta gama.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/04.png" /></div>
<br/>
<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/05.png" /></div>

### Interfaces

<!-- <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}\n.tg .tg-w2ai{background-color:#FFF;border-color:inherit;color:#3D3D3D;text-align:left;vertical-align:top}\n.tg .tg-2e9t{background-color:#FFF;color:#3D3D3D;text-align:left;vertical-align:top}\n" }} /> -->

<table class="tg">
<tbody>
  <tr>
    <td class="tg-0pky">ETH0</td>
    <td class="tg-0pky">Soporta Ethernet 1G con chip PHY RTL8211F</td>
  </tr>
  <tr>
    <td class="tg-0pky">ETH1</td>
    <td class="tg-0pky">Soporta Ethernet 1G con chip PHY RTL8211F</td>
  </tr>
  <tr>
    <td class="tg-0pky">ETH2</td>
    <td class="tg-0pky">Soporta Ethernet 2.5G/1G con chip PHY RTL8211F</td>
  </tr>
  <tr>
    <td class="tg-0pky">ETH3</td>
    <td class="tg-0pky">Soporta Ethernet 2.5G/1G con chip PHY RTL8211F</td>
  </tr>
    <tr>
    <td class="tg-0pky">USB3.0 Type-C</td>
    <td class="tg-0pky">Soporta línea CC carga rápida PD y entrada DC de voltaje amplio 5V-20V</td>
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
    <td class="tg-0pky">HDMI 2.0 para salida 4K, tanto audio como visual</td>
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
    <th class="tg-y698">Alimentación</th>
    <th class="tg-y698">Indicador de Disco Duro</th>
    <th class="tg-y698">Indicador ETH</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">Indicador de Funcionamiento/Activo</td>
    <td class="tg-0pky">Instrucciones de conexión del Disco Duro</td>
    <td class="tg-0pky">Indicación de conexión de red</td>
  </tr>
</tbody>
</table>

## Inicio Rápido

Con el sistema OpenWRT preinstalado, puedes usar directamente LinkStar una vez que recibas el paquete.

### Preparativos

- LinkStar-H68K-V2
- Cable de red x2
- Adaptador de corriente de carga rápida PD con línea CC compatible

### Instalación

- **Paso 1**. ETH0 es el puerto WAN y los otros puertos de red son puertos LAN. Si quieres gestionar el OpenWRT de LinkStar-V2 a través de un cable de red, entonces conecta el cable de red a un puerto LAN que no sea ETH0.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LinkStar_V2/33.png" /></div>

- **Paso 2**. Enciéndelo conectando el adaptador de corriente de carga rápida PD con línea CC

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LinkStar_V2/32.png" /></div>

**Paso 3.** Gestiona el backend de OpenWRT

Usa un cable de red para conectar al puerto de red ETH1/ETH2/ETH3 del LinkStar-V2. Luego ingresa la dirección: `192.168.100.1` en tu navegador para acceder al backend de administración.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar_V2/31.png" /></div>

La cuenta y contraseña iniciales del sistema son las siguientes.

```text
account: root
password: password
```

## Recursos

LinkStar H68K-V2 es hardware de código abierto. Enlaces de descarga a materiales relevantes.

| Versión                     | Descripción      | Descarga                                                     |
| --------------------------- | ---------------- | ------------------------------------------------------------ |
| OpenWRT R22.11.18           | Añade soporte para Docker| [Descarga](https://files.seeedstudio.com/wiki/LinkStar_V2/download/openwrt-rockchip-R22.11.18.zip) |
| Armbian 24.5.0 desktop (Opcional)|-| [Descarga](https://files.seeedstudio.com/wiki/LinkStar_V2/download/Armbian_community_24.5.0_trunk.389_h68k_desktop.zip) |
| Herramienta y controlador Flash to eMMC | - | [Descarga](https://files.seeedstudio.com/wiki/LinkStar_V2/download/H68K_Flash_Tools.zip) |
| balenaEtcher                | Herramienta de grabación ISO  | [Descarga](https://files.seeedstudio.com/wiki/H28K/H28K_Tools/balenaEtcher-Portable-1.5.109.zip) |
| H68K-V2-SCH                    | Esquemáticos H68K  | [Descarga](https://files.seeedstudio.com/wiki/LinkStar_V2/H68K_V2_Schematic.pdf) |
| RK3568 Datasheet            | - | [Descarga](https://files.seeedstudio.com/wiki/LinkStar/RK3568_Brief_Datasheet.pdf) |
| Módulo Wi-Fi M7921E         | - | [Descarga](https://files.seeedstudio.com/wiki/LinkStar/M7921E_Wi-Fi_Module.pdf) |

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
