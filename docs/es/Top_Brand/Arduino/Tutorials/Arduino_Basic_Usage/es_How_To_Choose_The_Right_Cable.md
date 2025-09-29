---
description: Cómo Elegir El Cable Correcto
title: Cómo Elegir El Cable Correcto
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/How_To_Choose_The_Right_Cable
last_update:
  date: 02/01/2023
  author: w0x7ce

no_comments: false # for Disqus

---
<!-- ---
name: Cómo Elegir El Cable Correcto
category: Tutorial
title:  Cómo Elegir El Cable Correcto
prodimagename:
surveyurl: https://www.research.net/r/How_To_Choose_The_Right_Cable
--- -->

## Un Mal Ejemplo

Aquí presentaremos una variedad de cables que Seeed ofrece. Cuando haces una demostración, es difícil evitar hacer puentes con cables. Para ser honesto, odio hacer puentes con cables, realmente es un desastre. Pero a veces tienes que hacer puentes con cables, no puedes hacer un PCB para una aplicación sencilla.

Tenemos que admitir que hacer puentes con cables es necesario, entonces ¿por qué no elegir algunos cables correctos, para hacer nuestra demostración más ordenada?
La siguiente imagen muestra un mal ejemplo de hacer puentes con líneas.

![](https://files.seeedstudio.com/wiki/How_To_Choose_The_Right_Cable/img/How_to_choose_cable_1.jpg)

¿Sientes que es solo un desastre?

Entonces, ¡comencemos el viaje de los Cables!

## Cable Grove

El Cable Grove es el cable más común en el sistema Grove. Se utilizan para conectar un [Base Shield](https://www.seeedstudio.com/depot/base-shield-v13-p-1378.html?cPath=98_16) a un sensor, actuador o dispositivo Grove. Dado que los Shields Grove soportan conexiones a múltiples dispositivos al mismo tiempo, los proyectos pueden requerir más de un Cable Grove.

Los Cables Grove están disponibles en varias longitudes diferentes, desde 5cm (aproximadamente 2") hasta 50cm (aproximadamente 20"). Elige una longitud basada en cuánto espacio libre disponible tienes en tu área de prototipado o proyecto, o qué tan compacto necesitas empacar tus dispositivos Grove o tu sistema embebido. A continuación hay algunos enlaces directos a las páginas de productos para las varias longitudes de Cables Grove. Los Cables Grove son adecuados para conexiones punto a punto, por ejemplo conectar un Shield Grove a un dispositivo Grove. Hay otros tipos de cables Grove para otras aplicaciones.

Los Cables Grove cuentan con cuatro cables codificados por colores y dos conectores modulares tipo macho. Típicamente, un extremo se conecta al Shield Grove y el otro al dispositivo Grove. Los conectores modulares tienen llave, lo que significa que están formados de manera única, y pueden ser insertados en su conector correspondiente en el shield o dispositivo de una sola manera. Cuando conectes los conectores del Cable Grove en un shield o dispositivo, asegúrate de ejercer suficiente presión para bloquear los dos en su lugar.

Los Cables Grove están cableados directamente. Es decir, el pin 1 en el conector A está conectado al pin 1 en el conector B, el pin 2 al pin 2, y así sucesivamente. Los cables también están codificados por colores. El pin 1 es amarillo, el pin 2 es blanco, el pin 3 es rojo, y el pin 4 es negro. Típicamente, los pines 1 y 2 son señal, por ejemplo A1/A2 o D1/D2, mientras que los pines 3 y 4 son alimentación y tierra.

- [5cm](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack.html)

- [20cm](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-5-PCs-pack.html)

- [30cm](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-30cm-Cable-5-PCs-Pack.html)

- [40cm](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-40cm-Cable-5-PCs-Pack.html)

- [50cm](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-50cm-Cable-5-PCs-Pack.html)

## Grove - Cable Ramificado

[[Enlace](https://www.seeedstudio.com/Grove-Branch-Cable-5PCs-pack.html)]

El Cable Ramificado Grove es un cable utilizado en el sistema Grove. Consiste en tres conectores de enganche tipo macho y cuatro cables codificados por colores. Los Cables Ramificados Grove pueden utilizarse para soportar la conexión en cadena de múltiples dispositivos Grove a un shield Grove. Típicamente, un extremo se conecta a un shield Grove, y el segundo y tercer conectores se conectan a dos dispositivos Grove.

Al igual que con otros miembros de la familia de cables Grove, los conectores macho tienen forma específica. Esto significa que están moldeados de manera única y encajarán de una sola manera en sus conectores correspondientes en shields y dispositivos. Además, al conectar los conectores a shields o dispositivos, asegúrese de presionar firmemente para acoplar los conectores macho del Cable Ramificado Grove con los receptáculos hembra del shield Grove o dispositivos Grove. Dado que los Cables Ramificados Grove tienen pestañas de enganche (a veces denominadas "hebillas" o "cables con hebilla"), cuando la pestaña se cierra, escuchará un pequeño sonido y debería ver la pestaña cerrarse sobre su parte correspondiente.

Estas pestañas (o hebillas) mejoran las conexiones, y son especialmente útiles en entornos de alta vibración o producción, ya que se debe usar cierta fuerza al desconectar el cable. Al mover su dispositivo Grove, o cambiarlo, también debe aplicar un poco de presión para liberar la pestaña del conector del Cable Ramificado Grove, y luego tirar para retirarlo del receptáculo o socket.

Use cuidado adicional si conecta múltiples dispositivos usando el Cable Ramificado Grove. Tenga en cuenta que el pin analógico o digital del Shield Grove será compartido por ambos dispositivos Grove. Tales configuraciones pueden ser inapropiadas para dos dispositivos analógicos. Usar un Cable Ramificado Grove para conectar un dispositivo Grove analógico y uno digital puede no funcionar en absoluto.

![](https://files.seeedstudio.com/wiki/How_To_Choose_The_Right_Cable/img/Grove-Branch_Cable-5PCs_pack-.jpg)

Las aplicaciones de ejemplo incluyen:

- Conectar o encadenar dos o más dispositivos I2C. Se pueden usar múltiples cables ramificados para extender buses I2C.

- Conectar dos dispositivos que necesitan funcionar al mismo tiempo. Por ejemplo, un [LED](https://www.seeedstudio.com/Grove-LED-Pack-p-4364.html) y un [Relé](https://www.seeedstudio.com/Grove-Relay.html) podrían conectarse a un Shield Grove usando un solo Cable Ramificado Grove. Entonces sería posible encender o apagar tanto el LED como el Relé simultáneamente ya que los dos dispositivos serían controlados por un solo pin digital.

## Grove - Cable Ramificado para Servo

[[Enlace](https://www.seeedstudio.com/Grove-Branch-Cable-for-Servo-5PCs-pack.html)]

Los Cables Ramificados Grove para Servos son otro tipo de Cable Grove, y se utilizan principalmente para conectar uno o dos servos a su proyecto. Consisten en tres conectores: un conector macho de cuatro pines con forma específica adecuado para conectar a un Shield Grove, y dos conectores tipo poste macho de tres pines. En esta configuración, la alimentación y tierra (pines 3 y 4 del macho de cuatro pines) se llevan a ambos conectores macho de tres pines. El Pin 1 (amarillo) del conector de cuatro pines se conecta a uno de los pines del Arduino capaz de PWM, y se lleva a uno de los conectores de poste macho de tres pines. El Pin 2 (cable blanco) del conector de cuatro pines también se conecta a un segundo pin capaz de PWM del Arduino, y se lleva al segundo conector de poste macho de tres pines.

El conector de cuatro pines con forma específica del Cable Ramificado Grove para Servos usualmente se conectará a un socket digital del Shield Grove como D2-D9. Al conectar servos, tome nota del color del cable PWM digital (amarillo o blanco) para saber qué pin digital corresponde a la entrada del servo.

Note que el Arduino UNO soporta PWM en los pines 3, 5, 6, 9, 10, y 11. En el Arduino Mega, funciona en los pines 2 - 13 y 44 - 46. Las placas Arduino más antiguas con un ATmega8 solo soportan analogWrite() en los pines 9, 10, y 11.

Aquí hay un enlace a algunos de nuestros [Servos](https://www.seeedstudio.com/catalogsearch/result/?q=servos).

![](https://files.seeedstudio.com/wiki/How_To_Choose_The_Right_Cable/img/4pinto2x3pin500.jpg)

## Grove a Cable Hembra de 4 Pines

Puedes usarlo para:

- Conectar dispositivos Grove a otros MCUs, como cuando quieres conectar [Grove - Sensor de Luz](https://www.seeedstudio.com/Grove-Light-Sensor-p-746.html) a [Raspberry Pi](http://www.raspberrypi.org/).

- Usar Base Shield para controlar algún dispositivo que no sea grove

![](https://files.seeedstudio.com/wiki/How_To_Choose_The_Right_Cable/img/4p254.jpg)

## Algunos Otros Cables

Hay algunos otros cables para diferentes usos, haz clic [aquí](https://www.seeedstudio.com/catalogsearch/result/?q=Cables) para encontrar más información.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
