---
description: HAT de Relé SPDT de 4 Canales para Raspberry Pi
title: HAT de Relé SPDT de 4 Canales para Raspberry Pi
keywords:
- Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Raspberry_Pi_Relay_Board_v1.0
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Raspberry-Relay-Hat/1.png" /></p>

El HAT de Relé SPDT de 4 Canales para Raspberry Pi utiliza cuatro relés SPDT (polo simple - doble tiro) de alta calidad y proporciona interfaces NO/NC (Normalmente Abierto/Normalmente Cerrado) que pueden controlar la carga de alta corriente. Esto significa que podría ser una buena solución para controlar dispositivos que no pueden ser controlados directamente por el bus I2C. El factor de forma de shield estandarizado permite una conexión fluida con una Raspberry Pi y también tiene cuatro indicadores LED que muestran el estado encendido/apagado de cada relé.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Raspberry-Pi-4-Channel-SPDT-Relay-Hat-p-4850.html)

## Versión

| Versión del Producto | Cambios | Fecha de Lanzamiento |
|-|-|-|
| Raspberry Pi Relay Board v1.0 | Inicial | 2015-04-08 |
| HAT de Relé SPDT de 4 Canales para Raspberry Pi | 1.Componentes reemplazados para mejor estabilidad<br />2.Cambio en el diseño de componentes electrónicos | 2021-02-08 |

## Características

--------

- Relés SPDT (polo simple - doble tiro) de alta calidad
- Compatible con Raspberry Pi 1, 2, 3, 4
- Interfaz I2C con tres interruptores de hardware SW1 (1, 2, 3) para seleccionar la dirección fija del bus I2C
- Terminales de tornillo de relé para conexión fácil
- Forma y diseño de shield estandarizado
- Indicadores LED de estado de funcionamiento para cada relé
- Pines de relé COM, NO (Normalmente Abierto) y NC (Normalmente Cerrado) para cada relé

## Especificaciones

--------------

<table border="1" cellspacing="0" width="520">
<tr>
<th scope="col">
Elemento
</th>
<th scope="col">
Mín
</th>
<th scope="col">
Típico
</th>
<th scope="col">
Máx
</th>
<th scope="col">
Unidad
</th>
</tr>
<tr align="center">
<th scope="row">
Voltaje de Alimentación
</th>
<td>
4.75
</td>
<td>
5
</td>
<td>
5.5
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
Corriente de Trabajo
</th>
<td>
10
</td>
<td>
/
</td>
<td>
360
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<th scope="row">
Voltaje de Conmutación
</th>
<td>
/
</td>
<td>
/
</td>
<td>
30/250
</td>
<td>
VDC/VAC
</td>
</tr>
<tr align="center">
<th scope="row">
Corriente de Conmutación
</th>
<td>
/
</td>
<td>
/
</td>
<td>
15
</td>
<td>
A
</td>
</tr>
<tr align="center">
<th scope="row">
Frecuencia
</th>
<td>
/
</td>
<td>
1
</td>
<td>
/
</td>
<td>
HZ
</td>
</tr>
<tr align="center">
<th scope="row">
Potencia de Conmutación
</th>
<td>
/
</td>
<td>
/
</td>
<td>
2770VA/240
</td>
<td>
W
</td>
</tr>
<tr align="center">
<th scope="row">
Vida del Relé
</th>
<td>
100,000
</td>
<td>
/
</td>
<td>
/
</td>
<td>
Ciclo
</td>
</tr>
<tr align="center">
<th scope="row">
Dimensiones
</th>
<td colspan="3">
91.20 *56.15* 32
</td>
<td>
mm
</td>
</tr>
</table>

## Descripción General del Hardware

-----------------

![](https://files.seeedstudio.com/wiki/Raspberry-Relay-Hat/2.png)

## Uso

-----
Esta sección fue escrita por John M. Wargo, aquí nos gustaría expresar nuestra gratitud por la contribución de John. Hemos modificado ligeramente el texto original para que se ajuste a toda la documentación de Seeed. Por favor haz clic [aquí](http://johnwargo.com/microcontrollers-single-board-computers/using-the-seeed-studio-raspberry-pi-relay-board.html) para visitar el documento original en su sitio web.

Los pasos para instalar la placa y verificar que funciona incluyen los siguientes pasos:

- Paso1.  Montar la placa de relés en la Raspberry Pi
- Paso2. Habilitar la interfaz de software I2C de Raspbian
- Paso3. Validar que la Raspberry Pi reconoce la placa
- Paso4. Ejecutar algo de código Python para probar la placa

### Paso1. Montaje de la Placa de Relés

Montar la placa es fácil, viene con los conectores hembra apropiados que necesitas para montarla en cualquier placa Raspberry Pi con conectores macho. Nota: Tendrás que añadir conectores macho a la Raspberry Pi Zero para usar la placa.

Recomendamos que pongas algo de cinta aislante encima del puerto Ethernet de la Raspberry Pi antes de montar la placa. Si montas la placa sin usar separadores (como he hecho en la figura de ejemplo a continuación), existe la posibilidad de que la placa haga contacto con la carcasa del puerto Ethernet y cause un problema.

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_Relay_Board_v1.0/img2/seed-figure-01.png)
**Figura 1**

Para un proyecto de producción, definitivamente recomendaríamos usar separadores para mantener las dos placas en su lugar.

La placa de relés está configurada para una Raspberry Pi más antigua con un conector de 26 pines, así que cuando la conectes a una Raspberry Pi con conectores de 40 pines, necesitarás desplazarla completamente hacia un lado como hemos mostrado en la figura. Si no alineas los pines correctamente, tendrás problemas más tarde ya que simplemente no funcionará.

### Habilitando I2C

La placa de relés se comunica con la Raspberry Pi a través de una interfaz I2C [https://en.wikipedia.org/wiki/I%C2%B2C](https://en.wikipedia.org/wiki/I%C2%B2C). Esta interfaz está deshabilitada por defecto en el SO Raspbian de la Pi, así que tendrás que activarla antes de poder usar la placa. Enciende la Pi y deja que arranque a la interfaz gráfica. Cuando esté funcionando, abre el menú Pi, selecciona Preferencias, luego Configuración de Raspberry Pi como se muestra en la siguiente figura:

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_Relay_Board_v1.0/img2/seed-figure-02.png)
**Figura 2**

En la ventana que se abre, selecciona la pestaña Interfaces como se muestra en la siguiente figura. Habilita la opción junto a I2C como se muestra en la figura y haz clic en el botón OK para continuar. Cuando reinicies la PC, la Pi debería ver la placa de relés. En la siguiente sección, verificaremos que la Pi ve la placa de relés.

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_Relay_Board_v1.0/img2/seed-figure-03.png)
**Figura 3**

### Validando que la Raspberry Pi Ve la Placa de Relés

Con la interfaz I2C habilitada, es hora de asegurarse de que la Raspberry Pi ve la placa de relés. Abre una ventana de terminal en la Pi y ejecuta el siguiente comando:

```
i2cdetect -y -r 1
```

La aplicación mostrará un volcado de los dispositivos I2C reconocidos como se muestra en la siguiente figura. En este ejemplo, solo hay una placa I2C en el sistema, la placa de relé configurada en una dirección de 20. Verás cómo este valor es importante más adelante en este artículo.

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_Relay_Board_v1.0/img2/seed-figure-04.png)
**Figura 4**

Se supone que deberías poder usar los interruptores en la placa de relé para establecer la dirección I2C, hay 4 interruptores DIP en la placa, veamos qué sucede cuando los cambias.

Hay cuatro interruptores, tres etiquetados de A0 a A2, y uno etiquetado NC. NC significa Sin Conexión. Cada interruptor tiene una configuración alta y baja, por lo que la siguiente tabla explicará cómo usarlos para establecer una dirección I2C para la placa:

|A0| A1 |A2 |Dirección|
|---|---|---|---|
|Alto|Alto|Alto|20|
|Bajo|Alto|Alto|21|
|Alto|Bajo|Alto|22|
|Alto|Alto|Bajo|24|
|Alto|Bajo|Bajo|26|
|Bajo|Bajo|Bajo|27|

### Ejecutando la Aplicación de Prueba

Por favor usa el código de prueba del [repositorio de github](https://github.com/johnwargo/Seed-Studio-Relay-Board). Toma el código de ahí y podrás completar fácilmente el siguiente paso.

Para ejecutar la aplicación de prueba, abre una ventana de terminal, navega hasta donde hayas extraído la aplicación de muestra y ejecuta la aplicación usando el siguiente comando:

```
python ./seeed_relay_test.py
```

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_Relay_Board_v1.0/img2/seed-figure-05.png)
**Figura 4**

Cuando se te solicite entrada, escribirás comandos para encender y apagar los relés:

- Escribir 1on, 2on, 3on, o 4on y presionar enter hará que el relé especificado se encienda.
- Escribir 1off, 2off, 3off, o 4off y presionar enter hará que el relé especificado se apague
- Escribir allon o alloff encenderá o apagará todos los relés.

### Usando El Módulo Python

Para usar el módulo en tus propias aplicaciones Python, copia el módulo (relay_lib_seeed.py) en la carpeta de tu proyecto, luego importa el módulo en tu aplicación Python añadiendo la siguiente línea al comienzo de tu aplicación:

>from relay_lib_seeed import *

Esto expone una serie de funciones a tu aplicación:

- relay_on(int_value) - Enciende un solo relé. Pasa un valor entero entre 1 y 4 (inclusive) a la función para especificar el relé que deseas encender. Por ejemplo: relay_on(1) encenderá el primer relé (que es en realidad el relé 0 internamente).
- relay_off(int_value) - Apaga un solo relé. Pasa un valor entero entre 1 y 4 (inclusive) a la función para especificar el relé que deseas apagar. Por ejemplo: relay_off(4) apagará el cuarto relé (que es en realidad el relé 3 internamente).
- relay_all_on() - Enciende todos los relés simultáneamente.
- relay_all_off() - Apaga todos los relés simultáneamente.

El módulo expone un valor de configuración que querrás tener en mente mientras trabajas con la placa:

```
# 7 bit address (will be left shifted to add the read write bit)
DEVICE_ADDRESS = 0x20
```

¿Recuerdas ese valor? ¿20? La placa tiene esta dirección por defecto. Si cambias los interruptores en la placa, necesitarás actualizar esta variable en consecuencia.

Para ver el módulo en acción, abre una ventana de terminal en la Raspberry Pi, navega a la carpeta donde extrajiste los archivos de este repositorio, y ejecuta el siguiente comando:

```
python ./relay_lib_seeed_test.py
```

La aplicación:

- Encenderá todos los relés durante un segundo
- Apagará todos los relés
- Recorrerá cada uno de los relés (del 1 al 4) encendiendo cada uno durante un segundo

El módulo escribirá indicadores en la consola mientras realiza cada paso como se muestra en la siguiente figura:

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_Relay_Board_v1.0/img2/seed-figure-06.png)
**Figura 6**

Los LEDs en la placa de relés (uno para cada relé) se iluminarán cuando los relés se enciendan. En mi placa, no estaban en secuencia, así que no esperes que se enciendan en orden.

El código que hace todo esto se ve como lo siguiente:

```
# turn all of the relays on
relay_all_on()
# wait a second
time.sleep(1)
# turn all of the relays off
relay_all_off()
# wait a second
time.sleep(1)
# now cycle each relay every second in an infinite loop
while True:
for i in range(1, 5):
   relay_on(i)
   time.sleep(1)
   relay_off(i)
```

Eso es todo, eso es todo lo que hay. Disfrútalo.

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Raspberry_Pi_Relay_Board_v1.0/res/Raspberry_Pi_Relay_Board_v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
--------

- [Esquemas](https://files.seeedstudio.com/wiki/Raspberry-Relay-Hat/Raspberry-Pi-Relay-Hat_v1.0_SCH.zip)
- [Hoja de Datos HLS8L](https://files.seeedstudio.com/wiki/Raspberry_Pi_Relay_Board_v1.0/res/HLS8L.pdf)
- [Hoja de Datos PCAL9535A](https://files.seeedstudio.com/wiki/Raspberry_Pi_Relay_Board_v1.0/res/PCAL9535A.pdf)
- [Código de Prueba Python](https://github.com/johnwargo/Seed-Studio-Relay-Board)
- [Código de Prueba C#](https://github.com/SeeedDocument/Raspberry_Pi_Relay_Board_v1.0/tree/master/res/RPiRelayBoard)

<!-- Este archivo Markdown fue creado desde https://www.seeedstudio.com/wiki/Raspberry_Pi_Relay_Board_v1.0 -->

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
