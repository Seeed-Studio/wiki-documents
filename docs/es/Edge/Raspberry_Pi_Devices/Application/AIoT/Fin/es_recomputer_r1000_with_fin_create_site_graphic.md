---
description: Este artículo te mostrará cómo crear un Gráfico de Sitio

title: reComputer R1000 con FIN para crear un Gráfico de Sitio
keywords:
  - Edge Controller
  - reComputer R1000
  - FIN
  - ModbusTCP
  - Graphic
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /es/reComputer_r1000_fin_site_gaphic
last_update:
  date: 07/18/2024
  author: ShuishengPeng
---

## Introducción 
FIN Framework (FIN) es un marco de software con suites de aplicaciones que puede integrar, controlar, gestionar, analizar, visualizar y conectar. Sus capacidades pueden ser integradas por OEMs en una gama de productos y servicios.

Este artículo te mostrará cómo usar el `Graphics Builder` de FIN Framework, y crear un `Site Graphic` usando el `Graphics Builder`.

## Comenzando

Antes de iniciar este proyecto, es posible que necesites preparar tu hardware y software con anticipación como se describe aquí.

### Preparación de Hardware

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### Preparación de Software
* Con respecto a cómo instalar FIN Framework, puedes consultar esta [wiki](https://wiki.seeedstudio.com/es/reComputer_r1000_install_fin/).

## Pasos para crear un Gráfico de Sitio
### Crear nuevo Gráfico de Sitio
**Paso 1**: Creamos 4 Pisos. Para saber cómo crear Pisos, puedes consultar esta [wiki](https://wiki.seeedstudio.com/es/reComputer_r1000_fin_modbus_tcp_and_rtu/). Luego coloca el contexto bajo el `Site` correspondiente, aquí lo colocamos bajo la ruta `Tower`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_path_and_floor.png" /></center>

**Paso 2**: Crear un nuevo Gráfico y entrar a la interfaz de edición. Haz clic en `Graphic Builder => new`, y aparecerá la ventana emergente de `Create a Graphic`. La diferencia con crear `Top Level Graphic` es que la segunda propiedad aquí se convierte en `Select floors to include in site graphic`, Seleccionamos todos los `Floor` creados y finalmente hacemos clic en `OK`. Después de eso, nuestro Gráfico recién creado aparecerá en el lado derecho. Haz clic en `CC Main => Edit` para entrar a la interfaz de edición.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_1.gif" /></center>

### Configurar nuevo Gráfico de Sitio

**Paso 1**: Importar imagen de fondo. Primero, selecciona `BACGROUND` en la barra de propiedades en la esquina inferior izquierda, selecciona `TYPE` como `IMAGE`, luego importa la imagen de fondo al espacio de trabajo, ajusta el tamaño y fíjala. Hay dos formas de importar imágenes de fondo. La primera forma es arrastrarla directamente desde la carpeta hacia el cuadro de edición; la segunda forma es hacer clic en `BROWSE` en la esquina inferior izquierda. Si has importado una cierta imagen antes, puedes hacer clic aquí para encontrar esa imagen. Después de importar, haz clic derecho con el mouse y selecciona `Arrange => Send to back` para mover la imagen a la capa inferior.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_2.gif" /></center>

**Paso 2**: Ajustar posición de etiquetas. Dado que importamos 4 `Floors`, el sistema generó automáticamente 4 etiquetas para nosotros. Por motivos estéticos, mapeamos estas etiquetas a los pisos uno por uno.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_3.gif" /></center>

**Paso 3**: Dibujar polígonos. Usamos la `polygon Tool` para dibujar polígonos para marcar la posición de cada `Floor`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_4.gif" /></center>

**Paso 4**: Agregar `Virtual points`. Cambia al panel `Virtual points` en la izquierda, selecciona el `virtual point` que coincida con el `Floor` que seleccionamos, y arrástralo hacia el polígono dibujado.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_5.gif" /></center>

**Paso 5**: Hacer el polígono transparente.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_6.gif" /></center>

**Paso 6**: Después de guardar la configuración, podemos entrar al nuevo `Site graphic` desde `Top Level Graphic`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_7.gif" /></center>

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