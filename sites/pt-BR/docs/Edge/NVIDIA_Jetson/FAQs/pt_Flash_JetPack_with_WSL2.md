---
description: Este tutorial mostra como gravar o JetPack no Windows usando o WSL2.
title: Gravar JetPack com WSL2
tags:
  - JetPack
  - WSL2
  - Windows
image: https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/check_custom_kernel.png
slug: /ai_robotics_flash_jetpack_with_wsl2
sku: 110110145
last_update:
  date: 02/24/2026
  author: Lorraine
createdAt: '2026-02-24'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/ai_robotics_flash_jetpack_with_wsl2/
---

# Gravar JetPack com WSL2

## Introdução

Este tutorial demonstra como gravar o JetPack em dispositivos Jetson usando o Windows Subsystem for Linux 2 (WSL2). Esse método permite que usuários de Windows gravem o JetPack sem precisar configurar uma máquina Ubuntu dedicada.

:::warning
Isso **não é considerado uma solução estável** e não haverá suporte ativo. Se você encontrar erros, use um host Ubuntu nativo.
:::

## Pré-requisitos

### Requisitos de Sistema

- **Windows**: Windows 10 1903 (Build 18362.1049 ou posterior) ou Windows 11
- **WSL**: WSL2 é obrigatório
- **usbipd-win**: Versão 4.x ou superior

### Verifique seu Sistema

Verifique a versão do build do Windows:

```bash
reg query "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion" /v CurrentBuild
```

Verifique a versão do WSL:

```bash
wsl -v
```

Verifique a versão do usbipd:

```bash
usbipd --version
```

### Distribuições WSL Recomendadas

| Versão do JetPack | Distribuições WSL Recomendadas |
|-----------------|-------------------------------|
| JetPack 4.x     | Ubuntu 18.04                  |
| JetPack 5.x     | Ubuntu 18.04 / Ubuntu 20.04   |
| JetPack 6.x     | Ubuntu 20.04 / Ubuntu 22.04   |

Para requisitos de versão específicos, consulte a [documentação do NVIDIA SDK Manager](https://developer.nvidia.com/sdk-manager#installation_get_started).

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/jetpack_host.png" />
</div>

Instale distribuições pela Microsoft Store ou use a linha de comando:


```bash
# For example, install Ubuntu 22.04
wsl --install -d Ubuntu-22.04
```

## Configurar o Kernel do WSL2

### Kernel WSL Personalizado
Um kernel WSL personalizado é necessário para suportar diferentes dispositivos USB. Você pode:
- Usar o kernel pré-compilado abaixo
- Compilar seu próprio kernel seguindo [este guia](https://github.com/dorssel/usbipd-win/wiki/WSL-support)

**Download do Kernel Pré-compilado**: [Link do OneDrive](https://seeedstudio88-my.sharepoint.com/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fyoujiang%5Fyu%5Fseeedstudio88%5Fonmicrosoft%5Fcom%2FDocuments%2FSeeed%5FTech%5FSupport%5FTemp%2Fwsl%5Fkernel%2FbzImage&parent=%2Fpersonal%2Fyoujiang%5Fyu%5Fseeedstudio88%5Fonmicrosoft%5Fcom%2FDocuments%2FSeeed%5FTech%5FSupport%5FTemp%2Fwsl%5Fkernel&ga=1)
- SHA256: `f249022feab9372d448d236a4401e087d0f150dd6b3367b571f0b9a703bd2d38`

Para verificar a compatibilidade do kernel, confira o suporte a RNDIS após a instalação.

### Substituir o Kernel Padrão do WSL

1. **Desligar o WSL**:

```bash
wsl --shutdown
```

2. **Configurar o kernel do WSL**:

**Para Windows 11** (ou builds mais recentes do Windows 10):
- Abra o aplicativo gráfico de configurações do WSL
- Vá até as configurações e configure o caminho do kernel personalizado

**Para todas as versões do Windows**:
Edite o arquivo `.wslconfig`:

```bash
notepad $env:USERPROFILE\.wslconfig
```

Adicione a seguinte configuração em `[wsl2]`:

```ini
[wsl2]
kernel=D:\\WSL_Kernel\\bzImage
```

:::note
Substitua `D:\\WSL_Kernel\\bzImage` pelo caminho real do arquivo de kernel que você baixou.
:::

3. **Reinicie o WSL e verifique**:

```bash
# Restart WSL
wsl

# Check kernel information
uname -a

# Check RNDIS features
zcat /proc/config.gz | grep RNDIS
```

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/check_custom_kernel.png" />
</div>

## Gravar o JetPack

A maioria dos passos de gravação é idêntica ao Ubuntu nativo. Este exemplo usa o reComputer J4012.

**Passo 1: Baixar o JetPack**

Baixe a versão apropriada do JetPack para o seu dispositivo na [Página de Resumo de Gravação da Seeed](https://wiki.seeedstudio.com/pt-br/flash/jetpack_to_selected_product/). Esta página fornece:
- Imagens JetPack para todos os dispositivos Jetson da Seeed
- Instruções detalhadas para entrar no modo de recuperação forçada para cada dispositivo

:::warning
Ao mover arquivos do Windows para o WSL, tenha cuidado com as permissões de arquivo.
:::

Mova e verifique o arquivo:

```bash
# Move file from Windows drive to WSL storage
mv /mnt/c/Users/seeed/Downloads/mfi_recomputer-<xxxx>.tar.gz ~

# Remove execute permission
chmod -x mfi_recomputer-<xxxx>.tar.gz

# Verify SHA256 checksum
sha256sum mfi_recomputer-<xxxx>.tar.gz
```

:::note
Substitua `seeed` pelo seu nome de usuário real do Windows no caminho `/mnt/c/Users/seeed/Downloads/`.
:::

**Passo 2: Entrar no Modo de Recuperação Forçada**

:::tip
Para instruções de modo de recuperação específicas do dispositivo (localização de pinos, combinações de botões), consulte a [Página de Resumo de Gravação da Seeed](https://wiki.seeedstudio.com/pt-br/flash/jetpack_to_selected_product/) e selecione o modelo do seu dispositivo.
:::

Passos gerais para a maioria dos dispositivos:

1. **Desligue completamente** o seu dispositivo Jetson
2. **Faça curto entre os pinos FEC e GND** usando um jumper ou uma pinça
3. **Conecte o cabo de dados USB-C** ao seu host Windows
4. **Conecte a alimentação** ao dispositivo
5. **Aguarde 2–3 segundos**, então remova o jumper

Seu dispositivo entrará no modo de recuperação forçada.

<div align="center">
    <img width={600}
     src="https://files.seeedstudio.com/wiki/reComputer-J4012/3.png" />
</div>

:::note
O exemplo acima mostra o reComputer J4012. A localização dos pinos varia conforme o dispositivo – sempre verifique a documentação específica do seu dispositivo.
:::

**Passo 3: Anexar o Dispositivo USB ao WSL**

Abra o **PowerShell** ou o **Windows Terminal** com privilégios de **Administrador**.

**Liste os dispositivos USB** (no PowerShell):

```powershell
usbipd list
```

:::note
Se você vir `usbipd: command not found`, verifique se o usbipd-win está instalado e adicionado ao PATH do sistema. Talvez seja necessário reiniciar o terminal após a instalação.
:::

Você deverá ver seu dispositivo listado como **APX**, indicando que está em modo de recuperação forçada.

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/usbipd_list.png" />
</div>

**Vincule o dispositivo** (no PowerShell):

```powershell
usbipd bind -b 1-1 -f
```

:::note
Substitua `1-1` pelo ID de barramento real exibido na saída do `usbipd list`.
:::

Use `usbipd list` novamente para verificar se o STATE mudou para **Shared(forced)**.

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/usbipd_list_shared.png" />
</div>

**Anexar ao WSL** (no PowerShell):

```powershell
usbipd attach -b 1-1 --wsl --auto-attach
```

Você deverá ver uma saída semelhante a:

```
usbipd: info: Using WSL distribution 'Ubuntu-22.04' to attach; the device will be available in all WSL 2 distributions.
usbipd: info: Using IP address 172.24.240.1 to reach the host.
usbipd: info: Starting endless attach loop; press Ctrl+C to quit.
WSL Attached
```

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/usbipd_attach_apx.png" />
</div>

:::tip
Mantenha esta janela de terminal aberta. Pressione `Ctrl+C` somente após a conclusão da gravação.
:::

**Verificar no WSL**:

Abra o WSL em um novo terminal e verifique:

```bash
lsusb
```

Você deverá ver uma saída parecida com:

```
Bus 002 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
Bus 001 Device 002: ID 0955:7323 NVIDIA Corp. APX
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
```

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/usbipd_rndis.png" />
</div>

O dispositivo foi conectado ao WSL com sucesso.

**Passo 4: Gravar o Dispositivo**

Navegue até o diretório do JetPack e execute o comando de gravação:

Escolha o método de gravação apropriado com base em seu dispositivo e requisitos:

**Opção 1: BSP da Seeed (Recomendado para Dispositivos Seeed)**

Para dispositivos reComputer da Seeed, use o pacote Massflash pré-compilado:

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

:::note
Certifique-se de ter instalado os pré-requisitos de gravação:

```bash
sudo apt install qemu-user-static sshpass abootimg nfs-kernel-server libxml2-utils binutils -y
```
:::

**Opção 2: NVIDIA SDK Manager**

Para kits de desenvolvimento oficiais da NVIDIA ou quando você precisa de componentes do SDK:

**1. Inicie o SDK Manager:**

```bash
sdkmanager
```

**2. Siga as instruções na tela** para concluir o processo de gravação.

:::tip
Para instruções mais detalhadas sobre o SDK Manager no WSL2, consulte a [documentação oficial da NVIDIA](https://docs.nvidia.com/sdk-manager/wsl-systems/index.html).
:::

:::warning
**Limitação Conhecida**: o SDK Manager não consegue gravar em dispositivos de armazenamento NVMe/SSD externos via WSL2. Se você precisar gravar em um SSD externo, use a Opção 3 (Initrd Flash) ou um host Ubuntu nativo.
:::

**Opção 3: Initrd Flash (Para Kits de Desenvolvimento Oficiais da NVIDIA)**

Para kits de desenvolvimento oficiais da NVIDIA (Jetson Orin Nano Developer Kit, etc.):

Um exemplo para o Jetson Orin Nano Super Developer Kit:

```bash
# Download Jetson Linux
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.3/release/Jetson_Linux_r36.4.3_aarch64.tbz2

# Download Root Filesystem
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.3/release/Tegra_Linux_Sample-Root-Filesystem_r36.4.3_aarch64.tbz2

# Extract Jetson Linux
tar xpf Jetson_Linux_r36.4.3_aarch64.tbz2

# Extract Root Filesystem
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_r36.4.3_aarch64.tbz2 -C ./Linux_for_Tegra/rootfs

# Install prerequisites
sudo ./tools/l4t_flash_prerequisites.sh

# Apply binaries
sudo ./apply_binaries.sh

# Flash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
```

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/flash_send_blob.png" />
</div>

:::tip
Substitua `jetson-orin-nano-devkit` pelo alvo específico do seu dispositivo. Verifique a documentação da NVIDIA para o nome de alvo correto.
:::

Quando o processo de gravação for concluído com sucesso, você verá uma saída semelhante a:

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/flash_success.png" />
</div>

Após a conclusão da gravação, você pode desconectar o dispositivo USB do WSL:

```powershell
usbipd detach -b 1-1
```

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/Flash_JetPack_with_WSL2/usbipd_detached.png" />
</div>

## Solução de Problemas

### Dispositivo USB Não Aparece no WSL

- Certifique-se de que o usbipd-win seja a versão 4.x ou superior
- Verifique se o dispositivo está no modo de recuperação forçada (deve aparecer como APX)
- Tente vincular novamente o dispositivo com a opção `-f` (force)
- **Desative temporariamente o Firewall do Windows Defender** ou o software antivírus, pois eles podem bloquear o acesso ao dispositivo USB
- Tente outra porta USB (de preferência USB 3.0)

### Falha na Gravação ou Tempo Esgotado

- Use um host Ubuntu nativo se os problemas persistirem
- Verifique a qualidade e a conexão do cabo USB (use o cabo original, se possível)
- Garanta alimentação adequada ao dispositivo Jetson (use um adaptador de energia de 5V/4A)
- Feche qualquer outro software que possa estar usando o dispositivo USB
- Tente gravar sem a opção `--auto-attach` e monitore a conexão manualmente

### Problemas de Permissão

- Sempre execute os comandos usbipd com privilégios de **Administrador**
- Verifique as permissões de arquivo ao mover arquivos do Windows para o WSL
- Se você receber erros de permissão negada no WSL, tente: `sudo chmod 666 /dev/bus/usb/001/*`

### Problemas com o Kernel do WSL

Se você vir erros sobre suporte USB ausente:
- Verifique se o kernel personalizado foi carregado corretamente: `uname -r` deve mostrar uma versão diferente do kernel padrão do WSL
- Verifique o suporte a RNDIS: `zcat /proc/config.gz | grep CONFIG_USB_NET_RNDIS`
- Se os problemas persistirem, reconstrua o kernel seguindo o [guia oficial](https://github.com/dorssel/usbipd-win/wiki/WSL-support)

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
