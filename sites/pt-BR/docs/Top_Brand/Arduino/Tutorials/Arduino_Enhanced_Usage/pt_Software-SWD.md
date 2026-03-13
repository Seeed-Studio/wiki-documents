---
description: Como depurar placas Arduino usando a interface SWD
title: Como depurar placas Arduino usando a interface SWD
keywords:
  - Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Software-SWD
last_update:
  date: 1/16/2023
  author: jianjing Huang
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Software-SWD/
---
# Como depurar placas Arduino usando a interface SWD

Neste wiki, você aprenderá como usar a **interface SWD para depurar suas placas Arduino via o J-Link Debug Programmer**. Para referência, o Wio Terminal é usado como hardware para demonstrar o processo de depuração.

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/SWD-Interface.png"/></div>

### O que é depuração por SWD

**SWD**, também conhecido como [Serial Wire Debug](https://developer.arm.com/architectures/cpu-architecture/debug-visibility-and-trace/coresight-architecture/serial-wire-debug), é uma interface de 2 pinos (SWDIO/SWCLK), que também é uma interface JTAG alternativa que possui o mesmo protocolo JTAG. O SWD usa um protocolo de fio bidirecional padrão de CPU ARM, definido no ARM Debug programmer.

## Conexão de Hardware

Antes de começar, você vai precisar dos seguintes materiais:

1. [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) (ou outras placas Arduino com interface SWD)

2. [**J-Link Debug Programmer**](https://www.segger.com/products/debug-probes/j-link/)

### Interface SWD do Wio Terminal

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/SWD-connection.png"/></div>

Para o Wio Terminal, os pads da interface SWD estão na parte inferior da frente do Wio Terminal (PCBA nua, sem gabinete). Há três jumpers que precisam ser puxados para fora:

- **SWCLK**
- **SWDIO**
- **GND**

Depois que os jumpers forem soldados, podemos conectá-los ao J-Link Debug Programmer seguindo o mapa de pinos SWD:

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/pinout.png"/></div>

Conecte da seguinte forma:

- **`SWCLK`** (Wio Terminal) -> **`SWCLK`** (pino 7 do J-Link Debug Programmer)
- **`SWDIO`** (Wio Terminal) -> **`SWDIO`** (pino 9 do J-Link Debug Programmer)
- **`GND`** (Wio Terminal) -> **`GND`** (pino 4 do J-Link Debug Programmer)

## Instalando o J-Link GDB Server para depuração

Para depurar com o J-Link Debug Programmer, você precisará baixar o [**J-Link GDB Server**](https://www.segger.com/products/debug-probes/j-link/tools/j-link-gdb-server/about-j-link-gdb-server/). Baixe e instale de acordo com o seu sistema operacional.

## Configuração do Arduino

Antes de iniciar o J-Link GDB Server, você também precisará abrir a IDE `Arduino` para configurações posteriores.

### 1. Obtendo o caminho do arquivo ELF do sketch Arduino

Nas configurações da IDE do Arduino, certifique-se de que as opções **Show verbose output during compilation and upload** estejam ambas marcadas.

No sketch Arduino que você deseja depurar, clique em **Compile** (selecione Wio Terminal como placa) e verifique as informações de log para obter o caminho da localização do arquivo `.elf`. Vamos usar `Blink` como exemplo:

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/elf.png"/></div>

Copie esse caminho, pois ele será usado mais tarde pelo GDB.

Por exemplo, no meu caso:

```sh
/var/folders/7g/10kskmw90bg08j_g_r7flwq40000gn/T/arduino_build_633418/Blink.ino.elf
```

### 2. Obter o caminho do GCC

No mesmo log de compilação do sketch, você também pode encontrar o caminho do GCC usado pelo Arduino, que também pode ser usado posteriormente pelo J-Link Debug Programmer.

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/GCC.png"/></div>

Por exemplo, no meu caso:

```sh
/Users/ansonhe/Library/Arduino15/packages/Seeeduino/tools/arm-none-eabi-gcc/7-2017q4/bin
```

## Introdução ao J-Link GDB Server

Conecte o J-Link Debug Programmer ao PC e também alimente o Wio Terminal pela porta USB. Inicie o **J-Link GDB Server** e selecione as seguintes configurações:

- Connection to J-Link: **USB**
- Target Device: **Cortex-M4**
- Target Interface: **SWD**

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/SWD/GDB-launch.png"/></div>

Selecione **OK** e, se tudo correr bem, você deverá ver a seguinte tela:

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/GDB-ready.png"/></div>

Você deverá ver que a porta de escuta irá aparecer e o servidor J-Link GDB estará ativo e pronto!

## Iniciando um cliente GDB

Agora você pode iniciar o cliente GDB usando o caminho que salvamos anteriormente a partir do caminho do GCC no Arduino. Abra o Terminal e cole o caminho copiado + `/arm-none-eabi-gdb`:

Por exemplo: `/Users/ansonhe/Library/Arduino15/packages/Seeeduino/tools/arm-none-eabi-gcc/7-2017q4/bin/arm-none-eabi-gdb`

Execute os seguintes comandos no gdb:

1. `target remote localhost:2331`
2. `monitor device Cortex-M4`
3. `monitor speed auto`
4. `file` + caminho do arquivo ELF do sketch Arduino, isto é, `file /var/folders/7g/10kskmw90bg08j_g_r7flwq40000gn/T/arduino_build_633418/Blink.ino.elf`
5. `load`
6. `monitor reset`

Agora você pode usar o GDB para depurar seu sketch Arduino!

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/GDB-connected.png"/></div>

### Método `.gdbinit`

Você também pode criar um arquivo `.gdbinit`, copiar o seguinte conteúdo e salvá-lo na localização `~/` para evitar ficar repetindo o processo de configuração para o gdb.

```
target remote localhost:2331
monitor device Cortex-M4
monitor speed auto
file /var/folders/7g/10kskmw90bg08j_g_r7flwq40000gn/T/arduino_build_633418/Blink.ino.elf
load
monitor reset
```

Agora, se você apenas iniciar o cliente GDB, poderá começar a depurar imediatamente!

## Depuração

Alguns comandos úteis para o GDB:

- `continue/cont`
- `ctrl`+`c`
- `next`
- `break`
- `info break`
- `clear`
- `delete`
- `list`

## Ferramenta recomendada: XIAO Debug Mate
Para uma experiência de desenvolvimento mais eficiente, recomendamos o [XIAO Debug Mate](https://www.seeedstudio.com/Seeed-Studio-XIAO-Debug-Mate-p-6588.html). Esta ferramenta de desenvolvimento tudo-em-um foi projetada para simplificar o processo de depuração, oferecendo uma solução sem fios para o ecossistema XIAO, ao mesmo tempo que continua sendo um utilitário versátil para projetos embarcados mais amplos. Alimentado pelo ESP32-S3, ele serve como uma alternativa moderna aos depuradores tradicionais e volumosos.

**Principais recursos:**
- Ferramenta 3 em 1: combina um depurador DAPLink, monitor serial e medidor de energia em um único dispositivo.
- Feedback visual: possui uma tela LCD de 2,01 polegadas para visualizar, sem um PC, o status em tempo real de variáveis, curvas de energia e logs seriais.
- Plug-and-play para XIAO: conecte diretamente qualquer placa Seeed Studio XIAO para depuração instantânea.
- Suporte SWD universal: pode ser usado como uma sonda SWD independente (via conector de expansão de 2,54 mm) para depurar outros microcontroladores ARM Cortex-M.

<div align="center"><img src="https://files.seeedstudio.com/wiki/SWD/GDB_debug.png"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-Debug-Mate-p-6588.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>


## Recursos

- [Documentação oficial do GNU GDB](https://www.gnu.org/software/gdb/documentation/)

- [Folha de consulta de comandos do depurador GNU GDB](http://www.yolinux.com/TUTORIALS/GDB-Commands.html)

## FAQ

**P1. Como remover o gabinete do Wio Terminal?**

**R1.** Primeiro, retire as 4 almofadas de borracha dos 4 cantos e você verá 2 parafusos que prendem o gabinete do Wio Terminal. Basta desparafusá-los e você poderá desmontá-lo.

<div align="center"><img width ="{450}" src="https://files.seeedstudio.com/wiki/SWD/WT.png"/></div>
