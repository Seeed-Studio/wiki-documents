---
title: Grove - EL Driver
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-EL_Driver/
slug: /es/Grove-EL_Driver
last_update:
  date: 01/09/2022
  author: gunengyu
---
![](https://files.seeedstudio.com/wiki/Grove-EL_Driver/img/Grove-EL_Driver.jpg)

Grove - EL Driver está diseñado para controlar cables EL. Integra un inversor muy pequeño para controlar el cable EL, por lo que puedes encender fácilmente el cable EL con solo un cable Grove.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-EL-Driver-p-2269.html)

Seguimiento de Versiones
------------------------

| Revisión | Descripciones                | Lanzamiento  |
|----------|------------------------------|--------------|
| v1.0     | Lanzamiento público inicial  | 11 Dic 2014  |

#### **Cables EL Compatibles:**

- [Cable EL-Verde 3m](https://www.seeedstudio.com/depot/EL-WireGreen-3m-p-1102.html)
- [Cable EL-Rojo 3m](https://www.seeedstudio.com/depot/EL-WireRed-3m-p-1129.html)
- [Cable EL-Azul 3m](https://www.seeedstudio.com/depot/EL-WireBlue-3m-p-1128.html)
- [Cable EL-Amarillo 3m](https://www.seeedstudio.com/depot/EL-WireYellow-3m-p-1127.html)
- [Cable EL-Blanco 3m](https://www.seeedstudio.com/depot/EL-WireWhite-3m-p-1130.html)

Características
---------------

- Interfaz compatible con Grove
- Compatible con 3.3V/5V
- Transformador Inversor Integrado
- Corriente de Entrada: 300mA Máx (Según la carga)
- Capacitancia EL máxima soportada: 15nF

:::tip
    Para más detalles sobre los módulos Grove, consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

Uso
---

### Jugar con Arduino

Aquí mostramos cómo usar Arduino para controlar el estado del LED.

1. Conecta el Grove - EL Driver al **puerto digital 2** del Base Shield con el cable Grove de 4 pines. Por supuesto, puedes cambiar a otros puertos digitales válidos si es necesario y las definiciones del puerto también deben cambiarse. Conecta un cable EL al puerto **J1** del EL Driver con el cable proporcionado en el paquete del producto.

2. Conéctalo al Arduino/Seeeduino. Conecta la placa a la PC usando el cable USB.

3. Copia el código de demostración a tu sketch, luego súbelo a la placa Arduino o Seeeduino. Verás el cable EL parpadear cada segundo.

```
/*************************   2014 Seeedstudio   **************************
* File Name          : GroveELDriverDemoCode.ino
* Author             : Seeedteam
* Version            : V1.0
* Date               : 11/12/2014
* Description        : Demo code for Grove - EL Driver
*************************************************************************/
 
#define ELPin 2 //connect EL Driver to digital pin2
void setup() {                
  // initialize the digital pin2 as an output.
  pinMode(ELPin, OUTPUT);     
}
 
void loop() {
  digitalWrite(ELPin, HIGH);   // set the EL Wire on
  delay(500);               // for 500ms
  digitalWrite(ELPin, LOW);   // set the EL Wire off
  delay(500);
}
```

![](https://files.seeedstudio.com/wiki/Grove-EL_Driver/img/Grove-EL_Driver_usage.jpg)

### Jugar con Codecraft

#### Hardware

**Paso 1.** Conecta Grove - EL Driver al puerto D2 en un Base Shield

**Paso 2.** Conecta el Base Shield a tu Seeeduino/Arduino.

**Paso 3.** Conecta Seeeduino/Arduino a tu PC mediante un cable USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), añade soporte para Arduino, y arrastra un procedimiento principal al área de trabajo.

:::note
    Si esta es tu primera vez usando Codecraft, consulta también [Guía para Codecraft usando Arduino](https://wiki.seeedstudio.com/es/Guide_for_Codecraft_using_Arduino/).
:::

**Paso 2.** Arrastra bloques como en la imagen de abajo o abre el archivo cdc que se puede descargar al final de esta página.

![](https://files.seeedstudio.com/wiki/Grove-EL_Driver/img/EL_Driver.png)

Sube el programa a tu Arduino/Seeeduino.

:::tip
    Cuando el código termine de subirse, verás el EL parpadeando.
:::

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-EL_Driver/res/Grove-EL_Driver_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
--------

- [sch_pcb_eagle](https://files.seeedstudio.com/wiki/Grove-EL_Driver/res/Grove-EL_Driver_v1.0.zip)
- [sch_pdf](https://files.seeedstudio.com/wiki/Grove-EL_Driver/res/Grove-EL_Driver_v1.0.pdf)
- [Librería CodeCraft](https://files.seeedstudio.com/wiki/Grove-EL_Driver/res/EL%20Driver.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_EL_Driver -->

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>