---
description: Construa um relógio simples com o Seeed Studio XIAO RA4M1.
title: Relógio Oco Alimentado por Seeed Studio XIAO RA4M1
keywords:
  - ra4m1
  - xiao
  - clokc
image: https://files.seeedstudio.com/wiki/RA4M1_Application/top.webp
side_position: 2
slug: /xiao_ra4m1_clock
sidebar_class_name: hidden
last_update:
  date: 11/12/2024
  author: Jason
createdAt: '2024-11-14'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xiao_ra4m1_clock/
---


<div class="table-center">
<iframe width="800" height="500" src="https://files.seeedstudio.com/wiki/RA4M1_Application/1.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## A inspiração surge

[Hollow Clock](https://www.youtube.com/watch?v=jvoOgxK4EvI&ab_channel=TheWrench) ganhou grande popularidade no YouTube há algum tempo, com o design original de [sh1ura](https://www.instructables.com/Hollow-Clock-4/)，[vídeo de demonstração legal](https://youtu.be/hRpLiRoMx34) e o [projeto 3D disponível no Thingsverse](https://www.thingiverse.com/thing:5636482). Um grande agradecimento a sh1ura por essa ótima inspiração.
Apoiando-nos nos ombros de gigantes, agora remixamos uma versão usando o [XIAO RA4M1](https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html) do tamanho de um polegar e uma placa de driver de motor personalizada, menor!

## Visão Geral de Hardware

### MCU

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO RA4M1</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### Placa de Circuito

Com o mesmo volume do XIAO, basta soldar o soquete principal e inserir o XIAO e o motor nele para operar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RA4M1_Application/2.png" style={{width:500, height:'auto'}}/></div>

Informações específicas estão no recurso ao final.

:::tip
Tanto os motores quanto os componentes precisam ser comprados por conta própria.
:::

### Visão Geral de Software

```c

// This code controls a stepper motor for a clock project,
// allowing the minute hand to rotate accurately based on time.

// Please tune the following value if the clock gains or loses time.
// Theoretically, the standard value is 60000 milliseconds per minute.
#define MILLIS_PER_MIN 60000 // milliseconds per a minute

// Motor and clock parameters
// Total steps for a full turn of the minute rotor
// Calculated as 4096 steps per revolution * 90 degrees / 12 hours
#define STEPS_PER_ROTATION 30720 // steps for a full turn of minute rotor

// Wait time for a single step of the stepper motor
int delaytime = 2;

// Ports used to control the stepper motor
// If your motor rotates in the opposite direction,
// change the order of the port numbers as needed.
int port[4] = {0, 1, 2, 3};

// Sequence of stepper motor control
// This array defines the control sequence for the motor phases.
int seq[8][4] = {
  {  LOW, HIGH, HIGH,  LOW},
  {  LOW,  LOW, HIGH,  LOW},
  {  LOW,  LOW, HIGH, HIGH},
  {  LOW,  LOW,  LOW, HIGH},
  { HIGH,  LOW,  LOW, HIGH},
  { HIGH,  LOW,  LOW,  LOW},
  { HIGH, HIGH,  LOW,  LOW},
  {  LOW, HIGH,  LOW,  LOW}
};

// Function to rotate the stepper motor based on the specified number of steps
void rotate(int step) {
  static int phase = 0;
  int i, j;
  int delta = (step > 0) ? 1 : 7; // Determine direction of rotation
  int dt = 20; // Initial delay time

  step = (step > 0) ? step : -step; // Convert to positive step count
  for(j = 0; j < step; j++) {
    phase = (phase + delta) % 8; // Update phase
    for(i = 0; i < 4; i++) {
      digitalWrite(port[i], seq[phase][i]); // Control the motor
    }
    delay(dt); // Wait for the specified delay
    if(dt > delaytime) dt--; // Gradually decrease delay
  }
  // Power cut: stop the motor
  for(i = 0; i < 4; i++) {
    digitalWrite(port[i], LOW);
  }
}

// Setup function, runs once at startup
void setup() {
  // Initialize motor control ports as outputs
  pinMode(port[0], OUTPUT);
  pinMode(port[1], OUTPUT);
  pinMode(port[2], OUTPUT);
  pinMode(port[3], OUTPUT);

  // Perform initial approach runs to position the minute hand
  rotate(-20); // Approach run in one direction
  rotate(20);  // Approach run in the opposite direction
  rotate(STEPS_PER_ROTATION / 60); // Position the minute hand
}

// Main loop, runs continuously
void loop() {
  static long prev_min = 0, prev_pos = 0; // Track previous minute and position
  long min;
  static long pos;

  min = millis() / MILLIS_PER_MIN; // Get the current minute
  if(prev_min == min) {
    return; // Exit if the minute hasn't changed
  }
  prev_min = min; // Update previous minute
  pos = (STEPS_PER_ROTATION * min) / 60; // Calculate target position
  rotate(-20); // Approach run in one direction
  rotate(20);  // Approach run in the opposite direction
  if(pos - prev_pos > 0) {
    rotate(pos - prev_pos); // Rotate to the new position if needed
  }
  prev_pos = pos; // Update previous position
}

```

- **Garantir as conexões do motor de passo**:
Conecte os quatro fios de controle do motor de passo às portas especificadas na matriz de portas (0, 1, 2, 3).

- **Ajustar as configurações de tempo**:
Ajuste o valor de MILLIS_PER_MIN de acordo com as condições reais para garantir que o relógio esteja preciso. Se o relógio estiver adiantado ou atrasado, ajuste esse valor em conformidade.

- **Confirmar o cálculo de passos**:
Certifique-se de que o valor de STEPS_PER_ROTATION seja corretamente calculado com base na contagem real de passos do seu motor e no projeto do sistema.

- **Ajustar o tempo de atraso**:
O delaytime controla o atraso entre cada passo. Faça um ajuste fino desse parâmetro com base no desempenho e nos requisitos do motor para otimizar a operação.

- **Configurações da sequência de controle**:
A matriz seq define a sequência de controle para o motor de passo. Se o motor girar na direção errada, você pode ajustar os valores nessa matriz.

- **Descrições das funções**:
rotate(int step): Controla o motor para girar um número especificado de passos. Você pode passar valores positivos ou negativos para controlar a direção. O motor diminuirá gradualmente o atraso após cada rotação para aumentar a velocidade.

- **setup():** Executa uma vez na inicialização para inicializar as portas de controle e realizar o posicionamento inicial. Esta é uma etapa necessária para configurar o motor.

- **loop():** O loop principal que é executado continuamente para calcular o minuto atual e atualizar a posição do ponteiro de minutos. Esta função chamará a função rotate() para girar o ponteiro a cada atualização de minuto.

:::tip

- Certifique-se de que a fonte de alimentação seja adequada para o seu motor de passo e verifique se todas as conexões estão corretas.

- Durante os testes, monitore a operação do motor para garantir que ele funcione como esperado e faça ajustes conforme necessário.

:::

Se você tiver mais ideias e modificações, sinta-se à vontade para apresentá-las usando a série XIAO!

## Recurso

- 📄 **[SCH]** [Placa Driver de Motor](https://files.seeedstudio.com/wiki/RA4M1_Application/4.zip)
- 📄 **[PCB]** [Placa Driver de Motor](https://files.seeedstudio.com/wiki/RA4M1_Application/xiao.pcb)
- 📄 **[3D]** [Modelagem 3D do Relógio](https://files.seeedstudio.com/wiki/RA4M1_Application/clock.zip)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
