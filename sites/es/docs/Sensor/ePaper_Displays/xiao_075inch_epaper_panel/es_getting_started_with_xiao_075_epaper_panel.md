---
description: Esta página es la página de navegación para el panel de epaper XIAO de 7,5".
title: Introducción al panel ePaper XIAO de 7,5"
image: https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/100.webp
slug: /xiao_075inch_epaper_panel
sku: 114993635
sidebar_position: 1
last_update:
  date: 05/19/2025
  author: Citric
createdAt: '2025-05-21'
updatedAt: '2026-04-28'
url: https://wiki.seeedstudio.com/es/xiao_075inch_epaper_panel/
---

# Introducción al panel ePaper XIAO de 7,5"

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/100.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5-ePaper-Panel-p-6416.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong></a>
</div>

## Introducción

Impulsada por XIAO ESP32-C3, esta pantalla ePaper de 7,5 pulgadas es una pantalla E Ink® inteligente versátil y de bajo consumo que admite una amplia gama de aplicaciones populares de la comunidad, incluidas [Home Assistant](https://www.home-assistant.io/), [TRMNL](https://trmnl.app/), Arduino y más. Esta solución de pantalla flexible es perfecta para mostrar datos de paneles de control, actualizaciones meteorológicas, horarios e información personalizada. Con imágenes nítidas, una excepcional duración de batería de 3 meses (2000 mAh) en modo de suspensión profunda y amplias posibilidades de personalización, este dispositivo compacto se adapta a diversos casos de uso. Perfecto para espacios de vida modernos y entornos de proyectos, combina funcionalidad con un diseño elegante para una experiencia visual mejorada en múltiples plataformas.

### Características

- Integración nativa con Home Assistant
- Pantalla E Ink® de 7,5" para automatización del hogar
- Diseño de alta eficiencia energética con bajo consumo
- Compatibilidad con desarrollo en Arduino
- Factor de forma elegante

### Especificaciones

<div class="table-center">
 <table align="center">
  <tr>
   <th>Ítem</th>
   <th>Descripción</th>
  </tr>
  <tr>
   <td>MCU</td>
   <td><a href="https://wiki.seeedstudio.com/es/XIAO_ESP32C3_Getting_Started/">XIAO ESP32-C3</a></td>
  </tr>
  <tr>
   <td>Pantalla</td>
   <td>Pantalla ePaper monocroma de 7,5"</td>
  </tr>
  <tr>
   <td>Resolución</td>
   <td>800 x 480</td>
  </tr>
  <tr>
   <td>Batería</td>
   <td>2000mAh</td>
  </tr>
  <tr>
   <td>Dimensiones</td>
   <td>178 x 131 x 19 mm</td>
  </tr>
  <tr>
   <td>Peso</td>
   <td>218g</td>
  </tr>
  <tr>
   <td>Temperatura de funcionamiento</td>
   <td>-25°C a 50°C</td>
  </tr>
  <tr>
   <td>Fuente de alimentación</td>
   <td>USB Type-C 5V</td>
  </tr>
        <tr>
            <td>Carcasa</td>
            <td>Impresión 3D (PLA)</td>
        </tr>
 </table>
</div>

## Descripción del hardware

El panel ePaper XIAO de 7,5" consta de varios componentes clave como se muestra en el diagrama de vista explosionada:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/207.jpg" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/208.jpg" style={{width:800, height:'auto'}}/></div>

- **Pantalla ePaper monocroma de 7,5"**: pantalla de resolución 800 × 480 que mantiene la imagen sin consumo de energía después de la actualización
- **Placa controladora de ePaper**: controla la pantalla y gestiona la comunicación con el microcontrolador
- **XIAO ESP32-C3**: microcontrolador principal que ejecuta el firmware y gestiona la conectividad
- **Batería de 2000 mAh**: proporciona energía para un funcionamiento prolongado, especialmente durante los modos de suspensión
- **Puerto USB Type-C**: para alimentación y programación
- **Carcasa**: caja impresa en 3D en PLA que aloja todos los componentes

El dispositivo utiliza un diseño interno en capas que coloca la pantalla ePaper en la parte frontal, con la placa controladora, la batería y el XIAO ESP32-C3 apilados detrás de ella dentro de la carcasa.

## Primeros pasos

Para comenzar a usar tu panel ePaper XIAO de 7,5":

1. **Abre el soporte**: levanta suavemente la pantalla usando la muesca en la parte inferior para revelar el soporte integrado. Coloca el dispositivo sobre una superficie plana con el soporte extendido.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/206.gif" style={{width:500, height:'auto'}}/></div>

2. **Enciende el dispositivo**: con la pantalla frente a ti, localiza el interruptor de encendido en la esquina inferior izquierda. Deslízalo a la posición "ON" (la etiqueta ON está oculta detrás del soporte, a tu derecha cuando miras la pantalla).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/205.jpg" style={{width:600, height:'auto'}}/></div>

3. **Arranque inicial**: una vez encendido, el dispositivo comenzará automáticamente a mostrar una secuencia de tres páginas de introducción para demostrar su funcionalidad.

Después de completar estos pasos, tu panel ePaper estará listo para la configuración y el uso con tu plataforma de programación preferida.

### Botones de programación

El panel ePaper XIAO de 7,5" incluye dos botones esenciales situados detrás del soporte que ayudan con la programación y la resolución de problemas:

- **Botón Boot**: se utiliza cuando el dispositivo no tiene conexión serie o está en modo de suspensión y no puede cargar programas. Para entrar en modo Bootloader:
  1. Conecta el cable USB
  2. Mantén pulsado el botón Boot
  3. Pulsa el botón Reset una vez mientras mantienes pulsado Boot
  4. Suelta Reset y luego suelta Boot
  5. Desconecta y vuelve a conectar el cable de alimentación

- **Botón Reset**: se utiliza para reiniciar el programa. Simplemente presiónalo una vez para reiniciar.

Estos botones son fundamentales para la programación del dispositivo, las actualizaciones de firmware y la recuperación cuando el dispositivo deja de responder.

## Centro Wiki

Las siguientes páginas Wiki proporcionan información detallada sobre las diferentes formas de programar y usar tu panel ePaper XIAO de 7,5":

- [**Funciona con ESPHome en Home Assistant**](https://wiki.seeedstudio.com/es/xiao_075inch_epaper_panel_esphome) - Configura y controla tu panel ePaper mediante la integración ESPHome, ideal para usuarios de Home Assistant que deseen crear paneles personalizados.

- [**Funciona con Arduino**](https://wiki.seeedstudio.com/es/xiao_075inch_epaper_panel_arduino/) - Programa tu dispositivo usando Arduino IDE con nuestra biblioteca y ejemplos para aplicaciones personalizadas.

- [**Funciona con TRMNL**](https://wiki.seeedstudio.com/es/reterminal_e10xx_trmnl) - Controla tu pantalla con TRMNL, una plataforma de código abierto para la gestión inteligente de paneles visuales. (Elige la pestaña **XIAO 7.5" Panel** en la guía unificada de TRMNL).

## Recursos

- **[STP]**: [Modelo 3D de la carcasa](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3D_model.zip)
- **[PDF]**: [PDF del esquema de la placa controladora de ePaper](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/ePaper_Driver_Board.pdf)
- **[BAMBU]** [Jonathan Thomson - Soporte de pared para panel ePaper XIAO de 7,5"](https://makerworld.com/en/models/1487711-seeed-studio-xiao-7-5-epaper-panel-wall-mount#profileId-1554538)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
