---
description: Solar Charger Shield V2.2
title: Solar Charger Shield V2.2

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Solar_Charger_Shield_V2.2
last_update:
  date: 01/11/2023  
  author: Eico 

no_comments: false # for Disqus

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/img/Solar_Charger_Shield_v2.2.jpg" alt="pir" width={600} height="auto" /></p>

El cargador solar es un shield apilable para plataformas compatibles con Arduino, que permite alimentación adaptativa de batería y actúa como recolector de energía para carga en campo. Puedes usar varias baterías que tengan un voltaje de 3.0V-4.2V para elevar a una salida de 5V, o colocar una batería de Li-ion y un panel solar para formar una unidad de sensor autónoma. La corriente máxima proporcionada por la placa puede llegar hasta 600mA. Un conector USB también es útil para cargar la batería.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Solar-Charger-Shield-v2.2-p-2391.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

---

* Protección contra cortocircuitos

* Potencia de salida de 3W al conectar batería

* Corriente de carga continua hasta 900mA

* Indicación del estado de la batería (Rojo: Cargando, Verde: Cargada)

* Conector Micro-USB

## Especificaciones

---

* Voltaje de entrada de batería: 3.0~4.5V

* Voltaje de entrada USB: 4.75~5.25V

* Voltaje de entrada solar: 4.8~6V

* Potencia máxima de salida (con batería): 3W(600mA@5V)

* Voltaje de rizado: &lt;100mV @ 500mA

* Dimensiones: 68*53mm

## Aplicaciones

---

* Unidad de sensor inalámbrico
* Carga solar
* Tweet-a-volt-arduino

## Información sobre el uso de paneles solares para carga

---

1) El shield cargador solar produce cargas bajo la luz solar y la luz de bombillas de filamento. Su función es más efectiva en la primera que en la segunda. Los paneles solares requieren radiaciones invisibles, específicamente radiaciones ultravioleta e infrarroja para producir corriente.

2) Para probar el sistema bajo bombilla de filamento, mantén el panel solar a una distancia menor a 20cm (&lt; 0.5 pies). Sin embargo, la carga puede no ser efectiva bajo bombillas de filamento.

3) Coloca el panel solar en un ángulo tal que la máxima cantidad de luz solar incida sobre él.

4) Protege el panel solar de la exposición excesiva al agua/vapores de agua. Esto puede oxidar la superficie del panel solar y reducir su rendimiento.

5) El panel solar generalmente viene con una lámina protectora transparente. Retira la lámina plástica transparente para un mejor rendimiento del panel solar.

6) Protege la superficie del panel solar de rayones

## Precaución

---

1) El shield cargador solar está diseñado para proteger cualquier cortocircuito potencial. Sin embargo, se debe tener cuidado para evitar tales situaciones.

2) El shield solar no debe operarse a voltajes mayores a 5V

## Uso

---

1) Conecta el panel solar y la batería Li-Pol en sus lugares designados como se muestra en la figura a continuación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/img/Solar_Charger_Shield_v2.2_inputs.jpg" alt="pir" width={600} height="auto" /></p>

Solar_Charger_Shield_v2.2_inputs.jpg

2) Coloca el panel solar bajo luz solar o bombillas de filamento como se menciona en la sección "Información para usar paneles solares"

3) Asegúrate de que la luz de carga (Roja) se encienda como se muestra en la figura a continuación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/img/Solar_Charger_Shield_v2.2_charging.jpg" alt="pir" width={600} height="auto" /></p>

4) Cuando la batería esté completamente cargada, la luz verde se enciende.

5) Luego puedes montar el shield en el arduino. Al encender el shield cargador solar, debería encender el arduino como se muestra en la figura a continuación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/img/Solar-Charger-Shield-v2.2_power-arduino.jpg" alt="pir" width={600} height="auto" /></p>

## Probando el escudo solar con un programa simple de Arduino

---
Esta sección te enseñará cómo medir el voltaje de la batería Lipo.

Para conectar el pin VBAT al pin analógico A0, de modo que podamos leer los datos del pin A0, necesitamos cortocircuitar R7 usando una resistencia de 0ohm como se muestra en la figura

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/img/Solar_Charger_Shield_v2.2_shortR7.jpg" alt="pir" width={600} height="auto" /></p>

### Ejemplo de Programación

Puedes medir el voltaje de la batería usando el siguiente ejemplo:

```cpp
/*
 Solar charger shield voltage measurement example. Connect VBAT pin to analog pin A0.

 The pin measures 2.0 V when not under direct exposre to sunlight and 5V when exposed to sunlight.

 This example code is in the public domain.

 */

// These constants won't change.  They're used to give names
// to the pins used:
const int analogInPin = A0;  // Analog input pin that the VBAT pin is attached to


int BatteryValue = 0;        // value read from the VBAT pin
float outputValue = 0;        // variable for voltage calculation

void setup() {
    // initialize serial communications at 9600 bps:
    Serial.begin(9600);
}

void loop() {
    // read the analog in value:
    BatteryValue = analogRead(analogInPin);
    // Calculate the battery voltage value
    outputValue = (float(BatteryValue)*5)/1023*2;
    // print the results to the serial monitor:
    Serial.print("Analog value = " );
    Serial.print(BatteryValue);
    Serial.print("\t voltage = ");
    Serial.println(outputValue);
    Serial.println("V \n");

    // wait 10 milliseconds before the next loop
    // for the analog-to-digital converter to settle
    // after the last reading:
    delay(10);
}
```

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/res/Solar_Charger_Shield_v2.2_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---
* [Solar Charger Shield v2.2 sch&amp;pcb](https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/res/Solar_Charger_Shield_v2.2_sch_pcb.zip)

* [Solar Charger Shield v2.2.pdf](https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/res/Solar%20Charger%20Shield%20v2.2.pdf)
* [DSE-CN3065.pdf](https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/res/DSE-CN3065.pdf)

* [ETA1036.pdf](https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/res/ETA1036.pdf)

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
