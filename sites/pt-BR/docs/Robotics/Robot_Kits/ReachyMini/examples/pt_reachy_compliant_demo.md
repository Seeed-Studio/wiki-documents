---
description: Demonstração mostrando o Reachy Mini em modo complacente com compensação de gravidade, permitindo que o robô siga empurrões suaves e permaneça no lugar quando solto.
title: Demonstração do Modo Complacente
slug: /reachymini_examples_reachy_compliant_demo
keywords:
  - compliant mode
  - gravity compensation
  - placo
  - kinematics
  - human-robot interaction
  - soft mode
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/pt-br/reachymini_examples_reachy_compliant_demo/
---

# Demonstração do Modo Complacente

Esta demonstração coloca o Reachy Mini em modo complacente e compensa a gravidade da plataforma do robô para evitar que ele caia.

Você pode empurrar o robô suavemente e ele seguirá seus movimentos. Quando você parar de empurrá-lo, ele permanecerá no lugar. Isso é útil para aplicações como interação humano-robô, em que você deseja que o robô seja complacente e siga os movimentos do usuário.

Observação: Esta demonstração atualmente funciona apenas com o Placo como mecanismo de cinemática.

Veja o exemplo completo em: [reachy_compliant_demo.py](https://github.com/pollen-robotics/reachy_mini/tree/main/examples/reachy_compliant_demo.py)