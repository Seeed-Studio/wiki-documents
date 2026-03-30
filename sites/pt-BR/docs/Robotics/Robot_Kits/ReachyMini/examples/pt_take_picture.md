---
description: Exemplo que demonstra como capturar um único quadro da câmera do Reachy Mini e salvá-lo como um arquivo de imagem.
title: Tirar Foto
slug: /reachymini_examples_take_picture
keywords:
  - camera
  - capture
  - image
  - picture
  - frame
  - save image
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/reachymini_examples_take_picture/
---

# Tirar Foto

Este exemplo demonstra como capturar um único quadro da câmera do Reachy Mini e salvá-lo como um arquivo de imagem.

Execute com:
```bash
python take_picture.py --backend [default|gstreamer|webrtc]
```

A imagem capturada será salva como `reachy_mini_picture.jpg` no diretório atual.

Veja o exemplo completo em: [take_picture.py](https://github.com/pollen-robotics/reachy_mini/tree/develop/examples/take_picture.py)
