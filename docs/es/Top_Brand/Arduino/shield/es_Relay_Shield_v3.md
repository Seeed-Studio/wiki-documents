---
description: Relay_Shield_v3
title: Relay Shield v3

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Relay_Shield_v3
last_update:
  date: 01/11/2023  
  author: Eico 

no_comments: false # for Disqus

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/img/Relay_Shield_L_v3.0.jpg" alt="pir" width={600} height="auto" /></p>

El Relay Shield proporciona una solución para controlar dispositivos de alta corriente que no pueden ser controlados por los pines de E/S digitales de Arduino debido a las limitaciones de corriente y voltaje.

El Relay Shield cuenta con cuatro relés de alta calidad y proporciona interfaces NO/NC, cuatro indicadores LED dinámicos para mostrar el estado encendido/apagado de cada relé, y el factor de forma de shield estandarizado para proporcionar una conexión fluida a la placa Arduino/Seeeduino u otras placas compatibles con Arduino.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Relay-Shield-v3.0-p-2440.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

---

- Compatible con Arduino Uno/Leonardo/Seeeduino; Otras placas o microcontroladores mediante cables puente
- Interfaz a través de pines de E/S digitales 4, 5, 6 y 7
- Terminales de tornillo para relés
- Forma y diseño de shield estandarizado
- Indicadores LED de estado de funcionamiento para cada relé
- Relés de alta calidad
- Pines de relé COM, NO (Normalmente Abierto) y NC (Normalmente Cerrado) para cada relé
- Actualización de pines SCL, SDA, IOREF, NC.

## Especificaciones

<table align="center">
  <tbody>
  <tr>
    <td><h3>Elemento</h3></td>
    <td><h3>Mín</h3></td>
    <td><h3>Típico</h3></td>
    <td><h3>Máx</h3></td>
    <td><h3>Unidad</h3></td>
  </tr>
  <tr>
    <td><h4>Voltaje de Alimentación</h4></td>
    <td><h4>4.75</h4></td>
    <td><h4>5</h4></td>
    <td><h4>5.25</h4></td>
    <td><h4>VDC</h4></td>
  </tr>
  <tr>
    <td><h4>Corriente de Trabajo</h4></td>
    <td><h4>8</h4></td>
    <td><h4>-</h4></td>
    <td><h4>250</h4></td>
    <td><h4>mA</h4></td>
  </tr>  
  <tr>
    <td><h4>Voltaje de Conmutación</h4></td>
    <td><h4>-</h4></td>
    <td><h4>-</h4></td>
    <td><h4>30</h4></td>
    <td><h4>VDC</h4></td>
  </tr>
    <tr>
    <td><h4>Corriente de Conmutación</h4></td>
    <td><h4>-</h4></td>
    <td><h4>-</h4></td>
    <td><h4>8</h4></td>
    <td><h4>A</h4></td>
  </tr>
    <tr>
    <td><h4>Frecuencia</h4></td>
    <td><h4>-</h4></td>
    <td><h4>1</h4></td>
    <td><h4>-</h4></td>
    <td><h4>HZ</h4></td>
  </tr>
    <tr>
    <td><h4>Potencia de Conmutación</h4></td>
    <td><h4>-</h4></td>
    <td><h4>-</h4></td>
    <td><h4>70</h4></td>
    <td><h4>W</h4></td>
  </tr>
    <tr>
    <td><h4>Vida Útil del Relé</h4></td>
    <td><h4>100000</h4></td>
    <td><h4>-</h4></td>
    <td><h4>-</h4></td>
    <td><h4>Ciclos</h4></td>
  </tr>
    <tr>
    <td><h4>Descarga por contacto ESD</h4></td>
    <td><h4>-</h4></td>
    <td><h4>±4</h4></td>
    <td><h4>-</h4></td>
    <td><h4>KV</h4></td>
  </tr>
    <tr>
    <td><h4>Descarga por aire ESD</h4></td>
    <td><h4>-</h4></td>
    <td><h4>±8</h4></td>
    <td><h4>-</h4></td>
    <td><h4>KV</h4></td>
  </tr>
    <tr>
    <td><h4>Dimensiones</h4></td>
    <td><h4>-</h4></td>
    <td><h4>68.7X53.5X30.8</h4></td>
    <td><h4>-</h4></td>
    <td><h4>mm</h4></td>
  </tr>
    <tr>
    <td><h4>Peso Neto</h4></td>
    <td><h4>-</h4></td>
    <td><h4>55±2</h4></td>
    <td><h4>-</h4></td>
    <td><h4>g</h4></td>
  </tr>
  </tbody></table>

:::caution

1. Por favor, coloca 2 capas de cinta aislante en la parte superior del conector USB del Arduino. Esto evitará que el shield de relé haga contacto.
2. No operes con voltaje superior a 35V DC.
:::

## Descripción de la Interfaz del Shield

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/img/Relay_Shield_v3.0.png" alt="pir" width={600} height="auto" /></p>

- Digital 4 – controla el pin COM4 del RELAY4 (ubicado en J4)
- Digital 5 – controla el pin COM3 del RELAY3 (ubicado en J3)
- Digital 6 – controla el pin COM2 del RELAY2 (ubicado en J2)
- Digital 7 – controla el pin COM1 del RELAY1 (ubicado en J1)

**Descripción de los Pines de la Interfaz/Terminal J1:**

- **COM1 (Pin Común)** : El pin del relé controlado desde el pin digital.

- **NC1 (Normalmente Cerrado)**: Este terminal estará conectado a COM1 cuando el pin de control del RELAY1 (pin I/O Digital 7) esté en bajo y desconectado cuando el pin de control del RELAY1 esté en alto.

- **NO1 (Normalmente Abierto)**: Este terminal estará conectado a COM1 cuando el pin de control del RELAY1 (pin I/O Digital 7) esté en alto y desconectado cuando el pin de control del RELAY1 esté en bajo.

**Los terminales J2-4 son similares a J1 excepto que controlan RELAY2-RELAY4 respectivamente.**

:::note
Solo se requieren cuatro pines I/O Digitales de Arduino, pines 4-7, para controlar los cuatro relés diferentes. Adicionalmente, también se requieren los pines de 5V y dos GND de Arduino para alimentar el Shield de Relé.
:::

## Operación/Tutorial de Relés

---
Los relés son básicamente interruptores electromagnéticos: cuando el relé es energizado por el circuito de control (es decir, cuando se aplica un voltaje y corriente a la bobina), la corriente y la bobina crean un campo magnético que es capaz de atraer el terminal COM hacia el terminal NO, cuando el circuito de control remueve el voltaje y corriente aplicados, el terminal COM regresa a hacer contacto con el terminal NC debido a una fuerza mecánica (usualmente un resorte).

Algunas aplicaciones prácticas de relés incluyen: control de alto voltaje usando bajo voltaje, control de motores, control remoto, alarma anti-audición, alarma automática de temperatura, incubadoras y demás.

Una aplicación de control de motor con un relé y un motor se muestra a continuación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/img/Low_Level_Control4.jpg" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/img/High_Level_Control3.jpg" alt="pir" width={600} height="auto" /></p>

En el caso del Shield de Relé, los dos terminales del "Circuito de Control" para cada uno de los cuatro relés son controlados por solo un pin I/O Digital de Arduino. Los pines 4, 5, 6, y 7 controlan los relés 4, 3, 2, y 1 respectivamente.

## Ejemplo(s)/Uso del Shield de Relé

Ahora que sabes cómo funciona un relé internamente, permítenos mostrarte cómo usar el Shield de Relé.

**Ejemplo #1: Control de Motor DC**

1.Apila el Shield de Relé sobre la placa de desarrollo Arduino.

2.Conecta Arduino a tu PC usando un cable USB.

3.Usaremos RELAY3 para controlar el motor DC. Conecta el motor DC y el Shield de Relé como se muestra en el esquemático y figura a continuación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/img/Motor-shield-schematic-drawing.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/img/Relay_Shield_Connector.jpg" alt="pir" width={600} height="auto" /></p>

:::note
La fuente de alimentación externa en la figura anterior puede ser una batería o fuente de alimentación. La fuente externa debe ser capaz de proporcionar suficiente corriente y estar configurada al voltaje correcto para el motor. En nuestras pruebas, usamos una batería de litio como fuente de alimentación externa para el motor.
:::

4.Inicia el IDE de Arduino y sube el siguiente código a la placa Arduino:

```cpp
int MotorControl = 5;    // Digital Arduino Pin used to control the motor

// the setup routine runs once when you press reset:
void setup()  {
  // declare pin 5 to be an output:
  pinMode(MotorControl, OUTPUT);
}

// the loop routine runs over and over again forever:
void loop()  {
  digitalWrite(MotorControl,HIGH);// NO3 and COM3 Connected (the motor is running)
  delay(1000); // wait 1000 milliseconds (1 second)
  digitalWrite(MotorControl,LOW);// NO3 and COM3 Disconnected (the motor is not running)
  delay(1000); // wait 1000 milliseconds (1 second)
}
```

Cuando hayas subido el código a tu placa Arduino/Seeeduino, el motor debería funcionar durante un segundo, detenerse por otro segundo y repetir el proceso indefinidamente. Cuando el motor esté funcionando (NO3 y COM3 están conectados), el indicador LED NO3 se encenderá.

**Ejemplo #2: Cómo Usar Más de un Relay Shield con Solo una Placa Arduino/Seeeduino**

Debido a que el Relay Shield usa pines digitales en el Arduino para controlar cada uno de los relés, se puede usar más de un Relay Shield con la misma placa Arduino, para hacerlo simplemente sigue estos pasos:

1.Apila uno de los Relay Shields (llamémoslo Relay Shield #1) sobre la placa de desarrollo Arduino

2.Conecta otro Relay Shield (llamémoslo Relay Shield #2) usando cables puente/cables al Relay Shield #1 como se muestra en la figura a continuación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/img/Two-relay-shields-one-arduino.png" alt="pir" width={600} height="auto" /></p>

- El pin GND del Relay Shield #1 está conectado al pin GND del Relay Shield #2
- El pin 5V del Relay Shield #1 está conectado al pin 5V del Relay Shield #2
- Los Pines Digitales 8, 9, 10 y 11 del Relay Shield #1, están conectados a los Pines Digitales 7, 6, 5 y 4 del Relay Shield #2 respectivamente.

3.Ahora puedes controlar los relés 1, 2, 3 y 4 en el Relay Shield #2 usando los pines de E/S digitales 8, 9, 10 y 11 del Arduino. Ve el código de ejemplo a continuación para controlar RELAY1 en el Relay Shield #2:

```cpp
int relay1inShield2 = 8;    // Digital Arduino Pin 8 is used to control relay 1 in Relay Shield #2

// the setup routine runs once when you press reset:
void setup()  {
  // declare pin 8 to be an output:
  pinMode(relay1inShield2, OUTPUT);
}

// the loop routine runs over and over again forever:
void loop()  {
  digitalWrite(relay1inShield2,HIGH); // relay is energized (NO is connected to COM)
  delay(1000); // wait 1000 milliseconds (1 second)
  digitalWrite(relay1inShield2,LOW); // NO is disconnected from COM
  delay(1000); // wait 1000 milliseconds (1 second)
}
```

## Lectura Relacionada

---

- [FAQ del Relay Shield](http://support.seeedstudio.com/knowledgebase/articles/462030-relay-shield-sku-sld01101p)

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/res/Relay_Shield_v3.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

- [Relay Shield v3.0](https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/res/Relay_Shield_v3.0.zip)

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
