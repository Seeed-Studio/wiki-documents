---
description: En este tutorial, nos embarcaremos en un viaje para explorar el desarrollo de aplicaciones Zigbee utilizando la placa de desarrollo XIAO ESP32C6. La XIAO ESP32C6 es una placa compacta pero potente que cuenta con el chip ESP32-C6, que ofrece conectividad integrada Wi-Fi y Bluetooth Low Energy (BLE). Al aprovechar el ESP Zigbee SDK, podemos aprovechar todo el potencial de la XIAO ESP32C6 y extender sus capacidades para incluir funcionalidad Zigbee.
title: Guía de Inicio Rápido XIAO ESP32C6 Zigbee (Arduino)
image: https://files.seeedstudio.com/wiki/xiaoc6_zigbee/3.webp
slug: /es/xiao_esp32c6_zigbee_arduino
last_update:
  date: 11/25/2024
  author: Spencer
---

## Descripción General

Este tutorial te guía a través de la implementación de aplicaciones [Zigbee](https://en.wikipedia.org/wiki/Zigbee) en la placa de desarrollo Seeed Studio **XIAO ESP32C6**. Impulsada por el chip ESP32-C6, esta placa combina conectividad **Wi-Fi**, **Bluetooth Low Energy (BLE)** y **Zigbee**, haciéndola perfecta para **aplicaciones IoT**. Los ejemplos en esta guía utilizan el **esp-arduino Zigbee SDK** para dar vida a la funcionalidad Zigbee.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee/0.png"
    style={{ width: 680, height: 'auto', "border-radius": '12.8px' }}
  />
</div>

### Lo Que Aprenderás

:::note Prerrequisito: Configuración de Desarrollo Arduino

Si no has preparado tu Arduino IDE, consulta la **[Guía de Inicio](https://wiki.seeedstudio.com/es/xiao_esp32c6_getting_started/#software-preparation)**. Asegúrate de que la **versión de la placa esp-arduino** sea **v3.0.6 o posterior**, que soporta funcionalidad Zigbee.

:::

Esta guía se enfoca en los aspectos esenciales del uso de Zigbee con la XIAO ESP32C6, asegurando una comprensión clara de sus aplicaciones prácticas:

1. [Descripción General de Zigbee](#zigbee_overview): Comprende el protocolo Zigbee y su estructura de red.
2. [Ejemplos Arduino Zigbee](#examples): Implementa ejemplos Zigbee como bombillas y interruptores en el ESP32-C6.

## Descripción General de Zigbee {#zigbee_overview}

Zigbee es un protocolo de comunicación inalámbrica de **bajo consumo** y **bajo ancho de banda** basado en el estándar IEEE 802.15.4. Está diseñado para escenarios IoT como **automatización del hogar**, **ciudades inteligentes** y **control industrial**, ofreciendo capacidades robustas de red en malla para comunicación confiable en entornos dinámicos.

### Modelo de Datos Zigbee

La comunicación Zigbee se basa en la **Biblioteca de Clústeres Zigbee (ZCL)**, que define cómo los dispositivos organizan su funcionalidad e interactúan. Los componentes clave incluyen:

1. **Tipos de Dispositivos**
    Los dispositivos Zigbee (por ejemplo, interruptores, sensores, luces) están predefinidos con comportamientos específicos, agrupados en **Clústeres** funcionales.

2. **Clústeres**
    Los clústeres son agrupaciones lógicas de:

   - **Atributos**: Representan estados del dispositivo, como brillo o temperatura.
   - **Comandos**: Desencadenan acciones, como encender una luz o establecer el brillo al 50%.

   Ejemplos:

   - **Clúster On/Off**: Controla estados binarios como la energía.
   - **Clúster de Control de Nivel**: Ajusta intensidad o brillo.
   - **Clúster de Medición de Temperatura**: Envía lecturas de temperatura.
   - **Clúster de Escenas**: Guarda y recupera configuraciones preestablecidas.

3. **Atributos y Comandos**
    Los atributos almacenan datos del dispositivo (por ejemplo, estado, configuración), mientras que los comandos inician acciones.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee/datamodel.png" style={{width:800, height:'auto'}}/></div>

### Arquitectura de Red Zigbee

Una red Zigbee consiste en tres tipos principales de nodos:

1. **Coordinador Zigbee (ZC)**  
   - Sirve como el centro de la red.  
   - Maneja la creación de la red, autenticación de dispositivos y asignación de direcciones.  
   - Responsable de inicializar y gestionar la red.  
   - Cada red Zigbee puede tener solo **un Coordinador**.  

2. **Router Zigbee (ZR)**  
   - Extiende el alcance de la red retransmitiendo mensajes entre dispositivos.  
   - Soporta dispositivos adicionales uniéndose a la red.  
   - Típicamente alimentado por la red eléctrica para asegurar operación constante y retransmisión confiable de mensajes.  
   - Los Routers alimentados por batería son posibles pero menos comunes debido a mayores demandas de energía.  

3. **Dispositivo Final Zigbee (ZED)**  
   - Dispositivos ligeros y eficientes en energía que se comunican con un nodo padre (ya sea un Coordinador o Router).  
   - No enrutan mensajes a otros dispositivos.  
   - Optimizados para operación con batería y típicamente entran en modos de suspensión para conservar energía.

:::note

- **Direccionamiento y Enrutamiento**:
  - Zigbee utiliza un esquema de direccionamiento de 16 bits. Los dispositivos se comunican a través de una mezcla de direccionamiento directo e indirecto.  
  - Las decisiones de enrutamiento son tomadas por los Routers utilizando algoritmos como AODV (Ad hoc On-demand Distance Vector).  

- **Gestión de Energía**:
  - Los Dispositivos Finales Zigbee están optimizados para bajo consumo de energía. A menudo operan en modo de suspensión y solo despiertan cuando es necesario.  
  - Los Routers y el Coordinador generalmente están alimentados por la red eléctrica para disponibilidad consistente.

:::

#### Topologías de Red

Zigbee soporta tres topologías de red principales, dependiendo de los requisitos de la aplicación y el entorno:

#### 1. Topología de Malla

- Un solo Coordinador y múltiples Routers forman una red robusta y auto-reparable.  
- Los dispositivos pueden redirigir dinámicamente los mensajes si una ruta de comunicación se interrumpe, asegurando alta confiabilidad.  
- Ideal para redes a gran escala que requieren amplia cobertura y redundancia.  

  <div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNptkcEOgjAQRH9lsydI5CDcuIo_oJ5MLxu6AlG6pLYmxvjvVlFSgj3NtG9nmvaBtWjGEgGgsTS0cKiUgXFtRKzuDDmxSRKZNIUsy2An3rFdJ8koYJ2m_0YjNp_YPGK_OR9ua3TFt67mEBs0jGYWHeOjLqbYYsHlMff3bKrMZ5XLGxZzvJjhoRlX2LPtqdPhPR_vYYWu5Z4VlkFqsmeFyjwDR97J_m5qLJ31vEIrvml_xg-aHFcdhQ_psTzR5Rp2BzJHkZ9_vgDkroUg" style={{width:380, height:'auto', "border-radius": '1px'}}/></div>

- **Características Clave**:  
  - El redireccionamiento dinámico asegura alta confiabilidad.  
  - Soporta redes grandes con cobertura escalable.  
  - Los mecanismos de auto-reparación aumentan la tolerancia a fallos.  

#### 2. Topología de Árbol

- El Coordinador actúa como la raíz de una estructura jerárquica, con Routers formando ramas.  
- Cada rama puede tener múltiples Dispositivos Finales o Routers adicionales, creando una estructura similar a un árbol.  
- La comunicación depende de rutas jerárquicas, lo que introduce potenciales puntos únicos de falla.  

  <div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNqF0MEKwjAMBuBXCTmt4A5OT7s6X0A9SS9hjW7omlFbQcR3tzqVFQV7yl--_IdcsRbDWCIA7B31DWwqbWF4CxFnWkteXJaNglKQ5zmsJHh20ywbBpgq9Wt1ZIuPLUb21fN0S2sqPrc1x9o4wxCS6p-8SPh3e5HyWcJn__g84XOlcIIdu45aE093fSxr9A13rLGMoyF30KjtLToKXtYXW2PpXeAJOgn7BssdHU8xhd6Q56qlePzu89uT3Yq88-0OO1R_gA" style={{width:600, height:'auto', "border-radius": '1px'}}/></div>

- **Características Clave**:  
  - Funciona bien para entornos estructurados.  
  - Más fácil de configurar y gestionar que una red de malla.  
  - Vulnerable a fallas de rama, que pueden desconectar sub-redes enteras.  

#### 3. Topología de Estrella

- Todos los dispositivos se comunican directamente con el Coordinador.  
- Simple de implementar, pero el Coordinador es un punto único de falla.  
- Mejor adecuado para redes pequeñas donde los dispositivos están ubicados cerca del Coordinador.  

  <div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNqNkMEKwjAMhl8l5LTCdth269X5BHqSXsIat6JtR20FGXt3K0Nx4MGc_i_kCyEz9l4zSgSAIdA0wrFTDtbaeR-0cRR9KIovEAKqqoK90x3fTc91UeQMK0AtxK8NW6XZKM0_SrtRWiGwRMvBktH5_vm1QGEc2bJCmaOmcFGo3JLnKEV_eLgeZQyJSww-DSPKM11vmdKkKXJnKH_AfroTuZP3b16etDldgQ" style={{width:480, height:'auto', "border-radius": '1px'}}/></div>

- **Características Clave**:  
  - Fácil de configurar y gestionar.  
  - Escalabilidad limitada debido a restricciones de alcance y capacidad de dispositivos.  
  - La dependencia del Coordinador para toda la comunicación reduce la tolerancia a fallos.  

Después de obtener una vista rápida de estos conceptos, comencemos con el desarrollo Zigbee en XIAO ESP32C6.

## Ejemplos Arduino {#examples}

Consulta [Ejemplos Zigbee - Arduino](https://github.com/espressif/arduino-esp32/tree/master/libraries/Zigbee/examples)

### Ejemplo 1: Bombilla e Interruptor de Luz {#Light_Bulb_switch}

Primero, prepara dos XIAO ESP32C6, una como **Bombilla Zigbee** y la otra como **Interruptor de Luz Zigbee**.

Utiliza los ejemplos `Zigbee_On_Off_Light` y `Zigbee_On_Off_Switch` para entender cómo los dispositivos habilitados para Zigbee interactúan en escenarios del mundo real. ¿Listo para comenzar? ¡Sumerjámonos en el desarrollo!

#### Bombilla Zigbee

Asegúrate de haber optado por `Zigbee ED(end device)` para el Modo Zigbee.

algunas constantes:

```cpp
#define LED_PIN               LED_BUILTIN
#define BUTTON_PIN            9  // ESP32-C6/H2 Boot button
#define ZIGBEE_LIGHT_ENDPOINT 10
```

- `LED_PIN` se utiliza para controlar el LED integrado.
- `BUTTON_PIN` es para el botón de restablecimiento de fábrica.
- `ZIGBEE_LIGHT_ENDPOINT` representa el endpoint Zigbee para la bombilla, que actúa como un identificador de servicio en la red.

##### Definir el Dispositivo de Luz Zigbee

```cpp
ZigbeeLight zbLight = ZigbeeLight(ZIGBEE_LIGHT_ENDPOINT);
```

Esta línea define un objeto `ZigbeeLight` con un ID de endpoint. Los endpoints se utilizan para representar diferentes funcionalidades dentro de un dispositivo Zigbee.

##### Función de Control de Estado del Dispositivo

La función `setLED()` controla el estado del LED:

```cpp
void setLED(bool value) {
  digitalWrite(LED_PIN, value);
}
```

La función `setLED()` acepta un valor booleano y establece el estado del LED en consecuencia, encendiéndolo o apagándolo según el valor de entrada.

##### Función `setup()`

La función `setup()` inicializa el dispositivo, incluyendo el LED, botón y configuraciones Zigbee.

```cpp
void setup() {
  pinMode(LED_PIN, OUTPUT);
  digitalWrite(LED_PIN, LOW);
```

Primero, configuramos el pin del LED como salida y lo apagamos inicialmente.

```cpp
  pinMode(BUTTON_PIN, INPUT_PULLUP);
```

El pin del botón se configura como entrada con una resistencia pull-up interna.

```cpp
  zbLight.setManufacturerAndModel("Espressif", "ZBLightBulb");
```

Esto establece el nombre del fabricante y modelo para el dispositivo, lo que ayuda a identificarlo en la red Zigbee.

```cpp
  zbLight.onLightChange(setLED);
```

Esto registra `setLED()` como una función de callback, que se llama cada vez que hay un cambio en el estado de la luz.

```cpp
  Zigbee.addEndpoint(&zbLight);
```

Agregamos `zbLight` como un endpoint al núcleo Zigbee. Esto permite que otros dispositivos Zigbee interactúen con este endpoint.

```cpp
  Zigbee.begin();
```

Finalmente, llamamos `Zigbee.begin()` para inicializar la pila Zigbee e iniciar el dispositivo como un dispositivo final en la red.

##### Función `loop()`

El bucle principal maneja las pulsaciones de botón para realizar un restablecimiento de fábrica:

```cpp
void loop() {
  if (digitalRead(BUTTON_PIN) == LOW) {
    delay(100);  // Key debounce handling
    int startTime = millis();
    while (digitalRead(BUTTON_PIN) == LOW) {
      delay(50);
      if ((millis() - startTime) > 3000) {
        Serial.printf("Resetting Zigbee to factory settings, reboot.\n");
        Zigbee.factoryReset();
      }
    }
  }
  delay(100);
}
```

Este código verifica si el botón está presionado:

- Si está presionado, espera 100 ms (para el manejo de rebote).
- Si el botón permanece presionado por más de 3 segundos, activa un restablecimiento de fábrica llamando a `Zigbee.factoryReset()`.

Esta función es útil para los usuarios cuando necesitan reconfigurar el dispositivo debido a problemas de red o emparejamiento.

:::tip
Las rutinas oficiales aún se están actualizando continuamente, nuestra documentación puede no ser capaz de sincronizar los programas más recientes en el primer momento, si hay alguna discrepancia, por favor consulte **[los ejemplos de programa de Espressif](https://github.com/espressif/arduino-esp32/blob/3.0.7/libraries/Zigbee/examples/Zigbee_On_Off_Light/Zigbee_On_Off_Light.ino)**.
:::

```cpp title=Zigbee_On_Off_Light.ino showLineNumbers
#ifndef ZIGBEE_MODE_ED
#error "Zigbee end device mode is not selected in Tools->Zigbee mode"
#endif

#include "ZigbeeCore.h"
#include "ep/ZigbeeLight.h"

#define LED_PIN               LED_BUILTIN
#define BUTTON_PIN            9  // ESP32-C6/H2 Boot button
#define ZIGBEE_LIGHT_ENDPOINT 10

ZigbeeLight zbLight = ZigbeeLight(ZIGBEE_LIGHT_ENDPOINT);

/********************* RGB LED functions **************************/
void setLED(bool value) {
  digitalWrite(LED_PIN, value);
}

/********************* Arduino functions **************************/
void setup() {
  // Init LED and turn it OFF (if LED_PIN == RGB_BUILTIN, the rgbLedWrite() will be used under the hood)
  pinMode(LED_PIN, OUTPUT);
  digitalWrite(LED_PIN, LOW);

  // Init button for factory reset
  pinMode(BUTTON_PIN, INPUT_PULLUP);

  //Optional: set Zigbee device name and model
  zbLight.setManufacturerAndModel("Espressif", "ZBLightBulb");

  // Set callback function for light change
  zbLight.onLightChange(setLED);

  //Add endpoint to Zigbee Core
  log_d("Adding ZigbeeLight endpoint to Zigbee Core");
  Zigbee.addEndpoint(&zbLight);

  // When all EPs are registered, start Zigbee. By default acts as ZIGBEE_END_DEVICE
  log_d("Calling Zigbee.begin()");
  Zigbee.begin();
}

void loop() {
  // Checking button for factory reset
  if (digitalRead(BUTTON_PIN) == LOW) {  // Push button pressed
    // Key debounce handling
    delay(100);
    int startTime = millis();
    while (digitalRead(BUTTON_PIN) == LOW) {
      delay(50);
      if ((millis() - startTime) > 3000) {
        // If key pressed for more than 3secs, factory reset Zigbee and reboot
        Serial.printf("Resetting Zigbee to factory settings, reboot.\n");
        Zigbee.factoryReset();
      }
    }
  }
  delay(100);
}
```

#### Interruptor de Luz Zigbee

Aquí, el XIAO ESP32C6 sirve como el **Coordinador Zigbee**, responsable de controlar otros dispositivos Zigbee. Aquí, el **Interruptor Zigbee** representa el controlador, que se vincula a un dispositivo de luz Zigbee y lo controla a través de comandos como encender o apagar la luz.

##### Inclusiones y Definiciones

```cpp
#include "ZigbeeCore.h"
#include "ep/ZigbeeLight.h"

#define SWITCH_ENDPOINT_NUMBER 5
#define GPIO_INPUT_IO_TOGGLE_SWITCH 9
#define PAIR_SIZE(TYPE_STR_PAIR) (sizeof(TYPE_STR_PAIR) / sizeof(TYPE_STR_PAIR[0]))
```

- `SWITCH_ENDPOINT_NUMBER` se define como `5`. Representa el endpoint del interruptor. Al igual que en el ejemplo de la bombilla, el número de endpoint se usa para definir la función específica dentro de un dispositivo Zigbee.
- `GPIO_INPUT_IO_TOGGLE_SWITCH` se refiere al pin GPIO `9`, que actúa como el botón del interruptor.
- `PAIR_SIZE()` es una macro utilizada para calcular el tamaño de un array dado, utilizada aquí para manejar las configuraciones de botones.

##### Tipos de Configuración del Interruptor y Funciones

El código define varias enumeraciones y estructuras de datos relacionadas con la funcionalidad del interruptor:

```cpp
typedef enum {
  SWITCH_ON_CONTROL,
  SWITCH_OFF_CONTROL,
  SWITCH_ONOFF_TOGGLE_CONTROL,
  SWITCH_LEVEL_UP_CONTROL,
  SWITCH_LEVEL_DOWN_CONTROL,
  SWITCH_LEVEL_CYCLE_CONTROL,
  SWITCH_COLOR_CONTROL,
} SwitchFunction;

typedef struct {
  uint8_t pin;
  SwitchFunction func;
} SwitchData;

typedef enum {
  SWITCH_IDLE,
  SWITCH_PRESS_ARMED,
  SWITCH_PRESS_DETECTED,
  SWITCH_PRESSED,
  SWITCH_RELEASE_DETECTED,
} SwitchState;
```

- **`SwitchFunction`** enumera diferentes funciones que el interruptor puede realizar, como encender la luz, apagarla, alternar, ajustar el brillo, etc.
- **`SwitchData`** es una estructura que empareja un pin GPIO con una función específica, lo que permite una mejor organización al agregar múltiples botones con diferentes funcionalidades.
- **`SwitchState`** representa diferentes estados del interruptor durante la interacción del usuario (por ejemplo, inactivo, presionado, liberado).

##### Instanciando el Interruptor Zigbee

```cpp
static SwitchData buttonFunctionPair[] = {{GPIO_INPUT_IO_TOGGLE_SWITCH, SWITCH_ONOFF_TOGGLE_CONTROL}};
ZigbeeSwitch zbSwitch = ZigbeeSwitch(SWITCH_ENDPOINT_NUMBER);
```

- **`buttonFunctionPair`** es un array que define las funciones de los botones. Aquí, el botón conectado al `GPIO 9` se utilizará para alternar el encendido o apagado de la luz.
- **`zbSwitch`** crea una instancia de `ZigbeeSwitch`, con el número de endpoint `5`.

##### Funciones Zigbee y Manejo de Interrupciones GPIO

```cpp
static void onZbButton(SwitchData *button_func_pair) {
  if (button_func_pair->func == SWITCH_ONOFF_TOGGLE_CONTROL) {
    zbSwitch.lightToggle();  // Sends a toggle command to the light.
  }
}
```

**`onZbButton()`** se llama cada vez que se presiona un botón. En este caso, envía un comando Zigbee para alternar la luz.

###### Manejo de Eventos GPIO

```cpp
static void IRAM_ATTR onGpioInterrupt(void *arg) {
  xQueueSendFromISR(gpio_evt_queue, (SwitchData *)arg, NULL);
}
```

**`onGpioInterrupt()`** es la rutina de servicio de interrupción (ISR) para manejar las interrupciones de pines GPIO. Coloca un evento en una cola cada vez que se presiona el botón.

```cpp
static void enableGpioInterrupt(bool enabled) {
  for (int i = 0; i < PAIR_SIZE(buttonFunctionPair); ++i) {
    if (enabled) {
      enableInterrupt((buttonFunctionPair[i]).pin);
    } else {
      disableInterrupt((buttonFunctionPair[i]).pin);
    }
  }
}
```

**`enableGpioInterrupt()`** habilita o deshabilita la interrupción GPIO, dependiendo de si el parámetro `enabled` es `true` o `false`.

##### Función Setup

```cpp
void setup() {
  Serial.begin(115200);
  while (!Serial) {
    delay(10);
  }

  zbSwitch.setManufacturerAndModel("Espressif", "ZigbeeSwitch");
  zbSwitch.allowMultipleBinding(true);

  Zigbee.addEndpoint(&zbSwitch);
  Zigbee.setRebootOpenNetwork(180);

  for (int i = 0; i < PAIR_SIZE(buttonFunctionPair); i++) {
    pinMode(buttonFunctionPair[i].pin, INPUT_PULLUP);
    gpio_evt_queue = xQueueCreate(10, sizeof(SwitchData));
    if (gpio_evt_queue == 0) {
      log_e("Queue was not created and must not be used");
      while (1);
    }
    attachInterruptArg(buttonFunctionPair[i].pin, onGpioInterrupt, (void *)(buttonFunctionPair + i), FALLING);
  }

  Zigbee.begin(ZIGBEE_COORDINATOR);

  Serial.println("Waiting for Light to bound to the switch");
  while (!zbSwitch.isBound()) {
    Serial.printf(".");
    delay(500);
  }

  std::list<zb_device_params_t *> boundLights = zbSwitch.getBoundDevices();
  for (const auto &device : boundLights) {
    Serial.printf("Device on endpoint %d, short address: 0x%x\n", device->endpoint, device->short_addr);
    Serial.printf(
      "IEEE Address: %02X:%02X:%02X:%02X:%02X:%02X:%02X:%02X\n", device->ieee_addr[0], device->ieee_addr[1], device->ieee_addr[2], device->ieee_addr[3],
      device->ieee_addr[4], device->ieee_addr[5], device->ieee_addr[6], device->ieee_addr[7]
    );
    Serial.printf("Light manufacturer: %s", zbSwitch.readManufacturer(device->endpoint, device->short_addr));
    Serial.printf("Light model: %s", zbSwitch.readModel(device->endpoint, device->short_addr));
  }
  Serial.println();
}
```

- **Inicialización de Comunicación Serie**: Inicializa el puerto serie para depuración.
- **Información del Dispositivo**: Establece el fabricante y modelo, permite que múltiples dispositivos se vinculen, y agrega un endpoint al núcleo Zigbee.
- **Inicialización de Red**: Abre la red Zigbee por `180` segundos después del reinicio para permitir que los dispositivos se unan.
- **Inicialización de Botones**: Configura los pines GPIO para los botones, crea una cola para manejar las interrupciones GPIO, y adjunta interrupciones a los botones.
- **Esperar Vinculación**: El coordinador espera hasta que se vincule a un dispositivo de luz antes de continuar. Una vez vinculado, imprime la información del dispositivo vinculado.

##### Función Loop

```cpp
void loop() {
  uint8_t pin = 0;
  SwitchData buttonSwitch;
  static SwitchState buttonState = SWITCH_IDLE;
  bool eventFlag = false;

  if (xQueueReceive(gpio_evt_queue, &buttonSwitch, portMAX_DELAY)) {
    pin = buttonSwitch.pin;
    enableGpioInterrupt(false);
    eventFlag = true;
  }
  while (eventFlag) {
    bool value = digitalRead(pin);
    switch (buttonState) {
      case SWITCH_IDLE:           buttonState = (value == LOW) ? SWITCH_PRESS_DETECTED : SWITCH_IDLE; break;
      case SWITCH_PRESS_DETECTED: buttonState = (value == LOW) ? SWITCH_PRESS_DETECTED : SWITCH_RELEASE_DETECTED; break;
      case SWITCH_RELEASE_DETECTED:
        buttonState = SWITCH_IDLE;
        (*onZbButton)(&buttonSwitch);
        break;
      default: break;
    }
    if (buttonState == SWITCH_IDLE) {
      enableGpioInterrupt(true);
      eventFlag = false;
      break;
    }
    vTaskDelay(10 / portTICK_PERIOD_MS);
  }

  static uint32_t lastPrint = 0;
  if (millis() - lastPrint > 10000) {
    lastPrint = millis();
    zbSwitch.printBoundDevices();
  }
}
```

- La **función loop** gestiona las pulsaciones de botones leyendo de la cola de interrupciones (`gpio_evt_queue`) y actualizando el `buttonState` en consecuencia.
- Cuando el botón se presiona y se libera (`SWITCH_RELEASE_DETECTED`), se invoca el callback `onZbButton()` para alternar la luz.
- Cada **10 segundos**, se imprimen las luces vinculadas para propósitos de monitoreo.

:::tip
Las rutinas oficiales se siguen actualizando continuamente, nuestra documentación puede no ser capaz de sincronizar los programas más recientes en el primer momento, si hay alguna discrepancia, por favor consulte **[los ejemplos de programas de Espressif](https://github.com/espressif/arduino-esp32/blob/3.0.7/libraries/Zigbee/examples/Zigbee_On_Off_Switch/Zigbee_On_Off_Switch.ino)**.
:::

```cpp title=Zigbee_On_Off_Switch.ino showLineNumbers
#ifndef ZIGBEE_MODE_ZCZR
#error "Zigbee coordinator mode is not selected in Tools->Zigbee mode"
#endif

#include "ZigbeeCore.h"
#include "ep/ZigbeeLight.h"

#define SWITCH_ENDPOINT_NUMBER 5

/* Switch configuration */
#define GPIO_INPUT_IO_TOGGLE_SWITCH 9
#define PAIR_SIZE(TYPE_STR_PAIR)    (sizeof(TYPE_STR_PAIR) / sizeof(TYPE_STR_PAIR[0]))

typedef enum {
  SWITCH_ON_CONTROL,
  SWITCH_OFF_CONTROL,
  SWITCH_ONOFF_TOGGLE_CONTROL,
  SWITCH_LEVEL_UP_CONTROL,
  SWITCH_LEVEL_DOWN_CONTROL,
  SWITCH_LEVEL_CYCLE_CONTROL,
  SWITCH_COLOR_CONTROL,
} SwitchFunction;

typedef struct {
  uint8_t pin;
  SwitchFunction func;
} SwitchData;

typedef enum {
  SWITCH_IDLE,
  SWITCH_PRESS_ARMED,
  SWITCH_PRESS_DETECTED,
  SWITCH_PRESSED,
  SWITCH_RELEASE_DETECTED,
} SwitchState;

static SwitchData buttonFunctionPair[] = {{GPIO_INPUT_IO_TOGGLE_SWITCH, SWITCH_ONOFF_TOGGLE_CONTROL}};

ZigbeeSwitch zbSwitch = ZigbeeSwitch(SWITCH_ENDPOINT_NUMBER);

/********************* Zigbee functions **************************/
static void onZbButton(SwitchData *button_func_pair) {
  if (button_func_pair->func == SWITCH_ONOFF_TOGGLE_CONTROL) {
    // Send toggle command to the light
    zbSwitch.lightToggle();
  }
}

/********************* GPIO functions **************************/
static QueueHandle_t gpio_evt_queue = NULL;

static void IRAM_ATTR onGpioInterrupt(void *arg) {
  xQueueSendFromISR(gpio_evt_queue, (SwitchData *)arg, NULL);
}

static void enableGpioInterrupt(bool enabled) {
  for (int i = 0; i < PAIR_SIZE(buttonFunctionPair); ++i) {
    if (enabled) {
      enableInterrupt((buttonFunctionPair[i]).pin);
    } else {
      disableInterrupt((buttonFunctionPair[i]).pin);
    }
  }
}

/********************* Arduino functions **************************/
void setup() {

  Serial.begin(115200);
  while (!Serial) {
    delay(10);
  }

  //Optional: set Zigbee device name and model
  zbSwitch.setManufacturerAndModel("Espressif", "ZigbeeSwitch");

  //Optional to allow multiple light to bind to the switch
  zbSwitch.allowMultipleBinding(true);

  //Add endpoint to Zigbee Core
  log_d("Adding ZigbeeSwitch endpoint to Zigbee Core");
  Zigbee.addEndpoint(&zbSwitch);

  //Open network for 180 seconds after boot
  Zigbee.setRebootOpenNetwork(180);

  // Init button switch
  for (int i = 0; i < PAIR_SIZE(buttonFunctionPair); i++) {
    pinMode(buttonFunctionPair[i].pin, INPUT_PULLUP);
    /* create a queue to handle gpio event from isr */
    gpio_evt_queue = xQueueCreate(10, sizeof(SwitchData));
    if (gpio_evt_queue == 0) {
      log_e("Queue was not created and must not be used");
      while (1);
    }
    attachInterruptArg(buttonFunctionPair[i].pin, onGpioInterrupt, (void *)(buttonFunctionPair + i), FALLING);
  }

  // When all EPs are registered, start Zigbee with ZIGBEE_COORDINATOR mode
  log_d("Calling Zigbee.begin()");
  Zigbee.begin(ZIGBEE_COORDINATOR);

  Serial.println("Waiting for Light to bound to the switch");
  //Wait for switch to bound to a light:
  while (!zbSwitch.isBound()) {
    Serial.printf(".");
    delay(500);
  }

  // Optional: read manufacturer and model name from the bound light
  std::list<zb_device_params_t *> boundLights = zbSwitch.getBoundDevices();
  //List all bound lights
  for (const auto &device : boundLights) {
    Serial.printf("Device on endpoint %d, short address: 0x%x\n", device->endpoint, device->short_addr);
    Serial.printf(
      "IEEE Address: %02X:%02X:%02X:%02X:%02X:%02X:%02X:%02X\n", device->ieee_addr[0], device->ieee_addr[1], device->ieee_addr[2], device->ieee_addr[3],
      device->ieee_addr[4], device->ieee_addr[5], device->ieee_addr[6], device->ieee_addr[7]
    );
    Serial.printf("Light manufacturer: %s", zbSwitch.readManufacturer(device->endpoint, device->short_addr));
    Serial.printf("Light model: %s", zbSwitch.readModel(device->endpoint, device->short_addr));
  }

  Serial.println();
}

void loop() {
  // Handle button switch in loop()
  uint8_t pin = 0;
  SwitchData buttonSwitch;
  static SwitchState buttonState = SWITCH_IDLE;
  bool eventFlag = false;

  /* check if there is any queue received, if yes read out the buttonSwitch */
  if (xQueueReceive(gpio_evt_queue, &buttonSwitch, portMAX_DELAY)) {
    pin = buttonSwitch.pin;
    enableGpioInterrupt(false);
    eventFlag = true;
  }
  while (eventFlag) {
    bool value = digitalRead(pin);
    switch (buttonState) {
      case SWITCH_IDLE:           buttonState = (value == LOW) ? SWITCH_PRESS_DETECTED : SWITCH_IDLE; break;
      case SWITCH_PRESS_DETECTED: buttonState = (value == LOW) ? SWITCH_PRESS_DETECTED : SWITCH_RELEASE_DETECTED; break;
      case SWITCH_RELEASE_DETECTED:
        buttonState = SWITCH_IDLE;
        /* callback to button_handler */
        (*onZbButton)(&buttonSwitch);
        break;
      default: break;
    }
    if (buttonState == SWITCH_IDLE) {
      enableGpioInterrupt(true);
      eventFlag = false;
      break;
    }
    vTaskDelay(10 / portTICK_PERIOD_MS);
  }

  // print the bound lights every 10 seconds
  static uint32_t lastPrint = 0;
  if (millis() - lastPrint > 10000) {
    lastPrint = millis();
    zbSwitch.printBoundDevices();
  }
}
```

#### Demostración

<div class="video-container">
<iframe
  className="youtube-video-r"
  src="https://www.youtube.com/embed/Z2NROYx7hcQ"
  title="XIAO Zigbe Light bulb/switch Example"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  style={{ width: '380px', height: '640px' }}
></iframe>
</div>

¡Felicidades por completar exitosamente tu proyecto de iluminación controlada por Zigbee! Hay muchas más aplicaciones emocionantes de Zigbee esperando que las explores. ¡Sigue con el excelente trabajo!

## Referencia

- [Ejemplos de Zigbee - Arduino](https://github.com/espressif/arduino-esp32/blob/master/libraries/Zigbee/examples)
- [ESP Zigbee SDK](https://docs.espressif.com/projects/esp-zigbee-sdk/en/latest/esp32c6/introduction.html)
- [Arduino Core para ESP32 obtiene una biblioteca wrapper de Zigbee](https://www.cnx-software.com/2024/08/23/arduino-core-for-esp32-gets-a-zigbee-wrapper-library/)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
