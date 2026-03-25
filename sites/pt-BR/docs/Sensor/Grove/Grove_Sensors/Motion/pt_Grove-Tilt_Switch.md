---
description: Grove - Interruptor de Inclinação
title: Grove - Interruptor de Inclinação
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Tilt_Switch
sku: 101020025
last_update:
  date: 1/6/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Tilt_Switch/
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Tilt1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Tilt1.jpg" alt="pir" width={600} height="auto" /></p>

O Grove-Tilt Switch é equivalente a um botão e é usado como uma entrada digital. Dentro do interruptor de inclinação há um par de esferas que fazem contato com os pinos quando o invólucro está na posição vertical. Ao inclinar o invólucro, as esferas não se tocam, não fazendo assim a conexão. Ele é ligado à linha SIG, o NC não é usado neste Grove.

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Tilt-Switch-p-771.html)

Recursos
--------

- Interface Grove
- Fácil de usar
- Módulo Grove simples

:::tip
    Para mais detalhes sobre módulos Grove, consulte [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

Especificações
--------------

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
Tensão
</th>
<td>
3
</td>
<td>
5.0
</td>
<td>
5.25
</td>
<td>
V
</td>
</tr>
<tr align="center">
<th scope="row">
Ângulo de Conexão
</th>
<td colspan="3">
10° ~170°
</td>
<td>
-
</td>
</tr>
<tr align="center">
<th scope="row">
Ângulo de Desconexão
</th>
<td colspan="3">
190° ~350°
</td>
<td>
-
</td>
</tr>
<tr align="center">
<th scope="row">
Vida Útil Elétrica
</th>
<td colspan="3">
100,000
</td>
<td>
Ciclos
</td>
</tr>
</table>

Plataformas Suportadas
-------------------

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever suas próprias bibliotecas de software.
:::

## Primeiros Passos

### Brincar com Arduino

O pino SIG do Grove - Tilt Switch normalmente gera LOW. Quando o interruptor de inclinação está na posição vertical, um par de esferas dentro do interruptor de inclinação fará contato com os pinos e o pino SIG irá gerar HIGH.

O sketch a seguir demonstra uma aplicação simples usando o Tilt Switch e o Grove - Button para controlar o LED.

- Como indicado na figura a seguir, o Tilt Switch é conectado à porta digital 5 do Grove - Base Shield e o Grove-Button à porta digital 7. O LED é conectado à porta digital 1. A instalação de hardware é a seguinte:

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Digitalv1.0b.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Digitalv1.0b.jpg" alt="pir" width={600} height="auto" /></p>

- Copie e cole o código abaixo em um novo sketch Arduino.

```
void setup()
{
    pinMode(1, OUTPUT);
    pinMode(5, INPUT);
    pinMode(7, INPUT);
}

void loop()
{

    if (digitalRead(5)==HIGH)
    {
        digitalWrite(1, HIGH);
        delay(100);
        digitalWrite(1, LOW);
    }

    if (digitalRead(7)==HIGH)
    {
        digitalWrite(1, HIGH);
        delay(200);
        digitalWrite(1, LOW);
    }

}
```

- Faça o upload do código.
- Então o LED irá acender quando você pressionar o botão ou ativar o tilt-switch. Experimente!

### Brincar com Codecraft

#### Hardware

**Passo 1.** Conecte um Grove - Tilt Switch à porta D5, depois conecte um Grove - Button e um Grove - Red LED às portas D7 e D2 de um Base Shield.

**Passo 2.** Conecte o Base Shield ao seu Seeeduino/Arduino.

**Passo 3.** Conecte o Seeeduino/Arduino ao seu PC por meio de um cabo USB.

#### Software

**Passo 1.** Abra o [Codecraft](https://ide.chmakered.com/), adicione o suporte ao Arduino e arraste um procedimento principal para a área de trabalho.

:::note
    Se esta é a sua primeira vez usando o Codecraft, veja também o [Guia para usar o Codecraft com Arduino](https://wiki.seeedstudio.com/pt-br/Guide_for_Codecraft_using_Arduino/).
:::
**Passo 2.** Arraste os blocos como na figura abaixo ou abra o arquivo cdc que pode ser baixado no final desta página.

<!-- ![cc](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/cc_Tilt_Switch.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/cc_Tilt_Switch.png" alt="pir" width={600} height="auto" /></p>

Carregue o programa no seu Arduino/Seeeduino.

:::success
    Quando o código terminar de ser carregado, incline o tilt switch ou pressione o botão, o LED acenderá.
:::

### Brincar com Raspberry Pi (Com Grove Base Hat para Raspberry Pi)

#### Hardware

- **Passo 1**. Itens usados neste projeto:

| Raspberry pi | Grove Base Hat para RasPi| Grove - Tilt Switch |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|
|[Adquira agora](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Tilt-Switch-p-771.html)|

- **Passo 2**. Conecte o Grove Base Hat ao Raspberry.
- **Passo 3**. Conecte o tilt switch à porta 12 do Base Hat.
- **Passo 4**. Conecte o Raspberry Pi ao PC por meio de um cabo USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Tilt_Hat.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Tilt_Hat.jpg" alt="pir" width={600} height="auto" /></p>

:::note
    No passo 3 você pode conectar o tilt switch a **qualquer porta GPIO**, mas certifique-se de alterar o comando com o número de porta correspondente.
:::

#### Software

:::note
     Se você estiver usando um **Raspberry Pi com Raspberrypi OS >= Bullseye**, você deve usar esta linha de comando **apenas com Python3**.
:::

- **Passo 1**. Siga o guia [Setting Software](https://wiki.seeedstudio.com/pt-br/Grove_Base_Hat_for_Raspberry_Pi/#installation) para configurar o ambiente de desenvolvimento.
- **Passo 2**. Baixe o arquivo-fonte clonando a biblioteca grove.py.

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Passo 3**. Execute os comandos abaixo para rodar o código.

```
cd grove.py/grove
python3 grove_tilt_switch.py 12

```

A seguir está o código grove_tilt_switch.py.

```python

import time
from grove.gpio import GPIO


class GroveTiltSwitch(GPIO):
    def __init__(self, pin):
        super(GroveTiltSwitch, self).__init__(pin, GPIO.IN)
        self._on_trigger = None
        self._on_release = None

    @property
    def on_trigger(self):
        return self._on_trigger

    @on_trigger.setter
    def on_trigger(self, callback):
        if not callable(callback):
            return

        if self.on_event is None:
            self.on_event = self._handle_event

        self._on_trigger = callback

    @property
    def on_release(self):
        return self._on_release

    @on_release.setter
    def on_release(self, callback):
        if not callable(callback):
            return

        if self.on_event is None:
            self.on_event = self._handle_event

        self._on_release = callback

    def _handle_event(self, pin, value):

        if value:
            if callable(self._on_trigger):
                self._on_trigger()
        else:
            if callable(self._on_release):
                self._on_release()

Grove = GroveTiltSwitch


def main():
    import sys

    if len(sys.argv) < 2:
        print('Usage: {} pin'.format(sys.argv[0]))
        sys.exit(1)

    swicth = GroveTiltSwitch(int(sys.argv[1]))

    def on_trigger():
        print('Triggered')
    def on_release():
        print("Released.")

    swicth.on_trigger = on_trigger
    swicth.on_release = on_release

    while True:
        time.sleep(1)


if __name__ == '__main__':
    main()


```

:::success
    Se tudo correr bem, você poderá ver o seguinte resultado quando tocar no interruptor de inclinação
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_tilt_switch.py 12
Triggered
Released.
Triggered
^CTraceback (most recent call last):
  File "grove_tilt_switch.py", line 106, in <module>
    main()
  File "grove_tilt_switch.py", line 102, in main
    time.sleep(1)
KeyboardInterrupt

```

Você pode sair deste programa simplesmente pressionando ++ctrl+c++.

### Brincar com Raspberry Pi (com GrovePi_Plus)

### Com Raspberry Pi

:::note
     Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você deve usar esta linha de comando **apenas com Python3**.
:::
1.Você deve ter um Raspberry Pi e um Grovepi ou Grovepi+.

2.Você deve ter concluído a configuração do ambiente de desenvolvimento, caso contrário siga as instruções [aqui](/pt-br/GrovePi_Plus/).

3.Conexão

- Conecte o Tilt_Switch na porta D3 do grovepi usando um cabo Grove.

4.Navegue até o diretório de demonstrações:

```
       cd yourpath/GrovePi/Software/Python/
```

- Para ver o código

```
    nano grovepi_tilt_switch.py   # "Ctrl+x" to exit #
```

```
    import time
    import grovepi

    # Connect the Grove Tilt Switch to digital port D3
    # SIG,NC,VCC,GND
    tilt_switch = 3

    grovepi.pinMode(tilt_switch,"INPUT")

    while True:
        try:
            print grovepi.digitalRead(tilt_switch)
            time.sleep(.5)

        except IOError:
            print "Error"
```

5.Execute a demonstração.

```
    sudo python grove_tilt_switch.py
```

6.Resultado: Coloque o sensor na posição vertical por um lado, o pino SIG irá gerar nível ALTO.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Grovepi_tilt_Switch_00.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Grovepi_tilt_Switch_00.png" alt="pir" width={600} height="auto" /></p>

Referência
---------

O ângulo de operação do Grove-Tilt Switch é mostrado abaixo:

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Tilt_Switch_Operate.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Tilt_Switch_Operate.jpg" alt="pir" width={600} height="auto" /></p>

<div class="admonition note">
<p class="admonition-title">Nota</p>
A marca J1 no Grove é o terminal de referência.
</div>

# Grove - Tilt Switch v1.0 Arquivo Eagle

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/res/Grove-Tilt_Switch_v1.0_Source_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Grove - Tilt Switch v1.1 Arquivo Eagle

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/res/Grove-Tilt_Switch_v1.1_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
---------

- [Grove - Tilt Switch v1.0 Arquivo Eagle](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/res/Grove-Tilt_Switch_v1.0_Source_File.zip)
- [Grove - Tilt Switch v1.1 Arquivo PDF](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/res/Grove-Tilt_Switch_v1.1_PDF_File.pdf)
- [Grove - Tilt Switch v1.1 Arquivo Eagle](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/res/Grove-Tilt_Switch_v1.1_Eagle_File.zip)
- [SW200D Datasheet](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/res/SW200D_datasheet.pdf)
- [Arquivo CDC do Codecraft](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/res/Grove_Tilt_Switch_CDC_File.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Tilt_Switch -->

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
