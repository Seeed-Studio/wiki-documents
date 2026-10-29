---
description: Esta guía te ayudará a configurar rápidamente la Seeed Studio XIAO RS485 Expansion Board y comenzar con la comunicación RS485.
title: RS485 Expansion Board para XIAO
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/top.webp
slug: /XIAO-RS485-Expansion-Board
sku: 113991354
last_update:
  date: 10/20/2026
  author: Zeller
createdAt: '2024-11-26'
updatedAt: '2026-10-20'
url: https://wiki.seeedstudio.com/es/XIAO-RS485-Expansion-Board/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Primeros pasos con Seeed Studio XIAO-RS485-Expansion-Board

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/top.jpg" style={{width:600, height:'auto'}}/></div>

<div className="table-center">
  <table align="center">
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/RS485-Breakout-Board-for-XIAO-p-6306.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span>
                <font color="#FFFFFF" size="4">
                  Consigue uno ahora 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
  </table>
</div>


:::tip

- Las versiones V1.1 y anteriores usan **control de dirección por software**. Consulta el [ejemplo de dirección software a software](#software-direction-to-software-direction).

:::

## Características

- **Compatible con Seeed Studio XIAO**: Diseñada para las placas de desarrollo Seeed Studio XIAO.
- **Comunicación de larga distancia**: Admite comunicación RS-485 a distancias de hasta 1.200 m (aproximadamente 3.937 ft).
- **Entrada de CC de 5V o 12V**: Admite cualquiera de estos voltajes de alimentación, con un circuito integrado que convierte 12V a 5V.
- **Dos terminales de 3 pines**: Terminales separados para señales RS-485 (A, B, GND) y alimentación (INT, 5V, 12V).
- **Diseño compacto**: Aproximadamente del tamaño de dos placas XIAO, lo que la hace adecuada para proyectos con espacio limitado.
- **Control de dirección seleccionable**: Configura el cambio de transmisión/recepción RS-485 automático por hardware o controlado por software mediante las resistencias de 0 Ω integradas. La placa se envía configurada de forma predeterminada para control automático de dirección por hardware.
- **LEDs de actividad RX/TX**: Indican la recepción y transmisión de datos.
- **LEDs de alimentación de 5V y 12V**: Indican la presencia del voltaje de entrada correspondiente.

## Descripción general del hardware

<Tabs>
<TabItem value="XIAO RS485 Expansion Board " label="XIAO RS485 Expansion Board " default>

- Diagrama de indicación de la XIAO RS485 Expansion Board V1.2 Frontal

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_front_1.png" style={{width:1000, height:'auto'}}/></div>
<br/>
- Diagrama de indicación de la XIAO RS485 Expansion Board V1.2 Posterior

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_back.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>
</Tabs>

### Material preparado

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO RS485-Expansion-Board × 2</th>
   <th>Seeed Studio XIAO ESP32-C3 × 2 </th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/hadware.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/esp32.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/RS485-Breakout-Board-for-XIAO-p-6306.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>


### Esquema de conexión

- La XIAO RS-485 Expansion Board V1.2 utiliza el transceptor TP8485E-SR. Las señales RS-485 se asignan a los pines de la XIAO de la siguiente manera: `RS485_TX` a D4, `RS485_RX` a D5 y `RS485_DE` a D2.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_sch_1.png" style={{width:700, height:'auto'}}/></div>
<br/>
<div class="table-center">
  <table align="center">
    <tr>
        <th>Conexiones de dos placas de expansión RS485</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_connect.png" style={{width:700, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

- **Interruptor 5V OUT/IN**: Controla la dirección de la alimentación en el terminal de 5V. Ajústalo a `OUT` cuando esta placa suministre 5V a otro dispositivo, o a `IN` cuando esta placa reciba 5V a través del terminal. 
- **Interruptor de 120R**: Ajústalo a `ON` para conectar la resistencia de terminación integrada de 120 Ω entre las líneas A y B de RS-485, o a `NC` para desconectarla. Para tendidos de cable largos, habilita la terminación en los dos extremos físicos del bus; déjala desconectada en las placas intermedias.
- **INT**: Conexión de interrupción reservada.

:::tip

- La V1.2 está configurada para **control automático de dirección por hardware** de forma predeterminada, por lo que el sketch no necesita cambiar la dirección mediante D2. Para usar control de dirección por software, cambia la posición de las resistencias de 0 Ω integradas.

:::

- Ubicación de la resistencia de cero ohmios para dirección automática por hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/RS_485_Hardware.png" style={{width:600, height:'auto'}}/></div>

- Ubicación de la resistencia de cero ohmios para dirección manual por software

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/RS_485_Software.png" style={{width:600, height:'auto'}}/></div>

## Descripción general del software

En este proyecto, la XIAO ESP32C3 se comunica con la placa de expansión RS485 usando D4 (GPIO6) y D5 (GPIO7).

### Dirección automática por hardware a dirección automática por hardware

Cuando se selecciona el control automático de dirección por hardware, el sketch no necesita controlar el pin DE.

**1. Código del emisor**

```cpp
#include <Arduino.h>

// Hardware -> Hardware: sender (XIAO ESP32C3, RS485 board V1.2).
// Fit R23/R24 for automatic direction; D2 is unused.
void setup() {
  Serial.begin(115200); // USB serial monitor.
  Serial1.begin(9600, SERIAL_8N1, D5, D4); // RS485: RX=D5, TX=D4.
  Serial.println("Hardware -> Hardware sender ready");
  delay(500);
}

void loop() {
  Serial1.println("Hello from hardware sender"); // Send over the RS485 bus.
  Serial.println("Sent: Hello from hardware sender"); // Show status via USB.
  delay(1000);
}
```

- `Serial.begin(115200)` inicia la salida serie USB para el monitor serie.
- `Serial1.begin(9600, SERIAL_8N1, D5, D4)` inicia la comunicación RS-485 a 9600 baudios. D5 es RX y D4 es TX.
- La placa controla automáticamente la dirección de transmisión, por lo que este sketch no usa D2.
- `Serial1.println()` envía una línea de texto cada segundo. `Serial.println()` muestra el estado de envío local a través de USB; no confirma que el receptor haya recibido el mensaje.

**2. Código del receptor**

```cpp
#include <Arduino.h>

// Hardware -> Hardware: receiver (XIAO ESP32C3, RS485 board V1.2).
// Fit R23/R24 for automatic direction; D2 is unused.
void setup() {
  Serial.begin(115200); // USB serial monitor.
  Serial1.begin(9600, SERIAL_8N1, D5, D4); // RS485: RX=D5, TX=D4.
  Serial.println("Hardware -> Hardware receiver ready");
  delay(500);
}

void loop() {
  if (Serial1.available()) {
    String message = Serial1.readStringUntil('\n'); // Read one RS485 line.
    message.trim();
    if (message.length() > 0) {
      Serial.print("Received: "); // Display on the USB serial monitor.
      Serial.println(message);
    }
  }
}
```

- `Serial` muestra mensajes a través de USB. `Serial1` recibe datos desde el transceptor RS-485 a través de D5.
- `Serial1.available()` comprueba si hay bytes recibidos esperando en el búfer UART.
- `Serial1.readStringUntil('\n')` lee hasta un salto de línea o hasta que se agote el tiempo de espera. `message.trim()` elimina los espacios en blanco circundantes, incluido el retorno de carro enviado por `println()`.
- Si el mensaje resultante no está vacío, `Serial.print()` y `Serial.println()` lo muestran en el monitor serie USB.
- La placa controla la dirección automáticamente, por lo que este sketch no usa D2.

**3. Resultados de la prueba**

- Abre el monitor serie USB de cada XIAO para ver los mensajes enviados y recibidos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_h-t-h.png" style={{width:600, height:'auto'}}/></div>

- Durante la transferencia de datos, los indicadores TX y RX integrados parpadean para mostrar la actividad correspondiente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_h-t-h.gif" style={{width:600, height:'auto'}}/></div>

### Dirección automática por hardware a dirección por software

**1. Código del emisor**

```cpp
#include <Arduino.h>

// Hardware -> Software: sender (XIAO ESP32C3, RS485 board V1.2).
// Fit R23/R24 for automatic direction; D2 is unused.
void setup() {
  Serial.begin(115200); // USB serial monitor.
  Serial1.begin(9600, SERIAL_8N1, D5, D4); // RS485: RX=D5, TX=D4.
  Serial.println("Hardware -> Software sender ready");
}

void loop() {
  Serial1.println("Hello from hardware sender"); // Send over the RS485 bus.
  Serial.println("Sent: Hello from hardware sender"); // Show status via USB.
  delay(1000);
}
```

- `Serial.begin(115200)` inicia la salida serie USB. `Serial1.begin(9600, SERIAL_8N1, D5, D4)` inicia el UART RS-485 con RX en D5 y TX en D4.
- Esta placa usa control automático de dirección por hardware, por lo que el emisor no necesita operar D2.
- En `loop()`, `Serial1.println()` envía una línea de texto por RS-485 una vez por segundo.
- `Serial.println()` muestra el estado de envío local a través de USB. Comprueba el monitor serie del receptor para confirmar la recepción.

**2. Código del receptor**

Con el control de dirección por software, configura D2 como salida y mantenla en LOW en el receptor para habilitar el modo de recepción.

```cpp
#include <Arduino.h>

// Hardware -> Software: receiver (XIAO ESP32C3, RS485 board V1.2).
// Fit R25/R26 for software direction; D2 stays LOW to receive.
void setup() {
  Serial.begin(115200); // USB serial monitor.
  Serial1.begin(9600, SERIAL_8N1, D5, D4); // RS485: RX=D5, TX=D4.
  pinMode(D2, OUTPUT);
  digitalWrite(D2, LOW); // Keep RS485 in receive mode.
  Serial.println("Hardware -> Software receiver ready");
}

void loop() {
  if (Serial1.available()) {
    String message = Serial1.readStringUntil('\n'); // Read one RS485 line.
    message.trim();
    if (message.length() > 0) {
      Serial.print("Received: "); // Display on the USB serial monitor.
      Serial.println(message);
    }
  }
}
```

- `Serial` se utiliza para el monitor serie USB, mientras que `Serial1` recibe datos RS-485 a través de D5.
- `pinMode(D2, OUTPUT)` configura D2 para el control de dirección. Mantener D2 en LOW selecciona el modo de recepción.
- `Serial1.available()` comprueba si hay datos en el búfer. `readStringUntil('\n')` lee una línea y `trim()` elimina los espacios en blanco circundantes.
- `message.length() > 0` filtra los mensajes vacíos. El texto recibido válido se muestra a través del monitor serie USB.


**3. Resultados de la prueba**

- Abre el monitor serie USB de cada XIAO para ver los mensajes enviados y recibidos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_h-t-r.png" style={{width:600, height:'auto'}}/></div>

- Durante la transferencia de datos, los indicadores TX y RX a bordo parpadean para mostrar la actividad correspondiente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_h-t-h.gif" style={{width:600, height:'auto'}}/></div>

### Dirección por software a dirección por software

En el control de dirección por software, D2 selecciona el modo de funcionamiento: LOW para recibir y HIGH para transmitir.

**1. Código del emisor**

```cpp
#include <Arduino.h>

// Software -> Software: sender (XIAO ESP32C3, RS485 board V1.2).
// Fit R25/R26 for software direction; D2 controls transmit/receive.
void setup() {
  Serial.begin(115200); // USB serial monitor.
  Serial1.begin(9600, SERIAL_8N1, D5, D4); // RS485: RX=D5, TX=D4.
  pinMode(D2, OUTPUT);
  digitalWrite(D2, LOW); // Keep RS485 in receive mode.
  Serial.println("Software -> Software sender ready");
}

void loop() {
  digitalWrite(D2, HIGH); // Enable RS485 transmission.
  delayMicroseconds(100); // Allow the transceiver to switch.
  Serial1.println("Hello from software sender"); // Send over the RS485 bus.
  Serial1.flush(true); // Wait for TX only; keep RX buffer intact.
  digitalWrite(D2, LOW); // Return to receive mode.
  Serial.println("Sent: Hello from software sender"); // Show status via USB.
  delay(1000);
}
```

- `Serial` muestra el estado a través de USB. `Serial1` envía datos RS-485 a través de D4 a 9600 baudios.
- D2 controla la dirección: LOW selecciona el modo de recepción y HIGH selecciona el modo de transmisión.
- Antes de enviar, el sketch pone D2 en HIGH y espera brevemente a que el transceptor cambie de modo.
- `Serial1.println()` envía el texto. `Serial1.flush(true)` espera a que finalice la transmisión UART sin borrar los datos recibidos.
- Después de la transmisión, el sketch pone D2 en LOW y muestra el estado de envío local a través de USB.

**2. Código del receptor**

```cpp
#include <Arduino.h>

// Software -> Software: receiver (XIAO ESP32C3, RS485 board V1.2).
// Fit R25/R26 for software direction; D2 stays LOW to receive.
void setup() {
  Serial.begin(115200); // USB serial monitor.
  Serial1.begin(9600, SERIAL_8N1, D5, D4); // RS485: RX=D5, TX=D4.
  pinMode(D2, OUTPUT);
  digitalWrite(D2, LOW); // Keep RS485 in receive mode.
  Serial.println("Software -> Software receiver ready");
}

void loop() {
  if (Serial1.available()) {
    String message = Serial1.readStringUntil('\n'); // Read one RS485 line.
    message.trim();
    if (message.length() > 0) {
      Serial.print("Received: "); // Display on the USB serial monitor.
      Serial.println(message);
    }
  }
}
```

- `Serial.begin(115200)` inicia la salida serie USB. `Serial1.begin(9600, SERIAL_8N1, D5, D4)` inicia el UART RS-485 con RX en D5 y TX en D4.
- D2 se configura para el control de dirección y se mantiene en LOW para que el transceptor permanezca en modo de recepción.
- Cuando `Serial1.available()` indica que hay datos en el búfer, `readStringUntil('\n')` lee una línea.
- `trim()` elimina los espacios en blanco circundantes. Si el mensaje no está vacío, el sketch lo muestra a través de USB.

**3. Resultados de la prueba**

- Abre el monitor serie USB de cada XIAO para ver los mensajes enviados y recibidos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_r-t-r.png" style={{width:600, height:'auto'}}/></div>

- Durante la transferencia de datos, los indicadores TX y RX a bordo parpadean para mostrar la actividad correspondiente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_h-t-h.gif" style={{width:600, height:'auto'}}/></div>

## Recursos

- **📄[Esquemático]** [Seeed Studio XIAO-RS485-Expansion-Board Schematic V1.2](https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/RS485-Breakout-Board-for-XIAO_V1.2_SCH_20260917.pdf)
- **🗃️[Archivos de diseño PCB]** [Seeed Studio XIAO-RS485-Expansion-Board V1.2 Project](https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/RS485-Breakout-Board-for-XIAO_V1.2_SCH&PCB_20260917.zip)
<br/>

- **📄[Esquemático]** [Seeed Studio XIAO-RS485-Expansion-Board Schematic V1.1](https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/Seeed_Studio_XIAO_RS485_Expansion_Board.pdf)
- **🗃️[Esquemático KiCad]** [Seeed Studio XIAO-RS485-Expansion-Board V1.1 SCH](https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/Seeed_Studio_XIAO_RS485_Expansion_Board.kicad_sch)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
