---
description: BLE Carbon
title: BLE Carbon
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /BLE_Carbon
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-02'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/BLE_Carbon/
---

![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/BLE-Carbon/img/cover.png)

O BLE Carbon é um esforço conjunto da 96Boards e da Seeed, com o objetivo de fornecer soluções BLE econômicas e compactas para projetos de IoT.

A 96Boards é produzida pela Linaro, uma organização sem fins lucrativos cofinanciada por empresas famosas, incluindo ARM, IBM, Samsung, ST-Ericsson e TI. É a primeira especificação aberta a definir uma plataforma para a oferta de placas Cortex-A de 32 bits e 64 bits compatíveis, de baixo custo e pequeno formato, de diversos fornecedores de SoC ARM. Ao padronizar os barramentos de expansão para periféricos de E/S, display e câmeras, ela permite que o ecossistema de hardware desenvolva uma gama de produtos adicionais compatíveis que funcionarão em qualquer produto 96Boards durante todo o ciclo de vida da plataforma.

BLE Carbon é o tipo de placa que usa a plataforma de software da 96Boards enquanto o hardware é da Seeed, e também utiliza a solução de bluetooth da Nordic. Com a especificação aberta amplamente utilizada e o forte histórico de fabricação da 96Boards e da Seeed, o BLE Carbon deve ser uma das melhores soluções BLE para projetos de IoT.

A Carbon vem pré-instalada com Zephyr. Quando futuros sistemas operacionais estiverem disponíveis, você poderá consultar a página de download para mais sistemas operacionais e aplicações.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/BLE-Carbon-p-2710.html)

## Recursos

### Recursos do microcontrolador
- STM32F401RET6 em encapsulamento LQFP64
- CPU ARM? Cortex?-M4 de 32 bits com FPU
- Frequência máxima da CPU de 84 MHz
- VDD de 1,7 V a 3,6 V
- 512 KB de Flash
- 96 KB de SRAM
- GPIO (50) com capacidade de interrupção externa
- ADC de 12 bits com 16 canais
- RTC
- Timer de controle avançado
- Timers de uso geral (7)
- Timers watchdog (2)
- USART/UART (4)
- I2C (3)
- SPI (3)
- SDIO
- USB 2.0 OTG FS

### Recursos da placa
- Microcontrolador STM32F401 com 512kB de Flash, 96kB de RAM
- Alimentação USB com proteção por fusível
- 6 LEDs
  - USR1, USR2, BT, PWR, RX, TX
- Dois botões de pressão
  - USR e RESET
- Conectores de depuração SWD
- Antena de chip integrada na placa
- Tensão de trabalho de 3,3 V
- Conector de baixa velocidade de 2x15 pinos com passo de 2,54 mm
- Totalmente compatível com os padrões de IoT da 96Boards

## Especificações

|Parâmetro|Valor|
|------------|------|
|Chipset |STM32F401|
|BT |nRF51822|
|Velocidade de clock| Frequência máxima da CPU de 84MHz|
|Flash| 512KB|
|SRAM |96KB|
|Tensão de saída digital |3,3V|
|Pinos analógicos| 6|
|Tensão de entrada analógica| 0~3,3V|
|Dimensões| 60x30mm|

## Visão geral de hardware

![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/BLE-Carbon/img/hw.png)

1.**OTG** - Pode ser usado como USB OTG/HOST e dispositivo USB, também usado para USB DFU.

2.**LEDs indicadores**

- *USR1* - LED controlado pelo usuário, conectado ao PD2
- *USR2* - LED controlado pelo usuário, conectado ao PA15
- *BT* - Indicador de Bluetooth, conectado ao PB5. Este LED acenderá quando conectado a um dispositivo.
- *PWR* - Acende quando o dispositivo é ligado.
- *RX* - Indicador de FT230X - RX
- *TX* - Indicador de FT230X - TX

3.**UART** - para depuração ou atualização de firmware, conectado ao USART1.

4.**Botão de Reset** - Pressione para reiniciar o sistema

5.**Botão BOOT0** - botão de usuário ou seleção do modo de boot, conectado ao PC12, padrão em nível baixo.

6.**UART e SWD para depuração (tanto STM32F401 quanto nRF51822)**

7.**Antena de chip BT**

8.**Pinos** - Detalhes consulte o mapa de pinos

9.**IC1** - FT230X

A.**IC2** - STM32F401

B.**IC3** - nRF51822

## Mapa de pinos

[![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/BLE-Carbon/img/pinout.png)](https://files.seeedstudio.com/wiki/BLE-Carbon/img/pinout.png)

:::note
    Clique para ver a imagem maior.
:::
## Conexão entre nRF51822 e STM32F401

Se você quiser usar um BLE SoftDevice em aplicações que não podem ser portadas para nRF5, por exemplo, porque usam periféricos específicos ou precisam de mais recursos como RAM, memória flash ou velocidade de CPU, você deve considerar o uso de serialização.

### Conexão de hardware
Conexão de hardware conforme abaixo:

|STM32F401 |nRF51822| função |
|----------------|------------|-------------|
|PA4 |P0.25 |SPI_CSN |
|PB1 |P0.28 |SPI_REQ |
|PB0 |P0.29 |SPI_RDY |
|PA7 |P0.00 |SPI_MOSI |
|PA6 |P0.30 |SPI_MISO |
|PA5 |P0.07 |SPI_CLK |
|PB2 |SWDIO/NRESET| RESET |

### Configuração de software de serialização
Prepare a placa de conectividade executando os seguintes passos:

1. Conecte a placa ao computador e certifique-se de que o fio RESET esteja desconectado.
2. Programe o SoftDevice na placa de conectividade. Veja Programming SoftDevices para instruções.
3. No Keil, abra o Connectivity Example para a camada de transporte físico que você deseja usar: \examples\ble_central_and_peripheral\ble_connectivity\board\ser_s13x_spi
4.  Compile a aplicação e faça o download do arquivo .hex criado para a placa de conectividade.

Para mais detalhes, consulte [Running a serialized application](http://infocenter.nordicsemi.com/index.jsp?topic=/com.nordic.infocenter.s130.api.v2.0.0/index.html)

## Como atualizar o firmware

### Procedimentos de demonstração DfuSe
#### Como baixar um arquivo DFU

1. Pressione o botão BOOT0 e conecte o OTG ao seu PC.
2. Execute o aplicativo **DfuSe demonstration** (Start -> All Programs -> STMicroelectronics -> DfuSe Demonstration).
3. Clique no botão **Choose** (Item 1 na figura a seguir) para selecionar um arquivo DFU. As informações exibidas, como VID, PID, Versão e número de alvo, são lidas do arquivo DFU.
4. Marque a caixa de seleção **Optimize upgrade duration** para ignorar blocos FF durante o upload.
5. Marque a caixa de seleção **Verify after download** se você quiser iniciar o processo de verificação após o download dos dados.
6. Clique no botão **Upgrade** (Item 2 na figura a seguir) para começar a atualizar o conteúdo do arquivo na memória.
7. Clique no botão **Verify** (Item 3 na figura a seguir) para verificar se os dados foram baixados com sucesso.

![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/BLE-Carbon/img/6_1.png)

#### Como gerar arquivos DFU a partir de arquivos S19/Hex/Bin

1. Execute o aplicativo **DFU File Manager** (Start -> All Programs -> STMicroelectronics -> DFU File Manager).
2. Selecione o item **I want to GENERATE a DFU file from S19, HEX or BIN files** na caixa de diálogo **Want to do** e então clique em **OK**.
3. Para criar a imagem a partir de um arquivo S19 ou Hex, clique no botão **S19 or Hex** e selecione seu arquivo, uma imagem DFU será criada para cada arquivo adicionado.
4. Para criar o arquivo DFU, clique em **Generate**.

:::note
     Para mais detalhes, leia o manual do usuário ([UM0412](http://www.st.com/content/ccc/resource/technical/document/user_manual/3f/61/72/ff/c5/5a/4a/7b/CD00155676.pdf/files/CD00155676.pdf/jcr:content/translations/en.CD00155676.pdf)) da ST.
:::
### 6.2 Baixar um arquivo hex via UART

1. Pressione o botão BOOT0 e conecte o UART ao seu PC.
2. Execute o aplicativo **Demonstrator GUI** (Start -> All Programs -> STMicroelectronics -> Demonstrator GUI).
3. Siga os passos abaixo para baixar o firmware.

![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/BLE-Carbon/img/6_2_1.png)

![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/BLE-Carbon/img/6_2_2.png)

![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/BLE-Carbon/img/6_2_3.png)

![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/BLE-Carbon/img/6_2_4.png)

![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/BLE-Carbon/img/6_2_5.png)

## Visualizador de esquemático online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/BLE-Carbon/res/eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- [Esquemáticos em Eagle](https://files.seeedstudio.com/wiki/BLE-Carbon/res/eagle.zip)
- [Esquemáticos em PDF](https://files.seeedstudio.com/wiki/BLE-Carbon/res/BLE%20Carbon%20v1.0_SCH.pdf)

## Suporte técnico e discussão de produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
