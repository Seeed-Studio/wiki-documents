---
description: O reComputer R1100 é um gateway e controlador IoT com tecnologia Raspberry Pi CM4 e recursos de IA. Com 2GB de RAM, 8GB de eMMC, Ethernet dupla, USB, RS485, RS232, DI/DO e conectividade sem fio (4G, LoRa®, Wi‑Fi/BLE), é perfeito para automação industrial e computação de borda.
title: Primeiros Passos com o reComputer R1100
keywords:
  - Raspberry pi
  - Controlador de Borda
  - reComputer R1100
image: https://files.seeedstudio.com/wiki/R1100/recomputer2.jpg
slug: /recomputer_r1100_intro
last_update:
  date: 2/25/2024
  author: Kasun Thushara
createdAt: '2025-02-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/recomputer_r1100_intro/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

## Visão Geral

O reComputer R1100, alimentado pelo Raspberry Pi CM4, é um gateway IoT de borda versátil com recursos de IA. Ele possui uma ampla variedade de interfaces industriais, incluindo **2x Ethernet, 2x USB, 2x RS485, 2x RS232, 2x DI e 2x DO**, além de opções flexíveis de conectividade sem fio como **4G, LoRa® e Wi‑Fi/BLE**. Esses recursos o tornam uma escolha ideal para diversas aplicações industriais.
A série reComputer R1100 é amplamente utilizada em aplicações de IoT, incluindo **aquisição de dados e monitoramento de processos, controle de automação e robótica, manufatura inteligente e comunicação e redes industriais**. Seu tamanho compacto, flexibilidade, baixo custo e programabilidade proporcionam forte suporte para **automação, sistemas de IoT e além**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/reComputer-R1125-1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>

## Recursos

**Projetado para Automação e Sistemas de IoT**  

- Suporta os protocolos **BACnet, Modbus RTU, Modbus TCP/IP e KNX**  
- Compatível com **Node-RED, CODESYS, Balena e mais**  
- **LEDs indicadores em ambos os lados** para verificações rápidas de status  
- **Gabinete metálico resistente**, compatível com **montagem em trilho DIN e parede**  
- Suporta **Yocto e Buildroot** para um sistema operacional personalizado  

**Desempenho Poderoso**  

- Alimentado por **Raspberry Pi CM4**  
- **Broadcom BCM2711** quad‑core **Cortex-A72 (ARM v8) SoC de 64 bits @ 1,5GHz**  
- Até **8GB de RAM** e **32GB de armazenamento eMMC**  

**Ricas Capacidades Sem Fio**  

- **Wi‑Fi e BLE integrados**  
- **Mini‑PCIe 1**: Suporta **LTE, USB LoRa®, USB Zigbee**  
- **Mini‑PCIe 2**: Suporta **SPI LoRa®, USB LoRa®, USB Zigbee**  

**Interfaces Abrangentes**  

- **2x RS485 (isolados), 2x RS232 (isolados), 2x portas DI isoladas, 2x portas DO isoladas**  
- **1x Ethernet 10M/100M/1000M** (suporta **PoE**)  
- **1x Ethernet 10M/100M**  
- **1x HDMI 2.0**  
- **2x USB 2.0 Tipo A**  
- **1x USB 2.0 Tipo C** (console USB para atualizações de SO)  
- **1x slot para cartão MicroSD**  
- **1x slot interno para cartão Nano SIM**  

**Segurança e Confiabilidade**  

- **Watchdog de hardware**  
- **Supercapacitor de UPS opcional**  
- **Gabinete metálico com laterais em PC**  
- **Padrões de Compatibilidade Eletromagnética (EMC)**:  
  - **ESD**: EN61000-4-2, Nível 3  
  - **EFT**: EN61000-4-4, Nível 2  
  - **Proteção contra Surto**: EN61000-4-5, Nível 2  
- **Vida Útil de Produção**: O **reComputer R1100** permanecerá em produção **até pelo menos dezembro de 2030**

<JetsonLeadQuote
  buttonText="Solicitar orçamento personalizado"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/NVIDIA_Jetson.jpg"
  imageAlt="Request Quote for Jetson"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## Especificação

| **Parâmetro**          | **Descrição** |
|------------------------|----------------|
| **Especificação de Hardware** | |
| **Série de Produtos** | R11xx-10, R11xx-00 |
| **CPU** | Raspberry Pi CM4, Quad-core Cortex-A72 @ 1,5GHz |
| **Sistema Operacional** | Raspbian, Debian, Yocto, Buildroot |
| **RAM** | 1GB / 2GB / 4GB / 8GB |
| **Armazenamento eMMC** | 8GB / 16GB / 32GB |
| **Especificação do Sistema** | |
| **Entrada de Alimentação** | DC 9V~36V, bloco de terminais de 2 pinos |
| **PoE (como dispositivo alimentado)** | Padrão IEEE 802.3af PoE 12,95W* |
| **Proteção contra Surtos de Tensão** | 40V |
| **Consumo de Energia** | Em espera: 2,88W; Carga total: 5,52W |
| **Interruptor de Energia** | Não |
| **Interruptor de Reinicialização** | Sim |
| **Interface** | |
| **Ethernet** | 1x 10/100/1000Mbps (suporta PoE*), 1x 10/100Mbps IEEE 802.3/802.3u |
| **USB** | 2x USB-A 2.0 Host, 1x USB-C 2.0 (para gravar o SO) |
| **RS485** | 2x RS485 (Isolados) |
| **RS232** | 2x RS232 (Isolados) |
| **DI (Entrada Digital)** | 2x portas DI isoladas, tensão de entrada: 5~24V DC |
| **DO (Saída Digital)** | 2x portas DO isoladas, tensão de saída: &lt;60V DC |
| **Cartão SIM** | 1x slot para cartão Nano SIM (interno) |
| **Cartão SD** | 1x slot para cartão MicroSD |
| **SSD** | 1x slot para SSD M.2 NVMe (2280-M Key) |
| **LEDs Indicadores** | 12x LEDs indicadores |
| **Buzzer** | 1 |
| **Botão de Reset** | 1 |
| **HDMI** | 1x HDMI 2.0 |
| **Comunicação Sem Fio** | |
| **Wi‑Fi 2,4/5,0GHz** | Wi‑Fi integrado* |
| **BLE 5.0** | BLE integrado* |
| **LoRa®** | USB LoRa®*/ SPI LoRa®* |
| **4G Celular** | 4G LTE* |
| **Zigbee** | USB Zigbee* |
| **Normas** | |
| **Conformidade EMC** | ESD: EN61000-4-2, Nível 3; EFT: EN61000-4-4, Nível 2; Surto: EN61000-4-5, Nível 2 |
| **Certificação** | CE, FCC, TELEC, RoHS, REACH |
| **Condições Ambientais** | |
| **Grau de Proteção** | IP40 |
| **Temperatura de Operação** | -30 ~ 70°C |
| **Umidade de Operação** | 10 ~ 95% RH |
| **Temperatura de Armazenamento** | -40 ~ 80°C |
| **Outros Recursos** | |
| **UPS com Supercapacitor** | Módulo SuperCAP UPS LTC3350* |
| **Watchdog de Hardware** | 1 ~ 255s |
| **RTC** | RTC de alta precisão |
| **Segurança** | |
| **Chip de Criptografia** | TPM 2.0*, ATECC608A |
| **Sistema de Resfriamento** | Sem ventoinha |
| **Garantia** | 2 anos |
| **Vida Útil de Produção** | Até dezembro de 2030 |
| **Declaração** | As opções marcadas com * exigem compra adicional de acordo com a lista de acessórios. |
| **Status de Componentes e Interfaces** | |
| **Reservado** | Designado para uso ou expansão futura. |
| **Opcional** | Componentes não essenciais; o usuário pode optar por incluir ou não. |
| **Ocupado** | Atualmente em uso e essencial para a funcionalidade do produto. |
| **Incluído** | Componentes essenciais fornecidos com o pacote padrão. |

**Declaração**: As opções marcadas com `*` exigem compra adicional de acordo com a lista de acessórios.

## Dimensões Mecânicas  

| **Parâmetro** | **Descrição** |
|--------------|----------------|
| **Dimensões (L x A x P)** | 130 mm x 93 mm x 49,6 mm |
| **Gabinete** | Gabinete em liga de alumínio 6061 com laterais em PC transparente |
| **Montagem** | Trilho DIN / Parede |
| **Peso (Líquido)** | 560g |

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/dimensions.PNG" style={{width:800, height:'auto'}}/></div>

## Visão Geral de Hardware

### Visão Geral do Sistema

#### Visão Geral das Interfaces

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/interface.PNG" style={{width:800, height:'auto'}}/></div>

#### Visão Geral da Placa Principal

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/mainboard.PNG" style={{width:800, height:'auto'}}/></div>

#### Diagrama de Alimentação

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/power.PNG" style={{width:800, height:'auto'}}/></div>

O reComputer R1100 oferece duas opções de fonte de alimentação: um terminal DC e uma porta PoE. Por padrão, ele é alimentado via terminal DC usando o adaptador de energia oficial da região (SKU: 110061505/110061506). Alternativamente, está disponível uma fonte de alimentação PoE opcional (módulo PoE, SKU: 110991925). Essa flexibilidade permite integração perfeita com diferentes fontes de energia, atendendo a diversas necessidades de aplicação.

**Terminal de Alimentação de 2 pinos**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/power_terminal.PNG" style={{width:400, height:'auto'}}/></div>

O reComputer R1100 opera com uma fonte de alimentação DC na faixa de 9 a 36V, conectada por meio de um bloco de terminais de alimentação de 2 pinos. Para aterramento, o fio terra pode ser preso com segurança ao parafuso localizado no canto superior esquerdo do terminal de alimentação.

**PoE**

Com o módulo PoE instalado, a porta ETH0 do reComputer R1100 suporta alimentação via PoE, oferecendo uma forma conveniente e eficiente de alimentar o dispositivo pela Ethernet. Essa opção simplifica a instalação e minimiza a fiação, tornando‑a ideal para aplicações com fontes de energia limitadas ou locais sem tomadas de energia facilmente disponíveis.

- **Entrada PoE**: 44~57V (Típico: 48V)
- **Saída PoE**: 12V, 1,1A máx.

:::note
O módulo PoE incluso está em conformidade com o padrão IEEE 802.3af e fornece potência máxima de 12,95W. No entanto, para periféricos de alta potência, como SSDs ou módulos 4G, a alimentação PoE pode não ser suficiente. Nesses casos, recomenda‑se usar o terminal DC para alimentação, a fim de garantir operação estável e confiável do dispositivo.
:::

**Consumo de Energia**

A tabela abaixo apresenta os valores de consumo de energia testados para o reComputer R1100, com base em medições realizadas no laboratório da Seeed Studio. Observe que esses valores são apenas para referência, pois variações nos métodos de teste e nas condições ambientais podem afetar os resultados.  

| **Status**   | **Tensão** | **Corrente** | **Consumo de Energia** | **Descrição** |
|-------------|------------|------------|----------------------|----------------|
| **Desligado** | 24V | 51mA | 1,224W | Teste de consumo de energia estático em estado desligado e sem alimentação. |
| **Em espera** | 24V | 120mA | 2,88W | Mede a corrente de entrada ao fornecer 24V sem executar nenhum programa de teste. |
| **Carga Total** | 24V | 230mA | 5,52W | A CPU opera em carga total usando o comando `"stress -c 4"`, sem dispositivos externos conectados. |

 **Ligar e Desligar**  
O reComputer R1100 não inclui um botão de energia por padrão. O sistema liga automaticamente quando conectado a uma fonte de alimentação.  

- Para desligar, use a opção de desligamento no sistema operacional e aguarde a conclusão do processo antes de desconectar a alimentação.  
- Para reiniciar o sistema, basta reconectar a fonte de alimentação.  

Isso garante operação segura e evita possíveis perdas de dados ou problemas no sistema.

#### Diagrama de Blocos

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/power_terminal.PNG" style={{width:400, height:'auto'}}/></div>

#### Diagrama IIC

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/IIC.PNG" style={{width:600, height:'auto'}}/></div>

## Descrição das Interfaces

| **Interface** | **Descrição** |
|--------------|----------------|
| **Ethernet** | 1 × 10/100/1000 Mbps (suporta PoE*), 1 × 10/100 Mbps (IEEE 802.3/802.3u) |
| **USB** | 2 × USB-A 2.0 (Host), 1 × USB-C 2.0 (para gravar o SO) |
| **RS485** | 2 × RS485 (Isolados) |
| **RS232** | 2 × RS232 (Isolados) |
| **DI (Entrada Digital)** | 2 × portas DI isoladas, tensão de entrada: 5~24V DC |
| **DO (Saída Digital)** | 2 × portas DO isoladas, tensão de saída: < 60V DC |
| **HDMI** | 1 × HDMI 2.0 |
| **Slot para Cartão SD** | Suporta cartão MicroSD |
| **Slot para Cartão SIM** | Suporta cartão Nano SIM |
| **Slot M.2** | Suporta SSD M.2 NVMe |
| **LEDs Indicadores** | 12 × LEDs indicadores |
| **Buzzer** | 1 |
| **Botão de Reset** | 1 |  

### Status do Indicador de LED

O computador R1100 possui 12 LEDs para indicação do status do sistema. Suas funções específicas estão descritas na tabela abaixo.

Aqui está a tabela de **Status do Indicador de LED** em um formato estruturado:  

| **Indicador LED** | **Cor** | **Status** | **Descrição** |
|------------------|---------|-----------|----------------|
| **PWR** | Verde | Ligado | O dispositivo está conectado à alimentação. |
| | | Desligado | O dispositivo não está conectado à alimentação. |
| **ACT** | Verde | Piscando | Indica acesso à eMMC no Linux. Se ocorrer um erro durante a inicialização, ele pisca um padrão de erro (consulte a documentação do Raspberry Pi). |
| **USER** | Verde/Vermelho/Azul | Definido pelo usuário | Pode ser programado pelo usuário. |
| **4G** | Verde | Ligado | A conexão discada foi bem-sucedida e a conexão está normal. |
| | | Desligado | O sinal 4G não está conectado ou o dispositivo não está ligado. |
| **DI1** | Verde | Ligado/Piscando | Sinal de entrada detectado. |
| | | Desligado | Sem alimentação ou sem transmissão de dados. |
| **DI2** | Verde | Ligado/Piscando | Sinal de entrada detectado. |
| | | Desligado | Sem alimentação ou sem transmissão de dados. |
| **DO1** | Verde | Ligado/Piscando | Sinal de saída detectado. |
| | | Desligado | Sem alimentação ou sem transmissão de dados. |
| **DO2** | Verde | Ligado/Piscando | Sinal de saída detectado. |
| | | Desligado | Sem alimentação ou sem transmissão de dados. |
| **COM1 (Canal RS485 1)** | Verde | Ligado/Piscando | Recebendo ou enviando dados. |
| | | Desligado | Sem transferência de dados no Canal RS485 1. |
| **COM2 (Canal RS485 2)** | Verde | Ligado/Piscando | Recebendo ou enviando dados. |
| | | Desligado | Sem transferência de dados no Canal RS485 2. |
| **COM3 (Canal RS232 1)** | Verde | Ligado/Piscando | Recebendo ou enviando dados. |
| | | Desligado | Sem transferência de dados no Canal RS232 1. |
| **COM4 (Canal RS232 2)** | Verde | Ligado/Piscando | Recebendo ou enviando dados. |
| | | Desligado | Sem transferência de dados no Canal RS232 2. |

### Códigos de Status do ACT

Aqui está uma tabela estruturada para os **Códigos de Status do ACT**:  

| Piscadas Longas | Piscadas Curtas | Descrição do Status |
|-------------|--------------|--------------------|
| 0 | 3 | Falha genérica ao inicializar |
| 0 | 4 | `start*.elf` não encontrado |
| 0 | 7 | Imagem do kernel não encontrada |
| 0 | 8 | Falha da SDRAM |
| 0 | 9 | SDRAM insuficiente |
| 0 | 10 | Em estado HALT |
| 2 | 1 | Partição não é FAT |
| 2 | 2 | Falha ao ler da partição |
| 2 | 3 | Partição estendida não é FAT |
| 2 | 4 | Incompatibilidade de assinatura/hash do arquivo (Pi 4) |
| 4 | 4 | Tipo de placa não suportado |
| 4 | 5 | Erro fatal de firmware |
| 4 | 6 | Falha de energia tipo A |
| 4 | 7 | Falha de energia tipo B |

**Notas Adicionais:**  

- Se o **LED ACT piscar em um padrão regular de quatro piscadas**, isso indica que o bootcode (`start.elf`) está ausente.  
- Se o **LED ACT piscar em um padrão irregular**, o processo de inicialização foi iniciado.  
- Se o **LED ACT não piscar**, o código da EEPROM pode estar corrompido. Tente inicializar sem nenhum periférico conectado.  
- Para mais detalhes, consulte o **Fórum Raspberry Pi**: [Is your Pi not booting? (Boot Problems Sticky)](https://forums.raspberrypi.com//viewtopic.php?f=28&t=58151).

**Indicador USER**

O reComputer R1100 inclui um indicador **USER**, que pode ser personalizado de acordo com os requisitos do usuário.  

**Nota:**  
Para detalhes sobre o teste do **LED USER**, consulte [Esta Seção](https://wiki.seeedstudio.com/pt-br/recomputer_r1100_configure_system/#controlar-indicadores-de-led).

### Buzzer

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/buzzer.PNG" style={{width:600, height:'auto'}}/></div>

O reComputer R1100 está equipado com um buzzer ativo, que pode ser usado para alarmes e notificações de eventos.  

Para verificar o GPIO correspondente ao **Buzzer_EN**, insira o seguinte comando no terminal:  

```
cat /sys/kernel/debug/gpio
```

Isso exibirá **gpio587** como o GPIO atribuído ao buzzer.  

**Nota:**  
Para detalhes sobre o **teste do buzzer**, consulte [Esta Seção](https://wiki.seeedstudio.com/pt-br/recomputer_r1100_configure_system/#controlar-o-buzzer-via-gpio).

### RS485

A série reComputer R1100 possui **duas portas RS485** com **terminais Phoenix de 6 pinos e espaçamento de 3,5 mm**. Cada porta RS485 é identificada com a serigrafia **"A/B/GND"** para fácil identificação.  

**Definições de Pinos**  
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

Conexão dos Cabos
O diagrama esquemático da fiação RS485 é o seguinte:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/rs485_connection.PNG" style={{width:600, height:'auto'}}/></div>

:::note
A embalagem do produto inclui resistores de terminação de 120 Ohms, que podem ser usados conforme necessário para comunicação RS485.
:::

Para detalhes sobre testes de RS485, consulte [Esta Seção](https://wiki.seeedstudio.com/pt-br/recomputer_r1100_configure_system/#teste-de-rs485).

### RS232

A série reComputer R1100 possui 2 portas RS232 com terminais Phoenix de 6 pinos e espaçamento de 3,5 mm.
A serigrafia de uma única porta RS232 é **TX/RX/GND**.

**Definição de Pinos**

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

**Conexão dos Cabos**

O diagrama esquemático da fiação RS232 é mostrado abaixo:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/rs285_connection.PNG" style={{width:600, height:'auto'}}/></div>

:::note
Para instruções detalhadas de teste RS232, consulte Para detalhes sobre testes de RS485, consulte [Esta Seção](https://wiki.seeedstudio.com/pt-br/recomputer_r1100_configure_system/#teste-de-rs232).

:::

### DI (Entrada Digital)

A série reComputer R1100 inclui 2 portas DI com terminais Phoenix de 3 pinos e espaçamento de 3,5 mm.  
A serigrafia de uma única porta DI é **"DI/G_DI"**.  

**Definição de Pinos**

Os pinos do terminal são definidos da seguinte forma:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/DI.PNG" style={{width:600, height:'auto'}}/></div>

Aqui está a tabela para a **Definição de Pinos DI (Entrada Digital)**:  

| **ID do Pino** | **Nome do Pino** |
|-----------|------------|
| 7         | DI1        |
| 9         | DI2        |
| 11        | G_DI       |

**Conexão dos Cabos**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/DI_connect.PNG" style={{width:600, height:'auto'}}/></div>

Aqui está a tabela para os **Parâmetros DI (Entrada Digital)**:  

| **Parâmetro**           | **Descrição**    |
|------------------------|-------------------|
| Tipo de Entrada        | PNP               |
| Proteção de Isolação   | 5 kV              |
| DI para G_DI (estado ON) | 5~30 VDC          |

:::note
Para detalhes sobre testes DI, consulte [Esta Seção](https://wiki.seeedstudio.com/pt-br/recomputer_r1100_configure_system/#teste-de-di-entrada-digital).
:::

### DO (Saída Digital)

O equipamento da série reComputer R1100 inclui 2 portas DO, terminais Phoenix de 3 pinos e espaçamento de 3,5 mm. A serigrafia de uma única DO é **"DO/G_DO".**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/DO.PNG" style={{width:600, height:'auto'}}/></div>

**Tabela de Definição de Pinos**

| ID do Pino | Nome do Pino |  
|--------|------------|  
| 8      | DO1       |  
| 10     | DO2       |  
| 12     | G_DO      |

 **Conexão dos Cabos**

 O diagrama esquemático dos fios de uma única DO é o seguinte:

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/DO_connect.PNG" style={{width:600, height:'auto'}}/></div>

**Parâmetros da Porta DO**

| Parâmetro            | Descrição     |  
|----------------------|----------------|  
| Tipo de Saída        | Transistor      |  
| Proteção de Isolação | 5 kV           |  
| Nota de Saída        | &lt; 60VDC         |

:::note
Para detalhes sobre testes DO, consulte [Esta Seção](https://wiki.seeedstudio.com/pt-br/recomputer_r1100_configure_system/#do-saida-digital).
:::

### Chave de Boot

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/Boot.PNG" style={{width:200, height:'auto'}}/></div>

A Chave de Boot no reComputer R1100 está ligada ao pino nRPI_BOOT do módulo CM4. Esta chave permite aos usuários selecionar a fonte de inicialização entre eMMC e USB.  

- **Modo Normal:** Ajuste a chave **para longe** do rótulo "BOOT" para inicializar a partir da eMMC.  
- **Modo de Gravação:** Ajuste a chave **em direção** ao rótulo "BOOT" para inicializar pela interface USB Type-C para gravação da imagem do sistema.

Aqui está a tabela para as posições da Chave de Boot e seus modos correspondentes:  

| **Posição da Chave** | **Modo**       | **Descrição**      | **nRPI-BOOT** |
|---------------------|---------------|----------------------|---------------|
| Longe de "BOOT"   | Modo Normal    | Inicializa pela eMMC | Low           |
| Em direção a "BOOT"     | Modo de Gravação     | Inicializa pelo USB        | High          |

### USB

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/usb.PNG" style={{width:200, height:'auto'}}/></div>

O reComputer R1100 possui uma porta USB Type-C e duas portas USB Type-A. A tabela abaixo descreve suas funções e descrições.

Aqui está a tabela para as portas USB e suas funções:  

| **Tipo**   | **Quantidade** | **Protocolo** | **Função**   | **Descrição** |
|-----------|------------|------------|--------------|---------------|
| Type-C   | 1          | USB 2.0    | USB-Device   | Usado para depuração de porta serial, gravação de imagens etc. |
| Type-A   | 2          | USB 2.0    | USB-Host     | Conecta diferentes dispositivos USB, como pen drives, teclados USB ou mouses. |

### Slot para SD

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/SD.PNG" style={{width:200, height:'auto'}}/></div>

Os equipamentos da série reComputer R1100 incluem um slot para cartão micro SD, que é usado para instalar um cartão micro SD para armazenar dados do usuário.

### Slot para SIM (Interno)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/simslot.PNG" style={{width:600, height:'auto'}}/></div>

A série reComputer R1100 inclui um slot interno para cartão Nano SIM, projetado para instalar um cartão Nano SIM para habilitar a conectividade 4G. A tabela abaixo ilustra as diferenças de tamanho entre cartões Standard SIM, Micro SIM e Nano SIM.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/SIMsizes.PNG" style={{width:400, height:'auto'}}/></div>

:::note
A versão padrão do reComputer R1100 não inclui um módulo 4G integrado. Se a funcionalidade 4G for necessária, é preciso adquirir separadamente um módulo 4G adicional. Para mais detalhes, consulte [Esta Seção](https://wiki.seeedstudio.com/pt-br/recomputer_r1100_intro/#interfaces-e-módulos-opcionais).
:::

### Slot para SSD

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/SSD.PNG" style={{width:600, height:'auto'}}/></div>

O reComputer R1100 está equipado com um **slot NVMe M.2 2280 SSD**, suportando capacidades de armazenamento de **128GB, 256GB, 512GB e 1TB**. Este slot permite expansão de armazenamento em alta velocidade, permitindo aos usuários melhorar tanto o **desempenho** quanto a **capacidade** do sistema.  

**Nota:**  
Existem dois usos principais para SSDs:  

1. **Armazenamento de Alta Capacidade** – SSDs podem ser usados para grandes necessidades de armazenamento.  
2. **Unidade de Boot com Imagem de Sistema** – Alguns SSDs podem ser usados tanto como armazenamento de alta capacidade quanto como unidade de boot para o sistema.  

No entanto, nem todos os SSDs suportam funcionalidade de boot. Se você planeja usar um SSD como unidade de boot e não tem certeza de qual modelo comprar, recomendamos o **SSD de 1TB (SKU112990267)**, pois ele foi testado e verificado quanto à funcionalidade de boot. Isso reduz problemas de compatibilidade e minimiza custos de tentativa e erro.

### Slots Mini-PCIe no reComputer R1100

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/pci.PNG" style={{width:600, height:'auto'}}/></div>

O reComputer R1100 está equipado com **dois slots Mini-PCIe**, suportando vários protocolos de comunicação. A tabela abaixo descreve os protocolos suportados para cada slot:  

| **Slot**       | **Protocolos Suportados**   |  
|---------------|-----------------------------|  
| **Mini-PCIe 1** | 4G LTE, USB LoRa®, USB Zigbee |  
| **Mini-PCIe 2** | SPI LoRa®, USB LoRa®, USB Zigbee |  

Esses slots permitem que os usuários expandam as opções de conectividade, possibilitando a integração com módulos **4G LTE, LoRa® e Zigbee** conforme necessário.

Este dispositivo inclui duas **interfaces Mini-PCIe**: **Slot 1** e **Slot 2**.  

- O **Slot Mini-PCIe 1** está ligado ao **slot para cartão SIM** e suporta **protocolos USB**, sendo adequado para conectar módulos **4G LTE, USB LoRa® e USB Zigbee**.  
- O **Slot Mini-PCIe 2** suporta **tanto protocolos USB quanto SPI**, mas **não está conectado** ao slot para cartão SIM. Ele pode acomodar dispositivos **SPI LoRa®, USB LoRa® e USB Zigbee**.  

Esses slots fornecem opções flexíveis de expansão para vários módulos de comunicação sem fio.

### Orifício de Reset  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/reset.PNG" style={{width:200, height:'auto'}}/></div>

O reComputer R1100 possui um **Mini Push Button Switch** localizado dentro do orifício de reset. Ao pressionar esse botão com um objeto fino, o usuário pode **resetar o CM4**.  

- Quando este pino está em nível **alto**, indica que o **CM4 iniciou**.  
- Quando este pino é **forçado a nível baixo**, ele **reseta o módulo**.

### Ethernet RJ45  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/eth.PNG" style={{width:200, height:'auto'}}/></div>

O **reComputer R1100** está equipado com duas portas Ethernet:  

| Nome  | Tipo                          | Velocidades          | Suporte a PoE                |
|-------|-------------------------------|----------------------|------------------------------|
| ETH0  | Ethernet Gigabit Nativa do CM4 | 10/100/1000 Mbit/s   | Suportado (com módulo adicional) |
| ETH1  | Convertido de USB             | 10/100 Mbit/s        | Não Suportado               |

O **reComputer R1100** está equipado com duas portas Ethernet RJ45:  

- **ETH0**: Uma interface **Ethernet Gigabit nativa do CM4**, suportando velocidades de **10/100/1000 Mbit/s**. Ela pode ser atualizada com um **módulo PoE** adicional para habilitar **Power over Ethernet (PoE)** para alimentação do dispositivo.  
- **ETH1**: Uma interface **Ethernet convertida de USB**, suportando velocidades de **10/100 Mbit/s**, mas **PoE não é suportado**.

**Nota**  
Para mais detalhes sobre PoE, consulte [Esta Seção](https://wiki.seeedstudio.com/pt-br/recomputer_r1100_intro/#poe-power-over-ethernet).

### HDMI

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/display.PNG" style={{width:200, height:'auto'}}/></div>

O reComputer R1100 possui uma interface HDMI nativa do CM4, suportando saída de vídeo de até **4K@60fps**. É ideal para aplicações que exigem múltiplas telas, permitindo aos usuários enviar conteúdo para telas externas de grande porte.

### RTC  

O reComputer R1100 inclui um **circuito RTC (Relógio de Tempo Real)** com uma **bateria CR2032** pré-instalada, garantindo a cronometragem precisa mesmo durante a perda de energia.  

:::note
Para detalhes sobre testes de RTC, consulte [Esta Seção](https://wiki.seeedstudio.com/pt-br/recomputer_r1100_intro/#teste-do-relógio-de-tempo-real-rtc).
:::  

### Watchdog  

O reComputer R1100 possui um **circuito watchdog de hardware independente** que reinicia automaticamente o sistema em caso de travamento. Esse watchdog é implementado através do **RTC** e permite **tempos de alimentação flexíveis variando de 1 a 255 segundos**.  

:::note
Para detalhes sobre testes de watchdog, consulte [Esta Seção](https://wiki.seeedstudio.com/pt-br/recomputer_r/#teste-do-watchdog).
:::

## Interfaces e Módulos Opcionais  

O reComputer R1100 suporta uma **ampla gama de módulos de expansão e acessórios**, tornando-o adaptável a vários casos de uso. Se você tiver interesse em customizar o reComputer R1100, entre em contato com **odm@seeed.cc** para mais informações.  

#### Lista de Acessórios e Módulos Opcionais

Aqui está a tabela formatada para melhor legibilidade:  

| **Observação**                                     | **Item**               | **Nome do Produto**                                      | **SKU**         |
|------------------------------------------------|------------------------|----------------------------------------------------------|----------------|
| **Devem ser usados juntos para função LoRa® WAN** | Módulo LoRa®           | Módulo Gateway LoRaWAN com região opcional (SPI) - US915 | 114992969      |
|                                                |                        | Módulo Gateway LoRaWAN com região opcional (SPI) - EU868 | 114993268      |
|                                                |                        | Módulo Gateway LoRaWAN com região opcional (USB) - US915 | 114992991      |
|                                                |                        | Módulo Gateway LoRaWAN com região opcional (USB) - EU868 | 114992628      |
| **Antena LoRa®**                              | Antena LoRa®           | Kit de Antena LoRa - 868-915MHz                          | 110061501      |
| **Módulo Zigbee**                              | Módulo Zigbee         | Módulo Mini-PCIe USB Zigbee                              | 110992005      |
| **Antena Zigbee**                             | Antena Zigbee        | Kit de Antena Zigbee para reComputer R1100              | 110061641      |
| **Este acessório é necessário para função Wi-Fi** | Antena Wi-Fi/BLE     | Kit de Antena Raspberry Pi Compute Module 4             | 114992364      |
| **Antena 4G com módulo 4G para função 4G, Antena GPS com módulo 4G para função GPS** | Módulo 4G | Módulo Mini-PCIe LTE Cat 4 EC25-AFXGA - América do Norte | 113991134      |
|                                                |                        | Módulo Mini-PCIe LTE Cat 4 EC25-EUXGR - EMEA & Tailândia | 113991135      |
|                                                |                        | Módulo Mini-PCIe LTE Cat 4 EC25-AUXGR - Austrália        | 113991174      |
|                                                |                        | Módulo Mini-PCIe LTE Cat 4 EC25-EFA - Tailândia          | 113991214      |
|                                                |                        | Módulo Mini-PCIe LTE Cat 4 EC25-EMGA - Malásia           | 113991234      |
|                                                |                        | Módulo Mini-PCIe LTE Cat 4 EC25-JFA - Japão              | 113991296      |
| **Antena 4G**                                 | Antena 4G            | Kit de Antena 4G para módulo 4G                          | 110061502      |
| **Antena GPS**                                | Antena GPS           | Kit de Antena GPS para Módulo 4G EC25                    | 110061521      |
| **Chip de Criptografia**                            | TPM 2.0               | Módulo TPM 2.0 com Infineon SLB9670                      | 114993114      |
| **Armazenamento SSD**                                | Cartão SSD              | SSD NVMe M.2 2280 1TB                                     | 112990267      |
|                                                |                        | SSD Interno NVMe M.2 PCIe Gen3x4 2280 512GB              | 112990247      |
|                                                |                        | SSD Interno NVMe M.2 PCIe Gen3x4 2280 256GB              | 112990246      |
|                                                |                        | SSD Interno NVMe M.2 PCIe Gen3x4 2280 128GB              | 112990226      |
| **Este módulo precisa ser soldado na placa carrier do reComputer R1100** | PoE | Kit de Módulo PoE MQ7813T120 para reTerminal DM | 110991925 |
| **UPS**                                        | UPS                   | Módulo SuperCAP UPS LTC3350                              | 110992004      |

A placa-mãe do **reComputer R1100** possui **dois slots Mini-PCIe** com a seguinte compatibilidade:  

- O **Slot Mini-PCIe 1** oferece suporte a:  
  - **Módulo 4G** (protocolo USB)  
  - **Módulo LoRa®** (protocolo USB)  
  - **Módulo Zigbee** (protocolo USB)  

- O **Slot Mini-PCIe 2** oferece suporte a:  
  - **Módulo LoRa®** (protocolo USB & SPI)  
  - **Módulo Zigbee** (protocolo USB)  

:::note
 **Os módulos 4G e LoRa® não podem ser usados ao mesmo tempo.**  
 **Você não pode conectar dois módulos LoRa® na placa.**  

:::

Isso significa que você precisa escolher entre usar **4G ou LoRa®**, e só pode ter **um** módulo LoRa® instalado por vez.

### Wi-Fi/BLE  

O **reComputer R1100-10** é equipado com o **CM4** com uma **versão de Wi-Fi/BLE onboard**, oferecendo os mesmos parâmetros de Wi-Fi/BLE do CM4. Para especificações detalhadas, consulte o **site oficial da Raspberry Pi**.  

### Módulo 4G

A placa-mãe do **reComputer R1100** possui **dois slots Mini-PCIe**, sendo que o **Slot Mini-PCIe 1** suporta um **módulo 4G via protocolo USB**. O **módulo 4G Quectel EC25** foi totalmente testado quanto à compatibilidade com o reComputer R1100.  

:::note
Se você precisar de **funcionalidade 4G**, deverá **adquirir o módulo 4G correspondente e uma antena externa**, e seguir as instruções em [Assemble 4G/LoRa®/Zigbee Module and Antenna](https://wiki.seeedstudio.com/pt-br/recomputer_r1100_intro/recomputer_r1100_assembly_guide/#montagem-do-módulo-e-antena-4glorazigbee).
:::

### Módulo LoRa®  

Ambos os **slots Mini-PCIe** suportam **módulos LoRa® via protocolo USB**. Além disso, o **Slot Mini-PCIe 2** suporta um **módulo LoRa® usando o protocolo SPI**. O **módulo WM1302 da Seeed Studio** foi totalmente testado quanto à compatibilidade com o reComputer R1100.

:::note
Se você precisar de **funcionalidade LoRa®**, deverá **adquirir o módulo LoRa® correspondente e uma antena externa**, e seguir as instruções em [Assemble 4G/LoRa®/Zigbee Module and Antenna](https://wiki.seeedstudio.com/pt-br/recomputer_r1100_intro/recomputer_r1100_assembly_guide/#montagem-do-módulo-e-antena-4glorazigbee).
:::

### Módulo Zigbee

Os slots Mini-PCIe suportam **módulos Zigbee usando o protocolo USB**, permitindo a integração perfeita da funcionalidade Zigbee em dispositivos compatíveis. Isso possibilita comunicação e controle eficientes em redes Zigbee, aumentando a versatilidade e a conectividade do sistema. Com dois slots Mini-PCIe disponíveis para módulos Zigbee, os usuários têm flexibilidade para implementar aplicações diversas com maior confiabilidade.

:::note  
 Se você precisar de **funcionalidade Zigbee**, deverá **adquirir o módulo Zigbee correspondente e uma antena externa**, e seguir as instruções em [Assemble 4G/LoRa®/Zigbee Module and Antenna](https://wiki.seeedstudio.com/pt-br/recomputer_r1100_intro/recomputer_r1100_assembly_guide/#montagem-do-módulo-e-antena-4glorazigbee).  
:::

### PoE (Power over Ethernet)

O **reComputer R1100 é compatível com o padrão IEEE 802.3af PD (Powered Devices)** mediante a adição de um **módulo de alimentação PoE**. O **conector PoE vem pré-soldado na placa**, mas os usuários devem **desmontar o dispositivo para instalar o módulo PoE** a fim de obter funcionalidade PoE via Ethernet.  

Para orientações de desmontagem, consulte o [Guia de Desmontagem](https://wiki.seeedstudio.com/pt-br/recomputer_r1100_intro/recomputer_r1100_assembly_guide/#montagem-do-módulo-de-ups-e-poe)  

:::note  

- O **reComputer R1100 oferece suporte a alimentação PoE, mas o produto padrão não inclui um módulo PoE por padrão.**  
- **A Seeed oferece serviços de soldagem e montagem de PoE para pedidos de customização em lote.**  
- Para testes de amostra, os clientes devem **soldar e montar o módulo PoE por conta própria**. As instruções estão disponíveis em **"Assemble PoE Module"**.  

:::

### SSD (Expansão de Armazenamento)

O **reComputer R1100 suporta SSDs NVMe 2280** por meio de um **slot PCIe (J62) localizado abaixo dos dois slots Mini-PCIe na placa**.  

:::note

- A **interface PCIe do CM4 é Gen 2.0**, com **velocidade máxima teórica de 5Gbps**.  
- Se você usar um **SSD Gen 3.0 ou superior**, ele pode não atingir sua velocidade máxima.  
- **Resultados de teste do reTerminal DM mostram:**  
  - **Velocidade máxima de gravação:** 230MB/s  
  - **Velocidade máxima de leitura:** 370MB/s  
- A compatibilidade de SSD pode variar, portanto é **recomendado adquirir SSDs da lista de acessórios aprovados**.  

:::

**Cenários de Uso do SSD:**  

- **Armazenamento de Alta Capacidade** – SSDs podem ser usados para expandir o espaço de armazenamento.  
- **Unidade de Boot com Imagem do Sistema** – Alguns SSDs podem armazenar imagens de sistema e **iniciar diretamente a partir do SSD**.  

:::note
**Nem todos os SSDs suportam a funcionalidade de boot!**  
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
Para instruções de instalação, consulte [Assemble TPM 2.0 Module](https://wiki.seeedstudio.com/pt-br/recomputer_r1100_intro/recomputer_r1100_assembly_guide/#montagem-do-módulo-tpm-20)  

:::

### Módulo UPS (Fonte de Alimentação Ininterrupta)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/UPS.PNG" style={{width:600, height:'auto'}}/></div>

O **módulo UPS** do reComputer R1100 é um sistema de backup de energia baseado em **supercapacitador de 7F** que opera **em série**.  

**Como Funciona:**  

1. Posicionado entre a **fonte de alimentação DC 5V** e o **CM4**.  
2. Usa um **sinal GPIO** para notificar a **CPU** quando a **fonte de alimentação de 5V falhar**.  
3. A CPU executa um **script de emergência** antes da queda total de energia.  
4. O script executa o comando **"$ shutdown"** para um desligamento seguro do sistema.  

**Duração do Backup:**  
O **tempo de execução do UPS** depende da **carga do sistema**. Abaixo estão os resultados de teste com:  

- **CM4 (4GB RAM, 32GB eMMC, módulo Wi-Fi).**  

## Recursos Adicionais

- [Arquivo 3D do reComputer R1100](https://files.seeedstudio.com/R11/reComputer%20R1100_3D.stp)
- [Projeto Elétrico e PCB do reComputer R1100](https://files.seeedstudio.com/R11/reComputer%20R1100_schematic_design_files.zip)
- [Flyer do reComputer R1100](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer-R1100/reComputer-R1100-flyer.pdf)
- [Manual do Usuário](https://files.seeedstudio.com/R11/reComputer%20R1100%20User%20Manual-V1.0.pdf)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
