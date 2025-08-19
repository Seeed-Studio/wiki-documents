---
description: 'This page is the navigation page for the XIAO 7.5" epaper panel.'
title: Primeros Pasos con XIAO 7.5" ePaper Panel
image: https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/100.webp
slug: /es/xiao_7_5_inch_epaper_panel_main_page
sidebar_position: 1
last_update:
  date: 07/19/2025
  author: Guillermo
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/100.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5-ePaper-Panel-p-6416.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo Ahora 🖱️</font></span></strong></a>
</div>

## Introducción

Impulsado por XIAO ESP32-C3, esta pantalla ePaper de 7.5 pulgadas es una pantalla inteligente E Ink® versátil y eficiente energéticamente que soporta una amplia gama de aplicaciones populares de la comunidad, incluyendo [Home Assistant](https://www.home-assistant.io/), [TRMNL](https://trmnl.app/), Arduino y más. Esta solución flexible de pantalla es perfecta para mostrar datos de paneles, actualizaciones del clima, horarios e información personalizada. Con imágenes nítidas, una vida útil excepcional de batería de 3 meses (2000mAh) en modo de suspensión profunda y amplias posibilidades de personalización, este dispositivo compacto se adapta a diversos casos de uso. Perfecto para espacios modernos y entornos de proyectos, combina funcionalidad con un diseño elegante para una experiencia visual mejorada en múltiples plataformas.

### Características

- Integración nativa con Home Assistant  
- Pantalla E Ink® de 7.5" para automatización del hogar  
- Diseño eficiente en energía con bajo consumo  
- Soporte para desarrollo con Arduino  
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
			<td><a href="https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started/">XIAO ESP32-C3</a></td>
		</tr>
		<tr>
			<td>Pantalla</td>
			<td>Pantalla ePaper monocromática de 7.5"</td>
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
			<td>Temperatura de operación</td>
			<td>-25°C a 50°C</td>
		</tr>
		<tr>
			<td>Fuente de alimentación</td>
			<td>USB Tipo-C 5V</td>
		</tr>
        <tr>
            <td>Carcasa</td>
            <td>Impresión 3D (PLA)</td>
        </tr>
	</table>
</div>

## Descripción del hardware

El XIAO 7.5" ePaper Panel consta de varios componentes clave, como se muestra en el diagrama exploded view:

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/207.jpg" style={{width:800, height:'auto'}}/>
</div>

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/208.jpg" style={{width:800, height:'auto'}}/>
</div>

- **Pantalla ePaper monocromática de 7.5"**: pantalla con resolución 800 × 480 que mantiene la imagen sin consumo de energía después de actualizar  
- **Placa controladora de ePaper**: controla la pantalla y maneja la comunicación con el microcontrolador  
- **XIAO ESP32-C3**: microcontrolador principal que ejecuta el firmware y gestiona la conectividad  
- **Batería de 2000 mAh**: provee energía para operación extendida, especialmente en modos de suspensión  
- **Puerto USB Tipo-C**: para alimentación y programación  
- **Carcasa**: caja impresa en 3D PLA que alberga todos los componentes

El dispositivo usa un diseño interno en capas que coloca la pantalla ePaper al frente, con la placa controladora, batería y XIAO ESP32-C3 apilados detrás dentro de la carcasa.

## Primeros pasos

Para comenzar con tu XIAO 7.5" ePaper Panel:

1. **Abrir el soporte**: Levanta suavemente la pantalla usando la muesca en la parte inferior para revelar el soporte incorporado. Coloca el dispositivo sobre una superficie plana con el soporte extendido.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/206.gif" style={{width:500, height:'auto'}}/>
</div>

2. **Encender**: Con la pantalla hacia ti, localiza el interruptor de encendido en la esquina inferior izquierda. Deslízalo a la posición "ON" (la etiqueta ON está oculta detrás del soporte, a tu derecha cuando miras la pantalla).

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/205.jpg" style={{width:600, height:'auto'}}/>
</div>

3. **Arranque inicial**: Una vez encendido, el dispositivo comenzará automáticamente a mostrar una secuencia de tres páginas introductorias para demostrar su funcionalidad.

Después de completar estos pasos, tu ePaper Panel estará listo para configuración y uso con tu plataforma de programación preferida.

### Botones de programación

El XIAO 7.5" ePaper Panel incluye dos botones esenciales ubicados detrás del soporte que ayudan con la programación y solución de problemas:

- **Botón Boot**: usado cuando el dispositivo no tiene conexión serial o está en modo de suspensión y no puede subir programas. Para entrar en modo bootloader:  
  1. Conecta el cable USB  
  2. Presiona y mantén presionado el botón Boot  
  3. Presiona una vez el botón Reset mientras mantienes Boot presionado  
  4. Suelta Reset, luego suelta Boot  
  5. Desconecta y vuelve a conectar el cable de alimentación

- **Botón Reset**: usado para reiniciar el programa. Simplemente presiona una vez para reiniciar.

Estos botones son críticos para programación del dispositivo, actualizaciones de firmware y recuperación cuando el dispositivo no responde.

## Centro Wiki

Las siguientes páginas Wiki proveen información detallada sobre diferentes formas de programar y usar tu XIAO 7.5" ePaper Panel:

* [**Funciona con ESPHome en Home Assistant**](https://wiki.seeedstudio.com/xiao_075inch_epaper_panel) - Configura y controla tu ePaper Panel mediante integración ESPHome, ideal para usuarios de Home Assistant para crear paneles personalizados.

* [**Funciona con Arduino**](https://wiki.seeedstudio.com/xiao_075inch_epaper_panel_arduino) - Programa tu dispositivo usando Arduino IDE con nuestra librería y ejemplos para aplicaciones personalizadas.

* [**Funciona con TRMNL**](https://wiki.seeedstudio.com/xiao_7_5_inch_epaper_panel_with_trmnl) - Controla tu pantalla con trmnl, una plataforma open-source para gestión inteligente de paneles visuales.

## Recursos

- **[STP]**: [Modelo 3D de la carcasa](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3D_model.zip)  
- **[PDF]**: [PDF del esquema del Driver Board del ePaper](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/ePaper_Driver_Board.pdf)  
- **[BAMBU]**: [Jonathan Thomson - Soporte de pared para XIAO 7.5" ePaper Panel](https://makerworld.com/en/models/1487711-seeed-studio-xiao-7-5-epaper-panel-wall-mount#profileId-1554538)  

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte distintos tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>



