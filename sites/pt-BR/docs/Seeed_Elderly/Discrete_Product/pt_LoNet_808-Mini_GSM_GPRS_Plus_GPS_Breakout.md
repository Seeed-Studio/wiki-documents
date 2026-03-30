---
description: LoNet 808 - Mini GSM/GPRS com GPS Breakout
title: LoNet 808 - Mini GSM/GPRS com GPS Breakout
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout
sku: 113990107
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-02'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/
---

![](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/113990107%200.jpg)

Esta placa é baseada no mais recente módulo SIMCOM SIM808 GSM/GPS, oferecendo dados celulares GSM e GPRS juntamente com tecnologia GPS para navegação por satélite.

A placa apresenta consumo de energia ultrabaixo no modo de espera, proporcionando tempos de espera incrivelmente longos ao projeto. Além disso, há um circuito de carregamento de bateria onboard que pode ser usado com baterias LiPo.

O receptor GPS é incrivelmente sensível com 22 canais de rastreamento e 66 de aquisição, e também suporta GPS assistido (A-GPS) para localização em ambientes internos. A placa é controlada por comando AT via UART e suporta nível lógico de 3,3V e 5V. Ela vem com uma antena mini GPS e GSM; entretanto, a bateria é opcional.

A placa utiliza redes GSM 2G (não 3G ou LTE).

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/LoNet-808-Mini-GSM%26GPRS-%2B-GPS-Breakout-p-2493.html)

## Recursos

- Quad-band 850/900/1800/1900MHz
- Conectividade GPRS classe multi-slot 12: máx. 85,6kbps (download/upload)
- Estação móvel GPRS classe B
- Controlado por comando AT (3GPP TS 27.007, 27.005 e comandos AT aprimorados SIMCOM)
- Suporta controle de carregamento para bateria de íon de lítio
- Suporta Relógio em Tempo Real
- Faixa de tensão de alimentação 3,4V ~ 4,4V
- GPS/CNSS integrado e suporta A-GPS
- Suporta nível lógico de 3,0V a 5,0V
- Baixo consumo de energia, 1mA em modo de espera
- Suporta protocolo GPS NMEA
- Tamanho compacto 27mm × 46mm × 10mm
- Cartão SIM padrão

## Especificações de GPS

- Canais do receptor: 22 de rastreamento / 66 de aquisição
- Código grosseiro/de aquisição: GPS L1
- Sensibilidade de rastreamento: -165dBm
- Tempo de partida a frio: 30s (típ.)
- Tempo de partida a quente: 1s (típ.)
- Tempo de partida morna: 28s (típ.)
- Precisão de posição horizontal: &lt;2,5m CEP
- Consumo de energia - Aquisição: 42mA
- Consumo de energia - Rastreamento contínuo: 24mA
- Taxa de atualização: 5Hz

## Interfaces

![](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/Mappings-01.png)

1. Botão de Alimentação: este é o interruptor físico de alimentação do módulo. Quando o módulo estiver energizado, você pode ligá-lo ou desligá-lo pressionando o botão por 2s.
2. Bateria de íon de lítio: esta é a fonte de alimentação do módulo, a tensão de entrada é de 3,4V a 4,4V. Usa o conector JST-2,0mm, o que torna conveniente conectá-lo a uma bateria Li-Po de 3,7V.
3. MicroUSB: a interface de carregamento para a bateria de íon de lítio, com faixa de tensão de entrada de 5V a 7V.
4. Antena GSM: este é um conector de antena GSM uFL; basta conectá-lo a uma antena GSM para receber sinal GSM.
5. Antena GPS: este é um conector de antena GPS uFL. Você pode conectar uma antena GPS passiva ou ativa a ele. A antena GPS ativa funciona a 2,8V.
6. Indicador de Rede: LED vermelho, ele irá indicar o status do módulo em relação à conexão com a rede.
7. Indicador de Status: LED verde, ele irá indicar se o módulo está ligado, aceso quando o módulo está em execução.
8. Pino Breakout: consulte Definições de Pinos para mais detalhes.
9. Suporte para Cartão SIM: suporte de cartão SIM para cartão SIM padrão
10. Pino de Alimentação: usado para soldagem de alimentação e testes.

### Definições de Pinos

| Nome | I/O | Descrição | Observação |
|------|-----|-------------|------|
| BAT | I/O | Entrada / saída de alimentação | 3,4V - 4,4V DC |
| GND | I/O | Terra de alimentação / terra lógico | |
| VIO | I | Referência de nível lógico | 2,8V - 5,0V DC |
| DTR | I | Pino de controle do modo de espera | Puxar para alto para modo de espera |
| PWR | O | Interruptor de alimentação | Ativo em nível baixo por 2s |
| RI | O | Pino de evento/mensagem | |
| TXD | O | Transmitir dados | Saída UART do SIM808 |
| RXD | I | Receber dados | Entrada UART para SIM808 |
| RST | I | Pino de reset | Ativo em nível baixo |

### LEDs Indicadores

| LEDs Indicadores | Status | Comportamento |
|----------------|---------|-----------|
| Status de Operação (Verde) | Off | SIM808 não está em execução |
| | On | SIM808 está em execução |
| Status de Rede (Vermelho) | Off | SIM808 não está em execução |
| | 64ms on/ 800ms Off | SIM808 não registrado na rede |
| | 64ms On/ 3000ms Off | SIM808 registrado na rede |
| | 64ms On/ 300ms Off | Comunicação PPP GPRS está estabelecida |

## Acessórios

Além da antena, você pode precisar dos seguintes acessórios para usar com o LoNet 808:

| Acessório | Descrição |
|-----------|-------------|
| ![SIM-Card](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/Simcard.jpg) | **SIM-Card**<br/>para comunicação GSM/GPRS |
| [![3.7V Li-ion Battery](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/Battery_2200ma.jpg)](https://www.seeedstudio.com/depot/Polymer-Lithium-Ion-Battery-2200mAh-37V-p-1709.html?cPath=1_3) | **Bateria de íon de lítio 3,7V**<br/>para alimentação |
| [![DC/DC Voltage Regulator](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/Power_Converter.jpg)](https://www.seeedstudio.com/depot/Adjustable-DCDC-Power-Converter-125V-35V3A-p-1534.html?cPath=1_4) | **Regulador de Tensão DC/DC**<br/>para alimentação |
| [![MicroUSB Cable](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/100cmUSBc.jpg)](https://www.seeedstudio.com/depot/USB-To-Uart-5V3V3-p-1832.html) | **Cabo MicroUSB**<br/>para carregar a bateria |
| [![USB to UART Tool](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/USB_To_Uart_5V3V3.jpg)](https://www.seeedstudio.com/depot/USB-To-Uart-5V3V3-p-1832.html) | **Ferramenta USB para UART**<br/>para testar comandos AT no PC |
| [![Solar Panel](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/3wsp.JPG)](https://www.seeedstudio.com/depot/3W-Solar-Panel-138X160-p-954.html?cPath=1_118) | **Painel Solar**<br/>para carregar a bateria |

## Uso

### Circuito de Referência

**Conectar ao MCU**

![](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/C1-01.png)

**Conectar ao PC**

![](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/img/C2-01.png)

### Primeiros Passos com Comandos AT

O módulo é controlado por comando AT via porta serial; aqui usamos o Arduino como ferramenta USB para serial. Faça upload do código a seguir para o Arduino e abra o monitor serial. Se você usar outras ferramentas USB para serial, pode usar o [AT Command Tester](/pt-br/AT_Command_Tester_Application) ou [SSCOM32](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/res/Sscom32E.zip) para testar comandos AT.

```arduino
// this sketch is used for testing LoNet with Arduino

// Connect VIO to +5V
// Connect GND to Ground
// Connect RX (data into SIM808) to Digital 11
// Connect TX (data out from SIM808) to Digital 10

#include <SoftwareSerial.h>

SoftwareSerial mySerial(10, 11); // RX, TX

void setup()
{
    // Open serial communications and wait for port to open:
    Serial.begin(9600);
    mySerial.begin(9600);
}

void loop() // run over and over
{
    if (mySerial.available())
        Serial.write(mySerial.read());

    if (Serial.available())
    {
        while(Serial.available())
        {
            mySerial.write(Serial.read());
        }
        mySerial.println();
    }
}
```

#### Configurar Baud Rate e Habilitar Função de Carregamento

Recomenda-se executar este processo na primeira vez que usar o módulo. Nas colunas do Serial Monitor das tabelas a seguir, as entradas de comandos AT estão em preto, e os valores retornados pelo módulo estão em laranja.

| Serial Monitor | Descrição |
|---------------|-------------|
| AT<br/>OK | Envie o comando "AT" para sincronizar a taxa de baud. A porta serial do módulo é, por padrão, configurada no modo de baud automático e, nesse modo, não emitirá nenhuma indicação quando o módulo estiver ligado. |
| AT+IPR=9600<br/>OK | Defina a taxa de baud em 9600bps; suporta taxas de 1200bps a 115200bps. |
| AT+ECHARGE=1<br/>OK | Envie o comando "AT+ECHARGE=1" para habilitar a função de carregamento da bateria. Por padrão, a função de carregamento vem desabilitada. |
| AT&W<br/>OK | Salvar configuração de parâmetros. |
| AT+CPOWD=1<br/>NORMAL POWER DOWN | Desligar o módulo. |
| RDY<br/>+CFUN: 1<br/>GPS Ready<br/>+CPIN: READY<br/>Call Ready<br/>SMS Ready | Ligue novamente o módulo pelo botão de alimentação; ele retornará o status sobre GPS e GSM. |
| AT+CBC<br/>+CBC: 1,96,4175<br/>OK | Consultar status de carregamento e capacidade restante da bateria. |
| AT+CSQ<br/>+CSQ: 14,0<br/>OK | Consultar qualidade do sinal GSM. |

#### Obter localização com GPS

| Serial Monitor | Descrição |
|---------------|-------------|
| AT+CGPSPWR=1<br/>OK | Ligar GPS |
| AT+CGPSSTATUS?<br/> +CGPSSTATUS: Location Not Fix<br/>OK | Ler status de fixação do GPS; "Location Not Fix" significa que o posicionamento não foi bem sucedido. Na primeira inicialização, levará pelo menos 30s. _**O GPS deve ser testado na janela ou ao ar livre.**_ |
| AT+CGPSSTATUS?<br/> +CGPSSTATUS: Location 3D Fix<br/>OK | O GPS foi fixado com status 3D. |
| AT+CGPSINF=0<br/> +CGPSINF:<br/> 0,2234.931817,11357.122485,<br/>92.461185,20141031041141.000,<br/>88,12,0.000000,0.000000 | Obter as informações de localização GPS atuais. Formato dos parâmetros: &lt;mode&gt;, &lt;altitude&gt;, &lt;longitude&gt;, &lt;UTC time&gt;, &lt;TTFF&gt;, &lt;num&gt;, &lt;speed&gt;, &lt;course&gt; |
| AT+CGPSOUT=32<br/>OK<br/>$GPRMC,043326.000,A,<br/>2234.9414,N,11357.1187,E,<br/>0.000,143.69,311014,,,A*50 | Ler dados NMEA $GPRMC, nos quais "2234.9414 N, 11357.1187 E" são as coordenadas de localização. Para mais detalhes sobre sentenças NMEA, [consulte este site](http://www.gpsinformation.org/dale/nmea.htm). |
| AT+CGPSRST=0<br/>OK | Reiniciar GPS em modo de partida a frio (Cold Start). |
| AT+CGPSRST=1<br/>OK | Reiniciar GPS em modo de partida a quente (Hot Start). |
| AT+CGPSPWR=0<br/>OK | Desligar GPS. |

## Downloads

- [LoNet_808_Schematic](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/res/LoNet_808_Schematic.pdf)
- [SIM800_ATCommand_Manual](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/res/SIM800_ATCommand_Manual_V1.02.pdf)
- [SIM808_HardwareDesign_Manual](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/res/SIM808_Hardware_Design_V1.00.pdf)
- [SIM808_GPSApplication_Note](https://files.seeedstudio.com/wiki/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout/res/SIM808_GPS_Application_Note_V1.00.pdf)

## Recursos

- [Biblioteca GPRS_Shield no gitHub](https://github.com/Seeed-Studio/GPRS_Shield_Suli)
- [Adafruit_FONA_Library](https://github.com/adafruit/Adafruit_FONA_Library/)

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
