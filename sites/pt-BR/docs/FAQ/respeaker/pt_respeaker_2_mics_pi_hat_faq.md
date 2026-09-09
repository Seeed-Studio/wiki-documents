---
title: reSpeaker 2-Mics Pi HAT V2.0 FAQ
description: Perguntas frequentes sobre o endereço I2C do codec V2.0 e o uso de hardware para o reSpeaker 2-Mics Pi HAT V2.0.
slug: /respeaker_2_mics_pi_hat_faq
last_update:
  date: 9/2/2026
  author: ray
keywords:
  - reSpeaker 2-Mics Pi HAT FAQ
  - reSpeaker 2-Mics Pi HAT V2.0
  - TLV320AIC3104
  - codec I2C address
---

<div class="respeaker-faq-page">

# reSpeaker 2-Mics Pi HAT V2.0 FAQ

Esta página contém respostas verificadas para o reSpeaker 2-Mics Pi HAT V2.0. Cada resposta indica a variante do produto e o modo de firmware ao qual se aplica, juntamente com a data em que foi verificada pela última vez em relação às fontes oficiais atuais.

## Antes de começar

- Confirme a variante exata do produto e o modo de firmware (USB ou I2S) em que o dispositivo está sendo executado.
- Verifique a versão atual do firmware antes de aplicar etapas específicas de versão.
- As respostas nesta página foram verificadas pela última vez em 2026-09-01; verifique novamente as fontes oficiais vinculadas se você estiver lendo isto posteriormente.

<!-- RESPEAKER_FAQ_AUTO_START -->
## Problemas de hardware {#hardware-issues}

### Qual é o endereço I2C do codec no ReSpeaker 2-Mics Pi HAT V2.0? {#v2-codec-i2c-address}

**Aplica-se a:** ReSpeaker 2-Mics Pi HAT V2.0 apenas; a V1.x usa hardware de codec diferente

**Última verificação:** 2026-09-01

O ReSpeaker 2-Mics Pi HAT V2.0 usa um codec TLV320AIC3104 no endereço I2C de 7 bits `0x18`. A device-tree overlay oficial da V2.0 declara `tlv320aic3104@18` com `reg = <0x18>`, e o esquema público da V2.0 identifica o mesmo codec.

**Pré-requisitos:**

- Confirme que a placa é V2.0 com o guia oficial de revisão de hardware
- Use o driver e a device-tree overlay específicos da revisão V2.0

1. Siga o guia oficial do Raspberry Pi para a V2.0 para instalar `respeaker-2mic-v2_0-overlay.dtbo`.
2. Verifique se a overlay V2.0 declara o codec no endereço de 7 bits `0x18`.
3. Reinicie e use `arecord -l` ou `aplay -l` para confirmar que o dispositivo de som `tlv320aic3x-hifi` é associado com sucesso.

**Critérios de sucesso:**

- A overlay V2.0 é carregada e a placa de som baseada em TLV320AIC3104 aparece na lista de dispositivos ALSA

**Observações:**

- Não copie este endereço para o ReSpeaker 2-Mics Pi HAT V1.x, que usa hardware de codec diferente.
- O endereço por si só não é um guia completo ou suportado de fiação e inicialização de codec para ESP32-S3.

**Referências:**

- [Guia Raspberry Pi do ReSpeaker 2-Mics Pi HAT V2.0](https://wiki.seeedstudio.com/pt-br/respeaker_2_mics_pi_hat_raspberry_v2/)
- [Device-tree overlay oficial Raspberry Pi V2.0](https://github.com/Seeed-Studio/seeed-linux-dtoverlays/blob/master/overlays/rpi/respeaker-2mic-v2_0-overlay.dts)
- [Esquema oficial do ReSpeaker 2-Mics Pi HAT V2.0](https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/202004059_ReSpeaker-2-Mics-Pi-HAT-V2.0_SCH_PDF_241121.pdf)

<!-- RESPEAKER_FAQ_AUTO_END -->

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

</div>
