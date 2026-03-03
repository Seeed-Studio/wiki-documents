---
description: Ejemplo que demuestra la detección de Dirección de Llegada (DoA) usando la matriz de micrófonos de Reachy Mini para mirar automáticamente hacia el hablante.
title: Dirección de Llegada del Sonido
slug: /reachymini_examples_sound_doa
keywords:
- doa
- direction of arrival
- microphone array
- speech detection
- sound localization
- look at
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---

# Dirección de Llegada del Sonido (DoA)

Este ejemplo muestra cómo usar la matriz de micrófonos para detectar la Dirección de Llegada (DoA) del habla. El robot utiliza el endpoint FastAPI para obtener la información de DoA, calcula la posición de la fuente de sonido, la transforma a coordenadas del mundo y mira automáticamente hacia el hablante.

**Cómo funciona:**
1. Consulta continuamente el endpoint `/api/state/doa` para obtener la dirección del habla
2. Cuando se detecta habla, calcula la posición 3D de la fuente de sonido
3. Transforma la posición de coordenadas de la cabeza a coordenadas del mundo
4. Ordena al robot mirar al hablante usando `look_at_world()`

**Características:**
- Detección automática de la IP del robot (local o inalámbrica)
- Filtrado basado en umbral para evitar movimientos excesivos de la cabeza
- Transformación en tiempo real de coordenadas de la cabeza a coordenadas del mundo


Consulta el ejemplo completo en: [sound_doa.py](https://github.com/pollen-robotics/reachy_mini/tree/develop/examples/sound_doa.py)
