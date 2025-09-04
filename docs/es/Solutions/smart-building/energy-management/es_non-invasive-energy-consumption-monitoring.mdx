---
description: Monitoreo de energía doméstico/de oficina sin cableado y sin complicaciones
title: Monitoreo de Energía AC No Invasivo con Home Assistant
keywords:
    - CT
    - energy consumption monitoring
    - Home Assistant
slug: /es/non_invasive_ct_energy_consumption
sidebar_position: 2
last_update:
    date: 08/18/2025
    author: Spencer
---

## 1. Descripción General de la Solución

Esta guía describe una solución para implementar un sistema de medición de energía AC **no invasivo** utilizando módulos de hardware comunes y la plataforma de hogar inteligente Home Assistant.

### Objetivos y Valor

En la búsqueda moderna de gestión granular de energía y automatización del hogar inteligente, los medidores de pared tradicionales o los enchufes inteligentes tienen limitaciones claras. Un medidor de servicios públicos estándar solo proporciona un total "de grano grueso" del consumo de energía de un hogar. Aunque un enchufe inteligente puede monitorear un electrodoméstico individual, su naturaleza "invasiva" (requiere colocarse entre el dispositivo y el tomacorriente) restringe su uso, especialmente para electrodomésticos cableados permanentemente o aquellos en lugares de difícil acceso.

Esta solución está diseñada para abordar estos puntos problemáticos. Su valor principal radica en:

- **Implementación No Invasiva**: No es necesario cortar la energía o modificar los circuitos eléctricos existentes. Simplemente sujete el transformador de corriente de núcleo dividido (CT) en un **solo** cable de alimentación del electrodoméstico objetivo para comenzar la medición. Esto reduce dramáticamente la complejidad de instalación y los riesgos de seguridad.
- **Medición Granular**: Logre monitoreo de energía "a nivel de dispositivo" para electrodomésticos AC específicos como aires acondicionados, bombas de agua o impresoras 3D. Obtenga datos precisos en tiempo real, incluyendo corriente, potencia y consumo total de energía.
- **Bajo Costo y Alta Integración**: Utiliza el módulo **XIAO ESP32-C6** rentable y sensores CT estándar. Se integra perfectamente con ecosistemas IoT principales como Home Assistant a través de ESPHome, habilitando visualización de datos, automatización y alertas remotas.

### Audiencia Objetivo

Esta guía está dirigida principalmente a:

- **Entusiastas del Hogar Inteligente**: Individuos que buscan integrar datos de energía de electrodomésticos de alto consumo o críticos en Home Assistant para automatización avanzada y estrategias de ahorro de energía.
- **Desarrolladores e Integradores de Sistemas**: Profesionales que necesitan proporcionar soluciones personalizadas de monitoreo de energía a nivel de dispositivo para clientes.
- **Makers y Operadores de Talleres Pequeños**: Usuarios que desean monitorear el estado operacional y el consumo de energía de equipos como impresoras 3D y cortadoras láser.
- **Auditores de Energía e Ingenieros de Mantenimiento**: Profesionales que realizan auditorías de energía para descubrir "vampiros de energía" (alto consumo en espera) o utilizan monitoreo de corriente anormal para mantenimiento predictivo de equipos.

### Resultado Esperado

Los usuarios construirán un pipeline de datos completo desde el mundo físico hasta una aplicación digital, logrando lo siguiente:

1. **Monitoreo de Datos en Tiempo Real**: Ver corriente instantánea, potencia activa y consumo total de energía para uno o más dispositivos objetivo en tiempo real en Home Assistant o cualquier plataforma compatible con MQTT.
2. **Datos Locales o en la Nube**: Transmitir de forma segura los datos de monitoreo vía Wi-Fi a un servidor local (como una Raspberry Pi o NUC ejecutando Home Assistant) o una plataforma IoT basada en la nube.
3. **Automatización Inteligente**: Crear escenarios de automatización poderosos en Home Assistant basados en datos precisos de potencia y corriente. Por ejemplo:
    - Cuando el consumo de energía de una impresora 3D cae por debajo de 5W durante más de un minuto, determinar que la impresión ha terminado, apagar automáticamente su energía y enviar una notificación móvil.
    - Si la corriente de una bomba de agua permanece consistentemente por encima de su rango normal, enviar una alerta por un posible atasco, previniendo daño al motor.

### Arquitectura del Sistema

![xx](https://mermaid.ink/svg/pako:eNqNVc1u00AQfpXVcgHJblLbcVwLVTIuKEiEFhp-BOGwsceJhb0brTdNS-kLoEpFgDhwgR54AC4IibfhBeARGHvd1C6_e9rZnfnmm_nG60MaiRioT6eSzWfk1t0xJ7iKxUQfzMSigMdj-uP9yQcyEDl0tpMkjYBc53upFDwHrsb0iY4qV5xKiFQqOBldOz8NQsT49u6UWFb3PlpkRyxBtgNhD3GrVK--khGTU1AkmM-zlPEIrk5kZ_PyTti5IdN4Cp0gvNKKRkjT3KxB9DHwWG8ulJQLniohq0yvX5ChNlM-JQMm4yWT8B8FhaMq_s0x7sgu8EJITTHMWD6HmKA_IwWiZkCWCNGm-_BmsK0JnFZ7bCfI6QEZgoIa6Prujm2ZodsOxGxlnWXM36vkoJZCPq2SHL8kt7VJRpLxIk-LAgtqAUuxwNSa02fyIDVvpORudbZy-1OqSHAlRVbFvv34_csJCfUJCXE6Lsr823YOAj1jp9WMkQD5FYpxpVuxmzOp9M1OxlQiZN7uSsyK2USgepr_J3KvAElulskTdjY8QzFJUQwcqc4DmLQBBoEenzOc3xash4uYa-bm8zENF1JieZX4KPOYPkdxtGOlqFl56UaWYlYfz_DOaHSldNXt1u56XwfcEhHLzuQqPQdBk0OUsaLYgqQms6sOsKQkzTL_UpKAC65RYOefQmk6uGrTXKaxmvnWfP8CTP0xNHHATewkWeE4juetzHOcXwjVA9di1E28BiPPi6J_M6qnqV1Z0m1VxtgfcRpodY8MfBsa3Wo6hCOj0qrZheZ9rUyztOb1IDBWE9PiTQ18T9OY-kouwKA5yJyVJj0sw8dUzSDHV8bHbcxKmcf8CGPmjD8SIj8Lw-zTGfUTlhVoLeYxU7CVMvzo8tUpjmAMMhQLrqi_7lYY1D-k-9Q3e-vOWt_uez3X7dme3e0b9ID6tr2xZq13-xt9y-451kbvyKDPqqzra57juF1rw7Ec1-3bPc-gEJeNGep_RPWrOPoJefADGA)

**Flujo de Datos Explicado:**

1. **Detección Física**: El electrodoméstico objetivo opera normalmente, consumiendo corriente AC a través de su cable de alimentación (específicamente, el cable **Vivo**).
2. **Adquisición de Señal**: El sensor CT se sujeta de forma no invasiva alrededor de este único cable de alimentación. A través de inducción electromagnética, genera una pequeña corriente secundaria que es precisamente proporcional a la corriente principal.
3. **Conversión A/D y Cálculo**: El Medidor de Energía Wi-Fi XIAO recibe la señal analógica del sensor CT. Su chipset de medición de energía integrado muestrea y convierte esta señal, calculando valores RMS para corriente, potencia y otras métricas.
4. **Transmisión Inalámbrica**: El chip **ESP32-C6** integrado se conecta a la red Wi-Fi local y publica los datos procesados utilizando la API nativa de ESPHome o el protocolo MQTT.
5. **Consumo de Datos y Aplicación**: Un servidor Home Assistant se suscribe a estos datos, presentándolos como entidades de sensor, registrando su historial y utilizándolos para activar automatizaciones y notificaciones.

## 2. Selección de Hardware

Para especificaciones detalladas, visita la wiki del producto：[Wiki del Medidor de Energía AC Wi-Fi de 2 Canales de Seeed Studio](/es/2_channel_wifi_ac_energy_meter)

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/es/2_channel_wifi_ac_energy_meter/">
            <strong><span><font color={'FFFFFF'} size={"4"}> Visitar wiki del producto 🖱️</font></span></strong>
    </a>
</div>

### Transformador de Corriente No Invasivo (CT)

El sensor CT es la piedra angular de nuestro sistema de medición "no invasivo". Actúa como un "estetoscopio" para circuitos eléctricos, permitiéndole "escuchar" el flujo de corriente sin hacer contacto físico directo con el conductor.

#### Cómo Funciona

Opera bajo el principio de **inducción electromagnética**, idéntico a un transformador.

1. **Bobinado Primario**: Cuando sujetas el sensor CT alrededor de un cable de alimentación, ese cable en sí mismo actúa como el "bobinado primario" con una sola vuelta (N=1).
2. **Campo Magnético**: Cuando la corriente alterna fluye a través del cable, genera un campo magnético alterno a su alrededor.
3. **Bobinado Secundario**: Dentro del sensor CT hay un núcleo de ferrita y una bobina de alambre de cobre finamente enrollado. Esto forma el "bobinado secundario."
4. **Corriente Inducida**: El campo magnético alterno del cable primario pasa a través del núcleo y, según la Ley de Inducción de Faraday, induce una corriente AC pequeña pero precisamente proporcional en el bobinado secundario.

**Ventaja Clave**: Todo el proceso involucra solo acoplamiento magnético, sin conexión eléctrica física. Esto lo hace "no invasivo," seguro y conveniente.

#### Pautas de Instalación

La instalación incorrecta es la razón más común para lecturas inexactas o de cero.

:::danger ¡Seguridad Primero!

Antes de sujetar o ajustar cualquier sensor CT, debes apagar el interruptor correspondiente del circuito. Usa un probador de voltaje para confirmar que el cable objetivo esté completamente desenergizado. La seguridad es siempre la máxima prioridad.

:::

- **Direccionalidad**

  La carcasa del sensor CT usualmente tiene una flecha (->) o una marca P1 -> P2 para indicar la dirección "positiva" del flujo de corriente. Para lecturas precisas de potencia activa (que consideran el factor de potencia), asegúrate de que todos los sensores estén instalados en la misma dirección relativa a la fuente de corriente (ej., la corriente fluye de P1 a P2).

- **Posición de Sujeción**

  Este es el paso más crítico y propenso a errores.

  - **Método Correcto**: Asegúrate de que el sensor CT esté sujeto alrededor de **solo uno** de los cables aislados—ya sea el cable **Vivo** o el **Neutro**.
  - **Método Incorrecto**: Nunca sujetes el sensor CT alrededor de toda la cubierta del cable de alimentación que contiene múltiples conductores (Vivo, Neutro y Tierra).
  - **¿Por qué?**: En un circuito AC monofásico, la corriente en los cables Vivo y Neutro es igual en magnitud pero opuesta en dirección en cualquier momento dado. Si sujetas ambos, sus campos magnéticos se cancelarán perfectamente entre sí. El campo magnético neto será cero, y el sensor no inducirá corriente, resultando en una lectura constante de cero.

  **Diagrama:**

  ```plaintext
  // CORRECT Installation
  // Clamp around the Live wire ONLY
         Power Cable
  ------------------ L (Live) ----->>> Current Flow
  /`---\
  | CT | --[ CLAMPED ]--
  \`---/
  ------------------ N (Neutral)----
  
  // INCORRECT Installation
  // Clamped around the entire cable
         Power Cable Jacket
  /`------------------`\
  |    --- L --->      |
  /`---\  (Magnetic fields cancel out)
  | CT | --[ CLAMPED ]--
  \`---/  <--- N ---      |
  \`------------------`/
  // Result: Reading is 0
  ```

### XIAO Medidor de Energía AC Wi-Fi de 2 Canales

Si el sensor CT es el "órgano sensorial", el Medidor de Energía Wi-Fi XIAO es el "cerebro" y "centro de comunicaciones" del sistema.

#### Ventajas Principales

- **Ultra-Compacto y Doble Canal**: Heredando el diminuto factor de forma de "sello" de la serie Seeed Studio XIAO, es extremadamente fácil de integrar en cajas eléctricas con limitaciones de espacio o carcasas de dispositivos. El diseño de doble canal significa que un solo módulo puede monitorear independientemente dos circuitos AC separados, haciéndolo altamente rentable.
- **Conectividad Potente e Integración IoT**: Cuenta con un núcleo **ESP32-C6** de alto rendimiento, proporcionando soporte nativo para **Wi-Fi 6, Bluetooth 5, Zigbee, y Thread**. Esto le permite conectarse fácilmente a tu red local y enviar datos sin problemas a plataformas IoT como Home Assistant a través de protocolos estándar como ESPHome y MQTT. También está preparado para el futuro ecosistema **Matter**.
- **Basado en una Plataforma Madura**: El medidor de energía puede configurarse y flashearse directamente usando ESPHome. ESPHome es un proyecto de código abierto potente y maduro que abstrae la programación compleja de bajo nivel en archivos de configuración YAML simples. Los usuarios pueden definir sensores, configurar redes e integrar con Home Assistant sin escribir código C++, reduciendo significativamente la barrera de entrada.

## 3. Casos de Uso y Ejemplos

Ahora que hemos integrado exitosamente los datos del dispositivo en Home Assistant, estos números ya no son cifras aisladas sino poderosos disparadores para ideas de automatización ilimitadas.

:::note

Recuerda reemplazar los valores de ejemplo entity_id con los tuyos propios.

:::

### Escenario 1: Auditoría Energética del Hogar para Cazar "Vampiros de Energía"

- **Problema**: Tu factura mensual de electricidad es alta, pero no está claro qué electrodomésticos son los culpables, especialmente aquellos que consumen energía en modo de espera.

- **Solución**: Coloca secuencialmente el sensor CT en los cables de alimentación de dispositivos de alto consumo o siempre encendidos como refrigeradores, aires acondicionados, centros de entretenimiento doméstico y computadoras durante varios días para recopilar datos.

- **Implementación**:

  1. **Análisis de Tendencias a Largo Plazo**: Usa el **Panel de Energía** integrado de Home Assistant para visualizar claramente el consumo total de cada dispositivo durante un día, semana o mes. Esto facilita identificar los mayores consumidores de energía.
  2. **Identificación de Consumo en Espera**: Al examinar el gráfico histórico del sensor de potencia, puedes identificar el consumo exacto en modo de espera de un dispositivo. Por ejemplo, podrías descubrir que tu sistema de cine en casa consume 15W continuamente incluso cuando está "apagado".

- **Ejemplo de Automatización** (Alerta Inteligente):

  ```YAML
  # Home Assistant Automation: High Standby Power Alert
  alias: High Standby Power Alert
  trigger:
    - platform: numeric_state
      entity_id: sensor.energy_meter_channel_1_active_power
      above: 10 # Power threshold in Watts
      for: "00:10:00" # For a duration of 10 minutes
  condition:
    - condition: time
      after: "02:00:00"
      before: "06:00:00"
  action:
    - service: notify.mobile_app_your_phone_name # Replace with your notification service
      data:
        title: "High Standby Power Detected"
        message: "The entertainment center's standby power has been above 10W for 10 minutes. Consider unplugging it."
  ```

### Escenario 2: Monitoreo de Dispositivos Inteligentes para un Taller o Espacio de Creación

- **Problema**: Las tareas de larga duración como la impresión 3D o el corte láser requieren verificaciones manuales frecuentes para ver si han terminado o han fallado.

- **Solución**: Monitorear el consumo de energía en tiempo real de la impresora 3D o cortadora láser. Estos dispositivos tienen perfiles de energía distintivos: un pico durante el precalentamiento, fluctuaciones estables durante la operación, y una caída a un nivel de espera muy bajo al completarse.

- **Ejemplo de Automatización** (Notificación de Finalización de Tarea y Apagado Automático):

  ```YAML
  # Home Assistant Automation: 3D Print Job Finished
  alias: 3D Print Job Finished
  trigger:
    - platform: numeric_state
      entity_id: sensor.energy_meter_channel_1_active_power
      below: 8 # Power threshold for a completed job in Watts
      for: "00:03:00" # For 3 minutes to confirm stable state
  condition:
    # Ensure the device's power dropped from a higher working state
    - condition: template
      value_template: "{{ trigger.from_state.state | float(0) > 50 }}"
  action:
    # 1. Send a mobile notification
    - service: notify.mobile_app_your_phone_name
      data:
        title: "3D Print Complete!"
        message: "Your 3D print job has finished. The printer will power down in 15 minutes."
    # 2. Wait for the print to cool down
    - delay: "00:15:00"
    # 3. Turn off the smart plug connected to the printer
    - service: switch.turn_off
      target:
        entity_id: switch.3d_printer_plug
  ```

### Escenario 3: Mantenimiento Predictivo para Equipos Críticos

- **Problema**: La falla de equipos críticos como una bomba de acuario o un ventilador de enfriamiento de servidor puede llevar a daños costosos.

- **Solución**: Monitorear continuamente la **corriente** consumida por estos dispositivos accionados por motor. Durante la operación normal, la corriente se mantiene dentro de un rango predecible. Si ocurre un atasco mecánico o falla de rodamientos, la carga del motor aumenta dramáticamente, causando un pico anormal en la corriente.

- **Ejemplo de Automatización** (Alerta de Atasco de Bomba):

  ```YAML
  # Home Assistant Automation: Water Pump Stall Alert
  alias: Water Pump Stall Alert
  trigger:
    - platform: numeric_state
      entity_id: sensor.energy_meter_channel_2_current
      above: 1.5 # Set a danger threshold (e.g., normal is 0.8A)
      for: "00:00:05" # For 5 seconds to filter out initial startup spikes
  action:
    # 1. Send a high-priority notification
    - service: notify.mobile_app_your_phone_name
      data:
        title: "‼️ URGENT ALERT: Pump May Be Stalled ‼️"
        message: "Pump current is abnormally high at {{ trigger.to_state.state }}A. Please check immediately!"
    # 2. (Optional) Cut power to the pump to prevent motor burnout
    - service: switch.turn_off
      target:
        entity_id: switch.water_pump_plug
  ```

### Escenario 4: Sub-medición Justa para Espacios Compartidos

- **Problema**: En un espacio de coworking o makerspace, cómo cobrar de manera justa a los miembros por su uso de equipos de alta potencia como una máquina CNC o un cortador láser grande.
- **Solución**: Utilizar el sensor de consumo total de energía, que registra con precisión el uso del dispositivo en kilovatios-hora (kWh).
- **Implementación**:
  1. **Registro de Datos**: Home Assistant registra automáticamente los datos históricos del sensor.
  2. **Ciclos de Facturación**: Usando las herramientas de Home Assistant (p. ej., helper de medidor de servicios), puedes crear fácilmente ciclos de facturación diarios, semanales, mensuales o manuales.
  3. **Cálculo de Costos**: Al final de cada ciclo de facturación, el administrador lee el total de kWh consumidos durante ese período y los multiplica por la tarifa eléctrica local para determinar el monto adeudado.

## 4. FAQ

<details>
<summary>P1: ¿Puede esta solución monitorear energía trifásica?</summary>

**No.** El hardware y software en esta guía están diseñados para **energía AC monofásica**, que es el tipo más común de servicio eléctrico en ubicaciones residenciales y comerciales pequeñas. El monitoreo de energía trifásica requiere hardware especializado capaz de medir sincrónicamente tres canales de corriente y voltaje y procesar diferencias de fase, lo cual está más allá del alcance de esta solución.

</details>

<details>
<summary>P2: ¿Qué pasa si necesito monitorear un electrodoméstico que consume más de 5A? (p. ej., un aire acondicionado o circuito de cocina)</summary>

Absolutamente. Solo necesitas actualizar el sensor CT y recalibrar el software:

1. **Actualizar el Hardware**: Reemplaza el sensor CT estándar de 5A con un CT de núcleo dividido de mayor capacidad, como 20A, 50A, o incluso 100A (para monitorear una alimentación principal). Al comprar, asegúrate de que el nuevo CT sea de **tipo salida de corriente** (p. ej., `100A:50mA`) para mantener compatibilidad con el puerto de entrada del XIAO Energy Meter.

2. **Recalibrar el Software**: Un nuevo CT tiene una relación de transformación diferente, por lo que debes actualizar los parámetros de calibración en tu archivo de configuración de ESPHome.
    - **Método de Calibración**: Por favor consulta la documentación oficial del Componente Sensor de ESPHome para instrucciones de calibración.

</details>

<details>
<summary>P3: ¿Qué debo hacer si la conexión Wi-Fi es inestable y el dispositivo se desconecta frecuentemente?</summary>

Los problemas de Wi-Fi típicamente se pueden abordar verificando dos áreas: el entorno físico y la configuración del software:

1. **Verificar el Entorno Físico**:
    - **Intensidad de Señal**: La ubicación del dispositivo, especialmente dentro de una caja eléctrica metálica, puede tener mala recepción Wi-Fi. Usa tu teléfono para verificar la intensidad de señal cerca del dispositivo. Considera mover tu router más cerca o agregar un extensor Wi-Fi o nodo mesh.
    - **Colocación de Antena**: Asegúrate de que la antena integrada del **ESP32-C6** no esté completamente obstruida por partes metálicas.

2. **Optimizar la Configuración del Software**: Puedes agregar varias opciones a tu archivo YAML de ESPHome para mejorar la estabilidad de red.

```yaml
wifi:
  ssid: "Your_WiFi_SSID"
  password: "Your_WiFi_Password"

  # -- Stability Enhancements --
  # 1. Set a static IP to avoid issues with DHCP leases
  manual_ip:
    static_ip: 192.168.1.100
    gateway: 192.168.1.1
    subnet: 255.255.255.0

  # 2. Disable Wi-Fi power-saving mode to keep the connection active (this slightly increases power consumption)
  power_save_mode: none

# If the device can't connect to the API or Wi-Fi for 30 mins, 
# it will automatically reboot to try and recover.
api:
  reboot_timeout: 30min

ota:
  # ...
```

</details>
