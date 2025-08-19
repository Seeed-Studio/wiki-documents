---
description: Este artículo muestra cómo crear un 'Site Graphic' usando FIN Framework en reComputer R1000.
title: reComputer R1000 con FIN para crear un 'Site Graphic'
keywords:
  - Edge Controller
  - reComputer R1000
  - FIN
  - ModbusTCP
  - Graphic
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /es/reComputer_r1000_fin_site_graphic
last_update:
  date: 02/15/2025
  author: Erick González
---

## Introducción

FIN Framework (FIN) es un framework de software con aplicaciones que pueden integrar, controlar, gestionar, analizar, visualizar y conectar sistemas. Sus capacidades pueden ser integradas por OEMs en diferentes productos y servicios.

Este artículo mostrará cómo usar el `Graphics Builder` de FIN Framework para crear un `Site Graphic`.

## Comenzando

Antes de iniciar este proyecto, puede que necesites preparar tu hardware y software según lo descrito a continuación.

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo ahora 🖱️</font></span></strong>
          </a></div></td>
      </tr>
    </table>
</div>

### Preparación de Software

* Para conocer cómo instalar FIN Framework, puedes consultar [esta wiki](https://wiki.seeedstudio.com/reComputer_r1000_install_fin/).

## Pasos para crear un 'Site Graphic'

### Crear nuevo 'Site Graphic'

**Paso 1**: Creamos 4 pisos (Floors). Para saber cómo crearlos, consulta [esta wiki](https://wiki.seeedstudio.com/reComputer_r1000_fin_modbus_tcp_and_rtu/). Luego, sitúa el contexto bajo el `Site` correspondiente. En este caso, lo colocamos en la ruta `Tower`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_path_and_floor.png" /></center>

**Paso 2**: Crea un nuevo gráfico y entra en la interfaz de edición. Haz clic en `Graphic Builder => new`. Aparecerá la ventana emergente `Create a Graphic`. A diferencia de crear un `Top Level Graphic`, aquí la segunda propiedad es `Select floors to include in site graphic`. Seleccionamos los 4 "Floors" que creamos y hacemos clic en `OK`. Después, el gráfico nuevo aparece a la derecha. Haz clic en `CC Main => Edit` para entrar en la interfaz de edición.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_1.gif" /></center>

### Configurar el nuevo 'Site Graphic'

**Paso 1**: Importar imagen de fondo. Primero selecciona `BACGROUND` en la barra de propiedades inferior izquierda, elige `TYPE` como `IMAGE` y luego importa la imagen de fondo al área de trabajo, ajusta el tamaño y fíjala. Hay dos formas de importar la imagen: arrastrarla desde la carpeta o hacer clic en `BROWSE` en la esquina inferior izquierda. Si ya importaste una imagen antes, la encontrarás ahí. Tras importarla, haz clic derecho y selecciona `Arrange => Send to back` para llevar la imagen al fondo.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_2.gif" /></center>

**Paso 2**: Ajustar posición de etiquetas. Ya que importamos 4 "Floors", el sistema generó automáticamente 4 etiquetas. Para mayor estética, las mapeamos a cada piso.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_3.gif" /></center>

**Paso 3**: Dibujar polígonos. Usamos la herramienta `polygon Tool` para dibujar polígonos que marquen la posición de cada "Floor".

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_4.gif" /></center>

**Paso 4**: Añadir `Virtual points`. Cambia a la pestaña `Virtual points` a la izquierda, selecciona el `virtual point` que coincida con el "Floor" elegido y arrástralo hacia el polígono dibujado.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_5.gif" /></center>

**Paso 5**: Hacer polígono transparente.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_6.gif" /></center>

**Paso 6**: Tras guardar los ajustes, podemos entrar en el nuevo `Site graphic` desde `Top Level Graphic`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Site_graphic_7.gif" /></center>

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y asegurarnos de que tu experiencia sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>