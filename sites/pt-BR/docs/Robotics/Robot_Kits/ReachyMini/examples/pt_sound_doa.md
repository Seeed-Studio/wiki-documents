---
description: Exemplo que demonstra a detecção da Direção de Chegada (DoA) usando o arranjo de microfones do Reachy Mini para olhar automaticamente na direção do locutor.
title: Direção de Chegada do Som
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
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reachymini_examples_sound_doa/
---

# Direção de Chegada do Som (DoA)

Este exemplo demonstra como usar o arranjo de microfones para detectar a Direção de Chegada (DoA) da fala. O robô usa o endpoint FastAPI para obter informações de DoA, calcula a posição da fonte sonora, a transforma em coordenadas do mundo e automaticamente olha na direção do locutor.

**Como funciona:**
1. Consulta continuamente o endpoint `/api/state/doa` para obter a direção da fala
2. Quando a fala é detectada, calcula a posição 3D da fonte sonora
3. Transforma a posição de coordenadas da cabeça para coordenadas do mundo
4. Ordena que o robô olhe para o locutor usando `look_at_world()`

**Recursos:**
- Detecção automática do IP do robô (local ou sem fio)
- Filtragem baseada em limiar para evitar movimentos excessivos da cabeça
- Transformação em tempo real de coordenadas da cabeça para coordenadas do mundo


Veja o exemplo completo em: [sound_doa.py](https://github.com/pollen-robotics/reachy_mini/tree/develop/examples/sound_doa.py)
