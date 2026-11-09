---
description: Explicar o papel da Device Tree na plataforma Jetson - como o Linux sabe qual hardware está conectado em uma carrier board, por que o hardware pode parar de funcionar após trocar a carrier board, as diferenças entre DTS/DTSI/DTB/DTBO e por que as carrier boards da Seeed Studio precisam do próprio BSP.
title: Device Tree no Jetson
tags:
  - jetson
  - device tree
  - dts
  - dtsi
  - dtb
  - dtbo
  - carrier board
  - bsp
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /jetson_device_tree
last_update:
  date: 11/02/2026
  author: youjiang
---

Nos dois artigos anteriores, percorremos todo o processo de boot de um Jetson, desde o acionamento de energia até o Ubuntu, usando o log de boot via UART:

`Power On` --> `MB1/2` --> `UEFI` --> `L4TLauncher` --> `Linux Kernel` --> `RootFS` --> `Systemd`

Depois que você entende a cadeia de boot, a próxima pergunta natural é: **Como o Linux realmente sabe qual hardware está conectado nesta placa?**

Por exemplo, o mesmo módulo Jetson Orin Nano funciona bem na Carrier Board do Kit de Desenvolvimento oficial da NVIDIA, mas quando você o move para outra Carrier Board, o USB pode parar de funcionar.

O módulo Jetson não mudou, e o Linux Kernel também não mudou. Então por que simplesmente trocar a carrier board pode mudar completamente o comportamento de todo o sistema? Isso nos leva a um conceito muito importante no desenvolvimento de hardware Jetson: **Device Tree**. Neste artigo, vamos abordar principalmente as seguintes questões:

- **O que exatamente é a Device Tree de que todo mundo fala?**
- **Por que muitos componentes de hardware não podem ser usados diretamente depois de trocar a Carrier Board?**
- **Por que as carrier boards Jetson da Seeed Studio precisam do próprio BSP, em vez de usar diretamente o BSP oficial da NVIDIA?**

---

## O que exatamente é Device Tree?

Como mencionado anteriormente, o Linux Kernel é responsável por gerenciar o hardware de baixo nível no sistema. Então como o Kernel sabe quais dispositivos estão na carrier board? A resposta é a **Device Tree**. A função da Device Tree é **dizer ao Linux Kernel qual hardware está na placa e como esse hardware está conectado.** Por exemplo, o esquemático define que um sensor está conectado a um determinado barramento I2C, qual é o endereço do barramento e a qual GPIO o Reset está conectado; esse tipo de informação geralmente aparece na Device Tree na forma correspondente. Portanto, eu prefiro pensar na Device Tree como um manual de conexões de hardware escrito para o Linux Kernel.

**Esquemáticos são desenhados para humanos; a Device Tree é escrita para o Linux Kernel.**

Mais adiante, vamos combinar isso com o BSP real de L4T da Seeed Studio para ver como essas “relações de conexão de hardware” realmente se parecem em código. A Seeed Studio abriu o código do BSP de todos os produtos Jetson em [Seeed-Studio/Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra). Há muitos arquivos terminados em `.dts` no repositório — estes são os arquivos de Device Tree que vamos discutir.

---

## Um exemplo: como a Device Tree afeta PCIe / NVMe?

Dissemos que a Device Tree é “um manual de conexões de hardware escrito para o Linux Kernel”. Então como ela realmente se parece em código real? Vamos olhar diretamente a Device Tree da Seeed Studio J401. No repositório open-source da Seeed Studio, há um arquivo de Device Tree chamado `tegra234-j401-p3768-0000+p3767-0000.dts`. Abrindo-o, você pode ver um nó como este:

```text
vdd_3v3_pcie: regulator-vdd-3v3-pcie {
    compatible = "regulator-fixed";
    regulator-name = "VDD_3V3_PCIE";

    regulator-min-microvolt = <3300000>;
    regulator-max-microvolt = <3300000>;

    gpio = <&gpio_aon
            TEGRA234_AON_GPIO(AA, 5)
            GPIO_ACTIVE_HIGH>;

    enable-active-high;
};
```

Essa configuração descreve uma **linha de alimentação de 3,3 V** usada para PCIe. Algumas das informações mais importantes aqui são:

```text
regulator-name
→ This power rail is named VDD_3V3_PCIE

3300000
→ The voltage is 3.3V

TEGRA234_AON_GPIO(AA, 5)
→ Controlled by AON GPIO AA.5

enable-active-high
→ This power rail is enabled when the GPIO is driven high
```

Em outras palavras, um certo sinal de **PCIe Power Enable** no esquemático da Carrier Board é, em última análise, descrito para o Linux por meio da Device Tree. Este é um exemplo muito intuitivo de “relações de conexão de hardware sendo escritas na Device Tree”. Quando todas essas configurações estão corretas, o Kernel tem a chance de estabelecer o Link PCIe e detectar o NVMe conectado ao barramento PCIe. Vamos combinar isso com o log de boot do artigo anterior. Quando a configuração está correta, o log de boot via UART mostra algo como:

```text
[    6.639293] tegra194-pcie 14160000.pcie: Link up
[    6.649851] nvme nvme0: pci function 0004:01:00.0
[    6.665906] nvme0n1: p1 p2 p3 ...
```

Assim, podemos construir uma relação muito importante aqui:

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_device_tree/devicetree_flow2.png"/></div>

Em outras palavras, **o log de boot mostra o resultado, enquanto a Device Tree é uma das importantes fontes de configuração que produzem esse resultado.**

Se a Device Tree não corresponder à Carrier Board real, problemas irão ocorrer. Suponha que a nova Carrier Board tenha movido o Enable de 3,3 V do PCIe para uma GPIO diferente, mas a Device Tree ainda diz:

```text
AON GPIO AA.5
```

Então o Linux pode continuar controlando a GPIO errada de acordo com o design antigo.

Como resultado, o SSD NVMe pode não ser detectado corretamente: o log de boot pode chegar ao Linux Kernel, mas a mensagem de Link up do PCIe nunca aparece. A esta altura, você já deve ter um entendimento básico da Device Tree.

---

## Formatos de arquivo da Device Tree: qual a diferença entre DTS, DTSI, DTB e DTBO?

No BSP do Jetson, você frequentemente vê estes quatro tipos de arquivos: `.dts`, `.dtsi`, `.dtb` e `.dtbo`. Eles parecem muito semelhantes, mas seus papéis são diferentes.

| Arquivo | Nome completo | Papel principal | Legível diretamente | Exemplo no repositório open-source da Seeed |
|---|---|---|---|---|
| .dts | Device Tree Source | Descreve uma placa específica ou um overlay | ✅ | tegra234-j401-p3768-0000+p3767-0000.dts |
| .dtsi | Device Tree Source Include | Armazena configurações comuns reutilizáveis por vários arquivos DTS | ✅ | tegra234-p3768-0000+p3767-xxxx-nv-common.dtsi |
| .dtb | Device Tree Blob | Device Tree binária compilada a partir de DTS/DTSI | ❌ | tegra234-j401-p3768-0000+p3767-0000-recomputer.dtb |
| .dtbo | Device Tree Blob Overlay | Adiciona ou modifica parte da configuração de hardware sobre a Device Tree base | ❌ | tegra234-p3767-camera-p3768-imx219-dual-seeed.dtbo |

### Primeiro, vamos olhar DTS e DTSI

Você pode pensar em `.dts` como o “arquivo de entrada” de uma placa específica, enquanto `.dtsi` é mais como um módulo de configuração comum.

Por exemplo, o DTS da Seeed J401 inclui outros arquivos de Device Tree:

```text
#include "tegra234-p3767.dtsi"
#include "tegra234-p3768-0000.dtsi"
```

Portanto, em um projeto real, a Device Tree não é um único arquivo `.dts` enorme escrito de ponta a ponta; ela é composta por muitos arquivos `.dtsi` combinados camada por camada.

Você pode compará-la com a linguagem C:

```text
.dtsi is somewhat like .h
.dts is somewhat like the .c that finally combines these configurations
```

Claro, essa analogia não é exatamente equivalente; ela serve apenas para ajudá-lo a entender mais rapidamente a relação entre eles.

### DTB: a Device Tree binária que o Linux realmente usa

`.dts` e `.dtsi` são destinados a desenvolvedores lerem e modificarem.

Depois que são compilados pelo dtc (Device Tree Compiler), arquivos `.dtb` são gerados.

O que o Linux realmente lê na inicialização é o `.dtb` compilado, não os arquivos `.dts` no diretório de código-fonte.

---

### DTBO: modificando apenas parte da configuração de hardware

Alguns hardwares não são instalados em todos os dispositivos, por exemplo câmeras. Se você tivesse que copiar e manter toda a Device Tree da J401 apenas para adicionar um sensor IMX219, isso seria muito trabalhoso. Esse tipo de problema pode ser tratado com um DTBO (Device Tree Overlay).

Por exemplo, há um Camera Overlay no BSP da Seeed:

```text
tegra234-p3767-camera-p3768-imx219-dual-seeed.dtbo
```

Ele não é uma Device Tree completa da J401; ele descreve apenas a **configuração relacionada à Câmera IMX219**, como:

- Endereço I2C
- GPIO de Reset / Power
- Interface CSI
- Relações de conexão NVCSI / VI
- Nó do sensor de câmera
- etc.

Você também pode ver uma configuração semelhante no `recomputer-orin-j401.conf` da Seeed:

```text
OVERLAY_DTB_FILE+=tegra234-p3767-camera-p3768-imx219-dual-seeed.dtbo
```

Em outras palavras, a configuração de hardware base da J401 ainda usa o DTB original; você só precisa adicionar adicionalmente a configuração relacionada à Câmera.

---

## Além da Device Tree: o Jetson também tem configuração de placa em estágios anteriores

Neste ponto, acredito que você tenha um entendimento geral da Device Tree e já tenha a resposta para a pergunta do início deste artigo. Mas você percebeu uma nova questão:

A Device Tree é o esquemático para o Linux Kernel. Mas com base no log de boot do artigo anterior — antes mesmo de o Linux Kernel iniciar, quem configura a GPIO, o Pinmux e a Tensão de Pad? A resposta é: o próprio estágio do Bootloader também tem seu próprio conjunto de configuração em nível de placa.

Portanto, no Jetson, você não pode simplesmente igualar “adaptação de carrier board” a “modificar um DTB do Kernel”. Uma relação mais completa deveria ser:

```text
                Carrier Board
                     ↓
              Real hardware connections
                     ↓
        ┌────────────┴────────────┐
        ↓                         ↓
Bootloader Board Config     Kernel Device Tree
        ↓                         ↓
   MB1 / MB2 / UEFI          Linux Kernel
        ↓                         ↓
Pinmux / Pad Voltage        USB / PCIe / Camera
 GPIO / Early HW             Ethernet / Sensor
```

Se você quiser entender a relação entre eles, sugiro que aprenda diretamente a partir do repositório `Linux_for_Tegra` da Seeed Studio.

Tomando a J401 como exemplo, `recomputer-orin-j401.conf` é usado durante o processo de gravação. Você pode pensar nesse arquivo como uma importante “entrada de configuração em nível de placa” para a J401.

Dependendo do SKU do módulo Jetson, ele seleciona o DTB correspondente, por exemplo:

```text
tegra234-j401-p3768-0000+p3767-0000-recomputer.dtb
tegra234-j401-p3768-0000+p3767-0001-recomputer.dtb
tegra234-j401-p3768-0000+p3767-0003-recomputer.dtb
tegra234-j401-p3768-0000+p3767-0004-recomputer.dtb
```

Aqui você pode ver uma informação muito importante:

> **A Device Tree não está relacionada apenas à Carrier Board; ela também está relacionada à combinação de Carrier Board + Módulo Jetson.**

Mas o arquivo `.conf` contém mais do que apenas:

```text
DTB_FILE --> The Kernel Device Tree used by Linux
```

Você também verá:

```text
PINMUX_CONFIG --> Pinmux configuration
PMC_CONFIG --> Pad Voltage / PMC related configuration
OVERLAY_DTB_FILE --> Additional overlays such as Camera and Display
BPFDTB_FILE --> Device Tree used by BPMP
```

Não entraremos em detalhes sobre o restante aqui. Se você estiver interessado, pode estudá-lo por conta própria, e também é bem-vindo para se juntar à comunidade Seeed Jetson para discutir isso em conjunto.

---

## Como confirmar qual Device Tree o Linux está realmente usando no momento?

Se o dispositivo já consegue inicializar até a área de trabalho do sistema, você também pode verificar diretamente a Device Tree que o sistema atual está realmente executando.

Exporte a Device Tree em execução no momento:

```text
sudo dtc -I fs -O dts  /proc/device-tree > running.dts
```

Então você pode inspecionar diretamente os nós correspondentes. Por exemplo:

```text
grep -n "pcie" running.dts
grep -n "usb" running.dts
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_device_tree/running_devicetree.png"/></div>

Ao depurar a Device Tree, o que você realmente deve confirmar não é apenas qual DTS você modificou, mas mais importante se o sistema está realmente carregando a versão modificada.

---

## Conclusão

A própria Device Tree não é complicada. O problema central que ela resolve é, na verdade, apenas um:

> **Permitir que o software saiba qual hardware está nesta Carrier Board e como esse hardware está conectado.**

Mas no Jetson, a adaptação da carrier board não é apenas a Kernel Device Tree.

A partir do L4T BSP da Seeed Studio, você pode ver que o que uma carrier board realmente precisa é de um conjunto completo de configurações em nível de placa. É também por isso que os produtos Jetson da Seeed Studio precisam do seu próprio BSP, em vez de simplesmente usar diretamente a configuração do NVIDIA Developer Kit.

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
