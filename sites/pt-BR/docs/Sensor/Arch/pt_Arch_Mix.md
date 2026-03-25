---
description: Arch Mix
title: Arch Mix
keywords:
  - Arch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Arch_Mix
sku: 102080027
last_update:
  date: 1/12/2023
  author: jianjing Huang
createdAt: '2023-01-12'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Arch_Mix/
---

![](https://files.seeedstudio.com/wiki/Arch_Mix/img/main1.jpg)

Arch Mix é uma placa de desenvolvimento fina e leve baseada no processador NXP i.MX RT1052 (3020 CoreMark/1284 DMIPS @ 600 MHz). Isso a torna adequada para controle industrial, especialmente para cenários com código extenso e altos requisitos de aplicação em tempo real.

O i.MX RT1052 é uma nova família de processadores com a implementação avançada da NXP do núcleo Arm Cortex®-M7. Atualmente, o i.MX RT1052 é a solução Cortex-M7 de maior desempenho, oferecendo 3036 CoreMarks, o que é 13 vezes melhor do que o microcontrolador LPC1788. Além do desempenho em alta velocidade, ele oferece rápida capacidade de resposta em tempo real. O i.MX RT1050 também possui recursos ricos de áudio e vídeo, incluindo display LCD, gráficos 2D básicos, interface de câmera, SPDIF e interface de áudio I2S.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Arch-Mix-p-2901.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

:::caution
O firmware inicial do Arch Mix é RT-Thread, que está obsoleto. Siga este wiki para gravar o Arduino Bootloader no Arch Mix e usá‑lo como placa de desenvolvimento Arduino.
:::

## Ideias de Aplicação

- Controle industrial
- Prédios inteligentes
- Interfaces Homem-Máquina industriais
- Automação e controle de processos
- Robô

## Características

- Microcontrolador ARM® Cortex®-M7 600MHz (NXP i.MX RT1052)
- Velocidade de carregamento do sistema ultrarrápida
- Interface periférica rica: RMII, CAN, I2C, UART, CSI, I2S, ADC, SPDIF IN/OUT, SWD
- Menor do que outras placas de demonstração de RT1052/1050: 67mm x 39mm

## Especificações

|Parâmetros|Valor|
|----|----|
|**Processador: NXP i.MX RT1052**||
|Plataforma|ARM Cortex-M7 MPCore|
|Frequência|600 MHz|
|Boot ROM|96KB|
|RAM interna|512KB|
|**Memória**||
|SDRAM|32MB|
|QSPI Flash|8MB|
|HyperFlash (Opcional)|64MB|
|**Conectividade**||
|USB 2.0 Host|x1|
|USB 2.0 OTG e entrada de alimentação DC 5V|x1|
|Chave DIP de configuração de boot|x1|
|LED|Power LED x1<br />User RGB LED x1|
|Botões|Botão de reset x1, botão On/Off x1, botão de usuário x1|
|Interface LCD RGB 24bit|x1|
|Conector para cartão Micro SD|x1|
|Conector de bateria 3V para RTC|x1|
|Conector de 22 pinos|RMII, CAN, I2C, UART, CSI, I2S,<br /> ADC, SPDIF IN/OUT, SWD|

<div align="center"><b>Tabela 1.</b><i>Especificações</i></div>

## Visão Geral do Hardware

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Arch_Mix/img/pinout_f.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/pinout_f.jpg" /></a></p>
  <figcaption><b>Figura 1</b>. <i>Visão geral do hardware frontal</i></figcaption>
</figure>
</div>

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Arch_Mix/img/pinout_b.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/pinout_b.jpg" /></a></p>
  <figcaption><b>Figura 2</b>. <i>Visão geral do hardware traseiro</i></figcaption>
</figure>
</div>

:::note
<font color="red"><b>*0</b></font> Você precisa alimentar o Arch Mix pela porta USB OTG. Para a diferença entre USB HOST e USB OTG, verifique [aqui](https://www.quora.com/What-is-the-difference-between-USB-host-VS-USB-OTG).
<br />
<br />
<font color="red"><b>*1</b></font> Fornecemos duas opções para a memória flash: você pode usar 64M HyperFlash (U7-padrão DNP) ou 8M QSPI Flash (U11-seleção padrão).
<br />
<br />
<font color="red"><b>*2</b></font> Depois que a placa for alimentada por USB OTG, você pode ligar e desligar o sistema pressionando e segurando (cerca de 3~5 segundos) este botão.
<br />
<br />
<font color="red"><b>*3</b></font> Observe que esta porta é uma porta de bateria CR2032 de 1,25mm, não conecte uma bateria Li-Po. Se você quiser usar a função RTC, pode procurar por ‘CR2032 Battery with Wire Leads’ na Amazon ou em outros sites.
:::

**Alimentação**

Por favor, forneça energia através da porta Micro-USB **OTG**.

:::caution Perigo

- A tensão de alimentação de entrada é 5V, não pode exceder 5,5V.  
- Todos os níveis de interface de IO digital e analógico são 3,3V. Não insira mais de 3,3V, caso contrário a CPU poderá ser danificada.  
- A interface de alimentação por bateria do RTC (J6) só pode ser conectada a uma bateria tipo botão de cerca de 3V, e a tensão não pode exceder 3,6V.
:::

**Chave**

O Arch Mix pode ser configurado em três modos de boot diferentes: HyperFlash, QSPI Flash e cartão SD. Usamos QSPI Flash por padrão; quando você alterar o modo de boot, precisa alterar a chave DIP para a posição correspondente.

DISPOSITIVO | BOOT_CFG | Valor das quatro teclas de SW1
---|---|---
HyperFlash|0x02_00|0 , 1 , 1 , 0
QSPI Flash|0x00_00|0 , 0 , 1 , 0
SD|0x00_40|1 , 0 , 1 , 0

<div align="center"><b>Tabela 2.</b><i>Configuração de BOOT</i></div>

**Botão**

Há três botões nesta placa, verifique a tabela de funções.

Nome|Função|Detalhe
---|---|---
SW2|Botão do usuário|Para configuração pelo usuário; para esta placa de desenvolvimento o pino nº 125 é o SW2
SW3|RESET|Reset do sistema; quando você pressionar este botão, o sistema será reiniciado
SW4|Power On/OFF|Ligue e desligue o sistema pressionando e segurando (cerca de 3~5 segundos) este botão

<div align="center"><b>Tabela 3.</b><i>Tabela de funções dos botões</i></div>

**Interface LCD**

Como você pode ver, há uma interface LCD de 50 pinos nesta placa, que suporta resolução de até 1366 x 768 WXGA. Caso você precise de uma tela LCD para esta placa, pode usar a tela da série LCD8000. Confira os links abaixo.

[LCD da NXP](https://www.nxp.com/support/developer-resources/software-development-tools/i.mx-developer-resources/evaluation-kit-for-the-i.mx-6ull-and-6ulz-applications-processor:MCIMX6ULL-EVK?tab=Buy_Parametric_Tab#/)  
[LCD da Embest](http://www.embest-tech.com/prod_view.aspx?TypeId=118&Id=277)

### Pinout

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Arch_Mix/img/pinout.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/pinout.png" /></a></p>
  <figcaption><b>Figura 3</b>. <i>Pinout, clique na imagem para ver o arquivo original</i></figcaption>
</figure>
</div>

:::tip
A maioria dos pinos do processador NXP i.MX RT1050 possui função de multiplexação; você pode clicar no anexo abaixo para ver a multiplexação detalhada dos pinos.
:::

 [Tabela de Definição de Pinos do Arch Mix](https://files.seeedstudio.com/wiki/Arch_Mix/res/Arch%20Mix_v1.0_Pin.xlsx)

### Diagrama de Blocos

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Arch_Mix/img/Block.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/Block.jpg" /></a></p>
  <figcaption><b>Figura 4</b>. <i>Diagrama de Blocos do Arch Mix, clique na imagem para ver o arquivo original</i></figcaption>
</figure>
</div>

### Diagrama de Dimensões

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Arch_Mix/img/D1.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/D1.jpg" /></a></p>
</figure>
</div>

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Arch_Mix/img/D2.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/D2.jpg" /></a></p>
  <figcaption><b>Figura 5</b>. <i>Dimensões da placa, unidade (mm)</i></figcaption>
</figure>
</div>

## Gravando o Arduino Bootloader no Arch Mix

Agora você pode gravar o **Arduino bootloader** no Arch Mix e usá‑lo como uma placa Arduino! Esta pode ser uma das placas Arduino (Cortex M7) mais poderosas do mercado.

### Configurações da Chave

Certifique‑se de que ele esteja executando a partir da **QSPI**, onde as chaves estão na seguinte ordem:

- **0010**

### Hardware Necessário

- Arch Mix x 1

- **J-Link Debug Probes** x 1

### Primeiros Passos

- Baixe e instale o software [**J-Flash**](https://www.segger.com/products/debug-probes/j-link/tools/j-flash/about-j-flash/) do site oficial de acordo com o sistema operacional do seu PC.

- Encontre o **caminho de instalação do J-Flash** e faça as seguintes alterações.

- Navegue até o local de instalação: `SEGGER/JLink_V686/Devices/NXP/iMXRT105x`.

>Por exemplo, para macOS, meu caminho de instalação é: `/Applications/SEGGER/JLink_V686/Devices/NXP/iMXRT105x`

- Baixe e descompacte o **[iMXRT105x.zip](https://files.seeedstudio.com/wiki/Arch_Mix/res/iMXRT105x.zip)**, cole e substitua os arquivos nesse caminho.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/1.png"/></div>

- Volte para o local raiz de `SEGGER/JLink_V686` e deve haver um arquivo chamado **`JLinkDevices.xml`**. Abra o arquivo com um editor e pesquise por `NXP_iMXRT105x_` e você verá que existem algumas opções. Copie e cole o código a seguir na mesma seção indicada no diagrama:

```xml
  <Device>
    <ChipInfo Vendor="NXP" Name="MCIMXRT1051QSPI" WorkRAMAddr="0x20000000" WorkRAMSize="0x00080000" Core="JLINK_CORE_CORTEX_M7" />
    <FlashBankInfo Name="QSPI Flash" BaseAddr="0x60000000" MaxSize="0x02000000" Loader="Devices/NXP/iMXRT105x/NXP_iMXRT105x_QSPI.elf" LoaderType="FLASH_ALGO_TYPE_OPEN" />
  </Device>
  <Device>
    <ChipInfo Vendor="NXP" Name="MCIMXRT1052QSPI" WorkRAMAddr="0x20000000" WorkRAMSize="0x00080000" Core="JLINK_CORE_CORTEX_M7" />
    <FlashBankInfo Name="QSPI Flash" BaseAddr="0x60000000" MaxSize="0x02000000" Loader="Devices/NXP/iMXRT105x/NXP_iMXRT105x_QSPI.elf" LoaderType="FLASH_ALGO_TYPE_OPEN" />
  </Device>
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/2.png"/></div>

- Salve o arquivo.

- Agora o J-Flash está configurado e você pode abrir o software J-Flash.

- Crie um novo projeto J-Flash e selecione o **MCIMXRT1052QSPI** como chip. Você pode usar o filtro para ajudá‑lo a encontrar esse chip. Se você não conseguir ver esse chip, há algo errado nas configurações anteriores do J-Flash; verifique novamente.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/3.png"/></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/4.png"/></div>

- Baixe o [**Arduino Bootloader for Arch Mix**](https://files.seeedstudio.com/wiki/Arch_Mix/res/bootloader.hex) aqui. Você também pode conferir o [**código-fonte**](https://github.com/Seeed-Studio/ArduinoCore-imxrt) no GitHub aqui.

- Arraste este arquivo hex do bootloader para o J-Flash.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/5.png"/></div>

- **Conecte os pinos SWD do J-Link aos pinos SWD do Arch Mix**.
  - DIO em DIO
  - CLK em CLK
  - GND em GND

- Selecione **Target** -> **Connect** no menu suspenso no canto superior esquerdo do J-Flash. Uma vez conectado, você deverá ver:

>Se não conseguir conectar, verifique novamente a fiação entre o J-Link e o Arch Mix.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/6.png"/></div>

- Selecione **Target** -> **Production Programming** para gravar o bootloader no Arch Mix.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/7.png"/></div>

- Redefina (reset) o Arch Mix e agora o bootloader do Arduino está gravado nele!

### Introdução ao Arduino

- Adicione a biblioteca da placa Arch Mix à IDE Arduino:

Abra sua IDE Arduino, clique em **File** > **Preferences** e copie a URL abaixo para **Additional Boards Manager URLs**:

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

Clique em **Tools** > **Board** > **Board Manager** e pesquise por Arch Mix no Boards Manager.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/IDE.png"/></div>

- Abra o exemplo de piscar LED: **File** > **Examples** > **01.Basics** > **Blink**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/select_blink.jpg"/></div>

- Você precisará selecionar a entrada no menu **Tools** > **Board** que corresponde ao seu Arduino. Selecione o Arch Mix.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/board.png"/></div>

- Escolha a porta correta:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/port.png"/></div>

- Clique em upload e o LED no Arch Mix deverá começar a piscar! Agora você tem em mãos uma poderosa placa Cortex M7!

:::note
Para o mapa de pinos do Arduino, você pode conferir [aqui](https://github.com/Seeed-Studio/ArduinoCore-imxrt/blob/master/variants/arch_mix/variant.h) para mais referências.
:::

## Usando o NXPBooTUtility para Gravar o Bootloader do Arduino

Se você **não tem um J-Link** em mãos, há também outra forma de gravar o bootloader usando o [**NXP Boot Utility**](https://github.com/JayHeng/NXP-MCUBootUtility), mas **ele só oferece suporte ao Windows**.

- Baixe o [NXP Boot Utility](https://github.com/JayHeng/NXP-MCUBootUtility).

```sh
git clone https://github.com/JayHeng/NXP-MCUBootUtility
```

- Navegue até a pasta **NXP-MCUBootUtility**, entre em `NXP-MCUBootUtility/bin` e abra o **NXP-MCUBootUtility.exe**.

- Conecte o **pino Rx** do Arch Mix ao **pino de 3.3V** usando um cabo jumper fêmea e **ajuste os seletores para 0001**

- Conecte o Arch Mix ao seu computador e você deverá ver a seguinte tela:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/boot-1.png"/></div>

- Clique em **Boot Device Configuration**, escolha a Flash e clique em **OK**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/boot-2.png"/></div>

- Clique em Connect to ROM para entrar no modo de download:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/boot-3.png"/></div>

- Escolha o Bootloader:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Arch_Mix/img/boot-4.png"/></div>

- Clique em All in One Action e ele fará o download do bootloader para o Arch Mix!

- Depois que a gravação for concluída, **ajuste o seletor de volta para 0010** e pressione reset. Agora o bootloader do Arduino está gravado no Arch Mix usando o NXP Boot Utility!

<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#F5A9A9', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#DF0101', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="attention icon" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{color: '#000000', fontWeight: 'bold', marginTop: 10}}>Atenção</p>
    <p style={{color: '#000000', fontSize: 14}}>Certifique-se de que os seletores estejam ajustados de volta para 0010 para iniciar o boot a partir da QSPI Flash e funcionar como uma placa de desenvolvimento Arduino.</p>
  </div>
</div>

## Recursos

[Guia de Firmware do Arch Mix](https://files.seeedstudio.com/wiki/Arch_Mix/res/micropython_firmware.pdf)  
[Ferramentas](https://files.seeedstudio.com/wiki/GM6020/res/Firmware_and_Tools.zip)

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Arch_Mix/202001930_PCBA_Arch%20Mix_v1.0_SCH%20%26%20PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Esquemático](https://files.seeedstudio.com/wiki/Arch_Mix/res/202001930_PCBA_Arch%20Mix_v1.0_SCH%20%26%20PCB.zip)
- **[ZIP]** [Firmware e Ferramentas](#)
- **[PDF]** [Wiki em Formato PDF](https://files.seeedstudio.com/wiki/Arch_Mix/res/Arch_Mix.pdf)
- **[PDF]** [Folha de Dados do i.MX RT1050](https://files.seeedstudio.com/wiki/Arch_Mix/res/i.MX%20RT1050.pdf)
- **[PDF]** [Diagrama de Dimensões](https://files.seeedstudio.com/wiki/Arch_Mix/res/ARCH%20MIX_V1.0_Dimension.pdf)
- **[xlsx]** [Função de Pino do Arch Mix_v1.0](https://files.seeedstudio.com/wiki/Arch_Mix/res/Arch%20Mix_v1.0_Pin.xlsx)

## Suporte Técnico & Discussão de Produto


Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
