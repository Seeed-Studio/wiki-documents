---
description: Aprende a configurar y probar los componentes de hardware en la serie reComputer R1100 después de instalar los dispositivos. Este wiki cubre el mapeo de GPIO, prueba del LED de USUARIO, comunicación SPI, escaneo de Wi‑Fi y Bluetooth, LoRa®, 4G, RS485, RS232, prueba de DI/DO y UPS para un apagado seguro.
title: Configurar reComputer R1100
keywords:
  - Raspberry pi
  - Controlador de Borde
  - reComputer R1100
image: https://files.seeedstudio.com/wiki/R1100/reComputer-R1125-1.jpg
slug: /recomputer_r1100_configure_system
last_update:
  date: 2/26/2024
  author: Kasun Thushara
createdAt: '2025-02-27'
updatedAt: '2026-04-23'
url: https://wiki.seeedstudio.com/es/recomputer_r1100_configure_system/
---

## Descripción general

Aprende a configurar y probar los componentes de hardware en la serie reComputer R1100 después de instalar los dispositivos. Este wiki cubre el mapeo de GPIO, prueba del LED de USUARIO, comunicación SPI, escaneo de Wi‑Fi y Bluetooth, LoRa®, 4G, RS485, RS232, prueba de DI/DO, UPS para un apagado seguro y más.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/reComputer-R1125-1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Consultar asignaciones y desplazamientos de GPIO

Para comprobar las asignaciones y desplazamientos de GPIO, sigue estos pasos:

- **Ejecuta el siguiente comando en la terminal**

```bash
cat /sys/kernel/debug/gpio
```

**Este comando mostrará las asignaciones y desplazamientos de GPIO**, proporcionando información esencial para depurar o configurar los pines GPIO.

## Controlar los indicadores LED

El reComputer R1100 proporciona tres **indicadores LED** en **rojo, azul y verde**. Puedes controlarlos usando los siguientes comandos:  

**1. Navega al directorio de los LED**  

```bash
cd /sys/class/leds/
ls
```

Esto listará los LED disponibles.

**2. Habilita los LED escribiendo en el archivo de brillo**  
Primero cambia al **modo superusuario**:  

```bash
sudo su
```

Luego, enciende los LED:  

```bash
echo 1 > /sys/class/leds/led-red/brightness
echo 1 > /sys/class/leds/led-blue/brightness
echo 1 > /sys/class/leds/led-green/brightness
```

Esto **encenderá** el LED correspondiente.

**3. Apagar los LED (opcional)**  
Para **apagar** un LED específico, usa:

```bash
echo 0 > /sys/class/leds/led-red/brightness
echo 0 > /sys/class/leds/led-blue/brightness
echo 0 > /sys/class/leds/led-green/brightness
```

## Prueba de comunicación SPI

Para verificar la **comunicación SPI**, puedes realizar una prueba de bucle de retorno **cortocircuitando los pines MISO y MOSI del módulo TPM**. Este método garantiza que los datos enviados por MOSI (Master Out, Slave In) se reciban por MISO (Master In, Slave Out).  

**Guía paso a paso**  

**1. Conéctate a Internet**  
Asegúrate de que tu dispositivo esté conectado a una red antes de continuar.

**2. Clona el repositorio `spidev-test`**  

```bash
git clone https://github.com/rm-hull/spidev-test.git
```

**3. Entra en el directorio**  

```bash
cd spidev-test
```

**4. Compila el programa `spidev_test.c`**  

```bash
gcc spidev_test.c -o spidev_test
```

**5. Ejecuta la prueba SPI**

```bash
./spidev_test -D /dev/spidev0.1 -v -p "hello"
```

- `-D /dev/spidev0.1` → Especifica el dispositivo SPI  
- `-v` → Habilita la salida detallada  
- `-p "hello"` → Envía la cadena `"hello"`  

**6. Prueba de bucle de retorno (opcional)**  

- **Cortocircuita los pines MISO y MOSI del módulo TPM** antes de ejecutar la prueba.
- Si el bus SPI funciona correctamente, la salida debería mostrar que los datos transmitidos se **reciben correctamente**.

## Escaneo de Wi‑Fi

Para listar las redes Wi‑Fi disponibles y sus detalles, ejecuta:  

```bash
sudo iwlist wlan0 scan
```

- Este comando escanea todas las redes Wi‑Fi cercanas y muestra sus SSID, intensidad de señal y tipo de cifrado.  

## Escaneo de Bluetooth  

Para escanear dispositivos Bluetooth, sigue estos pasos:  

**Abre la interfaz de control de Bluetooth:**  

```bash
sudo bluetoothctl
```

**Habilita el escaneo:**  

```bash
scan on
```

- Esto inicia el escaneo de dispositivos Bluetooth cercanos.  

## LoRa® sobre Mini-PCIe

### Configuración SPI de LoRa®  

**Clona el repositorio SX1302_HAL:**  

```bash
cd ~
git clone https://github.com/Lora-net/sx1302_hal
```

**Navega al directorio clonado:**

```bash
cd sx1302_hal
```

**Modifica el archivo de configuración:**  

Abre el archivo de configuración del dispositivo I2C:  

```bash
sudo vim ./libloragw/inc/loragw_i2c.h
```

Cambia esta línea:  

```c
#define I2C_DEVICE "/dev/i2c-1"
```

A:  

```c
#define I2C_DEVICE "/dev/i2c-3"
```

**Compila el código:**

```bash
sudo make
```

**Modifica el script de reinicio:**

Abre el script `reset_lgw.sh`:  

```bash
sudo vim ./tools/reset_lgw.sh
```

Actualiza las configuraciones de pines:

```bash
SX1302_RESET_PIN=580    # SX1302 reset  
SX1302_POWER_EN_PIN=578 # SX1302 power enable  
SX1261_RESET_PIN=579    # SX1261 reset (LBT/Spectral Scan)  
```

**Copia el script de reinicio al directorio del packet forwarder:**  

```bash
cp ~/sx1302_hal/tools/reset_lgw.sh ~/sx1302_hal/packet_forwarder/
```

**Actualiza el puerto SPI predeterminado en el archivo de configuración de LoRaWAN®:**  

Modifica el archivo `global_conf.json.sx1250.US915`:  

```bash
sed -i 's/spidev0.0/spidev0.1/g' global_conf.json.sx1250.US915
```

**Inicia el módulo LoRaWAN®:**  

```bash
cd ~/sx1302_hal/packet_forwarder
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

### Configuración USB de LoRa®

Si estás usando un módulo LoRa® USB en lugar de LoRa® SPI, sigue estos pasos. La mayoría de los comandos siguen siendo los mismos que para LoRa® SPI, excepto el paso final.

**Poner en alto el pin de reinicio del SX1302**

```bash
echo 1 > /sys/class/gpio/gpio580/value
```

**Inicia el módulo LoRaWAN® USB**

```bash
cd ~/sx1302_hal/packet_forwarder
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB
```

LoRa® USB ahora está configurado y ejecutándose en el reComputer R1100

## 4G celular sobre Mini-PCIe

Para interactuar con un módulo 4G usando comandos AT a través de `minicom`, sigue estos pasos:  

**Abre Minicom con el puerto serie y la velocidad en baudios apropiados:**  

```bash
sudo minicom -D /dev/ttyUSB2 -b 115200
```

Este comando abre Minicom con el puerto serie especificado (`/dev/ttyUSB2`) a una velocidad en baudios de **115200**.  

**Envía comandos AT al módulo 4G:**  

Una vez que Minicom esté abierto, puedes empezar a enviar **comandos AT** al módulo 4G. Por ejemplo:  

```bash
AT
```

Este comando comprueba si el módulo responde. Si el módulo funciona correctamente, deberías recibir una respuesta **"OK"**.  

**Marca un número de teléfono usando el módulo 4G:**  

Para marcar un número de teléfono, usa el comando `ATD` seguido del número de teléfono:  

```bash
ATD<phone_number>;
```

- Sustituye `<phone_number>` por el número de teléfono que quieras marcar.  
- Asegúrate de incluir un **punto y coma (;)** al final del comando para indicar el final del número de teléfono.  


## Prueba de RS485

El reComputer R1100 incluye **dos puertos RS485**. A continuación se muestran sus **puertos COM** y **archivos de dispositivo** correspondientes:  

| **Puerto RS485** | **Puerto COM** | **Etiqueta serigrafiada** | **Archivo de dispositivo** |
|---------------|-------------|----------------------|----------------|
| **RS485_1**  | COM1        | A1 / B1 / GND       | `/dev/ttyACM0` |
| **RS485_2**  | COM2        | A2 / B2 / GND       | `/dev/ttyACM1` |

**Pasos para probar la funcionalidad RS485**  

**Conecta los puertos RS485**  

Conecta físicamente **RS485_1 (A y B)** a **RS485_2 (A y B)**.  

**Ejecuta el programa de prueba RS485**  

Proporcionamos un programa de prueba para **verificar la transmisión de datos** y medir la velocidad entre los dos puertos RS485.  

Ejecuta los siguientes comandos para descargar y ejecutar el programa de prueba:  

```bash
git clone https://github.com/ackPeng/R1100_TEST.git
cd R1100_TEST
gcc -o serial_test serial_test.c
./serial_test /dev/ttyACM0 /dev/ttyACM1 115200
```

**Descripción de la prueba**  

- Este programa **envía 1MB de datos** desde **RS485_1** a **RS485_2**.  
- **Registra el tiempo de finalización** y calcula la velocidad en baudios real.  
- **Nota:** La velocidad en baudios real puede ser ligeramente inferior a la velocidad teórica, lo cual es de esperar.  

**Sigue estos pasos cuidadosamente para verificar la comunicación RS485 en el reComputer R1100.**

## Prueba de RS232

El reComputer R1100 incluye **dos puertos RS232**. A continuación se muestran los puertos COM y archivos de dispositivo correspondientes:  

| Puerto RS232 | Puerto COM | Asignación de pines | Archivo de dispositivo |
|------------|---------|-------------|--------------|
| **RS232_1** | COM3 | RX3/TX3/GND | `/dev/ttyACM2` |
| **RS232_2** | COM4 | RX4/TX4/GND | `/dev/ttyACM3` |  

**Prueba de comunicación RS232**  

Sigue estos pasos para probar la funcionalidad RS232:  

1. **Conecta los puertos:**  
   - Conecta el **TX de RS232_1** al **RX de RS232_2**.  
   - Conecta el **RX de RS232_1** al **TX de RS232_2**.  

2. **Ejecuta el programa de prueba:**  
   - Clona el repositorio del programa de prueba:  

     ```bash
     git clone https://github.com/ackPeng/R1100_TEST.git
     ```  

   - Entra en el directorio:  

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

Esta prueba envía **1MB de datos** desde RS232_1 a RS232_2 y mide el tiempo de finalización y la velocidad en baudios. Ten en cuenta que la velocidad en baudios real puede ser ligeramente inferior al valor teórico, lo cual es normal.

## Prueba de DI (Entrada Digital)

El reComputer R1100 incluye **dos puertos de Entrada Digital (DI)**, que se pueden configurar según los requisitos del usuario.  

| **Número de puertos DI** | **Puerto DI** | **GPIO extendido correspondiente** |
|-----------------------|------------|--------------------------------|
| **2**                 | **DI1**     | **GPIO530**                    |
|                       | **DI2**     | **GPIO531**                    |

**Especificaciones del puerto DI**  

- **Tipo de entrada:** PNP  
- **Tensión de entrada soportada:** **5VDC – 24VDC**  
- **Corriente:** **Hasta 1000mA**  

**Pasos para probar la funcionalidad DI**  

**Garantiza una conexión adecuada**  

Asegúrate de que el **puerto DI** del reComputer R1100 esté correctamente conectado a la **carga externa**, y también asegúrate de que el puerto **G_D** esté conectado a la **tierra (GND) de la fuente de alimentación**.

**Comprueba el estado del GPIO**  

Ejecuta los siguientes comandos para comprobar el estado de **GPIO530** (correspondiente a DI1):  

```bash
echo 530 > /sys/class/gpio/export
echo in > /sys/class/gpio/gpio530/direction
cat /sys/class/gpio/gpio530/value
```

**Interpretar el valor del GPIO**  

- **Si el nivel externo es ALTO**, la salida de `/sys/class/gpio/gpio530/value` será **0**.  
- **Si el nivel externo es LOW**, la salida de `/sys/class/gpio/gpio530/value` será **1**.  

## DO (Salida Digital)

El **reComputer R1100** incluye **dos puertos de Salida Digital (DO)**, que se pueden configurar según los requisitos del usuario.  

| **Número de puertos DO** | **Puerto DO** | **GPIO extendido correspondiente** |
|-----------------------|------------|--------------------------------|
| **2**                 | **DO1**     | **GPIO532**                    |
|                       | **DO2**     | **GPIO533**                    |

**Especificaciones del puerto DO**  

- **Tipo de salida:** Transistor  
- **Tensión de salida admitida:** **Hasta 60VDC**  
- **Capacidad de corriente:** **500mA**  

**Pasos para probar la funcionalidad DO**  

**Asegurar una conexión adecuada**  
Confirma que el **puerto DO** del reComputer R1100 esté correctamente conectado a la **carga externa**.

**Dado que el puerto DO es una salida de colector abierto y no tiene capacidad de accionamiento, utiliza una resistencia externa para elevarlo a la fuente de alimentación.**

**Configurar el nivel de salida**  
Ejecuta los siguientes comandos para establecer la salida en **HIGH** o **LOW**:  

```bash
echo 532 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio532/direction
echo 1 > /sys/class/gpio/gpio532/value  # Set output to HIGH
echo 0 > /sys/class/gpio/gpio532/value  # Set output to LOW
```

## Prueba del concentrador USB

Para verificar la funcionalidad del **concentrador USB**, sigue estos pasos:  

**Comprobar si se detecta el concentrador USB**  

Ejecuta el siguiente comando para listar todos los dispositivos USB conectados, incluidos los concentradores:  

```bash
lsusb
```

**Verificar la detección del concentrador USB**

- Este comando mostrará información sobre todos los **dispositivos USB** conectados a tu sistema, incluidos los **concentradores USB**.  
- Si el concentrador USB **funciona correctamente**, sus detalles deberían aparecer en la salida del comando.  
- Si el concentrador **no aparece en la lista**, puede haber un problema con el **propio concentrador o con su conexión** al sistema.  

**Solución de problemas (si no se detecta el concentrador USB)**  

- Comprueba la **conexión física** del concentrador USB.  
- Intenta conectar el concentrador a un **puerto USB diferente**.  
- Reinicia el dispositivo y vuelve a ejecutar `lsusb`.  
- Si el problema persiste, es posible que el concentrador esté defectuoso.  

## Prueba del RTC (Reloj en Tiempo Real)

Para verificar la **funcionalidad del RTC** en el **reComputer R1100**, sigue estos pasos:  

**Desactivar la sincronización automática de hora**  

Antes de probar el RTC, detén y desactiva la sincronización automática de hora para evitar conflictos:  

```bash
sudo systemctl stop systemd-timesyncd  
sudo systemctl disable systemd-timesyncd  
```

**Establecer manualmente la hora del RTC**

Configura el RTC a una fecha y hora específicas (por ejemplo, 12 de noviembre de 2024 a las 12:00 PM):  

```bash
sudo hwclock --set --date "2024-11-12 12:00:00"
```

**Sincronizar la hora del RTC con el sistema**

Actualiza la hora del sistema para que coincida con la hora del RTC:  

```bash
sudo hwclock --hctosys
```

**Verificar la hora del RTC**  
Comprueba la hora actual almacenada en el RTC:  

```bash
sudo hwclock -r
```

Este comando mostrará la hora del RTC.

**Probar la retención del RTC**  

- **Desconecta la fuente de alimentación** del RTC.  
- **Espera unos minutos**.  
- **Vuelve a conectar la alimentación** y comprueba de nuevo la hora del RTC usando:  

  ```bash
  sudo hwclock -r
  ```

- Si la hora sigue siendo correcta, el RTC funciona correctamente.  

## Prueba del temporizador watchdog

Para probar el **temporizador watchdog** en el **reComputer R1100**, sigue estos pasos:  

**Instalar el software del watchdog**  

Asegúrate de que el paquete del watchdog esté instalado:  

```bash
sudo apt install watchdog
```

**Configurar el watchdog**  

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

**Iniciar el servicio de watchdog**  
Habilita e inicia el servicio de watchdog:  

```bash
sudo systemctl start watchdog
```

**Probar el watchdog simulando un bloqueo del sistema**

Dispara un **fallo del kernel** para comprobar si el watchdog **reinicia automáticamente** el sistema:  

```bash
sudo su
echo 1 > /proc/sys/kernel/sysrq
echo "c" > /proc/sysrq-trigger
```

**Supervisar el sistema**  
Comprueba si el sistema **se reinicia automáticamente** después del **período de tiempo de espera** especificado.  

**Si el reinicio se produce como se espera, el watchdog funciona correctamente.**  

## Control del zumbador mediante GPIO  

El zumbador está asignado al GPIO 587. Utiliza los siguientes comandos para encenderlo y apagarlo:  

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

## Prueba de la cámara CSI

Para probar la **cámara CSI** en el **reComputer R1100**, sigue estos pasos:  

**Modificar el archivo de configuración**  

Edita el archivo **config.txt** para habilitar el módulo de la cámara:  

```bash
sudo nano /boot/firmware/config.txt
```

Añade la siguiente línea al **final** del archivo:  

```ini
dtoverlay=imx219,cam0
```

**Reiniciar el sistema**

Reinicia para aplicar los cambios:  

```bash
sudo reboot
```

**Comprobar la detección de la cámara**  

Después de reiniciar, verifica si la cámara es detectada:  

```bash
libcamera-jpeg --list-cameras
```

---

**Probar la cámara**  

Ejecuta el siguiente comando para activar la cámara:  

```bash
rpicam-hello --timeout 0
```

**Si la vista previa de la cámara se inicia correctamente, ¡la configuración está completa!**  

## Comprobación de la conexión TPM 2.0

Si has conectado un **módulo TPM 2.0** a tu dispositivo, puedes verificar su detección usando el siguiente comando:  

```bash
ls /dev | grep tpm
```  

**Interpretación de la salida:**  

- Si ves **`tpm0`** y **`tpmrm0`** en la salida, confirma que el **TPM (Trusted Platform Module)** se ha detectado correctamente y está disponible.  
- Esto indica que el hardware TPM es reconocido y accesible, lo que te permite continuar con funcionalidades o aplicaciones relacionadas con TPM.  

**Si los dispositivos aparecen en la lista, tu módulo TPM está correctamente conectado y listo para su uso.**  

## Interacción con ATECC608A y generación de un número de serie aleatorio

Para comunicarte con el dispositivo **ATECC608A** y generar un número de serie aleatorio, sigue estos pasos:  

**Clonar el repositorio `atecc-util`:**  

```bash
git clone https://github.com/wirenboard/atecc-util.git
```  

**Navegar al directorio `atecc-util`:**  

```bash
cd atecc-util
```  

**Clonar el repositorio `cryptoauthlib`:**  

```bash
git clone https://github.com/wirenboard/cryptoauthlib.git
```  

**Compilar la utilidad ATECC:**

```bash
make
```  

**Generar un número de serie aleatorio:**  

```bash
./atecc -b 1 -s 192 -c 'serial'
```  

- **`-b 1`** → Usa la ranura 1.  
- **`-s 192`** → Establece el tamaño del número de serie en **192 bits**.  
- **`-c 'serial'`** → Genera un número de serie aleatorio.  

**Salida esperada:**  

El número de serie generado se mostrará, por ejemplo:  

```bash
01235595d3d621f0ee
```  

Este método permite la interacción con el dispositivo **ATECC608A**, lo que te permite realizar operaciones como generar números de serie aleatorios de forma eficiente.  

## Interacción con la EEPROM

Para leer y escribir datos en una **EEPROM** (Memoria de Solo Lectura Programable y Borrable Eléctricamente), sigue estos pasos:  

**Conceder permisos completos al archivo de dispositivo de la EEPROM:**  

```bash
sudo chmod 777 /sys/bus/i2c/devices/6-0050/eeprom
```  

**Escribir datos en la EEPROM:**  

```bash
echo "This is a test string" > /sys/bus/i2c/devices/6-0050/eeprom
```  

**Leer el contenido de la EEPROM en formato hexadecimal:**  

```bash
cat /sys/bus/i2c/devices/6-0050/eeprom | hexdump -C
```  

## Comprobación de la detección del SSD

Para listar todos los discos conectados, incluido el SSD, utiliza el siguiente comando:  

```bash
sudo fdisk -l
```  

Este comando mostrará una lista de todos los dispositivos de almacenamiento detectados. Busca las entradas que representen tu SSD, normalmente etiquetadas como:  

- `/dev/sda`  
- `/dev/sdb`  
- `/dev/sdc`, etc.  

Una vez que identifiques la entrada correcta del SSD, puedes continuar con las **tareas de particionado, formateo u otras tareas de gestión de discos** según sea necesario.

## SAI (UPS) para apagado seguro

Una conexión **GPIO6** entre la **CPU y la entrada de alimentación de CC** se utiliza para notificar a la CPU cuando la fuente de alimentación se interrumpe. La CPU debe ejecutar **tareas urgentes mediante un script** antes de que se agote la energía del supercondensador y luego iniciar un **apagado seguro (`$shutdown`)**.  

**Método de apagado alternativo**  
Otra forma de usar esta función es **disparar un apagado cuando el pin GPIO cambia de estado**. El pin GPIO especificado se configura como una **tecla de entrada**, generando **eventos KEY_POWER**. Estos eventos son gestionados por **systemd-logind**, que inicia automáticamente un apagado del sistema.  

Para habilitar esta función, consulta `/boot/overlays/README`, luego modifica `/boot/firmware/config.txt` añadiendo:  

```ini
dtoverlay=gpio-shutdown,gpio_pin=6,active_low=1
```

:::note

1. Para **detalles de la funcionalidad de la SAI**, ponte en contacto con nosotros.  
2. La **señal de alarma es activa en LOW**.  

:::
---

#### Código Python para apagado seguro  

El siguiente script de Python muestra **cómo detectar el modo de funcionamiento** de la **SAI de supercondensador a través de GPIO6**. Cuando el sistema detecta un evento de apagado, **guarda automáticamente los datos y se apaga de forma segura**.  

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

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
