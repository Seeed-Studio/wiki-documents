---
description: Este tutorial mostrará como compilar, configurar e gravar o balenaOS para o R1000.
title: Compilar balenaOS para reComputer R1000
keywords:
  - Edge
  - reComputer R1000
  - balena
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /build_balenaOS_for_reComputer_r1000
last_update:
  date: 10/8/2024
  author: ShuishengPeng
createdAt: '2024-06-14'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/build_balenaOS_for_reComputer_r1000/
---

## O que é balena?

[balena](https://www.balena.io/) é uma plataforma de Internet das Coisas (IoT) projetada para ajudar desenvolvedores a criar, implantar e gerenciar aplicações de IoT em uma frota de dispositivos. Ela suporta uma ampla variedade de arquiteturas de dispositivo e inclui recursos para implantação de aplicações conteinerizadas, tornando possível atualizar facilmente seu software de IoT e o HostOS, corrigir bugs e introduzir novos recursos em suas aplicações de IoT. A balena fornece uma maneira unificada de enviar atualizações de código, gerenciar configurações de dispositivos e garantir que os dispositivos funcionem de forma confiável e segura em campo, independentemente de sua localização ou condições de rede.

Este tutorial mostrará como compilar, configurar e gravar o balenaOS para o R1000.
<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/balena.png" alt="pir" width="700" height="auto" /></div>

## Primeiros Passos

Antes de iniciar este projeto, você pode precisar preparar seu hardware e software com antecedência, conforme descrito aqui.

### Preparação de Hardware

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### Software

- Ambiente [yocto](https://docs.yoctoproject.org/4.0.20/brief-yoctoprojectqs/index.html)
- Ambiente [docker](https://www.docker.com/)
- [balenaEtcher](https://etcher.balena.io/) para gravar a memória CM4.

### Configuração de Hardware

**Passo 1**: Você precisa ajustar a chave na lateral do R1000 para o modo de boot e então ligar o dispositivo.

<div class="table-center">

| Posição da Chave                                           | Modo        | Descrição      | nRPI-BOOT |
| ------------------------------------------------------------ | ----------- | -------------- | --------- |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="image" width="80"/> | Modo normal | Inicializar a partir da eMMC | Baixo     |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="image" width="80"/>  | Modo de flash | Inicializar a partir do USB | Alto      |

</div>

**Passo 2**: Utilize um cabo USB Tipo-C para conectar o reComputer R1000 ao seu computador.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/type-cport.png" alt="pir" width="250" height="auto" /></div>

### Compilar R1000-balenaOS

**Passo 1**: Baixe as seguintes bibliotecas e certifique-se de que o ambiente atual suporta a compilação do projeto yocto.

```shell
 sudo apt install gawk wget git diffstat unzip texinfo gcc build-essential chrpath socat cpio python3 python3-pip python3-pexpect xz-utils debianutils iputils-ping python3-git python3-jinja2 python3-subunit zstd liblz4-tool file locales libacl1 jq nodejs npm
 sudo locale-gen en_US.UTF-8
```

**Passo 2**: Insira as seguintes instruções para baixar e configurar `balena-seeed-cm4` e, por fim, compilar o projeto yocto.

```shell
  git clone https://github.com/Seeed-Studio/balena-seeed-cm4.git
  cd balena-seeed-cm4
  git submodule update --init --recursive
  ./balena-yocto-scripts/build/barys --dry-run
  source layers/poky/oe-init-build-env
  MACHINE=seeed-recomputer-r100x bitbake balena-image
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/0_build_balenaOS.gif" alt="pir" width="700" height="auto" /></div>

**Passo 3**: A imagem compilada é nomeada `balena-image-seeed-recomputer-r100x.balenaos-img` e está no diretório `build/tmp/deploy/images/seeed-recomputer-r100x`. Neste ponto, a imagem está com a compilação concluída; o próximo passo é configurá-la.

:::note
A versão padrão do balenaOS deste repositório é 5.3.27+rev1. As informações de versão estão localizadas no arquivo `VERSION`. Se você precisar compilar outras versões do balenaOS, altere o conteúdo do arquivo `VERSION`.
:::

### Configurar R1000-balenaOS

**Passo 1**: Acesse o diretório onde a imagem compilada está localizada, em seguida abra a interface de linha de comando, digite `balena login` e faça login no `balena Cloud`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/1_login_balena.gif" alt="pir" width="700" height="auto" /></div>

**Passo 2**: Crie uma nova `Fleet`, selecione o tipo como `Raspberry Pi 4 (using 64bit os)`

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/2.1new_fleet.png" alt="pir" width="700" height="auto" /></div>

**Passo 3**: Insira o seguinte comando para pré-carregar a imagem.

```shell
  balena preload ./balena-image-seeed-recomputer-r100x.balenaos-img --fleet [fleet name]
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/2_preload_image.gif" alt="pir" width="700" height="auto" /></div>

**Passo 4**: Registre o novo dispositivo na Fleet e gere um ID de dispositivo.

```shell
balena device register [fleet name]
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/3_regester_dev.gif" alt="pir" width="700" height="auto" /></div>

**Passo 5**: Gerar o arquivo de configuração.

```shell
balena config generate --device [uuid] --version 3.0.15+atsss --dev -o config.json
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/4_generate_config.gif" alt="pir" width="700" height="auto" /></div>

**Passo 6**: Carregar o arquivo de configuração.

```shell
balena os configure balena-image-seeed-recomputer-r100x.balenaos-img --config config.json  --device [uuid] --version 3.0.15+atsss --dev
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/5_config_image.gif" alt="pir" width="700" height="auto" /></div>

**Passo 7**: Copie o arquivo de imagem final; esta imagem pode ser gravada no reComputer R1000.

```shell
cp balena-image-seeed-recomputer-r100x.balenaos-img recomputer_balenaos-dev.img
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/6_rename.gif" alt="pir" width="700" height="auto" /></div>

### Etapas para Gravar o balenaOS

**Passo 1**: Abra o software [**rpiboot**](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe) e, em seguida, o sistema exibirá o novo disco.

**Passo 2**: Abra a ferramenta de gravação [balenaEtcher](https://etcher.balena.io/), selecione o arquivo de imagem do balena, depois selecione o disco de destino e, por fim, clique em Burn.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/burn_image.gif" alt="pir" width="700" height="auto" /></div>

**Passo 3**: Após a conclusão da gravação, reinicie o R1000. Depois de algum tempo, você verá o novo dispositivo online com sucesso no balena Cloud.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/balena/7_online.png" alt="pir" width="700" height="auto" /></div>

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer a você diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
