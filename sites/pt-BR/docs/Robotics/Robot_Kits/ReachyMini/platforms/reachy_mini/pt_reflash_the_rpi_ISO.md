---
description: Guia avançado para regravar a imagem ReachyMiniOS no CM4 do Reachy Mini usando rpiboot e bmaptool em Linux, macOS e Windows.
title: Regravar a Imagem do Raspberry Pi OS
slug: /reachymini_platforms_reachy_mini_reflash_the_rpi_iso
keywords:
  - reflash
  - factory reset
  - os image
  - rpiboot
  - bmaptool
  - cm4
  - expert
  - recovery
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reachymini_platforms_reachy_mini_reflash_the_rpi_iso/
---

# Avançado: Regravar a imagem do Raspberry Pi OS

:::danger Guia apenas para especialistas
Este guia explica como regravar a imagem ReachyMiniOS no CM4 do Reachy Mini. Fazer isso irá fazer um _factory reset_ no seu Reachy Mini.

A maioria dos usuários não precisa disso. O Reachy Mini vem pré-instalado. Siga estas etapas apenas se você tiver uma instalação corrompida que não conseguiu depurar.
:::

---

## Baixar a imagem do OS (e o bmap)

Primeiro, baixe a versão mais recente da imagem do OS e o arquivo `.bmap` em:
https://github.com/pollen-robotics/reachy-mini-os/releases

:::tip
O arquivo `.bmap` é usado pelo `bmaptool` (Linux/macOS). Se você estiver gravando com o Raspberry Pi Imager (Windows), só precisa do arquivo de imagem do OS.
:::

---

## Instalar o rpiboot

:::info Linux / macOS
Siga as instruções de compilação aqui:
https://github.com/raspberrypi/usbboot?tab=readme-ov-file#building-1
:::

:::info Windows
Baixe e instale a interface gráfica do rpiboot do repositório oficial do Raspberry Pi:
https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe
:::

---

## Instalar uma ferramenta de gravação

:::info Linux
Instale o bmaptool:
```bash
sudo apt install bmap-tools
```
:::

:::tip Usuários de Linux
Usuários de Linux podem usar tanto o `bmaptool` quanto o Raspberry Pi Imager (a opção do Windows). O Raspberry Pi Imager é geralmente _muito mais lento_ que o `bmaptool` para este fluxo de trabalho, então prefira o `bmaptool` quando disponível.
:::

:::info macOS
Instale o bmaptool a partir do repositório oficial:
```bash
python3 -m pip install --user "git+https://github.com/yoctoproject/bmaptool.git"
export PATH="$HOME/.local/bin:$PATH"
bmaptool --version
```
:::

:::tip Usuários de macOS
Usuários de macOS podem usar tanto o `bmaptool` quanto o Raspberry Pi Imager (a opção do Windows). O Raspberry Pi Imager é geralmente _muito mais lento_ que o `bmaptool` para este fluxo de trabalho, então prefira o `bmaptool` quando disponível.
:::

:::info Windows
Baixe e instale o Raspberry Pi Imager:
https://www.raspberrypi.com/software/
:::

---

## Configuração

**Passo 1:** Desligue completamente o robô antes de continuar.

:::tip Passo 2: Iniciar o rpiboot
Inicie o **rpiboot** (ele ficará aguardando o robô ser conectado):
:::

* **Linux / macOS**: execute o comando `rpiboot` no seu terminal:
  ```bash
  sudo ./rpiboot -d mass-storage-gadget64
  ```
* **Windows**: execute o executável **RPiBoot** que você instalou na etapa anterior.

:::tip Passo 3
Coloque a chave em **DOWNLOAD (SW1)** na PCB da cabeça:

![pcb_usb_and_switch](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/pcb_usb_and_switch.png)
:::

**Passo 4:** Conecte o cabo USB (aquele mostrado na imagem acima, chamado **USB2**).

**Passo 5:** Ligue o robô.

A eMMC interna agora deve aparecer como um dispositivo de armazenamento em massa.

---

## Desmontar e Gravar o ISO

:::info Linux
:::warning Certifique-se de que o dispositivo esteja desmontado antes de gravar.

**Verificar e Desmontar o Dispositivo**

Seu dispositivo deve estar visível como `/dev/sdx` (algo como `/dev/sda`).

**Verifique as partições montadas** executando:
```bash
lsblk
```

Se você vir `bootfs` e `rootfs` como abaixo, significa que ele está **montado**:
```
sda           8:0    1  14.6G  0 disk
├─sda1        8:1    1   512M  0 part /media/<username>/bootfs
└─sda2        8:2    1  14.1G  0 part /media/<username>/rootfs
```

**Desmonte** as partições:
```bash
sudo umount /media/<username>/bootfs
sudo umount /media/<username>/rootfs
```

**Gravar o ISO**
```bash
sudo bmaptool copy <reachy_mini_os>.zip --bmap <reachy_mini_os>.bmap /dev/sda
```

Por exemplo, com a versão `v0.0.10`:
```bash
sudo bmaptool copy image_2025-11-19-reachyminios-lite-v0.0.10.zip --bmap 2025-11-19-reachyminios-lite-v0.0.10.bmap /dev/sda
```
:::

:::info macOS
:::warning Certifique-se de que o dispositivo esteja desmontado antes de gravar.

**Verificar e Desmontar o Dispositivo**

Seu dispositivo deve estar visível como `/dev/diskX` (algo como `/dev/disk4`).

**Verifique as partições montadas** executando:
```bash
mount
```

Procure por entradas como `/dev/disk4s1` ou `/dev/disk4s2` que mencionem `bootfs` ou `rootfs`.

**Desmonte** todo o disco (não partições individuais):
```bash
diskutil unmountDisk /dev/disk4
```

Substitua `/dev/disk4` pelo identificador real do seu disco.

:::note
`unmountDisk` desmonta todos os volumes do disco (`bootfs`, `rootfs`...) de uma só vez.
:::

:::warning Gravar o ISO
Use `/dev/rdiskX` (note o prefixo **`r`**!) em vez de `/dev/diskX`. O prefixo `r` fornece acesso bruto ao disco, o que é obrigatório para que o comando de gravação seja bem-sucedido.
:::

```bash
sudo bmaptool copy <reachy_mini_os>.zip --bmap <reachy_mini_os>.bmap /dev/rdiskX
```

Por exemplo, com a versão `v0.0.10` (substitua `/dev/rdisk4` pelo identificador real do seu disco):
```bash
sudo bmaptool copy image_2025-11-19-reachyminios-lite-v0.0.10.zip --bmap 2025-11-19-reachyminios-lite-v0.0.10.bmap /dev/rdisk4
```
:::

:::info Windows (Raspberry Pi Imager)
Use o executável **Raspberry Pi Imager** para gravar a imagem do OS:

1. Abra o **Raspberry Pi Imager**
2. Selecione `Raspberry Pi 4` como dispositivo
3. Selecione `Use custom` para o sistema operacional e forneça a imagem do OS baixada (`.zip`, ou o `.img` extraído)
4. Selecione o único disco disponível para o sistema de armazenamento (normalmente `RPi-MSD- 0001`)
5. Clique em **Write**
:::

---

## Restaurar o Modo de Boot Normal

**Passo 1:** Desligue o robô

**Passo 2:** Mova a chave de volta para DEBUG

**Passo 3:** Desconecte o cabo USB

**Passo 4:** Ligue o robô novamente

---

## Verificar se Tudo Está Funcionando

:::tip Conecte seu computador ao hotspot WiFi do robô:
* Nome da rede: `reachy-mini-ap`
* Senha: `reachy-mini`
:::

Acesse o robô via SSH:
```bash
ssh pollen@reachy-mini.local
# password: root
```

Em seguida, execute:
```bash
reachyminios_check
```

:::success
Se tudo der certo, você deverá ver:
```bash
Image validation PASSED
```
:::
