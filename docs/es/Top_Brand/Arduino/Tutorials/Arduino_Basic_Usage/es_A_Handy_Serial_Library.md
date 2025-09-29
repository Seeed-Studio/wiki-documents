---
description: Una Biblioteca Serial Práctica
title: Una Biblioteca Serial Práctica

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/A_Handy_Serial_Library
last_update:
  date: 02/01/2023
  author: w0x7ce

no_comments: false # for Disqus

---

Arduino no tenía función de depuración, tal vez esta sea la primera impresión de algunos ingenieros de software. De hecho, a menudo solo usamos Arduino para hacer alguna aplicación simple, incluso si no hay depuración, no importa. Si quieres usar Arduino para hacer alguna aplicación compleja, como reconocimiento facial, entonces tal vez tengas que reconsiderar si habías elegido la plataforma incorrecta.

En cuanto a algunas aplicaciones simples, podemos usar la impresión serial para depurar, y Arduino había proporcionado una función de impresión serial muy fácil de usar.

```cpp
void setup()
{
    Serial.begin(115200);

    Serial.println("hello world");
}

void loop()
{
    // add code here
}
```
Además, está Serial.print, Serial.write y así sucesivamente. Cuando te familiarices con estas funciones, encontrarás que estas funciones no son tan amigables en realidad, solo echa un vistazo al siguiente código:

```cpp
void setup()
{
    Serial.begin(115200);

    Serial.print("a[");
    Serial.print(3);
    Serial.print("] = ");
    Serial.println(5);

}

void loop()
{
    // add code here
}
```

Para imprimir a[3]=5, puede tomar 4 líneas de código, ¿problemático? Recuerda las lecciones del lenguaje C, solo toma una línea de código:

```cpp
printf("a[%d] = %d", 3, 5);
```

En cuanto a C++, una línea también es suficiente:


```cpp
cout << "a[" << 3 << "] = " << 5 << endl;
```

Me alegraría que si Arduino tiene la función como printf o cout, es realmente conveniente. Es afortunado que alguien había escrito tal biblioteca, puedes consultar [http://arduiniana.org/libraries/streaming/](http://arduiniana.org/libraries/streaming/)
Hice algunos pequeños cambios a esta biblioteca, puedes descargar aquí: [https://github.com/loovee/Streaming](https://github.com/loovee/Streaming) , ¿por qué no intentarlo?

##   Recursos

- [descargar archivo pdf](https://files.seeedstudio.com/wiki/A_Handy_Serial_Library/res/A_handy_Serial_library.pdf)

## Soporte Técnico y Discusión de Productos
¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>