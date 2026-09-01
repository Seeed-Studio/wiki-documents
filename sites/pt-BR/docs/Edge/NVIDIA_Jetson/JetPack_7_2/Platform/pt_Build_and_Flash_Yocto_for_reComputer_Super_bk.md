---
description: Crie uma imagem Yocto completa com suporte a CUDA a partir do repositório da Seeed e grave-a em um reComputer Super.
title: Criar e Gravar uma Imagem Yocto para o reComputer Super
keywords:
  - Yocto
  - OpenEmbedded
  - reComputer Super
  - Jetson Orin NX
  - CUDA
  - Jetson Linux
image: https://files.seeedstudio.com/wiki/yocto/yocto-bootup.jpg
slug: /build_and_flash_yocto_for_seeed_jetson_carrier_boards
aliases:
  - /build_and_flash_yocto_for_recomputer_super_bk
last_update:
  date: 2026-07-24
  author: Dayu
createdAt: '2026-07-24'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/pt-br/build_and_flash_yocto_for_seeed_jetson_carrier_boards/
---

# Criar e Gravar uma Imagem Yocto para o reComputer Super

:::note Cópia da coleção JetPack 7.2
Esta cópia é incluída porque o suporte oficial OpenEmbedded/Yocto é um recurso importante de Linux de produção do JetPack 7.2. Confirme que o branch Yocto da Seeed selecionado, a camada BSP da NVIDIA e o pacote de gravação gerado correspondem ao Jetson Linux 39.2 de destino antes de usá-lo como uma imagem JetPack 7.2.
:::

Este guia cria uma imagem Yocto da Seeed para o **reComputer Super J401 com um módulo Jetson Orin NX 16GB** e a grava na unidade NVMe do Jetson.

O exemplo usa `seeed-image-jetson-development`. Esta imagem fornece um ambiente de desenvolvimento no lado do alvo com CUDA Toolkit e `nvcc`, arquivos de desenvolvimento CUDA/cuDNN/TensorRT/VPI/OpenCV, ferramentas de compilação e depuração, exemplos da NVIDIA e pacotes de teste.

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/super/1.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-Bundle.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong></a>
</div>

:::note
Este é um sistema OpenEmbedded/Yocto, não um sistema de arquivos raiz Ubuntu instalado pelo NVIDIA SDK Manager. O gerenciamento de pacotes, o conteúdo do sistema de arquivos e o ambiente de desktop são diferentes do JetPack Ubuntu.
:::

## Pré-requisitos

Prepare o seguinte:

- Um PC host Linux x86_64, de preferência uma máquina física com Ubuntu ou Debian
- Pelo menos 16 GB de RAM; 32 GB ou mais são recomendados
- Um SSD local rápido e uma conexão de Internet estável
- Um reComputer Super com um módulo Jetson Orin NX ou Orin Nano compatível
- Um cabo de dados USB Type-C conectado diretamente ao PC host
- Acesso `sudo` para instalar pacotes no host e realizar a gravação

:::warning
Reserve **pelo menos 400 GB de espaço livre em disco** no PC host. Os downloads do Yocto, cache de estado compartilhado, arquivos temporários de compilação, sistema de arquivos raiz e o pacote de gravação extraído podem consumir vários centenas de gigabytes. Um SSD local no host é fortemente recomendado.
:::

Instale os pacotes comuns necessários no host:

```bash
sudo apt update
sudo apt install -y \
  gawk wget git diffstat unzip texinfo gcc build-essential chrpath socat cpio \
  python3 python3-pip python3-pexpect python3-git python3-jinja2 \
  xz-utils debianutils iputils-ping libegl1-mesa libsdl1.2-dev \
  pylint xterm zstd liblz4-tool file locales \
  gdisk parted udev udisks2
```

Se o BitBake informar que a distribuição do host não é suportada, use um host Linux suportado pelo Yocto em vez de ignorar o aviso de validação do host.

## SKU do Módulo Usado Neste Guia

O reComputer Super J401 suporta os seguintes SKUs de módulo P3767:

| `--module-sku` | Número completo do módulo | Módulo Jetson |
| --- | --- | --- |
| `0000` | `P3767-0000` | Jetson Orin NX 16GB |
| `0001` | `P3767-0001` | Jetson Orin NX 8GB |
| `0003` | `P3767-0003` | Jetson Orin Nano 8GB |
| `0004` | `P3767-0004` | Jetson Orin Nano 4GB |

Este guia usa `0000`. Sempre use um diretório de compilação separado para cada combinação de placa-carregadora e SKU de módulo.

## Clonar o Repositório Yocto da Seeed

Crie um workspace limpo e clone o branch `master`:

```bash
mkdir -p ~/work/jetson-yocto
cd ~/work/jetson-yocto

git clone \
  --branch master \
  --single-branch \
  https://github.com/jjjadand/seeed-tegra-demo-distro.git \
  tegra-demo-distro

cd tegra-demo-distro
```

O repositório principal contém os metadados da Seeed e scripts auxiliares. `prepare-workspace.sh` inicializa as camadas OpenEmbedded e OE4T fixadas como submódulos Git.

## Criar a Imagem Completa de Desenvolvimento com `all`

A primeira compilação recomendada usa `build.sh all`. Ela valida os metadados, compila as device trees da Seeed, verifica os arquivos de boot e compila a imagem completa e o arquivo tegraflash em sequência.

### Preparar o Diretório de Compilação

```bash
./scripts/seeed/prepare-workspace.sh \
  --machine recomputer-orin-super-j401 \
  --module-sku 0000 \
  --build-dir build-seeed-super-j401-sku0000 \
  --cache-dir "$HOME/.cache/yocto-seeed"
```

O cache compartilhado mantém downloads e sstate fora do diretório de compilação para que possam ser reutilizados por compilações posteriores.

Confirme o diretório de compilação ativo, a placa-carregadora e o SKU do módulo:

```bash
./scripts/seeed/build.sh current \
  --build-dir build-seeed-super-j401-sku0000 \
  --machine recomputer-orin-super-j401
```

A saída deve mostrar:

```text
Machine:   recomputer-orin-super-j401
Module SKU: 0000
```

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/yocto/current.png" />
</div>

:::warning
Não continue se o `MACHINE` exibido ou o SKU do módulo não corresponderem ao hardware. Não reutilize este diretório de compilação para outra placa-carregadora ou SKU de módulo.
:::

### Executar a Compilação Completa

Compile a imagem de desenvolvimento do lado do alvo:

```bash
./scripts/seeed/build.sh all \
  --build-dir build-seeed-super-j401-sku0000 \
  --machine recomputer-orin-super-j401 \
  --image seeed-image-jetson-development
```

A primeira compilação faz download e compila um grande número de componentes e pode levar várias horas. O comando é interrompido imediatamente se a validação de metadados, a compilação da device tree, as verificações de arquivos de boot ou a compilação da imagem falharem.

Quando as quatro etapas forem concluídas com sucesso, a saída do terminal será semelhante ao seguinte:

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/yocto/build-full-complete.png" />
</div>

Após uma compilação bem-sucedida, o diretório de deploy é:

```text
build-seeed-super-j401-sku0000/tmp/deploy/images/recomputer-orin-super-j401/
```

Os arquivos importantes gerados incluem:

```text
seeed-image-jetson-development-recomputer-orin-super-j401.rootfs.ext4
seeed-image-jetson-development-recomputer-orin-super-j401.rootfs.manifest
seeed-image-jetson-development-recomputer-orin-super-j401.rootfs.spdx.json
seeed-image-jetson-development-recomputer-orin-super-j401.rootfs.testdata.json
seeed-image-jetson-development-recomputer-orin-super-j401.rootfs.tegraflash-tar.zst
```

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/yocto/filename.png" />
</div>

O arquivo `.tegraflash-tar.zst` é o pacote autocontido usado para a gravação.

## Preparar o Diretório de Gravação

Extraia e valide o pacote de gravação da imagem de desenvolvimento:

```bash
./scripts/seeed/prepare-flash.sh \
  --build-dir build-seeed-super-j401-sku0000 \
  --machine recomputer-orin-super-j401 \
  --image seeed-image-jetson-development \
  --output-dir "$HOME/seeed-flash-recomputer-orin-super-j401-sku0000"
```

O auxiliar verifica o SKU do módulo e checa se a imagem rootfs, DTB, BPMP DTB, pinmux, configuração de tensão dos pinos e scripts de gravação estão presentes. Em seguida, imprime o diretório preparado e o próximo comando exato.

:::tip
Use um diretório de saída novo ou vazio no SSD local do host. Não extraia o pacote de gravação na unidade de destino do Jetson.
:::

## Colocar o reComputer Super em Modo de Recuperação Forçada

1. Desligue o reComputer Super.
2. Coloque a chave de recuperação do reComputer Super na posição **RESET**.
3. Conecte a fonte de alimentação.
4. Conecte a porta de dispositivo/depuração USB Type-C ao host Linux com um cabo compatível com dados.
5. No PC host, verifique o modo de recuperação:

```bash
lsusb -d 0955:
```

Para o módulo Orin NX 16GB usado neste guia, a saída deve incluir um dispositivo semelhante a:

```text
0955:7323 NVIDIA Corp. APX
```

Outros módulos Super suportados usam IDs de produto USB diferentes:

| Módulo | ID USB de recuperação |
| --- | --- |
| Orin NX 16GB | `0955:7323` |
| Orin NX 8GB | `0955:7423` |
| Orin Nano 8GB | `0955:7523` |
| Orin Nano 4GB | `0955:7623` |

Não inicie a gravação até que o dispositivo NVIDIA APX esteja visível.

## Gravar a Imagem Yocto

Execute o gravador gerado a partir do diretório preparado:

```bash
cd "$HOME/seeed-flash-recomputer-orin-super-j401-sku0000"
sudo ./initrd-flash
```

O script inicializa um initrd temporário de gravação via USB, expõe a unidade NVMe de destino ao host, grava as partições e recupera o status final do dispositivo. Não desconecte o USB nem a alimentação enquanto ele estiver em execução.

Uma gravação bem-sucedida termina com uma saída semelhante a:

```text
[OK: /dev/sdX]
Final status: SUCCESS
Successfully finished
```

O nome temporário do dispositivo de bloco no host é atribuído dinamicamente. Não presuma que ele será sempre `/dev/sdb` ou `/dev/sdc`.

## Primeiro Boot

Após o comando de gravação terminar com sucesso:

1. Desconecte o cabo de dados USB.
2. Retorne a chave de recuperação de **RESET** para sua posição normal.
3. Desligue o dispositivo por alguns segundos.
4. Conecte um monitor HDMI e ligue novamente o reComputer Super.

O desktop Yocto deve inicializar a partir da unidade NVMe gravada:

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/yocto/yocto-bootup.jpg" />
</div>

A imagem de desenvolvimento permite login local como `root` com senha inicial vazia. Defina uma senha imediatamente:

```bash
passwd
```

Verifique o ambiente de desenvolvimento no lado do alvo:

```bash
nvcc --version
gcc --version
cmake --version

test -f /usr/local/cuda-13.2/include/cuda.h
test -f /usr/include/cudnn.h
test -f /usr/include/NvInfer.h
test -f /opt/nvidia/vpi4/include/vpi/VPI.h
pkg-config --modversion opencv4
```

## Comandos Detalhados de Compilação Parametrizada

A seção anterior usou `all`, que é o caminho recomendado para uma primeira compilação. Para depuração ou recompilação de uma etapa, execute o mesmo fluxo de trabalho explicitamente:

```bash
# 1. Validate metadata and print the selected BSP variables
./scripts/seeed/build.sh metadata \
  --build-dir build-seeed-super-j401-sku0000 \
  --machine recomputer-orin-super-j401 \
  --image seeed-image-jetson-development

# 2. Build the Seeed DTB and DTBO files
./scripts/seeed/build.sh dtb \
  --build-dir build-seeed-super-j401-sku0000 \
  --machine recomputer-orin-super-j401 \
  --image seeed-image-jetson-development

# 3. Install and verify the custom BCT, pinmux, and boot files
./scripts/seeed/build.sh bootfiles \
  --build-dir build-seeed-super-j401-sku0000 \
  --machine recomputer-orin-super-j401 \
  --image seeed-image-jetson-development

# 4. Build the complete root filesystem and tegraflash archive
./scripts/seeed/build.sh image \
  --build-dir build-seeed-super-j401-sku0000 \
  --machine recomputer-orin-super-j401 \
  --image seeed-image-jetson-development
```

Se o sistema de arquivos raiz já estiver compilado e apenas o arquivo compactado do tegraflash precisar ser regenerado, use:

```bash
./scripts/seeed/build.sh flash-package \
  --build-dir build-seeed-super-j401-sku0000 \
  --machine recomputer-orin-super-j401 \
  --image seeed-image-jetson-development
```

## Opcional: Compilar um SDK de Desenvolvimento Cruzado x86_64

A imagem de desenvolvimento gravada já oferece suporte à compilação diretamente no Jetson. Compile o SDK do host apenas quando um PC x86_64 precisar compilar aplicações de forma cruzada para o alvo:

```bash
./scripts/seeed/build.sh sdk \
  --build-dir build-seeed-super-j401-sku0000 \
  --machine recomputer-orin-super-j401 \
  --image seeed-image-jetson-development
```

O instalador de SDK gerado é colocado em:

```text
build-seeed-super-j401-sku0000/tmp/deploy/sdk/
```

Este instalador opcional não é necessário para compilar a imagem do Jetson ou gravar o dispositivo.

## Solução de problemas

### O diretório de compilação indica a máquina ou SKU errados

Crie um novo diretório de compilação com `prepare-workspace.sh`. Não edite um diretório de compilação existente para alternar placas carrier ou SKUs de módulo.

### O arquivo compactado de flash não pode ser encontrado

Certifique-se de que o mesmo nome de imagem seja passado tanto para a compilação quanto para a preparação de flash:

```text
seeed-image-jetson-development
```

`prepare-flash.sh` usa por padrão `demo-image-full`, portanto, omitir `--image seeed-image-jetson-development` faria com que ele procurasse pelo arquivo compactado errado.

### A gravação para em `Waiting for USB storage device flashpkg`

Neste ponto, o host está aguardando o initrd do Jetson expor um dispositivo temporário de armazenamento em massa USB. Verifique o cabo USB, use uma porta USB da placa-mãe, remova dispositivos de armazenamento USB desnecessários e confirme que o Jetson continua visível com `lsusb`.

## Referências

- [Repositório Seeed tegra-demo-distro](https://github.com/jjjadand/seeed-tegra-demo-distro)
- [Compilação Rápida do Yocto Project](https://docs.yoctoproject.org/brief-yoctoprojectqs/index.html)
- [Documentação OE4T meta-tegra](https://oe4t.github.io/)

Obrigado por escolher os produtos Seeed Studio! Para suporte técnico e discussão sobre produtos, utilize os seguintes canais:

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
