---
description: Esta página es la página de navegación para el Kit DIY TRMNL 7inch5(OG).
title: Comenzando con el Kit DIY TRMNL 7.5inch(OG)
image: https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/head.webp
slug: /trmnl_7inch5_diy_kit_main_page
sidebar_position: 1
last_update:
  date: 06/29/2025
  author: Allen
createdAt: '2025-09-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/trmnl_7inch5_diy_kit_main_page/
---

# Kit DIY TRMNL 7.5" (OG)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/head.jpg" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/TRMNL-7-5-Inch-OG-DIY-Kit-p-6481.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Introducción

### Descripción del Producto

El Kit DIY TRMNL 7.5" (OG), co-desarrollado por Seeed Studio y TRMNL, es una solución de desarrollo e-ink versátil. Combina una pantalla e-ink monocromática de 7.5 pulgadas 800×480, placa controladora XIAO ESP32-S3 PLUS, batería recargable de 2000 mAh, y cable de extensión FPC de 10cm. Completamente compatible con el ecosistema TRMNL BYOD, este kit permite la construcción de paneles de control sin código con más de 375 plugins y 8 diseños, ideal para entusiastas del DIY, interfaces de hogar inteligente, y señalización digital creativa.

### Características

<!-- :::tip
Para celebrar la colaboración, el Equipo TRMNL ofrece 30% de descuento en el acceso al firmware TRMNL BYOD (35 dólares, usualmente 50 dólares). Usa el código **trmnl-seeed-diy** al finalizar la compra (primeros 200 clientes, 1 por cliente). ¡Por orden de llegada!
::: -->

- **Compatibilidad TRMNL BYOD**: Kit oficial para construir dispositivo TRMNL 7.5'' OG con 375+ plugins y 8 diseños sin código (ej., Calendar, Shopify, GitHub)
- **Pantalla E-Ink de 7.5"**: Pantalla monocromática 800×480 con actualización parcial (0.34s) y actualización completa (3.5s)
- **Diseño Eficiente en Energía**: Batería de 2000mAh proporciona hasta 3 meses de operación en modo de sueño profundo (intervalo de actualización de 6 horas)
- **Soporte de Ecosistema Dual**: Compatible con Home Assistant (vía ESPHome) y Arduino IDE para desarrollo personalizado
- **Carcasas de Código Abierto**: Disponibles en Printables y Thingiverse para fácil personalización

### Especificaciones

| Parámetro | Descripción |
| --- | --- |
| MCU | Placa de Desarrollo XIAO ePaper Display con XIAO ESP32-S3 Plus integrado |
| Pantalla | Pantalla ePaper Monocolor de 7.5 pulgadas |
| Resolución | 800x480 |
| Voltaje de Operación | 5V |
| Batería | Batería Li-ion Recargable de 2000mAh (duración de batería de 3 meses en modo de sueño profundo) |
| Temperatura de Operación | -40°C a 85°C |
| Carcasa | No incluida (diseños de código abierto en Printables y Thingiverse) |

## Descripción General del Hardware

### Diagrama de Componentes

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/overview.png" style={{width:600, height:'auto'}}/></div>

### Lista de Partes

| Producto | Cantidad |
| --- | --- |
| Placa de Desarrollo XIAO ePaper Display (XIAO ESP32-S3 Plus) | 1 |
| Pantalla ePaper Monocromática de 7.5 pulgadas (800×480) | 1 |
| Cable de Extensión FPC (10 cm) | 1 |
| Conector FPC | 1 |
| Batería Li-ion Recargable de 2000mAh | 1 |

## Primeros Pasos

### Instalación del Equipo

**Paso 1. Conectar la Pantalla a la Placa Controladora**  
Alinea el cable FPC con el conector en la Placa XIAO ePaper Display, luego asegura el pestillo para garantizar una conexión firme.  

:::tip
El lado metálico del cable FPC debe estar hacia arriba, de lo contrario, no se mostrará contenido.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/2.jpg" style={{width:600, height:'auto'}}/></div>

**Paso 2. Conectar la Batería**  
Conecta el cable de la batería al conector JST en la placa controladora, asegurando la polaridad correcta (cable rojo a +, negro a -).  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/3.jpg" style={{width:600, height:'auto'}}/></div>

**Paso 3. Ensamblaje de la Carcasa (Opcional)**  

:::tip
Ten en cuenta que el cable flexible de la pantalla es muy frágil. Ten cuidado al operar. Si se daña, toda la pantalla dejará de funcionar.
:::
Imprime las partes de la carcasa de código abierto desde la [sección de Recursos](#resources) y ensambla los componentes en el interior.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/4.jpeg" style={{width:600, height:'auto'}}/></div>

Primero, ensambla la placa controladora y la batería.

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/base.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

Prueba el kit TRMNL para verificar que funcione bien.

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/test.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

Conecta la pantalla en la carcasa y saca el FPC.

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/cable.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

Conecta el cable de extensión FPC y ensambla toda la carcasa.

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/assembly.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

La carcasa en forma de L es muy similar.

<div class="table-center">
<iframe width="300" height="500" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/Lshape.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::tip
Si tu kit TRMNL está lejos de tu router, puedes mover la antena fuera de la carcasa. Tendrá mejor rendimiento.
:::

## Centro Wiki

### Explora Guías Detalladas

#### 1. [Tutorial del Ecosistema TRMNL BYOD](https://wiki.seeedstudio.com/es/ogdiy_kit_works_with_trmnl/)

Descubre cómo usar la plataforma TRMNL BYOD con más de 375 plugins, incluyendo la creación de paneles sin código para tu trabajo y vida.

#### 2. [Funciona con Home Assistant](https://wiki.seeedstudio.com/es/ogdiy_kit_works_with_esphome)

Aprende cómo configurar tu kit TRMNL con Home Assistant a través de ESPHome, incluyendo la carga de firmware y programación básica.

#### 3. [Funciona con Arduino](https://wiki.seeedstudio.com/es/ogdiy_kit_works_with_arduino/)

Domina el control del kit TRMNL con Arduino, incluyendo mecanismos de actualización, renderizado de gráficos y gestión de energía.

## <span id="resource">Recursos</span>

- **[Firmware]** [Biblioteca TRMNL ePaper (GitHub)](https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project)
- **[Hardware]** [Esquemático de la Placa Controladora](https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/XIAO_ePaper_driver_board_sch.pdf)
- **[Imprimible]** [base triangular](https://www.printables.com/model/1354873)  
- **[Imprimible]** [base triangular protegida](https://www.printables.com/model/1361112-upgrated-triangular-prism-3d-enclosure-for-trmnl-7)  
- **[Imprimible]** [base en forma de L](https://www.printables.com/model/1354879)  
- **[Thingiverse]** [base triangular](https://www.thingiverse.com/thing:7091094)
- **[Thingiverse]** [base triangular protegida](https://www.thingiverse.com/thing:7097231)
- **[Thingiverse]** [base en forma de L](https://www.thingiverse.com/thing:7091096)
- **[Makerworld]** [base triangular](https://makerworld.com/en/models/1625037-trmnl-7-5-og-diy-triangular-prism-shell-kit)
- **[Makerworld]** [base triangular protegida](https://makerworld.com/en/models/1625119-trmnl-7-5-og-diy-triangular-prism-shell-kit)
- **[Makerworld]** [base en forma de L](https://makerworld.com/en/models/1625065-trmnl-7-5-og-diy-l-shaped-case-kit)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Ofrecemos múltiples canales de soporte:

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
