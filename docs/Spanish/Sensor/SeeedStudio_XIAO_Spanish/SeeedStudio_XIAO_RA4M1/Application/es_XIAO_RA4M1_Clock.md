---
description: Build a simplp Clock with Seeed Studio XIAO RA4M1.
title: Reloj Hueco Hecho con XIAO RA4M1 de Seeed Studio
keywords:
- ra4m1
- xiao
- clokc
image: https://files.seeedstudio.com/wiki/RA4M1_Application/top.webp
side_position: 2
slug: /es/xiao_ra4m1_clock
sidebar_class_name: hidden 
last_update:
  date: 02/17/2025
  author: Guillermo
---


<div class="table-center">
<iframe width="800" height="500" src="https://files.seeedstudio.com/wiki/RA4M1_Application/1.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>


## La inspiración surge  

El [Hollow Clock](https://www.youtube.com/watch?v=jvoOgxK4EvI&ab_channel=TheWrench) ganó gran popularidad en YouTube hace algún tiempo, con el diseño original de [sh1ura](https://www.instructables.com/Hollow-Clock-4/), un [video de demostración genial](https://youtu.be/hRpLiRoMx34) y el [diseño 3D disponible en Thingiverse](https://www.thingiverse.com/thing:5636482). Un gran reconocimiento a sh1ura por esta increíble inspiración.  

Parados sobre los hombros de gigantes, ahora hemos remixado una versión utilizando la diminuta [XIAO RA4M1](https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html) y una placa de controlador de motor personalizada más pequeña.  

## Descripción general del hardware  

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
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>


### Placa de circuito  

Con el mismo tamaño que XIAO, simplemente suelda el zócalo hembra e inserta XIAO y el motor en él para que funcione.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RA4M1_Application/2.png" style={{width:500, height:'auto'}}/></div>


La información específica se encuentra en el recurso al final.

:::tip
Tanto los motores como los componentes deben adquirirse por cuenta propia.
:::

### Descripción general del Software
```c

// Este código controla un motor a pasos para un proyecto de reloj,
// permitiendo que la manecilla de los minutos gire con precisión según el tiempo.

// Ajusta el siguiente valor si el reloj adelanta o atrasa el tiempo.
// Teóricamente, el valor estándar es 60000 milisegundos por minuto.
#define MILLIS_PER_MIN 60000 // milisegundos por minuto

// Parámetros del motor y del reloj
// Total de pasos para un giro completo del rotor de los minutos
// Calculado como 4096 pasos por revolución * 90 grados / 12 horas
#define STEPS_PER_ROTATION 30720 // pasos para un giro completo del rotor de minutos

// Tiempo de espera para un solo paso del motor paso a paso
int delaytime = 2;

// Puertos utilizados para controlar el motor paso a paso
// Si tu motor gira en la dirección opuesta,
// cambia el orden de los números de los puertos según sea necesario.
int port[4] = {0, 1, 2, 3};

// Secuencia de control del motor paso a paso
// Este arreglo define la secuencia de control para las fases del motor.
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

// Función para girar el motor paso a paso según el número de pasos especificado
void rotate(int step) {
  static int phase = 0;
  int i, j;
  int delta = (step > 0) ? 1 : 7; // Determina la dirección de rotación
  int dt = 20; // Tiempo de espera inicial

  step = (step > 0) ? step : -step; // Convierte a un número de pasos positivo
  for(j = 0; j < step; j++) {
    phase = (phase + delta) % 8; // Actualiza la fase
    for(i = 0; i < 4; i++) {
      digitalWrite(port[i], seq[phase][i]); // Controla el motor
    }
    delay(dt); // Espera el tiempo especificado
    if(dt > delaytime) dt--; // Reduce gradualmente el tiempo de espera
  }
  // Corte de energía: detiene el motor
  for(i = 0; i < 4; i++) {
    digitalWrite(port[i], LOW);
  }
}

// Función de configuración, se ejecuta una vez al inicio
void setup() {
  // Inicializa los puertos de control del motor como salidas
  pinMode(port[0], OUTPUT);
  pinMode(port[1], OUTPUT);
  pinMode(port[2], OUTPUT);
  pinMode(port[3], OUTPUT);
  
  // Realiza ejecuciones iniciales de aproximación para posicionar la manecilla de los minutos
  rotate(-20); // Aproximación en una dirección
  rotate(20);  // Aproximación en la dirección opuesta
  rotate(STEPS_PER_ROTATION / 60); // Posiciona la manecilla de los minutos
}

// Bucle principal, se ejecuta continuamente
void loop() {
  static long prev_min = 0, prev_pos = 0; // Registra el minuto y la posición anterior
  long min;
  static long pos;
  
  min = millis() / MILLIS_PER_MIN; // Obtiene el minuto actual
  if(prev_min == min) {
    return; // Sale si el minuto no ha cambiado
  }
  prev_min = min; // Actualiza el minuto anterior
  pos = (STEPS_PER_ROTATION * min) / 60; // Calcula la posición objetivo
  rotate(-20); // Aproximación en una dirección
  rotate(20);  // Aproximación en la dirección opuesta
  if(pos - prev_pos > 0) {
    rotate(pos - prev_pos); // Gira a la nueva posición si es necesario
  }
  prev_pos = pos; // Actualiza la posición anterior
}

```

- **Asegurar las conexiones del motor paso a paso**:  
Conecta los cuatro cables de control del motor paso a paso a los puertos especificados en el arreglo de puertos (0, 1, 2, 3).  

- **Ajustar la configuración de tiempo**:  
Modifica el valor de `MILLIS_PER_MIN` según las condiciones reales para garantizar la precisión del reloj. Si el reloj avanza demasiado rápido o lento, ajusta este valor en consecuencia.  

- **Confirmar el cálculo de pasos**:  
Asegúrate de que el valor de `STEPS_PER_ROTATION` esté correctamente calculado según el número real de pasos de tu motor y el diseño del sistema.  

- **Ajustar el tiempo de retardo**:  
El parámetro `delaytime` controla la pausa entre cada paso. Ajusta este valor según el rendimiento y los requisitos del motor para optimizar su funcionamiento.  

- **Configuración de la secuencia de control**:  
El arreglo `seq` define la secuencia de control para el motor paso a paso. Si el motor gira en la dirección incorrecta, puedes modificar los valores en este arreglo.  

- **Descripción de funciones**:  
  - `rotate(int step)`: Controla el motor para girar una cantidad específica de pasos. Se pueden pasar valores positivos o negativos para determinar la dirección. El motor reducirá gradualmente el retraso entre pasos para aumentar la velocidad.  

  - **`setup()`**: Se ejecuta una sola vez al inicio para inicializar los puertos de control y realizar el posicionamiento inicial. Este paso es esencial para configurar el motor.  

  - **`loop()`**: Es el bucle principal que se ejecuta continuamente para calcular el minuto actual y actualizar la posición de la manecilla de los minutos. Llama a la función `rotate()` para mover la manecilla en cada actualización de minuto.

:::tip
- Asegura que la fuente de alimentación sea adecuada para tu motor paso a paso y verifica que todas las conexiones sean correctas.  

- Durante las pruebas, supervisa el funcionamiento del motor para asegurarte de que opere como se espera y realiza ajustes si es necesario.
:::


Si tienes más ideas y modificaciones, ¡no dudes en mostrarlas utilizando la serie XIAO!

## Recursos  

- 📄 **[SCH]** [Placa controladora de motor](https://files.seeedstudio.com/wiki/RA4M1_Application/4.zip)  
- 📄 **[PCB]** [Placa controladora de motor](https://files.seeedstudio.com/wiki/RA4M1_Application/xiao.pcb)  
- 📄 **[3D]** [Modelado 3D del reloj](https://files.seeedstudio.com/wiki/RA4M1_Application/clock.zip)  

## Soporte técnico y discusión de productos  

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
