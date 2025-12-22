---
description: 'Esta página es la página de navegación para el panel de papel electrónico XIAO de 7.5".'
title: Primeros Pasos con el Panel ePaper XIAO de 7.5"
image: https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/100.webp
slug: /es/xiao_075inch_epaper_panel
sidebar_position: 1
last_update:
  date: 05/19/2025
  author: Citric
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/100.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5-ePaper-Panel-p-6416.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong></a>
</div>

## Introducción

Alimentado por XIAO ESP32-C3, esta pantalla ePaper de 7.5 pulgadas es una pantalla inteligente E Ink® versátil y eficiente en energía que soporta una amplia gama de aplicaciones comunitarias populares incluyendo [Home Assistant](https://www.home-assistant.io/), [TRMNL](https://trmnl.app/), Arduino, y más. Esta solución de pantalla flexible es perfecta para mostrar datos de tablero, actualizaciones del clima, horarios e información personalizada. Con visuales nítidos, duración excepcional de batería de 3 meses (2000mAh) en modo de sueño profundo, y amplias posibilidades de personalización, este dispositivo compacto se adapta a diversos casos de uso. Perfecto para espacios de vida modernos y entornos de proyectos, combina funcionalidad con diseño elegante para una experiencia visual mejorada a través de múltiples plataformas.

### Características

- Integración Nativa con Home Assistant
- Pantalla E Ink® de 7.5" para Automatización del Hogar
- Diseño Eficiente en Energía con Bajo Consumo de Energía
- Soporte para Desarrollo Arduino
- Factor de Forma Elegante


### Especificaciones

<div class="table-center">
	<table align="center">
		<tr>
			<th>Elemento</th>
			<th>Descripción</th>
		</tr>
		<tr>
			<td>MCU</td>
			<td><a href="https://wiki.seeedstudio.com/es/XIAO_ESP32C3_Getting_Started/">XIAO ESP32-C3</a></td>
		</tr>
		<tr>
			<td>Pantalla</td>
			<td>Pantalla ePaper Monocromática de 7.5"</td>
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
			<td>Dimensión</td>
			<td>178 x 131 x 19 mm</td>
		</tr>
		<tr>
			<td>Peso</td>
			<td>218g</td>
		</tr>
		<tr>
			<td>Temperatura de Operación</td>
			<td>-25°C a 50°C</td>
		</tr>
		<tr>
			<td>Fuente de Alimentación</td>
			<td>USB Tipo-C 5V</td>
		</tr>
        <tr>
            <td>Carcasa</td>
            <td>Impresión 3D (PLA)</td>
        </tr>
	</table>
</div>

## Descripción General del Hardware

El Panel ePaper XIAO de 7.5" consiste en varios componentes clave como se muestra en el diagrama de vista explosionada:


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/207.jpg" style={{width:800, height:'auto'}}/></div>


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/208.jpg" style={{width:800, height:'auto'}}/></div>

- **Pantalla ePaper Monocromática de 7.5"**: Pantalla de resolución 800 × 480 que mantiene la imagen sin consumo de energía después del refresco
- **Placa Controladora ePaper**: Controla la pantalla y maneja la comunicación con el microcontrolador
- **XIAO ESP32-C3**: Microcontrolador principal que ejecuta el firmware y gestiona la conectividad
- **Batería de 2000 mAh**: Proporciona energía para operación extendida, especialmente durante modos de sueño
- **Puerto USB Tipo-C**: Para suministro de energía y programación
- **Carcasa**: Caja impresa en 3D de PLA que aloja todos los componentes

El dispositivo utiliza un diseño interno en capas que coloca la pantalla ePaper en el frente, con la placa controladora, batería y XIAO ESP32-C3 apilados detrás de ella dentro de la carcasa.

## Primeros Pasos

Para comenzar con tu Panel ePaper XIAO de 7.5":

1. **Abrir el Soporte**: Levanta suavemente la pantalla usando la muesca en la parte inferior para revelar el soporte incorporado. Coloca el dispositivo en una superficie plana con el soporte extendido.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/206.gif" style={{width:500, height:'auto'}}/></div>

2. **Encender**: Con la pantalla mirando hacia ti, localiza el interruptor de encendido en la esquina inferior izquierda. Deslízalo a la posición "ON" (la etiqueta ON está oculta detrás del soporte, en tu lado derecho cuando miras la pantalla).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/205.jpg" style={{width:600, height:'auto'}}/></div>

3. **Arranque Inicial**: Una vez encendido, el dispositivo comenzará automáticamente a mostrar una secuencia de tres páginas de introducción para demostrar su funcionalidad.

Después de completar estos pasos, tu Panel ePaper estará listo para configuración y uso con tu plataforma de programación preferida.

### Botones de Programación

El Panel ePaper XIAO de 7.5" incluye dos botones esenciales ubicados detrás del soporte que ayudan con la programación y resolución de problemas:

- **Botón Boot**: Se usa cuando el dispositivo no tiene conexión serie o está en modo de sueño y no puede cargar programas. Para entrar al modo Bootloader:
  1. Conecta el cable USB
  2. Mantén presionado el botón Boot
  3. Presiona el botón Reset una vez mientras mantienes Boot
  4. Suelta Reset, luego suelta Boot
  5. Desconecta y vuelve a conectar el cable de alimentación

- **Botón Reset**: Se usa para reiniciar el programa. Simplemente presiona una vez para reiniciar.

Estos botones son críticos para la programación del dispositivo, actualizaciones de firmware y recuperación cuando el dispositivo no responde.

## Centro Wiki

Las siguientes páginas Wiki proporcionan información detallada sobre diferentes formas de programar y usar tu Panel ePaper XIAO de 7.5":

* [**Funciona con ESPHome en Home Assistant**](https://wiki.seeedstudio.com/es/xiao_075inch_epaper_panel_esphome) - Configura y controla tu Panel ePaper a través de la integración ESPHome, ideal para usuarios de Home Assistant para crear tableros personalizados.

* [**Funciona con Arduino**](https://wiki.seeedstudio.com/es/xiao_075inch_epaper_panel_arduino/) - Programa tu dispositivo usando Arduino IDE con nuestra biblioteca y ejemplos para aplicaciones personalizadas.

* [**Funciona con TRMNL**](https://wiki.seeedstudio.com/es/xiao_7_5_inch_epaper_panel_with_trmnl) - Controla tu pantalla con trmnl, una plataforma de código abierto para gestión de tableros visuales inteligentes.

## Recursos

- **[STP]**: [Carcasa Modelo 3D](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3D_model.zip)
- **[PDF]**: [PDF SCH Placa Controladora ePaper](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/ePaper_Driver_Board.pdf)
- **[BAMBU]** [Jonathan Thomson - Montaje de Pared Panel ePaper XIAO de 7.5"](https://makerworld.com/en/models/1487711-seeed-studio-xiao-7-5-epaper-panel-wall-mount#profileId-1554538)


## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>



