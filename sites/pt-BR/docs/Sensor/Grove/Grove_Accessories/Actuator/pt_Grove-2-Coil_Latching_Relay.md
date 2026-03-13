---
title: Grove - Relé Biestável de 2 Bobinas
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-2-Coil_Latching_Relay/
slug: /Grove-2-Coil_Latching_Relay
sku: 103020010
last_update:
  date: 01/09/2022
  author: gunengyu
createdAt: '2023-01-10'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-2-Coil_Latching_Relay/
---

![](https://files.seeedstudio.com/wiki/Grove-2-Coil_Latching_Relay/img/2Coil_Latching_Relay_01.jpg)

Este módulo é baseado em um relé biestável de 2 bobinas. Em contraste com o relé comum, este relé biestável não precisa de alimentação contínua para manter o estado; apenas um pulso de subida/descida é necessário para alterar o estado de operação. A alimentação pode até ser removida quando o estado de operação não precisa mudar, tornando este módulo especialmente adequado para projetos de baixo consumo de energia.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-2-Coil-Latching-Relay-p-1446.html)

Recursos
-------

- Conector Grove
- Baixo consumo de energia
- Chave dupla

:::tip
    Para mais detalhes sobre módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

Especificações
-------------

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
Item
</th>
<th scope="col">
Min
</th>
<th scope="col">
Typical
</th>
<th scope="col">
Max
</th>
<th scope="col">
Unit
</th>
</tr>
<tr align="center">
<th scope="row">
Tensão de trabalho
</th>
<td>
4.7
</td>
<td>
5.0
</td>
<td>
5.3
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
Tensão de acionamento/reset (Máx)
</th>
<td colspan="3">
4.0
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
Resistência da bobina
</th>
<td>
151
</td>
<td>
167
</td>
<td>
183
</td>
<td>
Ω
</td>
</tr>
<tr align="center">
<th scope="row">
Tensão de comutação (Máx)
</th>
<td colspan="3">
35VAC/35VDC
</td>
<td>
/
</td>
</tr>
<tr align="center">
<th scope="row">
Corrente de comutação (Máx)
</th>
<td colspan="3">
3
</td>
<td>
A
</td>
</tr>
<tr align="center">
<th scope="row">
Tempo de acionamento (Biestável)
</th>
<td colspan="3">
4.5(max)
</td>
<td>
ms
</td>
</tr>
<tr align="center">
<th scope="row">
Tempo de reset (Biestável)
</th>
<td colspan="3">
3.5(max)
</td>
<td>
ms
</td>
</tr>
</table>

Plataformas compatíveis
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários têm que escrever sua própria biblioteca de software.
:::

Antes do uso
------------

### Leituras relacionadas

Sugerimos que você leia estes conhecimentos antes de usar o sensor de gás; isso o ajudará a aprender mais sobre Arduino e nossos produtos e também permitirá que você use hardware de código aberto com mais facilidade.

<!-- - [Getting Started with Arduino](/pt-br/Getting_Started_with_Seeeduino)
- [What is Grove system](/pt-br/Grove_System)
- [Why i need a Base shield?](/pt-br/Base_Shield_V2) -->

- Primeiros passos com Arduino
- O que é o sistema Grove
- Por que eu preciso de um Base Shield?

Depois de ler isso, você saberá como usar o Base Shield com produtos Grove para funcionar bem com o Arduino. Vamos começar!

### Preparação

Este tutorial incluirá alguns produtos necessários:

<!-- - [Arduino UNO R3](https://www.seeedstudio.com/depot/Arduino-Uno-Rev3-p-694.html) or [Seeeduino v4](https://www.seeedstudio.com/depot/Seeeduino-V4-p-669.html)
- [Base Shield](https://www.seeedstudio.com/depot/Base-Shield-V2-p-1378.html)
- Grove - 2-Coil Latching Relay -->

- Arduino UNO R3 ou Seeeduino v4
- Base Shield
- Grove - 2-Coil Latching Relay

Primeiros passos
-----

### Com Arduino

O relé biestável consome energia apenas durante a mudança de estado. Um pulso de tensão de subida/descida no pino de sinal altera seu estado de operação. Isso é muito útil em situações onde a eficiência energética é importante e também em situações onde você precisa que o relé se lembre de seu estado.

Vamos começar a usá-lo.

- Conecte o módulo à porta D3 do Grove - Base Shield.
- O relé permanece no estado de "set" (Comm e NO conectados) por padrão; quando há uma borda de subida no pino SIG, ele muda para o estado de "reset" (Comm e NC conectados). O código de referência é mostrado abaixo:

```c
#define LatchingRelay 3
void setup()
{
    pinMode(LatchingRelay,OUTPUT);

    digitalWrite(LatchingRelay,LOW);
    delay(1000);
    digitalWrite(LatchingRelay,HIGH);
    delay(1000);
}
void loop()
{

}
```

- O relé permanece no estado de "reset" (Comm e NC conectados); quando há uma borda de descida no pino SIG, ele muda para o estado de "set" (Comm e NO conectados). O código de referência é mostrado abaixo:

```c
#define LatchingRelay 3
void setup()
{
    pinMode(LatchingRelay,OUTPUT);

    digitalWrite(3,HIGH);
    delay(1000);
    digitalWrite(3,LOW);
    delay(1000);
}
void loop()
{

}
```

- Este módulo consome pouca energia quando o estado de operação não muda. Após definir o estado do relé, você não precisa mais fornecer energia para o relé biestável, o que o torna de consumo de energia especialmente baixo.

<div class="admonition note">
<p class="admonition-title">Note</p>
O relé está no estado de "reset" quando é retirado do estoque.
</div>

![](https://files.seeedstudio.com/wiki/Grove-2-Coil_Latching_Relay/img/Latching_Relay_Diagram.jpg)

<div class="admonition note">
<p class="admonition-title">Notes</p>
<p> 1. Os relés de duas vias são controlados ao mesmo tempo.</p>
<p> 2. O indicador NO(NC) piscará uma vez ao alternar para o estado de "set" ("reset").</p>
</div>

### Com Raspberry Pi

1.Você deve ter um Raspberry Pi e um GrovePi ou GrovePi+.

2.Você deve ter concluído a configuração do ambiente de desenvolvimento; caso contrário, siga as instruções [aqui](/pt-br/GrovePi_Plus).

3.Conexão

- Conecte o sensor ao soquete D4 do GrovePi usando um cabo Grove.

4.Navegue até o diretório de demonstrações:

```
cd yourpath/GrovePi/Software/Python/
```

- Para ver o código

```
nano grove_2_coil_latching_relay.py   # "Ctrl+x" to exit #
```

```
import time
import grovepi

# Connect the Grove 2-Coil Latching Relay to digital port D4
# SIG,NC,VCC,GND
relay = 4

grovepi.pinMode(relay,"OUTPUT")

while True:
    try:
        # switch on for 5 seconds
        grovepi.digitalWrite(relay,1)
        print "on"
        time.sleep(5)

        # switch off for 5 seconds
        grovepi.digitalWrite(relay,0)
        print "off"
        time.sleep(5)

    except KeyboardInterrupt:
        grovepi.digitalWrite(relay,0)
        break
    except IOError:
        print "Error"
```

5.Execute a demonstração.

```
sudo python grove_2_coil_latching_relay.py
```

## Visualizador de esquemático online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-2-Coil_Latching_Relay/res/Grove-2-Coil_Latching_Relay_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
--------

- [Arquivo Eagle do Grove - 2-Coil Latching Relay](https://files.seeedstudio.com/wiki/Grove-2-Coil_Latching_Relay/res/Grove-2-Coil_Latching_Relay_Eagle_File.zip)
- [Latching_Relay_Datasheet](https://files.seeedstudio.com/wiki/Grove-2-Coil_Latching_Relay/res/Latching_Relay_Datesheet.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_2-Coil_Latching_Relay -->

## Suporte técnico e discussão de produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
