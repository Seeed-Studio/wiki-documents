---
title: Sensor de Peso (Celda de Carga) 0-500g
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Weight_Sensor_Load_Cell_0-500g/
slug: /es/Weight_Sensor_Load_Cell_0-500g
last_update:
  date: 02/03/2022
  author: gunengyu
---
![](https://files.seeedstudio.com/wiki/Weight_Sensor_Load_Cell_0-500g/img/loadcell500.jpg)


Aplicable a báscula electrónica, báscula computadora de precios, báscula de plataforma electrónica, báscula digital; báscula de paquetería postal, balanza electrónica y todas las variedades de básculas comerciales con celda de carga única.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/weight-sensor-load-cell-0500g-p-525.html?cPath=144_150)

##   Especificaciones
---
*   capacidad g 500g

*   Sensibilidad de salida mv/v 0.5±0.1

*   No linealidad %.F.S 0.05

*   Histéresis %F.S 0.05

*   Repetibilidad %F.S 0.05

*   Fluencia(30min) %.F.S 0.05

*   Efecto de temperatura en sensibilidad %F.S/10℃ 0.05

*   Efecto de temperatura en cero %F.S/10℃ 0.05

*   Balance de cero %F.S ±0.5

*   Resistencia de entrada Ω(ohmios) 1120±10

*   Resistencia de salida Ω(ohmios) 1000±10

*   Resistencia de aislamiento MΩ(ohmios) ≥2000

*   Voltaje de excitación recomendado v 5v

*   Método de conexión de cables rojo： Exc + negro： Exc –

*   verde： Sig + blanco：Sig -

##   Uso
---
###  **Instalación de hardware**

![](https://files.seeedstudio.com/wiki/Weight_Sensor_Load_Cell_0-500g/img/Weight_Sensor.png)

**Nota**: El sensor de peso emite 0V cuando la carga es menor a 150g, por lo que no podemos medir directamente la carga. Mi método es usar una carga local de 200g para evitar el punto ciego de medición. Leer los datos analógicos de peso de 200g como sin carga (0g), leer los datos analógicos de peso de 700g como carga completa (500g).

###  **Programación**
```
void setup()
{
    Serial.begin(9600);
}

void loop()
{
    int value;
    value = analogRead(0);
    Serial.println(value);
}
```

###   enlace externo

[Cómo usar con Arduino](http://cerulean.dk/words/?page_id=42).

##   Fuente
---
- [Hoja de datos INA125](https://files.seeedstudio.com/wiki/Weight_Sensor_Load_Cell_0-500g/res/INA125.pdf)

## Soporte Técnico y Discusión de Productos
 si tienes algún problema técnico. envía el problema a nuestro [foro](http://forum.seeedstudio.com/). 
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>