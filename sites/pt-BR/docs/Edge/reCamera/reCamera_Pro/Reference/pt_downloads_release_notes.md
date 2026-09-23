---
description: Todos os downloads oficiais do reCamera Pro em um só lugar — imagens de firmware, ferramentas de gravação, drivers, toolkits de conversão e recursos de desenvolvimento.
title: Downloads e Notas de Lançamento
keywords:
  - reCamera
  - reCamera Pro
  - download
  - firmware
  - Debian 13
  - notas de lançamento
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_downloads
sku: 10003420
sidebar_position: 5
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_downloads/
---

# Downloads e Notas de Lançamento

Esta página reúne todos os downloads e recursos externos mencionados na documentação do reCamera Pro, com links para o guia que os utiliza.

## Firmware

| Item | Onde obter | Guia |
| --- | --- | --- |
| Atualizações de firmware padrão | Via Web UI: **Device Info → System Settings** mostra a versão atual do firmware e oferece atualizações; restauração de fábrica e reinicialização também estão disponíveis ali | [Rede, Hora e Acesso](/pt-br/recamera_pro_device_info/), [Atualização e Recuperação de Firmware](/pt-br/recamera_pro_firmware_update/) |
| Imagem experimental Debian 13 | [recamera_pro_debian13_v1.0.0.tar.gz](https://github.com/yyling0101-a11y/reCamere_pro_debian_img/releases/download/v1.0.0/recamera_pro_debian13_v1.0.0.tar.gz) | [Imagem Experimental Debian 13](/pt-br/recamera_pro_debian/) |

<!-- TODO(verify): add the official stock firmware image download location (if publicly distributed) and the current firmware version/changelog; the Web UI update path is currently the only documented method. -->

## Ferramentas de gravação (Debian 13 / recuperação)

| Item | Download | Observações |
| --- | --- | --- |
| Driver USB para Windows | [DriverAssistant_v5.12.zip](https://drive.google.com/file/d/1_Efm8nJlQivU2F7BgVokVPfGUl12fI6E/view?usp=drive_link) | Necessário antes de gravar a partir do Windows |
| Ferramenta de gravação para Windows | [SocToolKit-window.zip](https://drive.google.com/file/d/1wFMHF_KSm…utDP-DPQ_NONp/view?usp=drive_link) | Usada com o dispositivo em modo Loader |
| Ferramentas de gravação para Linux | [rkbin](https://github.com/rockchip-linux/rkbin.git) e [Linux_Upgrade_Tool](https://github.com/vicharak-in/Linux_Upgrade_Tool.git) | Clonadas durante o procedimento de gravação no Linux |

Procedimento completo de gravação (Windows e Linux, entrada em modo Loader, ordem das partições): [Imagem Experimental Debian 13](/pt-br/recamera_pro_debian/). Recuperação de um dispositivo que não inicializa mais: [Atualização e Recuperação de Firmware](/pt-br/recamera_pro_firmware_update/).

## Conversão de modelos e ferramentas de IA

| Item | Download | Guia |
| --- | --- | --- |
| RKNN-Toolkit2 2.3.2 (conversão no host, x86_64) | [airockchip/rknn-toolkit2 releases](https://github.com/airockchip/rknn-toolkit2) — escolha o wheel que corresponde à sua versão do CPython em `packages/x86_64` | [Converter e Quantizar Modelos](/pt-br/recamera_pro_rknn_model_conversion/) |
| SenseCraft (ONNX→RKNN baseado em navegador) | Acessado pela Web UI: **AI Inference → View SenseCraft Models** | [SenseCraft ONNX-to-RKNN](/pt-br/recamera_pro_sensecraft/) |
| model-inspect (inspeção de contrato ONNX) | `pip install model-inspect-tool` | [Converter e Quantizar Modelos](/pt-br/recamera_pro_rknn_model_conversion/) |

Regra de alinhamento de versão: a versão do Toolkit deve corresponder ao RKNN Runtime fornecido pelo firmware do reCamera Pro (atualmente 2.3.2).

## Recursos de desenvolvimento

| Item | Download | Guia |
| --- | --- | --- |
| reCamera Pro Development Skill (para agentes de codificação com IA) | [Seeed-Projects/recamera-pro-development-skill](https://github.com/Seeed-Projects/recamera-pro-development-skill) | [Desenvolver com Agentes de Codificação com IA](/pt-br/recamera_pro_development_cpp_skill/) |
| Ultralytics (exportação direta YOLO→RKNN) | `pip install ultralytics` no ambiente do Toolkit | [Converter e Quantizar Modelos](/pt-br/recamera_pro_rknn_model_conversion/) |
| Página do produto | [reCamera Pro (2GB)](https://www.seeedstudio.com/reCamera-Pro-2GB.html) | — |

Escolhendo entre Web UI, SDK nativo e desenvolvimento completo em Debian: [Escolha Seu Caminho de Desenvolvimento](/pt-br/recamera_pro_dev_path/).

## Notas de lançamento

| Versão | Data | Destaques |
| --- | --- | --- |
| Imagem Debian 13 v1.0.0 | — | Primeira imagem pública experimental do Debian 13 para reCamera Pro |

<!-- TODO(verify): obtain the official firmware release history (version, date, changes) from the product team and populate this table; also record the Debian v1.0.0 release date. -->

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
