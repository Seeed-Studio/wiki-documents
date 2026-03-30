---
sidebar_position: 3
description: How to use Training(Object Detection)
title: Training - Object Detection
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/1.9.webp
slug: /sensecraft-ai/tutorials/sensecraft-ai-training-object-detection
aliases:
  - /sensecraft_ai_training_object_detection
last_update:
  date: 11/27/2024
  author: qiuyu wei
createdAt: '2024-11-27'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/sensecraft-ai/tutorials/sensecraft-ai-training-object-detection/
---

# Tipo de treinamento - Detecção de Objetos

## Recursos da detecção de objetos

A Seeed SenseCraft AI Platform é uma ferramenta de treinamento de IA eficiente, voltada para tarefas de detecção de objetos. Construída sobre o avançado **modelo de detecção de objetos YOLO - World**, ela oferece dois métodos de treinamento convenientes:

- **Treinamento Rápido**

Recursos: Nenhum dado de imagem é necessário. Basta inserir o nome do alvo para gerar rapidamente um modelo de detecção de objetos de classe única.
Vantagens: Ideal para cenários simples, permitindo criação e implantação rápida de modelos.

- **Treinamento com Coleta de Imagens**

Recursos: Combina o nome do alvo com os dados de imagem enviados para o treinamento.

Vantagens: Aproveita dados de imagem diversificados para melhorar significativamente a precisão de detecção do modelo gerado, tornando-o adequado para aplicações que exigem alta precisão.

Com esses dois métodos, a plataforma SenseCraft atende a diversas necessidades de treinamento de modelos de detecção de objetos, simplificando as complexidades do desenvolvimento de IA, garantindo ao mesmo tempo usabilidade e precisão.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/2.0.png" style={{width:750, height:'auto'}}/></div>

## Treinamento Rápido

Vamos criar uma demonstração simples para **reconhecer humanos**. O recurso de treinamento rápido aproveita as seguintes características centrais do modelo de detecção de objetos YOLO – World:

O recurso de treinamento rápido utiliza os pontos fortes do YOLO para criar de forma eficiente modelos de detecção de classe única. Ao combinar pesos pré-treinados, semântica de texto e extração eficiente de recursos, ele gera um modelo personalizado, como para "human", sem necessidade de dados de imagem.

### Passo 1. Definir o nome do objeto

Digite o nome do alvo na caixa de texto. Em seguida, clique em **'Start Training'**.

:::tip
A sessão de treinamento durará de 1 a 3 minutos, portanto, tenha paciência!
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/2.1.png" style={{width:1000, height:'auto'}}/></div>

### Passo 2. Treinar e enviar modelos

Após concluir o treinamento do modelo, ele será implantado e Grove Vision AI (V2) será selecionado para a implantação. Em seguida, escolha a porta serial correta para conectar e, por fim, aguarde pacientemente de 1 a 3 minutos até que o treinamento do modelo seja concluído!

:::caution
Atualmente, a seleção de dispositivo em Detecção de Objetos só pode oferecer suporte ao **Grove Vision AI (V2)**.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/2.2.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/2.3.png" style={{width:1000, height:'auto'}}/></div>

### Demonstração dos resultados

Após concluir as etapas acima, o modelo será implantado e executado com sucesso, mas é preciso ter cuidado com as configurações de **Confidence Threshold** e **IoU Threshold value**, que afetarão a capacidade de reconhecimento do modelo.

:::tip
**Confidence Threshold:** A pontuação de confiança mínima que um modelo deve ter para considerar uma detecção válida, filtrando previsões com baixa confiança.

**IoU Threshold:** O valor mínimo de Intersection over Union (IoU) necessário para classificar uma caixa delimitadora prevista como um verdadeiro positivo, garantindo precisão na medição de sobreposição entre as caixas previstas e as reais.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/2.4.png" style={{width:800, height:'auto'}}/></div>

## Treinamento com Coleta de Imagens

Faremos uma demonstração que **reconhece fones de ouvido**. Com base no modelo de detecção de objetos YOLO – World, você pode personalizar o treinamento para texto e imagem, o que pode melhorar a precisão de detecção do modelo gerado.

### Passo 1. Definir o nome do objeto

Primeiro, insira o nome do alvo na caixa de texto e depois selecione **Grove Vision AI (V2)** para conectar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.2.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Se a conexão for bem-sucedida, uma pré-visualização ao vivo da câmera aparecerá na caixa à direita.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.3.png" style={{width:1000, height:'auto'}}/></div>

### Passo 2. Capturar Imagem

Em seguida, aponte a câmera para o objeto alvo e clique em **'Capture'**, depois delimite o objeto alvo com uma caixa vermelha e, por fim, clique em **'Confirm'**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.4.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Quanto mais material de imagem, melhor será o reconhecimento do modelo.
:::

### Passo 3. Treinar e enviar modelos

Clique em **'Training'** e depois aguarde pacientemente até que o modelo termine o treinamento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.5.png" style={{width:1000, height:'auto'}}/></div>

E finalmente é hora da implantação do modelo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.6.png" style={{width:1000, height:'auto'}}/></div>

### Demonstração dos resultados

Depois que as etapas acima forem concluídas, o modelo será treinado e implantado com sucesso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.7.gif" style={{width:1000, height:'auto'}}/></div>

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
