---
description: Ejemplo que demuestra cómo reproducir movimientos grabados desde conjuntos de datos, incluidos bailes, emociones o conjuntos de datos personalizados para Reachy Mini.
title: Movimientos grabados
slug: /reachymini_examples_recorded_moves
keywords:
  - movimientos grabados
  - conjunto de datos
  - bailes
  - emociones
  - reproducción de movimiento
  - biblioteca
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/es/reachymini_examples_recorded_moves/
---

# Movimientos grabados

Este ejemplo muestra cómo reproducir todos los movimientos disponibles de un conjunto de datos para Reachy Mini. Puedes usar bibliotecas precompiladas para bailes y emociones, o proporcionar tu propio conjunto de datos personalizado.

Ejecutar con:
```bash
python recorded_moves.py -l [dance, emotions]
```

O con un conjunto de datos personalizado:
```bash
python recorded_moves.py --dataset path/to/your/dataset
```

Consulta el ejemplo completo en: [recorded_moves.py](https://github.com/pollen-robotics/reachy_mini/tree/main/examples/recorded_moves.py)