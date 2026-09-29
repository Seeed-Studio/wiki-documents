---
description: Ligue a reCamera Pro, faça login na interface Web, inicie a visualização ao vivo e confirme seu primeiro resultado de detecção de IA — o caminho mais rápido da abertura da caixa até uma câmera de IA em funcionamento.
title: 'Início Rápido: Veja Sua Primeira Detecção de IA'
keywords:
  - reCamera
  - reCamera Pro
  - Edge AI
  - início rápido
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_getting_started
sku: 10003420
sidebar_position: 1
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_getting_started/
---

# Início Rápido: Veja Sua Primeira Detecção de IA

Este guia leva você de uma reCamera Pro recém-retirada da caixa até uma visualização de vídeo ao vivo com resultados de detecção de IA, em cerca de 10 minutos:

1. [Conecte o hardware](#1-conecte-o-hardware)
2. [Faça login na interface Web](#2-faça-login-na-interface-web)
3. [Inicie a visualização ao vivo](#3-inicie-a-visualização-ao-vivo)
4. [Confirme que a detecção de IA está funcionando](#4-confirme-que-a-detecção-de-ia-está-funcionando)

{/* TODO(verify): add a "detection success" screenshot showing the live preview with a bounding box overlaid on a person, and confirm which model ships preloaded on current firmware and which firmware versions this first-login flow applies to. */}

## 1. Conecte o hardware

Antes de começar, certifique-se de que você tem:

- **Fonte de alimentação**: o cabo de alimentação DC (especificação: **12 V, 1 A** no mínimo; a fonte de alimentação de fábrica é 12 V, 3 A).
- **Cabo de dados**: um cabo USB Type-C que suporte **transferência de dados** (não apenas carregamento), para a conexão direta inicial ao seu computador.

Etapas de conexão:

1. Conecte o cabo de alimentação DC de 12 V na interface de alimentação do dispositivo. Conecte uma ponta do cabo USB Type-C à reCamera Pro e a outra ponta ao seu computador (host Windows mostrado abaixo).
2. Observe o indicador de status: quando o **LED verde estiver aceso de forma contínua**, o dispositivo terá concluído a inicialização.

![Diagrama da luz de status do sistema e conexão de cabos](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/en_hardware_line.png)

### Referência do indicador de status

O LED verde mostra o status do sistema; o LED vermelho é o indicador de alimentação.

| Estado do LED verde | Significado |
| --- | --- |
| Respirando | O dispositivo está ligando |
| Aceso continuamente | O dispositivo está funcionando normalmente |
| Apagado | Estado anormal — o processo principal não está em execução |
| Piscar a cada 100 ms | Atualização OTA em andamento |
| Piscar curto | Foi detectado um cartão SD com sistema de arquivos sujo |

## 2. Faça login na interface Web

A reCamera Pro possui uma interface Web integrada — nenhum software cliente precisa ser instalado. Com o cabo USB conectado, seu computador acessa o dispositivo diretamente em seu endereço padrão.

:::note
Certifique-se de que o cabo USB Type-C esteja conectado corretamente e que o LED verde esteja aceso de forma contínua antes de fazer login.
:::

1. Abra um navegador no seu computador (Chrome ou Edge recomendados).
2. Acesse o endereço IP padrão: `http://192.168.42.1`.
3. **Primeiro login**: a senha inicial é `recamera`. Você será solicitado a definir uma nova senha — insira-a e, em seguida, faça login com o nome de usuário `admin` e sua nova senha.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/img_v3_0213c_17e852c5-c73f-4a05-8ede-e02e2c7be6dg.png" />

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_a6gnjmMqnt.png" />

4. Após o login, você chega na interface principal (a página de **Visualização em tempo real** por padrão).

![Diagrama de login Web e interface principal](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/web_login.png)

:::tip Não consegue acessar 192.168.42.1 no Windows?
Se a página não carregar, geralmente o adaptador de rede virtual do Windows não obteve um endereço IP automaticamente. Consulte [Solucionar problemas por sintoma](/pt-br/recamera_pro_faqs/) para a correção passo a passo do adaptador.
:::

:::info Quer usar sem fio?
A conexão USB é necessária apenas para a primeira configuração. Para gerenciar o dispositivo pela sua rede local, siga [Acessar o dispositivo via Wi-Fi](/pt-br/recamera_pro_wifi_access/).
:::

## 3. Inicie a visualização ao vivo

Na página de **Visualização em tempo real**, clique em **Start** para iniciar a reprodução. Você deverá ver o vídeo ao vivo da câmera no seu navegador — use isso para apontar a câmera, ajustar a lente e confirmar a qualidade da imagem.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/2026-07-08 181849.png" />

A página de visualização também oferece suporte a tirar fotos, gravação manual e alternância entre o fluxo principal e o subfluxo. Detalhes: [Visualização, captura e gravação manual](/pt-br/recamera_pro_live_preview/).

## 4. Confirme que a detecção de IA está funcionando

A visualização ao vivo por si só apenas comprova que o caminho de vídeo funciona. Para confirmar o caminho de **detecção de IA**, execute a tarefa de inferência e observe sua saída:

1. Abra **AI Inference** na barra de navegação à esquerda.
2. Em **Inference Configuration**, certifique-se de que **Inference Enable** esteja ativado, selecione o modelo em execução (um modelo de detecção vem pré-carregado no dispositivo) e clique em **Save Configuration**.
3. Verifique se **Inference Status** mostra **Running** e se o FPS em tempo real é diferente de zero.
4. Observe a área de **Real-time Inference Monitoring**: quando um alvo aparecer no campo de visão, os resultados de detecção serão exibidos como logs com os campos `class_name`, `score`, `bbox` e `detection_count`.

**Como verificar**: fique em frente à câmera (ou segure a imagem de um telefone/pessoa). Em um ou dois segundos você deverá ver entradas como `class_name: person` com um `score` de confiança — e uma caixa delimitadora desenhada na visualização. Se os resultados aparecerem, sua primeira detecção de IA está confirmada.

A referência completa de configuração de inferência (seleção de modelo, categorias de detecção, limites de confiança/IOU, frequência de inferência, controles de monitoramento) está na [página de configuração de AI Inference](/pt-br/recamera_pro_ai_inference/).

{/* TODO(verify): confirm the exact preloaded model name shown in Running Model on current shipping firmware, and capture a screenshot of Real-time Inference Monitoring with a person detection. */}

## Próximas etapas

- [Primeira tarefa: detectar e gravar](/pt-br/recamera_pro_first_recording/) — transforme uma detecção em uma gravação de evento e reproduza-a.
- [Acessar o dispositivo via Wi-Fi](/pt-br/recamera_pro_wifi_access/) — desconecte o cabo USB e gerencie o dispositivo sem fio.
- [Checklist pré-implantação](/pt-br/recamera_pro_deploy_checklist/) — antes de instalar o dispositivo em campo.

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
