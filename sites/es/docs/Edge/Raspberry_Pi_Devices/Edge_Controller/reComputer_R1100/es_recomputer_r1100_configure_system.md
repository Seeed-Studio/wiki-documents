---
description: Aprende cómo configurar y probar componentes de hardware en la serie reComputer R1100 después de instalar dispositivos. Este wiki cubre mapeo de GPIO, pruebas de LED de usuario, comunicación SPI, escaneo de Wi-Fi y Bluetooth, LoRa®, 4G, Zigbee sobre Mini-PCIe, RS485, RS232, pruebas de DI/DO, y UPS para apagado seguro.
title: Configurar reComputer R1100 
keywords:
- Raspberry pi
- Edge Controller
- reComputer R1100
image: https://files.seeedstudio.com/wiki/R1100/reComputer-R1125-1.jpg
slug: /es/recomputer_r1100_configure_system
last_update:
  date: 2/26/2024
  author: Kasun Thushara
---

## Descripción general

Aprende cómo configurar y probar componentes de hardware en la serie reComputer R1100 después de instalar dispositivos. Este wiki cubre mapeo de GPIO, pruebas de LED de usuario, comunicación SPI, escaneo de Wi-Fi y Bluetooth, LoRa®, 4G, Zigbee sobre Mini-PCIe, RS485, RS232, pruebas de DI/DO, UPS para apagado seguro y más.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/reComputer-R1125-1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Consultar mapeos y desplazamientos de GPIO

Para verificar los mapeos y desplazamientos de GPIO, sigue estos pasos:

- **Ejecuta el siguiente comando en la terminal**

```bash
cat /sys/kernel/debug/gpio
```

**Este comando mostrará los mapeos y desplazamientos de GPIO**, proporcionando información esencial para depurar o configurar pines GPIO.

## Controlar Indicadores LED

El reComputer R1100 proporciona tres **indicadores LED** en **rojo, azul y verde**. Puedes controlarlos usando los siguientes comandos:  

**1. Navegar al directorio LED**  

```bash
cd /sys/class/leds/
ls
```

Esto listará los LEDs disponibles.

**2. Habilitar LEDs escribiendo en el archivo brightness**  
Cambia primero al **modo superusuario**:  

```bash
sudo su
```

Luego, enciende los LEDs:  

```bash
echo 1 > /sys/class/leds/led-red/brightness
echo 1 > /sys/class/leds/led-blue/brightness
echo 1 > /sys/class/leds/led-green/brightness
```

Esto **encenderá** el LED correspondiente.

**3. Apagar LEDs (opcional)**  
Para **apagar** un LED específico, usa:

```bash
echo 0 > /sys/class/leds/led-red/brightness
echo 0 > /sys/class/leds/led-blue/brightness
echo 0 > /sys/class/leds/led-green/brightness
```

## Prueba de Comunicación SPI

Para verificar la **comunicación SPI**, puedes realizar una prueba de bucle de retorno **cortocircuitando los pines MISO y MOSI del módulo TPM**. Este método asegura que los datos enviados en MOSI (Master Out, Slave In) se reciban en MISO (Master In, Slave Out).

**Guía Paso a Paso**

**1. Conectarse a Internet**  
Asegúrate de que tu dispositivo esté conectado a una red antes de continuar.

**2. Clonar el repositorio `spidev-test`**  

```bash
git clone https://github.com/rm-hull/spidev-test.git
```

**3. Navegar al directorio**  

```bash
cd spidev-test
```

**4. Compilar el programa `spidev_test.c`**  

```bash
gcc spidev_test.c -o spidev_test
```

**5. Ejecutar la prueba SPI**

```bash
./spidev_test -D /dev/spidev0.1 -v -p "hello"
```

- `-D /dev/spidev0.1` → Especifica el dispositivo SPI  
- `-v` → Habilita la salida detallada  
- `-p "hello"` → Envía la cadena `"hello"`  

**6. Prueba de Bucle de Retorno (Opcional)**  

- **Cortocircuita los pines MISO y MOSI del módulo TPM** antes de ejecutar la prueba.
- Si el bus SPI funciona correctamente, la salida debería mostrar que los datos transmitidos se **reciben correctamente**.

## Escaneo de Wi-Fi

Para listar las redes Wi-Fi disponibles y sus detalles, ejecuta:  

```bash
sudo iwlist wlan0 scan
```

- Este comando escanea todas las redes Wi-Fi cercanas y muestra sus SSID, intensidad de señal y tipo de cifrado.

## Escaneo de Bluetooth

Para escanear dispositivos Bluetooth, sigue estos pasos:

**Abre la interfaz de control de Bluetooth:**  

```bash
sudo bluetoothctl
```

**Habilitar escaneo:**  

```bash
scan on
```

- Esto inicia el escaneo de dispositivos Bluetooth cercanos.

## LoRa® sobre Mini-PCIe

### Configuración de LoRa® SPI

**Clonar el repositorio SX1302_HAL:**  

```bash
cd ~
git clone https://github.com/Lora-net/sx1302_hal
```

**Navega al directorio clonado:**

```bash
cd sx1302_hal
```

**Modificar el archivo de configuración:**

Abrir el archivo de configuración del dispositivo I2C:  

```bash
sudo vim ./libloragw/inc/loragw_i2c.h
```

Cambia esta línea:  

```c
#define I2C_DEVICE "/dev/i2c-1"
```

Para:  

```c
#define I2C_DEVICE "/dev/i2c-3"
```

**Compilar el código:**

```bash
sudo make
```

**Modificar el script de reinicio:**

Abrir el script `reset_lgw.sh`:  

```bash
sudo vim ./tools/reset_lgw.sh
```

Actualiza las configuraciones de pines:

```bash
SX1302_RESET_PIN=580    # SX1302 reset  
SX1302_POWER_EN_PIN=578 # SX1302 power enable  
SX1261_RESET_PIN=579    # SX1261 reset (LBT/Spectral Scan)  
```

**Copia el script de reinicio al directorio del reenviador de paquetes:**  

```bash
cp ~/sx1302_hal/tools/reset_lgw.sh ~/sx1302_hal/packet_forwarder/
```

**Actualiza el puerto SPI predeterminado en el archivo de configuración LoRaWAN®:**

Modifica el archivo `global_conf.json.sx1250.US915`:  

```bash
sed -i 's/spidev0.0/spidev0.1/g' global_conf.json.sx1250.US915
```

**Iniciar el módulo LoRaWAN®:**  

```bash
cd ~/sx1302_hal/packet_forwarder
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

### Configuración USB LoRa®

Si estás usando un módulo USB LoRa® en lugar de LoRa® SPI, sigue estos pasos. La mayoría de los comandos permanecen iguales que para LoRa® SPI, excepto por el paso final.

**Activar el Pin de Reset del SX1302**

```bash
echo 1 > /sys/class/gpio/gpio580/value
```

**Iniciar el módulo USB LoRaWAN®**

```bash
cd ~/sx1302_hal/packet_forwarder
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB
```

 LoRa® USB ahora está configurado y ejecutándose en reComputer R1100

## 4G Celular sobre Mini-PCIe

Para interactuar con un módulo 4G usando comandos AT a través de `minicom`, sigue estos pasos:  

**Abre Minicom con el puerto serie y velocidad de baudios apropiados:**  

```bash
sudo minicom -D /dev/ttyUSB2 -b 115200
```

Este comando abre Minicom con el puerto serie especificado (`/dev/ttyUSB2`) a una velocidad de baudios de **115200**.

**Enviar comandos AT al módulo 4G:**

Una vez que Minicom esté abierto, puedes comenzar a enviar **comandos AT** al módulo 4G. Por ejemplo:  

```bash
AT
```

Este comando verifica si el módulo responde. Si el módulo funciona correctamente, deberías recibir una respuesta **"OK"**.

**Marcar un número de teléfono usando el módulo 4G:**

Para marcar un número de teléfono, usa el comando `ATD` seguido del número de teléfono:  

```bash
ATD<phone_number>;
```

- Reemplaza `<phone_number>` con el número de teléfono deseado que quieres marcar.
- Asegúrate de incluir un **punto y coma (;)** al final del comando para indicar el final del número de teléfono.

## Zigbee sobre Mini-PCIe

Para probar la **comunicación Zigbee** entre dos módulos Zigbee, sigue estos pasos:

**Verificar Puertos Serie Disponibles**

Ejecuta el siguiente comando para verificar los puertos serie disponibles:  

```bash
cat /dev/ttyUSB*
```

**Instalar una Herramienta de Comunicación Serie**

Instala **CuteCom**, un terminal serie gráfico, usando:  

```bash
sudo apt-get install cutecom
```

**Configurar el Primer Módulo Zigbee (Coordinador)**  

- Abra **CuteCom** y configúrelo para el **primer puerto serie**.  
- **Configuración:**
  - **Velocidad de Baudios:** 115200  
  - **Habilite "Hex output"** en la parte inferior de la interfaz.  

**Pasos para Configurar como Coordinador:**  

1. **Establecer como Coordinador:** Envíe el comando:  

   ```  
   55 04 00 05 00 05  
   ```  

   - Respuesta esperada:

   ```  
   55 04 00 05 00 05  
   ```  

2. **Reiniciar Dispositivo:**  
   - Presiona el **botón de reinicio**, o  
   - Envía el comando:  

     ```  
     55 07 00 04 00 FF FF 00 04  
     ```  

3. **Formación de Red:**
   - Envía el comando:  

   ```  
   55 03 00 02 02  
   ```  

**Configurar el Segundo Módulo Zigbee (Router)**  

- Abre otra instancia de **CuteCom** y configúrala para el **segundo puerto serie** usando la misma configuración.  

**Pasos para Configurar como Router:**  

1. **Establecer como Router:** Envía el comando:  

   ```  
   55 04 00 05 01 04  
   ```  

   - Respuesta esperada:

   ```  
   55 04 00 05 00 05  
   ```  

2. **Reiniciar Dispositivo:**  
   - Presiona el **botón de reinicio**, o  
   - Envía el comando:  

     ```  
     55 07 00 04 00 FF FF 00 04  
     ```  

3. **Formación de Red:** Envía el comando:  

   ```  
   55 03 00 02 02  
   ```  

**Verificar Estado del Dispositivo**  
Para verificar el estado del dispositivo, envía:  

```  
55 03 00 00 00  
```  

 Respuesta esperada:  

```  
55 2A 00 00 00 01 XX XX XX XX  
```  

- `XX` representa información específica del dispositivo.

**Entrar al Modo Transparente**

Si la **formación de red** es exitosa, habilita el **modo transparente** enviando:  

```  
55 07 00 11 00 03 00 01 13  
```  

**Ambos módulos deben estar en modo transparente para comunicación directa.**  
Para **salir del modo transparente**, envía:  

```  
+++  
```

**Notas Adicionales**  

- Si **falla la configuración del router**, el dispositivo puede que ya sea un **coordinador**. Para salir de la red, envía:  

  ```  
  55 07 00 04 02 XXXX XX  
  ```  

- Para **probar la potencia de transmisión**, usa:  
  - **Consultar potencia:**  

    ```  
    55 04 0D 00 00 0D  
    ```  

  - **Establecer potencia:**  

    ```  
    55 04 0D 01 XXXX  
    ```  

Asegúrate de reemplazar `/dev/ttyUSB*` con el **puerto serie correcto** para cada módulo Zigbee.  
Sigue estos pasos cuidadosamente para establecer **comunicación Zigbee exitosa** entre los dos módulos.

Aquí está la versión corregida y bien estructurada con gramática, legibilidad y formato mejorados:  

---

## Pruebas de RS485

El reComputer R1100 incluye **dos puertos RS485**. A continuación se muestran sus **puertos COM** y **archivos de dispositivo** correspondientes:  

| **Puerto RS485** | **Puerto COM** | **Etiqueta de Serigrafía** | **Archivo de Dispositivo** |
|---------------------|---------------|---------------------------|---------------------------|
| **RS485_1**         | COM1          | A1 / B1 / GND            | `/dev/ttyACM0`           |
| **RS485_2**         | COM2          | A2 / B2 / GND            | `/dev/ttyACM1`           |

**Pasos para Probar la Funcionalidad de RS485**  

**Conectar los Puertos RS485**  

Conecta físicamente **RS485_1 (A & B)** a **RS485_2 (A & B)**.  

**Ejecutar el Programa de Prueba RS485**  

Proporcionamos un programa de prueba para **verificar la transmisión de datos** y medir la velocidad entre los dos puertos RS485.  

Ejecuta los siguientes comandos para descargar y ejecutar el programa de prueba:  

```bash
git clone https://github.com/ackPeng/R1100_TEST.git
cd R1100_TEST
gcc -o serial_test serial_test.c
./serial_test /dev/ttyACM0 /dev/ttyACM1 115200
```

**Descripción de la Prueba**  

- Este programa **envía 1MB de datos** desde **RS485_1** a **RS485_2**.  
- **Registra el tiempo de finalización** y calcula la velocidad de baudios real.  
- **Nota:** La velocidad de baudios real puede ser ligeramente menor que la velocidad de baudios teórica, lo cual es esperado.  

**Sigue estos pasos cuidadosamente para verificar la comunicación RS485 en reComputer R1100.**

## Pruebas RS232

El reComputer R1100 cuenta con **dos puertos RS232**. A continuación se muestran los puertos COM correspondientes y archivos de dispositivo:  

| Puerto RS232 | Puerto COM | Mapeo de Pines | Archivo de Dispositivo |
|------------|---------|-------------|--------------|
| **RS232_1** | COM3 | RX3/TX3/GND | `/dev/ttyACM2` |
| **RS232_2** | COM4 | RX4/TX4/GND | `/dev/ttyACM3` |

**Prueba de Comunicación RS232**

Sigue estos pasos para probar la funcionalidad RS232:

1. **Conecta los puertos:**
   - Conecta **TX de RS232_1** a **RX de RS232_2**.
   - Conecta **RX de RS232_1** a **TX de RS232_2**.

2. **Ejecuta el programa de prueba:**
   - Clona el repositorio del programa de prueba:

     ```bash
     git clone https://github.com/ackPeng/R1100_TEST.git
     ```

   - Navega al directorio:

     ```bash
     cd R1100_TEST
     ```

   - Compila el programa de prueba:

     ```bash
     gcc -o serial_test serial_test.c
     ```

   - Ejecuta la prueba:

     ```bash
     ./serial_test /dev/ttyACM2 /dev/ttyACM3 115200
     ```

Esta prueba envía **1MB de datos** desde RS232_1 a RS232_2 y mide el tiempo de finalización y la velocidad de baudios. Ten en cuenta que la velocidad de baudios real puede ser ligeramente menor que el valor teórico, lo cual es normal.

## Prueba de DI (Entrada Digital)

El reComputer R1100 incluye **dos puertos de Entrada Digital (DI)**, que pueden configurarse según los requisitos del usuario.

| **Número de Puertos DI** | **Puerto DI** | **GPIO Extendido Correspondiente** |
|--------------------------|---------------|---------------------------------------|
| **2**                    | **DI1**       | **GPIO530**                           |
|                          | **DI2**       | **GPIO531**                           |

**Especificaciones del Puerto DI**  

- **Tipo de Entrada:** PNP  
- **Voltaje de Entrada Soportado:** **5VDC – 24VDC**  
- **Corriente:** **Hasta 1000mA**  

**Pasos para Probar la Funcionalidad DI**  

**Asegurar la Conexión Adecuada**  

Asegúrese de que el **puerto DI** del reComputer R1100 esté correctamente conectado a la **carga externa**, también asegúrese de que el puerto **G_D** esté conectado al **GND de la fuente de alimentación**.

**Verificar el Estado del GPIO**  

Ejecute los siguientes comandos para verificar el estado del **GPIO530** (correspondiente a DI1):  

```bash
echo 530 > /sys/class/gpio/export
echo in > /sys/class/gpio/gpio530/direction
cat /sys/class/gpio/gpio530/value
```

**Interpretar el valor GPIO**  

- **Si el nivel externo es HIGH**, la salida de `/sys/class/gpio/gpio530/value` será **0**.  
- **Si el nivel externo es LOW**, la salida de `/sys/class/gpio/gpio530/value` será **1**.  

## DO (Salida Digital)

El **reComputer R1100** incluye **dos puertos de Salida Digital (DO)**, que pueden configurarse según los requisitos del usuario.  

| **Número de Puertos DO** | **Puerto DO** | **GPIO Extendido Correspondiente** |
|--------------------------|---------------|---------------------------------------|
| **2**                    | **DO1**       | **GPIO532**                           |
|                          | **DO2**       | **GPIO533**                           |

**Especificaciones del Puerto DO**  

- **Tipo de Salida:** Transistor  
- **Voltaje de Salida Soportado:** **Hasta 60VDC**  
- **Capacidad de Corriente:** **500mA**  

**Pasos para Probar la Funcionalidad DO**  

**Asegurar la Conexión Adecuada**  
Confirme que el **puerto DO** del reComputer R1100 esté correctamente conectado a la **carga externa**.

**Dado que el puerto DO es una salida de colector abierto y no tiene capacidad de manejo, por favor use una resistencia externa para conectarla al suministro de energía.**

**Establecer el Nivel de Salida**  
Ejecute los siguientes comandos para establecer la salida en **HIGH** o **LOW**:  

```bash
echo 532 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio532/direction
echo 1 > /sys/class/gpio/gpio532/value  # Set output to HIGH
echo 0 > /sys/class/gpio/gpio532/value  # Set output to LOW
```

## Pruebas del Hub USB

Para verificar la funcionalidad del **hub USB**, sigue estos pasos:  

**Verificar si el Hub USB es Detectado**  

Ejecuta el siguiente comando para listar todos los dispositivos USB conectados, incluyendo hubs:  

```bash
lsusb
```

**Verificar la Detección del Hub USB**

- Este comando mostrará información sobre todos los **dispositivos USB** conectados a su sistema, incluyendo **hubs USB**.  
- Si el hub USB está **funcionando correctamente**, sus detalles deberían aparecer en la salida del comando.  
- Si el hub **no está listado**, puede haber un problema con el **hub mismo o su conexión** al sistema.  

**Solución de Problemas (Si el Hub USB No es Detectado)**  

- Verifique la **conexión física** del hub USB.  
- Intente conectar el hub a un **puerto USB diferente**.  
- Reinicie el dispositivo y ejecute nuevamente `lsusb`.  
- Si el problema persiste, el hub puede estar defectuoso.  

## Pruebas de RTC (Reloj de Tiempo Real)

Para verificar la **funcionalidad del RTC** en **reComputer R1100**, siga estos pasos:  

**Deshabilitar la Sincronización Automática de Tiempo**  

Antes de probar el RTC, detenga y deshabilite la sincronización automática de tiempo para evitar conflictos:  

```bash
sudo systemctl stop systemd-timesyncd  
sudo systemctl disable systemd-timesyncd  
```

**Configurar Manualmente la Hora del RTC**

Configura el RTC a una fecha y hora específica (por ejemplo, 12 de noviembre de 2024, a las 12:00 PM):  

```bash
sudo hwclock --set --date "2024-11-12 12:00:00"
```

**Sincronizar la Hora del RTC con el Sistema**

Actualizar la hora del sistema para que coincida con la hora del RTC:  

```bash
sudo hwclock --hctosys
```

**Verificar la Hora del RTC**  
Verificar la hora actual almacenada en el RTC:  

```bash
sudo hwclock -r
```

Este comando mostrará la hora del RTC.

**Probar la Retención del RTC**  

- **Desconecta la fuente de alimentación** del RTC.  
- **Espera unos minutos**.  
- **Reconecta la alimentación** y verifica la hora del RTC nuevamente usando:  

  ```bash
  sudo hwclock -r
  ```

- Si el tiempo permanece correcto, el RTC está funcionando correctamente.

## Prueba del Temporizador Watchdog

Para probar el **temporizador watchdog** en **reComputer R1100**, sigue estos pasos:

**Instalar Software Watchdog**

Asegúrate de que el paquete watchdog esté instalado:  

```bash
sudo apt install watchdog
```

**Configurar el Watchdog**

Edita el **archivo de configuración del watchdog**:  

```bash
sudo apt-get install vim  # Install Vim if not already installed  
sudo vim /etc/watchdog.conf
```

Modifica la configuración de la siguiente manera:  

```ini
watchdog-device = /dev/watchdog  

# Set the hardware timeout (default is 1 minute)
watchdog-timeout = 120  

# Set the interval between tests (should be shorter than watchdog-timeout)
interval = 15  

# Set system load limits  
max-load-1 = 24  
# max-load-5 = 18  
# max-load-15 = 12  

# Enable real-time priority  
realtime = yes  
priority = 1  
```

**Iniciar el Servicio Watchdog**  
Habilitar e iniciar el servicio watchdog:  

```bash
sudo systemctl start watchdog
```

**Probar el Watchdog Simulando un Cuelgue del Sistema**

Desencadena un **fallo del kernel** para ver si el watchdog **reinicia automáticamente** el sistema:  

```bash
sudo su
echo 1 > /proc/sys/kernel/sysrq
echo "c" > /proc/sysrq-trigger
```

**Monitorear el Sistema**  
Verificar si el sistema **se reinicia automáticamente** después del **período de tiempo de espera** especificado.  

**Si el reinicio ocurre como se esperaba, el watchdog está funcionando correctamente.**  

## Controlar el Zumbador a través de GPIO  

El zumbador está mapeado al GPIO 587. Usar los siguientes comandos para encenderlo y apagarlo:  

**Encender el zumbador:**  

```bash
echo 587 > /sys/class/gpio/export  
echo out > /sys/class/gpio/gpio587/direction  
echo 1 > /sys/class/gpio/gpio587/value  
```  

**Apagar el zumbador:**  

```bash
echo 587 > /sys/class/gpio/export  
echo out > /sys/class/gpio/gpio587/direction  
echo 0 > /sys/class/gpio/gpio587/value  
```  

## Pruebas de Cámara CSI

Para probar la **cámara CSI** en **reComputer R1100**, sigue estos pasos:

**Modificar el Archivo de Configuración**

Edita el archivo **config.txt** para habilitar el módulo de cámara:  

```bash
sudo nano /boot/firmware/config.txt
```

Añade la siguiente línea al **final** del archivo:  

```ini
dtoverlay=imx219,cam0
```

**Reiniciar el Sistema**

Reinicia para aplicar los cambios:  

```bash
sudo reboot
```

**Verificar Detección de Cámara**

Después de reiniciar, verifica si la cámara es detectada:  

```bash
libcamera-jpeg --list-cameras
```

---

**Probar la Cámara**

Ejecuta el siguiente comando para activar la cámara:  

```bash
rpicam-hello --timeout 0
```

**¡Si la vista previa de la cámara se inicia correctamente, la configuración está completa!**  

## Verificación de Conexión TPM 2.0

Si has conectado un **módulo TPM 2.0** a tu dispositivo, puedes verificar su detección usando el siguiente comando:  

```bash
ls /dev | grep tpm
```  

**Interpretando la Salida:**

- Si ves **`tpm0`** y **`tpmrm0`** en la salida, esto confirma que el **TPM (Módulo de Plataforma Confiable)** es detectado exitosamente y está disponible.
- Esto indica que el hardware TPM es reconocido y accesible, permitiéndote proceder con funcionalidades o aplicaciones relacionadas con TPM.

**Si los dispositivos están listados, tu módulo TPM está correctamente conectado y listo para usar.**

## Interactuando con ATECC608A y Generando un Número de Serie Aleatorio

Para comunicarte con el dispositivo **ATECC608A** y generar un número de serie aleatorio, sigue estos pasos:

**Clona el Repositorio `atecc-util`:**  

```bash
git clone https://github.com/wirenboard/atecc-util.git
```  

**Navegar al Directorio `atecc-util`:**  

```bash
cd atecc-util
```  

**Clonar el Repositorio `cryptoauthlib`:**  

```bash
git clone https://github.com/wirenboard/cryptoauthlib.git
```  

**Compilar la Utilidad ATECC:**

```bash
make
```  

**Generar un Número de Serie Aleatorio:**  

```bash
./atecc -b 1 -s 192 -c 'serial'
```  

- **`-b 1`** → Usa el slot 1.  
- **`-s 192`** → Establece el tamaño del número de serie a **192 bits**.  
- **`-c 'serial'`** → Genera un número de serie aleatorio.  

**Salida Esperada:**  

El número de serie generado se mostrará, por ejemplo:  

```bash
01235595d3d621f0ee
```  

Este método permite la interacción con el dispositivo **ATECC608A**, permitiéndote realizar operaciones como generar números de serie aleatorios de manera eficiente.

## Interactuando con EEPROM

Para leer y escribir datos a una **EEPROM** (Memoria de Solo Lectura Programable Eléctricamente Borrable), sigue estos pasos:

**Otorgar Permisos Completos al Archivo del Dispositivo EEPROM:**  

```bash
sudo chmod 777 /sys/bus/i2c/devices/6-0050/eeprom
```  

**Escribir Datos en la EEPROM:**  

```bash
echo "This is a test string" > /sys/bus/i2c/devices/6-0050/eeprom
```  

**Leer el Contenido de la EEPROM en Formato Hexadecimal:**  

```bash
cat /sys/bus/i2c/devices/6-0050/eeprom | hexdump -C
```  

## Verificando la Detección del SSD

Para listar todos los discos conectados, incluyendo el SSD, usa el siguiente comando:  

```bash
sudo fdisk -l
```  

Este comando mostrará una lista de todos los dispositivos de almacenamiento detectados. Busca las entradas que representen tu SSD, típicamente etiquetadas como:

- `/dev/sda`
- `/dev/sdb`
- `/dev/sdc`, etc.

Una vez que identifiques la entrada correcta del SSD, puedes proceder con **particionado, formateo u otras tareas de gestión de disco** según sea necesario.

## UPS para Apagado Seguro

Una conexión **GPIO6** entre la **CPU y la entrada de alimentación DC** se utiliza para notificar a la CPU cuando la fuente de alimentación está caída. La CPU debe ejecutar **tareas urgentes mediante un script** antes de que la energía del supercondensador se agote y luego iniciar un **apagado seguro (`$shutdown`)**.

**Método Alternativo de Apagado**
Otra forma de usar esta función es **activar un apagado cuando el pin GPIO cambie de estado**. El pin GPIO especificado se configura como una **tecla de entrada**, generando **eventos KEY_POWER**. Estos eventos son manejados por **systemd-logind**, que automáticamente inicia un apagado del sistema.

Para habilitar esta función, consulta `/boot/overlays/README`, luego modifica `/boot/firmware/config.txt` añadiendo:  

```ini
dtoverlay=gpio-shutdown,gpio_pin=6,active_low=1
```

:::note

1. Para **detalles de funcionalidad del UPS**, por favor contáctanos.  
2. La **señal de alarma está activa en BAJO**.  

:::
---

#### Código Python para Apagado Seguro  

El siguiente script de Python demuestra **cómo detectar el modo de funcionamiento** del **UPS de supercondensador a través de GPIO6**. Cuando el sistema detecta un evento de apagado, **automáticamente guarda los datos y se apaga de forma segura**.  

```python
import RPi.GPIO as GPIO
import time
import os

num = 0

GPIO.setmode(GPIO.BCM)  # Set GPIO numbering mode
GPIO.setup(6, GPIO.IN, pull_up_down=GPIO.PUD_UP)  # Set GPIO6 as input with pull-up resistor
GPIO.add_event_detect(6, GPIO.FALLING, bouncetime=500)  # Add debounce time for stabilization

while True:
    if GPIO.event_detected(6):
        print("...External power off detected...")
        os.system("sync")  # Ensure data is written to disk
        print("...Saving data...")
        time.sleep(3)
        os.system("sync")  # Save data again
        
        while num < 5:
            print(f"--- {5 - num} seconds remaining ---")
            num += 1
            time.sleep(1)

        os.system("sudo shutdown -h now")  # Execute system shutdown
```

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
