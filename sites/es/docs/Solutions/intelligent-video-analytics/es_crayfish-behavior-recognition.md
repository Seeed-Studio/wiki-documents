---
description: 'Documento de ingeniería para reconocimiento de comportamiento y peleas de cangrejo de río en acuicultura: canalización en embudo de 4 etapas, red de mosaico temporal de 8 fotogramas, votación de sexo multi‑fotograma, despliegue automatizado con solution-cli, matriz de runtime, protocolos MQTT/WS y validaciones en campo'
title: 'Reconocimiento de Comportamiento de Cangrejo de Río en Acuicultura: Canalización de 4 Etapas y Benchmarks en el Borde'
sidebar_label: 'Reconocimiento de Comportamiento de Cangrejo de Río'
keywords:
  - Reconocimiento de Peleas de Cangrejo de Río
  - Edge AI para Acuicultura
  - Cherax quadricarinatus
  - solution-cli
  - reCamera Pro
  - SG2002 cvimodel
  - Clasificación de Comportamiento Temporal
  - YOLO11
  - Alerta Temprana de Canibalismo
  - MQTT
image: https://files.seeedstudio.com/ReferenceDesign/landpage_asset/crayfish_behavior_recognition/cover-10d95d7f.png
slug: /solutions/crayfish-behavior-recognition
sidebar_position: 2
last_update:
  date: 10/30/2026
  author: seeed-solutions-hub
createdAt: '2026-10-30'
updatedAt: '2026-10-30'
url: https://wiki.seeedstudio.com/es/solutions/crayfish-behavior-recognition/
generated_from: sensecraft-solutions@crayfish_behavior_recognition
---

:::caution[Usage Notice]
Este es un sistema asistivo de monitorización y alerta temprana para acuicultura, no un dispositivo sellado de corte de seguridad para automatización industrial. Se recomienda la integración con sensores de oxígeno disuelto y sistemas de alimentación automatizada.
:::

## Qué hace esta solución

### Arquitectura y Topología del Sistema

![Arquitectura de Reconocimiento de Comportamiento de Cangrejo de Río en Acuicultura](https://files.seeedstudio.com/ReferenceDesign/landpage_asset/crayfish_behavior_recognition/architecture-en-5ac111ce.png)

Se requieren dos elementos: la cámara edge AI que monitoriza el tanque y el panel que recibe los eventos. Todo se ejecuta localmente en la cámara mediante protocolos IoT estándar, sin servidores GPU centralizados.


En sistemas de acuicultura de recirculación de alta densidad (RAS) o tanques de cría, los cangrejos de río de agua dulce australianos (*Cherax quadricarinatus*) sufren con frecuencia pérdida de extremidades o canibalismo fatal durante los periodos de muda debido a ataques agresivos. **Una cámara inteligente edge AI montada sobre el tanque sigue a cada cangrejo de río en tiempo real**. Cuando dos individuos se aproximan y entablan combate, **la cámara confirma la agresión dentro de una ventana temporal de 8 fotogramas y publica una alerta MQTT en el panel de la granja**, lo que desencadena la alimentación automatizada o la intervención del personal para proteger a los individuos de caparazón blando.

- Repositorio Open Source: [github.com/suharvest/crayfish-fight](https://github.com/suharvest/crayfish-fight)
- Dimensionamiento y Despliegue: [Guía de Despliegue del Diseño de Referencia](https://www.seeed.cc/solutions/reference-designs/crayfish_behavior_recognition/deploy)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
            </div>
            <div class="info-content">
                <h3>Canalización en Embudo de 4 Etapas</h3>
                <p>Detección → Disparador por Proximidad → Filtro de Fotograma Único → Mosaico Temporal de 8 Fotogramas, podando &gt;90% de los cálculos redundantes para preservar margen de cómputo en el borde.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>Resolución de Solapamiento 2D</h3>
                <p>Los recortes de interacción de 8 fotogramas se sintetizan en un mosaico espaciotemporal, eliminando disparos de contacto falsos causados por solapamientos de profundidad vertical en vistas cenitales.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.199l-.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>Votación de Sexo Multi‑Fotograma</h3>
                <p>La morfología de las pinzas se muestrea a lo largo de los primeros 10 fotogramas de la trayectoria con votación multi‑fotograma, logrando un 82,0% de precisión Top‑1 para automatizar auditorías de proporción de sexos en el tanque.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>Standalone en el Borde e IP67</h3>
                <p>Ejecución en la NPU/TPU de la cámara con soporte PoE de un solo cable; preserva la grabación local y el almacenamiento en búfer de eventos incluso cuando se cae la red externa.</p>
            </div>
        </li>
    </ul>
</div>

### Demostración en Vivo del Dispositivo

Telemetría de vídeo cenital: cada cangrejo de río en el fotograma recibe un ID de ByteTrack y una etiqueta de clasificación de sexo (por ejemplo, `#3 male 91%`). Cuando los individuos `#2` y `#5` inician un enfrentamiento agresivo, la zona de contacto se resalta en rojo intermitente con una superposición `FIGHT (temporal confirmed)`.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/ReferenceDesign/landpage_asset/crayfish_behavior_recognition/cover-10d95d7f.png" alt="Demostración de reconocimiento de peleas en tanque de acuicultura: seguimiento multiobjetivo, clasificación de sexo y alerta de zona de combate"/>
</div>

---

## Dimensionamiento de Hardware

Solo se monta una cámara inteligente IP67 todo en uno sobre los tanques y se conecta a la LAN de acuicultura:

| | Modelo de Hardware | Especificaciones y Cómputo | Cuándo Elegir |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/g/a/gallery_img_1_1.png" alt="reCamera Pro" width="110" /> | [reCamera Pro (2GB)](https://www.seeedstudio.com/reCamera-Pro-2GB.html)<br/>Sensor 4K + NPU de 3 TOPS | Rockchip RV1126B · NPU de 3 TOPS<br/>2GB RAM · Linux 5.10 | **Nivel Recomendado**. Tanques RAS amplios y piscinas de cría que requieren el embudo completo de 4 etapas y clasificación con mosaico temporal |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/_/1/_1_5_5.png" alt="reCamera 2002" width="110" /> | [reCamera 2002 (8GB)](https://www.seeedstudio.com/reCamera-2002-8GB-p-6251.html)<br/>Sensor 1/2.8" + TPU de 1 TOPS | SOPHGO SG2002 · TPU de 1 TOPS<br/>512MB RAM · C++ Nativo | **Nivel Optimizado en Coste**. Despliegues densos en tanques pequeños centrados en detección y triaje inicial por proximidad |

---

## Despliegue y Configuración

### 1. Montaje y Posicionamiento Óptico
- **Altura y Ángulo de Montaje**: Montar **0,8 ~ 1,5 m** directamente sobre el tanque con un ángulo cenital vertical (80°~90°);
- **Profundidad y Claridad del Agua**: Adecuado para profundidades de 20~80 cm con visibilidad ≥ 25 cm; evitar colocar aireadores directamente bajo la lente de la cámara;
- **Iluminación Difusa**: Se recomienda iluminación uniforme con tiras LED (≥ 100 Lux) para evitar que las ondulaciones de la superficie generen reflejos especulares.

### 2. Instalación de Software: Cadena de Herramientas Oficial Recomendada

Esta solución está integrada con el framework oficial de automatización de Seeed. El método principal recomendado utiliza **`solution-cli` (o AI Solution Assistant)** para la verificación previa y el despliegue automatizados, con opciones GUI también compatibles:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/crayfish_behavior_recognition/deploy" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Ver Guía de Despliegue en Campo 🖱️</font></span></strong>
    </a>
</div><br />

#### Recomendado: Despliegue Automatizado con `solution-cli` (Mejor Práctica CLI)
`solution-cli` es el kit unificado de dimensionamiento y despliegue de Seeed para soluciones de edge AI industriales (consulta la [Guía de Despliegue](https://www.seeed.cc/solutions/reference-designs/crayfish_behavior_recognition/deploy)). Despliega en tres pasos sin gestionar manualmente contenedores ni tarballs:

```bash
# 1. Install or run solution-cli (skip if already available)
npm install -g @seeed-studio/solution-cli
# Or run on the fly via npx: npx @seeed-studio/solution-cli doctor

# 2. Diagnose local environment and scan network for reCamera hardware
solution-cli doctor
solution-cli device scan

# 3. Query solution details and deploy to target camera
solution-cli hub get crayfish_behavior_recognition --locale en
solution-cli deploy --solution crayfish_behavior_recognition --target recamera --host 192.168.42.1
```
> **Consejo**: Si estás usando agentes de IA como Claude Code, Codex o Antigravity, indica directamente: *"Please deploy reference design crayfish_behavior_recognition to the reCamera mounted over tank RAS-01 using solution-cli"*. El agente invoca la skill integrada para ejecutar las comprobaciones previas y montar la canalización automáticamente.

#### Alternativa: Instalación GUI (SenseCraft Web / App Center)
1. Abre `http://<camera_ip>` en un navegador;
2. Navega a **App Center**, busca `crayfish_behavior_recognition`;
3. Haz clic en **Install**; la cámara configura automáticamente las canalizaciones de detección y temporales;
4. En ajustes, configura la dirección del MQTT Broker de la granja (por ejemplo, `192.168.1.100:1883`) y habilita el daemon.

---

## Arquitectura del Algoritmo: Embudo de 4 Etapas y Mosaico Temporal

```
Camera Sensor (1080p @ 10-15fps)
   │
   ▼ [Stage 1] Object Detection     YOLO11n (640×640) → Bounding Boxes + ByteTrack
   │
   ▼ [Stage 2] Proximity Trigger    Center distance < 1.1× body length or IoU > 0 for ≥ 3 frames;
   │                                Crop interaction zone with 20% margin
   │
   ▼ [Stage 3] Single-Frame Triage  YOLO11n-cls (224×224) binary filter weeds out normal swimming
   │
   ▼ [Stage 4] Temporal Confirmation YOLO11n-cls (448×448 mosaic) validates 8-frame spatiotemporal matrix;
   │                                Completely eliminates 2D vertical overlap false alarms
   │
   ▼ Event Exit                     Publishes to MQTT/WS only on state transition (start / change / end)
```

### Rama paralela: clasificador de sexo multi‑frame
Dentro de los primeros 10 fotogramas de un nuevo ID de pista, los recortes de la pinza y el abdomen se clasifican con YOLO11n-cls (128×128) mediante votación multi‑frame, generando `male` / `female` / `unknown` con una precisión **Top-1 del 82,0%**.

---

## Benchmarks y telemetría de campo

Evaluado en más de 2.000 fotogramas de vídeo de campo anotados en instalaciones de investigación acuícola:

### 1. Precisión y recall del modelo
| Modelo | Resolución | Tarea | Métrica de benchmark | Objetivo de runtime |
|---|---|---|---|---|
| `det_v2_n` | 640×640×3 | Detección de cangrejos de río | **mAP50: 0.950** (P: 0.914, R: 0.880) | RV1126B RKNN / SG2002 TPU |
| `behavior_temporal`| 448×448×3 | Verificación de pelea de 8 fotogramas | **Recall: 0.950** (Precisión: 0.905) | RV1126B RKNN INT8 |
| `behavior_cls` | 224×224×3 | Filtro de fotograma único | Recall: 0.775, Precisión: 0.816 | RV1126B RKNN / SG2002 TPU |
| `sex_cls` | 128×128×3 | Clasificación de sexo | **Top-1: 0.820** (votación de 10 fotogramas) | RV1126B RKNN / SG2002 TPU |

### 2. Ejecución en hardware de borde
- **reCamera Pro**: **10~15 FPS** (bucle cerrado completo de 4 etapas, ~18% CPU);
- **reCamera 2002**: **12~15 FPS** (detección + alerta de proximidad, ~25% CPU).

---

## Interfaces y protocolos de telemetría

### 1. Panel de monitorización de granja (MQTT)
- **Broker**: `mqtt://<camera_ip>:1883`
- **Topic**: `crayfish/tank/<tank_id>/event`
- **Payload de alerta de agresión**:
```json
{
  "timestamp": 1793339665200,
  "tank_id": "RAS_04",
  "event_type": "FIGHT_CONFIRMED",
  "severity": "CRITICAL",
  "actors": [
    {"track_id": 2, "sex": "male", "box": [210, 140, 320, 260]},
    {"track_id": 5, "sex": "unknown", "box": [260, 160, 370, 280]}
  ],
  "duration_sec": 4.5
}
```

### 2. Inventario periódico del tanque y auditorías de proporción de sexos
- **Topic**: `crayfish/tank/<tank_id>/stats`
- Publica cada hora los recuentos de inventario, las proporciones de sexos y las frecuencias de agresión para ayudar con los horarios de alimentación automatizados.
