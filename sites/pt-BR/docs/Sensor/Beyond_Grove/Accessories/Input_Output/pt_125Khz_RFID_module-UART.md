---
title: Módulo RFID 125Khz - UART
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/125Khz RFID module - UART/
slug: /125Khz_RFID_module-UART
sku: 113990014
last_update:
  date: 02/03/2022
  author: gunengyu
createdAt: '2022-03-02'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/125Khz_RFID_module-UART/
---
![https://www.seeedstudio.com/depot/images/product/P1240147.jpg](https://files.seeedstudio.com/wiki/125Khz_RFID_module-UART/img/125khz20uart.jpg)

O mini-módulo de cartão RDM 125KHz é projetado para leitura de código de cartões 125KHz compatíveis com tags somente leitura e cartões/tag de leitura/gravação. Ele pode ser aplicado em sistemas de segurança para escritório/casa, identificação pessoal, controle de acesso, antifalsificação, brinquedos interativos e sistemas de controle de produção etc.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/125Khz-RFID-module-UART-p-171.html)

**Nota:** O módulo notificará sempre que uma tag de 125khz se aproximar, o número de série da tag será enviado via pino TX. Modo simples de usar um módulo RFID em projetos com MCU ou conexão ao PC via UartSB.

##   Recursos

*   Suporta antena externa
*   Distância máxima efetiva de até 50mm
*   Tempo de decodificação menor que 100ms
*   Interface UART TTL
*   Suporta tags somente leitura ou de leitura/gravação compatíveis com EM4100
*   Driver de LED bicolor externo e buzzer embutido
*   Design de pequeno formato

##   Especificação

Pode incluir especificações principais e outras especificações.

###   Especificação Principal

<table>
<tr>
<td width="300px">Frequência</td>
<td width="500px">125KHz</td>
</tr>
<tr>
<td>Taxa de baud</td>
<td>9600 (Nível elétrico TTL, formato RS232)</td>
</tr>
<tr>
<td>Interface</td>
<td>Weigang26 ou nível elétrico TTL formato RS232</td>
</tr>
<tr>
<td>Fonte de alimentação</td>
<td>DC 5V（±5%）</td>
</tr>
<tr>
<td>Corrente</td>
<td>&lt;50Ma</td>
</tr>
<tr>
<td>Faixa de operação</td>
<td>&gt;50mm (Depende do formato do cartão/tag e do fabricante)</td>
</tr>
<tr>
<td>Porta de I/O de expansão</td>
<td>N/A</td>
</tr>
<tr>
<td>Luz de indicação</td>
<td>N/A</td>
</tr>
<tr>
<td>Temperatura de trabalho</td>
<td>-10℃~ +70℃</td>
</tr>
<tr>
<td>Temperatura de armazenamento</td>
<td>-20℃~ +80℃</td>
</tr>
<tr>
<td>Umidade máx.</td>
<td>Umidade relativa 0 ~ 95%</td>
</tr>
<tr>
<td>Tamanho</td>
<td>38.5mm ×19mm×9mm</td>
</tr>
</table>

##   Definição de pinos e classificação

Veja a imagem abaixo (dimensões mecânicas) e verifique aqui a lista de definição de pinos:

<pre>
Pin Definition :
P1:
  PIN1    TX
  PIN2    RX
  PIN3
  PIN4    GND
  PIN5    +5V(DC)
P2:
  PIN1    ANT1
  PIN2    ANT2
P3:
  PIN1    LED
  PIN2    +5V(DC)
  PIN3    GND
</pre>

##   Dimensões mecânicas

![](https://files.seeedstudio.com/wiki/125Khz_RFID_module-UART/img/RFID-wiegand-dimen.JPG)

##   Uso

###   Formato de saída de dados RS232 da interface TTL

1.  9600bps,N,8,1
2.  CHECKSUM: todos os 10 bytes de DADOS do cartão fazem operação XOR
<table>
<tr>
<td width="100px">02</td>
<td width="300px">10 caracteres de dados ASCII</td>
<td width="100px">Chechsum</td>
<td width="100px">03</td>
</tr>
</table>

Exemplo: número do cartão: 62E3086CED

*   Dados de saída:36H、32H、45H、33H、30H、38H、36H、43H、45H、44H
*   CHECKSUM: (62H) XOR (E3H) XOR (08H) XOR (6CH) XOR (EDH)=08H

####   Diagrama de sequência de tempo

![](https://files.seeedstudio.com/wiki/125Khz_RFID_module-UART/img/RFID-wiegand-time-seq.JPG)

###   Exemplo

![](https://files.seeedstudio.com/wiki/125Khz_RFID_module-UART/img/125k_RFID_uasge.JPG)

Dados de saída (HEX): 02 | 30 31 30 30 30 37 33 34 45 30 | 44 32 | 03
-&gt;Converter para decimal
Número do cartão em decimal: 48 49 48 48 48 55 51 52 69 48
CheckSum em decimal: 68 50
-&gt;Consultar a tabela ASCII, obter o valor ASCII
Número do cartão em ASCII: 0 1 0 0 0 7 3 4 E 0
CheckSum ASCII : D 2
(01H) xor (00H) xor (07H) xor (34H) xor (E0H) = D2H

###   Programação

Conecte RX/TX à porta UART do Arduino, código de demonstração Uart:
```
void setup()
{
  Serial.begin(9600);
}
void loop()
{
  if(Serial.available())
  {
    while(Serial.available())
    Serial.write(Serial.read());
  }
}
```

##   Recursos

*   Datasheet: [RDM630-Spec.pdf](https://files.seeedstudio.com/wiki/125Khz_RFID_module-UART/res/RDM630-Spec.pdf)

*   [Como conectar Arduino e RFID](https://www.instructables.com/id/Arduino-and-RFID-from-seeedstudio/)

## Suporte Técnico & Discussão de Produto
 se você tiver qualquer problema técnico, envie a questão em nosso [fórum](http://forum.seeedstudio.com/). 
Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>