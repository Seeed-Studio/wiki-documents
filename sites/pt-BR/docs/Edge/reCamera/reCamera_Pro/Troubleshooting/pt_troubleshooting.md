---
description: Problemas comuns do reCamera Pro e suas soluções — organizados por sintoma. Cobre erros de Wi‑Fi, falhas na pré-visualização de vídeo, travamentos com modelos FP16, rede via USB e restauração de fábrica.
title: Solução de problemas por sintoma
keywords:
  - reCamera
  - reCamera Pro
  - FAQ
  - troubleshooting
  - FP16
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_faqs
sku: 10003420
sidebar_position: 1
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_faqs/
---

# Solução de problemas por sintoma

Esta página agrupa problemas comuns do reCamera Pro pelo **que você vê**, para que você possa ir direto à correção. Se nenhum deles corresponder, [colete logs](/pt-br/recamera_pro_collect_logs/) e compartilhe com o suporte.

| Sintoma | Seção |
| --- | --- |
| A WebUI mostra repetidamente erros de Wi‑Fi / não consegue pré-visualizar | [1. Erros de Wi‑Fi e sem pré-visualização](#1-erros-de-wi‑fi-e-sem-pré-visualização) |
| O envio de um modelo FP16 faz a WebUI travar | [2. Envio de modelo FP16 faz a WebUI travar](#2-envio-de-modelo-fp16-faz-a-webui-travar) |
| O Windows não consegue acessar `192.168.42.1` via USB | [3. Conexão USB no Windows falha](#3-conexão-usb-no-windows-falha) |
| Acesso à Internet é perdido após conectar o USB | [4. Computador host perde a Internet via USB](#4-computador-host-perde-a-internet-via-usb) |
| O dispositivo precisa de uma redefinição completa | [5. Restauração de fábrica](#5-restauração-de-fábrica) |

---

## 1. Erros de Wi‑Fi e sem pré-visualização

**Sintoma**: a WebUI exibe repetidamente avisos de erro de conexão Wi‑Fi e não consegue mostrar a pré-visualização ao vivo.

**Solução**:

- Verifique se o dispositivo está sendo alimentado corretamente — alimentação instável é a causa mais comum.
- Se estiver alimentando pela interface Type‑C, certifique-se de que o adaptador suporta o **protocolo PD**.
- Para operação confiável, use o cabo de alimentação DC fornecido de fábrica (12 V, 3 A).
- Depois de corrigir a alimentação, verifique a conexão Wi‑Fi em **Device Info → Network Settings** e confirme que o LED verde está aceso de forma contínua antes de reabrir a pré-visualização.

## 2. Envio de modelo FP16 faz a WebUI travar

**Sintoma**: no firmware **V1.1.1 e anteriores**, o envio de um modelo com precisão FP16 faz o processo principal do sistema travar e a WebUI deixa de responder.

:::note Terminology
Este problema se aplica à quantização de modelo **FP16** (ponto flutuante de 16 bits). Alguns documentos mais antigos usavam a abreviação "FB16" — ambos se referem ao mesmo formato de quantização.
:::

**Solução** — use o método que estiver disponível:

### Opção A: Restauração de fábrica

Pressione e **mantenha pressionado o botão na lateral do dispositivo por 15 segundos** para restaurar as configurações de fábrica. O dispositivo será reiniciado com uma configuração limpa e o modelo problemático removido. Consulte [Atualização de firmware e recuperação](/pt-br/recamera_pro_firmware_update/) para o fluxo completo de redefinição.

### Opção B: Editar o arquivo de configuração via SSH

1. Conecte-se ao dispositivo via USB e faça login por SSH.
2. Abra `/userdata/config/rkipc.ini` para edição.
3. Na seção `[rc_model.0]`, altere o campo `model` para `yolox_s.rknn`.
4. Salve e reinicie o dispositivo.

{/* TODO(verify): confirm whether this freeze is fixed on firmware versions after V1.1.1, and state the first firmware version where FP16 models can be uploaded without freezing. */}

## 3. Conexão USB no Windows falha

**Sintoma**: após conectar o cabo Type‑C, `http://192.168.42.1` não carrega no navegador no Windows.

**Solução**: o adaptador de rede virtual do Windows geralmente não obteve um endereço IP automaticamente.

1. Abra **Control Panel → Network and Internet → Network and Sharing Center → Change adapter settings**.
2. Encontre o adaptador chamado algo como `Remote NDIS based Internet Sharing Device` ou relacionado ao reCamera (desconecte e reconecte para ver qual adaptador desaparece e reaparece — essa é a interface do reCamera Pro).
3. Clique com o botão direito → **Properties**.
4. Clique duas vezes em **Internet Protocol Version 4 (TCP/IPv4)**.
5. Selecione **Obtain an IP address automatically** e **Obtain DNS server address automatically**.
6. Clique em OK e tente `http://192.168.42.1` novamente.

<video
  src="https://raw.githubusercontent.com/6zsz6/seeed_wiki_video/main/reCamera-Pro-network_config.mp4"
  controls
  width="100%"
  preload="metadata">
  Seu navegador não oferece suporte à reprodução deste vídeo.
</video>

{/* TODO(verify): add equivalent steps for macOS and Linux if the USB connection exposes a network interface on those platforms too. */}

## 4. Computador host perde a Internet via USB

**Sintoma**: após conectar o reCamera ao computador via USB, o computador host não consegue acessar a Internet.

Isso acontece porque o adaptador de rede USB passa a ter prioridade na tabela de roteamento do sistema operacional. Consulte o [diagrama de solução de problemas de conexão de rede](https://wiki.seeedstudio.com/pt-br/recamera_network_connection/#erro-de-rede-do-computador) para a correção.

## 5. Restauração de fábrica

Se nada do acima se aplicar e o dispositivo ainda estiver com mau funcionamento, restaure as configurações de fábrica:

- **Hardware**: pressione e mantenha pressionado o botão lateral por **~15 segundos** até ouvir um som de aviso. Aguarde até que o LED verde permaneça aceso continuamente.
- **WebUI**: **Device Info → System Settings → Factory Reset**.

Consulte [Atualização de firmware e recuperação](/pt-br/recamera_pro_firmware_update/) para saber o que é preservado e o que é apagado.

## Outros problemas

- Problemas de RTSP, gravação ou armazenamento → [Configuração de gravação de eventos](/pt-br/recamera_pro_record_settings/) e [Encontrar gravações e armazenamento](/pt-br/recamera_pro_storage/).
- Problemas de conversão de modelo ou inferência → [Configuração de inferência de IA](/pt-br/recamera_pro_ai_inference/); para modelos personalizados veja [Escolher um caminho de implantação de modelo](/pt-br/recamera_pro_model_path/).
- Falhas em chamadas de API → [Solução de problemas de API](/pt-br/recamera_pro_api_faq/) (marcador de posição B4 / T3).

{/* TODO(verify): cross-reference RTSP/recording/storage and API troubleshooting issues from real support tickets once T3 (api_troubleshooting.md) lands. */}

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
