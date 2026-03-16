---
description: Seeeduino v4.0
title: Seeeduino v4.0
keywords:
  - Seeeduino
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Seeeduino_v4.0
sku: 102010004
last_update:
  date: 1/11/2023
  author: shuxu hu
createdAt: '2023-01-30'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Seeeduino_v4.0/
---

<!-- <p style="text-align:center"><a href=target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/ARD128D2P_1_02.jpg" border=0 /></a></p>  -->
![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/ARD128D2P_1_02.jpg)

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/Seeeduino-V4-p-669.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p>  -->
<a href="https://www.seeedstudio.com/Seeeduino-V4-p-669.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></a>
O Seeeduino v4.0 é uma placa de desenvolvimento com microcontrolador ATMEGA328. O ATMEGA328P-MU é um microcontrolador AVR de 8 bits de alto desempenho e baixo consumo. O Seeeduino v4.0 possui 14 pinos digitais de entrada/saída (6 dos quais podem ser usados como saídas PWM) e 6 pinos analógicos. A placa também possui um microcontrolador ATMEGA16U2 que atua como um chip conversor UART‑para‑USB, o que significa que a placa pode basicamente funcionar como um chip FTDI.

O Seeeduino v4.0 herda todos os recursos do Arduino Duemilanove e Uno, mas também adiciona alguns próprios. Esta placa é compatível com o layout de pinos do Duemilanove e Uno, bem como com os furos para parafuso e dimensões da placa do Duemilanove.  

Para uma explicação detalhada e visão geral de todos os recursos, consulte a seção neste WiKi intitulada [Interface da Placa, Recursos e Componentes](https://seeeddoc.github.io/Seeeduino_v4.0/#Interface_da_Placa.2C_Recursos.2C_e_Componentes).

## Interface da Placa, Recursos e Componentes

A placa Seeeduino oferece uma variedade de recursos, alguns dos quais não são encontrados em outras placas duino (por exemplo, lógica de 5V ou 3,3V, pads extras de cabeçalho, conectores diretos USB‑para‑UART). Veja abaixo uma descrição detalhada da interface da placa e de seus recursos exclusivos.

![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_0_board_sections.png)
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_0_board_sections.png" alt="pir" width={600} height="auto" /></p>

### 1. Pads J2

Conectados aos pinos PB4, PB5, PB6 e PB7 do ATMEGA16U2 (chip U5).

### 2. LEDs L, TX, RX

O LED "L" está conectado ao pino digital 13, ele pode ser usado como LED de "status" em seus projetos. Os LEDs TX e RX funcionam automaticamente, eles informam quando a placa está enviando ou recebendo informações, respectivamente.

### 3. Porta Micro USB

Porta usada para conectar a placa ao seu PC para programação. Micro USB é a versão onipresente do USB, encontrada na maioria dos celulares Android e outros dispositivos. Você provavelmente tem dezenas desses cabos espalhados pela sua casa.

### 4. Chave Deslizante SW2 (5V 3V3)

Chave deslizante usada para alterar o nível lógico e a saída de alimentação da placa para 5V ou 3,3V. Hoje em dia muitos sensores novos e avançados estão sendo desenvolvidos para funcionar com 3,3V; com outras placas duino você precisaria colocar um conversor de nível lógico entre a placa e esses sensores, mas com a placa Seeeduino V4.0 tudo o que você precisa fazer é deslizar a chave!

### 5. Conector de Alimentação DC

O conector de alimentação DC permite que sua placa Seeeduino seja alimentada por um adaptador de tomada para que você possa fornecer mais energia ao seu projeto, se necessário, por exemplo, ao usar motores DC ou outros dispositivos de alta potência. A entrada DC pode ser de 7V‑12V.

### 6. U5 ICSP

Porta ICSP e SPI para o chip ATMEGA16U2.

### 7. U5

Chip ATMEGA16U2. Este chip é o responsável pela conexão USB para UART que é usada para programar o ATMEGA328P-MU (U1) e também pode usar a porta similar à FTDI.

### 8. Botão SW1 (Reset)

Este botão está convenientemente posicionado na lateral para permitir que você reinicie a placa Seeeduino mesmo quando um shield estiver colocado sobre ela. Isso não acontece em outras placas duino, onde o botão é colocado na parte superior, tornando-o difícil de acessar.

### 9. Pads Extras de Cabeçalho (Digitais)

Às vezes é muito conveniente conectar um sensor/dispositivo diretamente à sua placa em vez de passar por uma protoboard, ou talvez você queira soldar o sensor diretamente à placa quando tiver concluído seu projeto, ou talvez queira monitorar a saída dos pinos enquanto eles estão sendo usados por outros dispositivos. Em qualquer caso, adicionamos esses pads extras para ajudá-lo ao longo do caminho.

### 10. U1

O chip ATmega328P-MU, este é o cérebro da placa, onde o código que você escreve é executado.

### 11. Pads Extras de Cabeçalho (Alimentação e Analógicos)

Assim como os pads extras de cabeçalho digitais, essas conexões extras são algo que percebemos pessoalmente que as pessoas precisam em seus projetos, especialmente as conexões de alimentação, se você quiser alimentar mais de um sensor/dispositivo sem o uso de uma protoboard.

### 12. Pads/Porta UART‑para‑USB (FTDI)

Esta é a entrada/saída da função UART‑para‑USB do chip ATMEGA16U2 (U5). Você pode usar esta porta para se comunicar diretamente com dispositivos que exigem uma conexão serial UART, sendo excelente para testar rapidamente esses dispositivos sem escrever nenhum código. Esta porta faz com que a placa Seeeduino funcione essencialmente como um chip FTDI, se necessário.

A tensão de saída de VCC será de 5V ou 3,3V, qualquer que seja a opção que você tiver selecionado usando o SW2.

### 13. U1 ICSP

Esta é a conexão ICSP para o ATmega328P-MU, localizada na posição padrão ICSP/SPI para hardwares compatíveis com Arduino Uno, Due, Mega e Leonardo (por exemplo, shields) que possam usar este conector. Os pinos SPI nesta porta: MISO, SCK e MOSI, também estão conectados aos pinos digitais 12, 13 e 11, respectivamente, assim como no Arduino Uno.

### 14. Conectores Grove

[Nosso depósito](https://www.seeedstudio.com/depot/) possui uma variedade de sensores/dispositivos que podem fazer uso desta conexão I2C ou UART. Além disso, vendemos conectores Grove independentes para ajudá-lo a fazer suas próprias conexões de sensores. O conector Grove I2C também está conectado aos pinos analógicos 4 e 5 para SDA e SCL, respectivamente, se você preferir usar esses pinos. O conector Grove UART está conectado aos pinos digitais 0 e 1 para RX e TX, respectivamente.

### 15. Pinos PWM

Os pinos digitais 3, 5, 6, 8, 9 e 10 podem ser usados para modulação por largura de pulso (PWM).

## Especificações

- Microcontrolador: ATmega328P-MU

- Tensão de Operação: 5V ou 3,3V (escolha pela chave deslizante)
- Pinos Digitais de E/S:14

- Canais PWM:6

- Canais de Entrada Analógica:6

- Entrada pelo Conector DC:7v-12v

- Corrente DC por Pino de E/S: 40 mA

- Memória Flash: 32 KB (ATmega328P-MU)

- RAM: 2 KB (ATmega328P-MU)

- EEPROM:1 KB (ATmega328P-MU)

- Frequência de Clock:16 MHz

## Instalação do Driver  

### Automática

Os drivers do Arduino/Seeeduino estão incluídos no [Arduino Software](https://arduino.cc/en/main/software). No Windows, depois que o Arduino Software estiver instalado, conecte sua placa Seeeduino à porta USB do PC e a instalação do driver começará automaticamente, como mostrado na captura de tela abaixo:

<!-- [](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_driver_installation_first_window.png) -->
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_driver_installation_first_window.png" alt="pir" width={600} height="auto" /></p>
Janela de instalação do driver do Seeeduino V4.0 conforme aparece no Windows.

Após alguns minutos (2–5), o driver deverá concluir sua instalação e você verá esta janela:

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_driver_installation_final_window.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_driver_installation_final_window.png" alt="pir" width={600} height="auto" /></p>

Janela indicando a conclusão da instalação do driver do Seeeduino V4 conforme aparece no Windows.

Neste ponto o Seeeduino V4.0 está pronto para uso.

### Manual

No Windows, se a instalação automática do driver falhar, você pode instalar os drivers manualmente; eles estão localizados na pasta do Arduino Software. Para fazer isso, siga estas etapas:

**1.** Abra a janela "Device Manager" pesquisando por ela e clicando em "Device Manager", como mostrado na imagem animada abaixo. Alternativamente, se isso não funcionar para você, você pode clicar com o botão direito em "My Computer"-&gt;Manage-&gt;Device Manager.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_how_to_open_device_manager_window.gif)  

**2.** Na janela "Device Manager", em "Ports (COM&amp;LPT)" ou "Other Devices", procure por "USB Serial Port"; esta é a placa Seeeduino, mas ainda não foi reconhecida pelo Windows. Clique com o botão direito e selecione "Update Driver Software..."

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Driver1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Driver1.jpg" alt="pir" width={600} height="auto" /></p>

**3.** Em seguida, escolha a opção "Browse my computer for Driver Software".

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Driver2.jpg)  -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Driver2.jpg" alt="pir" width={600} height="auto" /></p>

**4.** Por fim, localize e selecione a pasta chamada "Drivers", localizada na pasta do download do Arduino Software.

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Updata_Driver_Software_for_Seeeduino_v4.0.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Updata_Driver_Software_for_Seeeduino_v4.0.jpg" alt="pir" width={600} height="auto" /></p>

**5.** Se o driver foi instalado com sucesso, você deverá ver a caixa de diálogo abaixo.

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Driver4.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Driver4.jpg" alt="pir" width={600} height="auto" /></p>

**6.** Na janela "Device Manager", o dispositivo em que você clicou com o botão direito agora deve exibir "Arduino Uno (COMXX)" ou "USB Serial Port(COMXX)", como mostrado abaixo.

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Driver5.jpg)  -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Driver5.jpg" alt="pir" width={600} height="auto" /></p>

**7.** E quando você abrir a IDE do Arduino, a mesma porta COM também estará disponível. Lembre-se de fechar e abrir novamente a IDE do Arduino se ela estava aberta durante a instalação do driver ou a porta Serial não ficará visível.

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Driver6.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Driver6.jpg" alt="pir" width={600} height="auto" /></p>

## Exemplos/Aplicações

### Exemplo 1: Seu Primeiro Programa Arduino/Seeeduino (Piscar LED)

Conforme descrito na seção "Board Interface, Features, and Components" deste WiKi, a placa Seeeduino possui um LED on-board conectado ao pino 13. Neste exemplo vamos mostrar como piscar esse LED. Piscar um LED é o programa mais simples que se pode escrever para se familiarizar com o hardware e o software de uma placa.

Para piscar o LED na sua placa Seeeduino, siga os passos na imagem animada abaixo:

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_blink_led_program_step_by_step.gif) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_blink_led_program_step_by_step.gif" alt="pir" width={600} height="auto" /></p>

Ou, se preferir, listamos e descrevemos cada um dos passos:

**1.** Abra a IDE do Arduino
**2.** Selecione a placa Seeeduino indo em Tools-&gt;Board-&gt;Arduino Uno. A placa Seeeduino é reconhecida como uma placa Arduino Uno.

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4.0_upload3.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4.0_upload3.jpg" alt="pir" width={600} height="auto" /></p>

**3.** Certifique-se de que a porta Serial COM à qual sua placa Seeeduino está conectada foi selecionada indo em Tools-&gt;Serial Port-&gt;COMXX, onde COMXX é a porta COM da sua placa.

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4.0_upload4.jpg)  -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4.0_upload4.jpg" alt="pir" width={600} height="auto" /></p>

**4.** Abra o exemplo "Blink" indo em File-&gt;Examples-&gt;0.1Basics-&gt;Blink. Uma nova janela com o código será aberta, você pode fechar a janela anterior/original do Arduino.

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4.0_upload2.jpg)  -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4.0_upload2.jpg" alt="pir" width={600} height="auto" /></p>

**5.** Nesta nova janela clique no botão "Upload", isso irá fazer o upload/enviar o código para a sua placa Seeeduino. Aguarde alguns segundos até que a mensagem "Done Uploading" seja exibida; essa mensagem indica que o código foi gravado com sucesso na placa e está pronto para uso.

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4.0_upload1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4.0_upload1.jpg" alt="pir" width={600} height="auto" /></p>

**6.** O LED azul on-board na placa Seeduino deve começar a piscar, como mostrado abaixo:

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_led_blink.gif)  -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_led_blink.gif" alt="pir" width={600} height="auto" /></p>

### Exemplo 2: UART-para-USB (FTDI) e lógica de 3,3 V - Primeiros Passos com o Módulo WiFi ESP8266 Sem Circuito Extra e Sem Escrever Software

Duas grandes características da placa Seeeduino V4.0 quando comparada às suas concorrentes são sua capacidade de alternar entre lógica de 5 V e 3,3 V e sua porta USB-para-UART, que basicamente a torna um dispositivo semelhante a um FTDI, ótimo para começar rapidamente com dispositivos que usam o protocolo/interface UART.

Neste exemplo mostraremos como usar o popular [ESP8266 WiFi module](https://www.seeedstudio.com/depot/WiFi-Serial-Transceiver-Module-w-ESP8266-p-1994.html?cPath=19_20). Este exemplo é incrível porque com outras placas duino você precisaria de um conversor de tensão, um conversor de lógica e software para controlar duas portas Seriais separadas, mas com a placa Seeeduino nenhuma dessas três coisas é necessária.

**Passo 1: Colocando a Placa em Modo 3,3 V**

**1.** Remova todas as fontes de alimentação da placa Seeeduino para que ela fique completamente desligada.
**2.** Deslize a chave SW2 para a configuração 3V3.

**Passo 2: Conexões ESP8266-Seeeduino**

Conecte seu módulo WiFi ESP8266 à placa Seeeduino da seguinte forma (veja a foto abaixo para um esquema):

<table>
<tr>
<th>Pino Seeeduino</th>
<th>Pino ESP8266</th>
</tr>
<tr>
<td>GND</td>
<td>GND</td>
</tr>
<tr>
<td>TX</td>
<td>RX</td>
</tr>
<tr>
<td>RX</td>
<td>TX</td>
</tr>
<tr>
<td>CH_PD</td>
<td>VCC</td>
</tr>
<tr>
<td>VCC</td>
<td>VCC</td>
</tr>
</table>

:::note
     Esquemático do Seeeduino V4.0 e ESP8266. SW2 mostra a configuração em 5 V, mas por favor deslize-o para 3V3.
:::
<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_esp8266_schematic.png)  -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4_esp8266_schematic.png" alt="pir" width={600} height="auto" /></p>

**Passo 3: Enviando Comandos**

**1.** Conecte sua placa Seeeduino à porta USB do seu PC.
**2.** Abra a IDE do Arduino
**3.** Faça o upload de um programa em branco para a sua placa ou certifique-se de que o programa que ela possui não utilize nenhuma função Serial.

```cpp
void setup()
{

    }

    void loop()
{

    }
```

**4.** Abra a janela "Serial Monitor" do Arduino.

**5.** Na janela Serial Monitor altere suas configurações para "Both NL &amp;CR" e taxa de transmissão para "9600", ou para a taxa de transmissão correta do seu ESP8266, já que pode ser diferente.

**6.** O ESP8266 está pronto para receber e enviar informações/comandos. Tente enviar "AT+RST" para reiniciar o módulo, depois envie "AT+CWLAP" para listar todos os pontos de acesso que o seu ESP8266 é capaz de detectar. Veja a imagem abaixo para um exemplo de resposta.

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Esp8266-output.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Esp8266-output.png" alt="pir" width={600} height="auto" /></p>

## Rastreador de Versão  

Abaixo está uma lista de mudanças que foram feitas na placa Seeeduino ao longo de todas as versões.

<table>
  <tbody>
    <tr>
      <th>Revisão</th>
      <th>Descrições</th>
      <th>Data de Lançamento</th>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td width="300px">Seeeduino V0.9</td>
      <td width="500px">Lançamento público inicial</td>
      <td width="200px"></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>Seeeduino v1.1</td>
      <td>
        1.  Bug corrigido - via desnecessária no fio do Pino 4.
        2.  Bug corrigido - rótulo coberto por engano pelas chaves.
        3.  Adicionadas portas I2C e de sensor.
        4.  Adicionado um capacitor de 100uF para a chave vcc.
        5.  Novos pinos em grade de 100mil agrupados.
        6.  Botões de reset substituídos por botões metálicos.
        7.  Textos e rótulos reorganizados para indicações mais claras.
      </td>
      <td></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>Seeeduino v2.12</td>
      <td>
        1.  Consumo de energia externa zero quando desligado
        2.  Chaves mais robustas
        3.  Segunda fonte de alimentação para entrada direta de 5 V. [Caution] USE APENAS 5 V!
        4.  Capacidade de acionamento de 150mA em 3,3 V
        5.  PCB fino de 1,0mm para peso mais leve
        6.  Linha extra reservada para pinos macho
      </td>
      <td></td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>Seeeduino v2.2</td>
      <td>
        1.  Seleção automática de energia USB/EXT
        2.  Atualização do capacitor de alimentação
        3.  Layouts limpos
        4.  Reset mais fácil
        5.  Cristal de quartzo real
        6.  Diodo de energia externa alterado para 1N4004 (mais potência no pino Vin)
      </td>
      <td>16 Dez, 2010</td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td>Seeeduino v2.21</td>
      <td>
        1.  Atualizado para conector mini USB mais robusto.
      </td>
      <td>12 Jan, 2011</td>
    </tr>
    <tr>
      <td>Seeeduino v3.0</td>
      <td>
        1.  Mudança do conector JST para conector Jack DC
      </td>
      <td>1 Jan, 2012</td>
    </tr>
    <tr>
      <td>Seeeduino v4.0</td>
      <td>
        1.  Remoção da chave RST
        2.  ATMEGA16U2 como chip conversor de barramento USB
        3.  Conversor DC-DC para reduzir dissipação de energia
        4.  Micro USB
        5.  Bootloader UNO
      </td>
      <td>1 Set, 2014</td>
    </tr>
  </tbody>
</table>

## Relato de Bug

- A serigrafia impressa do PWM tem um erro. Os pinos de PWM deveriam ser D9, D10, D11. Vamos corrigir esse erro o mais rápido possível.

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4.0_bug.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/img/Seeeduino_v4.0_bug.png" alt="pir" width={600} height="auto" /></p>

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_v4.0/res/Seeeduino_v4.0_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos/Referências

- **[Eagle]**  [Arquivo Eagle do Seeeduino v4.0](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/res/Seeeduino_v4.0_Eagle.zip)
- **[PDF]**[Seeeduino v4.0 pdf](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/res/Seeeduino%20v4.0.pdf)
- **[EAGLE]**[Seeeduino v4.0 sch](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/res/Seeeduino%20v4.0.sch)
- **[PDF]**  [Arquivo SCH do Seeeduino v4.0](https://files.seeedstudio.com/wiki/Seeeduino_v4.0/res/Seeeduino_v4.0_pdf.pdf)
- **[Datasheet]**  [Resumo do ATMEGA328P-MU](http://www.atmel.com/Images/Atmel-8271-8-bit-AVR-Microcontroller-ATmega48A-48PA-88A-88PA-168A-168PA-328-328P_datasheet_Summary.pdf)
- **[Datasheet]** [Resumo do ATMEGA16U2](http://www.atmel.com/Images/7799S.pdf)

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div className="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" className="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
