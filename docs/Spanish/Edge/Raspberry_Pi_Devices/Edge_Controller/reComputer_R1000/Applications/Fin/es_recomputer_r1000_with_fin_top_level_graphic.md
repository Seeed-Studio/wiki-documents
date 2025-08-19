---
description: Este artículo muestra cómo crear un 'Top Level Graphic' usando FIN Framework en reComputer R1000.
title: reComputer R1000 con FIN para crear un 'Top Level Graphic'
keywords:
  - Edge Controller
  - reComputer R1000
  - FIN
  - ModbusTCP
  - Graphic
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /es/reComputer_r1000_fin_top_level_graphic
last_update:
  date: 02/15/2025
  author: Erick González
---

## Introducción

FIN Framework (FIN) es un framework de software con suites de aplicaciones que pueden integrar, controlar, gestionar, analizar, visualizar y conectar sistemas. Sus capacidades pueden ser integradas por OEMs en una variedad de productos y servicios.

Este artículo mostrará cómo usar el `Graphics Builder` de FIN Framework para crear un `Top Level Graphic`.

## Comenzando

Antes de iniciar este proyecto, puede que necesites preparar tu hardware y software, como se describe a continuación.

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

* Para información sobre cómo instalar FIN Framework, consulta [esta wiki](https://wiki.seeedstudio.com/reComputer_r1000_install_fin/).

## Pasos para crear un 'Top Level Graphic'

### Crear un nuevo 'Top Level Graphic'

**Paso 1**: Creamos tres "sites". Para saber cómo crearlos en el árbol de equips, revisa [esta wiki](https://wiki.seeedstudio.com/reComputer_r1000_fin_modbus_tcp_and_rtu/#add-data-points-to-equip-tree). Asegúrate de tener el contexto del sistema en el directorio principal.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_grap_Equip_tree_and_top_path.png" /></center>

**Paso 2**: Haz clic en `Graphics Builder => New`. Aparecerá la ventana emergente `Create a Graphic`. Debes completar `Graphic Name` y `Select sites to include in Top Level graphic`, donde las "sites" opcionales son las que creaste en el paso anterior. Finalmente, haz clic en `OK`. El gráfico recién creado aparecerá a la derecha. Haz clic en él y luego en `Edit` para entrar a la página de edición.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_1.gif" /></center>

### Configurar el nuevo 'Top Level Graphic'

**Paso 1**: Importar plano de piso. Primero, selecciona `IMAGE` en la columna `TYPE` de la parte inferior izquierda para importar la imagen de fondo. Tienes dos métodos: arrastrar la imagen desde una carpeta o hacer clic en `BROWSE` en la esquina inferior izquierda (si ya importaste antes, aparecerá ahí). Tras importar, haz clic derecho y selecciona `Arrange => Send to back` para colocar la imagen al fondo.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_2.gif" /></center>

**Paso 2**: Dado que seleccionamos tres "sites", el sistema generó tres etiquetas automáticamente. Para embellecer, las alineamos en la esquina inferior derecha.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_3.gif" /></center>

**Paso 3**: Podemos añadir una `label` para explicar información. Encuentra el control `label` a la izquierda y arrástralo al área de trabajo; ajusta su tamaño. Luego, en la esquina inferior derecha, modifica el texto y su tamaño.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_4.gif" /></center>

**Paso 4**: Añade un `Graphic include` para agrupar nuestras etiquetas y asignar un color de fondo, mejorando el aspecto visual.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_5.gif" /></center>

**Paso 5**: Dibuja el polígono. Usa la `polygon Tool` para marcar dónde está cada "site". Después de dibujar, puedes usar `Edit polygon Tool` para ajustar el polígono.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_6.gif" /></center>

**Paso 6**: Agregar `Virtual points`. Cambia a la pestaña `Virtual points` a la izquierda, elige el `virtual point` correspondiente al "site" seleccionado y arrástralo al polígono dibujado.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_7.gif" /></center>

**Paso 7**: Haz el polígono transparente.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_8.gif" /></center>

**Paso 8**: Tras guardar, haz clic en `Graphics Builder => Menu`. Aparecerá una nueva interfaz a la derecha. Haz clic en `Top Level Graphic => Create`. Surgirá una ventana emergente llamada `Edit Top Level Record`. Selecciona el gráfico que configuramos y haz clic en `APPLY`. De vuelta en la interfaz principal, verás el Top Level Graphic que configuramos.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_9.gif" /></center>

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte distintos tipos de soporte y asegurarnos de que tu experiencia sea lo más fluida posible. Ofrecemos varios canales de comunicación para distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
