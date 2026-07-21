---
description: Una visión general completa de la matriz de productos de pantallas de papel electrónico de Seeed Studio, desde terminales integrados reTerminal E Serie hasta placas controladoras, kits DIY y los frameworks de aplicación que las impulsan.
title: Pantallas ePaper de Seeed
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/206.png
slug: /seeed_epaper_displays
sidebar_position: 1
last_update:
  date: 05/18/2026
  author: dimo
createdAt: '2026-04-28'
updatedAt: '2026-07-01'
url: https://wiki.seeedstudio.com/es/seeed_epaper_displays/
---

# Pantallas ePaper de Seeed — Visión general de la matriz de productos

## Introducción

ePaper (papel electrónico) solo consume energía cuando su contenido cambia, lo que la convierte en la tecnología de visualización ideal para **paneles de información siempre encendidos**: señalización digital, paneles de control para el hogar inteligente, etiquetas electrónicas de estantería, paneles para salas de reuniones, marcos de fotos y más.

Seeed Studio ofrece un portafolio de ePaper de extremo a extremo organizado en torno a tres líneas de producto:

1. **reTerminal E Serie** — terminales ePaper totalmente integrados y listos para usar (solo hay que encenderlos).
2. **Placas controladoras / de expansión** — combina un MCU con pantallas ePaper universales o de gran formato para construir tu propio producto.
3. **Kits DIY y paneles desnudos** — diseñados para la comunidad maker, optimizados para plataformas específicas como TRMNL o XIAO.

Las tres líneas comparten el **mismo ecosistema de software**: SenseCraft HMI (sin código), Home Assistant / ESPHome, TRMNL, Arduino / ESP-IDF / PlatformIO, Zephyr, además de herramientas visuales de UI como SquareLine Vision, EEZ Studio y Lopaka. Elige una familia de hardware y el resto de la cadena de herramientas permanece igual.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/206.png" style={{width:1000, height:'auto'}}/></div>

## Elige por factor de forma

Si no estás seguro de por dónde empezar, utiliza esta matriz de decisión:

<div class="table-center">
  <table align="center">
    <tr>
      <th>Quiero…</th>
      <th>Línea de producto recomendada</th>
      <th>Por qué</th>
    </tr>
    <tr>
      <td>Encender un panel de control ePaper listo para usar, sin soldar ni cableado adicional</td>
      <td><a href="https://wiki.seeedstudio.com/es/reterminal_e10xx_main_page" target="_blank" rel="noopener noreferrer"><strong>reTerminal E Serie →</strong></a></td>
      <td>Batería, carcasa, sensor T/H, zumbador, botones y Wi-Fi totalmente integrados. Se envía con firmware SenseCraft HMI.</td>
    </tr>
    <tr>
      <td>Combinar una pantalla ePaper existente (24 pines, 50 pines, 13.3", 10.3", etc.) con un MCU y una batería</td>
      <td><a href="https://wiki.seeedstudio.com/es/xiao_epaper_display_board_overview" target="_blank" rel="noopener noreferrer"><strong>Serie de placas controladoras / de expansión →</strong></a></td>
      <td>Placas controladoras (EE0x para ESP32-S3, EN0x para nRF52840) proporcionan conector de batería JST, CI de carga, botón de reinicio y botones de usuario.</td>
    </tr>
    <tr>
      <td>Construir un panel de control compatible con TRMNL con un kit DIY amigable para makers</td>
      <td><a href="https://wiki.seeedstudio.com/es/trmnl_7inch5_diy_kit_main_page" target="_blank" rel="noopener noreferrer"><strong>Kit DIY TRMNL 7.5" (OG) →</strong></a></td>
      <td>Preajustado para la plataforma TRMNL; también es compatible con ESPHome y Arduino.</td>
    </tr>
    <tr>
      <td>Conectar directamente un panel ePaper de 7.5" a un módulo Seeed Studio XIAO</td>
      <td><a href="https://wiki.seeedstudio.com/es/xiao_075inch_epaper_panel" target="_blank" rel="noopener noreferrer"><strong>Panel ePaper XIAO 7.5" →</strong></a></td>
      <td>Panel desnudo + placa adaptadora que se acopla a cualquier placa XIAO; huella mínima.</td>
    </tr>
  </table>
</div>

## reTerminal E Serie — Terminales ePaper integrados

Cuatro terminales impulsados por ESP32-S3, que comparten la misma familia de carcasas, pila de software y diseño de batería. Las diferencias son el tamaño de la pantalla, color frente a monocromo, táctil y duración de la batería.

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
      <th>reTerminal E1003</th>
      <th>reTerminal E1004</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/24.jpg" style={{width:240, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/25.jpg" style={{width:240, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/2-reTerminal-E1003-Epaper-Display.jpg" style={{width:240, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2-reterminal-e1004-epaper-display.jpg" style={{width:240, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td align="center"><strong>7.5" monocromo</strong><br/>Escala de grises de 4 niveles<br/>~3 meses de batería</td>
      <td align="center"><strong>7.3" a todo color</strong><br/>E Ink Spectra 6<br/>~3 meses de batería</td>
      <td align="center"><strong>10.3" monocromo</strong><br/>Escala de grises de 16 niveles + táctil<br/>~6 meses de batería</td>
      <td align="center"><strong>13.3" a todo color</strong><br/>E Ink Spectra 6<br/>~6 meses de batería</td>
    </tr>
    <tr>
      <td align="center"><a href="https://wiki.seeedstudio.com/es/getting_started_with_reterminal_e1001" target="_blank" rel="noopener noreferrer"><strong>E1001 Wiki →</strong></a></td>
      <td align="center"><a href="https://wiki.seeedstudio.com/es/getting_started_with_reterminal_e1002" target="_blank" rel="noopener noreferrer"><strong>E1002 Wiki →</strong></a></td>
      <td align="center"><a href="https://wiki.seeedstudio.com/es/getting_started_with_reterminal_e1003" target="_blank" rel="noopener noreferrer"><strong>E1003 Wiki →</strong></a></td>
      <td align="center"><a href="https://wiki.seeedstudio.com/es/getting_started_with_reterminal_e1004" target="_blank" rel="noopener noreferrer"><strong>E1004 Wiki →</strong></a></td>
    </tr>
  </table>
</div>

:::tip
Para una comparación de especificaciones lado a lado (resolución, tiempo de refresco, compatibilidad con refresco parcial, certificaciones, MSRP, etc.) y una matriz detallada de compatibilidad de software, dirígete a la página dedicada **[Visión general de reTerminal E Serie](https://wiki.seeedstudio.com/es/reterminal_e10xx_main_page)**.
:::

## Serie de placas controladoras / de expansión — BYO Screen

Si ya tienes (o quieres adquirir por separado) un panel ePaper de 24 pines, 50 pines, 10.3" o 13.3", la familia de placas controladoras te proporciona la electrónica portadora: gestión de batería, botones, CI de carga y el MCU.

### Placas controladoras ESP32-S3 (Wi-Fi / BLE, SenseCraft HMI)

<div class="table-center">
  <table align="center">
    <tr>
      <th>Placa</th>
      <th>Pantallas objetivo</th>
      <th>Puntos destacados</th>
      <th>Wiki</th>
    </tr>
    <tr>
      <td align="center"><strong>EE02</strong></td>
      <td align="center">13.3" Spectra 6</td>
      <td>Controlador dedicado para gran formato a color; Wi-Fi + BLE; ideal para señalización digital.</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/es/getting_started_with_ee02" target="_blank" rel="noopener noreferrer">EE02 →</a></td>
    </tr>
    <tr>
      <td align="center"><strong>EE03</strong></td>
      <td align="center">10.3" monocromo (refresco de alta velocidad)</td>
      <td>Temporización T-CON integrada; SHT40 a bordo para compensación de waveform; XIAO ESP32-S3 Plus.</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/es/getting_started_with_ee03" target="_blank" rel="noopener noreferrer">EE03 →</a></td>
    </tr>
    <tr>
      <td align="center"><strong>EE04</strong></td>
      <td align="center">24 pines / 50 pines universal</td>
      <td>Distribución de pines seleccionable por jumpers; funciona con la mayoría de pantallas ePaper pequeñas comerciales.</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/es/epaper_ee04" target="_blank" rel="noopener noreferrer">EE04 →</a></td>
    </tr>
    <tr>
      <td align="center"><strong>EE05</strong></td>
      <td align="center">24 pines universal (última)</td>
      <td>Distribución renovada de EE04; misma base XIAO ESP32-S3, compatibilidad con el firmware más reciente.</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/es/epaper_ee05" target="_blank" rel="noopener noreferrer">EE05 →</a></td>
    </tr>
  </table>
</div>

### Placas controladoras nRF52840 (BLE / NFC, ultra bajo consumo)

<div class="table-center">
  <table align="center">
    <tr>
      <th>Placa</th>
      <th>Pantallas objetivo</th>
      <th>Puntos destacados</th>
      <th>Wiki</th>
    </tr>
    <tr>
      <td align="center"><strong>EN04</strong></td>
      <td align="center">24 pines / 50 pines universal</td>
      <td>Bluetooth LE + NFC; XIAO nRF52840 Plus; ideal para ESL y etiquetas offline.</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/es/epaper_EN04" target="_blank" rel="noopener noreferrer">EN04 →</a></td>
    </tr>
    <tr>
      <td align="center"><strong>EN05</strong></td>
      <td align="center">24 pines universal (última)</td>
      <td>Distribución renovada de EN04; misma base nRF52840 con compatibilidad con el firmware más reciente.</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/es/epaper_en05" target="_blank" rel="noopener noreferrer">EN05 →</a></td>
    </tr>
  </table>
</div>

### Placas diseñadas para módulos XIAO

<div class="table-center">
  <table align="center">
    <tr>
      <th>Placa</th>
      <th>Descripción</th>
      <th>Wiki</th>
    </tr>
    <tr>
      <td align="center"><strong>XIAO eInk Expansion Board v2</strong></td>
      <td>Placa de expansión plug-and-play para cualquier módulo XIAO; admite pantallas ePaper pequeñas populares.</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/es/xiao_eink_expansion_board_v2" target="_blank" rel="noopener noreferrer">v2 →</a></td>
    </tr>
    <tr>
      <td align="center"><strong>XIAO ePaper Breakout Board</strong></td>
      <td>La placa adaptadora original para XIAO + ePaper; bien documentada con compatibilidad con OpenEpaperLink (OEPL).</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/es/XIAO-eInk-Expansion-Board" target="_blank" rel="noopener noreferrer">Breakout →</a></td>
    </tr>
  </table>
</div>

:::tip
También está disponible una **[visión general de placas controladoras ePaper](https://wiki.seeedstudio.com/es/xiao_epaper_display_board_overview)** consolidada, con listas de características de cada placa lado a lado.
:::

## Kits DIY y paneles desnudos

Para makers que prefieren ensamblarlo todo por sí mismos, dos opciones flexibles:

<div class="table-center">
  <table align="center">
    <tr>
      <th>Producto</th>
      <th>Qué hay en la caja / qué es</th>
      <th>Ideal para</th>
      <th>Wiki</th>
    </tr>
    <tr>
      <td><strong>TRMNL 7.5" (OG) DIY Kit</strong><br/><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/head.webp" style={{width:200, height:'auto'}}/></div></td>
      <td>ePaper monocromática de 7,5" + placa controladora ESP32 + soporte acrílico. Preajustada para la plataforma en la nube TRMNL; también ejecuta ESPHome y Arduino.</td>
      <td>El camino más rápido hacia un panel de control estilo TRMNL con el menor coste de BOM.</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/es/trmnl_7inch5_diy_kit_main_page" target="_blank" rel="noopener noreferrer">TRMNL Kit →</a></td>
    </tr>
    <tr>
      <td><strong>XIAO 7.5" ePaper Panel</strong><br/><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/100.webp" style={{width:200, height:'auto'}}/></div></td>
      <td>Panel ePaper desnudo de 7,5" con un conector FPC que se acopla directamente a la huella de un módulo XIAO.</td>
      <td>Proyectos compactos y de bajo coste donde ya tienes un XIAO y quieres añadir una pantalla.</td>
      <td align="center"><a href="https://wiki.seeedstudio.com/es/xiao_075inch_epaper_panel" target="_blank" rel="noopener noreferrer">XIAO Panel →</a></td>
    </tr>
  </table>
</div>

## Ecosistema de software de un vistazo

Cada producto ePaper de Seeed converge en el mismo ecosistema de software. Elige el flujo de trabajo que coincida con tu nivel de habilidad — puedes combinarlos:

<div class="table-center">
  <table align="center">
    <tr>
      <th>Herramienta / Plataforma</th>
      <th>Tipo</th>
      <th>Qué hace</th>
      <th>Compatible con</th>
    </tr>
    <tr>
      <td><a href="https://wiki.seeedstudio.com/es/sensecraft_hmi_overview" target="_blank" rel="noopener noreferrer"><strong>SenseCraft HMI</strong></a></td>
      <td align="center">Sin código (nube)</td>
      <td>Generador de IA, Galería, Lienzo, Contenido RSS / Web, implementación OTA. El firmware predeterminado en reTerminal E Serie.</td>
      <td>reTerminal E1001 / E1002 / E1003 / E1004 · EE02 · EE03 · EE04 · EE05</td>
    </tr>
    <tr>
      <td><a href="https://wiki.seeedstudio.com/es/epaper_work_with_esphome" target="_blank" rel="noopener noreferrer"><strong>ESPHome / Home Assistant</strong></a></td>
      <td align="center">Basado en YAML</td>
      <td>Integración nativa con Home Assistant; crea paneles de control de forma declarativa en YAML.</td>
      <td>reTerminal E1001 / E1002 / E1004 · EE04 · TRMNL DIY Kit · XIAO 7.5" Panel</td>
    </tr>
    <tr>
      <td><a href="https://wiki.seeedstudio.com/es/reterminal_e10xx_trmnl" target="_blank" rel="noopener noreferrer"><strong>TRMNL</strong></a></td>
      <td align="center">Panel de control en la nube</td>
      <td>Paneles de control basados en complementos (calendario, noticias, clima, finanzas, datos personalizados).</td>
      <td>reTerminal E1001 · E1002 (modo mono) · TRMNL 7.5" DIY Kit · XIAO 7.5" Panel</td>
    </tr>
    <tr>
      <td><a href="https://wiki.seeedstudio.com/es/reterminal_e10xx_with_arduino" target="_blank" rel="noopener noreferrer"><strong>Arduino / PlatformIO / ESP-IDF</strong></a></td>
      <td align="center">Código (C/C++)</td>
      <td>Control totalmente programático: GPIO, sensores, red, renderizado personalizado.</td>
      <td>Todos los productos ESP32-S3 (E1001–E1004, EE02–EE05, TRMNL Kit, XIAO Panel)</td>
    </tr>
    <tr>
      <td><a href="https://wiki.seeedstudio.com/es/epaper_work_with_zephyr" target="_blank" rel="noopener noreferrer"><strong>Zephyr RTOS</strong></a></td>
      <td align="center">RTOS</td>
      <td>Flujo de trabajo de placa Zephyr upstream con west, device tree, servicios de kernel, controladores, flasheo y depuración.</td>
      <td>reTerminal E1001 / E1002 / E1003</td>
    </tr>
    <tr>
      <td><a href="https://wiki.seeedstudio.com/es/reterminal_e10xx_with_squareline_vision" target="_blank" rel="noopener noreferrer"><strong>SquareLine Vision</strong></a></td>
      <td align="center">Diseño visual de UI</td>
      <td>UI LVGL de arrastrar y soltar en el navegador, luego exporta código listo para compilar.</td>
      <td>reTerminal E1001 / E1002</td>
    </tr>
    <tr>
      <td><a href="https://wiki.seeedstudio.com/es/reterminal_e10xx_with_eezstudio" target="_blank" rel="noopener noreferrer"><strong>EEZ Studio</strong></a></td>
      <td align="center">Diseño visual de UI</td>
      <td>Diseña pantallas HMI de forma visual e impleméntalas a través de Arduino IDE.</td>
      <td>reTerminal E1001 / E1002 · EE04</td>
    </tr>
    <tr>
      <td><a href="https://wiki.seeedstudio.com/es/reterminal_e10xx_with_lopaka" target="_blank" rel="noopener noreferrer"><strong>Lopaka</strong></a></td>
      <td align="center">Diseño visual de UI</td>
      <td>Herramienta de dibujo basada en la web que exporta código para diseños ePaper monocromos y en color.</td>
      <td>reTerminal E1001 / E1002</td>
    </tr>
    <tr>
      <td><a href="https://wiki.seeedstudio.com/es/EN04_opendisplay" target="_blank" rel="noopener noreferrer"><strong>OpenEPaperLink / OpenDisplay</strong></a></td>
      <td align="center">Firmware de código abierto (BLE)</td>
      <td>Firmware ePaper de código abierto controlado por BLE. OpenDisplay se dirige a EN04 listo para usar; OEPL Config Builder se dirige a la Breakout Board + ruta DIY con XIAO nRF52840.</td>
      <td>EN04 · XIAO ePaper Breakout Board</td>
    </tr>
  </table>
</div>

## Índice de tutoriales de aplicaciones

Cada tutorial a continuación recorre una plataforma de principio a fin:

### Frameworks de hogar inteligente y paneles de control

- [Trabajar con ESPHome](https://wiki.seeedstudio.com/es/epaper_work_with_esphome) — referencia principal: rutas de flasheo, esqueleto YAML genérico, integración con Home Assistant. Recetarios por producto: [reTerminal E (Básico)](https://wiki.seeedstudio.com/es/reterminal_e10xx_with_esphome), [reTerminal E (Avanzado)](https://wiki.seeedstudio.com/es/reterminal_e10xx_with_esphome_advanced), [EE04](https://wiki.seeedstudio.com/es/EE04_with_esphome_advanced), [XIAO 7.5" Panel](https://wiki.seeedstudio.com/es/xiao_075inch_epaper_panel_esphome), [TRMNL DIY Kit](https://wiki.seeedstudio.com/es/ogdiy_kit_works_with_esphome).
- [Trabajar con TRMNL](https://wiki.seeedstudio.com/es/reterminal_e10xx_trmnl) — implementa paneles E-Ink a través de la plataforma en la nube TRMNL. Un único artículo ahora cubre reTerminal E1001/E1002, el TRMNL DIY Kit y el XIAO 7.5" ePaper Panel — elige tu hardware en las pestañas.

### Herramientas sin código / de diseño visual de UI

- [Trabajar con SenseCraft HMI](https://wiki.seeedstudio.com/es/EE04_with_hmi) — la plataforma de interfaz visual sin código de Seeed; cubre reTerminal E Serie y las placas controladoras EE0x.
- [Trabajar con SquareLine Vision](https://wiki.seeedstudio.com/es/reterminal_e10xx_with_squareline_vision)
- [Trabajar con EEZ Studio](https://wiki.seeedstudio.com/es/reterminal_e10xx_with_eezstudio) — flujo de trabajo combinado reTerminal E Serie + EE04 con LVGL.
- [Trabajar con Lopaka](https://wiki.seeedstudio.com/es/reterminal_e10xx_with_lopaka)

### Desarrollo basado en código

- [Trabajar con Arduino](https://wiki.seeedstudio.com/es/epaper_work_with_arduino) — referencia principal: configuración del IDE, biblioteca `Seeed_GFX`, generación de `driver.h`. Recetarios por producto: reTerminal E Serie — [ePaper Display](https://wiki.seeedstudio.com/es/reterminal_e10xx_with_arduino) y [Periféricos integrados](https://wiki.seeedstudio.com/es/reterminal_e10xx_with_arduino_peripherals), [TRMNL DIY Kit](https://wiki.seeedstudio.com/es/ogdiy_kit_works_with_arduino), [XIAO 7.5" Panel](https://wiki.seeedstudio.com/es/xiao_075inch_epaper_panel_arduino).
- [Trabajar con PlatformIO](https://wiki.seeedstudio.com/es/epaper_work_with_platformio) — referencia principal: configuración de VS Code, configuración de `platformio.ini`, configuración de `Seeed_GFX` y selección del entorno PlatformIO por producto. Recetario por producto: [EE04 / EE0x PlatformIO](https://wiki.seeedstudio.com/es/ee04_with_platformio).
- [Trabajar con Zephyr](https://wiki.seeedstudio.com/es/epaper_work_with_zephyr) — página de entrada para el soporte de Zephyr RTOS en reTerminal E1001, E1002 y E1003, con enlaces a la documentación oficial de placas Zephyr y objetivos de placa.

### ESL / OEPL de código abierto

- [Trabajar con OpenEPaperLink / OpenDisplay](https://wiki.seeedstudio.com/es/EN04_opendisplay) — un único artículo cubre el kit EN04 BLE y la ruta DIY con ePaper Breakout Board + XIAO nRF52840.

## Recursos

- [Documentación de SenseCraft HMI](https://wiki.seeedstudio.com/es/sensecraft_hmi_overview/)
- [Hoja de datos del ESP32-S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)
- [Descripción general de la Serie XIAO](https://wiki.seeedstudio.com/es/xiao_topic_page/)
- [Tienda de la categoría ePaper de Seeed Studio](https://www.seeedstudio.com/catalogsearch/result/?q=epaper)

## Soporte técnico y debate sobre productos

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
