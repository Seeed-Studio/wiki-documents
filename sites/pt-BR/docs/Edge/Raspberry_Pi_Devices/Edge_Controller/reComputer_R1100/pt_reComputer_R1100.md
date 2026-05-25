---
description: O reComputer R1100 é um gateway e controlador IoT com tecnologia Raspberry Pi CM4 e recursos de IA. Com 2GB de RAM, 8GB de eMMC, Ethernet dupla, USB, RS485, RS232, DI/DO e conectividade sem fio (4G, LoRa®, Wi-Fi/BLE), é perfeito para automação industrial e computação de borda.
title: Introdução ao reComputer R1100
keywords:
  - Raspberry pi
  - Controlador de Borda
  - reComputer R1100
image: https://files.seeedstudio.com/wiki/R1100/recomputer2.jpg
slug: /recomputer_r1100_intro
sku: 113991334,113991374,113991375
last_update:
  date: 2/25/2024
  author: Kasun Thushara
createdAt: '2025-02-27'
updatedAt: '2026-04-21'
url: https://wiki.seeedstudio.com/pt-br/recomputer_r1100_intro/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

## Visão geral

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/reComputer-R1125-1.jpg" style={{width:800, height:'auto'}}/></div>

O reComputer R1100, equipado com o Raspberry Pi CM4, é um gateway IoT de borda versátil com recursos de IA. Ele possui uma ampla gama de interfaces industriais, incluindo **2x Ethernet, 2x USB, 2x RS485, 2x RS232, 2x DI e 2x DO**, além de opções flexíveis de conectividade sem fio, como **4G, LoRa® e Wi-Fi/BLE**. Esses recursos o tornam uma escolha ideal para diversas aplicações industriais.
A série reComputer R1100 é amplamente utilizada em aplicações de IoT, incluindo **aquisição de dados e monitoramento de processos, controle de automação e robótica, manufatura inteligente e comunicação e redes industriais**. Seu tamanho compacto, flexibilidade, baixo custo e programabilidade fornecem forte suporte para **automação, sistemas de IoT e além**.

:::note
Opções de personalização disponíveis: identidade visual com logotipo, embalagem e gravação de firmware.
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong></a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/fusion_branding_firmware.html?utm_source=wiki&utm_medium=button" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>Personalizar agora ➜</font></span></strong></a>
</div>

## Recursos

**Projetado para sistemas de automação e IoT**  

- Suporta os protocolos **BACnet, Modbus RTU, Modbus TCP/IP e KNX**  
- Compatível com **Node-RED, CODESYS, Balena e mais**  
- **Indicadores LED em ambos os lados** para verificações rápidas de status  
- **Gabinete metálico durável**, compatível com **montagem em trilho DIN e em parede**  
- Suporta **Yocto e Buildroot** para um sistema operacional personalizado  

**Desempenho poderoso**  

- Alimentado por **Raspberry Pi CM4**  
- **Broadcom BCM2711** quad-core **Cortex-A72 (ARM v8) SoC de 64 bits @ 1,5GHz**  
- Até **8GB de RAM** e **32GB de armazenamento eMMC**  

**Ricas capacidades sem fio**  

- **Wi-Fi e BLE integrados**  
- **Mini-PCIe 1**: Suporta **LTE, USB LoRa® 
- **Mini-PCIe 2**: Suporta **SPI LoRa®, USB LoRa®

**Interfaces abrangentes**  

- **2x RS485 (isoladas), 2x RS232 (isoladas), 2x portas DI isoladas, 2x portas DO isoladas**  
- **1x Ethernet 10M/100M/1000M** (suporta **PoE**)  
- **1x Ethernet 10M/100M**  
- **1x HDMI 2.0**  
- **2x USB 2.0 Tipo A**  
- **1x USB 2.0 Tipo C** (console USB para atualizações de SO)  
- **1x slot para cartão MicroSD**  
- **1x slot para cartão Nano SIM (interno)**  

**Segurança e confiabilidade**  

- **Watchdog de hardware**  
- **Supercapacitor de UPS opcional**  
- **Gabinete metálico com painéis laterais em PC**  
- **Padrões de Compatibilidade Eletromagnética (EMC)**:  
  - **ESD**: EN61000-4-2, Nível 3  
  - **EFT**: EN61000-4-4, Nível 2  
  - **Proteção contra surtos**: EN61000-4-5, Nível 2  
- **Vida útil de produção**: O **reComputer R1100** permanecerá em produção **pelo menos até dezembro de 2030**  

## Especificação

| **Parâmetro**          | **Descrição** |
|------------------------|----------------|
| **Especificação de hardware** | |
| **Série de produtos** | R11xx-10, R11xx-00 |
| **CPU** | Raspberry Pi CM4, Quad-core Cortex-A72 @ 1,5GHz |
| **Sistema operacional** | Raspbian, Debian, Yocto, Buildroot |
| **RAM** | 1GB / 2GB / 4GB / 8GB |
| **Armazenamento eMMC** | 8GB / 16GB / 32GB |
| **Especificação do sistema** | |
| **Entrada de energia** | DC 9V~36V, bloco de terminais de 2 pinos |
| **PoE (como dispositivo alimentado)** | Padrão IEEE 802.3af 12,95W PoE* |
| **Proteção contra sobretensão** | 40V |
| **Consumo de energia** | Em espera: 2,88W; Carga total: 5,52W |
| **Interruptor de energia** | Não |
| **Interruptor de reinicialização** | Sim |
| **Interface** | |
| **Ethernet** | 1x 10/100/1000Mbps (suporta PoE*), 1x 10/100Mbps IEEE 802.3/802.3u |
| **USB** | 2x USB-A 2.0 Host, 1x USB-C 2.0 (para gravação de SO) |
| **RS485** | 2x RS485 (Isoladas) |
| **RS232** | 2x RS232 (Isoladas) |
| **DI (Entrada Digital)** | 2x portas DI isoladas, tensão de entrada: 5~24V DC |
| **DO (Saída Digital)** | 2x portas DO isoladas, tensão de saída: &lt;60V DC |
| **Cartão SIM** | 1x slot para cartão Nano SIM (interno) |
| **Cartão SD** | 1x slot para cartão MicroSD |
| **SSD** | 1x slot para SSD M.2 NVMe (2280-M Key) |
| **Indicadores LED** | 12x indicadores LED |
| **Buzzer** | 1 |
| **Botão de reset** | 1 |
| **HDMI** | 1x HDMI 2.0 |
| **Comunicação sem fio** | |
| **Wi-Fi 2,4/5,0GHz** | Wi-Fi integrado* |
| **BLE 5.0** | BLE integrado* |
| **LoRa®** | USB LoRa®*/ SPI LoRa®* |
| **4G Celular** | 4G LTE* |
| **Padrões** | |
| **Conformidade EMC** | ESD: EN61000-4-2, Nível 3; EFT: EN61000-4-4, Nível 2; Surto: EN61000-4-5, Nível 2 |
| **Certificação** | CE, FCC, TELEC, RoHS, REACH |
| **Condições ambientais** | |
| **Grau de proteção** | IP40 |
| **Temperatura de operação** | -30 ~ 70°C |
| **Umidade de operação** | 10 ~ 95% RH |
| **Temperatura de armazenamento** | -40 ~ 80°C |
| **Outros recursos** | |
| **UPS com supercapacitor** | Módulo SuperCAP UPS LTC3350* |
| **Watchdog de hardware** | 1 ~ 255s |
| **RTC** | RTC de alta precisão |
| **Segurança** | |
| **Chip de criptografia** | TPM 2.0*, ATECC608A |
| **Sistema de refrigeração** | Sem ventoinha |
| **Garantia** | 2 anos |
| **Vida útil de produção** | Até dezembro de 2030 |
| **Declaração** | As opções marcadas com * exigem compra adicional de acordo com a lista de acessórios. |
| **Status de componentes e interfaces** | |
| **Reservado** | Designado para uso ou expansão futura. |
| **Opcional** | Componentes não essenciais; os usuários podem optar por incluir ou excluir. |
| **Ocupado** | Atualmente em uso e parte integrante da funcionalidade do produto. |
| **Incluído** | Componentes essenciais fornecidos com o pacote padrão. |

**Declaração**: As opções marcadas com `*` exigem compra adicional de acordo com a lista de acessórios.

## Dimensões mecânicas  

| **Parâmetro** | **Descrição** |
|--------------|----------------|
| **Dimensão (L x A x P)** | 130 mm x 93 mm x 49,6 mm |
| **Gabinete** | Gabinete em liga de alumínio 6061 com painéis laterais em PC transparente |
| **Montagem** | Trilho DIN / Parede |
| **Peso (líquido)** | 560g |

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/dimensions.PNG" style={{width:800, height:'auto'}}/></div>

## Visão geral de hardware

### Visão geral do sistema

#### Visão geral das interfaces

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/interface.PNG" style={{width:800, height:'auto'}}/></div>

#### Visão geral da placa principal

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/mainboard.PNG" style={{width:800, height:'auto'}}/></div>

#### Diagrama de alimentação

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/power.PNG" style={{width:800, height:'auto'}}/></div>

O reComputer R1100 oferece duas opções de alimentação: um terminal DC e uma porta PoE. Por padrão, ele é alimentado pelo terminal DC usando o adaptador de energia regional oficial (SKU: 110061505/110061506). Alternativamente, está disponível uma fonte de alimentação PoE opcional (módulo PoE, SKU: 110991925). Essa flexibilidade permite integração perfeita com diferentes fontes de energia, atendendo a diversas necessidades de aplicação.

**Terminal de alimentação de 2 pinos**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/power_terminal.PNG" style={{width:400, height:'auto'}}/></div>

O reComputer R1100 opera com uma fonte de alimentação DC variando de 9 a 36V, conectada por meio de um bloco de terminais de alimentação de 2 pinos. Para aterramento, o fio terra pode ser fixado com segurança ao parafuso localizado no canto superior esquerdo do terminal de alimentação.

**PoE**

Com o módulo PoE instalado, a porta ETH0 do reComputer R1100 suporta alimentação via PoE, oferecendo uma forma conveniente e eficiente de alimentar o dispositivo por meio do Ethernet. Essa opção simplifica a instalação e minimiza a fiação, tornando-a ideal para aplicações com fontes de energia limitadas ou locais sem tomadas de energia facilmente disponíveis.

- **Entrada PoE**: 44~57V (Típico: 48V)
- **Saída PoE**: 12V, 1,1A Máx

:::note
O módulo PoE incluído está em conformidade com o padrão IEEE 802.3af e fornece uma potência máxima de saída de 12,95W. No entanto, para periféricos de alta potência, como SSDs ou módulos 4G, a alimentação PoE pode não ser suficiente. Nesses casos, é recomendável usar o terminal DC para alimentação, a fim de garantir operação estável e confiável do dispositivo.
:::

**Consumo de energia**

A tabela abaixo fornece os valores de consumo de energia testados para o reComputer R1100, com base em medições realizadas no laboratório da Seeed Studio. Observe que esses valores são apenas para referência, pois variações nos métodos de teste e nas condições ambientais podem afetar os resultados.  

| **Status**   | **Tensão** | **Corrente** | **Consumo de energia** | **Descrição** |
|-------------|------------|------------|----------------------|----------------|
| **Desligado** | 24V | 51mA | 1,224W | Teste de consumo de energia estático em estado desligado e sem alimentação. |
| **Em espera** | 24V | 120mA | 2,88W | Mede a corrente de entrada ao fornecer 24V de energia sem executar nenhum programa de teste. |
| **Carga total** | 24V | 230mA | 5,52W | A CPU opera em carga total usando o comando `"stress -c 4"`, sem dispositivos externos conectados. |

 **Ligar e desligar**  
O reComputer R1100 não inclui um botão de energia por padrão. O sistema é ligado automaticamente quando conectado a uma fonte de alimentação.  

- Para desligar, use a opção de desligamento no sistema operacional e aguarde a conclusão do processo antes de desconectar a alimentação.  
- Para reiniciar o sistema, basta reconectar a fonte de alimentação.  

Isso garante operação segura e evita possível perda de dados ou problemas no sistema.

#### Diagrama em blocos

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/power_terminal.PNG" style={{width:400, height:'auto'}}/></div>

#### Diagrama IIC

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/IIC.PNG" style={{width:600, height:'auto'}}/></div>

## Descrição da Interface

| **Interface** | **Descrição** |
|--------------|----------------|
| **Ethernet** | 1 × 10/100/1000 Mbps (suporta PoE*) , 1 × 10/100 Mbps (IEEE 802.3/802.3u) |
| **USB** | 2 × USB-A 2.0 (Host) , 1 × USB-C 2.0 (para gravar o SO) |
| **RS485** | 2 × RS485 (Isolado) |
| **RS232** | 2 × RS232 (Isolado) |
| **DI (Digital Input)** | 2 × Portas DI isoladas , Tensão de entrada: 5~24V DC |
| **DO (Digital Output)** | 2 × Portas DO isoladas ,  Tensão de saída: < 60V DC |
| **HDMI** | 1 × HDMI 2.0 |
| **Slot para cartão SD** | Suporta cartão MicroSD |
| **Slot para cartão SIM** | Suporta cartão Nano SIM |
| **Slot M.2** | Suporta SSD M.2 NVMe |
| **Indicadores LED** | 12 × Indicadores LED |
| **Buzzer** | 1 |
| **Botão de Reset** | 1 |  

### Status dos Indicadores LED

O computador R1100 possui 12 LEDs para indicação do status do sistema. As funções específicas estão descritas na tabela abaixo.

Aqui está a tabela de **Status dos Indicadores LED** em um formato estruturado:  

| **Indicador LED** | **Cor** | **Status** | **Descrição** |
|------------------|---------|-----------|----------------|
| **PWR** | Verde | On | O dispositivo está conectado à alimentação. |
| | | Off | O dispositivo não está conectado à alimentação. |
| **ACT** | Verde | Piscando | Indica acesso ao eMMC no Linux. Se ocorrer um erro durante a inicialização, ele pisca um padrão de erro (consulte a documentação do Raspberry Pi). |
| **USER** | Verde/Vermelho/Azul | Definido pelo usuário | Pode ser programado pelo usuário. |
| **4G** | Verde | On | A discagem foi bem-sucedida e a conexão está normal. |
| | | Off | O sinal 4G não está conectado ou o dispositivo não está ligado. |
| **DI1** | Verde | On/Blink | Sinal de entrada detectado. |
| | | Off | Sem alimentação ou sem transmissão de dados. |
| **DI2** | Verde | On/Blink | Sinal de entrada detectado. |
| | | Off | Sem alimentação ou sem transmissão de dados. |
| **DO1** | Verde | On/Blink | Sinal de saída detectado. |
| | | Off | Sem alimentação ou sem transmissão de dados. |
| **DO2** | Verde | On/Blink | Sinal de saída detectado. |
| | | Off | Sem alimentação ou sem transmissão de dados. |
| **COM1 (Canal RS485 1)** | Verde | On/Blink | Recebendo ou enviando dados. |
| | | Off | Nenhuma transferência de dados no Canal RS485 1. |
| **COM2 (Canal RS485 2)** | Verde | On/Blink | Recebendo ou enviando dados. |
| | | Off | Nenhuma transferência de dados no Canal RS485 2. |
| **COM3 (Canal RS232 1)** | Verde | On/Blink | Recebendo ou enviando dados. |
| | | Off | Nenhuma transferência de dados no Canal RS232 1. |
| **COM4 (Canal RS232 2)** | Verde | On/Blink | Recebendo ou enviando dados. |
| | | Off | Nenhuma transferência de dados no Canal RS232 2. |

### Códigos de Status do ACT

Aqui está uma tabela estruturada para os **Códigos de Status do ACT**:  

| Piscadas Longas | Piscadas Curtas | Descrição do Status |
|-------------|--------------|--------------------|
| 0 | 3 | Falha genérica ao inicializar |
| 0 | 4 | `start*.elf` não encontrado |
| 0 | 7 | Imagem do kernel não encontrada |
| 0 | 8 | Falha na SDRAM |
| 0 | 9 | SDRAM insuficiente |
| 0 | 10 | Em estado HALT |
| 2 | 1 | Partição não é FAT |
| 2 | 2 | Falha ao ler da partição |
| 2 | 3 | Partição estendida não é FAT |
| 2 | 4 | Assinatura/hash do arquivo não confere (Pi 4) |
| 4 | 4 | Tipo de placa não suportado |
| 4 | 5 | Erro fatal de firmware |
| 4 | 6 | Falha de energia tipo A |
| 4 | 7 | Falha de energia tipo B |

**Notas adicionais:**  

- Se o **LED ACT piscar em um padrão regular de quatro piscadas**, isso indica que o bootcode (`start.elf`) está ausente.  
- Se o **LED ACT piscar em um padrão irregular**, o processo de inicialização foi iniciado.  
- Se o **LED ACT não piscar**, o código da EEPROM pode estar corrompido. Tente inicializar sem nenhum periférico conectado.  
- Para mais detalhes, consulte o **Fórum Raspberry Pi**: [Is your Pi not booting? (Boot Problems Sticky)](https://forums.raspberrypi.com//viewtopic.php?f=28&t=58151).

**Indicador USER**

O reComputer R1100 inclui um indicador **USER**, que pode ser personalizado de acordo com os requisitos do usuário.  

**Nota:**  
Para detalhes sobre o teste do **LED USER**, consulte [Esta Seção](https://wiki.seeedstudio.com/pt-br/recomputer_r1100_configure_system/#controlar-indicadores-led).

### Buzzer

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/buzzer.PNG" style={{width:600, height:'auto'}}/></div>

O reComputer R1100 está equipado com um buzzer ativo, que pode ser usado para alarmes e notificações de eventos.  

Para verificar o GPIO correspondente ao **Buzzer_EN**, insira o seguinte comando no terminal:  

```
cat /sys/kernel/debug/gpio
```

Isso exibirá **gpio587** como o GPIO atribuído ao buzzer.  

**Nota:**  
Para detalhes sobre o **teste do buzzer**, consulte [Esta Seção](https://wiki.seeedstudio.com/pt-br/recomputer_r1100_configure_system/#controlando-o-buzzer-via-gpio).

### RS485

A série reComputer R1100 possui **duas portas RS485** com **terminais Phoenix de 6 pinos e espaçamento de 3,5 mm**. Cada porta RS485 é rotulada com a serigrafia **"A/B/GND"** para fácil identificação.  

**Definições dos Pinos**  
As atribuições dos pinos do terminal são as seguintes:  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/rs485.PNG" style={{width:600, height:'auto'}}/></div>

| **ID do Pino** | **Nome do Pino**  |  
|-----------|-------------|  
| 1         | RS485-1_A   |  
| 2         | RS485-2_A   |  
| 3         | RS485-1_B   |  
| 4         | RS485-2_B   |  
| 5         | GND         |  
| 6         | GND         |  

Conexão de Cabos
O diagrama esquemático da fiação RS485 é o seguinte:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/rs485_connection.PNG" style={{width:600, height:'auto'}}/></div>

:::note
A embalagem do produto inclui resistores terminais de 120 Ohms, que podem ser usados conforme necessário para a comunicação RS485.
:::

Para detalhes sobre testes de RS485, consulte [Esta Seção](https://wiki.seeedstudio.com/pt-br/recomputer_r1100_configure_system/#teste-rs485).

### RS232

A série reComputer R1100 possui 2 portas RS232 com terminais Phoenix de 6 pinos e espaçamento de 3,5 mm.
A serigrafia de uma única porta RS232 é **TX/RX/GND**.

**Definição dos Pinos**

Os pinos do terminal são definidos da seguinte forma:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/rs285.PNG" style={{width:600, height:'auto'}}/></div>

Aqui está a tabela para as definições dos pinos RS232:

| **ID do Pino** | **Nome do Pino**  |
|-----------|--------------|
| 13        | R232-3_RX    |
| 14        | R232-4_RX    |
| 15        | R232-3_TX    |
| 16        | R232-4_TX    |
| 17        | GND          |
| 18        | GND          |

**Conexão de Cabos**

O diagrama esquemático da fiação RS232 é mostrado abaixo:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/rs285_connection.PNG" style={{width:600, height:'auto'}}/></div>

:::note
Para instruções detalhadas de teste RS232, consulte Para detalhes sobre testes de RS485, consulte [Esta Seção](https://wiki.seeedstudio.com/pt-br/recomputer_r1100_configure_system/#teste-rs232).

:::

### DI (Digital Input)

A série reComputer R1100 inclui 2 portas DI com terminais Phoenix de 3 pinos e espaçamento de 3,5 mm.  
A serigrafia de uma única porta DI é **"DI/G_DI"**.  

**Definição dos Pinos**

Os pinos do terminal são definidos da seguinte forma:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/DI.PNG" style={{width:600, height:'auto'}}/></div>

Aqui está a tabela para a **Definição dos Pinos DI (Digital Input)**:  

| **ID do Pino** | **Nome do Pino** |
|-----------|------------|
| 7         | DI1        |
| 9         | DI2        |
| 11        | G_DI       |

**Conexão de Cabos**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/DI_connect.PNG" style={{width:600, height:'auto'}}/></div>

Aqui está a tabela para os **Parâmetros DI (Digital Input)**:  

| **Parâmetro**           | **Descrição**    |
|------------------------|-------------------|
| Tipo de Entrada        | PNP               |
| Proteção de Isolação   | 5 kV              |
| DI para G_DI (estado ON) | 5~30 VDC          |

:::note
Para detalhes sobre testes de DI, consulte [Esta Seção](https://wiki.seeedstudio.com/pt-br/recomputer_r1100_configure_system/#teste-di-digital-input).
:::

### DO (Digital Output)

Os equipamentos da série reComputer R1100 incluem 2 portas DO, terminais Phoenix de 3 pinos e espaçamento de 3,5 mm. A serigrafia de uma única DO é **"DO/G_DO".**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/DO.PNG" style={{width:600, height:'auto'}}/></div>

**Tabela de Definição dos Pinos**

| ID do Pino | Nome do Pino |  
|--------|------------|  
| 8      | DO1       |  
| 10     | DO2       |  
| 12     | G_DO      |

 **Conexão de Cabos**

 O diagrama esquemático dos fios de uma única DO é o seguinte:

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/DO_connect.PNG" style={{width:600, height:'auto'}}/></div>

**Parâmetros da Porta DO**

| Parâmetro            | Descrição     |  
|----------------------|----------------|  
| Tipo de Saída        | Transistor      |  
| Proteção de Isolação | 5 kV           |  
| Observação de Saída  | &lt; 60VDC         |

:::note
Para detalhes sobre testes de DO, consulte [Esta Seção](https://wiki.seeedstudio.com/pt-br/recomputer_r1100_configure_system/#do-digital-output).
:::

### Chave de Boot

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/Boot.PNG" style={{width:200, height:'auto'}}/></div>

A Chave de Boot no reComputer R1100 está ligada ao pino nRPI_BOOT do módulo CM4. Esta chave permite que os usuários selecionem a fonte de boot entre eMMC e USB.  

- **Modo Normal:** Ajuste a chave **afastada** do rótulo "BOOT" para inicializar a partir do eMMC.  
- **Modo de Gravação:** Ajuste a chave **em direção** ao rótulo "BOOT" para inicializar a partir da interface USB Type-C para gravação da imagem do sistema.

Aqui está a tabela para as posições da Chave de Boot e seus modos correspondentes:  

| **Posição da Chave** | **Modo**       | **Descrição**      | **nRPI-BOOT** |
|---------------------|---------------|----------------------|---------------|
| Afastada de "BOOT"   | Modo Normal    | Inicializa a partir do eMMC       | Low           |
| Em direção a "BOOT"     | Modo de Gravação     | Inicializa a partir do USB        | High          |

### USB

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/usb.PNG" style={{width:200, height:'auto'}}/></div>

O reComputer R1100 possui uma porta USB Type-C e duas portas USB Type-A. A tabela abaixo descreve suas funções e descrições.

Aqui está a tabela das portas USB e suas funções:  

| **Tipo**   | **Quantidade** | **Protocolo** | **Função**   | **Descrição** |
|-----------|------------|------------|--------------|---------------|
| Type-C   | 1          | USB 2.0    | USB-Device   | Usada para depuração de porta serial, gravação de imagens, etc. |
| Type-A   | 2          | USB 2.0    | USB-Host     | Conecta diferentes dispositivos USB, como pen drives, teclados USB ou mouses. |

### Slot SD

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/SD.PNG" style={{width:200, height:'auto'}}/></div>

Os equipamentos da série reComputer R1100 incluem um slot para cartão micro SD, que é usado para instalar um cartão micro SD para armazenamento de dados do usuário.

### Slot SIM (Interno)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/simslot.PNG" style={{width:600, height:'auto'}}/></div>

A série reComputer R1100 inclui um slot interno para cartão Nano SIM, projetado para instalar um cartão Nano SIM para habilitar conectividade 4G. A tabela abaixo ilustra as diferenças de tamanho entre os cartões Standard SIM, Micro SIM e Nano SIM.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/SIMsizes.PNG" style={{width:400, height:'auto'}}/></div>

:::note
A versão padrão do reComputer R1100 não inclui um módulo 4G integrado. Se a funcionalidade 4G for necessária, um módulo 4G adicional deve ser adquirido separadamente. Para mais detalhes, consulte [Esta Seção](https://wiki.seeedstudio.com/pt-br/recomputer_r1100_intro/#interfaces-e-módulos-opcionais).
:::

### Slot SSD

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/SSD.PNG" style={{width:600, height:'auto'}}/></div>

O reComputer R1100 está equipado com um **slot NVMe M.2 2280 SSD**, suportando capacidades de armazenamento de **128GB, 256GB, 512GB e 1TB**. Este slot permite expansão de armazenamento em alta velocidade, possibilitando aos usuários melhorar tanto o **desempenho** quanto a **capacidade** do sistema.  

**Nota:**  
Existem dois usos principais para os cartões SSD:  

1. **Armazenamento de alta capacidade** – SSDs podem ser usados para grandes necessidades de armazenamento.  
2. **Unidade de boot com imagem do sistema** – Alguns SSDs podem ser usados tanto como armazenamento de alta capacidade quanto como unidade de boot para o sistema.  

No entanto, nem todos os SSDs suportam a funcionalidade de boot. Se você planeja usar um SSD como unidade de boot e não tem certeza de qual modelo comprar, recomendamos o **SSD de 1TB (SKU112990267)**, pois ele foi testado e verificado para a funcionalidade de boot. Isso reduz problemas de compatibilidade e minimiza custos de tentativa e erro.

### Slots Mini-PCIe no reComputer R1100

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/pci.PNG" style={{width:600, height:'auto'}}/></div>

O reComputer R1100 está equipado com **dois slots Mini-PCIe**, suportando vários protocolos de comunicação. A tabela abaixo descreve os protocolos suportados por cada slot:  

| **Slot**       | **Protocolos Suportados**   |  
|---------------|--------------------------|  
| **Mini-PCIe 1** | 4G LTE, USB LoRa® |  
| **Mini-PCIe 2** | SPI LoRa®, USB LoRa® |  

Esses slots permitem que os usuários expandam as opções de conectividade, possibilitando a integração com **módulos 4G LTE e LoRa® conforme necessário.

Este dispositivo inclui duas **interfaces Mini-PCIe**: **Slot 1** e **Slot 2**.  

- **Mini-PCIe Slot 1** está ligado ao **slot do cartão SIM** e suporta **protocolos USB**, sendo adequado para conectar **módulos 4G LTE e USB LoRa®**.  
- **Mini-PCIe Slot 2** suporta **protocolos USB e SPI**, mas **não está conectado** ao slot do cartão SIM. Ele pode acomodar **dispositivos SPI LoRa® e USB LoRa®**.  

Esses slots fornecem opções de expansão flexíveis para vários módulos de comunicação sem fio.

### Orifício de Reset  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/reset.PNG" style={{width:200, height:'auto'}}/></div>

O reComputer R1100 possui um **Mini Push Button Switch** localizado dentro do orifício de reset. Ao pressionar esse botão com um objeto fino, os usuários podem **resetar o CM4**.  

- Quando este pino está em nível **alto**, indica que o **CM4 foi iniciado**.  
- Quando este pino é **colocado em nível baixo**, ele **reseta o módulo**.

### Ethernet RJ45  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/eth.PNG" style={{width:200, height:'auto'}}/></div>

O **reComputer R1100** está equipado com duas portas Ethernet:  

| Nome  | Tipo                         | Velocidades              | Suporte a PoE                |
|-------|------------------------------|---------------------|----------------------------|
| ETH0  | Ethernet Gigabit nativo do CM4  | 10/100/1000 Mbit/s  | Suportado (com módulo adicional) |
| ETH1  | Convertido de USB           | 10/100 Mbit/s       | Não suportado             |

O **reComputer R1100** está equipado com duas portas Ethernet RJ45:  

- **ETH0**: Uma interface **Ethernet Gigabit nativa do CM4** que suporta velocidades de **10/100/1000 Mbit/s**. Ela pode ser atualizada com um **módulo PoE** adicional para habilitar **Power over Ethernet (PoE)** para alimentação do dispositivo.  
- **ETH1**: Uma interface **Ethernet convertida de USB** que suporta velocidades de **10/100 Mbit/s**, mas **PoE não é suportado**.

**Nota**  
Para mais detalhes sobre PoE, consulte [Esta Seção](https://wiki.seeedstudio.com/pt-br/recomputer_r1100_intro/#poe-power-over-ethernet).

### HDMI

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/display.PNG" style={{width:200, height:'auto'}}/></div>

O reComputer R1100 possui uma interface HDMI nativa do CM4, suportando saída de vídeo de até **4K@60fps**. É ideal para aplicações que exigem múltiplas telas, permitindo aos usuários enviar conteúdo para telas externas de grande porte.

### RTC  

O reComputer R1100 inclui um **circuito RTC (Real-Time Clock)** com uma **bateria CR2032** pré-instalada, garantindo a manutenção precisa da hora mesmo durante a perda de energia.  

:::note
Para detalhes sobre testes de RTC, consulte [Esta Seção](https://wiki.seeedstudio.com/pt-br/recomputer_r1100_intro/#rtc-real-time-clock-testing).
:::  

### Watchdog  

O reComputer R1100 possui um **circuito watchdog de hardware independente** que reinicia automaticamente o sistema em caso de travamento. Este watchdog é implementado por meio do **RTC** e permite **tempos de alimentação flexíveis variando de 1 a 255 segundos**.  

:::note
Para detalhes sobre testes do watchdog, consulte [Esta Seção](https://wiki.seeedstudio.com/pt-br/recomputer_r/#watchdog).
:::

## Interfaces e Módulos Opcionais  

O reComputer R1100 suporta uma **ampla gama de módulos de expansão e acessórios**, tornando-o adaptável a vários casos de uso. Se você estiver interessado em customizar o reComputer R1100, entre em contato com **odm@seeed.cc** para mais informações.  

#### Lista de Acessórios e Módulos Opcionais

Aqui está a tabela formatada para melhor legibilidade:  

| **Observação**                                     | **Item**               | **Nome do Produto**                                      | **SKU**         |
|------------------------------------------------|------------------------|------------------------------------------------------|----------------|
| **Devem ser usados juntos para a função LoRa® WAN** | Módulo LoRa®           | Region optional LoRaWAN Gateway Module (SPI) - US915 | 114992969      |
|                                                |                        | Region optional LoRaWAN Gateway Module (SPI) - EU868 | 114993268      |
|                                                |                        | Region optional LoRaWAN Gateway Module (USB) - US915 | 114992991      |
|                                                |                        | Region optional LoRaWAN Gateway Module (USB) - EU868 | 114992628      |
| **Antena LoRa®**                              | Antena LoRa®          | LoRa Antenna Kit - 868-915MHz                        | 110061501      |
| **Este acessório é necessário para a função Wi-Fi** | Antena Wi-Fi/BLE     | Raspberry Pi Compute Module 4 Antenna Kit           | 114992364      |
| **Antena 4G com módulo 4G para função 4G, Antena GPS com módulo 4G para função GPS** | Módulo 4G | LTE Cat 4 EC25-AFXGA Mini-PCIe Module - North America | 113991134      |
|                                                |                        | LTE Cat 4 EC25-EUXGR Mini-PCIe Module - EMEA & Thai  | 113991135      |
|                                                |                        | LTE Cat 4 EC25-AUXGR Mini-PCIe Module - Australia    | 113991174      |
|                                                |                        | LTE Cat 4 EC25-EFA Mini-PCIe Module - Thailand       | 113991214      |
|                                                |                        | LTE Cat 4 EC25-EMGA Mini-PCIe Module - Malaysia      | 113991234      |
|                                                |                        | LTE Cat 4 EC25-JFA Mini-PCIe Module - Japan          | 113991296      |
| **Antena 4G**                                 | Antena 4G            | 4G Antenna Kit for 4G module                        | 110061502      |
| **Antena GPS**                                | Antena GPS           | GPS Antenna Kit for EC25 4G Module                  | 110061521      |
| **Chip de Criptografia**                            | TPM 2.0               | TPM 2.0 Module with Infineon SLB9670                | 114993114      |
| **Armazenamento SSD**                                | Cartão SSD              | NVMe M.2 2280 SSD 1TB                               | 112990267      |
|                                                |                        | 512GB NVMe M.2 PCIe Gen3x4 2280 Internal SSD        | 112990247      |
|                                                |                        | 256GB NVMe M.2 PCIe Gen3x4 2280 Internal SSD        | 112990246      |
|                                                |                        | 128GB NVMe M.2 PCIe Gen3x4 2280 Internal SSD        | 112990226      |
| **Este módulo precisa ser soldado na placa carrier do reComputer R1100** | PoE | MQ7813T120 PoE Module Kit for reTerminal DM | 110991925 |
| **UPS**                                        | UPS                   | SuperCAP UPS LTC3350 Module                         | 110992004      |

A placa-mãe **reComputer R1100** possui **dois slots Mini-PCIe** com a seguinte compatibilidade:  

- O **Slot Mini-PCIe 1** oferece suporte a:  
  - **Módulo 4G** (protocolo USB)  
  - **Módulo LoRa®** (protocolo USB)  

- O **Slot Mini-PCIe 2** oferece suporte a:  
  - **Módulo LoRa®** (protocolo USB e SPI)  

:::note
 **Os módulos 4G e LoRa® não podem ser usados ao mesmo tempo.**  
 **Você não pode conectar dois módulos LoRa® na placa.**  

:::

Isso significa que você precisa escolher entre usar **4G ou LoRa®**, e só pode ter **um** módulo LoRa® instalado por vez.

### Wi-Fi/BLE  

O **reComputer R1100-10** é alimentado pelo **CM4** com uma **versão com Wi-Fi/BLE onboard**, fornecendo os mesmos parâmetros de Wi-Fi/BLE do CM4. Para especificações detalhadas, consulte o **site oficial da Raspberry Pi**.  

### Módulo 4G

A placa-mãe **reComputer R1100** possui **dois slots Mini-PCIe**, sendo que o **Slot Mini-PCIe 1** oferece suporte a um **módulo 4G via protocolo USB**. O **módulo 4G Quectel EC25** foi totalmente testado quanto à compatibilidade com o reComputer R1100.  

:::note
Se você precisar de **funcionalidade 4G**, deverá **adquirir o módulo 4G correspondente e uma antena externa**, e seguir as instruções em [Assemble 4G/LoRa® and Antenna](https://wiki.seeedstudio.com/pt-br/recomputer_r1100_assembly_guide/).
:::

### Módulo LoRa®  

Ambos os **slots Mini-PCIe** oferecem suporte a **módulos LoRa® via protocolo USB**. Além disso, o **Slot Mini-PCIe 2** oferece suporte a um **módulo LoRa® usando o protocolo SPI**. O **módulo WM1302 da Seeed Studio** foi totalmente testado quanto à compatibilidade com o reComputer R1100.

:::note
Se você precisar de **funcionalidade LoRa®**, deverá **adquirir o módulo LoRa® correspondente e uma antena externa**, e seguir as instruções em [Assemble 4G/LoRa® and Antenna](https://wiki.seeedstudio.com/pt-br/recomputer_r1100_assembly_guide/).
:::

### PoE (Power over Ethernet)

O **reComputer R1100 é compatível com o padrão IEEE 802.3af PD (Powered Devices)** por meio da adição de um **módulo de alimentação PoE**. O **soquete PoE vem pré-soldado na placa**, mas os usuários devem **desmontar o dispositivo para instalar o módulo PoE** a fim de obter a funcionalidade PoE via Ethernet.  

Para orientações de desmontagem, consulte o [Guia de Desmontagem](https://wiki.seeedstudio.com/pt-br/recomputer_r1100_intro/recomputer_r1100_assembly_guide/#montando-o-módulo-de-ups-e-poe)  

:::note  

- O **reComputer R1100 oferece suporte a alimentação PoE, mas o produto padrão não inclui um módulo PoE por padrão.**  
- **A Seeed oferece serviços de soldagem e montagem de PoE para pedidos de customização em lote.**  
- Para testes de amostra, os clientes devem **soldar e montar o módulo PoE por conta própria**. As instruções estão disponíveis em **"Assemble PoE Module"**.  

:::

### SSD (Expansão de Armazenamento)

O **reComputer R1100 é compatível com SSDs NVMe 2280** por meio de um **slot PCIe (J62) localizado abaixo dos dois slots Mini-PCIe na placa**.  

:::note

- A **interface PCIe do CM4 é Gen 2.0**, com uma **velocidade teórica máxima de 5Gbps**.  
- Se você usar um **SSD Gen 3.0 ou superior**, ele pode não atingir sua velocidade máxima.  
- **Os resultados de teste do reTerminal DM mostram:**  
  - **Velocidade máxima de gravação:** 230MB/s  
  - **Velocidade máxima de leitura:** 370MB/s  
- A compatibilidade de SSD pode variar, portanto é **recomendado adquirir SSDs da lista de acessórios aprovados**.  

:::

**Cenários de Uso de SSD:**  

- **Armazenamento de alta capacidade** – SSDs podem ser usados para expandir o espaço de armazenamento.  
- **Unidade de boot com imagem de sistema** – Alguns SSDs podem armazenar imagens de sistema e **inicializar diretamente a partir do SSD**.  

:::note
**Nem todos os SSDs oferecem suporte à funcionalidade de boot!**  
Se você precisar de um SSD para boot e não tiver certeza de qual comprar, a Seeed **recomenda o SSD de 1TB (SKU: 112990267)**, que foi **testado e verificado quanto à funcionalidade de boot**, minimizando riscos de compatibilidade e custos de solução de problemas.  
:::

### Chip de Criptografia - TPM 2.0  

O reComputer R1100 é compatível com o **OPTIGA™ TPM SLB9670 da Infineon**, que está em conformidade com a especificação **Trusted Computing Group (TCG) TPM 2.0**.  

**Principais Recursos:**  

- **Chip de criptografia para segurança**  
- **Interface SPI** (conectada à **porta J13** na placa)  
- **Fornece uma raiz de confiança** para:
  - **Integridade da plataforma**
  - **Atestação remota**
  - **Serviços criptográficos**  

:::note  
Para instruções de instalação, consulte [Assemble TPM 2.0 Module](https://wiki.seeedstudio.com/pt-br/recomputer_r1100_intro/recomputer_r1100_assembly_guide/#montando-o-módulo-tpm-20)  

:::

### Módulo UPS (Fonte de Alimentação Ininterrupta)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/UPS.PNG" style={{width:600, height:'auto'}}/></div>

O **módulo UPS** no reComputer R1100 é um sistema de backup de energia baseado em **supercapacitor de 7F** que opera **em série**.  

**Como Funciona:**  

1. Posicionado entre a **fonte de alimentação DC 5V** e o **CM4**.  
2. Usa um **sinal GPIO** para notificar a **CPU** quando a **fonte de alimentação de 5V falha**.  
3. A CPU executa um **script de emergência** antes que a energia se esgote.  
4. O script executa o comando **"$ shutdown"** para um desligamento seguro do sistema.  

**Duração do Backup:**  
O **tempo de funcionamento do UPS** depende da **carga do sistema**. Abaixo estão os resultados de teste com:  

- **CM4 (4GB RAM, 32GB eMMC, módulo Wi-Fi).**  

## Recursos Adicionais

- [Arquivo 3D do reComputer R1100](https://files.seeedstudio.com/R11/reComputer%20R1100_3D.stp)
- [Projeto Esquemático e PCB do reComputer R1100](https://files.seeedstudio.com/R11/reComputer%20R1100_schematic_design_files.zip)
- [Flyer do reComputer R1100](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer-R1100/reComputer-R1100-flyer.pdf)
- [Manual do Usuário](https://files.seeedstudio.com/R11/reComputer%20R1100%20User%20Manual-V1.0.pdf)



## Recursos

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/NVIDIA_Jetson.jpg"
  imageAlt="Request Quote for Jetson"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
