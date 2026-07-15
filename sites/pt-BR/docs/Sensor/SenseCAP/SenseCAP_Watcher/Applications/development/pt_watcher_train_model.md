---
description: Implantar modelo de IA do SenseCraft no Watcher
title: Treinando modelo para Watcher
image: https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/top3.png
slug: /training_model_for_watcher
sidebar_position: 2
last_update:
  date: 10/9/2024
  author: Jason
createdAt: '2024-10-11'
updatedAt: '2025-09-10'
url: https://wiki.seeedstudio.com/pt-br/training_model_for_watcher/
---

# Treinando modelo para Watcher

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/top3.png" style={{width:1000, height:'auto'}}/></div>

Este artigo da Wiki vai ensinar você a usar o SenseCraft para treinar seu próprio modelo de IA e implantá‑lo no Watcher. Será um processo bem interessante. Se você ainda não sabe o que é o SenseCraft, clique [aqui](https://sensecraft.seeed.cc/). Esta é uma plataforma que nos permite implantar vários modelos de IA de código aberto em dispositivos da Seeed Studio.

## Configurar modelo de IA no site SenseCraft

### Passo 1. Abra o [SenseCraft AI](https://sensecraft.seeed.cc/ai)

Abra a plataforma [SenseCraft AI](https://sensecraft.seeed.cc/ai) e navegue até **`Models`** > **`Training`** para começar a treinar um modelo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/1.png" style={{width:800, height:'auto'}}/></div>

### Passo 2. Configurar o tipo de treinamento

:::tip
**_Recomendamos usar o Grove Vision AI (V2) para coletar dados de treinamento da câmera aqui, porque o Watcher usa o mesmo chip que o Grove Vision AI V2 (Arm Cortex-M55). Portanto, o Grove Vision AI V2 foi escolhido para treinar o modelo do Watcher. O melhor dispositivo para tirar fotos é aquele no qual o modelo será implantado, o que afetará diretamente a precisão final._**
:::

Por conveniência, aqui é usada uma câmera de computador para capturar os dados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/2.png" style={{width:800, height:'auto'}}/></div>

### Passo 3. Coletar dados

**Etapas de treinamento**

- Adicionar categoria
- Modificar as tags da sua categoria
- Clique em "Hold to Record" na categoria que você escolheu
- Escolha Grove Vision AI(V2)
- Iniciar treinamento

Em Collect Classification Data você pode adicionar a categoria que quiser. Aqui, eu adicionei carro e boneca como minhas categorias e modifiquei as tags.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/3.png" style={{width:800, height:'auto'}}/></div>

:::tip
Quanto mais dados forem obtidos e quanto mais nítidos forem os pixels, melhores serão os resultados do treinamento.
:::

Após o treinamento, você precisa clicar em "Click here" abaixo de Start Training.

### Passo 4. Selecionar modelo

Você poderá ver o arquivo do seu modelo após a conclusão do treinamento.

- Clique no arquivo do seu modelo
- Clique em "Save to SenseCraft"

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/4.png" style={{width:800, height:'auto'}}/></div>

### Passo 5. Descrever o modelo

Forneça o **Nome do modelo**, **Resumo do modelo**, **Introdução do modelo** e **Preparação para implantação do modelo**. Se você tornar o modelo público, essas informações serão muito úteis para todos. Este é apenas um teste, então foi escrito de forma apressada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/5(2).png" style={{width:800, height:'auto'}}/></div>

:::tip
Selecione SenseCAP Watcher e Grove-Vision AI V2 em Supported Devices.
:::

### Passo 6. Definir parâmetros do modelo

Você pode escolher o framework de IA desejado com base no seu modelo.

Limite de confiança (Confidence Threshold)

- Confiança se refere ao nível de certeza ou probabilidade atribuído por um modelo às suas previsões.

- Confiança é o grau de certeza ou probabilidade que um modelo tem em relação aos seus resultados previstos. Geralmente é expressa como uma porcentagem, variando de 0% a 100%.

Limite de IoU (IOU Threshold)

- IoU é usado para avaliar a precisão das caixas delimitadoras previstas em comparação com as caixas delimitadoras verdadeiras.

- IoU é um indicador importante para avaliar o desempenho de modelos de detecção de objetos. Ele mede o grau de sobreposição entre a caixa delimitadora prevista e a caixa delimitadora real.

- 0% indica nenhuma sobreposição.
- 100% indica sobreposição completa.

Depois de configurar tudo, clique em Confirm.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/6.png" style={{width:800, height:'auto'}}/></div>

Abra **`Models`** > **`My Models`** para ver o modelo que você treinou.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/7.png" style={{width:800, height:'auto'}}/></div>

## Configurar Watcher no aplicativo SenseCraft

### Passo 1. Escolha o seu Watcher

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/20.jpg" style={{width:300, height:'auto'}}/></div>

### Passo 2. Encontre Manually Set Up Task e entre

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/21.jpg" style={{width:300, height:'auto'}}/></div>

### Passo 3. Marque 'Use TinyML Model'

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/22.jpg" style={{width:300, height:'auto'}}/></div>

### Passo 4. Encontre o modelo que você implantou

Digite o nome ou role para baixo para encontrar o modelo de IA implantado e marque‑o.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/23.jpg" style={{width:300, height:'auto'}}/></div>

### Passo 5. Configurar limite e condição

Confiança é o grau de confiança que um modelo tem em seus resultados previstos, normalmente expresso como um valor entre 0 e 1, ou uma porcentagem entre 0% e 100%.
Por exemplo, um nível de confiança de 80% na saída do modelo indica uma probabilidade de 80% de que ele acredita que a previsão está correta.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/24.jpg" style={{width:300, height:'auto'}}/></div>

### Passo 6. Definir o nome da tarefa

Defina o nome da tarefa para que você possa enviá‑la diretamente ao Watcher para executar o seu modelo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/25.jpg" style={{width:300, height:'auto'}}/></div>

### Passo 7. Aguardar o Watcher implantar o modelo

Depois de selecionar o modelo de IA e definir os parâmetros correspondentes, você pode aguardar o Watcher fazer o download.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/26.jpg" style={{width:500, height:'auto'}}/></div>

:::tip
Durante esse período, o download pode falhar devido a outros problemas externos. Você só precisa selecionar novamente e definir os parâmetros, e continuar o download.
:::

## Exibição do modelo de IA no Watcher

### Demonstração do resultado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/gif.gif" style={{width:500, height:'auto'}}/></div>

Este é o efeito de exibição simples do meu modelo de IA no Watcher. Estou ansioso para ver os modelos de IA de todos brilhando no Watcher!

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
