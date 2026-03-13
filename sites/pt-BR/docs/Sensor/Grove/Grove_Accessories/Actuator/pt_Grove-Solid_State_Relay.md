---
title: Grove - Relé de Estado Sólido
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-Solid_State_Relay/
slug: /Grove-Solid_State_Relay
sku: 103020004
last_update:
  date: 01/09/2022
  author: gunengyu
createdAt: '2023-01-10'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Solid_State_Relay/
---
![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/Grove_Solid_State_Relay_1.jpg)

Grove – Solid State Relay é um módulo de chave eletrônica sem contato que possui características de relé. Baseado no S208T02, ele tem uma saída máxima de 250VAC/4A, com uma velocidade de comutação menor que 10 ms. Este módulo é equipado com uma base de acrílico e uma blindagem de isolamento de proteção impressa em 3D, para a segurança do usuário. O LED em destaque indica que o relé está ligado. Ele pode ser amplamente utilizado em várias áreas, como interfaces de periféricos de computador, ajuste de temperatura/velocidade/luz, controle de servos, petroquímica, instrumentação médica, dispositivos financeiros, mineração de carvão, medidores, sinais de trânsito, etc.

:::note
        Este módulo funciona apenas com carga CA na saída. Se você usar carga CC, uma vez que o relé seja ligado, ele permanecerá sempre ligado.
:::

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Solid-State-Relay-p-1359.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Recursos

- Blindagem de isolamento de proteção impressa em 3D
- Compatível com níveis de controle de 3,3 V e 5 V
- Baixa latência de comutação (≤10 ms)
- LED indicador de estado ligado
- Dissipador de calor destacado proporciona melhor estabilidade
- Base de acrílico e papel isolante aumentam o desempenho de segurança
- Compatível com Grove

:::tip
    Para mais detalhes sobre os módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

## Ideias de Aplicação

- Operações que exigem comutação de baixa latência, por exemplo, controle de luz de palco
- Dispositivos que exigem alta estabilidade, por exemplo, dispositivos médicos, sinais de trânsito
- Situações que exigem à prova de explosão, anticorrosão, à prova de umidade, por exemplo, mineração de carvão, indústrias químicas.

## Especificação

|Item |Min |Typical |Max |Uint|
|---|---|---|---|---|
|Tensão de Entrada| 3.0|3.3|5.0|VDC|
|Corrente de Entrada| 16|20|50|mA|
|Tensão de Saída |-|220|250|VAC|
|Corrente de Saída |--|--|4.0|A
|Frequência de operação|45|50|65|Hz
|Temperatura de operação|-25|25|85|℃
|Tempo de acionamento |--|10|--|ms|
|Tempo de desligamento |--|10|--|ms|
|Dimensão |-|44x44x32|-|mm|
|Peso Líquido |-|25.5|-|g|

## Função de Interface

![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/Ssr_interface.jpg)

:::caution
        **1.** Se a tensão de saída for maior que 36 V, você precisa garantir que o módulo esteja em estado desligado antes de operar com os parafusos.

        **2.** O dissipador de calor pode atingir uma temperatura muito alta, não o toque durante o uso.
:::

## Primeiros Passos

### Brincar com Arduino

:::note
    Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

:::tip
        Este exemplo funciona com carga CA de 220 V, por favor, preste atenção à sua segurança.
:::

#### Materiais necessários

  | Seeeduino V4.2 | Base Shield| Lâmpada |Grove - Solid State Relay|
  |--------------|-------------|-----------------|-----|
  |![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/bulb.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/thumbnail.jpg)|
  |<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|Use sua própria lâmpada :)|<a href="https://www.seeedstudio.com/Grove-Solid-State-Relay-p-1359.html" target="_blank">Get One Now</a>|

:::note
    **1** Por favor, conecte o cabo USB delicadamente, caso contrário você pode danificar a porta. Use o cabo USB com 4 fios internos, o cabo de 2 fios não pode transferir dados. Se você não tiver certeza sobre o cabo que possui, você pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

    **2** Cada módulo Grove acompanha um cabo Grove quando você compra. Caso você perca o cabo Grove, você pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar
:::

#### Hardware

- **Passo 1.** Conecte o Grove - Solid State Relay à porta **D3** do Grove-Base Shield.

- **Passo 2.** Conecte o fio da lâmpada à **porta de saída** do Grove - Solid State Relay.

- **Passo 3.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 4.** Conecte o Seeeduino ao PC por meio de um cabo Micro-USB.

:::note
    Se não tivermos o base shield, também podemos conectar diretamente o Grove-Relay e o Grove-Button à placa Arduino. Siga a conexão abaixo.
:::

| Grove - Solid State | Arduino |Grove Cable|
|-------------|---------|------|
| GND         | GND     |Black|
| VCC         | 5V      |Red|
| SIG         | D3      |Yellow|

![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/Arduino_relay.jpg)

#### Software

- **Passo 1.** Abra a Arduino IDE e copie o código a seguir em um novo sketch.

```
/*
  Grove - Solid State Relay Demo Code
  The ssr will turn on for 5s and then turn off for 5s, and so on.
  https://www.seeedstudio.com
*/

int ssrControlPin = 3;
void setup() {
    // initialize the digital pin as an output.
    pinMode(ssrControlPin, OUTPUT);
}

void loop() {
    digitalWrite(ssrControlPin, HIGH);      // set the SSR on
    delay(5000);                            // wait for 5 second
    digitalWrite(ssrControlPin, LOW);       // set the SSR off
    delay(5000);                            // wait for 5 second
}
```

- **Passo 2.** Envie o exemplo. Se você não sabe como enviar o código, verifique [How to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

Depois de carregar, você verá a lâmpada acender por 5 s e depois apagar por 5 s continuamente.

### Brincar com Raspberry Pi

#### Hardware

**Materiais necessários**

  | Raspberry pi | GrovePi_Plus|  Grove-Relay|
  |--------------|-------------|------|
  |![enter image description here](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/thumbnail.jpg)|
  |<a href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/GrovePi%2B-p-2241.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-Solid-State-Relay-p-1359.html" target="_blank">Get One Now</a>|

- **Passo 1.** Conecte o GrovePi_Plus ao Raspberry.

- **Passo 2.** Conecte o Grove-Relay à porta **D4** do GrovePi_Plus.

- **Passo 3.** Conecte o fio da lâmpada à **porta de saída** do Grove - Solid State Relay.

- **Passo 4.** Conecte o Raspberry ao PC por meio de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/PI_RELAY.jpg)

#### Software

Se esta é a primeira vez que você usa o GrovePi, faça esta parte passo a passo. Se você já é um velho amigo do GrovePi, pode pular o **Passo 1** e o **Passo 2**.

- **Passo 1.** Configurando o Software. Na linha de comando, digite os seguintes comandos:

:::note
     Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você **não pode usar esta linha de comando**.
:::

```
sudo curl -kL dexterindustries.com/update_grovepi | bash

```

```
sudo reboot
```

```
cd /home/pi/Desktop
```

```
git clone https://github.com/DexterInd/GrovePi.git
```

For more detail about this part, please refer to [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/).

- **Passo 2.** Siga [Updating the Firmware](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) para atualizar o firmware mais recente do GrovePi.

:::note
    Sugerimos firmemente que você atualize o firmware, caso contrário, para alguns sensores você pode obter erros.
:::

- **Passo 3.** Execute o comando a seguir para rodar o exemplo e obter o resultado.

:::note
     Se você estiver usando **Raspberry Pi com Raspberrypi OS >= Bullseye**, você tem que usar esta linha de comando **apenas com Python3**.
:::

```
cd /home/pi/Desktop/GrovePi/Software/Python/

```

```
sudo python3 grove_solid_state_relay.py 
```

O resultado deve ser semelhante a:

```
pi@raspberrypi:~/Desktop/GrovePi/Software/Python$ sudo python3 grove_solid_state_relay.py
on
off
on
off
on
off
on
off
on
off
on
off

```

Se você quiser verificar o código, digite o comando abaixo.

```
nano grove_solid_state_relay.py   # "Ctrl+x" to exit #
```

O código é:

```python
import time
import grovepi

# Connect the Grove Solid State Relay to digital port D4
# CTR,NC,VCC,GND
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

## Relatório de Teste

---
**1. Objetivos experimentais**

- Desempenho térmico do Grove – Solid State Relay (S208T02).
- Corrente de carga limite do Grove – SSR.
- Medidas para melhorar a corrente de carga limite.

**2. Princípio Experimental**

Registrando a temperatura do chip SSR em diferentes correntes e diferentes pontos de tempo, analisam-se os dados e tiram-se conclusões.

A Figura 1 é uma captura de tela do datasheet do S208T02, podemos ver que com diferentes dissipadores de calor e diferentes temperaturas, a corrente do SSR é diferente.

![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/Figure_1.jpg)

É necessário um sensor de temperatura para obter a temperatura do chip. Eu uso o DS18B20 cujo intervalo de detecção é de -25 a 125 ℃ para atender aos requisitos.

A Figura 2 mostra o equipamento experimental e os planos de instalação, o sensor de temperatura está amarrado ao lado direito do dissipador de calor; para fazer com que a temperatura que o 18b20 detecta fique o mais próxima possível da temperatura do dissipador de calor, aplique pasta térmica entre o sensor e o dissipador de calor. Entre o dissipador de calor e o SSR também é aplicada pasta térmica. Portanto, a temperatura do 18b20 é igual à temperatura do SSR.

![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/Grove-ssr-report-image2.JPG)

**3.Dados experimentais**

|- |1min |5min| 10min| 20min |tempo estável|
|---|---|---|---|---|---|
|0.5A| 31.40| 33.75 |34.75| 35.00 |15min|
|1A| 31.8 |36.75 |39.6| 40.56 |18min|
|2A| 34.5| 46.6| 48.88 |51.13 |20min|
|3A |35.56| 52.81| 58.88 |60.06| 17min|
|4A| 38.00 |57.88| 63.88 |67.00 |19min|
|5A| 44.00| 66.00| 73.12| 75.37| 19min|

:::note
    1. A unidade de temperatura na tabela é ℃
    2. Durante o teste, a temperatura ambiente é 28 ℃
:::
**4.Experimento de expansão**

  Para provar que melhorar o nível do dissipador de calor irá aumentar a corrente limite de operação do SSR, eu fiz um experimento de expansão.

  Como eu não tinha um dissipador de calor maior em mãos, instalei um ventilador (que eu tirei da CPU do meu PC) acima do SSR. Como mostrado na Figura 3.

![](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/img/Grove-ssr-report-image3.JPG)

Eu apenas testei o tempo estável de diferentes correntes de operação, como mostrado na Tabela 2.

|-| 6.0A| 6.5A |7.0A| 7.5A|
|---|---|---|---|---|
|Tempo estável| 54.44℃| 57.63℃ |60.06℃| 62.38℃|

**5.Experimento de expansão**

A partir dos resultados experimentais acima, podem ser tiradas as seguintes conclusões:

- Quando a corrente é fixa, com o passar do tempo, a temperatura irá se estabilizar em um determinado valor. Esse valor está relacionado com a corrente; à medida que a corrente aumenta, a temperatura estável é maior. Em 2A, a temperatura estável será superior a 50 ℃, então, quando o SSR estiver funcionando, você não deve tocá-lo.

- Combinando a Figura 1 e nossos dados, eu considero que o Grove – SSR pode operar com corrente de carga máxima de 4A.

- Se a corrente de carga for maior que 5A, como 7A, você deve instalar um ventilador nele, ou adotar outras medidas de resfriamento, mas isso não é recomendado.

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/res/Ssr_eaglefile.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Grove - Solid State Relay Arquivo Eagle](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/res/Ssr_eaglefile.zip)
- **[RAR]** [Grove - Solid State Relay Código de Demonstração](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/res/SSR_Demo_Code.rar)
- **[PDF]** [S208T02 Datasheet](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/res/S208t02_datasheet.pdf)
- **[PDF]** [Grove - Solid State Relay em PDF](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/res/SSR_v0.9b.pdf)
- **[PDF]** [Grove - Solid State Relay Relatório de Teste](https://files.seeedstudio.com/wiki/Grove-Solid_State_Relay/res/Grove-SSR_Test_Report_V0.3.pdf)

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
