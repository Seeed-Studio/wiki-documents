---
description: Introduce el uso de la detección de vibraciones anómalas.
title: Detección de Vibraciones Anómalas
image: https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/Intro_image_title.webp
slug: /sensecraft-ai/tutorials/workspace/abnormal-vibration-detection
sidebar_position: 1
last_update:
  date: 01/06/2026
  author: jancee
createdAt: '2025-09-03'
updatedAt: '2026-01-06'
url: https://wiki.seeedstudio.com/es/sensecraft-ai/tutorials/workspace/abnormal-vibration-detection/
---

# Detección de Anomalías de Vibración

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/Intro_image.png"/></div>

Así como la lesión más pequeña puede llevar a una enfermedad fatal, los desastres de ingeniería más severos a menudo surgen de anomalías aparentemente insignificantes. La vibración es un indicador crucial: fracturas, bloqueos, sobrecargas y desgaste, todos manifiestan patrones de vibración distintos.

Este tutorial presenta el **Kit de Detección de Anomalías de Vibración**. Es una solución inteligente ligera diseñada para monitorear e identificar patrones de vibración anómalos en tiempo real. Al aprender la firma de vibración normal de un dispositivo con datos de entrenamiento mínimos, proporciona alertas tempranas para fallas mecánicas.

<div style={{ textAlign: 'center' }}><video src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/AcousticsLab%20-%20Draft%208.mp4" type="video/mp4" controls style={{ width: '100%', height: '600px', objectFit: 'cover' }} /></div>

---

## 1. Preparación

Antes de comenzar a detectar anomalías, asegúrate de tener listos los siguientes entornos de hardware y software.

### Requisitos de Hardware

La solución consta de 3 módulos de hardware.

- **MCU:** <a href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Pre-Soldered-p-6334.html" target="_blank">**Seeed Studio XIAO ESP32-S3 (Pre-Soldado)**</a>
- **Placa de Expansión:** <a href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">**Grove Shield para Seeed Studio XIAO**</a> (con gestión de batería integrada)
- **Sensor:** <a href="https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR-p-4533.html" target="_blank">**Grove - Acelerómetro Digital de 3 Ejes (LIS3DHTR)**</a>
- **Cable:** 1 cable de datos USB-C
- **Objeto Objetivo:** Un dispositivo con vibraciones regulares consistentes (ej., motor, ventilador).

**Obtén el Kit completo:** <a href="https://www.seeedstudio.com/Vibration-Anomaly-Detection-Kit-for-XIAO-ESP32-S3.html" target="_blank">**Kit de Detección de Anomalías de Vibración para XIAO ESP32-S3**</a>

### Configuración de Software

1. Abre tu navegador y visita <a href="https://sensecraft.seeed.cc/ai/home" target="_blank">**SenseCraft AI**</a>.
2. Inicia sesión con tu cuenta (regístrate si no tienes una).
3. Entra al espacio de trabajo **XIAO ESP32S3 Sense** y selecciona **"Vibration"**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace.png"/></div>

---

## 2. Guía Paso a Paso

Sigue estos pasos para entrenar tu dispositivo a reconocer vibraciones "normales" y detectar anomalías.

### Paso 1: Conectar e Inicializar

1. **Ensamblaje:** Conecta el acelerómetro al XIAO ESP32-S3 a través del Grove Shield. Fija el sensor firmemente a tu objeto objetivo.
2. **Conectar:** Conecta el XIAO ESP32S3 a tu computadora vía USB. Haz clic en el botón **"Connect"** en la interfaz de SenseCraft AI.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace2.png"/></div>

3. **Verificar:** El sistema mostrará la información del dispositivo.
    * *Nota:* Si el firmware es incorrecto, usa el botón de grabación en la interfaz para actualizar al **firmware de Detección de Anomalías de Vibración (VAD)**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace3.png"/></div>

### Paso 2: Configuración

Una vez conectado, verás el área de Configuración de Parámetros.
* **Window Size:** Por defecto es **192**. Mantén este valor por ahora.
    * *Consejo:* Una ventana muy pequeña puede llevar a un aprendizaje insuficiente, mientras que una ventana muy grande aumenta el tiempo de inferencia. Puedes ajustar esto más tarde.

### Paso 3: Entrenar (Recopilar Datos Normales)

El dispositivo necesita aprender cómo se siente lo "Normal".

1. Asegúrate de que tu objeto objetivo esté funcionando en su **estado normal**.
2. Haz clic en **"Collect Normal Vibration"**.
3. Espera el mensaje de éxito: "Normal vibration collection succeeded".
4. Haz clic en **"Save"**. Esto almacena el modelo en la memoria flash del MCU.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace4.png"/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace5.png"/></div>

### Paso 4: Detectar Anomalías

1. Haz clic en **"Detect"** para iniciar el monitoreo en tiempo real.
2. Observa el **Área de Salida de Detección**:
    * **Normal:** El patrón de vibración coincide con el modelo aprendido.
    * **Abnormal:** Se detecta una anomalía potencial (se muestra Alerta).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace6.png"/></div>

### Paso 5: Despliegue y GPIO

Puedes configurar el dispositivo para activar hardware externo cuando ocurra una anomalía.

1. Localiza la sección **GPIO Configuration**.
2. Selecciona un Pin (ej., LED en Pin 21) y establece el nivel activo para el estado anómalo.
3. Habilita **"Default Power-On Inference Mode"**. Esto permite que el dispositivo funcione automáticamente cuando se alimenta con batería, sin conexión a computadora.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace7.png"/></div>

---

## 3. Guía de Ajuste de Parámetros

Si encuentras que la detección es muy sensible (falsas alarmas) o no lo suficientemente sensible, necesitas ajustar los parámetros.

### Resumen de la Interfaz para Ajustes

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace1.png"/></div>

La interfaz te ayuda a visualizar los datos:
1.  **Información del Dispositivo:** Área superior.
2.  **Configuraciones:** Configuraciones de parámetros y recopilación.
3.  **Visualización:** Forma de onda en tiempo real (Tiempo vs. Aceleración).
4.  **Salida:** Resultados de detección (0 para Normal, 1 para Anómalo).

### Parámetros Clave

#### 1. Window Size
Define el número de puntos de muestra para un "ciclo" de análisis.
* **Por defecto:** 192 (aprox. 1.92 segundos a 100Hz).
* **Cómo Ajustar:** La ventana debe cubrir al menos un ciclo completo de vibración. Usa el gráfico de forma de onda para medir el período de vibración de tu máquina. Si la máquina vibra lentamente, aumenta el Window Size.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace9.png"/></div>

#### 2. Anomaly Threshold
Define la sensibilidad de la detección.
* **Rango:** 0.0 a 1.0 (Por defecto: 0.5).
* **Cómo Ajustar:**
    * **¿Demasiadas falsas alarmas?** Aumenta el umbral (ej., a 0.6 o 0.7).
    * **¿Anomalías perdidas?** Disminuye el umbral (ej., a 0.3 o 0.4).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/XIAO_ESP32S3_workspace10.png"/></div>

---

## 4. Algoritmo y Teoría

*Esta sección explica la tecnología detrás de los botones "Collect" y "Detect". Es opcional para uso básico.*

El sistema utiliza el algoritmo **Detección de Anomalías por Distancia Euclidiana de Giroscopio (GEDAD)**, adaptado para acelerómetros de 3 ejes. Consiste en dos fases:

### Fase 1: Aprendizaje
El algoritmo establece una plantilla base de vibración normal.
1.  **Generación de Plantilla:** Recopila un conjunto de datos de aceleración de 3 ejes normales.
2.  **Cálculo de Umbral:** El algoritmo desliza "fragmentos" de datos a través de la plantilla, calculando la distancia Euclidiana (L2). Luego determina estadísticamente un umbral que separa las variaciones normales de las anomalías.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/3_Axis_2.png"/></div>

### Fase 2: Inferencia
Durante la detección en tiempo real, los datos entrantes se comparan con la plantilla aprendida.
* Si la distancia Euclidiana de los datos en tiempo real está por debajo del umbral relativo a la plantilla, es **Normal**.
* Si la distancia permanece por encima del umbral, se marca como **Anómalo**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft/SenseCraft_AI/window_side.png"/></div>

**Ventajas:**
* Velocidad de entrenamiento rápida.
* Baja sobrecarga computacional (adecuado para ESP32S3).
* Requiere datos mínimos para entrenamiento.

---

## 5. Escenarios de Aplicación

El Kit de Detección de Anomalías de Vibración es ideal para mantenimiento predictivo y monitoreo de seguridad en varios campos:

* **Industrial:** Bombas, Compresores de Aire, Ventiladores, Motores, Cajas de Engranajes.
* **HVAC:** Compresores de Refrigeración, Torres de Enfriamiento.
* **Robótica:** Sistemas AGV/AMR, Tractores Agrícolas.
* **Centros de Datos:** Unidades Enfriadoras, Enfriamiento de Servidores.
* **Consumidor:** Alertas de balance de lavadora, Mecanismos de puertas de garaje.

---

## Código Abierto y Soporte

**Código Fuente:** <a href="https://github.com/Seeed-Studio/AcousticsLab" target="_blank">GitHub - Seeed-Studio/AcousticsLab</a>

Nuestros algoritmos y firmware son de código abierto. Estamos trabajando activamente en características como reportes WiFi + MQTT y análisis FFT. Siéntete libre de enviar un <a href="https://github.com/Seeed-Studio/AcousticsLab/issues" target="_blank">Issue</a> o <a href="https://github.com/Seeed-Studio/AcousticsLab/pulls" target="_blank">Pull Request</a>.

**Soporte Técnico:**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
