---
description: Mini GSM/GPRS GPS Breakout SIM808
title: Mini GSM/GPRS GPS Breakout SIM808
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Mini_GSM_GPRS_GPS_Breakout_SIM808
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-02'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Mini_GSM_GPRS_GPS_Breakout_SIM808/
---

## Visão Geral  

Esta placa é baseada no mais recente módulo GSM/GPS SIMCOM SIM808, oferecendo dados celulares GSM e GPRS juntamente com tecnologia GPS para navegação por satélite.

A placa apresenta consumo de energia ultrabaixo no modo de suspensão, proporcionando tempos de espera incrivelmente longos ao projeto. Além disso, há um circuito de carregamento de bateria onboard que pode ser usado com baterias LiPo.

O receptor GPS é extremamente sensível com 22 canais de rastreamento e 66 de aquisição, e também suporta GPS assistido (A-GPS) para localização em ambientes internos. A placa é controlada por comando AT via UART e suporta nível lógico de 3,3 V e 5 V. Ela vem com uma mini antena GPS e GSM, porém a bateria é opcional.

A placa usa redes GSM 2G (não 3G ou LTE).

## Recursos

- Quad-band 850/900/1800/1900MHz

- Conectividade GPRS multi-slot classe 12: máx. 85,6kbps (download/upload)

- Estação móvel GPRS classe B

- Controlada por comando AT (3GPP TS 27.007, 27.005 e comandos AT aprimorados da SIMCOM)

- Suporta controle de carregamento para bateria de íon de lítio

- Suporta Relógio de Tempo Real (RTC)

- Faixa de tensão de alimentação de 3,4 V ~ 4,4 V

- GPS/CNSS integrado e suporta A-GPS

- Suporta nível lógico de 3,0 V a 5,0 V

- Baixo consumo de energia, 1mA em modo de suspensão

- Suporta protocolo GPS NMEA

- Tamanho compacto 27mm x 46mm x 10mm

- Cartão SIM padrão

## Especificações do GPS

- Canais do receptor: 22 de rastreamento / 66 de aquisição

- Código Grosso/Aquisição: GPS L1

- Sensibilidade de rastreamento: -165dBm

- Tempo de inicialização a frio: 30s (típ.)

- Tempo de inicialização a quente: 1s (típ.)

- Tempo de inicialização morna: 28s (típ.)

- Precisão de posição horizontal: &lt; 2,5m CEP

- Consumo de energia - Aquisição: 42mA

- Consumo de energia - Rastreamento contínuo: 24mA

- Taxa de atualização: 5Hz

## Bloco Funcional  

![](https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/img/Lonet_pcb_top.jpg)

- Antena GPS: este é um conector de antena GPS uFL. Você pode conectar uma antena GPS passiva ou ativa a ele. A antena GPS ativa funciona em tensão de 2,8 V.

- MicroUSB: a interface de carregamento para bateria de íon de lítio, com faixa de tensão de entrada de 5V a 7V.

- Botão de Energia: este é o interruptor de energia física do módulo. Quando o módulo está alimentado, você pode ligá-lo ou desligá-lo pressionando o botão por 2s.

- Indicador de Rede: LED vermelho, ele indicará o status da conexão do módulo à rede. Pode ser desligado pelo jumper LEDs_EN.

- Indicador de Status: LED verde, ele indicará se o módulo está ligado, aceso quando o módulo está em funcionamento. Pode ser desligado pelo jumper LEDs_EN.

- Bateria de íon de lítio: esta é a alimentação do módulo, a tensão de entrada é de 3,4 V a 4,4 V. Usa o conector JST-2,0mm, o que facilita a conexão a uma bateria Li-Po de 3,7 V.

- Antena GSM: este é um conector de antena GSM uFL, basta conectá-lo a uma antena GSM para receber sinal GSM.

- Suporte para Cartão SIM: suporte de cartão SIM para cartão SIM padrão

### Definições dos Pinos

<table>
<tr>
<th scope="col">Name</th>
<th scope="col">I/O</th>
<th scope="col">Description</th>
<th scope="col">Note</th>
</tr>
<tr>
<td>BAT</td>
<td></td>
<td>Entrada / saída de alimentação</td>
<td>3.4V - 4.4V DC</td>
</tr>
<tr>
<td>GND</td>
<td></td>
<td>Terra de alimentação / terra lógico</td>
<td></td>
</tr>
<tr>
<td>VIO</td>
<td>I</td>
<td>Referência de nível lógico</td>
<td>3.0V - 5.0V DC</td>
</tr>
<tr>
<td>DTR</td>
<td>I</td>
<td>Pino de despertar para o módulo em modo de suspensão</td>
<td></td>
</tr>
<tr>
<td>PWR</td>
<td>O</td>
<td>Interruptor de energia</td>
<td>Pulso em nível baixo</td>
</tr>
<tr>
<td>RI</td>
<td>O</td>
<td>Pino de evento/mensagem</td>
<td></td>
</tr>
<tr>
<td>TXD</td>
<td>O</td>
<td>Transmitir dados</td>
<td>Saída UART do SIM808</td>
</tr>
<tr>
<td>RXD</td>
<td>I</td>
<td>Receber dados</td>
<td>Entrada UART para SIM808</td>
</tr>
<tr>
<td>RST</td>
<td>I</td>
<td>Reset do módulo</td>
<td></td>
</tr>
</table>

### LEDs Indicadores

<table>
<tr>
<th scope="col">Indicator LEDs</th>
<th scope="col">Status</th>
<th scope="col">Behavior</th>
</tr>
<tr>
<td>Status de Operação (Verde)</td>
<td>Off</td>
<td>SIM808 não está em execução</td>
</tr>
<tr>
<td></td>
<td>On</td>
<td>SIM808 está em execução</td>
</tr>
<tr>
<td>Status da Rede (Vermelho)</td>
<td>Off</td>
<td>SIM808 não está em execução</td>
</tr>
<tr>
<td></td>
<td>64ms on/ 800ms Off</td>
<td>SIM808 não registrado na rede</td>
</tr>
<tr>
<td></td>
<td>64ms On/ 3000ms Off</td>
<td>SIM808 registrado na rede</td>
</tr>
<tr>
<td></td>
<td>64ms On/ 300ms Off</td>
<td>Comunicação PPP GPRS estabelecida</td>
</tr>
</table>

## Uso  

### Produto Relacionado

O módulo vem com uma mini antena GPS e GSM, mas não inclui bateria Li-Po. Além disso, para usar este módulo, você ainda precisa de um cartão SIM desbloqueado que ofereça serviço GPRS.

- Bateria de íon de lítio 3,7 V
- Cartão SIM
- Ferramenta USB para UART

### Circuito de Referência

![](https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/img/Rerfer_Circuit_SIM808.png)

### Primeiros Passos com Comando AT

O módulo é controlado por comando AT via porta serial, aqui usamos Arduino como ferramenta USB para serial. Carregue o código a seguir no Arduino e abra o monitor serial. Se você usar outras ferramentas USB para serial, pode usar o [AT Command Tester](https://seeeddoc.github.io/AT_Command_Tester_Application/) ou o [SSCOM32](https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/res/Sscom32E.zip) para testar comandos AT.

```c
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

#### Definir Baud Rate e Ativar Função de Carregamento

Recomenda-se executar este processo na primeira vez que usar o módulo. Nas colunas do Monitor Serial das tabelas a seguir, as entradas de comandos AT estão em preto, os valores retornados pelo módulo estão em laranja.

<table cellPadding="0">
<tr>
<th scope="col" width="50"> Serial Monitor</th>
<th scope="col" width="100"> Description</th>
</tr>
<tr>
<td> AT <span style={{color: 'rgb(242,133,0)'}}>OK</span> </td>
<td> Envie o comando "AT" para sincronizar a taxa de baud. A porta serial do módulo é por padrão configurada em modo de baud automático e, nesse modo, não exibirá nenhuma indicação quando o módulo estiver ligado.</td>
</tr>
<tr>
<td> AT+IPR=9600 <span style={{color: 'rgb(242,133,0)'}}>OK</span></td>
<td> Define a taxa de baud em 9600bps, suporta taxa de 1200bps a 115200bps.</td>
</tr>
<tr>
<td> AT+ECHARGE=1 <span style={{color: 'rgb(242,133,0)'}}>OK</span></td>
<td> Envie o comando "AT+ECHARGE=1" para ativar a função de carregamento de bateria. Por padrão a função de carregamento está desativada.</td>
</tr>
<tr>
<td> AT&amp;W <span style={{color: 'rgb(242,133,0)'}}>OK</span></td>
<td> Salvar configuração de parâmetros.</td>
</tr>
<tr>
<td> AT+CPOWD=1 <span style={{color: 'rgb(242,133,0)'}}>NORMAL POWER DOWN</span></td>
<td>Desligar o módulo.</td>
</tr>
<tr>
<td>
<span style={{color: 'rgb(242,133,0)'}}>RDY
+CFUN: 1
GPS Ready
+CPIN: READY
Call Ready
SMS Ready</span>
</td>
<td>Ligue o módulo novamente pelo botão de energia, ele responderá com o status sobre GPS e GSM.</td>
</tr>
<tr>
<td> AT+CBC <span style={{color: 'rgb(242,133,0)'}}> +CBC: 1,96,4175 OK</span></td>
<td>Consultar status de carregamento e capacidade restante da bateria.</td>
</tr>
<tr>
<td> AT+CSQ <span style={{color: 'rgb(242,133,0)'}}> +CSQ: 14,0 OK</span></td>
<td>Consultar qualidade do sinal GSM.</td>
</tr>
</table>

#### Obter localização com GPS

<table cellPadding="0">
<tr>
<th scope="col" width="11"> Serial Monitor</th>
<th scope="col" width="700"> Description</th>
</tr>
<tr>
<td> AT+CGPSPWR=1 <span style={{color: 'rgb(242,133,0)'}}>OK</span> </td>
<td> Abrir GPS</td>
</tr>
<tr>
<td> AT+CGPSSTATUS? <span style={{color: 'rgb(242,133,0)'}}> +CGPSSTATUS: Location Not FixOK</span></td>
<td> Ler o status de fixação do GPS, "Location Not Fix" significa que o posicionamento não foi bem-sucedido. Na primeira inicialização, levará pelo menos 30s. _**O GPS deve ser testado próximo à janela ou ao ar livre.**_</td>
</tr>
<tr>
<td> AT+CGPSSTATUS? <span style={{color: 'rgb(242,133,0)'}}> +CGPSSTATUS: Location 3D Fix OK</span></td>
<td> O GPS foi fixado com status 3D.</td>
</tr>
<tr>
<td> AT+CGPSINF=0 <span style={{color: 'rgb(242,133,0)'}}> +CGPSINF: 0,2234.931817,11357.122485,92.461185,20141031041141.000,88,12,0.000000,0.000000 </span></td>
<td> Obter as informações atuais de localização do GPS. Formato dos parâmetros: &lt;mode&gt;, &lt;altitude&gt;, &lt;longitude&gt;, &lt;UTC time&gt;, &lt;TTFF&gt;, &lt;num&gt;, &lt;speed&gt;, &lt;course&gt;</td>
</tr>
<tr>
<td>
AT+CGPSOUT=32
<span style={{color: 'rgb(242,133,0)'}}>OK
\$GPRMC,043326.000,A,
2234.9414,N,11357.1187,E,
0.000,143.69,311014,,,A*50 </span>
</td>
<td> Ler dados NMEA \$GPRMC, dos quais "2234.9414 N, 11357.1187 E" são as coordenadas de localização. Para mais detalhes sobre sentenças NMEA, [verifique este site](http://www.gpsinformation.org/dale/nmea.htm).</td>
</tr>
<tr>
<td>
AT+CGPSRST=0
<span style={{color: 'rgb(242,133,0)'}}> OK</span>
</td>
<td>Reiniciar GPS em modo de inicialização a frio (Cold Start).</td>
</tr>
<tr>
<td> AT+CGPSRST=1 <span style={{color: 'rgb(242,133,0)'}}> OK</span></td>
<td>Reiniciar GPS em modo de inicialização a quente (Hot Start).</td>
</tr>
<tr>
<td> AT+CGPSPWR=0 <span style={{color: 'rgb(242,133,0)'}}> OK</span></td>
<td>Fechar GPS.</td>
</tr>
</table>

## Recursos  

- **[PDF]**   [LoNet_DesignSchematic](https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/res/LoNet_DesignSchematic.pdf)

- **[PDF]**    [SIM800_ATCommand_Manual](https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/res/SIM800_ATCommand_Manual_V1.02.pdf)

- **[PDF]**   [SIM808_HardwareDesign_Manual](https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/res/SIM808_Hardware_Design_V1.00.pdf)

- **[PDF]**   [SIM808_GPSApplication_Note](https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/res/SIM808_GPS_Application_Note_V1.00.pdf)

- **[Library]**    [Biblioteca GPRS_Shield no gitHub](https://github.com/Seeed-Studio/GPRS_Shield_Suli)

- **[Library]**   [Adafruit_FONA_Library](https://github.com/adafruit/Adafruit_FONA_Library/)

## Projetos Relacionados

É uma pena que ainda não tenhamos nenhum demo sobre LoNet-GSM/GPRS/GPS Breakout na [Recipe](https://www.seeedstudio.com/recipe/).

Publique seu projeto incrível sobre LoNet-GSM/GPRS/GPS Breakout para <span style={{color: '#FF0000'}}>ganhar um cupom de US$ 100!</span>. Sinta-se à vontade para entrar em contato conosco: **recipe@seeed.cc**

Aqui apresentamos alguns projetos sobre o [GPRS Shield](https://www.seeedstudio.com/depot/GPRS-Shield-V30-p-2333.html) como referência.

### O que é o GPRS Shield

![](https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/img/113030009_1.jpg)

Recursos:

- Compatível com Arduino padrão e Arduino Mega

- Suporte a quad band: 850/900/1800/1900MHz

- Controle completo via conjunto de comandos AT: Padrão - GSM 07.07 &amp; 07.05 e Aprimorado - Comandos AT SIMCOM

- Suporta protocolos TCP/UDP

### Controle Remoto por SMS

![](https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/img/54c720959dae7.JPG)

Este projeto descreve como ligar e desligar seu aquecedor de água via SMS e verificar se ele está ligado ou desligado.

Ele é confiável, seguro, fácil e flexível por causa dos motivos abaixo:

- Os comandos são sempre respondidos e as mensagens perdidas são solicitadas novamente

- Usa proteção por senha de 128 bits

- O pfodDesigner gera todo o código, e você pode usá-lo para criar seu próprio menu personalizado.

- Todas as telas pfod estão disponíveis via SMS, como submenus, listas de seleção múltipla e simples, entrada de texto, registro e plotagem de dados.

[**Quero fazer isso.**](https://www.seeedstudio.com/recipe/98-sms-remote-control.html)

### Telefone Arduino

![](https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/img/Recipe-arduinophone.png)

Arduino phone é um celular feito por nós mesmos combinando Arduino e outros módulos shield.

Este projeto nos mostra o que você precisa fazer quando os apps do Arduino Phone não atendem às suas necessidades.

Este Arduino Phone contém as seguintes funções principais.

- receber e enviar mensagens, entrada de letras

- fazer e atender chamadas

- exibição de relógio em tempo real

- Uma interface de usuário conveniente e concisa

[**Quero fazer isso.**](https://www.seeedstudio.com/recipe/37-arduinophone.html)

[**Mais Projetos Incríveis com GPRS**](https://www.seeedstudio.com/recipe/index.php?query=GPRS)

### Compartilhe Seus Projetos Incríveis Conosco

Nascido com o espírito de fazer e compartilhar, é isso que acreditamos que torna alguém um maker.

E é somente por causa disso que a comunidade de código aberto pode ser tão próspera como é hoje.

Não importa o que você é e o que você fez, hacker, maker, artista ou engenheiro.

Desde que você comece a compartilhar seus trabalhos com os outros, você está fazendo parte da comunidade de código aberto e está fazendo suas contribuições.

Agora compartilhe seus projetos incríveis conosco na [Recipe](https://www.seeedstudio.com/recipe/), e ganhe a chance de se tornar um Usuário Core da Seeed.

- Usuários Core são aqueles que mostram alto interesse nos produtos Seeed e fazem contribuições significativas na Recipe.
- Cooperamos com nossos Usuários Core no desenvolvimento de nossos novos produtos, isto é, em outras palavras, os Usuários Core terão a chance de experimentar quaisquer novos produtos da Seeed antes de seu lançamento oficial, e em troca esperamos feedback valioso deles para nos ajudar a melhorar o desempenho do produto e a experiência do usuário. E na maioria dos casos, quando nossos Usuários Core têm boas ideias para fazer coisas, nós oferecemos peças de hardware, serviços de PCBA, bem como suporte técnico. Além disso, uma cooperação comercial futura com os Usuários Core é altamente possível.

<span style={{color: '#FF0000'}}>Para obter mais informações sobre Usuário Core, envie um e-mail para:</span> **recipe@seeed.cc**

## Suporte

Para qualquer suporte técnico, entre em contato com [_support@deegou.com_](http://www.deegou.com)

## Suporte Técnico &amp; Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
