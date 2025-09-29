---
description: Kit de Robot con Ruedas Mecanum 4WD Series
title: Kit de Robot con Ruedas Mecanum 4WD Series
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/4WD_Mecanum_Wheel_Robot_Kit_Series
last_update:
  date: 1/13/2023
  author: shuxu hu
---

Los productos de la serie Kit de Robot con Ruedas Mecanum 4WD son plataformas móviles de tracción en las cuatro ruedas basadas en ruedas Mecanum. Cada kit contiene dos ruedas mecanum izquierdas así como dos ruedas mecanum derechas. Las cuatro ruedas Mecanum están conectadas cada una a un motor separado con control independiente. Dependiendo de la dirección y velocidad de cada rueda individual, la plataforma móvil puede moverse hacia adelante, hacia atrás, lateralmente y en cualquier otra dirección deseada o girar. Dos módulos de control remoto – módulo BLE y módulo RF – pueden añadirse a este kit para permitir el control remoto.

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/4WD_Mecanum_Wheel_Robot_Kit-RF_Version-.PNG)

La rueda Mecanum es un diseño para una rueda que puede mover un vehículo en cualquier dirección. Es una rueda convencional con una serie de rodillos unidos a su circunferencia. Estos rodillos tienen cada uno un eje de rotación a 45° respecto al plano de la rueda y a 45° respecto a una línea que pasa por el centro del rodillo paralela al eje de rotación de la rueda. Hay dos tipos de ruedas Mecanum, rueda Mecanum para zurdos y para diestros; la diferencia entre ellas es la orientación de los rodillos. Para la rueda Mecanum para zurdos, como se muestra abajo, los rodillos están orientados desde la parte inferior derecha hacia la superior izquierda. Los rodillos para ruedas para diestros están instalados de manera opuesta.

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/LeftAndRight_Mecanum_Wheel.PNG)

La instalación del kit de Ruedas Mecanum 4WD debe requerir cierto cuidado. Una configuración correcta requiere que cada una de las cuatro ruedas esté configurada de la manera mostrada abajo, donde el eje de rotación del rodillo superior de cada rueda apunta hacia el centro de la plataforma. Por favor note que todo el análisis dinámico y los códigos preescritos están basados en esta configuración.

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Mecanum_Wheel_Installation_02.PNG)

Los rodillos periféricos angulados traducen una porción de la fuerza en la dirección rotacional de la rueda a una fuerza normal a la dirección de la rueda. Dependiendo de la dirección y velocidad de cada rueda individual, la combinación resultante de todas estas fuerzas produce un vector de fuerza total en cualquier dirección deseada. Sea el radio de la rueda R, la velocidad angular de las cuatro ruedas ω1, ω2, ω3, ω4, las velocidades de los rodillos en cada rueda νg1, νg2, νg3 y νg4, y la velocidad de la plataforma en dirección x, dirección y y velocidad angular νx, νy, y ω0. El origen de coordenadas globales en О, el centro de la plataforma, y los sistemas de coordenadas locales en cada rueda tienen origen en O1, O2, O3 y O4. La distancia desde el medio de la plataforma hasta el medio de la rueda es L1, y L2 es para la distancia entre el medio de la plataforma hasta el eje de rodamiento de la rueda. α es el ángulo de los rodillos: 45º en este caso.

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Coordinate_System.PNG)

En la coordenada global, la velocidad en el centro de la rueda 1, O1, es

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Velocity_of_O1.PNG)

Mientras que en la coordenada local en la rueda 1, la velocidad de O1 es

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Velocity_of_O12.PNG)

Combinando las ecuaciones (1) ~ (4), tenemos

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Mecanum_Equation_010.PNG)

Resolviendo (5) y (6), entonces la velocidad angular de la rueda 1 es

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Mecanum_Equation_02.PNG)

Similarmente, la velocidad de las otras 3 ruedas puede calcularse como

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Mecanum_Equation_03.PNG)

La ecuación (8) muestra la relación entre las velocidades de rotación de las ruedas y el movimiento de la plataforma. Teóricamente, la plataforma puede moverse en cualquier dirección mediante una combinación apropiada de la velocidad angular de las cuatro ruedas. De hecho, para esta plataforma, los movimientos más comúnmente usados son bastante limitados. Aquí damos un principio de funcionamiento simplificado de la plataforma. Si te disgustan los números o ecuaciones, simplemente ignora la sección de análisis dinámico, y lee la figura de abajo.

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Working_Principle-Simplified-.PNG)

Mover las cuatro ruedas en la misma dirección causa movimiento hacia adelante o hacia atrás, hacer funcionar las ruedas de un lado en dirección opuesta a las del otro lado causa rotación del vehículo, y hacer funcionar las ruedas de una diagonal en dirección opuesta a las de la otra diagonal causa movimiento lateral.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/4WD-Mecanum-Wheel-Robot-Kit-p-2276.html)

## Características

- Rueda Mecanum Interior

- Movilidad Omnidireccional

- Alta Capacidad de Carga

- Flexibilidad y Extensibilidad

- Opciones de Control RF/BLE

## Lista de Partes

1. Kit de Rueda Mecanum Izquierda

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Left_Mecanum_Wheel_Kit.PNG)

<table cellspacing="0" width="80%">
<tr>
<th scope="col"></th>
<th scope="col">Nombre de las Partes</th>
<th scope="col">Especificación</th>
<th scope="col">Material</th>
<th scope="col">Cantidad</th>
</tr>
<tr>
<th scope="row">1</th>
<td>Rueda Mecanum Izquierda</td>
<td>Φ60mm H32mm</td>
<td>Aluminio y Goma</td>
<td>1 pza</td>
</tr>
<tr>
<th scope="row">2</th>
<td>Motor DC</td>
<td>25GA 370</td>
<td>Metal</td>
<td>1 pza</td>
</tr>
<tr>
<th scope="row">3</th>
<td>Soporte de Motor para Motor DC</td>
<td>Serie 25</td>
<td>Metal</td>
<td>1 pza</td>
</tr>
<tr>
<th scope="row">4</th>
<td>Conector de Eje</td>
<td>Ф13.9mm*23mm/6mm</td>
<td>Aluminio</td>
<td>1 pza</td>
</tr>
<tr>
<th scope="row">5</th>
<td>Tornillo de Fijación</td>
<td>M3×5</td>
<td>Metal</td>
<td>2 pzas</td>
</tr>
<tr>
<th scope="row">6</th>
<td>Ensambles de Tornillo, Arandela de Resorte y Arandela Plana</td>
<td>M4×18</td>
<td>Metal</td>
<td>1 pza</td>
</tr>
<tr>
<th scope="row">7</th>
<td>Tornillo de Cabeza Redonda con Ranura en Cruz</td>
<td>M3×8</td>
<td>Metal</td>
<td>2 pzas</td>
</tr>
<tr>
<th scope="row">8</th>
<td>Tornillo de Cabeza Redonda con Ranura en Cruz con Arandela</td>
<td>M3×8</td>
<td>Metal</td>
<td>4 pzas</td>
</tr>
<tr>
<th scope="row">9</th>
<td>Tuerca Hexagonal</td>
<td>M3</td>
<td>Metal</td>
<td>4 pzas</td>
</tr>
</table>

2. Kit de Rueda Mecanum Derecha

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Right_Mecanum_Wheel_Kit.PNG)

<table cellspacing="0" width="80%">
<tr>
<th scope="col"></th>
<th scope="col">Nombre de las Partes</th>
<th scope="col">Especificación</th>
<th scope="col">Material</th>
<th scope="col">Cantidad</th>
</tr>
<tr>
<th scope="row">1</th>
<td>Rueda Mecanum Derecha</td>
<td>Φ60mm H32mm</td>
<td>Aluminio y Goma</td>
<td>1 pza</td>
</tr>
<tr>
<th scope="row">2</th>
<td>Motor DC</td>
<td>25GA 370</td>
<td>Metal</td>
<td>1 pza</td>
</tr>
<tr>
<th scope="row">3</th>
<td>Soporte de Motor para Motor DC</td>
<td>Serie 25</td>
<td>Metal</td>
<td>1 pza</td>
</tr>
<tr>
<th scope="row">4</th>
<td>Conector de Eje</td>
<td>Ф13.9mm*23mm/6mm</td>
<td>Aluminio</td>
<td>1 pza</td>
</tr>
<tr>
<th scope="row">5</th>
<td>Tornillo de Fijación</td>
<td>M3×5</td>
<td>Metal</td>
<td>2 pzas</td>
</tr>
<tr>
<th scope="row">6</th>
<td>Ensambles de Tornillo, Arandela de Resorte y Arandela Plana</td>
<td>M4×18</td>
<td>Metal</td>
<td>1 pza</td>
</tr>
<tr>
<th scope="row">7</th>
<td>Tornillo de Cabeza Cilíndrica con Ranura en Cruz</td>
<td>M3×8</td>
<td>Metal</td>
<td>2 pzas</td>
</tr>
<tr>
<th scope="row">8</th>
<td>Tornillo de Cabeza Cilíndrica con Ranura en Cruz con Arandela</td>
<td>M3×8</td>
<td>Metal</td>
<td>4 pzas</td>
</tr>
<tr>
<th scope="row">9</th>
<td>Tuerca Hexagonal</td>
<td>M3</td>
<td>Metal</td>
<td>4 pzas</td>
</tr>
</table>

3. Versión Básica

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Part_List_for_Basic_Version.PNG)

<table cellspacing="0" width="80%">
<tr>
<th scope="col"></th>
<th scope="col">Nombre de las Piezas</th>
<th scope="col">Especificación</th>
<th scope="col">Material</th>
<th scope="col">Cantidad</th>
</tr>
<tr>
<th scope="row">1</th>
<td>Chasis</td>
<td>250*145*5mm, Negro</td>
<td>PMMA</td>
<td>1 pza</td>
</tr>
<tr>
<th scope="row">2</th>
<td>Plataforma Superior</td>
<td>192*145*5mm, Negro</td>
<td>PMMA</td>
<td>1 pza</td>
</tr>
<tr>
<th scope="row">3</th>
<td>Tapa de Batería</td>
<td>68*47*2mm, Negro</td>
<td>PMMA</td>
<td>1 pza</td>
</tr>
<tr>
<th scope="row">4</th>
<td>Rueda Mecanum Izquierda</td>
<td>Φ60mm H32mm</td>
<td>Aluminio&amp;Caucho</td>
<td>2 pzas</td>
</tr>
<tr>
<th scope="row">5</th>
<td>Rueda Mecanum Derecha</td>
<td>Φ60mm H32mm</td>
<td>Aluminio&amp;Caucho</td>
<td>2 pzas</td>
</tr>
<tr>
<th scope="row">6</th>
<td>Motor DC</td>
<td>25GA 370</td>
<td>Metal</td>
<td>4 pzas</td>
</tr>
<tr>
<th scope="row">7</th>
<td>Soporte de Motor para Motor DC</td>
<td>Serie 25</td>
<td>Metal</td>
<td>4 pzas</td>
</tr>
<tr>
<th scope="row">8</th>
<td>Conector de Eje</td>
<td>Ф13.9mm*23mm/6mm</td>
<td>Aluminio</td>
<td>4 pzas</td>
</tr>
<tr>
<th scope="row">9</th>
<td>Tornillo de Fijación</td>
<td>M3×5</td>
<td>Metal</td>
<td>8 pzas</td>
</tr>
<tr>
<th scope="row">10</th>
<td>Ensambles de Tornillo, Arandela de Resorte y Arandela Plana</td>
<td>M4×18</td>
<td>Metal</td>
<td>4 pzas</td>
</tr>
<tr>
<th scope="row">11</th>
<td>Ensambles de Tornillo, Arandela de Resorte y Arandela Plana</td>
<td>M2×8</td>
<td>Metal</td>
<td>20 pzas</td>
</tr>
<tr>
<th scope="row">12</th>
<td>Tornillo de Cabeza Cilíndrica Ranurada en Cruz</td>
<td>M3×8</td>
<td>Metal</td>
<td>26 pzas</td>
</tr>
<tr>
<th scope="row">13</th>
<td>Tornillo de Cabeza Cilíndrica Ranurada en Cruz con Arandela</td>
<td>M3×8</td>
<td>Metal</td>
<td>16 pzas</td>
</tr>
<tr>
<th scope="row">14</th>
<td>Tuerca Hexagonal</td>
<td>M3</td>
<td>Metal</td>
<td>16 pzas</td>
</tr>
<tr>
<th scope="row">15</th>
<td>Separador Hexagonal</td>
<td>M3×40</td>
<td>Metal</td>
<td>5 pzas</td>
</tr>
<tr>
<th scope="row">16</th>
<td>Separador Hexagonal</td>
<td>M3×10</td>
<td>Metal</td>
<td>4 pzas</td>
</tr>
<tr>
<th scope="row">17</th>
<td>Separador Hexagonal</td>
<td>M2×15</td>
<td>Metal</td>
<td>4 pzas</td>
</tr>
<tr>
<th scope="row">18</th>
<td>Separador Hexagonal</td>
<td>M2×10</td>
<td>Metal</td>
<td>6 pzas</td>
</tr>
</table>

4. Versión RF

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Parts_of_Mecanum_Wheel_Robot_Kit-RF_Version-.PNG)

<table cellspacing="0" width="80%">
<tr>
<th scope="col"></th>
<th scope="col">Nombre de las Partes</th>
<th scope="col">Especificación</th>
<th scope="col">Material</th>
<th scope="col">Cantidad</th>
</tr>
<tr>
<th scope="row">1</th>
<td>Chasis</td>
<td>250*145*5mm, Negro</td>
<td>PMMA</td>
<td>1 pcs</td>
</tr>
<tr>
<th scope="row">2</th>
<td>Cubierta Superior</td>
<td>192*145*5mm, Negro</td>
<td>PMMA</td>
<td>1 pcs</td>
</tr>
<tr>
<th scope="row">3</th>
<td>Tapa de Batería</td>
<td>68*47*2mm, Negro</td>
<td>PMMA</td>
<td>1 pcs</td>
</tr>
<tr>
<th scope="row">4</th>
<td>Panel de Control Remoto</td>
<td>165*90*4mm, Transparente</td>
<td>PMMA</td>
<td>1 pcs</td>
</tr>
<tr>
<th scope="row">5</th>
<td>Rueda Mecanum Izquierda</td>
<td>Φ60mm H32mm</td>
<td>Aluminio&amp;Goma</td>
<td>2 pcs</td>
</tr>
<tr>
<th scope="row">6</th>
<td>Rueda Mecanum Derecha</td>
<td>Φ60mm H32mm</td>
<td>Aluminio&amp;Goma</td>
<td>2 pcs</td>
</tr>
<tr>
<th scope="row">7</th>
<td>Motor DC</td>
<td>25GA 370</td>
<td>Metal</td>
<td>4 pcs</td>
</tr>
<tr>
<th scope="row">8</th>
<td>Soporte de Motor para Motor DC</td>
<td>Serie 25</td>
<td>Metal</td>
<td>4 pcs</td>
</tr>
<tr>
<th scope="row">9</th>
<td>Conector de Eje</td>
<td>Ф13.9mm*23mm/6mm</td>
<td>Aluminio</td>
<td>4 pcs</td>
</tr>
<tr>
<th scope="row">10</th>
<td>Tornillo de Fijación</td>
<td>M3×5</td>
<td>Metal</td>
<td>8 pcs</td>
</tr>
<tr>
<th scope="row">11</th>
<td>Ensamblajes de Tornillo, Arandela de Resorte y Arandela Plana</td>
<td>M4×18</td>
<td>Metal</td>
<td>4 pcs</td>
</tr>
<tr>
<th scope="row">12</th>
<td>Ensamblajes de Tornillo, Arandela de Resorte y Arandela Plana</td>
<td>M2×8</td>
<td>Metal</td>
<td>32 pcs</td>
</tr>
<tr>
<th scope="row">13</th>
<td>Tornillo de Cabeza Cilíndrica con Ranura en Cruz</td>
<td>M3×8</td>
<td>Metal</td>
<td>34 pcs</td>
</tr>
<tr>
<th scope="row">14</th>
<td>Tornillo de Cabeza Cilíndrica con Ranura en Cruz con Arandela</td>
<td>M3×8</td>
<td>Metal</td>
<td>16 pcs</td>
</tr>
<tr>
<th scope="row">15</th>
<td>Tuerca Hexagonal</td>
<td>M3</td>
<td>Metal</td>
<td>16 pcs</td>
</tr>
<tr>
<th scope="row">16</th>
<td>Separador Hexagonal</td>
<td>M3×40</td>
<td>Metal</td>
<td>5 pcs</td>
</tr>
<tr>
<th scope="row">17</th>
<td>Separador Hexagonal</td>
<td>M3×10</td>
<td>Metal</td>
<td>8 pcs</td>
</tr>
<tr>
<th scope="row">18</th>
<td>Separador Hexagonal</td>
<td>M2×15</td>
<td>Metal</td>
<td>4 pcs</td>
</tr>
<tr>
<th scope="row">19</th>
<td>Separador Hexagonal</td>
<td>M2×10</td>
<td>Metal</td>
<td>12 pcs</td>
</tr>
<tr>
<th scope="row">20</th>
<td>[Grove - I2C Motor Driver](https://www.seeedstudio.com/depot/Grove-I2C-Motor-Driver-p-907.html)</td>
<td></td>
<td></td>
<td>2 pcs</td>
</tr>
<tr>
<th scope="row">21</th>
<td>[RF Bee](https://www.seeedstudio.com/depot/RFbee-V11-Wireless-arduino-compatible-node-p-614.html?cPath=19_22)</td>
<td></td>
<td></td>
<td>2 pcs</td>
</tr>
<tr>
<th scope="row">22</th>
<td>[Grove - XBee Carrier](https://www.seeedstudio.com/depot/Grove-XBee-Carrier-p-905.html?cPath=98_16)</td>
<td></td>
<td></td>
<td>2 pcs</td>
</tr>
<tr>
<th scope="row">23</th>
<td>[Grove - Thumb Joystick](https://www.seeedstudio.com/depot/Grove-Thumb-Joystick-p-935.html?cPath=85_51)</td>
<td></td>
<td></td>
<td>2 pcs</td>
</tr>
<tr>
<th scope="row">24</th>
<td>[Grove - Universal 4 Pin Buckled 20cm Cable](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-20cm-Cable-5-PCs-pack-p-936.html)</td>
<td></td>
<td></td>
<td>2 pcs</td>
</tr>
<tr>
<th scope="row">25</th>
<td>[Grove - Branch Cable](https://www.seeedstudio.com/depot/Grove-Branch-Cable-5PCs-pack-p-847.html)</td>
<td></td>
<td></td>
<td>1 pcs</td>
</tr>
<tr>
<th scope="row">26</th>
<td>Cable de Alimentación</td>
<td>100mm, Negro</td>
<td></td>
<td>3 pcs</td>
</tr>
<tr>
<th scope="row">27</th>
<td>Cable de Alimentación</td>
<td>100mm, Rojo</td>
<td></td>
<td>3 pcs</td>
</tr>
<tr>
<th scope="row">28</th>
<td>Interruptor Basculante</td>
<td></td>
<td></td>
<td>1 pcs</td>
</tr>
<tr>
<th scope="row">29</th>
<td>Conector en Forma de T</td>
<td></td>
<td></td>
<td>1 pcs</td>
</tr>
</table>

5. Versión BLE

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Parts_of_Mecanum_Wheel_Robot_Kit-BLE_Version-.PNG)

<table cellspacing="0" width="80%">
<tr>
<th scope="col"></th>
<th scope="col">Nombre de las Partes</th>
<th scope="col">Especificación</th>
<th scope="col">Material</th>
<th scope="col">Cantidad</th>
</tr>
<tr>
<th scope="row">1</th>
<td>Chasis</td>
<td>250*145*5mm, Negro</td>
<td>PMMA</td>
<td>1 pza</td>
</tr>
<tr>
<th scope="row">2</th>
<td>Cubierta Superior</td>
<td>192*145*5mm, Negro</td>
<td>PMMA</td>
<td>1 pza</td>
</tr>
<tr>
<th scope="row">3</th>
<td>Tapa de Batería</td>
<td>68*47*2mm, Negro</td>
<td>PMMA</td>
<td>1 pza</td>
</tr>
<tr>
<th scope="row">4</th>
<td>Rueda Mecanum Izquierda</td>
<td>Φ60mm H32mm</td>
<td>Aluminio&amp;Caucho</td>
<td>2 pzas</td>
</tr>
<tr>
<th scope="row">5</th>
<td>Rueda Mecanum Derecha</td>
<td>Φ60mm H32mm</td>
<td>Aluminio&amp;Caucho</td>
<td>2 pzas</td>
</tr>
<tr>
<th scope="row">6</th>
<td>Motor DC</td>
<td>25GA 370</td>
<td>Metal</td>
<td>4 pzas</td>
</tr>
<tr>
<th scope="row">7</th>
<td>Soporte de Motor para Motor DC</td>
<td>Serie 25</td>
<td>Metal</td>
<td>4 pzas</td>
</tr>
<tr>
<th scope="row">8</th>
<td>Conector de Eje</td>
<td>Ф13.9mm*23mm/6mm</td>
<td>Aluminio</td>
<td>4 pzas</td>
</tr>
<tr>
<th scope="row">9</th>
<td>Tornillo de Fijación</td>
<td>M3×5</td>
<td>Metal</td>
<td>8 pzas</td>
</tr>
<tr>
<th scope="row">10</th>
<td>Ensambles de Tornillo, Arandela de Resorte y Arandela Plana</td>
<td>M4×18</td>
<td>Metal</td>
<td>4 pzas</td>
</tr>
<tr>
<th scope="row">11</th>
<td>Ensambles de Tornillo, Arandela de Resorte y Arandela Plana</td>
<td>M2×8</td>
<td>Metal</td>
<td>20 pzas</td>
</tr>
<tr>
<th scope="row">12</th>
<td>Tornillo de Cabeza Cilíndrica con Ranura en Cruz</td>
<td>M3×8</td>
<td>Metal</td>
<td>10 pzas</td>
</tr>
<tr>
<th scope="row">13</th>
<td>Tornillo de Cabeza Cilíndrica con Ranura en Cruz con Arandela</td>
<td>M3×8</td>
<td>Metal</td>
<td>32 pzas</td>
</tr>
<tr>
<th scope="row">14</th>
<td>Tuerca Hexagonal</td>
<td>M3</td>
<td>Metal</td>
<td>16 pzas</td>
</tr>
<tr>
<th scope="row">15</th>
<td>Separador Hexagonal</td>
<td>M3×40</td>
<td>Metal</td>
<td>5 pzas</td>
</tr>
<tr>
<th scope="row">16</th>
<td>Separador Hexagonal</td>
<td>M3×10</td>
<td>Metal</td>
<td>4 pzas</td>
</tr>
<tr>
<th scope="row">17</th>
<td>Separador Hexagonal</td>
<td>M2×15</td>
<td>Metal</td>
<td>4 pzas</td>
</tr>
<tr>
<th scope="row">18</th>
<td>Separador Hexagonal</td>
<td>M2×10</td>
<td>Metal</td>
<td>6 pzas</td>
</tr>
<tr>
<th scope="row">19</th>
<td>[Grove - I2C Motor Driver](https://www.seeedstudio.com/depot/Grove-I2C-Motor-Driver-p-907.html)</td>
<td></td>
<td></td>
<td>2 pzas</td>
</tr>
<tr>
<th scope="row">20</th>
<td>[Grove - BLE](https://www.seeedstudio.com/depot/Grove-BLE-p-1929.html)</td>
<td></td>
<td></td>
<td>1 pza</td>
</tr>
<tr>
<th scope="row">21</th>
<td>[Seeeduino](https://www.seeedstudio.com/depot/Seeeduino-V30-Atmega-328P-p-669.html)</td>
<td></td>
<td></td>
<td>1 pza</td>
</tr>
<tr>
<th scope="row">22</th>
<td>[Base Shield](https://www.seeedstudio.com/depot/Base-Shield-V2-p-1378.html)</td>
<td></td>
<td></td>
<td>1 pza</td>
</tr>
<tr>
<th scope="row">23</th>
<td>[Grove - Universal 4 Pin Buckled 20cm Cable](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-20cm-Cable-5-PCs-pack-p-936.html)</td>
<td></td>
<td></td>
<td>1 pza</td>
</tr>
<tr>
<th scope="row">24</th>
<td>[Grove - Branch Cable](https://www.seeedstudio.com/depot/Grove-Branch-Cable-5PCs-pack-p-847.html)</td>
<td></td>
<td></td>
<td>1 pza</td>
</tr>
<tr>
<th scope="row">25</th>
<td>Cable de Alimentación</td>
<td>100mm, Negro</td>
<td></td>
<td>3 pzas</td>
</tr>
<tr>
<th scope="row">26</th>
<td>Cable de Alimentación</td>
<td>100mm, Rojo</td>
<td></td>
<td>3 pzas</td>
</tr>
<tr>
<th scope="row">27</th>
<td>Interruptor Basculante</td>
<td></td>
<td></td>
<td>1 pza</td>
</tr>
<tr>
<th scope="row">28</th>
<td>Conector en Forma de T</td>
<td></td>
<td></td>
<td>1 pza</td>
</tr>
</table>

## Instrucciones de Ensamblaje

![](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/img/Assembly_Instructions.PNG)

## Archivos Adjuntos

[Especificaciones del Motor](https://files.seeedstudio.com/wiki/4WD_Mecanum_Wheel_Robot_Kit_Series/res/Motor_Specs_for_4WD_Mecanum_Wheel_Robot_Kit_Series_Products.pdf)

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
