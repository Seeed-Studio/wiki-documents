---
description: reComputer-FAQ
title: O espaço restante na eMMC do reComputer recebido é de apenas cerca de 2GB, como resolver o problema de espaço insuficiente?
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: /solution_of_insufficient_space
last_update:
  date: 2023/6/30
  author: Seraphina
createdAt: '2023-07-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/solution_of_insufficient_space/
---

<!-- ### Q1: The remaining space in the eMMC in the received reComputer is only about 2GB, how can I solve the problem of insufficient space? -->

Atualmente oferecemos três maneiras de lidar com essa situação específica, e você pode escolher a solução adequada para você com base na situação real.

**Opção 1.** Reimplantação de sistemas em dispositivos de armazenamento externos

Se você ainda não iniciou um projeto com o reComputer, pode considerar usar esta opção para reimplantar o novo sistema em um dispositivo de armazenamento com capacidade suficiente.

- Geralmente há duas maneiras de instalar um sistema para o reComputer, a primeira é usar o **NVIDIA SDK Manager**.

Se você estiver em um **reComputer J2011** ou **reComputer J2012**, na **etapa 12** de [Flashing to eMMC with SDK Manager](/pt-br/reComputer_J2021_J202_Flash_Jetpack#flashing-to-emmc-with-command-line), você pode expandir a capacidade alterando o local da gravação do sistema.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/52.png" /></div>

:::tip
Este método não é aplicável ao módulo Jetson Nano.
:::

- Geralmente há duas maneiras de instalar um sistema para o reComputer, a segunda é usar as **command lines**.

- Se você estiver usando uma **placa-mãe A20X**, o método para instalar o sistema usando a linha de comando está em [Flashing to eMMC with command-line](/pt-br/reComputer_J2021_J202_Flash_Jetpack#flashing-to-emmc-with-command-line).

- Se você estiver usando a **reComputer J1010 Carrier Board**, então use a linha de comando para instalar o sistema em [Flashing to eMMC with command-line](/pt-br/reComputer_J1010_J101_Flash_Jetpack#flashing-jetpack-os-via-command-line).

Ambos basicamente concluem a instalação do sistema usando o seguinte comando.

```sh
sudo ./flash.sh [options] <board> <rootdev>
```

Onde:

1. `[options]` é uma ou mais opções de linha de comando. Todas as opções são opcionais. Consulte [Flashing Script Usage](https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/text/SD/FlashingSupport.html#flashing-script-usage) para obter informações sobre as opções.

2. `<board>` especifica a configuração a ser aplicada ao dispositivo a ser gravado. Os valores estão listados na tabela em [Jetson Modules and Configurations](https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/text/IN/QuickStart.html#in-quickstart-jetsonmodulesandconfigurations-configurations) no tópico [Quick Start](https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/text/IN/QuickStart.html#in-quickstart). `flash.sh` obtém a configuração de um arquivo de configuração chamado `<board>.conf`.

3. `<rootdev>` especifica o tipo de dispositivo a ser gravado. Use o valor **mmcblk0p1** para gravar um dispositivo de armazenamento local (eMMC ou cartão SD, dependendo da plataforma), em contraste com um servidor NFS, por exemplo.

Como você pode ver pela explicação acima, se quisermos instalar o sistema em um armazenamento externo, podemos fazê-lo alterando a opção `<rootdev>`.

Para uma partição em um dispositivo de armazenamento USB conectado ao dispositivo reComputer, insira este comando:

```sh
sudo ./flash.sh <board> sda<x>
```

Para uma partição em um dispositivo de armazenamento NVMe conectado ao dispositivo reComputer, insira este comando:

```sh
sudo ./flash.sh <board> nvme0n1p<x>
```

`<x>` é um número que especifica a posição da partição APP no dispositivo de armazenamento, por exemplo, `sda1` para um dispositivo USB ou `nvme0n1p1` para um dispositivo de armazenamento NVMe.

**Opção 2.** Remover componentes JetPack desnecessários para aumentar o espaço da eMMC.

NVIDIA JetPack SDK é a solução mais abrangente para a construção de aplicações de IA aceleradas ponta a ponta. Todos os módulos Jetson e kits de desenvolvimento são suportados pelo JetPack SDK.

O JetPack SDK inclui o Jetson Linux Driver Package (L4T) com sistema operacional Linux e bibliotecas aceleradas CUDA-X e APIs para Deep Learning, Visão Computacional, Computação Acelerada e Multimídia. Ele também inclui exemplos, documentação e ferramentas de desenvolvimento tanto para o computador host quanto para o kit de desenvolvimento, e oferece suporte a SDKs de nível superior, como DeepStream para análise de vídeo em streaming e Isaac para robótica.

[Esta tabela](https://docs.nvidia.com/jetson/jetpack/install-jetpack/index.html#jetpack-ota-packages) lista todos os componentes incluídos no JetPack 4.6.

<table align="center">
  <tbody><tr>
      <th align="center">Grupo de Componentes</th>
      <th colSpan={2} align="center" valign="middle">Pacotes</th>
    </tr>
    <tr>
      <th align="center" valign="middle">CUDA Toolkit para L4T</th>
      <td align="center">cuda <br /> cuda-11-4 <br /> cuda-cccl-11-4 <br /> cuda-command-line-tools-11-4 <br /> cuda-compiler-11-4 <br /> cuda-cudart-11-4 <br /> cuda-cudart-dev-11-4 <br /> cuda-cuobjdump-11-4 <br /> cuda-cupti-11-4 <br /> cuda-cupti-dev-11-4 <br /> cuda-cuxxfilt-11-4 <br /> cuda-documentation-11-4 <br /> cuda-driver-dev-11-4 <br /> cuda-gdb-11-4 <br /> cuda-gdb-src-11-4 <br /> cuda-libraries-11-4 <br /> cuda-libraries-dev-11-4 <br /> cuda-minimal-build-11-4 <br /> cuda-nvcc-11-4 <br /> cuda-nvdisasm-11-4 <br /> cuda-nvml-dev-11-4 <br /> cuda-nvprof-11-4 <br /> cuda-nvprune-11-4 <br /> cuda-nvrtc-11-4 <br /> cuda-nvrtc-dev-11-4 <br /> cuda-nvtx-11-4</td>
      <td align="center">cuda-runtime-11-4 <br /> cuda-samples-11-4 <br /> cuda-sanitizer-11-4 <br /> cuda-toolkit-11-4 <br /> cuda-toolkit-11-4-config-common <br /> cuda-toolkit-11-config-common <br /> cuda-toolkit-config-common <br /> cuda-tools-11-4 <br /> cuda-visual-tools-11-4 <br /> libcublas-11-4 <br /> libcublas-dev-11-4 <br /> libcudla-11-4 <br /> libcudla-dev-11-4 <br /> libcufft-11-4 <br /> libcufft-dev-11-4 <br /> libcurand-11-4 <br /> libcurand-dev-11-4 <br /> libcusolver-11-4 <br /> libcusolver-dev-11-4 <br /> libcusparse-11-4 <br /> libcusparse-dev-11-4 <br /> libnpp-11-4 <br /> libnpp-dev-11-4</td>
    </tr>
    <tr>
      <th align="center">cuDNN</th>
      <td align="center">libcudnn8 <br /> libcudnn8-dev</td>
      <td align="center">libcudnn8-samples</td>
    </tr>
    <tr>
      <th align="center">TensorRT</th>
      <td align="center">graphsurgeon-tf <br /> libnvinfer-bin <br /> libnvinfer-dev <br /> libnvinfer-doc <br /> libnvinfer-plugin-dev <br /> libnvinfer-plugin8 <br /> libnvinfer-samples <br /> libnvinfer8</td>
      <td align="center">libnvonnxparsers-dev <br /> libnvonnxparsers8 <br /> libnvparsers-dev <br /> libnvparsers8 <br /> python3-libnvinfer <br /> python3-libnvinfer-dev <br /> tensorrt <br /> uff-converter-tf</td>
    </tr>
    <tr>
      <th align="center">OpenCV</th>
      <td align="center">libopencv <br /> libopencv-dev <br /> opencv-licenses</td>
      <td align="center">libopencv-python <br /> libopencv-samples</td>
    </tr>
    <tr>
      <th align="center">VPI</th>
      <td align="center">libnvvpi2 <br /> vpi2-dev <br /> python-vpi2</td>
      <td align="center">python3.9-vpi2 <br /> vpi2-samples <br /> vpi2-demos</td>
    </tr>
    <tr>
      <th align="center">Runtime de contêiner NVIDIA com integração Docker</th>
      <td align="center">libnvidia-container0 <br /> libnvidia-container1 <br /> libnvidia-container-tools</td>
      <td align="center">nvidia-container-toolkit <br /> nvidia-container-runtime <br /> nvidia-docker2</td>
    </tr>
    <tr>
      <th align="center">Multimedia API</th>
      <td colSpan={2} align="center">nvidia-l4t-jetson-multimedia-api</td>
    </tr>
  </tbody></table>

O JetPack SDK contém muito conteúdo, mas não é algo que todos os desenvolvedores precisarão usar. Portanto, uma das boas opções é removê-los seletivamente para obter mais espaço de armazenamento.

Podemos visualizar informações sobre o JetPack instalado no reComputer Jetson com o seguinte comando.

```sh
sudo apt-cache show nvidia-jetpack
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/50.png" /></div>

Com esse comando, você pode rapidamente conhecer o conteúdo dos componentes instalados no JetPack, como CUDA, openCV, etc.

Para obter informações mais detalhadas, você pode usar o seguinte comando para descobrir todo o software atualmente instalado pelo reComputer e suas informações de descrição.

```sh
dpkg-query -l
```

Em seguida, você pode remover seletivamente o conteúdo de que não precisa de acordo com suas necessidades reais e as informações de descrição do componente. O comando para excluir é o seguinte.

```sh
sudo apt autoremove ${packagesname}
```

A variável de ambiente `${packagesname}` indica o nome do pacote do componente que você deseja remover. Se quiser remover todos os pacotes prefixados por um determinado nome, você pode adicionar `*` a esse prefixo para indicar isso.

Como exemplo, se quisermos remover todos os componentes sobre **CUDA**, podemos usar o seguinte comando.

```sh
sudo apt autoremove cuda*
```

Depois de liberar o conteúdo do componente CUDA, você pode ver que a capacidade restante da eMMC também ficará maior.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/51.png" /></div>

O mesmo se aplica a outros componentes do JetPack.

**Opção 3.** Expansão de capacidade via dispositivos de armazenamento externos.

Você pode escolher esta opção se já vem utilizando o reComputer normalmente há algum tempo e não deseja destruir o ambiente de sistema existente para concluir a solução de expansão.

Nós já temos um wiki de expansão bem desenvolvido [Memory Expansion for reComputer series](https://wiki.seeedstudio.com/pt-br/reComputer_Jetson_Memory_Expansion/).

Vale ressaltar que qualquer operação de expansão é perigosa e esperamos que você seja proativo em **fazer backups** do seu sistema antes de tudo começar.
