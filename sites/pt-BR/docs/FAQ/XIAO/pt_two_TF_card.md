---
description: Seeed Studio Round Display para XIAO - FAQ
title: Se eu quiser conectar o Seeed Studio XIAO ESP32S3 Sense a esta tela de expansão, haverá conflito com dois slots de cartão TF?
slug: /two_TF_card
last_update:
  date: 6/30/2023
  author: cheng.tang
createdAt: '2023-07-03'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/two_TF_card/
---
R: Isso não gera conflito. Os diferentes slots de cartão SD são controlados via chip select; se você quiser usar o slot de cartão microSD no Sense, o pino de chip select deve ser **21**; se você quiser usar o slot de cartão microSD no Round Display, o pino de chip select deve ser **D2**.

Temos [exemplos](https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_camera_usage/#Projeto-I-fazendo-uma-câmera-portátil) de uso simultâneo de hardware e cartões microSD no tutorial da câmera S3 Sense.