---
description: Cómo usar y escribir una biblioteca
title: Cómo usar y escribir una biblioteca

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/How_to_use_and_write_a_library
last_update:
  date: 02/01/2023
  author: w0x7ce

no_comments: false # for Disqus

---

La popularidad de Arduino depende en gran medida de un gran número de bibliotecas excelentes y fáciles de usar. La biblioteca de Arduino utiliza bibliotecas de clases C++ orientadas a objetos, puedes usarlas fácilmente sin conocer los detalles de implementación de la biblioteca.

Puedes encontrar las bibliotecas de Arduino en la ruta: \arduino-1.0.5\libraries. Y hay un ejemplo en ella, que tiene algunas demostraciones para ayudarte a entender y usar la biblioteca.
Es muy fácil usar una biblioteca, aquí presentamos cómo escribir una biblioteca.

Entonces vamos, escribimos una biblioteca de cálculo simple aquí. Incluye las siguientes funciones:

```cpp
int sum(int a, int b);
int minus(int a, int b);
```

Sí, es muy simple, es obvio que la primera función devuelve la suma de dos números, mientras que la segunda función devuelve la resta.
Primero, creamos una carpeta llamada Calc, que también es el nombre de la biblioteca.
Luego creamos un archivo Calc.h, y lo llenamos:

```cpp
#ifndef __CALC_H__
#define __CALC_H__

class Calc{
public:
    int sum(int a, int b);                  // return sum
    int minus(int a, int b);                // return difference
};
#endif
```

```c++ title="Calc.cpp"
#include "Calc.h"

int Calc::sum(int a, int b)
{
    return (a+b);
}

int minus(int a, int b)
{
    return (a-b);
}
```

Para ayudar a los usuarios a entender el uso de la biblioteca, creamos una carpeta examples. Y hay una demostración llamada cale_test, código siguiente:

```cpp
// demo of calc library
#include <Calc.h>

void setup()
{
    Serial.begin(9600);

    Serial.print("10+15 = ");
    Serial.println(calc.sum(10, 15));
    Serial.print("100-19 = ");
    Serial.println(calc.minus(100, 19));

    Serial.println("Calc Library test over!");
}

void loop()
{

}

```

Cuando uses el IDE de Arduino, verás que algunas funciones de biblioteca se mostrarán en rojo, mientras que otras no. Obviamente, hacer que el nombre de la función y los nombres de archivos de encabezado, así como algunas definiciones de macro se muestren en rojo hace que el código se vea más hermoso y fácil de verificar errores.
Para ayudarnos a crear esta biblioteca que se puede mostrar en el IDE en rojo; necesitas agregar un archivo keyboards.txt en la carpeta Calc, keyboards.txt es como sigue:

```cpp
#######################################
# Syntax Coloring Map For Calc
#######################################

#######################################
# Datatypes (KEYWORD1)
#######################################
Calc	KEYWORD1
calc	KEYWORD1

#######################################
# Methods and Functions (KEYWORD2)
#######################################
sum	KEYWORD2
minus	KEYWORD2

#######################################
# Constants (LITERAL1)
#######################################
```


Como puedes ver, el nombre de la clase o nombre del archivo se escribe antes de KEYWORD1, el nombre de la función se escribe antes de KEYWORD2. En cuanto a LITERAL1, se usa para resaltar el nombre de la definición de macro, que no está relacionado con esta biblioteca, por lo que está vacío. Ten en cuenta que entre el nombre y KEYWORD1 hay solo una tabulación, no espacios.
Así, terminamos nuestra biblioteca Calc, y funciona bien. Si quieres probar la biblioteca y no molestarte en escribir o incluso molestarte en copiar, puedes ir a mi github y descargarla: [https://github.com/loovee/Calc](https://github.com/loovee/Calc)

###   Recursos

[descargar archivo pdf](https://files.seeedstudio.com/wiki/How_to_use_and_write_a_library/res/How_to_use_and_write_a_library.pdf)

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