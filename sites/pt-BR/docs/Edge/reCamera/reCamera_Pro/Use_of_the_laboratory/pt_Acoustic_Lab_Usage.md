---
title: Uso do Acoustic Lab
description: Este artigo descreve como usar o recurso Acoustic Lab no reCamera Pro para coletar amostras de som ambiental, treinar modelos de som personalizados e implantá-los como eventos acionados por som.
keywords:
  - reCamera
  - reCamera Pro
  - Acoustic Lab
  - Sound Model
  - Sound Trigger
  - Custom Training
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_acoustic_lab_usage
sidebar_position: 1
last_update:
  date: 2026-07-13
  author: sizhaozhou
createdAt: '2026-07-13'
updatedAt: '2026-07-30'
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_acoustic_lab_usage/
---

## Introdução

O reCamera Pro está equipado com uma plataforma local de treinamento de som chamada Acoustic Lab. Por meio dessa plataforma, os usuários podem coletar amostras de som ambiental, treinar modelos de som personalizados e implantá-los como eventos acionados por som sem conexão com a internet. Este artigo detalha cada módulo funcional do Acoustic Lab, cobrindo o fluxo de trabalho completo desde a aquisição de áudio e treinamento do modelo até a implantação e o uso.

## Acessando o recurso

1. Clique no botão **Record Settings** para entrar na interface de configurações de gravação.
2. Clique no botão **Recording Configuration** para entrar na interface de opções de gravação.
3. Abaixo do botão **Sound Event Trigger**, clique no botão **Open Acoustic Lab** para entrar na interface de treinamento de som.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Acoustic_Lab_Enter.png" /></div>

## Visão geral do recurso

A interface principal do Acoustic Lab inclui as seguintes áreas centrais:

1. **Espectrograma de áudio em tempo real**: Exibe o espectro de frequência do sinal de áudio capturado no momento em tempo real, ajudando os usuários a entender as características do som.
2. **Ranking de confiança em tempo real**: Mostra o ranking de confiança dos sons ambientais atuais, ajudando os usuários a entender a distribuição dos sons.
3. **Configuração do microfone**: Selecione a fonte de entrada do microfone e o número de canais.
4. **Frequência de amostragem de áudio**: Frequências mais baixas fornecem resposta de aquisição mais rápida, mas consomem mais recursos do sistema.
5. **Precisão de exibição do ranking de confiança**: Personalize a precisão numérica exibida no ranking.
6. **Informações de status**: O primeiro parâmetro indica o tempo de execução do algoritmo e o segundo parâmetro indica o número de modelos de som no workspace atual.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_AcousticsLab_Introuce.png" /></div>

## Treinando modelos de som personalizados

Além dos modelos de som integrados, os usuários podem treinar modelos de som personalizados de acordo com suas próprias necessidades. Os usuários podem optar por treinar localmente ou na plataforma [SenseCraft](https://sensecraft.seeed.cc/ai/#/home).

### Treinamento local

#### 1. Aquisição de áudio

1. No Acoustic Lab, clique no botão **Workspace** para entrar no workspace.
2. Clique no botão **New workspace**, dê um nome ao novo workspace e, em seguida, clique no botão **Create**.
3. Na área **Dataset**, primeiro colete uma amostra de ruído de fundo ambiente (duração recomendada: 20 segundos). Clique no botão **Background Noise** e, em seguida, clique em **Record** para iniciar a aquisição. O menu suspenso ao lado permite selecionar a fonte de entrada do microfone; o padrão é o áudio do dispositivo.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Background_Noise_Start.png" /></div>

4. Após a conclusão da aquisição, clique no botão **Stop**. Em seguida, clique no botão **Slice** para dividir a amostra de ruído de fundo em segmentos de 1 segundo.
   - (1) Especificar a parte a ser cortada do início do ruído de fundo
   - (2) Especificar a parte a ser cortada do final do ruído de fundo
   - (3) Dividir a amostra de ruído de fundo
   - (4) Área de exibição das amostras divididas

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Background_Noise_Slice.png" /></div>

5. Clique no botão **Add category** no canto superior direito para adicionar uma categoria de som e nomeá-la (por exemplo, o nome do som que você deseja treinar).
6. Clique no botão **Record** para começar a gravar amostras de som (duração recomendada: 10 segundos). As etapas subsequentes são as mesmas da etapa 4.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Slice.png" /></div>

#### 2. Iniciar o treinamento

Após concluir a coleta de amostras de som, você pode prosseguir com o treinamento do modelo.

1. Clique no botão **Hyperparameter** para entrar na interface de configurações de hiperparâmetros (mantenha as configurações padrão se não houver requisitos especiais).
2. Clique no botão **Train model** para iniciar o treinamento do modelo de som.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Train_Model.png" /></div>

### Treinando modelos no SenseCraft

Acesse a plataforma de [treinamento de modelos SenseCraft](https://sensecraft.seeed.cc/ai/training) e clique no botão **Audio Classification Detection** para entrar na interface de treinamento de som.

#### 1. Selecionar a fonte de entrada de áudio

Na plataforma SenseCraft, há várias fontes de entrada de áudio disponíveis. Os usuários podem escolher a fonte de entrada de microfone apropriada com base em sua situação real. O padrão é o áudio do computador.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_SenseCraft_Source.png" /></div>

:::warning
Atualmente, a plataforma SenseCraft ainda não oferece suporte à entrada de áudio do dispositivo, o que pode afetar a precisão de reconhecimento do modelo. Para mais detalhes, consulte: [Decreased accuracy or false recognition after SenseCraft model deployment](#sensecraft-sound-model-accuracy).
:::

#### 2. Coletar ruído de fundo

Ao coletar ruído de fundo ambiente, é recomendável coletar mais de 20 segundos de ruído de fundo ambiental para garantir a precisão do treinamento do modelo. Clique no botão ***Collect Training Data*** para iniciar a coleta de dados.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-Pro_Voice_Noice_Capture.png" /></div>

#### 3. Coletar amostras de som

Ao coletar amostras de som, os usuários podem definir a duração de cada segmento de áudio; o padrão é 2 segundos. Configure conforme mostrado na imagem abaixo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-Pro_Sample_Set_data.png" /></div>

#### 4. Treinar o modelo

Clique no botão ***Train Model*** para iniciar o treinamento do modelo de som.

## Implantando o modelo

1. Na parte inferior da interface do Acoustic Lab, encontre a opção **Deploy**. Na lista **MODELS**, encontre o modelo que você acabou de treinar, clique para selecioná-lo e implantá-lo.
   - (1) Lista de modelos
   - (2) Espectrograma de áudio em tempo real

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Model_Deploy.png" /></div>

2. Volte para a interface principal do WebUI e clique no botão **Record Settings** para entrar na interface de configurações de gravação.
3. Encontre a opção **Sound Event Trigger** e clique no botão **Configuration** à direita para entrar na interface de configuração de acionamento por som.
4. Selecione a categoria de som que você acabou de treinar e, em seguida, clique no botão **Confirm** para concluir a configuração de acionamento por som.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Choice_Trigger.png" /></div>

## Solução de problemas

### Problema: modelo treinado não encontrado na lista de implantação

- Confirme se o processo de treinamento foi concluído e se um arquivo de modelo foi gerado no workspace.
- Verifique se o workspace atual é o mesmo usado durante o treinamento.
- Tente atualizar a página do Acoustic Lab ou entrar novamente.

### Problema: acionamento por som insensível ou com disparos falsos

- Verifique se a amostra de ruído de fundo é suficiente; recomenda-se coletar novamente mais de 20 segundos de ruído de fundo ambiental.
- Ajuste o limiar de confiança nos hiperparâmetros.
- Confirme se a fonte de entrada do microfone e a configuração de canais estão corretas.

### Problema: a precisão do modelo de classificação de som do SenseCraft cai ou ocorrem reconhecimentos falsos após a implantação no dispositivo {#sensecraft-sound-model-accuracy}

Como o dispositivo usado para aquisição de som durante o treinamento no SenseCraft é diferente do dispositivo usado para inferência real do modelo, existem certas diferenças nas características de áudio. Você pode consultar os seguintes métodos para otimizar a precisão do modelo implantado:

- Ao implantar no SenseCraft, marque a opção para incluir o dataset e implantá-lo no dispositivo.
- Abra o workspace correspondente no dispositivo e, com base nos resultados reais de detecção, adicione um pequeno número de fatias de amostras (mais de 5 segundos) de dados coletados pelo microfone do dispositivo ao dataset: 
***A.*** Reconhecimento falso de sons não alvo: use o microfone do dispositivo para gravar esse som na categoria de ruído de fundo e adicione fatias; 
***B.*** Reconhecimento falso de sons alvo: use o microfone do dispositivo para gravar esse som na categoria alvo e adicione fatias.

- Clique no botão de treinamento no dispositivo para treinar novamente o modelo. Após a conclusão do treinamento, alterne para o modelo e verifique novamente o desempenho de reconhecimento. Se ainda não atender às expectativas, repita as etapas acima.

Continuaremos a otimizar e, no futuro, ofereceremos suporte à aquisição de som usando o microfone do dispositivo no SenseCraft. Fique atento.

## Recursos

- [Página do produto reCamera Pro](https://www.seeedstudio.com/reCamera-Pro-2GB.html)
- [Guia de início rápido do reCamera Pro](https://wiki.seeedstudio.com/pt-br/recamera_pro_getting_started/)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nosso produto! Estamos comprometidos em fornecer suporte em múltiplos níveis para garantir uma experiência tranquila com nossos produtos. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades dos usuários.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>