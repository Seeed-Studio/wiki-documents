---
description: Spartan_Edge_Accelerator_Board
title: Placa Aceleradora Spartan Edge
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Spartan-Edge-Accelerator-Board
sku: 102030005
last_update:
  date: 01/30/2023
  author: Eico
no_comments: false
createdAt: '2023-02-15'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Spartan-Edge-Accelerator-Board/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/Spartan-Edge-Accelerater-Board-v1.0-wiki.jpg" alt="pir" width={600} height="auto" /></p>

A Spartan Edge Accelerator Board (abreviada como SEA Board) é uma placa de desenvolvimento FPGA leve, baseada no chip Xilinx Spartan-7 e que segue o fator de forma de shield Arduino. Assim, você pode usá-la como um shield Arduino para controlar um LCD e uma câmera ou como uma placa de desenvolvimento FPGA independente. Além disso, com a ajuda do chip ESP32 integrado, a placa SEA também adiciona funções de WiFi e Bluetooth ao seu Arduino.

**Spartan-7** é o chip FPGA mais novo e mais econômico entre a família de FPGAs da Xilinx, oferecendo a melhor relação desempenho por watt da categoria.

Além disso, fornecemos APIs FPGA completas para Arduino, o que significa que usuários de Arduino podem usar as funções de FPGA sem saber nada sobre FPGA. Esta placa ampliará a capacidade do Arduino de várias maneiras, como processamento simples de imagens e aplicações de visão computacional, criptografia e descriptografia de sinais, e amostragem e processamento de sinais.

## Recursos

#### Processamento de imagem em alta velocidade

- Interface mipi e mini HDMI integradas
- Suporta câmera Raspberry Pi v1.0 (OV5640)
- Suporte máximo para transmissão de imagem a 30fps

#### Internet das Coisas criptografada

- WiFi e Bluetooth para IoT com ESP32
- Suporta AWS, Azure e outros serviços em nuvem
- Suporta algoritmo de criptografia por software

#### Múltiplas extensões de portas de E/S

- 20 portas de E/S estendidas definidas pelo usuário (modo independente)
- 10 portas de E/S estendidas definidas pelo usuário (modo shield Arduino)
- APIs FPGA completas para Arduino

#### Módulos funcionais integrados

- ADC e DAC de 8 bits
- Acelerômetro e giroscópio de 6 eixos
- 2 LEDs RGB de usuário e botões

#### Dois modos de desenvolvimento personalizados

- Modo Shield Arduino
- Modo FPGA Independente

_Observação: Os usuários podem escolher diferentes conectores de pinos de acordo com suas necessidades e soldar os pinos conforme as necessidades de desenvolvimento._

## Usuários-alvo

- Desenvolvedores Arduino
- Desenvolvedores de IoT
- Desenvolvedores de FPGA

## Casos de aplicação

- Engenharia Vivado com entrada de câmera MIPI e saída HDMI
- Caso de referência com LED onboard, DIP switch, ADC e DAC
- Caso com giroscópio onboard
- Fornece expansão GPIO/UART/ADC/DAC/RGB-LED para Arduino
- Caso de gerador de sinal (requer configuração do Arduino)
- Caso de gerador de sinal controlado por ESP32
- Uso do caso com a plataforma IoT AWS GreenGrass
- Caso de reconhecimento de cores e rastreamento de objetos
- Caso de reconhecimento gráfico (reconhecimento de triângulo, círculo e quadrado)
- Caso de reconhecimento de caracteres digitais
- Implementação do algoritmo de criptografia e descriptografia AES em FPGA
- Implementação do algoritmo PID em FPGA

_Novas aplicações serão atualizadas............._

Para mais recursos de casos, visite [esta página no Github.](https://github.com/Pillar1989)

## Especificações

<table align="center">
  <tbody>
  <tr>
    <td><h3>Parâmetro</h3></td>
    <td><h3>Valor</h3></td>
  </tr>
  <tr>
    <td><h4>FPGA</h4></td>
    <td><h4>  </h4></td>
  </tr>
  <tr>
    <td><h4>Chip FPGA</h4></td>
    <td><h4>Spartan-7 XC7S15</h4></td>
  </tr>  
  <tr>
    <td><h4>Células lógicas</h4></td>
    <td><h4>12,800</h4></td>
  </tr>
  <tr>
    <td><h4>Slices</h4></td>
    <td><h4>2000</h4></td>
  </tr>
  <tr>
    <td><h4>Flip-Flops de CLB</h4></td>
    <td><h4>16000</h4></td>
  </tr>
  <tr>
    <td><h4>RAM distribuída máx. (Kb)</h4></td>
    <td><h4>150</h4></td>
  </tr>
  <tr>
    <td><h4>Block RAM/FIFO c/ ECC (36 kb cada)</h4></td>
    <td><h4>10</h4></td>
  </tr>
    <tr>
    <td><h4>RAM distribuída máx. (Kb)</h4></td>
    <td><h4>150</h4></td>
  </tr>
  <tr>
    <td><h4>RAM de bloco total (Kb)</h4></td>
    <td><h4>360</h4></td>
  </tr>
  <tr>
    <td><h4>RAM distribuída máx. (Kb)</h4></td>
    <td><h4>150</h4></td>
  </tr>
  <tr>
    <td><h4>Blocos de gerenciamento de clock (1 MMCM + 1 PLL)</h4></td>
    <td><h4>2</h4></td>
  </tr>
  <tr>
    <td><h4>Slices DSP</h4></td>
    <td><h4>20</h4></td>
  </tr>
  <tr>
    <td><h3>Wireless</h3></td>
    <td><h4> </h4></td>
  </tr>
  <tr>
    <td><h4>Chip wireless</h4></td>
    <td><h4>Espressif ESP32-D0WDQ6</h4></td>
  </tr>
  <tr>
    <td><h4>WiFi</h4></td>
    <td><h4>802.11 b/g/n 2.4GHz</h4></td>
  </tr>
  <tr>
    <td><h4>Bluetooth</h4></td>
    <td><h4>Bluetooth 4.1 com BLE</h4></td>
  </tr>
  <tr>
    <td><h3>Periférico</h3></td>
    <td><h4>  </h4></td>
  </tr>
  <tr>
    <td><h4>Vídeo</h4></td>
    <td><h4>Mini HDMI x1</h4></td>
  </tr>
  <tr>
    <td><h4>Câmera</h4></td>
    <td><h4>Interface CSI/MIPI x1 (compatível com Raspberry Pi Camera V1 - OV5640)</h4></td>
  </tr>
  <tr>
    <td><h4>Cartão SD</h4></td>
    <td><h4>20</h4></td>
  </tr>
  <tr>
    <td><h4>Slices DSP</h4></td>
    <td><h4>Slot para cartão Micro SD/TF x1</h4></td>
  </tr>
  <tr>
    <td><h4>FPGA GPIO</h4></td>
    <td><h4>Conector de 10 pinos (IO9~IO0)</h4></td>
  </tr>
  <tr>
    <td><h4>Arduino GPIO</h4></td>
    <td><h4>Conector de 32 pinos (fator de forma Arduino)</h4></td>
  </tr>
  <tr>
    <td><h4>Grove</h4></td>
    <td><h4>Conector Grove x2 (I2C/D2)</h4></td>
  </tr>
  <tr>
    <td><h4>LED</h4></td>
    <td><h4>LED monocromático x2<br/>LED RGB x2</h4></td>
  </tr>
  <tr>
    <td><h4>Botão</h4></td>
    <td><h4>Boot x1<br/>Reset x1<br/>FPGA Reset x1<br/>Usuário x2</h4></td>
  </tr>
  <tr>
    <td><h4>Switch</h4></td>
    <td><h4>Chave de modo de alimentação x1<br/>DIP Switch de 5 canais x1</h4></td>
  </tr>
  <tr>
    <td><h3>Alimentação</h3></td>
    <td><h4> </h4></td>
  </tr>
  <tr>
    <td><h4>Tensão de operação</h4></td>
    <td><h4>5V</h4></td>
  </tr>
  <tr>
    <td><h4>Tensão de IO</h4></td>
    <td><h4>5V</h4></td>
  </tr>
  <tr>
    <td><h4>Modo de alimentação</h4></td>
    <td><h4>USB Tipo C 5V<br/>VIN 8~17V<br/>Arduino Micro USB 5V</h4></td>
  </tr>
  <tr>
    <td><h3>Outros</h3></td>
    <td><h4>  </h4></td>
  </tr>
  <tr>
    <td><h4>ADC</h4></td>
    <td><h4>ADC1173 de 8 bits</h4></td>
  </tr>
  <tr>
    <td><h4>Acelerômetro e giroscópio</h4></td>
    <td><h4>LSM6DS3TR de 6 eixos</h4></td>
  </tr>
  </tbody></table>

:::caution
A tensão de IO do shield SEA é 5V, e a tensão de IO do FPGA é 3,3V, então fizemos um divisor de tensão para tornar a tensão dos IOs compatível. A tensão de IO de 3,3V da série SAM D21 será menor que 3,3V após a divisão de tensão, o que não é suficiente para acionar o IO do FPGA. Portanto, no momento, a placa de desenvolvimento SEA só oferece suporte a placas Arduino com IO de 5V, como [Arduino UNO](https://www.seeedstudio.com/Arduino-Uno-Rev3-p-2995.html) e [Seeeduino V4.2](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html).
:::

## Visão geral de hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/Spartan-Edge-Accelerater-Board-v1.0-pin.jpg" alt="pir" width={600} height="auto" /></p>

<table align="center">
  <tbody>
  <tr>
    <td><h3>Número</h3></td>
    <td><h3>Detalhe</h3></td>
  </tr>
  <tr>
    <td><h4>1</h4></td>
    <td><h3>FPGA : XC7S15-1FTGB196C</h3></td>
  </tr>
  <tr>
    <td><h4>2</h4></td>
    <td><h4>WiFi/Bluetooth : ESP32-D0WDQ6</h4></td>
  </tr>
  <tr>
    <td><h4>3</h4></td>
    <td><h4>Acelerômetro e giroscópio de 6 eixos : LSM6DS3TR</h4></td>
  </tr>  
  <tr>
    <td><h4>4</h4></td>
    <td><h4>DAC : DAC7311IDCKR</h4></td>
  </tr>
  <tr>
    <td><h4>5</h4></td>
    <td><h4>Buck-DCDC : TPS62130</h4></td>
  </tr>
  <tr>
    <td><h4>6</h4></td>
    <td><h4>USB-para-UART : CP2102-GMR</h4></td>
  </tr>
  <tr>
    <td><h4>7</h4></td>
    <td><h4>USB : Tipo-C</h4></td>
  </tr>
  <tr>
    <td><h4>8</h4></td>
    <td><h4>Mini HDMI</h4></td>
  </tr>
  <tr>
    <td><h4>9</h4></td>
    <td><h4> Interface CSI ：Câmera MIPI (compatível com Raspberry Pi Camera V1 - OV5640)</h4></td>
  </tr>
  <tr>
    <td><h4>10</h4></td>
    <td><h4>Cabeçalho Arduino : Compatível com Arduino UNO</h4></td>
  </tr>
  <tr>
    <td><h4>11</h4></td>
    <td><h4>DIP Switchs :<br/>K1-K4 switches de usuário<br/>K5 Alterna modo de programação do FPGA<br/>->>>> JTAG : Usando a ferramenta oficial de programação da Xilinx<br/>->>>> Slave : <a href="https://github.com/Pillar1989/spartan-edge-esp32-boot" target="_blank"><span>Usando o ESP32 para programar o FPGA</span></a></h4></td>
  </tr>
  <tr>
    <td><h4>12</h4></td>
    <td><h4>Botão do ESP32 ：Boot e RST</h4></td>
  </tr>
  <tr>
    <td><h4>13</h4></td>
    <td><h4>Botão do FPGA ：USER1 USER2 FPGA_RST</h4></td>
  </tr>
  <tr>
    <td><h4>14</h4></td>
    <td><h4>LED de usuário: L1/L2/RGB1/RGB2<br/>PWR : Alimentação ligada<br/>FPGA_DONE : Acende após programar o FPGA com o esp32.</h4></td>
  </tr>
  <tr>
    <td><h4>15</h4></td>
    <td><h4>Interruptor de alimentação :<br/>USB->Alimentado por USB Tipo C (5V DC)<br/>5V->Alimentado pelo pino VIN (8~17V DC)</h4></td>
  </tr>
  <tr>
    <td><h4>16</h4></td>
    <td><h4>Modo de alimentação:<br/>OFF->Isola a alimentação do Arduino e do Shield<br/>ON->Conecta a alimentação do Arduino e do Shield</h4></td>
  </tr>
  <tr>
    <td><h4>17</h4></td>
    <td><h4>Cabeçalho de saída do DAC e entrada do ADC</h4></td>
  </tr>
  <tr>
    <td><h4>18</h4></td>
    <td><h4>FPGA IO : IO9~IO0</h4></td>
  </tr>
  <tr>
    <td><h4>19</h4></td>
    <td><h4>Interface de download JTAG do FPGA</h4></td>
  </tr>
  <tr>
    <td><h4>20</h4></td>
    <td><h4>Conector Grove : 1x I2C; 1x D2&D3</h4></td>
  </tr>
  <tr>
    <td><h4>21</h4></td>
    <td><h4>Antena de chip cerâmica</h4></td>
  </tr>
  <tr>
    <td><h4>22</h4></td>
    <td><h4>ADC : ADC1173</h4></td>
  </tr>
  <tr>
    <td><h4>23</h4></td>
    <td><h4>SPI Flash : W25Q32JVZPIG</h4></td>
  </tr>
  <tr>
    <td><h4>24</h4></td>
    <td><h4>Switch analógico ：DG2788A</h4></td>
  </tr>
  <tr>
    <td><h4>25</h4></td>
    <td><h4>LDO : XC6221B102MR</h4></td>
  </tr>
  <tr>
    <td><h4>26</h4></td>
    <td><h4>LDO : RT9013-18GB</h4></td>
  </tr>
  <tr>
    <td><h4>27</h4></td>
    <td><h4>LDO : CJ1117-3V3</h4></td>
  </tr>
  <tr>
    <td><h4>28</h4></td>
    <td><h4>Slot para cartão SD : Cartão Micro SD/TF</h4></td>
  </tr>
  </tbody></table>

## Primeiros Passos

A Spartan Edge Accelerator Board pode funcionar em dois modos:

- Modo Shield Arduino
- Modo Independente

Em resumo, ela pode funcionar como um shield Arduino para trazer recursos de FPGA e Wireless ao Arduino, e também pode funcionar como uma placa de desenvolvimento FPGA sem um Arduino.

### Modo de shield Arduino

Neste wiki, usamos o Seeeduino V4.2; você também pode usar o Arduino UNO, eles são totalmente compatíveis entre si.

#### Hardware

**Materiais necessários**

- [Seeeduino V4.2](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html) x1
- [Spartan Edge Accelerator Board](#A) x1
- [Cartão Micro SD ou cartão TF](https://www.seeedstudio.com/micro-SD-Card-Card-with-Card-Reader-32GB-Class-10-p-4082.html) x1
- [Cabo de dados USB Type C](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html) x1

**Conexão de hardware**

- Etapa 1. Insira o cartão Micro SD ou cartão TF no slot de cartão SD
- Etapa 2. Conecte a SEA Board ao Arduino
- Etapa 3. Use um dos três métodos a seguir para alimentar o sistema

<table align="center">
  <tbody>
  <tr>
    <td><h3>Porta de alimentação</h3></td>
    <td><h3>Tensão de entrada</h3></td>
    <td><h3>Posição do interruptor de alimentação</h3></td>
    <td><h3>Posição do modo de alimentação</h3></td>
  </tr>
  <tr>
    <td><h4>Alimentado pela porta USB Type C da SEA board</h4></td>
    <td><h4>5V CC</h4></td>
    <td><h4>USB</h4></td>
    <td><h4>ON</h4></td>
  </tr>
  <tr>
    <td><h4>Alimentado pela porta micro USB do Seeeduino V4.2</h4></td>
    <td><h4>5V CC</h4></td>
    <td><h4>-</h4></td>
    <td><h4>ON</h4></td>
  </tr>  
  <tr>
    <td><h4>Alimentado pela porta CC do Seeeduino V4.2</h4></td>
    <td><h4>8~17V CC</h4></td>
    <td><h4>5V</h4></td>
    <td><h4>ON</h4></td>
  </tr>
</tbody></table>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/Spartan-Edge-Accelerater-Board-v1.0-combine-2.jpg" alt="pir" width={600} height="auto" /></p>

:::caution
Você também pode alimentar a SEA board e o Arduino ao mesmo tempo, mas certifique-se de que você definiu a posição do modo de alimentação como **OFF**. Só então a alimentação do sistema será isolada e você poderá alimentar o Arduino e a SEA board separadamente.
:::

-------

#### Inicialização do ESP32 da Spartan Edge Accelerator Board

Primeiro, para trabalhar com Arduino, devemos carregar o bitstream (Lógica FPGA) do cartão SD para o FPGA (xc7s15) on‑board. A biblioteca a seguir mostrará como fazer isso via ESP32 on‑board.

uma biblioteca para Spartan Edge Accelerator Board

O objetivo desta biblioteca é carregar o bitstream (Lógica FPGA) do cartão SD para o FPGA (xc7s15) on‑board pelo ESP32 on‑board.

O ambiente de desenvolvimento de software é o [Arduino IDE](https://www.arduino.cc/en/Main/Software) com [suporte a placas ESP32](https://github.com/espressif/arduino-esp32).

Desde a versão 1.6.4, o Arduino permite a instalação de pacotes de plataforma de terceiros usando o Boards Manager. Temos pacotes disponíveis para Windows, Mac OS e Linux (32 e 64 bits).

- Instale a versão atual do Arduino IDE upstream no nível 1.8 ou posterior. A versão atual está no [site do Arduino](https://arduino.cc/en/main/software).
- Inicie o Arduino e abra a janela de Preferences.
- Insira ```https://dl.espressif.com/dl/package_esp32_index.json``` no campo _Additional Board Manager URLs_. Você pode adicionar vários URLs, separando‑os com vírgulas.
- Abra o Boards Manager no menu Tools > Board e instale a plataforma _esp32_ (e não se esqueça de selecionar sua placa ESP32 no menu Tools > Board após a instalação).
- selecione _**tool->board->DOIT ESP32 DEVKIT**_

Link de lançamento estável: `https://dl.espressif.com/dl/package_esp32_index.json`  
Link de lançamento de desenvolvimento: `https://dl.espressif.com/dl/package_esp32_dev_index.json`  
Se você quiser mais detalhes, pode clicar no [link](https://github.com/espressif/arduino-esp32)

##### Uso da biblioteca

- **1. Baixar a ESP32 Boot Library**

<p style={{textAlign: 'center'}}><a href="https://github.com/Pillar1989/spartan-edge-esp32-boot/archive/master.zip" target="_blank"><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/SD-boot/download-library-boot.png" /></a></p>

Em seguida, adicione esta biblioteca ao seu Arduino IDE.

Se você não souber como instalar a biblioteca, por favor verifique:  

 [Installing Additional Arduino Libraries](https://www.arduino.cc/en/Guide/Libraries)

 Você pode encontrar duas pastas de exemplos nesta biblioteca

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/SD-boot/example.jpg" alt="pir" width={600} height="auto" /></p>

<table align="center">
  <tbody>
  <tr>
    <td><h3>Exemplo</h3></td>
    <td><h3>Descrição</h3></td>
  </tr>
  <tr>
    <td><h4>01LoadDefaultBitstream</h4></td>
    <td><h4>Este exemplo carregará o arquivo /overlay/default.bit do cartão SD para o FPGA</h4></td>
  </tr>
  <tr>
    <td><h4>02LoadConfigBitstream</h4></td>
    <td><h4>Este exemplo lerá um arquivo no formato ini /board_config.ini no cartão SD e então carregará no FPGA o bitstream especificado pelo valor da chave overlay_on_boot.</h4></td>
  </tr>  
  </tbody></table>

- **2. Preparar o cartão SD**  
  2.1 Formate o cartão SD com o sistema de arquivos FAT16/FAT32.  

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/SD-boot/format.jpg" alt="pir" width={600} height="auto" /></p>

  2.2 Crie uma subpasta de nível superior chamada **overlay** no cartão SD.  
  2.3 Coloque seus arquivos de bitstream ou [bitstream de exemplo](https://github.com/Pillar1989/Demo_project/tree/master/spi2gpio) (devem ter a extensão .bit) na pasta **overlay**.  

:::tip
O bitstream de exemplo: extensão de GPIO controlada pela interface SPI, com suporte a ADC/DAC/RGB‑LED, veja o [código‑fonte](https://github.com/Pillar1989/Demo_project/tree/master/spi2gpio).
:::

  2.4 Se você executar o exemplo 01LoadDefaultBitstream, renomeie o arquivo de bitstream em **overlay** para **default.bit**.  

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/SD-boot/folder.jpg" alt="pir" width={600} height="auto" /></p>

  2.5 Se você executar o exemplo 02LoadConfigBitstream, coloque o [**board_config.ini**](https://github.com/Pillar1989/spartan-edge-esp32-boot/blob/master/extras/board_config.ini) na pasta raiz do cartão SD.  
  2.6 Insira o cartão SD na Spartan (Edge Accelerator) Board.  

- **3. Fazer upload do exemplo**  
  3.1 Conecte a Spartan Board ao PC através de um cabo USB Type‑C e instale o driver USB232 (chip CP2102).  
  3.2 Coloque o interruptor de alimentação (perto do slot USB Type‑C) para o lado USB para ligar a placa.  
  3.3 Abra um dos exemplos da biblioteca pelo Arduino IDE.  
  3.4 Verifique as configurações de Board & Port no Arduino IDE conforme descrito na última seção.  
  3.5 Pressione o botão 'BOOT' na Spartan Board por mais de 1 segundo para forçar o ESP32 a entrar no modo Bootloader.  
  3.6 Pressione o botão 'Upload' no Arduino IDE para fazer upload do exemplo (binário compilado) para o ESP32.  

- **4. Executar o exemplo**  
  4.1 Certifique‑se de que o DIP‑switch K5 on‑board (o último) esteja no lado Slave (ON), o que permite a programação do FPGA por outro dispositivo (MCU).  
  4.2 Pressione o botão 'RST' na Spartan Board para iniciar o exemplo.  
  4.3 Alguns segundos após a inicialização do exemplo, o LED FPGA_DONE (cor vermelha) na placa acenderá.

------

#### Exemplo de IO da Spartan Edge Accelerator Board

Em seguida, o tutorial a seguir mostrará como controlar os recursos GPIO/ADC/DAC/RGB‑LED da Spartan Edge Accelerator Board com Arduino.

- Baixe a IO Example Library:

<p style={{textAlign: 'center'}}><a href="https://github.com/Pillar1989/spartan-edge-ioex/archive/master.zip" target="_blank"><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/SD-boot/download-library-IO.png" /></a></p>

- Adicione esta biblioteca ao seu Arduino IDE. Se você não souber como instalar a biblioteca, por favor verifique:  

 [Installing Additional Arduino Libraries](https://www.arduino.cc/en/Guide/Libraries)

- Vá até a pasta `examples`, escolha qualquer exemplo, dê um duplo clique no arquivo .ino.

- Faça upload da demonstração. Se você não souber como fazer upload do código, por favor verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

### Modo Stand-alone

#### Hardware

**Materiais necessários**

- [Spartan Edge Accelerator Board](#A) x1
- [Cabo de dados USB Type C](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html) x1

Basta alimentar a Spartan Edge Accelerator Board via cabo USB Type C.

#### Software

A Spartan Edge Accelerator Board também pode funcionar como uma tradicional placa de desenvolvimento FPGA. O tutorial a seguir mostrará como usá‑la no modo stand‑alone.

Nesta seção, você aprenderá sobre os recursos do modo Project para criação de projeto, gerenciamento de arquivos‑fonte, análise de projeto, definição de restrições e gerenciamento das execuções de síntese e implementação. Isto pode ser usado como uma referência rápida.

Antes de tudo, você deve baixar a biblioteca de tutoriais do Vivado; precisaremos de alguns arquivos‑fonte.

<p style={{textAlign: 'center'}}><a href="https://github.com/swjtu-mxb/vivado-tutorial/archive/master.zip" target="_blank"><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/SD-boot/Vivado-Tutorial-Library.png" /></a></p>

- **Etapa 1: Criando um projeto**

  _Iniciando o Vivado_

  _Criando um novo projeto_

1. Depois que o Vivado abrir, selecione **Create Project** na página Getting Started.

2. Clique em **Next** no assistente New Project

3. Especifique o nome e o local do projeto (selecione “**Create project subdirectory**” para criar uma pasta para o seu projeto)

4. Clique em **Next**.

5. Selecione **RTL Project** como **Project Type** e clique em **Next**. (selecione **Do not specify sources at this time** e adicione seus arquivos logo em seguida)

   _(O Vivado Design Suite permite diferentes pontos de entrada de design dependendo dos tipos de arquivos‑fonte e das tarefas de design. Você pode escolher o tipo de projeto adequado.)_

6. Selecione o componente **xc7s15ftgb196-1** para o projeto e clique em Next, como mostrado na figura 1.

7. Clique em **Finish**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/1.png" alt="pir" width={600} height="auto" /></p>

O Vivado IDE abre o project_tutorial no layout padrão, como mostrado na figura 2.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/2.png" alt="pir" width={600} height="auto" /></p>

O **Flow Navigator** mostra claramente o processo básico de projeto.

As **Sources** são compostas por **Constraints**, **Simulation** **Sources** e **Utility** **Sources**.

O **Design Runs** cria synth_1 e impl_1 por padrão.

O **status de execução** do Vivado é exibido no canto superior direito.

- **Passo 2: Adicionar e Criar Seus Arquivos**

  *neste passo, adicionamos **test.v** , **test_pin.xdc** , **test_sim.v** em nosso projeto. Esses arquivos estão localizados em diferentes pastas de **vivado_tutorial/vivado_tutorial.srcs***

1. Clique em **Add Sources** em **PROJECT MANAGER** do **Flow Navigator** para adicionar o **arquivo RTL**.

2. Selecione **Add or create design sources** e clique em Next.

3. Clique no botão e selecione opções ou clique diretamente nas opções para adicionar ou criar arquivos, como mostrado na figura 3.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/3.png" alt="pir" width={600} height="auto" /></p>

4. Aqui, adicionamos arquivos RTL diretamente. Selecione **Add Files** e adicione o arquivo **test.v** no seu diretório, como mostrado na figura 4.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/4.png" alt="pir" width={600} height="auto" /></p>

5. Clique em **Finish**.

6. Clique em **Add Sources** em **PROJECT MANAGER** do **Flow Navigator** novamente para adicionar o **arquivo de constraints**.

7. Selecione **Add or create constraints** e clique em Next.

8. Clique em **Add Files** e adicione seu arquivo de constraints **test_pin.xdc** , como mostrado na figura 5

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/5.png" alt="pir" width={600} height="auto" /></p>

9. Clique em **Finish**.

10. Clique em **Add Sources** em **PROJECT MANAGER** do **Flow Navigator** novamente para adicionar o **arquivo de simulação**.

11. Selecione **Add or create simulation sources** e clique em Next.

12. Clique em **Add Files** e adicione seu arquivo de simulação **test_sim.v** , como mostrado na figura 6

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/6.png" alt="pir" width={600} height="auto" /></p>

13. Clique em **Finish**.

     Finalmente, o arquivo que adicionamos aparecerá em **Sources**, como mostrado na figura 7.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/7.png" alt="pir" width={600} height="auto" /></p>

- **Passo 3: Elaborar o Projeto RTL**

  O Vivado IDE inclui um ambiente de análise RTL e customização de IP. Há também várias RTL Design Rule Checks (DRCs) para examinar maneiras de melhorar o desempenho ou o consumo de energia no projeto RTL.

1. Selecione Open Elaborated Design no Flow Navigator para elaborar o projeto.

2. Certifique-se de que o menu suspenso Layout Selector na barra de ferramentas principal esteja com Default Layout selecionado. O Elaborated Design habilita várias visualizações de análise, incluindo uma RTL Netlist, Schematic e Graphical Hierarchy. As visualizações têm um recurso de seleção cruzada, que ajuda você a depurar e otimizar o RTL.

3. Explore a hierarquia lógica na janela RTL Netlist e examine o Schematic. Você pode percorrer o schematic clicando duas vezes nas células para avançar na hierarquia, ou usando comandos como Expand Cone ou Expand/Collapse no menu pop-up do Schematic.

4. Selecione qualquer instância lógica no Schematic e clique com o botão direito para selecionar os comandos **Go to Source** ou **Go to Definition**.

5. Clique na janela Messages na parte inferior do Vivado IDE e examine as mensagens.

6. Clique no botão **Collapse All** na barra de ferramentas de Messages.

7. Expanda o Elaborated Design e as mensagens, como mostrado na figura 8.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/8.png" alt="pir" width={600} height="auto" /></p>

8. Clique em um dos links e o Text Editor abre o arquivo-fonte RTL com a linha relevante destacada.
9. Feche as janelas do Text Editor.
10. Feche o Elaborated Design clicando no **X** no lado direito do banner da janela Elaborated Design e clique em OK para confirmar.

- **Passo 4: Usando o IP Catalog**

  O Xilinx IP Catalog fornece acesso aos recursos de configuração e geração de IP do Vivado. Você pode classificar e pesquisar o Catalog de várias maneiras. O IP pode ser customizado, gerado e instanciado.

1. Clique no botão **IP Catalog** no Flow Navigator, em Project Manager.

2. Navegue pelo IP Catalog para examinar as várias categorias e capacidades de filtragem de IP.

3. Escolha o IP correspondente e realize customização nativa e configuração do IP dentro da ferramenta e selecione **OK**

4. Feche a aba do IP Catalog clicando no X na aba da janela.

- **Passo 5: Executar a Simulação Comportamental**

  O Vivado IDE integra o Vivado Simulator, que permite adicionar e gerenciar fontes de simulação no projeto. Você pode configurar opções de simulação e criar e gerenciar conjuntos de fontes de simulação. Você pode executar simulação comportamental em fontes RTL antes da síntese.

1. No Flow Navigator, em Project Manager, clique no comando Settings. A caixa de diálogo Settings é aberta com Project Settings na parte superior e Tool Settings abaixo disso, como mostrado na figura 9.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/9.png" alt="pir" width={600} height="auto" /></p>

2. Examine as configurações disponíveis na página **Simulation** e clique em **Cancel** para fechar a caixa de diálogo.
3. Clique no comando **Run Simulation** no Flow Navigator e, em seguida, clique em **Run Behaviora Simulation** no submenu, como mostrado na figura 10.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/10.png" alt="pir" width={600} height="auto" /></p>

4. Arraste a barra para a esquerda e use essas ferramentas para dar zoom in ou zoom out para ver a imagem apropriada, como mostrado nas figuras 11 e 12.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/11.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/12.png" alt="pir" width={600} height="auto" /></p>

5. Clique em **X** no canto superior direito da figura 13 e clique em **OK** para fechar a SIMULATION.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/13.png" alt="pir" width={600} height="auto" /></p>

- **Passo 6: Revisar as Configurações do Design Run**

  Design runs são uma maneira de configurar e armazenar as muitas opções disponíveis nas diferentes etapas do processo de síntese e implementação. Você pode configurar essas opções e salvar as configurações como estratégias a serem usadas em execuções futuras.

1. No Flow Navigator, em Project Manager, clique no comando **Settings**.

2. Selecione a página **Synthesis** em Project Settings. Para uma descrição completa dessas opções, consulte o _Vivado Design Suite User Guide: Synthesis_([UG901](https://www.xilinx.com/support/documentation/sw_manuals/xilinx2018_3/ug901-vivado-synthesis.pdf)).

3. Selecione a página **Implementation** em Project Settings. Para uma descrição completa dessas opções, consulte o _Vivado Design Suite User Guide: Implementation_([UG904](https://www.xilinx.com/support/documentation/sw_manuals/xilinx2018_3/ug904-vivado-implementation.pdf )).

- **Passo 7: Sintetizar e Implementar o Projeto**

  Após configurar as opções de run de síntese e implementação, você pode **run synthesis** e **run implementation** em **Design Runs** ou clicar no botão ou clicar nos botões correspondentes no **Flow Navigator** para fazer isso. O **status de execução** do Vivado é exibido no canto superior direito enquanto estiver sintetizando e implementando.

​ Para este tutorial, executaremos essas etapas em Design Runs.

1. Clique com o botão direito em syth_1 e selecione **Launch Runs**, como mostrado na figura 14.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/14.png" alt="pir" width={600} height="auto" /></p>

2. Clique em ok e o status de execução é exibido no canto superior direito, como mostrado na figura 15.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/15.png" alt="pir" width={600} height="auto" /></p>

3. Clique em **Open Synthesized Design** para mais projeto e análise. Você pode ver **Report Timing Summary** , **Report Utilization** e outros, como mostrado na figura 16.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/16.png" alt="pir" width={600} height="auto" /></p>

4. Execute Implementation da mesma forma, como mostrado na figura 17.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/17.png" alt="pir" width={600} height="auto" /></p>

5. Clique em **Open implemented Design** para ver relatórios após a implementação

- **Passo 8: Gerar um Arquivo Bitstream**

  Após **Implementing the Design,** podemos ver synthesis e implement Complete em **Design Runs**, como mostrado na figura 18.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/18.png" alt="pir" width={600} height="auto" /></p>

 Clique em **Generate Bitstream** no Flow Navigator.

- **Passo 9: Baixar o arquivo**

  Após **Generate Bitstream,** você tem duas maneiras de carregar o arquivo para o FPGA.

  Você pode usar a interface JTAG (no canto superior direito da figura 19) para carregar o arquivo bit no FPGA no Vivado, ou usar o ESP32 (no canto inferior direito da figura 19) para carregar o arquivo bit no FPGA.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/19.png" alt="pir" width={600} height="auto" /></p>

  **Siga as etapas abaixo para carregar o bitstream no FPGA através da interface JTAG**

1. Ligue a placa e conecte o [Platform Cable USB II](https://www.xilinx.com/products/boards-and-kits/hw-usb-ii-g.html)  (ou cabo compatível).

2. Clique em **Open Target** e **Auto Connect** no Flow Navigator.

3. Depois de conectar à placa com sucesso, clique em **Program Device**, escolha o arquivo bit e clique em **Program**, como mostrado na figura 20.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/img/stand-alone/20.png" alt="pir" width={600} height="auto" /></p>

1. Após baixar o arquivo bit, o LED **FPGA**_**DONE** acenderá.

   *Neste projeto, se você pressionar qualquer tecla ou ambas (**USER1** e **USER2**), o **LED L1** apagará.*

## Visualizador Online do Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/res/Spartan Edge Accelerator Board v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[PDF]** [Spartan-7 FPGAs Datasheet](https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/res/Spartan-7%20FPGAs%20Data%20Sheet.pdf)
- **[PDF]** [ESP32 Datasheet](https://files.seeedstudio.com/wiki/Spartan-Edge-Accelerator-Board/res/ESP32-datasheet.pdf)
- **[PDF]** [Spartan-Edge-Accelerator-Board Eagle File](https://github.com/SeeedDocument/Spartan-Edge-Accelerator-Board/tree/master/res/Spartan%20Edge%20Accelerator%20Board%20v1.0/202002626_Spartan%20Edge%20Accelerator%20Board%20v1.0_SCH%20%26%20PCB)

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte e garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
