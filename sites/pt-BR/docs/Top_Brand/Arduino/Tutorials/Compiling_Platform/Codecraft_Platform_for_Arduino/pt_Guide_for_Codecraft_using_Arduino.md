---
description: Guia para Codecraft usando Arduino
title: Guia para Codecraft usando Arduino
keywords:
  - Arduino
  - Tutoriais
  - Codecraft_Platform_for_Arduino
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Guide_for_Codecraft_using_Arduino
last_update:
  date: 2/15/2023
  author: jianjing Huang
createdAt: '2023-02-15'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Guide_for_Codecraft_using_Arduino/
---

# Guia para Codecraft usando Arduino

Codecraft é um software de programação baseado em Scratch3.0 e suporta linguagens de programação gráficas e em texto. É uma ferramenta de software versátil para educação STEM. Com o Codecraft, as crianças conseguem criar histórias, jogos e animações envolventes e usar vários kits eletrônicos fornecidos pela CH Maker Ed e Seeedstudio para criar aplicações inteligentes interativas. Além disso, quando você estiver pronto, sempre poderá converter os blocos de código para Arduino, Python ou JavaScript para aprender mais sobre as linguagens mais populares.

Existem 2 modos no Codecraft: Stage Mode e Device Mode. No Stage Mode, os usuários podem controlar um objeto chamado “sprite” usando blocos de código. Esse modo também pode ser usado para ajudar os alunos a aprender sobre formas, aritmética e outras áreas da matemática.

No Device mode, os usuários podem conectar um Grove Zero ou um Arduino para construir seus projetos legais simplesmente arrastando e soltando blocos de código no IDE.
LE

## Codecraft

### Blocos no Device mode

Aqui estão os principais tipos de blocos usados no Codecraft.

**Stack Blocks**

![stack blocks](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/p1.png)

Stack Blocks são os blocos que executam os comandos principais. Eles têm o formato com um encaixe na parte superior e uma saliência na parte inferior — assim, blocos podem ser colocados acima e abaixo deles.

**Boolean Blocks**

![boolean blocks](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/p2.png)

Boolean blocks são as condições - elas são `true` ou `false`. Por exemplo, perguntando a um computador: “Is 2+2=4?”, e ele responderia “Yes” ou “No”. Boolean blocks têm formato hexagonal.

**Reporter Blocks**

![reporter blocks](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/p3.png)

Reporter blocks são os valores. Reporter blocks podem armazenar números e strings. É como perguntar a um amigo, por exemplo, “What is 2+2?”, e ele responderia “4”. Não são apenas equações, entretanto; eles podem informar uma variável, por exemplo, “What is your age?”. A pessoa pode responder: “15”. Ele tem formato com bordas arredondadas.

**C Blocks**

![c blocks](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/p4.png)

C blocks são blocos que têm o formato de “C”. Também conhecidos como “Wrap blocks”, esses blocos repetem (loop) os blocos dentro dos Cs ou verificam se uma condição é verdadeira. Existem cinco C blocks, e eles podem ser encontrados na categoria Control. C blocks podem ter uma saliência na parte inferior ou serem fechados.

**Output Boolean Blocks**

![output boolean blocks](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/p5.png)

Output Boolean Blocks são blocos hexagonais que verificam se uma condição é `true` ou `false` e executam uma operação quando a condição é atendida. Esses blocos podem ser colocados dentro de Boolean Blocks e C blocks.

### Grove compatíveis

Consulte a [CodeCraft Grove Compatible List](https://wiki.seeedstudio.com/pt-br/Codecraft_Grove_Compatible_List/) para confirmar se o seu Grove é suportado.

### Tutorial básico

**Passo 1. Adicionar suporte ao Arduino**

Codecraft pode suportar tanto Grove Zero quanto Arduino Uno/Mega, então, antes de usar Codecraft com Arduino, você precisa adicionar suporte ao Arduino.  

Acesse o [Codecraft](https://ide.chmakered.com/), e clique em "Add device" na barra lateral à esquerda, depois escolha "Arduino Uno/Mega".

![add device](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/add_device.png)

**Passo 2. Instalar o Codecraft Assistant**

Codecraft Assistant pode ajudar você a enviar o código no Codecraft para o Arduino, consulte [CH MAKER Ed-Documents](https://ide.tinkergen.com/download/en/#:~:text=Mac%20v2.6.4.25-,Codecraft%20Assistant,-Codecraft%20Assistant%20is) para baixá-lo e instalá-lo.

**Passo 3. Procedimento principal do Arduino**

Em geral, o procedimento principal do Arduino inclui dois subprocedimentos, chamados de `setup` e `loop`. O código em `setup` será executado uma vez quando o Arduino for ligado, e será executado repetidamente em `loop`.

O bloco Main Procedure está incluído na aba Start à esquerda; você pode usar o mouse para arrastá-lo até a área de trabalho.

![main procedure](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/main_procedure.png)

**Passo 4. Piscar um LED**

Normalmente aprendemos Arduino a partir de piscar um LED, e há um LED embutido nas placas Arduino, que está conectado ao pino D13 do Arduino.

O bloco LED pode ser encontrado na aba Grove Digital, arraste-o para o procedimento `loop`, e eles serão combinados automaticamente.

Altere o pino do LED de D2 para D13 para que ele possa controlar o LED no pino D13, depois arraste outro bloco LED para baixo dele e mude de ON para OFF. O procedimento principal pode ficar assim:

![blink led](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/blink_led.png)

Para conseguir ver o LED piscando, devemos adicionar um intervalo entre o ligar e desligar do LED. O bloco Delay pode ser encontrado na aba Control; ele é usado para criar uma espera. Arraste dois blocos Delay entre os dois blocos LED e ajuste o intervalo para 1000ms (1000ms = 1s).

![blink demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/blink_demo.png)

Agora o programa está concluído.

**Passo 5. Fazer upload para o Arduino**

Podemos enviar o programa concluído para o Arduino para torná-lo efetivo; portanto, conecte o seu Arduino ao PC. Você pode encontrar o número da porta serial do Arduino no Gerenciador de Dispositivos; lembre-se dele para uso futuro.

Agora clique em upload no canto inferior direito do Codecraft, escolha o número da porta serial do Arduino. Confirme e aguarde um pouco; você verá um LED piscando no Arduino.

![upload](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/upload.png)

## Grove Start Kit for Arduino

As 10 lições a seguir ajudarão você a se familiarizar melhor com o uso do Codecrft. Os módulos Grove destas lições podem ser todos encontrados no Grove - Start Kit for Arduino.

### Lição 1. Usando Grove - LCD RGB Backlight

![Grove - LCD RGB Backlight](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/grove_lcd.jpg)

O Grove - LCD RGB Backlight suporta exibição de texto usando caracteres definidos pelo usuário. Ele permite definir a cor da luz de fundo usando a interface Grove simples e concisa. Ele usa I2C como método de comunicação com o seu Arduino. Assim, o número de pinos necessários para troca de dados e controle da luz de fundo diminui de ~10 para 2, deixando mais capacidade de E/S para outras tarefas desafiadoras.

![lcd color block](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/lcd_color_block.png)

O bloco "LCD RGB setColor" pode ser usado para definir a cor da luz de fundo do LCD a partir dos valores de R, G e B. Ele pode ser encontrado na aba Grove I2C.

![lcd print block](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/lcd_print_block.png)

O bloco "LCD RGB print" pode ser usado para imprimir uma string no LCD em uma posição especificada; ele pode ser encontrado na aba Grove I2C.

**Objetivo**

Mudar a cor da luz de fundo do LCD para uma cor de que você goste e imprimir "hello, world!" e o tempo de execução do sistema nele.

**Hardware**

**Passo 1.** Usando um cabo Grove, conecte o Grove - LCD Backlight à porta I2C do Seeeduino. Se você estiver usando Arduino, aproveite um Base Shield.

**Passo 2.** Conecte o Seeedino/Arduino ao seu PC por meio de um cabo USB.

**Software**

**Passo 1.** Abra o [Codecraft](https://ide.chmakered.com/), adicione suporte ao Arduino e arraste um procedimento principal para a área de trabalho.

**Passo 2.** Arraste um bloco "LCD RGB setColor" e um bloco "LCD RGB print" para o subprocedimento setup, deixando que eles se combinem automaticamente.

![lcd_setup](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/lcd_setup.png)

Altere os valores de R, G e B no bloco setColor e, em seguida, faça o bloco print imprimir "hello, world!" na primeira coluna da primeira linha.

**Passo 3.** Arraste outro bloco "LCD RGB print" para o subprocedimento loop, altere a linha e a coluna dele para 2 e 1. Depois arraste um bloco "System running time" para ele, que pode ser encontrado na aba Input.

O bloco "System running time" retorna o tempo, em milissegundos, desde que o Seeeduino/Arduino foi ligado até agora; se você quiser obter esse tempo em segundos, pode dividi-lo por 1000. O bloco de divisão pode ser encontrado na aba Operators.

![lcd_demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/lcd_demo.png)

:::tip
Quando o código terminar de ser enviado, você poderá ver a cor da luz de fundo do LCD mudar para o valor que você definiu, e "hello, world!" e o tempo de execução do sistema serão exibidos nele.
:::

### Lição 2. Usando Grove - Relay

![Grove - Relay](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/grove_relay.jpg)

O Relay é uma ferramenta útil para ampliar a capacidade de controle do seu Arduino! Envie o sinal de controle pela interface Grove e o relay abrirá ou fechará o circuito externo que estiver conectado aos terminais de parafuso. A tensão do circuito externo pode chegar a 220 V! Então pegue este relay e comece alguns projetos realmente robustos!

![relay block](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/relay_block.png)

O bloco Relay pode ser usado para controlar o Relay para ligar (ON) ou desligar (OFF); ele pode ser encontrado na aba Grove Digital.

**Objetivo**

Usar um Grove - Button para controlar um Grove - Relay; quando o botão for pressionado, ligar o relay. Caso contrário, desligar o relay.

**Hardware**

![relay demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/relay_demo.jpg)

**Passo 1.** Usando dois cabos Grove, conecte um Grove - Button à porta D3, conecte um Grove - Relay à porta D8 em um Base Shield.

**Passo 2.** Conecte o Base Shield ao seu Seeeduino/Arduino.

**Passo 3.** Conecte o Seeeduino/Arduino ao seu PC por meio de um cabo USB.

**Software**

**Passo 1.** Abra o [Codecraft](https://ide.chmakered.com/), adicione suporte ao Arduino e arraste um procedimento principal para a área de trabalho.

**Passo 2.** Crie uma variável para armazenar o estado do botão. Vá para a aba Variables, clique no botão "Make a Variable" e dê um nome à variável que vamos criar, como buttonState.

![create variable](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/create_variable.png)

Clique em OK, agora o bloco buttonState apareceu na aba Variables.

**Passo 3.** Arraste o bloco "set buttonState to 0" para o subprocedimento loop e arraste o bloco Button para ele.

![button variable](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/relay_buttonState.png)

**Passo 4.** Precisamos ligar o relé quando o botão for pressionado, caso contrário desligá-lo. Então precisamos de um bloco "if...then...else" na aba Control e de um bloco Equal na aba Operator, arraste-os para o subprocedimento loop e deixe-os combinar com a variável buttonState.

![relay if](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/relay_if.png)

**Passo 5.** Finalmente arraste o bloco Relay para eles, faça o upload para o Arduino, tudo pronto.

![relay demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/relay_demo.png)

:::tip
Quando o código terminar de ser carregado, se você apertar o botão, o relé será ligado. Caso contrário, o relé será desligado.
:::

### Lição 3. Usando Grove - Sound Sensor

![Grove - Sound Sensor](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/grove_sound.jpg)

O módulo Sound sensor é um microfone simples. Baseado em um amplificador LM358 e em um microfone de eletreto, ele pode ser usado para detectar o nível de som no ambiente.

![sound block](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/sound_block.png)

O bloco Sound pode ser usado para detectar a intensidade do som no ambiente, ele pode ser encontrado na aba Grove Analog.

**Objetivo**

Monitorar o nível de som no ambiente. Se estiver muito alto, piscar um LED como alarme.

**Hardware**

![sound demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/sound_demo.jpg)

**Passo 1.** Usando dois cabos Grove conecte um Grove - Sound Sensor à porta A0, conecte um Grove - Red LED à porta D7 em um Base Shield.

**Passo 2.** Conecte o Base Shield ao seu Seeeduino/Arduino.

**Passo 3.** Conecte o Seeeduino/Arduino ao seu PC via um cabo USB.

**Software**

**Passo 1.** Abra o [Codecraft](https://ide.chmakered.com/), adicione o suporte a Arduino e arraste um procedimento principal para a área de trabalho.

**Passo 2.** Consulte a seção "Grove - Relay" para criar uma variável para armazenar a intensidade do som, depois use o bloco "if...then" na aba Control para determinar se a intensidade do som excede o limite.

![sound loop](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/sound_loop.png)

**Passo 3.** Se a intensidade do som exceder o limite, faça o LED piscar.

![sound demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/sound_demo.png)

:::tip
Quando o código terminar de ser carregado, se o som no ambiente estiver muito alto, o LED vai piscar.
:::

### Lição 4. Usando Grove - Touch Sensor

![Grove - Touch Sensor](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/grove_touch.jpg)

O Grove - Touch Sensor permite que você substitua a pressão em um botão por contato em uma superfície de detecção. Ele pode detectar a variação de capacitância quando um dedo está próximo. Portanto, seja o seu dedo tocando o pad diretamente ou apenas ficando perto dele, o Grove - Touch Sensor irá gerar HIGH.

![touch block](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/touch_block.png)

O bloco Touch pode ser usado para ler o estado do toque, ele pode ser encontrado na aba Grove Digital.

**Objetivo**

Usar um Grove - Touch Sensor para controlar um Grove - Red LED. Quando o sensor for tocado, ligar o LED, caso contrário desligar o LED.

**Hardware**

**Passo 1.** Usando dois cabos Grove conecte o Grove - Touch Sensor à porta D3, conecte o Grove - Red LED à porta D7 em um Base Shield.

**Passo 2.** Conecte o Base Shield ao seu Seeeduino/Arduino.

**Passo 3.** Conecte o Seeeduino/Arduino ao seu PC via um cabo USB.

**Software**

**Passo 1.** Abra o [Codecraft](https://ide.chmakered.com/), adicione o suporte a Arduino e arraste um procedimento principal para a área de trabalho.

**Passo 2.** O programa é muito parecido com o programa da seção "Grove - Relay" e podemos construí-lo sem variáveis.

![touch demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/touch_demo.png)

:::tip
Quando o código terminar de ser carregado, se o sensor for tocado, o LED será ligado. Caso contrário o LED será desligado.
:::

### Lição 5. Usando Grove - Rotary Angle Sensor

![Grove - Rotary Angle Sensor](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/grove_rotary.jpg)

O potenciômetro Grove produz uma saída analógica entre 0 e VCC (3,3 ou 5 VDC). A faixa angular é de 300 graus, com uma variação linear de valor. O valor de resistência é de 10k ohms, perfeito para uso com Arduino. Ele também pode ser conhecido como “rotary angle sensor”.

![rotary block](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/rotary_block.png)

O bloco Rotation pode ser usado para ler o estado da rotação, ele pode ser encontrado na aba Grove Analog.

**Objetivo**

Exibir a rotação do Grove - Rotary Angle Sensor na Serial.

**Hardware**

![rotary demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/rotary_demo.jpg)

**Passo 1.** Usando um cabo Grove conecte o Grove - Rotary Angle Sensor à porta A0 em um Base Shield.

**Passo 2.** Conecte o Base Shield ao seu Seeeduino/Arduino.

**Passo 3.** Conecte o Seeeduino/Arduino ao seu PC via um cabo USB.

**Software**

**Passo 1.** Abra o [Codecraft](https://ide.chmakered.com/), adicione o suporte a Arduino e arraste um procedimento principal para a área de trabalho.

**Passo 2.** Antes de usar a porta Serial, devemos configurar sua taxa de transmissão, arraste o bloco "Serial baud rate" da aba Serial Port para o subprocedimento setup e selecione 9600 bps.

![rotary setup](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/rotary_setup.png)

**Passo 3.** O bloco "Serial println" pode ser usado para exibir uma nova linha na porta serial; podemos combiná-lo com o bloco Rotation.

![rotary demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/rotary_demo.png)

**Passo 4.** Depois que o programa for carregado, clique no botão Connect à esquerda do Codecraft e escolha a porta do seu Arduino, depois clique em Connect.

![connect serial](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/connect_serial.png)

![serial monitor](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/serial_monitor.png)

:::tip
Gire o Rotary Angle Sensor, você poderá ver as mudanças de dados no monitor.
:::

### Lição 6. Usando Grove - LED

![Grove - LED](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/grove_led.jpg)

O Grove - LED é projetado para iniciantes em Arduino/Seeeduino monitorarem controles a partir de portas digitais. Ele pode ser montado na superfície da sua caixa ou mesa facilmente e usado como lâmpada piloto para energia ou sinal.

![led block digital](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/led_block_digital.png)

![led block analog](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/led_block_analog.png)

O bloco LED pode ser usado para atuar como Digital OUTPUT ou Analog OUTPUT, quando atua como Analog OUTPUT, você pode controlar seu brilho.

**Objetivo**

Fazer um LED respirando.

**Hardware**

![led demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/led_demo.jpg)

**Passo 1.** Usando um cabo Grove conecte o Grove - Red LED à porta D3 em um Base Shield.

**Passo 2.** Conecte o Base Shield ao seu Seeeduino/Arduiono.

**Passo 3.** Conecte o Seeeduino/Arduino ao seu PC via um cabo USB.

**Software**

**Passo 1.** Abra o [Codecraft](https://ide.chmakered.com/), adicione o suporte a Arduino e arraste um procedimento principal para a área de trabalho.

**Passo 2.** É muito simples fazer um LED “respirar” usando o bloco LED na aba Grove Analog.

Além disso, também precisamos do bloco "count with...from...to...step" na aba Control para calcular o brilho do LED. Arraste-o e combine-o com o subprocedimento loop.

![led count](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/led_count.png)

**Passo 3.** Certifique-se de deixar a variável i ir de 0 (escuro) a 255 (mais brilhante), então adicione o bloco "LED" e o bloco "Delay ms" a ele, e defina o brilho do LED para a variável i.

![led loop](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/led_loop.png)

**Passo 4.** O programa acima faz o LED ir do mais escuro ao mais brilhante, agora podemos adicionar um programa para fazê-lo ir do mais brilhante ao mais escuro.

![led demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/led_demo.png)

:::tip
Quando o código terminar de ser carregado, você verá o LED respirando.
:::

### Lição 8. Usando Grove - Light Sensor

![Grove - Light Sensor](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/grove_light.jpg)

O Light sensor, também conhecido como light dependent resistor (LDR). Normalmente, a resistência do Light sensor diminui quando a intensidade da luz ambiente aumenta.

![light block](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/light_block.png)

O bloco Light pode ser usado para detectar a intensidade de luz no ambiente via Analog INPUT; ele pode ser encontrado na aba "Grove Analog".

**Objetivo**

Construir um programa como uma casa inteligente: quando a intensidade da luz cair abaixo do limite predefinido, ligar o LED.

**Hardware**

![light demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/light_demo.jpg)

**Passo 1.** Usando dois cabos Grove conecte um Grove - Red LED à porta D7, conecte um Grove - Light Sensor à porta A0 em um Base Shield.

**Passo 2.** Conecte o Base Shield ao seu Seeeduino/Arduino.

**Passo 3.** Conecte o Seeeduino/Arduino ao seu PC via um cabo USB.

**Software**

**Passo 1.** Abra o [Codecraft](https://ide.chmakered.com/), adicione o suporte a Arduino e arraste um procedimento principal para a área de trabalho.

**Passo 2.** Já usamos o bloco "if" na seção Grove - Touch Sensor, então não é difícil construir este programa.

![lighe demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/light_demo.png)

:::tip
Quando o envio do código terminar, bloqueando a luz no Light Sensor, o LED será ligado.
:::

### Lição 9. Usando Grove - Button

![Grove - Button](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/grove_button.jpg)

Esta nova versão do módulo Grove de botão contém um botão independente, que é configurado com resistor de pull-down – pronto para uso com nossos microcontroladores como entrada digital. O botão envia o sinal pelo fio SIG, NC não é usado neste módulo Grove.

![button block](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/button_block.png)

O bloco Button pode ser usado para detectar o estado de um botão de pressão momentâneo via entrada Digital INPUT, ele pode ser encontrado na guia Grove Digital.

**Objetivo**

Usar um Grove - Button para controlar um Grove - Red LED. Quando o botão for pressionado, ligue o LED, caso contrário, desligue o LED.

**Hardware**

![button demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/button_demo.jpg)

**Passo 1.** Usando dois cabos Grove conecte o Grove - Button à porta D3, conecte o Grove - Red LED à porta D7 em um Base Shield.

**Passo 2.** Conecte o Base Shield ao seu Seeeduino/Arduino.

**Passo 3.** Conecte o Seeeduino/Arduino ao seu PC por meio de um cabo USB.

**Software**

**Passo 1.** Abra o [Codecraft](https://ide.chmakered.com/), adicione o suporte a Arduino e arraste um procedimento principal para a área de trabalho.

**Passo 2.** Já usamos o Button na seção Grove - Relay, agora vamos mudar o Relay para um LED e usar o Button para controlá-lo.

![button demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/button_demo.png)

:::tip
Quando o envio do código terminar, se o botão for pressionado, ligue o LED. Caso contrário, desligue o LED.
:::

### Lição 10. Usando Grove - Servo

![Grove - Servo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/grove_servo.png)

Este é um atuador cuja posição pode ser controlada com precisão.

![servo block](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/servo_block.png)

O bloco Servo pode ser usado para controlar o servo atribuindo a quantidade de rotação e o atraso entre cada rotação, ele pode ser encontrado na guia Grove Analog.

**Objetivo**

Usar um Grove - Rotary Angle Sensor para controlar um Grove - Servo.

**Hardware**

![servo demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/servo_demo.jpg)

**Passo 1.** Conecte o Grove - Servo a um Base Shield e, usando um cabo Grove, conecte o Grove - Rotary Angle Sensor à porta A0 no Base Shield.

**Passo 2.** Conecte o Base Shield ao seu Seeeduino/Arduino.

**Passo 3.** Conecte o Seeeduino/Arduino ao seu PC por meio de um cabo USB.

**Software**

**Passo 1.** Abra o [Codecraft](https://ide.chmakered.com/), adicione o suporte a Arduino e arraste um procedimento principal para a área de trabalho.

**Passo 2.** Podemos usar o Rotary Angle Sensor para controlar o Servo, mas como o valor do bloco "Rotation" é de 0 a 1023, precisamos dividi-lo por um número, deixando-o em 0 a 180.

![servo demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/servo_demo.png)

:::tip
Quando o envio do código terminar, gire o Rotary Angle Sensor, o ângulo do motor Servo irá mudar.
:::

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
