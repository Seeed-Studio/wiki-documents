---
description: Implante um modelo de som treinado e configure gatilhos de eventos sonoros no reCamera Pro para capturar fotos ou gravações automaticamente.
title: Disparar Captura por Som
keywords:
  - reCamera
  - reCamera Pro
  - sound trigger
  - acoustic lab
  - recording
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_sound_trigger
sku: 10003420
sidebar_position: 9
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_sound_trigger/
---

# Disparar Captura por Som

Após treinar um modelo de som (veja [Treinar um Modelo de Som](/pt-br/recamera_pro_acoustic_lab_usage/)), faça o deploy e configure gatilhos de eventos sonoros para capturar fotos ou gravações automaticamente quando sons específicos forem detectados.

## Fazer o deploy do modelo

1. No Acoustic Lab, encontre a opção **Deploy** na parte inferior da interface.
2. Na lista **MODELS**, selecione o modelo treinado e faça o deploy.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Model_Deploy.png" /></div>

## Configurar gatilho de evento sonoro

1. Volte para a interface principal da Web UI → **Record Settings** → **Recording Configuration**.
2. Encontre a opção **Sound Event Trigger** e clique em **Configure**.
3. Selecione as categorias de som que você deseja usar para disparar a gravação.
4. Clique em **Confirm** para aplicar.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Choice_Trigger.png" /></div>

### Itens de configuração

| Item de Configuração | Descrição |
|---|---|
| Filtro de Categoria de Som | Categorias de som para disparar a gravação |
| Janela de Atividade Contínua | Duração necessária de atividade contínua (ms) |
| Faixa de Confiança | Limite de confiança para reconhecimento de som |

{/* TODO(verify): confirm default confidence threshold and whether continuous activity window is required or optional */}

## Casos de uso típicos

- Detecção de som anormal (vidro quebrando, alarme, falha de máquina)
- Disparo por comando de voz (por exemplo, "help", "stop")
- Reconhecimento de som de status de equipamento
- Monitoramento ambiental

## Páginas relacionadas

- [Treinar um Modelo de Som](/pt-br/recamera_pro_acoustic_lab_usage/)
- [Configurar Gravação de Eventos](/pt-br/recamera_pro_record_settings/)
- [Encontrar Gravações e Armazenamento](/pt-br/recamera_pro_storage/)

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
