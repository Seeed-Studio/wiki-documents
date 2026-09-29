---
description: Como coletar logs do sistema, versão de firmware e informações do dispositivo da reCamera Pro para solução de problemas ou solicitações de suporte técnico.
title: Coletar logs para suporte
keywords:
  - reCamera
  - reCamera Pro
  - logs
  - troubleshooting
  - support
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_collect_logs
sku: 10003420
sidebar_position: 2
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_collect_logs/
---

# Coletar logs para suporte

Quando [Solucionar por sintoma](/pt-br/recamera_pro_faqs/) não resolve um problema, o próximo passo é coletar logs e informações do dispositivo. O suporte solicitará:

1. **Versão do firmware e informações básicas do dispositivo** — o que o dispositivo está executando.
2. **Logs do sistema** — o que o dispositivo estava fazendo quando o problema ocorreu.
3. **Etapas para reproduzir** — como acionar o problema de forma confiável.

{/* TODO(verify): confirm whether the device or WebUI offers a one-click "export support bundle" feature on current firmware, and document it here if available. */}

## 1. Versão do firmware e informações básicas do dispositivo

Abra **Device Info** na barra de navegação à esquerda:

- **Basic Information** — informações de versão de hardware/software e uso de recursos do sistema.
- **System Settings** — versão atual do firmware.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_aWZqM1cZvA.png" />

Registre o seguinte e inclua na sua solicitação de suporte:

| Item | Onde encontrar |
| --- | --- |
| Versão do firmware | Device Info → System Settings |
| Modelo de hardware / SKU | Basic Information |
| Versões de software | Basic Information |
| Uso de recursos do sistema (CPU, memória, armazenamento) | Basic Information |

## 2. Logs do sistema

Abra **Terminal** na barra de navegação à esquerda e, em seguida, mude para a área **System Log**.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/20260708190224_6_2.png" />

A partir daqui você pode:

- Ver a saída do log do sistema em tempo real.
- Filtrar logs por nível de log ou palavras-chave.
- Limpar a exibição atual.
- **Baixar os arquivos de log** — é isso que o suporte precisa.

### O que capturar nos logs

- Reproduza o problema enquanto o log do sistema estiver sendo exibido em streaming.
- Baixe o log **imediatamente após** o problema ocorrer, para que as entradas relevantes ainda estejam no buffer.
- Se o problema for intermitente, baixe os logs após cada ocorrência e anote o carimbo de data e hora de cada evento.

## 3. Console do terminal (opcional, para usuários avançados)

O **console do Terminal** dentro de Terminal permite que você faça login no shell do sistema da reCamera Pro diretamente pela Web UI, sem uma ferramenta SSH separada.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_2dvKqObUbo.png" />

Credenciais padrão para o console do terminal:

```
Username: root
Password: recamera
```

:::caution
O console do terminal oferece acesso completo ao sistema. Execute apenas comandos que você entende e não modifique arquivos do sistema, a menos que seja orientado pelo suporte.

{/* TODO(verify): confirm whether the default terminal password is still `recamera` on current firmware, and whether changing the WebUI admin password also changes the terminal root password. */}
:::

Se você tiver [ativado o SSH](/pt-br/recamera_pro_device_info/) em Connection Settings, também poderá se conectar via SSH para coletar logs — útil se a própria WebUI não estiver respondendo.

## 4. Etapas para reproduzir

O suporte perguntará como acionar o problema. Anote:

- O que você estava fazendo quando o problema apareceu (por exemplo, enviando um modelo, iniciando uma gravação, conectando ao Wi-Fi).
- O que você esperava que acontecesse versus o que realmente aconteceu.
- Se o problema é reproduzível, intermitente ou ocorreu apenas uma vez.
- A versão do firmware e quaisquer alterações recentes (envio de modelo, importação de configuração, atualização de firmware).

## Enviando para o suporte

Uma solicitação de suporte completa inclui:

| Item | Fonte |
| --- | --- |
| Versão do firmware | Etapa 1 |
| Captura de tela das informações básicas do dispositivo | Etapa 1 |
| Arquivo de log do sistema baixado | Etapa 2 |
| Etapas para reproduzir | Etapa 4 |

Anexe esses itens ao abrir um chamado. Quanto mais completas forem as informações iniciais, mais rápida será a resolução.

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
