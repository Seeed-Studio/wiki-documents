---
description: Fornecendo documentação e informações para desenvolvedores C/C++
title: Desenvolver com C/C++
keywords:
  - Edge
  - reCamera
  - C
  - CPP
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /recamera_develop_with_c_cpp
sidebar_position: 5
last_update:
  date: 06/09/2025
  author: Parker Hu & Yuxin Liang
createdAt: '2025-02-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/recamera_develop_with_c_cpp/
---

# Desenvolver na reCamera com c&cpp

## Configuração do Ambiente
A reCamera possui recursos limitados e não há ambiente de compilação configurado para código C. Se você quiser usar C/C++ para desenvolver aplicações na reCamera, precisa configurar o ambiente de compilação cruzada (compilar o programa C/C++ em outro Linux e, em seguida, transferir o arquivo compilado para o terminal da reCamera para execução). Se você estiver usando Windows, pode instalar o Windows Subsystem for Linux (WSL) para executar Linux (Ubuntu, OpenSUSE, Kali, Debian ou Arch Linux).

 **Passo 1**: Configurar o ambiente de build em outro Linux

```bash
sudo apt update
sudo apt install build-essential

mkdir recamera && cd recamera

wget https://github.com/Seeed-Studio/reCamera-OS/releases/download/0.2.1/sg2002_reCamera_0.2.1_emmc_sdk.tar.gz
tar -xzvf sg2002_reCamera_0.2.1_emmc_sdk.tar.gz

#Note: This tool is over 10GB in size. Please be aware of your disk space.
git clone https://github.com/sophgo/host-tools.git --depth=1
git clone https://github.com/Seeed-Studio/sscma-example-sg200x.git

export SG200X_SDK_PATH=$PWD/sg2002_recamera_emmc
export PATH=$PWD/host-tools/gcc/riscv64-linux-musl-x86_64/bin:$PATH
```

**Passo 2**: Compilar o programa de exemplo ou o programa que você deseja executar no Linux. Observe que o diretório "build" criado deve estar localizado no diretório raiz do projeto ("build" deve estar no mesmo nível que "CMakeLists.txt").
primeiro verifique as ferramentas de compilação cruzada
```bash
(base) se@stu:~/recameraos$ riscv64-unknown-linux-musl-gcc -v
Using built-in specs.
COLLECT_GCC=riscv64-unknown-linux-musl-gcc
COLLECT_LTO_WRAPPER=/home/se/recameraos/host-tools/gcc/riscv64-linux-musl-x86_64/bin/../libexec/gcc/riscv64-unknown-linux-musl/10.2.0/lto-wrapper
Target: riscv64-unknown-linux-musl
Configured with: /mnt/ssd/jenkins_iotsw/slave/workspace/Toolchain/build-gnu-riscv_4/./source/riscv/riscv-gcc/configure --target=riscv64-unknown-linux-musl --with-gmp=/mnt/ssd/jenkins_iotsw/slave/workspace/Toolchain/build-gnu-riscv_4/build-gcc-riscv64-unknown-linux-musl/build-Xuantie-900-gcc-linux-5.10.4-musl64-x86_64-V2.6.1/lib-for-gcc-x86_64-linux --with-mpfr=/mnt/ssd/jenkins_iotsw/slave/workspace/Toolchain/build-gnu-riscv_4/build-gcc-riscv64-unknown-linux-musl/build-Xuantie-900-gcc-linux-5.10.4-musl64-x86_64-V2.6.1/lib-for-gcc-x86_64-linux --with-mpc=/mnt/ssd/jenkins_iotsw/slave/workspace/Toolchain/build-gnu-riscv_4/build-gcc-riscv64-unknown-linux-musl/build-Xuantie-900-gcc-linux-5.10.4-musl64-x86_64-V2.6.1/lib-for-gcc-x86_64-linux --with-libexpat-prefix=/mnt/ssd/jenkins_iotsw/slave/workspace/Toolchain/build-gnu-riscv_4/build-gcc-riscv64-unknown-linux-musl/build-Xuantie-900-gcc-linux-5.10.4-musl64-x86_64-V2.6.1/lib-for-gcc-x86_64-linux --with-libmpfr-prefix=/mnt/ssd/jenkins_iotsw/slave/workspace/Toolchain/build-gnu-riscv_4/build-gcc-riscv64-unknown-linux-musl/build-Xuantie-900-gcc-linux-5.10.4-musl64-x86_64-V2.6.1/lib-for-gcc-x86_64-linux --with-pkgversion='Xuantie-900 linux-5.10.4 musl gcc Toolchain V2.6.1 B-20220906' CXXFLAGS='-g -O2 -DTHEAD_VERSION_NUMBER=2.6.1 ' --prefix=/mnt/ssd/jenkins_iotsw/slave/workspace/Toolchain/build-gnu-riscv_4/build-gcc-riscv64-unknown-linux-musl/Xuantie-900-gcc-linux-5.10.4-musl64-x86_64-V2.6.1 --with-sysroot=/mnt/ssd/jenkins_iotsw/slave/workspace/Toolchain/build-gnu-riscv_4/build-gcc-riscv64-unknown-linux-musl/Xuantie-900-gcc-linux-5.10.4-musl64-x86_64-V2.6.1/sysroot --with-system-zlib --enable-shared --enable-tls --enable-languages=c,c++ --disable-libmudflap --disable-libssp --disable-libquadmath --disable-libsanitizer --disable-nls --disable-bootstrap --src=/mnt/ssd/jenkins_iotsw/slave/workspace/Toolchain/build-gnu-riscv_4/./source/riscv/riscv-gcc --enable-multilib --with-abi=lp64d --with-arch=rv64gcxthead 'CFLAGS_FOR_TARGET=-O2   -mcmodel=medany' 'CXXFLAGS_FOR_TARGET=-O2   -mcmodel=medany'
Thread model: posix
Supported LTO compression algorithms: zlib
gcc version 10.2.0 (Xuantie-900 linux-5.10.4 musl gcc Toolchain V2.6.1 B-20220906)
```
```bash
cd $HOME/recamera/sscma-example-sg200x/solutions/helloworld
mkdir build && cd build
cmake ..
make
```

Você pode visualizar as propriedades do arquivo digitando `file helloworld`.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/1.png" /></div>

O "helloworld" verde (com o mesmo nome da pasta do programa) é o arquivo executável compilado.

**Passo 3**: Nesta etapa, iremos transferir o arquivo executável compilado para o terminal Linux da reCamera para executá-lo.
Primeiro, precisamos fazer login no terminal da reCamera. Você pode usar a versão web, conforme mostrado abaixo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/2.2.png" /></div>

Como alternativa, você pode usar software de acesso remoto (por exemplo, MobaXterm) para se conectar à reCamera.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/3.png" /></div>

Em seguida, digite o seguinte código no seu Linux (senha necessária):

```bash
sudo scp helloworld recamera@{recamera_IP}:/home/recamera/
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/4.png" /></div>

O arquivo executável foi transferido com sucesso.

**Passo 4**: Execute seu arquivo executável no terminal da reCamera.

```bash
./helloworld
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/5.png" /></div>

Execução bem-sucedida.

## Mais demos construídas com c&cpp

### ​Usar a reCamera para Capturar Vídeo em Streaming

Fornecemos mais demos em C/C++ para a reCamera. Você pode cloná-las a partir do GitHub: https://github.com/Seeed-Studio/sscma-example-sg200x. Você talvez já as tenha clonado no "Passo 1".

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/6.png" /></div>

**Video_demo** é um aplicativo de exemplo que demonstra como usar a **reCamera** para capturar quadros de vídeo, salvá-los em diferentes formatos e transmitir vídeo via RTSP (Real-Time Streaming Protocol). 
Você pode seguir o "Passo 2" para compilar e o "Passo 3" para enviá-lo ao terminal da reCamera.
*Observação*: Antes de executar o programa no terminal da reCamera, você precisa fazer login no workspace da reCamera (http://192.168.42.1/#/workspace) e encerrar o Flow, pois este programa consome muitos recursos de cache.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/7.png" /></div>

Você precisa executar o programa com privilégios de superusuário para evitar falhas na alocação de memória.

```bash
sudo ./video_demo
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/8.png" /></div>

A saída de execução bem-sucedida é mostrada acima.
Anotações dos Parâmetros de Saída:
1. O vídeo é inicializado e configurado para três canais com diferentes formatos e taxas de quadros:
   - **Canal 0**: formato RGB888, resolução 1920x1080, 10 FPS
   - **Canal 1**: formato NV21, resolução 1920x1080, 5 FPS
   - **Canal 2**: formato H.264, resolução 1920x1080, 30 FPS
2. Dependendo do canal:
   - Para o **Canal 0** e **Canal 1**: os quadros são salvos nos formatos RGB e NV21, respectivamente.
   - Para o **Canal 2**: os quadros são transmitidos via RTSP.

Para visualizar e salvar o stream RTSP, você pode baixar o reprodutor de mídia VLC e conectar-se ao stream de rede em: rtsp://192.168.42.1:8554/live0.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/9.png" /></div>

A latência do stream RTSP é de aproximadamente 2 segundos.

O aplicativo é executado indefinidamente até ser interrompido (Ctrl C). O aplicativo configura manipuladores de sinal para sair graciosamente ao receber sinais de término (SIGINT, SIGTERM).

Este exemplo serve como uma introdução básica ao uso da reCamera para processamento e streaming de vídeo. Os usuários podem modificar o código e adaptá-lo às suas necessidades específicas, experimentando diferentes formatos de vídeo e configurações de streaming.

Para mais detalhes, consulte nosso [repositório no GitHub](https://github.com/Seeed-Studio/OSHW-reCamera-Series).

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/OSHW-reCamera-Series" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar a Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos. Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>


<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
