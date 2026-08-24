---
description: Explica por que a gravação com initrd falha com mount.nfs access denied quando o host Ubuntu usa um sistema de arquivos raiz ZFS e como contornar isso em dispositivos Seeed Jetson.
title: Gravação Initrd Falha em Host ZFS (mount.nfs access denied)
tags:
  - JetPack
  - Flashing
  - Host PC
keywords:
  - jetson
  - flash
  - ZFS
  - NFS
  - initrd
  - l4t_initrd_flash
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/Jetson_Initrd_Flash_ZFS_nfs_error_01.png
slug: /jetson_initrd_flash_zfs_host_limitation
last_update:
  date: 08/13/2026
  author: haochen
createdAt: '2026-08-12'
updatedAt: '2026-08-14'
url: https://wiki.seeedstudio.com/pt-br/jetson_initrd_flash_zfs_host_limitation/
---

# Gravação Initrd Falha em Host ZFS (mount.nfs access denied)

## Introdução

Quando você grava um dispositivo Seeed Jetson com o fluxo de trabalho **initrd** da NVIDIA (`l4t_initrd_flash.sh` com `--network usb0`), o **PC host** Ubuntu compartilha temporariamente arquivos de gravação com o Jetson via **NFS** (Network File System). Se o seu host foi instalado com um **sistema de arquivos raiz ZFS** (opção do instalador do Ubuntu *Erase disk and use ZFS*), a gravação pode falhar com:

```text
mount.nfs: access denied by server while mounting [fc00:1:1:0::1]:/path/to/mfi_xxx/rootfs
Flash failure
Either the device cannot mount the NFS server on the host or a flash command has failed.
```

Isso **não** é um defeito da sua placa carrier Seeed ou do módulo Jetson. É uma interação conhecida entre o **ZFS** e a exportação NFS temporária padrão da NVIDIA usada durante a gravação com initrd.

:::info Produtos aplicáveis
Qualquer produto Seeed Jetson gravado com **`l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0`** (ou gravação semelhante com initrd + rede), incluindo, mas não se limitando a:

- reComputer Classic / Mini / Super (série J401)
- reComputer Industrial / reServer J401
- reComputer Robotics J401 / J501 / J501 Mini
- reServer J501

Isso **não** é específico de um único SKU. A causa raiz é o **sistema de arquivos do host**, não o dispositivo de destino.
:::

## O que é NFS neste contexto?

Durante a gravação com initrd:

1. Você extrai o pacote **mfi** da Seeed no host Ubuntu.
2. O Jetson inicializa uma pequena imagem **initrd** via USB.
3. O host **exporta** pastas como `rootfs` e `tools/kernel_flash/images` via NFS.
4. O Jetson **monta** essas pastas e grava a imagem do sistema.

Aqui o NFS é apenas um **mecanismo de transferência host ↔ Jetson** durante a gravação. Ele não está relacionado a recursos de NFS na placa carrier.

## Por que hosts com ZFS falham

O script da NVIDIA (`tools/kernel_flash/l4t_network_flash.func`) usa **`exportfs -o`** para criar exportações NFS **temporárias, em memória**.

Em **ext4** (instalação padrão do Ubuntu), isso geralmente funciona.

Em **ZFS**, o servidor NFS do Linux não consegue atribuir automaticamente um **`fsid`** estável para o dataset. A exportação pode parecer bem-sucedida no host, mas o Jetson recebe **access denied** ao montar.

O Ubuntu oferece ZFS como opção de raiz desde a versão 19.10, portanto isso pode afetar qualquer usuário que tenha escolhido ZFS durante a instalação.

## Solução recomendada (mais simples)

**Copie todo o diretório mfi para um sistema de arquivos ext4** e então execute o comando de gravação a partir dele.

```bash
# Example: copy mfi folder to an ext4 mount (adjust paths)
cp -a /path/on/zfs/mfi_recomputer-orin-super-j401 /mnt/ext4-flash/
cd /mnt/ext4-flash/mfi_recomputer-orin-super-j401

sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

Dicas:

- Use uma partição ext4 dedicada, um drive USB externo formatado como ext4 ou uma imagem de loopback ext4.
- Garanta espaço livre suficiente para todo o pacote mfi extraído.
- Instale os pré-requisitos de gravação no host (`nfs-kernel-server`, `sshpass`, etc.) conforme o guia de Introdução (Getting Started) do seu produto.

## Solução avançada (permanecer em ZFS)

Se você precisar gravar a partir de um caminho em ZFS, configure exportações **persistentes** em `/etc/exports` com valores explícitos de **`fsid=`** e garanta que as permissões estejam corretas. Talvez você também precise ajustar `enable_nfs_for_folder()` em `l4t_network_flash.func` para que o script use `/etc/exports` + `exportfs -ra` em vez de `exportfs -o`.

Linhas de exportação de exemplo (ajuste caminhos e rede IPv6 para corresponder ao seu diretório mfi):

```bash
/path/to/mfi_xxx/rootfs fc00:1:1::/48(rw,nohide,insecure,no_subtree_check,async,no_root_squash,fsid=1)
/path/to/mfi_xxx/tools/kernel_flash/images fc00:1:1::/48(rw,nohide,insecure,no_subtree_check,async,no_root_squash,fsid=2)
```

Em seguida:

```bash
sudo chmod 755 /path/to/mfi_xxx/rootfs /path/to/mfi_xxx/tools/kernel_flash/images
sudo chown root:root /path/to/mfi_xxx/rootfs /path/to/mfi_xxx/tools/kernel_flash/images
sudo systemctl restart nfs-kernel-server
sudo exportfs -rav
```

Detalhes completos e um patch de exemplo estão em [wiki-documents #4148](https://github.com/Seeed-Studio/wiki-documents/issues/4148).

## Verifique o sistema de arquivos do host

```bash
df -T /
findmnt -no FSTYPE /
```

Se a saída mostrar `zfs`, use a solução com ext4 acima antes de gravar.

## Recursos

- [Seeed wiki-documents #4148](https://github.com/Seeed-Studio/wiki-documents/issues/4148)
- [NVIDIA Forums: rootfs does not support NFS export](https://forums.developer.nvidia.com/t/rootfs-does-not-support-nfs-export/248850)
- [NVIDIA Forums: requires fsid= for NFS export](https://forums.developer.nvidia.com/t/requires-fsid-for-nfs-export/338708)
- [Flash BSP with Jetpack to Selected Jetson](https://wiki.seeedstudio.com/pt-br/flash/jetpack_to_selected_product/)
- [reServer J501 Getting Started](https://wiki.seeedstudio.com/pt-br/reserver_j501_getting_started/)
- [Flash JetPack with WSL2](https://wiki.seeedstudio.com/pt-br/ai_robotics_flash_jetpack_with_wsl2/)

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
