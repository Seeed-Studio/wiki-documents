---
description: Exemplo que demonstra a utilidade Rerun para visualização em tempo real e registro do estado do Reachy Mini em modo complacente com compensação de gravidade.
title: Visualizador Rerun
slug: /reachymini_examples_rerun_viewer
keywords:
  - rerun
  - visualização
  - registro
  - em tempo real
  - modo complacente
  - compensação de gravidade
  - placo
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/pt-br/reachymini_examples_rerun_viewer/
---

# Visualizador Rerun

Este exemplo mostra como usar a utilidade Rerun para registrar e visualizar o estado do Reachy Mini em tempo real. O robô ficará em modo complacente com compensação de gravidade, o que facilita movê-lo enquanto se visualiza sua configuração.

Requisitos:
- Instale com: `pip install reachy-mini[rerun,placo_kinematics]`
- Inicie o daemon com: `reachy-mini-daemon --kinematics-engine Placo`

Veja o exemplo completo em: [rerun_viewer.py](https://github.com/pollen-robotics/reachy_mini/tree/main/examples/rerun_viewer.py)