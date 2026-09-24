---
description: Sua primeira tarefa ponta a ponta com a reCamera Pro — configurar uma regra de gravação acionada por IA, deixar que um alvo detectado inicie uma gravação automaticamente e, em seguida, localizar e reproduzir o arquivo de vídeo.
title: 'Primeira tarefa: detectar e gravar'
keywords:
  - reCamera
  - reCamera Pro
  - Edge AI
  - event recording
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_first_recording
sku: 10003420
sidebar_position: 2
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_first_recording/
---

# Primeira tarefa: detectar e gravar

No [quick start](/pt-br/recamera_pro_getting_started/) você confirmou que a detecção por IA funciona na visualização ao vivo. Este tutorial transforma essa detecção em algo que o dispositivo faz sozinho: **quando um alvo aparece, a reCamera Pro o grava automaticamente** — e você reproduz o clipe pela interface Web.

O fluxo de trabalho:

1. [Preparar: escolher um modelo e um alvo](#1-preparar-escolher-um-modelo-e-um-alvo)
2. [Definir o formato de gravação](#2-definir-o-formato-de-gravação)
3. [Configurar o gatilho de inferência de IA](#3-configurar-o-gatilho-de-inferência-de-ia)
4. [Aplicar a regra e acionar uma gravação](#4-aplicar-a-regra-e-acionar-uma-gravação)
5. [Localizar e reproduzir a gravação](#5-localizar-e-reproduzir-a-gravação)

{/* TODO(verify): run this tutorial end-to-end on a real device — record the exact model and target used, the configuration values (confidence range, category filter), the trigger action, and attach screenshots of the resulting recording and playback. */}

## 1. Prepare: pick a model and a target

- Certifique-se de que a inferência de IA está em execução: **AI Inference → Inference Configuration → Inference Enable** ativado, um modelo de detecção selecionado como **Running Model**, status **Running**. Se você ainda não fez isso, siga o [passo 4 do quick start](/pt-br/recamera_pro_getting_started/#4-confirmar-que-a-detecção-por-ia-está-funcionando).
- Decida o que deve acionar a gravação. A tarefa inicial mais simples: gravar quando uma **pessoa** entra no campo de visão. As categorias disponíveis vêm da saída do modelo em execução (por exemplo, Person, Vehicle, Hardhat, Mask, Safety Vest, Machinery).

Os próprios parâmetros de detecção (categorias, limites de confiança/IOU, frequência de inferência) são configurados na [página de configuração de AI Inference](/pt-br/recamera_pro_ai_inference/) — este tutorial apenas faz referência a eles.

## 2. Set the recording format

Abra **Recording Settings** na barra de navegação à esquerda. Na parte superior da página, selecione o formato do arquivo de gravação:

| Parameter | Description |
| --- | --- |
| Recording Format | Formato para arquivos salvos: MP4 (vídeo), JPG (imagens) ou RAW (dados de imagem originais) |

Para este tutorial, escolha **MP4**. Observação: quando MP4 é selecionado, cada gravação tem duração fixa de **1 minuto**.

Todas as opções de gravação nesta página — métodos de gatilho, agendamentos, cotas de armazenamento — estão documentadas em detalhes na [página de configuração de gravação de eventos](/pt-br/recamera_pro_record_settings/).

## 3. Configure the AI inference trigger

Na lista de métodos de gatilho, escolha **AI Inference Trigger** e clique em **Configure**:

| Configuration item | What to set for this tutorial |
| --- | --- |
| Inference Task | Selecione a tarefa de inferência de IA em execução |
| Confidence Range | Mantenha o intervalo padrão para sua primeira gravação |
| Category Filter | Selecione **Person** (ou a categoria que você deseja detectar) |
| Trigger Area | Deixe em branco — sem nenhuma região desenhada, todo o quadro aciona o gatilho |

{/* TODO(verify): capture the default confidence range shown in the UI and confirm whether the trigger area default is "entire frame" on current firmware. */}

Opcionalmente, use **Schedule Management** para limitar quando a regra fica ativa (por exemplo, apenas no período noturno). Para um primeiro teste, deixe o agendamento cobrindo o horário atual.

## 4. Apply the rule and trigger a recording

1. Clique em **Apply** ao lado de AI Inference Trigger. O status na parte superior da página mostra o método de gatilho ativo, por exemplo, *Current: AI Inference Trigger*.
2. Entre no campo de visão da câmera (ou segure o alvo escolhido).
3. O sistema detecta o alvo e inicia a gravação automaticamente. Com o formato MP4, o clipe tem 1 minuto de duração.

## 5. Find and play back the recording

Ainda em **Recording Settings**:

1. Abra **File Preview** — os arquivos gravados são listados em diretórios por data.
2. Abra o arquivo de hoje: a interface Web o reproduz em linha, para que você possa revisar o evento sem baixar nada.
3. Verifique **Storage Management** para ver o uso de disco e onde os arquivos são salvos. Você pode definir uma cota de armazenamento e habilitar a sobrescrita de arquivos antigos para que as gravações mais recentes sejam sempre mantidas.

Comportamento de armazenamento em profundidade (cotas, política de disco cheio, download): consulte [Localizar gravações e armazenamento](/pt-br/recamera_pro_storage/).

{/* TODO(verify): confirm playback and download behavior of File Preview on current firmware and attach a screenshot of a recorded clip playing back. */}

## Result

Agora você tem uma regra de gravação por IA autônoma: sem computador envolvido, o dispositivo detecta e grava por conta própria. Próximos passos típicos:

- Restringir o gatilho a uma zona (entrada, área de risco) com **Trigger Area**.
- Alternar ou combinar fontes de gatilho — agendado, GPIO, serial, HTTPS, loop ou eventos de som — na [página de configuração de gravação de eventos](/pt-br/recamera_pro_record_settings/).
- Enviar resultados de detecção para o seu próprio sistema via [MQTT](/pt-br/recamera_pro_mqtt/) ou [HTTP/UART](/pt-br/recamera_pro_http_uart/).
- Antes de montar o dispositivo permanentemente, execute a [lista de verificação de pré-implantação](/pt-br/recamera_pro_deploy_checklist/).

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
