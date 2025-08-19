---
description: Este artículo te mostrará como crear un Floor Graphic

title: reComputer R1000 con FIN para crear un Floor Graphic
keywords:
  - Edge Controller
  - reComputer R1000
  - FIN
  - ModbusTCP
  - Graphic
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /es/reComputer_r1000_fin_floor_graphic
last_update:
  date: 02/17/2025
  author: Erick González
---

## Introducción
FIN Framework (FIN) es un software framework con suites de aplicaciones que pueden integrar, controlar, administrar, analizar, visualizar y conectar. Sus capacidades pueden integrarse con OEMs en un amplio rango de productos y servicios.

Este artículo te mostrará como usar el `Graphics Builder` de FIN Framework, y como crear un `Floor Graphic` usando el `Graphics Builder`.

## Comenzando

Antes de empezar este proyecto, deberás preparar tu hardware y software de antemano, tal como se describe aquí.

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue el Tuyo! 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### Preparación de Software
* Para saber cómo instalar FIN Framework puedes visitar esta [wiki](https://wiki.seeedstudio.com/reComputer_r1000_install_fin/).
* Para saber cómo usar la función Modbus de FIN Framework, puedes visitar esta [wiki](https://wiki.seeedstudio.com/reComputer_r1000_fin_modbus_tcp_and_rtu/)

## Pasos para Crear un Floor Graphic
### Crea un nuevo Floor Graphic
**Paso 1**: Hemos establecido una conexión Modbus TCP y una Modbus RTU, y creado el Equip correspondiente. Cada Equip tiene una etiqueta de `humedad` y `temperatura`. Para saber como implementar este paso, puedes visitar esta  [wiki]( https://wiki.seeedstudio.com/reComputer_r1000_fin_modbus_tcp_and_rtu/). Al mismo tiempo, por favor coloca el contexto de FIN Framework debajo de el `Floor` correspondiente. Aquí ponemos el contexto debajo de `Tower => Floor1`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_sit_path_and_equip.png" /></center>

**Paso 2**: Crea un nuevo Floor Graphic y entra a la interfaz de edición. Haz click en `Graphic Builder => new`, la ventana emergente `Create a Floorplan Graphic` aparecerá.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_sit_new_floor_graphic.png" /></center>
Tiene cuatro atributos:

  - Graphic Name
  - Pick a Sample Equip
  - Pick Default Point : Atributos que se mostrarán en el gráfico
  - Pick Comparison Point : Punto de referencia para el rango de color

Al hacer click en OK aparecerá una nueva ventana emergente que lista `Equip with the same properties as` `Pick Default Point`. Aquí seleccionamos todos y finalmente damos click en OK.

Después de eso, nuestro recién creado Graphic aparecerá en el lado derecho. Da click en `CCFloor1 => Edit` para entrar a la interfaz de edición.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_1.gif" /></center>

### Configura un nuevo Site Graphic

**Paso 1**: Importa una imagen de fondo. Primero, selecciona `BACKGROUND` en la barra de propiedades en la esquina inferior izquierda, selecciona `TYPE` e `IMAGE`, después importa la imagen al área de trabajo, Selecciona `Center` para la opción de `POSITION` y `NO REPEAT` para la opción de `REPEAT`. Hay dos formas de importar imágenes para el fondo: La primera es simplemente arrastrar la imagen hacia el área de trabajo; la segunda forma es dar click en `BROWSE` en la esquina inferior izquierda. Si ya has importado alguna imagen previamente, puedes dar click aquí para encontrar dicha imagen.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_2.gif" /></center>

**Paso 2**: Dibuja polígonos. Usamos `polygon Tool` para dibujar polígonos y marcar la posición de cada `Equip`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_3.gif" /></center>

**Paso 3**: Añade `Virtual points`. Cambia al panel `Virtual points` de la izquierda, selecciona el `virtual point` que corresponde al `Equip` seleccionado, después arrástralo al polígono recién dibujado.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_4.gif" /></center>

**Paso 4**: Añade `smart tags`. Haz click en `Magic Buttons => Smart Label to Polys` para colocar automáticamente la etiqueta en los `Virtual Points` correspondientes.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_5.gif" /></center>

**Paso 5**: Ajusta el tamaño de los `smart tags`.  Puedes hacer click en el smart label para cambiar su tamaño. Si quieres modificar el tamaño de múltiples Smart Lables al mismo tiempo, puedes hacer click en `Compulsions=>Smart label=>Select` para seleccionar todos los Smart Lables y después ajustar su tamaño.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_6.gif" /></center>


**Paso 6**: Cambia el Smart Tag a `non interactive` para que este no interfiera con tus operaciones.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_7.gif" /></center>

**Paso 7**: Guarda y muestra el efecto.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_8.gif" /></center>

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

