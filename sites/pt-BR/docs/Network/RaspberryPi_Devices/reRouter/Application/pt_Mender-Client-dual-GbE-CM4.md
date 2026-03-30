---
description: Cliente Mender no Dual GbE CM4
title: Uso do Mender
keywords:
  - Sorftware Mender
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Mender-Client-dual-GbE-CM4
last_update:
  date: 1/13/2023
  author: jianjing Huang
createdAt: '2023-01-13'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Mender-Client-dual-GbE-CM4/
---


Podemos configurar o Mender Client em uma Dual Gigabit Ethernet Carrier Board para Raspberry Pi Compute Module 4 e então receber atualizações OTA a partir de um Mender Server em nuvem (Hosted) ou auto-hospedado (Self-Hosted).

Este guia foca no uso de uma Dual Gigabit Ethernet Carrier Board para RPi CM4 executando um sistema Linux customizado compilado usando o Yocto Project.

## Resultados de teste

As versões do Yocto Project na tabela abaixo foram testadas pela comunidade Mender. Atualize-a se você tiver testado esta integração em outras [versões do Yocto Project](https://wiki.yoctoproject.org/wiki/Releases?target=_blank):

| Yocto Project | Build | Runtime |
|---|---|---|
| dunfell (3.1 / 5.3.0) | teste funciona | teste funciona |

**Build** significa que a compilação do Yocto Project usando esta integração com o Mender é concluída sem erros e gera imagens.
**Runtime** significa que o Mender foi verificado como funcional na placa. Para placas baseadas em U-Boot, a [lista de verificação de integração](https://docs.mender.io/devices/integrating-with-u-boot/integration-checklist?target=_blank) foi verificada.

## Pré-requisitos

- Uma distribuição Linux suportada e dependências instaladas em sua estação de trabalho/notebook conforme descrito no [Yocto Mega Manual](https://www.yoctoproject.org/docs/current/mega-manual/mega-manual.html#detailed-supported-distros)
  - NOTA. As instruções dependem de qual versão do Yocto você pretende usar.
- [Dual Gigabit Ethernet Carrier Board para RPi CM4](https://www.seeedstudio.com/Dual-GbE-Carrier-Board-with-4GB-RAM-32GB-eMMC-RPi-CM-4-p-4898.html)

## Configurando a compilação

### Configurar o ambiente Yocto

Crie um diretório para o seu ambiente `mender-dual-gbe-cm4` e clone as metainformações.

```
mkdir mender-dual-gbe-cm4 && cd mender-dual-gbe-cm4
```

Obtenha todas as camadas necessárias:

```
git clone -b master git://git.yoctoproject.org/poky layers/poky
git clone -b dunfell https://github.com/Seeed-Studio/meta-seeed-cm4.git layers/meta-seeed-cm4
git clone -b master git://git.yoctoproject.org/meta-raspberrypi layers/meta-raspberrypi
git clone -b dunfell https://github.com/openembedded/meta-openembedded.git layers/meta-openembedded
git clone -b dunfell git://github.com/mendersoftware/meta-mender layers/meta-mender
```

Para ser compatível com a meta-raspberrypi, altere a versão do gstreamer do poky para a mais recente

```
cd layers/poky
cp -r meta/recipes-multimedia/gstreamer/ ../
git checkout dunfell
rm -r meta/recipes-multimedia/gstreamer/
cp -r ../gstreamer/ meta/recipes-multimedia/
rm -r ../gstreamer/
```

Modifique a meta-raspberrypi para evitar erro de compilação

```
cd layers/meta-raspberrypi
rm dynamic-layers/meta-python/recipes-connectivity/lirc/*.bbappend
sed -i '/^LAYERSERIES_COMPAT_raspberrypi/s/= .*$/= "honister dunfell"/g' conf/layer.conf
sed -i 's/arm\/armv8a\///g' conf/machine/raspberrypi4-64.conf
```

Modifique a meta-mender para evitar erro de compilação

```
cd layers/meta-mender
rm meta-mender-raspberrypi/recipes-kernel/linux/linux-raspberrypi-rt_%.bbappend
sed -i 's/"0x4000"/"0x1f000"/g' meta-mender-raspberrypi/recipes-bsp/u-boot/u-boot-raspberrypi.inc
sed -i 's/bootfiles/rpi-bootfiles/g' meta-mender-core/classes/mender-part-images.bbclass
```

### Configurar o ambiente de build

Inicialize o ambiente de build:

```
source layers/poky/oe-init-build-env 
```

Adicione as camadas do projeto Yocto:

```
bitbake-layers add-layer ../layers/meta-raspberrypi
bitbake-layers add-layer ../layers/meta-seeed-cm4
bitbake-layers add-layer ../layers/meta-openembedded/meta-oe
bitbake-layers add-layer ../layers/meta-openembedded/meta-python
bitbake-layers add-layer ../layers/meta-mender/meta-mender-core
bitbake-layers add-layer ../layers/meta-mender/meta-mender-raspberrypi
bitbake-layers add-layer ../layers/meta-mender/meta-mender-demo
```

### Configurar URL do servidor Mender (opcional)

Esta seção não é necessária para uma compilação bem-sucedida, mas as imagens que são geradas por padrão só são adequadas para uso com o Mender client em [implantações Standalone](https://docs.mender.io/architecture/standalone-deployments?target=_blank), devido à falta de configuração de servidor.

Você pode editar o arquivo `conf/local.conf` para fornecer a configuração do seu servidor Mender, garantindo que as imagens geradas e os Mender Artifacts se conectem ao servidor Mender que você está usando. Já deve haver uma seção comentada no arquivo `conf/local.conf` gerado e você pode simplesmente descomentar as opções de configuração relevantes e atribuir valores apropriados a elas.

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
MACHINE="dual-gbe-cm4-mender" bitbake core-image-base
```

Substitua `core-image-base` pelo alvo de imagem desejado.

## Usando o resultado da compilação

Após uma compilação bem-sucedida, as imagens e artefatos de build são:

- `build/tmp/deploy/images/dual-gbe-cm4-mender/core-image-base-dual-gbe-cm4-mender.sdimg.bz2`

se você já tiver o Mender em execução no seu dispositivo e quiser implantar uma atualização de rootfs usando esta compilação, você deve usar os arquivos [Mender Artifact](https://docs.mender.io/architecture/mender-artifacts?target=_blank), que têm o sufixo `.mender`. Você pode implantar este Artifact em modo gerenciado com o Mender server (fazendo upload em Releases na interface do servidor) ou usando apenas o Mender client em [implantações Standalone](https://docs.mender.io/architecture/standalone-deployments?target=_blank).

## Instruções de gravação

Siga [este guia da wiki](https://wiki.seeedstudio.com/pt-br/Dual-Gigabit-Ethernet-Carrier-Board-for-Raspberry-Pi-CM4/#flash-to-emmc-cm4-emmc-version) para aprender como gravar a imagem acima na eMMC da placa.

Uma vez gravado, quando você ligar o reTerminal, ele iniciará a partir da imagem compilada.

## Inicialização bem-sucedida

Se você vir o seguinte log pela UART, isso significa que o sistema inicializou com sucesso

```
[  OK  ] Started Kernel Logging Service.
[  OK  ] Started System Logging Service.
[  OK  ] Started D-Bus System Message Bus.
[  OK  ] Started Getty on tty1.
         Starting Telephony service...
[  OK  ] Started Serial Getty on ttyS0.
[  OK  ] Reached target Login Prompts.
[    7.340436] audit: type=1334 audit(1638186061.687:4): prog-id=7 op=LOAD
[    7.347278] audit: type=1334 audit(1638186061.691:5): prog-id=8 op=LOAD
         Starting Login Service...
[  OK  ] Started Save/Restore Sound Card State.
[    7.386306] Bluetooth: Core ver 2.22
[    7.390103] NET: Registered protocol family 31
[    7.394856] Bluetooth: HCI device and connection manager initialized
[[    7.401967] Bluetooth: HCI socket layer initialized
  OK      7.407591] Bluetooth: L2CAP socket layer initialized
0m] Reac[    7.413409] Bluetooth: SCO socket layer initialized
hed target Sound Card.
[  OK  ] Started Telephony service.
[  OK  ] Started Avahi mDNS/DNS-SD Stack.
[  OK  ] Started Login Service.

Poky (Yocto Project Reference Distro) 3.1.12 dual-gbe-cm4-mender ttyS0

dual-gbe-cm4-mender login: root
root@dual-gbe-cm4-mender:~#
```

## Recursos

- **[Web Page]** [Documentação Oficial do Mender](https://docs.mender.io)

- **[Web Page]** [Documentação Oficial do Yocto](https://docs.yoctoproject.org)

- **[Web Page]** [Documentação Oficial do Raspberry Pi CM4](https://www.raspberrypi.com/documentation/computers/compute-module.html)

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
