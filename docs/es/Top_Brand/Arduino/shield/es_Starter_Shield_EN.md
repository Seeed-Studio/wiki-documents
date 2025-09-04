---
description:  Starter_Shield_EN
title:  Starter Shield EN
keywords:
-  Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Starter_Shield_EN
last_update:
  date: 2/16/2023
  author: jianjing Huang
---

<!-- ---
name: Starter_Shield_EN
category: Discontinued
bzurl:
oldwikiname: Seeeduino_Stalker
prodimagename:
bzprodimageurl: https://www.research.net/r/Starter_Shield_EN
sku:
tags:

--- -->

![](https://files.seeedstudio.com/wiki/Starter_Shield_EN/img/Tickshield_02.jpg)

Starter Shield es un comienzo perfecto para principiantes del mundo Arduino. Puedes aprender trucos básicos de soldadura y practicar principios de programación mientras aprendes con este kit. Hemos preparado una guía detallada de soldadura y una biblioteca completamente compatible de ejemplos de programación de fácil a difícil, por lo que la electrónica puede ser divertida incluso si tienes conocimientos técnicos básicos. ¡Esperamos que te diviertas y obtengas algunos conocimientos con este kit!

Este es un ejemplo [Cómo hacer una máquina tigre pequeño](https://www.instructables.com/id/How-to-Make-Your-Tiny-Tiger-Machine/) usando Starter Shield.

Starter Shield contiene algunos recursos electrónicos básicos, como botones, sensores, zumbador y pantalla. Es una excelente manera de aprender cómo soldar. Starter Shield es un kit de soldadura de orificios pasantes para principiantes. Después de ensamblar el kit, habrás dominado los conceptos básicos de la soldadura de orificios pasantes y tendrás un reloj despertador de estilo geek que funciona con tu Arduino.

Modelo: [SLD90400P](https://www.seeedstudio.com/depot/tick-tock-shield-p-1371.html?cPath=6_7)

## Lista de partes

* 1x Zumbador ;

* 1x CAP Aluminio 100uF-16V;

* 1x Sensor de Temperatura-10k;

* 1x RES Fotorresistor 10K;

* 4x RES 10K-5%-1/4W;

* 4x RES 220R-5%-1/4W；

* 3x RES 4.7K-5%-1/4W;

* 2x Conector Macho Azul VERT;

* 2x Conector Macho Azul VERT;

* 1x Conector Hembra Azul VERT;

* 1x Batería de Iones de Litio 3V-40mAh;

* 1x Portabaterías SMD de Plástico;

* 1x IC Controlador;

* 1x RTC Reloj/Temporización;

* 2x Zócalo IC;

* 3x Botón Superior;

* 2x Conector Hembra Redondo Negro VERT;

* 1x LED Verde-Verde;

* 1x LED Azul-Azul;

* 2x LED Rojo-Rojo;

* 1x LED 7-SEG-Rojo;

* 1x Cristal 32.768KHz-12.5pF-20ppm-30K;

* 2x CAP Disco Cerámico 1nF-50V-20%;

* 1x CAP Disco Cerámico 100nF-25V;

* 1x Guía de Soldadura Starter Shield

* 1x PCB Starter Shield;

## Especificación  

![](https://files.seeedstudio.com/wiki/Starter_Shield_EN/img/Tick_Shield_Interface_Function.jpg)

**Recursos de Hardware**

* Portapilas de Moneda: proporciona energía al IC RTC cuando la alimentación externa está apagada;

* Zumbador: crea efecto de audio;

* Sensor de Luz: detecta la intensidad de luz ambiental;

* Sensor de Temperatura: detecta la temperatura ambiental;

* K1...K3: botones temporales;

* D1...D4: LEDs en azul, verde, rojo y rojo;

* U3: VS1307, IC de Reloj de Tiempo Real;

* U5: TM1636, IC controlador de pantalla de 7 segmentos.

**Pines Utilizados en Arduino**

* D2: Controla LED1;

* D3: Controla LED2;

* D4: Controla LED3;

* D5: Controla LED4;

* D6: Controla Zumbador;

* D7: Pin SCLK de VS1636;

* D8: Pin DIO de VS1636;

* D9: Controla K1;
* D10: Controla K2;
* D11: Controla K3;

* A0(D14): Obtiene lecturas del sensor de temperatura;

* A1(D15): Obtiene lecturas del sensor de luz;

* A4(D18): Pin SDA de DS1307
* A5(D19): Pin SCK de DS1307

## Demostración

Se supone que debes terminar la soldadura de tu Tick Tock Shield antes de continuar con las siguientes demostraciones. Si no lo hiciste, haz clic [aquí](https://www.seeedstudio.com/document/pdf/Tick%20Tock%20Shield%20Soldering%20Guide.pdf) para descargar la guía de soldadura.

Aquí comenzamos a presentarte 7 demostraciones de fácil a difícil. Involucran el uso de todos los recursos de hardware en el Tick Tock Shield:

**Demo 1: Barrer Los LEDs**

1. Esta demostración solo involucra el uso del actuador más básico - LEDs.

2. Reinicia el Arduino IDE. Abre el ejemplo "RunLED" a través de la ruta: File --&gt; Examples --&gt; TickTockShield--&gt; RunLED.

   ![](https://files.seeedstudio.com/wiki/Starter_Shield_EN/img/Open_RunLED_Code.jpg)

3. Esta demostración puede barrer 4 LEDs con una velocidad configurable. Puedes cambiar la velocidad de barrido cambiando el parámetro de la función "runLED(speed)". Encuentra más ilustración de la función en su comentario.

4. Haz clic en el botón de subir para cargar el programa al Arduino.

5. Puedes ver cuatro luces LED encenderse y apagarse de izquierda a derecha a una velocidad dada después de que el programa sea cargado.

**Demo 2: Controlar LEDs Por Teclas**

Esta demostración te muestra cómo controlar LEDs con la entrada más básica - botones.

1. Abre el ejemplo "ControlLED" de la misma manera que abriste el "RunLED" arriba.

2. Esta demostración puede encender o apagar cuatro LEDs por teclas. Configuramos dos banderas para almacenar el estado de esta prueba, TEST_START y TEST_END. Cada vez que la tecla "menu" es presionada, el estado alterna entre TEST_START y TEST_END. En el estado de TEST_START, la tecla "increase" puede encender un LED más de derecha a izquierda cada vez que es presionada. La tecla "decrease" tiene un efecto inverso a la tecla "increase".

**Demo 3: Cambiar El Tono Del Buzzer Por Teclas**
Esta demostración involucra cómo hacer un sonido con el buzzer, y porque ya sabes cómo usar botones, en esta demostración, usamos botones para aumentar o disminuir el tono del buzzer.

1. Abre el ejemplo "changeThePitch".

2. Cada vez que la tecla "increase" es presionada, el tono del buzzer subirá. Y cuando la tecla "decrease" es presionada, el tono bajará.

**Demo 4: Mostrar Temperatura**

Comenzar con sensores. Primero tenemos aquí el sensor de temperatura. Trata de leer su valor y mostrarlo en la pantalla de 7 segmentos.

1. Abre el ejemplo "MeasureTemprature".
2. La Pantalla de 7 segmentos mostrará la temperatura actual leída del sensor de temperatura como se muestra abajo.
3. Si encuentras en la imagen de abajo, el contraste no es lo suficientemente fuerte, prueba un ángulo de vista más bajo. Este principio también se aplica a las siguientes demostraciones que contienen uso de pantalla de 7 segmentos.

![](https://files.seeedstudio.com/wiki/Starter_Shield_EN/img/Measure_Temperature.jpg)

**Demo 5: Hacer Un LED Controlado Por Sensor De Luz**

¿Es conveniente si el brillo de la pantalla puede auto ajustarse según la luz ambiental? Esta demostración te muestra cómo hacer esto usando un sensor de luz.

1. Abre el ejemplo "SensorControlBrightness" de la misma manera.

2. Este ejemplo puede cambiar el brillo del Indicador BRIGHT_ADJUST según la intensidad de luz ambiental. Mientras más oscuro esté el ambiente, más claro se vuelve el LED. La imagen de la derecha es el resultado.

![](https://files.seeedstudio.com/wiki/Starter_Shield_EN/img/Connect_Tick_Shield.jpg)

![](https://files.seeedstudio.com/wiki/Starter_Shield_EN/img/Control_Light.jpg)

**Demo 6: Mostrar Caracteres Numéricos**

Esta demostración te muestra cómo controlar el contenido de la pantalla de 7 segmentos.

1. Abre el ejemplo "CharacterFlow".

2. Este ejemplo puede ejecutar caracteres numéricos 0, 1, 2, 3, 4, 5, 6, 7, 8 ,9, A, b, C, d, E, F de derecha a izquierda.

![](https://files.seeedstudio.com/wiki/Starter_Shield_EN/img/Flow_Character.jpg)

**Demo 7: Reloj De Tiempo Real**

Esta es una demostración final que involucra todos los recursos de hardware que mencionamos arriba y realiza todas las funciones de un reloj despertador de la vida real, como mostrar la hora, hacer un zumbido para sacarte de la cama y así sucesivamente. Además, porque se añaden un sensor de luz y un sensor de temperatura, el Tick Tock Shield hace más que un reloj despertador normal. Puede detectar la luz ambiental y auto-ajustar el brillo de la pantalla de 7 segmentos. También puede mostrarte la temperatura actual en un intervalo de tiempo dado.

1. Abre el ejemplo "RealTimeClock" y carga el ejemplo en Arduino.

2. La Pantalla de 7 segmentos mostrará alternativamente la hora actual y la temperatura.

![](https://files.seeedstudio.com/wiki/Starter_Shield_EN/img/Display_RTC_.jpg)

3. Método para ajustar la hora y configurar el reloj despertador:

* 1) Porque hay un chip RTC a bordo, así que no necesitas restablecer la hora cada vez que lo enciendes, por supuesto, la condición es que la batería de moneda para el chip RTC esté viva. Pero si esta es tu primera vez iniciando el Tick Tock Shield, se requiere configurar la hora.

* 2) Tres botones se usan para ajustar la hora. Son "menu"(K3), "increase"(K2) y "decrease"(K1). Presiona "memu" para ciclar entre los siguientes modos de configuración:

  * a) configurar la parte de hora de la pantalla de tiempo normal

  * b) configurar la parte de minuto de la pantalla de tiempo normal

  * c) configurar la parte de hora del reloj despertador

  * d) configurar la parte de minuto del reloj despertador

  * e) configurar el brillo predeterminado de la pantalla de 7 segmentos

  * f) encender o apagar la función de alarma

  * g) salir de los modos de configuración de tiempo

* 3) Si quieres salir antes de procesar todos los 7 pasos arriba. Hay dos maneras de interrupción. Una, presiona K3 sin importar en qué paso por 3s. De esta manera, el Tick Tock Shield confirmará todas las configuraciones que has hecho y saldrá. Dos, deja el Tick Tock Shield solo por 5s. De esta manera. Ninguna configuración será almacenada y también saldrás del modo de configuración de tiempo.

* 4) K2 está asignado para configurar el estado del reloj despertador. Puedes conocer el estado del reloj despertador a través del Indicador ALARM_ENABLE.

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Starter_Shield_EN/res/Starter_Shield_v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos  

* **[Librería]** [Librería Starter Shield](https://github.com/Seeed-Studio/Starter_Shield)

* **[Eagle]** [Archivo eagle de Starter Shield](https://files.seeedstudio.com/wiki/Starter_Shield_EN/res/Starter_Shield_v1.1.zip)
* **[PDF]** [BLE Bee v1.0 pdf](https://files.seeedstudio.com/wiki/Starter_Shield_EN/res/Starter_Shield_v1.1.pdf)

* **[EAGLE]** [BLE Bee v1.0 sch](https://files.seeedstudio.com/wiki/Starter_Shield_EN/res/Starter%20Shield%20v1.1.sch)

* **[Esquemático]** [Esquemático pdf de Starter Shield](https://files.seeedstudio.com/wiki/Starter_Shield_EN/res/Starter_Shield_v1.1.pdf)

* **[Hoja de datos]** [Hoja de datos TM1636](https://files.seeedstudio.com/wiki/Starter_Shield_EN/res/Tm1636.pdf)

* **[Hoja de datos]** [Hoja de datos VS1307](https://files.seeedstudio.com/wiki/Starter_Shield_EN/res/Vs1307.pdf)

## Referencia

### Clase EEPROM  

**Función de la Clase:** Leer y escribir EEPROM del chip AVR. El tamaño de EEPROM del Chip ATmega328P es de 1K Bytes para Seeeduino V3.0. El contenido de la EEPROM que hayas escrito no se perderá al apagar la alimentación. Se utiliza para guardar la hora de alarma y la bandera de habilitación de alarma en la Demo de RealTimeClock, No necesitas restablecer el reloj despertador.

**Descripción de Funciones:**

**1. EEPROM.read(int address);**
Esta función se utiliza para leer datos desde una dirección especificada de la EEPROM.

* address: la dirección de la unidad objetivo.

Ejemplo：

```cpp
temp_data[i] = EEPROM.read(i);
```

**2. EEPROM.write(int address, uint8_t value);**
 La función se utiliza para escribir datos en una dirección específica de la EEPROM.

* address: la dirección de la unidad objetivo
* uint8_t value: datos a escribir en la unidad objetivo.

Ejemplo:

```cpp
if(temp_data[i] != mark[i])
    {
      EEPROM.write(0,mark[0]);
      EEPROM.write(1,mark[1]);
      EEPROM.write(2,mark[2]);
      EEPROM.write(3,mark[3]);
      EEPROM.write(4,mark[4]);
      return true;
    }
```

### Clase TM1636  

**Función de la Clase：**esta clase contiene todas las funciones para controlar cuatro displays de 7 segmentos.
 **Descripción de Funciones:**

 **1. tm1636.point(boolean PointFlag);**
 La función se utiliza para encender o apagar el punto del reloj (:). Esta función tendrá efecto cada vez que cambie el contenido del display.

* PointFlag: puede ser 0(apagado) o 1(encendido).

Ejemplo:

```cpp
if(flag_clockpoint)
      {
        tm1636.point(POINT_ON);
      }
      else tm1636.point(POINT_OFF); 
```

**2. Tm1636.display(int8_t DispData[]);**
Crea un flujo de caracteres con el contenido de DispData[].

* DispData[]: un arreglo de tipo int8_t, que incluye 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, A, b, C, d, E y F.

Ejemplo:

```cpp
tm1636.display(disp);
```

### Clase TickTockShield  

**Función de la Clase** Operar todos los componentes en el Tick Tock Shield.
**Descripción de la Función:**

**1. ticktockshield.init();**
La Inicialización del Tick Tock Shield.

**2. ticktockshield.runLED(byte speed, byte direction);**

Esta función barre 4 LEDs en la dirección que elijas.

* speed: la velocidad de flujo del LED de 1(más lento) a 10(más rápido).
* direction: dirección de flujo del LED, puede ser LEFT_TO_RIGHT o RIGHT_TO_LEFT.

Ejemplo:

```cpp
/*Run the 4 LEDs from left to right*/
ticktockshield.runLED(1,LEFT_TO_RIGHT);
```

**3. ticktockshield. turnOnLED();**
Enciende los 4 LEDs.

**4. ticktockshield. turnOffLED();**
Apaga los 4 LEDs.

**5. setLed(unsigned char led_status, int pinLED);**
La función se utiliza para encender o apagar un LED individual.

* led_status: puede ser LED_ON o LED_OFF.
* pinLED: puede ser uno de LED_CLOCK_ADJUST，LED_ALARM_ADJUST，LED_BRIGHT_ADJUST，LED_ALARM_ENABLE.

Ejemplo:

```cpp
void TickTockShield::turnOffLED()
{
 setLed(LOW,LED_CLOCK_ADJUST);
 setLed(LOW,LED_ALARM_ADJUST);
 setLed(LOW,LED_BRIGHT_ADJUST);
 setLed(LOW,LED_ALARM_ENABLE);
}
```

**6. ticktockshield.alarming();**
Hace que el zumbador suene.
Ejemplo:

```cpp
/*It will sound alarm for a minute untill the "MENU" key is pressed*/
    if(ticktockshield.isAlarmEnable())
    {
      ticktockshield.alarming();
    }
```

**7. ticktockshield.turnOffAlarm();**
Apagar la alarma cuando el zumbador está sonando.

**8. ticktockshield.setAlarm(uint8_t hour,uint8_t minute,uint8_t flag_enabl);**
Establecer la hora de la alarma.

* hour: hora
* minute: minuto
* flag_enabl: bandera que restaura el estado de la alarma, puede ser 0(deshabilitada) o 1(habilitada)

Ejemplo:

```cpp
ticktockshield.setAlarm(12,0);//Yes,the alarm clock is initialized to 12:00 and the data in the EEPROM.
```

**9. ticktockshield.getAlarm();**
Lee el valor de alarma preestablecido desde la EEPROM y los almacena en las variables dadas, incluyendo la bandera de habilitación de la alarma.
Ejemplo:

```cpp
if(isFirstLoad())//if it is the first time to load the firmware?
 {
  ticktockshield.setAlarm(12,0);
  }
 else ticktockshield.getAlarm();//No,read the alarm clock stored in EEPROM
  ```

**10. ticktockshield.getTemperature();**
Obtiene la lectura del sensor de temperatura.
Ejemplo:

```cpp
/*Read the ambient temperature and display on the digital tube.*/
 ticktockshield.displayTemperature(ticktockshield.getTemperature());
```

**11. ticktockshield.displayTemperature(int8_t temperature);**
Muestra el valor de temperatura (se admiten valores negativos) en la pantalla de 7 segmentos. El carácter C representa grados celsius.
Ejemplo:

```cpp
 ticktockshield.displayTemperature(ticktockshield.getTemperature());
```

**12. ticktockshield.scanKey();**
Descubre qué tecla se presiona. Devuelve el número de pin de la tecla presionada. Y devuelve "-1" si no se presiona ninguna tecla.

```cpp
if((flag_scan_again)&&(KEY_MENU == ticktockshield.scanKey()))
      {
        ticktockshield.writeToAdjustArea();
        ticktockshield.processKey();
        system_states = SYSTEM_ADJUSTING;
      }
```

**13. ticktockshield.processKey();**
Procesa el comando que ingresas a través de las teclas. Si es una pulsación normal. Esta función hará un zumbido correspondiente a la pulsación. Si presionas la tecla "menu" por más de 3s, entonces esta función hará que Tick Tock Shield entre en modo de configuración de tiempo. Si no se presiona ninguna otra tecla después de la tecla "menu", entonces esta función hará que Tick Tock Shield salga del modo de configuración de tiempo.

**14. ticktockshield.processSystemStatus();**
Ejecuta diferentes tareas según el estado del sistema cuando es llamada. El estado del sistema puede ser "ajustar hora del reloj", "hora de alarma", "ajustar brillo del display de 7 segmentos" y "habilitar alarma".

**15. ticktockshield.writeToAdjustArea();**
Entrega la información de tiempo más reciente del modo de visualización de tiempo normal al modo de configuración de tiempo para que puedan ser utilizadas bajo el modo de configuración de tiempo.

**16. ticktockshield.writeToNormalArea();**
Entrega la información de tiempo configurada en el modo de configuración de tiempo al modo de visualización de tiempo normal.

**17. ticktockshield.writeTime();**
Escribe la información de tiempo en el chip RTC.

**18. ticktockshield.getTime();**
Lee la información de tiempo actual del RTC.

**19. ticktockshield.displayTime();**
Muestra el tiempo en el Display de 7 segmentos.

Ejemplo:

```cpp
if(ticktockshield.isAlarmEnable())
      {
        tm1636.point(POINT_ON);
        ticktockshield.displayTime();
        system_states = SYSTEM_ALARMING;
        return;
      }
```

**20. ticktockshield.display(int8_t DispData []);**
Muestra información alfanumérica en el display de 7 segmentos.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>