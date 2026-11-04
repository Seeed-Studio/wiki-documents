---
description: Instale o SDK de cross-compilação do reCamera Pro, compile um pequeno programa em C++ para o RV1126B, verifique o binário e execute-o no dispositivo.
title: Configurar o SDK de Cross-Compilação do reCamera Pro
keywords:
  - reCamera Pro
  - RV1126B
  - SDK
  - cross-compilation
  - CMake
  - RKNN
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_sdk_setup
sku: 10003420
sidebar_position: 2
last_update:
  date: 10/12/2026
  author: Seeed Studio
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_sdk_setup/
createdAt: '2026-09-21'
updatedAt: '2026-10-12'
---

# Configurar o SDK de Cross-Compilação do reCamera Pro

Este guia usa o [SDK de cross-compilação do reCamera Pro](https://github.com/Seeed-Projects/recamera_pro_toolchain) para compilar um pequeno programa em C++ em um PC Linux ou no WSL e depois executá-lo no reCamera Pro. Você instalará o compilador e as bibliotecas de destino, compilará o exemplo, verificará que ele é um programa ARM de 64 bits e o copiará para a câmera.

> Este SDK é para o reCamera Pro com o processador Rockchip RV1126B. Ele não funciona com o reCamera SG2002/RISC-V.

## O que você precisa

- reCamera Pro executando o firmware de produção
- Um PC Linux ou PC com Windows com WSL 2 e Ubuntu
- Acesso de rede do host ao GitHub Releases para baixar os artefatos do SDK (cerca de 2,5 GB instalados)
- CMake, Ninja e `pkg-config`
- Acesso SSH ao reCamera Pro para a etapa de implantação

O SDK tem como alvo Linux ARM de 64 bits e fornece o compilador Rockchip GCC 12.4.0, o sysroot de destino, arquivos de desenvolvimento do GStreamer 1.22 e RKNN API/runtime 2.3.2. A conversão de modelos é separada: converta modelos ONNX em um host x86_64 com RKNN-Toolkit2 2.3.2 e `target_platform='rv1126b'`.

## 1. Instalar o SDK

Instale as ferramentas de host e clone o repositório do SDK:

```bash
sudo apt update
sudo apt install -y git cmake ninja-build pkg-config
git clone https://github.com/Seeed-Projects/recamera_pro_toolchain.git
cd recamera_pro_toolchain
```

Baixe e verifique o compilador e o sysroot versionados e depois carregue o ambiente do SDK:

```bash
./scripts/setup.sh
source scripts/env.sh
bash scripts/check-sdk.sh
```

`setup.sh` instala os artefatos do SDK nos diretórios `toolchain/` e `sysroot/` do repositório e verifica seus checksums SHA-256. O download pode levar tempo em uma conexão lenta. Execute `source scripts/env.sh` novamente em cada novo terminal antes de configurar um projeto.

## 2. Compilar o exemplo incluído no SDK

Primeiro, compile o teste de fumaça incluído. Ele faz link com RKNN Runtime, OpenCV e GStreamer, então verifica se o SDK consegue encontrar as principais bibliotecas de destino.

A partir da raiz do repositório:

```bash
source scripts/env.sh
cmake -S examples/sdk_smoke -B examples/sdk_smoke/build -G Ninja
cmake --build examples/sdk_smoke/build
```

O executável é gravado em `examples/sdk_smoke/build/`. Se o CMake tiver configurado anteriormente esse diretório de build com o compilador do host, remova esse diretório de build e configure-o novamente antes de compilar com o SDK.

## 3. Compilar uma pequena aplicação em C++

Você pode usar o SDK com o seu próprio projeto CMake. Crie um diretório de projeto ao lado de `recamera_pro_toolchain`:

```bash
mkdir -p ~/my-recamerapro-app
cd ~/my-recamerapro-app
```

Crie `main.cpp`:

```cpp
#include <iostream>

int main() {
    std::cout << "Hello from reCamera Pro" << std::endl;
    return 0;
}
```

Crie `CMakeLists.txt`:

```cmake
cmake_minimum_required(VERSION 3.16)
project(my_recamera_app LANGUAGES CXX)

add_executable(my_recamera_app main.cpp)
```

Carregue o ambiente do SDK e depois configure e compile. Substitua o caminho abaixo se você clonou o SDK em outro lugar:

```bash
cd ~/my-recamerapro-app
source ~/recamera_pro_toolchain/scripts/env.sh
cmake -S . -B build -G Ninja
cmake --build build
```

O ambiente seleciona o cross-compiler aarch64 e o sysroot de destino para o CMake. Para projetos que usam RKNN ou GStreamer, siga o [exemplo de integração com CMake](https://github.com/Seeed-Projects/recamera_pro_toolchain#integração-mínima-com-cmake) do repositório do SDK para localizar e fazer link com as bibliotecas de destino.

## 4. Verificar o executável

Antes de copiar o programa para a câmera, confirme que ele foi compilado para o processador correto e não contém um caminho do host:

```bash
file build/my_recamera_app
source ~/recamera_pro_toolchain/scripts/env.sh
"${CROSS_COMPILE}readelf" -l build/my_recamera_app | grep interpreter
"${CROSS_COMPILE}readelf" -d build/my_recamera_app | grep -E 'NEEDED|RPATH|RUNPATH'
```

Verifique estes resultados:

- `file` relata ARM aarch64, não x86-64 ou RISC-V.
- O interpretador ELF é `/lib/ld-linux-aarch64.so.1`.
- Qualquer caminho de busca em tempo de execução aponta para `/oem/usr/lib`; ele não contém um caminho do host ou do WSL.

O arquivo de toolchain do SDK define o caminho de runtime do dispositivo como `/oem/usr/lib`. Não adicione um caminho absoluto do seu host, diretório do SDK ou diretório de build ao executável.

## 5. Copiar e executar no reCamera Pro

Conecte-se à câmera via Ethernet virtual USB ou pela sua LAN. Substitua `192.168.42.1` abaixo se a sua câmera usar um endereço IP diferente. Crie um diretório para o programa e copie o executável:

```bash
ssh root@192.168.42.1 'mkdir -p /userdata/my-recamerapro-app'
scp build/my_recamera_app root@192.168.42.1:/userdata/my-recamerapro-app/
ssh root@192.168.42.1
```

Na câmera, execute-o:

```bash
cd /userdata/my-recamerapro-app
chmod +x my_recamera_app
./my_recamera_app
```

Saída esperada:

```text
Hello from reCamera Pro
```

Copie apenas a sua aplicação e os artefatos necessários. Não sobrescreva `/oem/usr/lib/librknnrt.so`; o RKNN Runtime do SDK é usado para linkagem e foi verificado em relação ao runtime do dispositivo de produção.

## Solução de problemas

| Sintoma | O que verificar |
| --- | --- |
| `setup.sh` não consegue baixar um artefato | Verifique a conexão de internet do host e execute `./scripts/setup.sh` novamente. O script verifica os checksums baixados. |
| O CMake seleciona o compilador do host | Execute `source scripts/env.sh` no mesmo terminal, use um diretório de build novo e configure novamente. |
| `pkg-config` encontra bibliotecas do host | Carregue `scripts/env.sh` antes de configurar; ele aponta o `pkg-config` para o sysroot do SDK. |
| `Exec format error` no dispositivo | Execute `file` no executável e confirme que ele relata ARM aarch64. |
| Uma biblioteca compartilhada está ausente em tempo de execução | Verifique as entradas `NEEDED` do executável e confirme que a biblioteca necessária existe no firmware do dispositivo. Não copie bibliotecas do host para o dispositivo. |

O sysroot do SDK usa uma libc com símbolos até GLIBC 2.38. Verifique o ABI do firmware antes de declarar compatibilidade com uma versão de firmware diferente. Uma cross-compilação bem-sucedida confirma compilação e linkagem; ela não verifica a operação da câmera, a precisão do modelo ou o comportamento em tempo de execução da sua aplicação.

## Próximas etapas

- [Repositório do SDK do reCamera Pro](https://github.com/Seeed-Projects/recamera_pro_toolchain) — scripts de configuração do SDK, integração com CMake e o exemplo `sdk_smoke`
- [Desenvolvimento de Câmera, Áudio e Inferência](/pt-br/recamera_pro_media_dev/) — captura de câmera com GStreamer, áudio e RTSP
- [Escolher um Caminho de Desenvolvimento](/pt-br/recamera_pro_dev_path/) — selecione um fluxo de trabalho de desenvolvimento para o seu projeto

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diversos tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Você pode escolher o canal que funcionar melhor para você.

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
