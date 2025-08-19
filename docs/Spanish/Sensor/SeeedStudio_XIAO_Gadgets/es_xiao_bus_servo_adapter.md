---
description: Getting Started with XIAO Bus Servo Adapter
title: Getting Started with XIAO Bus Servo Adapter
keywords:
  - servo
image: https://files.seeedstudio.com/wiki/bus_servo_driver_board/10.webp
sidebar_position: 8
slug: /es/xiao_bus_servo_adapter
last_update:
  date: 07/21/2025
  author: Guillermo
---

# Primeros pasos con Bus Servo Driver Board / XIAO Bus Servo Adapter

Esta wiki cubre dos productos relacionados: la **Bus Servo Driver Board** y el **XIAO Bus Servo Adapter**.

- La **Bus Servo Driver Board** **no** incluye un microcontrolador XIAO ESP32-C3 integrado, ni viene con una carcasa impresa en 3D. Está diseñada para funcionar como una placa interfaz general para servos en bus, permitiendo conectar y controlar servos mediante un controlador externo de tu elección.

- El **XIAO Bus Servo Adapter**, en cambio, **incluye** el XIAO ESP32-C3 como controlador principal y viene con una carcasa impresa en 3D. Con esta versión puedes controlar directamente servos en bus usando el XIAO integrado, haciendo de esta una solución más integrada y lista para proyectos robóticos.

Consulta el resto de esta guía para detalles sobre configuración y uso de ambos productos.

<div class="table-center">
  <table align="center">
    <tr>
        <th>Bus Servo Driver Board</th>
        <th>XIAO Bus Servo Adapter</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/6.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/5.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Bus-Servo-Driver-Board-for-XIAO-p-6413.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-Bus-Servo-Adapter-for-XIAO-p-6397.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## Introducción

La Bus Servo Driver Board / XIAO Bus Servo Adapter es una solución compacta y potente de Seeed Studio, diseñada para controlar servos en bus serial para proyectos de robótica y automatización. Con soporte para comunicación UART, permite control preciso y retroalimentación de múltiples servos serie ST/SC, incluyendo la serie Feetech SCS (consulta [Sitio Oficial Feetech SCS/STS/TTL](https://www.feetechrc.com/en/scs_ttl_Servo.html)). Esto la hace ideal para aplicaciones como brazos robóticos, hexápodos, robots humanoides y robots con ruedas que requieren retroalimentación de ángulo y carga de servo.

Esta guía se enfoca en la configuración hardware, conexiones físicas, especificaciones clave y **ajustes críticos de jumpers** para facilitar la integración efectiva de la placa en tus proyectos.

:::warning Advertencia de Seguridad

Siempre desconecta la alimentación antes de conectar o desconectar servos o cableado. Asegúrate que el voltaje de entrada coincida con los requerimientos de los servos para evitar daños.

:::

## Descripción del Hardware

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Bus Servo Driver Board" label="Bus Servo Driver Board">


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/1.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/2.png" style={{width:800, height:'auto'}}/></div>

La Bus Servo Driver Board cuenta con varios puntos de conexión clave:

**Entrada:**

* **DC IN (5.5 * 2.1mm):** Es la entrada de alimentación para la placa y los servos conectados. Conecta una fuente de 5~12V aquí. *Es fundamental que el voltaje de esta fuente coincida con el requerido por tus servos.* Por ejemplo, servos serie ST típicamente operan a 9V, mientras que los serie SC pueden requerir 12V.

**Salida:**

* **Interfaz para Servo:** Puerto dedicado para conectar tus servos en bus serie ST/SC. Asegúrate de que el conector esté alineado correctamente.

**Interfaz de Control:**

* **UART (RX/TX):** Pines para comunicación serial para controlar los servos. El método de conexión y la configuración de jumpers dependen de tu dispositivo anfitrión. Consulta más abajo para detalles.

</TabItem>

<TabItem value="XIAO Bus Servo Adapter" label="XIAO Bus Servo Adapter">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/3.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/4.png" style={{width:800, height:'auto'}}/></div>

**Entrada:**

* **DC IN (5.5 * 2.1mm):** Entrada de alimentación para la placa y los servos conectados. Conecta una fuente de 5~12V aquí. *El voltaje debe coincidir con las especificaciones de tus servos.* Por ejemplo, servos serie ST operan típicamente a 9V, y serie SC pueden requerir 12V.

**Salida:**

* **Interfaz para Servo:** Puerto dedicado para conectar servos en bus serie ST/SC. Asegúrate de la correcta alineación del conector.

</TabItem>

</Tabs>

## Primeros pasos

### Selección del modo operativo de la placa controladora **(Solo para Bus Servo Driver Board)**

:::tip
Para el XIAO Bus Servo Adapter, no necesitas modificar ningún circuito para usar el XIAO ESP32-C3 incluido para controlar los servos, puedes saltarte esta parte directamente.
:::

La Bus Servo Driver Board ofrece dos métodos principales de conexión: conexión UART directa y conexión USB vía adaptador USB a UART. *La configuración correcta del jumper es esencial para el funcionamiento adecuado.*

#### Conexión UART (para MCUs, XIAO, ESP32, etc.)

Este método se usa cuando se conecta directamente a los pines UART de un microcontrolador (MCU) como ESP32, Arduino, Seeed Studio XIAO, o una computadora de placa única.

* **Cableado:**
    * Conecta el pin `RX` en la placa controladora al pin `TX` (D7) en tu dispositivo anfitrión.
    * Conecta el pin `TX` en la placa controladora al pin `RX` (D6) en tu dispositivo anfitrión.
    * Para dispositivos como Seeed Studio XIAO, puedes insertar directamente el XIAO en los headers provistos, asegurando la correcta alineación de pines. Esto elimina la necesidad de cables Dupont para la conexión UART.

* **Configuración de jumper (Crítico):**

    * Usa un jumper de 2.54mm para hacer puente en el pin de 2 pines en la parte frontal de la placa. (Está puenteado por defecto)  
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/change-2.png" style={{width:400, height:'auto'}}/></div>

* **Alimentación del anfitrión:** Tu dispositivo anfitrión (ej. Raspberry Pi Zero, ESP32, XIAO) requiere su propia fuente de alimentación separada.

#### Conexión USB

Este método se usa cuando se conecta a una computadora o computadora de placa única con puerto USB (ej. PC o Raspberry Pi 4B). Simplemente conecta la placa controladora a la computadora mediante un cable USB.

* **Cableado:**
    * Simplemente conecta la placa controladora a tu computadora usando un cable USB.

* **Configuración de jumper (Crítico):**

    * **Paso 1.** Ubica el jumper de soldadura en la parte trasera de la placa. **Para comunicación USB, debes asegurarte que las dos almohadillas estén conectadas (exista un puente de soldadura entre ellas).**

    - Almohadillas traseras para versión 1:  

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/7.jpg" style={{width:400, height:'auto'}}/></div>

    - Almohadillas traseras para versión 2:  
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/change-1.png" style={{width:400, height:'auto'}}/></div>

    * **Paso 2.** Usa un jumper de 2.54mm para hacer puente en el pin de 2 pines en la parte frontal de la placa. (Está puenteado por defecto)  
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/bus_servo_driver_board/change-2.png" style={{width:400, height:'auto'}}/></div>

### Componentes requeridos (Antes de comenzar)

Antes de conectar cualquier cosa, asegúrate de tener lo siguiente:

* **Bus Servo Driver Board / XIAO Bus Servo Adapter**
* **Servos en bus compatibles serie ST/SC**: ver [Sitio Oficial Feetech SCS/STS/TTL](https://www.feetechrc.com/en/scs_ttl_Servo.html).
* **Fuente de alimentación 5~12V:** batería o adaptador. *El voltaje debe coincidir con las especificaciones de tu servo.*
* **Dispositivo anfitrión:**
    * **Para UART directa:** dispositivo con UART como Raspberry Pi, Arduino, ESP32 o Seeed Studio XIAO.
    * **Para USB:** computadora (PC, Mac, Linux) o computadora de placa única como Raspberry Pi 4B, *más* un adaptador USB a UART.

:::note
Para el XIAO Bus Servo Adapter, el XIAO ESP32-C3 está integrado, por lo que no necesitas preparar un dispositivo anfitrión.
:::

* **Cables/Adaptadores:** cables jumper (Dupont) si usas UART directa (excepto si usas XIAO con conexión directa a headers). Adaptador USB a UART si usas conexión USB.

:::caution
Si usas servos serie SC, confirma que la fuente de alimentación cumple con sus requisitos de voltaje. La etiqueta DC input de la placa está diseñada para servos serie ST pero soporta voltajes de la serie SC. **Una configuración incorrecta de jumpers impedirá la comunicación con la placa controladora.**
:::

## Control de servos vía USB

Esta sección describe cómo controlar múltiples servos en bus a través de la Bus Servo Driver Board usando conexión USB.

### Principio general

La Bus Servo Driver Board recibe comandos seriales (UART) desde tu dispositivo anfitrión (como PC, Raspberry Pi o microcontrolador) vía USB. Estos comandos se retransmiten a los servos conectados. Enviando los comandos seriales adecuados, puedes controlar posición, velocidad y otros parámetros de cada servo individualmente.

La placa no interpreta ni genera señales de control de servo de forma autónoma; actúa como puente transparente entre tu anfitrión y los servos. Eres responsable de enviar los paquetes de comando correctos según el protocolo de tu servo.

### Ejemplo de referencia

Para un ejemplo práctico de cómo enviar comandos a servos Feetech (series ST/SC/STS/TTL), consulta el siguiente ejemplo en Python:  
[lerobot/common/robot_devices/motors/feetech.py en GitHub](https://github.com/huggingface/lerobot/blob/main/lerobot/common/robot_devices/motors/feetech.py)

Este ejemplo muestra cómo construir y enviar paquetes seriales para controlar servos Feetech. Puedes adaptar el código a tu plataforma anfitrión y lenguaje de programación.

> **Nota:**  
> - El formato y protocolo específico pueden variar según el modelo de servo.  
> - Consulta la documentación oficial de tu servo para conocer el protocolo y estructura de comandos.  
> - Necesitarás escribir o adaptar un programa controlador acorde a tu servo.

Para más detalles sobre el protocolo Feetech SCS/STS/TTL, consulta la [documentación oficial Feetech](https://www.feetechrc.com/en/scs_ttl_Servo.html).

## Control de servos vía XIAO

A continuación describimos cómo enviar señales para controlar el movimiento del servo mediante XIAO y cómo usar la librería.

### Resumen de la librería Arduino

:::tip
Si es tu primera vez usando Arduino, te recomendamos consultar [Primeros pasos con Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).
:::

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/workloads/scservo" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar la Librería</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Funciones disponibles

Antes de comenzar a programar un sketch, veamos las funciones disponibles en la librería.

- `SMS_STS(uint8_t id)` —— Crea un objeto servo con el ID especificado.  
  Parámetros: `uint8_t id` (ID del servo)  
  Salida: ninguna

- `void WritePos(uint8_t id, int16_t Position, uint16_t Time, uint16_t Speed)` —— Establece posición, tiempo y velocidad objetivo del servo.  
  Parámetros: `uint8_t id`, `int16_t Position`, `uint16_t Time`, `uint16_t Speed`  
  Salida: ninguna

- `void RegWritePos(uint8_t id, int16_t Position, uint16_t Time, uint16_t Speed)` —— Establece posición, tiempo y velocidad objetivo, se ejecuta luego con comando Action.  
  Parámetros: `uint8_t id`, `int16_t Position`, `uint16_t Time`, `uint16_t Speed`  
  Salida: ninguna

- `void RegWriteAction()` —— Ejecuta todos los comandos RegWritePos registrados.  
  Parámetros: ninguna  
  Salida: ninguna

- `void WriteSpe(uint8_t id, int16_t Speed)` —— Establece velocidad de rotación del servo.  
  Parámetros: `uint8_t id`, `int16_t Speed`  
  Salida: ninguna

- `void WritePosEx(uint8_t id, int16_t Position, uint16_t Time, uint16_t Speed, uint8_t ACC)` —— Establece posición, tiempo, velocidad y aceleración.  
  Parámetros: `uint8_t id`, `int16_t Position`, `uint16_t Time`, `uint16_t Speed`, `uint8_t ACC`  
  Salida: ninguna

- `void RegWritePosEx(uint8_t id, int16_t Position, uint16_t Time, uint16_t Speed, uint8_t ACC)` —— Registra posición, tiempo, velocidad y aceleración, se ejecuta luego.  
  Parámetros: `uint8_t id`, `int16_t Position`, `uint16_t Time`, `uint16_t Speed`, `uint8_t ACC`  
  Salida: ninguna

- `void RegWriteActionEx()` —— Ejecuta todos los comandos RegWritePosEx registrados.  
  Parámetros: ninguna  
  Salida: ninguna

- `int16_t ReadPos(uint8_t id)` —— Lee la posición actual del servo.  
  Parámetros: `uint8_t id`  
  Salida: `int16_t` (posición)

- `int16_t ReadSpeed(uint8_t id)` —— Lee la velocidad actual del servo.  
  Parámetros: `uint8_t id`  
  Salida: `int16_t` (velocidad)

- `int16_t ReadLoad(uint8_t id)` —— Lee la carga actual del servo.  
  Parámetros: `uint8_t id`  
  Salida: `int16_t` (carga)

- `int16_t ReadVoltage(uint8_t id)` —— Lee el voltaje actual del servo.  
  Parámetros: `uint8_t id`  
  Salida: `int16_t` (voltaje)

- `int16_t ReadTemper(uint8_t id)` —— Lee la temperatura actual del servo.  
  Parámetros: `uint8_t id`  
  Salida: `int16_t` (temperatura)

- `int16_t ReadMove(uint8_t id)` —— Consulta si el servo está en movimiento.  
  Parámetros: `uint8_t id`  
  Salida: `int16_t` (1: moviéndose, 0: detenido)

- `int16_t ReadCurrent(uint8_t id)` —— Lee la corriente eléctrica del servo.  
  Parámetros: `uint8_t id`  
  Salida: `int16_t` (corriente)

- `void SetID(uint8_t id, uint8_t newid)` —— Asigna un nuevo ID al servo.  
  Parámetros: `uint8_t id`, `uint8_t newid`  
  Salida: ninguna

- `void Load(uint8_t id)` —— Habilita el torque del servo.  
  Parámetros: `uint8_t id`  
  Salida: ninguna

- `void Unload(uint8_t id)` —— Deshabilita el torque del servo.  
  Parámetros: `uint8_t id`  
  Salida: ninguna

- `int16_t ReadTorque(uint8_t id)` —— Lee el estado del torque del servo.  
  Parámetros: `uint8_t id`  
  Salida: `int16_t` (1: habilitado, 0: deshabilitado)

- `void LEDAlarm(uint8_t id, uint8_t enable)` —— Configura el estado de alarma LED.  
  Parámetros: `uint8_t id`, `uint8_t enable`  
  Salida: ninguna

- `void Reset(uint8_t id)` —— Restablece el servo a configuración de fábrica.  
  Parámetros: `uint8_t id`  
  Salida: ninguna

- `void LockEprom(uint8_t id)` —— Bloquea la EEPROM del servo.  
  Parámetros: `uint8_t id`  
  Salida: ninguna

- `void UnlockEprom(uint8_t id)` —— Desbloquea la EEPROM del servo.  
  Parámetros: `uint8_t id`  
  Salida: ninguna

### Ejemplo con XIAO

Con la librería instalada y conociendo las funciones básicas, vamos a ejecutar algunos ejemplos para nuestro producto y observar su comportamiento.

**Paso 1.** Abre la aplicación Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div className="download_arduino_container" style={{ textAlign: 'center' }}>
  <a
    className="download_arduino_item"
    href="https://www.arduino.cc/en/software"
    target="_blank"
    rel="noopener noreferrer"
  >
    <strong>
      <span>
        <font color="#FFFFFF" size="4">Descarga Arduino IDE</font>
      </span>
    </strong>
  </a>
</div>

**Paso 2.** Selecciona el modelo de tu placa de desarrollo y añádelo al Arduino IDE.

- Para usar **Seeed Studio XIAO ESP32-C3** en los siguientes ejemplos, consulta **[este tutorial](https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started#software-setup)** para completar la configuración.

**Paso 3.** Realiza las conexiones como se muestra. Si necesitas conectar varios servos, puedes usar los cables que vienen con los servos para completar la conexión.

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

Este ejemplo demuestra cómo controlar múltiples servos en bus Feetech serie SCS usando el XIAO y la librería SCServo. El código inicializa dos servos, los calibra y permite ajustar sus posiciones de forma interactiva mediante comandos seriales. Cuando envías 'j' o 'k' desde el monitor serial, el código disminuye o incrementa el ángulo de todos los servos conectados respectivamente. La posición actual de cada servo se rastrea y actualiza, y las nuevas posiciones se envían a los servos usando la función `SyncWritePosEx`.

### Cómo personalizar para tu proyecto

- **Número de servos:** Cambia el valor de `Servo_Num` y actualiza los arreglos `ID`, `Speed`, `ACC` y `Pos` para que coincidan con el número y los IDs de tus servos.  
- **IDs de servos:** Modifica el arreglo `ID` para que corresponda a los IDs de tus servos conectados.  
- **Velocidad y aceleración:** Ajusta los arreglos `Speed` y `ACC` para definir diferentes velocidades y aceleraciones para cada servo.  
- **Pines seriales:** Si usas otros pines UART, actualiza las definiciones `S_RXD` y `S_TXD`.  
- **Lógica de movimiento:** Puedes modificar la lógica en la función `loop()` para implementar comportamientos más complejos o específicos de tu proyecto, como responder a distintos comandos seriales, integrar sensores o controlar otro hardware.  
- **Posición inicial:** Define los valores iniciales en el arreglo `Pos` para establecer las posiciones de partida de tus servos.

## Preguntas frecuentes (FAQs)

:::tip
Se recomienda leer estas FAQs antes de comenzar tu proyecto. Resuelven dudas comunes y posibles problemas.
:::

<details>
  <summary>¿Qué pasa si el voltaje de la fuente no coincide con el de mi servo?</summary>
  La placa y el servo podrían funcionar mal o dañarse. Siempre asegúrate de que el voltaje de entrada coincida con el requerido por tu servo.
</details>

<details>
  <summary>¿Puedo conectar múltiples servos a la vez?</summary>
  Sí, se soportan múltiples servos, pero asegúrate que tu fuente de alimentación pueda manejar la corriente total requerida.
</details>

## Recursos

- **[PDF]** [Esquema Bus Servo Driver Board](https://files.seeedstudio.com/wiki/bus_servo_driver_board/202004237_Servo_Driver_Board_for_Seeed_Studio_XIAO_SCH_PDF_250225.pdf)  
- **[STL]** [Carcasa superior XIAO Bus Servo Adapter](https://files.seeedstudio.com/wiki/bus_servo_driver_board/xiao_bus_servo_adapter_top.stl)  
- **[STL]** [Carcasa inferior XIAO Bus Servo Adapter](https://files.seeedstudio.com/wiki/bus_servo_driver_board/xiao_bus_servo_adapter_bottom.stl)  

### Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte el soporte que necesites y garantizar que tu experiencia sea lo más fluida posible. Ofrecemos diversos canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">

<a href="https://forum.seeedstudio.com/" class="button_forum"></a>

<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>

</div>

<div class="button_tech_support_container">

<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>

<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>

</div>



