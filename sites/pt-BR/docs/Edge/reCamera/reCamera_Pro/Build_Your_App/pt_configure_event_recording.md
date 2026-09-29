---
description: Configure a gravação acionada por eventos na reCamera Pro usando detecção por IA, temporizadores agendados, GPIO, porta serial, HTTPS, loop ou gatilhos por evento de som.
title: Configurar gravação por evento
keywords:
  - reCamera
  - reCamera Pro
  - recording
  - event trigger
  - GPIO
  - AI trigger
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_record_settings
sku: 10003420
sidebar_position: 6
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_record_settings/
---

# Configurar gravação por evento

A reCamera Pro oferece suporte à gravação de vídeo acionada por regras. Na interface Web, clique em **Recording Settings** no menu à esquerda e depois em **Recording Configuration**.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_gejZVIuI5B.png" />

A página possui quatro módulos:

- **Recording Configuration** — regras de acionamento, formato de vídeo, agenda de gravação
- **Storage Management** — espaço de armazenamento do dispositivo
- **File Preview** — arquivos de vídeo gravados
- **Schedule Management** — períodos de tempo em que as regras de gravação são válidas

## Formato de gravação

| Parameter | Description |
|---|---|
| Recording Format | Dados de vídeo MP4, imagem JPG ou dados de imagem original RAW |

Quando MP4 é selecionado, cada gravação tem uma duração fixa de 1 minuto.

## Métodos de acionamento

Na página de configuração de gravação, cada método de acionamento possui botões **Configure** e **Apply**. Clique em **Configure** para definir os parâmetros e depois em **Apply** para ativá-lo. O status na parte superior mostra o método de acionamento atualmente ativo, por exemplo, "Current: Sound Event Trigger".

### AI Inference Trigger

Aciona automaticamente a gravação quando os resultados de reconhecimento do modelo de IA correspondem às suas condições.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_TmHQB024iW.png" />

| Configuration Item | Description |
|---|---|
| Inference Task | Selecione a tarefa de inferência de IA para acionar a gravação |
| Confidence Range | Faixa de limiar de confiança para os resultados de reconhecimento de IA |
| Category Filter | Categorias de alvo para acionar a gravação (por exemplo, Person, Vehicle, Hardhat) |
| Trigger Area | Região poligonal da tela para acionamento; por padrão é todo o quadro |

{/* TODO(verify): confirm whether multiple trigger methods can be active simultaneously or are mutually exclusive */}

### Scheduled Trigger

Aciona a gravação em intervalos de tempo fixos.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_uzhd2b91Fx.png" />

| Configuration Item | Description |
|---|---|
| Trigger Interval | Intervalo de tempo em segundos |

:::note
**Scheduled Trigger** dispara a gravação em um intervalo fixo. **Schedule Management** (abaixo) controla *quando* qualquer gatilho tem permissão para disparar. São recursos independentes.
:::

### GPIO Trigger

Aciona a gravação por meio de sinais de hardware externos.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_tLth7eTsfP.png" />

| Configuration Item | Description |
|---|---|
| GPIO Pin Name | Selecione o pino GPIO |
| Pin State | Estado padrão do pino, por exemplo, flutuante |
| Trigger Signal | Nível de acionamento, por exemplo, nível alto |
| Debounce Duration | Tempo de debounce em milissegundos |

Adequado para integração com sensores externos, botões, contatos magnéticos de porta, sensores PIR ou relés.

### Serial Trigger

Aciona a gravação por meio de comandos seriais.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_RS8p10rmUL.png" />

| Configuration Item | Description |
|---|---|
| Serial Port Name | Porta serial a ser monitorada, por exemplo, ttyS4 |
| Trigger Command | Comando serial para acionar a gravação |

Adequado para integração com controladores externos, MCUs ou equipamentos industriais.

### HTTPS Trigger

Aciona a gravação por meio de requisições de rede. A página exibe o endereço de acionamento HTTPS que sistemas externos podem chamar.

Adequado para integração com plataformas de terceiros, sistemas de alarme ou scripts de automação.

{/* TODO(verify): document the exact HTTPS trigger URL format, authentication method, and request body schema */}

### Loop Trigger

Gravação contínua ou cíclica para monitoramento 24 horas ou aquisição contínua de dados.

### Sound Event Trigger

Aciona a gravação com base em eventos de áudio reconhecidos pelo modelo de som.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_7a3c7kZ2np.png" />

| Configuration Item | Description |
|---|---|
| Sound Category Filter | Categorias de som para acionar a gravação |
| Continuous Activity Window | Duração necessária de atividade contínua (ms) |
| Confidence Range | Limiar de confiança para reconhecimento de som |

Para treinar modelos de som personalizados, consulte [Train a Sound Model](/pt-br/recamera_pro_acoustic_lab_usage/).

## Schedule Management

Defina os períodos de validade das regras de gravação usando uma grade semanal (dia × hora). Clique ou arraste as células para selecionar os períodos.

| Shortcut | Description |
|---|---|
| Weekdays (9 AM – 6 PM) | Horário comercial diurno |
| Night (6 PM – 6 AM) | Gravação noturna |
| All Day (24 Hours) | Gravação o dia todo |
| Clear | Limpar períodos selecionados |

## Páginas relacionadas

- [Encontrar gravações e armazenamento](/pt-br/recamera_pro_storage/)
- [Train a Sound Model](/pt-br/recamera_pro_acoustic_lab_usage/)
- [Acionar captura por som](/pt-br/recamera_pro_sound_trigger/)
- [Acionar captura a partir de dispositivos externos](/pt-br/recamera_pro_uart_usage/)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte e garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
