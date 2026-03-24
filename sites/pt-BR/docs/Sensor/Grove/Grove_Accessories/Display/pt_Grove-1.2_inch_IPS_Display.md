---
description: Primeiros passos com o Grove 1.2-inch IPS Display
title: Grove 1.2-inch IPS Display
keywords:
  - ips
  - display
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /grove_1.2inch_ips_display
sku: 104020268
last_update:
  date: 06/13/2023
  author: Stephen Lo
createdAt: '2023-06-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/grove_1.2inch_ips_display/
---

# Grove 1.2-inch IPS Display

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-1.2inch-ips-display/2-Grove-1.2-Inch-IPS-Display-font.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-1-2-Inch-IPS-Display-p-5699.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

<br />

O Grove-1.2 Inch IPS Display é um display de cristal líquido serial de 1,2 polegadas meticulosamente projetado e oferecido pela Seeed Studio. Com uma resolução superior de 240x240, este display fornece uma representação de imagem clara e colorida. A lógica de design por trás deste display é apresentar uma solução de exibição simples e de alta qualidade para atender às necessidades de vários projetos DIY ou de Internet das Coisas (IoT).

Ele adota uma interface serial SPI e requer apenas SCK e SDA para conexão ao controlador principal. Isso simplifica as operações do usuário e economiza tempo de fiação. A tela em cores RGB aprimora ainda mais cada imagem com cores ricas e vibrantes.

Ao mesmo tempo, o Grove-1.2 Inch IPS Display emprega tecnologia IPS de ângulo de visão completo. Independentemente do ângulo pelo qual os usuários visualizam, eles podem obter praticamente a mesma experiência visual. Isso significa que o seu projeto apresentará o melhor efeito de exibição de qualquer ângulo.

Além disso, escolhemos o ST7789 como CI driver para o display e preparamos uma biblioteca de driver de código aberto e código de exemplo para sua conveniência. Isso permitirá que você comece rapidamente o desenvolvimento do seu projeto.

## Recursos

- **Interface simplificada:** O display adota uma interface serial SPI e requer apenas as conexões SCK e SDA ao controlador principal. Isso simplifica bastante a operação do usuário e economiza tempo de fiação.
- **Alta resolução:** Com alta resolução de 240x240 pixels, o display pode fornecer imagens claras e vibrantes, melhorando a experiência visual do seu projeto.
- **Tecnologia IPS de ângulo de visão completo:** O Grove-1.2 Inch IPS Display usa a tecnologia In-Plane-Switching (IPS), que oferece cores consistentes e precisas de todos os ângulos de visão.
- **Cores ricas:** O display pode mostrar até 65 mil cores. A exibição em cores RGB adiciona profundidade e variação às imagens, tornando-as mais vibrantes e realistas.
- **Tamanho compacto:** O tamanho da tela é 24,76x26,8 mm, e o tamanho da placa de circuito é 40x40 mm. Seu tamanho compacto o torna ideal para vários projetos DIY ou de IoT.
- **Ampla faixa de tensão de entrada:** A placa de circuito pode aceitar uma tensão de entrada de 3,3 V ou 5 V, oferecendo compatibilidade com uma ampla gama de fontes de alimentação.
- **CI driver confiável:** O display usa o ST7789 como seu CI driver. Sua biblioteca de driver de código aberto e código de exemplo facilita para os usuários começarem.
- **Ampla faixa de temperatura de operação:** A faixa de temperatura de trabalho de -20 a 70 graus Celsius torna este display adequado para vários ambientes.

## Ideias de aplicação

- **Estação meteorológica DIY**: O Grove-1.2 Inch IPS Display pode ser usado em uma estação meteorológica caseira para fornecer informações climáticas em tempo real. Ele pode exibir ícones e dados ricos e vibrantes, proporcionando uma experiência de usuário envolvente.
- **Display pessoal de arte digital**: O display pode ser incorporado em um dispositivo de arte digital, no qual poderá mostrar suas ideias criativas com sua tela colorida e de alta resolução. Isso o torna um excelente componente para projetos de arte ou design.
- **Console de jogos DIY**: Dada sua alta resolução e tela de ângulo de visão completo, o Grove-1.2 Inch IPS Display é uma excelente escolha para consoles de jogos caseiros. Sua tela com cores vibrantes aprimorará a experiência de jogo.
- **Sistemas de casa inteligente**: O display pode ser integrado a sistemas de casa inteligente, fornecendo feedback visual claro e vibrante de várias condições da casa ou do status do sistema.
- **Projetos educacionais**: No setor educacional, o display pode ser usado em projetos de sala de aula para ensinar os alunos sobre gráficos, programação e eletrônica. Sua interface simples e configuração fácil o tornam ideal para ambientes de aprendizagem.
- **Painéis de controle industriais**: Em aplicações industriais, o display pode ser usado em painéis de controle para exibir informações ou status importantes, ajudando operadores a monitorar e controlar processos industriais. Seu amplo ângulo de visão garante visibilidade clara de várias perspectivas.

## Visão geral de hardware

### Mapa de pinos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-1.2inch-ips-display/hw.png" alt="pir" width={500} height="auto" /></p>

## Primeiros passos

:::note
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

### Brincar com Arduino

#### Hardware

**Materiais necessários**

| Seeeduino V4.2 | Base Shield| Grove-1.2 Inch IPS Display |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={250} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={250} height="auto" /></p>|<p><img src="https://raw.githubusercontent.com/Longan-Labs/Grove-1.2-Inch-IPS-Display/main/images/small.jpg" alt="pir" width={250} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Adquira agora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Adquira agora</a>|<a href="/pt-br/grove_1.2inch_ips_display" target="_blank">Adquira agora</a>|

:::note
**1** Conecte o cabo USB suavemente, caso contrário você poderá danificar a porta. Use o cabo USB com 4 fios internos; o cabo de 2 fios não pode transferir dados. Se você não tiver certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar.

**2** Cada módulo Grove vem com um cabo Grove quando você o compra. Caso você perca o cabo Grove, pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Passo 1.** Conecte o Grove-1.2 Inch IPS Display à porta D7(D7/D8) do Grove-Base Shield.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino.

- **Passo 3.** Conecte o Seeeduino ao PC por meio de um cabo USB.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-1.2inch-ips-display/connection.jpg" alt="pir" width={600} height="auto" /></p>

:::note
Se não tivermos o Grove Base Shield, também podemos conectar diretamente o Grove-1.2 Inch IPS Display ao Seeeduino como abaixo.
:::

| Seeeduino     | Grove-1.2 Inch IPS Display |
|---------------|-------------------------|
| 5V            | Vermelho (VCC)                    |
| GND           | Preto (GND)                  |
| SDA           | Branco  (DTA)                 |
| SCK           | Amarelo  (SCK)                |

#### Software

- **Passo 1.** Baixe a biblioteca Arduino do Github.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Arduino_ST7789_Fast/tree/master" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

- **Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

- **Passo 3.** Depois de baixar e instalar a biblioteca corretamente, você pode encontrar um programa de exemplo chamado **ST7789_HelloWorld.ino** na pasta de exemplos. Este programa é projetado para o Grove-1.2 Inch IPS Display.

```cpp
#include <Adafruit_GFX.h>
#include <Arduino_ST7789_Fast.h>

#define SCK   7
#define SDA   8

Arduino_ST7789 lcd = Arduino_ST7789(SCK, SDA);

void setup(void)
{
    lcd.init();
    lcd.fillScreen(BLACK);

    lcd.setCursor(0, 0);
    lcd.setTextColor(RED,BLACK);
    lcd.setTextSize(3);
    lcd.println("HELLO WORLD");
}

void loop()
{

}
```

- **Passo 4.** Você verá Hello World impresso no display.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-1.2inch-ips-display/result.jpg" alt="pir" width={400} height="auto" /></p>

## IO rápido com Arduino UNO

Operar os pinos de I/O do Arduino diretamente por meio de registradores pode fornecer maior eficiência e velocidade, em vez de usar a função padrão `digitalWrite()`. No entanto, esse método geralmente requer uma compreensão mais profunda do hardware do Arduino e do funcionamento dos microcontroladores.

Se você deseja utilizar I/O mais rápido, precisará fazer algumas modificações no arquivo `Arduino_ST7789_Fast.h`. Primeiro, você deve alterar a linha 20 para: `#define FAST_IO 1`. Além disso, entre as linhas 23 e 26, escreva o código para definir o IO em nível alto e baixo. Abaixo está um exemplo usando D7/D8:

```cpp
#define FAST_IO 1

#if FAST_IO
#define LCD_SCK_SET PORTD |= (1 << PORTD7); // SET SCK HIGH
#define LCD_SDA_SET PORTB |= (1 << PORTB0); // SET SDA HIGH
#define LCD_SCK_CLR PORTD &= ~(1 << PORTD7); // SET SCK LOW
#define LCD_SDA_CLR PORTB &= ~(1 << PORTB0); // SET SDA LOW
#endif
```

A seguir está um breve tutorial sobre como usar registradores para controlar os pinos de E/S no Arduino UNO:

O Arduino UNO possui três portas, rotuladas como B, C e D. Cada porta tem um registrador de dados correspondente, que são PORTB, PORTC e PORTD. Esses registradores podem ser usados para controlar diretamente os pinos de E/S.

Por exemplo, se você quiser definir o pino digital 13 (correspondente ao 5º bit de PORTB, ou PORTB5) para ALTO, você pode escrever o seguinte:

```cpp
PORTB |= (1 << 5);
```

Essa instrução define o 5º bit de PORTB como 1 sem alterar os outros bits. Isso é feito por meio do operador OR bit a bit (|=) e do operador de deslocamento à esquerda (&lt;&lt;).

Da mesma forma, se você quiser definir o pino digital 13 para BAIXO, você pode escrever o seguinte:

```cpp
PORTB &= ~(1 << 5);
```

Essa instrução define o 5º bit de PORTB como 0 sem alterar os outros bits. Isso é feito por meio do operador AND bit a bit (&=) e do operador NOT bit a bit (~).

A seguir são mostradas todas as portas do Arduino UNO e seus registradores correspondentes:

**Portas Digitais**

- As portas digitais 0 - 7 correspondem ao registrador PORTD, bits PORTD0 a PORTD7
- As portas digitais 8 - 13 correspondem ao registrador PORTB, bits PORTB0 a PORTB5

** Portas de Entrada Analógica **

- As portas de entrada analógica A0 - A5 correspondem ao registrador PORTC, bits PORTC0 a PORTC5

As portas de entrada analógica também podem funcionar como E/S digitais, correspondendo aos números de pinos digitais de 14 a 19. Por exemplo, A0 também pode servir como pino digital 14.

Cada registrador de E/S também possui dois registradores relacionados para controlar o modo (entrada ou saída) dos pinos e os resistores de pull-up dos pinos de entrada. Por exemplo, os registradores de controle para PORTD são DDRD e PIND. O registrador DDRx é usado para definir o modo do pino, e o registrador PINx é usado para ler o estado do pino.

Antes de escrever no registrador `PORTx`, você deve primeiro garantir que o registrador `DDRx` correspondente esteja configurado corretamente. Por exemplo, se você quiser definir `PD0` como saída e saída ALTA, você deve configurar primeiro o registrador `DDRD`:

```cpp
DDRD |= (1 << 0);  // Set PD0 as output
PORTD |= (1 << 0);  // Output HIGH to PD0
```

Essas informações podem ser encontradas no datasheet do ATmega328P, que é o microcontrolador do Arduino UNO. Se você estiver usando outro modelo de Arduino, talvez seja necessário consultar o datasheet do respectivo microcontrolador, pois diferentes microcontroladores podem ter diferentes disposições de portas e registradores.

Ao manipular registradores, é essencial ter cautela, pois qualquer operação incorreta pode afetar o status de outros pinos ou até mesmo a função do microcontrolador.

Usuários que desejam usar o modo de operação por registradores deste produto precisam compreender e aplicar de forma independente os conhecimentos e habilidades acima.

## FAQ

### 1. A tela não funciona quando eu a reprogramo enquanto está conectada

R: Se o seu programa estiver se comunicando constantemente com a tela, a reprogramação pode interromper esse processo, fazendo com que a tela apresente mau funcionamento. Você pode tentar desligar a alimentação para restaurar o funcionamento normal da tela.

### 3. Que tipo de fonte de alimentação devo usar para o display?

R: A placa de circuito pode aceitar uma tensão de entrada de 3,3 V ou 5 V, portanto, você pode usar uma fonte de alimentação dentro dessa faixa.

### 4. Posso usar o display em condições de temperatura extrema?

R: O display possui uma faixa de temperatura de trabalho de -20 a 70 graus Celsius. No entanto, para desempenho ideal e maior vida útil, é recomendado operar o display dentro das condições normais de temperatura ambiente.

### 5. As cores no meu display não parecem corretas. O que pode ser o problema?

R: Verifique se o display está corretamente inicializado no seu código e se você está usando os valores de cor corretos. Se você ainda estiver enfrentando problemas, pode haver um defeito no display ou nos fios de conexão. Verifique as conexões ou tente com outro display, se disponível.

## Visualizador Online do Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-1.2inch-ips-display/Grove-RGB-OLED-Display-1.22(ST7789).rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Arquivo Eagle para Grove-1.2 Inch IPS Display](https://files.seeedstudio.com/wiki/Grove-1.2inch-ips-display/Grove-RGB-OLED-Display-1.22(ST7789).rar)
- **[PDF]** [Especificação ST7789](https://files.seeedstudio.com/wiki/Grove-1.2inch-ips-display/ST7789V_SPEC_V1.2.pdf)

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
