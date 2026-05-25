---
description: Cliente Mender no ODYSSEY - X86
title: Cliente Mender no ODYSSEY - X86
keywords:
  - Sorftware Mender
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Mender-Client-ODYSSEY-X86
last_update:
  date: 1/13/2023
  author: jianjing Huang
createdAt: '2023-01-13'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Mender-Client-ODYSSEY-X86/
---

# Instalação do Cliente Mender no ODYSSEY - X86

Podemos configurar o Cliente Mender em uma placa ODYSSEY - X86 e então receber atualizações OTA de um Servidor Mender Hospedado ou Auto-Hospedado.

Este guia foca no uso da placa ODYSSEY - X86 executando um sistema Linux personalizado compilado usando o Yocto Project.

## Resultados de teste

As versões do Yocto Project na tabela abaixo foram testadas pela comunidade Mender. Atualize-a se você tiver testado esta integração em outras [versões do Yocto Project](https://wiki.yoctoproject.org/wiki/Releases?target=_blank):

| Yocto Project | Build | Runtime |
|---|---|---|
| dunfell (3.1 / 5.3.0) | teste funciona | teste funciona |

**Build** significa que a compilação do Yocto Project usando esta integração Mender é concluída sem erros e gera imagens.
**Runtime** significa que o Mender foi verificado como funcional na placa. Para placas baseadas em U-Boot, a [lista de verificação de integração](https://docs.mender.io/devices/integrating-with-u-boot/integration-checklist?target=_blank) foi verificada.

## Pré-requisitos

- Uma distribuição Linux suportada e dependências instaladas na sua estação de trabalho/notebook conforme descrito no [Yocto Mega Manual](https://www.yoctoproject.org/docs/current/mega-manual/mega-manual.html#detailed-supported-distros)
  - NOTA. As instruções dependem de qual versão do Yocto você pretende usar.
- [Placa ODYSSEY - X86](https://www.seeedstudio.com/ODYSSEY-X86J4125800-p-4915.html)

## Configurando a compilação

### Configurar ambiente Yocto

Defina o branch do Yocto Project para o qual você está compilando:

Crie um diretório para o seu ambiente  `mender-seeed`  e clone as
metainformações.

```
mkdir mender-seeed && cd mender-seeed
```

Obtenha todas as camadas necessárias:

```
git clone -b dunfell git://git.yoctoproject.org/poky layers/poky
git clone git://git.yoctoproject.org/meta-intel layers/meta-intel 
git clone -b dunfell https://github.com/mendersoftware/meta-mender layers/meta-mender
git clone -b dunfell https://github.com/openembedded/meta-openembedded  layers/meta-openembedded
git clone https://github.com/Seeed-Studio/meta-odyssey-x86 layers/meta-odyssey-x86
```

### Configurar ambiente de compilação

Inicialize o ambiente de compilação:

```
source layers/poky/oe-init-build-env 
```

Adicione as camadas do projeto Yocto:

```
bitbake-layers add-layer  ../layers/meta-intel 
bitbake-layers add-layer  ../layers/meta-odyssey-x86 
bitbake-layers add-layer  ../layers/meta-openembedded/meta-oe 
bitbake-layers add-layer  ../layers/meta-openembedded/meta-python 
bitbake-layers add-layer  ../layers/meta-openembedded/meta-networking 
bitbake-layers add-layer  ../layers/meta-mender/meta-mender-core 
bitbake-layers add-layer  ../layers/meta-mender/meta-mender-demo 
```

Aplicar configuração do Mender ao ambiente de compilação:

```
CONF_VERSION = "1"
MACHINE = "odyssey-x86-mender"
MENDER_ARTIFACT_NAME = "release-1"
INHERIT += "mender-full"
DISTRO_FEATURES_append = " systemd"
VIRTUAL-RUNTIME_init_manager = "systemd"
DISTRO_FEATURES_BACKFILL_CONSIDERED = "sysvinit"
VIRTUAL-RUNTIME_initscripts = ""
MENDER_STORAGE_DEVICE = "/dev/sda"
MENDER_STORAGE_TOTAL_SIZE_MB_DEFAULT = "4096"
MENDER_BOOT_PART_SIZE_MB = "64"
MENDER_DATA_PART_SIZE_MB = "1024"
MENDER_IMAGE_BOOTLOADER_FILE = "wic-initrd"

IMAGE_FEATURES_append = " \
    ssh-server-openssh \
    "
```

no seu local.conf.

### Configurar URL do servidor Mender (opcional)

Esta seção não é necessária para uma compilação bem-sucedida, mas as imagens que são geradas por padrão são adequadas apenas para uso com o cliente Mender em [implantações Standalone](https://docs.mender.io/architecture/standalone-deployments?target=_blank), devido à falta de configuração de servidor.

Você pode editar o arquivo `conf/local.conf` para fornecer a configuração do seu servidor Mender, garantindo que as imagens geradas e os Artefatos Mender se conectem ao servidor Mender que você está usando. Já deve haver uma seção comentada no arquivo `conf/local.conf` gerado e você pode simplesmente descomentar as opções de configuração relevantes e atribuir valores apropriados a elas.

Compilar para Hosted Mender:

```
# To get your tenant token:
#    - log in to https://hosted.mender.io
#    - click your email at the top right and then "My organization"
#    - press the "COPY TO CLIPBOARD"
#    - assign content of clipboard to MENDER_TENANT_TOKEN
#
MENDER_SERVER_URL = "https://hosted.mender.io"
MENDER_TENANT_TOKEN = "<copy token here>"
```

Compilar para Mender Demo Server:

```
# https://docs.mender.io/administration/demo-installation
#
MENDER_DEMO_HOST_IP_ADDRESS = "<IP address of Mender demo server>"
```

Compilar para Mender Production/ Self-Hosted (on-prem):

```
# https://docs.mender.io/3.1/system-updates-yocto-project/build-for-production
#
# Uncomment below and update the URL to match your configured domain
# name and provide the path to the generated server.crt file.
#
# Note that a custom server.crt file is only necessary if you are using
# self-signed certificates.
#
# NOTE! It is recommend that you provide below information in your custom
# Yocto layer and this is only for demo purposes. See linked documentation
# for additional information.
MENDER_SERVER_URL = "<URL of Self-Hosted Mender Server>"
FILESEXTRAPATHS_prepend_pn-mender-client := "<DIRECTORY-CONTAINING-server.crt>:"
SRC_URI_append_pn-mender-client = " file://server.crt"
```

## Compilando a imagem

Agora você pode prosseguir com a compilação de uma imagem:

```
MACHINE="odyssey-x86-mender" bitbake odyssey-image-base
```

Substitua `odyssey-image-base` pelo alvo de imagem desejado.

## Usando a saída da compilação

Após uma compilação bem-sucedida, as imagens e artefatos de compilação são:

- `build/tmp/deploy/images/odyssey-x86-mender/odyssey-image-base-odyssey-x86.uefiimg.bz2`

se você já tiver o Mender em execução no seu dispositivo e quiser implantar uma atualização de rootfs usando esta compilação, você deve usar os arquivos [Mender Artifact](https://docs.mender.io/architecture/mender-artifacts?target=_blank), que têm o sufixo  `.mender`. Você pode implantar este Artifact em modo gerenciado com o servidor Mender (carregando-o em Releases na interface do servidor) ou usando apenas o cliente Mender em [implantações Standalone](https://docs.mender.io/architecture/standalone-deployments?target=_blank).

## Instruções de gravação (flash)

Existem dois métodos diferentes de gravar a imagem e executá-la na placa ODYSSEY - X86.

**Método 1:** Gravar em uma unidade flash USB conectada à placa ODYSSEY - X86 e inicializar o sistema a partir da unidade flash.

**Método 2:** Gravar em um HDD/SSD conectado à placa ODYSSEY - X86 e executar a partir do HDD/SSD.

### Método 1

- **Passo 1.** [Baixe o balenaEtcher](https://www.balena.io/etcher/) de acordo com o seu sistema operacional

- **Passo 2.** Conecte uma unidade flash USB ao PC

- **Passo 3.** Clique em **Flash from file** e selecione o arquivo `mender-seeed/build/tmp/deploy/images/odyssey-x86-mender/odyssey-image-base-odyssey-x86.uefiimg.bz2`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mender/client/balena.png" alt="pir" width="600" height="auto"/></p>

- **Passo 4.** Clique em **Select target** e escolha a unidade USB conectada

- **Passo 5.** Por fim, clique em **Flash**

- **Passo 6.** Conecte a unidade flash à placa ODYSSEY - X86 e ligue a placa

- **Passo 7.** Ao ligar a placa, mantenha pressionada a **tecla DELETE** para entrar na **configuração da BIOS**

- **Passo 8.** Vá para a seção **Boot** e defina a **Boot Option #1** para **UEFI: USB, Partition 1**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mender/client/UEFI.png" alt="pir" width="1000" height="auto"/></p>

- **Passo 9.** Vá para **Save & Exit** e selecione **Save Changes and Reset**

Agora o sistema operacional será inicializado com sucesso a partir da unidade flash USB

### Método 2

- **Passo 1.** Siga do **passo 1 - passo 9** do **Método 1** acima

- **Passo 2.** Após inicializar com sucesso, desligue a placa executando:

```sh
poweroff
```

**Nota:** Precisamos inicializar uma vez após a gravação porque a partição **data** irá crescer para ocupar o espaço restante na unidade flash, e usaremos esse espaço para armazenar a imagem que precisamos gravar no HDD/SSD.

- **Passo 3.** Remova a unidade flash do ODYSSEY - X86 e conecte-a ao PC

- **Passo 4.** Abra uma janela de terminal e copie o **uefiimg** da compilação Yocto para a partição **data** da unidade flash

```sh
sudo cp mender-seeed/build/tmp/deploy/images/odyssey-x86-mender/odyssey-image-base-odyssey-x86.uefiimg /media/username/data
```

**Nota:** Substitua **username** pelo nome de usuário do seu PC

- **Passo 5.** Remova a unidade flash do PC e conecte-a à placa ODYSSEY - X86. Conecte também um HDD/SSD externo à placa ODYSSEY.

- **Passo 6.** Depois que a placa for inicializada, digite o seguinte na janela do terminal para listar as partições de disco

```sh
fdisk -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mender/client/partition.png" alt="pir" width="600" height="auto"/></p>

Podemos ver que o HDD conectado é **/dev/sdb**

- **Passo 7.** Grave o arquivo **.uefiimg** que copiamos anteriormente no HDD/SSD conectado usando o utilitário **dd**

```sh
dd if=/data/odyssey-image-base-odyssey-x86.uefiimg of=/dev/sdb
```

**Nota:** Substitua **/dev/sdb** pelo nome correspondente ao HDD/SSD conectado

- **Passo 8.** Quando a gravação terminar, desligue o ODYSSEY - X86

```sh
poweroff
```

- **Passo 9.** Remova a unidade flash USB e ligue o ODYSSEY - X86

- **Passo 10.** Ao ligar a placa, mantenha pressionada a tecla **F7** para entrar na configuração da BIOS

- **Passo 11.** Vá para a seção **BOOT** e defina a **Boot Option #1** para **UEFI: USB, Partition 1**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Mender/client/UEFI.png" alt="pir" width="1000" height="auto"/></p>

- **Passo 12.** Vá para **Save & Exit** e selecione **Save Changes and Reset**

Agora o sistema operacional será inicializado com sucesso a partir do HDD/SSD
