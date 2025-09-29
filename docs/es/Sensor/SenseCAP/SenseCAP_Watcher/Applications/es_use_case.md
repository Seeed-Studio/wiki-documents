---
description: Proporciona una visión en profundidad de las diversas aplicaciones y casos de uso para Watcher, mostrando su versatilidad y potencial en diferentes escenarios de monitoreo.
title: Caso de Uso
image: https://files.seeedstudio.com/wiki/watcher_getting_started/50.jpg
slug: /es/use_case
sidebar_position: 1
last_update:
  date: 07/08/2024
  author: Citric
---

# Qué hace SenseCAP Watcher

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/50.jpg" style={{width:800, height:'auto'}}/></div>

Prepárate para embarcarte en un viaje que redefinirá tu percepción de los espacios inteligentes. Watcher, un agente de IA física revolucionario, se integra perfectamente en tu entorno, transformando la forma en que interactúas y experimentas el mundo que te rodea. Al aprovechar el poder de tecnologías avanzadas como el reconocimiento facial, la detección de objetos y la detección multi-escenario, Watcher crea espacios más inteligentes, más intuitivos y altamente adaptables.

En esta wiki, exploraremos tres aplicaciones transformadoras que muestran el vasto potencial de Watcher como agente de IA física. Estas aplicaciones no solo demostrarán las capacidades de Watcher, sino que también te inspirarán a visualizar y desarrollar tus propias soluciones innovadoras.

- **Aplicación Watcher #1: Dar Direcciones a los Visitantes**: Observa cómo Watcher revoluciona la experiencia del visitante sirviendo como una guía inteligente. Con sus capacidades de reconocimiento facial, Watcher puede identificar visitantes y proporcionarles direcciones personalizadas y asistencia, mejorando la eficiencia y accesibilidad de tu espacio.

- **Aplicación Watcher #2: El Cajero Virtual para tu Floristería**: Descubre cómo Watcher puede transformar el panorama minorista actuando como cajero virtual en floristerías no tripuladas. Al detectar cuando los clientes están listos para realizar una compra, Watcher puede mostrar rápidamente códigos QR para un proceso de auto-pago sin problemas, asegurando un proceso de transacción fluido y seguro mientras optimiza las operaciones de la tienda.

- **Aplicación Watcher #3: Tu Sensor Todo-en-Uno - Detección de Caídas, Monitoreo de Mascotas y Alerta de Propiedad Perdida**: Desbloquea la versatilidad de Watcher como una solución de sensor todo-en-uno. Desde detectar caídas hasta monitorear mascotas y alertarte sobre propiedades perdidas, Watcher se adapta a varios escenarios de cola larga, creando entornos más seguros, más protegidos y altamente responsivos.

Mientras te adentras en estas aplicaciones, obtendrás una comprensión más profunda de cómo Watcher, como agente de IA física, puede remodelar y optimizar los espacios que habitamos. Ya seas un innovador, propietario de un negocio, o simplemente alguien apasionado por el futuro de la tecnología, esta wiki te equipará con el conocimiento e inspiración necesarios para aprovechar las capacidades de Watcher y crear espacios más inteligentes y más adaptables.

¡Únete a nosotros en este viaje transformador mientras redefinimos los límites de los entornos inteligentes con Watcher!


## Demo 1. Dar Direcciones a los Visitantes

En esta aplicación, exploraremos cómo Watcher puede ser utilizado para mejorar la experiencia del visitante, particularmente en el contexto de guiar al personal de entrega en un entorno de villa. Al colocar estratégicamente dos dispositivos Watcher y configurarlos con comandos específicos, podemos crear un proceso fluido y eficiente para dirigir visitantes y asegurar la entrega precisa de paquetes.

### Paso 1. Colocación del Primer Watcher

El primer Watcher debe instalarse en la entrada de la villa, en una ubicación que sea fácilmente visible para el personal de entrega. Este Watcher servirá como el punto inicial de contacto, reconociendo la presencia de visitantes que llevan paquetes y proporcionándoles instrucciones claras sobre dónde depositar sus entregas.

### Paso 2. Colocación del Segundo Watcher

El segundo Watcher debe posicionarse en el área designada de almacenamiento de paquetes dentro de la villa. Este Watcher será responsable de confirmar la colocación precisa de los paquetes y expresar gratitud al personal de entrega por su servicio.

### Paso 3. Configurar Comandos para el Primer Watcher

Usando la APP SenseCraft, emite el siguiente comando al primer Watcher:

**Si alguien está sosteniendo un paquete, por favor di, "Hola, mensajero, los paquetes por favor llévalos a la mesa de la derecha, 3 metros hacia adelante, gracias."**

Este comando asegura que el Watcher proporcione direcciones claras y concisas al personal de entrega, guiándolos al área apropiada de almacenamiento de paquetes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/51.png" style={{width:600, height:'auto'}}/></div>

### Paso 4. Configurar Comandos para el Segundo Watcher

Usando la APP SenseCraft, emite el siguiente comando al segundo Watcher:

**Si alguien pone un paquete en la mesa, di "gracias".**

Este comando permite al segundo Watcher reconocer la colocación exitosa del paquete y expresar aprecio al personal de entrega por su esfuerzo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/52.png" style={{width:600, height:'auto'}}/></div>

La Aplicación Watcher #1 demuestra cómo el despliegue estratégico de dispositivos Watcher, combinado con comandos cuidadosamente elaborados, puede mejorar significativamente la experiencia del visitante y agilizar el proceso de entrega de paquetes en un entorno de villa.

Esta aplicación sirve como testimonio de la versatilidad y potencial de Watcher como agente de IA física, mostrando su capacidad para transformar y optimizar varios aspectos de nuestras vidas diarias e interacciones dentro de espacios inteligentes.

## Demo 2. El Cajero Virtual para Tu Floristería

En esta aplicación, exploraremos cómo Watcher puede revolucionar la experiencia de compra en una floristería actuando como un cajero virtual. Al aprovechar las capacidades de detección de objetos de Watcher y la APP SenseCraft, podemos crear un proceso de autopago fluido y eficiente, mejorando la experiencia del cliente y optimizando las operaciones de la tienda.

### Paso 1. Generar un Código QR de Pago

Comienza generando un código QR de pago usando una plataforma como PayPal u otros proveedores de pago preferidos. Este código QR servirá como el elemento clave en el proceso de autopago, permitiendo a los clientes realizar fácilmente pagos por sus compras de flores.

### Paso 2. Subir el Código QR a Watcher a través de la APP SenseCraft

Accede a la APP SenseCraft y navega a la sección **Animation**. Localiza el **Watching Space** y reemplaza la animación existente con el código QR de pago generado. Este paso asegura que Watcher mostrará el código QR cuando se active, habilitando un proceso de autopago fluido.

### Paso 3. Montar Watcher en un Trípode

Para asegurar un rendimiento óptimo y estabilidad, monta Watcher en un trípode usando un Soporte de Trípode con Rosca de 1/4. Esta configuración permite un fácil ajuste de la posición y ángulo de Watcher, asegurando una visibilidad clara del área de pago.

### Paso 4. Posicionar Watcher en el Mostrador de Pago

Coloca el Watcher montado en trípode en el mostrador de pago, mirando hacia el área donde se espera que los clientes se acerquen para el pago. Asegúrate de que Watcher tenga una vista clara del mostrador y pueda detectar fácilmente a los clientes sosteniendo flores.

### Paso 5. Configurar la Tarea de Watcher a través de la APP SenseCraft

Usando la APP SenseCraft, emite el siguiente comando a Watcher:

**Cuando detectes a una persona sosteniendo flores y mirándote, di "Por favor escanea el código QR para completar tu compra."**

Este comando instruye a Watcher para monitorear clientes sosteniendo flores, mostrar el código QR de pago subido, y pedirles que inicien el proceso de autopago escaneando el código.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/53.png" style={{width:600, height:'auto'}}/></div>

### Paso 6. Implementar el Proceso de Autopago

Al detectar un cliente sosteniendo flores, Watcher automáticamente mostrará el código QR de pago y activará el mensaje de voz preconfigurado, guiando al cliente a escanear el código para el pago.

Una vez que el cliente escanee el código QR, será dirigido a una interfaz de pago móvil donde puede completar la transacción usando su método de pago preferido.


La Aplicación #2 de Watcher muestra el potencial transformador de Watcher como cajero virtual en un entorno de floristería. Al combinar las capacidades de detección de objetos de Watcher con la APP SenseCraft, los propietarios de floristerías pueden crear una experiencia de autopago fluida y eficiente, mejorando la satisfacción del cliente y optimizando las operaciones de la tienda.

Esta aplicación demuestra la versatilidad y adaptabilidad de Watcher, destacando su potencial para revolucionar varios entornos de venta al por menor. Como agente de IA físico, Watcher puede ser personalizado y configurado para satisfacer las necesidades específicas de diferentes negocios, impulsando la innovación y mejorando la experiencia general de compra.

## Demo 3. Tu Sensor Todo-en-Uno -- detección de caídas, monitoreo de mascotas y alerta de objetos perdidos

En esta aplicación, exploraremos la versatilidad y adaptabilidad de Watcher como una solución de sensor todo-en-uno, capaz de manejar una amplia gama de escenarios de cola larga. Al colocar estratégicamente múltiples dispositivos Watcher en diferentes ubicaciones y configurarlos para abordar situaciones específicas, podemos demostrar el potencial de Watcher para mejorar la seguridad, protección y conveniencia en varios entornos.

### Escenario 1: Alerta de Objetos Perdidos en la Sala de Conferencias

Paso 1: Monta el primer Watcher en la pared de la sala de conferencias usando un Soporte Giratorio de 360°, asegurando una cobertura óptima de toda la habitación.

Paso 2: Usando la APP SenseCraft, envía el siguiente comando a Watcher:

**Cuando detectes que la sala de conferencias está vacía y hay una computadora en la mesa, envía una notificación a la app.**

Esta tarea permite a Watcher monitorear la sala de conferencias y alertar a los usuarios a través de la app si alguna propiedad valiosa, como una computadora, se deja desatendida.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/54.png" style={{width:600, height:'auto'}}/></div>

### Escenario 2: Monitoreo y Disuasión de Mascotas

Paso 1: Instala el segundo Watcher en un trípode usando un Soporte de Trípode con Rosca 1/4, y posiciónalo cerca de un jarrón o cualquier área donde los gatos sean propensos a causar daños.

Paso 2: Configura la siguiente tarea usando la APP SenseCraft:

**Si detectas un gato, reproduce el mensaje de audio "Peligro, por favor mantente alejado"**

para disuadir al gato de acercarse.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/55.png" style={{width:600, height:'auto'}}/></div>

Paso 3: Ajusta el volumen de Watcher al nivel más alto para asustar efectivamente y desalentar al gato de entrar al área restringida.

### Escenario 3: Detección de Caídas en Casa de los Padres

Paso 1: Instala el tercer Watcher en la pared de la casa de los padres, asegurando que tenga una vista clara de las principales áreas de estar.

Paso 2: Asigna la siguiente tarea a través de la APP SenseCraft:

**Si detectas una persona acostada en el suelo, por favor notifícame inmediatamente.**

Esta configuración permite a Watcher monitorear posibles caídas o accidentes y alertar prontamente al usuario, asegurando una respuesta rápida y asistencia cuando sea necesario.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/56.png" style={{width:600, height:'auto'}}/></div>

La Aplicación #3 de Watcher demuestra la increíble versatilidad y adaptabilidad de Watcher como una solución de sensor todo-en-uno. Al abordar una amplia gama de escenarios de cola larga, como detección de caídas, monitoreo de mascotas y alertas de objetos perdidos, Watcher demuestra su potencial para revolucionar la seguridad, protección y conveniencia en varios entornos.

Esta aplicación destaca la capacidad de Watcher para ser personalizado y configurado para satisfacer necesidades específicas, convirtiéndolo en una herramienta invaluable para individuos, familias y empresas por igual. Como un agente de IA físico, Watcher se integra perfectamente en diferentes entornos, proporcionando monitoreo proactivo, alertas en tiempo real y tranquilidad a sus usuarios.

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

