---
description: Controla el hardware de ePaper de Seeed con los ecosistemas OpenDisplay y OpenEPaperLink a través de Bluetooth Low Energy, incluyendo reTerminal E1001, E1002, E1003, XIAO ePaper Display Board EN04 y la ruta XIAO ePaper Breakout Board.
title: Trabajar con OpenEPaperLink / OpenDisplay
keywords:
  - pantalla ePaper
  - OpenEPaperLink
  - OEPL
  - OpenDisplay
  - reTerminal E1001
  - reTerminal E1002
  - reTerminal E1003
  - EN04
  - ePaper Breakout Board
image: https://files.seeedstudio.com/wiki/Epaper/EN04/EN04_2.webp
slug: /EN04_opendisplay
sidebar_position: 9
last_update:
  date: 06/30/2026
  author: dimo
aliases:
  - /epaper_breakout_board_with_oepl
createdAt: '2026-04-28'
url: https://wiki.seeedstudio.com/es/EN04_opendisplay/
updatedAt: '2026-06-30'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Trabajar con OpenEPaperLink / OpenDisplay

[OpenDisplay](https://opendisplay.org/) y [OpenEPaperLink (OEPL)](https://openepaperlink.de/) son ecosistemas de código abierto para controlar pantallas ePaper mediante **Bluetooth Low Energy (BLE)**. Un teléfono, ordenador u host de Home Assistant puede conectarse directamente a la pantalla, por lo que el flujo de trabajo básico no requiere un punto de acceso 802.15.4.

Esta guía cubre dos rutas de hardware de Seeed:

- **Ruta OpenDisplay Toolbox**: recomendada para firmware OpenDisplay listo para usar en **reTerminal E1001**, **reTerminal E1002**, **reTerminal E1003** y **XIAO ePaper Display Board EN04**.
- **Ruta OEPL_BLE**: útil para un montaje modular DIY con la **ePaper Breakout Board for Seeed Studio XIAO** y una **placa XIAO nRF52840 series**.

La experiencia de usuario es similar en ambas rutas: instalar el firmware, configurar el dispositivo mediante BLE y luego subir una imagen. Las herramientas y los presets compatibles son diferentes, así que sigue la pestaña que coincida con tu hardware.

## Hardware compatible

<Tabs groupId="oepl-hardware">
<TabItem value="reterminal" label="reTerminal E Serie" default>

OpenDisplay Toolbox incluye presets para **reTerminal E1001**, **reTerminal E1002** y **reTerminal E1003**.

<div class="table-center">
	<table align="center">
		<tr>
			<th>reTerminal E1001</th>
			<th>reTerminal E1002</th>
			<th>reTerminal E1003</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/132.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/132.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/1.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1003-p-6731.html" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
		<tr>
			<td align="center">7,5" monocromo, 800 × 480</td>
			<td align="center">7,3" Spectra 6 colores, 800 × 480</td>
			<td align="center">10,3" monocromo, 1404 × 1872, táctil</td>
		</tr>
		<tr>
			<td align="center"><a href="https://opendisplay.org/firmware/toolbox/index.html?config=reterminal-e1001" target="_blank" rel="noopener noreferrer">Abrir en Toolbox</a></td>
			<td align="center"><a href="https://opendisplay.org/firmware/toolbox/index.html?config=reterminal-e1002" target="_blank" rel="noopener noreferrer">Abrir en Toolbox</a></td>
			<td align="center"><a href="https://opendisplay.org/firmware/toolbox/index.html?config=reterminal-e1003" target="_blank" rel="noopener noreferrer">Abrir en Toolbox</a></td>
		</tr>
	</table>
</div>

Utiliza esta ruta cuando quieras ejecutar firmware OpenDisplay directamente en un dispositivo reTerminal E Serie terminado.

:::caution
La instalación del firmware OpenDisplay sustituye al firmware que se está ejecutando actualmente en el dispositivo. Ten preparada una ruta de restauración utilizando el Firmware Hub oficial de reTerminal E-Series o el paquete de firmware recomendado por el Wiki de tu producto.
:::

</TabItem>
<TabItem value="en04" label="XIAO ePaper Display Board EN04">

<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAO ePaper Display Board EN04</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/diy_kit_pic.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-nRF52840-EN04-p-6589.html" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
		<tr>
			<td align="center"><a href="https://opendisplay.org/firmware/toolbox/index.html?driver=en04" target="_blank" rel="noopener noreferrer">Abrir EN04 en Toolbox</a></td>
		</tr>
	</table>
</div>

EN04 es una placa controladora de ePaper basada en nRF52840. Es la ruta DIY más directa para OpenDisplay cuando quieres emparejar un panel ePaper compatible con un controlador centrado en BLE.

</TabItem>
<TabItem value="breakout" label="ePaper Breakout Board + XIAO nRF52840">

<div class="table-center">
	<table align="center">
		<tr>
			<th>Pantalla ePaper monocroma de 4,26"</th>
			<th>ePaper Breakout Board for Seeed Studio XIAO</th>
			<th>Seeed Studio XIAO nRF52840 Sense Plus</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993631-4.26-monochrome-eink--epaper-display.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/4/-/4-105990172-epaper-breakout-board-45back.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-102010694-seeedstudio-xiao-nrf52840-sense-plus-45font_1.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/ePaper-breakout-Board-for-XIAO-V2-p-6374.html" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Sense-Plus-p-6360.html" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

Utiliza esta ruta cuando quieras una construcción modular OEPL_BLE. La serie XIAO nRF52840 puede controlar este kit DIY, y el flujo de trabajo comunitario de OEPL proporciona herramientas separadas para la configuración y la carga de imágenes.

</TabItem>
</Tabs>

## ¿Por qué usar OpenDisplay / OpenEPaperLink?

- **Flujo de trabajo centrado en BLE**: configura y sube imágenes sin un punto de acceso 802.15.4 dedicado.
- **Herramientas basadas en navegador**: instala firmware, selecciona presets, configura dispositivos y sube imágenes desde un navegador compatible.
- **Presets para hardware de Seeed**: OpenDisplay Toolbox incluye presets para reTerminal E1001, E1002, E1003 y EN04.
- **Compatibilidad con Home Assistant**: los dispositivos OpenDisplay se pueden añadir mediante la integración oficial de OpenDisplay de Home Assistant.
- **Ecosistema de código abierto**: el firmware, las herramientas y las integraciones se desarrollan en repositorios públicos.

## Paso 1: Configuración del hardware

<Tabs groupId="oepl-hardware">
<TabItem value="reterminal" label="reTerminal E Serie" default>

**Paso 1.** Conecta el dispositivo reTerminal E Serie a tu ordenador con un cable de datos USB-C.

**Paso 2.** Enciende el dispositivo y mantenlo cerca del ordenador. El navegador utilizará USB para la instalación del firmware y BLE para la configuración.

**Paso 3.** Haz coincidir tu hardware con el preset correcto de OpenDisplay Toolbox:

<div class="table-center">
	<table align="center">
		<tr>
			<th>Dispositivo</th>
			<th>Preset de Toolbox</th>
			<th>Pantalla</th>
		</tr>
		<tr>
			<td>reTerminal E1001</td>
			<td><code>reterminal-e1001</code></td>
			<td>7,5" monocromo, 800 × 480</td>
		</tr>
		<tr>
			<td>reTerminal E1002</td>
			<td><code>reterminal-e1002</code></td>
			<td>7,3" Spectra 6 colores, 800 × 480</td>
		</tr>
		<tr>
			<td>reTerminal E1003</td>
			<td><code>reterminal-e1003</code></td>
			<td>10,3" monocromo, 1404 × 1872</td>
		</tr>
	</table>
</div>

</TabItem>
<TabItem value="en04" label="XIAO ePaper Display Board EN04">

**Paso 1.** Inserta el cable FPC del panel ePaper en el conector EN04 y bloquea la pestaña.

:::tip
Para el conector de 50 pines, alinea las marcas impresas `1` y `50` del FPC con las marcas correspondientes de la placa. En el kit EN04 que se muestra a continuación, el lado de contacto metálico del FPC mira hacia arriba.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/hardware.jpg" style={{width:600, height:'auto'}}/></div>

**Paso 2.** Conecta la batería al conector JST. El cable rojo va a **+**, el cable negro va a **-**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/battery.jpg" style={{width:600, height:'auto'}}/></div>

**Paso 3.** Conecta la placa EN04 a tu ordenador con un cable de datos USB-C.

:::caution
Comprueba la polaridad de la batería antes de alimentar la placa. Un conector de batería con polaridad invertida puede dañar el hardware.
:::

</TabItem>
<TabItem value="breakout" label="Placa de expansión ePaper + XIAO nRF52840">

**Paso 1.** Monta la placa de la serie XIAO nRF52840 en la ePaper Breakout Board.

**Paso 2.** Inserta el cable FPC del panel ePaper en el conector de la placa de expansión y bloquea la pestaña.

**Paso 3.** Conecta el XIAO a tu ordenador con un cable de datos USB-C.

</TabItem>
</Tabs>

## Paso 2: Instalar el firmware

<Tabs groupId="oepl-hardware">
<TabItem value="reterminal" label="reTerminal E Serie" default>

OpenDisplay proporciona presets directos de Toolbox para la reTerminal E Serie.

**Paso 1.** Abre el preset de Toolbox correspondiente en Chrome o Edge:

- [Preset de Toolbox para reTerminal E1001](https://opendisplay.org/firmware/toolbox/index.html?config=reterminal-e1001)
- [Preset de Toolbox para reTerminal E1002](https://opendisplay.org/firmware/toolbox/index.html?config=reterminal-e1002)
- [Preset de Toolbox para reTerminal E1003](https://opendisplay.org/firmware/toolbox/index.html?config=reterminal-e1003)

**Paso 2.** Confirma que el preset seleccionado coincide con tu dispositivo.

**Paso 3.** Haz clic en **Install firmware (USB)**.

**Paso 4.** En el cuadro de diálogo de emparejamiento del navegador, selecciona el dispositivo serie USB que aparece cuando la reTerminal está conectada.

**Paso 5.** Espera hasta que el instalador termine y el dispositivo se reinicie.

Después de la instalación, continúa con la configuración BLE en el siguiente paso.

</TabItem>
<TabItem value="en04" label="Placa de pantalla XIAO ePaper EN04">

El flujo actual de OpenDisplay utiliza Toolbox para la configuración de EN04.

**Paso 1.** Abre [OpenDisplay Toolbox para EN04](https://opendisplay.org/firmware/toolbox/index.html?driver=en04) en Chrome o Edge.

**Paso 2.** Selecciona el panel que coincida con tu pantalla ePaper conectada.

**Paso 3.** Haz clic en **Install firmware (USB)** y sigue las indicaciones del navegador.

**Paso 4.** Si el navegador solicita el modo bootloader, pulsa dos veces el botón de reinicio en la placa EN04 y, a continuación, selecciona el nuevo dispositivo USB detectado.

**Paso 5.** Espera a que finalice la instalación del firmware.

La EN04 se reiniciará con el firmware OpenDisplay y luego se podrá configurar mediante BLE.

</TabItem>
<TabItem value="breakout" label="Placa de expansión ePaper + XIAO nRF52840">

La ruta XIAO nRF52840 + Breakout Board utiliza el firmware **OEPL_BLE** antes de que OEPL Config Builder pueda conectarse a él.

**Paso 1.** Abre la [página de lanzamientos de OEPL_BLE](https://github.com/OpenEPaperLink/OEPL_BLE/releases) y descarga el paquete de firmware que coincida con tu placa XIAO nRF52840.

<div class="github_container" style={{textAlign: 'center'}}>
	<a class="github_item" href="https://github.com/OpenEPaperLink/OEPL_BLE/releases" target="_blank" rel="noopener noreferrer">
	<strong><span><font color={'FFFFFF'} size={"4"}> Download OEPL_BLE Firmware</font></span></strong>
	</a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/hub_oepl.png" style={{width:700, height:'auto'}}/></div>

**Paso 2.** Pulsa dos veces el botón de reinicio del XIAO. Aparecerá como una unidad USB.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/file_pic.png" style={{width:700, height:'auto'}}/></div>

**Paso 3.** Arrastra el archivo de firmware `.uf2` descargado a la unidad USB.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/firmware.jpg" style={{width:700, height:'auto'}}/></div>

El XIAO se reinicia y ejecuta el firmware OEPL_BLE en el siguiente ciclo de encendido.

</TabItem>
</Tabs>

## Paso 3: Configurar el dispositivo mediante BLE

<Tabs groupId="oepl-hardware">
<TabItem value="reterminal" label="reTerminal E Serie" default>

**Paso 1.** En la misma página de OpenDisplay Toolbox, haz clic en **Configure over Bluetooth**.

**Paso 2.** Selecciona tu dispositivo reTerminal en el cuadro de diálogo de emparejamiento BLE.

**Paso 3.** Espera a que Toolbox escriba el preset seleccionado en el dispositivo.

**Paso 4.** Confirma que la pantalla se actualiza o muestra la imagen de inicio/prueba de OpenDisplay.

El dispositivo ya está listo para la carga de imágenes mediante las herramientas OpenDisplay o Home Assistant.

</TabItem>
<TabItem value="en04" label="Placa de pantalla XIAO ePaper EN04">

**Paso 1.** En OpenDisplay Toolbox, mantén **EN04** seleccionado como placa controladora y confirma la opción de panel correspondiente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/step6.png" style={{width:600, height:'auto'}}/></div>

**Paso 2.** Haz clic en **Configure over Bluetooth**.

**Paso 3.** Selecciona el dispositivo EN04 en el cuadro de diálogo de emparejamiento BLE.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/step7.png" style={{width:500, height:'auto'}}/></div>

**Paso 4.** Espera hasta que Toolbox escriba la configuración y la pantalla se actualice.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/boot_screen.jpg" style={{width:500, height:'auto'}}/></div>

</TabItem>
<TabItem value="breakout" label="Placa de expansión ePaper + XIAO nRF52840">

**Paso 1.** Abre el [OEPL Config Builder](https://config.openepaperlink.org/).

**Paso 2.** Haz clic en **Connect** y selecciona tu dispositivo XIAO nRF52840 en el cuadro de diálogo de emparejamiento BLE.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Connect_demo_2.png" style={{width:700, height:'auto'}}/></div>

**Paso 3.** Utiliza los paneles del generador para configurar el IC host, los ajustes de alimentación, la pantalla, los LED, los sensores, los buses y las entradas binarias.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Builder_demo_1.png" style={{width:700, height:'auto'}}/></div>

**Paso 4.** Para la configuración de la pantalla ePaper monocroma Seeed de 4,26", importa la configuración de ejemplo que aparece a continuación.

<div align="center">
<a href="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/oep_config_base.json" target="_blank" rel="noopener noreferrer">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Configuración de ejemplo 4,26" (JSON)</button></p>
</a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Package_import_1.png" style={{width:700, height:'auto'}}/></div>

**Paso 5.** Haz clic en **Write Config** para guardar la configuración en el MCU.

</TabItem>
</Tabs>

## Paso 4: Subir imágenes

<Tabs groupId="oepl-hardware">
<TabItem value="reterminal" label="reTerminal E Serie" default>

Los dispositivos OpenDisplay pueden recibir imágenes a través de la herramienta de visualización del navegador.

**Paso 1.** Abre la [herramienta de visualización OpenDisplay](https://opendisplay.org/firmware/display/index.html).

**Paso 2.** Haz clic en **Connect** y selecciona tu dispositivo reTerminal en el cuadro de diálogo de emparejamiento BLE.

**Paso 3.** Haz clic en **Select Image** y elige un archivo de imagen local.

**Paso 4.** Haz clic en **Upload Image**.

Cuando finalice la transferencia, la pantalla ePaper se actualizará y mostrará la imagen subida.

:::tip
Utiliza un tamaño de imagen que coincida con tu panel para obtener el mejor resultado:

- reTerminal E1001: 800 × 480 px
- reTerminal E1002: 800 × 480 px
- reTerminal E1003: 1404 × 1872 px
:::

</TabItem>
<TabItem value="en04" label="Placa de pantalla XIAO ePaper EN04">

**Paso 1.** Abre la [herramienta de visualización OpenDisplay](https://opendisplay.org/firmware/display/index.html).

**Paso 2.** Haz clic en **Connect** y selecciona el dispositivo EN04 en el cuadro de diálogo de emparejamiento BLE.

**Paso 3.** Haz clic en **Select Image** y elige un archivo de imagen local.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/upload_image.png" style={{width:500, height:'auto'}}/></div>

**Paso 4.** Haz clic en **Upload Image**. La pantalla ePaper se actualizará cuando finalice la transferencia.

:::tip
Utiliza un tamaño de imagen que coincida con tu panel conectado. Por ejemplo, un panel Spectra 6 de 7,3" utiliza 800 × 480 px.
:::

</TabItem>
<TabItem value="breakout" label="Placa de expansión ePaper + XIAO nRF52840">

OEPL Image Uploader es una herramienta web BLE independiente para la ruta OEPL_BLE.

**Paso 1.** Abre el [OEPL Image Uploader](https://atc1441.github.io/ATC_BLE_OEPL_Image_Upload.html).

**Paso 2.** En **E-Paper prefix filter(s)**, introduce `OEPL`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_4.png" style={{width:350, height:'auto'}}/></div>

**Paso 3.** Conéctate al dispositivo XIAO mediante BLE.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_6.png" style={{width:500, height:'auto'}}/></div>

**Paso 4.** Haz clic en **Select File** y elige una imagen local.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_2.png" style={{width:550, height:'auto'}}/></div>

**Paso 5.** Haz clic en **Upload Image**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_5.png" style={{width:350, height:'auto'}}/></div>

Cuando el cargador muestre **Upload Complete**, la pantalla ePaper se habrá actualizado.

</TabItem>
</Tabs>

## Integración con Home Assistant

Home Assistant tiene una integración oficial **OpenDisplay** para dispositivos con firmware OpenDisplay. Se comunica mediante BLE y proporciona la acción `opendisplay.upload_image` para enviar imágenes a la pantalla.

### Requisitos previos

- Home Assistant 2026.4 o posterior.
- Una configuración Bluetooth funcional que admita conexiones BLE activas.
- Un dispositivo con firmware OpenDisplay encendido y dentro del alcance de Bluetooth.

Las siguientes rutas Bluetooth son adecuadas:

- Home Assistant Green u otro host de Home Assistant con hardware Bluetooth compatible.
- Proxy Bluetooth ESPHome ejecutando firmware ESPHome 2022.9.3 o posterior.

:::info
Los proxies Bluetooth de Shelly son útiles para sensores BLE pasivos, pero la carga de imágenes de OpenDisplay requiere conexiones BLE activas. Usa un adaptador Bluetooth de Home Assistant o un ESPHome Bluetooth Proxy para este flujo de trabajo.
:::

### Añadir el dispositivo

**Paso 1.** En Home Assistant, ve a **Settings > Devices & services**.

**Paso 2.** Si el dispositivo se descubre automáticamente, haz clic en **Add** en la tarjeta de OpenDisplay.

**Paso 3.** Si no se descubre automáticamente, haz clic en **Add Integration**, busca **OpenDisplay** y sigue el flujo de configuración.

**Paso 4.** Asigna el nombre y el área del dispositivo.

Después de añadir el dispositivo, Home Assistant puede descubrir y conectarse al dispositivo OpenDisplay mediante Bluetooth.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/pair_ha.jpg" style={{width:500, height:'auto'}}/></div>

### Cargar una imagen desde Home Assistant

Almacena tu imagen en la carpeta de medios local de Home Assistant y luego llama a `opendisplay.upload_image`.

```yaml
action: opendisplay.upload_image
data:
  device_id: "your_device_id"
  image:
    media_content_id: "media-source://media_source/local/photo.png"
    media_content_type: "image/png"
```

Para actualizaciones programadas, usa la misma acción dentro de una automatización.

```yaml
triggers:
  - trigger: time
    at: "08:00:00"
actions:
  - action: opendisplay.upload_image
    data:
      device_id: "your_device_id"
      image:
        media_content_id: "media-source://media_source/local/daily.png"
        media_content_type: "image/png"
```

:::tip
Usa automatizaciones de Home Assistant para generar o copiar un nuevo PNG antes de llamar a `opendisplay.upload_image`. La integración de OpenDisplay se encarga entonces de la transferencia BLE a la pantalla.
:::

### Opcional: cargas personalizadas de dibujo

La comunidad de OpenDisplay también mantiene una integración HACS con un flujo de trabajo `drawcustom` para dibujar texto, iconos, formas, códigos QR, imágenes, gráficos y barras de progreso directamente desde cargas útiles de Home Assistant.

Utiliza esta ruta cuando necesites específicamente diseños de comandos de dibujo en lugar de cargar una imagen preparada.

<div class="github_container" style={{textAlign: 'center'}}>
	<a class="github_item" href="https://github.com/OpenDisplay-org/Home_Assistant_Integration" target="_blank" rel="noopener noreferrer">
	<strong><span><font color={'FFFFFF'} size={"4"}> OpenDisplay HACS Integration</font></span></strong>
	</a>
</div>

En el editor visual de Home Assistant, crea una automatización, añade un disparador de tiempo, luego añade la acción de dibujo de OpenDisplay y selecciona el dispositivo de destino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/add_trigger.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/fill_trigger.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/add_action.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/pick_target.png" style={{width:800, height:'auto'}}/></div>

## Uso de ESPHome Bluetooth Proxy

Un ESPHome Bluetooth Proxy amplía la cobertura de Bluetooth y mejora la fiabilidad cuando la pantalla está lejos del host de Home Assistant.

### Requisitos previos

- Un dispositivo ESP32, como XIAO ESP32S3.
- ESPHome instalado en Home Assistant.
- Un cable de datos USB para el primer flasheo.

### Configuración paso a paso

**Paso 1.** Conecta el dispositivo ESP32 al ordenador o al host de Home Assistant utilizado para el flasheo.

**Paso 2.** Crea un nuevo dispositivo ESPHome y utiliza una configuración de Bluetooth Proxy similar al siguiente ejemplo.

```yaml
esphome:
  name: esps3-proxy
  friendly_name: ESP32S3 Bluetooth Proxy

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

logger:
  level: INFO

esp32_ble_tracker:
  scan_parameters:
    active: true

bluetooth_proxy:
  active: true

api:
  encryption:
    key: "YOUR_ENCRYPTION_KEY"

ota:
  - platform: esphome
    password: "YOUR_OTA_PASSWORD"

wifi:
  ssid: "YOUR_WIFI_SSID"
  password: "YOUR_WIFI_PASSWORD"

captive_portal:
```

**Paso 3.** Haz clic en **Install** en ESPHome y flashea el firmware en el dispositivo ESP32.

**Paso 4.** Después de que el ESP32 se conecte a la red Wi‑Fi, añade el Bluetooth Proxy descubierto en Home Assistant.

**Paso 5.** Mantén el proxy cerca del dispositivo OpenDisplay durante las cargas de imágenes.

Cuando el proxy está funcionando, Home Assistant muestra el Bluetooth Proxy como conectado y la pantalla de papel electrónico puede ser descubierta a través de él.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/5.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/6.png" style={{width:700, height:'auto'}}/></div>

## Extra: soporte impreso en 3D

Para EN04 con el panel Spectra de 7,3", este modelo de la comunidad proporciona un inserto para el marco de fotos IKEA RODALM:

- **[MakerWorld]** [Seeed 7.3" Spectra Insert for IKEA RODALM Frame](https://makerworld.com/pl/models/2103122-seeed-7-3-spectra-insert-for-ikea-rodalm-frame)

## Recursos

- **[Web Tool]** [OpenDisplay Toolbox](https://opendisplay.org/firmware/toolbox/index.html)
- **[Web Tool]** [OpenDisplay display tool](https://opendisplay.org/firmware/display/index.html)
- **[Web Tool]** [OEPL Config Builder](https://config.openepaperlink.org/)
- **[Web Tool]** [OEPL Image Uploader](https://atc1441.github.io/ATC_BLE_OEPL_Image_Upload.html)
- **[Home Assistant]** [Official OpenDisplay Integration](https://www.home-assistant.io/integrations/opendisplay/)

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
