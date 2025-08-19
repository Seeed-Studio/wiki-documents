---
description: Connect Seeed Studio IoT Button To Home Assistant via Zigbee
title: Connecta tu Seeed Studio IoT Button a Home Assistant via Zigbee
keywords:
  - Zigbee
  - IoT Button
  - ESP32-C6
  - Home Assistant
image: https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button.webp
slug: /es/seeed_iot_button_with_zigbee
last_update:
  date: 07/17/2025
  author: Guillermo
---

# Conecta tu Botón IoT de Seeed Studio a Home Assistant vía Zigbee

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button.jpg" style={{width:600, height:'auto'}}/></div>

En este tutorial te mostraremos cómo conectar el Botón IoT de Seeed Studio a Home Assistant usando Zigbee. El Botón IoT de Seeed Studio cuenta con un chip ESP32-C6 con funcionalidad Zigbee, lo que lo convierte en un dispositivo versátil para tu hogar inteligente. Aprenderás cómo flashear el firmware Zigbee, emparejarlo con Home Assistant e incluso personalizar el comportamiento del botón mediante desarrollo en Arduino.

## Materiales necesarios

<div class="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio IoT Button</th>
      <th>Zigbee Coordinator (e.g., Home Assistant Connect ZBT-1)</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/ZBT-1.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-IoT-Button-p-6419.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-SkyConnect-p-5479.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

El Botón IoT de Seeed Studio es un dispositivo inteligente completo y autónomo con un chip ESP32-C6 integrado. Puede integrarse en Home Assistant vía Zigbee para controlar diversos dispositivos y activar automatizaciones. Gracias a Zigbee, consume poca energía y ofrece conectividad fiable.

## Descripción general de Zigbee en el Botón IoT

El microcontrolador ESP32-C6 del Botón IoT incluye funcionalidad Zigbee, lo que permite:

1. Conectarse directamente a redes Zigbee sin hardware adicional  
2. Operar como dispositivo final Zigbee (ZED)  
3. Enviar comandos distintos según el patrón de pulsación del botón  
4. Funcionar con batería durante largos periodos gracias al bajo consumo de Zigbee  

El botón soporta tres acciones diferentes:  
- **Clic único**: Pulsación rápida y liberación  
- **Doble clic**: Dos pulsaciones rápidas en menos de 400 ms  
- **Pulsación larga**: Mantener pulsado más de 1 s (restablecimiento de fábrica)  

## Método 1: Usar el firmware Zigbee precompilado

La forma más sencilla de empezar es usar el firmware Zigbee precompilado para el Botón IoT.

### Paso 1: Descargar el firmware precompilado

1. Visita el [repositorio GitHub del Seeed IoT Button](https://github.com/Seeed-Projects/Seeed_IoT_Button_Zigbee)  
2. Navega a la carpeta `Zigbee_Seeed_IoT_Button/build/factory_firmware_zigbee`  
3. Descarga los archivos de firmware:  
   - `Zigbee_Seeed_IoT_Button.merged.bin` (para flasheo con un solo archivo)  
   - O los archivos individuales si prefieres flashearlos por separado  

### Paso 2: Instalar esptool.py

Si no tienes instalado **esptool.py**, ejecútalo con pip:

```bash
pip install esptool
```

### Paso 3: Flashear el firmware

1. Conecta el Botón IoT al ordenador por USB
2. Pon el dispositivo en modo bootloader (si es necesario)
3. Flashea el firmware con uno de estos comandos:

**Opción 1: Usando el binario combinado (recomendado):**

```bash
esptool.py --chip esp32c6 --baud 921600 --before default_reset --after hard_reset write_flash 0x0 "Zigbee_Seeed_IoT_Button.merged.bin"
```

**Opción 2: Usando archivos individuales:**

```bash
esptool.py --chip esp32c6 --baud 921600 --before default_reset --after hard_reset write_flash -z --flash_mode keep --flash_freq keep --flash_size keep 0x0 "Zigbee_Seeed_IoT_Button.bootloader.bin" 0x8000 "Zigbee_Seeed_IoT_Button.partitions.bin" 0xe000 "boot_app0.bin" 0x10000 "Zigbee_Seeed_IoT_Button.bin"
```

4. Espera a que finalice el proceso de flasheo
5. El dispositivo se reiniciará automáticamente

### Paso 4: Configurar Zigbee en Home Assistant

Antes de emparejar tu Botón IoT, configura un coordinador Zigbee en Home Assistant:

1. **Instala un coordinador Zigbee**: Conecta un coordinador como el Home Assistant SkyConnect ZBT-1 a tu servidor Home Assistant
2. **Configura Zigbee Home Automation (ZHA)**:
   - Ve a Ajustes > Dispositivos y servicios
   - Haz clic en Añadir integración y busca “Zigbee Home Automation”
   - Sigue los pasos para configurar ZHA con tu coordinador

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/5.png" style={{width:1000, height:'auto'}}/></div>

### Paso 5: Emparejar el Botón IoT con Home Assistant

1. En Home Assistant, ve a Ajustes > Dispositivos y servicios > Zigbee Home Automation
2. Haz clic en tu dispositivo coordinador Zigbee
3. Haz clic en Añadir dispositivo para poner el coordinador en modo emparejamiento

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee_ha/15.png" style={{width:1000, height:'auto'}}/></div>

4. Pulsa el botón de tu IoT Button para iniciar el emparejamiento
5. Home Assistant debería descubrirlo como “Seeed Studio IoT_Button”
6. Sigue los pasos para completar el emparejamiento

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/iot_button_zigbee/2.png" style={{width:1000, height:'auto'}}/></div>

### Paso 6: Crear automatizaciones en Home Assistant

Una vez emparejado, puedes crear automatizaciones según las acciones del botón:

1. Ve a Ajustes > Automatizaciones y escenas > Crear automatización
2. Selecciona Dispositivo como tipo de disparador
3. Busca tu Botón IoT en la lista de dispositivos
4. Elige el tipo de acción:
   - "click_1" para clic único
   - "click_2" para doble clic
5. Configura la acción que quieras al presionar el botón
6. Guarda la automatización

Ejemplo de YAML para automatización en Home Assistant:

```yaml
automation:
  - alias: "IoT Button Single Click - Toggle Living Room Light"
    trigger:
      platform: device
      domain: mqtt
      device_id: [YOUR_DEVICE_ID]
      type: action
      subtype: click_1
    action:
      service: light.toggle
      target:
        entity_id: light.living_room
```

## Método 2: Desarrollar firmware Zigbee personalizado con Arduino

Si quieres personalizar el comportamiento de tu Botón IoT, puedes crear tu propio firmware Zigbee usando Arduino.

### Paso 1: Configurar Arduino IDE para ESP32-C6

1. Instala la última versión de Arduino IDE
2. Añade soporte para ESP32:
   - Ve a Archivo > Preferencias
   - Añade `https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json` en “URLs adicionales del Gestor de Placas”
   - Ve a Herramientas > Placa > Gestor de Placas, busca “esp32” e instala la versión más reciente (>= 3.1.3)

### Paso 2: Instalar librerías necesarias

El Botón IoT usa el SDK Zigbee de Espressif incluido en el paquete Arduino-ESP32. No se requieren librerías adicionales.

### Paso 3: Configurar Arduino IDE para desarrollo Zigbee

1. Selecciona la placa correcta:
   - Tools > Board > ESP32 Arduino > ESP32-C6 Dev Module
2. Ajusta las opciones Zigbee:
   - Tools > Zigbee mode > Zigbee Endpoint
   - Tools > Partition Scheme > Zigbee 4MB with spiffs

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/iot_button_zigbee/1.png" style={{width:800, height:'auto'}}/></div>

### Paso 4: Preparar los archivos ZigbeeMultiButton

1. Descarga `ZigbeeMultiButton.h` y `ZigbeeMultiButton.cpp` desde el [Seeed IoT Button GitHub repository](https://github.com/Seeed-Projects/Seeed_IoT_Button_Zigbee/tree/main/Zigbee_Seeed_IoT_Button)
2. Copia estos archivos a la carpeta de endpoints de la librería Zigbee de Arduino:
   ```
   <Arduino_Installation_Path>/libraries/Zigbee/src/ep/
   ```
3. Edita `<Arduino_Installation_Path>/libraries/Zigbee/src/Zigbee.h` para incluir el nuevo header:                                                                                                                                                       
   ```cpp
   // Add this line with the other endpoint includes
   #include "ep/ZigbeeMultiButton.h"
   ```

## Paso 5: Crear tu firmware personalizado

Crea un nuevo sketch en Arduino y usa el siguiente código como punto de partida:

```cpp
#ifndef ZIGBEE_MODE_ED
#error "Zigbee end device mode is not selected in Tools->Zigbee mode"
#endif

#include "Zigbee.h"

// Pin definitions
#define BUTTON_PIN 9  // GPIO9 for the button

// Zigbee endpoint configuration
#define BUTTON_ENDPOINT_ID 1

// Create a Zigbee Multi-Button endpoint
ZigbeeMultiButton zbButton = ZigbeeMultiButton(BUTTON_ENDPOINT_ID);

void setup() {
  // Initialize serial communication
  Serial.begin(115200);
  Serial.println("Seeed Studio IoT Button - Zigbee");
  
  // Initialize button pin
  pinMode(BUTTON_PIN, INPUT_PULLUP);
  
  // Configure the Zigbee button endpoint
  zbButton.setManufacturerAndModel("Seeed Studio", "IoT_Button");
  
  // Add the endpoint to Zigbee
  Zigbee.addEndpoint(&zbButton);
  
  // Create Zigbee configuration for End Device
  esp_zb_cfg_t zigbeeConfig = ZIGBEE_DEFAULT_ED_CONFIG();
  
  // Start Zigbee
  if (!Zigbee.begin(&zigbeeConfig, false)) {
    Serial.println("Zigbee failed to start!");
    Serial.println("Rebooting...");
    ESP.restart();
  }
  
  Serial.println("Connecting to Zigbee network");
  while (!Zigbee.connected()) {
    Serial.print(".");
    delay(100);
  }
  Serial.println("\nSuccessfully connected to Zigbee network");
}

// Variables for button state tracking
bool lastButtonState = HIGH;  // Button is pulled up when not pressed
unsigned long lastDebounceTime = 0;
unsigned long debounceDelay = 50;
unsigned long pressStartTime = 0;
bool isLongPress = false;
int clickCount = 0;
unsigned long lastClickTime = 0;
const unsigned long doubleClickWindow = 400;  // Time window for double click detection

void loop() {
  // Read the button state
  bool reading = digitalRead(BUTTON_PIN);
  
  // Debounce the button
  if (reading != lastButtonState) {
    lastDebounceTime = millis();
  }
  
  if ((millis() - lastDebounceTime) > debounceDelay) {
    // Button state has settled
    
    // Button pressed (LOW)
    if (reading == LOW && lastButtonState == HIGH) {
      pressStartTime = millis();
      isLongPress = false;
    }
    
    // Button released (HIGH)
    if (reading == HIGH && lastButtonState == LOW) {
      unsigned long pressDuration = millis() - pressStartTime;
      
      // Long press detection (for factory reset)
      if (pressDuration > 1000) {
        isLongPress = true;
        Serial.println("Long press detected - Factory Reset");
        Zigbee.factoryReset();
      } 
      // Short press detection (for click counting)
      else {
        clickCount++;
        lastClickTime = millis();
      }
    }
    
    lastButtonState = reading;
  }
  
  // Process click count after a delay
  if (clickCount > 0 && (millis() - lastClickTime) > doubleClickWindow) {
    if (clickCount == 1) {
      Serial.println("Single click detected");
      zbButton.sendButtonAction(1);  // Send single click event
    } else if (clickCount == 2) {
      Serial.println("Double click detected");
      zbButton.sendButtonAction(2);  // Send double click event
    }
    
    clickCount = 0;
  }
  
  // Allow Zigbee stack to process events
  delay(10);
}
```

### Paso 6: Cargar y Probar el Firmware

1. Conecta tu IoT Button a tu computadora mediante USB  
2. Selecciona el puerto correcto en el IDE de Arduino  
3. Haz clic en el botón **Upload**  
4. Abre el **Monitor Serial** para ver información de depuración  
5. Sigue los pasos de emparejamiento del Método 1 para conectar el botón con Home Assistant  

## Comprendiendo la Implementación Zigbee

La implementación Zigbee del IoT Button utiliza los siguientes componentes:

### Clase ZigbeeMultiButton

Esta clase personalizada extiende la funcionalidad Zigbee para soportar múltiples acciones de botón:

- Implementa un dispositivo tipo interruptor Zigbee On/Off  
- Añade clústeres personalizados para reportar acciones del botón  
- Proporciona métodos para enviar diferentes eventos de botón a la red Zigbee  

### Detección de Acciones del Botón

El firmware detecta tres tipos de acciones:

1. **Clic Único**: Presionar y soltar rápidamente  
2. **Doble Clic**: Dos pulsaciones rápidas dentro de 400 ms  
3. **Pulsación Larga**: Mantener presionado por más de 1 segundo (se usa para restablecimiento de fábrica)  

### Gestión de la Red Zigbee

El firmware maneja operaciones de red Zigbee:

- Unirse automáticamente a una red Zigbee al iniciar  
- Reportar acciones del botón al coordinador  
- Restablecer a valores de fábrica cuando se detecta una pulsación larga  

## Solución de Problemas

Si tienes problemas con la funcionalidad Zigbee de tu IoT Button, prueba estos pasos:

### Problemas de Emparejamiento

1. **El botón no se une a la red**:  
   - Asegúrate de que tu coordinador Zigbee esté en modo de emparejamiento  
   - Verifica que el coordinador esté dentro del alcance del botón  
   - Intenta realizar un restablecimiento de fábrica manteniendo presionado el botón  

2. **El botón no aparece en Home Assistant**:  
   - Verifica que ZHA esté configurado correctamente  
   - Asegúrate de que el coordinador funcione correctamente  
   - Intenta reiniciar la integración ZHA  

### Problemas con las Acciones del Botón

1. **Las acciones del botón no se detectan**:  
   - Revisa la salida serial para información de depuración  
   - Verifica que el botón esté conectado correctamente al GPIO9  
   - Asegúrate de que el botón esté emparejado con tu red Zigbee  

2. **Las automatizaciones no se activan**:  
   - Verifica que la automatización esté correctamente configurada  
   - Revisa los registros Zigbee en Home Assistant para eventos entrantes  
   - Asegúrate de que el botón esté dentro del alcance del coordinador  

## Personalización Avanzada

Puedes personalizar aún más tu IoT Button modificando el firmware:

### Cambiar el Comportamiento del Botón

Puedes modificar la función `loop()` para detectar distintos patrones:

- Añadir detección de triple clic  
- Cambiar los parámetros de tiempo para diferentes tipos de pulsación  
- Implementar patrones de mantener y soltar  

### Añadir Monitoreo de Batería

El ESP32-C6 puede monitorear el voltaje de la batería. Agrega esta funcionalidad para reportar el nivel de batería a Home Assistant:

```cpp
// Add to setup()
zbButton.setPowerSource(ZB_POWER_SOURCE_BATTERY, 100);  // Initial battery level

// Add to loop() periodically
int batteryLevel = readBatteryLevel();  // Implement this function
zbButton.setBatteryLevel(batteryLevel);
```

### Agregando retroalimentación con el LED

Puedes usar un LED para proveer retroalimentación de las acciones del botón:

```cpp
#define LED_PIN 8  // Example LED pin

// Add to setup()
pinMode(LED_PIN, OUTPUT);

// Add LED feedback when actions are detected
digitalWrite(LED_PIN, HIGH);
delay(100);
digitalWrite(LED_PIN, LOW);
```

## Conclusión

El IoT Button de Seeed Studio con funcionalidad Zigbee ofrece una forma versátil y eficiente en consumo de energía para controlar tu hogar inteligente. Ya sea que utilices el firmware preinstalado o desarrolles tu propia solución personalizada, el botón proporciona una interfaz simple para activar automatizaciones complejas en Home Assistant.

Aprovechando las capacidades Zigbee integradas del ESP32-C6, el IoT Button puede operar durante largos periodos con batería, manteniendo una conectividad confiable con tu ecosistema domótico.

## Solución de Problemas

### P1: ¿Por qué mi dispositivo pierde conexión constantemente y no puede conectarse a Internet después de cambiar la batería? Confirmo que la batería está cargada.

Después de retirar la batería, debido a la estrategia de protección del chip de la batería 18650, esta necesita ser activada brevemente con un cable de alimentación USB cargado para funcionar correctamente.

## Recursos

- **[GITHUB]** [Repositorio de Seeed IoT Button Zigbee en Github](https://github.com/Seeed-Projects/Seeed_IoT_Button_Zigbee)  
- **[GITHUB]** [Repositorio de Seeed IoT Button ESPHome en Github](https://github.com/Seeed-Studio/xiao-esphome-projects/tree/main/projects/seeedstudio-iot-button)  
- **[PDF]** [Esquemático en PDF del Seeed IoT Button](https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/Seeed_IoT_Button_SCH.pdf)  
- **[SCH&PCB]** [Esquemático y PCB del Seeed IoT Button](https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/Seeed_IoT_Button_SCH&PCB.zip)  

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte distintos tipos de soporte y asegurarnos de que tu experiencia sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a tus preferencias y necesidades.


<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div> 