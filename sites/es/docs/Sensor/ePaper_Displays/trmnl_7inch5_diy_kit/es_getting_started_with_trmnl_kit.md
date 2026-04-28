---
description: Esta página es la página de navegación para el TRMNL 7inch5(OG) DIY Kit.
title: Introducción al TRMNL 7.5inch(OG) DIY Kit
image: https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/head.webp
slug: /trmnl_7inch5_diy_kit_main_page
sidebar_position: 1
last_update:
  date: 06/29/2025
  author: Allen
createdAt: '2025-07-16'
updatedAt: '2026-04-21'
url: https://wiki.seeedstudio.com/es/trmnl_7inch5_diy_kit_main_page/
---

# Introducción al TRMNL 7.5" (OG) DIY Kit

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/head.jpg" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/TRMNL-7-5-Inch-OG-DIY-Kit-p-6481.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Introducción

### Descripción del producto

El TRMNL 7.5" (OG) DIY Kit, co-desarrollado por Seeed Studio y TRMNL, es una solución de desarrollo versátil basada en tinta electrónica. Combina una pantalla de tinta electrónica monocromática de 7,5 pulgadas y 800×480, una placa controladora XIAO ESP32-S3 PLUS, una batería recargable de 2000 mAh y un cable de extensión FPC de 10 cm. Totalmente compatible con el ecosistema TRMNL BYOD, este kit permite crear paneles de control sin código con más de 375 plugins y 8 diseños, ideal para aficionados al DIY, interfaces de hogar inteligente y señalización digital creativa.

### Características

<!-- :::tip
To celebrate the collaboration, Team TRMNL offers 30% off on TRMNL BYOD firmware access (35 dollar, usually for 50 dollar). Use code **trmnl-seeed-diy** at checkout (first 200 customers, 1 per customer). First come, first serve!
::: -->

- **Compatibilidad con TRMNL BYOD**: Kit oficial para construir el dispositivo TRMNL 7.5'' OG con más de 375 plugins y 8 diseños sin código (por ejemplo, Calendar, Shopify, GitHub)
- **Pantalla E-Ink de 7,5"**: Pantalla monocromática de 800×480 con refresco parcial (0,34 s) y refresco completo (3,5 s)
- **Diseño de bajo consumo**: La batería de 2000 mAh proporciona hasta 3 meses de funcionamiento en modo de suspensión profunda (intervalo de refresco de 6 horas)
- **Compatibilidad con dos ecosistemas**: Compatible con Home Assistant (a través de ESPHome) y Arduino IDE para desarrollo personalizado
- **Carcasas de código abierto**: Disponibles en Printables y Thingiverse para una fácil personalización

### Especificaciones

| Parámetro | Descripción |
| --- | --- |
| MCU | Placa de desarrollo XIAO ePaper Display con XIAO ESP32-S3 Plus integrado |
| Pantalla | Pantalla ePaper monocromática de 7,5 pulgadas |
| Resolución | 800x480 |
| Tensión de funcionamiento | 5V |
| Batería | Batería recargable de iones de litio de 2000 mAh (autonomía de 3 meses en modo de suspensión profunda) |
| Temperatura de funcionamiento | -40°C a 85°C |
| Carcasa | No incluida (diseños de código abierto en Printables y Thingiverse) |

## Descripción del hardware

### Diagrama de componentes

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/overview.png" style={{width:600, height:'auto'}}/></div>

### Lista de componentes

| Producto | Cantidad |
| --- | --- |
| Placa de desarrollo XIAO ePaper Display (XIAO ESP32-S3 Plus) | 1 |
| Pantalla ePaper monocromática de 7,5 pulgadas (800×480) | 1 |
| Cable de extensión FPC (10 cm) | 1 |
| Conector FPC | 1 |
| Batería recargable de iones de litio de 2000 mAh | 1 |

## Primeros pasos

### Instalación del equipo

**Paso 1. Conectar la pantalla a la placa controladora**  
Alinea el cable FPC con el conector de la placa XIAO ePaper Display y luego asegura la pestaña para garantizar una conexión firme.  

:::tip
El lado metálico del cable FPC debe mirar hacia arriba; de lo contrario, no se mostrará ningún contenido.

Sigue el siguiente tutorial de instalación; muchas personas lo hacen de forma incorrecta.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/2.jpg" style={{width:600, height:'auto'}}/></div>

**Paso 2. Conectar la batería**  
Conecta el cable de la batería al conector JST de la placa controladora, asegurando la polaridad correcta (cable rojo a +, negro a -).  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/3.jpg" style={{width:600, height:'auto'}}/></div>

**Paso 3. Montaje de la carcasa (opcional)**  

:::tip
Ten en cuenta que el cable flexible de la pantalla es muy frágil. Ten cuidado al manipularlo. Si se daña, toda la pantalla dejará de funcionar.
:::
Imprime las piezas de la carcasa de código abierto desde la [parte de recursos](#resource) y monta los componentes en su interior.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/4.jpeg" style={{width:600, height:'auto'}}/></div>

Primero, monta la placa controladora y la batería.

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/base.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

Prueba el kit TRMNL para comprobar que funciona correctamente.

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/test.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

Introduce la pantalla en la carcasa y deja salir el FPC.

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/cable.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

Conecta el cable de extensión FPC y monta toda la carcasa.

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
Si tu kit TRMNL está lejos de tu router, puedes sacar la antena fuera de la carcasa. Tendrá un mejor rendimiento.
:::

## Centro Wiki

### Explora guías detalladas

#### 1. [Tutorial del ecosistema TRMNL BYOD](https://wiki.seeedstudio.com/es/reterminal_e10xx_trmnl/)

Descubre cómo utilizar la plataforma TRMNL BYOD con más de 375 plugins, incluida la creación de paneles de control sin código para tu trabajo y tu vida diaria.

#### 2. [Funciona con Home Assistant](https://wiki.seeedstudio.com/es/ogdiy_kit_works_with_esphome)

Aprende a configurar tu kit TRMNL con Home Assistant a través de ESPHome, incluyendo la carga de firmware y la programación básica.

#### 3. [Funciona con Arduino](https://wiki.seeedstudio.com/es/ogdiy_kit_works_with_arduino/)

Domina el control del kit TRMNL con Arduino, incluidos los mecanismos de refresco, el renderizado de gráficos y la gestión de energía.

## <span id="resource">Recursos</span>

- **[Firmware]** [Biblioteca TRMNL ePaper (GitHub)](https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project)
- **[Hardware]** [Esquema de la placa controladora](https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/XIAO_ePaper_driver_board_sch.pdf)
- **[Imprimible]** [base triangular](https://www.printables.com/model/1354873)  
- **[Imprimible]** [base triangular protegida](https://www.printables.com/model/1361112-upgrated-triangular-prism-3d-enclosure-for-trmnl-7)  
- **[Imprimible]** [base en forma de L](https://www.printables.com/model/1354879)  
- **[Thingiverse]** [base triangular](https://www.thingiverse.com/thing:7091094)
- **[Thingiverse]** [base triangular protegida](https://www.thingiverse.com/thing:7097231)
- **[Thingiverse]** [base en forma de L](https://www.thingiverse.com/thing:7091096)
- **[Makerworld]** [base triangular](https://makerworld.com/en/models/1625037-trmnl-7-5-og-diy-triangular-prism-shell-kit)
- **[Makerworld]** [base triangular protegida](https://makerworld.com/en/models/1625119-trmnl-7-5-og-diy-triangular-prism-shell-kit)
- **[Makerworld]** [base en forma de L](https://makerworld.com/en/models/1625065-trmnl-7-5-og-diy-l-shaped-case-kit)

## Soporte técnico y debate sobre el producto

¡Gracias por elegir nuestros productos! Ofrecemos múltiples canales de soporte:

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
