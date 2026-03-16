---
description: Seeeduino Stalker V3
title: Seeeduino Stalker V3
keywords:
  - Seeeduino
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Seeeduino-Stalker_v3
last_update:
  date: 1/31/2023
  author: shuxu hu
createdAt: '2023-02-01'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Seeeduino-Stalker_v3/
---

![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeed_Stalker_v3-6.png)

![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeed_Stalker_v3-7.png)

Seeeduino Stalker v3.0 é um **nó de Rede de Sensores Sem Fio** compatível com Arduino, rico em recursos e especialmente útil para aplicações externas de **registro de dados**. Ele possui uma placa de interface X-Bee para uso com módulos X-Bee, como GPS Bee, Bluetooth Bee e Wifi Bee, etc. Sua estrutura modular e periféricos integrados o tornam conveniente para registrar dados de sensores com carimbo de data/hora periodicamente. O Seeeduino Stalker vem com um RTC com alimentação de backup, soquete para cartão SD, soquete Bee e carregador de bateria Li-Ion baseado em energia solar_. O Seeeduino Stalker é uma boa opção para todos os seus projetos de rastreamento, monitoramento e controle._

**NOTA:** Seeeduino Stalker v3.0 é a versão mais recente desta placa. Veja [aqui](https://seeeddoc.github.io/Seeeduino_Stalker/#Comparison_between_various_versions_of_Seeeduino_Stalker) a comparação com versões mais antigas desta placa. O Seeeduino Stalker V3 possui muitos recursos e oferece maneiras de modificar as funcionalidades soldando ou desconectando jumpers na PCB. Entenda este documento e consulte o esquema elétrico antes de programar.

<span >Observe</span> que atualizamos e fizemos algumas modificações no Seeeduino Stalker. E iremos abordar isso mais adiante na seção **Visão Geral de Hardware** desta página.

### Rastreador de Versões

| Versão do produto                        | Data de lançamento | Status de suporte | Observações |
|-------------------------------------------|--------------------|-------------------|------------|
| Seeeduino Stalker v3(v3.0, versão antiga) | Out 2015           | Out 2015          | Nenhuma    |
| Seeeduino Stalker v3(v3.1, versão antiga) | Jul 2016           | Suportado         | Nenhuma    |

[![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Seeeduino-Stalker-v3-p-1882.html)  

## Recursos

* Compatível com Seeeduino (portas de E/S usam lógica de 3,3 V). Pode ser programado com a linguagem Processing do Arduino.

* Microcontrolador onboard: **ATMega328P**

* Chip de Relógio em Tempo Real onboard DS1337S (soquete para uma bateria tipo moeda CR1220, que atua como fonte de alimentação de backup para o RTC)

* Interface serial com DTR para auto reset durante a programação quando operando em modo autônomo. (Para programação, o [UartSBee](https://seeeddoc.github.io/UartSBee/) deve ser adquirido separadamente).

* Soquete para cartão microSD
* Header de pinos I2C (a tensão de operação é selecionável: 5,0 V ou 3,3 V)

* Interface Grove (a tensão de operação é selecionável: 5,0 V ou 3,3 V)

* Botões de reset para módulos XBee e ATMega328P

* **Soquete da série Bee** - conector 2*10 pinos, passo de 2,0 mm (que irá conectar - um de cada vez - qualquer um dos módulos sem fio: **XBee**, [BluetoothBee](/pt-br/Bluetooth_Bee "Bluetooth Bee"), [GPSBee](https://seeeddoc.github.io/Bluetooth_Bee/) ou [RFBee](https://seeeddoc.github.io/RFbee_V1.1-Wireless_Arduino_compatible_node/).)

## Especificação

<table >
<tr>
<th>Parâmetro</th>
<th>Valor</th>
</tr>
<tr>
<td>MCU</td>
<td>ATmega328</td>
</tr>
<tr>
<td>Oscilador de Cristal</td>
<td>8 MHz</td>
</tr>
<tr>
<td>RTC</td>
<td>DS1337S</td>
</tr>
<tr>
<td>Lógica de E/S</td>
<td>3,3 V</td>
</tr>
<tr>
<td>Placa para Arduino IDE</td>
<td>Arduino Pro ou Pro Mini (**3,3 V**, 8 MHz) c/ ATmega328</td>
</tr>
<tr>
<td>Fonte de Alimentação</td>
<td>Bateria LiPo de 3,7 V, usar painel solar de 5 VCC para carregar a bateria.</td>
</tr>
<tr>
<td>Conector de Alimentação</td>
<td>JST 2 pinos / USB</td>
</tr>
<tr>
<td>Conectividade</td>
<td>I<sup>2</sup>C, UART, SPI</td>
</tr>
<tr>
<td>Corrente em Circuito Aberto</td>
<td>6 mA máx</td>
</tr>
<tr>
<td>Corrente de Carga</td>
<td>300 mA</td>
</tr>
<tr>
<td>Corrente Máxima na porta de 3,3 V</td>
<td>800 mA</td>
</tr>
<tr>
<td>Tamanho da PCB</td>
<td>86,74 mm x 60,96 mm</td>
</tr>
</table>

## Ideias de Aplicação  

* Rede de Sensores Sem Fio (usando **XBee** - adquirido separadamente)

* Registro de GPS (usando [GPSBee](https://seeeddoc.github.io/GPS_Bee_kit/) - adquirido separadamente)

* Sistema de Aquisição de Dados capaz de se comunicar com um App rodando em iPhone/Android (usando [BluetoothBee](https://seeeddoc.github.io/Bluetooth_Bee/) - adquirido separadamente).

* Controle Remoto por RF (usando [RFBee](https://seeeddoc.github.io/RFbee_V1.1-Wireless_Arduino_compatible_node/) - adquirido separadamente).

* Como uma simples plataforma de computação física compatível com Arduino ([UartSBee](https://seeeddoc.github.io/UartSBee/) deve ser adquirido separadamente para programação).

## Visão Geral de Hardware

<span >Observe</span> que atualizamos e fizemos algumas modificações no Seeeduino Stalker (da versão v3.0 para a v3.1).

 1. Adicionamos uma chave para selecionar entre portas seriais de hardware (através de D0, D1) e porta serial por software (isto é, porta serial virtual; através de D5, D6). A chave está marcada em um retângulo azul como a seguir.

![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_v3.1_serial_port_switch_1200_s.jpg)

2. Para o circuito do RTC, agora há apenas uma fonte de alimentação (da bateria de lítio). E o modelo aplicável de bateria de polímero de lítio é CR1120.

3. Para o circuito do RTC, adicionamos duas chaves de duas posições para habilitar duas interrupções (INT A e INT B do RTC correspondem a INT0 e INT1 do MCU) para o MCU. Ambas as interrupções são usadas para ativar o MCU do modo de suspensão. Você precisa colocar essas chaves em **ON** antes de querer enviar uma interrupção.

4. Como o MCU está em modo de suspensão, você pode controlar (habilitar ou desabilitar) a entrada de energia no conector Bee e todos os pinos VCC de 3,3 V ou 5 V, enviando um sinal pelo pino D9.
5. Em modo de suspensão (para todos os módulos), a corrente de funcionamento será tão baixa quanto 100 μA.

![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeed_Stalker_v3.png)

* **RST para Bee:** Pressione este botão para reiniciar o módulo Bee. Porém, este botão de reset não afeta o estado da placa principal (ATmega328).

* **RST para ATmega328:** Pressione este botão para reiniciar a placa principal.

* **ATmega328:** O microcontrolador da placa principal. E o oscilador de cristal é de 8 MHz.

* **Soquete SD:** É conveniente armazenar dados em um cartão SD. **Há uma ilha de solda (P2) para soldagem a fim de ligar ou desligar a fonte de alimentação do cartão SD** via pino digital **D4**.

* **Soquete Bee:** Há provisão para a placa principal se comunicar com outros módulos sem fio via soquete Bee. **Há uma ilha de solda (P1) para ligar ou desligar a fonte de alimentação** via pino digital **D5**.

* **Painel Solar:** Capture a luz do sol e a transforme em energia através do painel solar, sem a limitação de um cabo USB.

* **Li-Po BAT:** Fornece alimentação para a placa principal via Li-Po BAT; a bateria pode ser carregada pelo painel solar.

* **CN3065:** Carregador de bateria de íons de lítio para sistemas alimentados por energia solar. Há também duas luzes indicadoras na placa, elas são "**OK**" e "**CH**" ao lado de Li-Po BAT, que significam "**Carregado**" e "**Carregando**", respectivamente.

* **TD6810:** Regulador redutor síncrono de 1,5 MHz e 800 mA, que fornece alimentação de 3,3 V para a placa principal.

* **RTC:** Relógio em Tempo Real serial I2C -- DS1337S. **E dois pinos de sinal de interrupção opcionais foram disponibilizados como ilhas de solda (P3 e P4).** Essas ilhas de jumper podem ser usadas para conectar o pino RTC /INTA ao pino digital **D2** e o RTC /INTB ao pino digital **D3**.

* **Bateria para RTC:** Uma bateria CR1220, para fornecer alimentação ao RTC de forma independente.

* **Conectores Grove:** Na placa existem dois conectores Grove, ou seja, I2C e D7. E você pode conectar produtos Grove diretamente na placa através desses conectores Grove.

* **Headers UartSBee:** Os headers UartSBee são usados com o UartSBee v4; você pode enviar programas para a placa principal através desses headers.

### Ilhas de Jumper na PCB

A parte inferior do Seeeduino Stalker V3 possui muitas ilhas de jumper na PCB para, opcionalmente, alterar a configuração/funcionalidade. A tabela abaixo fornece detalhes sobre elas.

| Nome da Ilha de Jumper | Aplicação                                                                                                                                                                                                                                                                                                                                                 | Circuito                                                                                                             |
|------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| P1                     | Soldar esta ilha de jumper habilita o pino digital D5 para ligar ou desligar a alimentação do soquete Bee                                                                                                                                                                                                                                                                                   | ![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_Jumper_Pad_P1.jpg)       |
| P2                     | Soldar estas ilhas de jumper habilita o pino digital D4 para ligar ou desligar a fonte de alimentação do SD.                                                                                                                                                                                                                                                                                 | ![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_Jumper_Pad_P2.jpg)       |
| P3                     | Soldar estas ilhas de jumper conecta o pino RTC /INTA ao pino digital **D2(INT0)**.                                                                                                                                                                                                                                                                                                          | ![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_Jumper_Pad_P3.jpg)       |
| P4                     | Soldar estas ilhas de jumper conecta o pino RTC /INTB ao pino digital **D3(INT1)**.                                                                                                                                                                                                                                                                                                          | ![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_Jumper_Pad_P4.jpg)       |
| P5                     | Esta ilha, por padrão, conecta BEE_TXD ao pino digital D0 (TXD UART H/W). Cortando a conexão existente na PCB e soldando na ilha adjacente, BEE_TXD pode ser conectado ao pino digital **D7** para serial por S/W. **Nota**: Existe um bug de hardware conhecido. Leia [aqui](https://seeeddoc.github.io/Seeeduino-Stalker_v3/#Known_Issue) para uma solução alternativa. | ![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_Jumper_Pads_P5andP6.jpg) |
| P6                     | Esta ilha, por padrão, conecta BEE_RXD ao pino digital D0 (RXD UART H/W). Cortando a conexão existente na PCB e soldando na ilha adjacente, BEE_RXD pode ser conectado ao pino digital **D6** para serial por S/W.                                                                                                                                                                           | ![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_Jumper_Pads_P5andP6.jpg) |

Além destes, há outros pads de jumper para WIRELESS_PROGRAMMING, RSSI_STATUS e CH_STATUS. Eles vêm conectados por padrão; consulte o esquemático se quiser modificar alguma funcionalidade.

## Primeiros Passos

Se você é novo no mundo da "Computação Física" e se **Seeeduino Stalker v3.0** é a primeira plataforma de computação física com a qual você quer começar, sugerimos que inicie com o [Seeeduino](https://seeeddoc.github.io/Seeeduino_v4.0/).

As etapas a seguir ajudarão você a montar os recursos de hardware e software para começar a trabalhar com o **Seeeduino Stalker v3.0**.

#### Etapa 1. Aquisição do hardware

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeed_Stalker_v3-1.png)

A imagem acima mostra o hardware e os componentes necessários para que o Seeeduino Stalker v3 se comunique com o PC. O Stalker não possui funcionalidade USB para Serial. Portanto, o **UartSBee** é necessário para programar o Stalker via PC. Outra placa conversora de USB para Serial pode ser usada para substituir o UartSBee v4.

**Nota: o UartSBee v4 precisa ser comprado separadamente**.

#### Etapa 2: Instalando os drivers e conectando o hardware  

1. O [UartSBee](https://seeeddoc.github.io/UartSBee/) é como o canivete suíço multiuso do mundo da Computação Física. Há um procedimento bem detalhado para usar o UartSBee tanto para usuários Windows quanto GNU/Linux [aqui](https://seeeddoc.github.io/UartSBee/).  No nosso caso, ele irá executar três funções:
    * Programar o Seeeduino Stalker.
    * Comunicar-se com o Seeeduino Stalker.
    * Fornecer energia (a partir da alimentação USB do PC) para o Seeeduino Stalker (incluindo quaisquer periféricos conectados a ele).

2. O UartSBee possui um regulador de tensão on-board e uma chave para selecionar a tensão da placa alvo (5,0V ou 3,3V). No caso do Seeeduino Stalker, ajuste essa chave deslizante para 5,0V.

3. O esquema de conexão de fiação do hardware é **"<font >Computador</font><font >→(Cabo Mini USB)→</font><font >UartSBee </font><font >→(Flat Ribbon Cable)→</font><font >Seeeduino Stalker</font>"**. Os fios jumper devem ser conectados entre o UartSBee e o Seeeduino Stalker antes de conectar o UartSBee ao Computador. **Nota: Os pinos TXD e RXD devem ser conectados de forma cruzada conforme mostrado na tabela**.
4. Conecte o cabo Mini USB do UartSBee ao PC. Se você estiver usando um PC com Windows, o balão "Found New Hardware" aparecerá e em alguns instantes os drivers FT232 serão instalados.

<font >**A tabela a seguir mostra a conexão entre Seeeduino Stalker v3 e UartSBee v4.**</font>

<table >
<caption>Conexão dos pinos</caption>
<tr><th>Seeeduino Stalker v3</th><th></th><th>UartSBee v4</th></tr>
<tr><td>5V</td><td>↔</td><td>VCC</td></tr>
<tr><td><font>RXD</font></td><td>↔</td><td><font>TXD</font></td></tr>
<tr><td><font>TXD</font></td><td>↔</td><td><font>RXD</font></td></tr>
<tr><td>GND</td><td>↔</td><td>GND</td></tr>
<tr><td>DTR</td><td>↔</td><td>DTR</td></tr>
</table>

## Demos

Baixe e instale a biblioteca DS1337 e os sketches disponíveis na seção de recursos. A biblioteca DS1337 inclui uma versão modificada da classe DateTime por Jean-Claude Wippler em [JeeLabs](http://jeelabs.net/projects/cafe/wiki/)

* Os sketches de demonstração de datalogger fazem uso da Biblioteca SD do Arduino.

### 1.RTC

<font >**Atenção: Você precisa soldar alguns pads ao usar o demo "Interrupts"**</font>

<table >
<caption><font>Como soldar</font></caption>
<tr><th>Pinos no RTC</th><th>Pads no Seeeduino Stalker v3</th><th>Pinos no ATmega328</th></tr>
<tr><td>INTA</td><td>P3</td><td>digital 2</td></tr>
<tr><td>INTB</td><td>P4</td><td>digital 3</td></tr>
</table>

#### Ajustar Data/Hora

* * *

* Configure a placa Arduino como `**Arduino Pro or Pro Mini (3.3V, 8MHz) w/ ATmega 328**`.

* Abra o exemplo **adjust.ino** da biblioteca DS1337

* Defina a data/hora atual usando o objeto da classe DateTime **dt** no exemplo:

  * `DateTime dt(year, month, date, hour, min, sec,week-day(starts from 0 and goes to 6));`

    * **Ex:-** `DateTime dt(2015, 10, 1, 11, 43, 0, 4);`

* compile e faça o upload para o **Seeeduino-Stalker v3**

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_v3_adjust.png)

#### Obter Data/Hora Atual

* * *

* Configure a placa Arduino como `**Arduino Pro or Pro Mini (3.3V, 8MHz) w/ ATmega 328**` .

* Abra o exemplo **now.ino** da biblioteca DS1337

* A data/hora atual é lida do DS1337 usando a função ` RTC.now() `.

  * **Ex:- `DateTime now = RTC.now();`**

* compile e faça o upload para o **Seeeduino-Stalker v3**

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_v3_now.png)

#### Exemplo de Interrupções DS1337

* * *

Este exemplo é uma demonstração da detecção de interrupção a partir da saída <span >INT</span> do DS1337. Este recurso é útil para a funcionalidade de data-logger, em que o MCU é colocado em modo de suspensão quando não está em uso e o DS1337 <span >INT</span> acorda a CPU periodicamente. Isso aumenta a duração da bateria. A operação completa está documentada no código.

* Solde o jumper P3.

  * Isso conecta o pino de saída de interrupção do DS1337 ao pino INT0 do ATmega328.

* Configure a placa Arduino como `**Arduino Pro or Pro Mini (3.3V, 8MHz) w/ ATmega 328**`.

* Abra o exemplo **interrupts.ino** da biblioteca DS1337

* compile e faça o upload para o **Seeeduino-Stalker v3**

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_v3_interrupt.png)

#### Exemplo de Data Logger

* * *

A principal aplicação do Seeeduino Stalker v3.0 é o registro de dados (data-logging) de sinais de sensores como tensão da bateria, etc., juntamente com o carimbo de data/hora. Este sketch coloca o MCU em modo de suspensão quando não está realizando operação de amostragem/registro de dados. A implementação completa está muito bem documentada no código. A seção seguinte oferece uma visão geral :

1. **StalkerV30_DataLogger_10Sec.ino**

    * Este sketch registra dados de tensão da bateria no cartão SD configurado pela função **`RTC.enableInterrupts(_h, m, s_)`**.
    * A _periodicidade_ é fornecida usando h, m e s. Uma vez que uma interrupção é detectada, o horário da próxima interrupção é atualizado avançando o valor de h, m e s. A classe DateTime é muito útil para isso.

        * ex:- `interruptTime = DateTime(interruptTime.get() + interruptInterval);  //decide the time for next interrupt`

        * Este sketch também produz saída detalhada, ou seja, os vários eventos que ocorrem dentro do MCU são exibidos no terminal serial.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Stalker_v3.0_datalogger_flowchart.png)

### Ler o status de carregamento

* * *

O status de carregamento da bateria pode ser lido usando o sketch abaixo. A bateria pode ser carregada conectando o painel solar na placa ou via UartSBee.

```
void setup()
{
  Serial.begin(57600);
  analogReference(INTERNAL);
  //analogRead(6);
}

void loop()
{
  char CH_status_print[][4]=
  {
    "off","on ","ok ","err"
  };
  unsigned char CHstatus = read_charge_status();//read the charge status
  Serial.print("charge status -->");
  Serial.println(CH_status_print[CHstatus]);
  delay(500);
}


unsigned char read_charge_status(void)
{
  unsigned char CH_Status=0;
  unsigned int ADC6=analogRead(6);
  if(ADC6>900)
  {
    CH_Status = 0;//sleeping
  }
  else if(ADC6>550)
  {
    CH_Status = 1;//charging
  }
  else if(ADC6>350)
  {
    CH_Status = 2;//done
  }
  else
  {
    CH_Status = 3;//error
  }
  return CH_Status;
}
```

### Lendo a tensão da bateria Li-Po

* * *

A tensão da bateria Li-Po conectada ao Seeeduino Stalker V3 pode ser lida pelo pino analógico A7. O sketch abaixo demonstra isso.

```
void setup(){
    Serial.begin(57600);
    analogReference(INTERNAL);
}

void loop() {

float voltage;
int BatteryValue;

    BatteryValue = analogRead(A7);
    voltage = BatteryValue * (1.1 / 1024)* (10+2)/2;  //Voltage devider

    Serial.print("Battery Voltage -> ");
    Serial.print(voltage);
    Serial.print("V   ");
    Serial.println();

    delay(500);
}
```

_Referência: [analogReference](https://arduino.cc/en/Reference/AnalogReference)_

## Informações adicionais para usar o módulo Bee

As tabelas a seguir mostram a conexão UART padrão entre o soquete Bee e o MCU ATMega328.

<table>
<caption><font>Como usar</font></caption>
<tr><th>Pinos no soquete Bee</th><th>Pinos no ATmega328</th></tr>
<tr><td>BEE_TXD</td><td>digital 0</td></tr>
<tr><td>BEE_RXD</td><td>digital 1</td></tr>
</table>

Além disso, você pode ligar ou desligar a alimentação do módulo Bee pelo pad opcional.

<font >Operação: na parte de trás do Seeeduino Stalker v3, você pode encontrar um pad de solda "P1". Solde o P1 e use o código a seguir para cortar a alimentação. </font>

<pre>
digitalWrite(5,HIGH);
</pre>

## Problema Conhecido

**Usuários afetados**: Este problema afeta aqueles que desejam usar o recurso opcional de conectar o Bee Socket à porta serial por software em vez da porta serial de hardware (padrão).

**Problema**: O jumper P5 não pode ser configurado para usar a porta serial por software cortando a conexão padrão e ressoldando (isto é) BEE_RXD não pode ser conectado a PD7 em vez de PD1 padrão simplesmente cortando/soldando o jumper conforme a [descrição do P5](https://seeeddoc.github.io/Seeeduino-Stalker_v3/#PCB_Jumper_Pads). Há um bug de hardware.

**Solução alternativa**:

1. Na camada superior, corte o trajeto do sinal PD1/TXD até o resistor R16, como mostrado nas figuras a seguir. Use uma faca afiada e corte a conexão com cuidado:

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/StalkerV3.0_P6Issue_1.jpg)

Antes da modificação

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/StalkerV3.0_P6Issue_Workaround.jpg)

Depois da modificação

2.Agora aplique o procedimento mencionado em <a href="/pt-br/Seeeduino-Stalker_v3#pcb-jumper-pads" ><span><font size={"3"}> Seeeduino-Stalker v3 </font></span></a> (isto é) corte o jumper e solde o pad do meio do Jumper P5 ao PD7.

## Layout da Placa

As imagens foram retiradas dos arquivos EAGLE

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_v3.0_Board.PNG)

Placa_Seeeduino_Stalker_v3.0

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_v3.0_Sceme_1.PNG)

Alimentação

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_v3.0_Sceme_2.PNG)

Arduino

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_v3.0_Sceme_3.PNG)

BEE TF

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/img/Seeeduino_Stalker_v3.0_Sceme_4.PNG)

RTC I2C

## Visualizador Online do Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/res/Seeeduino_Stalker_v3.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

* Software:

  * [Seeeduino Stalker V3 - biblioteca RTC DS1337](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/res/DS1337.zip)

  * [Seeeduino Stalker V3.0 - Exemplo de Datalogger](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/res/StalkerV30_DataLogger_10Sec.zip)

* Projeto:

  * [Seeeduino Stalker v3.0 - Esquemático em PDF &amp; arquivos EAGLE](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/res/Seeeduino_Stalker_v3.0.zip)

  * [Seeeduino Stalker v3.0 pdf](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/res/Seeeduino%20Stalker%20v3.0.pdf)

* [Esquemático do Seeeduino Stalker v3.0](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/res/Seeeduino%20Stalker%20v3.0.sch)

* Folhas de dados:

  * [Folha de dados do DS1337S](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/res/DS1337-DS1337C-99519.pdf)

  * [Folha de dados do CN3065)](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/res/CN3065.pdf)
  * [Folha de dados do CN3065 (Inglês)](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/res/DSE-CN3065.pdf)

  * [Folha de dados do TD6810](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/res/TD6810.pdf)

* Outros:

  * [Bootloader via AVRISP MKII](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/res/ATmegaBOOT_168_atmega328_pro_8MHz.hex.zip)

  * [Arquivo completo via Offline-AVRISP](https://files.seeedstudio.com/wiki/Seeeduino-Stalker_v3/res/Stalker_V2_Final.Prjt.zip)

## Suporte Técnico & Discussão de Produtos

   <br />
 Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
