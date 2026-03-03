---
description: Guía para Codecraft usando Arduino
title: Guía para Codecraft usando Arduino
keywords:
- Arduino
- Tutorials
- Codecraft_Platform_for_Arduino
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Guide_for_Codecraft_using_Arduino
last_update:
  date: 2/15/2023
  author: jianjing Huang
---

# Guía para Codecraft usando Arduino

Codecraft es un software de programación basado en Scratch3.0 y soporta tanto lenguajes de programación gráficos como de texto. Es una herramienta de software versátil para la educación STEM. Con Codecraft, los niños pueden diseñar historias, juegos y animaciones atractivas, y usar varios kits electrónicos que CH Maker Ed y Seeedstudio proporcionan para crear aplicaciones inteligentes interactivas. Además, cuando estés listo, siempre puedes convertir los bloques de código a Arduino, Python o JavaScript para aprender más sobre los lenguajes más populares.

Hay 2 modos en Codecraft que son el Modo Escenario y el Modo Dispositivo. En el Modo Escenario, los usuarios pueden controlar un objeto que se llama "sprite" usando bloques de código. También, este modo puede usarse para ayudar a los estudiantes a aprender sobre formas, aritmética y también otras áreas de las matemáticas.

En el modo Dispositivo, los usuarios pueden conectarse con un Grove Zero o un Arduino para construir sus proyectos geniales simplemente arrastrando y soltando bloques de código en el IDE.
LE

## Codecraft

### Bloques en modo dispositivo

Aquí están los principales tipos de bloques usados en Codecraft.

**Bloques de Pila**

![stack blocks](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/p1.png)

Los Bloques de Pila son los bloques que realizan los comandos principales. Tienen forma de muesca en la parte superior y una protuberancia en la parte inferior — así los bloques pueden colocarse arriba y abajo de ellos.

**Bloques Booleanos**

![boolean blocks](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/p2.png)

Los bloques booleanos son las condiciones - son verdaderos o falsos. Por ejemplo, preguntarle a una computadora: "¿Es 2+2=4?", y te diría "Sí" o "No". Los bloques booleanos tienen forma hexagonal.

**Bloques Reporteros**

![reporter blocks](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/p3.png)

Los bloques reporteros son los valores. Los bloques reporteros pueden contener números y cadenas. Es como preguntarle a un amigo, por ejemplo, "¿Cuánto es 2+2?", y responderían "4". No son solo ecuaciones sin embargo, puede reportar una variable, por ejemplo, "¿Cuál es tu edad?". Pueden responder: "15". Tiene forma con bordes redondeados.

**Bloques C**

![c blocks](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/p4.png)

Los bloques C son bloques que toman la forma de "C". También conocidos como "bloques envolventes", estos bloques hacen bucle con los bloques dentro de las C o verifican si una condición es verdadera. Hay cinco bloques C, y pueden encontrarse en la categoría Control. Los bloques C pueden tener una protuberancia en la parte inferior, o estar tapados.

**Bloques Booleanos de Salida**

![output boolean blocks](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/p5.png)

Los Bloques Booleanos de Salida son bloques de forma hexagonal que verifican si una condición es "verdadera" o "falsa" y realizan una operación una vez que se cumple la condición. Estos bloques pueden colocarse dentro de Bloques Booleanos y bloques C.

### Grove Compatible

Por favor consulta la [Lista de Compatibilidad CodeCraft Grove](https://wiki.seeedstudio.com/es/Codecraft_Grove_Compatible_List/) para confirmar si tu Grove es compatible.

### Tutorial Básico

**Paso 1. Agregar Soporte para Arduino**

Codecraft puede soportar tanto Grove Zero como Arduino Uno/Mega, así que antes de usar Codecraft con Arduino, necesitas agregar soporte para Arduino.

Por favor ingresa a [Codecraft](https://ide.chmakered.com/), y haz clic en "Add device" en la barra lateral izquierda, luego elige "Arduino Uno/Mega".

![add device](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/add_device.png)

**Paso 2. Instalar Codecraft Assistant**

Codecraft Assistant puede ayudarte a subir código en Codecraft a Arduino, por favor consulta [CH MAKER Ed-Documents](https://ide.tinkergen.com/download/en/#:~:text=Mac%20v2.6.4.25-,Codecraft%20Assistant,-Codecraft%20Assistant%20is) para descargarlo e instalarlo.

**Paso 3. Procedimiento Principal de Arduino**

Generalmente, el procedimiento principal de Arduino incluye dos subprocedimientos, los llamamos `setup` y `loop`. El código en `setup` se ejecutará una vez cuando Arduino se encienda, y se ejecutará en `loop` repetidamente.

El Bloque de Procedimiento Principal está incluido en la pestaña Start a la izquierda, puedes usar el mouse para arrastrarlo al área de trabajo.

![main procedure](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/main_procedure.png)

**Paso 4. Parpadear un LED**

Usualmente aprendemos Arduino desde hacer parpadear un LED, y hay un LED integrado en las placas Arduino, que está conectado al pin D13 de Arduino.

El Bloque LED puede encontrarse en la pestaña Grove Digital, arrástralo al procedimiento `loop`, y se combinarán automáticamente.

Cambia el Pin LED de D2 a D13 para que pueda controlar el LED en el pin D13, luego arrastra otro Bloque LED debajo de él, y cambia ON a OFF. El procedimiento principal puede verse así:

![blink led](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/blink_led.png)

Para ver el LED parpadeando, deberíamos agregar un intervalo entre el encendido y apagado del LED. El Bloque Delay puede encontrarse en la pestaña Control, se usa para hacer una pausa. Arrastra dos Bloques Delay entre los dos Bloques LED, y establece el intervalo a 1000ms (1000ms = 1s).

![blink demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/blink_demo.png)

Ahora el programa está completo.

**Paso 5. Subir a Arduino**

Podemos subir el programa completo a Arduino para hacerlo efectivo, así que por favor conecta tu Arduino a tu PC. Puedes encontrar el número de puerto serie de Arduino en el Administrador de Dispositivos, recuérdalo para uso futuro.

Ahora haz clic en upload en la esquina inferior derecha de Codecraft, elige el número de puerto serie de Arduino. Confírmalo y espera un momento, verás un LED parpadeando en Arduino.

![upload](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/upload.png)

## Grove Kit de Inicio para Arduino

Las siguientes 10 lecciones te ayudarán a familiarizarte más con el uso de Codecrft. Los módulos Grove en estas lecciones se pueden encontrar en Grove - Kit de Inicio para Arduino.

### Lección 1. Usando Grove - LCD RGB Backlight

![Grove - LCD RGB Backlight](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/grove_lcd.jpg)

El Grove - LCD RGB Backlight soporta visualización de texto, usando caracteres definidos por el usuario. Te permite configurar el color de la retroiluminación, usando la interfaz Grove simple y concisa. Utiliza I2C como método de comunicación con tu Arduino. Así, el número de pines requeridos para el intercambio de datos y control de retroiluminación se reduce de ~10 a 2, dejando más capacidad de E/S para otras tareas desafiantes.

![lcd color block](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/lcd_color_block.png)

El bloque "LCD RGB setColor" puede usarse para configurar el color de retroiluminación del LCD desde valores R, G y B. Se puede encontrar en la pestaña Grove I2C.

![lcd print block](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/lcd_print_block.png)

El bloque "LCD RGB print" puede usarse para imprimir una cadena al LCD en una ubicación específica, se puede encontrar en la pestaña Grove I2C.

**Objetivo**

Cambiar el color de retroiluminación del LCD a un color que te guste, e imprimir "hello, world!" y el tiempo de ejecución del sistema en él.

**Hardware**

**Paso 1.** Usando un cable Grove conecta Grove - LCD Backlight al puerto I2C del Seeeduino. Si estás usando Arduino, por favor aprovecha un Base Shield.

**Paso 2.** Conecta Seeedino/Arduino a tu PC mediante un cable USB.

**Software**

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), añade soporte para Arduino, y arrastra un procedimiento principal al área de trabajo.

**Paso 2.** Arrastra un bloque "LCD RGB setColor" y un bloque "LCD RGB print" al subprocedimiento de configuración, deja que se combinen automáticamente.

![lcd_setup](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/lcd_setup.png)

Cambia los valores R, G y B en el bloque setColor, luego deja que el bloque print imprima "hello, world!" en la primera columna de la primera línea.

**Paso 3.** Arrastra otro bloque "LCD RGB print" al subprocedimiento de bucle, cambia su fila y columna a 2 y 1. Luego arrastra un bloque "System running time" a él, que se puede encontrar en la pestaña Input.

El bloque "System running time" devuelve el tiempo desde que el Seeeduino/Arduino se encendió hasta ahora en milisegundos, si quieres obtener ese tiempo en segundos, puedes dividirlo por 1000. El bloque de división se puede encontrar en la pestaña Operators.

![lcd_demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/lcd_demo.png)

:::tip
Cuando el código termine de subirse, puedes ver que el color de retroiluminación del LCD cambia al que configuraste, y "hello, world!" y el tiempo de ejecución del sistema se muestran en él.
:::

### Lección 2. Usando Grove - Relay

![Grove - Relay](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/grove_relay.jpg)

¡El Relay es una herramienta útil para amplificar la capacidad de control de tu Arduino! Alimenta la señal de control a través de la interfaz Grove y el relé abre o cierra el circuito externo que está conectado a los terminales de tornillo. ¡El voltaje del circuito externo puede llegar hasta 220V! Así que toma este relé y comienza algunos proyectos realmente desafiantes!

![relay block](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/relay_block.png)

El bloque Relay puede usarse para controlar el Relay para encenderlo o apagarlo, se puede encontrar en la pestaña Grove Digital.

**Objetivo**

Usar un Grove - Button para controlar un Grove - Relay, cuando se presione el botón, encender el relé. De lo contrario, apagar el relé.

**Hardware**

![relay demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/relay_demo.jpg)

**Paso 1.** Usando dos cables Grove conecta un Grove - Button al puerto D3, conecta un Grove - Relay al puerto D8 en un Base Shield.

**Paso 2.** Conecta el Base Shield a tu Seeeduino/Arduino.

**Paso 3.** Conecta Seeeduino/Arduino a tu PC mediante un cable USB.

**Software**

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), añade soporte para Arduino, y arrastra un procedimiento principal al área de trabajo.

**Paso 2.** Crea una variable para almacenar el estado del botón. Ve a la pestaña Variables, haz clic en el botón "Make a Variable", y nombra la variable que crearemos, como buttonState.

![create variable](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/create_variable.png)

Haz clic en OK, ahora el bloque buttonState apareció en la pestaña Variables.

**Paso 3.** Arrastra el bloque "set buttonState to 0" al subprocedimiento de bucle, y arrastra el bloque Button a él.

![button variable](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/relay_buttonState.png)

**Paso 4.** Necesitamos encender el relé cuando se presione el botón, de lo contrario apagarlo. Así que necesitamos un bloque "if...then...else" en la pestaña Control y un bloque Equal en la pestaña Operator, arrástralos al subprocedimiento de bucle, y deja que se combinen con la variable buttonState.

![relay if](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/relay_if.png)

**Paso 5.** Finalmente arrastra el bloque Relay a ellos, sube a Arduino, todo listo.

![relay demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/relay_demo.png)

:::tip
Cuando el código termine de subirse, si presionas el botón, el relé se encenderá. De lo contrario, el relé se apagará.
:::

### Lección 3. Usando Grove - Sound Sensor

![Grove - Sound Sensor](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/grove_sound.jpg)

El módulo Sound sensor es un micrófono simple. Basado en un amplificador LM358 y un micrófono electret, puede usarse para detectar el nivel de sonido en el ambiente.

![sound block](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/sound_block.png)

El bloque Sound puede usarse para detectar el tamaño del sonido en el ambiente, se puede encontrar en la pestaña Grove Analog.

**Objetivo**

Monitorear el nivel de sonido en el ambiente. Si es demasiado fuerte, hacer parpadear un LED como alarma.

**Hardware**

![sound demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/sound_demo.jpg)

**Paso 1.** Usando dos cables Grove, conecta un Grove - Sound Sensor al puerto A0, conecta un Grove - Red LED al puerto D7 en un Base Shield.

**Paso 2.** Conecta el Base Shield a tu Seeeduino/Arduino.

**Paso 3.** Conecta Seeeduino/Arduino a tu PC mediante un cable USB.

**Software**

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), añade soporte para Arduino, y arrastra un procedimiento principal al área de trabajo.

**Paso 2.** Por favor consulta la sección "Grove - Relay" para crear una variable que almacene el tamaño del sonido, luego usa el bloque "if...then" en la pestaña Control para determinar si el tamaño del sonido excede el umbral.

![sound loop](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/sound_loop.png)

**Paso 3.** Si el tamaño del sonido excede el umbral, haz parpadear el LED.

![sound demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/sound_demo.png)

:::tip
Cuando el código termine de cargarse, si el sonido en el ambiente es demasiado fuerte, el LED estará parpadeando.
:::

### Lección 4. Usando Grove - Touch Sensor

![Grove - Touch Sensor](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/grove_touch.jpg)

El Grove - Touch Sensor te permite reemplazar la presión en un botón con contacto en una superficie de detección. Puede detectar el cambio en capacitancia cuando un dedo está cerca. Así que, ya sea que tu dedo toque la almohadilla directamente o simplemente se mantenga cerca de ella, el Grove - Touch Sensor producirá una salida HIGH.

![touch block](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/touch_block.png)

El bloque Touch puede usarse para leer el estado del toque, se puede encontrar en la pestaña Grove Digital.

**Objetivo**

Usar un Grove - Touch Sensor para controlar Grove - Red LED. Cuando el sensor sea tocado, encender el LED, de lo contrario apagar el LED.

**Hardware**

**Paso 1.** Usando dos cables Grove, conecta Grove - Touch Sensor al puerto D3, conecta Grove - Red LED al puerto D7 en Base Shield.

**Paso 2.** Conecta el Base Shield a tu Seeeduino/Arduino.

**Paso 3.** Conecta Seeeduino/Arduino a tu PC mediante un cable USB.

**Software**

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), añade soporte para Arduino, y arrastra un procedimiento principal al área de trabajo.

**Paso 2.** El programa se parece más al programa en la sección "Grove - Relay", y podemos construirlo sin variables.

![touch demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/touch_demo.png)

:::tip
Cuando el código termine de cargarse, si el sensor es tocado, el LED se encenderá. De lo contrario el LED se apagará.
:::

### Lección 5. Usando Grove - Rotary Angle Sensor

![Grove - Rotary Angle Sensor](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/grove_rotary.jpg)

El potenciómetro Grove produce una salida analógica entre 0 y VCC (3.3 o 5 VDC). El rango angular es de 300 grados, con un cambio lineal en el valor. El valor de resistencia es de 10k ohms, perfecto para uso con Arduino. Esto también puede conocerse como un "sensor de ángulo rotatorio".

![rotary block](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/rotary_block.png)

El bloque Rotation puede usarse para leer el estado de la rotación, se puede encontrar en la pestaña Grove Analog.

**Objetivo**

Mostrar la rotación del Grove - Rotary Angle Sensor en Serial.

**Hardware**

![rotary demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/rotary_demo.jpg)

**Paso 1.** Usando un cable Grove, conecta Grove - Rotary Angle Sensor al puerto A0 en Base Shield.

**Paso 2.** Conecta el Base Shield a tu Seeeduino/Arduino.

**Paso 3.** Conecta Seeeduino/Arduino a tu PC mediante un cable USB.

**Software**

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), añade soporte para Arduino, y arrastra un procedimiento principal al área de trabajo.

**Paso 2.** Antes de usar el puerto Serial, debemos establecer su velocidad de baudios, arrastra el bloque "Serial baud rate" de la pestaña Serial Port al subprocedimiento setup, y selecciona 9600 bps.

![rotary setup](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/rotary_setup.png)

**Paso 3.** El bloque "Serial println" puede usarse para mostrar una nueva línea en el puerto serial, podemos combinarlo con el bloque Rotation.

![rotary demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/rotary_demo.png)

**Paso 4.** Después de que el programa se cargue, haz clic en el botón Connect a la izquierda de Codecraft, y elige el puerto de tu Arduino, luego Connect.

![connect serial](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/connect_serial.png)

![serial monitor](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/serial_monitor.png)

:::tip
Rota el Rotary Angle Sensor, puedes ver cambios de datos en el monitor.
:::

### Lección 6. Usando Grove - LED

![Grove - LED](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/grove_led.jpg)

Grove - LED está diseñado para principiantes de Arduino/Seeeduino para monitorear controles desde puertos digitales. Puede montarse en la superficie de tu caja o escritorio fácilmente y usarse como lámpara piloto para energía o señal.

![led block digital](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/led_block_digital.png)

![led block analog](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/led_block_analog.png)

El bloque LED puede usarse para actuar como SALIDA Digital o SALIDA Analógica, cuando actúa como SALIDA Analógica, puedes controlar su brillo.

**Objetivo**

Hacer un LED que respire.

**Hardware**

![led demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/led_demo.jpg)

**Paso 1.** Usando un cable Grove, conecta Grove - Red LED al puerto D3 en un Base Shield.

**Paso 2.** Conecta el Base Shield a tu Seeeduino/Arduino.

**Paso 3.** Conecta Seeeduino/Arduino a tu PC mediante un cable USB.

**Software**

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), añade soporte para Arduino, y arrastra un procedimiento principal al área de trabajo.

**Paso 2.** Es muy simple hacer que un LED respire usando el bloque LED en la pestaña Grove Analog.

Además de eso, también necesitamos el bloque "contar con...desde...hasta...paso" en la pestaña Control para calcular el brillo del LED. Arrástralo y combínalo con el subprocedimiento de bucle.

![led count](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/led_count.png)

**Paso 3.** Asegúrate de que la variable i vaya desde 0 (oscuridad) hasta 255 (más brillante), luego añade el bloque "LED" y el bloque "Delay ms", y establece el brillo del LED a la variable i.

![led loop](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/led_loop.png)

**Paso 4.** El programa anterior hace que el LED vaya de más oscuro a más brillante, ahora podemos añadir un programa para que vaya de más brillante a más oscuro.

![led demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/led_demo.png)

:::tip
Cuando el código termine de cargarse, verás el LED respirando.
:::

### Lección 8. Usando Grove - Sensor de Luz

![Grove - Light Sensor](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/grove_light.jpg)

El sensor de luz, también conocido como resistor dependiente de luz (LDR). Típicamente, la resistencia del sensor de luz disminuirá cuando la intensidad de luz ambiental aumente.

![light block](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/light_block.png)

El bloque de luz puede usarse para detectar la intensidad de luz en el ambiente a través de ENTRADA Analógica, se puede encontrar en la pestaña "Grove Analog".

**Objetivo**

Construir un programa como casa inteligente, cuando la intensidad de luz caiga por debajo del umbral preestablecido, encender el LED.

**Hardware**

![light demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/light_demo.jpg)

**Paso 1.** Usando dos cables Grove conecta un Grove - Red LED al puerto D7, conecta un Grove - Light Sensor al puerto A0 en un Base Shield.

**Paso 2.** Conecta el Base Shield a tu Seeeduino/Arduino.

**Paso 3.** Conecta Seeeduino/Arduino a tu PC mediante un cable USB.

**Software**

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), añade soporte para Arduino, y arrastra un procedimiento principal al área de trabajo.

**Paso 2.** Hemos usado el bloque "if" en la sección Grove - Touch Sensor, así que no es difícil construir este programa.

![lighe demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/light_demo.png)

:::tip
Cuando el código termine de cargarse, bloquea la luz al Sensor de Luz, el LED se encenderá.
:::

### Lección 9. Usando Grove - Button

![Grove - Button](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/grove_button.jpg)

Esta nueva versión del módulo Grove de botón contiene un botón independiente, que está configurado con resistor pull-down – listo para usar con nuestros microcontroladores como entrada digital. El botón señala el cable SIG, NC no se usa en este módulo Grove.

![button block](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/button_block.png)

El bloque de botón puede usarse para detectar el estado de un pulsador momentáneo a través de ENTRADA Digital, se puede encontrar en la pestaña Grove Digital.

**Objetivo**

Usar un Grove - Button para controlar un Grove - Red LED. Cuando el botón se presione, encender el LED, de lo contrario apagar el LED.

**Hardware**

![button demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/button_demo.jpg)

**Paso 1.** Usando dos cables Grove conecta Grove - Button al puerto D3, conecta Grove - Red LED al puerto D7 en un Base Shield.

**Paso 2.** Conecta el Base Shield a tu Seeeduino/Arduino.

**Paso 3.** Conecta Seeeduino/Arduino a tu PC mediante un cable USB.

**Software**

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), añade soporte para Arduino, y arrastra un procedimiento principal al área de trabajo.

**Paso 2.** Hemos usado Button en la sección Grove - Relay, ahora cambiemos el Relay por un LED, y usemos Button para controlarlo.

![button demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/button_demo.png)

:::tip
Cuando el código termine de cargarse, si el botón se presiona, enciende el LED. De lo contrario apaga el LED.
:::

### Lección 10. Usando Grove - Servo

![Grove - Servo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/grove_servo.png)

Este es un actuador cuya posición puede controlarse con precisión.

![servo block](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/servo_block.png)

El bloque servo puede usarse para controlar el servo asignando la cantidad de rotación y el retraso entre cada rotación, se puede encontrar en la pestaña Grove Analog.

**Objetivo**

Usar un Grove - Rotary Angle Sensor para controlar un Grove - Servo.

**Hardware**

![servo demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/servo_demo.jpg)

**Paso 1.** Conecta Grove - Servo a un Base Shield, y usando un cable Grove conecta Grove - Rotary Angle Sensor al puerto A0 en el Base Shield.

**Paso 2.** Conecta el Base Shield a tu Seeeduino/Arduino.

**Paso 3.** Conecta Seeeduino/Arduino a tu PC mediante un cable USB.

**Software**

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), añade soporte para Arduino, y arrastra un procedimiento principal al área de trabajo.

**Paso 2.** Podemos usar el Rotary Angle Sensor para controlar el Servo, pero como el valor del bloque "Rotation" es de 0 a 1023, necesitamos dividir por un número, para que esté en 0 a 180.

![servo demo](https://files.seeedstudio.com/wiki/Guide_for_Codecraft_using_Arduino/img/servo_demo.png)

:::tip
Cuando el código termine de cargarse, rota el Rotary Angle Sensor, el ángulo del motor Servo cambiará.
:::

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
