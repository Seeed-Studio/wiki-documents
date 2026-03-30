---
description: Comandos básicos de Linux para reCamera
title: Desenvolvimento avançado com C
keywords:
  - Edge
  - reCamera
  - recamera
  - comando linux
  - linux
image: https://files.seeedstudio.com/wiki/reCamera/OS_upgrade/image-4.png
slug: /gimbal_development_c
sidebar_position: 4
last_update:
  date: 4/15/2025
  author: Parker Hu & Dawn Yao
createdAt: '2025-04-14'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/gimbal_development_c/
---

# Desenvolvimento avançado do Gimbal com C

Existem três abordagens para desenvolver para o reCamera Gimbal:

1. **Desenvolvimento de lógica de aplicação usando nós do Node-RED**
2. **Scripts Bash usando ferramentas can-utils por meio de comandos de terminal**  
3. **Programação em C que exige configuração de ambiente de cross-compilação e compilação de binário**

Este documento fornecerá um guia abrangente sobre como desenvolver para o reCamera Gimbal usando programação em C.

Para desenvolvimento baseado em Node-RED, consulte:  
[Node-RED Development Documentation](https://wiki.seeedstudio.com/pt-br/recamera_gimbal_node_red/)

Antes de desenvolver, você precisa instalar o ambiente de cross-compilação em seu ambiente de desenvolvimento.

Linux:

```bash
sudo apt-get update
sudo apt-get install can-utils

mkdir recamera && cd recamera

wget https://github.com/Seeed-Studio/reCamera-OS/releases/download/0.2.0/reCameraOS_sdk_v0.2.0.tar.gz

tar -xzvf reCameraOS_sdk_v0.2.0.tar.gz

git clone https://github.com/sophgo/host-tools.git
git clone https://github.com/Seeed-Studio/sscma-example-sg200x.git

export SG200X_SDK_PATH=$HOME/recamera/sg2002_recamera_emmc/
export PATH=$HOME/recamera/host-tools/gcc/riscv64-linux-musl-x86_64/bin:$PATH

```
## Baixar o programa de exemplo

```bash
sudo apt-get install unzip
wget https://files.seeedstudio.com/wiki/reCamera/Gimbal/CAN.zip
unzip CAN.zip
```
A estrutura de diretórios é mostrada a seguir:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/CAN_Directory.png" /></div>

Você precisa modificar o Makefile para substituir a variável CC pela sua própria ferramenta de cross-compilação.

```bash
CC = $HOME/recamera/host-tools/gcc/riscv64-linux-musl-x86_64/bin/riscv64-unknown-linux-musl-gcc
```

## Compilar o programa

```bash
cd CAN/can_send
mkdir build && cd build
cmake ../
make
```

Envie o binário compilado para a reCamera

```bash
scp can_send recamera@ip_address:/home/recamera
```

Use `candump can0` para visualizar os dados do barramento CAN
Use `sudo ./can_send` para testar o script

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_send.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_dump.png" /></div>

## Análise do programa

Esses comandos são usados para definir a taxa do barramento CAN e o status da interface, o que só precisa ser inicializado uma vez na aplicação.

```bash
"sudo ip link set can0 type can bitrate 100000"
"sudo ifconfig can0 up"
```
Conforme mostrado, no arquivo can_send.c, os comandos acima são chamados usando a função system.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Initialization_can0.png" /></div>

Você precisa definir uma estrutura de quadro CAN para armazenar o ID do quadro CAN, o comprimento dos dados e os dados.
E usar a função memset para limpar a estrutura do quadro CAN para zero.

```c
struct can_frame frame;
memset(&frame, 0, sizeof(struct can_frame));
```

Você pode definir can_id e can_dlc para configurar o ID e o comprimento dos dados do quadro CAN.
Este é o formato padrão de dados de quadro CAN.
Usando `nbytes = write(s, &frame, sizeof(frame));` para enviar o quadro CAN para o barramento CAN, ele retorna o número de bytes enviados. Você pode comparar o valor retornado com o número esperado de bytes para determinar se o quadro CAN foi enviado com sucesso.

```c
 //5.Set send data
    frame.can_id = 0x141;
    frame.can_dlc = 8;
    frame.data[0] = 0x80;
    frame.data[1] = 0x00;
    frame.data[2] = 0x00;
    frame.data[3] = 0x00;
    frame.data[4] = 0x00;
    frame.data[5] = 0x00;;
    frame.data[6] = 0x00;
    frame.data[7] = 0x00
```

Você pode consultar mais programas em C em nosso [repositório Github](https://github.com/Seeed-Studio/OSHW-reCamera-Series/tree/main/reCamera_Gimbal/src).

Observe que os programas relacionados ao Gimbal são desenvolvidos com base em componentes do Node-RED. Nós só manteremos programas em Node-RED daqui para frente, portanto você pode referenciar e desenvolver diretamente em Node-RED.

Como os programas em C não são mantidos, eles podem se tornar inválidos à medida que o firmware do motor é atualizado. Use nosso [manual mais recente do motor](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/reCamera_Gimbal/MotorTools/EN/CAN_Protocol_DescriptionV2.36.pdf) para encapsular os comandos corretos para desenvolvimento.


## Recursos

- [Github](https://github.com/Seeed-Studio/OSHW-reCamera-Series)
- [CAN_Script_C](https://files.seeedstudio.com/wiki/reCamera/Gimbal/CAN.zip)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
