---
description: Módulo Bluetooth de porta serial (Master/Slave)
title: Módulo Bluetooth de porta serial (Master/Slave)
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Serial_port_bluetooth_module_Master-Slave
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-02'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Serial_port_bluetooth_module_Master-Slave/
---

![](https://files.seeedstudio.com/wiki/Serial_port_bluetooth_module_Master-Slave/img/newblue_LRG.jpg)

Este módulo é um módulo Bluetooth SPP (Serial Port Protocol) fácil de usar, projetado para conexões seriais sem fio transparentes.

O módulo Bluetooth de porta serial é totalmente compatível com Bluetooth V2.0+EDR (Enhanced Data Rate) Modulação de 3 Mbps com transceptor de rádio completo de 2,4 GHz e banda base. Ele usa o sistema Bluetooth de chip único CSR Bluecore 04-External com tecnologia CMOS e com AFH (Adaptive Frequency Hopping Feature). Possui uma área de apenas 12,7 mm x 27 mm. Espera-se que ele simplifique o seu ciclo geral de projeto/desenvolvimento.

**Modelo: [WLS123A1M](https://www.seeedstudio.com/depot/serial-port-bluetooth-module-masterslave-p-572.html?cPath=139_142)**

## Recursos  

### Recursos de hardware  

- Sensibilidade típica de -80 dBm
- Potência de transmissão RF de até +4 dBm
- Baixo consumo, operação em 1,8 V, I/O de 1,8 a 3,6 V
- Controle PIO
- Interface UART com taxa de baud programável
- Antena integrada
- Conector de borda

### Recursos de software  

- Taxa de baud padrão: 38400, Bits de dados: 8, Bit de parada: 1, Paridade: Sem paridade, Controle de dados: sim. Taxas de baud suportadas:

9600,19200,38400,57600,115200,230400,460800.

- Usa CTS e RTS para controlar o fluxo de dados.
- Dando um pulso de subida em PIO0, o dispositivo será desconectado.
- Porta de instrução de status PIO1: nível baixo–desconectado, nível alto–conectado;
- PIO10 e PIO11 podem ser conectados separadamente aos LEDs vermelho e azul. Quando master e slave estão pareados, o LED vermelho

e o LED azul piscam 1 vez a cada 2 s em intervalo. Enquanto desconectado, apenas o LED azul pisca 2 vezes/s.

- Conecta-se automaticamente ao último dispositivo ao ligar, por padrão.
- Permite que o dispositivo pareado se conecte por padrão.
- PINCODE de pareamento automático: “0000” por padrão
- Reconexão automática em 30 min quando desconectado por estar além do alcance da conexão.

## Ideias de aplicação  

- Controle remoto
- Comunicação sem fio

## Cuidados  

- Ao usar com Seeeduino / Arduino, ajuste a tensão de operação para 5 V. Caso contrário, use um conversor de nível lógico adequado.
- Ao usar com UartSBee, ajuste a tensão de operação para 5 V
- O comando para alterar a taxa de baud permanece mesmo após o reset. Portanto, lembre-se da taxa de baud para o próximo uso.

## Especificação  

![](https://files.seeedstudio.com/wiki/Serial_port_bluetooth_module_Master-Slave/img/Bluetooth-module-pin.JPG)

<table >
<tr>
<th>Pino</th>
<th>#</th>
<th>Tipo de pad</th>
<th>Descrição</th>
</tr>
<tr>
<td width="100px">PIO11</td>
<td width="100px">34</td>
<td width="350px">Bidirecional</td>
<td width="450px">Linha de entrada/saída programável</td>
</tr>
<tr>
<td>PIO10</td>
<td>33</td>
<td>Bidirecional</td>
<td>Linha de entrada/saída programável</td>
</tr>
<tr>
<td>PIO9</td>
<td>32</td>
<td>Bidirecional</td>
<td>Linha de entrada/saída programável</td>
</tr>
<tr>
<td>PIO8</td>
<td>31</td>
<td>Bidirecional</td>
<td>Linha de entrada/saída programável</td>
</tr>
<tr>
<td>PIO7</td>
<td>30</td>
<td>Bidirecional</td>
<td>Linha de entrada/saída programável</td>
</tr>
<tr>
<td>PIO6</td>
<td>29</td>
<td>Bidirecional</td>
<td>Linha de entrada/saída programável</td>
</tr>
<tr>
<td>PIO5</td>
<td>28</td>
<td>Bidirecional</td>
<td>Linha de entrada/saída programável</td>
</tr>
<tr>
<td>PIO4</td>
<td>27</td>
<td>Bidirecional</td>
<td>Linha de entrada/saída programável</td>
</tr>
<tr>
<td>PIO3</td>
<td>26</td>
<td>Bidirecional</td>
<td>Linha de entrada/saída programável</td>
</tr>
<tr>
<td>PIO32</td>
<td>25</td>
<td>Bidirecional</td>
<td>Linha de entrada/saída programável</td>
</tr>
<tr>
<td>PIO1</td>
<td>24</td>
<td>Bidirecional TX EN</td>
<td>Linha de entrada/saída programável, saída de controle para PA (se instalado)</td>
</tr>
<tr>
<td>PIO0</td>
<td>23</td>
<td>Bidirecional RX EN</td>
<td>Linha de entrada/saída programável, saída de controle para LNA (se instalado)</td>
</tr>
<tr>
<td>GND</td>
<td>13,21,22</td>
<td>VSS</td>
<td>Ponto de aterramento</td>
</tr>
<tr>
<td>USB±</td>
<td>15,20</td>
<td>Bidirecional</td>
<td></td>
</tr>
<tr>
<td>SPI_CLK</td>
<td>19</td>
<td>Entrada CMOS com pull-down interno fraco</td>
<td>Clock da interface serial periférica</td>
</tr>
<tr>
<td>SPI_MISO</td>
<td>18</td>
<td>Entrada CMOS com pull-down interno fraco</td>
<td>Saída de dados da interface serial periférica</td>
</tr>
<tr>
<td>SPI_MOSI</td>
<td>17</td>
<td>Entrada CMOS com pull-down interno fraco</td>
<td>Entrada de dados da interface serial periférica</td>
</tr>
<tr>
<td>SPI_CSB</td>
<td>16</td>
<td>Entrada CMOS com pull-up interno fraco</td>
<td>Seleção de chip para interface serial periférica, ativo em nível baixo</td>
</tr>
<tr>
<td>NC</td>
<td>14</td>
<td></td>
<td></td>
</tr>
<tr>
<td>3.3VCC</td>
<td>12</td>
<td>3.3V</td>
<td>Fonte integrada de 3,3 V(+) com saída de regulador linear on-chip dentro de 3,15-3,3 V</td>
</tr>
<tr>
<td>RESETB</td>
<td>11</td>
<td>Entrada CMOS com pull-up interno fraco</td>
<td>Reset se em nível baixo (mantido externamente)</td>
</tr>
</table>

## Instruções de software  

#### Mapa de funcionamento do sketch  

![](https://files.seeedstudio.com/wiki/Serial_port_bluetooth_module_Master-Slave/img/Bluetooth-1.jpg)

#### Fluxograma  

![](https://files.seeedstudio.com/wiki/Serial_port_bluetooth_module_Master-Slave/img/Bluetooth-2.jpg)

#### Comandos para alterar a configuração padrão  

**1. Definir o MODE de trabalho**

<table>
<tr>
<td width="200px">\r\n+STWMOD=0\r\n</td>
<td width="400px">Define o modo de trabalho do dispositivo como cliente (slave). Salva e reinicia.</td>
</tr>
<tr>
<td>\r\n+STWMOD=1\r\n</td>
<td>Define o modo de trabalho do dispositivo como servidor (master). Salva e reinicia.</td>
</tr>
</table>

**Nota:** **\r\n** é necessário para a operação e o valor é **0x0D 0x0A** em Hex. **\r** e **\n** representam **carriage-return** e **line-feed** (ou próxima linha),

**2.Definir BAUDRATE**

<table>
<tr>
<td width="200px">\r\n+STBD=115200\r\n</td>
<td width="400px">Define a taxa de baud como 115200. Salva e reinicia.</td>
</tr>
<tr>
<td colspan="2">Taxas de baud suportadas: 9600, 19200,38400,57600,115200,230400,460800.</td>
</tr>
</table>

**3. Definir o NAME do dispositivo**

<table>
<tr>
<td width="200px">\r\n+STNA=abcdefg</td>
<td width="400px">Define o nome do dispositivo como "abcdefg". Salva e reinicia.</td>
</tr>
</table>

**4. Conexão automática com o último dispositivo pareado ao ligar**

<table>
<tr>
<td width="200px">\r\n+STAUTO=0\r\n</td>
<td width="400px">Conexão automática proibida. Salva e reinicia.</td>
</tr>
<tr>
<td width="200px">\r\n+STAUTO=1\r\n</td>
<td width="400px">Permite conexão automática. Salva e reinicia.</td>
</tr>
</table>

**5. Permitir que o dispositivo pareado se conecte a mim**

<table>
<tr>
<td width="200px">\r\n+STOAUT=0\r\n</td>
<td width="400px">Proibido. Salva e reinicia.</td>
</tr>
<tr>
<td width="200px">\r\n+STOAUT=1\r\n</td>
<td width="400px">Permitido. Salva e reinicia.</td>
</tr>
</table>

**6. Definir PINCODE**

<table>
<tr>
<td width="200px">\r\n +STPIN=2222\r\n</td>
<td width="400px">Define o pincode "2222". Salva e reinicia.</td>
</tr>
</table>

**7. Apagar PINCODE (inserir PINCODE via MCU)**

<table>
<tr>
<td width="200px">\r\n+DLPIN\r\n</td>
<td width="400px">Apaga o pincode. Salva e reinicia.</td>
</tr>
</table>

**8. Ler o ADDRESS CODE local**

<table>
<tr>
<td width="200px">\r\n+RTADDR\r\n</td>
<td width="400px">Retorna o endereço do dispositivo.</td>
</tr>
</table>

**9. Reconexão automática quando o dispositivo master estiver além do alcance válido (o dispositivo slave irá reconectar automaticamente em 30 min quando estiver além do alcance válido)**

<table>
<tr>
<td width="200px">\r\n+LOSSRECONN=0\r\n</td>
<td width="400px">Proibir reconexão automática.</td>
</tr>
<tr>
<td width="200px">\r\n+LOSSRECONN=1\r\n</td>
<td width="400px">Permitir reconexão automática.</td>
</tr>
</table>

#### Comandos para operação normal  

**1. Inquirir**

<table>
<tr>
<td colspan="2" width="600px">**a) Master**</td>
</tr>
<tr>
<td width="200px">\r\n+INQ=0\r\n</td>
<td width="400px">Parar de inquirir</td>
</tr>
<tr>
<td>\r\n+INQ=1\r\n</td>
<td>Iniciar/Reiniciar inquirição</td>
</tr>
<tr>
<td colspan="2" width="600px">**b) Slave**</td>
</tr>
<tr>
<td>\r\n+INQ=0\r\n</td>
<td>Desabilitar ser inquirido</td>
</tr>
<tr>
<td>\r\n+INQ=1\r\n</td>
<td>Habilitar ser inquirido</td>
</tr>
</table>

Quando o comando **+INQ=1** é executado com sucesso, os LEDs vermelho e verde piscam alternadamente.

**2. O módulo Bluetooth retorna o resultado da inquirição**

<table>
<tr>
<td width="250px">\r\n+RTINQ=aa,bb,cc,dd,ee,ff;name\r\n</td>
<td width="500px">O dispositivo serial Bluetooth com o endereço "aa,bb,cc,dd,ee,ff" e o nome "name" foi inquirido</td>
</tr>
</table>

**3. Conectar dispositivo**

<table>
<tr>
<td width="250px">\r\n+CONN=aa,bb,cc,dd,ee,ff\r\n</td>
<td width="500px">Conecta a um dispositivo com o endereço "aa,bb,cc,dd,ee,ff"</td>
</tr>
</table>

**4. O módulo Bluetooth solicita inserção de PINCODE**

\r\n+INPIN\r\n

**5. Inserir PINCODE**

<table>
<tr>
<td colspan="2">\r\n+RTPIN=code\r\n</td>
</tr>
<tr>
<td>Exemplo: RTPIN=0000</td>
<td>Insere um PINCODE que é quatro zeros</td>
</tr>
</table>

**6. Desconectar dispositivo** Colocar PIO0 em nível alto irá desconectar o dispositivo Bluetooth em funcionamento atual.

**7. Retornar status** \r\n+BTSTA:**xx**\r\n
 **xx** status:

- 0 - Inicializando
- 1 - Pronto
- 2 - Inquirindo
- 3 - Conectando
- 4 - Conectado

(**Nota:** Isto não é um comando, mas a informação retornada pelo módulo após cada comando)  

## Ideia adicional  

- [Como configurar o PC para conectar com Serial Bluetooth Grove](https://forum.seeedstudio.com/viewtopic.php?f=18&amp;t=1436&amp;p=5637#p5637)

- [Configurar conexões entre dois módulos Bluetooth passo a passo](https://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=687)

## Recursos  

- **[Software]**   [Instruções de software](https://files.seeedstudio.com/wiki/Serial_port_bluetooth_module_Master-Slave/res/Bluetooth_Software_Instruction.pdf)

- **[Datasheet]**  [Datasheet do módulo Bluetooth](https://files.seeedstudio.com/wiki/Serial_port_bluetooth_module_Master-Slave/res/Bluetooth_module.pdf)

## Suporte  

Se você tiver dúvidas ou outras ideias de design melhores, pode ir ao nosso [fórum](https://www.seeedstudio.com/forum) ou **wish** para discutir.

## Como comprar  

Clique aqui para comprar: [Módulo Bluetooth de porta serial (Master/Slave)](https://www.seeedstudio.com/depot/serial-port-bluetooth-module-masterslave-p-572.html?cPath=139_142)

## Veja também  

- [Grove - Serial Bluetooth](https://www.seeedstudio.com/depot/grove-serial-bluetooth-p-795.html?cPath=139_142)

- [Bluetooth Bee - Standalone](https://www.seeedstudio.com/depot/bluetooth-bee-standalone-p-1157.html?cPath=139_142)

- [Bluetooth Shield](https://www.seeedstudio.com/depot/bluetooth-shield-p-866.html?cPath=132_134)

- [Bluetooth Bee](https://www.seeedstudio.com/depot/bluetooth-bee-p-598.html?cPath=139_142)

## Licenciamento  

Esta documentação é licenciada sob a [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/) da Creative Commons. O código-fonte e as bibliotecas são licenciados sob [GPL/LGPL](http://www.gnu.org/licenses/gpl.html), consulte os arquivos de código-fonte para mais detalhes.

## Links Externos  

Links para páginas externas que fornecem mais ideias de aplicação, documentos/datasheet ou bibliotecas de software

## Projetos Relacionados

Se você quiser fazer alguns projetos incríveis com o módulo Bluetooth de porta serial, aqui estão alguns projetos para referência.

### Controlar múltiplos motores de servo a partir de um aplicativo Android

![](https://files.seeedstudio.com/wiki/Serial_port_bluetooth_module_Master-Slave/img/Control_Multiple_servo_Motor_From_android_app.jpg)

Esta é uma demonstração interessante feita com Arduino e [Grove](https://seeeddoc.github.io/Grove_System/).
Este é um tutorial completo sobre como controlar vários motores de servo a partir de um aplicativo Android.

[**Eu quero fazer isso.**](https://www.seeedstudio.com/recipe/255-control-multiple-servo-motor-from-android-app.html)

### Compartilhe Seus Projetos Incríveis Conosco

Nascido com o espírito de fazer e compartilhar, é isso que acreditamos que faz de alguém um maker.

E é somente por causa disso que a comunidade de código aberto pode ser tão próspera como é hoje.

Não importa quem você é e o que você fez, hacker, maker, artista ou engenheiro,

contanto que você comece a compartilhar seus trabalhos com os outros,

você está fazendo parte da comunidade de código aberto e está fazendo suas contribuições.

Agora compartilhe seus projetos incríveis conosco no [Recipe](https://www.seeedstudio.com/recipe/), e ganhe a chance de se tornar um Usuário Core da Seeed.

- Usuários Core são aqueles que demonstram grande interesse e contribuições significativas nos produtos Seeed.
- Nós cooperamos com nossos Usuários Core no desenvolvimento de nossos novos produtos, ou seja, os Usuários Core terão a chance de experimentar qualquer novo produto da Seeed antes de seu lançamento oficial e, em troca, esperamos feedback valioso deles para nos ajudar a melhorar o desempenho do produto e a experiência do usuário. E, na maioria dos casos, se nossos Usuários Core tiverem boas ideias para fazer coisas, ofereceremos peças de hardware, serviços de PCBA, bem como suporte técnico. Além disso, uma cooperação comercial mais profunda com os Usuários Core é altamente possível.

<font color="#FF0000">Para obter mais informações sobre Usuário Core, envie um e-mail para: recipe@seeed.cc</font>

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
