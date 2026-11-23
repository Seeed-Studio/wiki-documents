---
description: Use um mapa da pilha de software para esclarecer a relação em camadas entre JetPack, Jetson Linux / L4T, Ubuntu, Kernel Linux e UEFI no ecossistema de software Jetson.
title: Qual é a relação entre JetPack, L4T, Ubuntu, Kernel e UEFI?
keywords:
  - jetson
  - jetpack
  - l4t
  - ubuntu
  - kernel
  - uefi
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /jetson_jetpack_l4t_ubuntu_kernel_uefi
last_update:
  date: 11/02/2026
  author: youjiang
---

Quando você começa a trabalhar com Jetson, há uma pergunta em que quase todo mundo esbarra: **Afinal, quantas "versões de sistema" o Jetson realmente tem?**

Você pode ver números completamente diferentes em lugares diferentes:

```text
JetPack 6.2.3
L4T / Jetson Linux R36.5.2
Ubuntu 22.04
Linux Kernel 5.15
UEFI 36.5.2
```

Eles parecem cinco sistemas separados. Na realidade, eles descrevem **camadas diferentes dentro da pilha de software do mesmo dispositivo Jetson**.

O mais importante sobre esses conceitos não é decorar definições, mas construir uma consciência como esta:

**O software do Jetson não é algo simples como "Ubuntu + driver de GPU da NVIDIA". É uma plataforma de software completa que abrange o firmware de boot, o kernel Linux, o espaço de usuário do Ubuntu e vai até pacotes de aceleração como CUDA e TensorRT.**

Vamos começar com um diagrama mostrando como esses componentes se relacionam e se contêm mutuamente.

```text
JetPack
│
├── Jetson Linux / L4T
│   │
│   ├── UEFI
│   ├── Linux Kernel
│   ├── NVIDIA Drivers
│   └── Ubuntu RootFS
│
├── CUDA
├── TensorRT
├── cuDNN
├── VPI
└── ...
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetpack_l4t_ubuntu_kernel_uefi/jetpack_architecture.png"/></div>

Este diagrama não é exaustivo, mas é suficiente para mostrar as relações entre os termos abordados neste artigo. Um diagrama de arquitetura mais completo é fornecido ao final deste artigo.

---

## JetPack

Você pode pensar no **JetPack** como o ambiente completo de desenvolvimento de software que a NVIDIA prepara para dispositivos Jetson de computação de borda. Ele inclui não apenas componentes relacionados ao sistema operacional, mas também pacotes de software relacionados à segurança e pacotes de aceleração de IA.

Então, quando alguém pergunta: "Qual JetPack você está usando?"

o que essa pessoa realmente está perguntando é:

> **Qual plataforma de software NVIDIA Jetson você está usando atualmente?**

Nesse sentido, JetPack pode ser entendido como a "coleção de software" de nível mais alto.

Se você tiver um dispositivo Jetson com um sistema em funcionamento, pode executar o seguinte comando no terminal do Jetson para verificar a versão do JetPack:

```bash
seeed@ubuntu:~$ dpkg -l | grep nvidia-jetpack
ii  nvidia-jetpack                                    6.2.1+b38                                   arm64        NVIDIA Jetpack Meta Package
ii  nvidia-jetpack-dev                                6.2.1+b38                                   arm64        NVIDIA Jetpack dev Meta Package
ii  nvidia-jetpack-runtime                            6.2.1+b38                                   arm64        NVIDIA Jetpack runtime Meta Package
```

A saída mostra que o dispositivo atual está executando o JetPack 6.2.1.

---

## Jetson Linux / L4T

Se o JetPack é o "software completo" do Jetson, então **Jetson Linux / L4T é o sistema de base do qual o Jetson realmente depende para rodar**. Primeiro, vamos esclarecer a relação entre Jetson Linux e L4T:

> L4T é o nome mais antigo / técnico, enquanto Jetson Linux é o nome que a NVIDIA usa com mais frequência hoje em dia. Eles podem ser entendidos como o mesmo software.

Para simplificar, usaremos L4T para nos referirmos a Jetson Linux / L4T ao longo do restante deste artigo.

O nome completo de L4T é **Linux for Tegra**.

Tegra é a plataforma SoC usada pelo NVIDIA Jetson, então L4T pode ser entendido como:

> **Um BSP Linux personalizado pela NVIDIA especificamente para o hardware Jetson.**

Aqui encontramos outro novo termo: **BSP, Board Support Package**.

Sua função não é apenas fornecer um desktop Linux; ele é responsável por realmente conectar o sistema Linux ao hardware do Jetson.

Você pode pensar nisso assim:

```text
                Jetson Linux / L4T
                        │
        ┌───────────────┼───────────────┐
        ↓               ↓               ↓
      UEFI          Linux Kernel     Ubuntu RootFS
        │               │               │
   Boot system      Manage HW      User space
                        │
                   NVIDIA Drivers
                        │
                  Jetson Hardware
```

Em outras palavras, L4T não é um único componente de software; é um ambiente completo de sistema de base.

Ele normalmente inclui:

- UEFI / Bootloader: responsável pelo **boot em estágio inicial e inicialização do sistema após o dispositivo ser ligado**.
- Kernel Linux: o núcleo do Linux, responsável por **escalonamento de CPU, gerenciamento de memória, gerenciamento de processos e os frameworks para vários drivers de hardware**.
- Device Tree: descreve **qual hardware existe na placa e como esse hardware está conectado**.
- NVIDIA Drivers: drivers fornecidos pela NVIDIA para o hardware Jetson, para suportar recursos como GPU, ISP e NVCSI.
- Ubuntu RootFS: o ambiente de espaço de usuário do Jetson — o desktop Ubuntu que vemos e usamos todos os dias.
- ...

Observe que o Jetson não é um computador ARM Linux comum. Ele possui muito hardware específico da NVIDIA: GPU, NVCSI, VI e mais. Para que esse hardware funcione corretamente, o Device Tree, os drivers do kernel, o firmware e os drivers da NVIDIA precisam trabalhar em conjunto. Esse suporte de baixo nível não está incluído no Ubuntu padrão — ele é fornecido pelo L4T.

Portanto:

> **O que realmente faz o Ubuntu rodar no hardware Jetson é o L4T.**

:::caution
Apresentamos muitos termos aqui. Você não precisa entender profundamente cada componente neste momento — basta construir agora um modelo mental aproximado. Quando você se deparar com eles mais tarde no trabalho real, poderá se aprofundar então.
:::

Use o seguinte comando para verificar a versão do L4T de um dispositivo Jetson:

```bash
seeed@ubuntu:~$ cat /etc/nv_tegra_release
# R36 (release), REVISION: 4.3, GCID: 38968081, BOARD: generic, EABI: aarch64, DATE: Wed Jan  8 01:49:37 UTC 2025
# KERNEL_VARIANT: oot
TARGET_USERSPACE_LIB_DIR=nvidia
TARGET_USERSPACE_LIB_DIR_PATH=usr/lib/aarch64-linux-gnu/nvidia
```

A saída mostra que o dispositivo atual está executando o L4T 36.4.3.

:::info
Observe que JetPack e L4T têm uma correspondência estrita de um-para-um. Você pode consultar todas as versões de JetPack lançadas pela NVIDIA neste link: https://developer.nvidia.com/embedded/jetson-linux-archive
:::

---

## Ubuntu: o espaço de usuário com o qual você mais interage no Jetson

No Jetson, o Ubuntu é a camada que você mais vê e com a qual interage diariamente.

Quando você inicializa no desktop, abre um terminal e executa:

```text
apt install
python3
docker
systemctl
cd /home
```

Todas essas operações acontecem no **espaço de usuário do Ubuntu**. É por isso que muitas pessoas presumem: "O Jetson roda Ubuntu." A esta altura, você já consegue perceber que essa afirmação não está errada, mas está incompleta. Uma forma mais precisa de dizer seria: **L4T usa o Ubuntu como RootFS e base de espaço de usuário, mas o Ubuntu não é todo o sistema Jetson.**

Em outras palavras, **Ubuntu fornece a camada de interação com o usuário — "ele permite que usuários e aplicações usem a máquina."**

O que realmente gerencia diretamente o hardware do Jetson é principalmente:

```text
Linux Kernel
NVIDIA Drivers
Device Tree
Firmware
```

Explicaremos mais detalhes em artigos posteriores. Por enquanto, há dois pontos-chave a observar:

1. Quando dizemos "**o sistema está instalado em NVMe**", em muitos casos o que realmente queremos dizer é "**o Ubuntu RootFS está armazenado em NVMe**."
2. Ubuntu é apenas a parte de espaço de usuário do Jetson Linux, não o sistema inteiro. É por isso que dois dispositivos Jetson podem ambos rodar Ubuntu 22.04 e ainda assim se comportar de forma completamente diferente. Por exemplo, tanto o L4T R36.4.x quanto o L4T R36.5.x usam Ubuntu 22.04 como seu sistema de arquivos, mas suas versões de Kernel e NVIDIA Driver são diferentes.

No Jetson, você pode simplesmente executar `cat /etc/os-release` para verificar a versão do Ubuntu.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetpack_l4t_ubuntu_kernel_uefi/os_release.png"/></div>

---

## Kernel Linux

Se o Ubuntu é o "espaço de usuário" que vemos e usamos todos os dias, então **o Kernel Linux é o núcleo de todo o sistema que realmente gerencia o hardware e os recursos do sistema.**

Ele fica entre o Ubuntu e o hardware: `Application` --> `Ubuntu` --> `Linux Kernel` --> `Drivers` --> `Jetson`

Resumindo:

> **Ubuntu lida com a interação com usuários; o Kernel lida com a interação com o hardware.**

O Kernel Linux lida com uma grande quantidade de coisas, entre as mais importantes estão o escalonamento de CPU, gerenciamento de memória, gerenciamento de processos e assim por diante.

Vamos ver um exemplo de como o Kernel Linux funciona. Se você conectar uma câmera USB, antes de ver o dispositivo `/dev/video0`, os dados passam por:

```text
USB Camera
    ↓
USB Controller
    ↓
Kernel USB Driver
    ↓
/dev/video0
    ↓
Application
```

Você pode verificar a versão do Kernel Linux com `uname -r` no terminal do Jetson:

```bash
seeed@ubuntu:~$ uname -r
5.15.148-tegra
```

---

## UEFI

Se o Ubuntu é o espaço de usuário e o Kernel Linux é o núcleo do sistema, então **UEFI é a camada crítica responsável por "colocar o sistema de pé" antes de o Linux iniciar**. UEFI significa **Unified Extensible Firmware Interface** — você pode pensar nisso como **a interface de firmware de boot que computadores modernos usam para substituir o BIOS tradicional**.

No Jetson, ele leva o dispositivo de "hardware ligado" até "o Kernel Linux pode começar a rodar". Seu trabalho inclui: inicializar o ambiente de boot, identificar dispositivos inicializáveis, ler a configuração de boot, carregar o Kernel, carregar o initrd, carregar o Device Tree e entregar o controle ao Linux.

Vamos primeiro construir um modelo mental simples:

`Power On` --> `UEFI` --> `Linux Kernel` --> `Ubuntu RootFS`

Ou seja:

> **Quando o UEFI está trabalhando, o Kernel Linux ainda não começou realmente a rodar, e o Ubuntu ainda nem iniciou.**

Pontos a observar aqui:

1. Em muitos dispositivos Jetson Orin, o firmware de boot é armazenado em QSPI NOR Flash. Mesmo que o seu Ubuntu RootFS esteja instalado em NVMe, o dispositivo ainda pode precisar inicializar primeiro através do UEFI na QSPI.

2. Se um Jetson falhar ao inicializar, a primeira coisa a verificar é o log do UEFI do processo de boot — a causa raiz muito provavelmente está escondida ali.

3. O UEFI decide de qual dispositivo de boot o Linux deve ser carregado primeiro. Quando o logotipo da NVIDIA aparecer após ligar, você pode pressionar `ESC` ou `F1` para entrar na página de configuração do UEFI e configurar isso.

Execute `cat /sys/class/dmi/id/bios_version` no terminal do Jetson para verificar a versão do UEFI:

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetpack_l4t_ubuntu_kernel_uefi/uefi_version.png"/></div>

---

Hoje reunimos vários conceitos comuns relacionados ao boot da pilha de software do Jetson, com o objetivo de construir rapidamente um mapa. A coisa mais importante neste artigo não é memorizar a definição de cada termo, mas construir o entendimento básico de que esses conceitos não são sistemas independentes — eles são camadas diferentes dentro da pilha de software do Jetson. Com essa base, você será mais eficiente e eficaz, seja ao depurar problemas de boot/sistema do Jetson ou ao discutir detalhes técnicos com outros desenvolvedores.

Claro, o que abordamos hoje é apenas uma pequena parte dos tópicos relacionados ao boot do Jetson. Você pode encontrar mais no site da NVIDIA.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetpack_l4t_ubuntu_kernel_uefi/nvidia_ecosystem.png"/></div>

Fonte da imagem: https://developer.nvidia.com/embedded/jetpack

Nos próximos artigos, continuaremos ao longo dessa cadeia de boot — primeiro explicando o processo completo desde o acionamento de energia, inicialização do firmware e carregamento do Kernel até entrar no Ubuntu, depois seguindo para interfaces de hardware, câmeras, controle de robôs e mais. Se houver tópicos sobre os quais você gostaria de aprender, fique à vontade para deixar um comentário ou me enviar uma mensagem.

Da próxima vez, começaremos com a questão mais fundamental:

> **Por exatamente o que um Jetson passa, desde ligar até entrar no Ubuntu?**

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
