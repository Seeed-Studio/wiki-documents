---
title: Grove Serial Bluetooth
nointro: null
keywords:
  - docs
  - docusaurus
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: /Grove-Serial_Bluetooth
last_update:
  date: 01/29/2022
  author: jianjing Huang
createdAt: '2023-01-29'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/Grove-Serial_Bluetooth/
---


![](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth/img/Twigbt00.jpg)

Grove - Serial Bluetooth é um módulo fácil de usar, compatível com o Grove Base Shield existente e projetado para configuração de conexão serial sem fio transparente. O módulo Bluetooth de porta serial é totalmente qualificado como Bluetooth V2.0+EDR (Enhanced Data Rate) Modulação de 2 Mbps com transceptor de rádio completo de 2,4 GHz e banda base. Ele usa o sistema Bluetooth de chip único CSR Bluecore 04-External com tecnologia CMOS e com AFH (Adaptive Frequency Hopping Feature). Ele possui a menor área de 12,7 mm x 27 mm. Esperamos que isso simplifique o seu ciclo geral de projeto/desenvolvimento.

Modelo:[WLS31746P](https://www.seeedstudio.com/depot/grove-serial-bluetooth-p-795.html?cPath=139_142)

## Especificações ##

- Tensão de operação: 5,0 VCC

- Taxa de dados: 2 Mbps

- Potência de transmissão de RF (Máx.): +4 dBm

- Sensibilidade: -80 dBm

- Bluetooth V2.0+EDR 3 Mbps Modulation totalmente qualificado

- Taxa de baud selecionável

- Reconexão automática em 30 min quando desconectado por estar além do alcance da conexão

## Demonstração ##

Nesta biblioteca empacotamos dois demos para o seu projeto funcionar no modo Master e no modo Slave.
Dois módulos Bluetooth funcionam como mostrado abaixo:
![](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth/img/Bluetooth-1.jpg)

Conecte o módulo à porta D6 do [Grove - Base Shield](https://seeeddoc.github.io/Grove-Base_Shield/) :
![](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth/img/Grove-Serial-Bluetooth.JPG)

Instale a biblioteca na seção "Resources". Se você quiser executar o projeto no modo Master, encontre o demo pelo caminho: File - Examples - Bluetooth_demo_code - Master. E você pode encontrar o demo para o modo Slave no mesmo caminho.

Quando o módulo Grove - Serial Bluetooth estiver em estado de pareamento, os LEDs verde e vermelho piscam alternadamente. Se a conexão for bem-sucedida, o LED verde piscará a cada 2 s. Se a conexão falhar, o LED vermelho piscará a cada 0,5 s.

## Referência ##

#### Fluxograma ####

![](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth/img/Bluetooth-2.jpg)

### Comandos para alterar a configuração padrão ###

**1.Definir MODE de funcionamento**

|||
|---|
 |\r\n+STWMOD=0\r\n|Definir o modo de funcionamento do dispositivo como cliente (slave). Salvar e reiniciar.|
 |\r\n+STWMOD=1\r\n|Definir o modo de funcionamento do dispositivo como servidor (master). Salvar e reiniciar.|

**Nota:** **\r\n** é necessário para a operação e o valor é **0x0D 0x0A** em Hex. **\r** e **\n** representam **carriage-return** e **line-feed** (ou próxima linha),

**2.Definir BAUDRATE**

|||
|---|
 |\r\n+STBD=115200\r\n|Definir baudrate 115200. Salvar e reiniciar.|
 |Baudrates suportados:9600,19200,38400,57600,115200,230400,460800.|

**3.Definir NAME do dispositivo**

|||
|---|
 |\r\n+STNA=abcdefg\r\n|Definir o nome do dispositivo como “abcdefg”. Salvar e reiniciar.|

**4.Conectar automaticamente o último dispositivo pareado na energização**

|||
|---|
 |\r\n+STAUTO=0\r\n|Conexão automática proibida. Salvar e reiniciar.|
 |\r\n+STAUTO=1\r\n|Permitir conexão automática. Salvar e reiniciar.|

**5.Permitir que o dispositivo pareado se conecte a mim**

|||
|---|
 |\r\n+STOAUT=0\r\n|Proibido. Salvar e reiniciar.|
 |\r\n+STOAUT=1\r\n|Permitido. Salvar e reiniciar.|

**6.Definir PINCODE**

|||
|---|
 |\r\n+STPIN=2222\r\n|Definir pincode “2222”. Salvar e reiniciar.|

**7.Excluir PINCODE (inserir PINCODE pelo MCU)**

|||
|---|
 |\r\n+DLPIN\r\n|Excluir pincode. Salvar e reiniciar.|

**8.Ler ADDRESS CODE local**

|||
|---|
 |\r\n+RTADDR\r\n|Retorna o endereço do dispositivo.|

**9.Reconexão automática quando o dispositivo master estiver além do alcance válido (o dispositivo slave irá se reconectar automaticamente em 30 min quando estiver além do alcance válido)**

|||
|---|
 |\r\n+LOSSRECONN=0\r\n|Proibir reconexão automática.|
 |\r\n+LOSSRECONN=1\r\n|Permitir reconexão automática.|

###  Comandos para operação normal ###

#### 1.Inquire

**a) Master**

|||
|---|
 |\r\n+INQ=0\r\n|Parar Inquiring|
 |\r\n+INQ=1\r\n|Começar/Reiniciar Inquiring|

**b) Slave**

|||
|---|
|\r\n+INQ=0\r\n |Desabilitar ser inquired|
|\r\n+INQ=1\r\n| Habilitar ser inquired|

Quando o comando **+INQ=1** é bem-sucedido, os LEDs **vermelho** e **verde** piscam alternadamente.

**2.O módulo Bluetooth retorna o resultado da inquirição**

|||
|---|
 |\r\n+RTINQ=aa,bb,cc,dd,ee,ff;name\r\n|
 |O dispositivo Serial Bluetooth com o endereço “aa,bb,cc,dd,ee,ff” e o nome “name” foi encontrado|

**3.Conectar dispositivo**

|||
|---|
 |\r\n+CONN=aa,bb,cc,dd,ee,ff\r\n|Conectar a um dispositivo com endereço "aa,bb,cc,dd,ee,ff”|

**4.O módulo Bluetooth solicita a inserção do PINCODE**

\r\n+INPIN\r\n

**5.Inserir PINCODE**

|||
|---|
 |\r\n+RTPIN=code\r\n||
 |Exemplo: RTPIN=0000| Inserir PINCODE que é quatro zeros|

**6.Desconectar dispositivo** Colocar PIO0 em nível alto irá desconectar o dispositivo Bluetooth atualmente em funcionamento.

**7.Retornar status** \r\n+BTSTA:**xx**\r\n
Status de **xx**:

- 0 - Inicializando

- 1 - Pronto

- 2 - Inquiring

- 3 - Conectando

- 4 - Conectado

(**Nota:** Isto não é um comando, mas a informação retornada pelo módulo após cada comando)

## Visualizador esquemático online

<div className="altium-ecad-viewer" data-project-src="res/Grove-Serial_Bluetooth_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos ##

- [Serial Bluetooth Library](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth/res/Bluetooth_demo_code.zip)
- [Serial Bluetooth Eagle File](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth/res/Grove-Serial_Bluetooth_eagle_file.zip)
- [Bluetooth Software instruction](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth/res/Bluetooth_Software_Instruction.pdf)
- [Bluetooth - module Datasheet](https://files.seeedstudio.com/wiki/Grove-Serial_Bluetooth/res/Bluetooth_module.pdf)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
