---
description: Compare os quatro caminhos de desenvolvimento para o reCamera Pro — Web API, desenvolvimento com SDK nativo, agentes de codificação com IA e a imagem experimental Debian 13 — e escolha o mais adequado para o seu projeto.
title: Escolha um Caminho de Desenvolvimento
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - Web API
  - RKNN
  - Edge AI
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_dev_path
sku: 10003420
sidebar_position: 1
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_dev_path/
---

# Escolha um Caminho de Desenvolvimento

O reCamera Pro (Rockchip RV1126B, Linux aarch64) oferece várias maneiras de criar sua própria aplicação, desde configuração sem código até desenvolvimento nativo completo. Esta página ajuda você a escolher o ponto de partida certo.

## Comparação dos Caminhos

| Caminho | Melhor para | Habilidade necessária | Por onde começar |
| --- | --- | --- | --- |
| Apps sem código via WebUI | Fluxos de detecção, gravação e alertas configurados no navegador | Nenhuma | [Crie Seu Próprio App](/pt-br/recamera_pro_ai_inference/) |
| Web API | Integrar um dispositivo existente ao seu próprio backend ou script | Noções básicas de HTTP/JSON | [Introdução à API](/pt-br/recamera_pro_api_introduction/) |
| SDK nativo (C/C++ + RKNN) | Aplicações de IA personalizadas no dispositivo com controle total | C/C++, cross-compilation | [SDK e Aplicação Minimalista](/pt-br/recamera_pro_sdk_setup/) |
| Agentes de codificação com IA | Criar aplicações nativas por meio de conversas em linguagem natural com Codex, Claude Code, Copilot, Cursor ou Gemini CLI | Prompting; o agente cuida dos detalhes da toolchain | [Desenvolva com Agentes de Codificação com IA](/pt-br/recamera_pro_development_cpp_skill/) |
| Debian 13 experimental | Usuários que precisam de `apt`, CMake ou Docker diretamente no dispositivo | Administração Linux | [Imagem Debian 13 Experimental](/pt-br/recamera_pro_debian/) |

## Apps Sem Código via WebUI

O firmware Buildroot padrão vem com uma interface web para inferência de IA, gravação de eventos e saídas de alerta (MQTT, HTTP, porta serial). Se o seu projeto puder ser expresso como "detectar isto, depois gravar ou notificar", configure-o primeiro na WebUI — nenhum código é necessário. Consulte a seção Crie Seu Próprio App deste wiki.

## Web API

O dispositivo expõe uma Web API baseada em HTTP para informações do dispositivo, configuração do sistema, gerenciamento de rede, controle de áudio/vídeo, inferência de IA, gerenciamento de arquivos e atualizações de firmware.

| Item | Descrição |
| --- | --- |
| Protocolo | HTTP ou HTTPS |
| Caminho base | `/cgi-bin/entry.cgi` (a maioria dos endpoints); `/api/v1/...` para endpoints de porta serial e arquivos |
| Content Type | `application/json` |
| Autenticação | Token JWT via Cookie |

Escolha este caminho quando um sistema externo (serviço backend, hub de automação residencial, script) precisar controlar o dispositivo ou ler dados dele. Comece com a [Introdução à API](/pt-br/recamera_pro_api_introduction/) e o [Guia Rápido](/pt-br/recamera_pro_api_quick_start/).

## SDK Nativo (C/C++ + RKNN)

Para aplicações de IA personalizadas no dispositivo, o contrato-alvo é:

| Item | Configuração suportada |
| --- | --- |
| SoC | Rockchip RV1126B |
| Arquitetura alvo | Linux aarch64 |
| Formato de modelo | Entrada ONNX, saída RKNN |
| RKNN Toolkit | RKNN-Toolkit2 2.3.2 |
| RKNN Runtime | 2.3.2 |
| Framework de câmera | GStreamer |
| Linguagem da aplicação nativa | C/C++ |

Você faz cross-compilation em um host Linux (ou WSL) contra um sysroot compatível com o reCamera Pro e implanta o binário mais os modelos RKNN no dispositivo. Consulte [SDK e Aplicação Minimalista](/pt-br/recamera_pro_sdk_setup/) para configuração do ambiente e um exemplo completo, e [Desenvolvimento de Câmera, Áudio e Inferência](/pt-br/recamera_pro_media_dev/) para detalhes do pipeline de mídia.

:::note
Esta plataforma é específica para **reCamera Pro com o SoC RV1126B e Linux aarch64**. Ela não é compatível com a plataforma reCamera SG2002/riscv64.
:::

## Agentes de Codificação com IA

A [reCamera Pro Development Skill](https://github.com/Seeed-Projects/recamera-pro-development-skill) empacota o mesmo conhecimento de desenvolvimento nativo — conversão de modelos, cross-compilation, câmera, áudio, GStreamer e orientações de RTSP, além de um template de aplicação em C++ — para agentes de codificação com IA. Se você prefere descrever uma aplicação em linguagem natural e deixar que um agente conduza a toolchain, comece com [Desenvolva com Agentes de Codificação com IA](/pt-br/recamera_pro_development_cpp_skill/).

## Imagem Debian 13 Experimental

Uma imagem Debian 13 fornecida pela comunidade substitui o sistema Buildroot padrão e oferece `apt`, CMake e Docker diretamente no dispositivo. A câmera, o microfone, o alto-falante e o Wi-Fi funcionam com os drivers de fábrica da Seeed; Bluetooth não é suportado, e o adaptador de rede virtual USB-C original não está disponível.

:::warning
O firmware Debian 13 é experimental. A Seeed não o mantém neste momento; ele é fornecido como uma opção adicional de desenvolvimento. Consulte [Imagem Debian 13 Experimental](/pt-br/recamera_pro_debian/) para detalhes de gravação e recuperação.
:::

{/* TODO(verify): confirmar quais recursos do firmware padrão (WebUI, serviços de IA do fornecedor, atualização OTA) são perdidos quando a imagem Debian 13 é gravada, e documentar o caminho oficial de retorno ao firmware de fábrica */}

## Guia de Decisão

- **"Quero alertas/gravações baseados em um modelo pré-treinado ou personalizado"** → WebUI, mais [Use Seu Próprio Modelo](/pt-br/recamera_pro_model_path/) se você precisar de um detector personalizado.
- **"Quero que meu backend controle o dispositivo"** → Web API.
- **"Quero uma aplicação totalmente personalizada no dispositivo"** → SDK nativo, opcionalmente conduzido por um agente de codificação com IA.
- **"Quero um computador Linux de uso geral com câmera"** → Debian 13 experimental.

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diversos tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos múltiplos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
