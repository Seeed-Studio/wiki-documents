---
description: Perguntas frequentes e dicas de solução de problemas para o Seeed Jetson DevelopTool — cobrindo gravação, SSH, VNC, compartilhamento de rede e mais.
title: FAQ
keywords:
  - reComputer
  - Jetson
  - DevelopTool
  - FAQ
  - troubleshooting
image: https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/Reference-UI.png
slug: /jetson_developtool_faq
last_update:
  date: 05/26/2026
  author: Lorraine
createdAt: '2026-05-26'
updatedAt: '2026-05-26'
url: https://wiki.seeedstudio.com/pt-br/jetson_developtool_faq/
---

## Gravação

**P: "Detect Device" não mostra nada após entrar no modo Recovery.**

- Verifique se o cabo USB-C suporta transferência de dados (não é apenas um cabo de carregamento).
- No Linux, verifique com `lsusb | grep NVIDIA`. O dispositivo deve aparecer como `NVIDIA Corp. APX`.
- No Windows, o repasse de USB via WSL2 requer `usbipd`. Execute `usbipd list` para verificar se o dispositivo aparece e, em seguida, `usbipd attach --wsl --busid <ID>` para repassá-lo.
- Tente uma porta USB diferente, de preferência USB 3.0 diretamente na placa-mãe (evite hubs).

**P: A gravação falha no meio do processo com um erro.**

- Certifique-se de que o cabo Ethernet entre o PC e o Jetson esteja conectado (alguns scripts de gravação de BSP exigem isso mesmo ao gravar via USB).
- Verifique se você tem pelo menos 20 GB de espaço livre em disco.
- Entre novamente no modo Recovery e tente outra vez. Uma única falha não danifica o dispositivo.

**P: A gravação leva mais de 15 minutos.**

- Isso é incomum. Verifique se o cabo USB está conectado a uma porta USB 3.0. USB 2.0 será significativamente mais lento.

---

## SSH / Conexão

**P: Não é possível conectar ao Jetson via SSH.**

- Verifique se o Jetson e o PC estão na mesma rede ou se o [PC Network Sharing](/pt-br/jetson_developtool_remote_development) está ativado.
- Confirme se o serviço SSH está em execução no Jetson: `sudo systemctl status ssh`
- Verifique o endereço IP — use o assistente serial do Jetson Init ou verifique a tabela DHCP do seu roteador.

**P: O SSH conecta, mas em seguida desconecta imediatamente.**

- O Jetson pode ter ficado sem memória. Verifique com `free -h` e considere ativar swap pelo módulo [Skills](/pt-br/jetson_developtool_skills).

---

## VNC / Área de trabalho remota

**P: A tela do VNC fica preta após conectar.**

- O servidor de exibição do Jetson pode não estar em execução. Tente: `sudo systemctl restart gdm3`
- Se nenhum monitor físico estiver conectado, talvez seja necessário configurar um monitor virtual em `/etc/X11/xorg.conf`.

**P: O noVNC no navegador mostra "Disconnected".**

- Confirme se o servidor VNC está em execução no Jetson: `ps aux | grep vncserver`
- Verifique se a porta 5900 (ou a porta VNC configurada) não está bloqueada por um firewall.

---

## App Market

**P: A instalação do aplicativo falha com "Docker not found".**

- Use o módulo [Skills](/pt-br/jetson_developtool_skills) para instalar o Docker primeiro ou execute: `curl -fsSL https://get.docker.com | sh`

**P: A obtenção de uma imagem Docker falha.**

- Geralmente isso é um problema de rede. Certifique-se de que o Jetson tenha acesso à internet — use [PC Network Sharing](/pt-br/jetson_developtool_remote_development) se necessário.
- Se você estiver atrás de um proxy, ative **Auto Proxy Forward** na aba PC Network Sharing.

---

## Skills

**P: Uma skill falha com erro de permissão.**

- A maioria das skills requer privilégios de `sudo`. Certifique-se de que o usuário SSH tenha sudo sem senha configurado ou digite sua senha quando solicitado no log da skill.

**P: Minha skill OpenClaw personalizada não está aparecendo.**

- Reinicie o DevelopTool depois de colocar o arquivo da skill em `skills/openclaw/`. A ferramenta carrega skills personalizadas na inicialização.

---

## Suporte técnico e discussão de produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
