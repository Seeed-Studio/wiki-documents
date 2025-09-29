---
description: Este artículo describe el plan de tarifas de Watcher para usar SenseCraft AI.
title: Precio y Beneficios
image: https://files.seeedstudio.com/wiki/watcher_getting_started/price_month_simpler_1.webp
slug: /es/watcher_price
sidebar_position: 3
last_update:
  date: 10/18/2024
  author: Citric
---

# Planes y Beneficios de SenseCraft AI para Watcher

En Watcher, creemos en proporcionar a los desarrolladores una estructura de precios clara y transparente para integrar inteligencia artificial en sus proyectos. Entendemos que cada desarrollador tiene requisitos únicos, por lo que ofrecemos una gama de planes de precios diseñados para satisfacer diversas necesidades y presupuestos. Para ayudarte a tomar una decisión informada, hemos delineado los aspectos clave de nuestro modelo de precios y las características específicas incluidas en cada plan.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/price_month_simpler.png" style={{width:1000, height:'auto'}}/></div>

## Nuestros Planes de Precios

<div class="table-center">
	<table align="center">
		<tr>
			<th> </th>
      <th>Local</th>
			<th>SenseCraft Estándar</th>
      <th>SenseCraft Pro</th>
		</tr>
		<tr>
			<th>Retención de Datos</th>
			<td align="center">Guardado por usuario</td>
			<td align="center">3 Meses</td>
			<td align="center">3 Meses</td>
		</tr>
		<tr>
			<th>API de Datos</th>
			<td align="center">API HTTP Local</td>
			<td align="center">MQTT/HTTP API</td>
			<td align="center">MQTT/HTTP API</td>
		</tr>
		<tr>
			<th>Análisis de Tareas</th>
			<td align="center">Ilimitado</td>
			<td align="center">Ilimitado</td>
			<td align="center">Ilimitado</td>
		</tr>
		<tr>
			<th>Análisis de Imágenes</th>
			<td align="center">Ilimitado</td>
			<td align="center">15 Minutos/Solicitud</td>
			<td align="center">20000 Solicitudes</td>
		</tr>
		<tr>
			<th>Chat con LLM</th>
			<td align="center">Ilimitado</td>
			<td align="center">200 Solicitudes/Mes</td>
			<td align="center">1000 Solicitudes</td>
		</tr>
		<tr>
			<th>Modelo TinyML y Entrenamiento de Modelos</th>
			<td align="center">Ilimitado</td>
			<td align="center">Ilimitado</td>
			<td align="center">Ilimitado</td>
		</tr>
    <tr>
			<th>Precio</th>
			<td align="center">Gratis</td>
			<td align="center">Gratis</td>
			<td align="center">Una prueba gratuita y Plan de 6.9 USD</td>
		</tr>
	</table>
</div>

:::caution
1. Los planes de pago de SenseCraft Pro están vinculados al EUI de cada dispositivo. Esto significa que si tienes cinco dispositivos que quieren usar SenseCraft Pro, necesitarás pagar por ellos por separado.

2. El servicio de facturación de SenseCraft Pro se basa en el número de Solicitudes. Cuando compres el servicio, obtendrás el número de Solicitudes proporcionadas por el servicio, en las cuales no hay fecha de vencimiento.

3. SenseCraft Pro activará automáticamente el servicio de prueba cuando tu dispositivo esté conectado a la APP SenseCraft.

4. SenseCraft Pro activa la prueba y contabiliza todas las Solicitudes en el formulario de una vez, y luego cambia automáticamente a SenseCraft Standard cuando termines de usarlo.
:::

En Watcher, creemos en empoderar a los desarrolladores con la flexibilidad y escalabilidad que necesitan para tener éxito con la integración de IA. Nuestros planes de precios están diseñados para acomodar una amplia gama de necesidades, desde experimentación casual hasta despliegue a gran escala. Elige el plan que mejor se alinee con tu intensidad de uso de IA y los requisitos de tu proyecto, y deja que Watcher te ayude a desbloquear todo el potencial de SenseCraft AI. ¡Comienza hoy y experimenta el poder de la IA en tus propios términos!

## Entendiendo Nuestro Modelo de Precios

### Almacenamiento de Datos

Todos los planes vienen con un generoso almacenamiento de datos de **3 meses**, que incluye el almacenamiento de imágenes de alarma, marcas de tiempo y conteos de alarma.

### Análisis de Tareas

El Análisis de Tareas se refiere a la capacidad de Watcher para entender e interpretar las tareas asignadas por el usuario, dividiéndolas en componentes más pequeños y accionables. Esto incluye determinar si una tarea puede ejecutarse usando modelos pequeños, identificar los modelos específicos a usar, reconocer los comportamientos a detectar y definir las acciones a tomar. Como la base de la funcionalidad de Watcher, nos esforzamos por mantener el Análisis de Tareas gratuito en todos los planes.

### Análisis de Imágenes

El Análisis de Imágenes involucra el examen avanzado de imágenes capturadas por Watcher, permitiendo la identificación de objetos, actividades y contextos dentro de las imágenes. Esta característica requiere el uso de modelos grandes y está sujeta a tarifas de uso. Una solicitud se cuenta cuando tu tarea requiere el uso de un modelo grande para análisis de imágenes.

- Si estás usando el **[Servicio LLM Puro Basado en la Nube](https://wiki.seeedstudio.com/es/getting_started_with_watcher_task/#pure-cloud-based-llm-service)**, las solicitudes se cuentan basándose en tu **Frecuencia de Captura** configurada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/llm-app.png" style={{width:1000, height:'auto'}}/></div>

- Para el **[Servicio IA Local + LLM Basado en la Nube](https://wiki.seeedstudio.com/es/getting_started_with_watcher_task/#local-ai--cloud-based-llm-service)**, una solicitud se cuenta cuando el modelo grande es invocado para reconocimiento de imágenes después de que el modelo pequeño activa una detección. Ten en cuenta que el intervalo mínimo entre solicitudes no será más corto que tu **Frecuencia de Captura** configurada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/local_llm-app.png" style={{width:1000, height:'auto'}}/></div>

El análisis de imágenes es también una de las capacidades muy importantes de Watcher. Así que cuando no tienes una suscripción a SenseCraft Pro, también garantizamos al menos un servicio de análisis de imágenes de 15 minutos para que uses.

### Chat con Modelo de Lenguaje Grande

Participar en interacciones conversacionales con nuestro poderoso Modelo de Lenguaje Grande es una característica premium que incurre en tarifas de uso. Cuando SenseCraft determina que tu conversación con Watcher es un intercambio de ida y vuelta y Watcher genera una respuesta, se cuenta como una sola solicitud.

Una vez que este conteo se agota, no es posible chatear con Watcher.

### Repositorio de Modelos, Entrenamiento y Carga

El acceso a nuestro extenso [Repositorio de Modelos](https://sensecraft.seeed.cc/ai/#/model?redirect=%2Fdevice), así como la capacidad de entrenar y cargar tus propios modelos, se proporciona de forma gratuita en todos los planes.

## ¿Cómo suscribirse?

Si necesitas suscribirte a SenseCraft Pro, entonces necesitas hacerlo dentro de la APP SenseCraft. El primer paso debería ser [vincular tu SenseCAP Watcher](https://wiki.seeedstudio.com/es/getting_started_with_watcher/#step-3-device-binding) en la APP. Actualmente, la suscripción a SenseCraft Pro solo está disponible para usuarios de SenseCAP Watcher.

Ve a la pantalla de chat de SenseCAP Watcher, haz clic en el botón de engranaje de Configuración en la esquina superior derecha, y luego cerca de la parte inferior, habrá una opción para **Suscripción**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/subscription.png" style={{width:250, height:'auto'}}/></div>

Aquí puedes ver el número de Solicitudes restantes para tu servicio de suscripción actual. Y puedes completar tu suscripción aquí. Actualmente ofrecemos tres precios diferentes para los servicios de suscripción, por favor elige diferentes planes según tu uso real.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/pay_page1.png" style={{width:250, height:'auto'}}/></div>

Una vez que hayas confirmado el plan que deseas, por favor acepta el acuerdo de servicio para proceder a la pantalla de pago.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/pay_page2.png" style={{width:250, height:'auto'}}/></div>

Actualmente la APP SenseCraft admite pagos usando Paypal. Una vez que el pago sea exitoso, verás tus Solicitudes compradas actualizadas en la página de Suscripción.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/pay_page3.png" style={{width:250, height:'auto'}}/></div>

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

