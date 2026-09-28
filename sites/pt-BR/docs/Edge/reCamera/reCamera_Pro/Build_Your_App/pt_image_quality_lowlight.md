---
description: Configure o codificador do fluxo principal e do subfluxo, ajuste brilho, exposição e comutação dia/noite para obter uma imagem utilizável em baixa luminosidade na reCamera Pro.
title: Qualidade de imagem e baixa luminosidade
keywords:
  - reCamera
  - reCamera Pro
  - qualidade de imagem
  - baixa luminosidade
  - exposição
  - dia noite
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_image_quality
sku: 10003420
sidebar_position: 2
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_image_quality/
---

# Qualidade de imagem e baixa luminosidade

Use a interface Web para ajustar como a reCamera Pro codifica o vídeo e como a imagem aparece — incluindo o comportamento em baixa luminosidade e dia/noite. Todas as configurações estão na página de visualização ao vivo: a janela de pré-visualização fica à esquerda e a área de configuração à direita.

## Configurações básicas: codificação de vídeo

Em **Configurações básicas** você configura separadamente os parâmetros de codificação do fluxo principal e do subfluxo.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_5SsPulbjjc.jpg" />

| Parâmetro | Descrição |
|---|---|
| Resolução | Resolução de saída de vídeo, por exemplo 1920×1080 (1080P) |
| Formato de codificação | Codec de vídeo, por exemplo H.264 |
| Taxa de quadros (FPS) | Taxa de quadros de vídeo, por exemplo 30 FPS |
| GOP | Intervalo de quadro-chave — com que frequência os quadros-chave são gerados |
| Modo de controle de taxa de bits | Método de controle de taxa de bits, por exemplo VBR (taxa de bits variável) |
| Taxa de bits máxima | Taxa de bits máxima do fluxo de vídeo, em Kbps |
| Qualidade da taxa de bits | Nível de qualidade de codificação |

Escolha qual fluxo configurar com base no seu cenário:

- **Fluxo principal** — pré-visualização em alta definição, armazenamento de vídeo e análise de IA.
- **Subfluxo** — pré-visualização de baixa largura de banda, visualização remota ou acesso multicanal.

Após alterar qualquer coisa, clique em **Salvar configurações de vídeo** para aplicar. Clique em **Redefinir** para restaurar ou reinserir os parâmetros.

A página também fornece os interruptores **Configurações de áudio** e **Configurações de armazenamento de áudio**, para que você possa ativar ou desativar a captura e o armazenamento de áudio conforme necessário.

## Configurações de exibição: orientação e dia/noite

As **Configurações de exibição** ajustam como a câmera renderiza a imagem.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_B1NHc7CXGa.jpg" />

| Parâmetro | Descrição |
|---|---|
| Inverter | Espelhar/inverter a imagem para corresponder à orientação de instalação |
| Rotacionar | Ângulo de rotação, por exemplo 0° |
| Padrão de vídeo | Padrão de vídeo, por exemplo PAL (50HZ) |

A comutação dia/noite é configurada na mesma página:

| Parâmetro | Descrição |
|---|---|
| Modo de comutação | Como o modo dia/noite muda, por exemplo automático |
| Sensibilidade do limite de comutação | Nível de luz que aciona a comutação |
| Tempo de histerese de comutação | Atraso antes de voltar, para evitar alternância frequente |

## Ajuste de imagem para baixa luminosidade

Na área básica de ajuste de imagem você pode selecionar um perfil e ajustar:

- Brilho
- Contraste
- Saturação
- Nitidez
- Matiz
- Modo de exposição
- Modo de ganho

Dicas práticas para baixa luminosidade:

1. Defina o **Modo de exposição** para que a câmera possa aumentar o tempo de exposição em cenas escuras; observe o desfoque de movimento em sujeitos em movimento.
2. Aumente o **Ganho** apenas o necessário — ganho alto adiciona ruído, o que também prejudica a precisão de detecção da IA.
3. Use a comutação dia/noite **automática** com um limite moderado e tempo de histerese suficiente para instalações 24/7.
4. Verifique novamente a imagem com a iluminação real da sua cena (interna, externa, contraluz, noite) em vez de julgar pela cena de teste padrão.

{/* TODO(verify): add a 0.3 lux sample frame (no fill light) captured on production firmware, and confirm recommended exposure/gain values and minimum firmware version for low-light scenes */}

Após alterar qualquer coisa, clique em **Salvar configurações de exibição** / **Salvar configuração** para aplicar.

## Páginas relacionadas

- [Pré-visualização, captura e gravação manual](/pt-br/recamera_pro_live_preview/)
- [Configurar detecção: classes, limites e taxa](/pt-br/recamera_pro_ai_inference/)
- [Assistir ao fluxo em um player externo (RTSP)](/pt-br/recamera_pro_rtsp/)

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
