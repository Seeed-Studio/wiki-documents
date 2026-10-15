---
description: Selecionar, compilar, empacotar e gravar uma imagem Yocto JetPack 7.2 para as placas-carrier Jetson compatíveis da Seeed Studio.
title: Compilar e Gravar Yocto para Placas-Carrier Seeed Jetson
keywords:
  - Yocto
  - OpenEmbedded
  - Seeed Jetson carrier board
  - Jetson Orin
  - Jetson Thor
  - meta-tegra
  - Jetson Linux 39.2
image: https://files.seeedstudio.com/wiki/jetpack-7.2/jetpack-7-2-yocto-workflow.png
slug: /build_and_flash_yocto_for_seeed_jetson_carrier_boards
aliases:
  - /build_and_flash_yocto_for_recomputer_super_bk
last_update:
  date: 2026-09-01
  author: Dayu
createdAt: '2026-07-24'
updatedAt: '2026-09-01'
url: https://wiki.seeedstudio.com/pt-br/build_and_flash_yocto_for_seeed_jetson_carrier_boards/
---

# Compilar e Gravar Yocto para Placas-Carrier Seeed Jetson

Este guia fornece um fluxo de trabalho comum para compilar e gravar uma imagem OpenEmbedded/Yocto nas placas-carrier Jetson da Seeed Studio definidas pelo repositório [`seeed-tegra-demo-distro`](https://github.com/jjjadand/seeed-tegra-demo-distro).

O repositório usa os branches `wrynose` do OE4T e o BSP `meta-tegra` para **Jetson Linux R39.2.0 / JetPack 7.2**. Uma imagem Yocto usa componentes do BSP NVIDIA Jetson Linux, mas não é o sistema de arquivos raiz Ubuntu instalado pelo NVIDIA SDK Manager. O gerenciamento de pacotes, a composição da imagem, o ambiente desktop e o comportamento de atualização são controlados pelos metadados do Yocto.

:::warning Escopo do repositório
Os comandos e as tabelas de parâmetros neste artigo seguem o estado do repositório revisado em **31 de agosto de 2026**. Antes de compilar, verifique novamente o README do repositório e a matriz de suporte, pois as máquinas disponíveis, SKUs de módulo, branches e o status de validação de hardware podem mudar.
:::

O diagrama a seguir resume todo o fluxo de trabalho. Primeiro selecione a placa-carrier e o módulo Jetson, depois mantenha a mesma máquina, SKU, diretório de compilação e receita de imagem durante a compilação e a gravação.

<div align="center">
  <img width={1200} src="https://files.seeedstudio.com/wiki/jetpack-7.2/jetpack-7-2-yocto-workflow.png" alt="Fluxo de trabalho de compilação e gravação Yocto JetPack 7.2 para placas-carrier Seeed Jetson" />
</div>

## Antes de Começar

Use um host Linux físico x86_64 com um SSD local rápido, conexão de rede estável e acesso `sudo`. Prepare um cabo USB com suporte a dados para a porta de recuperação/dispositivo da placa-carrier. Uma compilação completa de desenvolvimento Yocto pode consumir várias centenas de gigabytes, portanto reserve aproximadamente **400 GB** de armazenamento livre sempre que possível. Use pelo menos **16 GB de RAM**, com **32 GB ou mais recomendados**.

Instale os pacotes comuns necessários para compilação e gravação em um host Ubuntu:

```bash
sudo apt update
sudo apt install -y \
  gawk wget git diffstat unzip texinfo gcc build-essential chrpath socat cpio \
  python3 python3-pip python3-pexpect python3-git python3-jinja2 \
  xz-utils debianutils iputils-ping libegl1-mesa libsdl1.2-dev \
  pylint xterm zstd liblz4-tool file locales \
  gdisk parted udev udisks2
```

Os nomes dos pacotes podem variar entre distribuições host. Siga o Quick Build do Yocto Project e os requisitos de gravação do OE4T para o branch usado pelo repositório. Se o BitBake relatar uma distribuição host não suportada, use um host suportado em vez de contornar a validação.

Os scripts auxiliares usam os seguintes parâmetros em todo o fluxo de trabalho:

| Parâmetro | Finalidade | Regra importante |
| --- | --- | --- |
| `--machine` | Seleciona a configuração `MACHINE` Yocto da placa-carrier. | Deve corresponder à placa-carrier física. |
| `--module-sku` | Seleciona o módulo Jetson instalado em uma carrier Orin configurável. São os quatro dígitos finais do número do módulo NVIDIA. | Obrigatório para máquinas Orin configuráveis; omita para máquinas Thor com módulo fixo. |
| `--build-dir` | Armazena a configuração selecionada, arquivos de trabalho do BitBake e artefatos de deploy. | Use um diretório separado para cada combinação de carrier e SKU de módulo. |
| `--cache-dir` | Armazena downloads compartilhados e dados de cache sstate. | Reutilize um cache local do host entre compilações. |
| `--image` | Seleciona a receita de imagem do BitBake. | Use o mesmo nome de imagem para compilação e preparação da gravação. |
| `--output-dir` | Seleciona onde o pacote tegraflash verificado é extraído. | Use um diretório local do host novo ou vazio. |

`MACHINE` é o nome do alvo de hardware Yocto, não apenas um rótulo de produto. Ele seleciona uma configuração de máquina em `layers/meta-seeed/conf/machine/`, que determina a família SoC, DTB da carrier, configuração do módulo, dados BPMP, arquivos de pinmux e tensão de pad, overlays e variáveis de gravação usadas pelo BitBake e pelo tegraflash.

:::tip Selecione a máquina para o seu hardware
Os comandos `recomputer-orin-super-j401` neste guia são apenas um exemplo concreto. Antes de preparar o workspace, selecione o `MACHINE` e o SKU do módulo que correspondem à sua carrier e ao módulo Jetson na [tabela de placas-carrier](https://wiki.seeedstudio.com/pt-br/build_and_flash_yocto_for_seeed_jetson_carrier_boards/#escolher-a-placa-carrier-e-o-módulo-jetson).
:::

Escolha uma imagem com base na finalidade do alvo:

| Receita de imagem | Caso de uso |
| --- | --- |
| `demo-image-full` | Imagem de referência/demo OE4T com gráficos, containers, OpenCV e exemplos NVIDIA. Este é o padrão dos scripts auxiliares. |
| `seeed-image-jetson-runtime` | Perfil de runtime da Seeed alinhado com a pilha de runtime OE4T/NVIDIA. |
| `seeed-image-jetson-development` | Imagem de runtime mais pacotes de desenvolvimento CUDA no alvo, cabeçalhos, ferramentas de compilação/depuração, exemplos e testes. |

Os exemplos abaixo usam `seeed-image-jetson-development`.

## Escolher a Placa-Carrier e o Módulo Jetson

O repositório revisado para este guia define 16 configurações de máquina Seeed. Você também pode imprimir a lista de máquinas do checkout atual com `./scripts/seeed/build.sh machines`.

| Produto ou configuração da carrier | `MACHINE` | Seleção de módulo suportado |
| --- | --- | --- |
| reComputer Industrial J401 | `recomputer-industrial-orin-j401` | P3767 Orin NX/Nano: `0000`, `0001`, `0003`, `0004` |
| reComputer Mini AGX Orin J501X | `recomputer-mini-agx-orin-j501x` | P3701 AGX Orin: `0004`, `0005` |
| reComputer Orin J401 | `recomputer-orin-j401` | P3767 Orin NX/Nano: `0000`, `0001`, `0003`, `0004` |
| reComputer Orin J40mini | `recomputer-orin-j40mini` | P3767 Orin NX/Nano: `0000`, `0001`, `0003`, `0004` |
| reComputer Robotics J401 | `recomputer-orin-robotics-j401` | P3767 Orin NX/Nano: `0000`, `0001`, `0003`, `0004` |
| reComputer Robotics J401 GMSL | `recomputer-orin-robotics-j401-gmsl` | P3767 Orin NX/Nano: `0000`, `0001`, `0003`, `0004` |
| reComputer Super J401 | `recomputer-orin-super-j401` | P3767 Orin NX/Nano: `0000`, `0001`, `0003`, `0004` |
| reComputer Robo AGX Orin J501X | `recomputer-robo-agx-orin-j501x` | P3701 AGX Orin: `0004`, `0005` |
| reComputer Rugged Orin J401 | `recomputer-rugged-orin-j401` | P3767 Orin NX/Nano: `0000`, `0001`, `0003`, `0004` |
| reComputer Thor Carrier J601 | `recomputer-thor-carrier-j601` | P3834-0008 T5000 fixo; omita `--module-sku` |
| reComputer Thor Carrier J6014 | `recomputer-thor-carrier-j6014` | P3834-0000 T4000 fixo; omita `--module-sku` |
| reComputer Thor Carrier J6015 | `recomputer-thor-carrier-j6015` | P3834-0008 T5000 fixo; omita `--module-sku` |
| reServer AGX Orin J501X | `reserver-agx-orin-j501x` | P3701 AGX Orin: `0000`, `0001`, `0002`, `0004`, `0005` |
| reServer AGX Orin J501X GMSL | `reserver-agx-orin-j501x-gmsl` | P3701 AGX Orin: `0000`, `0001`, `0002`, `0004`, `0005` |
| reServer Industrial Orin J401 | `reserver-industrial-orin-j401` | P3767 Orin NX/Nano: `0000`, `0001`, `0003`, `0004` |
| Seeed AGX Orin Kit | `seeed-agx-orin-kit` | P3701 AGX Orin: `0000`, `0001`, `0002`, `0004`, `0005` |

`--module-sku` são os quatro últimos dígitos impressos no número de peça do módulo NVIDIA. Verifique o rótulo do módulo ou o EEPROM em vez de selecionar um valor de memória.

| Família de módulo | `--module-sku` | Número completo do módulo | Modelo de módulo ou mapeamento do repositório |
| --- | --- | --- | --- |
| P3767 | `0000` | `P3767-0000` | Jetson Orin NX 16GB |
| P3767 | `0001` | `P3767-0001` | Jetson Orin NX 8GB |
| P3767 | `0003` | `P3767-0003` | Jetson Orin Nano 8GB |
| P3767 | `0004` | `P3767-0004` | Jetson Orin Nano 4GB |
| P3701 | `0000` | `P3701-0000` | Módulo Jetson AGX Orin do kit de desenvolvimento |
| P3701 | `0001` | `P3701-0001` | SKU de compatibilidade usando o mapeamento DTB/BPMP `0000` do repositório |
| P3701 | `0002` | `P3701-0002` | SKU de compatibilidade usando o mapeamento DTB/BPMP `0000` do repositório |
| P3701 | `0004` | `P3701-0004` | Jetson AGX Orin 32GB |
| P3701 | `0005` | `P3701-0005` | Jetson AGX Orin 64GB |
| P3834 | not selectable | `P3834-0000` | Jetson T4000, selecionado pelo `MACHINE` Thor |
| P3834 | not selectable | `P3834-0008` | Módulo Jetson T5000 / AGX Thor do kit de desenvolvimento, selecionado pelo `MACHINE` Thor |

:::caution Suporte de compilação versus validação de hardware
O repositório fornece metadados de máquina e validação de compilação para todas as configurações listadas. Isso não significa que toda carrier, SKU de módulo, opção de câmera e periférico tenha concluído a validação física. Na matriz de suporte revisada, `recomputer-orin-super-j401` concluiu a validação de gravação, boot via NVMe, HDMI e USB básico. `reserver-agx-orin-j501x-gmsl` com SKU `0004` concluiu a validação de gravação e boot, enquanto a validação GMSL e de periféricos mais ampla ainda está pendente. Trate as outras máquinas como validadas apenas para compilação até que o status de hardware delas seja atualizado.
:::

A sequência de comandos nas próximas seções usa **reComputer Super J401 com um módulo Orin NX 16GB** como exemplo concreto. Substitua sua máquina, SKU e nomes de diretório pelos valores selecionados nas tabelas acima. O mesmo fluxo de trabalho parametrizado também se aplica a outras máquinas na tabela de suporte, como a reComputer Mini J5011.

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>reComputer Super J401</th>
      <th>reComputer Mini J5011</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img width={360} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/super/1.png" alt="reComputer Super J401" />
      </td>
      <td>
        <img width={360} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-100020407-recomputer-mini-j5011-with-gmsl.jpg" alt="reComputer Mini J5011" />
      </td>
    </tr>
    <tr>
      <td>
        <div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Buy One 🖱️</font></span></strong></a>
        </div>
      </td>
      <td>
        <div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-J5011-with-GMSL-Extension-p-6876.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Compre um 🖱️</font></span></strong></a>
        </div>
      </td>
    </tr>
  </tbody>
</table>
</div>

:::danger
Usar o `MACHINE` ou SKU de módulo errado pode selecionar arquivos DTB, BPMP, pinmux, memória ou configuração de flash incompatíveis. Nunca reutilize um diretório de build existente após alterar qualquer um desses valores.
:::

## Preparar e verificar o workspace

Clone o repositório da Seeed e registre o commit usado para o build:

```bash
mkdir -p ~/work/jetson-yocto
cd ~/work/jetson-yocto

git clone \
  --branch master \
  --single-branch \
  https://github.com/jjjadand/seeed-tegra-demo-distro.git \
  tegra-demo-distro

cd tegra-demo-distro
git rev-parse HEAD
```

Prepare um workspace para o carrier e módulo de exemplo:

```bash
./scripts/seeed/prepare-workspace.sh \
  --machine recomputer-orin-super-j401 \
  --module-sku 0000 \
  --build-dir build-recomputer-orin-super-j401-sku0000 \
  --cache-dir "$HOME/.cache/yocto-seeed"
```

Para um carrier AGX Orin, substitua os valores pela sua máquina e SKU P3701 suportado. Para um carrier Thor, omita `--module-sku` porque o módulo é fixado pelo arquivo de máquina selecionado. O helper também aceita `--no-activate`, `--no-submodules` e `--full-history` para gerenciamento avançado de workspaces.

Verifique o diretório de build selecionado, a máquina e o SKU do módulo antes de compilar:

```bash
./scripts/seeed/build.sh current \
  --build-dir build-recomputer-orin-super-j401-sku0000 \
  --machine recomputer-orin-super-j401
```

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/yocto/current.png" alt="Yocto helper mostrando o diretório de build, máquina e SKU de módulo selecionados" />
</div>

Não continue se os valores exibidos não corresponderem ao hardware físico.

## Compilar a imagem e o pacote de flash

O primeiro build recomendado usa o comando `all`. Ele executa validação de metadados, compilação dos DTB/DTBO da Seeed, verificações de instalação de arquivos de boot e o build completo da imagem em sequência:

```bash
./scripts/seeed/build.sh all \
  --build-dir build-recomputer-orin-super-j401-sku0000 \
  --machine recomputer-orin-super-j401 \
  --image seeed-image-jetson-development
```

O primeiro build faz download e compila muitos componentes e pode levar várias horas. Uma execução bem-sucedida termina depois que todas as quatro etapas forem concluídas:

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/yocto/build-full-complete.png" alt="Etapas concluídas de build de metadados, device tree, arquivos de boot e imagem do Yocto" />
</div>

Os arquivos gerados são colocados em `<build-dir>/tmp/deploy/images/<machine>/`. Saídas importantes seguem este padrão de nomenclatura:

```text
<image>-<machine>.rootfs.ext4
<image>-<machine>.rootfs.manifest
<image>-<machine>.rootfs.spdx.json
<image>-<machine>.rootfs.testdata.json
<image>-<machine>.rootfs.tegraflash-tar.zst
```

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/yocto/filename.png" alt="Diretório de deploy do Yocto contendo o sistema de arquivos raiz gerado e o arquivo compactado tegraflash" />
</div>

O arquivo `.tegraflash-tar.zst` contém os arquivos usados pelo helper de preparação de flash.

Para depuração ou rebuilds parciais, substitua `all` por `metadata`, `dtb`, `bootfiles`, `image` ou `flash-package`. Mantenha os mesmos valores de `--build-dir`, `--machine` e `--image`. Para compilar um SDK opcional de desenvolvimento cruzado x86_64, execute:

```bash
./scripts/seeed/build.sh sdk \
  --build-dir build-recomputer-orin-super-j401-sku0000 \
  --machine recomputer-orin-super-j401 \
  --image seeed-image-jetson-development
```

O instalador do SDK é gravado em `<build-dir>/tmp/deploy/sdk/`. Ele não é necessário para compilar ou fazer flash da imagem de destino, e é desnecessário ao compilar diretamente no Jetson.

## Preparar e fazer flash no dispositivo de destino

Extraia e verifique o arquivo de flash com o mesmo diretório de build, máquina e valores de imagem usados para o build:

```bash
./scripts/seeed/prepare-flash.sh \
  --build-dir build-recomputer-orin-super-j401-sku0000 \
  --machine recomputer-orin-super-j401 \
  --image seeed-image-jetson-development \
  --output-dir "$HOME/seeed-flash-recomputer-orin-super-j401-sku0000"
```

O helper verifica o rootfs, `initrd-flash`, variáveis de flash, DTB/BPMP DTB, pinmux, tensão de pad e outros arquivos de boot selecionados. Para carriers configuráveis, ele também verifica se o SKU do módulo no arquivo de flash corresponde ao workspace preparado. O helper não executa `sudo` nem faz flash no dispositivo de destino por conta própria.

Coloque o dispositivo de destino em Force Recovery Mode usando a sequência de botão ou chave de recuperação documentada para aquela placa carrier Seeed específica. Conecte a porta USB device/debug do carrier diretamente ao host Linux com um cabo compatível com dados e, em seguida, verifique se um dispositivo NVIDIA APX está visível:

```bash
lsusb -d 0955:
```

O ID de produto USB varia conforme o módulo Jetson. Não inicie o flash até que o dispositivo de recuperação NVIDIA apareça.

Execute o flasher gerado a partir do diretório de saída preparado:

```bash
cd "$HOME/seeed-flash-recomputer-orin-super-j401-sku0000"
sudo ./initrd-flash
```

O script inicializa um initrd temporário via USB, expõe o dispositivo de armazenamento de destino ao host, grava o layout de partições e o sistema de arquivos raiz e informa o status final. Não desconecte a alimentação ou o USB durante o processo de flash.

:::warning
O nome temporário do dispositivo de bloco no host é atribuído dinamicamente. Nunca presuma que ele será sempre `/dev/sdb` ou `/dev/sdc`, e não redirecione manualmente o fluxo de trabalho para uma unidade do host.
:::

## Primeiro boot e validação

Depois que o flash terminar com sucesso, desconecte o cabo USB de recuperação, retorne os controles de recuperação do carrier ao estado normal, se necessário, desligue e ligue novamente o dispositivo de destino e conecte seu display e periféricos.

A área de trabalho do Yocto deve inicializar a partir do armazenamento de destino selecionado:

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/yocto/yocto-bootup.jpg" alt="Área de trabalho Yocto em execução em um dispositivo Jetson da Seeed" />
</div>

A configuração padrão `tegrademo` habilita uma senha raiz inicial vazia e login como root para desenvolvimento. Defina uma senha imediatamente:

```bash
passwd
```

Para a imagem de desenvolvimento, verifique as ferramentas e bibliotecas necessárias no lado do dispositivo de destino e, em seguida, teste as interfaces específicas do carrier usadas pela sua aplicação:

```bash
nvcc --version
gcc --version
cmake --version
pkg-config --modversion opencv4
```

Compilar ou inicializar a imagem com sucesso não valida todas as câmeras, links GMSL, modos de display, portas USB, interfaces de rede ou conectores de expansão. Conclua os testes de periféricos específicos do produto antes da implantação.

## Solução de problemas

**O diretório de build informa a máquina ou SKU errados:** Crie um novo diretório de build com `prepare-workspace.sh`. Não edite nem reutilize um workspace existente para alternar placas carrier ou SKUs de módulo.

**O arquivo de flash não pode ser encontrado:** Passe o mesmo valor de `--image` para `build.sh` e `prepare-flash.sh`. Ambos os helpers usam `demo-image-full` como padrão, portanto um build de `seeed-image-jetson-development` deve usar explicitamente esse nome durante a preparação do flash.

**Os metadados são analisados, mas o hardware não inicializa:** Verifique a matriz de suporte do repositório. A validação de metadados e build de DTB não comprova a operação física de flash, boot de armazenamento, display, câmera, GMSL ou periféricos para todas as combinações de máquina e módulo.

**O processo de flash para em `Waiting for USB storage device flashpkg`:** Nesta etapa, o host está aguardando o initrd do Jetson enumerar um dispositivo de armazenamento em massa USB temporário; a gravação da partição rootfs ainda não começou. Verifique o cabo de dados, a conexão USB direta ao host, o estado de modo de recuperação e o caminho de modo dispositivo USB na device tree compilada. Não trate os pontos repetidos como gravação lenta normal de armazenamento.

## Referências

- [Repositório Seeed tegra-demo-distro](https://github.com/jjjadand/seeed-tegra-demo-distro)
- [Matriz de suporte de placas carrier da Seeed](https://github.com/jjjadand/seeed-tegra-demo-distro/blob/master/layers/meta-seeed/docs/board-support-status.md)
- [Yocto Project Quick Build](https://docs.yoctoproject.org/brief-yoctoprojectqs/index.html)
- [Documentação OE4T meta-tegra](https://oe4t.github.io/)
- [Noções básicas de flash OE4T](https://oe4t.github.io/wrynose/Flashing.html)

Obrigado por escolher produtos Seeed Studio! Para suporte técnico e discussão sobre produtos, use os seguintes canais:

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
