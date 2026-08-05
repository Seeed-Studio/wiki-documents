---
description: Presenta el uso de la detección de vibraciones anómalas.
title: Detección de Vibraciones Anómalas
image: https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/Intro_image_title.webp
slug: /sensecraft-ai/tutorials/workspace/abnormal-vibration-detection
sidebar_position: 1
last_update:
  date: 01/06/2026
  author: jancee
createdAt: '2025-08-14'
updatedAt: '2026-01-06'
url: https://wiki.seeedstudio.com/es/sensecraft-ai/tutorials/workspace/abnormal-vibration-detection/
---

# Detección de Anomalías de Vibración

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/Intro_image.png"/></div>

Así como la lesión más pequeña puede provocar una enfermedad mortal, los desastres de ingeniería más graves a menudo se originan en anomalías aparentemente insignificantes. La vibración es un indicador crucial: fracturas, obstrucciones, sobrecargas y desgaste se manifiestan en patrones de vibración distintos.

Este tutorial presenta el **Vibration Anomaly Detection Kit**. Es una solución inteligente y ligera diseñada para monitorizar e identificar patrones de vibración anómalos en tiempo real. Al aprender la firma de vibración normal de un dispositivo con datos de entrenamiento mínimos, proporciona alertas tempranas de fallos mecánicos.

<div style={{ textAlign: 'center' }}><video src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/AcousticsLab%20-%20Draft%208.mp4" type="video/mp4" controls style={{ width: '100%', height: '600px', objectFit: 'cover' }} /></div>

---

## 1. Preparación

Antes de comenzar a detectar anomalías, asegúrate de tener preparados los siguientes entornos de hardware y software.

### Requisitos de hardware

La solución consta de 3 módulos de hardware.

- **MCU:** <a href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Pre-Soldered-p-6334.html" target="_blank">**Seeed Studio XIAO ESP32-S3 (Pre-Soldered)**</a>
- **Placa de expansión:** <a href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">**Grove Shield for Seeed Studio XIAO**</a> (con gestión de batería integrada)
- **Sensor:** <a href="https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR-p-4533.html" target="_blank">**Grove - 3-Axis Digital Accelerometer (LIS3DHTR)**</a>
- **Cable:** 1 cable de datos USB-C
- **Objeto objetivo:** Un dispositivo con vibraciones regulares y constantes (por ejemplo, motor, ventilador).

**Obtén el Kit completo:** <a href="https://www.seeedstudio.com/Vibration-Anomaly-Detection-Kit-for-XIAO-ESP32-S3.html" target="_blank">**Vibration Anomaly Detection Kit for XIAO ESP32-S3**</a>

### Configuración de software

1. Abre tu navegador y visita <a href="https://sensecraft.seeed.cc/ai/home?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_home" target="_blank">**SenseCraft AI**</a>.
2. Inicia sesión con tu cuenta (regístrate si aún no tienes una).
3. Entra en el espacio de trabajo **XIAO ESP32S3 Sense** y selecciona **"Vibration"**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace.png"/></div>

---

## 2. Guía paso a paso

Sigue estos pasos para entrenar tu dispositivo para reconocer vibraciones "normales" y detectar anomalías.

### Paso 1: Conectar e inicializar

1. **Montaje:** Conecta el acelerómetro al XIAO ESP32-S3 a través del Grove Shield. Fija el sensor firmemente a tu objeto objetivo.
2. **Conectar:** Conecta el XIAO ESP32S3 a tu ordenador mediante USB. Haz clic en el botón **"Connect"** en la interfaz de SenseCraft AI.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace2.png"/></div>

3. **Verificar:** El sistema mostrará la información del dispositivo.
    * *Nota:* Si el firmware es incorrecto, utiliza el botón de grabación en la interfaz para actualizar al **firmware de Vibration Anomaly Detection (VAD)**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace3.png"/></div>

### Paso 2: Configuración

Una vez conectado, verás el área de Configuración de Parámetros.
* **Window Size:** El valor predeterminado es **192**. Mantén este valor por ahora.
    * *Consejo:* Una ventana demasiado pequeña puede provocar un aprendizaje insuficiente, mientras que una ventana demasiado grande aumenta el tiempo de inferencia. Podrás ajustarla más adelante.

### Paso 3: Entrenar (recopilar datos normales)

El dispositivo necesita aprender cómo se siente lo "Normal".

1. Asegúrate de que tu objeto objetivo esté funcionando en su **estado normal**.
2. Haz clic en **"Collect Normal Vibration"**.
3. Espera el mensaje de éxito: "Normal vibration collection succeeded".
4. Haz clic en **"Save"**. Esto almacena el modelo en la memoria flash de la MCU.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace4.png"/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace5.png"/></div>

### Paso 4: Detectar anomalías

1. Haz clic en **"Detect"** para iniciar la monitorización en tiempo real.
2. Observa el **Área de Salida de Detección**:
    * **Normal:** El patrón de vibración coincide con el modelo aprendido.
    * **Abnormal:** Se detecta una posible anomalía (se muestra una alerta).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace6.png"/></div>

### Paso 5: Despliegue y GPIO

Puedes configurar el dispositivo para que active hardware externo cuando se produzca una anomalía.

1. Localiza la sección de **Configuración de GPIO**.
2. Selecciona un Pin (por ejemplo, un LED en el Pin 21) y establece el nivel activo para el estado anómalo.
3. Activa **"Default Power-On Inference Mode"**. Esto permite que el dispositivo funcione automáticamente cuando se alimenta con una batería, sin necesidad de conexión a un ordenador.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace7.png"/></div>

---

## 3. Guía de ajuste de parámetros

Si observas que la detección es demasiado sensible (falsas alarmas) o no lo suficientemente sensible, necesitas ajustar los parámetros.

### Vista general de la interfaz para el ajuste

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace1.png"/></div>

La interfaz te ayuda a visualizar los datos:
1.  **Información del dispositivo:** Área superior.
2.  **Configuración:** Parámetros y ajustes de recopilación.
3.  **Visualización:** Forma de onda en tiempo real (Tiempo vs. Aceleración).
4.  **Salida:** Resultados de detección (0 para Normal, 1 para Anormal).

### Parámetros clave

#### 1. Window Size
Define el número de puntos de muestreo para un "ciclo" de análisis.
* **Predeterminado:** 192 (aprox. 1,92 segundos a 100 Hz).
* **Cómo ajustarlo:** La ventana debe cubrir al menos un ciclo completo de vibración. Utiliza el gráfico de forma de onda para medir el período de vibración de tu máquina. Si la máquina vibra lentamente, aumenta el Window Size.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace9.png"/></div>

#### 2. Umbral de anomalía
Define la sensibilidad de la detección.
* **Rango:** de 0,0 a 1,0 (Predeterminado: 0,5).
* **Cómo ajustarlo:**
    * **¿Demasiadas falsas alarmas?** Aumenta el umbral (por ejemplo, a 0,6 o 0,7).
    * **¿Se pasan por alto anomalías?** Disminuye el umbral (por ejemplo, a 0,3 o 0,4).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace10.png"/></div>

---

## 4. Algoritmo y teoría

*Esta sección explica la tecnología detrás de los botones "Collect" y "Detect". Es opcional para el uso básico.*

El sistema utiliza el algoritmo **Gyroscope Euclidean Distance Anomaly Detection (GEDAD)**, adaptado para acelerómetros de 3 ejes. Consta de dos fases:

### Fase 1: Aprendizaje
El algoritmo establece una plantilla de referencia de vibración normal.
1.  **Generación de la plantilla:** Recopila un conjunto de datos normales de aceleración de 3 ejes.
2.  **Cálculo del umbral:** El algoritmo desliza "bloques" de datos a lo largo de la plantilla, calculando la distancia euclídea (L2). A continuación, determina estadísticamente un umbral que separa las variaciones normales de las anomalías.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/3_Axis_2.png"/></div>

### Fase 2: Inferencia
Durante la detección en tiempo real, los datos entrantes se comparan con la plantilla aprendida.
* Si la distancia euclídea de los datos en tiempo real está por debajo del umbral con respecto a la plantilla, se considera **Normal**.
* Si la distancia se mantiene por encima del umbral, se marca como **Abnormal**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/window_side.png"/></div>

**Ventajas:**
* Alta velocidad de entrenamiento.
* Bajo consumo computacional (adecuado para ESP32S3).
* Requiere una cantidad mínima de datos para el entrenamiento.

---

## 5. Escenarios de aplicación

El Vibration Anomaly Detection Kit es ideal para mantenimiento predictivo y monitorización de seguridad en diversos campos:

* **Industrial:** Bombas, compresores de aire, ventiladores, motores, cajas de engranajes.
* **HVAC:** Compresores de refrigeración, torres de refrigeración.
* **Robótica:** Sistemas AGV/AMR, tractores agrícolas.
* **Centros de datos:** Unidades de enfriamiento, refrigeración de servidores.
* **Consumo:** Alertas de desequilibrio de lavadoras, mecanismos de puertas de garaje.

---

## Código abierto y soporte

**Código fuente:** <a href="https://github.com/Seeed-Studio/AcousticsLab" target="_blank">GitHub - Seeed-Studio/AcousticsLab</a>

Nuestros algoritmos y firmware son de código abierto. Estamos trabajando activamente en funciones como informes por WiFi + MQTT y análisis FFT. No dudes en enviar un <a href="https://github.com/Seeed-Studio/AcousticsLab/issues" target="_blank">Issue</a> o un <a href="https://github.com/Seeed-Studio/AcousticsLab/pulls" target="_blank">Pull Request</a>.

**Soporte técnico:**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
