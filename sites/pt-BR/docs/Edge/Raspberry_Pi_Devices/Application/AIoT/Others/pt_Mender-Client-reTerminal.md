---
description: Cliente Mender no reTerminal
title: Cliente Mender no reTerminal
keywords:
  - Edge
  - Aplicativo reTerminal
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Mender-Client-reTerminal
last_update:
  date: 1/31/2023
  author: jianjing Huang
createdAt: '2023-01-13'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Mender-Client-reTerminal/
---

# Instalação do Cliente Mender no reTerminal

Podemos configurar o Cliente Mender em um reTerminal e então receber atualizações OTA de um Servidor Mender Hospedado ou Auto-Hospedado.

Este guia se concentra em usar um reTerminal executando um sistema Linux personalizado compilado usando o Yocto Project.

## Resultados dos testes

As versões do Yocto Project na tabela abaixo foram testadas pela comunidade Mender. Atualize-a se você tiver testado esta integração em outras [versões do Yocto Project](https://wiki.yoctoproject.org/wiki/Releases?target=_blank):

| Yocto Project | Build | Runtime |
|---|---|---|
| dunfell (3.1 / 5.3.0) | teste funciona | teste funciona |

**Build** significa que a compilação do Yocto Project usando esta integração Mender é concluída sem erros e gera imagens.
**Runtime** significa que foi verificado que o Mender funciona na placa. Para placas baseadas em U-Boot, o [checklist de integração](https://docs.mender.io/devices/integrating-with-u-boot/integration-checklist?target=_blank) foi verificado.

## Pré-requisitos

- Uma distribuição Linux compatível e dependências instaladas na sua estação de trabalho/notebook conforme descrito no [Yocto Mega Manual](https://www.yoctoproject.org/docs/current/mega-manual/mega-manual.html#detailed-supported-distros)
  - NOTA. As instruções dependem de qual versão do Yocto você pretende usar.
- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html)

## Configurando a compilação

### Configurar ambiente Yocto

Crie um diretório para o seu ambiente `mender-reterminal` e clone as metainformações.

```
mkdir mender-reterminal && cd mender-reterminal
```

Obtenha todas as camadas necessárias:

```
git clone -b master git://git.yoctoproject.org/poky layers/poky
git clone -b dunfell https://github.com/Seeed-Studio/meta-seeed-cm4.git layers/meta-seeed-cm4
git clone -b master git://git.yoctoproject.org/meta-raspberrypi layers/meta-raspberrypi
git clone -b dunfell https://github.com/meta-qt5/meta-qt5.git layers/meta-qt5
git clone -b dunfell https://github.com/openembedded/meta-openembedded.git layers/meta-openembedded
git clone -b dunfell git://github.com/mendersoftware/meta-mender layers/meta-mender
```

Para ser compatível com meta-raspberrypi, altere a versão do gstreamer do poky para a mais recente

```
cd layers/poky
cp -r meta/recipes-multimedia/gstreamer/ ../
git checkout dunfell
rm -r meta/recipes-multimedia/gstreamer/
cp -r ../gstreamer/ meta/recipes-multimedia/
rm -r ../gstreamer/
```

Modifique o meta-raspberrypi para evitar erro de compilação

```
cd layers/meta-raspberrypi
rm dynamic-layers/meta-python/recipes-connectivity/lirc/*.bbappend
sed -i '/^LAYERSERIES_COMPAT_raspberrypi/s/= .*$/= "honister dunfell"/g' conf/layer.conf
sed -i 's/arm\/armv8a\///g' conf/machine/raspberrypi4-64.conf
```

Modifique o meta-mender para evitar erro de compilação

```
cd layers/meta-mender
rm meta-mender-raspberrypi/recipes-kernel/linux/linux-raspberrypi-rt_%.bbappend
sed -i 's/"0x4000"/"0x1f000"/g' meta-mender-raspberrypi/recipes-bsp/u-boot/u-boot-raspberrypi.inc
sed -i 's/bootfiles/rpi-bootfiles/g' meta-mender-core/classes/mender-part-images.bbclass
```

Modifique o meta-seeed-cm4 para evitar erro de compilação

```
cd layers/meta-seeed-cm4
sed -i 's/eudev/udev/g' recipes-lvgl/lvgl/lvgl_demo_git.bb
```

### Configurar ambiente de compilação

Inicialize o ambiente de compilação:

```
source layers/poky/oe-init-build-env 
```

Adicione as camadas do projeto yocto:

```
bitbake-layers add-layer ../layers/meta-raspberrypi
bitbake-layers add-layer ../layers/meta-seeed-cm4
bitbake-layers add-layer ../layers/meta-qt5
bitbake-layers add-layer ../layers/meta-openembedded/meta-oe
bitbake-layers add-layer ../layers/meta-openembedded/meta-python
bitbake-layers add-layer ../layers/meta-mender/meta-mender-core
bitbake-layers add-layer ../layers/meta-mender/meta-mender-raspberrypi
bitbake-layers add-layer ../layers/meta-mender/meta-mender-demo
```

### Configurar URL do servidor Mender (opcional)

Esta seção não é necessária para uma compilação bem-sucedida, mas as imagens que são geradas por padrão são adequadas apenas para uso com o cliente Mender em [implantações Standalone](https://docs.mender.io/architecture/standalone-deployments?target=_blank), devido à falta de configuração de servidor.

Você pode editar o arquivo `conf/local.conf` para fornecer a configuração do seu servidor Mender, garantindo que as imagens e Artefatos Mender gerados estejam se conectando ao servidor Mender que você está usando. Já deve haver uma seção comentada no arquivo `conf/local.conf` gerado e você pode simplesmente descomentar as opções de configuração relevantes e atribuir valores apropriados a elas.

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

Agora você pode prosseguir compilando uma imagem:

```
MACHINE="seeed-reterminal-mender" bitbake rpi-test-image
```

Substitua `rpi-test-image` pelo alvo de imagem desejado.

## Usando a saída da compilação

Após uma compilação bem-sucedida, as imagens e artefatos de compilação são:

- `build/tmp/deploy/images/seeed-reterminal-mender/rpi-test-image-seeed-reterminal-mender.sdimg.bz2`

se você já tiver o Mender em execução no seu dispositivo e quiser implantar uma atualização de rootfs usando esta compilação, você deve usar os arquivos [Mender Artifact](https://docs.mender.io/architecture/mender-artifacts?target=_blank), que têm o sufixo `.mender`. Você pode implantar este Artifact em modo gerenciado com o servidor Mender (fazer upload em Releases na interface do servidor) ou usando apenas o cliente Mender em [implantações Standalone](https://docs.mender.io/architecture/standalone-deployments?target=_blank).

## Instruções de gravação

Siga [este guia da wiki](https://wiki.seeedstudio.com/pt-br/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc) para aprender como gravar a imagem acima no eMMC do reTerminal.

Depois de gravada, quando você ligar o reTerminal, ele inicializará a partir da imagem compilada.

## Inicialização bem-sucedida

Se você vir o seguinte log a partir da UART, isso significa que o sistema foi inicializado com sucesso

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

Poky (Yocto Project Reference Distro) 3.1.12 seeed-reterminal-mender ttyS0

seeed-reterminal-mender login: root
root@seeed-reterminal-mender:~#
```

## Recursos

- **[Web Page]** [Documentação Oficial do Mender](https://docs.mender.io)

- **[Web Page]** [Documentação Oficial do Yocto](https://docs.yoctoproject.org)

- **[Web Page]** [Documentação Oficial do Raspberry Pi CM4](https://www.raspberrypi.com/documentation/computers/compute-module.html)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
