---
title: Comece com a Wio RP2040 mini Dev Board
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/
slug: /Wio_RP2040_mini_Dev_Board-Onboard_Wifi
sku: 102991555
last_update:
  date: 01/11/2022
  author: gunengyu
createdAt: '2023-01-12'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/
---
![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_1.jpg)

A Wio RP2040 mini Dev Board é uma placa de desenvolvimento baseada no módulo Wio RP2040 com função sem fio, que suporta programação em MicroPython. Ela possui um chip RP2040 dual-core de 133MHz, que é um microcontrolador de baixo consumo com funções sem fio. Com desempenho poderoso e tamanho reduzido, é uma opção perfeita para o desenvolvimento de vários projetos de IoT.

A placa possui interfaces ricas, incluindo 28 pinos GPIO (19 pinos suportam PIO e PWM), 2 UART, 4 ADC, 2 SPI, 2 I2C. Alguns pinos podem ser multiplexados, como GP12 e GP13 com funções I2C, SPI, UART. É por isso que 28 pinos GPIO podem fornecer mais pinos e interfaces de E/S. A placa de desenvolvimento sem fio Wio RP2040 mini suporta uma interface USB Type-C, que pode fornecer alimentação e permitir o download de código. Além do LED de alimentação onboard, também adicionamos um LED controlável pelo usuário (conectado ao pino GP13). Há um botão RESET (na placa está impresso como "RUN") e um botão BOOT (que pode ser usado para reenviar o firmware).

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Wio-RP2040-mini-Dev-Board-p-4933.html)

## Principais recursos

- **CPU poderosa:**
  - processador RP2040 dual-core de 133MHZ e 264KB de SRAM, 2MB de Flash
- **Conexão sem fio confiável:**
  - usando um chip Wi-Fi poderoso, suportando frequência de 2.4~2.4835 GHz e modo Ap&Station
- **Flexibilidade:**
  - compatível com o editor Thonny
- **Operação de projeto facilitada:**
  - compatível com protoboard
- **Múltiplas certificações:**
  - Certificada pela FCC e CE
- **Linguagens de programação suportadas:**
  - MicroPython

## Especificações

| Nome | Detalhes |
| --- | --- |
| Processadores | Processadores Dual Cortex M0+, até 133 MHz |
| SRAM | 264KB |
| Flash | 2MB |
| Conectividade sem fio | 2.4〜2.4835 GHz；IEEE802.11 b/g/n；Ap & Station |
| Pinos GPIO, PIO e PWM | 20 |
| I2C  | 2 |
| SPI | 2 |
| UART | 2 |
| ADC | 4 |
| Alimentação/Download  | Type-C |
| Fonte de alimentação | 5V DC |
| Tamanho | 25.8 x 45.5mm |

## Visão geral de hardware

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_3.png)

## Diagrama de pinagem

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_4.png)

:::note
  Pinos de E/S: O MCU funciona a 3,3V. Se a tensão de entrada conectada ao pino de E/S de uso geral for maior que 3,3V, isso poderá causar danos ao chip. Por favor, preste atenção ao uso e não remova a tampa de blindagem.
:::

## Primeiros passos

A placa de controle principal possui firmware MicroPython integrado, portanto os usuários podem se conectar diretamente ao editor de código Thonny. Se o seu firmware estiver danificado ou você quiser substituí-lo por outro firmware, você pode baixar o [firmware-v1.15.1.uf2](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/firmware-v1.15.1.uf2) para o computador. Pressione e segure o botão BOOT da placa de controle principal RP2040 e então conecte o cabo USB. Neste momento, o computador terá um disco removível extra, então arraste o firmware que você baixou para o disco removível para concluir a atualização do firmware.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_5.png)

### Requisitos de hardware

- Wio RP2040 mini Dev Board x 1
- Computador x 1
- Cabo USB Type-C x 1

Conecte a Wio RP2040 mini Dev Board ao computador através do cabo USB, e o LED vermelho indicador de alimentação na placa deverá acender.

| Versão do firmware            | Registro de atualização  | Download|
|-----------------------|--------------|---------|
|V1.15.1|A primeira versão oficial|[firmware-v1.15.1.uf2](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/firmware-v1.15.1.uf2)|
|V1.15.2|Corrige a estabilidade do Socket e adiciona a mensagem de erro de falha de conexão|[firmware-v1.15.2.uf2](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/v1.15.2.uf2)|
|V1.15.3|Renomeia a função original 'wait_msg()' para a função 'check_msg()', e adiciona a nova função 'wait_msg()'. A principal diferença entre elas é que a função original 'wait_msg' bloqueará a execução do programa quando ainda não tiver 'waite' pelos dados. Já a função 'check_msg()' apenas detectará se os dados foram recebidos. Quando forem, ela executará o callback e, se não forem, o programa continuará a ser executado.|[firmware-v1.15.3.uf2](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/1.15.3.uf2)|

:::note
       A versão de firmware usada no tutorial da wiki é a V1.15.1.
       Se você usar uma nova versão do firmware, consulte o registro de atualização do firmware para modificar o código de exemplo.
:::

## Software

#### 1. Instalar o Thonny

Fácil de começar. O Thonny vem com o Python 3.7 embutido, então apenas um instalador simples é necessário e você estará pronto para aprender a programar. Primeiro, clique em [Thonny.org](https://thonny.org/) para acessar a página de download. No canto superior direito da página, selecione o pacote de instalação do Thonny de acordo com o seu sistema operacional para fazer o download. Dê um clique duplo no pacote de instalação que você baixou para abri-lo e instale-o conforme as etapas.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_6.png)

Agora que você instalou o Thonny, abra o aplicativo. Você deverá ver a interface principal do Thonny:

![1.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_7.png)
A interface principal do Thonny é muito simples, dividida nas seguintes quatro partes:

1.Barra de ferramentas: ferramentas básicas comuns, como novo, abrir, salvar, executar o script atual, parar, etc.

2.Editor de código: a área central do Thonny, onde escreveremos código Python/MicroPython.  

3.Shell: Podemos executar comandos aqui, e os resultados dos comandos serão exibidos imediatamente na Shell. Também podemos ver as saídas do nosso código na janela Shell.

4.Interpretador: Aqui você pode selecionar o tipo de interpretador para compilar o programa. Clique em Python 3.7.9, encontre MicroPython (Raspberry pi Pico) no menu pop-up e clique em OK para alterar o interpretador para o interpretador Pico. Você também pode clicar em "Tools>>>Options>>>Interpreter" para selecionar.

![2.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_8.png)
![3.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_9.png)

#### 2.Conectar a Wio RP2040 mini Dev Board

Use o cabo de dados para conectar a placa de desenvolvimento ao computador e, em seguida, clique no botão "Restart backend" na barra de ferramentas. Se a Wio RP2040 estiver conectada com sucesso ao computador, você verá as informações da versão do MicroPython e o nome do dispositivo na Shell.
![4.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_10.png)

#### 3.Acesa o LED onboard

Como o PIN13 da placa de desenvolvimento está conectado a um LED, podemos ligar o LED elevando o nível do pino PIN13. Em seguida, clique em "File" e selecione "New File" para criar um novo arquivo de programa e, em seguida, escreva o seguinte código:

```python
from machine import Pin, Timer

led = Pin(13, Pin.OUT)
Counter = 0
Fun_Num = 0

def fun(tim):
    global Counter
    Counter = Counter + 1
    print(Counter)
    led.value(Counter%2)

tim = Timer(-1)
tim.init(period=1000, mode=Timer.PERIODIC, callback=fun)
```

​**Pressione o ícone de execução na barra de ferramentas para rodar seu código.**
![5.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_11.png)
Se tudo funcionar bem, você verá o LED acender e apagar uma vez por segundo. E a saída do número crescente será exibida na Shell.
![6.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_12.png)

## FAQ

#### 1.Eu preciso que o código seja executado automaticamente após a inicialização

você precisa renomear o código para "main.py" e salvá-lo na placa de controle principal. Quando a placa de controle principal reiniciar da próxima vez, ela executará automaticamente o programa main.py.

#### 2.Após executar código com funções de rede, são relatados erros ou travamentos se eu executar outros programas

Você pode clicar no botão RESET da placa de controle principal para reiniciar a placa e, em seguida, conectar-se novamente ao editor Thonny para executar outros programas.

## Recursos

- **[BRD]** [Wio_RP2040 mini v1.1](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wio_RP2040_mini_v1.1.brd)

- **[PDF]** [Wio_RP2040 mini v1.1.pdf](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wio_RP2040_mini_v1.1.pdf)

- **[SCH]** [Wio_RP2040 mini v1.1.sch](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wio_RP2040_mini_v1.1.sch)

## Suporte técnico e discussão sobre o produto

 se você tiver qualquer problema técnico.  envie o problema para o nosso [fórum](http://forum.seeedstudio.com/).
Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
