---
description: Exemplo que demonstra a utilidade Rerun para visualização em tempo real e registro do estado do Reachy Mini no modo complacente com compensação de gravidade.
title: Visualizador Rerun
slug: /reachymini_examples_rerun_viewer
keywords:
  - rerun
  - visualização
  - registro
  - tempo real
  - modo complacente
  - compensação de gravidade
  - placo
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/reachymini_examples_rerun_viewer/
---

# Visualizador Rerun

Este exemplo mostra como usar a utilidade Rerun para registrar e visualizar o estado do Reachy Mini em tempo real. O robô ficará em modo complacente com compensação de gravidade, tornando fácil movê-lo enquanto visualiza sua configuração.

Requisitos:
- Instale com: `pip install reachy-mini[rerun,placo_kinematics]`
- Inicie o daemon com: `reachy-mini-daemon --kinematics-engine Placo`

Veja o exemplo completo em: [rerun_viewer.py](https://github.com/pollen-robotics/reachy_mini/tree/develop/examples/rerun_viewer.py)
