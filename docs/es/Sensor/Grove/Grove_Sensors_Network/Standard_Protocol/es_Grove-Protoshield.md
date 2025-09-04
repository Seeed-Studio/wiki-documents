---
title: Grove - Protoshield
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-Protoshield.md/
slug: /es/Grove-Protoshield
last_update:
  date: 01/06/2022
  author: gunengyu
---
![](https://files.seeedstudio.com/wiki/Grove-Protoshield/img/Proto1.jpg)

Este Grove te permite añadir tu propia circuitería o componentes a los prototipos de tu sistema Grove. Te da acceso a las cuatro líneas del cable conector grove: S0, S1, VCC y GND. También hay un espacio reservado para un botón normalmente abierto. El espaciado estándar de 2.54mm facilita la instalación de ICs en formato DIP normal y otros componentes en la placa.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Protoshield-p-772.html)

## Características

---

* Interfaz Grove estandarizada
* Estilo breadboard
* Espaciados estándar
* Etiquetas de serigrafía
* Espacio reservado para botón normalmente abierto

## Interfaz

---
![](https://files.seeedstudio.com/wiki/Grove-Protoshield/img/Grove-Protoshield_Interface_1.jpg)

VCC y GND de la interfaz Grove están enrutados como dos buses como se muestra arriba. Puedes encontrar las almohadillas de soldadura de Sig0 y Sig1 entre los dos buses de alimentación.

## Uso

---
VCC y GND de la interfaz Grove están enrutados como dos buses como se muestra arriba. Puedes encontrar las almohadillas de soldadura de Sig0 y Sig1 entre los dos buses de alimentación. Están marcadas con líneas blancas.
El área cuadrada de la derecha es para un botón temporal ubicuo, puedes encajarlo fácilmente como se muestra a continuación.

![](https://files.seeedstudio.com/wiki/Grove-Protoshield/img/Protoshield1.jpg)

También el protoshield se envía con dos conectores macho de 20 pines. Puedes romperlos en piezas más pequeñas y soldarlos al protoshield cuando necesites extensión en otra breadboard o protoboard. Funcionan bien con jumpers de breadboard normales.

![](https://files.seeedstudio.com/wiki/Grove-Protoshield/img/Protoshield2.jpg)

**Demo: Encender LED**

1. Inserta el pin más largo del LED en la interfaz VCC y el pin más corto en la interfaz Sig0.

2. Solda el LED en el Protoshield.

![](https://files.seeedstudio.com/wiki/Grove-Protoshield/img/Proshield3.jpg)

3. Conecta el módulo al Digital 8 del Grove - Basic Shield usando el cable grove de 4 pines.

4. Conecta el Grove - Basic Shield al Arduino y conecta el Arduino a la PC usando un cable USB.

5. Copia y pega el código de abajo en un nuevo sketch de Arduino. Por favor haz clic [aquí](https://wiki.seeedstudio.com/es/Upload_Code) si no sabes cómo subir código.

```
Demo code:
int led = 8;

// the setup routine runs once when you press reset:
void setup() {
    // initialize the digital pin as an output.
    pinMode(led, OUTPUT);
}

// the loop routine runs over and over again forever:
void loop() {
    digitalWrite(led, HIGH);   // turn the LED on (HIGH is the voltage level)
    delay(1000);               // wait for a second
    digitalWrite(led, LOW);    // turn the LED off by making the voltage LOW
    delay(1000);               // wait for a second
}
```

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Protoshield/res/Grove-Protoshield_v1.0_Source_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---
* [Grove_-_Protoshield Eagle File](https://files.seeedstudio.com/wiki/Grove-Protoshield/res/Grove-Protoshield_v1.0_Source_File.zip)

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