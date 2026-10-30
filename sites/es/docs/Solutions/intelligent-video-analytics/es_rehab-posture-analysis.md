---
description: 'Documento de ingeniería de análisis de postura para rehabilitación con Edge AI: reentrenamiento de topología anatómica de 33 puntos clave, máquina de estados con histéresis, medición de ángulos de ROM, motor de alertas por compensación, modelos en cascada secundarios de mano/pie, despliegue automatizado con solution-cli, protocolos WebSocket/EMR y benchmarks en el borde'
title: 'Análisis de Postura para Rehabilitación con Edge AI: Pose de 33 Puntos Clave y Cinemática Clínica'
sidebar_label: 'Análisis de Postura para Rehabilitación'
keywords:
  - Análisis de Postura para Rehabilitación
  - Detección de 33 Puntos Clave
  - Reentrenamiento YOLO11-Pose
  - Cinemática Clínica
  - Rango de Movimiento Articular ROM
  - Alerta de Compensación Patológica
  - Extensión de Micro-Modelo en Cascada
  - solution-cli
  - reCamera Pro
  - RV1126B RKNN
  - SG2002
  - Fuga de Video Cero
image: https://files.seeedstudio.com/ReferenceDesign/landpage_asset/rehab_posture_analysis/cover-93765b27.png
slug: /solutions/rehab-posture-analysis
sidebar_position: 3
last_update:
  date: 10/30/2026
  author: seeed-solutions-hub
createdAt: '2026-10-30'
updatedAt: '2026-10-30'
url: https://wiki.seeedstudio.com/es/solutions/rehab-posture-analysis/
generated_from: sensecraft-solutions@rehab_posture_analysis
---

:::caution[Usage Notice]
Esta es una herramienta asistiva de evaluación biomecánica, no un dispositivo médico de diagnóstico certificado. Proporciona telemetría cinemática objetiva y no reemplaza la evaluación clínica de fisioterapeutas titulados.
:::

## Qué hace esta solución

### Arquitectura del Sistema y Flujo de Datos

![Arquitectura de Análisis de Postura de Rehabilitación con Edge AI](https://files.seeedstudio.com/ReferenceDesign/landpage_asset/rehab_posture_analysis/architecture-en-328afea6.png)

La solución desacopla la percepción de pose en tiempo real en el borde de la evaluación biomecánica clínica en cuatro dominios funcionales: las cámaras inteligentes en el borde manejan la inferencia de 33 puntos en el dispositivo; las máquinas de estados con histéresis calculan el ROM articular y alertas de compensación con rebote eliminado; los primitivos vectoriales se transmiten por WebSocket y RTSP a pantallas de guía en vivo, con telemetría MQTT/Webhook que llega a los sistemas EMR del hospital; el video crudo permanece en la cámara para garantizar la privacidad.


En clínicas ambulatorias, centros de rehabilitación para personas mayores o rincones de ejercicio en el hogar, **la cámara inteligente con Edge AI estima en tiempo real una topología anatómica de esqueleto de 33 puntos clave de todo el cuerpo**. Cuando los pacientes muestran compensaciones involuntarias como encogimiento de hombros o colapso medial de rodilla, **el HUD en pantalla dispara una alerta visual roja y una señal auditiva en menos de 50 ms**, informando un Rango de Movimiento (ROM) articular objetivo y métricas de repeticiones válidas a los sistemas EMR del hospital.

- Repositorio de Código Abierto: [github.com/suharvest/rehab-posture-analysis](https://github.com/suharvest/rehab-posture-analysis)
- Dimensionamiento y Despliegue: [Guía de Despliegue de Reference Design](https://www.seeed.cc/solutions/reference-designs/rehab_posture_analysis/deploy)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751A11.959 11.959 0 0112 2.714z" /></svg>
            </div>
            <div class="info-content">
                <h3>Topología Real de 33 Puntos Clave</h3>
                <p>Modelo de esqueleto de 33 articulaciones reentrenado que completa los dedos pulgar/índice/meñique bilaterales y los triángulos plantares talón/dedos, eliminando la truncación de miembros distales en poses estándar de 17 puntos.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>
            </div>
            <div class="info-content">
                <h3>Alerta de Compensación por Debajo de 50 ms</h3>
                <p>Rebote temporal de 3 fotogramas combinado con delta de altura acromial bilateral (&gt;12 mm) intercepta el encogimiento del trapecio y el valgo de rodilla, rechazando trampas de repeticiones parciales.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>Fuga de Video Cero</h3>
                <p>Los fotogramas crudos de la cámara se descartan inmediatamente después de la inferencia en SRAM/DRAM en chip; solo los primitivos de coordenadas JSON y los eventos de alerta cruzan los límites de la red.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
            </div>
            <div class="info-content">
                <h3>Inferencia en Tiempo Real a 24,0 FPS</h3>
                <p>reCamera Pro (RV1126B 3 TOPS) alcanza 41,7 ms de latencia extremo a extremo sin estela visual en pantallas grandes orientadas al paciente.</p>
            </div>
        </li>
    </ul>
</div>

### Demostración en Vivo del Dispositivo

Salida de video real desde la cámara inteligente en el borde: los 33 puntos clave y las líneas del esqueleto anatómico se superponen sobre el paciente, con el ángulo de ROM articular en vivo mostrado a la izquierda y la fase del ejercicio, repeticiones válidas y puntuaciones de calidad renderizadas a la derecha.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/ReferenceDesign/landpage_asset/rehab_posture_analysis/features-rom-en-e95471f2.gif" alt="Seguimiento cinemático de rehabilitación en vivo en reCamera Pro: superposición de esqueleto de 33 puntos clave con métricas clínicas en el HUD"/>
</div>

Cuando se produce un encogimiento de hombros, el contorno superior del hombro parpadea en rojo y se bloquea en modo de alerta (como se muestra a continuación):

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/ReferenceDesign/landpage_asset/rehab_posture_analysis/features-compensation-en-d8bd5846.gif" alt="Detección de compensación patológica: se identifica el encogimiento de hombros, desencadenando una alerta intermitente y pausando el conteo de repeticiones válidas"/>
</div>

---

## Dimensionamiento de Hardware

Solo se necesita una cámara inteligente todo en uno o una cámara existente con un acelerador en el borde en el sitio:

| | Modelo de Hardware | Especificaciones y Cómputo | Cuándo Elegir |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/g/a/gallery_img_1_1.png" alt="reCamera Pro" width="110" /> | [reCamera Pro (2GB)](https://www.seeedstudio.com/reCamera-Pro-2GB.html)<br/>Sensor 4K + NPU de 3 TOPS | Rockchip RV1126B · NPU de 3 TOPS<br/>2GB LPDDR4 | **Nivel Recomendado**. Salas de rehabilitación clínica y gimnasios de fisioterapia que requieren 24 FPS completos y seguimiento de 33 puntos |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/_/1/_1_5_5.png" alt="reCamera 2002" width="110" /> | [reCamera 2002 (8GB)](https://www.seeedstudio.com/reCamera-2002-8GB-p-6251.html)<br/>Sensor 1/2.8" + TPU de 1 TOPS | SOPHGO SG2002 · TPU de 1 TOPS<br/>512MB DDR3 | **Nivel Optimizado en Coste**. Centros comunitarios para personas mayores, espacios de entrenamiento en el hogar con PoE de un solo cable |

---

## Despliegue y Configuración

### 1. Montaje y Colocación Óptica
- **Altura de Montaje**: **1,2 ~ 1,4 m** (nivel del pecho), ángulo de inclinación dentro de 0° ~ 5°; evitar ángulos descendentes desde techos altos;
- **Distancia de Trabajo**: **2,0 ~ 3,5 m** para ejercicios de cuerpo completo de pie; **1,5 ~ 2,5 m** para entrenamiento de extremidad superior sentado;
- **Iluminación**: Iluminación recomendada ≥ 150 Lux; evitar contraluz fuerte de ventanas.

### 2. Instalación de Software: Cadena de Herramientas Oficial Recomendada

Esta solución está integrada con el framework oficial de automatización de Seeed. El método principal recomendado usa **`solution-cli` (o AI Solution Assistant)** para la verificación previa y el despliegue automatizados, con opciones GUI también compatibles:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/rehab_posture_analysis/deploy" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Ver Guía de Despliegue en Campo 🖱️</font></span></strong>
    </a>
</div><br />

#### Recomendado: Despliegue Automatizado con `solution-cli` (Mejor Práctica CLI)
`solution-cli` es el kit de herramientas unificado de Seeed para despliegue y dimensionamiento de soluciones de Edge AI industriales (ver [Guía de Despliegue](https://www.seeed.cc/solutions/reference-designs/rehab_posture_analysis/deploy)). Despliega en tres pasos sin extraer archivos tar manualmente:

```bash
# 1. Install or run solution-cli (skip if already available)
npm install -g @seeed-studio/solution-cli
# Or run on the fly via npx: npx @seeed-studio/solution-cli doctor

# 2. Diagnose local environment and scan network for reCamera hardware
solution-cli doctor
solution-cli device scan

# 3. Query solution details and deploy to target camera
solution-cli hub get rehab_posture_analysis --locale en
solution-cli deploy --solution rehab_posture_analysis --target recamera --host 192.168.42.1
```
> **Consejo**: Si estás usando agentes de IA como Claude Code, Codex o Antigravity, indica directamente: *"Please deploy reference design rehab_posture_analysis to my connected reCamera Pro using solution-cli"*. El agente invoca la habilidad integrada para ejecutar comprobaciones previas y montar la canalización automáticamente.

#### Alternativa: Instalación GUI (SenseCraft Web / App Center)
1. Conecta tu PC al hotspot de la reCamera o a la IP local, abre `http://<camera_ip>` en un navegador;
2. Navega a **App Center**, busca `rehab_posture_analysis`;
3. Haz clic en **Install / Run**; el dispositivo descarga automáticamente el motor INT8 precompilado y la canalización de cinemática;
4. Haz clic en **Open Live HUD** para mostrar la pantalla interactiva en tiempo real en una pantalla local o tableta.

---

## Reentrenamiento del Modelo de 33 Puntos Clave vs Estándar de 17 Puntos Clave

### 1. ¿Por Qué Reentrenar una Topología de 33 Puntos Clave?
Los modelos convencionales de 17 puntos clave COCO presentan limitaciones significativas en fisioterapia:
- **Truncación de Miembros Distales**: Truncar en las muñecas impide seguir la pronación/supinación del antebrazo y la extensión de agarre de los dedos, perdiendo el verdadero punto final del brazo de palanca biomecánico;
- **Pérdida del Triángulo de Soporte Plantar**: Un único punto de referencia en el tobillo no puede formar una base de soporte del pie. En el análisis de sentadillas, no logra capturar compensaciones de elevación del talón y sobrepronación del tobillo.

Esta solución reentrenó un **modelo YOLO11n-Pose de 33 Puntos Clave** que se adhiere al estándar anatómico MediaPipe / BlazePose:

```
                    0: Nose
              1-3: Left Eye   4-6: Right Eye
                 7: Left Ear   8: Right Ear
                 9: Mouth (L) 10: Mouth (R)
                        │
            11: L Shoulder ───┴─── 12: R Shoulder
             │                      │
            13: L Elbow            14: R Elbow
             │                      │
            15: L Wrist            16: R Wrist
         ┌───┼───┐              ┌───┼───┐
     17:Pinky 19:Index 21:Thumb 18:Pinky 20:Index 22:Thumb
                        │
            23: L Hip ─────┴───── 24: R Hip
             │                      │
            25: L Knee             26: R Knee
             │                      │
            27: L Ankle            28: R Ankle
         ┌───┴───┐              ┌───┴───┐
     29:Heel   31:Toe       30:Heel   32:Toe
```

### 2. Modelo estándar de 17 puntos vs modelo personalizado reentrenado de 33 puntos

| Dimensión | COCO estándar de 17 puntos | Personalizado de 33 puntos reentrenado | Ventaja clínica |
|---|---|---|---|
| **Resolución de extremidades distales** | Truncado en muñecas y tobillos | 6 puntos de referencia en la mano + 4 puntos plantares | Extensión de los dedos y triángulos de apoyo del pie completamente resueltos |
| **Tasa de detección de compensaciones** | ~68% (falsos negativos frecuentes en encogimiento de hombros y elevación del talón) | **94.2%** (delta de altura del acromion + ángulo plantar) | Detecta con precisión encogimientos del trapecio y colapso de rodilla |
| **Latencia en computación perimetral** | 35.0 ms (RV1126B) | **41.7 ms** (RV1126B INT8) | Añadir 16 puntos solo agrega 6.7 ms, manteniendo un rendimiento de 24 FPS |
| **Tamaño del modelo (INT8)** | 3.8 MB | **4.2 MB** | Aumento mínimo, cabe cómodamente en memoria embebida de 512 MB–2 GB |

---

## Extensión para desarrolladores: arquitectura de modelo en cascada de dos etapas

La arquitectura modular permite a los desarrolladores encadenar micro-modelos secundarios especializados sobre la base de 33 puntos clave:

```
Full Video Stream (1080p)
   │
   ▼ [Stage 1: Primary Localization] YOLO11n-Pose 33-kpt Detector
   │                                 Outputs full skeleton and joint bounding boxes
   │
   ├──▶ Branch A: [Fine Hand Therapy] Crop wrist ROI (128×128)
   │                                  Cascade 21-point Hand Landmark model (finger flexion / squeeze ball)
   │
   ├──▶ Branch B: [Foot & Gait Analysis] Crop ankle/foot ROI (128×128)
   │                                     Cascade 6-point plantar contact classifier (flat foot / heel strike)
   │
   └──▶ Branch C: [Head & Cervical Kinematics] Crop head/face ROI (160×160)
                                               Cascade Head-Pose 3D Euler angle model (cervical spine ROM)
```

### Guía de implementación:
1. **Recortar ROI**: Extrae las coordenadas de la muñeca `[15, 17, 19, 21]` de `keypoints_33` y expándelas con un margen de envolvente convexa del 15 %;
2. **Inferencia ligera**: Envía el tensor recortado a un MobileNetV4 / ShuffleNet secundario en la NPU/TPU (latencia ~4–6 ms);
3. **Fusión temporal**: Sincroniza los resultados del submodelo con la máquina de estados principal para ofrecer evaluaciones biomecánicas compuestas.

---

## Benchmarks y telemetría

Evaluado en 50 sesiones de grabación de fisioterapia clínica:

### 1. Matriz de rendimiento de hardware
| Plataforma | Modelo y runtime | Resolución | Latencia | FPS | Utilización del acelerador |
|---|---|---|---|---|---|
| **reCamera Pro** | YOLO11n-Pose 33kpt INT8 (RKNN) | 640×640 | 38.2 ms | **24.0 FPS** | ~65% |
| **reCamera 2002** | YOLO11n-Pose 33kpt INT8 (CVI TPU) | 512×512 | 62.5 ms | **14.2 FPS** | ~82% |

### 2. Precisión de medición clínica
- **Precisión de ROM**: En comparación con el sistema óptico VICON de referencia, el MAE de abducción de hombro es de **±2.1°**;
- **Recall de compensaciones**: Encogimiento del trapecio **95.2%**, valgo de rodilla **93.8%**;
- **Estabilidad del antirrebote**: El filtro de 3 fotogramas elimina el 98.6% de las repeticiones parciales inducidas por temblores.

---

## Interfaces y protocolos de salida

### 1. Visualización en vivo de rehabilitación (WebSocket)
- **Endpoint**: `ws://<camera_ip>:8124/ws/kinematics`
- **Esquema de carga útil**:
```json
{
  "timestamp": 1793339665120,
  "phase": "PEAK_HOLD",
  "valid_reps": 5,
  "rom_degrees": 92.4,
  "quality_score": 95.0,
  "compensation": {
    "detected": true,
    "type": "SHOULDER_SHRUG",
    "deviation_val": 14.2
  },
  "keypoints_33": [
    {"id": 0, "name": "nose", "x": 0.512, "y": 0.185, "conf": 0.94}
  ]
}
```

### 2. Integración con sistema EMR / HIS hospitalario (MQTT)
- **Broker**: `mqtt://<camera_ip>:1883`
- **Topic**: `rehab/telemetry/<camera_sn>/session`
- Publica informes estructurados de sesiones de ejercicio y registros continuos de compensaciones al completar las repeticiones.
