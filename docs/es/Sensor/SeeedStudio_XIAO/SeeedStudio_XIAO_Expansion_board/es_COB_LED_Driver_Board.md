---
description: Controlador de iluminación XIAO:alimentado por Li-Po, 3 interruptores + 4 PWMs, controla filamentos COB de 3V—ilumina miniaturas, dioramas, wearables.
title: Placa Controladora de LED COB para XIAO
image: https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/first_COB-LED-Driver-Board-for-Seeed-Studio-XIAO.webp
slug: /es/getting_started_with_cob_led_dirver_board
last_update:
  date: 11/27/2025
  author: Brandy
---
# Introducción a la Placa Controladora de LED COB para Seeed Studio XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/first.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/COB-LED-Driver-Board-for-Seeed-Studio-XIAO-p-6602.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div><br />

Esta es una base controladora de LED COB de 7 canales diseñada para Seeed Studio XIAO. Esta placa de expansión supera las limitaciones de potencia GPIO, ofreciendo 7 canales de salida, específicamente adaptada para tiras LED COB ultra-estrechas de 1mm y 3V. Con gestión integrada de batería PMIC, es la solución plug-and-play ideal para construir configuraciones de iluminación inalámbrica compactas y de alto brillo.

 **Lectura Recomendada:**[Notas de Seguridad](#add-board)

## Introducción

### Características

- **Adaptado para Tiras LED COB de 1mm y 3V** 

  La limitación de corriente por hardware integrada está específicamente ajustada para coincidir con las características eléctricas de las tiras COB flexibles de 3V y 1mm. Los límites de corriente escalonados de 300mA y 100mA controlan efectivamente tiras de varias longitudes, proporcionando a los Makers una experiencia segura, estable y plug-and-play.

- **Salida Híbrida Estratégica de 7 Canales** 

  Gestiona eficientemente toda tu configuración de iluminación con una sola placa. Cuenta con 3 Canales de Alta Potencia (300mA) para iluminación principal brillante y 4 Canales Regulables (80mA) para efectos delicados de respiración o desvanecimiento. Una placa lo maneja todo—mantiene tus luces principales brillantes y tus efectos dinámicos.

- **Gestión de Batería para Proyectos Inalámbricos** 

  El circuito de alimentación integrado soporta baterías Li-Po de 3.7V o adaptadores USB de alta potencia de 5V. Perfecto para construir tanto instalaciones inalámbricas como iluminación ambiental de escritorio de alto brillo.

- **Expansión de Sensores Fácil** 

  Incluye un conector Grove I2C estándar para conexión sin complicaciones a sensores, permitiendo que tus proyectos de iluminación reaccionen inteligentemente al entorno.

  ### Especificaciones
<table className="spec-table">
  <tbody>
    <tr>
      <th>Soporte de Potencia LED</th>
      <td>DC 3V</td>
    </tr>
    <tr>
      <th>Entrada de Alimentación</th>
      <td>
        5V USB (vía XIAO)<br/>
        <small>Nota: Se recomienda un adaptador de pared de 5V/2A+ para operación a carga completa.</small><br/>
        Batería Li-Po de 3.7V (vía Puerto de Batería integrado)
      </td>
    </tr>
    <tr>
      <th>3× Puertos de Alta Potencia<br/>(Terminales de Tornillo)</th>
      <td>
        Salida de 3 Canales<br/>
        Capacidad de Control: Máx 300mA/canal<br/>
        Lógica de Control: 1× Siempre Encendido + 2× Interruptor GPIO (D0, D1)<br/>
        <small>Nota: Solo Interruptor Encendido/Apagado, SIN Soporte PWM</small>
      </td>
    </tr>
    <tr>
      <th>4× Puertos FX/PWM<br/>(Pads Inferiores)</th>
      <td>
        Salida de 4 Canales<br/>
        Capacidad de Control: Máx 80mA/canal<br/>
        Lógica de Control: Completamente Regulable (PWM) vía D2, D3, D8, D9<br/>
        <small>Nota: Lógica LOW activa</small>
      </td>
    </tr>
    <tr>
      <th>Integrado</th>
      <td>
        Conector Grove I²C ×1<br/>
        Interruptor de Alimentación ×1<br/>
        LED de Alimentación ×1<br/>
        Conector de Batería ×1
      </td>
    </tr>
    <tr>
      <th>Dimensiones</th>
      <td>`30mm*41mm*16mm` (Con un Seeed Studio XIAO)</td>
    </tr>
  </tbody>
</table>

### Descripción del Hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/IO.png" style={{width:1000, height:'auto'}}/></div>

- **(1) Puerto de Alta Potencia D1:** Un puerto de alta potencia que soporta una corriente máxima de 300mA, solo permite control de interruptor ON/OFF (no se soporta regulación PWM), y se usa para conectar cargas de alta potencia.
- **(2) Puerto de Alta Potencia D0:** Un puerto de alta potencia que soporta una corriente máxima de 300mA, solo permite control de interruptor ON/OFF (no se soporta regulación PWM), y se usa para conectar cargas de alta potencia.
- **(3) Puerto Siempre Encendido VCC:** Un puerto VCC siempre alimentado que soporta una corriente máxima de 300mA, no está controlado por el interruptor de alimentación, siempre emite el voltaje de suministro, y puede alimentar dispositivos que requieren energía continua.
- **(4) GND:** El puerto de tierra común del circuito, usado para conectar los cables de tierra de todos los módulos.
- **(5) Puerto Grove I²C:** Una interfaz I²C estándar Grove (incluyendo pines VCC, GND, SDA, SCL), usada para conectar módulos Grove que soportan el protocolo I²C (como sensores, pantallas).
- **(6) Interruptor de Alimentación:** Un interruptor de control de alimentación; cuando se cambia a "ON", suministra energía a los puertos de alta/baja potencia; cuando se cambia a "OFF", corta la alimentación (el puerto siempre encendido VCC no está controlado por este interruptor).
- **(7) LED de Alimentación:** Una luz indicadora de estado de alimentación que se enciende cuando el interruptor de alimentación se cambia a "ON", indicando que el módulo está alimentado.
- **(8) Conector de Batería:** Una interfaz de batería que soporta conexión de baterías de litio de 3.7V para alimentar el módulo.
- **(9) Puerto de Baja Potencia D2:** Un puerto de baja potencia que soporta una corriente máxima de 80mA, soporta regulación PWM, y usa lógica LOW activa (la carga opera cuando el nivel es bajo).
- **(10) GND:** Un puerto de tierra en el área de baja potencia, usado para conectar los cables de tierra de cargas de baja potencia.
- **(11) Puerto de Baja Potencia D3:** Un puerto de baja potencia que soporta una corriente máxima de 80mA, soporta regulación PWM, y usa lógica LOW activa (la carga opera cuando el nivel es bajo).
- **(12) Puerto de Baja Potencia D9:** Un puerto de baja potencia que soporta una corriente máxima de 80mA, soporta regulación PWM, y usa lógica LOW activa (la carga opera cuando el nivel es bajo).
- **(13) Puerto de Baja Potencia D8:** Un puerto de baja potencia que soporta una corriente máxima de 80mA, soporta regulación PWM, y usa lógica LOW activa (la carga opera cuando el nivel es bajo).

#### Guía de LEDs COB Compatibles
#### Guía de LEDs Compatibles

<div class="table-center">
 <table style={{textAlign:'center'}}>
  <tr>
    <th>Producto</th>
    <th>Nombre</th>
    <th>Longitud</th>
    <th>Corriente de Operación</th>
     <th>  Flujo Luminoso</th>
  </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/1-100052952-Double-Ended-COB-LED-Strip---White(6500K)-38mm.jpg" style={{width:150, height:'auto'}}/></td>
      <td><a href="https://www.seeedstudio.com/Double-Ended-COB-LED-Strip-White-6500K-38mm-10PCS-p-6592.html">Tira LED COB de Doble Extremo - Blanco(6500K)</a></td>
      <td>38mm</td>
      <td>100mA (Recomendado)</td>
       <td>  &gt;20 lm (@ 100mA)</td>
  </tr>
  <tr>
      <td><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/1-Double Ended COB LED Strip - White(6500K) 300mm.jpg" style={{width:150, height:'auto'}}/></td>
      <td><a href="https://www.seeedstudio.com/Double-Ended-COB-LED-Strip-White-6500K-130mm-5PCS-p-6593.html">Tira LED COB de Doble Extremo - Blanco(6500K) </a></td>
      <td>130mm </td>
      <td>300mA (Recomendado)</td>
      <td>21-25 lm (@ 300mA)</td>
  </tr>

  <tr>
      <td><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/1-Double Ended COB LED Strip - White(6500K) 300mm.jpg" style={{width:150, height:'auto'}}/></td>
      <td><a href="https://www.seeedstudio.com/Double-Ended-COB-LED-Strip-White-6500K-300mm-5PCS-p-6594.html">Tira LED COB de Doble Extremo - Blanco(6500K)</a></td>
      <td>300mm</td>
      <td>300mA (Recomendado)</td>
       <td>&gt;50 lm (@ 300mA)</td>
  </tr>
  <tr>
      <td><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/1-100036812-Single-Ended-COB-LED-Strip---White(6500K)-110mm.jpg" style={{width:150, height:'auto'}}/></td>
      <td><a href="https://www.seeedstudio.com/Single-Ended-COB-LED-Strip-White-6500K-110mm-5PCS-p-6590.html"> Tira LED COB de Extremo Único - Blanco(6500K)</a></td>
      <td>110mm</td>
      <td>100mA (Recomendado)</td>
       <td> &gt;23 lm (@ 200mA)</td>
  </tr>
  <tr>
      <td><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/1-100061492-Single-Ended-COB-LED-Strip---White(6500K)-300mm.jpg" style={{width:150, height:'auto'}}/></td>
      <td><a href="https://www.seeedstudio.com/Single-Ended-COB-LED-Strip-White-6500K-300mm-5PCS-p-6591.html">Tira LED COB de Extremo Único - Blanco(6500K)</a></td>
      <td>300mm </td>
      <td>100mA (Recomendado)</td>
       <td>&gt;22 lm (@ 100mA)</td>
  </tr>
  </table>
</div>

## Introducción

Para desbloquear todo el potencial de la Placa Controladora de LED COB y disfrutar de la mejor experiencia posible, recomendamos encarecidamente emparejarla con una placa Seeed Studio XIAO y nuestras tiras LED COB compatibles.

:::note
Por seguridad:  
- **Al cargar la batería Li-ion**, desconecta la tira LED y cualquier otro periférico.  
- **Al conectar USB-C 5 V para programación o depuración**, desconecta la batería.  

Usar **solo** la batería **o** solo el suministro externo de 5 V es seguro. No se recomienda conectar dispositivos periféricos mientras se carga.
:::

### Jugar con Arduino

Necesitas configurar el entorno Arduino para el XIAO y agregar el paquete de la placa.

:::tip
Si esta es tu primera vez usando Arduino, te recomendamos encarecidamente que consultes [Introducción a Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/).
:::

#### Preparación del Software

**Paso 1.** Inicia la aplicación Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
        <strong><span><font color={'FFFFFF'} size={"4"}>Descargar Arduino IDE</font></span></strong>
    </a>
</div>

**Paso 2.** Selecciona tu modelo de placa de desarrollo y agrégalo al Arduino IDE.

- Si quieres usar **Seeed Studio XIAO RP2040** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/XIAO-RP2040-with-Arduino/#software-setup)** para terminar de agregarlo.

- Si quieres usar **Seeed Studio XIAO RP2350** para las rutinas posteriores, consulta **[este tutorial](https://wiki.seeedstudio.com/es/xiao_rp2350_arduino/#setting-up-the-software)** para completar la configuración.

- Si quieres usar **Seeed Studio XIAO nRF52840** para las rutinas posteriores, consulta **[este tutorial](https://wiki.seeedstudio.com/es/XIAO_BLE/#software-setup)** para completar la configuración.

- Si quieres usar **Seeed Studio XIAO ESP32-C3** para las rutinas posteriores, consulta **[este tutorial](https://wiki.seeedstudio.com/es/XIAO_ESP32C3_Getting_Started#software-setup)** para completar la configuración.

- Si quieres usar **Seeed Studio XIAO ESP32-C6** para las rutinas posteriores, consulta **[este tutorial](https://wiki.seeedstudio.com/es/xiao_esp32c6_getting_started/#software-preparation)** para completar la configuración.

- Si quieres usar **Seeed Studio XIAO ESP32-S3** para las rutinas posteriores, consulta **[este tutorial](https://wiki.seeedstudio.com/es/xiao_esp32s3_getting_started#software-preparation)** para completar la configuración.

- Si quieres usar **Seeed Studio XIAO RA4M1** para las rutinas posteriores, consulta **[este tutorial](https://wiki.seeedstudio.com/es/getting_started_xiao_ra4m1/#software-preparation)** para completar la configuración.

- Si quieres usar **Seeed Studio XIAO MG24** para las rutinas posteriores, consulta **[este tutorial](https://wiki.seeedstudio.com/es/xiao_mg24_getting_started/#software-preparation)** para completar la configuración.

:::tip
El XIAO SAMD21 y XIAO nRF54L15 solo funcionan cuando se alimentan a través de USB-C y no pueden usarse solo con batería. Además, el nRF54L15 no opera en el entorno Arduino.
:::
####  Ejemplo de Controlador de Puerto de Baja Potencia

Un puerto de baja potencia que soporta una corriente máxima de 80mA, admite atenuación PWM y usa lógica LOW activa (la carga opera cuando el nivel es bajo).

**Paso 1.** Preparación del hardware

<table align="center">
 <tr>
  <th>Seeed Studio XIAO ESP32-C3</th>
        <th> Placa Controladora LED COB</th>
        <th>Tira LED COB de Extremo Único</th>
 </tr>
 <tr>

   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:150, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/COB-LED-Driver-Board-for-Seeed-Studio-XIAO.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/1-100061492-Single-Ended-COB-LED-Strip---White(6500K)-300mm.jpg" style={{width:250, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/COB-LED-Driver-Board-for-Seeed-Studio-XIAO-p-6602.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Single-Ended-COB-LED-Strip-White-6500K-300mm-5PCS-p-6591.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>


:::tip
Al conectar el XIAO a la placa controladora, asegúrate de desconectar el cable USB.
:::
**Paso 2.**  Conecta Seeed Studio XIAO ESP32-C3, Placa Controladora LED COB para XIAO y Tira LED COB de Extremo Único como se muestra a continuación:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/4-100061492-Single-Ended-COB-LED-Strip---White(6500K)-300mm.jpg" style={{width:500, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/D2_ready2_new.jpg" style={{width:400, height:'auto'}}/></div>


**Paso 3.** Conecta el XIAO al programa de flasheo USB. Copia y descarga el sketch de ejemplo relacionado.
```cpp
#define LED_BUILTIN     D2
// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(LED_BUILTIN, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
  digitalWrite(LED_BUILTIN, LOW);   // turn the LED on by making the voltage LOW
 // digitalWrite(LED_BUILTIN, HIGH);  // turn the LED off (HIGH is the voltage level)
}

```
:::tip 

"Puerto de Baja Potencia" en el comentario significa activo-bajo:
poner el pin en LOW para encender la tira, liberar (HIGH) para apagarla.

:::
El código simplemente controla los pines GPIO HIGH o LOW.
Dado que la placa controladora ya está configurada, no necesitas descargar librerías adicionales.
Sigue el enlace de la imagen, sube el programa y alimenta la Placa Controladora LED COB, si todo va bien, puedes ver algo así:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/D2_new.jpg" style={{width:700, height:'auto'}}/></div>

#### Ejemplo de Controlador de Puerto de Alta Potencia

Un puerto de alta potencia que soporta una corriente máxima de 300mA, solo permite control de encendido/apagado (no admite atenuación PWM), y se usa para conectar cargas de alta potencia.

**Paso 1.**  Preparación del hardware
<table align="center">
 <tr>
  <th>Seeed Studio XIAO ESP32-C3</th>
        <th> Placa Controladora LED COB</th>
        <th>Tira LED COB de Doble Extremo</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:150, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/COB-LED-Driver-Board-for-Seeed-Studio-XIAO.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/1-Double Ended COB LED Strip - White(6500K) 300mm.jpg" style={{width:250, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/COB-LED-Driver-Board-for-Seeed-Studio-XIAO-p-6602.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Double-Ended-COB-LED-Strip-White-6500K-300mm-5PCS-p-6594.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>



**Paso 2.**  Conecta Seeed Studio XIAO ESP32-C3, Placa Controladora LED COB para XIAO y Tira LED COB de Doble Extremo como se muestra a continuación:
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/4-100074846-Double-Ended-COB-LED-Strip---White(6500K)-130mm.jpg" style={{width:400, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/D4_new.jpg" style={{width:400, height:'auto'}}/></div>

**Paso 3.** Conecta el XIAO al programa de flasheo USB. Copia y descarga el sketch de ejemplo relacionado.

```cpp
#define LED_BUILTIN       D0

// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(LED_BUILTIN, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
  digitalWrite(LED_BUILTIN, HIGH);  // turn the LED on (HIGH is the voltage level)
 // digitalWrite(LED_BUILTIN, LOW);   // turn the LED off by making the voltage LOW
}

```


El código simplemente controla los pines GPIO HIGH o LOW.
Dado que la placa controladora ya está configurada, no necesitas descargar librerías adicionales.
Sigue el enlace de la imagen, sube el programa y alimenta la Placa Controladora LED COB, si todo va bien, puedes ver algo así:


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/D4_new_light.jpg" style={{width:700, height:'auto'}}/></div>

####   Ejemplo PWM de Controlador de Puerto de Baja Potencia

Un puerto de baja potencia que soporta una corriente máxima de 80mA, admite atenuación PWM y usa lógica LOW activa (la carga opera cuando el nivel es bajo).
**Paso 1.**   Preparación del hardware

<table align="center">
 <tr>
  <th>Seeed Studio XIAO ESP32-C3</th>
        <th> Placa Controladora LED COB</th>
        <th>Tira LED COB de Extremo Único</th>
        <th>Tira LED COB de Doble Extremo</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:150, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/COB-LED-Driver-Board-for-Seeed-Studio-XIAO.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/1-100061492-Single-Ended-COB-LED-Strip---White(6500K)-300mm.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/1-Double Ended COB LED Strip - White(6500K) 300mm.jpg" style={{width:250, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/COB-LED-Driver-Board-for-Seeed-Studio-XIAO-p-6602.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Single-Ended-COB-LED-Strip-White-6500K-300mm-5PCS-p-6591.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Double-Ended-COB-LED-Strip-White-6500K-300mm-5PCS-p-6594.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

**Paso 2.**  Conecta Seeed Studio XIAO ESP32-C3, COB LED Driver Board para XIAO, Single Ended COB LED Strip y Double Ended COB LED Strip como se muestra a continuación:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/Breath_new_ready.jpg"style={{width:700, height:'auto'}}/></div>

**Paso 3.** Conecta el XIAO al programa de flasheo USB. Copia y descarga el sketch de ejemplo relacionado.

```cpp
#include <Arduino.h>

// ================= Define Pins =================
const int PIN_STRIP_1 = D2; 
const int PIN_STRIP_2 = D3; 

// ================= Parameter Configuration =================
// Breathing speed: larger number = slower, smaller number = faster
const int BREATH_SPEED = 2000; 

// Breathing phase offset: determines if the two light strips "light up together" or "alternate lighting"
// float PHASE_OFFSET = 0;    // Set to 0 -> fully synchronized
float PHASE_OFFSET = PI;   // Set to PI (3.14) -> fully alternating (complementary)
// float PHASE_OFFSET = PI/2; // Set to PI/2 -> slightly staggered rhythm

// ================= Helper Function: Handle Active LOW Lighting Logic =================
// This step is crucial, do not modify
// Input: brightness (0=off, 255=maximum brightness)
void setLedBrightness(int pin, int brightness) {
  // 1. Safety limit range
  brightness = constrain(brightness, 0, 255);

  // 2. Logic inversion (Active LOW)
  // Brightness 255 -> Output 0 (GND) -> Light at maximum brightness
  // Brightness 0   -> Output 255 (VCC) -> Light off
  int pwmValue = 255 - brightness;

  analogWrite(pin, pwmValue);
}

// ================= Math Function for Calculating Breathing Brightness =================
// Using the algorithm (e^sin(x) - 1/e), which mimics human breathing curve better than ordinary triangular wave
int calculateBreathBrightness(unsigned long time, float phaseOffset) {
  // Calculate angle: time / speed factor
  float angle = (time / (float)BREATH_SPEED) * PI;

  // Add phase offset
  angle += phaseOffset;

  // Core formula
  float val = (exp(sin(angle)) - 0.36787944) * 108.0;

  return (int)val;
}

void setup() {
  pinMode(PIN_STRIP_1, OUTPUT);
  pinMode(PIN_STRIP_2, OUTPUT);

  // Initialization: turn off all lights first
  setLedBrightness(PIN_STRIP_1, 0);
  setLedBrightness(PIN_STRIP_2, 0);
}

void loop() {
  unsigned long currentMillis = millis();

  // 1. Calculate brightness for D2 (no offset)
  int bright1 = calculateBreathBrightness(currentMillis, 0);
  setLedBrightness(PIN_STRIP_1, bright1);

  // 2. Calculate brightness for D3 (with offset)
  int bright2 = calculateBreathBrightness(currentMillis, PHASE_OFFSET);
  setLedBrightness(PIN_STRIP_2, bright2);

  // The delay here doesn't need to be too long, just give the CPU a short break
  delay(5);
}

```

Este es un proyecto alimentado por batería. Este es el código para el estilo de luz respiratoria, si te gusta, puedes usar este estilo en cualquier lugar donde quieras que brille
Sube el programa y alimenta la COB LED Driver Board, si todo va bien, puedes ver algo así:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/PWM.gif"style={{width:500, height:'auto'}}/></div>
:::tip

Las tiras LED con un límite de corriente nominal de 300mA o 100mA pueden conectarse de forma segura a un puerto con una salida máxima de 80mA (la corriente de salida del puerto es ≤ el límite de corriente de la tira LED, asegurando redundancia de seguridad). Sin embargo, una tira LED con un límite de corriente nominal de 100mA no puede conectarse a un puerto con una salida máxima de 300mA—ya que la corriente máxima de salida del puerto excede en gran medida el límite de corriente de la tira LED, esto puede dañar la tira debido a sobrecorriente.
:::
:::note
**¡La conexión en caliente está estrictamente prohibida!**
Siempre ensambla primero el XIAO y la placa controladora, luego conecta el cable USB.
Nunca intentes conectar el XIAO mientras aún esté conectado al cable USB. Puede causar que el PMIC se averíe.
:::


### Jugar con Home Assistant a través de ESPHome

#### Preparación del Hardware

<div class="table-center">
  <table style={{textAlign:'center'}}>
    <tr>
      <th>Dispositivos Home Assistant</th>
    </tr>
    <tr>
        <td><img src="https://files.seeedstudio.com/wiki/Home-Assistant/1.png" style={{width:300, height:'auto'}}/></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/home_assistant_topic/#-devices-for-home-assistant-" target="_blank" rel="noopener noreferrer">
          <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

#### Preparación del Software

[ESPHome](https://esphome.io/) es una herramienta que tiene como objetivo hacer que la gestión de tus placas ESP sea lo más simple posible. Lee un archivo de configuración YAML y crea firmware personalizado que instala en tu dispositivo ESP. Los dispositivos o sensores agregados en la configuración de ESPHome aparecerán automáticamente en la interfaz de usuario de Home Assistant. ESPHome puede ayudarte a conectar y enviar los datos a los dispositivos de Home Assistant.

:::note
Si esta es tu primera vez usando Home Assistant y ESPHome, puedes seguir <strong>[aquí](https://www.home-assistant.io/installation/)</strong> para una guía paso a paso sobre la instalación de Home Assistant.
:::

ESPHome está disponible como un **Complemento de Home Assistant** y puede instalarse simplemente a través de la tienda de complementos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/1.png" style={{width:900, height:'auto'}}/></div>

- **Paso 1.** Haz clic en **INSTALL**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/2.png" style={{width:900, height:'auto'}}/></div>

- **Paso 2.** Habilita todas las opciones y haz clic en **START**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/3.png" style={{width:900, height:'auto'}}/></div>

Verás la siguiente ventana si ESPHome se carga exitosamente

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/4.png" style={{width:900, height:'auto'}}/></div>

#### Lámpara LED de anochecer a amanecer

**Resumen**

Hagamos una demostración de una lámpara LED de anochecer a amanecer, la luz cambiará con la intensidad de la luz a lo largo del día. Si te interesa, sigue leyendo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/HA_demo.jpg" style={{width:500, height:'auto'}}/></div>
**Paso 1.**   Preparación del hardware

<table align="center" style={{textAlign:'center', overflowX: 'scroll', border: '1px solid #ccc', }}>
 <tr>
  <th>XIAO ESP32-C3</th>
        <th>COB LED Driver Board para XIAO</th>
        <th>Grove - Sensor de Luz Digital</th>
        <th>Single Ended COB LED Strip</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:150, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/COB-LED-Driver-Board-for-Seeed-Studio-XIAO.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/img/hardware%20overview.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/1-100061492-Single-Ended-COB-LED-Strip---White(6500K)-300mm.jpg" style={{width:250, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/COB-LED-Driver-Board-for-Seeed-Studio-XIAO-p-6602.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Digital-Light-Sensor-TSL2561.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Single-Ended-COB-LED-Strip-White-6500K-300mm-5PCS-p-6591.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

**Paso 2.** Conecta Seeed Studio XIAO ESP32-C3, COB LED Driver Board for XIAO y Single Ended COB LED Strip - White como se muestra a continuación:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/4-100061492-Single-Ended-COB-LED-Strip---White(6500K)-300mm.jpg" style={{width:500, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/connect2.png" style={{width:500, height:'auto'}}/></div>

**Paso 3.** Abre la página de ESPHome y haz clic en **+ NEW DEVICE**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/5.png" style={{width:900, height:'auto'}}/></div>

**Paso 4.** Haz clic en **CONTINUE**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/6.png" style={{width:900, height:'auto'}}/></div>

**Paso 5.** Ingresa un **Name** para el dispositivo e introduce las credenciales WiFi como **Network name** y **Password**. Luego haz clic en **NEXT**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/Dusk-to-dawn_LED_lamp_1.1.png" style={{width:400, height:'auto'}}/></div>

**Paso 6.** Selecciona **ESP32-C3** y haz clic

**Paso 7.** Haz clic en **SKIP** porque configuraremos esta placa manualmente

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/14.png" style={{width:400, height:'auto'}}/></div>

**Paso 8.** Haz clic en **EDIT** debajo de la placa recién creada

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/Dusk-ro-dawm_LED_lamp_2.2.png" style={{width:400, height:'auto'}}/></div>

**Paso 9.** El siguiente código se copia parcialmente al final del archivo .ymal. XIAO ESP32-C3 lee el valor de luz del sensor de luz digital Grove y cambia el nivel de corriente del pin D2 según la intensidad de la luz, para controlar la barra de luz

```yaml

# ----------- Additional section (TSL2561, address 0x29) starts -----------
i2c:
  sda: 6
  scl: 7
  scan: true

# Global variables
globals:
  # Record the end timestamp of sensor ignore period (milliseconds)
  - id: ignore_sensor_until
    type: uint32_t
    restore_value: no
    initial_value: '0'
  # Flag: True means current operation is from sensor
  - id: is_robot
    type: bool
    restore_value: no
    initial_value: 'false'

sensor:
  - platform: tsl2561
    name: "Ambient Light"
    address: 0x29
    # Ultra-fast response configuration
    update_interval: 200ms
    integration_time: 101ms
    gain: 1X
    id: lux
    on_value:
      then:
        - lambda: |-
            // 1. Check if in manual control ignore period
            if (millis() < id(ignore_sensor_until)) {
              return;
            }

            // 2. Ultra-fast light control logic
            bool should_turn_on = (x < 180); // Threshold for turning on (dark)
            bool should_turn_off = (x > 220); // Threshold for turning off (bright)

            // Get current light state
            bool is_currently_on = id(light_strip).remote_values.is_on();

            if (should_turn_off && is_currently_on) {
              ESP_LOGD("custom", "Environment brightened (Lux: %.1f), sensor auto-off light", x);

              // Key: Inform Light component this is automated operation
              id(is_robot) = true;

              auto call = id(light_strip).turn_off();
              call.set_transition_length(1000); // 1 second fade
              call.perform();
            } 
            else if (should_turn_on && !is_currently_on) {
              ESP_LOGD("custom", "Environment darkened (Lux: %.1f), sensor auto-on light", x);

              // Key
              id(is_robot) = true;

              auto call = id(light_strip).turn_on();
              call.set_transition_length(1000); // 1 second fade
              call.perform();
            }

output:
  - platform: ledc
    pin: 4
    id: pwm_output
    frequency: 1000Hz
    inverted: true

light:
  - platform: monochromatic
    output: pwm_output
    name: "Light Strip"
    id: light_strip
    restore_mode: ALWAYS_OFF
    default_transition_length: 1s

    # Monitor all state changes (on/off/dimming)
    on_state:
      - lambda: |-
          // Check who triggered this state change
          if (id(is_robot)) {
            // If triggered by Sensor:
            ESP_LOGD("custom", "Detected automated operation, not ignoring sensor");
            // Task completed, wait for next cycle
            id(is_robot) = false;
          } else {
            // Triggered by human (HA/Switch):
            ESP_LOGD("custom", "Detected manual operation, ignoring sensor for 30 seconds");
            // Set ignore end time = current time + 30000 milliseconds
            id(ignore_sensor_until) = millis() + 30000;
          }
```
:::tip
En la configuración de Home Assistant, los números para sda, scl y pin siempre se refieren a los números GPIO, no a las etiquetas impresas en la placa XIAO.
:::

**Paso 10.** Haz clic en el botón Install en la esquina superior derecha. Luego selecciona el último elemento **Manual download**, Selecciona **Modern format**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/Dusk-to-dawn_LED_lamp_3.png" style={{width:500, height:'auto'}}/></div>

Luego tomará mucho tiempo descargar y compilar, así que ten paciencia. Una vez que todo esté listo, el firmware (XX.bin) se descargará automáticamente a tu computadora. Compilación exitosa, como se muestra en la figura a continuación

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/Dusk-to-dawn_LED_lamp_4.3.png" style={{width:350, height:'auto'}}/></div>

**Paso 11.** Usando la [herramienta web ESPhome](https://web.esphome.io/?dashboard_install) para cargar el firmware al XIAO ESP32, haz clic en **CONNECT**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/34.png" style={{width:800, height:'auto'}}/></div>

Selecciona el puerto serie del XIAO ESP32 en la ventana emergente, haz clic en **INSTALL** y luego selecciona el archivo .bin descargado de los pasos anteriores.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/35.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/38.png" style={{width:500, height:'auto'}}/></div>

**Paso 12.** Una vez instalado exitosamente, puedes ver algo así:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/demo.gif" style={{width:700, height:'auto'}}/></div>
Cuando la luz es fuerte, la luz nocturna se apaga. Cuando la luz es débil, la luz nocturna se enciende.

**Paso 13.** Una vez instalado exitosamente, abre el registro y verás los mensajes de retroalimentación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/Dusk-to-dawn_LED_lamp_5.png" style={{width:500, height:'auto'}}/></div>


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/Dusk-to-dawn_LED_lamp_6.png" style={{width:500, height:'auto'}}/></div>


Si te gusta, también puedes seguir los pasos anteriores para hacer una luz nocturna que sea única para ti!

:::tip
Aunque los componentes de la placa están clasificados para -40°C a 85°C, conducir los 7 canales a carga máxima (Total >1A) generará calor significativo. Si se instala en un espacio confinado (por ejemplo, dentro de un modelo de plástico sellado), asegúrate de proporcionar ventilación pasiva para evitar activar la protección de apagado térmico del PMIC.
:::

## Agradecimiento especial
Extendemos nuestro agradecimiento especial a Xinyu por la valiosa contribución al trabajo de impresión 3D.

 El diseño original demuestra una creatividad y valor práctico notables. Para aquellos interesados en ver el diseño original, el video de demostración y la página de inicio del autor están disponibles a través de los enlaces proporcionados a continuación.

**[Carcasa Impresa en 3D para Lámpara LED](https://makerworld.com.cn/zh/models/126527-leddeng-b3#profileId-11109)**

**[Página de Inicio del Autor](https://makerworld.com.cn/zh/@GLB_xinyulin/upload)**

## Recursos

[PDF] **[Esquemático de Seeed Studio COB LED Driver Board](https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/SCH_Sch_V1.2_2025-11-21.pdf)**

[ZIP] **[PCB de Seeed Studio COB LED Driver Board](https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/Gerber_PCB_V1.2_2025-11-25.zip)**

[STEP] **[Modelo 3D de Seeed Studio COB LED Driver Board](https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/cob_led_driver_board.STEP)**

## Notas de Seguridad{#add-board}



**Prohibiciones de Operación y Reglas de Seguridad**
 - No conectes ningún periférico durante la carga. Desconecta la barra de luz primero antes de enchufar el cable USB-C.
 - Al depurar el puerto USB-C, el portabaterías debe estar vacío (sin batería instalada).
 - Para corrientes de carga completa >1A, asegúrate de que se perforen agujeros de disipación de calor en la carcasa; de lo contrario, el PMIC se sobrecalentará y se apagará.
 - Nunca toques el área del PMIC en la parte posterior de la placa con las manos desnudas: la descarga electrostática (ESD) puede dañar el chip, y la superficie puede alcanzar temperaturas abrasadoras bajo carga completa.
**Recordatorios de Seguridad Principales**
 - Adhiérete a estas cuatro reglas para una operación segura:
 - Fuente de alimentación única cuando los periféricos están conectados
 - Apagar antes de cablear/desconectar
 - Proporcionar orificios de disipación de calor adecuados
 - No tocar la parte posterior de la placa

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/safety.png" style={{width:250, height:'auto'}}/></div>

## Preguntas Frecuentes

**P1. ¿Por qué mi placa se calienta?**
  - Porque hay un fenómeno de intercambio en caliente. Cuando el XIAO se conecta al USB y luego se vuelve a conectar a la placa controladora, este proceso causará un cortocircuito en el conducto de corriente de la placa de desarrollo e incluso quemaduras.


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