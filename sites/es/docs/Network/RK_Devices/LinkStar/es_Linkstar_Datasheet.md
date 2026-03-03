---
description: ODYSSEY - X86J4105
title: Introducción a LinkStar
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Linkstar_Datasheet
sku: 102110775,102110777
last_update:
  date: 01/03/2023
  author: w0x7ce
---

<!-- ---
name: 
category: 
bzurl: 
prodimagename:
surveyurl: 
sku: 
tags:
--- -->

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/OVerview.jpg" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LinkStar-H68K-1432-p-5501.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Introducción

El router LinkStar-H68K está equipado con un chip RK3568 Cortex-A55 de cuatro núcleos, que cuenta con 4 interfaces Ethernet para dual-2.5G y dual-1G, junto con tecnología Wi-Fi 6 (opcional), mientras proporciona alta capacidad de almacenamiento y funcionalidad de reproductor multimedia. En esta wiki te mostraremos la descripción general del hardware y cómo comenzar rápidamente con LinkStar

## Descripción General del Hardware

Esta es la descripción general del hardware de LinkStar - H68K, aquí te presentaremos los detalles sobre cada componente.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/hardware_overview1.jpg" /></div>

### Fuente de Alimentación

<!-- <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-y6fn{background-color:#c0c0c0;text-align:left;vertical-align:top}\n.tg .tg-0lax{text-align:left;vertical-align:top}\n" }} /> -->

<table className="tg">
  <thead>
    <tr>
      <th className="tg-y6fn">Voltaje de Operación</th>
      <th className="tg-0lax">5V~24V DC (12V-1A DC recomendado)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="tg-y6fn">Adaptador de Alimentación DC</td>
      <td className="tg-0lax">12V-1A DC (recomendado)</td>
    </tr>
    <tr>
      <td className="tg-y6fn">Adaptador de Alimentación DC</td>
      <td className="tg-0lax">12-2A DC para controlador de hardware adicional (recomendado)</td>
    </tr>
    <tr>
      <td className="tg-y6fn"><span style={{fontWeight: 400, fontStyle: 'normal'}}>Fuente de alimentación Type-C</span></td>
      <td className="tg-0lax">Bajo 5V (no soporta carga rápida)</td>
    </tr>
  </tbody>
</table>

### Redes Ethernet

<div align="center"><img width={700} src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEyMg_968748_fi2e0dpZ5__TlzPp_1668582262?w=960&h=500" /></div>

### Rendimiento del Chip

RK3568 es un chip SoC insignia 4K con alto rendimiento de costo propiedad de SWICK. Adopta arquitectura ARM e integra un Cortex-A55 de cuatro núcleos con un coprocesador NEON separado para soportar decodificación de video 4K y codificación de video 3K. Muchos motores de hardware embebido potentes proporcionan rendimiento optimizado para aplicaciones de alta gama.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/chip_performance.png" /></div>

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
    <td class="tg-0pky">IO directo con fuente de alimentación de 5V (no soporta carga rápida)</td>
  </tr>
    <tr>
    <td class="tg-0pky">USB 3.0 Type-A</td>
    <td class="tg-0pky">x1</td>
  </tr>
    <tr>
    <td class="tg-0pky">USB 2.0 Type-A</td>
    <td class="tg-0pky">x2</td>
  </tr>
  <tr>
    <td class="tg-0pky">M2 WIFI(opcional)</td>
    <td class="tg-0pky">Módulo MT7921 con interfaz PCIE2.0</td>
  </tr>
    <tr>
    <td class="tg-0pky">HDMI</td>
    <td class="tg-0pky">HDMI 2.0 para salida 4K, tanto audio como visual</td>
  </tr>
  <tr>
    <td class="tg-0pky">Entrada/salida de audio 3.5mm</td>
    <td class="tg-0pky">Implementado por chip de fuente de alimentación RK809-5</td>
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

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LinkStar/indicator.png" /></div>

<!-- <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-y698{background-color:#efefef;border-color:inherit;text-align:left;vertical-align:top}\n.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}\n" }} /> -->

<table class="tg">
<thead>
  <tr>
    <th class="tg-y698">STA</th>
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

Con el sistema Android 11 preinstalado, puedes usar LinkStar directamente una vez que recibas el paquete.

### Preparativos

- LinkStar
- Conector HDMI
- Monitor
- Ratón
- Adaptador de corriente 12V1A

### Instalación

- **Paso 1**. Conecta LinkStar con un monitor y un ratón.

- **Paso 2**. Enciéndelo conectando el adaptador de corriente 12V1A y presiona el botón de encendido.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LinkStar/power.png" /></div>

- **Paso 3**. El monitor se mostrará como:

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/display.png" /></div>

:::note
Ten en cuenta que el botón derecho del ratón representa "regresar", al hacer clic en él la página regresará.
:::

¡Ahora estás listo para comenzar!

## Recursos

- [Hoja de datos RK3568](https://files.seeedstudio.com/wiki/LinkStar/RK3568_Brief_Datasheet.pdf)
- [Módulo Wi-Fi M7921E](https://files.seeedstudio.com/wiki/LinkStar/M7921E_Wi-Fi_Module.pdf)

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
