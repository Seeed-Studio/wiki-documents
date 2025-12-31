---
description: |
  Una placa controladora versátil de Seeed Studio diseñada para controlar servos de bus serie para aplicaciones robóticas. Cuenta con una configuración de puente crítica que debe ajustarse dependiendo del método de conexión (USB o UART directo).
title: Placa Controladora de Servo de Bus
image: https://files.seeedstudio.com/wiki/bus_servo_driver_board/9.webp
slug: /es/bus_servo_driver_board
keywords:
    - Bus Servo
    - Robotics
    - UART
    - USB connection
    - Jumper settings
last_update:
  author: Citric
  date: 05/27/2025
---

# Introducción a la Placa Controladora de Servo de Bus / Adaptador de Servo de Bus XIAO

Esta wiki cubre dos productos relacionados: la **Placa Controladora de Servo de Bus** y el **Adaptador de Servo de Bus XIAO**.

- La **Placa Controladora de Servo de Bus** **no** incluye un microcontrolador XIAO ESP32-C3 integrado, ni viene con una carcasa impresa en 3D. Está diseñada para funcionar como una placa de interfaz de servo de bus de propósito general, permitiéndote conectar y controlar servos a través de un controlador externo de tu elección.

- El **Adaptador de Servo de Bus XIAO**, por otro lado, **incluye** el XIAO ESP32-C3 como controlador principal y viene con una carcasa impresa en 3D. Con esta versión, puedes controlar directamente servos de bus usando el XIAO integrado, convirtiéndolo en una solución más integrada y lista para usar en proyectos de robótica.

Por favor, consulta el resto de esta guía para obtener detalles sobre la configuración y uso de ambos productos.

<div class="table-center">
  <table align="center">
    <tr>
        <th>Placa Controladora de Servo de Bus</th>
        <th>Adaptador de Servo de Bus XIAO</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/6.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/5.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Bus-Servo-Driver-Board-for-XIAO-p-6413.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
          </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-Bus-Servo-Adapter-for-XIAO-p-6397.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## Introducción

La Placa Controladora de Servo de Bus / Adaptador de Servo de Bus XIAO es una solución de hardware compacta y potente de Seeed Studio, diseñada para controlar servos de bus serie para proyectos de robótica y automatización. Con soporte para comunicación UART, permite control preciso y retroalimentación de múltiples servos de la serie ST/SC, incluyendo la serie Feetech SCS (ver [Sitio Web Oficial de la Serie Feetech SCS/STS/TTL](https://www.feetechrc.com/en/scs_ttl_Servo.html)). Esto lo hace ideal para aplicaciones como brazos robóticos, hexápodos, robots humanoides y robots con ruedas que requieren retroalimentación de ángulo y carga del servo.

Esta guía se enfoca en la configuración del hardware, conexiones físicas, especificaciones clave y **configuraciones críticas de puentes** para ayudar a los usuarios a integrar la placa en sus proyectos de manera efectiva.

:::warning Advertencia de Seguridad

Siempre desconecta la alimentación antes de conectar o desconectar servos o cableado. Asegúrate de que el voltaje de entrada coincida con los requisitos del servo para evitar daños.

:::

## Descripción General del Hardware

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Bus Servo Driver Board" label="Placa Controladora de Servo de Bus">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/1.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/2.png" style={{width:800, height:'auto'}}/></div>

La Placa Controladora de Servo de Bus cuenta con varios puntos de conexión clave:

**Entrada:**

- **DC IN (5.5 * 2.1mm):** Esta es la entrada de alimentación para la placa y los servos conectados. Conecta una fuente de alimentación de 5&#126;12V aquí. *Crucialmente, el voltaje de esta fuente de alimentación debe coincidir con los requisitos de voltaje de tus servos.* Por ejemplo, los servos de la serie ST típicamente operan a 9V, mientras que los servos de la serie SC pueden requerir 12V.

**Salida:**

- **Interfaz de Servo:** Este puerto dedicado es donde conectas tus servos de bus de la serie ST/SC. Asegúrate de que el conector esté correctamente alineado.

**Interfaz de Control:**

- **UART (RX/TX):** Estos pines proporcionan comunicación serie para controlar los servos. El método de conexión y las configuraciones de puente dependen de tu dispositivo host. Ver abajo para más detalles.

</TabItem>

<TabItem value="XIAO Bus Servo Adapter" label="Adaptador de Servo de Bus XIAO">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/3.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/4.png" style={{width:800, height:'auto'}}/></div>

**Entrada:**

- **DC IN (5.5 * 2.1mm):** Esta es la entrada de alimentación para la placa y los servos conectados. Conecta una fuente de alimentación de 5~12V aquí. *Crucialmente, el voltaje de esta fuente de alimentación debe coincidir con los requisitos de voltaje de tus servos.* Por ejemplo, los servos de la serie ST típicamente operan a 9V, mientras que los servos de la serie SC pueden requerir 12V.

**Salida:**

- **Interfaz de Servo:** Este puerto dedicado es donde conectas tus servos de bus de la serie ST/SC. Asegúrate de que el conector esté correctamente alineado.

</TabItem>

</Tabs>

## Introducción

### Seleccionando el modo de operación de la placa controladora **(Solo para Placa Controladora de Servo de Bus)**

:::tip
Para el Adaptador de Servo de Bus XIAO, no necesitas modificar ningún circuito para usar el XIAO ESP32-C3 incluido para controlar los servos, puedes omitir esta parte directamente.
:::

La Placa Controladora de Servo de Bus ofrece dos métodos de conexión principales: conexión UART directa y conexión USB a través de un adaptador USB-a-UART. *La configuración correcta del puente es esencial para el funcionamiento adecuado.*

#### Conexión UART (para MCUs, XIAO, ESP32, etc.)

Este método se usa cuando se conecta directamente a los pines UART de un microcontrolador (MCU) como un ESP32, Arduino, Seeed Studio XIAO, o una computadora de placa única.

- **Cableado:**
  - Conecta el pin `RX` en la Placa Controladora al pin `TX` (D7) en tu dispositivo host.
  - Conecta el pin `TX` en la Placa Controladora al pin `RX` (D6) en tu dispositivo host.
  - Para dispositivos como el Seeed Studio XIAO, puedes conectar directamente el XIAO en los conectores proporcionados, asegurando la alineación correcta de los pines. Esto elimina la necesidad de cables Dupont separados para la conexión UART.

- **Configuración de Puente (Crítica):**

  - No hay necesidad de usar una tapa de puente de 2.54mm para cortocircuitar el pin de 2 pines en la parte frontal de la placa. (No está cortocircuitado por defecto)
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/change-2.png" style={{width:400, height:'auto'}}/></div>

- **Alimentando el Host:** Tu dispositivo host (ej., Raspberry Pi Zero, ESP32, XIAO) requerirá su propia fuente de alimentación separada.

#### Conexión USB

Este método se usa cuando se conecta a una computadora o computadora de placa única con un puerto USB (ej., una PC o Raspberry Pi 4B). Simplemente conectas la placa de control a la computadora usando un cable USB.

- **Cableado:**
  - Simplemente conecta la placa de control a tu computadora usando un cable USB.

- **Configuración de Puente (Crítica):**

  - **Paso 1.** Localiza el puente de soldadura en la parte posterior de la placa. **Para comunicación USB, debes asegurarte de que las dos almohadillas estén conectadas (hay un puente de soldadura entre ellas).**

  - Almohadillas del lado posterior para la versión 1:

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/7.jpg" style={{width:400, height:'auto'}}/></div>

  - Almohadillas del lado posterior para la versión 2:

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/change-1.png" style={{width:400, height:'auto'}}/></div>

  - **Paso 2.** Usa una tapa de puente de 2.54mm para cortocircuitar el pin de 2 pines en la parte frontal de la placa. (No está cortocircuitado por defecto)
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/change-2.png" style={{width:400, height:'auto'}}/></div>

### Componentes Requeridos (Antes de Comenzar)

Antes de conectar cualquier cosa, asegúrate de tener lo siguiente:

- **Placa Controladora de Servo de Bus / Adaptador de Servo de Bus XIAO**
- **Servos de bus de la serie ST/SC compatibles**: ver [Sitio Web Oficial de la Serie Feetech SCS/STS/TTL](https://www.feetechrc.com/en/scs_ttl_Servo.html).
- **Fuente de Alimentación de 5~12V:** Una batería o adaptador de corriente. *El voltaje debe coincidir con las especificaciones de tu servo.*
- **Dispositivo Host:**
  - **Para UART Directo:** Un dispositivo con capacidad UART como un Raspberry Pi, Arduino, ESP32, o Seeed Studio XIAO.
  - **Para USB:** Una computadora (PC, Mac, Linux) o una computadora de placa única como un Raspberry Pi 4B, *más* un adaptador USB-a-UART.

:::note
Para el Adaptador de Servo de Bus XIAO, el XIAO ESP32-C3 está integrado, por lo que no hay necesidad de preparar un dispositivo host.
:::

- **Cables/Adaptadores de Conexión:** Cables puente (cables Dupont) si usas UART directo (excepto cuando uses XIAO con conexión directa de conectores). Un adaptador USB-a-UART si usas el método de conexión USB.

:::caution
Si usas servos de la serie SC, confirma que la fuente de alimentación coincida con sus requisitos de voltaje. La etiqueta de entrada DC de la placa está adaptada para servos de la serie ST pero también soporta voltajes de la serie SC. **Las configuraciones incorrectas de puente impedirán la comunicación con la placa controladora.**
:::

## Controlando Servos vía USB

Esta sección describe cómo controlar múltiples servos de bus a través de la Placa Controladora de Servo de Bus usando una conexión USB.

### Descripción General del Principio

La Placa Controladora de Servo de Bus funciona recibiendo comandos serie (UART) de tu dispositivo host (como una PC, Raspberry Pi, o microcontrolador) vía USB. Estos comandos son luego retransmitidos a los servos de bus conectados. Al enviar los comandos de protocolo serie apropiados, puedes controlar la posición, velocidad y otros parámetros de cada servo individualmente.

La placa en sí no interpreta o genera señales de control de servo de forma autónoma; en su lugar, actúa como un puente transparente entre tu host y los servos. Esto significa que eres responsable de enviar los paquetes de comando correctos de acuerdo con el protocolo de comunicación de tu servo.

### Ejemplo de Referencia

Para un ejemplo práctico de cómo enviar comandos a servos de bus Feetech (series ST/SC/STS/TTL), puedes consultar el siguiente ejemplo de Python:  
[lerobot/common/robot_devices/motors/feetech.py en GitHub](https://github.com/huggingface/lerobot/blob/main/lerobot/common/robot_devices/motors/feetech.py)

Este ejemplo demuestra cómo construir y enviar paquetes serie para controlar servos Feetech. Puedes adaptar el código a tu propia plataforma host y lenguaje de programación según sea necesario.

> **Nota:**  
>
> - El formato de comando específico y el protocolo pueden variar dependiendo del modelo de tu servo.  
> - Por favor consulta la documentación oficial de tu servo para el protocolo serie correcto y la estructura de comandos.  
> - Necesitarás escribir o adaptar un programa controlador que coincida con los requisitos de tu servo.

Para más detalles sobre el protocolo de las series Feetech SCS/STS/TTL, consulta la [documentación oficial de Feetech](https://www.feetechrc.com/en/scs_ttl_Servo.html).

## Controlando Servos a través de XIAO

A continuación, describimos cómo enviar señales para controlar el movimiento del servo a través de XIAO y cómo usar la biblioteca.

### Descripción General de la Biblioteca Arduino

:::tip
Si esta es tu primera vez usando Arduino, te recomendamos encarecidamente que consultes [Introducción a Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/).
:::

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/workloads/scservo" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar la Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Función

Antes de comenzar a desarrollar un sketch, veamos las funciones disponibles de la biblioteca.

- `SMS_STS(uint8_t id)` —— Crear un objeto servo con el ID especificado.  
  Parámetros: `uint8_t id` (ID del servo)  
  Salida: ninguna

- `void WritePos(uint8_t id, int16_t Position, uint16_t Time, uint16_t Speed)` —— Establecer la posición objetivo, tiempo y velocidad para el servo.  
  Parámetros: `uint8_t id`, `int16_t Position`, `uint16_t Time`, `uint16_t Speed`  
  Salida: ninguna

- `void RegWritePos(uint8_t id, int16_t Position, uint16_t Time, uint16_t Speed)` —— Establecer la posición objetivo, tiempo y velocidad para el servo, pero ejecutar más tarde con el comando Action.  
  Parámetros: `uint8_t id`, `int16_t Position`, `uint16_t Time`, `uint16_t Speed`  
  Salida: ninguna

- `void RegWriteAction()` —— Ejecutar todos los comandos RegWritePos registrados.  
  Parámetros: ninguno  
  Salida: ninguna

- `void WriteSpe(uint8_t id, int16_t Speed)` —— Establecer la velocidad de rotación para el servo.  
  Parámetros: `uint8_t id`, `int16_t Speed`  
  Salida: ninguna

- `void WritePosEx(uint8_t id, int16_t Position, uint16_t Time, uint16_t Speed, uint8_t ACC)` —— Establecer posición, tiempo, velocidad y aceleración.  
  Parámetros: `uint8_t id`, `int16_t Position`, `uint16_t Time`, `uint16_t Speed`, `uint8_t ACC`  
  Salida: ninguna

- `void RegWritePosEx(uint8_t id, int16_t Position, uint16_t Time, uint16_t Speed, uint8_t ACC)` —— Registrar posición, tiempo, velocidad y aceleración, ejecutar más tarde.  
  Parámetros: `uint8_t id`, `int16_t Position`, `uint16_t Time`, `uint16_t Speed`, `uint8_t ACC`  
  Salida: ninguna

- `void RegWriteActionEx()` —— Ejecutar todos los comandos RegWritePosEx registrados.  
  Parámetros: ninguno  
  Salida: ninguna

- `int16_t ReadPos(uint8_t id)` —— Leer la posición actual del servo.  
  Parámetros: `uint8_t id`  
  Salida: `int16_t` (posición)

- `int16_t ReadSpeed(uint8_t id)` —— Leer la velocidad actual del servo.  
  Parámetros: `uint8_t id`  
  Salida: `int16_t` (velocidad)

- `int16_t ReadLoad(uint8_t id)` —— Leer la carga actual del servo.  
  Parámetros: `uint8_t id`  
  Salida: `int16_t` (carga)

- `int16_t ReadVoltage(uint8_t id)` —— Leer el voltaje actual del servo.  
  Parámetros: `uint8_t id`  
  Salida: `int16_t` (voltaje)

- `int16_t ReadTemper(uint8_t id)` —— Leer la temperatura actual del servo.  
  Parámetros: `uint8_t id`  
  Salida: `int16_t` (temperatura)

- `int16_t ReadMove(uint8_t id)` —— Verificar si el servo se está moviendo.  
  Parámetros: `uint8_t id`  
  Salida: `int16_t` (1: moviéndose, 0: detenido)

- `int16_t ReadCurrent(uint8_t id)` —— Leer la corriente (corriente eléctrica) del servo.  
  Parámetros: `uint8_t id`  
  Salida: `int16_t` (corriente)

- `void SetID(uint8_t id, uint8_t newid)` —— Establecer un nuevo ID para el servo.  
  Parámetros: `uint8_t id`, `uint8_t newid`  
  Salida: ninguna

- `void Load(uint8_t id)` —— Habilitar el torque del servo.  
  Parámetros: `uint8_t id`  
  Salida: ninguna

- `void Unload(uint8_t id)` —— Deshabilitar el torque del servo.  
  Parámetros: `uint8_t id`  
  Salida: ninguna

- `int16_t ReadTorque(uint8_t id)` —— Leer el estado del torque del servo.  
  Parámetros: `uint8_t id`  
  Salida: `int16_t` (1: habilitado, 0: deshabilitado)

- `void LEDAlarm(uint8_t id, uint8_t enable)` —— Establecer el estado de alarma LED.  
  Parámetros: `uint8_t id`, `uint8_t enable`  
  Salida: ninguna

- `void Reset(uint8_t id)` —— Restablecer el servo a la configuración de fábrica.  
  Parámetros: `uint8_t id`  
  Salida: ninguna

- `void LockEprom(uint8_t id)` —— Bloquear la EEPROM del servo.  
  Parámetros: `uint8_t id`  
  Salida: ninguna

- `void UnlockEprom(uint8_t id)` —— Desbloquear la EEPROM del servo.  
  Parámetros: `uint8_t id`  
  Salida: ninguna

### Ejemplo XIAO

Ahora que tenemos nuestra biblioteca instalada y entendemos las funciones básicas, ejecutemos algunos ejemplos para nuestro 产品名称 para ver cómo se comporta.

**Paso 1.** Lanza la aplicación Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Descargar Arduino IDE</font></span></strong></a>
</div>

**Paso 2.** Selecciona tu modelo de placa de desarrollo y agrégala al Arduino IDE.

- Para usar **Seeed Studio XIAO ESP32-C3** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/XIAO_ESP32C3_Getting_Started#software-setup)** para completar la adición.

**Paso 3.** Completa el cableado como se muestra. Si necesitas conectar múltiples servos, puedes usar los cables que vienen con los servos para completar la conexión.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/8.jpg" style={{width:600, height:'auto'}}/></div>

#### Controlar múltiples servos

```cpp
#include <SCServo.h>

// Define the correct serial port for your target board
#if defined(CONFIG_IDF_TARGET_ESP32C3) || defined(CONFIG_IDF_TARGET_ESP32C6) || defined(CONFIG_IDF_TARGET_ESP32S3)
#define COMSerial Serial0
#else
#define COMSerial Serial1
#endif

// Define RX/TX pins for the servo bus (for reference)
// Note: On ESP32, pins are usually specified in COMSerial.begin().
// For example: COMSerial.begin(1000000, SERIAL_8N1, S_RXD, S_TXD);
// If your board uses the default pins for Serial1, no extra specification is needed.
#define S_RXD D7
#define S_TXD D6

#define SERVO_NUM 2 // Number of servos

SMS_STS st; // Servo control object

// --- Servo Configuration ---
byte ID[SERVO_NUM] = {1, 2};                // IDs of the servos
u16 Speed[SERVO_NUM] = {1500, 1500};         // Set a medium speed for the servos
byte ACC[SERVO_NUM] = {50, 50};             // Set a medium acceleration for the servos
s16 Pos[SERVO_NUM] = {2048, 2048};           // Servo position array, initialized to the midpoint (2048)

void setup()
{
  // Start the main serial port for debugging and receiving commands
  Serial.begin(115200);
  // Wait a moment for the Serial Monitor to connect
  delay(2000); 
  Serial.println("--- Servo Control Program Start ---");

  // Start the serial port for controlling the servos
  COMSerial.begin(1000000, SERIAL_8N1);
  st.pSerial = &COMSerial; // Associate the control object with the serial port

  Serial.println("Checking servo connection status...");
  for (int i = 0; i < SERVO_NUM; i++) {
    if (st.Ping(ID[i]) != -1) {
      Serial.print("Servo with ID ");
      Serial.print(ID[i]);
      Serial.println(" is connected.");
    } else {
      Serial.print("Error: Servo with ID ");
      Serial.print(ID[i]);
      Serial.println(" is not responding!");
    }
  }

  // --- Power-on Self-Test ---
  // This section makes the servos move automatically on power-up to confirm they are working correctly.
  Serial.println("\nExecuting power-on self-test movement...");

  // 1. Move to position 1024
  Serial.println("Moving to position 1024...");
  for(int i=0; i<SERVO_NUM; i++) {
    Pos[i] = 1024;
  }
  st.SyncWritePosEx(ID, SERVO_NUM, Pos, Speed, ACC);
  delay(2000); // Wait for the movement to complete

  // 2. Move to position 3072
  Serial.println("Moving to position 3072...");
  for(int i=0; i<SERVO_NUM; i++) {
    Pos[i] = 3072;
  }
  st.SyncWritePosEx(ID, SERVO_NUM, Pos, Speed, ACC);
  delay(2000); // Wait for the movement to complete

  // 3. Return to center position (2048) to prepare for user commands
  Serial.println("Returning to center position (2048)...");
  for(int i=0; i<SERVO_NUM; i++) {
    Pos[i] = 2048;
  }
  st.SyncWritePosEx(ID, SERVO_NUM, Pos, Speed, ACC);
  delay(1500);

  Serial.println("\n--- Initialization Complete ---");
  Serial.println("Enter 'j' to decrease the angle, or 'k' to increase it.");
  Serial.println("-----------------------------------");
}

void loop()
{
  // Check if the user has sent a command via the Serial Monitor
  if (Serial.available()) {
    String input = Serial.readString();
    input.trim(); // Remove extra spaces or newlines

    bool shouldMove = false; // Flag to indicate if a valid command was received

    if (input.startsWith("j")) {
      Serial.println("Received command: 'j'. Decreasing angle.");
      for (int i = 0; i < SERVO_NUM; i++) {
        Pos[i] -= 512; // Move a small step for easy observation
        if (Pos[i] < 0) {
          Pos[i] = 0; // Prevent going below the minimum range
        }
      }
      shouldMove = true;
    } else if (input.startsWith("k")) {
      Serial.println("Received command: 'k'. Increasing angle.");
      for (int i = 0; i < SERVO_NUM; i++) {
        Pos[i] += 512; // Move a small step
        if (Pos[i] > 4095) {
          Pos[i] = 4095; // Prevent going above the maximum range
        }
      }
      shouldMove = true;
    } else {
      Serial.print("Unknown command: '");
      Serial.print(input);
      Serial.println("'. Please enter 'j' or 'k'.");
    }

    // If a valid command was received, send the new positions to the servos
    if (shouldMove) {
      Serial.print("Moving servos to new positions: [");
      for(int i = 0; i < SERVO_NUM; i++){
        Serial.print(Pos[i]);
        if(i < SERVO_NUM - 1) Serial.print(", ");
      }
      Serial.println("]");

      st.SyncWritePosEx(ID, SERVO_NUM, Pos, Speed, ACC);
    }
  }
}
```

Este ejemplo demuestra cómo controlar múltiples servos de bus de la serie Feetech SCS usando el XIAO y la biblioteca SCServo. El código inicializa dos servos, los calibra y permite al usuario ajustar sus posiciones de forma interactiva mediante comandos serie. Cuando envías 'j' o 'k' a través del monitor serie, el código disminuirá o aumentará el ángulo de todos los servos conectados, respectivamente. La posición actual de cada servo se rastrea y actualiza en consecuencia, y las nuevas posiciones se envían a los servos usando la función `SyncWritePosEx`.

Cómo personalizar para tu propio proyecto:

- **Número de Servos**: Cambia el valor de `Servo_Num` y actualiza los arrays ID, Speed, ACC y Pos para que coincidan con el número e IDs de tus servos.
IDs de Servos: Modifica el array ID para que coincida con los IDs de tus servos conectados.

- **Velocidad y Aceleración**: Ajusta los arrays Speed y ACC para establecer diferentes velocidades y aceleraciones para cada servo.

- **Pines Serie**: Si usas diferentes pines para UART, actualiza las definiciones S_RXD y S_TXD.

- **Lógica de Movimiento**: Puedes cambiar la lógica en la función `loop()` para implementar comportamientos más complejos o específicos del proyecto, como responder a diferentes comandos serie, agregar retroalimentación de sensores o integrar con otro hardware.

- **Posición Inicial**: Establece los valores iniciales en el array `Pos` para definir las posiciones de inicio de tus servos.

## Preguntas Frecuentes

:::tip

Se recomienda leer estas preguntas frecuentes antes de comenzar tu proyecto. Abordan preguntas comunes y problemas potenciales.

:::

<details>
<summary>¿Qué pasa si el voltaje de la fuente de alimentación no coincide con mi servo?</summary>

La placa y el servo pueden funcionar mal o sufrir daños. Siempre haz coincidir el voltaje de entrada con los requisitos de tu servo.
</details>

<details>
<summary>¿Puedo conectar múltiples servos a la vez?</summary>

Sí, se admiten múltiples servos, pero asegúrate de que tu fuente de alimentación pueda manejar el consumo de corriente combinado.

</details>

<br/>

## Recursos

- **[PDF]** [Esquemático de la Placa Controladora de Servo de Bus](https://files.seeedstudio.com/wiki/bus_servo_driver_board/202004237_Servo_Driver_Board_for_Seeed_Studio_XIAO_SCH_PDF_250225.pdf)

### Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">

<a href="https://forum.seeedstudio.com/" class="button_forum"></a>

<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>

</div>

<div class="button_tech_support_container">

<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>

<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>

</div>
