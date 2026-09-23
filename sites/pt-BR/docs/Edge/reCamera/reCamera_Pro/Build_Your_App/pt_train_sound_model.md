---
description: Colete amostras de som, treine um modelo personalizado de classificação de som no reCamera Pro ou SenseCraft e faça o deploy para eventos acionados por som.
title: Treinar um Modelo de Som
keywords:
  - reCamera
  - reCamera Pro
  - Acoustic Lab
  - sound model
  - training
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_acoustic_lab_usage
sku: 10003420
sidebar_position: 8
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_acoustic_lab_usage/
---

# Treinar um Modelo de Som

O reCamera Pro inclui uma plataforma local de treinamento de som chamada **Acoustic Lab**. Você pode coletar amostras de som do ambiente, treinar modelos de som personalizados e fazer o deploy deles como eventos acionados por som — tudo no próprio dispositivo, sem conexão com a internet.

## Acessando o Acoustic Lab

1. Clique em **Record Settings** na interface Web.
2. Clique em **Recording Configuration**.
3. Abaixo do botão **Sound Event Trigger**, clique em **Open Acoustic Lab**.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Acoustic_Lab_Enter.png" /></div>

## Visão geral da interface

A interface principal do Acoustic Lab inclui:

1. **Espectrograma de Áudio em Tempo Real** — espectro de frequência do áudio atual
2. **Ranking de Confiança em Tempo Real** — classificação por confiança dos sons atuais
3. **Configuração do Microfone** — fonte de entrada e contagem de canais
4. **Frequência de Amostragem de Áudio** — menor = resposta mais rápida, mais recursos
5. **Precisão de Exibição do Ranking de Confiança** — precisão numérica
6. **Informações de Status** — tempo de execução do algoritmo + número de modelos de som no workspace

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_AcousticsLab_Introuce.png" /></div>

## Treinamento local

### 1. Aquisição de áudio

1. Clique em **Workspace** e depois em **New workspace**. Dê um nome e clique em **Create**.
2. Na área **Dataset**, primeiro colete ruído de fundo (recomendado: 20 segundos). Clique em **Background Noise** → **Record**. O menu suspenso permite selecionar a fonte de entrada do microfone; o padrão é o áudio do dispositivo.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Background_Noise_Start.png" /></div>

3. Após a gravação, clique em **Stop** e depois em **Slice** para dividir o ruído de fundo em segmentos de 1 segundo:
   - (1) Cortar do início
   - (2) Cortar do fim
   - (3) Dividir a amostra
   - (4) Área de exibição das amostras divididas

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Background_Noise_Slice.png" /></div>

4. Clique em **Add category** para adicionar uma categoria de som e nomeá-la.
5. Clique em **Record** para gravar amostras de som (recomendado: 10 segundos). Divida da mesma forma.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Slice.png" /></div>

### 2. Iniciar o treinamento

1. Clique em **Hyperparameter** para revisar os parâmetros de treinamento (mantenha os padrões, a menos que tenha necessidades específicas).
2. Clique em **Train model** para iniciar.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Train_Model.png" /></div>

## Treinando no SenseCraft

Acesse a plataforma de [treinamento de modelos SenseCraft](https://sensecraft.seeed.cc/ai/training) e clique em **Audio Classification Detection**.

### 1. Selecionar a fonte de entrada de áudio

Várias fontes de entrada estão disponíveis. O padrão é o áudio do computador.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_SenseCraft_Source.png" /></div>

:::warning
O SenseCraft ainda não oferece suporte à entrada de áudio do dispositivo, o que pode afetar a precisão de reconhecimento do modelo após o deploy. Consulte [Precisão do modelo SenseCraft](#Precisão-do-modelo-SenseCraft) abaixo.
:::

### 2. Coletar ruído de fundo

Colete pelo menos 20 segundos de ruído de fundo do ambiente. Clique em **Collect Training Data**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-Pro_Voice_Noice_Capture.png" /></div>

### 3. Coletar amostras de som

Defina a duração de cada segmento de áudio (padrão: 2 segundos).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-Pro_Sample_Set_data.png" /></div>

### 4. Treinar

Clique em **Train Model**.

## Fazer o deploy do modelo

1. No Acoustic Lab, encontre a opção **Deploy** na parte inferior. Na lista **MODELS**, selecione o modelo treinado e faça o deploy.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Model_Deploy.png" /></div>

2. Volte para a interface principal da Web UI → **Record Settings** → **Sound Event Trigger** → **Configuration**.
3. Selecione a categoria de som treinada e clique em **Confirm**.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Choice_Trigger.png" /></div>

## Solução de problemas

### Modelo treinado não encontrado na lista de deploy
- Confirme se o treinamento foi concluído e se um arquivo de modelo foi gerado.
- Verifique se você está no mesmo workspace usado durante o treinamento.
- Atualize a página do Acoustic Lab.

### O acionamento por som está insensível ou dispara falsamente
- Recolete pelo menos 20 segundos de ruído de fundo.
- Ajuste o limiar de confiança nos hiperparâmetros.
- Confirme a fonte de entrada do microfone e a configuração de canais.

### A precisão do modelo SenseCraft cai após o deploy {#sensecraft-model-accuracy}

Os recursos de áudio do treinamento no SenseCraft diferem da inferência no dispositivo. Para otimizar:

1. Ao fazer o deploy no SenseCraft, marque a opção para incluir o dataset.
2. Abra o workspace no dispositivo. Com base nos resultados reais de detecção, adicione mais de 5 segundos de gravações com o microfone do dispositivo:
   - **A.** Reconhecimento incorreto de sons que não são alvo → grave esse som como ruído de fundo e adicione os segmentos.
   - **B.** Reconhecimento incorreto de sons alvo → grave esse som na categoria alvo e adicione os segmentos.
3. Treine novamente no dispositivo e mude para o novo modelo.

{/* TODO(verify): confirm whether local training supports multi-category models and maximum number of categories per model */}

## Páginas relacionadas

- [Acionar Captura por Som](/pt-br/recamera_pro_sound_trigger/)
- [Configurar Gravação de Eventos](/pt-br/recamera_pro_record_settings/)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
