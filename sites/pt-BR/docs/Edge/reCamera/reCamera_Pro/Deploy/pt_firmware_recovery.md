---
description: Verifique a versão do firmware, atualize o firmware da reCamera Pro, reinicie o sistema e recupere um dispositivo com restauração de fábrica (botão ou interface Web).
title: Atualização de Firmware e Recuperação
keywords:
  - reCamera
  - reCamera Pro
  - firmware update
  - factory reset
  - recovery
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_firmware_update
sku: 10003420
sidebar_position: 4
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_firmware_update/
---

# Atualização de Firmware e Recuperação

Esta página aborda as operações de ciclo de vida em **Device Info → System Settings**: verificar a versão do firmware, atualizar o firmware, reiniciar o sistema — e o caminho de recuperação quando o dispositivo se comporta de forma anormal: restauração de fábrica.

:::caution Antes de começar
Exporte um [backup de configuração](/pt-br/recamera_pro_backup_restore/) e registre a versão atual do firmware antes de qualquer atualização ou redefinição. Mantenha o dispositivo em uma fonte de energia estável o tempo todo — uma atualização interrompida pode deixar o dispositivo sem possibilidade de inicialização.
:::

## Verificar a versão atual do firmware

Abra **Device Info → System Settings**: a página mostra a versão atual do firmware do dispositivo (versões básicas de hardware/software também aparecem em [Informações Básicas](/pt-br/recamera_pro_device_info/#informações-básicas)). Registre essa versão na sua lista de ativos — suporte e relatórios de bugs sempre precisam dela.

{/* TODO(verify): add a screenshot of System Settings highlighting the firmware version field, and document where official firmware packages are published (download page / release notes) and how version numbers map to releases. */}

## Atualizar o firmware

Em **Device Info → System Settings**, escolha se deseja atualizar para um novo firmware e siga o fluxo exibido na tela. Durante uma atualização over-the-air o LED de status verde **pisca a ~100 ms** — não desligue o dispositivo nesse estado. Quando a atualização for concluída e o dispositivo reiniciar, o LED voltará a ficar verde contínuo.

Após a atualização:

1. Verifique novamente a versão do firmware em System Settings para confirmar que a nova versão está em execução.
2. Confirme que o dispositivo ainda detecta e grava conforme o esperado (os itens 5–6 da [lista de verificação pré-implantação](/pt-br/recamera_pro_deploy_checklist/) são um bom teste rápido).
3. Se você importou uma configuração de uma versão mais antiga, execute novamente as [etapas de verificação da restauração](/pt-br/recamera_pro_backup_restore/#verificar-uma-restauração).

{/* TODO(verify): document the exact update flow on current firmware — whether updates are pulled OTA from the Internet, uploaded as a package, or both; what data is preserved across an update (settings, uploaded models, recordings); and the failure-recovery path if an update is interrupted. */}

## Reiniciar o sistema

System Settings também oferece uma **reinicialização** remota. Use-a após importações de configuração, alterações de rede ou para limpar um serviço travado. O dispositivo reinicia e deve voltar a um LED verde contínuo dentro do seu tempo normal de inicialização.

## Recuperação: restauração de fábrica

Se o dispositivo estiver travado, inacessível com a senha configurada ou se comportando de forma anormal após uma atualização, restaure as configurações de fábrica. Há dois métodos:

### Método 1: botão físico

Pressione e **mantenha pressionado o botão lateral por cerca de 15 segundos** até ouvir um som de aviso — o dispositivo entrou no modo de redefinição. Aguarde até que o LED de status verde permaneça aceso continuamente e, em seguida, faça login novamente (o fluxo de primeiro login com a senha inicial se aplica, como em um novo dispositivo).

### Método 2: Interface Web

Clique em **Device Info → System Settings → Factory Reset**.

![Diagrama de restauração de fábrica](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera-Pro_reset_Device.jpg)

:::warning Uma restauração de fábrica retorna o dispositivo ao estado de saída de fábrica
As configurações são apagadas — planeje reimportar seu [backup de configuração](/pt-br/recamera_pro_backup_restore/) depois e, em seguida, reverifique o acesso à rede, horário e detecção.

{/* TODO(verify): state exactly what a factory reset preserves vs wipes on current firmware (recorded media on SD/eMMC, uploaded model files, Wi-Fi credentials, admin password), and whether the button-reset prompt sound/15 s timing is unchanged. */}
:::

## Se o dispositivo não inicializar de forma alguma

- Verifique primeiro a alimentação: LED verde apagado significa que o processo principal não está em execução; um breve piscar verde significa que foi detectado um cartão SD com sistema de arquivos sujo — recoloque ou reformate o cartão SD.
- Um LED em modo “respiração” que nunca fica contínuo significa que a inicialização está travada — desligue e ligue o dispositivo e, em seguida, tente a restauração de fábrica pelo botão.
- Referência de estado do LED: [início rápido, indicador de status](/pt-br/recamera_pro_getting_started/#referência-do-indicador-de-status). Sintomas adicionais: [Solucionar problemas por sintoma](/pt-br/recamera_pro_faqs/).

{/* TODO(verify): confirm the last-resort recovery path (e.g. re-flashing factory system image over USB/SD) for a device that does not respond to button reset, and link the official recovery material once identified. */}

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
