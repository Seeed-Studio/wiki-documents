---
description: In this tutorial, we will embark on a journey to explore Zigbee application development using the XIAO ESP32C6 development board. The XIAO ESP32C6 is a compact yet powerful board that features the ESP32-C6 chip, which offers integrated Wi-Fi and Bluetooth Low Energy (BLE) connectivity. By leveraging the ESP Zigbee SDK, we can harness the full potential of the XIAO ESP32C6 and extend its capabilities to include Zigbee functionality.
title: XIAO ESP32C6 Zigbee Guía de Inicio Rápido (Arduino)
image: https://files.seeedstudio.com/wiki/xiaoc6_zigbee/3.webp
slug: /es/xiao_esp32c6_zigbee_arduino
last_update:
  date: 02/08/2025
  author: Guillermo
---

## Overview

Este tutorial te gúíará a través de la implementación de [Zigbee](https://en.wikipedia.org/wiki/Zigbee) en la **XIAO ESP32C6** de  Seeed Studio. Impulsada por el chip **ESP32-C6**, esta placa combina conectividad **Wi-Fi**, **Bluetooth Low Energy (BLE)** y **Zigbee**, lo que la hace ideal para **aplicaciones IoT**. Los ejemplos en esta guía utilizan el **SDK esp-arduino Zigbee** para dar vida a la funcionalidad Zigbee.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee/0.png"
    style={{ width: 680, height: 'auto', "border-radius": '12.8px' }}
  />
</div>

### Lo que aprenderás

:::note Prerrequisito: Configuración del entorno de desarrollo en Arduino  

Si aún no has preparado tu Arduino IDE, consulta la **[Guía de inicio](https://chatgpt.com/xiao_esp32c6_getting_started/#software-preparation)**. Asegúrate de que la **versión de la placa esp-arduino** sea **v3.0.6 o posterior**, ya que esta versión admite la funcionalidad Zigbee.

:::

Esta guía se centra en lo esencial para utilizar Zigbee con la **XIAO ESP32C6**, garantizando una comprensión clara de sus aplicaciones prácticas:

1. [Descripción general de Zigbee](#zigbee_overview): Comprende el protocolo Zigbee y su estructura de red.  
2. [Ejemplos de Zigbee en Arduino](#examples): Implementa ejemplos como bombillas e interruptores en el **ESP32-C6**.  

## Descripción general de Zigbee {#zigbee_overview}  

Zigbee es un protocolo de comunicación inalámbrica de **bajo consumo** y **bajo ancho de banda**, basado en el estándar **IEEE 802.15.4**. Está diseñado para escenarios de **IoT**, como **automatización del hogar**, **ciudades inteligentes** y **control industrial**, ofreciendo capacidades de redes en malla robustas para una comunicación confiable en entornos dinámicos.  

### Modelo de datos de Zigbee  

La comunicación en Zigbee se basa en la **Zigbee Cluster Library (ZCL)**, que define cómo los dispositivos organizan sus funciones e interactúan. Sus principales componentes incluyen:  

1. **Tipos de dispositivos**  
   Los dispositivos Zigbee (p. ej., interruptores, sensores, luces) tienen comportamientos predefinidos y se agrupan en **Clusters** funcionales.  

2. **Clusters**  
   Son agrupaciones lógicas de:  

   - **Atributos**: Representan estados del dispositivo, como brillo o temperatura.  
   - **Comandos**: Activan acciones, como encender una luz o ajustar el brillo al 50 %.  

   Ejemplos:  

   - **On/Off Cluster**: Controla estados binarios, como encendido/apagado.  
   - **Level Control Cluster**: Ajusta la intensidad o el brillo.  
   - **Temperature Measurement Cluster**: Envía lecturas de temperatura.  
   - **Scenes Cluster**: Guarda y recupera configuraciones predefinidas.  

3. **Atributos y comandos**  
   Los **atributos** almacenan datos del dispositivo (estado, configuración), mientras que los **comandos** inician acciones.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee/datamodel.png" style={{width:800, height:'auto'}}/></div>

### Arquitectura de la red Zigbee  

Una red Zigbee está compuesta por tres tipos principales de nodos:  

1. **Coordinador Zigbee (ZC)**  
   - Actúa como el núcleo central de la red.  
   - Gestiona la creación de la red, la autenticación de dispositivos y la asignación de direcciones.  
   - Es responsable de inicializar y administrar la red.  
   - Cada red Zigbee solo puede tener **un Coordinador**.  

2. **Router Zigbee (ZR)**  
   - Extiende el alcance de la red retransmitiendo mensajes entre dispositivos.  
   - Permite que nuevos dispositivos se unan a la red.  
   - Generalmente está alimentado por la red eléctrica para garantizar un funcionamiento constante y una retransmisión confiable de mensajes.  
   - Existen Routers alimentados por batería, pero son menos comunes debido a su mayor consumo energético.  

3. **Dispositivo Final Zigbee (ZED)**  
   - Dispositivos ligeros y eficientes en consumo de energía que se comunican con un nodo padre (Coordinador o Router).  
   - No retransmiten mensajes a otros dispositivos.  
   - Optimizados para operar con batería y suelen entrar en modos de suspensión para ahorrar energía.  

:::nota  

- **Direcciones y Enrutamiento**:  
  - Zigbee utiliza un esquema de direccionamiento de 16 bits. Los dispositivos se comunican mediante direccionamiento directo e indirecto.  
  - Las decisiones de enrutamiento las toman los Routers mediante algoritmos como **AODV** (Ad hoc On-demand Distance Vector).  

- **Gestión de Energía**:  
  - Los Dispositivos Finales Zigbee están optimizados para un bajo consumo de energía, operando en modo de suspensión y despertando solo cuando es necesario.  
  - Los Routers y el Coordinador suelen estar conectados a la corriente para asegurar disponibilidad constante.  

:::  

#### Topologías de red  

Zigbee admite tres principales topologías de red, dependiendo de los requisitos de la aplicación y el entorno:  

#### 1. Topología en Malla  

- Un Coordinador y múltiples Routers forman una red robusta y auto-reparable.  
- Los dispositivos pueden redirigir dinámicamente los mensajes si una ruta de comunicación se interrumpe, asegurando alta fiabilidad.  
- Ideal para redes de gran escala que requieren amplia cobertura y redundancia.

  <div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNptkcEOgjAQRH9lsydI5CDcuIo_oJ5MLxu6AlG6pLYmxvjvVlFSgj3NtG9nmvaBtWjGEgGgsTS0cKiUgXFtRKzuDDmxSRKZNIUsy2An3rFdJ8koYJ2m_0YjNp_YPGK_OR9ua3TFt67mEBs0jGYWHeOjLqbYYsHlMff3bKrMZ5XLGxZzvJjhoRlX2LPtqdPhPR_vYYWu5Z4VlkFqsmeFyjwDR97J_m5qLJ31vEIrvml_xg-aHFcdhQ_psTzR5Rp2BzJHkZ9_vgDkroUg" style={{width:380, height:'auto', "border-radius": '1px'}}/></div>

- **Características clave**:  
  - El redireccionamiento dinámico garantiza alta fiabilidad.  
  - Soporta redes grandes con cobertura escalable.  
  - Los mecanismos de autorrecuperación aumentan la tolerancia a fallos.  

#### 2. Topología en Árbol  

- El Coordinador actúa como la raíz de una estructura jerárquica, con Routers formando ramas.  
- Cada rama puede contener múltiples Dispositivos Finales o Routers adicionales, creando una estructura similar a un árbol.  
- La comunicación depende de rutas jerárquicas, lo que puede generar puntos únicos de fallo.

  <div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNqF0MEKwjAMBuBXCTmt4A5OT7s6X0A9SS9hjW7omlFbQcR3tzqVFQV7yl--_IdcsRbDWCIA7B31DWwqbWF4CxFnWkteXJaNglKQ5zmsJHh20ywbBpgq9Wt1ZIuPLUb21fN0S2sqPrc1x9o4wxCS6p-8SPh3e5HyWcJn__g84XOlcIIdu45aE093fSxr9A13rLGMoyF30KjtLToKXtYXW2PpXeAJOgn7BssdHU8xhd6Q56qlePzu89uT3Yq88-0OO1R_gA" style={{width:600, height:'auto', "border-radius": '1px'}}/></div>

- **Características clave**:  
  - Fácil de configurar y gestionar.  
  - Escalabilidad limitada debido a restricciones de alcance y capacidad de dispositivos.  
  - La dependencia del Coordinador para toda la comunicación reduce la tolerancia a fallos.  

Después de esta visión general de los conceptos clave, pasemos al desarrollo con Zigbee en la **XIAO ESP32C6**.  

## Ejemplos en Arduino {#examples}  

Consulta los **[Ejemplos de Zigbee - Arduino](https://github.com/espressif/arduino-esp32/tree/master/libraries/Zigbee/examples)**.  

### Ejemplo 1: Bombilla e Interruptor Zigbee {#Light_Bulb_switch}  

Primero, prepara dos **XIAO ESP32C6**, una como **Bombilla Zigbee** y otra como **Interruptor Zigbee**.  

Usa los ejemplos `Zigbee_On_Off_Light` y `Zigbee_On_Off_Switch` para comprender cómo interactúan los dispositivos habilitados con Zigbee en escenarios reales. ¿Listo para comenzar? ¡Vamos al desarrollo!  

#### Bombilla Zigbee  

Asegúrate de seleccionar `Zigbee ED (end device)` como el modo de operación Zigbee.

Algunas constantes:

```cpp
#define LED_PIN               LED_BUILTIN
#define BUTTON_PIN            9  // ESP32-C6/H2 Boot button
#define ZIGBEE_LIGHT_ENDPOINT 10
```

- `LED_PIN` se usa para controlar el LED incorporado.  
- `BUTTON_PIN` es para el botón de restablecimiento de fábrica.  
- `ZIGBEE_LIGHT_ENDPOINT` representa el endpoint Zigbee de la bombilla, funcionando como un identificador de servicio en la red.  

##### Definir el Dispositivo de Luz Zigbee

```cpp
ZigbeeLight zbLight = ZigbeeLight(ZIGBEE_LIGHT_ENDPOINT);
```

Esta línea define un objeto `ZigbeeLight` con un ID de endpoint. Los endpoints se utilizan para representar diferentes funcionalidades dentro de un dispositivo Zigbee.  

##### Función de Control del Estado del Dispositivo  

La función `setLED()` controla el estado del LED.

```cpp
void setLED(bool value) {
  digitalWrite(LED_PIN, value);
}
```

La función setLED() acepta un valor booleano y ajusta el estado del LED en consecuencia, encendiéndolo o apagándolo según el valor de entrada.  

##### Función setup() 

La función setup() inicializa el dispositivo, incluyendo el LED, el botón y la configuración de Zigbee.

```cpp
void setup() {
  pinMode(LED_PIN, OUTPUT);
  digitalWrite(LED_PIN, LOW);
```

Primero, configuramos el pin para el LED como salida y lo apagamos inicialmente.

```cpp
  pinMode(BUTTON_PIN, INPUT_PULLUP);
```

El pin del botón está configurado como una entrada con una resistencia pull up.

```cpp
  zbLight.setManufacturerAndModel("Espressif", "ZBLightBulb");
```

Esto establece el fabricante y el nombre del modelo para el dispositivo, lo que ayuda a identificarlo en la red Zigbee.

```cpp
  zbLight.onLightChange(setLED);
```

Esto registra `setLED()` como una función de callback, que se ejecutará cada vez que haya un cambio en el estado de la luz.

```cpp
  Zigbee.addEndpoint(&zbLight);
```

Añadimos `zbLight` como un endpoint al núcleo de Zigbee. Esto permite que otros dispositivos Zigbee interactúen con este endpoint.

```cpp
  Zigbee.begin();
```

Finalmente, llamamos a Zigbee.begin() para inicializar la pila Zigbee y empezar el dispositivo como un dispositivo final en la red.  

##### Función loop()

El bucle principal maneja las presiones del botón para realizar un restablecimiento de fábrica:

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

- Si se presiona, espera 100 ms (para manejar el rebote del botón).  
- Si el botón permanece presionado durante más de 3 segundos, se activa un restablecimiento de fábrica llamando a `Zigbee.factoryReset()`.

Esta función es útil para los usuarios cuando necesitan reconfigurar el dispositivo debido a problemas de red o emparejamiento.

:::tip
Las rutinas oficiales siguen siendo actualizadas continuamente, por lo que nuestra documentación puede no estar sincronizada con los programas más recientes en todo momento. Si hay alguna discrepancia, consulta los **[ejemplos de programas de Espressif](https://github.com/espressif/arduino-esp32/blob/3.0.7/libraries/Zigbee/examples/Zigbee_On_Off_Light/Zigbee_On_Off_Light.ino)**.**.
:::

```cpp title=Zigbee_On_Off_Light.ino showLineNumbers
#ifndef ZIGBEE_MODE_ED
#error "No se ha seleccionado el modo de dispositivo final Zigbee en Herramientas->Modo Zigbee"
#endif

#include "ZigbeeCore.h"
#include "ep/ZigbeeLight.h"

#define LED_PIN               LED_BUILTIN
#define BUTTON_PIN            9  // Botón de arranque ESP32-C6/H2
#define ZIGBEE_LIGHT_ENDPOINT 10

ZigbeeLight zbLight = ZigbeeLight(ZIGBEE_LIGHT_ENDPOINT);

/********************* Funciones del LED RGB **************************/
void setLED(bool value) {
  digitalWrite(LED_PIN, value);
}

/********************* Funciones de Arduino **************************/
void setup() {
  // Inicializa el LED y apágalo (si LED_PIN == RGB_BUILTIN, rgbLedWrite() se usará automáticamente)
  pinMode(LED_PIN, OUTPUT);
  digitalWrite(LED_PIN, LOW);

  // Inicializa el botón para el restablecimiento de fábrica
  pinMode(BUTTON_PIN, INPUT_PULLUP);

  // Opcional: establece el nombre y modelo del dispositivo Zigbee
  zbLight.setManufacturerAndModel("Espressif", "ZBLightBulb");

  // Establece la función de callback para el cambio de luz
  zbLight.onLightChange(setLED);

  // Añade el endpoint al núcleo Zigbee
  log_d("Añadiendo el endpoint ZigbeeLight al núcleo Zigbee");
  Zigbee.addEndpoint(&zbLight);

  // Cuando todos los endpoints están registrados, inicia Zigbee. Por defecto, actúa como ZIGBEE_END_DEVICE
  log_d("Llamando a Zigbee.begin()");
  Zigbee.begin();
}

void loop() {
  // Verifica el botón para el restablecimiento de fábrica
  if (digitalRead(BUTTON_PIN) == LOW) {  // El botón está presionado
    // Manejo del rebote de la tecla
    delay(100);
    int startTime = millis();
    while (digitalRead(BUTTON_PIN) == LOW) {
      delay(50);
      if ((millis() - startTime) > 3000) {
        // Si la tecla está presionada por más de 3 segundos, restablece Zigbee a la configuración de fábrica y reinicia
        Serial.printf("Restableciendo Zigbee a la configuración de fábrica, reiniciando.\n");
        Zigbee.factoryReset();
      }
    }
  }
  delay(100);
}
```

#### Interruptor Zigbee

Aquí, el **XIAO ESP32C6** funciona como el **Coordinador Zigbee**, encargado de controlar otros dispositivos Zigbee. En este caso, el **Interruptor Zigbee** actúa como el controlador, que se vincula a un dispositivo de luz Zigbee y lo controla a través de comandos, como encender o apagar la luz.

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
- `PAIR_SIZE()` es una macro utilizada para calcular el tamaño de un arreglo dado, que se utiliza aquí para manejar las configuraciones del botón.

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

- **`SwitchFunction`** enumera las diferentes funciones que el interruptor puede realizar, como encender la luz, apagarla, alternar el estado, ajustar el brillo, etc.
- **`SwitchData`** es una estructura que empareja un pin GPIO con una función específica, lo que permite una mejor organización al agregar múltiples botones con diferentes funcionalidades.
- **`SwitchState`** representa los diferentes estados del interruptor durante la interacción con el usuario (por ejemplo, inactivo, presionado, liberado).

##### Instanciando el Interruptor Zigbee

```cpp
static SwitchData buttonFunctionPair[] = {{GPIO_INPUT_IO_TOGGLE_SWITCH, SWITCH_ONOFF_TOGGLE_CONTROL}};
ZigbeeSwitch zbSwitch = ZigbeeSwitch(SWITCH_ENDPOINT_NUMBER);
```

- **`buttonFunctionPair`** es un arreglo que define las funciones de los botones. Aquí, el botón conectado al `GPIO 9` se utilizará para alternar la luz encendida o apagada.
- **`zbSwitch`** crea una instancia de `ZigbeeSwitch`, con el número de endpoint `5`.

##### Funciones Zigbee y Manejo de Interrupciones GPIO

```cpp
static void onZbButton(SwitchData *button_func_pair) {
  if (button_func_pair->func == SWITCH_ONOFF_TOGGLE_CONTROL) {
    zbSwitch.lightToggle();  // Sends a toggle command to the light.
  }
}
```

**`onZbButton()`** se llama cada vez que un botón es presionado. En este caso, envía un comando Zigbee para alternar la luz.

###### Manejo de Eventos GPIO

```cpp
static void IRAM_ATTR onGpioInterrupt(void *arg) {
  xQueueSendFromISR(gpio_evt_queue, (SwitchData *)arg, NULL);
}
```

**`onGpioInterrupt()`** es la rutina de servicio de interrupción (ISR) para manejar las interrupciones del pin GPIO. Coloca un evento en una cola cada vez que el botón es presionado.

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

**`enableGpioInterrupt()`** habilita o deshabilita la interrupción del GPIO, dependiendo de si el parámetro `enabled` es `true` o `false`.

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

- **Inicialización de Comunicación Serial**: Inicializa la comunicación serial para depuración.
- **Información del Dispositivo**: Establece el fabricante y el modelo, permite que múltiples dispositivos se vinculen y agrega un endpoint al núcleo Zigbee.
- **Inicialización de la Red**: Abre la red Zigbee durante `180` segundos después del reinicio para permitir que los dispositivos se unan.
- **Inicialización de Botones**: Configura los pines GPIO para los botones, crea una cola para manejar las interrupciones GPIO y asigna interrupciones a los botones.
- **Esperar Vinculación**: El coordinador espera hasta que se vincule con un dispositivo de luz antes de continuar. Una vez vinculado, imprime la información del dispositivo vinculado.

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

- La **función loop** gestiona las presiones de los botones leyendo desde la cola de interrupciones (`gpio_evt_queue`) y actualizando el `buttonState` en consecuencia.
- Cuando el botón es presionado y liberado (`SWITCH_RELEASE_DETECTED`), se invoca la función de callback `onZbButton()` para alternar la luz.
- Cada **10 segundos**, se imprime la información de las luces vinculadas con fines de monitoreo.

:::tip
Las rutinas oficiales siguen siendo actualizadas continuamente, por lo que nuestra documentación puede no estar sincronizada con los programas más recientes en todo momento. Si hay alguna discrepancia, por favor consulta los **[ejemplos de programas de Espressif](https://github.com/espressif/arduino-esp32/blob/3.0.7/libraries/Zigbee/examples/Zigbee_On_Off_Switch/Zigbee_On_Off_Switch.ino)**.
:::


```cpp title=Zigbee_On_Off_Switch.ino showLineNumbers
#ifndef ZIGBEE_MODE_ZCZR
#error "No se ha seleccionado el modo coordinador Zigbee en Herramientas->Modo Zigbee"
#endif

#include "ZigbeeCore.h"
#include "ep/ZigbeeLight.h"

#define SWITCH_ENDPOINT_NUMBER 5

/* Configuración del interruptor */
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

/********************* Funciones Zigbee **************************/
static void onZbButton(SwitchData *button_func_pair) {
  if (button_func_pair->func == SWITCH_ONOFF_TOGGLE_CONTROL) {
    // Enviar comando de alternancia a la luz
    zbSwitch.lightToggle();
  }
}

/********************* Funciones GPIO **************************/
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

/********************* Funciones de Arduino **************************/
void setup() {

  Serial.begin(115200);
  while (!Serial) {
    delay(10);
  }

  // Opcional: configurar nombre y modelo del dispositivo Zigbee
  zbSwitch.setManufacturerAndModel("Espressif", "ZigbeeSwitch");

  // Opcional para permitir que varias luces se vinculen al interruptor
  zbSwitch.allowMultipleBinding(true);

  // Agregar el endpoint al Zigbee Core
  log_d("Agregando el endpoint ZigbeeSwitch al Zigbee Core");
  Zigbee.addEndpoint(&zbSwitch);

  // Abrir la red durante 180 segundos después del reinicio
  Zigbee.setRebootOpenNetwork(180);

  // Inicializar el interruptor de botón
  for (int i = 0; i < PAIR_SIZE(buttonFunctionPair); i++) {
    pinMode(buttonFunctionPair[i].pin, INPUT_PULLUP);
    /* crear una cola para manejar el evento GPIO desde ISR */
    gpio_evt_queue = xQueueCreate(10, sizeof(SwitchData));
    if (gpio_evt_queue == 0) {
      log_e("No se pudo crear la cola, no se debe usar");
      while (1);
    }
    attachInterruptArg(buttonFunctionPair[i].pin, onGpioInterrupt, (void *)(buttonFunctionPair + i), FALLING);
  }

  // Cuando todos los EPs estén registrados, iniciar Zigbee en modo ZIGBEE_COORDINATOR
  log_d("Llamando a Zigbee.begin()");
  Zigbee.begin(ZIGBEE_COORDINATOR);

  Serial.println("Esperando que la luz se vincule al interruptor");
  // Esperar a que el interruptor se vincule a una luz:
  while (!zbSwitch.isBound()) {
    Serial.printf(".");
    delay(500);
  }

  // Opcional: leer el nombre del fabricante y el modelo de la luz vinculada
  std::list<zb_device_params_t *> boundLights = zbSwitch.getBoundDevices();
  // Listar todas las luces vinculadas
  for (const auto &device : boundLights) {
    Serial.printf("Dispositivo en el endpoint %d, dirección corta: 0x%x\n", device->endpoint, device->short_addr);
    Serial.printf(
      "Dirección IEEE: %02X:%02X:%02X:%02X:%02X:%02X:%02X:%02X\n", device->ieee_addr[0], device->ieee_addr[1], device->ieee_addr[2], device->ieee_addr[3],
      device->ieee_addr[4], device->ieee_addr[5], device->ieee_addr[6], device->ieee_addr[7]
    );
    Serial.printf("Fabricante de la luz: %s", zbSwitch.readManufacturer(device->endpoint, device->short_addr));
    Serial.printf("Modelo de la luz: %s", zbSwitch.readModel(device->endpoint, device->short_addr));
  }

  Serial.println();
}

void loop() {
  // Manejar el interruptor de botón en loop()
  uint8_t pin = 0;
  SwitchData buttonSwitch;
  static SwitchState buttonState = SWITCH_IDLE;
  bool eventFlag = false;

  /* verificar si hay alguna cola recibida, si es así leer el buttonSwitch */
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
        /* callback a button_handler */
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

  // imprimir las luces vinculadas cada 10 segundos
  static uint32_t lastPrint = 0;
  if (millis() - lastPrint > 10000) {
    lastPrint = millis();
    zbSwitch.printBoundDevices();
  }
}
```

#### Demostración

<iframe
  className="youtube-video-r"
  src="https://www.youtube.com/embed/Z2NROYx7hcQ"
  title="XIAO Zigbe Light bulb/switch Example"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  style={{ width: '380px', height: '640px' }}
></iframe>

¡Felicitaciones por haber completado con éxito tu proyecto de iluminación controlada por Zigbee! Hay muchas más aplicaciones emocionantes de Zigbee esperando ser exploradas. ¡Sigue con el gran trabajo!

## Referencias

- [Ejemplos de Zigbee - Arduino](https://github.com/espressif/arduino-esp32/blob/master/libraries/Zigbee/examples)
- [ESP Zigbee SDK](https://docs.espressif.com/projects/esp-zigbee-sdk/en/latest/esp32c6/introduction.html)
- [La biblioteca wrapper de Zigbee para el Arduino Core de ESP32](https://www.cnx-software.com/2024/08/23/arduino-core-for-esp32-gets-a-zigbee-wrapper-library/)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte el soporte necesario para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
