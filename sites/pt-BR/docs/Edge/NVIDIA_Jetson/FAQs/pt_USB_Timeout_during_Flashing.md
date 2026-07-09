---
description: Erros comuns ao gravar o Jetson e como solucioná-los.
title: Erros Comuns de Gravação e Como Corrigi-los
keywords:
  - reComputer
  - Jetson
  - flashing
  - USB
  - NFS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /usb_timeout_during_flash
last_update:
  date: 3/18/2026
  author: Lorraine
createdAt: '2025-01-22'
updatedAt: '2026-03-18'
url: https://wiki.seeedstudio.com/pt-br/usb_timeout_during_flash/
---

Esta página resume várias falhas comuns ao gravar o Jetson, especialmente erros relacionados à reconexão USB, montagem NFS, problemas no ambiente do host, falta de ferramentas de gravação e configuração OEM no primeiro boot.

## Antes de Começar

Antes de solucionar um erro específico, confirme o seguinte:

1. Use sempre que possível um host físico dedicado com Ubuntu. Evite máquinas virtuais, contêineres Docker e WSL para gravação.
2. Use um cabo USB curto, de boa qualidade, que ofereça transferência de dados estável.
3. Conecte o cabo diretamente ao PC host. Evite hubs USB.
4. Coloque o Jetson novamente em modo de recuperação e reconecte a alimentação, se necessário.
5. Certifique-se de que o sistema operacional do host corresponde à versão do JetPack:
   - JetPack 5.x: Ubuntu 18.04 ou 20.04 é recomendado.
   - JetPack 6.x: Ubuntu 20.04 ou 22.04 é recomendado.

## Erro: Tempo Limite de USB Durante a Gravação

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/timeout_issue.png"/>
</div>

Sintomas típicos incluem mensagens como:

```text
ERROR: might be timeout in usb write
```

ou o dispositivo se desconectando durante o processo de gravação.

### Por que isso acontece

Durante a gravação, o Jetson pode reiniciar e se reenumerar via USB. Em um host físico com Ubuntu, isso normalmente é reconectado automaticamente. Em um ambiente de VM ou WSL, muitas vezes é necessário religar o dispositivo manualmente, o que pode causar falhas por tempo limite.

### O que verificar

1. Confirme se o host é um PC físico com Ubuntu, uma VM ou WSL.
2. Se estiver usando uma VM, reconecte manualmente o dispositivo USB do Jetson depois que ele reiniciar durante a gravação.
3. Se estiver usando WSL, religue o dispositivo após a reconexão. Para detalhes de configuração, consulte [Flash JetPack with WSL2](/pt-br/ai_robotics_flash_jetpack_with_wsl2/).
4. Confirme se o adaptador de alimentação DC consegue fornecer energia suficiente para o dispositivo Jetson.
5. Troque para outro cabo USB Type-C de alta qualidade. O cabo deve suportar pelo menos comunicação de dados USB 2.0 e, idealmente, ter menos de 1,5 metro.
6. Tente outra porta USB-A no host.
7. Evite usar hubs USB, pois eles podem reduzir a estabilidade da conexão durante a gravação.
8. Confirme que você selecionou o pacote de gravação correto para o produto Jetson de destino e a versão do JetPack.
9. Entre novamente em modo de recuperação e reconecte a alimentação antes de tentar de novo.
10. Depois de verificar os itens acima, reinicie o script de gravação e tente novamente.

### Recomendação

Recomendamos fortemente usar um host físico dedicado com Ubuntu para a gravação.

## Erro: Falha de Montagem NFS Durante a Gravação

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/nfs_error.png"/>
</div>

Logs típicos podem incluir:

```text
Formatting APP partition /dev/nvme0n1p1 ...
tar --checkpoint-action="ttyout=Hit %s checkpoint #%u%*\r" -x -I 'zstd -T0' -pf /mnt/external/system.img --warning=no-timestamp --numeric-owner --xattrs --xattrs-include=* -C /tmp/ci-EUsLOiqBxk
Flash failure
Either the device cannot mount the NFS server on the host or a flash command has failed.
Check your network setting (VPN, firewall,...) to make sure the device can mount NFS server.
```

Referência:
[Flash fails Orin AGX at 99% - NVIDIA Developer Forums](https://forums.developer.nvidia.com/t/either-the-device-cannot-mount-the-nfs-server-on-the-host-or-a-flash-command-has-failed-while-using-sdk-manager/312719/3)

### Por que isso acontece

Ao usar `initrd` flash, o Jetson monta um compartilhamento NFS exportado pelo PC host através da interface de rede USB0. Se o serviço NFS do host estiver indisponível, bloqueado por regras de firewall ou se o ambiente do host estiver instável, a gravação pode falhar perto do final.

### Lista de verificação

1. Certifique-se de que o servidor NFS está em execução no host Ubuntu:

```bash
systemctl status nfs-kernel-server
```

2. Desative temporariamente o firewall do Ubuntu e teste novamente:

```bash
sudo ufw status
sudo ufw disable
```

3. Evite ambientes de VM, Docker e WSL.
4. Formate o SSD NVMe para `ext4` antes de usar.
5. Instale as dependências necessárias no host:

```bash
sudo apt install qemu-user-static sshpass abootimg nfs-kernel-server libxml2-utils binutils -y
```

6. Verifique se o PC host tem espaço livre em disco suficiente. Falhas de montagem NFS também podem ocorrer quando o armazenamento do host é insuficiente.
7. Se o problema persistir, teste com um modelo de SSD validado. Referência de SSD da Seeed:
[NVMe M.2 2280 SSD 256GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)

## Erro: `The connected jetson device is not ready for flash: Stat for blob_boot0.imgimg failed`

A linha principal é:

```text
Stat for blob_boot0.imgimg failed Error: Return value 19
```

### Por que isso acontece

Na prática, isso geralmente significa que o ambiente do host usado para gerar o boot blob não é compatível com a cadeia de ferramentas de gravação. Já vimos isso em hosts com Ubuntu 24.04.

### Correção recomendada

Use Ubuntu 20.04 ou Ubuntu 22.04 como host de gravação em vez de Ubuntu 24.04.

## Erro: `could not find tegrarcm_v2`

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/tegrarcm_v2_failed.jpg"/>
</div>

Log típico:

```text
Error: could not find tegrarcm_v2
```

### Por que isso acontece

O pacote de gravação e a ferramenta de gravação MFI são destinados a um host x86. Esse erro geralmente aparece quando os usuários tentam gravar a partir de outro dispositivo Jetson ou de outra arquitetura de host não suportada.

### Correção recomendada

Use um PC host x86 com Ubuntu para a gravação.

## Erro: Travado na Configuração OEM Após o Primeiro Boot

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/oem_failed.png"/>
</div>

Mensagem típica:

```text
(1 of 2) A start job is running for End-user configuration after initial OEM installation (Debconf UI)
```

### Por que isso acontece

Isso geralmente significa que o serviço de configuração OEM está aguardando interação do usuário, mas não há um caminho de exibição utilizável disponível. Isso acontece comumente quando o monitor HDMI não foi conectado no primeiro boot e foi conectado depois.

### O que fazer

1. Desligue o Jetson.
2. Desconecte periféricos desnecessários.
3. Mantenha conectados apenas o monitor HDMI e a alimentação.
4. Reinicie o dispositivo.
5. Se necessário, reinicie mais algumas vezes.

## Observações Adicionais

- Se o dispositivo reiniciar durante a gravação, isso pode ser esperado. A parte importante é se o host detecta novamente e reconecta o Jetson corretamente.
- Se você estiver gravando em NVMe, confirme que a unidade de destino está saudável e já foi formatada corretamente.
- Se você usar o SDK Manager, revise também os detalhes do terminal para identificar exatamente qual componente falhou.

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
