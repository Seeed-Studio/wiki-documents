---
description: Este artículo te mostrará cómo crear un Gráfico de Planta

title: reComputer R1000 con FIN para crear un Gráfico de Planta
keywords:
  - Edge Controller
  - reComputer R1000
  - FIN
  - ModbusTCP
  - Graphic
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /es/reComputer_r1000_fin_floor_gaphic
last_update:
  date: 07/18/2024
  author: ShuishengPeng
---

## Introducción

FIN Framework (FIN) es un marco de software con suites de aplicaciones que puede integrar, controlar, gestionar, analizar, visualizar y conectar. Sus capacidades pueden ser integradas por OEMs en una gama de productos y servicios.

Este artículo te mostrará cómo usar el `Graphics Builder` de FIN Framework, y crear un `Floor Graphic` usando el `Graphics Builder`.

## Comenzando

Antes de iniciar este proyecto, es posible que necesites preparar tu hardware y software con anticipación como se describe aquí.

### Preparación del Hardware

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

### Preparación del Software

* Respecto a cómo instalar FIN Framework, puedes consultar esta [wiki](https://wiki.seeedstudio.com/es/reComputer_r1000_install_fin/).
- Respecto a cómo usar la función Modbus de FIN framework, puedes consultar esta [wiki](https://wiki.seeedstudio.com/es/reComputer_r1000_fin_modbus_tcp_and_rtu/)

## Pasos para crear un Gráfico de Planta

### Crear nuevo Gráfico de Planta

**Paso 1**: Establecimos una conexión Modbus TCP y una conexión Modbus RTU, y creamos el Equip correspondiente. Cada Equip tiene una etiqueta de `humidty` y `temperature`. Para saber cómo implementar este paso, puedes consultar esta [wiki]( https://wiki.seeedstudio.com/es/reComputer_r1000_fin_modbus_tcp_and_rtu/). Al mismo tiempo, por favor coloca el contexto de FIN Framework bajo el `Floor` correspondiente. Aquí colocamos el contexto bajo `Tower => Floor1`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_sit_path_and_equip.png" /></center>

**Paso 2**: Crear un nuevo Gráfico de Planta y entrar a la interfaz de edición. Haz clic en `Graphic Builder => new`, y aparecerá la ventana emergente de `Create a Floorplan Graphic`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_sit_new_floor_graphic.png" /></center>
Tiene cuatro atributos:

- Craphic Name
- Pick a Sample Equip
- Pick Default Point : Atributos que se mostrarán en el gráfico
- Pick Comparison Point : Punto de referencia para el rango de colores

Hacer clic en 'OK' abrirá una nueva ventana emergente que lista los 'Equip' con las mismas propiedades que 'Pick Default Point'. Aquí, seleccionamos todos y finalmente hacemos clic en 'OK'.
Después de eso, nuestro Graphic recién creado aparecerá en el lado derecho. Haz clic en `CCFloor1 => Edit` para entrar a la interfaz de edición.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_1.gif" /></center>

### Configurar nuevo Gráfico de Sitio

**Paso 1**: Importar imagen de fondo. Primero, selecciona `BACGROUND` en la barra de propiedades en la esquina inferior izquierda, selecciona `TYPE` como `IMAGE`, luego importa la imagen de fondo al espacio de trabajo, Selecciona `Center` para la opción `POSITION` y `NO REPEAT` para la opción `REPEAT`. Hay dos formas de importar imágenes de fondo. La primera forma es arrastrarla directamente desde la carpeta hacia la caja de edición; la segunda forma es hacer clic en `BROWSE` en la esquina inferior izquierda. Si has importado cierta imagen antes, puedes hacer clic aquí para encontrar esa imagen.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_2.gif" /></center>

**Paso 2**: Dibujar polígonos. Usamos la `polygon Tool` para dibujar polígonos para marcar la posición de cada `Equip`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_3.gif" /></center>

**Paso 3**: Agregar `Virtual points`. Cambia al panel `Virtual points` en la izquierda, selecciona el `virtual point` que coincida con el `Equip` que seleccionamos, y arrástralo hacia el polígono dibujado.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_4.gif" /></center>

**Paso 4**: Agregar etiquetas inteligentes. Haz clic en `Magic Buttons => Smart Label to Polys` para colocar automáticamente la etiqueta en los `Virtual Points` correspondientes.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_5.gif" /></center>

**Paso 5**: Ajustar el tamaño de las etiquetas inteligentes. Puedes hacer clic en la etiqueta inteligente para ajustar su tamaño. Si quieres modificar el tamaño de múltiples etiquetas inteligentes al mismo tiempo, puedes hacer clic en `Compulsions=>Smart label=>Select` para seleccionar todas las etiquetas inteligentes, y luego ajustar su tamaño

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_6.gif" /></center>

**Paso 6**: Cambiar la etiqueta inteligente a `non interactive` para que la etiqueta no interfiera con tus operaciones

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_7.gif" /></center>

**Paso 7**: Guardar y mostrar el efecto.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Floor_graphic_8.gif" /></center>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
