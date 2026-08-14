---
sidebar_position: 3
description: Crie, treine, teste e faça o deploy de um modelo personalizado de detecção de objetos no SenseCraft AI usando fluxos de trabalho de treinamento rápido ou de coleta de imagens.
title: Treinamento de Detecção de Objetos com SenseCraft AI
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/1.9.webp
slug: /sensecraft-ai/tutorials/sensecraft-ai-training-object-detection
aliases:
  - /sensecraft_ai_training_object_detection
last_update:
  date: 11/27/2024
  author: qiuyu wei
createdAt: '2024-11-27'
updatedAt: '2026-08-13'
url: https://wiki.seeedstudio.com/pt-br/sensecraft-ai/tutorials/sensecraft-ai-training-object-detection/
---

# Treinar um Modelo de Detecção de Objetos com SenseCraft AI

## Recursos da detecção de objetos

A plataforma Seeed SenseCraft AI é uma ferramenta eficiente de treinamento de IA voltada para tarefas de detecção de objetos. Baseada no avançado **modelo de detecção de objetos YOLO - World**, ela oferece dois métodos de treinamento convenientes:

- **Treinamento Rápido**

Recursos: Não é necessário nenhum dado de imagem. Basta inserir o nome do alvo para gerar rapidamente um modelo de detecção de objetos de classe única.
Vantagens: Ideal para cenários simples, permitindo criação e implantação rápidas de modelos.

- **Treinamento com Coleta de Imagens**

Recursos: Combina o nome do alvo com dados de imagem enviados para o treinamento.

Vantagens: Aproveita dados de imagem diversificados para melhorar significativamente a precisão de detecção do modelo gerado, tornando-o adequado para aplicações que exigem alta precisão.

Com esses dois métodos, a plataforma SenseCraft atende a diversas necessidades de treinamento de modelos de detecção de objetos, simplificando as complexidades do desenvolvimento de IA, garantindo ao mesmo tempo usabilidade e precisão.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/2.0.png" style={{width:750, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_training#/training" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Open SenseCraft AI Training 🖱️</font></span></strong>
    </a>
</div><br />

## Treinamento Rápido

Vamos criar uma demonstração simples para **reconhecer humanos**. O recurso de treinamento rápido aproveita as seguintes características centrais do modelo de detecção de objetos YOLO – World:

O recurso de treinamento rápido usa os pontos fortes do YOLO para criar de forma eficiente modelos de detecção de classe única. Ao combinar pesos pré-treinados, semântica de texto e extração eficiente de recursos, ele gera um modelo personalizado, como para "human", sem exigir dados de imagem.

### Etapa 1. Definir o nome do objeto

Insira o nome do alvo na caixa de texto. Em seguida, clique em **'Start Training'**.

:::tip
A sessão de treinamento durará de 1 a 3 minutos, portanto, seja paciente!
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/2.1.png" style={{width:1000, height:'auto'}}/></div>

### Etapa 2. Treinar e enviar modelos

Após concluir o treinamento do modelo, o modelo será implantado e o Grove Vision AI (V2) será selecionado para a implantação. Em seguida, escolha a porta serial correta para conectar e, por fim, aguarde pacientemente de 1 a 3 minutos até que o treinamento do modelo seja concluído!

:::caution
Atualmente, a seleção de dispositivo em Detecção de Objetos só pode oferecer suporte ao **Grove Vision AI (V2)**.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/2.2.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/2.3.png" style={{width:1000, height:'auto'}}/></div>

### Demonstração dos resultados

Após concluir as etapas acima, o modelo será implantado e executado com sucesso, mas é preciso ter cuidado com as configurações de **Confidence Threshold** e **IoU Threshold value**, que afetarão a capacidade de reconhecimento do modelo.

:::tip
**Confidence Threshold:** A pontuação mínima de confiança que um modelo deve ter para considerar uma detecção válida, filtrando previsões com baixa confiança.

**IoU Threshold:** O valor mínimo de Intersection over Union (IoU) necessário para classificar uma caixa delimitadora prevista como um verdadeiro positivo, garantindo precisão na medição de sobreposição entre as caixas previstas e as reais.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/2.4.png" style={{width:800, height:'auto'}}/></div>

## Treinamento com Coleta de Imagens

Faremos uma demonstração que **reconhece fones de ouvido**. Com base no modelo de detecção de objetos YOLO – World, você pode personalizar o treinamento para texto e imagem, o que pode melhorar a precisão de detecção do modelo gerado.

### Etapa 1. Definir o nome do objeto

Primeiro, insira o nome do alvo na caixa de texto e depois selecione **Grove Vision AI (V2)** para conectar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.2.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Se a conexão for bem-sucedida, uma visualização ao vivo da câmera aparecerá na caixa à direita.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.3.png" style={{width:1000, height:'auto'}}/></div>

### Etapa 2. Capturar imagem

Em seguida, aponte a câmera para o objeto alvo e clique em **'Capture'**, depois delimite o objeto alvo com uma caixa vermelha e, por fim, clique em **'Confirm'**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.4.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Quanto mais material de imagem, melhor será o reconhecimento do modelo.
:::

### Etapa 3. Treinar e enviar modelos

Clique em **'Training'** e então aguarde pacientemente até que o modelo termine o treinamento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.5.png" style={{width:1000, height:'auto'}}/></div>

E, por fim, é hora da implantação do modelo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.6.png" style={{width:1000, height:'auto'}}/></div>

### Demonstração dos resultados

Depois que as etapas acima forem concluídas, o modelo será treinado e implantado com sucesso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.7.gif" style={{width:1000, height:'auto'}}/></div>

## Guias relacionados

- [Treinar um modelo de classificação com SenseCraft AI](/pt-br/sensecraft-ai/tutorials/sensecraft-ai-training-classification/)
- [Explorar a plataforma SenseCraft AI](/pt-br/sensecraft-ai/overview/)
- [Navegar pelo centro de documentação do SenseCraft AI](/pt-br/sensecraft-ai/sensecraft-ai-main/)

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
