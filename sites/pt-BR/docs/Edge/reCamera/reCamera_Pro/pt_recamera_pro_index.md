---
description: Comece aqui — encontre o guia certo para o que você quer fazer com a reCamera Pro.
title: reCamera Pro
keywords:
  - reCamera
  - reCamera Pro
  - Edge AI
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro
sku: 10003420
last_update:
  date: 09/21/2026
  author: Seeed Studio
url: https://wiki.seeedstudio.com/pt-br/recamera_pro/
---

# Comece aqui

A reCamera Pro é uma câmera de IA baseada no SoC Rockchip RV1126B (Cortex-A53 quad-core @ 1,2 GHz, NPU de 3 TOPS), com uma câmera 4K (SC850SL, 4K@30FPS), um IMU de 6 eixos, entrada para microfone, um alto-falante de 1 W, 16 GB de eMMC mais um slot para cartão SD e interfaces de expansão ricas (GPIO, UART, CAN, MIPI-DSI). Tudo no dispositivo — visualização ao vivo, detecção por IA, gravação de eventos, treinamento de modelo de som — pode ser operado pela interface Web integrada, e uma integração mais profunda está disponível por meio da API HTTP e do SDK nativo.

Esta página é o seu navegador de tarefas: escolha abaixo o que você quer fazer ou siga o caminho padrão de introdução se esta for a sua primeira vez.

<!-- TODO(O1, per migration map): add real preview screenshot as the capability entry image (from Live Preview page assets); verify all statements in this intro against the shipping firmware before release. -->

## Rota padrão de introdução

Novo na reCamera Pro? Siga estas três etapas na ordem:

1. [Início rápido: veja sua primeira detecção de IA](/pt-br/recamera_pro_getting_started/) — ligue o dispositivo, faça login na interface Web e assista a uma detecção ao vivo.
2. [Primeira tarefa: detectar e gravar](/pt-br/recamera_pro_first_recording/) — transforme uma detecção em uma gravação de evento e reproduza-a.
3. [Acesse o dispositivo via Wi-Fi](/pt-br/recamera_pro_wifi_access/) — mude da conexão direta para a sua rede local.

## O que você quer fazer?

### 1. Introdução

- [Veja sua primeira detecção de IA](/pt-br/recamera_pro_getting_started/)
- [Detecte e grave seu primeiro evento](/pt-br/recamera_pro_first_recording/)
- [Acesse o dispositivo via Wi-Fi](/pt-br/recamera_pro_wifi_access/)

### 2. Crie seu aplicativo

- [Visualize, capture fotos e grave manualmente](/pt-br/recamera_pro_live_preview/)
- [Ajuste a qualidade de imagem e o desempenho em baixa luminosidade](/pt-br/recamera_pro_image_quality/) — inclui o exemplo de baixa luminosidade de 0,3 lux <!-- TODO(O1/B2): link the actual 0.3 lux sample once captured and verified on the image quality page; do not fabricate sample images. -->
- [Assista ao stream em um player externo (RTSP)](/pt-br/recamera_pro_rtsp/)
- [Configure OSD e máscaras de privacidade](/pt-br/recamera_pro_osd_masks/)
- [Configure a detecção: classes, limiares, agenda](/pt-br/recamera_pro_ai_inference/)
- [Configure a gravação de eventos](/pt-br/recamera_pro_record_settings/) e [encontre suas gravações e gerencie o armazenamento](/pt-br/recamera_pro_storage/)
- [Treine seu próprio modelo de som](/pt-br/recamera_pro_acoustic_lab_usage/) e [dispare capturas por som](/pt-br/recamera_pro_sound_trigger/)
- [Envie resultados de detecção para fora: MQTT](/pt-br/recamera_pro_mqtt/) · [HTTP / UART](/pt-br/recamera_pro_http_uart/)
- [Dispare capturas a partir de um dispositivo externo](/pt-br/recamera_pro_uart_usage/)
- [Alertas acionados por som no Home Assistant](/pt-br/recamera_pro_ha_sound_alert/)
- [Faça sua primeira chamada de API](/pt-br/recamera_pro_api_quick_start/)

### 3. Use seu próprio modelo

- [Escolha um caminho de implantação de modelo](/pt-br/recamera_pro_model_path/)
- [Envie e configure um modelo RKNN](/pt-br/recamera_pro_rknn_upload/)
- [Converta modelos ONNX com o SenseCraft](/pt-br/recamera_pro_sensecraft/)
- [Converta modelos com o RKNN-Toolkit2](/pt-br/recamera_pro_rknn_model_conversion/)
- [Valide o desempenho do modelo no dispositivo](/pt-br/recamera_pro_model_validate/)

### 4. Desenvolva seu próprio aplicativo

- [Escolha um caminho de desenvolvimento](/pt-br/recamera_pro_dev_path/)
- [Crie um aplicativo mínimo com o SDK](/pt-br/recamera_pro_sdk_setup/)
- [Terminal, SSH e UART de depuração](/pt-br/recamera_pro_terminal/)
- [Desenvolva com agentes de codificação de IA](/pt-br/recamera_pro_development_cpp_skill/)
- [Pipelines de câmera / áudio / inferência](/pt-br/recamera_pro_media_dev/)
- Periféricos: [dados do IMU](/pt-br/recamera_pro_imu_usage/) · [tela MIPI-DSI](/pt-br/recamera_pro_mipi_dsi_screen_usage/) · [alto-falante e volume](/pt-br/recamera_pro_speaker_usage/) · [pinos GPIO](/pt-br/recamera_pro_gpio_guide/)
- Exemplos: [detecção de inclinação e agitação](/pt-br/recamera_pro_imu_tilt_shake_detection/) · [acordar por visão + reconhecimento de fala](/pt-br/recamera_pro_visual_wake_stt/)
- [Imagem experimental do Debian 13](/pt-br/recamera_pro_debian/)

### 5. Implantar e manter

- [Checklist pré-implantação](/pt-br/recamera_pro_deploy_checklist/)
- [Rede, horário e controle de acesso](/pt-br/recamera_pro_device_info/)
- [Fazer backup e restaurar a configuração](/pt-br/recamera_pro_backup_restore/)
- [Atualização e recuperação de firmware](/pt-br/recamera_pro_firmware_update/)

### 6. Referência

- [Especificações de hardware e diagramas de interface](/pt-br/recamera_pro_hardware_specifications/)
- [Índice de campos e botões da interface Web](/pt-br/recamera_pro_webui_reference/)
- [Compatibilidade de modelos e formatos de saída](/pt-br/recamera_pro_model_compatibility/)
- [Downloads e notas de versão](/pt-br/recamera_pro_downloads/)
- [Referência da API](/pt-br/recamera_pro_api_introduction/)

### 7. Solução de problemas

- [Solucione problemas por sintoma](/pt-br/recamera_pro_faqs/)
- [Colete logs para suporte](/pt-br/recamera_pro_collect_logs/)
- [Solução de problemas de chamadas de API](/pt-br/recamera_pro_api_faq/)

## Capacidades em resumo

<!-- TODO(O1, per migration map "capability status"): build the capability status matrix from the shipping firmware — for each capability (AI detection, event recording, sound training/Acoustic Lab, RTSP streaming, MQTT/HTTP/UART output, external trigger, API), state availability and any known limitations. Sources: Ai_Inference §Feature Overview, Acoustic Lab §Introduction, Live Preview real preview image. Do not invent firmware facts; verify version by version. -->

- **Visão por IA** — detecção de objetos/pessoas no dispositivo com classes, limiares e agendas configuráveis.
- **Detecção de som** — Acoustic Lab para treinar modelos de som personalizados; o som pode acionar capturas e alertas.
- **Gravação** — gravação manual mais gravação baseada em eventos com gerenciamento de armazenamento.
- **Streaming** — visualização ao vivo na interface Web e saída RTSP para players externos.
- **Integração** — API HTTP, saída de resultados via MQTT/HTTP/UART, disparos externos via GPIO/UART, exemplo com Home Assistant.
- **Desenvolvimento** — SDK nativo, fluxo de trabalho com agentes de codificação de IA, Debian 13 experimental.

## Para onde ir em seguida

- Primeira vez aqui? Comece pela [rota padrão de introdução](#Rota-padrão-de-introdução) acima.
- Vai usar seu próprio modelo? Vá para [Use seu próprio modelo](/pt-br/recamera_pro_model_path/).
- Vai escrever código? Vá para [Desenvolva seu próprio aplicativo](/pt-br/recamera_pro_dev_path/).
- Algo não está funcionando? Veja [Solução de problemas](/pt-br/recamera_pro_faqs/).
