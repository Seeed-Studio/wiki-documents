---
description: Actualizar Jetson Linux Over-the-Air usando Allxon
title: Actualización OTA de NVIDIA Jetson usando Allxon
keywords:
- Sorftware Allxon
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Update-Jetson-Linux-OTA-Using-Allxon
last_update:
  date: 1/13/2023
  author: jianjing Huang
---

# Actualizar Jetson Linux Over-the-Air usando Allxon

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/thumb.png" alt="pir" width="1000" height="auto"/></p>

## Introducción

Generalmente, NVIDIA proporciona el mecanismo de "Actualización de Paquete de Carga OTA" que permite a los usuarios actualizar sus dispositivos Jetson a versiones más nuevas de JetPack. Aunque parece conveniente actualizar el SO de los dispositivos Jetson, hay un esfuerzo adicional que los usuarios necesitan hacer. Es decir, los usuarios necesitan alojar un servidor OTA para entregar el Paquete de Carga OTA a los dispositivos Jetson. Será un gran esfuerzo para los usuarios manejar además de generar el Paquete de Carga OTA.

Ahora, no necesitas preocuparte por eso. [Allxon](https://www.allxon.com) puede ayudarte a entregar el Paquete de Carga OTA a los dispositivos Jetson a través del Portal DMS de Allxon. Para usuarios o fabricantes que están a cargo de generar el Paquete de Carga OTA, es muy fácil subir el Paquete de Carga OTA. Para usuarios que quieren ejecutar la actualización del Paquete de Carga OTA para dispositivos Jetson, también es fácil distribuir nuevas versiones del Paquete de Carga OTA para flotas de dispositivos. Todo lo anterior está bien explicado paso a paso en esta wiki. ¡Así que sigue adelante y comienza a actualizar tus Dispositivos Jetson over-the-air usando Allxon!

## Flujo de trabajo

El flujo de trabajo es el siguiente:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/20.jpg" alt="pir" width="1000" height="auto"/></p>

Nos gustaría pedir a los fabricantes o desarrolladores que proporcionen a Allxon el Paquete de Carga OTA para hacer verificación. ¿Por qué Allxon querría hacer eso? Eso es porque Allxon quiere asegurar que el Paquete de Carga OTA sea funcional para los dispositivos Jetson correspondientes. Y el beneficio de la verificación por Allxon es que Allxon puede ayudarte a subir el Paquete de Carga OTA y asegurarse de que pueda funcionar. Te encontrarás con este paso más adelante en esta guía.

## Hardware soportado

La Actualización de Paquete de Carga OTA usando Allxon es soportada por el siguiente hardware:

- Kits de Desarrollo Oficiales por NVIDIA:

  - NVIDIA® Jetson Xavier™ NX Developer Kit
  - NVIDIA Jetson AGX Xavier Developer Kit
  - NVIDIA Jetson TX2 Developer Kit

- Placas Portadoras por Seeed:

  - Jetson SUB Mini PC
  - A203 Carrier Board
  - A203 (Version 2) Carrier Board
  - A205 Carrier Board
  - A206 Carrier Board

**Nota:** Al elegir SoMs para las placas portadoras anteriores, asegúrate de usar módulos Jetson Xavier NX o Jetson TX2 NX. Los módulos Jetson Nano no son soportados por este mecanismo.

## Prerrequisitos

- Cualquiera de los Dispositivos Jetson anteriores ejecutando JetPack (Base BSP)
- [Agente DMS de Allxon instalado](https://wiki.seeedstudio.com/es/Allxon-Jetson-Getting-Started) en el Dispositivo Jetson y emparejado con el Portal DMS de Allxon
- PC anfitrión con Ubuntu instalado (se recomienda sistema nativo)
- Pantalla HDMI y teclado (opcional)

**Nota:** Por favor nota que el PC anfitrión usado para esta guía fue una máquina ejecutando Ubuntu 20.04

## Comenzando

Esta guía se dividirá en 2 secciones principales. La primera sección hablará sobre cómo puedes generar un Paquete de Carga OTA y subirlo al Portal DMS de Allxon. La segunda sección hablará sobre cómo realmente realizar la actualización del Paquete de Carga OTA a tu Dispositivo Jetson usando el Portal DMS de Allxon.

Primero que todo, vamos a verificar la versión actual de L4T instalada en el Dispositivo Jetson ejecutando lo siguiente

```sh
cat /etc/nv_tegra_release
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/21.png" alt="pir" width="1000" height="auto"/></p>

Ahora procederemos a actualizar esto a L4T 32.6.1

### Generar Paquete de Carga Útil OTA y subirlo al Portal Allxon DMS

Antes de comenzar a generar el Paquete de Carga Útil OTA, aquí hay algunos conocimientos de fondo:

1. ¿Qué es un Paquete de Carga Útil OTA?

    - El Paquete de Carga Útil OTA se utiliza para actualizar dispositivos Jetson desde una versión BSP inferior a una versión más nueva.
    - Necesita ser generado basándose en **BSP BASE** y **BSP Objetivo**.
    - Lo que significa que una vez que el BSP Objetivo es el mismo pero el BSP BASE es diferente, el Paquete de Carga Útil OTA será diferente.
    - Además, el Paquete de Carga Útil OTA solo incluye el **Delta** de los archivos en lugar de una imagen completa del BSP Objetivo.

2. ¿Cuál es el papel de Allxon en este mecanismo y flujo?

    - Allxon DMS puede ayudarte a entregar el Paquete de Carga Útil OTA a los dispositivos Jetson a través del Portal DMS.
    - Los fabricantes y desarrolladores solo necesitan subir el Paquete de Carga Útil OTA al Portal Allxon DMS.
    - Los usuarios finales solo necesitan asignar el Paquete de Carga Útil OTA correspondiente a los grupos en el Portal Allxon DMS.

3. ¿Hay algún lugar que no se borre en el dispositivo después de ejecutar la actualización del Paquete de Carga Útil OTA?

    - Encontramos que los archivos bajo la ruta **"/ota**" no se borrarán después de la actualización del Paquete de Carga Útil OTA.
    - Será un lugar donde los usuarios pueden respaldar los datos importantes y restaurarlos durante el proceso del Paquete de Carga Útil OTA.

#### Preparación Inicial - BSP Base

Como se mencionó antes, el Paquete de Carga Útil OTA se genera basándose en el BSP Base y el BSP Objetivo. Así que necesitamos preparar el BSP Base y el BSP Objetivo antes de generar el Paquete de Carga Útil OTA. ¿Cómo eliges qué BSP Base necesitas preparar? Bueno, se basa en qué dispositivo quieres actualizar. Por ejemplo, si quieres actualizar un dispositivo Xavier NX ejecutando JetPack versión 4.4.4, entonces necesitas preparar BSP Base como JetPack versión 4.4.4 para Xavier NX.

- **Paso 1.** Elige la versión L4T [desde aquí](https://developer.nvidia.com/embedded/linux-tegra-archive) según la versión actualmente instalada en el dispositivo Jetson

- **Paso 2.** Descarga el Paquete de Controladores L4T (BSP) y el Sistema de Archivos Raíz de Muestra según tu placa

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/1.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 3.** Coloca ambos archivos en el mismo directorio

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/2.png" alt="pir" width="500" height="auto"/></p>

- **Paso 4.** Abre una ventana de terminal, navega al directorio anterior y extrae el Paquete de Controladores L4T (BSP)

```sh
sudo tar -vxjf <Base_BSP_file_name>.tbz2
```

- **Paso 5.** Navega al **directorio rootfs** del paquete de controladores NVIDIA extraído

```sh
cd <Base_BSP_L4T_root>/Linux_for_Tegra/rootfs
```

- **Paso 6.** Extraer el sistema de archivos de muestra al directorio rootfs

```sh
sudo tar -jxpf ../../<rootfs_file_name>.tbz2
```

- **Paso 7.** Ejecuta el script apply_binaries.sh para copiar las bibliotecas de espacio de usuario de NVIDIA al sistema de archivos de destino

```sh
cd ..
sudo ./apply_binaries.sh
```

#### Preparación Inicial - BSP Objetivo

A continuación prepararemos el BSP Objetivo. Este será el BSP que se va a actualizar en el dispositivo.

- **Paso 1.** Sigue desde el **paso 1 - paso 7** de la sección **Preparación Inicial - BSP Base** anterior, pero esta vez descarga los archivos necesarios según el BSP que se va a actualizar en el dispositivo

- **Paso 2.** Navega al directorio **rootfs/etc/init.d** del BSP Objetivo

```sh
cd <Target_BSP_L4T_root>/Linux_for_Tegra/rootfs/etc/init.d
```

- **Paso 3.** Crea un nuevo archivo llamado **install_allxon_dms.sh**

```sh
sudo nano install_allxon_dms.sh
```

**Nota:** Puedes usar cualquier editor de texto de los anteriores. Aquí se usa el **editor de texto nano**

- **Paso 4.** Copia los siguientes códigos al archivo creado anteriormente

```sh
#!/bin/bash
    
DOWNLOAD_URL="https://get.allxon.net"
RESUME_DATA="/ota/resume_data.sh"
 
SYNCAGENT_FOLDER="/var/lib/SyncAgent"
AGENT_IN_OTA_SRC_DIR="/ota/agent"
TRIAL_TAG="${AGENT_IN_OTA_SRC_DIR}/trial.tag"
TRIAL_AGENT_SN="${AGENT_IN_OTA_SRC_DIR}/agentsn"
    
verify_nvidia_jetson() {
    if [ -f "/etc/nv_tegra_release" ]; then
        echo "It's Jetson platform."
    else
        echo "It's non-Jetson platform, exit the process."
        exit 1
    fi
}
   
check_ota_folder() {
    if [ -d "/ota" ]; then
        echo "It's the case of OTA Payload Package update."
    else
        echo "It's not OTA Payload Package case."
        exit 0
    fi
}
 
resume_agent_cache() {
    echo "Resume Agent's cache"
    mkdir -p "${SYNCAGENT_FOLDER}"
 
    if [ -d "${AGENT_IN_OTA_SRC_DIR}/SyncAgent" ]; then
        echo " - Resume ${SYNCAGENT_FOLDER}"
        cp -r ${AGENT_IN_OTA_SRC_DIR}/SyncAgent/* ${SYNCAGENT_FOLDER}
    fi
 
    if [ -f "${TRIAL_AGENT_SN}" ]; then
        echo " - Resume ${TRIAL_AGENT_SN}"
        cp ${TRIAL_AGENT_SN} /var
    fi
}
 
remove_agent_cache() {
    echo "Remove Agent's cache"
 
    if [ -d "${AGENT_IN_OTA_SRC_DIR}" ]; then
        rm -rf ${AGENT_IN_OTA_SRC_DIR}
    fi
}
  
resume_data_after_ota() {
    if [ -f "${RESUME_DATA}" ]; then
        echo "Find the file ${RESUME_DATA}, start to do data resume."
        chmod 777 ${RESUME_DATA}
        bash ${RESUME_DATA}
        rm ${RESUME_DATA}
    else
        echo "No data needs to be resumed, skip the process."
    fi
}
   
check_agent_exists() {
    dpkg -l | grep "$@"
}
 
install_agent() {
    if [ -f "${TRIAL_TAG}" ]; then
        wget -qO - "$DOWNLOAD_URL/linux/trial" | bash -s -- --upgrade
    else
        wget -qO - "$DOWNLOAD_URL/linux/enterprise" | bash -s -- --upgrade
    fi
}
    
do_install() {
    verify_nvidia_jetson
    check_ota_folder
    resume_data_after_ota  
    if check_agent_exists allxon-dms-agent; then
        echo "Allxon DMS Agent is already installed in the system."
    else
        echo "Allxon DMS Agent doesn't exist, prepare to install."
        resume_agent_cache
        install_agent
        #remove_agent_cache
    fi  
}
    
do_install
```

- **Paso 5.** Navega al directorio **rootfs/etc/systemd/system** del BSP de destino

```sh
cd <Target_BSP_L4T_root>/Linux_for_Tegra/rootfs/etc/systemd/system
```

- **Paso 6.** Crea un nuevo archivo llamado **dms-install.service** y luego copia los siguientes códigos al archivo

```sh
[Unit]
Description=Service for Auto Install Allxon DMS Agent
Documentation=https://dms.allxon.com/
Wants=network-online.target
After=network.target network-online.target

[Service]
Type=simple
ExecStart=/etc/init.d/install_allxon_dms.sh
StandardOutput=null
Restart=always
RestartSec=60
DefaultStartLimitInterval=3600s
DefaultStartLimitBurst=10

[Install]
WantedBy=multi-user.target
```

- **Paso 7.** Ejecuta los siguientes comandos para cambiar los permisos de archivo y crear un enlace simbólico para **dms-install.service** del BSP de destino

```sh
sudo chmod 644 ./etc/systemd/system/dms-install.service
sudo chmod 777 ./etc/init.d/install_allxon_dms.sh
sudo ln -s /etc/systemd/system/dms-install.service ./etc/systemd/system/multi-user.target.wants/dms-install.service
```

#### Mecanismo de auto-instalación del Agente en BSP de Destino

##### Historia

- En la mayoría de los casos, los sistemas de archivos serán borrados a un estado completamente nuevo después de ejecutar la actualización del paquete de carga útil OTA, y solo hay un lugar que no será borrado, y ese es la carpeta **"/ota"**.
- Ahora, hay un problema serio. Debido a que el sistema de archivos es borrado, no hay Agente Allxon DMS en el sistema. ¿Cómo pueden los dispositivos seguir conectándose con el Portal Allxon DMS y ayudar a los usuarios a hacer gestión remota después de la actualización del paquete de carga útil OTA?
- Además, si los usuarios quieren reanudar los datos del dispositivo después de la actualización del paquete de carga útil OTA, ¿cómo podemos ayudarles a hacer eso?

##### Solución 1 - Auto-instalación del Agente Enterprise

- Para permitir que los dispositivos Jetson instalen el agente Allxon DMS con edición Enterprise después de completar la actualización de Jetpack automáticamente, necesitamos poner el script **"install_allxon_dms.sh"** bajo el directorio del sistema **"/etc/init.d/"** en el paquete de carga útil OTA, y también poner el servicio **"dms-install.service"** en el paquete de carga útil OTA.
- Cuando el dispositivo se está iniciando después de la actualización del paquete de carga útil OTA, el script será ejecutado por el sistema y entonces el agente Allxon DMS será instalado con edición Enterprise.

##### Solución 2 - Reanudar Datos del Dispositivo

- Para reanudar los datos del dispositivo, los usuarios deben poner los datos que necesitan ser reanudados bajo el directorio **"/ota"** en los dispositivos Jetson antes de ejecutar la actualización del paquete de carga útil OTA.
- Además, los usuarios necesitan implementar un script para hacer la reanudación de datos desde la carpeta **"/ota"**, y el nombre del archivo del script debe ser **"resume_data.sh"**.
- Una vez que hay un script **"resume_data.sh"** bajo **"/ota"**, el script **"install_allxon_dms.sh"** ejecutará **"resume_data.sh"** para ayudar a los usuarios a reanudar los datos desde la carpeta **"/ota"**, y este script será removido después de la ejecución para prevenir un bucle infinito.

#### Generar el paquete de carga útil OTA

Después de que tanto el BSP Base como el BSP de Destino estén preparados, solo necesitas usar el script que proporcionamos para ayudarte a generar el Paquete de Carga Útil OTA. ¡Ahora, hagámoslo!

- **Paso 1.** Navega a la versión L4T del BSP de Destino [desde aquí](https://developer.nvidia.com/embedded/linux-tegra-archive) y haz clic en **Jetson Platform Over-The-Air Update Tools** para descargarlo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/3.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 2.** Coloca el archivo descargado **Jetson Platform Over-The-Air Update Tools"(ej. ota_tools_R32.6.1_aarch64.tbz2)** dentro de la misma carpeta que **Linux_for_Tegra** para el BSP de Destino

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/4.png" alt="pir" width="500" height="auto"/></p>

- **Paso 3.** Crea un nuevo archivo llamado **generate_ota_payload.sh** y colócalo en cualquier lugar (es más fácil simplemente colocarlo bajo la misma carpeta que arriba)

- **Paso 4.** Copia el siguiente código dentro del archivo

```sh
#!/bin/bash

BASE_BSP_PATH="<Base_BSP_L4T_root>/Linux_for_Tegra"
TOT_BSP_PATH="<Target_BSP_L4T_root>/Linux_for_Tegra"
 
OTA_TOOL="<ota_tools_file_name>.tbz2"
JETSON_MODEL="<name of Jetson SoM>"
BSP_VERSION="<Base_BSP_version--ex:R32-4>"
 
TARGET_FOLDER="<location of target folder>"
 
echo "1. Export variable BASE_BSP"
export BASE_BSP=${BASE_BSP_PATH}
 
echo "2. Export variable ToT_BSP"
export ToT_BSP=${TOT_BSP_PATH}
 
echo "3. Install OTA tool to ToT_BSP"
cd ${ToT_BSP}/../
tar xpf ${OTA_TOOL}
 
echo "4. Export variable ToT_BSP to TARGET_BSP"
export TARGET_BSP=${ToT_BSP}
 
echo "5. Check all exported variables"
echo " - BASE_BSP=${BASE_BSP}"
echo " - ToT_BSP=${ToT_BSP}"
echo " - TARGET_BSP=${TARGET_BSP}"
echo " - JETSON_MODEL=${JETSON_MODEL}"
echo " - BSP_VERSION=${BSP_VERSION}"
 
echo "6. Generate the base recovery image and recovery DTB. Go to TARGET_BSP folder"
cd ${TARGET_BSP}/
 
sudo ./tools/ota_tools/version_upgrade/build_base_recovery_image.sh ${JETSON_MODEL} ${BSP_VERSION} ${BASE_BSP} ${BASE_BSP}/rootfs ${TARGET_BSP}
 
echo "7. Generate the OTA update payload package. Go to TARGET_BSP folder"
cd ${TARGET_BSP}/
 
sudo ./tools/ota_tools/version_upgrade/l4t_generate_ota_package.sh ${JETSON_MODEL} ${BSP_VERSION}
 
echo "8. Copy ota_payload_package.tar.gz to ${TARGET_FOLDER}"
cp bootloader/${JETSON_MODEL}/ota_payload_package.tar.gz ${TARGET_FOLDER}
```

- **Paso 5.** Modifica las siguientes variables dentro de los códigos anteriores

  - BASE_BSP_PATH: Ruta del directorio del BSP Base
  - TOT_BSP_PATH: Ruta del directorio del BSP Objetivo
  - OTA_TOOL: Nombre del archivo de la Herramienta OTA
  - JETSON_MODEL: Información del modelo (Por favor usa [esta página](https://docs.nvidia.com/jetson/l4t/index.html#page/Tegra%20Linux%20Driver%20Package%20Development%20Guide/quick_start.html#wwpID0EAAPNHA) para encontrar el modelo correspondiente)
  - BSP_VERSION: Versión del BSP Base
  - TARGET_FOLDER: Ruta del directorio para colocar el Paquete de Carga Útil OTA generado

- **Paso 6.** Otorga permisos de ejecución a **generate_ota_payload.sh**

```sh
chmod 777 generate_ota_payload.sh
```

- **Paso 7.** Ejecutar el script

```sh
sudo ./generate_ota_payload.sh
```

Ahora el paquete OTA Payload se generará como **ota_payload_package.tar.gz** dentro del **TARGET_FOLDER** que definimos anteriormente

#### Preparar el archivo zip del Paquete OTA Payload para la carga

- **Paso 1.** Copia las **"Herramientas de Actualización Over-The-Air de la Plataforma Jetson"** descargadas previamente (ej. ota_tools_R32.6.1_aarch64.tbz2) y colócalas dentro del **TARGET_FOLDER** creado anteriormente

- **Paso 2.** Crea un archivo llamado **run_ota_payload.sh** dentro del **TARGET_FOLDER** y copia los siguientes códigos dentro

```sh
#!/bin/bash
    
OTA_TOOL="<ota_tools_file_name>.tbz2"
OTA_PAYLOAD="ota_payload_package.tar.gz"
    
WORK_DIR="/allxon_ota" # OTA payload, tool and script should be put in this folder before updating
OTA_SRC_DIR="/ota" # Unless the emmc storage is struggle, DO NOT need to modify this path
TARGET_VERSION="<Target_BSP_version--ex:R32.6.1>"
  
DMS_BACKUP_SERVICE="dms-backup.service"
BACKUP_AGENT_CACHE="backup_agent_cache.sh"
   
release_space_rm_ota_files() {
    echo "Release unused files and space..."
   
    if [ -f "${OTA_PAYLOAD}" ]; then
        echo " - Remove ${OTA_PAYLOAD}"
        sudo rm ${OTA_PAYLOAD}
    fi
   
    if [ -f "${OTA_TOOL}" ]; then
        echo " - Remove ${OTA_TOOL}"
        sudo rm ${OTA_TOOL}
    fi     
}
  
enable_backup_agent_cache() {
    echo "Enable backup Agent's cache service"
    chmod 777 ${BACKUP_AGENT_CACHE}
    chmod 644 ${DMS_BACKUP_SERVICE}
 
    cp ${BACKUP_AGENT_CACHE} /etc/init.d/
    cp ${DMS_BACKUP_SERVICE} /etc/systemd/system/
  
    systemctl daemon-reload
    systemctl enable ${DMS_BACKUP_SERVICE}
}
   
   
if [ ! -f "/etc/nv_tegra_release" ]; then
    sudo echo "Not Supported"
    exit 1
fi
    
REVISION=$(cat /etc/nv_tegra_release | cut -d "," -f 2 | cut -d " " -f 3 | sed 1q) > /dev/null
    
if [ "$REVISION" == "" ]; then
    echo "Error!"
    exit 1
else
    if [ "$REVISION" == "$TARGET_VERSION" ]; then
        echo "Update to JetPack $REVISION success!"
        release_space_rm_ota_files
        exit 0
    else
        echo "It's JetPack $REVISION, need to do update!"
        enable_backup_agent_cache
    fi
fi
    
echo "1. Create ${OTA_SRC_DIR} directory"
    
sudo mkdir -p ${OTA_SRC_DIR}
    
echo "2. Move ${OTA_PAYLOAD} to ${OTA_SRC_DIR}"
    
sudo mv ${OTA_PAYLOAD} ${OTA_SRC_DIR}
    
echo "3. Extract ${OTA_TOOL}"
    
tar -jxvf ${OTA_TOOL}
    
echo "4. Set variable WORKDIR"
    
export WORKDIR=${WORK_DIR}
    
echo "WORKDIR=${WORKDIR}"
    
echo "5. Change directory to ${WORKDIR}/Linux_for_Tegra/tools/ota_tools/version_upgrade"
    
cd ${WORKDIR}/Linux_for_Tegra/tools/ota_tools/version_upgrade
    
echo "6. Execute nv_ota_start.sh"
    
sudo ./nv_ota_start.sh /dev/mmcblk0 ${OTA_SRC_DIR}/ota_payload_package.tar.gz

```

- **Paso 3.** Modifica las variables del script "run_ota_payload.sh" anterior según los requisitos y condiciones si es necesario

  - OTA_TOOL (Solo asegúrate de que el nombre del archivo sea correcto o no)
  - OTA_PAYLOAD (Solo asegúrate de que el nombre del archivo sea correcto o no)
  - TARGET_VERSION (Según la versión BSP objetivo, el formato es "Rxx.x.x")

- **Paso 4.** Crea un archivo llamado **dms-backup.service** dentro de **TARGET_FOLDER** y copia los siguientes códigos dentro

```sh
[Unit]
Description=Back up Allxon DMS Agent cache during Pre-Shutdown Processes
DefaultDependencies=no
Before=shutdown.target reboot.target halt.target
 
[Service]
Type=oneshot
User=root
Group=root
ExecStart=/etc/init.d/backup_agent_cache.sh
 
[Install]
WantedBy=halt.target reboot.target shutdown.target
```

- **Paso 5.** Crea un archivo llamado **backup_agent_cache.sh** dentro de **TARGET_FOLDER** y copia los siguientes códigos dentro

```sh
#!/bin/bash
 
SYNCAGENT_FOLDER="/var/lib/SyncAgent"
TRIAL_TAG="/usr/share/allxon-dms-agent/trial.tag"
TRIAL_AGENT_SN="/var/agentsn"
AGENT_IN_OTA_SRC_DIR="/ota/agent"
 
backup_agent_cache() {
    echo "Backup Agent's cache"
    sudo mkdir -p "${AGENT_IN_OTA_SRC_DIR}"
 
    if [ -d "${SYNCAGENT_FOLDER}" ]; then
        echo " - Copy ${SYNCAGENT_FOLDER}"
        sudo cp -r ${SYNCAGENT_FOLDER} ${AGENT_IN_OTA_SRC_DIR}
    fi
 
    if [ -f "${TRIAL_TAG}" ]; then
        echo " - Copy ${TRIAL_TAG}"
        sudo cp ${TRIAL_TAG} ${AGENT_IN_OTA_SRC_DIR}
 
        if [ -f "${TRIAL_AGENT_SN}" ]; then
            echo " - Copy ${TRIAL_AGENT_SN}"
            sudo cp ${TRIAL_AGENT_SN} ${AGENT_IN_OTA_SRC_DIR}
        fi
    fi
}
 
backup_agent_cache
```

- **Paso 6.** Navega a **TARGET_FOLDER** desde una ventana de terminal y ejecuta el siguiente comando para crear un archivo zip que incluya los archivos anteriores

```sh
zip ota_payload.zip *
```

Ahora la **TARGET_FOLDER** se verá como se muestra a continuación con el archivo **ota_payload.zip** generado

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/5.png" alt="pir" width="400" height="auto"/></p>

#### Subir el archivo zip del Paquete de Carga OTA

Después de generar el archivo zip que se utilizará para hacer el Paquete de Carga OTA, podemos comenzar a subir este archivo zip al Portal DMS de Allxon o a tu propio almacenamiento.

Si te gustaría pedirle a Allxon que haga la verificación y suba el archivo zip, solo necesitas entregar este paquete a Allxon [contactándolos aquí](https://www.allxon.com/contact). Entonces puedes omitir esta sección.

Si te gustaría subir el archivo zip por ti mismo, por favor sigue los pasos a continuación

- **Paso 1.** Visita el [Portal DMS de Allxon](https://dms.allxon.com/) e inicia sesión

**Nota:** Asegúrate de seguir [este wiki](https://wiki.seeedstudio.com/es/Allxon-Jetson-Getting-Started) para instalar el Agente DMS de Allxon en el Dispositivo Jetson y emparejarlo con el Portal DMS de Allxon

- **Paso 2.** Navega a la página **Applications** y haz clic en **Register** para registrar una nueva aplicación

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/6.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 3.** Completa la información como se muestra a continuación y haz clic en **Next**

  - Application Name: brand_model_BaseBSP_to_TargetBSP
  - App GUID: brand_model_BaseBSP_to_TargetBSP
  - Platform: Linux

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/8.png" alt="pir" width="400" height="auto"/></p>

- **Paso 4.** Añade una descripción y haz clic en **Register**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/9.png" alt="pir" width="400" height="auto"/></p>

Ahora verás la aplicación creada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/10.1.png" alt="pir" width="650" height="auto"/></p>

- **Paso 5.** Haz clic en ella y haz clic en el signo **+** bajo la sección **Versions**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/11.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 6.** Añade un número de versión y completa el comando de instalación basado en los siguientes 2 escenarios para adaptarse a tus necesidades

1. Si te gustaría subir el archivo zip al Portal DMS de Allxon, por favor usa los comandos de instalación como se muestra a continuación.

```sh
mkdir -p /allxon_ota
unzip -o /var/lib/SyncAgent/download/"Application registered name" -d /allxon_ota/
chmod 777 /allxon_ota/run_ota_payload.sh
rm -rf /var/lib/SyncAgent/download/*
cd /allxon_ota/ && /allxon_ota/run_ota_payload.sh
shutdown -r +5 "Restart the system to upgrade the JetPack will be started in 5 mins."
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/12.png" alt="pir" width="400" height="auto"/></p>

**Nota:**: "Application registered name" debe cambiarse por el nombre de la aplicación que creaste anteriormente. Por ejemplo: **"jetson-xavier-nx-devkit-emmc_4.4_to_4.6**

2. Si deseas subir el archivo zip a tu propio almacenamiento o sitio, utiliza los comandos de instalación que se muestran a continuación.

```sh
mkdir -p /allxon_ota
wget -qO /allxon_ota/ota_payload.zip "ota_payload_package_download_url"
unzip -o /allxon_ota/ota_payload.zip -d /allxon_ota/
chmod 777 /allxon_ota/run_ota_payload.sh
rm /allxon_ota/ota_payload.zip
cd /allxon_ota/ && /allxon_ota/run_ota_payload.sh
shutdown -r +5 "Restart the system to upgrade the JetPack will be started in 5 mins."
```

- **Paso 7.** Selecciona el archivo **ota_payload.zip** generado anteriormente para subirlo y una vez que la carga haya terminado, haz clic en **Create**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/13.png" alt="pir" width="400" height="auto"/></p>

- **Paso 8.** Ingresa una **Version Description** y haz clic en **Save** para guardar la aplicación

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/14.png" alt="pir" width="400" height="auto"/></p>

- **Paso 9.** Haz clic en el signo **+** bajo la sección **Versions** y haz clic en **Release**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/15.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 10.** Finalmente, haz clic en **Release**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/16.png" alt="pir" width="400" height="auto"/></p>

Ahora hemos subido y lanzado exitosamente el Paquete de Carga OTA al Portal DMS de Allxon. El siguiente paso será distribuir esta actualización a nuestro Dispositivo Jetson.

### Realizar Actualización del Paquete de Carga OTA a través del Portal DMS de Allxon

Ten en cuenta lo siguiente antes de proceder:

- Antes de ejecutar la actualización del Paquete de Carga OTA, asegúrate de que el dispositivo Jetson esté conectado con cable Ethernet durante todo el proceso. De lo contrario, la actualización fallará.
- Si el proceso de actualización falla, puedes ir a **/ota_log** para encontrar el registro del proceso de actualización.
- Si el proceso de actualización tiene éxito, el archivo bajo la carpeta **/ota** se mantendrá.
- Asegúrate de que la eMMC o el almacenamiento interno tenga espacio disponible de al menos **"Paquete de Carga OTA * 2.5"**.

Ahora realicemos la Actualización del Paquete de Carga OTA a través del Portal DMS de Allxon

- **Paso 1.** Navega a la página **Applications** en el **Portal DMS de Allxon** y haz clic en **Register**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/6.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 2.** Haz clic en **Existing**, selecciona el Paquete de Carga OTA y haz clic en **Register**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/25.png" alt="pir" width="400" height="auto"/></p>

- **Paso 3.** Haz clic en la aplicación recién agregada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/26.png" alt="pir" width="600" height="auto"/></p>

- **Paso 4.** Haz clic en el signo **+** bajo la sección **Versions** y haz clic en **Distribute**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/27.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 2.** Selecciona los grupos a los que quieres distribuir y haz clic en **Distribute**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/18.png" alt="pir" width="400" height="auto"/></p>

- **Paso 3.** Establece un **Distribution Time** y haz clic en **Schedule**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/19.png" alt="pir" width="400" height="auto"/></p>

Ahora los Dispositivos Jetson en los grupos seleccionados recibirán este Paquete de Carga OTA e iniciarán el proceso de actualización.

Si tu Dispositivo Jetson está conectado a una pantalla HDMI, verás lo siguiente, una vez que la instalación haya terminado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/23.jpg" alt="pir" width="1000" height="auto"/></p>

También verás el mensaje **"Restart the system to upgrade the JetPack will be started in 5 mins."** una vez que la instalación haya terminado, si estás conectado al Dispositivo Jetson vía SSH.

Ahora se reiniciará después de 5 minutos para que comience el proceso de actualización. Esto es para dar tiempo extra al usuario para guardar cualquier trabajo no guardado. Sin embargo, puedes reiniciar el Dispositivo Jetson justo después de ver el mensaje anterior.

- **Paso 4.** Después de que el Dispositivo Jetson se inicie nuevamente, verás una pantalla negra. Espera un par de minutos y luego el dispositivo se reiniciará por sí mismo otra vez. A continuación se te presentará la pantalla de configuración inicial para el nuevo SO, y necesitas terminar esta configuración para ingresar al dispositivo nuevamente.

**Nota:** Se recomienda conectar el Dispositivo Jetson a una pantalla HDMI y un teclado para completar la configuración anterior

- **Paso 5.** Después de que la configuración haya terminado, y el dispositivo arranque en el Escritorio, ejecuta el siguiente comando para verificar si la versión de JetPack está actualizada

```sh
cat /etc/nv_tegra_release
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/24.png" alt="pir" width="1000" height="auto"/></p>

Como puedes ver, en este caso, el L4T ha sido actualizado a 32.6.1

## Desinstalar Allxon DMS del dispositivo Jetson

Si deseas desinstalar Allxon DMS Agent de tu dispositivo, por favor usa el siguiente comando para deshabilitar primero el mecanismo (servicio) de instalación automática de Allxon DMS Agent

```sh
sudo systemctl disable dms-install.service
```

Después de eso puedes usar el siguiente comando para desinstalar Allxon DMS Agent

```sh
sudo wget -qO - "https://get.allxon.net/linux/uninstall" | sudo bash -s
```
