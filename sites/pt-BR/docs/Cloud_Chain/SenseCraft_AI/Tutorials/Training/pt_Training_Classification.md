---
sidebar_position: 5
description: Treine, rotule, teste e faça o deploy de um modelo personalizado de classificação de imagens no SenseCraft AI usando a câmera do navegador ou um dispositivo de borda com IA compatível.
title: Treinamento de Classificação de Imagens com SenseCraft AI
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/34.webp
slug: /sensecraft-ai/tutorials/sensecraft-ai-training-classification
aliases:
  - /sensecraft_ai_training_classification
last_update:
  date: 12/03/2024
  author: Citric
createdAt: '2024-11-27'
updatedAt: '2026-08-13'
url: https://wiki.seeedstudio.com/pt-br/sensecraft-ai/tutorials/sensecraft-ai-training-classification/
---

# Treinar um Modelo de Classificação de Imagens com SenseCraft AI

Classificação é uma ferramenta poderosa em aprendizado de máquina que permite treinar um modelo para reconhecer e categorizar diferentes tipos de dados. Na plataforma SenseCraft AI, a classificação permite criar modelos que podem identificar e distinguir vários objetos, gestos ou cenas com base nas imagens que você fornece durante o treinamento.

Ao treinar um modelo de classificação com o SenseCraft AI, você pode desbloquear uma ampla gama de aplicações, como:

- Reconhecimento de gestos para experiências interativas

- Detecção de objetos para gerenciamento de inventário ou controle de qualidade

- Classificação de cenas para navegação autônoma ou monitoramento ambiental

A plataforma SenseCraft AI simplifica o processo de classificação, permitindo que você crie modelos personalizados adaptados às suas necessidades específicas sem exigir amplo conhecimento em aprendizado de máquina.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/34.png" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_training#/training" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Acesso Direto com Um Clique 🖱️</font></span></strong>
    </a>
</div><br />

## Introdução

Neste guia abrangente, vamos conduzi-lo pelo processo de treinamento de um modelo de classificação usando a plataforma SenseCraft AI. Embora nosso foco principal seja o treinamento de um modelo para o XIAO ESP32S3 Sense, é importante observar que esta plataforma também é compatível com outros dispositivos da Seeed Studio, como o Grove Vision AI e o Watcher.

Não tem um dispositivo Seeed Studio? Sem problemas! Você ainda pode acompanhar e experimentar o processo de treinamento usando a câmera integrada do seu notebook. No entanto, para desempenho ideal e melhores resultados, recomendamos usar o dispositivo-alvo para treinar e fazer o deploy do seu modelo.

## Treinando um modelo para reconhecer gestos corporais

Neste tutorial, vamos criar um modelo que reconhece quatro gestos corporais distintos: braços cruzados, braços abertos, posição de sentido e formato de coração com as mãos.

:::tip
A plataforma SenseCraft AI suporta até 200 categorias para classificação, oferecendo ampla flexibilidade para criar modelos adaptados às suas necessidades específicas.
:::

### Etapa 1. Conecte seu dispositivo

Se você estiver usando um dispositivo Seeed Studio como o XIAO ESP32S3 Sense, conecte-o ao computador via cabo USB-C. Selecione o dispositivo correspondente no menu suspenso e clique em **Connect**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/35.png" style={{width:1000, height:'auto'}}/></div>

Escolha a **porta serial correta** para a conexão.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/36.png" style={{width:1000, height:'auto'}}/></div>

Se você estiver usando a câmera do seu notebook, pode pular esta etapa. Porque, quando você acessa esta página, ela mostra automaticamente o feed ao vivo da câmera. Se isso não acontecer, verifique as permissões do seu navegador.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/37.png" style={{width:1000, height:'auto'}}/></div>

:::note
Por favor, use **Microsoft Edge** ou **Google Chrome**.
:::

### Etapa 2. Criar e rotular categorias

Clique no botão de lápis à direita do nome de uma classe existente para renomear uma classe já existente. Clique no botão **Add a Class** abaixo para criar quatro categorias para os gestos corporais que você deseja reconhecer.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/38.png" style={{width:600, height:'auto'}}/></div>

Rotule as categorias da seguinte forma: "Crossed Arms", "Open Arms", "Standing at Attention" e "Heart Shape". Verifique duas vezes se cada categoria está nomeada corretamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/39.png" style={{width:600, height:'auto'}}/></div>

### Etapa 3. Capturar dados de treinamento

Selecione a primeira categoria (por exemplo, "Crossed Arms") na lista. Posicione-se em frente à câmera, executando o gesto corporal correspondente. Pressione e segure o botão **Hold to Record** para capturar imagens do gesto. Solte o botão para parar a gravação. Procure capturar **pelo menos 40 imagens** por categoria para garantir um modelo robusto e preciso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/40.png" style={{width:1000, height:'auto'}}/></div>

Repita esse processo para cada uma das categorias restantes, capturando uma variedade de imagens para cada gesto.

:::tip
Quanto mais imagens relevantes e de alta qualidade você coletar para cada categoria, melhor será o desempenho do modelo. Busque variedade em iluminação, ângulos e planos de fundo para melhorar a capacidade de generalização do modelo.
:::

### Etapa 4. Treinar o modelo

Depois de coletar um número suficiente de imagens para cada categoria, clique no botão **'Start Training'** para iniciar o processo de treinamento do modelo. O treinamento normalmente leva entre 1 e 3 minutos, dependendo da complexidade do modelo e da quantidade de dados de treinamento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/41.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Por favor, **não** feche ou atualize a página da web imediatamente enquanto o modelo estiver sendo treinado, caso contrário o conteúdo da página poderá ser perdido.
:::

### Etapa 5. Fazer o deploy do modelo treinado

:::caution
Observe que, se você quiser salvar este modelo permanentemente, certifique-se de clicar primeiro em **Save to SenseCraft** para salvar o modelo na sua conta e evitar perdê-lo.
:::

Após a conclusão do treinamento do modelo, é hora de fazer o deploy no dispositivo-alvo. Se você estiver usando o XIAO ESP32S3 Sense ou outro dispositivo Seeed Studio, selecione o dispositivo apropriado no menu suspenso e clique em **'Deploy to device'**. Se você treinou o modelo usando a câmera do seu notebook, pode pular esta etapa e seguir para a demonstração dos resultados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/42.png" style={{width:1000, height:'auto'}}/></div>

Clique em **'Confirm'** e selecione a **porta serial** correta para a conexão do dispositivo. O processo de deploy pode levar de 1 a 3 minutos. Tenha paciência e aguarde até que seja concluído.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/20.png" style={{width:1000, height:'auto'}}/></div>

## Demonstração dos resultados

Parabéns! Você treinou e fez o deploy do seu modelo de reconhecimento de gestos corporais com sucesso. Agora é hora de colocá-lo à prova:

- Aponte a câmera para você mesmo ou para uma pessoa de teste.
- Execute cada um dos gestos corporais treinados, um de cada vez.
- Observe as previsões em tempo real e os resultados de classificação do modelo.
- Verifique se o modelo reconhece e classifica cada gesto com precisão.

Sinta-se à vontade para experimentar o treinamento de modelos para diferentes objetos, gestos ou cenários usando a plataforma SenseCraft AI. O processo permanece basicamente o mesmo, independentemente de você usar um dispositivo Seeed Studio ou a câmera do seu notebook.

<div class="table-center">
<iframe width="760" height="500" src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/result.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

Lembre-se: embora a plataforma permita treinar modelos usando qualquer câmera, para obter os melhores resultados e desempenho ideal, recomendamos usar o dispositivo-alvo (atualmente limitado a dispositivos Seeed Studio) para treinar e fazer o deploy do seu modelo.

Com este guia abrangente, você agora deve ter uma compreensão sólida de como treinar um modelo de classificação usando a plataforma SenseCraft AI. Bom treinamento e aproveite para criar modelos de IA poderosos e personalizados para seus projetos!

## Guias relacionados

- Saiba mais sobre os recursos da plataforma na [visão geral do SenseCraft AI](/pt-br/sensecraft-ai/overview/).
- Siga o [guia de treinamento de modelo de detecção de objetos](/pt-br/sensecraft-ai/tutorials/sensecraft-ai-training-object-detection/) para outra tarefa de visão computacional.
- Navegue por mais tutoriais e recursos na [central de documentação do SenseCraft AI](/pt-br/sensecraft-ai/sensecraft-ai-main/).

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte e garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
