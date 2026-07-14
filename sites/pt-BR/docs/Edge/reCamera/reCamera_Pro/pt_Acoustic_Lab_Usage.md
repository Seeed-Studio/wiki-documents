---
title: Uso do Acoustic Lab
description: Este artigo apresenta como usar o recurso Acoustic Lab no reCamera Pro para coletar amostras de som ambiental, treinar modelos de som personalizados e implantá-los como eventos acionados por som.
keywords:
  - reCamera
  - reCamera Pro
  - Acoustic Lab
  - Sound Model
  - Sound Trigger
  - Custom Training
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_acoustic_lab_usage
sidebar_position: 4
last_update:
  date: 2026-07-13T00:00:00.000Z
  author: sizhaozhou
createdAt: "2026-07-13"
updatedAt: "2026-07-13"
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_acoustic_lab_usage/
---


## Introdução

O reCamera Pro possui uma plataforma local dedicada de treinamento de som chamada Acoustic Lab. Por meio dessa plataforma, os usuários podem coletar amostras de som ambiental, treinar modelos de som personalizados e implantá-los como eventos acionados por som sem precisar de conexão com a internet. Este artigo fornece um passo a passo detalhado de cada módulo funcional do Acoustic Lab, cobrindo todo o fluxo de trabalho desde a coleta de áudio e o treinamento do modelo até a implantação e o uso.

## Acessando o recurso

1. Clique no botão **Record Settings** para entrar na interface de configurações de gravação.
2. Clique no botão **Recording Configuration** para entrar na interface de opções de gravação.
3. Sob o botão **Sound Event Trigger**, clique no botão **Open Acoustic Lab** para entrar na interface de treinamento de som.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Acoustic_Lab_Enter.png" /></div>

## Visão geral do recurso

A interface principal do Acoustic Lab inclui as seguintes áreas centrais:

1. **Espectrograma de áudio em tempo real**: Exibe o espectro do sinal de áudio capturado no momento em tempo real, ajudando os usuários a entender as características do som.
2. **Ranking de confiança em tempo real**: Mostra o ranking de confiança dos sons ambientais atuais, ajudando os usuários a entender a distribuição dos sons.
3. **Configuração do microfone**: Selecione a fonte de entrada do microfone e o número de canais.
4. **Frequência de captura de áudio**: Uma frequência mais baixa resulta em resposta de captura mais rápida, mas consome mais recursos do sistema.
5. **Precisão de exibição do ranking de confiança**: Personalize a precisão numérica da exibição do ranking.
6. **Informações de status**: O primeiro parâmetro indica o tempo de execução do algoritmo e o segundo parâmetro indica o número de modelos de som no workspace atual.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_AcousticsLab_Introuce.png" /></div>

## Treinando um modelo de som personalizado

Além dos modelos de som integrados, os usuários podem treinar modelos de som personalizados com base em suas necessidades específicas.

### Coletando áudio

1. No Acoustic Lab, clique no botão **Workspace** para entrar no workspace.
2. Clique no botão **New workspace**, dê um nome ao novo workspace e depois clique no botão **Create**.
3. Na área **Dataset**, primeiro colete uma amostra de ruído de fundo ambiental (duração recomendada: 20 segundos). Clique no botão **Background Noise** e depois clique no botão **Record** para iniciar a captura. O menu suspenso ao lado permite selecionar a fonte de entrada do microfone; o padrão é o áudio do dispositivo.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Background_Noise_Start.png" /></div>

4. Após concluir a coleta, clique no botão **Stop**. Em seguida, clique no botão **Slice** para dividir a amostra de ruído de fundo em segmentos de 1 segundo.
   - (1) Especificar a parte a ser cortada do início do ruído de fundo
   - (2) Especificar a parte a ser cortada do final do ruído de fundo
   - (3) Dividir a amostra de ruído de fundo
   - (4) Área para as amostras divididas

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Background_Noise_Slice.png" /></div>

5. Clique no botão **Add category** no canto superior direito para adicionar uma categoria de som e nomeá-la (por exemplo, o nome do som que você deseja treinar).
6. Clique no botão **Record** para começar a gravar amostras de som (duração recomendada: 10 segundos). As etapas subsequentes são as mesmas da etapa 4.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Slice.png" /></div>

### Iniciando o treinamento

Depois que as amostras de som forem coletadas, você pode prosseguir com o treinamento do modelo.

1. Clique no botão **Hyperparameter** para entrar na interface de configurações de hiperparâmetros (mantenha os padrões, a menos que você tenha requisitos específicos).
2. Clique no botão **Train model** para iniciar o treinamento do modelo de som.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Train_Model.png" /></div>

## Implantando o modelo

1. Na parte inferior da interface do Acoustic Lab, encontre a opção **Deploy**. Na lista **MODELS**, localize o modelo que você acabou de treinar e clique nele para selecioná-lo e implantá-lo.
   - (1) Lista de modelos
   - (2) Espectrograma de áudio em tempo real

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Model_Deploy.png" /></div>

2. Volte para a interface principal da WebUI e clique no botão **Record Settings** para entrar na interface de configurações de gravação.
3. Encontre a opção **Sound Event Trigger** e clique no botão **Configuration** à direita para entrar na interface de configuração de acionamento por som.
4. Selecione a categoria de som que você acabou de treinar e clique no botão **Confirm** para concluir a configuração do acionamento por som.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Choice_Trigger.png" /></div>

## Solução de problemas

**Problema: o modelo treinado não pode ser encontrado na lista de implantação**

- Certifique-se de que o processo de treinamento foi concluído e que um arquivo de modelo foi gerado no workspace.
- Verifique se o workspace atual é o mesmo usado durante o treinamento.
- Tente atualizar a página do Acoustic Lab ou entrar novamente nela.

**Problema: o acionamento por som não é sensível ou dispara falsamente**

- Verifique se a amostra de ruído de fundo é suficiente. Recomenda-se coletar novamente mais de 20 segundos de ruído de fundo ambiental.
- Ajuste o limiar de confiança nos hiperparâmetros.
- Verifique se a fonte de entrada do microfone e a configuração de canais estão corretas.

## Recursos

- [Página do produto reCamera Pro](https://www.seeedstudio.com/)
- [Guia de início rápido do reCamera Pro](https://wiki.seeedstudio.com/pt-br/recamera_pro_getting_started/)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nosso produto! Estamos aqui para fornecer diferentes níveis de suporte para garantir que sua experiência com nosso produto seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>