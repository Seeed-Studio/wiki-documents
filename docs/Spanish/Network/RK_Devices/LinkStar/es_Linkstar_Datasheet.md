---
description: ODYSSEY - X86J4105
title: Introducción a LinkStar
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Linkstar_Datasheet
last_update:
  date: 10/06/2025
  author: Guillermo
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
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Introducción

El router LinkStar-H68K está equipado con un chip RK3568 de cuatro núcleos Cortex-A55, que cuenta con 4 interfaces Ethernet: dos de 2.5G y dos de 1G, además de ofrecer tecnología Wi-Fi 6 (opcional). También proporciona alta capacidad de almacenamiento y funcionalidad como reproductor multimedia. En esta wiki te mostraremos una visión general del hardware y cómo comenzar rápidamente con LinkStar.

## Visión General del Hardware

Esta es la vista general del hardware del LinkStar - H68K, donde presentaremos los detalles de cada uno de sus componentes.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/hardware_overview1.jpg" /></div>

### Fuente de Alimentación

<!-- <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;\n  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-y6fn{background-color:#c0c0c0;text-align:left;vertical-align:top}\n.tg .tg-0lax{text-align:left;vertical-align:top}\n" }} /> -->

<table className="tg">
  <thead>
    <tr>
      <th className="tg-y6fn">Voltaje Operativo</th>
      <th className="tg-0lax">5V~24V DC (12V-1A DC recomendado)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="tg-y6fn">Adaptador de Corriente DC</td>
      <td className="tg-0lax">12V-1A DC (recomendado)</td>
    </tr>
    <tr>
      <td className="tg-y6fn">Adaptador de Corriente DC</td>
      <td className="tg-0lax">12V-2A CC para hardware adicional (recomendado)</td>
    </tr>
    <tr>
      <td className="tg-y6fn"><span style={{fontWeight: 400, fontStyle: 'normal'}}>Alimentación por Tipo-C</span></td>
      <td className="tg-0lax">Menor a 5V (no compatible con carga rápida)</td>
    </tr>
  </tbody>
</table>

### Red Ethernet

<div align="center"><img width={700} src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEyMg_968748_fi2e0dpZ5__TlzPp_1668582262?w=960&h=500" /></div>

### Rendimiento del Chip

RK3568 es un SoC insignia compatible con resolución 4K y de alta relación costo-rendimiento, desarrollado por SWICK. Este chip adopta una arquitectura ARM e integra un procesador de cuatro núcleos Cortex-A55, con un coprocesador NEON independiente, lo cual permite la decodificación de video en 4K y la codificación de video en 3K. Además, incorpora múltiples motores de hardware embebidos de alto rendimiento, proporcionando una optimización avanzada para aplicaciones de gama alta.

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
    <td class="tg-0pky">USB3.0 Tipo-C</td>
    <td class="tg-0pky">Paso directo de E/S con alimentación de 5V (no compatible con carga rápida)</td>
  </tr>
    <tr>
    <td class="tg-0pky">USB 3.0 Tipo-A</td>
    <td class="tg-0pky">x1</td>
  </tr>
    <tr>
    <td class="tg-0pky">USB 2.0 Tipo-A</td>
    <td class="tg-0pky">x2</td>
  </tr>
  <tr>
    <td class="tg-0pky">M2 WIFI(opcional)</td>
    <td class="tg-0pky">Módulo MT7921 con interfaz PCIe 2.0</td>
  </tr>
    <tr>
    <td class="tg-0pky">HDMI</td>
    <td class="tg-0pky">HDMI 2.0 para salida 4K, tanto de video como de audio</td>
  </tr>
  <tr>
    <td class="tg-0pky">Entrada/salida de audio 3.5 mm</td>
    <td class="tg-0pky">Implementado mediante el chip de alimentación RK809-5</td>
  </tr>
  <tr>
    <td class="tg-0pky">Receptor infrarrojo</td>
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
    <td class="tg-0pky">Indicador de operación/activo</td>
    <td class="tg-0pky">Indicaciones de conexión del disco duro</td>
    <td class="tg-0pky">Indicador de conexión de red</td>
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

- **Paso 1**. Conecta LinkStar a un monitor y un ratón.

- **Paso 2**. Enciéndelo conectando el adaptador de corriente 12V1A y presionando el botón de encendido.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LinkStar/power.png" /></div>

- **Paso 3**. La pantalla mostrará:

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LinkStar/display.png" /></div>

:::note
Ten en cuenta que el botón derecho del ratón representa "volver", al hacer clic en él la página regresará.
:::

¡Ahora estás listo para comenzar!

## Recursos

- [Ficha técnica RK3568](https://files.seeedstudio.com/wiki/LinkStar/RK3568_Brief_Datasheet.pdf)
- [Módulo Wi-Fi M7921E](https://files.seeedstudio.com/wiki/LinkStar/M7921E_Wi-Fi_Module.pdf)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
