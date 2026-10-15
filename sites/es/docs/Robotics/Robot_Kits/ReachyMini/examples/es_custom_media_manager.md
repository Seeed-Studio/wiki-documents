---
description: Ejemplo que demuestra cómo desactivar el gestor de medios integrado y acceder directamente a la cámara y al micrófono usando OpenCV y sounddevice para canalizaciones personalizadas.
title: Gestor de Medios Personalizado
slug: /reachymini_examples_custom_media_manager
keywords:
  - medios personalizados
  - opencv
  - sounddevice
  - acceso a la cámara
  - acceso al micrófono
  - hardware directo
  - backend de medios
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-19'
url: https://wiki.seeedstudio.com/es/reachymini_examples_custom_media_manager/
---

# Gestor de Medios Personalizado

Este ejemplo muestra cómo desactivar el gestor de medios integrado y acceder directamente a la cámara y al micrófono usando OpenCV y sounddevice.

**¿Por qué?** El daemon normalmente posee el hardware de cámara y audio. Si necesitas acceso en bruto (por ejemplo, canalizaciones personalizadas de OpenCV, grabación con sounddevice o una biblioteca de visión de terceros), primero debes indicar al daemon que libere el hardware. Consulta [Arquitectura de Medios - Desactivar Medios](/es/reachymini_sdk_media-architecture#desactivar-medios--acceso-directo-al-hardware) para más detalles.

**Cómo funciona:**
1. Se conecta con `media_backend="no_media"` — esto indica automáticamente al daemon que libere el hardware de cámara y audio
2. Usa OpenCV para capturar un fotograma directamente desde la cámara
3. Usa sounddevice para grabar audio desde el micrófono
4. Al salir, el daemon vuelve a adquirir automáticamente el hardware

> **💡 Consejo:** El control del robot (cabeza, antenas, cuerpo) sigue funcionando con normalidad mientras los medios están liberados. Solo se ven afectados la cámara y el audio.

**Requisitos:**
```bash
pip install opencv-python sounddevice soundfile
```

**Uso:**
```bash
python custom_media_manager.py
```

Consulta el ejemplo completo en: [custom_media_manager.py](https://github.com/pollen-robotics/reachy_mini/tree/main/examples/custom_media_manager.py)