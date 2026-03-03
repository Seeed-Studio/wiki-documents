---
description: Este wiki proporciona pasos detallados para implementar comunicación EtherCAT en reComputer Jetson para aplicaciones de control de automatización industrial en tiempo real.
title: Implementar Comunicación Ethercat en reComputer
keywords:
- EtherCAT
- reComputer
- Jetson
- Comunicación en tiempo real
- Automatización industrial
- SOEM
- Control de robótica
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/recomputer-robotics_2.webp
slug: /es/recomputer_ethercat_communication
last_update:
  date: 2025-09-05
  author: Zibo
---

<div align="center">
    <img width={600}
    src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-100001302_recomputer_robotics_j3011_with_gmsl_extension.jpg" />
</div>

<div style={{ textAlign: "justify" }}>
EtherCAT (Ethernet for Control Automation Technology) es un protocolo Ethernet industrial de alto rendimiento y código abierto diseñado para control de automatización en tiempo real en sistemas de automatización, robótica y movimiento. Este wiki te mostrará cómo realizar comunicación EtherCat en la Serie reComputer Jetson.
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J4012-with-GMSL-extension-board-p-6537.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
</a></div>

## Prerrequisitos

- reComputer(con Jetpack 6.2 preinstalado)
- Cable Ethernet
- Dispositivo Esclavo EtherCAT


## Verificación de Rendimiento en Tiempo Real

Antes de implementar la comunicación EtherCAT, es crucial verificar que tu sistema reComputer cumpla con los requisitos de rendimiento en tiempo real para automatización industrial.

### Instalar Herramientas de Prueba en Tiempo Real

```bash
# Install rt-tests package for real-time latency measurement
sudo apt update
sudo apt install rt-tests -y
```

### Ejecutar Cyclictest

```bash
# Run cyclictest with 6 threads and priority 80
sudo cyclictest -t 6 -p 80
```

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/software/ethercat/cyc1.png" />
</div>

Antes de habilitar `jetson_clocks`, puedes observar que la latencia de algunos hilos es relativamente alta. Por lo tanto, necesitamos habilitar `jetson_clocks` con el siguiente comando:
```bash
sudo jetson_clocks
```
<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/software/ethercat/cyc2.png" />
</div>
:::info
**Análisis de Rendimiento en Tiempo Real:**
- Latencia máxima: 34 microsegundos
- Latencia promedio: 2-6 microsegundos  
- Los 6 hilos de prueba muestran latencia estable dentro del rango de 9-34 microsegundos
- Carga del sistema: 0.00
- La distribución de latencia es uniforme y consistente

Este rendimiento cumple con el requisito de aplicaciones en tiempo real estricto de menos de 100 microsegundos, haciéndolo adecuado para control de robótica y aplicaciones de automatización industrial.
:::

## Descripción General de la Biblioteca SOEM

<div style={{ textAlign: "justify" }}>
SOEM (Simple Open EtherCAT Master) es una biblioteca maestra EtherCAT ligera y de código abierto que proporciona a los desarrolladores una forma portátil y flexible de establecer comunicación EtherCAT en tiempo real. Aunque NVIDIA Jetson no tiene una interfaz de hardware EtherCAT nativa, SOEM permite la comunicación EtherCAT completamente por software usando tramas Ethernet sin procesar a través de interfaces de red estándar.
</div>

### Características Clave

- **Implementación basada en software** - No se requiere hardware especial
- **Capaz de tiempo real** - Optimizado para comunicación de baja latencia
- **Multiplataforma** - Funciona en Linux, Windows y sistemas embebidos
- **Código abierto** - Libre para usar y modificar
- **Soporte para múltiples esclavos** - Puede controlar numerosos dispositivos EtherCAT

## Conexión de Hardware

Conecta tu red EtherCAT usando la siguiente configuración:

1. **Usa un cable Ethernet estándar** (Cat5e o superior recomendado)
2. **Conecta reComputer (Maestro)** a **Dispositivo Esclavo EtherCAT**

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/software/ethercat/hc.jpg" />
</div>


## Instalación de la Biblioteca SOEM

**Paso 1.** Clonar Repositorio SOEM

```bash
# Clone the SOEM library from GitHub
git clone https://github.com/OpenEtherCATsociety/SOEM
cd SOEM
```

**Paso 2.** Compilar e Instalar

```bash
# Create build directory
mkdir build
cd build

# Configure with CMake
cmake ..

# Compile with 4 parallel jobs
make -j4

# Install system-wide
sudo make install
```

## Prueba de Comunicación EtherCAT

**Paso 1.** Identificar Interfaz de Red:
```bash
# Check available network interfaces
ifconfig
```

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/software/ethercat/ifname.png" />
</div>

**Paso 2.** Navegar a la muestra slaveinfo y ejecutar el programa de detección:

```bash
# Navigate to slaveinfo sample
cd /path/to/SOEM/build/samples/slaveinfo

# Run slave detection (replace enP8p1s0 with your interface name)
sudo ./slaveinfo enP8p1s0
```

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/software/ethercat/slaver_info.png" />
</div>

:::success
**Verificación Exitosa:**
Si ves "slave found" en la salida, confirma que:
- La pila de software SOEM está funcionando correctamente
- El dispositivo esclavo EtherCAT está conectado correctamente
- El enlace de comunicación está establecido
:::

## Ejemplos de Comunicación Básica

### Ejemplo en C

Crea un programa simple en C para demostrar comunicación EtherCAT básica:

<details>
<summary> ethercat_communication_test.c </summary>

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <stdint.h>
#include <sys/time.h>

// EtherCAT includes
#include "ethercat.h"

// Function prototypes
void print_state_info(const char* state_name, int success);
void set_control_mode(int mode);
void read_control_mode(void);
void set_servo_parameters(void);
void configure_pdo_mapping(void);
void sleep_ms(int milliseconds);

int main(int argc, char *argv[])
{
    int ret;
    char *ifname = "enP8p1s0";  // Network interface name

    printf("EtherCAT Communication Test - C Version\n");
    printf("=======================================\n\n");

    // Initialize EtherCAT communication
    printf("Initializing EtherCAT communication...\n");

    // Initialize EtherCAT master
    if (ec_init(ifname)) {
        printf("✅ EtherCAT master initialized successfully\n");
    } else {
        printf("❌ Failed to initialize EtherCAT master\n");
        return -1;
    }

    // Find and configure slaves
    if (ec_config_init(FALSE) > 0) {
        printf("✅ Found %d slaves\n", ec_slavecount);
    } else {
        printf("❌ No slaves found\n");
        ec_close();
        return -1;
    }

    // Print slave information
    printf("Found slave: %s, state: %d\n", 
           ec_slave[1].name, ec_slave[1].state);

    // Enter PRE-OP state (SDO communication allowed)
    printf("\n📡 Entering PRE-OP state (SDO communication allowed)...\n");
    ec_statecheck(0, EC_STATE_PRE_OP, EC_TIMEOUTSTATE);
    ret = ec_writestate(0);
    if (ret == EK_OK) {
        print_state_info("PRE-OP", 1);
    } else {
        print_state_info("PRE-OP", 0);
    }

    // Enter SAFE-OP state (safe PDO communication allowed)
    printf("\n📡 Entering SAFE-OP state (safe PDO communication allowed)...\n");
    ec_statecheck(0, EC_STATE_SAFE_OP, EC_TIMEOUTSTATE);
    ret = ec_writestate(0);
    if (ret == EK_OK) {
        print_state_info("SAFE-OP", 1);
    } else {
        print_state_info("SAFE-OP", 0);
    }

    // Enter OP state (full PDO communication allowed)
    printf("\n📡 Entering OP state (full PDO communication allowed)...\n");
    ec_statecheck(0, EC_STATE_OPERATIONAL, EC_TIMEOUTSTATE);
    ret = ec_writestate(0);
    if (ret == EK_OK) {
        print_state_info("OP", 1);
    } else {
        print_state_info("OP", 0);
    }

    // Switch between different control modes
    printf("\n=== Control Mode Testing ===\n");

    set_control_mode(1);  // Position control
    set_control_mode(3);  // Velocity control
    set_control_mode(4);  // Torque control
    set_control_mode(6);  // Homing
    set_control_mode(7);  // Interpolated position mode
    set_control_mode(8);  // Cyclic synchronous position mode
    set_control_mode(0);  // No mode

    // Set servo parameters
    printf("\n=== Setting Servo Parameters ===\n");
    set_servo_parameters();

    // Configure PDO mapping
    printf("\n=== Configuring PDO Mapping ===\n");
    configure_pdo_mapping();

    // Print final slave state
    printf("\nSlave state: %d\n", ec_slave[1].state);

    printf("\nEtherCAT communication test completed\n");

    // Cleanup
    ec_close();
    return 0;
}

void print_state_info(const char* state_name, int success)
{
    if (success) {
        printf("📡 Successfully entered %s state\n", state_name);
    } else {
        printf("📡 Failed to enter %s state\n", state_name);
    }
}

void set_control_mode(int mode)
{
    uint8_t mode_data = (uint8_t)mode;
    int ret;

    // Write control mode to object 0x6060
    ret = ec_SDOwrite(1, 0x6060, 0, FALSE, sizeof(mode_data), &mode_data, EC_TIMEOUTRXM);

    if (ret > 0) {
        switch(mode) {
            case 1:
                printf("✅ Successfully set position control mode\n");
                break;
            case 3:
                printf("✅ Successfully set velocity control mode\n");
                break;
            case 4:
                printf("✅ Successfully set torque control mode\n");
                break;
            case 6:
                printf("✅ Successfully set homing mode\n");
                break;
            case 7:
                printf("✅ Successfully set interpolated position mode\n");
                break;
            case 8:
                printf("✅ Successfully set cyclic synchronous position mode\n");
                break;
            case 0:
                printf("✅ Successfully set no mode\n");
                break;
            default:
                printf("✅ Successfully set mode %d\n", mode);
                break;
        }
    } else {
        printf("❌ Failed to set control mode %d\n", mode);
    }

    // Read back the current mode
    read_control_mode();
    sleep_ms(1000);
}

void read_control_mode(void)
{
    int ret;
    uint8_t mode_data;
    int wkc;

    ret = ec_SDOread(1, 0x6060, 0, FALSE, &wkc, &mode_data, sizeof(mode_data), EC_TIMEOUTRXM);

    if (ret > 0) {
        printf("Current mode: %d\n", mode_data);
    } else {
        printf("Failed to read current mode\n");
    }
}

void set_servo_parameters(void)
{
    int ret;
    uint32_t param_value;
    int wkc;

    // Set maximum position range (0x607F)
    param_value = 1000000;
    ret = ec_SDOwrite(1, 0x607F, 0, FALSE, sizeof(param_value), &param_value, EC_TIMEOUTRXM);
    if (ret > 0) {
        printf("✅ Set maximum position range: %u\n", param_value);
    } else {
        printf("❌ Failed to set position range\n");
    }

    // Read back position range
    ret = ec_SDOread(1, 0x607F, 0, FALSE, &wkc, &param_value, sizeof(param_value), EC_TIMEOUTRXM);
    if (ret > 0) {
        printf("Position range: %u\n", param_value);
    }

    // Set maximum velocity (0x6081)
    param_value = 1000000;
    ret = ec_SDOwrite(1, 0x6081, 0, FALSE, sizeof(param_value), &param_value, EC_TIMEOUTRXM);
    if (ret > 0) {
        printf("✅ Set maximum velocity: %u\n", param_value);
    } else {
        printf("❌ Failed to set velocity\n");
    }

    // Read back velocity
    ret = ec_SDOread(1, 0x6081, 0, FALSE, &wkc, &param_value, sizeof(param_value), EC_TIMEOUTRXM);
    if (ret > 0) {
        printf("Maximum velocity: %u\n", param_value);
    }

    // Set maximum acceleration (0x6083)
    param_value = 1000;
    ret = ec_SDOwrite(1, 0x6083, 0, FALSE, sizeof(param_value), &param_value, EC_TIMEOUTRXM);
    if (ret > 0) {
        printf("✅ Set maximum acceleration: %u\n", param_value);
    } else {
        printf("❌ Failed to set acceleration\n");
    }

    // Read back acceleration
    ret = ec_SDOread(1, 0x6083, 0, FALSE, &wkc, &param_value, sizeof(param_value), EC_TIMEOUTRXM);
    if (ret > 0) {
        printf("Maximum acceleration: %u\n", param_value);
    }

    printf("✅ Successfully set servo parameters\n");
}

void configure_pdo_mapping(void)
{
    int ret;
    uint8_t mapping_count;
    uint32_t mapping_data;
    int wkc;

    // Configure receive PDO mapping (1600h) - Master to slave
    printf("Configuring receive PDO mapping (1600h)...\n");

    // Clear existing mapping
    mapping_count = 0;
    ret = ec_SDOwrite(1, 0x1600, 0, FALSE, sizeof(mapping_count), &mapping_count, EC_TIMEOUTRXM);

    // Set control word mapping (6040h, 16-bit)
    mapping_data = 0x60400010;
    ret = ec_SDOwrite(1, 0x1600, 1, FALSE, sizeof(mapping_data), &mapping_data, EC_TIMEOUTRXM);

    // Set target position mapping (607Ah, 32-bit)
    mapping_data = 0x607A0020;
    ret = ec_SDOwrite(1, 0x1600, 2, FALSE, sizeof(mapping_data), &mapping_data, EC_TIMEOUTRXM);

    // Set mapping count
    mapping_count = 2;
    ret = ec_SDOwrite(1, 0x1600, 0, FALSE, sizeof(mapping_count), &mapping_count, EC_TIMEOUTRXM);

    if (ret > 0) {
        printf("✅ Receive PDO mapping configured\n");
    } else {
        printf("❌ Failed to configure receive PDO mapping\n");
    }

    // Configure transmit PDO mapping (1A00h) - Slave to master
    printf("Configuring transmit PDO mapping (1A00h)...\n");

    // Clear existing mapping
    mapping_count = 0;
    ret = ec_SDOwrite(1, 0x1A00, 0, FALSE, sizeof(mapping_count), &mapping_count, EC_TIMEOUTRXM);

    // Set status word mapping (6041h, 16-bit)
    mapping_data = 0x60410010;
    ret = ec_SDOwrite(1, 0x1A00, 1, FALSE, sizeof(mapping_data), &mapping_data, EC_TIMEOUTRXM);

    // Set actual position mapping (6064h, 32-bit)
    mapping_data = 0x60640020;
    ret = ec_SDOwrite(1, 0x1A00, 2, FALSE, sizeof(mapping_data), &mapping_data, EC_TIMEOUTRXM);

    // Set mapping count
    mapping_count = 2;
    ret = ec_SDOwrite(1, 0x1A00, 0, FALSE, sizeof(mapping_count), &mapping_count, EC_TIMEOUTRXM);

    if (ret > 0) {
        printf("✅ Transmit PDO mapping configured\n");
    } else {
        printf("❌ Failed to configure transmit PDO mapping\n");
    }

    printf("✅ PDO mapping configuration completed\n");
}

void sleep_ms(int milliseconds)
{
    usleep(milliseconds * 1000);
}

```
</details>

Crea un archivo Makefile para compilar este programa:
:::note
¡Reemplaza `SOEM_PATH` con tu propia ruta de instalación!
:::

<details>
<summary> Makefile </summary>

```Makefile
# Makefile para Prueba de Comunicación EtherCAT con Biblioteca SOEM Local

# Compilador y flags
CC = gcc
CFLAGS = -Wall -Wextra -std=c99 -O2
LDFLAGS = -lrt -lpthread

# Rutas de la biblioteca SOEM local
SOEM_PATH = /home/seeed/ethercat/SOEM
INCLUDES = -I$(SOEM_PATH)/build/install/include
LIBS = -L$(SOEM_PATH)/build -lsoem

# Ejecutables objetivo
TARGET_FULL = ethercat_communication_test
TARGET_SIMPLE = ethercat_simple_test

# Archivos fuente
SOURCES_FULL = ethercat_communication_test.c
SOURCES_SIMPLE = ethercat_simple_test.c

# Archivos objeto
OBJECTS_FULL = $(SOURCES_FULL:.c=.o)
OBJECTS_SIMPLE = $(SOURCES_SIMPLE:.c=.o)

# Objetivo por defecto
all: $(TARGET_SIMPLE)

# Construir la versión simple (recomendada)
simple: $(TARGET_SIMPLE)

# Construir la versión completa
full: $(TARGET_FULL)

# Construir el ejecutable simple
$(TARGET_SIMPLE): $(OBJECTS_SIMPLE)
	$(CC) $(OBJECTS_SIMPLE) -o $(TARGET_SIMPLE) $(LIBS) $(LDFLAGS)
	@echo "✅ ¡Construcción de versión simple completada exitosamente!"
	@echo "Ejecutar con: sudo ./$(TARGET_SIMPLE)"

# Construir el ejecutable completo
$(TARGET_FULL): $(OBJECTS_FULL)
	$(CC) $(OBJECTS_FULL) -o $(TARGET_FULL) $(LIBS) $(LDFLAGS)
	@echo "✅ ¡Construcción de versión completa completada exitosamente!"
	@echo "Ejecutar con: sudo ./$(TARGET_FULL)"

# Compilar archivos fuente
%.o: %.c
	$(CC) $(CFLAGS) $(INCLUDES) -c $< -o $@

# Limpiar archivos de construcción
clean:
	rm -f $(OBJECTS_FULL) $(OBJECTS_SIMPLE) $(TARGET_FULL) $(TARGET_SIMPLE)
	@echo "🧹 Archivos de construcción limpiados"

# Verificar instalación local de SOEM
check-soem:
	@echo "Verificando instalación local de SOEM..."
	@if [ -f "$(SOEM_PATH)/build/install/include/soem/soem.h" ]; then \
		echo "✅ Headers de SOEM encontrados en $(SOEM_PATH)/build/install/include/soem/soem.h"; \
	else \
		echo "❌ Headers de SOEM no encontrados"; \
	fi
	@if [ -f "$(SOEM_PATH)/build/libsoem.a" ]; then \
		echo "✅ Biblioteca SOEM encontrada en $(SOEM_PATH)/build/libsoem.a"; \
	else \
		echo "❌ Biblioteca SOEM no encontrada"; \
	fi

# Probar compilación
test-compile: check-soem
	@echo "Probando compilación..."
	@make clean
	@make simple
	@echo "✅ ¡Prueba de compilación exitosa!"

# Comandos de compilación manual para referencia
manual-compile:
	@echo "Comandos de compilación manual:"
	@echo "Versión simple:"
	@echo "  gcc -Wall -Wextra -std=c99 -O2 \\"
	@echo "      -I$(SOEM_PATH)/build/install/include \\"
	@echo "      ethercat_simple_test.c \\"
	@echo "      -o ethercat_simple_test \\"
	@echo "      -L$(SOEM_PATH)/build -lsoem -lrt -lpthread"
	@echo ""
	@echo "Versión completa:"
	@echo "  gcc -Wall -Wextra -std=c99 -O2 \\"
	@echo "      -I$(SOEM_PATH)/build/install/include \\"
	@echo "      ethercat_communication_test.c \\"
	@echo "      -o ethercat_communication_test \\"
	@echo "      -L$(SOEM_PATH)/build -lsoem -lrt -lpthread"

# Objetivo de ayuda
help:
	@echo "Objetivos disponibles:"
	@echo "  all           - Construir la versión simple (por defecto)"
	@echo "  simple        - Construir la versión simple"
	@echo "  full          - Construir la versión completa"
	@echo "  clean         - Eliminar archivos de construcción"
	@echo "  check-soem    - Verificar instalación local de SOEM"
	@echo "  test-compile  - Probar compilación"
	@echo "  manual-compile - Mostrar comandos de compilación manual"
	@echo "  help          - Mostrar este mensaje de ayuda"
	@echo ""
	@echo "Inicio rápido:"
	@echo "  make          # Construir el programa"
	@echo "  sudo ./ethercat_simple_test  # Ejecutar el programa"
	@echo ""
	@echo "Ubicación de la biblioteca SOEM: $(SOEM_PATH)"

```

</details>

Compila y ejecuta el programa:

```bash
make gcc -Wall -Wextra -std=c99 -O2 -I/home/seeed/ethercat/SOEM/build/install/include -c ethercat_simple_test.c -o ethercat_simple_test.o

sudo ./ethercat_simple_test
```

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/software/ethercat/conmunicate.png" />
</div>

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/software/ethercat/conmunicate.gif" />
</div>

<div style={{ textAlign: "justify" }}>
As shown above, successful EtherCat communication will modify the slave station's driving mode, and it will be able to normally read the status information of the slave station.
</div>

### Ejemplo de Python

Para aplicaciones basadas en Python, puedes usar la biblioteca pysoem:

<details>
<summary> conmunicate_test.py </summary>

```python
import pysoem          
import time           
import struct         


# Inicializar comunicación EtherCAT
# Nombre de la interfaz de red
interface_name = "enP8p1s0"

# Crear objeto maestro EtherCAT
master = pysoem.Master()

# Abrir conexión del maestro EtherCAT
master.open(interface_name)

# Inicializar esclavos
master.config_init()

slaver = master.slaves[0]

print(f"Esclavo encontrado: {slaver.name}, estado: {slaver.state}")

print("📡 Entrando al estado PRE-OP (comunicación SDO permitida)...") 
# Establecer estado del maestro a PREOP_STATE
master.state = pysoem.PREOP_STATE
# Escribir estado a la red EtherCAT
master.write_state()

# Verificar si entró exitosamente
if master.state == pysoem.PREOP_STATE:
    print("📡 Entró exitosamente al estado PRE-OP")
else:
    print("📡 Falló al entrar al estado PRE-OP")


# Entrar al estado SAFE-OP (comunicación PDO segura permitida)
master.state = pysoem.SAFEOP_STATE
master.write_state()

# Verificar si entró exitosamente
if master.state == pysoem.SAFEOP_STATE:
    print("📡 Entró exitosamente al estado SAFE-OP")
else:
    print("📡 Falló al entrar al estado SAFE-OP")

# Entrar al estado OP (comunicación PDO completa permitida)
master.state = pysoem.OP_STATE
master.write_state()

# Verificar si entró exitosamente
if master.state == pysoem.OP_STATE:
    print("📡 Maestro entró exitosamente al estado OP")
else:
    print("📡 Falló al entrar al estado OP")


# Cambiar entre diferentes modos de control

slaver.sdo_write(0x6060, 0, struct.pack('<B', 1))  # Establecer modo a control de posición
print("✅ Modo de control de posición establecido exitosamente")
print(f"Modo actual: {struct.unpack('<b', slaver.sdo_read(0x6060, 0))[0]}")
time.sleep(1)


slaver.sdo_write(0x6060, 0, struct.pack('<B', 3))  # Establecer modo a control de velocidad
print("✅ Modo de control de velocidad establecido exitosamente")
print(f"Modo actual: {struct.unpack('<b', slaver.sdo_read(0x6060, 0))[0]}")
time.sleep(1)

slaver.sdo_write(0x6060, 0, struct.pack('<B', 4))  # Establecer modo a control de torque
print("✅ Modo de control de torque establecido exitosamente")
print(f"Modo actual: {struct.unpack('<b', slaver.sdo_read(0x6060, 0))[0]}")
time.sleep(1)


slaver.sdo_write(0x6060, 0, struct.pack('<B', 6))  # Establecer modo a homing
print("✅ Modo homing establecido exitosamente")
print(f"Modo actual: {struct.unpack('<b', slaver.sdo_read(0x6060, 0))[0]}")
time.sleep(1)


slaver.sdo_write(0x6060, 0, struct.pack('<B', 7))  # Establecer modo a modo de posición interpolada
print("✅ Modo de posición interpolada establecido exitosamente")
print(f"Modo actual: {struct.unpack('<b', slaver.sdo_read(0x6060, 0))[0]}")
time.sleep(1)


slaver.sdo_write(0x6060, 0, struct.pack('<B', 8))  # Establecer modo a modo de posición síncrona cíclica
print("✅ Modo de posición síncrona cíclica establecido exitosamente")
print(f"Modo actual: {struct.unpack('<b', slaver.sdo_read(0x6060, 0))[0]}")
time.sleep(1)


slaver.sdo_write(0x6060, 0, struct.pack('<B', 0))  # Establecer modo a sin modo
print("✅ Sin modo establecido exitosamente")
print(f"Modo actual: {struct.unpack('<b', slaver.sdo_read(0x6060, 0))[0]}")
time.sleep(1)


# Establecer parámetros necesarios para configuración de control
slaver.sdo_write(0x607F, 0, struct.pack('<I', 1000000))  # Rango máximo de posición
print(f"Rango de posición: {slaver.sdo_read(0x607F, 0)[0]}")
slaver.sdo_write(0x6081, 0, struct.pack('<I', 1000000))  # Velocidad máxima
print(f"Velocidad máxima: {slaver.sdo_read(0x6081, 0)[0]}")
slaver.sdo_write(0x6083, 0, struct.pack('<I', 1000))     # Aceleración máxima
print(f"Aceleración máxima: {slaver.sdo_read(0x6083, 0)[0]}")
print("✅ Parámetros del servo establecidos exitosamente")


# Configurar mapeo PDO de recepción (1600h) - Maestro a esclavo
slaver.sdo_write(0x1600, 0, struct.pack('<B', 0))  # Limpiar mapeo existente
slaver.sdo_write(0x1600, 1, struct.pack('<I', 0x60400010))  # Palabra de control (6040h, 16-bit)
slaver.sdo_write(0x1600, 2, struct.pack('<I', 0x607A0020))  # Posición objetivo (607Ah, 32-bit)
slaver.sdo_write(0x1600, 0, struct.pack('<B', 2))  # Establecer conteo de mapeo

# Configurar mapeo PDO de transmisión (1A00h) - Esclavo a maestro
slaver.sdo_write(0x1A00, 0, struct.pack('<B', 0))  # Limpiar mapeo existente
slaver.sdo_write(0x1A00, 1, struct.pack('<I', 0x60410010))  # Palabra de estado (6041h, 16-bit)
slaver.sdo_write(0x1A00, 2, struct.pack('<I', 0x60640020))  # Posición actual (6064h, 32-bit)
slaver.sdo_write(0x1A00, 0, struct.pack('<B', 2))  # Establecer conteo de mapeo
print("✅ Configuración de mapeo PDO completada")

print(f"Estado del esclavo: {slaver.state}")

print("Prueba de comunicación EtherCAT completada")
```
</details>

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/software/ethercat/python.png" />
</div>


:::info
Antes de ejecutar el script de Python, necesitas instalar la biblioteca pysoem:
```bash
pip3 install pysoem

# Ejecutar ejemplo de Python con sudo
sudo python3 ethercat_python.py
```

:::

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte y garantizar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
