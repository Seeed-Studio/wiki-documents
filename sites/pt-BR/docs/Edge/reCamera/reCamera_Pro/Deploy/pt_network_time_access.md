---
description: Configure como a reCamera Pro se comporta na sua rede na operação diária — horário do sistema, acesso SSH/HTTP, taxa de baud serial e a senha de administrador.
title: Rede, horário e controle de acesso
keywords:
  - reCamera
  - reCamera Pro
  - network settings
  - SSH
  - time settings
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_device_info
sku: 10003420
sidebar_position: 2
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_device_info/
---

# Rede, horário e controle de acesso

A área **Device Info** da interface Web cobre as configurações que determinam como uma reCamera Pro implantada se comporta na sua rede: seu relógio, quais serviços de acesso remoto estão abertos e quem pode fazer login. A conexão Wi‑Fi pela primeira vez está em [Access the device over Wi-Fi](/pt-br/recamera_pro_wifi_access/); esta página trata da **configuração de longo prazo** depois que o dispositivo já está na sua rede.

Device Info também informa versões de hardware/software e uso de recursos — veja [Basic information](#basic-information) no final, e [Back up and restore](/pt-br/recamera_pro_backup_restore/) e [Firmware update and recovery](/pt-br/recamera_pro_firmware_update/) para os demais itens de System Settings.

## Time settings

O horário do sistema controla agendas de gravação, carimbos de data/hora de arquivos e entradas de log. Defina-o em **Device Info → Time Settings**.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_F3jLNlVu0W.png" />

- Verifique o relógio após cada reinicialização e depois de mover o dispositivo para uma rede sem acesso à Internet.
- Se agendas ou diretórios de gravação caírem em horários errados, verifique o horário primeiro — um relógio incorreto é a causa mais comum.

{/* TODO(verify): document whether the device syncs time via NTP automatically when connected to the Internet, which NTP servers/regions are used, and how time behaves after reboot without network. */}

## Network settings (long-term)

**Device Info → Network Settings** mostra o estado do módulo Wi‑Fi, a rede conectada e informações detalhadas de rede (clique no ponto de exclamação ao lado da rede conectada para detalhes de IP/MAC).

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_GJspvgAFdl.png" />
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_vq4u1biblp.png" />

Para uma instalação permanente:

- Reserve um IP fixo para o endereço MAC do dispositivo no seu roteador (reserva DHCP) ou registre o endereço atribuído na sua lista de ativos.
- Mantenha o dispositivo em um segmento de rede onde apenas os clientes pretendidos possam alcançar a interface Web e os serviços abertos.

## Configurações de conexão: SSH, HTTP, serial

**Device Info → Connection Settings** controla como você se conecta ao dispositivo:

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_ZH9JMcsCen.png" />

| Setting | Effect | Deployment guidance |
| --- | --- | --- |
| SSH remote connection | Ativa/desativa o acesso SSH ao sistema | Ative para desenvolvimento e manutenção; desative em dispositivos de produção para os quais você não precisa de acesso ao shell |
| HTTP settings | Configura o serviço HTTP do dispositivo | Restrinja a exposição a redes confiáveis |
| Serial port baud rate | Define a taxa de baud da porta serial | Deve corresponder ao controlador/MCU externo com o qual você integra |

:::caution Alterações de acesso entram em vigor imediatamente
Desativar SSH ou alterar configurações HTTP pode bloquear sua sessão remota atual. Mantenha a interface Web (ou a conexão direta USB em `192.168.42.1`) disponível como caminho de fallback enquanto altera as configurações de conexão.
:::

{/* TODO(verify): confirm exact HTTP settings fields exposed in Connection Settings on current firmware (port, enable switch, TLS) and document them here. */}

## Gerenciamento de senha

A senha de administrador é alterada em **Device Info → System Settings**. O login da interface Web usa o nome de usuário `admin`; a senha inicial em um dispositivo novo é `recamera` (você será solicitado a definir uma nova na primeira vez que fizer login).

- **Altere a senha padrão antes da implantação** — qualquer pessoa que conheça a senha padrão pode, caso contrário, acessar a interface Web, e o [web terminal](/pt-br/recamera_pro_terminal/) / login root via SSH (`root` / `recamera` por padrão) compartilham o estado de credenciais do dispositivo.
- Alterar a senha afeta o login na interface Web; registre onde a nova senha é armazenada.

{/* TODO(verify): confirm the exact relationship between the Web UI admin password, the root SSH/terminal password, and whether changing one changes the other, on current firmware. */}

## Basic information

**Device Info → Basic Information** mostra versões de hardware e software e uso em tempo real dos recursos do sistema — a primeira coisa que o suporte irá pedir.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_aWZqM1cZvA.png" />

Informe a versão do firmware desta página ao [atualizar o firmware](/pt-br/recamera_pro_firmware_update/) ou [coletar logs para suporte](/pt-br/recamera_pro_collect_logs/).

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
