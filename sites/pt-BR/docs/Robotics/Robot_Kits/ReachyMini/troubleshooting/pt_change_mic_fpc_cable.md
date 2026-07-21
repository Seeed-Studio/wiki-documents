---
description: Tutorial passo a passo para substituir um cabo FPC danificado no conjunto do microfone do Reachy Mini.
title: Trocar o Cabo FPC do Microfone
slug: /reachymini_troubleshooting_change_mic_fpc_cable
keywords:
  - cabo fpc
  - microfone
  - substituição
  - reparo
  - tutorial
  - cabo danificado
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/reachymini_troubleshooting_change_mic_fpc_cable/
---

# Tutorial: Como trocar o cabo FPC do microfone do Reachy Mini?

## Introdução
Seu microfone pode parar de funcionar por causa de um cabo FPC danificado. Este tutorial irá guiá-lo pelo processo de troca do cabo FPC do microfone do Reachy Mini.

## Exemplo de cabo FPC danificado
Aqui está um exemplo de cabo FPC danificado do microfone:
![Damaged FPC cable](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/fpc_collage.jpg)

## Novo cabo FPC para o microfone
Para trocar o cabo FPC do microfone, você precisará obter um novo cabo FPC que corresponda às especificações do cabo original.

As especificações do cabo do microfone são as seguintes:
- Cabo flexível plano FFC/FPC
- 12 pinos
- Espaçamento de 0,5mm
- Tipo A (conectores no mesmo lado)
- Comprimento de 15mm

Aqui estão algumas referências caso você esteja procurando um substituto para o cabo do seu microfone:
- [Amazon](https://www.amazon.fr/dp/B09TR4X1BP?ref=cm_sw_r_cso_cp_apan_dp_1NV8C5T7V97Z78X6J80Z&ref_=cm_sw_r_cso_cp_apan_dp_1NV8C5T7V97Z78X6J80Z&social_share=cm_sw_r_cso_cp_apan_dp_1NV8C5T7V97Z78X6J80Z)
- [Farnell](https://fr.farnell.com/molex/15020-0127/cordon-ffc-12-cond-152mm-blanc/dp/3862090)

## Etapas para trocar o cabo FPC do microfone
1. Desligue o seu Reachy Mini e desconecte-o da fonte de alimentação.
2. Abra a cabeça do Reachy Mini seguindo as instruções do guia de montagem.
3. Localize o microfone e o cabo FPC conectado a ele.
4. Desconecte cuidadosamente o cabo FPC da placa da cabeça.

Agora você deve ter o conjunto microfone + parte superior da cabeça com o cabo FPC danificado como na imagem abaixo:
![Microphone assembly with damaged FPC cable](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/microphone_assembly.jpg)

5. Abra delicadamente a capa de isolamento de borracha primeiro de um lado. Nenhuma ferramenta é necessária, apenas use os dedos para puxá-la.
![Peeling off the rubber isolation case](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/peeling_rubber_case_1.jpg)
6. Faça o mesmo do outro lado da capa de isolamento de borracha. Tome cuidado para não puxar de forma brusca.
![Peeling off the rubber isolation case](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/peeling_rubber_case_2.jpg)
7. Remova a capa de isolamento de borracha e coloque-a de lado.
![Rubber isolation case removed](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/rubber_case_removed.jpg)
8. Agora você pode ver o cabo FPC e a placa do microfone. Remova delicadamente a fita preta e desconecte o cabo FPC da placa do microfone. Tome cuidado para não danificar os conectores.
![Disconnecting the FPC cable from the microphone board](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/disconnect_fpc_microphone.jpg)
9. Pegue o novo cabo FPC e conecte-o à placa do microfone fazendo os passos na ordem inversa. Certifique-se de que esteja bem conectado, mas não aplique muita força.
10. Recoloque a capa de isolamento de borracha no conjunto do microfone e pressione-a suavemente para fixá-la no lugar.

Agora você pode conectar o novo cabo FPC novamente à placa da cabeça e remontar a cabeça do Reachy Mini seguindo as instruções do guia de montagem.
