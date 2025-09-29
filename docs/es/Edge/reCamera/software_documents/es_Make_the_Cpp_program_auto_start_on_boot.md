---
description: Este wiki demuestra cómo configurar un programa para que se inicie automáticamente al arrancar.
title: Hacer que el programa C++ se inicie automáticamente al arrancar.
keywords:
  - reCamera
  - C++
  - Auto-start
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/make_the_cpp_program_auto_start_on_boot
last_update:
  date: 07/26/2025
  author: Liangyuxin

no_comments: false 

---

# Hacer que el programa C++ se inicie automáticamente al arrancar

Este documento demuestra cómo configurar un programa para que se inicie automáticamente al arrancar.

## Método 1: Escribir un script de inicio

ReCamera utiliza un **sistema SysVinit ligero** y realiza la inicialización a través de **/etc/inittab**. Cuando recamera se enciende, lee el contenido de **inittab** que inicia el **/etc/init.d/rcS** con el siguiente código:

```
# now run any rc scripts
::sysinit:/etc/init.d/rcS
```

El archivo **rcS** define que el programa iniciará secuencialmente los scripts que comiencen con "S??":

```
for i in /etc/init.d/S??* ;do

     # Ignore dangling symlinks (if any).
     [ ! -f "$i" ] && continue

     case "$i" in
 *.sh)
     # Source shell script for speed.
     (
  trap - INT QUIT TSTP
  set start
  . $i
     )
     ;;
 *)
     # No sh extension, so fork subprocess.
     $i start
     ;;
    esac
done
```

En el directorio **/etc/init.d**, puedes añadir el script de inicio automático de tu programa. (Scripts con prefijo "S" seguido de un número, el número determina su orden de ejecución en el arranque.)

Ejemplo de nombres:

- **S10network**: Inicia temprano (número menor = ejecución más temprana)
- **S99myprogram**: Inicia tarde (número mayor = ejecución más tardía)

El contenido del script de inicio automático debe incluir:

- Sección de Definición de Variables
  - Define los parámetros de configuración requeridos para la operación del servicio.
  - Variables Clave:
    - **DAEMON**: Ruta al archivo ejecutable
    - **PIDFILE**: Ubicación del archivo de registro del ID del proceso
    - **LD_LIBRARY_PATH**: Ruta de biblioteca personalizada
- Sección de Funciones Funcionales
  - Incluye cuatro funciones principales:
    - **start()**: Inicia el servicio
    - **stop()**: Detiene el servicio
    - **restart()**: Reinicia el servicio
    - **status()**: Verifica el estado del servicio
- Lógica de Control Principal
  - Llama a la función correspondiente basándose en los argumentos de entrada.

Puedes referirte a scripts existentes para escribir tu propio script. Aquí tienes un ejemplo de **sccma-node** como referencia:

```
#!/bin/sh

### BEGIN INIT INFO
# Provides:          sscma-node
# Required-Start:    $all
# Required-Stop:     $all
# Default-Start:     2 3 4 5
# Default-Stop:      0 1 6
# Short-Description: Start SSCMA Node at boot time
# Description:       Start SSCMA Node service.
### END INIT INFO

DAEMON=/usr/local/bin/sscma-node
DAEMON_OPTS="--start"
NAME=sscma-node
DESC="SSCMA Node Service"
PIDFILE=/var/run/$NAME.pid
LOGFILE=/var/log/$NAME.log
USER=root

# Set up the library path if necessary
LD_LIBRARY_PATH=/mnt/system/lib:/mnt/system/usr/lib:/mnt/system/usr/lib/3rd:$LD_LIBRARY_PATH
export LD_LIBRARY_PATH

start() {
    echo "Starting $DESC: $NAME"
    if [ -f $PIDFILE ]; then
        PID=$(cat $PIDFILE)
        if [ -n "$PID" ] && kill -0 "$PID" 2>/dev/null; then
            echo "$NAME is already running (PID: $PID)."
            return 1
        else
            echo "Removing stale PID file."
            rm -f $PIDFILE
        fi
    fi
    start-stop-daemon -S -q -m -b -p $PIDFILE --exec $DAEMON -- $DAEMON_OPTS
    [ $? = 0 ] && echo "OK" || echo "FAIL"
}

stop() {
    echo "Stopping $DESC: $NAME"
    if [ -f $PIDFILE ]; then
        PID=$(cat $PIDFILE)
        if [ -n "$PID" ] && kill -0 "$PID" 2>/dev/null; then
            start-stop-daemon -K -q -p $PIDFILE
            rm -f $PIDFILE
            [ $? = 0 ] && echo "OK" || echo "FAIL"
        else
            echo "Process not running but PID file exists, cleaning up."
            rm -f $PIDFILE
        fi
    else
        echo "$NAME is not running."
    fi
}

restart() {
    stop
    start
}

status() {
    if [ -f $PIDFILE ]; then
        PID=$(cat $PIDFILE)
        if [ -n "$PID" ] && kill -0 "$PID" 2>/dev/null; then
            echo "$NAME is running (PID: $PID)."
        else
            echo "$NAME PID file exists but process is not running."
        fi
    else
        echo "$NAME is not running."
    fi
}

case "$1" in
    start)
        start
        ;;
    stop)
        stop
        ;;
    restart)
        restart
        ;;
    status)
        status
        ;;
    *)
        echo "Usage: $0 {start|stop|restart|status}"
        exit 1
        ;;
esac

exit 0
```

Luego, otorga permisos de ejecución a tu script:

```
sudo chmod +x {your script}
ls -l
```

Coloca el archivo ejecutable de tu programa en la ruta especificada, típicamente: **/usr/local/bin**:

```
sudo scp {your program} /usr/local/bin
sudo chmod +x {your program}
ls -l
```

Prueba si el script y el programa pueden iniciarse normalmente:

```
sudo /etc/init.d/{your script} start
cd /usr/local/bin
sudo {your program}
```

Si tiene éxito, reinicia tu recámara.

## Método 2: Instalar el proyecto C++ usando opkg

También puedes preconfigurar el script de inicio automático dentro de tu proyecto C++, luego instalarlo en la recámara.

**Añadir el directorio Control**

En tu proyecto, necesitas incluir los siguientes scripts de **control**:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Make_the_Cpp_program_auto_start_on_boot/1.png" /></div>

- **preinst** (Script de Pre-instalación)
  - Se ejecuta antes de que el paquete sea instalado. La función de este script es:
    - Verificar si el sistema cumple los requisitos de instalación
    - Detener servicios de versiones anteriores que serán reemplazados
    - Respaldar archivos de configuración existentes
    - Verificar que las dependencias estén satisfechas
    - Crear usuarios/grupos del sistema necesarios
    - Momento de Ejecución: Se ejecuta durante dpkg -i o apt install, antes de que los archivos sean desplegados.

Por ejemplo:

```
#!/bin/sh
set -e

if [ -f /etc/init.d/S93sscma-supervisor ]; then
    /etc/init.d/S93sscma-supervisor stop
fi

exit 0
```

- **postinst** (Script de Post-instalación)
  - Se ejecuta después de que el paquete esté completamente instalado. La función de este script es:
    - Iniciar servicios recién instalados
    - Actualizar cachés o bases de datos del sistema (ej., ldconfig, update-rc.d)
    - Ejecutar pasos de configuración inicial
    - Establecer permisos/propiedad de archivos
    - Actualizar el sistema de alternativas (ej., update-alternatives)
    - Mostrar instrucciones de post-instalación
    - Momento de Ejecución: Se ejecuta durante dpkg -i o apt install, después de que todos los archivos sean desplegados.

Por ejemplo:

```
#!/bin/sh
set -e

if [ -f /etc/init.d/S93sscma-supervisor ]; then
    /etc/init.d/S93sscma-supervisor start   
fi


exit 0
```

- **prerm** (Script de Pre-eliminación)
  - Se ejecuta antes de que el paquete sea desinstalado. La función de este script es:
    - Detener servicios relacionados de manera elegante
    - Verificar si hay procesos usando el software (prevenir eliminación forzada)
    - Respaldar datos de usuario antes de la eliminación
    - Limpiar archivos temporales o recursos de tiempo de ejecución
    - Momento de Ejecución: Se ejecuta durante dpkg -r o apt remove, antes de que los archivos sean eliminados.

Por ejemplo:

```
#!/bin/sh
set -e

if [ -f /etc/init.d/S93sscma-supervisor ]; then
    /etc/init.d/S93sscma-supervisor stop
fi

exit 0
```

**Añadir el directorio rootfs**

Luego coloca el script de inicio automático en la ruta correspondiente:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Make_the_Cpp_program_auto_start_on_boot/2.png" /></div>

Coloca todo el proyecto en un entorno de compilación cruzada de Linux para compilación y empaquetado. Antes del empaquetado, debes verificar si los archivos están en formato de terminación de línea LF compatible con Linux. Si se encuentra formato CRLF (estilo Windows), conviértelos primero.

```
dos2unix {your files}
```

Entonces,

```
cd {your project}
cmake -B build -DCMAKE_BUILD_TYPE=Release .
cmake --build build
cd build && cpack
scp {your project.deb} recamera@192.168.42.1:/tmp/
```

En la terminal de recamera, usa opkg para instalar:

```
sudo opkg install /tmp/{your project.deb}
```

Si tu proyecto fue instalado previamente, desinstálalo primero.

```
sudo opkg remove {your program}

sudo opkg install /tmp/{your project.deb}
```

Para más detalles, consulte nuestro [repositorio de GitHub](https://github.com/Seeed-Studio/OSHW-reCamera-Series).

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/OSHW-reCamera-Series" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar la Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

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
