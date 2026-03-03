---
description: Xadow - Motor Vibrador
title: Xadow - Motor Vibrador
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Xadow_Vibrator_Motor
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Xadow_Vibrator_Motor/img/Vibration_Motor_01.jpg)

Este pequeño motor vibrador puede vibrar como tu teléfono. Al usarlo, solo necesitas alimentar el módulo y luego enviar el comando "Vibración". De hecho, el comando "Vibración" consiste en establecer los pines de control a nivel alto, entonces funcionará. Me gusta este módulo porque puede crear una sacudida de corta duración para indicarme si una operación fue exitosa, como sacudir mi brazo para cambiar las canciones de mi iPhone, lo cual suena terrible, pero no es como el zumbador.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Vibration-Motor-p-1517.html)


##  Especificaciones
---
*   voltaje de funcionamiento: 3.3V

*   Velocidad Nominal: 9000rpm

*   controlado por dos señales digitales

*   Dimensiones: 25.43mm x 20.35mm

##  Demostración
---
Aquí hay un Código de Demostración que muestra cómo encender el motor de vibración.

**Instalación de Hardware: **

![](https://files.seeedstudio.com/wiki/Xadow_Vibrator_Motor/img/XadowVibration.jpg)

Nota: cuando conectes el Motor Vibrador Xadow a la Placa Principal Xadow, debes preocuparte por la dirección de conexión. El método de conexión es que la esquina no rellena de un módulo Xadow necesita conectarse al ángulo recto de otro módulo (ver las cuatro esquinas de cada módulo Xadow).
Código de demostración como este:
```
<pre>
void setup()
{
    DDRF |= 0x01;
    DDRB |= 0x04;
}

void loop()
{
    //turn on the vibration motor
    PORTF |= 0x01;
    PORTB |= 0x04;
    delay(1000);
    //turn off the vibration motor
    PORTF &= ~(0x01);
    PORTB |= 0x04;
    delay(1000);
    //turn on the vibration motor
    PORTF |= 0x01;
    PORTB |= 0x04;
    delay(1000);
    //turn off the vibration motor
    PORTF |= 0x01;
    PORTB &= ~(0x04);
    delay(1000);
    //turn on the vibration motor
    PORTF |= 0x01;
    PORTB |= 0x04;
    delay(1000);
    //turn off the vibration motor
    PORTF &= ~(0x01);
    PORTB &= ~(0x04);
    delay(1000);
}</pre>
```


## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Vibrator_Motor/res/Xadow_Vibrator.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


##  Recursos
---
[Archivo Eagle del Motor Vibrador Xadow](https://files.seeedstudio.com/wiki/Xadow_Vibrator_Motor/res/Xadow_Vibrator.zip)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>