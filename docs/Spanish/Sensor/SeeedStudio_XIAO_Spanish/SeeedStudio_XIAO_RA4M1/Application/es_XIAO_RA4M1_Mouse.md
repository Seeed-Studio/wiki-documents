---
description: Build a simple mouse with Seeed Studio XIAO RA4M1.
title: Mouse con XIAO RA4M1 
keywords:
- ra4m1
- xiao
- mouse
image: https://files.seeedstudio.com/wiki/xiao_ra4m1_mouse_image/3.png
side_position: 2
slug: /es/xiao_ra4m1_mouse
last_update:
  date: 02/17/2025
  author: Guillermo
---

<div class="table-center">
<iframe width="800" height="500" src="https://files.seeedstudio.com/wiki/xiao_ra4m1_mouse_image/xiao_mouse.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## Materiales requeridos

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO RA4M1</th>
      <th>Grove Thumb Joystick</th>
      <th>Grove Cable</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:200, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Thumb_Joystick/img/Bgjoy1.jpg" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comimagesproductmalejumper.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Thumb-Joystick.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-4-pin-Male-Jumper-to-Grove-4-pin-Conversion-Cable-5-PCs-per-Pack.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Ve Más 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

## Preparación preliminar  

### Encender el LED integrado del XIAO RA4M1  

Si nunca has utilizado el XIAO RA4M1 antes, [haz clic aquí](https://wiki.seeedstudio.com/getting_started_xiao_ra4m1/) para aprender a encender el LED integrado, lo que asegurará que tu entorno de desarrollo esté correctamente configurado.  

### Leer los datos de los ejes X e Y del Joystick Grove  

#### Paso 1. Conectar el dispositivo  

Primero, conecta el XIAO RA4M1 y el joystick según la siguiente tabla:  

| XIAO RA4M1 | Grove - Thumb Joystick |
|------------|------------------------|
| 3.3V       | Rojo                   |
| GND        | Negro                  |
| A0         | Blanco                 |
| A1         | Amarillo               |

Ahora, usa un cable Grove para conectarlos según la siguiente imagen.

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/xiao_ra4m1_mouse_image/4.png" style={{width:600, height:'auto'}}/></div>

#### Paso 2. Subir el programa de prueba  

Copia el siguiente código, pégalo en el Arduino IDE y súbelo al XIAO RA4M1.

```cpp
void setup()
{
    Serial.begin(9600);
}

void loop()
{
    int sensorValue1 = analogRead(A0);
    int sensorValue2 = analogRead(A1);

    Serial.print("Las coordenadas X y Y son:");
    Serial.print(sensorValue1, DEC);
    Serial.print(",");
    Serial.println(sensorValue2, DEC);
    Serial.println(" ");
    delay(200);
}
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_ra4m1_mouse_image/2.png" style={{width:1000, height:'auto'}}/></div>

Ahora, cuando muevas el Joystick, los datos de los ejes cambiarán al mismo tiempo. Esto significa que el XIAO RA4M1 y el Joystick están funcionando perfectamente.

## Construir un ratón con XIAO RA4M1

### Paso 3. Subir el programa controlador del ratón

```cpp
#include <Mouse.h>

const int xaxis = A0;
const int yaxis = A1;
const int sensitivity = 5; //ajustar la sensibilidad del ratón

void setup()
{
    Mouse.begin();
    delay(1000); // al menos 1000ms para inicializar
    Serial.begin(9600);
}

void loop()
{
  int xValue = analogRead(xaxis);
  int yValue = analogRead(yaxis);

  /*
  cuando presionas el botón central del joystick Grove, xValue será igual a 1023,
  así que cuando xValue < 1000, movemos el ratón; cuando xValue > 1000, hacemos clic con el ratón
  */
  if(xValue < 1000){
  
    //definir la distancia de movimiento del ratón
    int xDistance;
    int yDistance;

    /*
    El joystick lee los valores de x y y con 500 como el centro del eje de coordenadas, 
    así que necesitamos procesar los datos restando 500, al mismo tiempo eliminando algunas pequeñas vibraciones.
    */
    //Eliminar las pequeñas vibraciones en X.
    if(abs(xValue - 500) < 10){
      xDistance = 0;
    }else{
      xDistance = (xValue - 500);
    }
    //Eliminar las pequeñas vibraciones en Y.
    if(abs(yValue - 500) < 10){
      yDistance = 0;
    }else{
      yDistance = (yValue - 500);
    }
    //leer el valor del joystick
    Serial.print("valor: ");
    Serial.print(xValue);
    Serial.print(",");
    Serial.println(yValue);
    Serial.println(" ");
    //leer la distancia que se moverá el ratón
    Serial.print("distancia: ");
    Serial.print(xDistance);
    Serial.print(",");
    Serial.println(yDistance);
    Serial.println(" ");

    //hacer que el ratón no sea tan sensible
    Mouse.move(xDistance / sensitivity, -yDistance / sensitivity, 0);
  }else{
    //cuando xValue > 1000, hacer clic con el ratón
    Mouse.click();
  }
    delay(100);
}
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_ra4m1_mouse_image/1.png" style={{width:1000, height:'auto'}}/></div>

Ahora verás que el cursor se mueve cuando controlas el Joystick ~ 

¡Felicidades! Has creado con éxito este pequeño ratón. Hay muchas más funciones interesantes de HID (Dispositivo de Interfaz Humana) esperando a ser exploradas con el XIAO RA4M1. [¿Quieres aprender más? Haz clic aquí para continuar~](https://docs.arduino.cc/tutorials/uno-r4-minima/usb-hid/)

## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
