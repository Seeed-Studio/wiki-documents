---
description: Construye un reloj simple con Seeed Studio XIAO RA4M1.
title: Reloj Hueco Alimentado por Seeed Studio XIAO RA4M1
keywords:
- ra4m1
- xiao
- clokc
image: https://files.seeedstudio.com/wiki/RA4M1_Application/top.webp
side_position: 2
slug: /es/xiao_ra4m1_clock
sidebar_class_name: hidden 
last_update:
  date: 11/12/2024
  author: Jason
---


<div class="table-center">
<iframe width="800" height="500" src="https://files.seeedstudio.com/wiki/RA4M1_Application/1.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>


## Surge la inspiración

[Hollow Clock](https://www.youtube.com/watch?v=jvoOgxK4EvI&ab_channel=TheWrench) ganó una popularidad significativa en YouTube hace algún tiempo, con el diseño original de [sh1ura](https://www.instructables.com/Hollow-Clock-4/)，[video de demostración genial](https://youtu.be/hRpLiRoMx34) y el [diseño 3D disponible en Thingsverse](https://www.thingiverse.com/thing:5636482). Un gran reconocimiento a sh1ura por esta gran inspiración.
Parados sobre los hombros de gigantes, ahora hemos remezclado una versión usando el [XIAO RA4M1](https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html) del tamaño de un pulgar y una placa controladora de motor personalizada más pequeña!

## Descripción del Hardware

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
				<strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>


</div>


### Placa de Circuito

Con el mismo volumen que XIAO, simplemente solda el zócalo madre e inserta XIAO y el motor en él para operar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RA4M1_Application/2.png" style={{width:500, height:'auto'}}/></div>


La información específica está en los recursos al final.

:::tip
Tanto los motores como los componentes necesitan ser comprados por uno mismo.
:::

### Descripción del Software
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

- **Asegurar las Conexiones del Motor Paso a Paso**:
Conecta los cuatro cables de control del motor paso a paso a los puertos especificados en el arreglo de puertos (0, 1, 2, 3).

- **Ajustar la Configuración de Tiempo**:
Ajusta el valor MILLIS_PER_MIN según las condiciones reales para asegurar que el reloj sea preciso. Si el reloj va rápido o lento, ajusta este valor en consecuencia.

- **Confirmar el Cálculo de Pasos**:
Asegúrate de que el valor STEPS_PER_ROTATION esté calculado correctamente basado en el conteo real de pasos de tu motor y el diseño del sistema.

- **Ajustar el Tiempo de Retardo**:
El delaytime controla el retardo entre cada paso. Ajusta finamente este parámetro basado en el rendimiento del motor y los requisitos para optimizar la operación del motor.

- **Configuración de Secuencia de Control**:
El arreglo seq define la secuencia de control para el motor paso a paso. Si el motor rota en la dirección incorrecta, puedes ajustar los valores en este arreglo.

- **Descripciones de Funciones**:
rotate(int step): Controla el motor para rotar un número específico de pasos. Puedes pasar valores positivos o negativos para controlar la dirección. El motor disminuirá gradualmente el retardo después de cada rotación para aumentar la velocidad.

- **setup():** Se ejecuta una vez al inicio para inicializar los puertos de control y realizar el posicionamiento inicial. Este es un paso necesario para configurar el motor.

- **loop():** El bucle principal que se ejecuta continuamente para calcular el minuto actual y actualizar la posición de la manecilla de los minutos. Esta función llamará a la función rotate() para rotar la manecilla en cada actualización de minuto.

:::tip

- Asegúrate de que la fuente de alimentación sea adecuada para tu motor paso a paso y verifica que todas las conexiones sean correctas.

- Durante las pruebas, monitorea la operación del motor para asegurar que funcione como se espera y haz ajustes según sea necesario.
:::


Si tienes más ideas y modificaciones, ¡siéntete libre de mostrarlas usando la serie XIAO!

## Recursos

- 📄 **[SCH]** [Placa Controladora de Motor](https://files.seeedstudio.com/wiki/RA4M1_Application/4.zip)
- 📄 **[PCB]** [Placa Controladora de Motor](https://files.seeedstudio.com/wiki/RA4M1_Application/xiao.pcb)
- 📄 **[3D]** [Modelado 3D del Reloj](https://files.seeedstudio.com/wiki/RA4M1_Application/clock.zip)


## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
