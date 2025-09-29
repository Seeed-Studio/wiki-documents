---
description: Guía de Usuario I2C para Placas Arduino
title: Guía de Usuario I2C para Placas Arduino
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Arduino_Software_I2C_user_guide
last_update:
  date: 1/16/2023
  author: jianjing Huang
---


# Guía de Usuario Arduino Software I2C

La biblioteca I2C estándar para Arduino es la biblioteca Wire. Aunque esta biblioteca es suficiente la mayoría de las veces, hay situaciones en las que no se puede usar:

- los pines I2C A4/A5 (o SDA/SCL) ya están en uso para otros propósitos
- se usan dispositivos con las mismas direcciones I2C

Por lo tanto, escribimos la biblioteca SoftwareI2C para usar puertos digitales y puertos analógicos para permitir que múltiples dispositivos con las mismas direcciones I2C funcionen en Arduino.

## Escáner I2C para Arduino

El Escáner I2C es un sketch simple que escanea el Bus I2C en busca de dispositivos. Puedes subir el código a tu Arduino para encontrar la dirección I2C de los módulos. Sube el siguiente sketch y abre el Monitor Serie para ver los resultados:

```cpp
#include <Wire.h>

void setup()
{
    Wire.begin();

    Serial.begin(9600);
    while (!Serial); // Wait for serial monitor
    Serial.println("---I2C Scanner---");
}

void loop()
{
    byte error, address;
    int nDevices;

    Serial.println("Scanning...");

    nDevices = 0;
    for(address = 1; address < 127; address++ )
    {
        Wire.beginTransmission(address);
        error = Wire.endTransmission();

        Wire.beginTransmission(address+1);

    if (error == 0 && Wire.endTransmission() != 0 ) // Special flag for SAMD Series
    {
        Serial.print("I2C device found at address 0x");
        if (address<16)
            Serial.print("0");
        Serial.print(address,HEX);
        Serial.println("!");

        nDevices++;
    }
    else if (error==4) 
    {
        Serial.print("Unknown error at address 0x");
        if (address<16) 
            Serial.print("0");
        Serial.println(address,HEX);
    }
    }
    if (nDevices == 0)
        Serial.println("No I2C devices found\n");
    else
        Serial.println("done\n");

    delay(5000);           // wait 5 seconds for next scan
}
```

## Instalar la Biblioteca SoftwareI2C

----

- Por favor sigue los procedimientos de [cómo instalar una biblioteca de arduino](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library/) para instalar la biblioteca.
- Proporcionamos una Biblioteca de Arduino para **SoftwareI2C**, haz clic [**aquí**](https://github.com/Seeed-Studio/Arduino_Software_I2C) para descargarla.

## Ejemplo#1: Escanear dirección de dispositivo I2C

----

### Conexión

Aquí te mostraremos cómo funciona esto a través de una demostración simple. Primero que nada, necesitas preparar las siguientes cosas:

| Seeeduino V4.2 | Grove - OLED Display 1.12" | Base Shield |
|--------------|----------------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/product.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|
|[Consigue UNO Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-OLED-Display-1.12%22-p-824.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|

Este es un módulo fácil de usar, lo que necesitas hacer es conectar el módulo al **puerto D2** de un Base Shield.

![enter image description here](https://files.seeedstudio.com/wiki/Arduino_Software_I2C_user_guide/img/One_OLED.jpg)

Si no tienes el base shield, por favor sigue la conexión de abajo.

|Pin de Arduino|Pin OLED  |
|--------|------|
|Dígito 3 | SDA   |
|Dígito 2   | SCL|
|VCC   | VCC  |
|GND | GND  |


### Software

- Abre el código directamente por la ruta: **File -> Example ->Arduino_Software_I2C-master->SoftwareI2C_Scan**.

![](https://files.seeedstudio.com/wiki/Arduino_Software_I2C_user_guide/img/I2C_Scan.jpg)

```cpp
#include "SoftwareI2C.h"

SoftwareI2C softwarei2c;

void setup()
{
    Serial.begin(115200);
    softwarei2c.begin(3, 2);       // sda, scl
    Serial.println("begin to scan...");
}

void loop()
{
    for(unsigned char i=1; i<=127; i++)
    {
        if(softwarei2c.beginTransmission(i))
        {
            Serial.print("0x");
            Serial.println(i, HEX);

            while(1);
        }
        softwarei2c.endTransmission();
    }

    Serial.println("find nothing");
    while(1);

}
```

- Sube el código a arduino.
- Por favor configura la velocidad de baudios del puerto serie como 115200.
- Podemos ver la dirección I2C desde el monitor serie.

## Ejemplo#2: Mostrar información diferente en 2 Grove - OLED Display 1.12

----

### Conexión

Aquí te mostraremos cómo funciona esto a través de una demostración simple. Primero que nada, necesitas preparar las siguientes cosas:

| Seeeduino V4 | Grove - OLED Display 1.12`` | Base Shield |
|--------------|----------------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/product.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|
|[Consigue UNO Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Grove-OLED-Display-1.12%22-p-824.html)|[Consigue UNO Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|

- Conecta una Grove - OLED Display 1.12 al **puerto D2** y otra al **puerto D4**.

![enter image description here](https://files.seeedstudio.com/wiki/Arduino_Software_I2C_user_guide/img/Two_OLED.jpg)

### Software

- Haz clic [aquí](https://github.com/Seeed-Studio/OLED_Display_96X96/archive/master.zip) para descargar la biblioteca Grove-OLED-Display-1.12.
- **Copia SeeedGrayOLED.cpp y SeeedGrayOLED.h a la carpeta Arduino_Software_I2C-master**
- **Edita SeeedGrayOLED.cpp**

  - Paso1: Cambia la biblioteca de Wire.h a SoftwareI2C.h

```cpp
From
#include "Wire.h"
To
#include <SoftwareI2C.h>
```

- Paso2: Añadir la función initSoftwareI2C, tenemos que cambiar el nombre de la clase para diferentes productos.

```cpp
void SeeedGrayOLED::initSoftwareI2C(SoftwareI2C *w, int __sda, int __scl)
{
    Wire = w;
    Wire->begin(__sda, __scl);
}
```

- Paso3: Reemplaza todos los `Wire.` por `Wire->`  Por ejemplo, cambia `Wire.endTransmission()` a `Wire->endTransmission()`.

```cpp
From
Wire.endTransmission();
To
Wire->endTransmission();
```

- **Editar SeeedGrayOLED.h**

  - Paso1: Cambiar la librería `Wire.h` a `SoftwareI2C.h`

```cpp
From
#include "Wire.h"
To
#include <SoftwareI2C.h>
```

- Paso2: Añadir la función initSoftwareI2C en la clase pública

```cpp
void initSoftwareI2C(SoftwareI2C *w, int __sda, int __scl);
```

- Paso3: Agregar SoftwareI2C *Wire en la clase privada

```cpp
SoftwareI2C *Wire;
```

- Abre el código directamente por la ruta: **File -> Example ->Arduino_Software_I2C-master->OLED_Display**.

![](https://files.seeedstudio.com/wiki/Arduino_Software_I2C_user_guide/img/OLED_Display.jpg)

- Tenemos que definir objetos SoftwareI2C así como objetos SeeedGrayOLED.

```cpp
//define 2 SoftwareI2C objects
#include "SoftwareI2C.h"  
SoftwareI2C WireS1;
SoftwareI2C WireS2;

//define 2 SeeedGrayOLED objects
#include "SeeedGrayOLED.h"
#include <avr/pgmspace.h>
SeeedGrayOLED SeeedGrayOled1;
SeeedGrayOLED SeeedGrayOled2;
```

- Usamos initSoftwareI2C en lugar de Wire.begin durante la configuración.

```cpp
  SeeedGrayOled1.initSoftwareI2C(&WireS1, 3, 2);     // initSoftwareI2C, sda, scl
```

```cpp
//define 2 SoftwareI2C objects
#include "SoftwareI2C.h"  
SoftwareI2C WireS1;
SoftwareI2C WireS2;

//define 2 SeeedGrayOLED objects
#include "SeeedGrayOLED.h"
#include <avr/pgmspace.h>
SeeedGrayOLED SeeedGrayOled1;
SeeedGrayOLED SeeedGrayOled2;


void setup()
{
  SeeedGrayOled1.initSoftwareI2C(&WireS1, 3, 2);     // initSoftwareI2C, sda, scl

  SeeedGrayOled1.init(SSD1327);
  SeeedGrayOled1.clearDisplay();     //Clear Display.
  SeeedGrayOled1.setNormalDisplay(); //Set Normal Display Mode
  SeeedGrayOled1.setVerticalMode();  // Set to vertical mode for displaying text


  for(char i=0; i < 12 ; i++)
  {
  SeeedGrayOled1.setTextXY(i,0);  //set Cursor to ith line, 0th column
  SeeedGrayOled1.setGrayLevel(i); //Set Grayscale level. Any number between 0 - 15.
  SeeedGrayOled1.putString("11111111"); //Print 11111111
  }


  SeeedGrayOled2.initSoftwareI2C(&WireS2, 5, 4);     // initSoftwareI2C, sda, scl

  SeeedGrayOled2.init(SSD1327);             //initialize SEEED OLED display
  SeeedGrayOled2.clearDisplay();     //Clear Display.
  SeeedGrayOled2.setNormalDisplay(); //Set Normal Display Mode
  SeeedGrayOled2.setVerticalMode();  // Set to vertical mode for displaying text

  for(char i=0; i < 12 ; i++)
  {
  SeeedGrayOled2.setTextXY(i,0);  //set Cursor to ith line, 0th column
  SeeedGrayOled2.setGrayLevel(i); //Set Grayscale level. Any number between 0 - 15.
  SeeedGrayOled2.putString("00000000"); //Print 00000000
  }
}

  void loop()
  {

  }
```

- Subir a Sketch.
- Veremos 11111111 mostrado en una pantalla mientras 00000000 está en la otra.

## APIs de la biblioteca

-----

- función begin(): SoftwareI2C.begin() debe ser llamada primero para iniciar cualquier comunicación I2C por software usando la biblioteca SoftwareI2C.  

```cpp
SoftwareI2C::begin(int Sda, int Scl)
```

- función beginTransmission: Se utiliza cuando el ATmega actúa como maestro I2C. Establece variables internas en la biblioteca SoftwareI2C en preparación para transmitir a la dirección dada.

```cpp
SoftwareI2C.beginTransmission(uchar addr)
```

- función endTransmission(): finaliza la transmisión a la dirección dada.  

```cpp
SoftwareI2C.endTransmission()
```

- función write: Llena el búfer de datos de envío con los datos encontrados en la lista de argumentos. hay 2 funciones. Una envía un byte y la otra un array.

```cpp
SoftwareI2C.write(uchar dta)
```

```cpp
SoftwareI2C::write(uchar len, uchar *dta)
```

- función de lectura: Devuelve el byte en el búfer de recepción.

```cpp
SoftwareI2C.read()
```

## Referencias

----

- **[Biblioteca]**[Biblioteca Arduino SoftwareI2C](https://github.com/Seeed-Studio/Arduino_Software_I2C/archive/master.zip)

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
