---
description: Seeeduino Stalker
title: Seeeduino Stalker
keywords:
  - Seeeduino
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Seeeduino_Stalker
last_update:
  date: 1/31/2023
  author: shuxu hu
createdAt: '2023-02-01'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Seeeduino_Stalker/
---

**Seeeduino Stalker** é um nó de **Rede de Sensores Sem Fio** compatível com Arduino e rico em recursos, com **funcionalidade de registrador de dados**. Sua estrutura modular e periféricos integrados tornam conveniente registrar dados de sensores com carimbo de data e hora de forma periódica. O **Seeeduino Stalker** vem com um _sensor de temperatura, RTC com alimentação de backup, soquete para cartão SD, soquete Bee e carregador de bateria de íons de lítio LiPoimer solar_. O **Seeeduino Stalker** é um bom candidato para todos os seus projetos de rastreamento, monitoramento e controle.

Observe que a versão atual (e também a mais recente) é o Seeeduino-Stalker v3.

Clicar nas imagens abaixo levará você à documentação da versão correspondente.

|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker/img/Seeeduino-stalker-168.jpg)   |![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker/img/Stalkerv21.jpg)   |![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker/img/Seeduino_Stalker_v2.1.jpg)   |![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker/img/Seeduino_Stalker_v2.2.jpg)   | ![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker/img/Seeduino_Stalker_v2.2.jpg)| ![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker/img/Seeed_Stalker_v3-6.png)|
|---|---|---|---|---|---|
| Seeeduino Stalker v1.0  |Seeeduino Stalker v2.0   |Seeeduino Stalker v2.1   |Seeeduino Stalker v2.2   | Seeeduino Stalker v2.3  | Seeeduino-Stalker v3  |

### Comparação entre várias versões do Seeeduino Stalker  

<table>
<tr>
<th>Parâmetro</th>
<th>v1.0</th>
<th>v2.0</th>
<th>v2.1</th>
<th>v2.2</th>
<th>v2.3</th>
<th>v3</th>
<th>Observações</th>
</tr>
<tr>
<td><strong><font>Data de Lançamento do Produto</font></strong></td>
<td><strong><font>23 de Dez 2009</font></strong></td>
<td><strong><font>17 de Dez 2010</font></strong></td>
<td><strong><font>3 de Out 2011</font></strong></td>
<td><strong><font>27 de Dez 2011</font></strong></td>
<td><strong><font>29 de Dez 2011</font></strong></td>
<td><strong><font>6 de Jun 2014</font></strong></td>
<td></td>
</tr>
<tr>
<td><strong>Status de Produção</strong></td>
<td><strong><font>Descontinuado</font></strong></td>
<td><strong><font>Descontinuado</font></strong></td>
<td><strong><font>Descontinuado</font></strong></td>
<td><strong><font>Descontinuado</font></strong></td>
<td><strong><font>Em Produção</font></strong></td>
<td><strong><font>Em Produção</font></strong></td>
<td></td>
</tr>
<tr>
<td><strong>LED &amp; Interruptor de Usuário</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>LED de Usuário</td>
<td>PB5 (Pino 13 do Arduino)</td>
<td>PB0 (Pino 8 do Arduino)</td>
<td>PB0 (Pino 8 do Arduino)</td>
<td>PB5 (Pino 13 do Arduino)</td>
<td>PB5 (Pino 13 do Arduino)</td>
<td>PB0 (Pino 13 do Arduino)</td>
<td></td>
</tr>
<tr>
<td>Interruptor de Usuário</td>
<td>PB4 (Pino 12 do Arduino)</td>
<td>Não Presente</td>
<td>Não Presente</td>
<td>Não Presente</td>
<td>Não Presente</td>
<td>Não Presente</td>
<td></td>
</tr>
<tr>
<td><strong>Compatibilidade com Arduino</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Fisicamente compatível com o pinout do Arduino</td>
<td>Sim</td>
<td>Sim</td>
<td>Sim</td>
<td>Sim</td>
<td>Sim</td>
<td>Sim</td>
<td>Compatível com Diecimila/Duemilanove/UNO</td>
</tr>
<tr>
<td>Compatível por software com Arduino</td>
<td>Sim</td>
<td>Sim</td>
<td>Sim</td>
<td>Sim</td>
<td>Sim</td>
<td>Sim</td>
<td>Bootloader pré-carregado</td>
</tr>
<tr>
<td>Variante Atmega168 Disponível</td>
<td>Sim</td>
<td>Não</td>
<td>Não</td>
<td>Não</td>
<td>Não</td>
<td>Não</td>
<td></td>
</tr>
<tr>
<td>Variante Atmega328 Disponível</td>
<td>Não</td>
<td>Sim</td>
<td>Sim</td>
<td>Sim</td>
<td>Sim</td>
<td>Sim</td>
<td></td>
</tr>
<tr>
<td>Cabeçalho AVRISP de 6 pinos presente</td>
<td>Sim</td>
<td>Sim</td>
<td>Sim</td>
<td>Sim</td>
<td>Sim</td>
<td>Sim</td>
<td></td>
</tr>
<tr>
<td>FT232RL &amp; Conector USB Presente</td>
<td>Não</td>
<td>Não</td>
<td>Não</td>
<td>Não</td>
<td>Não</td>
<td>Não</td>
<td>Em ambas as versões, o "UartSBee V3.1" ou <strong>V4.0</strong> deve ser adquirido separadamente e usado para o download de programas usando o Arduino IDE. Um conector para acoplar ao UartSBee está presente em ambas as versões. O reset do microcontrolador será controlado automaticamente pelo DTR.</td>
</tr>
<tr>
<td>Operação Autônoma</td>
<td>Sim</td>
<td>Sim</td>
<td>Sim</td>
<td>Sim</td>
<td>Sim</td>
<td>Sim</td>
<td></td>
</tr>
<tr>
<td>Operação como shield para Arduino/Seeeduino</td>
<td>Sim</td>
<td>Não</td>
<td>Não</td>
<td>Não</td>
<td>Não</td>
<td>Não</td>
<td></td>
</tr>
<tr>
<td>Pode ser empilhado adicionalmente no modo shield?</td>
<td>Sim</td>
<td>N.A.</td>
<td>N.A.</td>
<td>N.A.</td>
<td>N.A.</td>
<td>N.A.</td>
<td>Usando interface I<sup>2</sup>C</td>
</tr>
<tr>
<td><strong>Relógio em Tempo Real</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Chip</td>
<td>DS1307</td>
<td>RX8025</td>
<td>DS3231</td>
<td>DS3231</td>
<td>DS3231</td>
<td>DS1337</td>
<td></td>
</tr>
<tr>
<td>Fonte de alimentação de backup integrada</td>
<td>Bateria tipo moeda CR2032</td>
<td>Super Capacitor</td>
<td>Bateria tipo moeda CR2032</td>
<td>Bateria tipo moeda CR2032</td>
<td>Bateria tipo moeda CR2032</td>
<td>Bateria tipo moeda CR1220</td>
<td></td>
</tr>
<tr>
<td>Interface</td>
<td>I<sup>2</sup>C</td>
<td>I<sup>2</sup>C</td>
<td>I<sup>2</sup>C</td>
<td>I<sup>2</sup>C</td>
<td>I<sup>2</sup>C</td>
<td>I<sup>2</sup>C</td>
<td></td>
</tr>
<tr>
<td><strong>Interface I<sup>2</sup>C</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Conector para conexão direta aos pinos PC4 e PC5 (ou seja, SCL e SDA) do microcontrolador</td>
<td>Sim</td>
<td>Sim</td>
<td>Sim</td>
<td>Sim</td>
<td>Sim</td>
<td>Sim</td>
<td></td>
</tr>
<tr>
<td>Tradução de nível integrada para conexão a dispositivos de 5,0 volts enquanto o microcontrolador opera em modo 3,3 V</td>
<td>Sim (usando PCA9306)</td>
<td>Sim (usando MOSFET de canal N de enriquecimento)</td>
<td>Sim (usando MOSFET de canal N de enriquecimento)</td>
<td>Sim (usando MOSFET de canal N de enriquecimento)</td>
<td>Sim (usando MOSFET de canal N de enriquecimento)</td>
<td>Sim (usando MOSFET de canal N de enriquecimento)</td>
<td></td>
</tr>
<tr>
<td><strong>Fonte de Alimentação</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>A partir de Fonte DC</td>
<td>Sim (5–12 V DC)</td>
<td>Sim (conectar ao conector da célula solar, mas aplicar apenas 5,0 Volts)</td>
<td>Sim (conectar ao conector da célula solar, mas aplicar apenas 5,0 Volts)</td>
<td>Sim (conectar ao conector da célula solar, mas aplicar apenas 5,0 Volts)</td>
<td>Sim (conectar ao conector da célula solar, mas aplicar apenas 5,0 Volts)</td>
<td>Sim (conectar ao conector da célula solar, mas aplicar apenas 5,0 Volts)</td>
<td></td>
</tr>
<tr>
<td>A partir de USB</td>
<td>Sim (quando usado com UartSBee V3.1)</td>
<td>Sim (quando usado com UartSBee V3.1)</td>
<td>Sim (quando usado com UartSBee V4.0 ou Cabo FTDI)</td>
<td>Sim (quando usado com UartSBee V4.0 ou Cabo FTDI)</td>
<td>Sim (quando usado com UartSBee V4.0 ou Cabo FTDI)</td>
<td>Sim (quando usado com UartSBee V4.0 ou Cabo FTDI)</td>
<td></td>
</tr>
<tr>
<td>A partir de Painel Solar</td>
<td>Não</td>
<td>Sim (Conector separado presente)</td>
<td>Sim (Conector separado presente)</td>
<td>Sim (Conector separado presente)</td>
<td>Sim (Conector separado presente)</td>
<td>Sim (Conector separado presente)</td>
<td></td>
</tr>
<tr>
<td>A partir de Bateria de Polímero de Lítio</td>
<td>Não</td>
<td>Sim (Conector separado presente)</td>
<td>Sim (Conector separado presente)</td>
<td>Sim (Conector separado presente)</td>
<td>Sim (Conector separado presente)</td>
<td>Sim (Conector separado presente)</td>
<td></td>
</tr>
<tr>
<td>Medição de tensão da bateria</td>
<td>Não</td>
<td>Sim (Jumper para conexão ao ADC7)</td>
<td>Sim (Jumper para conexão ao ADC7)</td>
<td>Sim (Jumper para conexão ao ADC7)</td>
<td>Sim (Jumper para conexão ao ADC7)</td>
<td>Sim (Tensão da bateria conectada ao ADC7)</td>
<td></td>
</tr>
<tr>
<td>Carregamento da Bateria?</td>
<td>Não</td>
<td>Sim (Através de célula solar, gerenciado pelo Chip CN3063)</td>
<td>Sim (Através de célula solar, gerenciado pelo Chip CN3063)</td>
<td>Sim (Através de célula solar, gerenciado pelo Chip CN3063)</td>
<td>Sim (Através de célula solar, gerenciado pelo Chip CN3063)</td>
<td>Sim (Através de célula solar, gerenciado pelo Chip CN3065)</td>
<td></td>
</tr>
<tr>
<td>Leitura do Status de Carregamento da Bateria?</td>
<td>Não</td>
<td>Sim (Pino Digital 6&amp;7)</td>
<td>Sim (Pino Digital 6&amp;7)</td>
<td>Sim (ADC6)</td>
<td>Sim (ADC6)</td>
<td>Sim (ADC6)</td>
<td></td>
</tr>
</table>

## Suporte Técnico &amp; Discussão de Produto

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
