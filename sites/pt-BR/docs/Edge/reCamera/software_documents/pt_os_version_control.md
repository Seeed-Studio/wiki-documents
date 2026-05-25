---
description: Controle de versão, como atualização ou reversão
title: Controle de versão do SO
keywords:
  - Edge
  - reCamera
  - recamera
  - Sistema operacional
  - atualização de versão
image: https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-4.webp
slug: /recamera_os_version_control
sidebar_position: 1
last_update:
  date: 2/14/2025
  author: Parker Hu & Dawn Yao
createdAt: '2025-02-11'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/recamera_os_version_control/
---

# Diretrizes de atualização/upgrade do SO pela Web

Conecte a reCamera ao seu computador utilizando o cabo tipo C e acesse `http://192.168.42.1/#/system` no navegador do computador, ou substitua o endereço IP se você estiver acessando o dispositivo via rede. Antes de atualizar, certifique-se de que a reCamera tenha **acesso à internet** verificando em `ip_address/#/network`.

Clique em configuração de `System` e, se um novo firmware tiver sido lançado, clique em `Apply` para atualizar/fazer upgrade do sistema do dispositivo. O texto do botão será "Check" se nenhum novo firmware for detectado automaticamente.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image.png" /></div>

Aguarde até a barra de progresso ser concluída.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-1.png" /></div>

Clique em `Restart` para finalizar a atualização/upgrade do sistema. **Atualize o navegador** após cerca de 30 segundos para reconectar ao dispositivo.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-2.png" /></div>

O sistema verificará automaticamente se há uma nova versão de firmware que possa ser atualizada/fazer upgrade.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-3.png" /></div>

## Gerenciamento de versão do SO por comando

### Gerenciamento do dispositivo por OTA

#### Atualizar/Fazer upgrade para a versão OTA mais recente

Você pode conferir a versão mais recente do [reCamera OS aqui.](https://github.com/Seeed-Studio/reCamera-OS)

Atualizar/fazer upgrade manualmente para o firmware OTA mais recente:

```bash
#Upgrade to the latest firmware version
sudo /mnt/system/upgrade.sh latest https://github.com/Seeed-Studio/reCamera-OS/releases/latest 

sudo /mnt/system/upgrade.sh start
```

ou

#### Atualizar/Fazer upgrade ou reverter para qualquer versão OTA específica

Se você tiver uma versão específica que deseja implantar, pode utilizar o comando abaixo.

```bash
#E.g. install 0.1.4 as an example
sudo /mnt/system/upgrade.sh latest https://github.com/Seeed-Studio/reCamera-OS/releases/tag/0.1.4

sudo /mnt/system/upgrade.sh start
```

Se você estiver desenvolvendo o SO e tiver seu próprio branch no GitHub, também pode atualizar/fazer upgrade da versão do sistema com o link do seu branch.

```bash
sudo /mnt/system/upgrade.sh latest https://github.com/your-user-name/reCamera-OS/releases/your-version-file-address

sudo /mnt/system/upgrade.sh start
```

#### Para versão do SO 0.1.3 e inferiores

Se você quiser usar OTA com `upgrade.sh`, mas sua versão for **0.1.3 ou inferior**, siga as etapas abaixo:

1. Conecte o dispositivo ao computador pelo cabo USB tipo C, depois acesse **192.168.42.1/#/terminal**. Encontre o script upgrade.sh na pasta

```bash
cd /mnt/system
ls
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/find_upgrade_script.png" /></div>

2. Altere a permissão desse script

```bash
sudo rootfs_rw on
sudo chmod +x upgrade.sh
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/change_file_permission.png" /></div>

3. Exclua o arquivo `upgrade.sh` antigo e verifique se ele foi removido com sucesso.

```bash
sudo rm upgrade.sh
ls
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/remove_script.png" /></div>

4. Vá para o [Github](https://github.com/Seeed-Studio/reCamera-OS/blob/sg200x-reCamera/external/ramdisk/rootfs/overlay/cv181x_musl_riscv64/system/upgrade.sh) e baixe o script `upgrade.sh` mais recente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/download_sh_github.png" /></div>

5. Altere as permissões da pasta

```bash
sudo chmod 777 /mnt/system
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/change_folder_permission.png" /></div>

6. Abra o terminal do seu desktop/PC e, em seguida, copie o script baixado para a reCamera na mesma pasta.

```bash
sudo scp your_folder_address/upgrade.sh recamera@192.168.42.1:/mnt/system/
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/scp_file.png" /></div>

7. Volte para a página da Web para verificar se o novo `upgrade.sh` está lá

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/new_script.png" /></div>

8. Altere novamente as permissões da pasta por segurança

```bash
sudo chmod 755 /mnt/system
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/chang_back_permission.png" /></div>

9. Agora você pode tentar o [comando OTA](#device-management-by-ota) para fazer qualquer controle de versão.

### Gerenciamento do dispositivo por pacote local

Você também pode atualizar/fazer upgrade do firmware manualmente utilizando o pacote OTA local. Os firmwares OTA podem ser [baixados aqui](https://github.com/Seeed-Studio/reCamera-OS/releases/). Use ferramentas como scp para transferir os arquivos para a reCamera.

```bash
sudo scp sg2002_reCamera_0.1.3_emmc_ota.zip recamera@ip_address:~/
```

Em seguida, use o bash para implantar.

```bash
sudo /mnt/system/upgrade.sh start sg2002_reCamera_0.1.3_emmc_ota.zip
```

:::note
Se você não tiver permissões suficientes para gravar arquivos na reCamera, pode alterar os arquivos de sistema para serem legíveis ou graváveis digitando `rootfs_rw on/off`.
:::

### Restaurar manualmente as configurações de fábrica

Este comando pode restaurar a reCamera para as configurações de fábrica. Se você usá-lo, todos os seus dados de usuário serão removidos, como fluxo do Node-RED e armazenamento local.

```bash
sudo /mnt/system/upgrade.sh recovery
```

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
