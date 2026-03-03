---
title: Cyber Desk en Wio Terminal usando Platform IO, potenciado por Cursor AI
image: https://files.seeedstudio.com/wiki/CyberDesk_Wio-Terminal/CyberDesk_Wio-Terminal_1.gif
slug: /es/CyberDeck_Wio-Terminal
last_update:
  date: 12/09/2024
  author: Eric Pan
---

# Tutorial de Monitor de PC con Wio Terminal - Estilo Cyberpunk

- [**Descripción General del Proyecto Completo**](#jump1)
- [**Tutorial de Uso de Cursor AI**](#jump2)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/CyberDesk_Wio-Terminal/CyberDesk_Wio-Terminal.gif" style={{width:500, height:'auto'}}/></div>

## Descripción General del Proyecto {#jump1}

Crear un sistema de monitoreo de PC estilo cyberpunk usando Wio Terminal como terminal de visualización para monitorear varios indicadores de rendimiento de la computadora en tiempo real.

## Requisitos de Hardware

- [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)  
- Cable de Datos USB-C  
- Una Computadora con Windows  

## Requisitos de Software

- [VSCode](https://code.visualstudio.com/) + Plugin PlatformIO  
- [Python 3.x](https://www.python.org/)
- Open Hardware Monitor (para obtener datos de temperatura)  

## Pasos Detallados

### 1. Configuración del Entorno

- Instalar paquetes de Python:

  ```bash
  pip install psutil pyserial GPUtil wmi pywin32
  ```

- Instalar plugins de VSCode:
  1. Instalar el plugin **PlatformIO IDE**  
  2. Instalar y ejecutar **OpenHardwareMonitor**  

### 2. Crear el Proyecto

- Crear un proyecto de PlatformIO:  
  1. Abrir VSCode  
  2. Hacer clic en el icono de PlatformIO  
  3. Seleccionar "New Project"  
  4. Configuración:  
     - **Board:** "Seeed Wio Terminal"  
     - **Framework:** "Arduino"  

### 3. Implementación del Código

#### (a) Configurar `platformio.ini`

```ini
[env:seeed_wio_terminal]
platform = atmelsam
board = seeed_wio_terminal
framework = arduino
lib_deps = 
    Seeed_Arduino_LCD@2.1.0
```

#### (b) Crear Script de Monitoreo de PC (`pc_stats.py`)

```python
import psutil
import serial
import time
import GPUtil
import socket
import wmi
from datetime import datetime

def get_cpu_temp():
    try:
        w = wmi.WMI(namespace="root\wmi")
        temperature_info = w.MSAcpi_ThermalZoneTemperature()[0]
        temp = float(temperature_info.CurrentTemperature) / 10.0 - 273.15
        return max(0, min(temp, 100))
    except Exception as e:
        print(f"[WARN] Unable to read CPU temperature: {e}")
        return 0.0

# Configure serial port (modify COM port as needed)
ser = serial.Serial('COM10', 115200)
while True:
    try:
        # Retrieve system data
        cpu_usage = psutil.cpu_percent()
        ram_usage = psutil.virtual_memory().percent
        cpu_temp = get_cpu_temp()
        disk_usage = psutil.disk_usage('/').percent
        
        # Retrieve GPU information
        try:
            gpus = GPUtil.getGPUs()
            gpu_usage = gpus[0].load * 100
            gpu_temp = gpus[0].temperature
        except:
            gpu_usage = gpu_temp = 0
            
        # Send data to Wio Terminal
        data = f"{cpu_usage},{ram_usage},{cpu_temp},{gpu_usage},{gpu_temp},{disk_usage},{socket.gethostbyname(socket.gethostname())}\n"
        ser.write(data.encode())
        time.sleep(0.5)
        
    except KeyboardInterrupt:
        ser.close()
        break
```

#### (c) Create Wio Terminal Code (`main.cpp`)

```cpp
#include <Arduino.h>
#include "TFT_eSPI.h"

TFT_eSPI tft;
int currentPage = 0;

// Define buttons
const int BTN_1 = WIO_KEY_A;
const int BTN_2 = WIO_KEY_B;
const int BTN_3 = WIO_KEY_C;

// PC State Structure
struct PCStats {
    int cpuUsage = 0;
    int ramUsage = 0;
    float cpuTemp = 0.0;
    int diskUsage = 0;
    int gpuUsage = 0;
    float gpuTemp = 0.0;
    char ipAddress[16] = "0.0.0.0";
    unsigned long lastUpdate = 0;
} pcStats;

// Drawing Functions
void drawBox(int x, int y, int w, int h) {
    tft.drawRect(x, y, w, h, TFT_GREEN);
}

void drawTitle(const char* title) {
    tft.drawString("<<", 10, 10);
    tft.drawString(title, 40, 10);
    tft.drawString(">>", 270, 10);
    drawBox(5, 5, 310, 230);
    tft.drawLine(10, 30, 300, 30, TFT_GREEN);
}

// [Other drawing functions...]

void setup() {
    Serial.begin(115200);
    tft.begin();
    tft.setRotation(3);
    tft.setTextSize(2);
    
    pinMode(BTN_1, INPUT_PULLUP);
    pinMode(BTN_2, INPUT_PULLUP);
    pinMode(BTN_3, INPUT_PULLUP);
    
    drawPage(currentPage);
}

void loop() {
    // Receive and parse data
    if (Serial.available()) {
        String data = Serial.readStringUntil('\n');
        // Parse data...
    }
    
    // Button handling
    if (digitalRead(BTN_1) == LOW) {
        currentPage = 0;
        drawPage(currentPage);
        delay(200);
    }
    // [Other button handling...]

    // Update display
    if (currentPage == 0) {
        drawSystemStatus();
        delay(100);
    }
}
```

### 4. Ejecutar el Proyecto

1. Cargar el código al Wio Terminal  
2. Ejecutar **OpenHardwareMonitor**  
3. Ejecutar el script de Python:

   ```bash
   python pc_stats.py
   ```

4. Usa los botones del Wio Terminal para cambiar entre páginas:  
   - **Botón A:** Estado del Sistema  
   - **Botón B:** Monitoreo de Rendimiento  
   - **Botón C:** Información de Red  

---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/CyberDesk_Wio-Terminal/cyberdesk_wio-terminal.jpg" style={{width:300, height:'auto'}}/></div>

## Sugerencias de Personalización

1. **Ajustar Estilo de Pantalla:** Modifica colores (ej., `TFT_GREEN`), diseño y tamaño de fuente.  
2. **Añadir Animaciones:** Agrega efectos animados para una sensación más cyberpunk.  
3. **Añadir Nuevas Funciones:**  
   - Monitoreo de velocidad de red  
   - Velocidad de lectura/escritura de disco  
   - Información de procesos del sistema  

---

## Solución de Problemas

1. **Problemas de Conexión Serial:**  
   - Verifica si el puerto COM es correcto  
   - Confirma la configuración de velocidad de baudios (115200)  

2. **Problemas de Lectura de Temperatura:**  
   - Asegúrate de que **OpenHardwareMonitor** esté ejecutándose  
   - Verifica los permisos de administrador  

3. **Problemas de Pantalla:**  
   - Verifica si las coordenadas de pantalla exceden los límites  
   - Usa la función `clearArea` para evitar imágenes fantasma  

---

## Optimización Avanzada

- Añadir funcionalidad de registro de datos  
- Implementar umbrales de advertencia  
- Personalizar temas de pantalla  
- Añadir visualizaciones de gráficos  
- Habilitar conectividad WiFi  

Este proyecto es excelente para principiantes y ofrece mucho espacio para expansión. Comienza con la funcionalidad básica y gradualmente añade las características que desees.

---

## Tutorial de Desarrollo con Cursor AI - Basado en el Monitor de PC Wio Terminal {#jump2}

## 1. Fundamentos de Cursor AI

### 1.1 Inicialización del Proyecto

1. Abre el editor Cursor.  
2. Dile a la AI lo que quieres crear:  
   > "Quiero crear un proyecto de Wio Terminal para mostrar información del sistema de PC en un estilo cyberpunk."  
3. La AI te ayudará a:  
   - Sugerir estructura del proyecto  
   - Crear archivos necesarios  
   - Proporcionar código inicial  

---

### 1.2 Modo de Colaboración

- **Describe de manera clara y específica:** Enfócate en una característica a la vez.  
- **Proporciona retroalimentación puntual:** Hazle saber a la AI cuando encuentres problemas.  

---

## 2. Estudio de Caso Práctico

### 2.1 Crear Funcionalidad de Pantalla Básica

**Buen prompt:**  
> "Ayúdame a crear un programa de pantalla para Wio Terminal que muestre uso de CPU, uso de memoria e información de temperatura."  

- La AI proporcionará:  
  - Archivos de encabezado necesarios  
  - Estructura básica del código  
  - Implementación de funciones de pantalla  

---

### 2.2 Resolver Problemas Específicos

**Ejemplo:** Corregir problemas de lectura de temperatura  
**Buen prompt:**  
> "La lectura de temperatura de CPU es 0. ¿Cómo puedo arreglar esto?"  

- Respuesta de la AI:  
  1. Analizar posibles causas  
  2. Proporcionar múltiples soluciones  
  3. Mostrar ejemplos de implementación  

---

### 2.3 Optimizar Efectos de Pantalla

**Buen prompt:**  
> "¿Cómo puedo optimizar la pantalla para un estilo más cyberpunk?"  

- La AI:  
  - Proporcionará sugerencias de diseño  
  - Implementará código específico  

---

## 3. Técnicas de Depuración

### 3.1 Manejo de Errores de Código

- Cuando encuentres errores de compilación, copia el mensaje de error a la AI:  
  > "Encontré este error durante la compilación: [mensaje de error]"  

- La AI:  
  - Analizará la causa del error  
  - Proporcionará correcciones  
  - Explicará la solución  

---

### 3.2 Manejo de Problemas de Lógica

**Buena descripción:**  
> "Los números en la pantalla tienen imágenes fantasma cuando se actualizan. ¿Cómo puedo arreglar esto?"  

- Proceso de la AI:  
  1. Entender la causa raíz  
  2. Sugerir funciones de área clara  
  3. Proporcionar una solución completa  

---

## 4. Mejores Prácticas

### 4.1 Hacer las Preguntas Correctas

1. **Sé Específico:**  
   - "Quiero implementar [característica específica]."  
2. **Proporciona Contexto:**  
   - "He implementado [característica A], ahora quiero añadir [característica B]."  
3. **Describe los Problemas Claramente:**  
   - "Encontré [problema específico], y el mensaje de error es [contenido del error]."  

---

### 4.2 Optimización de Código

1. **Solicita Revisión de Código:**  
   - "¿Puedes revisar este código y sugerir mejoras?"  
2. **Optimización de Rendimiento:**  
   - "Este código se ejecuta lentamente. ¿Cómo puedo optimizarlo?"  
3. **Mejora del Estilo de Código:**  
   - "¿Cómo puedo hacer este código más legible y mantenible?"  

---

### 4.3 Expansión de Características

1. **Desarrollo Gradual:**  
   - "Quiero añadir [nueva característica]. ¿Cómo debería empezar?"  
2. **Solicitudes de Modularización:**  
   - "¿Cómo puedo modularizar esta característica para futuras extensiones?"  

---

## 5. Errores Comunes

### 5.1 Qué Evitar

- **Problemas Poco Claros:**  
  - ❌ "El código no funciona. ¿Qué hago?"  
- **Información Incompleta:**  
  - ❌ "Hay un error. Ayúdame a solucionarlo."  
- **Alcance Demasiado Amplio:**  
  - ❌ "Ayúdame a completar todo el proyecto."  

---

### 5.2 Prácticas Recomendadas

- **Descripción Clara del Problema:**  
  - ✅ "El valor de uso de CPU siempre es 0. ¿Cómo puedo solucionarlo?"  
- **Proporciona Información Completa:**  
  - ✅ "Encontré este error: [información completa del error]. Usando versión de librería: ..."  
- **División Razonable de Tareas:**  
  - ✅ "Primero implementemos la visualización básica, luego añadamos otras características paso a paso."  

---

## 6. Conclusión

- **Desarrollo Gradual:** Comienza con funcionalidad básica, luego añade nuevas características.  
- **Resolución Oportuna de Problemas:** Maneja los problemas conforme surjan.  
- **Comunicación Efectiva:** Describe claramente tus necesidades y proporciona contexto.  
- **Optimización Continua:** Revisa y mejora tu código regularmente.  

Al desarrollar este proyecto, puedes ver cómo Cursor AI mejora significativamente la eficiencia de desarrollo. La clave es aprender cómo colaborar efectivamente con IA. Preguntas claras y requisitos bien definidos te ayudarán a lograr mejores resultados.
