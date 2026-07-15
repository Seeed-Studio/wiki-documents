---
title: Wio LTE Cat.1
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Wio_LTE_Cat.1/
slug: /Wio_LTE_Cat.1
sku: 102991022, 102991024, 102990925, 102990924, 102990923, 102990837, 102991023, 102991021
last_update:
  date: 01/11/2022
  author: gunengyu
createdAt: '2023-01-12'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Wio_LTE_Cat.1/
---

![](https://files.seeedstudio.com/wiki/Wio_LTE/img/wio_lte_v1.3.jpg)

Wio Tracker (Wireless Input Output) é um gateway de código aberto que possibilita soluções de IoT com GPS mais rápidas. São placas de desenvolvimento compatíveis com Arduino e Grove que ajudam você a rastrear praticamente qualquer coisa em movimento no planeta e depois enviar esses dados sem fio. O Wio LTE é a versão LTE do Wio Tracker, então agora temos 2 versões do Wio Tracker e a versão LTE (4G) trará algumas diferenças.

Há três principais atualizações ao comparar o Wio LTE com a versão 2G. Primeiro, pelo nome já sabemos que o Wio LTE suporta comunicação LTE (4G), que é muito mais rápida e popular que 2G. Segundo, o Wio LTE suporta ao todo 4 diferentes GNSS – GPS, Beidou, GLONSS e Galileo, e o QZSS também é suportado como bônus. Com mais suporte a GNSS, o posicionamento será mais preciso. Terceiro, o MCU do Wio LTE foi atualizado para STM32, que é baseado em Cortex-M4, tornando o Wio LTE 5 vezes mais rápido do que a versão 2G. Além disso, a flash e a RAM também foram elevadas para 1Mbytes e 192+4k bytes.

Além das três principais atualizações, a versão LTE é quase igual à versão 2G. **Se o seu projeto estiver usando a versão 2G, será muito fácil atualizar para a versão LTE porque nós preparamos uma biblioteca de comandos AT transplantável e expansível.** A compatibilidade com Arduino e Grove permite um desenvolvimento mais rápido graças às inúmeras bibliotecas e a uma comunidade colaborativa. A biblioteca de GPS que estará disponível com a placa não se limita apenas ao Arduino – ela pode funcionar igualmente bem se você optar por desenvolver em C/C++. Com as 6 conexões Grove onboard, os desenvolvedores podem criar qualquer combinação de nossos mais de 180 sensores e atuadores para construir projetos e resolver qualquer problema. Simplificar as fases de prototipagem e desenvolvimento é o nosso objetivo.

O Wio LTE é muito adequado para projetos ao ar livre em que o dispositivo pode se conectar aos satélites de GPS e fornecer a localização em tempo real do item ao qual está anexado. O LTE oferece uma largura de banda ampla que permite uma interação muito mais rápida entre o usuário e o dispositivo. Se você pretende criar projetos como um serviço de compartilhamento de bicicletas, rastreamento de animais de estimação ou gado, localização de um veículo ou até mesmo manter o controle de uma criança, o Wio LTE é a melhor solução.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/D6DX5P9ncrc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

:::caution
    Sempre conecte uma bateria Lipo de 3,7 V caso o fornecimento de energia via USB não seja suficiente.
:::

|Nome do Produto | Como Comprar|
|----------------|-----------|
|Wio LTE Versão JP|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Wio-LTE-JP-Version-v1-3-4G-Cat-1-p-3044.html)|
|Wio LTE Versão AU|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Wio-LTE-AU-Version-v1-3-4G-Cat-1-GNSS-p-2947.html)|
|Wio LTE Versão EU|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Wio-LTE-EU-Version-v1-3-4G-Cat-1-GNSS-p-3212.html)|
|Wio LTE Versão US|[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Wio-LTE-US-Version-v1-3-4G-Cat-1-p-4523.html)|

## Versão

| Versão do Produto | Alterações                               | Data de Lançamento |
|-----------------|------------------------------------------|---------------|
| Wio Lte v1.0    | Inicial                                  | 24 Jul, 2017  |
| Wio Lte v1.1    | Otimização dos métodos de produção       | 18 Out, 2017  |
| Wio Lte v1.3    | Mudança de hardware com melhor fonte de alimentação | 9 Mar, 2018 |
| Wio Lte v1.3b   | Ajuste do layout                         | 29 Mar, 2018|

**Notas de Lançamento do Wio Lte v1.3**

Desde o lançamento deste produto, recebemos muitos feedbacks e sugestões dos usuários. Decidimos melhorar ainda mais este produto com base no feedback dos usuários, e é por isso que você vê aqui o Wio Lte v1.3.

Fizemos algumas alterações no circuito de alimentação:

- Alterar o PMIC (Power manage IC) para MP2617, que é mais estável.
- Remover o Módulo DC-DC que alimenta o Módulo Lte; em vez disso, nesta versão alimentamos o Módulo Lte pelo circuito principal ou pela bateria Lipo.
- Adicionar dois capacitores de 100uf para tornar a alimentação mais estável.

Como você pode ver nas imagens abaixo.

                      v1.3                                  v1.0

![](https://files.seeedstudio.com/wiki/Wio_LTE/img/wio_ver1.jpg)
![](https://files.seeedstudio.com/wiki/Wio_LTE/img/wio_ver2.jpg)

Como o circuito de alimentação mudou, a lógica do indicador de alimentação também mudou.

Estado do LED | Estado da Bateria
-----|----
LED ligado| Carregando
LED desligado | Carregamento concluído
LED piscando | Erro de bateria. (Incluindo estado sem bateria)

Além disso, a lógica da **Tecla de Reset** também mudou.

Operação | Faixa de Reset
---|---
Manter o botão de reset pressionado por um curto período (até 2 segundos) | Reset do MCU / o Módulo Lte não será resetado
Manter o botão de reset pressionado por um longo período (mais de 10 segundos)| Toda a placa será resetada

## Recursos

- Conectividade LTE de baixo custo e baixo consumo otimizada para aplicações de IoT de banda larga
- LTE e UMTS/HSPA+ em todo o mundo
- Unidade de gerenciamento de energia (PMU) embarcada com consumo de corrente ultrabaixo em modo deep-sleep
- GPS/BeiDou/GLONASS/Galileo e QZSS
- Biblioteca de Comandos AT transplantável e expansível para Wio Tracker
- Compatível com Arduino IDE
- 6 conectores Grove
- Soquete 2 em 1 para Nano SIM e cartão TF

## Especificação

| Item            | Função                | Valor                                                                           |
| --------------- | ---------------------- | ------------------------------------------------------------------------------- |
| Microcontrolador | Processador            | STM32F405RG, ARM 32-bit Cortex-M4, 168MHZ                                       |
|                 | Memória Flash          | 1MB                                                                             |
|                 | SRAM                   | 192+4KB                                                                         |
|                 | Tensão de Operação     | 3,3V                                                                            |
|                 | Corrente DC por pino de E/S | 7 mA                                                                      |
| LTE             | LTE Cat.1              | Comando AT: 3GPP TS27.007 e Comandos AT aprimorados                             |
|                 | Dados                  | LTE-FDD Máx 10Mbps(DL) Máx 5Mbps (UL)                                           |
|                 |                        | Protocolo: TCP/UDP/PPP/FTP/HTTP/NTP/PING/QMI/HTTPS*/SMTP*/MMS*/FTPS*/SMTPS*/SSL* |
|                 | SMS                    | Mensagem ponto a ponto, transmissão de SMS, modo Texto e PDU                    |
|                 | Áudio                  | Cancelamento de eco, eliminação de ruído                                        |
| GNSS            | Sistema                | GPS/BeiDou/GLONASS/Galileo/QZSS                                                 |
|                 | Precisão               | &lt;2.5 m CEP                                                                      |
| Peripheral      | Grove                  | 2 x Porta Digital                                                               |
|                 |                        | 2 x Porta Analógica                                                             |
|                 |                        | 1 x UART                                                                        |
|                 |                        | 1 x I2C                                                                         |
|                 | Antena                 | 2 x Antena LTE                                                                  |
|                 |                        | 1 x Antena GPS                                                                  |
|                 | Outros                 | USB: Fonte de alimentação e upload de programa                                  |
|                 |                        | Conector JST 1.0 para bateria                                                   |
|                 |                        | Conector de Áudio 3,5 mm                                                        |
|                 |                        | Botão de Reset do MCU, Botão de Boot (DFU) do MCU, Botão de Energia do EC21     |
|                 |                        | 1 x LED RGB de Usuário SK6812                                                   |
|                 |                        | Soquete 2 em 1 para Nano SIM e cartão TF                                        |
| Size            | Comprimento            | 54,7mm                                                                          |
|                 | Largura                | 48,2mm                                                                          |
| Weight                  |                 | 18g                                                                                |  |

## Consumo de Energia

| Status                                                                                 | Corrente                         |Tensão                         |
| -------------------------------------------------------------------------------------- | -------------------------------- |--------------------------------|
| Inicialização normal (momento da inicialização)                                       | 700mA                            |5V                              |
| Após a inicialização (modo IDLE)                                                      | 300mA                            |5V                              |  
| Após a inicialização, o estado normal de comunicação (função de transmissão de rede)  | Cerca de 600mA, o pico atinge 2A |5V                              |  
| Chamada e SMS (sinal melhor)                                                          | 100-300mA                        |5V                              |  
| Modo deep sleep, desligar todas as funções, requer despertar externo (acordar apenas por Reset) | 300uA                            |4,2V                            |  
| Modo Deep Sleep do MCU, pino de despertar conectado ao módulo, despertar via módulo   | acima de 300uA (requer testes)   |4,2V                            |  

:::note
    Existem duas condições de funcionamento. Uma é com alimentação de 5V pela porta USB. A outra é com alimentação por bateria de 4,2 V.   
:::

## Ideias de Aplicação

- Pedômetro
- Esqui inteligente
- Bicicleta ou moto inteligente
- Bicicleta compartilhada
- Máquina de rastreamento de animais de estimação
- Relógio localizador infantil
- Relógio inteligente
- Sistema de localização de transporte
- Sistema de localização de veículos
- Segurança de propriedade

:::tip
    Use módulos Grove para expandir sua aplicação. Há 6 conectores Grove na placa. Se esta é a primeira vez que você ouve falar de Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/) para mais detalhes. Em resumo, Groves são centenas de sensores em estilo padronizado, que consistem em sensores, atuadores, displays e também comunicação.
:::

## Visão Geral do Hardware

![](https://files.seeedstudio.com/wiki/Wio_Tracker_LTE/img/wio_tracker_lte_v1._top.png)

![](https://files.seeedstudio.com/wiki/Wio_Tracker_LTE/img/wio_tracker_lte_v1_buttom.png)

:::tip
    Se você quiser usar o conector Grove on-board, use digitalWrite(B10, HIGH) para ligar 3V3_B, exceto D38 que é alimentado por padrão. Caso contrário, você não conseguirá fornecer energia aos módulos Grove.
:::
**Módulo EC21**

EC21 contém 9 variantes: EC21-E, EC21-A, EC21-V, EC21-AUT, EC21-AUV, EC21-AU, EC21-KL, EC21-J e EC21-CEL. Isso o torna retrocompatível com redes EDGE e GSM/GPRS existentes, garantindo que possa migrar facilmente de LTE para redes 2G ou 3G.

E **EC21-A** é o que estamos usando no WIO Tracker - LTE, que é compatível com cartão SIM da AT&T e T-mobile. Se você quiser personalizar o Módulo EC21 para outra região, fique à vontade para nos enviar um e-mail: fae@seeed.cc

<div>
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}\n.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}\n.tg .tg-yw4l{vertical-align:top}\n" }} />
  <table className="tg">
    <tbody><tr>
        <th className="tg-031e" colSpan={2}>Frequência</th>
        <th className="tg-yw4l">EC21-E</th>
        <th className="tg-yw4l">EC21-A</th>
        <th className="tg-yw4l">EC21-V</th>
        <th className="tg-yw4l">EC21-AUT</th>
      </tr>
      <tr>
        <td className="tg-031e" rowSpan={2}>LTE</td>
        <td className="tg-031e">FDD-LTE</td>
        <td className="tg-yw4l">B1／B3／B5／B7／B8／B20</td>
        <td className="tg-yw4l">B2／B4／B12</td>
        <td className="tg-yw4l">B4／B13</td>
        <td className="tg-yw4l">B1／B3／B5／B7／B28</td>
      </tr>
      <tr>
        <td className="tg-031e">TDD-LTE</td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l"></td>
      </tr>
      <tr>
        <td className="tg-031e">3G</td>
        <td className="tg-031e">WCDMA</td>
        <td className="tg-yw4l">B1／B5／B8</td>
        <td className="tg-yw4l">B2／B4／B5</td>
        <td className="tg-yw4l" />
        <td className="tg-yw4l">B1／B5</td>
      </tr>
      <tr>
        <td className="tg-031e" colSpan={2}>GSM/EDGE</td>
        <td className="tg-yw4l">B3／B8</td>
        <td className="tg-yw4l" />
        <td className="tg-yw4l" />
        <td className="tg-yw4l" />
      </tr>
      <tr>
        <td className="tg-031e" colSpan={2}>GNSS Embutido</td>
        <td className="tg-yw4l">Opcional</td>
        <td className="tg-yw4l">Opcional</td>
        <td className="tg-yw4l">Opcional</td>
        <td className="tg-yw4l">Opcional</td>
      </tr>
      <tr>
        <td className="tg-yw4l" colSpan={2}>Interface Wi-Fi</td>
        <td className="tg-yw4l">Y</td>
        <td className="tg-yw4l">Y</td>
        <td className="tg-yw4l">Y</td>
        <td className="tg-yw4l">Y</td>
      </tr>
      <tr>
        <td className="tg-yw4l" colSpan={2}>Região</td>
        <td className="tg-yw4l">EMEA, Coreia, Tailândia, Índia</td>
        <td className="tg-yw4l">América do Norte</td>
        <td className="tg-yw4l">América do Norte</td>
        <td className="tg-yw4l">Austrália</td>
      </tr>
      <tr>
        <td className="tg-yw4l" colSpan={2}>Certificação</td>
        <td className="tg-yw4l">CE/ GCF/ Vodafone</td>
        <td className="tg-yw4l">FCC/ PTCRB/ AT&amp;T/ IC/ ROGERS</td>
        <td className="tg-yw4l">FCC/ GCF/ Verizon</td>
        <td className="tg-yw4l">RCM/ Telstra</td>
      </tr>
    </tbody></table>
  <br />
</div>

<div>
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}\n.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}\n.tg .tg-yw4l{vertical-align:top}\n" }} />
  <table className="tg">
    <tbody><tr>
        <th className="tg-031e" colSpan={2}>Frequência</th>
        <th className="tg-yw4l">EC21-AUV</th>
        <th className="tg-yw4l">EC21-AU</th>
        <th className="tg-yw4l">EC21-KL</th>
        <th className="tg-yw4l">EC21-J</th>
        <th className="tg-yw4l">EC20-CEL</th>
      </tr>
      <tr>
        <td className="tg-031e" rowSpan={2}>LTE</td>
        <td className="tg-031e">FDD-LTE</td>
        <td className="tg-yw4l">B1／B3／B5／B8／B28</td>
        <td className="tg-yw4l">B1／B2①／B3／B4／B5／B7／B8／B28</td>
        <td className="tg-yw4l">B1／B3／B5／B7／B8</td>
        <td className="tg-yw4l">B1／B3／B8／B18／B19／B26</td>
        <td className="tg-yw4l">B1／B3／B5</td>
      </tr>
      <tr>
        <td className="tg-031e">TDD-LTE</td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l">B40</td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l"></td>
      </tr>
      <tr>
        <td className="tg-031e">3G</td>
        <td className="tg-031e">WCDMA</td>
        <td className="tg-yw4l">B1／B5／B8</td>
        <td className="tg-yw4l">B1／B2／B5／B8</td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l"></td>
      </tr>
      <tr>
        <td className="tg-031e" colSpan={2}>GSM/EDGE</td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l">Quad-band</td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l"></td>
        <td className="tg-yw4l"></td>
      </tr>
      <tr>
        <td className="tg-031e" colSpan={2}>GNSS Embutido</td>
        <td className="tg-yw4l">N<br></br>   </td>
        <td className="tg-yw4l">Opcional<br></br>   </td>
        <td className="tg-yw4l">N<br></br>   </td>
        <td className="tg-yw4l">N<br></br>   </td>
        <td className="tg-yw4l">N</td>
      </tr>
      <tr>
        <td className="tg-yw4l" colSpan={2}>Interface Wi-Fi</td>
        <td className="tg-yw4l">Y</td>
        <td className="tg-yw4l">Y</td>
        <td className="tg-yw4l">Y</td>
        <td className="tg-yw4l">Y</td>
        <td className="tg-yw4l">Y</td>
      </tr>
      <tr>
        <td className="tg-yw4l" colSpan={2}>Região</td>
        <td className="tg-yw4l">Vodafone Austrália</td>
        <td className="tg-yw4l">América do Sul, ANZ, Taiwan</td>
        <td className="tg-yw4l">Coreia</td>
        <td className="tg-yw4l">Japão</td>
        <td className="tg-yw4l">China Telecom</td>
      </tr>
      <tr>
        <td className="tg-yw4l" colSpan={2}>Certificação</td>
        <td className="tg-yw4l">RCM</td>
        <td className="tg-yw4l">RCM/ Anatel/ NCC</td>
        <td className="tg-yw4l">KC/ SKT/KT＊/ LGU+＊</td>
        <td className="tg-yw4l">JATE/ TELEC/ DOCOMO＊</td>
        <td className="tg-yw4l">CCC/ SRRC/ NAL</td>
      </tr>
    </tbody></table>
</div>

## Primeiros Passos

### Instalar driver USB

- **Usuários Windows**: A maioria das versões do Windows não carregará automaticamente o driver interno para portas COM USB. Você terá que baixar o driver USB da ST, [STM32 Virtual COM Port Driver](https://www.st.com/en/development-tools/stsw-stm32102.html#get-software).

- **Usuários de Mac OS X e Chromebook**: A placa apenas será conectada e funcionará, sem drivers!

### Alterar driver DFU

**Para usuários de Windows**:

- Etapa 1. Mantenha pressionado o botão BOOT e conecte ao computador; você verá **STM32 Device in DFU Mode** no Gerenciador de Dispositivos, como abaixo.

![](https://files.seeedstudio.com/wiki/Wio_LTE/img/before_driver_installation.png)

- Etapa 2. Isso indica que você precisa usar o [zadig_xx.exe](https://files.seeedstudio.com/wiki/Wio_LTE/res/zadig_2.1.2.exe) para alterar o driver DFU de **STTub30** para **WinUSB**, como abaixo. Se não aparecer nenhuma informação no Zadig, clique em Options--> List All Devices e selecione STM32 Virtual COM Ports.

![](https://files.seeedstudio.com/wiki/Wio_LTE/img/zadig.png)

- Etapa 3. Você verá o "STMicroelectronics Virtual COM Port" no Gerenciador de Dispositivos, como abaixo.

![](https://files.seeedstudio.com/wiki/Wio_LTE/img/after_driver_installation.png)

### Brincar com o Arduino

**1. Configuração de Software**

- Etapa 1. Instale a Arduino IDE; a versão recomendada é acima de 1.8.0.
- Etapa 2. Siga [How to Add Seeed boards to Arduino IDE](https://wiki.seeedstudio.com/pt-br/Seeed_Arduino_Boards/) para adicionar Wio_LTE ao gerenciador de placas do Arduino.

Copie e cole a URL json nas preferências do Arduino

```
https://raw.githubusercontent.com/Seeed-Studio/Seeed_Platform/master/package_seeeduino_boards_index.json
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio_LTE/img/boardManager_stm32.png" style={{width:800, height:'auto'}}/></div>


- Etapa 3. Baixe a [Wio_LTE Library](https://github.com/Seeed-Studio/Wio_LTE_Arduino_Library) do Github.
- Passo 4. Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

**2. Brincar com envio de SMS**

- Passo 1. Insira o cartão Nano SIM no slot Nano SIM, próximo ao lado da placa PCB.
- Passo 2. Selecione File--> Examples-->Wio_LTE_Arduino_Library-->SMSSend sketch.
- Passo 3. Altere o número de telefone e a informação.
- Passo 4. Pressione e segure o botão BOOT na parte de trás do Wio LTE e conecte o USB ao PC.
- Passo 5. Veremos **STM BOOTLARDER** no gerenciador de dispositivos.
- Passo 6. Selecione Tools-->Boards-->Wio_Tracker_LTE.
- Passo 7. Deixe a porta COM em branco.
- Passo 8. Selecione Sketch-->Upload para enviar o código para o Wio_LTE.
- Passo 9. Pressione o botão **RST** para habilitar a porta COM.

```cpp
#include "wio_tracker.h"

char message[128] = "Hello from Wio Traker!";

WioTracker wio = WioTracker();

void setup() {
  wio.Power_On();
  SerialUSB.println("Power On!");

  if(!wio.waitForNetworkRegister())
  {
    SerialUSB.println("Network error!");
    return;
  } else {
    SerialUSB.println("Network ready!");
  }

  // Change xxxxxxxxxxx to your test phone number
  if(wio.sendSMS("185XXX26402", message))
  {
    SerialUSB.println("Send OK!");
  }
  else
  {
    SerialUSB.println("Send Error!");
  }

}

void loop() {
  AT_bypass();
}
```

- Passo 10. Use ferramentas de monitor de COM para imprimir a mensagem serial. **Por favor, não use o monitor de porta serial (COM) da IDE Arduino! Isso pode fazer com que o próximo download falhe, mas reabrir a IDE Arduino pode recuperar esse problema**.
- Passo 11. O dono do número de telefone receberá a mensagem.

```cpp
Power On!


Network ready!


Send OK!
```

**3. Brincar com leitura de SMS**

- Passo 1. Insira o cartão Nano SIM no slot Nano SIM, próximo ao lado da placa PCB.
- Passo 2. Selecione File--> Examples-->Wio_LTE_Arduino_Library-->SMSRead sketch.
- Passo 3. Pressione e segure o botão BOOT na parte de trás do Wio LTE e conecte o USB ao PC.
- Passo 4. Veremos **STM BOOTLARDER** no gerenciador de dispositivos.
- Passo 5. Selecione Tools-->Boards-->Wio_Tracker_LTE.
- Passo 6. Deixe a porta COM em branco.
- Passo 7. Selecione Sketch-->Upload para enviar o código para o Wio_LTE.
- Passo 8. Pressione o botão **RST** para habilitar a porta COM.

```cpp
#include "wio_tracker.h"

uint16_t newSMSNumber = -1;
char message[128];
char phone[32];
char dateTime[32];


WioTracker wio = WioTracker();

void setup() {
  wio.Power_On();
  SerialUSB.println("Power On!");
  SerialUSB.println("Wait for network registered...");

  if(!wio.waitForNetworkRegister())
  {
    SerialUSB.println("Network error!");
    return;
  } else {
    SerialUSB.println("Network ready!");
  }
  wio.readAllRecUnreadSMS();  // Set all "REC UNREAD SMS" to "REC READ SMS"
}

void loop() {
  int id = wio.detectRecUnreadSMS();
  if(-1 != id){
    newSMSNumber = id;
    wio.readSMS(newSMSNumber, message, 128, phone, dateTime);
    SerialUSB.println("++++++++++++++ Start +++++++++++++++++");
    SerialUSB.print("From: ");
    SerialUSB.println(phone);
    SerialUSB.print("Date: ");
    SerialUSB.println(dateTime);
    SerialUSB.println(message);
    SerialUSB.println("++++++++++++++++ End +++++++++++++++");
  } else {
    SerialUSB.println("Waiting for new SMS!");
  }

  delay(1000);
}

```

- Passo 9. Use ferramentas de monitor de COM para imprimir a mensagem serial. **Por favor, não use o monitor de porta serial (COM) da IDE Arduino! Isso pode fazer com que o próximo download falhe, mas reabrir a IDE Arduino pode recuperar esse problema**.
- Passo 10. Abra o monitor serial; ao ver **Waitting for new SMS!**, envie uma mensagem para a placa, a nova mensagem será exibida em breve com número de telefone, hora e conteúdo.

```cpp
Power On!
Wait for network registered...


Network ready!


Waiting for new SMS!
Waiting for new SMS!
Waiting for new SMS!

++++++++++++++ Start +++++++++++++++++
From: 1375002xxxx
Date: 17/12/20,17:40:38+32
Hello tracker
++++++++++++++++ End +++++++++++++++
Waiting for new SMS!
Waiting for new SMS!
```

**4. Brincar com GPS**

- Passo 1. Insira o cartão Nano SIM no slot Nano SIM, próximo ao lado da placa PCB.
- Passo 2. Selecione File--> Examples-->Wio_LTE_Arduino_Library-->GNNS-->GNSS_Show_Coordinate sketch.
- Passo 3. Pressione e segure o botão BOOT na parte de trás do Wio LTE e conecte o USB ao PC.
- Passo 4. Veremos **STM BOOTLARDER** no gerenciador de dispositivos.
- Passo 5. Selecione Tools-->Boards-->Wio_Tracker_LTE.
- Passo 6. Deixe a porta COM em branco.
- Passo 7. Selecione Sketch-->Upload para enviar o código para o Wio_LTE.
- Passo 8. Pressione o botão **RST** para habilitar a porta COM.

```cpp
#include "gnss.h"


GNSS gnss = GNSS();

void setup() {
  gnss.Power_On();
  while(false == gnss.Check_If_Power_On()){
    SerialUSB.println("Waitting for module to alvie...");
    delay(1000);
  }
  SerialUSB.println("\n\rPower On!");

  if(!(gnss.open_GNSS())){
    SerialUSB.println("\n\rGNSS init failed!");
    return;
  }

  SerialUSB.println("Open GNSS OK.");
  delay(2000);
}

void loop() {
  if(gnss.getCoordinate()){
    SerialUSB.println();
    SerialUSB.print("GNSS: \r\n");

    // Output double type
    SerialUSB.print("Data type in double: ");
    SerialUSB.print(gnss.longitude, 6);
    SerialUSB.print(",");
    SerialUSB.println(gnss.latitude, 6);

    // Output char* type
    SerialUSB.print("Data type in string: ");
    SerialUSB.print(gnss.str_longitude);
    SerialUSB.print(",");
    SerialUSB.println(gnss.str_latitude);
  } else{
    SerialUSB.print("...");
  }
}

```

- Passo 9. Use ferramentas de monitor de COM para imprimir a mensagem serial. **Por favor, não use o monitor de porta serial (COM) da IDE Arduino! Isso pode fazer com que o próximo download falhe, mas reabrir a IDE Arduino pode recuperar esse problema**.
- Passo 10. Veremos as informações de latitude e longitude impressas na tela.

```cpp
Waitting for module to alvie...
Waitting for module to alvie...
Waitting for module to alvie...

RDY
AT

OK


Power On!


Open GNSS OK.
.................................
GNSS:
Data type in double: 113.966255,22.583820
Data type in string: 113.966255,22.583819

GNSS:
Data type in double: 113.966248,22.583818
Data type in string: 113.966248,22.583818

GNSS:
Data type in double: 113.966248,22.583817
Data type in string: 113.966248,22.583816

GNSS:
Data type in double: 113.966248,22.583820
Data type in string: 113.966248,22.583819
```

**5. Brincar com GPS em modo NMEA**

- Passo 1. Insira o cartão Nano SIM no slot Nano SIM, próximo ao lado da placa PCB.
- Passo 2. Selecione File--> Examples-->Wio_LTE_Arduino_Library-->GNNS-->GNSS_NMEA sketch.
- Passo 3. Pressione e segure o botão BOOT na parte de trás do Wio LTE e conecte o USB ao PC.
- Passo 4. Veremos **STM BOOTLARDER** no gerenciador de dispositivos.
- Passo 5. Selecione Tools-->Boards-->Wio_Tracker_LTE.
- Passo 6. Deixe a porta COM em branco.
- Passo 7. Selecione Sketch-->Upload para enviar o código para o Wio_LTE.
- Passo 8. Pressione o botão **RST** para habilitar a porta COM.

```cpp
#include "gnss.h"


char nmea_sentence[192];
char nmea_GSV_sentence[512];
GNSS gnss = GNSS();

void setup() {
  gnss.Power_On();
  while(false == gnss.Check_If_Power_On()){
    SerialUSB.println("Waitting for module to alvie...");
    delay(1000);
  }
  SerialUSB.println("\n\rPower On!");

  if(!(gnss.open_GNSS())){
    SerialUSB.println("\n\rGNSS init failed!");
    return;
  }
  SerialUSB.println("Open GNSS OK.");
  gnss.enable_NMEA_mode();  // Set output sentence in NMEA mode
}

void loop() {  
  clean_buffer(nmea_sentence, 192);
  gnss.read_NMEA(GGA, nmea_sentence);
  SerialUSB.print(nmea_sentence);

  clean_buffer(nmea_sentence, 192);
  gnss.read_NMEA(RMC, nmea_sentence);
  SerialUSB.print(nmea_sentence);

  clean_buffer(nmea_sentence, 192);
  gnss.read_NMEA(GSA, nmea_sentence);
  SerialUSB.print(nmea_sentence);

  clean_buffer(nmea_sentence, 192);
  gnss.read_NMEA(VTG, nmea_sentence);
  SerialUSB.print(nmea_sentence);

  clean_buffer(nmea_GSV_sentence, 512);
  gnss.read_NMEA_GSV(nmea_sentence);
  SerialUSB.print(nmea_sentence);

  SerialUSB.println("\r\n");

  delay(1000);
}

```

- Passo 9. Use ferramentas de monitor de COM para imprimir a mensagem serial. **Por favor, não use o monitor de porta serial (COM) da IDE Arduino! Isso pode fazer com que o próximo download falhe, mas reabrir a IDE Arduino pode recuperar esse problema**.
- Passo 10. Veremos os registros abaixo.

```cpp
Waitting for module to alvie...
Waitting for module to alvie...
Waitting for module to alvie...
Waitting for module to alvie...


Power On!


Open GNSS OK.

$GPRMC,,V,,,,,,,,,,N*53
$GPGSA,A,1,,,,,,,,,,,,,,,*1E
$GPVTG,,T,,M,,N,,K,N*2C
$GPGSV,3,1,12,16,60,324,40,27,54,171,40,03,19,253,,08,21,198,*7B
$GPGSV,3,2,12,09,02,322,,14,32,147,,21,04,080,,22,17,233,*7E
$GPGSV,3,3,12,23,32,314,,26,45,018,,31,35,073,,32,10,149,*7C


$GPGGA,,,,,,0,,,,,,,,*66
$GPRMC,,V,,,,,,,,,,N*53
$GPGSA,A,1,,,,,,,,,,,,,,,*1E
$GPVTG,,T,,M,,N,,K,N*2C
$GPGSV,3,1,12,03,19,253,38,08,21,198,34,14,32,147,37,16,60,324,42*70
$GPGSV,3,2,12,22,17,233,37,23,32,314,38,26,45,018,40,27,54,171,44*7D
$GPGSV,3,3,12,31,35,073,40,09,02,322,,21,04,080,,32,10,149,*75


$GPGGA,,,,,,0,,,,,,,,*66
$GPRMC,,V,,,,,,,,,,N*53
$GPGSA,A,1,,,,,,,,,,,,,,,*1E
$GPVTG,,T,,M,,N,,K,N*2C
$GPGSV,4,1,13,03,19,253,40,04,,,37,08,21,198,36,09,02,322,33*43
$GPGSV,4,2,13,14,32,147,37,16,60,324,41,22,17,233,40,23,32,314,39*72
$GPGSV,4,3,13,26,45,018,41,27,54,171,41,31,35,073,40,21,04,080,*78
$GPGSV,4,4,13,32,10,149,*47


$GPGGA,,,,,,0,,,,,,,,*66
$GPRMC,,V,,,,,,,,,,N*53
$GPGSA,A,1,,,,,,,,,,,,,,,*1E
$GPVTG,,T,,M,,N,,K,N*2C
$GPGSV,4,1,14,03,19,253,39,04,,,37,08,21,198,36,09,02,322,34*4D
$GPGSV,4,2,14,14,32,147,36,16,60,324,41,22,17,233,37,23,32,314,39*74
$GPGSV,4,3,14,26,45,018,41,27,54,171,41,31,35,073,41,21,04,080,*7E
$GPGSV,4,4,14,32,10,149,,33,,,34*47
$GPVTG,,T,,M,,N,,K,N*2C


$GPGGA,110917.30,2235.028403,N,11357.974736,E,1,10,0.9,52.2,M,-1.0,M,,*43
$GPRMC,110917.30,A,2235.028403,N,11357.974736,E,0.0,,050118,2.3,W,A*0B
$GPGSA,A,3,03,08,09,14,16,22,23,26,27,31,,,1.8,0.9,1.6*37
$GPVTG,,T,2.3,M,0.0,N,0.0,K,A*0C
$GPGSV,4,1,15,03,19,253,38,04,,,36,08,21,198,34,09,02,322,33*49
$GPGSV,4,2,15,14,32,147,36,16,60,324,40,22,17,233,36,23,32,314,38*74
$GPGSV,4,3,15,26,45,018,40,27,54,171,40,31,35,073,40,21,04,080,*7E
$GPGSV,4,4,15,32,10,149,,33,,,34,46,,,34*43
$GPVTG,,T,2.3,M,0.0,N,0.0,K,A*0C

```

**6. Brincar com chamadas**

- Passo 1. Insira o cartão Nano SIM no slot Nano SIM, próximo ao lado da placa PCB.
- Passo 2. Selecione File--> Examples-->Wio_LTE_Arduino_Library-->Callup sketch.
- Passo 3. Altere o número de telefone.
- Passo 4. Pressione e segure o botão BOOT na parte de trás do Wio LTE e conecte o USB ao PC.
- Passo 5. Veremos **STM BOOTLARDER** no gerenciador de dispositivos.
- Passo 6. Selecione Tools-->Boards-->Wio_Tracker_LTE.
- Passo 7. Deixe a porta COM em branco.
- Passo 8. Selecione Sketch-->Upload para enviar o código para o Wio_LTE.
- Passo 9. Pressione o botão **RST** para habilitar a porta COM.
- Passo 10. Use ferramentas de monitor de COM para imprimir a mensagem serial. **Por favor, não use o monitor de porta serial (COM) da IDE Arduino! Isso pode fazer com que o próximo download falhe, mas reabrir a IDE Arduino pode recuperar esse problema**.
- Passo 11. O dono do número de telefone receberá a chamada.

```cpp
#include "wio_tracker.h"

WioTracker wio = WioTracker();

void setup() {
  wio.Power_On();
  SerialUSB.println("Power On!");

  while(!wio.init()){
    delay(1000);
    SerialUSB.println("Accessing network...");
  }
  SerialUSB.println("Initialize done...");

  bool ret = wio.waitForNetworkRegister();
  if(true == ret){
      SerialUSB.println("Network accessed!");
  }else {
      SerialUSB.println("Network failed!");
      return;
  }

  // Make a phone call
  wio.callUp("185XXX26402");
  SerialUSB.println("Calling...");

}

void loop() {
  /* Debug */
  AT_bypass();
}

```

**7. Brincar com cliente de soquete TCP/UDP**

- Passo 1. Insira o cartão Nano SIM no slot Nano SIM, próximo ao lado da placa PCB.
- Passo 2. Selecione File--> Examples-->Wio_LTE_Arduino_Library-->TCPConnect.
- Passo 3. Altere o número de telefone.
- Passo 4. Pressione e segure o botão BOOT na parte de trás do Wio LTE e conecte o USB ao PC.
- Passo 5. Veremos **STM BOOTLARDER** no gerenciador de dispositivos.
- Passo 6. Selecione Tools-->Boards-->Wio_Tracker_LTE.
- Passo 7. Deixe a porta COM em branco.
- Passo 8. Selecione Sketch-->Upload para carregar o código para o Wio_LTE.

```cpp
#include "ethernet.h"

Ethernet eth = Ethernet();


// const char apn[10] = "CMNET";
const char apn[10] = "UNINET";
const char URL[100] = "mbed.org";
char http_cmd[100] = "GET /media/uploads/mbed_official/hello.txt HTTP/1.0\n\r\n\r";
int port = 80;

int ret = 0;


void setup() {
  SerialUSB.println("Begin...");
  eth.Power_On();
  while(false == eth.Check_If_Power_On()){
    SerialUSB.println("Waitting for module to alvie...");
    delay(1000);
  }

  while(!eth.init()){
    delay(1000);
    SerialUSB.println("Accessing network...");
  }
  SerialUSB.println("Initialize done...");

  eth.join(apn);
  SerialUSB.print("\n\rIP: ");
  SerialUSB.print(eth.ip_string);

  if(eth.connect(URL, port, TCP))
  {
    eth.write(http_cmd);
    while(MODULE_PORT.available()){
        serialDebug.write(MODULE_PORT.read());
    }    
    eth.close(1);
  }
  else {
    SerialUSB.println("Connect Error!");
  }

}

void loop() {
  /* Debug */
  AT_bypass();
}
```

- Passo 9. Pressione o botão **RST** para habilitar a porta COM.
- Passo 10. Use ferramentas de monitor de COM para imprimir a mensagem serial. **Por favor, não use o monitor de porta serial da Arduino IDE! Isso pode fazer com que o próximo download falhe, mas reabrir a Arduino IDE pode corrigir esse problema**.

```
Begin...
Waitting for module to alvie...
Waitting for module to alvie...
Waitting for module to alvie...


Initialize done...


IP: 10.229.226.108


+QIURC: "recv",0,389
HTTP/1.1 200 OK
Server: nginx/1.11.12
Date: Mon, 25 Dec 2017 04:45:01 GMT
Content-Type: text/plain
Content-Length: 14
Connection: close
Last-Modified: Fri, 27 Jul 2012 13:30:34 GMT
Accept-Ranges: bytes
Cache-Control: max-age=36000
Expires: Mon, 25 Dec 2017 14:44:58 GMT
X-Upstream-L1-next-hop: 217.140.101.22:8080
X-Upstream-L1: developer-sjc-cyan-border-nginx

Hello world!


+QIURC: "closed",0
```

**8. Brincar com cartão SD**

:::note
    Firmware Epruino v1.94 não suporta o driver de cartão SD, use v1.96 ou posterior, a versão mais recente é v1.99.
:::

- Passo 1. Insira o cartão micro SD no slot do cartão SD.
- Passo 2. Selecione File--> Examples-->Wio_LTE_Arduino_Library-->SDCard->CardInfo.
- Passo 3. Altere o número de telefone.
- Passo 4. Pressione e segure o botão BOOT na parte de trás do Wio LTE e conecte o USB ao PC.
- Passo 5. Veremos **STM BOOTLARDER** no gerenciador de dispositivos.
- Passo 6. Selecione Tools-->Boards-->Wio_Tracker_LTE.
- Passo 7. Deixe a porta COM em branco.
- Passo 8. Selecione Sketch-->Upload para carregar o código para o Wio_LTE.

```cpp
 // include the SD library:
#include <SD.h>

// set up variables using the SD utility library functions:
Sd2Card card;
SdVolume volume;
SdFile root;

const int chipSelect = 43;

void setup()
{

  SerialUSB.print("\nInitializing SD card...");
  pinMode(SS, OUTPUT);


  // we'll use the initialization code from the utility libraries
  // since we're just testing if the card is working!
  while (!card.init(SPI_HALF_SPEED, chipSelect)) {
    SerialUSB.println("initialization failed. Things to check:");
    SerialUSB.println("* is a card is inserted?");
    SerialUSB.println("* Is your wiring correct?");
    SerialUSB.println("* did you change the chipSelect pin to match your shield or module?");
  }

  // print the type of card
  SerialUSB.print("\nCard type: ");
  switch(card.type()) {
    case SD_CARD_TYPE_SD1:
      SerialUSB.println("SD1");
      break;
    case SD_CARD_TYPE_SD2:
      SerialUSB.println("SD2");
      break;
    case SD_CARD_TYPE_SDHC:
      SerialUSB.println("SDHC");
      break;
    default:
      SerialUSB.println("Unknown");
  }

  // Now we will try to open the 'volume'/'partition' - it should be FAT16 or FAT32
  if (!volume.init(card)) {
    SerialUSB.println("Could not find FAT16/FAT32 partition.\nMake sure you've formatted the card");
    return;
  }


  // print the type and size of the first FAT-type volume
  uint32_t volumesize;
  SerialUSB.print("\nVolume type is FAT");
  SerialUSB.println(volume.fatType(), DEC);
  SerialUSB.println();

  volumesize = volume.blocksPerCluster();    // clusters are collections of blocks
  volumesize *= volume.clusterCount();       // we'll have a lot of clusters
  volumesize *= 512;                            // SD card blocks are always 512 bytes
  SerialUSB.print("Volume size (bytes): ");
  SerialUSB.println(volumesize);
  SerialUSB.print("Volume size (Kbytes): ");
  volumesize /= 1024;
  SerialUSB.println(volumesize);
  SerialUSB.print("Volume size (Mbytes): ");
  volumesize /= 1024;
  SerialUSB.println(volumesize);


  SerialUSB.println("\nFiles found on the card (name, date and size in bytes): ");
  root.openRoot(volume);

  // list all files in the card with date and size
  root.ls(LS_R | LS_DATE | LS_SIZE);
}


void loop(void) {

}
```

- Passo 9. Pressione o botão **RST** para habilitar a porta COM.
- Passo 10. Use ferramentas de monitor de COM para imprimir a mensagem serial. **Por favor, não use o monitor de porta serial da Arduino IDE! Isso pode fazer com que o próximo download falhe, mas reabrir a Arduino IDE pode corrigir esse problema**.

```cpp

Initializing SD card...
Card type: SDHC

Volume type is FAT32

Volume size (bytes): 2689048576
Volume size (Kbytes): 2626024
Volume size (Mbytes): 2564

Files found on the card (name, date and size in bytes):

```

**9. Brincar com módulo Grove**

**9.1 Brincar com módulo digital Grove**  

Usamos [Grove-TemperatureAndHumidity_Sensor](https://wiki.seeedstudio.com/pt-br/Grove-TemperatureAndHumidity_Sensor/) como entrada digital e conectamos ao D20 do Wio LTE.

- Passo 1. Pressione e segure o botão BOOT na parte de trás do Wio LTE e conecte o USB ao PC.
- Passo 2. Veremos **STM BOOTLARDER** no gerenciador de dispositivos.
- Passo 3. Selecione Tools-->Boards-->Wio_Tracker_LTE.
- Passo 4. Deixe a porta COM em branco.
- Passo 5. Baixe a [WioLTEforArduino Library](https://github.com/SeeedJP/WioLTEforArduino/archive/master.zip) e a [Grove-TemperatureAndHumidity_Sensor Library](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor/archive/master.zip) do Github. Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.
- Passo 6. Copie o código abaixo para o Sketch.
- Passo 7. Clique em Upload para carregar o código para o Wio_LTE.

```c
#include <WioLTEforArduino.h>
#include "DHT.h"
#define DHTPIN  (WIOLTE_D20)
#define INTERVAL    (100)

// Uncomment whatever type you're using!
#define DHTTYPE DHT11   // DHT 11 
//#define DHTTYPE DHT22   // DHT 22  (AM2302)
//#define DHTTYPE DHT21   // DHT 21 (AM2301)

WioLTE Wio;
DHT dht(DHTPIN, DHTTYPE);

void setup()
{
  delay(200);
  SerialUSB.println("### I/O Initialize.");
  Wio.Init();
  SerialUSB.println("### Power supply ON.");
  Wio.PowerSupplyGrove(true);
  delay(500);
  SerialUSB.println("### Initial temperature and humidity sensor.");
  dht.begin();
}

void loop()
{
    // Reading temperature or humidity takes about 250 milliseconds!
    // Sensor readings may also be up to 2 seconds 'old' (its a very slow sensor)
    float h = dht.readHumidity();
    float t = dht.readTemperature();

    // check if returns are valid, if they are NaN (not a number) then something went wrong!
    if (isnan(t) || isnan(h)) 
    {
        SerialUSB.println("Failed to read from DHT");
    } 
    else 
    {
        SerialUSB.print("Humidity: "); 
        SerialUSB.print(h);
        SerialUSB.print(" %\t");
        SerialUSB.print("Temperature: "); 
        SerialUSB.print(t);
        SerialUSB.println(" *C");
    }
}
```

- Passo 8. Pressione o botão **RST** para habilitar a porta COM.
- Passo 9. Use ferramentas de monitor de COM para imprimir a mensagem serial. **Por favor, não use o monitor de porta serial da Arduino IDE! Isso pode fazer com que o próximo download falhe, mas reabrir a Arduino IDE pode corrigir esse problema**.

```
### I/O Initialize.
### Power supply ON.
### Initial temperature and humidity sensor.
Humidity: 40.00 % Temperature: 27.00 *C
Humidity: 40.00 % Temperature: 27.00 *C
Humidity: 40.00 % Temperature: 27.00 *C
Humidity: 40.00 % Temperature: 27.00 *C
Humidity: 39.00 % Temperature: 27.00 *C
```

**9.2 Brincar com módulo analógico Grove**  

Usamos [Grove-Light Sensor](https://wiki.seeedstudio.com/pt-br/Grove-Light_Sensor/) como entrada analógica e conectamos ao A4 do Wio LTE (ADC de 12 bits).

- Passo 1. Pressione e segure o botão BOOT na parte de trás do Wio LTE e conecte o USB ao PC.
- Passo 2. Veremos **STM BOOTLARDER** no gerenciador de dispositivos.
- Passo 3. Selecione Tools-->Boards-->Wio_Tracker_LTE.
- Passo 4. Deixe a porta COM em branco.
- Passo 5. Baixe a [WioLTEforArduino Library](https://github.com/SeeedJP/WioLTEforArduino/archive/master.zip) do Github. Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.
- Passo 6. Copie o código abaixo para o Sketch.
- Passo 7. Clique em Upload para carregar o código para o Wio_LTE.

```c
#include <WioLTEforArduino.h>
#define LIGHT_PIN  (WIOLTE_A4)
WioLTE Wio;

void setup() {
  delay(200);
  SerialUSB.println("### I/O Initialize.");
  Wio.Init();
  SerialUSB.println("### Power supply ON.");
  Wio.PowerSupplyGrove(true);
  delay(500);
  SerialUSB.println("### Setup pin mode.");
  pinMode(LIGHT_PIN, INPUT_ANALOG);
}

void loop() {
  int light = analogRead(LIGHT_PIN);
  SerialUSB.println(light);
  delay(1000);
}

```

- Etapa 8. Pressione o botão **RST** para habilitar a porta COM.
- Etapa 9. Use ferramentas de monitor de COM para imprimir a mensagem serial. **Por favor, não use o monitor de porta serial do Arduino IDE! Isso pode fazer com que o próximo download falhe, mas reabrir o Arduino IDE pode corrigir esse problema**.

```
### I/O Initialize.
### Power supply ON.
### Setup pin mode.
2531
2530
2530
2530
2531
2533
2532
2531
```

**9.3 Brincando com o Módulo Grove I2C**  

Usamos o [Grove - 3-Axis Digital Accelerometer(±16g)](https://wiki.seeedstudio.com/pt-br/Grove-3-Axis_Digital_Accelerometer-16g/) como dispositivo I2C e o conectamos à porta I2C do Wio LTE.

- Etapa 1. Pressione e segure o botão BOOT na parte de trás do Wio LTE e conecte o USB ao PC.
- Etapa 2. Veremos **STM BOOTLARDER** no gerenciador de dispositivos.
- Etapa 3. Selecione Tools-->Boards-->Wio_Tracker_LTE.
- Etapa 4. Deixe a porta COM em branco.
- Etapa 5. Baixe a [WioLTEforArduino Library](https://github.com/SeeedJP/WioLTEforArduino/archive/master.zip)  e [ADXL345](https://github.com/Seeed-Studio/Accelerometer_ADXL345/archive/master.zip) do Github. Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.
- Etapa 6. Copie o código abaixo para o Sketch.
- Etapa 7. Clique em Upload para enviar o código para o Wio_LTE.

```c
#include <WioLTEforArduino.h>
#include <ADXL345.h>       

#define INTERVAL    (100)

WioLTE Wio;
ADXL345 Accel;

void setup()
{ 
  delay(200);
  SerialUSB.println("### I/O Initialize.");
  Wio.Init(); 
  SerialUSB.println("### Power supply ON.");
  Wio.PowerSupplyGrove(true);
  delay(500);
  Accel.powerOn();
  SerialUSB.println("### Setup completed.");
}

void loop()
{
  int x;
  int y;
  int z;
  Accel.readXYZ(&x, &y, &z);
  SerialUSB.print(x);
  SerialUSB.print(' ');
  SerialUSB.print(y);
  SerialUSB.print(' ');
  SerialUSB.println(z); 
  delay(INTERVAL);
}
```

- Etapa 8. Pressione o botão **RST** para habilitar a porta COM.
- Etapa 9. Use ferramentas de monitor de COM para imprimir a mensagem serial. **Por favor, não use o monitor de porta serial do Arduino IDE! Isso pode fazer com que o próximo download falhe, mas reabrir o Arduino IDE pode corrigir esse problema**.

```
### I/O Initialize.
### Power supply ON.
### Setup completed.
-224 -51 -82
-227 -40 -90
-231 -37 -91
-229 -37 -90
-227 -38 -90
-229 -39 -90
```

**9.4 Brincando com o Módulo Grove UART**  

Usamos o [Grove-CO2](https://wiki.seeedstudio.com/pt-br/Grove-CO2_Sensor/) como dispositivo UART e o conectamos à porta UART do Wio LTE.

- Etapa 1. Pressione e segure o botão BOOT na parte de trás do Wio LTE e conecte o USB ao PC.
- Etapa 2. Veremos **STM BOOTLARDER** no gerenciador de dispositivos.
- Etapa 3. Selecione Tools-->Boards-->Wio_Tracker_LTE.
- Etapa 4. Deixe a porta COM em branco.
- Etapa 5. Baixe a [WioLTEforArduino Library](https://github.com/SeeedJP/WioLTEforArduino/archive/master.zip) do Github. Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.
- Etapa 6. Copie o código abaixo para o Sketch.
- Etapa 7. Clique em Upload para enviar o código para o Wio_LTE.

```c
#include <WioLTEforArduino.h>
#include <ADXL345.h>       
#define INTERVAL    (100)

const unsigned char cmd_get_sensor[] =
{
    0xff, 0x01, 0x86, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x79
};

unsigned char dataRevice[9];
int temperature;
int CO2PPM;

WioLTE Wio;

void setup()
{ 
  delay(200);
  SerialUSB.println("### I/O Initialize.");
  Wio.Init(); 
  SerialUSB.println("### Power supply ON.");
  Wio.PowerSupplyGrove(true);
  delay(500);
  SerialUSB.println("Initial UART.");
  Serial.begin(9600);
}

void loop() {
    if(dataRecieve())
    { 
        SerialUSB.print("Temperature: ");
        SerialUSB.print(temperature);
        SerialUSB.print("  CO2: ");
        SerialUSB.print(CO2PPM);
        SerialUSB.println("");
    }
    delay(1000); 
}


bool dataRecieve(void)
{
    byte data[9];
    int i = 0;

    //transmit command data
    for(i=0; i<sizeof(cmd_get_sensor); i++)
    {
        Serial.write(cmd_get_sensor[i]);
    }
    delay(10);
    //begin reveiceing data
    if(Serial.available())
    {
        while(Serial.available())
        {
            for(int i=0;i<9; i++)
            {
                data[i] = Serial.read();
            }
        }
    }

    for(int j=0; j<9; j++)
    {
        Serial.print(data[j]);
        Serial.print(" ");
    }
    Serial.println("");

    if((i != 9) || (1 + (0xFF ^ (byte)(data[1] + data[2] + data[3] + data[4] + data[5] + data[6] + data[7]))) != data[8])
    {
        return false;
    }

    CO2PPM = (int)data[2] * 256 + (int)data[3];
    temperature = (int)data[4] - 40;

    return true;
}
```

- Etapa 8. Pressione o botão **RST** para habilitar a porta COM.
- Etapa 9. Use ferramentas de monitor de COM para imprimir a mensagem serial. **Por favor, não use o monitor de porta serial do Arduino IDE! Isso pode fazer com que o próximo download falhe, mas reabrir o Arduino IDE pode corrigir esse problema**.

```
### I/O Initialize.
### Power supply ON.
### Initial UART.
Temperature: 22  CO2: 410
Temperature: 22  CO2: 1031
Temperature: 22  CO2: 2699
Temperature: 22  CO2: 2579
Temperature: 22  CO2: 2972
```

## FAQ

**Q1: Não conseguimos usar o Arduino IDE para baixar o programa e vemos a seguinte informação de erro na parte inferior do Arduino IDE.**

A3: É um bug. Ao usar a porta serial do Arduino para imprimir informações, o Arduino IDE memoriza o número da porta serial. Assim, não há porta serial disponível para baixar um novo programa. Podemos reiniciar o Arduino IDE para resolver o problema como solução temporária. Para a solução preventiva, use outro software de monitor de COM, como SSCOM. Certifique-se de ver a barra de progresso durante o download do programa. Caso contrário, veremos as informações abaixo e o programa não será baixado.

```
Sketch uses 23068 bytes (2%) of program storage space. Maximum is 1048576 bytes.
Global variables use 13864 bytes of dynamic memory.
DFU begin
dfu-util 0.8

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2014 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to dfu-util@lists.gnumonks.org

Invalid DFU suffix signature
A valid DFU suffix will be required in a future dfu-util release!!!
No DFU capable USB device available
DFU end
```

**Q2: Não conseguimos ver a porta COM no gerenciador de dispositivos depois de alterar o driver dfu.**

A5: Por favor, pressione o botão RST e veremos a porta COM no gerenciador de dispositivos.

**Q3: Não conseguimos ver nenhuma informação no software Zadig.**

A6: Clique em Options--> List All Devices, depois selecione STM32 Virtual COM Ports.

## Visualizador Online do Esquemático do Wio LTE AU Version v1.3b

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio_LTE/res/Wio%20LTE%20AU%20Version%20v1.3b-%204G%2C%20Cat.1%2C%20GNSS%2C%20Espruino%20Compatible.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Visualizador Online do Esquemático do Wio LTE EU Version v1.3b

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio_LTE/res/Wio%20LTE%20EU%20Version%20v1.3b-%204G%2C%20Cat.1%2C%20GNSS%2C%20Espruino%20Compatible.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Visualizador Online do Esquemático do Wio LTE JP Version v1.3b

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio_LTE/res/Wio%20LTE%20JP%20Version%20v1.3b-%204G%2C%20Cat.1%2C%20Espruino%20Compatible.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Visualizador Online do Esquemático do Wio LTE US Version v1.3b

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio_LTE/res/Wio%20LTE%20US%20Version%20v1.3b%20-%204G%2C%20Cat.1%2C%20GNSS%2C%20Espruino%20Compatible.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle&PDF]** [Wio LTE AU Version v1.3b](https://files.seeedstudio.com/wiki/Wio_LTE/res/Wio%20LTE%20AU%20Version%20v1.3b-%204G%2C%20Cat.1%2C%20GNSS%2C%20Espruino%20Compatible.zip)

- **[Eagle&PDF]** [Wio LTE EU Version v1.3b](https://files.seeedstudio.com/wiki/Wio_LTE/res/Wio%20LTE%20EU%20Version%20v1.3b-%204G%2C%20Cat.1%2C%20GNSS%2C%20Espruino%20Compatible.zip)

- **[Eagle&PDF]** [Wio LTE JP Version v1.3b](https://files.seeedstudio.com/wiki/Wio_LTE/res/Wio%20LTE%20JP%20Version%20v1.3b-%204G%2C%20Cat.1%2C%20Espruino%20Compatible.zip)

- **[Eagle&PDF]** [Wio LTE US Version v1.3b](https://files.seeedstudio.com/wiki/Wio_LTE/res/Wio%20LTE%20US%20Version%20v1.3b%20-%204G%2C%20Cat.1%2C%20GNSS%2C%20Espruino%20Compatible.zip)

- **[Library]** [Wio_LTE_Arduino_Library](https://github.com/Seeed-Studio/Wio_LTE_Arduino_Library)

- **[Datasheet]** [AT Command](https://files.seeedstudio.com/wiki/Wio_LTE/res/AT_Command.zip)

## Projetos

**Visualização de dados de transporte com Google Map**：Usamos o Wio LTE cat.1 para monitorar o GPS de transporte e outras informações. Para a cadeia fria, podemos monitorar a localização por GPS juntamente com temperatura e umidade. Para ciclismo, podemos monitorar a localização por GPS juntamente com a frequência cardíaca.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/SeeedStudio/transportation-data-visualization-with-google-map-517ce4/embed' width='350'></iframe>

**Visualização da Poluição Atmosférica**：O problema da poluição do ar atrai cada vez mais atenção. Desta vez tentamos monitorar PM2.5 com o Wio LTE e o novo Sensor Laser PM2.5.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/SeeedStudio/atmospheric-pollution-visualization-1940f4/embed' width='350'></iframe>

## Suporte Técnico e Discussão de Produtos

 se você tiver qualquer problema técnico, envie o problema para o nosso [forum](http://forum.seeedstudio.com/).
Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
