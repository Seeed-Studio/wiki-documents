---
description: Um índice em nível de campo da Web UI integrada da reCamera Pro — cada página, suas principais configurações e onde encontrar o guia completo.
title: Referência da Web UI
keywords:
  - reCamera
  - reCamera Pro
  - Web UI
  - live preview
  - AI inference
  - record settings
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_webui_reference
sku: 10003420
sidebar_position: 3
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_webui_reference/
---

# Referência da Web UI

A reCamera Pro vem com uma Web UI integrada. Conecte o dispositivo à sua rede, abra o endereço IP em um navegador e faça login (credenciais padrão: `root` / `recamera` — altere-as antes da implantação, consulte [Rede, Hora e Acesso](/pt-br/recamera_pro_device_info/)).

Esta página é um índice em nível de campo: para cada módulo da Web UI, ela lista as principais configurações que você pode ajustar e aponta para o guia de tarefas que explica quando e como usá-las.

## Mapa de módulos

| Módulo da Web UI | O que faz | Guia completo |
| --- | --- | --- |
| Live Preview | Vídeo em tempo real, tirar foto, gravar vídeo, alternância entre fluxo principal/secundário | [Visualizar, Capturar e Gravar](/pt-br/recamera_pro_live_preview/) |
| Basic / Display Settings | Resolução, codificação, FPS, GOP, taxa de bits; espelhar/girar, alternância dia-noite, ajuste de imagem | [Qualidade de Imagem e Baixa Luminosidade](/pt-br/recamera_pro_image_quality/) |
| OSD Settings | Sobreposições de nome do canal, data/hora, número de série | [OSD e Máscaras de Privacidade](/pt-br/recamera_pro_osd_masks/) |
| Image Masking | Mascaramento de privacidade de áreas sensíveis | [OSD e Máscaras de Privacidade](/pt-br/recamera_pro_osd_masks/) |
| Streaming Settings | Streaming RTSP para plataformas de terceiros e NVRs | [Transmitir Vídeo via RTSP](/pt-br/recamera_pro_rtsp/) |
| AI Inference | Gerenciamento de modelos, upload, configuração, controle de inferência, monitoramento, saída | [Configurar Detecção](/pt-br/recamera_pro_ai_inference/) |
| Record Settings | Regras de disparo (IA / agendado / GPIO / serial / HTTPS / loop / som), armazenamento, visualização de arquivos | [Configurar Gravação de Eventos](/pt-br/recamera_pro_record_settings/) |
| Device Info | Informações do sistema, hora, rede (WiFi), configurações de conexão (SSH/HTTP/baud), firmware, exportação/importação de configuração | [Rede, Hora e Acesso](/pt-br/recamera_pro_device_info/) |
| Terminal | Logs de sistema em tempo real e um console de terminal no navegador | [Terminal, SSH e UART de Depuração](/pt-br/recamera_pro_terminal/) |

## Live Preview

O lado esquerdo da página mostra a visualização de vídeo em tempo real; o lado direito mostra os painéis de configuração.

- **Start/Stop Playback** — reproduz o fluxo atual da câmera no navegador
- **Main Stream / Sub-Stream** — fluxo principal para visualização em alta definição, armazenamento e análise de IA; fluxo secundário para baixa largura de banda ou visualização multicanal
- **Take Photo / Record Video** — captura uma imagem estática ou um clipe de vídeo do fluxo atual
- **Volume / Connection status** — volume da reprodução e estado da conexão ao vivo; um aviso de falha aparece quando o dispositivo é desconectado ou o fluxo está anormal

## Basic Settings (codificação de vídeo)

Configurado separadamente para fluxo principal e secundário; clique em **Save Video Settings** para aplicar, **Reset** para restaurar.

| Parâmetro | Descrição |
| --- | --- |
| Resolution | Resolução de saída de vídeo, por exemplo, 1920×1080 (1080P) |
| Encoding Format | Codec de vídeo, por exemplo, H.264 |
| Frame Rate (FPS) | Taxa de quadros de vídeo, por exemplo, 30 FPS |
| GOP | Intervalo entre quadros-chave |
| Bitrate Control Mode | por exemplo, VBR (Variable Bitrate) |
| Max Bitrate | Taxa de bits máxima em Kbps |
| Bitrate Quality | Nível de qualidade de codificação |

A captura e o armazenamento de áudio podem ser ativados ou desativados aqui (**Audio Settings** / **Audio Storage Settings**).

## Display Settings

| Grupo | Parâmetros |
| --- | --- |
| Orientation | Espelhar, Girar (por exemplo, 0°), Padrão de Vídeo (por exemplo, PAL 50Hz) |
| Day/Night | Modo de Comutação (por exemplo, automático), Sensibilidade do Limite de Comutação, Tempo de Histerese de Comutação |
| Image tuning | Brilho, Contraste, Saturação, Nitidez, Matiz, Modo de Exposição, Modo de Ganho (baseado em perfil) |

## OSD Settings

Sobreposições renderizadas sobre o fluxo de vídeo. As coordenadas são posições relativas e também podem ser arrastadas diretamente.

| Item de configuração | Descrição |
| --- | --- |
| Font Size / Font Color / Color Mode | Aparência do texto OSD, com opção de cor personalizada |
| Channel Name Overlay / Name / Coordinates | por exemplo, "Camera 01", posicionada na tela |
| Date and Time Overlay / Date Format / Time Format / Show Weekday / Coordinates | Opções de sobreposição de hora |
| Serial Number Overlay | Mostrar ou ocultar o número de série do dispositivo |

## Image Masking

Desenhe máscaras de privacidade manual ou automaticamente para ocultar áreas sensíveis (escritórios, residências, números de porta, telas) na visualização, gravação e fluxos. As máscaras entram em vigor imediatamente após salvar.

## Streaming Settings

Configurado por fluxo (principal/secundário):

| Parâmetro | Descrição |
| --- | --- |
| Stream Setting Switch | Ativa ou desativa o streaming para o fluxo atual |
| Streaming Protocol | por exemplo, RTSP |
| Authentication Type | por exemplo, sem autenticação |
| Apply Settings | Salva e aplica a configuração |

Após a configuração, clientes, plataformas ou NVRs de terceiros podem puxar o fluxo de vídeo a partir do endereço do stream.

## AI Inference

| Submódulo | Campos principais |
| --- | --- |
| Model Management | Arquivo de Modelo, Nome do Modelo, Framework (por exemplo, RKNN), Algoritmo (por exemplo, YOLO, nanodet), Tipo (por exemplo, Detecção), Versão, Tamanho, Operações (Configure / Delete) |
| Upload Model | Arrastar e soltar ou seletor de arquivos; arquivos de modelo RKNN |
| SenseCraft Model Conversion | Ponto de entrada **View SenseCraft Models**; converte ONNX para RKNN (conjunto de dados de quantização opcional) |
| Model Configuration | Nome do Modelo, Framework, Versão, Tipo, Algoritmo, Autor, Descrição, Categorias de Detecção (manual ou importação de TXT), Pós-processamento (IOU, Confidence, max_obj) |
| Inference Configuration | Inference Enable, Running Model, Inference Frequency (FPS), Inference Status, Real-time Inference FPS |
| Real-time Monitoring | Campos de log: timestamp, task_type, class_id, class_name, score, bbox, detection_count; controles para desativar, pausar ou limpar |
| Inference Output | Modelo de saída, tipo de tarefa e método: HTTP, MQTT ou UART |

Detalhes de campos e fluxo de trabalho: [Configurar Detecção](/pt-br/recamera_pro_ai_inference/). Integração de saída: [HTTP/UART](/pt-br/recamera_pro_http_uart/), [MQTT](/pt-br/recamera_pro_mqtt/).

## Record Settings

| Submódulo | Campos principais |
| --- | --- |
| Recording Configuration | Formato de gravação, regras de disparo, agendamentos |
| Trigger Methods | AI Inference Trigger (categorias, faixa de confiança, áreas de disparo), Scheduled Trigger (intervalo), GPIO Trigger (pino, estado, sinal, debounce), Serial Trigger (porta, comando), HTTPS Trigger (URL de disparo), Loop Trigger (contínuo), Sound Event Trigger (modelos Sound Lab e categorias de som) |
| Schedule Management | Períodos de tempo efetivos para regras de gravação |
| Storage Management | Visualizar e gerenciar o espaço de armazenamento do dispositivo |
| File Preview | Navegar pelos arquivos de vídeo gravados |

Passo a passo: [Configurar Gravação de Eventos](/pt-br/recamera_pro_record_settings/) e [Encontrar Gravações e Armazenamento](/pt-br/recamera_pro_storage/).

## Device Info

| Submódulo | Campos principais |
| --- | --- |
| Basic Information | Versões de hardware/software, uso de recursos do sistema |
| Time Settings | Hora do sistema |
| Network Settings | Status do WiFi; informações detalhadas de rede por rede conectada |
| Connection Settings | Ativação de conexão remota SSH, configurações HTTP, taxa de baud da porta serial |
| System Settings | Versão e atualização de firmware, reinicialização, alteração de senha, restauração de fábrica |
| Export/Import Configuration | Exportar baixa um arquivo de configurações (tar); importar o carrega e aplica após a reinicialização |

Detalhes: [Rede, Hora e Acesso](/pt-br/recamera_pro_device_info/), [Atualização e Recuperação de Firmware](/pt-br/recamera_pro_firmware_update/), [Backup e Restauração](/pt-br/recamera_pro_backup_restore/).

## Terminal

- **System Log** — logs de operação em tempo real; filtre por nível ou palavras-chave, limpe ou baixe arquivos de log para análise e suporte
- **Terminal console** — faça login no shell do dispositivo a partir do navegador sem uma ferramenta SSH (padrão `root` / `recamera`)

Detalhes: [Terminal, SSH e UART de Depuração](/pt-br/recamera_pro_terminal/); coleta de logs para suporte: [Coletar Logs](/pt-br/recamera_pro_collect_logs/).

<!-- TODO(verify): confirm default Web UI login credentials and firmware-shipped defaults against the current release; confirm exact module labels in the shipping firmware UI. -->


## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
