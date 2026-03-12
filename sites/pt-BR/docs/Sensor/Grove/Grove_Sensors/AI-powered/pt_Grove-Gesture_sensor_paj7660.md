---
description: Primeiros passos para o sensor de gestos Grove PAJ7660.
title: Grove Smart IR Gesture Sensor (PAJ7660)
keywords:
  - gesture
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /grove_gesture_paj7660
sku: 101991067
last_update:
  date: 06/28/2023
  author: Citric
createdAt: '2023-06-29'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/grove_gesture_paj7660/
---

# Grove Smart IR Gesture Sensor (PAJ7660)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/main.jpg" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Smart-IR-Gesture-Sensor-p-5721.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
    </a>
</div>

## Introdução

O Grove Smart IR Gesture Sensor é um módulo inteligente de reconhecimento de gestos equipado com um sensor de câmera infravermelha e algoritmo de IA aplicado. Ele pode detectar mais de 15 gestos com ampla detecção, enquanto suporta comunicação IIC e SPI. Este módulo também permite conexão direta Grove, Type-C e Seeed Studio XIAO.

### Características

- **Sensor de gestos com IA compacto**: Equipado com um sensor de câmera infravermelha e com algoritmo de IA aplicado para realizar a detecção de gestos, em uma placa compacta de 4,3 cm x 2,1 cm
- **Mais de 15 gestos com ampla detecção**: Suporta vários gestos, como empurrão com N dedos, pinça, toque, agarrar, rotação, joinha para cima/baixo, estático, etc., com um alcance de detecção de 5–40 cm
- **Alta compatibilidade**: Compatível com a interface da série XIAO e o conector Grove por meio de comunicação I2C, enquanto suporta imagens exibidas no PC através de comunicação SPI
- **Seleção flexível de tensão**: Interface Grove compatível com sistemas de 3,3 V e 5 V

## Visão geral do hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/hardware.png" style={{width:1000, height:'auto'}}/></div>

## Primeiros passos

### Plano de operação

A distância de operação do gesto é de 15 a 30 cm, não podendo exceder 35 cm. Com base no FOV do sensor de 78,3° (horizontal) e 62,9° (vertical), a área de operação é de 48 x 36 cm² a 30 cm.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/1.png" style={{width:700, height:'auto'}}/></div>

Além da distância até o sensor, você também precisa prestar atenção aonde o sensor é colocado. Na frente do sensor, no canto superior esquerdo, há uma pequena figura de um ser humano. Se você ver a figura em pé, então você o colocou na posição correta. Se ela estiver de cabeça para baixo, é provável que você não obtenha um resultado de reconhecimento preciso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/13.png" style={{width:400, height:'auto'}}/></div>

### Interferência de fundo

Como o ruído de fundo pode impactar a precisão do reconhecimento de gestos, é recomendado evitar objetos de fundo com reflexão relativamente alta atrás da palma. Em condição normal de reconhecimento de gestos, recomenda-se pelo menos 35 cm de distância entre a palma e o fundo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/2.png" style={{width:600, height:'auto'}}/></div>

### Tipos de gestos

Todos os tipos de gestos suportados são descritos nas seções a seguir.

#### Definição de gestos

<div class="table-center">
 <table align="center">
  <tr>
   <th>Gesto</th>
   <th>Descrição</th>
            <th>Observação</th>
  </tr>
  <tr>
   <td>N Finger (N=0~5)</td>
   <td>0 ~ 5 dedos sobre o topo do punho <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/3.png" style={{width:250, height:'auto'}}/></div></td>
            <td>Distância de operação de 15 a 30 cm <br /> Estático</td>
  </tr>
  <tr>
   <td>N Finger Push (N=1~5)</td>
   <td>N dedos se movem para a frente em direção ao sensor <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/4.png" style={{width:250, height:'auto'}}/></div></td>
            <td>Distância de operação de 15 a 30 cm <br /> Limite programável</td>
  </tr>
        <tr>
            <td>Pinch</td>
            <td>2 dedos se aproximam para pinçar, se afastam para soltar <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/5.png" style={{width:100, height:'auto'}}/></div></td>
            <td>Distância de operação de 15 a 30 cm <br /> Pode usar a coordenada do centro da palma como cursor e relatar o resultado de Pinch</td>
        </tr>
        <tr>
            <td>Rotação horário/anti-horário</td>
            <td>Mover o pulso em um padrão circular <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/6.png" style={{width:150, height:'auto'}}/></div></td>
            <td>Distância de operação de 15 a 30 cm <br /> O ângulo detectado do gesto pode ser definido, pode relatar o valor do ângulo</td>
        </tr>
        <tr>
            <td>Deslizar a mão para a direita ou esquerda</td>
            <td>Deslizar e mover ambas as mãos afastando-as uma da outra por certa distância <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/7.png" style={{width:300, height:'auto'}}/></div></td>
            <td>Distância de operação de 15 a 30 cm <br /> Limite programável</td>
        </tr>
        <tr>
            <td>Tap</td>
            <td>Clique com 1 dedo (os dedos desaparecem) <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/8.png" style={{width:200, height:'auto'}}/></div></td>
            <td>Distância de operação de 15 a 30 cm <br /> Pode usar a coordenada do centro da palma como cursor</td>
        </tr>
        <tr>
            <td>Grab</td>
            <td>De 5 dedos para 0 dedo <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/9.png" style={{width:200, height:'auto'}}/></div></td>
            <td>Distância de operação de 15 a 30 cm <br /> Pode usar a coordenada do centro da palma como cursor <br /> Relata o resultado de Grab</td>
        </tr>
        <tr>
            <td>Thumb Up</td>
            <td>Dedão no topo do punho <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/10.png" style={{width:180, height:'auto'}}/></div></td>
            <td>Distância de operação de 15 a 25 cm</td>
        </tr>
        <tr>
            <td>Thumb Down</td>
            <td>Dedão na parte de baixo do punho <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/11.png" style={{width:180, height:'auto'}}/></div></td>
            <td>Distância de operação de 15 a 25 cm</td>
        </tr>
 </table>
</div>

#### Modo de operação de gestos

Existem 3 modos de gestos: modos de polegar, cursor e gesto. Cada um deles define tipos específicos de gestos para determinados cenários de uso ou aplicações. O modo combinado padrão inclui todos os gestos, exceto os de polegar.

<div class="table-center">
 <table align="center">
  <tr>
   <th>Modo</th>
   <th>Conexão padrão</th>
            <th>Tipos de gestos</th>
  </tr>
  <tr>
   <td>2</td>
   <td>Modo de polegar</td>
            <td>Thumb Up/Down</td>
  </tr>
  <tr>
   <td>4</td>
   <td>Modo cursor</td>
            <td>Dedo estático <br /> Push <br /> Rotação <br /> Tap <br /> Pinch <br /> Grab</td>
  </tr>
        <tr>
   <td>5</td>
   <td>Modo gesto (Padrão)</td>
            <td>Dedo estático <br /> Push <br /> Deslizar <br /> Rotação <br /> Tap (IS_SELECT flag = 1)  <br /> Pinch (IS_SELECT flag = 1) <br /> Grab (IS_SELECT flag = 1)</td>
  </tr>
 </table>
</div>

### Tipos de hardware

O Grove Smart IR Gesture Sensor suporta uma ampla gama de protocolos de comunicação, com opção de IIC, SPI e USB. Os diferentes modos são selecionados diretamente através de uma chave DIP de 4 posições na parte traseira.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/back.png" style={{width:400, height:'auto'}}/></div>

<br />

O diagrama e a tabela abaixo mostrarão como selecionar o modo que você deseja usar com a chave DIP de 4 posições.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/12.png" style={{width:300, height:'auto'}}/></div>

<div class="table-center">
 <table align="center">
  <tr>
   <th> </th>
   <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
  </tr>
  <tr>
   <th>I2C Mode</th>
   <td>ON</td>
            <td>OFF</td>
            <td>ON</td>
            <td>ON</td>
  </tr>
  <tr>
   <th>SPI Mode</th>
   <td>ON</td>
            <td>ON</td>
            <td>ON</td>
            <td>ON</td>
  </tr>
        <tr>
   <th>USB Mode</th>
   <td>OFF</td>
            <td>OFF</td>
            <td>OFF</td>
            <td>OFF</td>
  </tr>
 </table>
</div>

:::note
A fiação e o código também podem ser ligeiramente diferentes ao usar padrões diferentes. Falaremos mais sobre isso nos exemplos a seguir.
:::

## Uso do software de computador superior

Se você quiser conectar o Grove Gesture Sensor ao seu computador por meio de um cabo USB e ver o reconhecimento e os resultados em tempo real, então usar o software de computador superior é a melhor opção para você.

### Etapa 1. Baixar e abrir o software

Você pode baixar primeiro o software como um arquivo zip clicando **[aqui](https://files.seeedstudio.com/wiki/grove-gesture-paj7620/res/GestureDemo_220620_Customer.zip)**. Em seguida, descompacte o arquivo zip baixado, abra a pasta descompactada **GestureDemo_220620_Customer** e dê um clique duplo para executar o arquivo **GestureDemo_220620_Customer.exe**.

:::tip
Neste ponto, uma janela de erro pode aparecer informando que o Geture Sensor não foi encontrado; podemos simplesmente fechar a mensagem de erro.
:::

### Etapa 2. Conectar o Grove Gesture Sensor ao PC

Em seguida, certifique-se de que o Grove Gesture Sensor está no modo USB, colocando a chave DIP de 4 posições toda em OFF.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/14.png" style={{width:150, height:'auto'}}/></div>

Então, usando um cabo de dados de alta qualidade, conecte a porta USB-C do Grove Gesture Sensor à porta USB do seu computador.

### Etapa 3. Ver resultados no software

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/16.png" style={{width:1000, height:'auto'}}/></div>

Depois de conectado ao computador, clique no botão **Run** no canto superior esquerdo do software e, em seguida, selecione o modo **Gesture** para ver os resultados em tempo real.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/17.png" style={{width:1000, height:'auto'}}/></div>

Os tipos de gestos e sua introdução podem ser encontrados nas **[seções anteriores](#tipos-de-gestos)**.

## Visão Geral da Biblioteca Arduino

:::tip
Se esta é a sua primeira vez usando o Arduino, recomendamos fortemente que você consulte [Primeiros Passos com Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/).
:::

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Grove_Gesture" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar a Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

### Função

Antes de começarmos a desenvolver um sketch, vamos analisar as funções disponíveis da biblioteca.

1. `bool init()` —— Esta função inicializa o Grove Gesture Sensor e retorna **True** se a inicialização for bem-sucedida e **False** se falhar.

2. `bool getResult(paj7620_gesture_t& res)` —— A função serve para obter o resultado do reconhecimento de gesto pelo sensor.

### Instalação

Como você já fez o download da biblioteca em formato zip, abra a Arduino IDE, clique em **Sketch > Include Library > Add .ZIP Library**. Escolha o arquivo zip que você acabou de baixar e, se a biblioteca for instalada corretamente, você verá **Library added to your libraries** na janela de aviso. Isso significa que a biblioteca foi instalada com sucesso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

<br></br>

## Demo 1: Conectar sensores ao MCU por IIC

### Passo 1. Coloque a chave DIP de 4 posições na posição IIC

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/IIC.png" style={{width:100, height:'auto'}}/></div>

A segunda posição da esquerda para a direita precisa ser ajustada para OFF, todas as outras devem ficar em ON.

### Passo 2. Conecte o MCU ao Grove Gesture Sensor via cabo Grove

A interface IIC é compatível com a série XIAO e a série Arduino/Seeeduino. Se você estiver usando um Arduino/Seeeduino, talvez precise usar um cabo Grove para conectar à interface IIC deles.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/18.jpg" style={{width:600, height:'auto'}}/></div>

Se você estiver usando XIAO, então tudo é fácil, você só precisa conectá-lo diretamente ao conector fêmea do Grove Gesture Sensor e usá-lo. Observe que a porta USB-C deve sempre ficar voltada para fora.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/19.png" style={{width:250, height:'auto'}}/></div>

### Passo 3. Fazer upload do programa

Copie o programa a seguir para a Arduino IDE, selecione a placa de desenvolvimento XIAO que você está usando, compile e faça o upload do programa.

#### Código 1: Modo Gesture (Padrão)

```cpp
#include "Gesture.h"

pag7660 Gesture; // Combined mode is used by default

void setup() {
    Serial.begin(9600);
    while(!Serial) {
        delay(100);
    }
    Serial.println("\nPAG7660 TEST DEMO: Gesture combined mode.");

    if(Gesture.init()) {
        Serial.println("PAG7660 initialization success");
    } else {
        Serial.println("PAG7660 initialization failed");
    }
    Serial.println("Please input your gestures:\n");
}

void loop() {
    pag7660_gesture_t result;
    if (Gesture.getResult(result)) {
        printResultCombinedMode(result);
    }
    delay(100);
}

void printResultCombinedMode(const pag7660_gesture_t& result) {
    const char *cursor_str[] = {
        NULL,
        "Tap",
        "Grab",
        "Pinch",
    };
    switch (result.type) {
    case 0:
        switch (result.cursor.type) {
        case 1:
        case 2:
        case 3:
            if (result.cursor.select)
                Serial.println(cursor_str[result.cursor.type]);
            break;
        default:
            break;
        }
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        Serial.print(result.type);
        Serial.println("-finger");
        break;
    case 6:
        Serial.print("Rotate Right ");
        Serial.println(result.rotate);
        break;
    case 7:
        Serial.print("Rotate Left ");
        Serial.println(result.rotate);
        break;
    case 8:
        Serial.println("Swipe Left");
        break;
    case 9:
        Serial.println("Swipe Right");
        break;
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
        Serial.print(result.type - 19 + 1);
        Serial.println("-finger push");
        break;
    default:
        break;
    }
}
```

Se tudo correr bem, faça gestos diretamente para o Grove Gesture Sensor e ele irá exibir o resultado no monitor serial.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/20.png" style={{width:800, height:'auto'}}/></div>

#### Código 2: Modo Thumb

```cpp
#include "Gesture.h"

pag7660 Gesture(GESTURE_THUMB_MODE); // Thumb mode is used

void setup() {
    Serial.begin(9600);
    while(!Serial) {
        delay(100);
    }
    Serial.println("\nPAG7660 TEST DEMO: Gesture thumb mode.");

    // initialize with a SPI chip select pin number to use SPI
    if(Gesture.init()) {
        Serial.println("PAG7660 initialization success");
    } else {
        Serial.println("PAG7660 initialization failed");
    }
    Serial.println("Please input your gestures:\n");
}

void loop() {
    pag7660_gesture_t result;
    if (Gesture.getResult(result)) {
        if (result.thumb.up)
            Serial.println("Thumb Up");
        else if (result.thumb.down)
            Serial.println("Thumb Down");
        }
    delay(100);
}
```

Se tudo correr bem, faça gestos diretamente para o Grove Gesture Sensor e ele irá exibir o resultado no monitor serial.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/21.png" style={{width:800, height:'auto'}}/></div>

:::tip
Existem três modos diferentes do Grove Gesture Sensor. Nós concluímos o desenvolvimento do programa para os dois modos autônomos e os disponibilizamos aqui; consulte [Gesture Operation Mode](#modo-de-operação-de-gestos) para mais informações sobre as diferenças entre os modos.
:::

## Demo 2: Conectar sensores ao XIAO por SPI

Se você deseja usar a abordagem SPI em vez de IIC, então você pode seguir os passos aqui para concluir o seu projeto.

### Passo 1. Coloque a chave DIP de 4 posições na posição SPI

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/SPI.png" style={{width:100, height:'auto'}}/></div>

Todos os seletores precisam ser alternados para a posição ON.

### Passo 2. Conecte o XIAO ao Grove Gesture Sensor

Conecte o XIAO diretamente ao conector fêmea do Grove Gesture Sensor e use-o. Observe que a porta USB-C deve sempre ficar voltada para fora.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/19.png" style={{width:250, height:'auto'}}/></div>

### Passo 3. Fazer upload do programa

Copie o programa a seguir para a Arduino IDE, selecione a placa de desenvolvimento XIAO que você está usando, compile e faça o upload do programa.

#### Código 1: Modo Gesture (Padrão)

```cpp
#include "Gesture.h"

#define PAG7660_CS D3
pag7660 Gesture; // Combined mode is used by default

void setup() {
    Serial.begin(9600);
    while(!Serial) {
        delay(100);
    }
    Serial.println("\nPAG7660 TEST DEMO: Gesture combined mode.");

    if(Gesture.init(PAG7660_CS)) {
        Serial.println("PAG7660 initialization success");
    } else {
        Serial.println("PAG7660 initialization failed");
    }
    Serial.println("Please input your gestures:\n");
}

void loop() {
    pag7660_gesture_t result;
    if (Gesture.getResult(result)) {
        printResultCombinedMode(result);
    }
    delay(100);
}

void printResultCombinedMode(const pag7660_gesture_t& result) {
    const char *cursor_str[] = {
        NULL,
        "Tap",
        "Grab",
        "Pinch",
    };
    switch (result.type) {
    case 0:
        switch (result.cursor.type) {
        case 1:
        case 2:
        case 3:
            if (result.cursor.select)
                Serial.println(cursor_str[result.cursor.type]);
            break;
        default:
            break;
        }
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        Serial.print(result.type);
        Serial.println("-finger");
        break;
    case 6:
        Serial.print("Rotate Right ");
        Serial.println(result.rotate);
        break;
    case 7:
        Serial.print("Rotate Left ");
        Serial.println(result.rotate);
        break;
    case 8:
        Serial.println("Swipe Left");
        break;
    case 9:
        Serial.println("Swipe Right");
        break;
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
        Serial.print(result.type - 19 + 1);
        Serial.println("-finger push");
        break;
    default:
        break;
    }
}
```

Se tudo correr bem, faça gestos diretamente para o Grove Gesture Sensor e ele exibirá o resultado no monitor serial.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/22.png" style={{width:800, height:'auto'}}/></div>

#### Código 2: Modo Polegar

```cpp
#include "Gesture.h"

#define PAG7660_CS D3
pag7660 Gesture(GESTURE_THUMB_MODE); // Thumb mode is used

void setup() {
    Serial.begin(9600);
    while(!Serial) {
        delay(100);
    }
    Serial.println("\nPAG7660 TEST DEMO: Gesture thumb mode.");

    // initialize with a SPI chip select pin number to use SPI
    if(Gesture.init(PAG7660_CS)) {
        Serial.println("PAG7660 initialization success");
    } else {
        Serial.println("PAG7660 initialization failed");
    }
    Serial.println("Please input your gestures:\n");
}

void loop() {
    pag7660_gesture_t result;
    if (Gesture.getResult(result)) {
        if (result.thumb.up)
            Serial.println("Thumb Up");
        else if (result.thumb.down)
            Serial.println("Thumb Down");
        }
    delay(100);
}
```

Se tudo correr bem, faça gestos diretamente para o Grove Gesture Sensor e ele exibirá o resultado no monitor serial.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/23.png" style={{width:800, height:'auto'}}/></div>

:::tip
Existem três modos diferentes do Grove Gesture Sensor. Concluímos o desenvolvimento do programa para os dois modos autônomos e os disponibilizamos aqui; consulte [Gesture Operation Mode](#Modo-de-Operação-de-Gestos) para mais informações sobre as diferenças entre os diferentes modos.
:::

## Recursos

- **[ZIP]** [Grove Gesture Sensor SCH&PCB](https://files.seeedstudio.com/wiki/grove-gesture-paj7620/res/Grove-Smart-IR-Gesture-Sensor_v1.0_SCH&PCB.zip)
- **[PDF]** [Grove Gesture Sensor SCH](https://files.seeedstudio.com/wiki/grove-gesture-paj7620/res/Grove-Smart-IR-Gesture-Sensor_v1.0_SCH_PDF.pdf)
- **[Datasheet]** [PAG7661QN_FW-DS_V0.8_05072022_Confidential.pdf](https://files.seeedstudio.com/wiki/grove-gesture-paj7620/res/PAG7661QN_FW-DS_V0.8_05072022_Confidential.pdf)

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
