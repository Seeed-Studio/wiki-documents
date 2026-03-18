---
description: Exemplo de GUI interativa usando Tkinter para controlar a posição e orientação da cabeça do Reachy Mini com controles deslizantes para rolagem, inclinação, guinada, X, Y, Z e guinada do corpo.
title: GUI de Posição da Cabeça
slug: /reachymini_examples_mini_head_position_gui
keywords:
  - gui
  - tkinter
  - posição da cabeça
  - orientação
  - controles deslizantes
  - controle em tempo real
  - interativo
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reachymini_examples_mini_head_position_gui/
---

# GUI de Posição da Cabeça

Este exemplo fornece uma interface gráfica de usuário (GUI) usando Tkinter para controlar interativamente a posição e a orientação da cabeça do Reachy Mini. Você pode ajustar os ângulos de rolagem, inclinação e guinada da cabeça, bem como a posição X, Y, Z usando controles deslizantes, além de controlar a guinada do corpo e ver movimentos animados das antenas.

**Recursos:**
- Controle em tempo real da orientação da cabeça (rolagem, inclinação, guinada)
- Controle em tempo real da posição da cabeça (X, Y, Z)
- Controle de guinada do corpo
- Movimentos animados das antenas (oscilação em onda senoidal)
- Controles deslizantes interativos com atualizações em tempo real a 50 Hz

**Uso:**
```bash
python mini_head_position_gui.py
```

Uma janela de GUI será aberta com controles deslizantes para todos os parâmetros controláveis. Ajuste os controles para ver o robô responder em tempo real.

Veja o exemplo completo em: [mini_head_position_gui.py](https://github.com/pollen-robotics/reachy_mini/tree/develop/examples/mini_head_position_gui.py)
