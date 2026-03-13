---
description: Alguns exemplos usando Grove Vision AI V2 e a série XIAO ESP32.
title: Exemplos para Grove Vision AI V2 e XIAO ESP32
keywords:
  - xiao
  - vision AI
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /grove_vision_ai_v2_demo
sku: 101021112,E23011220,104990982
last_update:
  date: 04/16/2024
  author: Citric
createdAt: '2023-08-20'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/grove_vision_ai_v2_demo/
---

# Exemplos para Grove Vision AI V2 e XIAO ESP32

Desbloqueie o potencial da computação de borda e explore o fascinante mundo da visão de IA com a poderosa combinação do Grove Vision AI V2 e da série de MCUs XIAO ESP32. Neste tutorial, vamos guiá-lo por 2~3 demos cativantes que mostram a integração perfeita dessas tecnologias de ponta.

Seja você um desenvolvedor experiente ou um entusiasta curioso, essas demos fornecerão uma experiência prática para aproveitar os recursos do Grove Vision AI V2 e do XIAO ESP32. Desde detecção e reconhecimento de objetos até análise inteligente de cenas, você descobrirá como criar aplicações inovadoras que ampliam os limites do que é possível.

Prepare-se para embarcar em uma jornada empolgante enquanto desvendamos os segredos da visão de IA e capacitamos você a criar seus próprios projetos revolucionários. Vamos mergulhar fundo e liberar a magia do Grove Vision AI V2 e do XIAO ESP32 juntos!

Esta descrição de abertura busca capturar a atenção do leitor, destacar os componentes principais (Grove Vision AI V2 e XIAO ESP32) e fornecer uma visão geral do que o tutorial irá abordar. Ela enfatiza as possibilidades empolgantes de combinar essas tecnologias e incentiva os leitores a explorar as demos com entusiasmo. Sinta-se à vontade para adaptar e modificar o parágrafo para se adequar melhor ao estilo e tom do seu tutorial.

## Primeiros Passos

### Preparação de Hardware

Os tutoriais e procedimentos deste artigo podem ser usados em produtos da série XIAO ESP32 (XIAO ESP32S3, XIAO ESP32C3, XIAO ESP32C6, etc.), e você pode escolher qualquer um dos produtos da série XIAO ESP32 para concluir o conteúdo deste tutorial.

<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAO ESP32S3</th>
			<th>XIAO ESP32C3</th>
            <th>XIAO ESP32C6</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:110, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

Além da MCU principal, precisamos preparar o Grove Vision AI V2 e câmeras compatíveis para poder concluir o conteúdo deste projeto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/00.jpg" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-V2-Kit-p-5852.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

Se você quiser usar outra câmera, pode ler [a lista de câmeras compatíveis aqui](https://wiki.seeedstudio.com/pt-br/Grove-vision-ai-v2-camera-supported/) para mais informações.


### Preparação de Software

Se esta é a primeira vez que você usa o produto Grove Vision AI V2, recomendamos que leia o Wiki abaixo para aprender a usar o SenseCraft AI e entender como enviar modelos. E aprenda como instalar a biblioteca Arduino para o Grove Vision AI V2.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/grove_vision_ai_v2_software_support/" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Go to Wiki</font></span></strong>
    </a>
</div>


## Projeto I: Criar um Ventilador com Rastreamento Facial

Neste demo empolgante, vamos mostrar como criar um ventilador com rastreamento facial que segue automaticamente cada um de seus movimentos, garantindo que uma brisa refrescante esteja sempre direcionada para você.

Usando o Grove Vision AI V2, vamos aproveitar a magia do reconhecimento facial para detectar e rastrear seu rosto em tempo real. O Vision AI V2 irá continuamente fornecer as coordenadas do seu rosto, fornecendo os dados necessários para o posicionamento preciso do ventilador.

### Etapa 1. Enviar modelos de reconhecimento facial para o Grove Vision AI V2

Para este projeto vamos fazer um ventilador que segue rostos, então o que precisamos usar no Grove Vision AI V2 é um modelo de reconhecimento facial. Você pode enviar esse modelo usando o SenseCraft AI e observar a detecção na janela de pré-visualização.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_demo/1.png" style={{width:1000, height:'auto'}}/></div>

### Etapa 2. Preparar ventiladores e estruturas de rotação

Como a estrutura do ventilador não é fácil de modificar, para a estrutura de direcionamento do ventilador planejamos fazer um chassi de rotação horizontal controlado por um servo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_demo/2.jpg" style={{width:400, height:'auto'}}/></div>

Em seguida, usando chapas de acrílico e cola quente, colamos o ventilador no servo da base.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_demo/3.jpg" style={{width:400, height:'auto'}}/></div>

Os fios do servo são conectados ao pino D6 do XIAO ESP32 e são alimentados com 5V. O Grove Vision AI V2 é simplesmente conectado à interface IIC do XIAO por meio da interface Grove. Aqui também usamos a [Expansion Board Base for XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) para facilitar a fiação.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_demo/4.jpg" style={{width:400, height:'auto'}}/></div>

Por fim, não se esqueça de colar a câmera do Grove Vision AI V2 no meio do ventilador.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_demo/5.jpg" style={{width:400, height:'auto'}}/></div>

### Etapa 3. Enviar o programa para o XIAO

Abaixo está o programa completo para este projeto, por favor compile e envie este programa para a série XIAO ESP32.

```cpp
#include <Seeed_Arduino_SSCMA.h>
SSCMA Infer;

void stop_rotate(void)
{
    digitalWrite(D6, HIGH);
    delayMicroseconds(1500);
    digitalWrite(D6, LOW);
}

void servo_rotate(int rtime, bool revers = false)
{
    uint32_t sleep;
    if (revers)
    {
        sleep = 2500;
    }
    else
    {
        sleep = 500;
    }
    digitalWrite(D6, HIGH);

    delayMicroseconds(sleep);
    digitalWrite(D6, LOW);
    delay(30 * rtime);
    stop_rotate();
}

void setup()
{
    Infer.begin();
    Serial.begin(9600);
    pinMode(D6, OUTPUT);
}

void loop()
{
    if (!Infer.invoke())
    {
        if (Infer.boxes().size() > 0)
        {
            if (Infer.boxes()[0].x < 80)
            {
                servo_rotate(1, true);
            }
            else if (Infer.boxes()[0].x > 140)
            {
                servo_rotate(1, false);
            }
            Serial.print("X==>>");
            Serial.print(Infer.boxes()[0].x);
            Serial.print("Y==>>");
            Serial.println(Infer.boxes()[0].y);
        }
    }
}
```

Se o programa rodar sem problemas, você deverá ver o efeito mostrado abaixo.

<div class="table-center">
<iframe width="500" height="300" src="https://files.seeedstudio.com/wiki/visionai_v2_demo/project1.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::note
A rotação e o ângulo do servo podem variar de um servo para outro, portanto, faça alguns ajustes apropriados dependendo do servo que você está usando, pois isso pode precisar ser ajustado.
:::


### Anotação do programa

O código é estruturado da seguinte forma:

1. Inclusão de Biblioteca:
   - `Seeed_Arduino_SSCMA.h`: Permite inferência com o Grove Vision AI V2.

2. Declaração de Objeto:
   - `SSCMA Infer`: Cria uma instância da classe SSCMA para inferência.

3. Função stop_rotate:
   - Para a rotação do motor de servo enviando uma largura de pulso específica.

4. Função servo_rotate:
   - Gira o motor de servo por uma duração e direção especificadas.
   - `rtime`: Determina a duração da rotação em unidades de 30 milissegundos.
   - `revers`: Especifica a direção da rotação (true para reverso, false para frente).

5. Função Setup:
   - Inicializa o Grove Vision AI V2, a comunicação serial e configura o pino do motor de servo (D0) como saída.

6. Função Loop:
   - Invoca continuamente o processo de inferência.
   - Se um objeto for detectado:
     - Se a coordenada x do objeto for menor que 80, o motor de servo gira na direção reversa por uma curta duração.
     - Se a coordenada x do objeto for maior que 140, o motor de servo gira na direção para frente por uma curta duração.
   - Imprime as coordenadas x e y do objeto detectado no monitor serial.

Para modificar o código e personalizar o sistema de rastreamento de objetos, você pode:

1. Ajuste os valores de limite (80 e 140) na função loop para alterar a faixa dentro da qual o motor de servo permanece parado.

2. Modifique a função `servo_rotate` para ajustar a duração e a velocidade de rotação do motor de servo.

3. Personalize o comportamento do sistema com base na posição do objeto. Por exemplo, você pode adicionar condições ou ações adicionais dependendo das coordenadas x e y do objeto detectado.

4. Estenda o código para controlar motores de servo adicionais ou executar outras ações com base na posição do objeto.


## Projeto II: Bloqueio/Desbloqueio Automático do PC

Melhore a segurança e a conveniência do seu computador com este projeto de bloqueio/desbloqueio automático da tela usando o Grove Vision AI V2 e o XIAO ESP32. Esta configuração inovadora garante que sua tela permaneça bloqueada quando você estiver ausente e seja rapidamente desbloqueada quando você retornar, proporcionando uma experiência de uso perfeita e segura.

### Etapa 1. Envie modelos de reconhecimento facial para o Grove Vision AI V2

Para este projeto, vamos bloquear/desbloquear o PC com base na presença de alguém em frente ao computador, portanto, o que precisamos usar no Grove Vision AI V2 é um modelo de reconhecimento facial. Você pode enviar esse modelo usando o SenseCraft AI e observar a detecção na janela de pré-visualização.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_demo/1.png" style={{width:1000, height:'auto'}}/></div>

### Etapa 2. XIAO se conecta ao computador e envia o programa para o XIAO

Abaixo está o programa completo para este projeto, compile e envie este programa para a série XIAO ESP32.

```cpp
#include "USB.h"
#include <USBHIDKeyboard.h>
#include <Seeed_Arduino_SSCMA.h>

#define KEY_DEBOUNCE 100
#define KEY_WAIT 500
// Set the screen pause time when no one is around, unit: ms
#define SCREEN_TIME 10000

SSCMA Infer;
USBHIDKeyboard Keyboard;

extern char password[] = "YOUR_COMPUTER_PASSWORD";
extern uint pass_size = 6;
unsigned long times;

bool locked = false; 

void lockPC() {
  Keyboard.press(KEY_LEFT_CTRL);
  Keyboard.press(KEY_LEFT_ALT);
  Keyboard.press(KEY_DELETE);
  delay(KEY_DEBOUNCE);
  Keyboard.releaseAll();
  delay(KEY_WAIT);

  Keyboard.press(KEY_RETURN);
  delay(KEY_DEBOUNCE);
  Keyboard.releaseAll();
  locked = true;
}

void unlockPC (){
  Keyboard.press(KEY_RETURN);
  delay(KEY_DEBOUNCE);
  Keyboard.releaseAll();
  delay(KEY_WAIT);
  for(int i = 0; i < pass_size; i++){
    Keyboard.press(password[i]);
    delay(KEY_DEBOUNCE);
    Keyboard.releaseAll();
  }
  delay(KEY_WAIT);
  Keyboard.press(KEY_RETURN);
  delay(KEY_DEBOUNCE);
  Keyboard.releaseAll();
  locked = false;
}

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial.println("Scanning...");

  // Start HID
  Keyboard.begin();
  USB.begin();
  Infer.begin();

  times = millis();
}

void loop() {
  // put your main code here, to run repeatedly:
  if (!Infer.invoke()) {
    if (Infer.boxes().size() > 0) {
      if (locked) {
        unlockPC();
        Serial.println("Unlock");
      }
      times = millis();
    } else {
      if ((millis() - times) > SCREEN_TIME && !locked) {
        lockPC();
        Serial.println("Lock");
      }
    }
  } else {
    if ((millis() - times) > SCREEN_TIME && !locked) {
      lockPC();
      Serial.println("Lock");
    }
  }
}
```

Se o programa estiver sendo executado corretamente, você deverá ver o efeito mostrado abaixo.

<div class="table-center">
<iframe width="500" height="300" src="https://files.seeedstudio.com/wiki/visionai_v2_demo/project2.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::tip
1. Este programa só funciona em computadores Windows; se você tiver um computador com outro sistema, talvez seja necessário alterar o comando para desligar a tela.

2. Se o seu computador Windows estiver configurado com um método de desbloqueio diferente de desbloqueio por impressão digital ou senha, o código para desbloqueá-lo poderá não funcionar.
:::

### Anotação do programa

O código é estruturado da seguinte forma:

1. Incluir as bibliotecas necessárias:
   - `USB.h`: Lida com a comunicação USB.
   - `USBHIDKeyboard.h`: Habilita a funcionalidade de teclado USB HID.
   - `Seeed_Arduino_SSCMA.h`: Fornece recursos de inferência para detecção de pessoas.

2. Definir constantes:
   - `KEY_DEBOUNCE`: Tempo de debounce para entradas de teclado.
   - `KEY_WAIT`: Tempo de espera entre entradas de teclado.
   - `SCREEN_TIME`: Duração de tempo sem a presença de uma pessoa antes de bloquear a tela.

3. Criar instâncias das classes SSCMA (Infer) e USBHIDKeyboard (Keyboard).

4. Declarar variáveis:
   - `password[]`: Armazena a senha do computador para desbloqueio.
   - `pass_size`: Armazena o tamanho da senha.
   - `times`: Armazena o carimbo de tempo da última detecção de pessoa.
   - `locked`: Acompanha o estado atual de bloqueio do computador.

5. Função lockPC:
   - Simula o atalho de teclado (Win+L) para bloquear o computador.
   - Aguarda pelos períodos `KEY_DEBOUNCE` e `KEY_WAIT`.
   - Pressiona a tecla Enter para confirmar a ação de bloqueio.
   - Atualiza a variável locked para indicar o estado bloqueado.

6. Função unlockPC:
   - Pressiona a tecla Enter para iniciar o processo de desbloqueio.
   - Aguarda pelos períodos `KEY_DEBOUNCE` e `KEY_WAIT`.
   - Simula a digitação da senha caractere por caractere.
   - Pressiona a tecla Enter para confirmar a entrada da senha.
   - Atualiza a variável locked para indicar o estado desbloqueado.

7. Função setup:
   - Inicializa a comunicação serial.
   - Inicia o teclado USB (Keyboard) e o mecanismo de inferência (Infer).
   - Define o carimbo de tempo inicial para detecção de pessoas.

8. Função loop:
   - Invoca o mecanismo de inferência (Infer).
   - Se uma pessoa for detectada:
     - Se o computador estiver bloqueado, chama a função `unlockPC` para desbloqueá-lo.
     - Atualiza o carimbo de tempo da última detecção de pessoa.
   - Se nenhuma pessoa for detectada:
     - Se o tempo desde a última detecção de pessoa exceder `SCREEN_TIME` e o computador não estiver bloqueado, chama a função `lockPC` para bloqueá-lo.
   - Se a inferência falhar:
     - Se o tempo desde a última detecção de pessoa exceder `SCREEN_TIME` e o computador não estiver bloqueado, chama a função `lockPC` para bloqueá-lo.

Para personalizar o código de acordo com suas necessidades, você pode fazer as seguintes alterações:

1. Atualizar a senha:
   - Substitua `YOUR_COMPUTER_PASSWORD` pela sua senha real do computador.
   - Modifique `pass_size` para corresponder ao tamanho da sua senha.

2. Ajustar as constantes:
   - Modifique `KEY_DEBOUNCE` e `KEY_WAIT` para alterar o tempo das entradas de teclado.
   - Modifique `SCREEN_TIME` para alterar o tempo sem a presença de uma pessoa antes de bloquear a tela.

3. Personalizar o processo de bloqueio e desbloqueio:
   - Nas funções `lockPC` e `unlockPC`, você pode modificar os atalhos de teclado ou sequências de entrada para corresponder ao seu sistema operacional ou configurações de segurança específicas.

4. Integrar funcionalidades adicionais:
   - Você pode estender o código para incluir ações ou notificações adicionais quando o computador for bloqueado ou desbloqueado.
   - Por exemplo, você pode enviar um e-mail, disparar um alarme ou registrar os eventos.

## Projeto III: Mouse Controlado por Gestos

Transforme sua experiência de interação humano-computador com este inovador projeto de mouse controlado por gestos usando o Grove Vision AI V2 e o XIAO ESP32. Diga adeus à entrada tradicional do mouse e adote uma forma mais intuitiva e natural de navegar pelo computador.

O Grove Vision AI V2 assume o papel principal neste projeto, utilizando seus recursos avançados de visão computacional para detectar e rastrear gestos das mãos do usuário. Ao empregar algoritmos sofisticados, ele pode reconhecer movimentos específicos das mãos e traduzi-los em ações correspondentes do mouse.

### Etapa 1. Envie modelos de reconhecimento de gestos para o Grove Vision AI V2

Para este projeto, vamos operar o mouse com base em gestos, portanto, o que precisamos usar no Grove Vision AI V2 é um modelo de reconhecimento de gestos. Você pode enviar esse modelo usando o SenseCraft AI e observar a detecção na janela de pré-visualização.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai_v2_demo/6.png" style={{width:1000, height:'auto'}}/></div>

### Etapa 2. XIAO se conecta ao computador e envia o programa para o XIAO

Abaixo está o programa completo para este projeto, compile e envie este programa para a série XIAO ESP32.

```cpp
#include <Seeed_Arduino_SSCMA.h>
#include "USBHIDMouse.h"
#include "USB.h"

#define KEY_DEBOUNCE 100
#define KEY_WAIT 500
#define RESET_NUM 3
#define LEFT_CLICK_TARGET 0
#define MOVE_TARGET 1
#define RIGHT_CLICK_TARGET 2

SSCMA Infer;
USBHIDMouse Mouse;

int X = 0, Y = 0;
int8_t mx, my;
bool clicked = false;
int reset_mouse = RESET_NUM;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Infer.begin();

  // initialize mouse control:
  Mouse.begin();
  USB.begin();
}

void move_mouse(int mx, int my) {
  Mouse.move(mx, my);
}

void loop() {
  if (!Infer.invoke()) {
    Serial.println("INVOKE SUCCESS:");
    if (Infer.boxes().size() == 0) {
      if (reset_mouse <= 0) {
        X = 0;
        Y = 0;
      } else {
        reset_mouse -= 1;
      }
    }

    for (int i = 0; i < Infer.boxes().size() && i < 1; i++) {
      reset_mouse = RESET_NUM;
      if (Infer.boxes()[i].target == MOVE_TARGET) {
//        Mouse.press(MOUSE_RIGHT);
        if (X == 0 && Y == 0) {
          X = Infer.boxes()[i].x;
          Y = Infer.boxes()[i].y;
        } else {
          mx = Infer.boxes()[i].x - X;
          my = Infer.boxes()[i].y - Y;
          X = Infer.boxes()[i].x;
          Y = Infer.boxes()[i].y;
          move_mouse(-mx * 2, my * 2);
          clicked = false;
        }
      } else if (Infer.boxes()[i].target == LEFT_CLICK_TARGET && !clicked) {
        Mouse.press(MOUSE_LEFT);
        delay(KEY_DEBOUNCE);
        Mouse.release(MOUSE_LEFT);
        delay(KEY_WAIT);
        clicked = true;
      } else if (Infer.boxes()[i].target == RIGHT_CLICK_TARGET && !clicked) {
        Mouse.press(MOUSE_RIGHT);
        delay(KEY_DEBOUNCE);
        Mouse.release(MOUSE_RIGHT);
        delay(KEY_WAIT);
        clicked = false;
      }
    }

  } else {
    Serial.println("INVOKE FAILE!");
  }
}
```

Se o programa for executado sem problemas, você deverá ver o efeito mostrado abaixo.

<div class="table-center">
<iframe width="500" height="300" src="https://files.seeedstudio.com/wiki/visionai_v2_demo/project3.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### Anotação do programa

O código é estruturado da seguinte forma:

1. Incluir as bibliotecas necessárias:
   - `Seeed_Arduino_SSCMA.h`: Fornece recursos de inferência para detecção de alvos.
   - `USBHIDMouse.h`: Habilita a funcionalidade de mouse USB HID.
   - `USB.h`: Lida com a comunicação USB.

2. Definir constantes:
   - `KEY_DEBOUNCE`: Tempo de debounce para cliques do mouse.
   - `KEY_WAIT`: Tempo de espera entre cliques do mouse.
   - `RESET_NUM`: Número de quadros sem alvos detectados antes de redefinir a posição do mouse.
   - `LEFT_CLICK_TARGET`, `MOVE_TARGET`, `RIGHT_CLICK_TARGET`: IDs de alvo para diferentes ações.

3. Criar instâncias das classes SSCMA (Infer) e USBHIDMouse (Mouse).

4. Declarar variáveis:
   - `X`, `Y`: Armazenam a posição atual do mouse.
   - `mx`, `my`: Armazenam os deltas de movimento do mouse.
   - `clicked`: Acompanha o status do clique.
   - `reset_mouse`: Contador para redefinir a posição do mouse.

5. Função setup:
   - Inicializar a comunicação serial.
   - Iniciar o mecanismo de inferência (Infer) e o mouse USB (Mouse).

6. Função move_mouse:
   - Move o mouse pelos deltas especificados (`mx`, `my`).

7. Função loop:
   - Invocar o mecanismo de inferência (Infer).
   - Se a inferência for bem-sucedida e nenhum alvo for detectado, redefinir a posição do mouse após `RESET_NUM` quadros.
   - Iterar pelos alvos detectados (limitado a 1 neste código):
     - Se o alvo for `MOVE_TARGET`:
       - Atualizar a posição do mouse com base nas coordenadas do alvo.
       - Calcular os deltas de movimento do mouse (mx, my).
       - Mover o mouse de acordo.
     - Se o alvo for `LEFT_CLICK_TARGET` e ainda não tiver sido clicado:
       - Executar um clique esquerdo do mouse.
       - Aguardar pelos períodos `KEY_DEBOUNCE` e `KEY_WAIT`.
     - Se o alvo for `RIGHT_CLICK_TARGET` e ainda não tiver sido clicado:
       - Executar um clique direito do mouse.
       - Aguardar pelos períodos `KEY_DEBOUNCE` e `KEY_WAIT`.
   - Se a inferência falhar, imprimir uma mensagem de erro.

Para personalizar o código de acordo com suas necessidades, você pode fazer as seguintes alterações:

1. Ajustar as constantes:
   - Modificar `KEY_DEBOUNCE` e `KEY_WAIT` para alterar o tempo dos cliques do mouse.
   - Modificar `RESET_NUM` para alterar o número de quadros sem alvos detectados antes de redefinir a posição do mouse.
   - Atualizar `LEFT_CLICK_TARGET`, `MOVE_TARGET` e `RIGHT_CLICK_TARGET` para corresponder aos seus IDs de alvo específicos.

2. Modificar a lógica de tratamento de alvos:
   - Na função loop, você pode adicionar, remover ou modificar as condições e ações com base nos alvos detectados.
   - Por exemplo, você pode adicionar botões adicionais do mouse, implementar cliques duplos ou acionar ações diferentes com base em IDs de alvo específicos.

3. Personalizar o movimento do mouse:
   - Na função `move_mouse`, você pode modificar o comportamento de movimento do mouse ajustando os fatores de multiplicação (`-mx * 2`, `my * 2`) ou adicionando lógica adicional.

4. Integrar funcionalidades adicionais:
   - Você pode estender o código para incluir controles de teclado, controles de mídia ou quaisquer outros recursos desejados utilizando as bibliotecas e funções apropriadas.


## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
