---
description: Primeiros passos com o Wio-E5 mini.
title: Wio-E5 mini
nointro: null
keywords:
  - wio
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/wio_gps_board/
slug: /LoRa_E5_mini
sku: 113990939, 113991156
last_update:
  date: 01/15/2026
  author: David Du
createdAt: '2023-01-30'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/LoRa_E5_mini/
---
<!-- ![](https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/1/1/113990939_preview-07.png) -->
<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/1/1/113990939_preview-07.png" alt="pir" width={600} height="auto" /></p>

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/LoRa-E5-mini-STM32WLE5JC-p-4869.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p> -->

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LoRa-E5-mini-STM32WLE5JC-p-4869.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

> LoRaWAN® é uma marca usada sob licença da LoRa Alliance®.
A marca LoRa® é uma marca registrada da Semtech Corporation ou de suas subsidiárias.

Wio-E5 mini é uma placa de desenvolvimento compacta adequada para testes rápidos e construção de protótipos de pequeno porte e ajuda você a projetar seu dispositivo ideal de IoT sem fio LoRaWAN® com um longo alcance de transmissão.

Wio-E5 mini vem com o módulo [Wio-E5 STM32WLE5JC Module](https://www.seeedstudio.com/LoRa-E5-Wireless-Module-p-4745.html) incorporado, que oferece a primeira combinação do mundo de RF LoRa® e chip MCU em um único chip minúsculo e possui certificação FCC e CE. Ele é alimentado por um núcleo ARM Cortex-M4 e pelo chip LoRa® Semtech SX126X e suporta o protocolo LoRaWAN® na frequência mundial e modulações (G)FSK, BPSK, (G)MSK e LoRa®.

Saiba mais sobre o [Wio-E5](https://wiki.seeedstudio.com/pt-br/LoRa-E5_STM32WLE5JC_Module/) aqui.

Mais comparação entre o Wio-E5 e o chip LoRa® RFM95:

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Wio-E5/2.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Wio-E5/2.png" alt="pir" width={600} height="auto" /></p>

Wio-E5 mini traz para fora todos os GPIOs do Wio-E5, incluindo UART, ADC, SPI, IIC, etc. Ele contém botões RESET e BOOT e é fácil de usar. Com suporte ao protocolo LoRaWAN®, o Wio-E5 mini apresenta transmissão de longo alcance e consumo de energia ultrabaixo: é capaz de alcançar um alcance de transmissão de até 10 km, e a corrente de sono dos módulos Wio-E5 a bordo é tão baixa quanto 2,1 uA (modo WOR). Ele é projetado com padrões industriais, com ampla faixa de temperatura de trabalho de -40 ℃ ~ 85 ℃, alta sensibilidade entre -116,5 dBm ~ -136 dBm e potência de saída de RF de até +20,8 dBm a 3,3 V.

Além do Wio-E5 mini, também fornecemos outras opções, incluindo a Wio-E5 Development Board, que possui interfaces e recursos mais complexos para liberar o desempenho mais poderoso do módulo Wio-E5. Ela oferece uma gama mais ampla de protocolos de acesso e tipos superabundantes de interfaces. Assim, você é capaz de testar e prototipar o módulo rapidamente com RS-485, interfaces Grove e GPIOs ricos.  (Saiba mais sobre a Wio-E5 Development Board)

Como o Wio-E5 é um chip LoRaWAN® com um MCU, existem três principais maneiras de utilizar o Wio-E5 mini:

**1. Conectar o Wio-E5 mini ao PC e controlar por comandos AT**

Há uma função USB para UART integrada na placa; você pode conectar o Wio-E5 mini ao seu PC com um cabo USB tipo C e usar um software de comunicação serial para enviar comandos AT e ler dados da placa.

**2. Conectar o Wio-E5 mini a outra placa principal via UART e controlar por comandos AT**

Por exemplo, conecte o Wio-E5 mini ao Seeeduino XIAO e à Expansion Board via UART, e envie comandos AT e leia dados do Seeeduino XIAO por meio do monitor serial da Arduino IDE.

**3. Desenvolvimento de aplicações do usuário usando o SDK**

Desenvolva sua própria placa de desenvolvimento LoRa® com função de MCU usando o STM32Cube Programmer, que é o SDK oficialmente fornecido pela STMicroelectronics. Para baixar este recurso de SDK, procure os recursos em aprendizado e documentação abaixo.

Com todos os recursos excepcionais listados acima, o Wio-E5 mini será uma escolha superior para desenvolvimento, teste, prototipagem de dispositivos IoT e aplicações em cenários de IoT de longa distância e consumo ultrabaixo de energia, como agricultura inteligente, escritório inteligente e indústria inteligente.

Se você não estiver familiarizado com a tecnologia LoRa® e LoRaWAN®, consulte este blog [LoRa®pedia](https://www.seeedstudio.com/blog/2020/08/03/lorapedia-an-introduction-of-lora-and-lorawan-technology/) em detalhes.

## Recursos

- Todos os GPIOs trazidos para fora do Wio-E5 STM32WLE5JC

- Plano de frequência global LoRaWAN® e LoRa® suportado

- Alcance de transmissão de longa distância de até 10 km (valor ideal em área aberta)

- Tamanho mini e compacto, adequado para testes rápidos e construção de protótipos de pequeno porte

- Convenientes botões RESET e BOOT na placa

## Visão geral do hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/hardware%20overview/4041615358935_.pic_hd.jpg" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/317990687/image/3001615286723_.pic_hd.jpg" alt="pir" width={600} height="auto" /></p>

## Especificações

<table class="tg">
<thead>
<tr><th class="tg-6cwf">Parâmetros</th><th class="tg-6cwf">Especificações</th></tr>
</thead>
<tbody>
<tr>
<td class="tg-g9rn">tamanho</td>
<td class="tg-g9rn">50*23mm</td>
</tr>
<tr>
<td class="tg-g9rn">tensão - alimentação</td>
<td class="tg-g9rn">3.7V - 5V</td>
</tr>
<tr>
<td class="tg-g9rn">potência - saída</td>
<td class="tg-g9rn">até +20,8 dBm a 3,3V</td>
</tr>
<tr>
<td class="tg-g9rn">frequência de trabalho</td>
<td class="tg-g9rn">868/915MHz</td>
</tr>
<tr>
<td class="tg-g9rn">protocolo</td>
<td class="tg-g9rn">LoRaWAN®</td>
</tr>
<tr>
<td class="tg-g9rn">sensibilidade</td>
<td class="tg-g9rn">-116,5 dBm ~ -136 dBm</td>
</tr>
<tr>
<td class="tg-g9rn">interfaces</td>
<td class="tg-g9rn">USB Type C / Furo 2P-2,54mm / Conector 1*12P-2,54mm*2 / SMA-K / IPEX</td>
</tr>
<tr>
<td class="tg-g9rn">modulação</td>
<td class="tg-g9rn">LoRa®, (G)FSK, (G)MSK, BPSK</td>
</tr>
<tr>
<td class="tg-g9rn">temperatura de trabalho</td>
<td class="tg-g9rn">-40℃ ~ 85℃</td>
</tr>
<tr>
<td class="tg-g9rn">corrente</td>
<td class="tg-g9rn">corrente de sono do módulo Wio-E5 tão baixa quanto 2,1 uA (modo WOR)</td>
</tr>
</tbody>
</table>

<div></div>
<div></div>
<div></div>

<table class="tg">
<thead>
<tr><th class="tg-f2tp" colspan="2">Lista de peças:</th></tr>
</thead>
<tbody>
<tr>
<td class="tg-uu1j" colspan="2">Wio-E5 mini *1</td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">Antena (EU868/US915)*1</td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">USB TypeC (20cm) *1</td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">Adesivo*1 </td>
</tr>
<tr>
<td class="tg-uu1j" colspan="2">Headers macho 1X12 pinos *2</td>
</tr>
</tbody>
</table>

## Aplicações

- Teste fácil do módulo Wio-E5
- Prototipagem rápida de dispositivos LoRa® de pequenas dimensões com Wio-E5
- Qualquer desenvolvimento de aplicação de comunicação sem fio de longa distância
- Aprendizado e pesquisa de aplicações LoRa® e LoRaWAN®

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/317990687/image/application.png" alt="pir" width={600} height="auto" /></p>

## Notas de aplicação

**1. Firmware AT de fábrica**

A série Wio-E5 possui um firmware de comando AT integrado, que suporta o protocolo LoRaWAN® Class A/B/C e um amplo plano de frequência: EU868/US915/AU915/AS923/KR920/IN865. Com este firmware de comandos AT, os desenvolvedores podem criar facilmente e rapidamente seu protótipo ou aplicação.

O firmware de comando AT contém um bootloader para DFU e a aplicação AT. O pino "PB13/SPI_SCK/BOOT" é usado para controlar o Wio-E5 para permanecer no bootloader ou pular para a aplicação AT. Quando PB13 está em nível HIGH, o módulo irá pular para a aplicação AT após o reset, com baud rate padrão de 9600. Quando PB13 está em nível LOW (pressione o botão "Boot" no Wio-E5 mini), o módulo permanecerá no bootloader e continuará transmitindo o caractere "C" a cada 1 s com baud rate 115200.

:::tip

- O firmware AT de fábrica é programado com RDP (Read Protection) Nível 1, os desenvolvedores precisam remover primeiro o RDP com o STM32Cube Programmer. Observe que rebaixar o RDP para o nível 0 causará um apagamento em massa da memória flash e o firmware AT de fábrica não poderá ser restaurado novamente.
- O pino "PB13/SPI_SCK/BOOT" no módulo Wio-E5 é apenas um GPIO normal, não o pino "BOOT0" do MCU. Este pino "PB13/SPI_SCK/BOOT" é usado no bootloader do firmware AT de fábrica, para decidir pular para o APP ou permanecer no bootloader (para DFU). O verdadeiro pino "BOOT0" não é exposto no módulo, portanto os usuários precisam ter cuidado ao desenvolver aplicações de baixo consumo de energia

:::

**2. Configuração de clock**

2.1 HSE

- TCXO de 32MHz

- Alimentação do TCXO: PB0-VDD_TCXO

2.2 LSE

- Oscilador de cristal de 32,768 KHz

**3. Chave de RF**

**O módulo Wio-E5 SOMENTE transmite através de RFO_HP:**

- Recepção: PA4=1, PA5=0

- Transmissão (alta potência de saída, modo SMPS): PA4=0, PA5=1

## Primeiros passos

### Início rápido dos comandos AT

#### Preparação

- **Passo 1.** Conecte o Wio-E5 mini ao PC por meio de um cabo Type-C

- **Passo 2.** Abra uma ferramenta serial (por exemplo, Arudino Serial Monitor), selecione a porta COM correta, defina o baud rate para 9600 e selecione Both NL & CR

- **Passo 3.** Tente enviar "AT" e você verá a resposta.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/4.png" alt="pir" width={600} height="auto" /></p>

#### Comandos AT básicos

| Formato do comando | Retorno | Descrição |
| --- | --- | --- |
| AT | +AT: OK | Comando de teste |
| AT+VER | +VER: \$MAJOR.\$MINOR.\$PATCH <br></br> +VER: 4.0.11 | Verificar versão do firmware |
| AT+ID // Ler todos, DevAddr( ABP), DevEui( OTAA), AppEui( OTAA)<br></br>AT+ID = DevAddr // Ler Device Address<br></br>AT+ID = DevEui // Ler DevEui<br></br>AT+ID = AppEui // Ler AppEui | +ID: DevAddr, xx: xx: xx:xx<br></br>+ID: DevEui, xx:xx:xx:xx:xx:xx:xx:xx<br></br>+ID: AppEui13, xx:xx:xx:xx:xx:xx:xx | Usado para verificar o ID do módulo LoRaWAN. O ID é tratado como número big endian. |
| AT+ID = DevAddr, “01234567” // Definir novo DevAddr<br></br>AT+ID = DevEui, “0123456789ABCDEF” // Definir novo DevEui<br></br>AT+ID = AppEui, “0123456789ABCDEF” // Definir novo AppEui | +ID: DevAddr, 01:23:45:67<br></br>+ID: DevEui, 01:23:45:67:89:AB:CD:EF<br></br>+ID: AppEui, 01:23:45:67:89:AB:CD:EF | Alterar o ID |
| AT+RESET | +RESET: OK | Reiniciar o módulo |
| AT+MSG=”Data to send” | +MSG: Start<br></br>+MSG: FPENDING // Downlink frame FPENDING flag is set<br></br>+MSG: Link 20, 1<br></br>+MSG: ACK Received // LinkCheckAns received<br></br>+ MSG: MULTICAST // Downlink frame is multi cast message<br></br>+MSG: PORT: 8; RX: "12345678" //Downlink message is received<br></br>+MSG: RXWIN2, RSSI -106, SNR 4 //Downlink frame signal strength<br></br>+MSG: Done | enviar frame em formato string que não precisa ser confirmado pelo servidor |
| AT+PORT = “port”<br></br>ex: AT+PORT = 8 //Definir porta como 8 | + PORT: 8 | Definir o número da porta que será usado pelo comando MSG/CMSG/MSGHEX/CMSGHEX para enviar mensagens; o número da porta deve estar entre 1 e 255. |
| AT+ADR=" state"<br></br>ex: AT+ADR=ON // Habilitar função ADR<br></br>AT+ ADR= OFF // Desabilitar função ADR<br></br>AT+ADR=? // Verificar configuração atual de ADR | +ADR: ON  // Retorno da consulta/definição de ADR | Definir a função ADR do módulo LoRaWAN |
| AT+DR // Verificar DataRate selecionado atual<br></br>AT+DR=drx // "drx" deve estar na faixa 0~15 | +DR: DR0<br></br>+DR: US915 DR0 SF10 BW12 | Usar o DRx definido pelo LoRaWAN para definir a taxa de dados do modem LoRaWAN AT. |
| AT+ DR= band //" band" pode ser nomes de banda definidos no Capítulo 3 Band Plans<br></br>AT+ DR= SCHEME // Verificar banda atual | (EU868) +DR: EU868<br></br>+DR: EU868 DR0 SF12 BW125K<br></br>+DR: EU868 DR1 SF11 BW125K<br></br>+DR: EU868 DR2 SF10 BW125K<br></br>+DR: EU868 DR3 SF9 BW125K<br></br>+DR: EU868 DR4 SF8 BW125K<br></br>+DR: EU868 DR5 SF7 BW125K<br></br>+DR: EU868 DR6 SF7 BW125K<br></br>+DR: EU868 DR7 FSK<br></br>+DR: EU868 DR8 RFU<br></br>+DR: EU868 DR9 RFU<br></br>+DR: EU868 DR10 RFU<br></br>+DR: EU868 DR11 RFU<br></br>+DR: EU868 DR12 RFU<br></br>+DR: EU868 DR13 RFU<br></br>+DR: EU868 DR14 RFU<br></br>+DR: EU868 DR15 RFU | Esquema de taxa de dados |
| AT + CH // consultar todos os canais<br></br>AT + CH = ch // verificar frequência de um único canal |  | Consultar configuração de canal |
| AT+CH="chn", ["freq"], ["drmin"], ["drmax"]<br></br>// Alterar a frequência do canal chn para "Freq"<br></br>// "freq" está em MHz.<br></br>// Faixa disponível de "drmin"/"drmax" DR0 ~ DR15 | +CH: 3,433700000,DR0:DR5<br></br>+CH: 3,433700000,DR | Definir parâmetro de canal do modem LoRaWAN; definir frequência zero para excluir um canal. |
| AT+CH=chn,ON<br></br>AT+CH=chn, OFF |  | Habilitar ou desabilitar canal |
| AT+ KEY= NWKSKEY, “ 16 bytes length key”<br></br>ex: AT+KEY=NWKSKEY, "2B7E151628AED2A6ABF7158809CF4F3C"<br></br>ex: AT+KEY=NWKSKEY, "2B 7E 15 16 28 AE D2 A6 AB F7 15 88 09 CF 4F 3C” | + KEY: NWKSKEY 2B7E151628AED2A6ABF7158809CF4F3C | Alterar a chave de sessão de rede (NWKSKEY) |
| AT+ KEY= APPSKEY, “ 16 bytes length key”<br></br>ex: AT+KEY=APPSKEY, "2B7E151628AED2A6ABF7158809CF4F3C"<br></br>ex: AT+KEY= APPSKEY, "2B 7E 15 16 28 AE D2 A6 AB F7 15 88 09 | + KEY: APPSKEY 2B7E151628AED2A6ABF7158809CF4F3C | Alterar a chave de sessão da aplicação (APPSKEY) |
| AT+ FDEFAULT<br></br>AT+ FDEFAULT= Seeed | +FDEFAULT: OK | Redefinir o modem LoRaWAN AT para a configuração padrão de fábrica |
| T+ DFU=" New state"<br></br>ex: AT+DFU=ON // Habilitar função DFU<br></br>ex: AT+DFU=OFF //Desabilitar função DFU<br></br>AT+DFU=? // Verificar se DFU está habilitado na configuração | +DFU: ON<br></br>+DFU: OFF | Usado para entrar no modo DFU |
| T+MODE="mode"<br></br>ex: AT+MODE=TEST // Entrar no modo TEST<br></br>ex: AT+MODE= LWOTAA // Entrar no modo LWOTAA<br></br>ex: AT+MODE= LWABP // Entrar no modo LWABP | +MODE: LWABP // Entrar no modo TEST com sucesso<br></br>+MODE: LWOTAA // Entrar no modo LWOTAA com sucesso<br></br>+MODE: TEST // Entrar no modo TEST com sucesso | Usado para selecionar o modo de trabalho |
| AT + JOIN<br></br>AT + JOIN = FORCE | a) Conexão realizada com sucesso +JOIN: Starting<br></br>+ JOIN: NORMAL<br></br>+JOIN: NetID 000024 DevAddr 48:00:00:01<br></br>+JOIN: Done<br></br>b) Conexão falhou<br></br>+JOIN: Join failed<br></br>c) Processo de conexão em andamento<br></br>+ JOIN: LoRaWAN modem is busy | Quando o modo OTAA estiver habilitado, o comando JOIN pode ser usado para ingressar em uma rede conhecida |

Para mais informações, consulte [the Command Specification](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf).

#### Conectar e enviar dados para The Things Network

- **Passo 1.** Visite o site [The Things Network](https://www.thethingsnetwork.org) e crie uma nova conta

- **Passo 2.** Após fazer login, clique em seu perfil e selecione **Console**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/1.png" alt="pir" width={600} height="auto" /></p>

- **Passo 3.** Selecione um cluster para começar a adicionar dispositivos e gateways

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/2.png" alt="pir" width={600} height="auto" /></p>

- **Passo 4.** Clique em **Go to applications**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/4.png" alt="pir" width={600} height="auto" /></p>

- **Passo 5.** Clique em **+ Add application**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/5.png" alt="pir" width={600} height="auto" /></p>

- **Passo 6.** Preencha **Application ID** e clique em **Create application**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/6.png" alt="pir" width={600} height="auto" /></p>

**Nota:** Aqui **Application name** e **Description** não são campos obrigatórios. Se **Application name** for deixado em branco, ele usará o mesmo nome de **Application ID** por padrão

A seguir está a aplicação recém-criada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/7.png" alt="pir" width={600} height="auto" /></p>

- **Passo 7.** Clique em **+ Add end device**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/8.png" alt="pir" width={600} height="auto" /></p>

- **Passo 8.** Clique em **Manually** para inserir manualmente as credenciais de registro

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/9.png" alt="pir" width={600} height="auto" /></p>

- **Passo 9.** Selecione o **Frequency plan** de acordo com a sua região. Também certifique-se de usar a mesma frequência do gateway ao qual você conectará este dispositivo. Selecione **MAC V1.0.2** como **LoRaWAN® version** e **PHY V1.0.2 REV B** como **Regional Parameters version**. Essas configurações estão de acordo com a pilha LoraWAN® do Wio-E5.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/10.png" alt="pir" width={600} height="auto" /></p>

- **Passo 10.** Enquanto o módulo Wio-E5 ainda estiver acessível pelo console serial, envie os seguintes comandos AT no monitor serial:

  - `AT+ID=DevEui` para obter seu Device EUI
  - `AT+ID=AppEui`, para obter seu App EUI
  - `AT+KEY=APPKEY,"2B7E151628AED2A6ABF7158809CF4F3C"` para definir o App Key

A saída será a seguinte:

```
Tx: AT+ID=DevEui
Rx: +ID: DevEui, 2C:F7:F1:20:24:90:03:63
Tx: AT+ID=AppEui
Rx: +ID: AppEui, 80:00:00:00:00:00:00:07
Tx: AT+KEY=APPKEY,"2B7E151628AED2A6ABF7158809CF4F3C"
Rx: +KEY: APPKEY 2B7E151628AED2A6ABF7158809CF4F3C
```

- **Passo 11.** Copie e cole as informações acima nos campos **DevEUI**, **AppEUI** e **AppKey**. O campo **End device ID** será preenchido automaticamente quando preenchermos o **DevEUI**. Por fim, clique em **Register end device**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/12.png" alt="pir" width={600} height="auto" /></p>

- **Passo 12.** Registre seu Gateway LoRaWAN® no TTN Console. Consulte as instruções mostradas [aqui](https://wiki.seeedstudio.com/pt-br/The-Things-Indoor-Gateway/#step-2-gateway-registration-on-ttn-console)

- **Passo 13.** Digite os seguintes comandos AT para conectar ao TTN

```
// If you are using US915
AT+DR=US915
AT+CH=NUM,8-15

// If you are using EU868
AT+DR=EU868
AT+CH=NUM,0-2

AT+MODE=LWOTAA
AT+JOIN
```

A saída no monitor serial será a seguinte:

```
Tx: AT+DR=US915
Rx: +DR: US915
Tx: AT+CH=NUM,8-15
Rx: +CH: NUM, 8-15

Tx: AT+MODE=LWOTAA
Rx: +MODE: LWOTAA

Tx: AT+JOIN
Rx: +JOIN: Start
+JOIN: NORMAL
+JOIN: Network joined
+JOIN: NetID 000013 DevAddr 26:01:5F:66
+JOIN: Done
```

Se você vir **+JOIN: Network joined** no seu console serial, isso significa que seu dispositivo foi conectado com sucesso ao TTN!

Você também pode verificar o status do seu dispositivo na página **End devices**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/13.png" alt="pir" width={600} height="auto" /></p>

- **Passo 14.** Digite os seguintes comandos AT para enviar dados ao TTN

```
// send string "HELLO" to TTN 
Tx: AT+MSG=HELLO
Rx: +MSG: Start
+MSG: FPENDING
+MSG: RXWIN2, RSSI -112, SNR -1.0
+MSG: Done
// send hex "00 11 22 33 44" 
Tx: AT+MSGHEX="00 11 22 33 44"
Rx: +MSGHEX: Start
+MSGHEX: Done
```

Para mais informações sobre comandos AT, consulte [Wio-E5 AT Command Specification](https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf)

### Desenvolver com STM32Cube MCU Package

Esta seção é para Wio-E5 mini, com o objetivo de construir várias aplicações com STM32Cube MCU Package para a série STM32WL (SDK).

**Nota:** Agora atualizamos a biblioteca para suportar a v1.1.0, que é a versão mais recente do STM32Cube MCU Package para a série STM32WL.

:::note
Por favor, leia primeiro a seção [Erase Factory AT Firmware](https://wiki.seeedstudio.com/pt-br/LoRa_E5_mini/#21-erase-factory-at-firmware), pois precisamos apagar o Factory AT Firmware antes de programar com o SDK. Depois de apagar o Factory AT Firmware ele NÃO PODE ser recuperado.
:::

#### Preparações

Software:

- [STM32CubeIDE](https://my.st.com/content/my_st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-ides/stm32cubeide.html): para compilação e depuração

- [STM32CubeProgrammer](https://my.st.com/content/my_st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-programmers/stm32cubeprog.license=1614563305396.product=STM32CubePrg-W64.version=2.6.0.html): para programar dispositivos STM32

Hardware:

- Gateway LoRaWAN® conectado a um LoRaWAN® Network Server (por exemplo, TTN)

- Um cabo USB Tipo-C e um ST-LINK. Conecte o cabo Tipo-C à porta Tipo-C da placa para alimentação e comunicação serial. Conecte o ST-LINK aos pinos SWD como segue

![connection](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/connection.png)

#### Visão geral da configuração de GPIO

- Como o projeto de hardware da série Wio-E5 é um pouco diferente do NUCLEO-WL55JC, a placa de desenvolvimento oficial STM32WL55JC da ST, os desenvolvedores precisam reconfigurar alguns GPIOs para adaptar o exemplo do SDK à série Wio-E5. Nós já reconfiguramos os GPIOs, mas achamos necessário apontar a diferença.

|Rótulo do Exemplo SDK|GPIO do NUCLEO-WL55JC|GPIO do Wio-E5 mini|
|---------|---------------------|------------------------------------------|
|RF_CTRL1|PC4|PA4|
|RF_CTRL2|PC5|PA5|
|RF_CTRL3|PC3|None|
|BUT1|PA0|PB13 (Botão de Boot)|
|BUT2|PA1|None|
|BUT3|PC6|None|
|LED1|PB15|None|
|LED2|PB9|PB5|
|LED3|PB11|None|
|PROB1|PB12|PA0 (Botão D0)|
|PROB2|PB13|PB10|
|PROB3|PB14|PB3|
|PROB4|PB10|PB4|
|Usart|Usart2(PA2/PA3)|Usart1(PB6/PB7)|

:::note
O rótulo `PROB` se refere ao pino da Probe Line. Esses pinos podem ser configurados como a função adicional `CM4_EVENTOUT`. Como parte dos componentes de depuração CoreSight do núcleo Arm Cortex-M4, esse recurso permite depuração não intrusiva e marcação de eventos em nível de hardware. Ele monitora as atividades internas da CPU em tempo real sem pausar a CPU ou ocupar interfaces de comunicação (como UART), convertendo “eventos” que são difíceis de observar diretamente em software em sinais elétricos mensuráveis.
:::

### Aplicações

Agora vamos explorar várias aplicações para o Wio-E5 mini com STM32Cube MCU Package para a série STM32WL (SDK).

#### Nó Final LoRaWAN®

Esta aplicação conectará o Wio-E5 mini ao TTN (The Things Network) e enviará dados depois de se conectar a um gateway LoRaWAN®.

- **Passo 1.** Clique [aqui](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) para visitar o repositório **Seeed-Studio/LoRaWan-E5-Node** e faça o download como um arquivo ZIP

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **Passo 2.** Extraia o arquivo ZIP e navegue até `LoRaWan-E5-Node > Projects > Applications > LoRaWAN > LoRaWAN_End_Node > STM32CubeIDE`

- **Passo 3.** Clique duas vezes no arquivo **.project**

  **Nota:** Para MAC, deve-se usar uma das opções abaixo para abrir o projeto:

  - **1.** Navegue até `Wio-E5-Node > Projects > Applications > LoRaWAN > LoRaWAN_End_Node`. Clique duas vezes no arquivo "LoRaWAN_End_Node.ioc".

  - **2.** Use "Import Projects from File System or Archieve" como nas imagens abaixo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/MAC.png" alt="pir" width={600} height="auto" /></p>

- **Passo 4.** Clique com o botão direito no projeto e clique em **Properties**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/properties-open-2.jpg" alt="pir" width={600} height="auto" /></p>

- **Passo 5.** Navegue até `C/C++ Build > Settings > MCU Post build outputs`, marque **Convert to Intel Hex file (-O ihex)** e clique em **Apply and Close**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/set-hex.png" alt="pir" width={600} height="auto" /></p>

- **Passo 6.** Clique em **Build 'Debug'**, e ele deve compilar sem erros

![build](https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/build.png)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/lorawan-debug-2.png" alt="pir" width={600} height="auto" /></p>

Agora vamos modificar nosso **Device EUI**, **Application EUI**, **Application KEY** e **Região LoRawan®**

- **Passo 7.** Siga o [guia](https://wiki.seeedstudio.com/pt-br/LoRa_E5_mini/#13-connect-and-send-data-to-the-things-network) aqui para configurar sua aplicação TTN, obter seu **Application EUI** e copiá-lo para a definição de macro `LORAWAN_JOIN_EUI` em `LoRaWAN/App/se-identity.h` , por exemplo, o Application EUI aqui é `80 00 00 00 00 00 00 0x07` :

```cpp
// LoRaWAN/App/se-identity.h

/*!
 * App/Join server IEEE EUI (big endian)
 */
#define LORAWAN_JOIN_EUI                                   { 0x80, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x07 }
```

- **Passo 8.** Além disso, você pode modificar seu **Device EUI** e **Application Key**, configurando a definição de macro `LORAWAN_DEVICE_EUI` e `LORAWAN_NWK_KEY` em `LoRaWAN/App/se-identity.h`. Certifique-se de que `LORAWAN_DEVICE_EUI` e `LORAWAN_NWK_KEY` sejam os mesmos que o `Device EUI` e o `App Key` no console TTN.

```cpp
// LoRaWAN/App/se-identity.h

/*!
 * end-device IEEE EUI (big endian)
 */
#define LORAWAN_DEVICE_EUI                                 { 0x2C, 0xF7, 0xF1, 0x20, 0x24, 0x90, 0x03, 0x63 }

/*!
 * Network root key
 */
#define LORAWAN_NWK_KEY                                    2B,7E,15,16,28,AE,D2,A6,AB,F7,15,88,09,CF,4F,3C
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/se-identity.png" alt="pir" width={600} height="auto" /></p>

- **Passo 9.** A Região LoRaWAN padrão é `EU868`, você pode modificá-la configurando a definição de macro `ACTIVE_REGION` em `LoRaWAN/App/lora_app.h`

```c
// LoRaWAN/App/lora_app.h

/* LoraWAN application configuration (Mw is configured by lorawan_conf.h) */
/* Available: LORAMAC_REGION_AS923, LORAMAC_REGION_AU915, LORAMAC_REGION_EU868, LORAMAC_REGION_KR920, LORAMAC_REGION_IN865, LORAMAC_REGION_US915, LORAMAC_REGION_RU864 */
#define ACTIVE_REGION                               LORAMAC_REGION_US915
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/lora-app-h.png" alt="pir" width={600} height="auto" /></p>

- **Passo 10.** Após as modificações acima, **recompile** o exemplo e grave no seu Wio-E5. Abra o `STM32CubeProgrammer`, conecte o ST-LINK ao seu PC, mantenha pressionado o `RESET Button` do seu dispositivo, depois clique em `Connect` e solte o `RESET Button`:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program1.png" alt="pir" width={600} height="auto" /></p>

- **Passo 11.** Certifique-se de que o Read Out Protection esteja como `AA`, se for exibido como `BB`, selecione `AA` e clique em `Apply`:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program2.png" alt="pir" width={600} height="auto" /></p>

- **Passo 12.** Agora, vá para a página `Erasing & Programming`, selecione o caminho do seu arquivo hex (por exemplo: `C:\Users\user\Downloads\LoRaWan-E5-Node\Projects\Applications\LoRaWAN\LoRaWAN_End_Node\STM32CubeIDE\Debug\LoRaWAN_End_Node.hex` ), selecione as opções de programação como na figura a seguir e clique em `Start Programming`!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program3.png" alt="pir" width={600} height="auto" /></p>

Você verá a mensagem **Download verified successfully**, assim que a programação for concluída.

- **Passo 13.** Se o seu Gateway LoRaWAN® e o TTN estiverem configurados, o Wio-E5 irá se conectar com sucesso após o reset! Um pacote de confirmação LoRaWAN® será enviado ao TTN a cada 30 segundos. O seguinte log será impresso no monitor serial (Arduino Serial Monitor é usado aqui) se a conexão for bem-sucedida:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/TTN-joined.png" alt="pir" width={600} height="auto" /></p>

- Saúde! Agora você conectou o Wio-E5 à rede LoRaWAN®! Agora você pode começar a desenvolver aplicações de End Node LoRaWAN® ainda mais empolgantes!

**Nota:** Wio-E5 suporta apenas modo de saída de alta potência, então você não pode usar estas definições de macro em `radio_board_if.h` :

```
#define RBI_CONF_RFO     RBI_CONF_RFO_LP_HP
// or
#define RBI_CONF_RFO     RBI_CONF_RFO_LP
```

Embora **RBI_CONF_RFO** seja definido como **RBI_CONF_RFO_LP_HP** em `radio_board_if.h`, ele não será usado porque **USE_BSP_DRIVER** está definido e a função **BSP_RADIO_GetTxConfig()** retorna **RADIO_CONF_RFO_HP**

#### FreeRTOS LoRaWAN®

Esta aplicação também conectará o Wio-E5 mini ao TTN (The Things Network) e enviará dados após conectar-se a um gateway LoRaWAN®. A diferença entre a aplicação anterior de LoRaWAN® End Node e esta aplicação FreeRTOS LoRaWAN® é que a anterior roda em bare metal enquanto esta roda sob FreeRTOS.

- **Passo 1.** Clique [aqui](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) para visitar o repositório **Seeed-Studio/LoRaWan-E5-Node** e faça o download como um arquivo ZIP

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **Passo 2.** Extraia o arquivo ZIP e navegue até `LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LoRaWAN`

- **Passo 3.** Clique duas vezes no arquivo **.project**

- **Passo 4.** Consulte do **passo 4 ao passo 13** da aplicação anterior **LoRaWAN® End Node** para conectar o Wio-E5 mini ao TTN!  

#### FreeRTOS LoRaWAN® AT

Esta aplicação também conectará o Wio-E5 mini ao TTN (The Things Network) e enviará dados após conectar-se a um gateway LoRaWAN®. A diferença entre a aplicação FreeRTOS LoRaWAN anterior e esta aplicação é que você pode usar comandos AT.

- **Passo 1.** Clique [aqui](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) para visitar o repositório **Seeed-Studio/LoRaWan-E5-Node** e faça o download como um arquivo ZIP

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **Passo 2.** Extraia o arquivo ZIP e navegue até `LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LoRaWAN_AT`

- **Passo 3.** Clique duas vezes no arquivo **.project**

- **Passo 4.** Consulte do **passo 4 ao passo 12** da aplicação anterior **LoRaWAN End Node**

- **Passo 5.** Abra um monitor serial como o **Arduino Serial Monitor** e você verá a seguinte saída

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-at-serial-open-2.png" alt="pir" width={600} height="auto" /></p>

- **Passo 6.** Digite **AT?** e pressione **ENTER** para ver todos os comandos AT disponíveis

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/at-commands.png" alt="pir" width={600} height="auto" /></p>

- **Passo 7.** Se você ainda quiser mudar **Device EUI**, **Application EUI**, **Application KEY** e **Região LoRawan®**, você pode alterar usando comandos AT. No entanto, esses parâmetros já estão definidos em **se-identity.h** e **lora_app.h** neste exemplo

- **Passo 8.** Digite **AT+JOIN=1** e você verá a seguinte saída assim que a conexão for bem-sucedida!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-at-join.png" alt="pir" width={600} height="auto" /></p>

**Nota:** Aqui o formato **AT+JOIN=(Mode)** deve ser usado. **Mode** corresponde a **0 para ABP** ou **1 para OTAA**

#### FreeRTOS LowPower

Esta aplicação habilitará o modo de baixo consumo no Wio-E5 mini. Assim que a aplicação for gravada, a placa consumirá energia normalmente por 2 segundos e entrará em modo de baixo consumo por 2 segundos e assim por diante.

- **Passo 1.** Clique [aqui](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) para visitar o repositório **Seeed-Studio/LoRaWan-E5-Node** e faça o download como um arquivo ZIP

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **Passo 2.** Extraia o arquivo ZIP e navegue até `LoRaWan-E5-Node > Projects > Applications > FreeRTOS > FreeRTOS_LowPower`

- **Passo 3.** Clique duas vezes no arquivo **.project**

- **Passo 4.** Clique com o botão direito no projeto e clique em **Properties**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-properties.jpg" alt="pir" width={600} height="auto" /></p>

- **Passo 5.** Navegue até `C/C++ Build > Settings > MCU Post build outputs`, marque **Convert to Intel Hex file (-O ihex)** e clique em **Apply and Close**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-hex.jpg" alt="pir" width={600} height="auto" /></p>

- **Passo 6.** Clique em **Build 'Debug'**, e a compilação deve ocorrer sem erros

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-build.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/freertos-lpower-success.png" alt="pir" width={600} height="auto" /></p>

- **Passo 7.** Abra o `STM32CubeProgrammer`, conecte o ST-LINK ao seu PC, mantenha pressionado o `RESET Button` do seu dispositivo, depois clique em `Connect` e solte o `RESET Button`:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program1.png" alt="pir" width={600} height="auto" /></p>

- **Passo 8.** Certifique-se de que o Read Out Protection esteja como `AA`, se for exibido como `BB`, selecione `AA` e clique em `Apply`:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program2.png" alt="pir" width={600} height="auto" /></p>

- **Passo 9.** Agora, vá para a página `Erasing & Programming`, selecione o caminho do seu arquivo hex (por exemplo: `C:\Users\user\Downloads\LoRaWan-E5-Node\Projects\Applications\FreeRTOS\FreeRTOS_LowPower\Debug\FreeRTOS_LowPower.hex` ), selecione as opções de programação como na figura a seguir e clique em `Start Programming`!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5_Development_Kit/wiki%20images/program3.png" alt="pir" width={600} height="auto" /></p>

Você verá a mensagem **Download verified successfully**, assim que a programação for concluída.

- **Passo 10.** Conecte o Wio-E5 mini a um PC anexando um medidor de energia. Você notará que o LED vermelho na placa pisca a cada segundo e a placa alterna entre estados de energia normal e baixa (a corrente no medidor de energia diminui por 1 segundo para o estado de baixa energia e volta a subir por 1 segundo para o estado de funcionamento normal)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/low-power-demo-2.gif" alt="pir" width={600} height="auto" /></p>

#### Baixo Consumo de Energia

Este aplicativo também habilitará o modo de baixo consumo de energia no Wio-E5 mini. A diferença entre o aplicativo anterior FreeRTOS LowPower e este aplicativo Low Power é que o anterior roda sob FreeRTOS enquanto este roda em bare metal.

- **Passo 1.** Clique [aqui](https://github.com/Seeed-Studio/LoRaWan-E5-Node/tree/qian) para visitar o repositório **Seeed-Studio/LoRaWan-E5-Node** e baixá-lo como um arquivo ZIP

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-mini/main-branch.png" alt="pir" width={600} height="auto" /></p>

- **Passo 2.** Extraia o arquivo ZIP e navegue até `LoRaWan-E5-Node > Projects > Applications > LowPower`

- **Passo 3.** Dê um clique duplo no arquivo **.project**

- **Passo 4.** Consulte o **passo 4 - passo 10** do aplicativo anterior **FreeRTOS LowPower** e você verá a mesma saída no final no medidor de energia!

## Recursos

Wio-E5 mini Datasheet:

- <p><a href="http://files.seeedstudio.com/products/113990939/LoRa-E5%20mini%20v1.0.brd">Wio-E5 mini v1.0.brd</a></p>

- <p><a href="https://files.seeedstudio.com/products/113990939/LoRa-E5%20mini%20v1.0.pdf">Wio-E5 mini v1.0.pdf</a></p>

- <p><a href="http://files.seeedstudio.com/products/113990939/LoRa-E5%20mini%20v1.0.sch">Wio-E5 mini v1.0.sch</a></p>

Wio-E5 Datasheet:

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.1.pdf">Wio-E5 datasheet and specifications</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf">Wio-E5 AT Command Specification</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/STM32WLE5JC%20Datasheet.pdf">STM32WLE5JC Datasheet</a></p>

Certificações Wio-E5:

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20Certification%20CE-VOC-RED.pdf">Wio-E5-HF Certification CE-VOC-RED</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DSS.pdf">Wio-E5-HF FCC Certification -DSS</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DTS.pdf">Wio-E5-HF FCC Certification -DTS</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/Telec.zip">WWio-E5-HF TELEC Certification</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20IC%20ID.pdf">Wio-E5-HF IC Certification</a></p>

SDK relevante:

- <p><a href="https://my.st.com/content/my_st_com/en/products/embedded-software/mcu-mpu-embedded-software/stm32-embedded-software/stm32cube-mcu-mpu-packages/stm32cubewl.license=1608693595598.product=STM32CubeWL.version=1.0.0.html#overview" target="_blank">Pacote STM32Cube MCU para a série STM32WL</a></p>

## Suporte Técnico & Discussão de Produtos

Envie qualquer problema técnico para o nosso [fórum](http://forum.seeedstudio.com/).

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
