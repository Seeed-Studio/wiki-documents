---
description: Este artículo te mostrará cómo crear un Gráfico de Nivel Superior

title: reComputer R1000 con FIN para crear un Gráfico de Nivel Superior
keywords:
  - Edge Controller
  - reComputer R1000
  - FIN
  - ModbusTCP
  - Graphic
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /es/reComputer_r1000_fin_top_level_gaphic
last_update:
  date: 07/17/2024
  author: ShuishengPeng
---

## Introducción

FIN Framework (FIN) es un marco de software con suites de aplicaciones que puede integrar, controlar, gestionar, analizar, visualizar y conectar. Sus capacidades pueden ser integradas por OEMs en una gama de productos y servicios.

Este artículo te mostrará cómo usar el `Graphics Builder` de FIN Framework, y crear un `Top Level Graphic` usando el `Graphics Builder`.

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

* Con respecto a cómo instalar FIN Framework, puedes consultar esta [wiki](https://wiki.seeedstudio.com/es/reComputer_r1000_install_fin/).

## Pasos para crear un Gráfico de Nivel Superior

### Crear nuevo Gráfico de Nivel Superior

**Paso 1**: Creamos tres sitios. Para saber cómo crear sitios bajo el Árbol de Equipos, puedes consultar esta [wiki](https://wiki.seeedstudio.com/es/reComputer_r1000_fin_modbus_tcp_and_rtu/#add-data-points-to-equip-tree). Y por favor mantén el contexto del sistema en el directorio principal.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_grap_Equip_tree_and_top_path.png" /></center>

**Paso 2**: Haz clic en `Graphics Builder => New`, y aparecerá una ventana emergente llamada `Create a Graphic`. Necesitas completar las propiedades `Graphic Name` y `Select sites to include in Top Level graphic`, entre las cuales el `site` opcional es el `site` que creamos en el primer paso. Finalmente, haz clic en `OK` y nuestro Gráfico recién creado aparecerá en el lado derecho. Haz clic en él y luego haz clic en `Edit` para entrar a la página de edición.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_1.gif" /></center>

### Configurar nuevo Gráfico de Nivel Superior

**Paso 1**: Importar el plano de planta. Primero selecciona `IMAGE` en la columna `TYPE` en la esquina inferior izquierda, y luego puedes importar la imagen de fondo. Hay dos formas de importar imágenes de fondo. La primera forma es arrastrarla directamente desde la carpeta hacia el cuadro de edición; la segunda forma es hacer clic en `BROWSE` en la esquina inferior izquierda. Si has importado una cierta imagen antes, puedes hacer clic aquí para encontrar esa imagen. Después de importar, haz clic derecho con el ratón y selecciona `Arrange => Send to back` para mover la imagen a la capa inferior.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_2.gif" /></center>

**Paso 2**: Dado que seleccionamos tres `site`, el sistema generará automáticamente tres etiquetas. Por motivos estéticos, las colocaremos en la esquina inferior derecha y las alinearemos.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_3.gif" /></center>

**Paso 3**: Podemos agregar una `label` para explicar alguna información. Encontramos el control `label` en la izquierda y lo arrastramos al espacio de trabajo, ajustamos su tamaño, y luego cambiamos el texto y el tamaño del texto de `label` en la esquina inferior derecha.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_4.gif" /></center>

**Paso 4**: Agregar `Graphic include` para juntar nuestras etiquetas y establecer un color de fondo para hacer el efecto visual más hermoso

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_5.gif" /></center>

**Paso 5**: Dibujar el polígono. Usa la `polygon Tool` en la parte superior para dibujar un polígono que marque la ubicación de nuestro `site`. Después de dibujar, también puedes usar la herramienta `Edit polygon Tool` para ajustar el polígono.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_6.gif" /></center>

**Paso 6**: Agregar `Virtual points`. Cambia al panel `Virtual points` en la izquierda, selecciona el `virtual point` que coincida con el `site` que seleccionamos, y arrástralo dentro del polígono dibujado.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_7.gif" /></center>

**Paso 7**: Hacer el polígono transparente.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_8.gif" /></center>

**Paso 8**: Después de guardar la configuración, haz clic en `Graphics Builder => Menu` y aparecerá una nueva interfaz en la derecha. Haz clic en `Top Level Graphic => Create` en la nueva interfaz y aparecerá una ventana emergente llamada `Edit Top Level Record`, selecciona el Gráfico que configuramos, y finalmente haz clic en `APPLY`. Después de regresar a la interfaz principal, puedes ver el Gráfico de Nivel Superior que configuramos.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Top_Grap_9.gif" /></center>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
