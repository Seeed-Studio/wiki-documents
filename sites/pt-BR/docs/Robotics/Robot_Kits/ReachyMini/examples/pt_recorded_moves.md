---
description: Exemplo que demonstra como reproduzir movimentos gravados a partir de conjuntos de dados, incluindo danças, emoções ou conjuntos de dados personalizados para o Reachy Mini.
title: Movimentos Gravados
slug: /reachymini_examples_recorded_moves
keywords:
  - movimentos gravados
  - conjunto de dados
  - danças
  - emoções
  - reprodução de movimento
  - biblioteca
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/pt-br/reachymini_examples_recorded_moves/
---

# Movimentos Gravados

Este exemplo demonstra como reproduzir todos os movimentos disponíveis de um conjunto de dados para o Reachy Mini. Você pode usar bibliotecas pré-construídas para danças e emoções ou fornecer seu próprio conjunto de dados personalizado.

Execute com:
```bash
python recorded_moves.py -l [dance, emotions]
```

Ou com um conjunto de dados personalizado:
```bash
python recorded_moves.py --dataset path/to/your/dataset
```

Veja o exemplo completo em: [recorded_moves.py](https://github.com/pollen-robotics/reachy_mini/tree/main/examples/recorded_moves.py)