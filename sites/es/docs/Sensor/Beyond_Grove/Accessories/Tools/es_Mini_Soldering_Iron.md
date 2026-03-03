---
title: Mini Soldador
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Mini_Soldering_Iron/
slug: /es/Mini_Soldering_Iron
last_update:
  date: 02/03/2022
  author: gunengyu
---
![](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/img/Mini_Soldering_Iron_product_view.jpg)

El Mini Soldador es un soldador delgado, liviano, con control preciso de temperatura y calentamiento rápido (temperatura ambiente a 300℃ en 10 segundos) con una pantalla OLED, que será una herramienta esencial en tu kit de desarrollo. También cuenta con modo de suspensión y notificación de sobrecalentamiento. Además, es fácil de ensamblar y seguro contra ESD (a través de abrazadera de tierra). El rango de temperatura de este soldador es de 100 ~ 400 ℃(212 ~ 752 ℉), y contiene dos puntas de soldadura integradas (con calentador) y compactas para diferentes circunstancias. Puedes configurar tus ajustes mediante la interfaz USB micro tipo-B.<sup>[1]</sup>

<sup>[1]</sup>Esta página solo muestra una forma más rápida e información principal para comenzar. Para información detallada, consulta el manual incluido.

|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Mini%C2%A0Soldering%C2%A0Iron%C2%A0Deluxe%C2%A0Kit%C2%A0Europe-Standard-p-2592.html?ref=newInBazaar)|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Mini%C2%A0Soldering%C2%A0Iron%C2%A0Deluxe%C2%A0Kit%C2%A0US%C2%A0Standard-p-2593.html?ref=newInBazaar)|
|:---:|:---:|
|Para Edición EU|Para Edición US|

##  Características
---
*   Control de temperatura preciso (estabilidad de temperatura dentro de ± 2%)

*   Soldador delgado y liviano, sin fatiga para trabajo prolongado

*   Calentamiento rápido para alta eficiencia

*   Adaptador de corriente separado para mayor seguridad personal

*   Abrazadera de tierra para estar libre de ESD

*   Interfaz USB micro tipo-B para configuración personalizable del sistema y actualización de firmware

*   No se necesita calibración manual

*   Unidad de temperatura intercambiable (℃ o ℉)

##  Especificaciones
---
<table>
<tr>
<td>  Pantalla </td>
<td> OLED</td>
</tr>
<tr>
<td>  Interfaz USB </td>
<td> USB micro tipo-B</td>
</tr>
<tr>
<td>  Peso </td>
<td> 33g(adaptador de corriente no incluido)</td>
</tr>
<tr>
<td>  Potencia </td>
<td> 65W</td>
</tr>
<tr>
<td>  Voltaje de entrada(para adaptador de corriente) </td>
<td> 100 ~ 240 V</td>
</tr>
<tr>
<td>  Rango de temperatura </td>
<td> 100 ~ 400 ℃(212 ~ 752 ℉)</td>
</tr>
<tr>
<td>  Impedancia de puntas a tierra </td>
<td> 2 Ω</td>
</tr>
<tr>
<td>  Estabilidad de temperatura </td>
<td> ± 2%</td>
</tr>
<tr>
<td>  Temperatura del modo de suspensión  </td>
<td> 200℃(392℉), ajustable</td>
</tr></table>

##  Lista de partes'
---

<table>
<tr>
<th>Nombre de las partes   </th>
<th> Cantidad</th>
</tr>
<tr>
<td> Mini Soldador (parte principal)   </td>
<td> 1PC</td>
</tr>
<tr>
<td> Kit de soldadura PCB </td>
<td> 1PC</td>
</tr>
<tr>
<td> Punta de soldador tipo-BC2  </td>
<td> 1PC</td>
</tr>
<tr>
<td> Punta de soldador tipo-B2   </td>
<td> 1PC</td>
</tr>
<tr>
<td> Soporte para soldador </td>
<td> 1PC</td>
</tr>
<tr>
<td> Kit de soldadura PCB  </td>
<td> 1PC</td>
</tr>
<tr>
<td> Adaptador de corriente DC5525 </td>
<td> 1PC</td>
</tr>
<tr>
<td> Pinzas de tierra  </td>
<td> 1PC</td>
</tr>
<tr>
<td> Llave hexagonal (y dos tornillos de repuesto) </td>
<td> 1PC</td>
</tr>
<tr>
<td> Manual </td>
<td> 1PC</td>
</tr></table>

##  Primeros Pasos
---
**Nota:** En este caso te mostramos un entorno de desarrollo general.
Esta sección te muestra cómo realizar operaciones básicas con este soldador. Para más detalles, consulta el manual incluido en el paquete.

###  Vista explosionada

![](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/img/Mini_Soldering_Iron_exploded_view_s.jpg)
<dl>
<dd> ①. Tornillo de fijación de la punta del soldador</dd>
<dd> ②. Botón A</dd>
<dd> ③. Botón B</dd>
<dd> ④. Tornillo de ajuste</dd>
<dd> ⑤. Puerto de alimentación</dd>
<dd> ⑥. Micro USB</dd>
<dd> ⑦. Puerto DC5525 12-24V</dd>
<dd> ⑧. Puerto de conexión de la punta del soldador</dd>
<dd> ⑨. Lado de conexión del soldador</dd>
<dd> ⑩. Elemento calefactor del soldador</dd>
</dl>

###  Ensamblar el soldador

![](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/img/Mini_Soldering_Iron_installation_guide.jpg)

1.  Desenrosca el tornillo de ajuste de la punta, inserta la punta del soldador en el puerto de conexión, y luego aprieta el tornillo.

2.  Conecta los cables de tierra con el tornillo de ajuste de tierra.

3.  Conecta el conector DC al Mini Soldador, enchufa el cable de alimentación y enciende el dispositivo según corresponda.

###  Operaciones básicas

**Ajustar temperatura**

Presiona los botones para ajustar las temperaturas.

Presiona el botón A para habilitar el aumento de temperatura, presiona el botón B para habilitar la disminución de temperatura.

**Calibración**

 1.  Presiona el botón B en modo de espera (estado sin calentamiento) para entrar al modo termómetro.


![](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/img/Mini_Soldering_Iron_calibration_step_1.jpg)

2.  Presiona el botón B y el botón A simultáneamente para entrar al modo termómetro. Ejecutará la operación de calibración automáticamente, no se requiere operación manual.


![](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/img/Mini_Soldering_Iron_calibration_step_2.jpg)

3.  Después de aproximadamente 30 segundos, mantén presionado cualquier botón para salir del modo de calibración.


![](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/img/Mini_Soldering_Iron_calibration_step_3.jpg)

4.  La figura izquierda muestra que la auto-calibración fue exitosa y la figura derecha muestra que la auto-calibración falló. Si la auto-calibración falla, repite los pasos anteriores nuevamente.


###  Un poco de práctica

Puedes hacer un ejercicio soldando algunos LEDs y resistores en una placa PCB con forma de hoja que está incluida en el paquete.

1.  Ensambla un soldador con los pasos descritos arriba.
2.  Solda los cuatro LEDs y cuatro resistores en la placa PCB.


![](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/img/Mini_solderin_iron_practice_s.JPG)

_**Nota**_ que debes alinear los LEDs en la dirección correcta ya que los LEDs son componentes bipolares:

![](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/img/Mini_solderin_iron_practice-directions-s.jpg)

_**Nota**_ que necesitas soldar un componente electrónico con los siguientes pasos básicos y fundamentales:


-  Aplica un poco de soldadura en el punto de soldadura, y luego aplica algo de soldadura en un punto específico en los pines.
-  Une los dos puntos juntos con el soldador.


##  Recursos
---
[Manual del usuario](https://files.seeedstudio.com/wiki/Mini_Soldering_Iron/res/Mini_Soldering_Iron_manual.zip)

## Soporte Técnico y Discusión de Productos
 si tienes algún problema técnico.  envía el problema a nuestro [foro](http://forum.seeedstudio.com/). 
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>