---
description: Sistema de detección de movimiento basado en análisis del espectro Wi-Fi (CSI), con integración nativa a Home Assistant a través de ESPHome.
title: Desplegando Espectre en Seeed Studio XIAO ESP32 Serie con ESPHome
keywords:
  - Espectre
  - XIAO
  - ESPHome
  - WiFi
image: https://files.seeedstudio.com/wiki/XIAO_ESP32_Espectre/image1.webp
slug: /xiao-esp32--series-espresense
sku: 100010048,113991254,113991114, 113991054
last_update:
  date: 01/26/2026
  author: Carla Guo
---

# Desplegando Espectre en Seeed Studio XIAO ESP32 Serie con ESPHome

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32_Espectre/image1.png" style={{width:1000, height:'auto'}}/></div>

**ESPectre es un sistema de detección de movimiento basado en análisis del espectro Wi-Fi (CSI), con integración nativa a Home Assistant a través de ESPHome.** Cuando alguien se mueve en una habitación, "perturba" las ondas Wi-Fi que viajan entre el router y el sensor. Es como cuando mueves tu mano frente a una linterna y ves cambiar la sombra. La [placa XIAO ESP32](https://www.seeedstudio.com/ESP32-Series-c-2580.html) "escucha" estos cambios y entiende si hay movimiento.


## Características

- **Detección de movimiento basada en Wi-Fi**: Detecta movimiento humano usando solo señales Wi-Fi — sin cámaras, sin micrófonos, garantizando privacidad total
- **Hardware mínimo, configuración rápida**: Requiere solo una placa XIAO ESP32 y puede configurarse en 10–15 minutos, con un costo total de alrededor de $7
- **Completamente no intrusivo**: No se necesitan dispositivos portátiles o sensores físicos — los usuarios no tienen que cargar o usar nada
- **Funciona a través de paredes**: Las señales Wi-Fi penetran paredes, permitiendo detección de movimiento confiable a través de habitaciones

## Lo Que Necesitas

### Hardware

- **Router Wi-Fi de 2.4GHz** - el que ya tienes en casa funciona bien
- [**ESP32 con soporte CSI**](https://www.seeedstudio.com/ESP32-Series-c-2580.html) - XIAO ESP32-C3 / XIAO ESP32-C6 / XIAO ESP32-S3, XIAO ESP32-C5 soportado experimentalmente.

### Software (Todo Gratuito)

- **Python 3.12** (⚠️ Python 3.14 tiene problemas conocidos con ESPHome)
- **ESPHome** (integrado en Home Assistant o independiente)
- **Home Assistant** (en Raspberry Pi, PC, NAS, o nube. Es recomendado, pero opcional)

## Inicio Rápido

### 1. Instalar ESPHome

```bash
# Create virtual environment (recommended)
python3 -m venv venv
source venv/bin/activate  # On macOS/Linux
# venv\Scripts\activate   # On Windows

# Install ESPHome
pip install esphome
```

La razón por la que recomendamos descargar y ejecutar ESPHome en una terminal de computadora, en lugar de directamente dentro de Home Assistant, es que los archivos binarios generados por PlatformIO (PIO) son bastante grandes. El entorno de Home Assistant no puede manejar archivos temporales y del sistema tan grandes de manera confiable, lo que puede causar que el proceso de construcción o despliegue falle.

Por ejemplo, durante nuestras pruebas observamos el siguiente mensaje:
>We found 1.63GB of unnecessary PlatformIO system data (temporary files, unnecessary packages, etc.). Use pio system prune --dry-run to list them or pio system prune to save disk space.


### 2. Descargar un archivo de configuración

Descarga la configuración de ejemplo para tu hardware:

| Plataforma | Archivo de Configuración | CPU | WiFi | PSRAM | Estado |
|----------|-------------------|-----|------|-------|--------|
| **XIAO ESP32-C6** | [espectre-c6.yaml](https://github.com/Seeed-Studio/OSHW-XIAO-Series/tree/main/project/XIAO_ESP32_CSI_Espectre/examples/espectre-c6.yaml) | RISC-V @ 160MHz | WiFi 6 | ❌ | ✅ Probado |
| **XIAO ESP32-S3** | [espectre-s3.yaml](https://github.com/Seeed-Studio/OSHW-XIAO-Series/tree/main/project/XIAO_ESP32_CSI_Espectre/examples/espectre-s3.yaml) | Xtensa @ 240MHz | WiFi 4 | ✅ 8MB | ✅ Probado |
| **XIAO ESP32-C3** | [espectre-c3.yaml](https://github.com/Seeed-Studio/OSHW-XIAO-Series/tree/main/project/XIAO_ESP32_CSI_Espectre/examples/espectre-c3.yaml) | RISC-V @ 160MHz | WiFi 4 | ❌ | ✅ Probado ² |
| **XIAO ESP32-C5** | [espectre-c5.yaml](https://github.com/Seeed-Studio/OSHW-XIAO-Series/tree/main/project/XIAO_ESP32_CSI_Espectre/examples/espectre-c5.yaml) | RISC-V @ 240MHz | WiFi 6 | ❌ | ⚠️ Experimental ¹ |

**Recomendaciones**:
- **XIAO ESP32-C6**: Mejor para entornos WiFi 6, detección de movimiento estándar
- **XIAO ESP32-S3**: Mejor para aplicaciones avanzadas, características ML futuras (más memoria)
- **XIAO ESP32-C3**: Opción económica

Estos archivos están preconfigurados para descargar el componente automáticamente desde GitHub.

> ⚠️ **Plataformas experimentales**: ESP32-S2 y ESP32-C5 tienen soporte CSI pero no han sido probados extensivamente. 
>
> ESP32-C5: `improv_serial` (aprovisionamiento USB) aún no soportado por ESPHome. Usa aprovisionamiento BLE o WiFi AP en su lugar.

### 3. Construir y flashear

```bash
cd examples
esphome run espectre-c5.yaml  # or espectre-s3.yaml
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32_Espectre/image2.png" style={{width:1000, height:'auto'}}/></div>


### 4. Configurar WiFi

Después del flasheo, configura WiFi usando uno de estos métodos:

| Método | Cómo |
|--------|-----|
| **BLE** (más fácil) | Usa la app ESPHome o la app Home Assistant Companion |
| **USB** | Ve a [web.esphome.io](https://web.esphome.io) → Connect → Configure WiFi (XIAO ESP32-C5 no recomendado) |
| **Portal Cautivo** | Conéctate al WiFi "ESPectre Fallback" → http://192.168.4.1|

Para integrar tu dispositivo XIAO ESP32 en Home Assistant, necesitas configurarlo para usar la misma red de área local que Home Assistant.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32_Espectre/image3.png" style={{width:400, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32_Espectre/image4.png" style={{width:1000, height:'auto'}}/></div>

¡Eso es todo! El dispositivo será descubierto automáticamente por Home Assistant.

### 5. Colocar el Sensor

La colocación óptima del sensor es crucial para la detección confiable de movimiento. Distancia Recomendada del Router, rango óptimo: 3-8 metros

| Distancia | Señal | Multitrayecto | Sensibilidad | Ruido | Recomendación |
|----------|--------|-----------|-------------|-------|----------------|
| < 2m | Muy fuerte | Mínimo | Bajo | Bajo | ❌ Muy cerca |
| 3-8m | Fuerte | Bueno | Alto | Bajo | ✅ **Óptimo** |
| > 10-15m | Débil | Variable | Bajo | Alto | ❌ Muy lejos |

>**Consejos de Colocación**
>
>Hacer:
>- Posicionar el sensor en el área a monitorear (no necesariamente en línea directa con el router)
>- Altura: 1-1.5 metros del suelo (altura de escritorio/mesa)
>- Antena externa: Usar conector IPEX para mejor recepción
>
>No hacer:
>- Evitar obstáculos metálicos entre router y sensor (refrigeradores, gabinetes metálicos)
>- Evitar esquinas o espacios cerrados (reduce la diversidad de multitrayecto)


### 6. Integración con Home Assistant

ESPHome proporciona **integración automática con Home Assistant**. Una vez que el dispositivo está flasheado y conectado a WiFi:

1. Home Assistant descubrirá automáticamente el dispositivo
2. Ve a **Settings** → **Devices & Services** → **ESPHome**
3. Haz clic en **Configure** en el dispositivo descubierto
4. Todos los sensores serán agregados automáticamente

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32_Espectre/image5.png" style={{width:1000, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32_Espectre/image6.png" style={{width:1000, height:'auto'}}/></div>

- Por favor calibra el dispositivo antes del uso. Simplemente presiona el botón `Calibrate`; el estado del botón se reiniciará automáticamente una vez que la calibración esté completa. Nota: La habitación debe estar desocupada durante la calibración.

- Si encuentras que Home Assistant puede detectar el dispositivo Espectre pero falla al agregarlo exitosamente, simplemente intenta reducir el `traffic_generator_rate`.

> Al recopilar datos CSI, la CPU opera bajo una alta carga de interrupciones (100 veces por segundo o más). Como resultado, ocurre contención de recursos entre el proceso de recopilación de datos CSI y las tareas de comunicación de Home Assistant, ya sea a nivel de hardware o debido a ancho de banda de red limitado.


- Para más ejemplos de automatización, ejemplos de dashboard y más detalles de configuración, por favor consulta [SETUP.md](https://github.com/Seeed-Studio/OSHW-XIAO-Series/blob/main/project/XIAO_ESP32_CSI_Espectre/SETUP.md).

### 7. Parámetros de Configuración

Si encuentras la precisión insatisfactoria, puedes ajustarla manualmente modificando los parámetros en el archivo YAML bajo la sección `espectre:`. Después de los ajustes, reconstruye y sube el archivo.

| Parámetro | Tipo | Por Defecto | Descripción |
|-----------|------|---------|-------------|
| `traffic_generator_rate` | int | 100 | Paquetes/seg para generación CSI (0=deshabilitado, usar tráfico externo) |
| `traffic_generator_mode` | string | dns | Modo del generador de tráfico: `dns` (consultas UDP) o `ping` (ICMP) |
| `publish_interval` | int | auto | Paquetes entre actualizaciones del sensor (por defecto: igual que traffic_generator_rate, o 100 si el tráfico es 0) |
| `segmentation_threshold` | float | 1.0 | Sensibilidad de movimiento (menor=más sensible) |
| `segmentation_window_size` | int | 50 | Ventana de varianza móvil en paquetes |
| `selected_subcarriers` | list | auto | Subportadoras fijas (omitir para auto-calibración) |
| `lowpass_enabled` | bool | false | Habilitar filtro pasa-bajos para reducción de ruido |
| `lowpass_cutoff` | float | 11.0 | Frecuencia de corte del filtro pasa-bajos en Hz (5-20) |
| `hampel_enabled` | bool | false | Habilitar filtro de valores atípicos Hampel |
| `hampel_window` | int | 7 | Tamaño de ventana del filtro Hampel |
| `hampel_threshold` | float | 4.0 | Sensibilidad del filtro Hampel (multiplicador MAD) |
| `gain_lock` | string | auto | Bloqueo de ganancia AGC/FFT: `auto`, `enabled`, `disabled` |

Para ajuste detallado de parámetros (rangos, valores recomendados, solución de problemas), consulta [TUNING.md](https://github.com/Seeed-Studio/OSHW-XIAO-Series/blob/main/project/XIAO_ESP32_CSI_Espectre/TUNING.md).


## Arquitectura del Sistema

### Pipeline de Procesamiento

ESPectre usa un pipeline de procesamiento enfocado para detección de movimiento:

```
┌─────────────┐
│  CSI Data   │  Raw Wi-Fi Channel State Information
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Gain Lock  │  AGC/FFT stabilization (~3 seconds)
│             │  Locks hardware gain for stable measurements
└──────┬──────┘
       │
       ▼
┌─────────────┐
│    Auto     │  Automatic subcarrier selection (once at boot)
│ Calibration │  Selects optimal 12 subcarriers via NBVI
└──────┬──────┘
       │
       ▼
┌─────────────┐
│Normalization│  Attenuate if baseline > 0.25 (always enabled)
│             │  Prevents extreme motion values
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Hampel    │  Turbulence outlier removal
│   Filter    │  (optional, disabled by default)
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Low-pass   │  Noise reduction (smoothing)
│   Filter    │  (optional, disabled by default)
└──────┬──────┘
       │
       ▼
┌─────────────┐
│Segmentation │  MVS algorithm
│    (MVS)    │  IDLE ↔ MOTION
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ Home        │  Native ESPHome integration
│ Assistant   │  Binary sensor + Movement/Threshold
└─────────────┘
```

### Sensores Individuales o Múltiples

```
┌─────────┐  ┌─────────┐  ┌─────────┐
│ ESP32   │  │ ESP32   │  │ ESP32   │
│ Room 1  │  │ Room 2  │  │ Room 3  │
└────┬────┘  └────┬────┘  └────┬────┘
     │            │            │
     └────────────┴────────────┘
                  │
                  │ ESPHome Native API
                  ▼
         ┌────────────────────┐
         │   Home Assistant   │
         │   (Auto-discovery) │
         └────────────────────┘
```

Cada sensor es descubierto automáticamente por Home Assistant con:
- Sensor binario para detección de movimiento
- Sensor de puntuación de movimiento
- Umbral ajustable (entidad numérica)

### Selección Automática de Subportadora

ESPectre implementa el algoritmo **NBVI (Índice de Variabilidad de Línea Base Normalizada)** para la selección automática de subportadora, logrando un rendimiento casi óptimo (F1=98.2%) con **cero configuración manual**.

> ⚠️ **IMPORTANTE**: Mantén la habitación **silenciosa y quieta** durante 10 segundos después del arranque del dispositivo. La auto-calibración se ejecuta durante este tiempo y el movimiento afectará la precisión de detección.

Para detalles del algoritmo NBVI, consulta [ALGORITHMS.md](https://github.com/Seeed-Studio/OSHW-XIAO-Series/blob/main/project/XIAO_ESP32_CSI_Espectre/ALGORITHMS.md).

## Qué Puedes Hacer Con Él

- **Seguridad del hogar**: Recibe una alerta si alguien entra mientras estás fuera
- **Cuidado de ancianos**: Monitorea la actividad para detectar caídas o inactividad prolongada
- **Automatización inteligente**: Enciende luces/calefacción solo cuando alguien esté presente
- **Ahorro de energía**: Apaga automáticamente dispositivos en habitaciones vacías
- **Monitoreo infantil**: Alerta si salen de la habitación durante la noche
- **Control climático**: Calienta/enfría solo las zonas ocupadas


## Análisis Técnico Profundo

Para detalles del algoritmo (MVS, NBVI, filtro Hampel), consulta [ALGORITHMS.md](https://github.com/Seeed-Studio/OSHW-XIAO-Series/blob/main/project/XIAO_ESP32_CSI_Espectre/ALGORITHMS.md).

Para métricas de rendimiento (matriz de confusión, puntuación F1, benchmarks), consulta [PERFORMANCE.md](https://github.com/Seeed-Studio/OSHW-XIAO-Series/blob/main/project/XIAO_ESP32_CSI_Espectre/PERFORMANCE.md).

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>