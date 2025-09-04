---
description: Radar Doppler de 24GHz
title: Radar Doppler de 24GHz
keywords:
- mmWave_radar_sensor
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Microwave-Sensor-24GHz-Doppler-Radar-Motion-Sensor-MW2401TR11
last_update:
  date: 1/12/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/MW2401TR11/img/102110464_Preview-07.png)

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Microwave-Sensor-24GHz-Doppler-Radar-Motion-Sensor-MW2401TR11-p-4690.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border="0" /></a></p>

**MW2401TR11** es un producto de módulo sensor de microondas de movimiento humano de **24GHz** con alta integración y un algoritmo inteligente de alto rendimiento, está equipado con el transceptor de alto rendimiento. La antena no solo tiene buena directividad, sino que también puede ajustar el área de cobertura a través de configuraciones de software según diferentes escenarios de aplicación, y filtrar interferencias a través de algoritmos inteligentes. También es capaz de identificar efectivamente el movimiento sutil de objetos.

## Características

- Reconoce sensiblemente el movimiento diminuto de las personas
- El módulo de microondas de **24Ghz** puede reconocer con alta efectividad el estado del objeto
- Soporta señal original y salida de señal digital de nivel alto o nivel bajo
- La distancia de detección y la sensibilidad son ajustables (Máximo: 20 metros)
- Antena de tamaño miniatura con función de detección de ángulo azimutal de **170°**
- Hay puerto I/O de reserva y soporte para comunicar puerto UART
- Estándares de prueba de autenticación FCC/CE/RS

## Especificaciones

<table className="tg">
  <thead>
    <tr>
      <th className="tg-llyw"><span style={{fontWeight: 'bold'}}>Elemento</span></th>
      <th className="tg-llyw"><span style={{fontWeight: 'bold'}}>Valor</span></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="tg-0pky">Fuente de alimentación</td>
      <td className="tg-0pky"> 5 - 12 V</td>
    </tr>
    <tr>
      <td className="tg-0pky">Consumo de corriente</td>
      <td className="tg-0pky"> 50-56 mA (La corriente puede reducirse según la distancia requerida)</td>
    </tr>
    <tr>
      <td className="tg-0pky">Temperatura de funcionamiento </td>
      <td className="tg-0pky"> -30 - 85 °C</td>
    </tr>
    <tr>
      <td className="tg-0pky">Frecuencia de trabajo</td>
      <td className="tg-0pky"> 50HZ - 60HZ</td>
    </tr>
    <tr>
      <td className="tg-0pky">Retardo de salida</td>
      <td className="tg-0pky"> 2s - infinito (Ajustable por software)</td>
    </tr>
    <tr>
      <td className="tg-0pky">Frecuencia de transmisión</td>
      <td className="tg-0pky"> 24 - 24.25 GHz</td>
    </tr>
    <tr>
      <td className="tg-0pky">Señal digital de nivel alto</td>
      <td className="tg-0pky"> 3.2 - 3.3 V</td>
    </tr>
    <tr>
      <td className="tg-0pky">Señal digital de nivel bajo</td>
      <td className="tg-0pky"> 0 - 0.2 V</td>
    </tr>
    <tr>
      <td className="tg-0pky">Altura de suspensión</td>
      <td className="tg-0pky"> 3 - 10 metros (Ajustable por software)</td>
    </tr>
    <tr>
      <td className="tg-0pky">Radio de reacción</td>
      <td className="tg-0pky">2 - 5 metros (Ajustable por software)</td>
    </tr>
    <tr>
      <td className="tg-0pky">Radio de Micro</td>
      <td className="tg-0pky">0.5 - 3 metros (Ajustable por software)</td>
    </tr>
    <tr>
      <td className="tg-0pky">Ángulo de detección</td>
      <td className="tg-0pky">150 - 170°</td>
    </tr>
  </tbody>
</table>

## Dimensiones

- 20mm x 20mm x 2.54mm

## Descripción general del hardware

![](https://files.seeedstudio.com/wiki/MW2401TR11/img/MW2401TR11.png)

ip
    R2 es una interfaz de E/S reservada.

## Detalles técnicos

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-baqh{text-align:center;vertical-align:top}
.tg .tg-6qw1{background-color:#c0c0c0;text-align:center;vertical-align:top}
</style> -->

<table class="tg">
<thead>
  <tr>
    <th class="tg-6qw1" colspan="3">Definición de interfaz</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-baqh">Número</td>
    <td class="tg-baqh">Pin</td>
    <td class="tg-baqh">Función</td>
  </tr>
  <tr>
    <td class="tg-baqh">1</td>
    <td class="tg-baqh">TX</td>
    <td class="tg-baqh">El puerto TX puede usarse como E/S con función ADC (voltaje: 3.3 V)</td>
  </tr>
  <tr>
    <td class="tg-baqh">2</td>
    <td class="tg-baqh">GND</td>
    <td class="tg-baqh">Conexión a tierra</td>
  </tr>
  <tr>
    <td class="tg-baqh">3</td>
    <td class="tg-baqh">OUT</td>
    <td class="tg-baqh">Puerto de E/S de salida del sensor (voltaje: 3.3 V &amp; forma de onda de salida definida por el usuario)</td>
  </tr>
  <tr>
    <td class="tg-baqh">4</td>
    <td class="tg-baqh">VIN</td>
    <td class="tg-baqh">5 - 12 V</td>
  </tr>
  <tr>
    <td class="tg-baqh">5</td>
    <td class="tg-baqh">RX</td>
    <td class="tg-baqh">El puerto RX puede usarse como E/S con función ADC (voltaje: 3.3 V)</td>
  </tr>
</tbody>
</table>

## Plataforma Soportada

| Arduino                                                                                             |                                                                                              |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/MW2401TR11/img/emptyyyy6.png) | ![](https://files.seeedstudio.com/wiki/MW2401TR11/img/emptyyyy6.png) | ![](https://files.seeedstudio.com/wiki/MW2401TR11/img/emptyyyy6.png) | ![](https://files.seeedstudio.com/wiki/MW2401TR11/img/emptyyyy6.png) |

## Comenzando

### Materiales Requeridos

| Seeeduino Cortex-M0+ |MW2401TR11|
|--------------|--------------|
|![enter image description here](https://files.seeedstudio.com/wiki/MW2401TR11/img/clearseeedriono%20pic.png)| ![enter image description here](https://files.seeedstudio.com/wiki/MW2401TR11/img/clearnMWpic6.png)|
|[Obtener UNO Ahora](https://www.seeedstudio.com/Seeeduino-Cortex-M0-p-4070.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Microwave-Sensor-24GHz-Doppler-Radar-Motion-Sensor-MW2401TR11-p-4690.html)|

:::tip
es solo un ejemplo, puedes usar otros dispositivos con puerto RX y TX o configurar un puerto serie por software para simular los puertos TX y TX, también puedes usar simplemente el puerto OUT para generar señal de alto nivel o bajo nivel sin RX y TX.
:::

## Hardware

 ![MW2401TR11 with seeeduino Cortex-M0+ connection](https://files.seeedstudio.com/wiki/MW2401TR11/img/MW_Seeeduino.png)

- **paso 1. Sigue la imagen de arriba para conectar los cables**.
- **paso 2. Conecta el cable de alimentación tipo-c al seeeduino Cortex-MO+**.

## Software

- **paso 1. Descarga el** [arduino IDE](https://www.arduino.cc/en/main/software)
- **paso 2. configura Seeeduino Cortex-MO+, por favor sigue las** [instrucciones de seeedruino Cortex-MO+](https://wiki.seeedstudio.com/es/Seeeduino-Cortex-M0/)
- **paso 3. copia el código en arduino IDE y luego súbelo.** [guía para subir código](https://wiki.seeedstudio.com/es/Upload_Code/)

```cpp
int MW_out = 2;   
// set pin 2 as OUT port
void setup() {
  Serial.begin(9600);
  Serial1.begin(115200);
  pinMode(MW_out, INPUT);
}

void loop() {
  Serial.println(analogRead(MW_out));
  delay(2000);
  if (Serial1.available()){
    //Serial.println("data be ready to present");
    uint8_t begin_code = Serial1.read();
    delay(10);
    uint8_t state_code = Serial1.read();
    delay(10);
    uint8_t gear_code = Serial1.read();
    delay(10);
    uint8_t delay_code = Serial1.read();
    delay(10);
    uint8_t check_code = Serial1.read();

    if(begin_code == 170){  //confirm the hearder alway present 0xaa
      check_code = begin_code + state_code + gear_code + delay_code;
      if(check_code == 175) Serial.println("object state:stop");
      if(check_code == 176) Serial.println("object state:closing_5");
      if(check_code == 177) Serial.println("object state:leaving");
      if(check_code == 172) Serial.println("object state:closing_1");
    }
    else Serial.println("no data recived");   
    }
    while(Serial1.read()>=0);    //clear buffer
}

```

- **paso 4. abre el Monitor Serie y verás los datos impresos**.

![](https://files.seeedstudio.com/wiki/MW2401TR11/img/monitor2.png)

**Los 1018 y 1019 significan señal de alto nivel, 4 y 5 significan señal de bajo nivel, normalmente si se presenta la señal de bajo nivel, no presentará datos de acción.**

**Aquí hay una demostración simple cuando mi mano se aleja, el monitor muestra estado del objeto: alejándose**
![cuando mi mano se aleja](https://files.seeedstudio.com/wiki/MW2401TR11/img/MW2401TR11_gGIF.gif)

![](https://files.seeedstudio.com/wiki/MW2401TR11/img/MW2401TR11_GIF.gif)

## Recursos

- **[PDF]** [Sensor de Microondas - Sensor de Movimiento Radar Doppler de 24GHz - MW2401TR11](https://wiki.seeedstudio.com/es/Microwave-Sensor-24GHz-Doppler-Radar-Motion-Sensor-MW2401TR11/MW2401TR11_datasheet.zip)

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
