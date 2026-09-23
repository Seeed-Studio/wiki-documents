---
description: Exporte a configuração do reCamera Pro para um arquivo e importe-a em outro dispositivo — o que o backup contém, como restaurar e como verificar.
title: Fazer backup e restaurar a configuração
keywords:
  - reCamera
  - reCamera Pro
  - backup
  - restaurar
  - configuração
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_backup_restore
sku: 10003420
sidebar_position: 3
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_backup_restore/
---

# Fazer backup e restaurar a configuração

O reCamera Pro pode exportar suas configurações atuais para um arquivo (um arquivo `tar`) que o seu navegador baixa e importar esse arquivo no mesmo dispositivo ou em outro. Esta é a maneira mais rápida de:

- replicar uma configuração comprovada em uma frota de dispositivos,
- se recuperar rapidamente após um [reset de fábrica ou recuperação de firmware](/pt-br/recamera_pro_firmware_update/),
- manter um snapshot conhecido e estável antes de alterar as configurações de detecção, gravação ou rede.

## Exportar um backup de configuração

1. Faça login na interface Web e abra **Device Info → System Settings**.
2. Clique em **Export Configuration**.
3. O navegador baixa automaticamente um arquivo `tar` contendo as configurações atuais. Armazene-o em um local seguro, nomeado com o dispositivo e a data (por exemplo, `recamera-frontdoor-2026-09-21.tar`).

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_eBayhpwddh.png" />

:::info O que o backup contém
O arquivo exportado contém as configurações atuais do dispositivo. Antes de depender dele, verifique no seu próprio dispositivo quais itens estão incluídos (rede, hora, conexão, senha, regras de gravação, configuração do modelo de IA, modelos de som) — e observe que arquivos de modelo enviados e vídeo gravado são dados grandes, não configurações.

{/* TODO(verify): enumerate exactly what Export Configuration includes and excludes on current firmware — network/Wi-Fi credentials, admin password, recording trigger rules and schedules, AI model configuration, uploaded .rknn model files, Sound Lab trained models, and recorded media. */}
:::

## Restaurar (importar) uma configuração

1. Abra **Device Info → System Settings** no dispositivo de destino.
2. Escolha a opção de importação e selecione um arquivo `tar` exportado anteriormente (mesma extensão de arquivo da exportação).
3. Após a importação, a configuração é carregada automaticamente e o dispositivo **reinicia**. Aguarde o término da reinicialização — as configurações importadas ficam ativas em seguida.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_4h4p6raYPF.png" />

:::caution A importação substitui as configurações atuais
A importação substitui a configuração existente do dispositivo pelo conteúdo do arquivo. Se o dispositivo de destino tiver configurações que valem a pena manter, exporte-as primeiro.

{/* TODO(verify): confirm whether import merges or fully replaces settings, and whether importing a backup from a different firmware version is supported or rejected. */}
:::

## Verificar uma restauração

Depois que o dispositivo reiniciar, confirme se a restauração realmente entrou em vigor:

- [ ] O login na interface Web funciona com a senha esperada.
- [ ] O estado da rede/Wi-Fi corresponde ao backup (o dispositivo pode se reconectar ao Wi-Fi registrado no arquivo — certifique-se de que essa rede esteja acessível no novo local).
- [ ] As configurações de hora estão corretas (veja [Rede, hora e controle de acesso](/pt-br/recamera_pro_device_info/)).
- [ ] As regras e agendas de gravação estão presentes em **Recording Settings**.
- [ ] A inferência de IA executa o modelo esperado e detecta um alvo real.

## Dicas para frota e ciclo de vida

- Exporte um backup **após cada alteração de configuração que você queira manter**, e depois de passar pela [lista de verificação pré-implantação](/pt-br/recamera_pro_deploy_checklist/).
- Para clonar um dispositivo para muitos: configure um dispositivo de referência, exporte uma vez e depois importe em cada unidade — em seguida ajuste itens por dispositivo (por exemplo, Wi-Fi, hora) conforme necessário.
- Mantenha os backups fora do dispositivo (computador ou servidor de arquivos); um backup armazenado apenas no dispositivo é perdido quando o dispositivo é redefinido ou substituído.

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
