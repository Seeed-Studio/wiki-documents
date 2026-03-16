---
title: Módulo Wio RP2040
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Wio_RP2040_Module_Build-in_Wireless_2.4G/
slug: /Wio_RP2040_Module_Build-in_Wireless_2.4G
sku: 102991556
last_update:
  date: 01/11/2022
  author: gunengyu
createdAt: '2023-01-12'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Wio_RP2040_Module_Build-in_Wireless_2.4G/
---

![enter image description here](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_1.jpg)

O módulo Wio RP2040 é um módulo desenvolvido pela Seeed usando o chip RP2040+WiFi, com suporte a programação em MicroPython. Ele possui um Cortex M0+ dual-core com clock flexível de até 133MHz. E o módulo é um microcontrolador de baixo consumo de energia com funções sem fio. Com desempenho poderoso e tamanho reduzido, é uma opção perfeita para o desenvolvimento de diversos projetos de IoT. O módulo pode ser facilmente soldado em várias placas de circuito impresso (PCB) de base.

O módulo possui interfaces ricas, incluindo 28 pinos GPIO (19 pinos com suporte a PIO e PWM), 2 UART, 4 ADC, 2 SPI, 2 I2C. Alguns pinos podem ser multiplexados, como GP12 e GP13 com funções I2C, SPI e UART. É por isso que 28 pinos GPIO podem fornecer mais pinos de E/S e interfaces. O módulo Wio RP2040 também possui um pino USB, que pode ser projetado para suportar uma interface USB Type-C.
[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Wio-RP2040-Module-p-4932.html)  

## Principais Recursos

- **CPU poderosa**: processador Cortex M0+ dual-core de 133MHz, 264KB de SRAM, 2MB de Flash
- **Conexão sem fio confiável**: usando um poderoso chip WiFi, suportando frequência de 2,4~2,4835 GHz e modo AP & Station
- **Flexibilidade**: compatível com o editor Thonny
- **Tamanho pequeno**: 18,0 x 28,2 x 1,0mm, 32 pinos SMT
- **Múltiplas certificações**: certificações FCC e CE
- **Suporte a linguagens de programação**: MicroPython

## Especificação

| Nome             | Detalhes  |
|-----------------------|--------------|
| Processadores     | Processadores Dual Cortex M0+, até 133 MHz       |
| SRAM | 264KB |
| Flash          | 2MB            |
| Conectividade sem fio         | 2,4〜2,4835 GHz; IEEE802.11 b/g/n; AP & Station            |
| Pinos GPIO, PIO e PWM            | 20            |
| I2C             | 2            |
| SPI                  | 2   |
| UART                  | 2   |
| ADC                  | 4   |
| VIN                  | 5V-3,6V DC   |
| Tamanho                  | 18,0 x 28,2 x 1,0mm   |

## Visão Geral de Hardware

![enter image description here](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_3.png)

:::note
		Pinos de E/S: O MCU funciona em 3,3V. Se a tensão de entrada conectada ao pino de E/S de uso geral for maior que 3,3V, isso poderá causar danos ao chip. Por favor, preste atenção ao usar e não remova a cobertura de blindagem.
:::
## Primeiros Passos
Se você quiser enviar o firmware MicroPython para este módulo, pode baixar o [firmware-v1.15.1.uf2](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/firmware-v1.15.1.uf2) para o computador, em seguida puxar o pino BOOT para nível baixo e conectar o conector MicroUSB fêmea de acordo com o diagrama de fiação a seguir e, por fim, conectar ao computador por meio do cabo de dados. Nesse momento, o computador terá um disco removível extra e, então, mova o firmware que você baixou para esse disco removível para concluir a atualização do firmware.
![enter image description here](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/image1.png)


| Versão do firmware          | Log de atualização  | Download|
|-----------------------|--------------|---------|
|V1.15.1|Primeira versão oficial|[firmware-v1.15.1.uf2](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/firmware-v1.15.1.uf2)|
|V1.15.2|Corrige a estabilidade do Socket e adiciona a mensagem de erro de falha de conexão|[firmware-v1.15.2.uf2](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/v1.15.2.uf2)|
|V1.15.3|Renomeia a função original 'wait_msg()' para função 'check_msg()' e adiciona a nova função 'wait_msg()'. A principal diferença entre elas é que a função 'wait_msg' original irá bloquear a execução do programa quando ainda não tiver "aguardado" os dados. Já a função 'check_msg()' apenas detectará se os dados foram recebidos. Quando forem, ela executará o callback e, se não forem, o programa continuará sendo executado.|[firmware-v1.15.3.uf2](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/1.15.3.uf2)|


:::note
    A versão do firmware usada no tutorial da wiki é a V1.15.1.
    Se você usar uma nova versão do firmware, consulte o log de atualização do firmware para modificar o código de exemplo.
:::

### Software

#### 1. Instalar o Thonny
Fácil para começar. O Thonny vem com o Python 3.7 embutido, portanto, é necessário apenas um instalador simples e você já estará pronto para aprender a programar. Primeiro, clique em [Thonny.org](https://thonny.org/) para acessar a página de download. No canto superior direito da página, selecione o pacote de instalação do Thonny de acordo com o seu sistema operacional para fazer o download. Dê um clique duplo no pacote de instalação que você baixou para abri‑lo e instale-o de acordo com as etapas.
![enter image description here](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_4.png)
Agora que você instalou o Thonny, abra o aplicativo. Você deverá ver a interface principal do Thonny:
![enter image description here](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_5.png)
A interface principal do Thonny é muito simples, dividida nas quatro partes a seguir:

1.Barra de ferramentas: ferramentas básicas comuns, como novo, abrir, salvar, executar o script atual, parar etc. 

2.Editor de código: área central do Thonny, onde escreveremos código Python/MicroPython.  

3.Shell: Podemos executar comandos aqui, e os resultados dos comandos serão exibidos imediatamente no Shell. Também podemos ver as saídas do nosso código na janela do Shell.

4.Interpretador: Aqui você pode selecionar o tipo de interpretador para compilar o programa. Clique em Python 3.7.9, encontre MicroPython (Raspberry pi Pico) no menu pop-up e clique em OK para alternar o interpretador para o interpretador do Pico. Você também pode clicar em "Tools>>>Options>>>Interpreter" para selecionar.

![enter image description here](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_6.png)
![enter image description here](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_7.png)

#### 2.Conectar o Módulo Wio RP2040
Para conectar o módulo Wio RP2040, você precisa encaminhar corretamente os pinos USB e conectá-los ao cabo de dados. Use o cabo de dados para conectar o módulo ao computador e, em seguida, clique no botão "Restart backend" na barra de ferramentas. Se o Wio RP2040 for conectado com sucesso ao computador, você verá as informações da versão do MicroPython e o nome do dispositivo no Shell.
![enter image description here](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_8.png)

#### 3. Controlar pinos de E/S
Você pode colocar o pino GP13 em nível alto com o seguinte código:
```
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
Pressione o ícone de reprodução na barra de ferramentas para executar seu código.
![enter image description here](https://files.seeedstudio.com/wiki/Wio_RP2040_Module-Build-in_Wireless_2.4G/module_9.png)
Você pode conectar um LED ao pino GP13 para detectar se o pino está sendo acionado normalmente.

## Perguntas Frequentes (FAQ)

### 1. Eu preciso que o código seja executado automaticamente após a inicialização. 

Você precisa renomear o código para "main.py" e salvá-lo na placa de controle principal. Quando a placa de controle principal reiniciar da próxima vez, ela executará automaticamente o programa main.py.

### 2. Depois de executar código com funções de rede, são relatados erros ou travamentos se eu executar outros programas.

Você pode clicar no botão RESET da placa de controle principal para reiniciar a placa e, em seguida, reconectar-se ao editor Thonny novamente para executar outros programas.

### 3. Quero ver mais programas/projetos de exemplo.

Você pode consultar a wiki da Wio RP2040 mini Dev Board, lá há mais projetos de exemplo, e esses projetos são comuns.


## Suporte Técnico e Discussão de Produto
 se você tiver qualquer problema técnico, envie o problema em nosso [fórum](http://forum.seeedstudio.com/). 
Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>