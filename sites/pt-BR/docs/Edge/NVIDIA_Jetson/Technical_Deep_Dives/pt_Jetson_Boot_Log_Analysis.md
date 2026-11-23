---
description: Percorra um log real de boot UART do Jetson Orin etapa por etapa ao longo da cadeia Power On → BootROM → MB1 → MB2 → UEFI → L4TLauncher → Kernel → initrd → RootFS → systemd, e aprenda a solucionar falhas de boot usando o "último estágio de boot alcançado com sucesso".
title: Jetson do Power-On ao Ubuntu
keywords:
  - jetson
  - boot
  - bootlog
  - uart
  - uefi
  - mb1
  - mb2
  - l4t
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /jetson_boot_log_analysis
last_update:
  date: 11/02/2026
  author: youjiang
---

No artigo anterior, apresentamos **JetPack, Jetson Linux / L4T, Ubuntu, Kernel e UEFI** e o que cada um deles é.

Mas em que ordem esses componentes realmente são executados? Depois de pressionarmos o botão de energia em um Jetson, por que o dispositivo não entra diretamente no Ubuntu e, em vez disso, precisa passar por BootROM, MB1, MB2, UEFI, Kernel e initrd?

Mais importante ainda: **quando um Jetson falha ao inicializar, como você pode usar o log UART para determinar exatamente em qual estágio ele está travado?**

Neste artigo, em vez de olhar apenas para diagramas de arquitetura, vamos analisar diretamente um **log real de boot UART do Jetson Orin**.

Se você não tem certeza de como capturar o log de boot, consulte estes dois artigos da wiki:

> https://wiki.seeedstudio.com/cn/jetson_debug_guide/
> https://wiki.seeedstudio.com/cn/get_the_system_log_of_recomputer_j30_and_j40/

## Primeiro a Visão Geral: Por Quais Estágios um Jetson Passa do Power-On até o Ubuntu?

Antes de analisar o log de boot linha por linha, vamos primeiro construir um mapa geral de boot.

No [**Jetson Linux Developer Guide**](https://docs.nvidia.com/jetson/archives/r36.5.2/DeveloperGuide/AR/BootArchitecture/JetsonOrinSeriesBootFlow.html) – Boot Architecture, a NVIDIA define o fluxo de boot da série Jetson Orin como: o bootloader inicializa progressivamente o SoC, armazenamento, memória, CPU, ambiente seguro e vários firmwares, inicializando por fim o sistema no SO. De acordo com a documentação oficial, os principais estágios de Boot Firmware da série Orin são **BootROM, PSCROM, MB1, MB2 e UEFI**.

Se continuarmos estendendo o fluxo oficial de Boot Firmware em direção aos estágios posteriores, até realmente entrarmos no Ubuntu, obtemos esta cadeia de boot mais completa e fácil de entender:

> `Power On` --> `BootROM / PSCROM` --> `MB1` --> `MB2` --> `BL31 / OP-TEE` --> `UEFI` --> `L4TLauncher` --> `Linux Kernel` + `DTB + initrd` --> `Find RootFS` --> `NVMe / eMMC / SD` --> `Ubuntu RootFS` --> `systemd` --> `Login / Desktop / Application`

Em seguida, vamos pegar um **log real de boot UART do Jetson Orin** e percorrer essa cadeia de boot passo a passo.

O que queremos construir, em última análise, não é apenas o conceito de "como um Jetson inicializa", mas uma habilidade de diagnóstico mais prática:

> **Dado um log de boot de Jetson, determinar rapidamente até qual camada da cadeia de boot o dispositivo chegou e, se o boot falhar, qual parte deve ser investigada primeiro.**

A documentação oficial de Boot Flow da NVIDIA pode servir como referência técnica para esta parte: [NVIDIA Jetson Orin Series Boot Flow](https://docs.nvidia.com/jetson/archives/r36.5.2/DeveloperGuide/AR/BootArchitecture/JetsonOrinSeriesBootFlow.html?utm_source=chatgpt.com)

---

## As Primeiras Linhas de Log Após o Power-On: Por Que Começa com MB1?

A primeira linha deste log UART é:

```text
[0000.066] I> MB1 (version: 1.4.0.4-t234-...)
[0000.071] I> t234-A01-1-Silicon
[0000.075] I> Boot-mode : Coldboot
[0000.082] I> last_boot_error: 0x0
```

Aqui está a parte interessante. Nós acabamos de dizer:

```text
Power On
 ↓
BootROM
 ↓
MB1
```

Por que não vemos BootROM no log, com MB1 aparecendo diretamente como a primeira linha?

Porque **BootROM é código de boot fundido no próprio SoC Tegra**. Depois que o dispositivo é energizado, o BootROM já foi executado e carregou com sucesso o MB1, e é por isso que o UART começa a mostrar as linhas de log do MB1 aqui.

Então:

> **Quando você já vê `MB1`, isso significa que o estágio mais inicial de BootROM do SoC pelo menos progrediu com sucesso até o MB1.**

Este é o primeiro modo de pensar para solução de problemas de log de boot: **não procure apenas por erros; procure pelo "último estágio de boot alcançado com sucesso".**

---

## MB1: Concluindo a Inicialização Básica de Hardware

Depois de entrar no MB1, você pode ver o sistema primeiro inicializando o armazenamento de boot:

```text
[0000.296] I> Task: Boot device init
[0000.299] I> Boot_device: QSPI_FLASH instance: 0
[0000.308] I> QSPI Flash: Macronix 64MB
[0000.312] I> QSPI-0l initialized successfully
```

Isso mostra que **o MB1 consegue acessar normalmente a QSPI Flash**. Mesmo que o Ubuntu RootFS acabe em NVMe, o firmware de boot inicial do Jetson ainda precisa passar primeiro por componentes de boot como a QSPI.

O MB1 então continua com a inicialização básica de Pinmux, energia e memória:

```text
[0000.784] I> Task: Pinmux init
[0000.874] I> Task: Pad voltage init
[0000.884] I> Task: Common rail init
[0000.944] I> Task: SDRAM init
[0000.980] I> SDRAM initialized!
[0000.983] I> SDRAM Size in Total 0x100000000
```

A linha que merece mais atenção é:

```text
[0000.980] I> SDRAM initialized!
```

Isso significa que **a DRAM foi inicializada com sucesso, e a fase principal de inicialização de hardware do MB1 está basicamente concluída**.

Se o log de boot ficar parado no MB1 por muito tempo e `SDRAM initialized!` nunca aparecer, a investigação deve se concentrar em **MB1-BCT, DDR, PMIC, energia e configuração de placa** — não no Ubuntu ou no Kernel Linux.

Porque, neste ponto, **o Linux ainda não começou a inicializar.**

---

## Após o MB1, Entrando no MB2

Após a inicialização básica de hardware, o MB1 carrega o próximo estágio, o **MB2**:

```text
[0001.874] I> Task: Load MB2/Applet/FSKP
[0001.878] I> Loading MB2
[0001.888] I> Binary name: MB2
[0001.912] I> MB2 header integrity check is success
[0001.945] I> MB2 binary integrity check is success
[0001.950] I> Binary MB2 loaded successfully at 0x80000000
```

O log então entra no MB2:

```text
I> MB2 (version: 0.0.0.0-t234-...)
I> Boot-mode : Coldboot
```

Isso significa que o fluxo de boot passou do MB1 para o MB2.

O MB2 então continua a inicialização da plataforma e carrega e autentica alguns firmwares necessários dentro do SoC, como SPE, RCE, DCE, XUSB, PVA, etc., preparando o estágio posterior de UEFI e o boot do Linux.

A principal conclusão aqui: **antes de o Kernel Linux realmente começar, o Jetson já concluiu uma grande quantidade de inicialização de hardware e firmware de baixo nível.**

---

## Após o MB2, Entrando no UEFI

Quando o MB2 termina seu trabalho, uma linha de limite muito clara aparece no log:

```text
I> MB2 finished
```

Em seguida, entramos no ARM Trusted Firmware e no OP-TEE:

```text
NOTICE: BL31: v2.8
I/TC: OP-TEE version: 4.2
I/TC: Primary CPU switching to normal world boot
```

Em seguida, o boot do UEFI pode ser visto:

```text
Jetson UEFI firmware
(version 36.4.3-gcid-38968081 ...)
```

Aqui, o **BL31** é responsável pelo estágio ARM Trusted Firmware, e o **OP-TEE** fornece um ambiente de execução confiável. Para desenvolvedores comuns de Jetson, não há necessidade de estudar seus detalhes internos, mas você deve saber: **ver o log do UEFI significa que os estágios anteriores de MB1, MB2 e firmware seguro estão basicamente concluídos, e o sistema está prestes a entrar no estágio de boot do SO.**

Este também é um ponto de verificação muito importante para solução de problemas posterior.

---

## Entrando no UEFI: Problemas de Boot Agora se Tornam "Sistema Inicializando"

Seguindo adiante, o log mostra:

```text
Jetson System firmware version 36.4.3-gcid-38968081

ESC   to enter Setup.
F11   to enter Boot Manager Menu.
Enter to continue boot.
```

Isso significa que o sistema entrou com sucesso no **estágio UEFI**. Em outras palavras, o fluxo de boot anterior — BootROM, MB1, MB2, etc. — foi concluído.

A partir daqui, o foco da solução de problemas muda.

Se o dispositivo não conseguir continuar para o Linux após o UEFI, você deve primeiro se concentrar em:

```text
Boot Order
Boot Device
EFI Boot Entry
L4TLauncher
Kernel / DTB / initrd
```

Você pode entender este estágio de forma simples como:

```text
Early hardware init
      ↓
     UEFI
      ↓
Start selecting and loading Linux
```

> **Ver o UEFI significa que o sistema concluiu a maior parte do fluxo de boot de baixo nível. Em seguida, concentre-se em "de onde o Linux é inicializado e se os arquivos de boot do Linux estão corretos".**

---

## L4TLauncher: Entrega do Controle do UEFI para o Kernel Linux

Depois de entrar no UEFI, o sistema começa a realmente carregar o Linux. O log mostra:

```text
L4TLauncher: Attempting Direct Boot
EFI stub: Booting Linux Kernel...
EFI stub: Using DTB from configuration table
EFI stub: Loaded initrd from LINUX_EFI_INITRD_MEDIA_GUID device path
EFI stub: Exiting boot services...
```

O **L4TLauncher** é o carregador de SO usado por padrão no UEFI do Jetson. Ele prepara tudo o que é necessário para inicializar o Linux, incluindo:

```text
Kernel   The Linux kernel
DTB      Hardware description
initrd   Temporary filesystem used in early boot
```

As duas linhas mais críticas são:

```text
EFI stub: Booting Linux Kernel...
EFI stub: Exiting boot services...
```

Elas significam que o UEFI terminou de preparar o ambiente de boot do Linux e está começando a entregar o controle do sistema para o Kernel.

Assim, o fluxo de boot entra em um novo estágio.

> **Se você já vê `EFI stub: Booting Linux Kernel...`, o estágio do bootloader basicamente teve sucesso; se o boot falhar depois disso, o foco da investigação deve gradualmente mudar para o Kernel, DTB, initrd e RootFS.**

---

## O Kernel Linux Começa Oficialmente

Logo em seguida, o log entra no Kernel Linux:

```text
[    0.000000] Booting Linux on physical CPU 0x0000000000
[    0.000000] Linux version 5.15.148-tegra
[    0.000000] Machine model: NVIDIA Jetson Orin NX Engineering Reference Developer Kit Super
```

Você pode ver uma mudança óbvia aqui: **os timestamps reiniciam a partir de `0.000000`**.

Isso acontece porque MB1, MB2 e UEFI pertencem ao estágio de Bootloader / Firmware, enquanto agora entramos **no estágio de execução próprio do Kernel Linux**.

Portanto, sempre que você analisar um log de boot UART no futuro, desde que veja:

```text
Linux version ...
```

você pode basicamente concluir:

> **O estágio do bootloader está concluído, e o sistema entrou oficialmente no Kernel Linux.**

A partir deste momento, o foco do log passa gradualmente para **drivers de dispositivo, DTB, dispositivos de armazenamento, initrd e RootFS**.

---

## O Kernel Encontra o RootFS por Meio dos Parâmetros de Boot

Depois que o Kernel inicia, ele precisa saber onde está o RootFS real do Ubuntu. Essa informação pode ser vista na linha de comando do Kernel:

```text
[    0.000000] Kernel command line:
root=PARTUUID=dd2da367-f299-4b4e-b99b-1510fb301f0d
rw rootwait rootfstype=ext4 ...
```

Ela informa ao Kernel:

> **O RootFS a ser montado como `/` é a partição correspondente a este PARTUUID.**

Há também outro parâmetro: `rootwait`.

Ele informa ao Kernel para aguardar o dispositivo de armazenamento correspondente aparecer se o dispositivo raiz ainda não estiver pronto. Isso é muito importante para dispositivos como NVMe e SSDs USB, que precisam que o controlador e o driver sejam inicializados primeiro.

Portanto, esta etapa pode ser simplesmente entendida como:

> **Se você entrou no Kernel mas o RootFS nunca é encontrado, mude o foco da investigação para dispositivos de armazenamento, drivers, PARTUUID e o sistema de arquivos — não para o UEFI anterior.**

---

## initramfs: O Ambiente Temporário Antes do RootFS Real

Após o Kernel iniciar, ele primeiro descompacta o initramfs:

```text
[    0.165968] Unpacking initramfs...
```

Em seguida, ele entra no espaço de usuário inicial e executa `/init`:

```text
[    2.540191] Freeing unused kernel memory: 7744K
[    2.540270] Run /init as init process
[    2.567003] Root device found: PARTUUID=dd2da367-f299-4b4e-b99b-1510fb301f0d
```

O `/init` aqui não é o `systemd` do Ubuntu; é o programa de inicialização em execução no **ambiente temporário do initramfs**. Uma de suas tarefas importantes é preparar os dispositivos de armazenamento e encontrar o RootFS real.

Você pode simplesmente entendê-lo como:

```text
Linux Kernel
    ↓
initramfs
    ↓
Run /init
    ↓
Find Root Device
    ↓
Prepare to switch to Ubuntu RootFS
```

Portanto, se um Jetson parar no shell de initramfs / recuperação durante a inicialização, por exemplo:

```text
bash-5.2#
```

isso geralmente significa que **o Kernel e o espaço de usuário inicial foram iniciados com sucesso**. Neste ponto, você deve se concentrar nas etapas posteriores: RootFS, dispositivos de armazenamento, PARTUUID, sistema de arquivos, etc. Observe que chegar ao shell **não significa necessariamente uma falha** — isso precisa ser analisado em conjunto com o log específico.

---

## O Kernel Detecta o NVMe e Encontra o Disco que Contém o RootFS

Na maioria dos produtos Jetson da Seeed Studio, o RootFS do Ubuntu está localizado em NVMe, então, após o Kernel iniciar, ele primeiro precisa detectar os dispositivos PCIe e NVMe correspondentes.

O log mostra que o Link PCIe foi estabelecido:

```text
[    6.639293] tegra194-pcie 14160000.pcie: Link up
[    6.640379] tegra194-pcie 14160000.pcie: Link up
```

O sistema então detecta o controlador NVMe:

```text
[    6.649660] nvme 0004:01:00.0: Adding to iommu group 5
[    6.649851] nvme nvme0: pci function 0004:01:00.0
```

Por fim, o disco NVMe e suas partições são enumerados:

```text
[    6.662942] nvme nvme0: 6/0/0 default/read/poll queues
[    6.665906] nvme0n1: p1 p2 p3 p4 p5 p6 p7 p8 p9 p10 p11 p12 p13 p14 p15
```

Este log mostra que toda a cadeia foi percorrida:

```text
PCIe Link Up
    ↓
NVMe Controller found
    ↓
Identified as nvme0
    ↓
nvme0n1 created
    ↓
Partitions enumerated
```

**Ver `nvme0n1` significa que o Kernel detectou este NVMe com sucesso. Só então ele prossegue para montar o RootFS real.**

---

## O RootFS do Ubuntu é Montado

Uma vez que o NVMe é detectado, o sistema continua para montar o RootFS real. O log mostra:

```text
[    7.426780] EXT4-fs (nvme0n1p1): mounted filesystem with ordered data mode.
[    7.433141] Rootfs mounted over PARTUUID=dd2da367-f299-4b4e-b99b-1510fb301f0d
[    7.439898] Switching from initrd to actual rootfs
```

Isso significa que o sistema deixou o ambiente temporário do initramfs e começou a usar o RootFS real do Ubuntu.

> **Vendo isso, você pode basicamente confirmar que o Kernel, os dispositivos de armazenamento e a montagem do RootFS foram todos bem-sucedidos, e o fluxo de boot está prestes a entrar no Espaço de Usuário do Ubuntu.**

Isso também corresponde ao conceito do artigo anterior: **Ubuntu não é todo o sistema Jetson em si; é o RootFS e o ambiente de espaço de usuário que é realmente montado na segunda metade da cadeia de boot.**

---

## O systemd Inicia: Entrando no Espaço de Usuário do Ubuntu

Após a troca do RootFS, você verá o `systemd` iniciando:

```text
[    7.550899] systemd[1]: systemd 249.11-0ubuntu3.12 running in system mode
[    7.551400] systemd[1]: Detected architecture arm64.
[    7.559528] systemd[1]: Hostname set to <ubuntu>.
```

Isso mostra que o sistema passou da etapa de boot para o verdadeiro **Espaço de Usuário do Ubuntu**.

Em seguida, o `systemd` continua a iniciar serviços do sistema, como gerenciamento de dispositivos, rede, registro de logs, serviços da NVIDIA e a interface gráfica.

O log também mostra:

```text
[    7.774172] systemd[1]: Queued start job for default target Graphical Interface.
```

Em outras palavras, o próximo alvo de boot do sistema é:

```text
graphical.target
```

ou seja, o ambiente de desktop gráfico. Neste ponto, **o Bootloader, o Kernel Linux, o NVMe e o RootFS foram todos bem-sucedidos, e o sistema entrou no Espaço de Usuário do Ubuntu.** Aqui, a cadeia principal de boot desde pressionar o botão de energia até o espaço de usuário do Ubuntu está basicamente completa.

Como observação, se você configurou qualquer software para iniciar automaticamente no boot, ele também será iniciado um por um neste ponto.

---

## Solução de Problemas de Boot: Primeiro Determine "Qual Camada Foi Alcançada por Último"

Na comunidade técnica da Seeed Jetson, frequentemente vejo pessoas perguntando: "Por que meu Jetson não inicia?"

Embora refazer o flash possa resolver 90% dos problemas, ainda recomendo que você primeiro obtenha o **log de boot via UART** do dispositivo e analise a causa exata da falha de boot com base na **última etapa de boot que apareceu com sucesso**. Só entendendo a causa específica você poderá evitar problemas semelhantes no futuro.

O próprio método de análise é essencialmente **reduzir continuamente em qual etapa de boot está a falha**.

Mais uma coisa a observar: um Error ou Warning no log de boot não significa necessariamente que o fluxo de boot falhou. Um Error não é necessariamente a causa de o dispositivo não conseguir iniciar. Por exemplo, após entrar no Espaço de Usuário do Ubuntu, você ainda pode ver:

```text
imx219 ... error during i2c read probe
imx219 ... board setup failed
imx219 ... probe ... failed
```

O que realmente falhou aqui é a **sondagem da câmera IMX219**, não todo o fluxo de boot do Jetson.

Deixe-me enfatizar novamente o que você deve reter agora: **ao ler um log de boot, o mais importante não é encontrar o primeiro Error, mas encontrar a última etapa de boot bem-sucedida ao longo da cadeia de boot.**

---

## Conclusão

Embora um log de boot do Jetson seja muito longo, você não precisa entender cada linha ao solucionar problemas. Sugiro combiná-lo com análise assistida por IA e focar nas partes suspeitas. Uma vez que você determine em qual camada o sistema parou, o escopo do problema geralmente se reduz rapidamente. Esta é a abordagem mais importante para analisar problemas de boot do Jetson. Depois que você dominar esse método, um log de boot com milhares de linhas deixará de ser um monte de informações confusas e se tornará um **mapa de boot do Jetson** que ajuda você a localizar problemas rapidamente.

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
