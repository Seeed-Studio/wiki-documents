---
description: Actualización de Jetson Linux por aire con Allxon
title: Actualización OTA de NVIDIA Jetson usando Allxon
keywords:
- Software Allxon
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Update-Jetson-Linux-OTA-Using-Allxon
last_update:
  date: 1/13/2023
  author: jianjing Huang
---

# Actualiza Jetson Linux de forma inalámbrica con Allxon

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/thumb.png" alt="pir" width="1000" height="auto"/></p>

## Introducción

Generalmente, NVIDIA proporciona el mecanismo de "Actualización del paquete de carga útil OTA" que permite a los usuarios actualizar sus dispositivos Jetson a versiones más recientes de JetPack. Aunque parece conveniente actualizar el sistema operativo de los dispositivos Jetson, existe un esfuerzo adicional que los usuarios deben realizar. Es decir, los usuarios necesitan alojar un servidor OTA para entregar el paquete de carga útil OTA a los dispositivos Jetson. Será un gran esfuerzo para los usuarios manejarlo además de generar el paquete de carga útil OTA.

Ahora, no necesitas preocuparte por eso. [Allxon](https://www.allxon.com) puede ayudarte a entregar el paquete de carga útil OTA a los dispositivos Jetson a través del portal Allxon DMS. Para los usuarios o fabricantes que están a cargo de generar el paquete de carga útil OTA, es muy fácil cargar el paquete de carga útil OTA. Para los usuarios que desean ejecutar la actualización del paquete OTA Payload para dispositivos Jetson, también es fácil distribuir nuevas versiones del paquete OTA Payload para flotas de dispositivos. Todo lo anterior está bien explicado paso a paso en esta wiki. Entonces, ¡síguenos y comienza a actualizar tus dispositivos Jetson de forma inalámbrica usando Allxon!

## Flujo de trabajo

El flujo de trabajo es como se muestra a continuación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/20.jpg" alt="pir" width="1000" height="auto"/></p>

Nos gustaría pedir a los fabricantes o desarrolladores que proporcionen a Allxon el paquete de carga útil OTA para realizar la verificación. ¿Por qué a Allxon le gustaría hacer eso? Esto se debe a que Allxon quiere asegurarse de que el paquete de carga útil OTA funcione para los dispositivos Jetson correspondientes. Y el beneficio de la verificación por parte de Allxon es que Allxon puede ayudarte a cargar el paquete de carga útil OTA y asegurarse de que funcione. Encontrarás este paso más adelante en esta guía.

## Hardware soportado

La actualización del paquete de carga útil OTA mediante Allxon es compatible con el siguiente hardware:

- Kits de desarrolllo oficiales de NVIDIA:

  - Kit de desarrollo NVIDIA® Jetson Xavier™ NX
  - Kit de desarrollo NVIDIA Jetson AGX Xavier
  - Kit de desarrollo NVIDIA Jetson TX2

- Carrier Boards de Seeed:

  - Jetson SUB Mini PC
  - Carrier Board A203
  - Carrier Board A203 (Versión 2)
  - Carrier Board A205 
  - Carrier Board A206

**Nota:** Al elegir SoM para las Carrier Boards anteriores, asegúrate de utilizar los módulos Jetson Xavier NX o Jetson TX2 NX. Los módulos Jetson Nano no son compatibles con este mecanismo.

## Prerequisitos

- Cualquiera de los dispositivos Jetson anteriores que usen JetPack (Base BSP)
- [Allxon DMS Agent instalado](https://wiki.seeedstudio.com/Allxon-Jetson-Getting-Started) en el dispositivo Jetson y emparejado con Allxon DMS Portal
- PC host con Ubuntu instalado (se recomienda el sistema nativo)
- Pantalla y teclado (opcional)

**Nota:** Ten en cuenta que la PC host utilizada para esta guía era una máquina que usa Ubuntu 20.04.

## Primeros pasos

Esta guía se dividirá en 2 secciones principales. La primera sección hablará sobre cómo generar un paquete de carga útil OTA y cargarlo en el portal Allxon DMS. La segunda sección hablará sobre cómo realizar realmente la actualización del paquete de carga útil OTA en tu dispositivo Jetson utilizando el portal Allxon DMS.

En primer lugar, verifiquemos la versión L4T actual instalada en el dispositivo Jetson ejecutando lo siguiente

```sh
cat /etc/nv_tegra_release
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/21.png" alt="pir" width="1000" height="auto"/></p>

Ahora procederemos a actualizar a L4T 32.6.1

### Genera el paquete de carga útil OTA y cárgalo en el portal Allxon DMS

Antes de comenzar a generar el paquete de carga útil OTA, se enlistan un par de conceptos previos:

1. ¿Qué es un paquete de carga útil OTA?

    - El paquete de carga útil OTA se utiliza para actualizar los dispositivos Jetson desde una versión anterior de BSP a una versión más nueva.
    - Debe generarse en función de **BASE BSP** y **Target BSP**.
    - Lo que significa que una vez que el BSP objetivo es el mismo pero el BSP BASE es diferente, el paquete de carga útil OTA será diferente.
    - Además, el paquete de carga útil OTA solo incluye el **Delta** de los archivos en lugar de una imagen Target BSP completa.

2. ¿Cuál es el papel de Allxon en este mecanismo y flujo?

    - Allxon DMS puede ayudarte a entregar el paquete de carga útil OTA a los dispositivos Jetson a través del portal DMS.
    - Los fabricantes y desarrolladores solo necesitan cargar el paquete de carga útil OTA en el portal Allxon DMS.
    - Los usuarios finales solo necesitan asignar el paquete de carga útil OTA correspondiente a los grupos en Allxon DMS Portal.

3. ¿Hay algún lugar que no se borre en el dispositivo después de ejecutar la actualización del paquete de carga útil OTA?

    - Descubrimos que los archivos en la ruta **"/ota**" no se borrarán después de la actualización del paquete de carga útil OTA.
    - Será un lugar donde los usuarios podrán realizar copias de seguridad de los datos importantes y reanudarlos durante el proceso del paquete de carga útil OTA.

#### Preparación inicial - Base BSP

Como se mencionó anteriormente, el paquete de carga útil OTA se genera en función del BSP base y el BSP de destino. Por lo tanto, debemos preparar el BSP base y el BSP de destino antes de generar el paquete de carga útil OTA. ¿Cómo eliges qué Base BSP necesitas preparar? Bueno, depende del dispositivo que quieras actualizar. Por ejemplo, si deseas actualizar un dispositivo Xavier NX que ejecuta JetPack versión 4.4.4, debes preparar Base BSP como JetPack versión 4.4.4 para Xavier NX.

- **Paso 1.** Elige la versión L4T [desde aquí](https://developer.nvidia.com/embedded/linux-tegra-archive) según la versión actualmente instalada en tu dispositivo Jetson

- **Paso 2.** Descarga el paquete de controladores L4T (BSP) y el sistema de archivos raíz de muestra según tu placa

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/1.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 3.** Coloca ambos archivos en el mismo directorio

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/2.png" alt="pir" width="500" height="auto"/></p>

- **Paso 4.** Abre una ventana de terminal, navega hasta el directorio anterior y extrae el paquete de controladores L4T (BSP)

```sh
sudo tar -vxjf <Base_BSP_file_name>.tbz2
```

- **Paso 5.** Navega hasta el **directorio rootfs** del paquete de controladores NVIDIA extraído

```sh
cd <Base_BSP_L4T_root>/Linux_for_Tegra/rootfs
```

- **Paso 6.** Extrae el sistema de archivos de muestra al directorio rootfs

```sh
sudo tar -jxpf ../../<rootfs_file_name>.tbz2
```

- **Paso 7.** Ejecuta el script apply_binaries.sh para copiar las bibliotecas del espacio de usuario de NVIDIA en el sistema de archivos de destino.

```sh
cd ..
sudo ./apply_binaries.sh
```

#### Preparación inicial - Target BSP

A continuación prepararemos el Target BSP. Este será el BSP que se actualizará en el dispositivo.

- **Paso 1.** Sigue desde el **paso 1 - paso 7** de la sección **Preparación inicial - BSP base** anterior, pero esta vez descarga los archivos necesarios de acuerdo con el BSP que se actualizará en el dispositivo.

- **Paso 2.** Navega a el directorio **rootfs/etc/init.d directory** del Target BSP

```sh
cd <Target_BSP_L4T_root>/Linux_for_Tegra/rootfs/etc/init.d
```

- **Paso 3.** Crea un nuevo archivo llamado **install_allxon_dms.sh**

```sh
sudo nano install_allxon_dms.sh
```

**Nota:** Puedes utilizar cualquier editor de texto anterior. Aquí se utiliza **nano editor de texto**

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

- **Paso 5.** Navega hasta el directorio **rootfs/etc/systemd/system** de Target BSP

```sh
cd <Target_BSP_L4T_root>/Linux_for_Tegra/rootfs/etc/systemd/system
```

- **Paso 6.** Crea un nuevo archivo llamado **dms-install.service** y luego copia los siguientes códigos en el archivo

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

- **Paso 7.** Ejecuta los siguientes comandos para cambiar los permisos del archivo y crear un enlace simbólico para **dms-install.service** de Target BSP

```sh
sudo chmod 644 ./etc/systemd/system/dms-install.service
sudo chmod 777 ./etc/init.d/install_allxon_dms.sh
sudo ln -s /etc/systemd/system/dms-install.service ./etc/systemd/system/multi-user.target.wants/dms-install.service
```

#### Mecanismo de instalación automática del agente en Target BSP

##### Historia

- En la mayoría de los casos, los sistemas de archivos se borrarán a un estado completamente nuevo después de ejecutar la actualización del paquete de carga útil OTA, y solo hay un lugar que no se borrará y es la carpeta **"/ota"**.
- Ahora hay un problema grave. Debido a que el sistema de archivos se borra, no hay ningún Allxon DMS Agent en el sistema. ¿Cómo pueden los dispositivos seguir conectándose con Allxon DMS Portal y ayudar a los usuarios a realizar una gestión remota después de la actualización del paquete de carga útil OTA?
- Además, si los usuarios desean reanudar los datos del dispositivo después de la actualización del paquete de carga útil OTA, ¿cómo podemos ayudarlos a hacerlo?

##### Solución 1: Instalar automáticamente Enterprise Agent

- Para permitir que los dispositivos Jetson instalen el agente Allxon DMS con edición Enterprise después de completar la actualización de Jetpack automáticamente, debemos colocar el script **"install_allxon_dms.sh"** en el directorio del sistema **"/etc/init.d/**" en el paquete de carga útil OTA, y también colocar el servicio **"dms-install.service"** en el paquete de carga útil OTA.
- Cuando el dispositivo se inicia después de la actualización del paquete de carga útil OTA, el sistema ejecutará el script y luego se instalará el agente Allxon DMS con la edición Enterprise.

##### Solución 2: Reanudar los datos del dispositivo

- Para reanudar los datos del dispositivo, los usuarios deben colocar los datos que deben reanudarse en el directorio **"/ota"** en los dispositivos Jetson antes de ejecutar la actualización del paquete de carga útil OTA.
- Además, los usuarios deben implementar un script para realizar el resumen de datos desde la carpeta **"/ota"**, y el nombre del archivo del script debe ser **"resume_data.sh"**.
- Una vez que haya un script **"resume_data.sh"** en **"/ota"**, el script **"install_allxon_dms.sh"** ejecutará **"resume_data.sh"** para ayudar a los usuarios a reanudar los datos de la carpeta **"/ota"**, y este script se eliminará después de la ejecución para evitar un bucle infinito.

#### Generar el paquete de carga útil OTA

Una vez preparados tanto el BSP base como el BSP objetivo, solo necesitas utilizar el script que te proporcionamos para ayudarte a generar el paquete de carga útil OTA. ¡Ahora hagámoslo!

- **Paso 1.** Navega hasta la versión L4T de Target BSP [desde aquí](https://developer.nvidia.com/embedded/linux-tegra-archive) y haz click en **Herramientas de actualización inalámbrica de la plataforma Jetson** para descargarlo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/3.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 2.** Coloca el archivo descargado **Herramientas de actualización inalámbrica de la plataforma Jetson"(ej. ota_tools_R32.6.1_aarch64.tbz2)** dentro de la misma carpeta que **Linux_for_Tegra** para el BSP de destino

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/4.png" alt="pir" width="500" height="auto"/></p>

- **Paso 3.** Crea un nuevo archivo llamado **generate_ota_payload.sh** y colócalo en cualquier lugar (es más fácil colocarlo en la misma carpeta que arriba)

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

  - BASE_BSP_PATH: Ruta del directorio de Base BSP
  - TOT_BSP_PATH: Ruta del directorio de Target BSP
  - OTA_TOOL: Nombre de archivo de la herramienta OTA
  - JETSON_MODEL: Información del modelo (Por favor usa [esta página](https://docs.nvidia.com/jetson/l4t/index.html#page/Tegra%20Linux%20Driver%20Package%20Development%20Guide/quick_start.html#wwpID0EAAPNHA) para encontrar el modelo correspondiente)
  - BSP_VERSION: Versión de Base BSP
  - TARGET_FOLDER: Ruta del directorio para colocar el paquete de carga útil OTA generado

- **Paso 6.** Otorga permiso ejecutable a **generate_ota_payload.sh**

```sh
chmod 777 generate_ota_payload.sh
```

- **Paso 7.** Ejecuta el script

```sh
sudo ./generate_ota_payload.sh
```

Ahora el paquete OTA Payload se generará como **ota_payload_package.tar.gz** dentro del **TARGET_FOLDER** que definimos antes

#### Prepara el archivo zip del paquete de carga útil OTA para cargarlo

- **Paso 1.** Copia las **Herramientas de actualización inalámbrica de la plataforma Jetson" descargadas anteriormente (por ejemplo, ota_tools_R32.6.1_aarch64.tbz2)** y colócalas dentro de la **CARPETA_TARGET** creada antes.

- **Paso 2.** Crea un archivo llamado **run_ota_payload.sh** dentro de **TARGET_FOLDER** y copia los siguientes códigos dentro

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

- **Paso 3.** Modifica las variables del script "run_ota_payload.sh" anterior según los requisitos y las condiciones, si es necesario.

  - OTA_TOOL (Solo asegúrate de que el nombre del archivo sea correcto)
  - OTA_PAYLOAD (Solo asegúrate de que el nombre del archivo sea correcto)
  - TARGET_VERSION (Según la versión de Target BSP, el formato es "Rxx.x.x")

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

- **Paso 6.** Navega hasta **TARGET_FOLDER** desde una ventana de terminal y ejecuta el siguiente comando para crear un archivo zip con los archivos anteriores incluidos

```sh
zip ota_payload.zip *
```

Ahora **TARGET_FOLDER** se verá como se muestra a continuación con el archivo **ota_payload.zip** generado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/5.png" alt="pir" width="400" height="auto"/></p>

#### Carga el archivo zip del paquete de carga útil OTA

Después de generar el archivo zip que se utilizará para realizar el paquete de carga útil OTA, podemos comenzar a cargar este archivo zip en Allxon DMS Portal o en tu propio almacenamiento.

Si deseas pedirle a Allxon que realice la verificación y cargue el archivo zip, solo necesitas entregar este paquete a Allxon [contactándolos aquí](https://www.allxon.com/contact). Entonces puedes saltarte esta sección.

Si deseas cargar el archivo zip tu mismo, sigue los pasos mostrados a continuación:

- **Paso 1.** Visita el [Portal Allxon DMS](https://dms.allxon.com/) e inicia sesión

**Nota:** Asegúrate de seguir [esta wiki](https://wiki.seeedstudio.com/Allxon-Jetson-Getting-Started) para instalar Allxon DMS Agent en el dispositivo Jetson y vincularlo con Allxon DMS Portal

- **Paso 2.** Navega a la página **Aplicaciones** y haz click en **Registrarse** para registrarte para una nueva aplicación.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/6.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 3.** Completa la información de la siguiente manera y haz click en **Siguiente**

  - Nombre de la aplicación: brand_model_BaseBSP_to_TargetBSP
  - App GUID: brand_model_BaseBSP_to_TargetBSP
  - Plataforma: Linux

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/8.png" alt="pir" width="400" height="auto"/></p>

- **Paso 4.** Añade una descripción y haz click en **Registrarse**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/9.png" alt="pir" width="400" height="auto"/></p>

Ahora verás la aplicación creada.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/10.1.png" alt="pir" width="650" height="auto"/></p>

- **Paso 5.** Haz click en él y haz click en el signo **+** en la sección **Versiones**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/11.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 6.** Agrega un número de versión y completa el comando de instalación según los siguientes 2 escenarios para satisfacer tus necesidades

1. Si deseas cargar el archivo zip en Allxon DMS Portal, utiliz los comandos de instalación que se muestran a continuación.

```sh
mkdir -p /allxon_ota
unzip -o /var/lib/SyncAgent/download/"Application registered name" -d /allxon_ota/
chmod 777 /allxon_ota/run_ota_payload.sh
rm -rf /var/lib/SyncAgent/download/*
cd /allxon_ota/ && /allxon_ota/run_ota_payload.sh
shutdown -r +5 "Restart the system to upgrade the JetPack will be started in 5 mins."
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/12.png" alt="pir" width="400" height="auto"/></p>

**Nota:**: El "nombre registrado de la aplicación" debe cambiarse por el nombre de la aplicación que creaste anteriormente. Por ejemplo: **"jetson-xavier-nx-devkit-emmc_4.4_to_4.6**

2. Si deseas cargar el archivo zip en tu propio almacenamiento o sitio, utiliza los comandos de instalación que se muestran a continuación.

```sh
mkdir -p /allxon_ota
wget -qO /allxon_ota/ota_payload.zip "ota_payload_package_download_url"
unzip -o /allxon_ota/ota_payload.zip -d /allxon_ota/
chmod 777 /allxon_ota/run_ota_payload.sh
rm /allxon_ota/ota_payload.zip
cd /allxon_ota/ && /allxon_ota/run_ota_payload.sh
shutdown -r +5 "Restart the system to upgrade the JetPack will be started in 5 mins."
```

- **Paso 7.** Selecciona el archivo **ota_payload.zip** generado antes de cargarlo y una vez finalizada la carga, haz click en **Crear**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/13.png" alt="pir" width="400" height="auto"/></p>

- **Paso 8.** Ingresa una **Descripción de la versión** y haz click en **Guardar** para guardar la aplicación.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/14.png" alt="pir" width="400" height="auto"/></p>

- **Paso 9.** Haz click en el signo **+** en la sección **Versiones** y haz click en **Liberar**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/15.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 10.** Finalmente, haz click en **Liberar**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/16.png" alt="pir" width="400" height="auto"/></p>

Ahora hemos subido y lanzado con éxito el paquete de carga útil OTA al portal Allxon DMS. El siguiente paso será distribuir esta actualización a nuestro dispositivo Jetson.

### Realiza la actualización del paquete de carga útil OTA a través del portal Allxon DMS

Ten en cuenta lo siguiente antes de continuar:

- Antes de ejecutar la actualización del paquete de carga útil OTA, asegúrate de que el dispositivo Jetson esté conectado con un cable Ethernet durante todo el proceso. De lo contrario, la actualización fallará.
- Si el proceso de actualización falló, puedes ir a **/ota_log** para encontrar el registro del proceso de actualización.
- Si el proceso de actualización tiene éxito, se conservará el archivo de la carpeta **/ota**.
- Asegúrate de que el eMMC o el almacenamiento interno tengan espacio disponible de **"Paquete de carga útil OTA * 2.5"** al menos.

Ahora realicemos la actualización del paquete de carga útil OTA a través del portal Allxon DMS

- **Paso 1.** Navega a la página **Aplicaciones** en el **Portal de Allxon DMS** y haz click en **Registrarse**s

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/6.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 2.** Haz click en **Existente**, selecciona el paquete de carga útil OTA y haz click en **Registrarse**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/25.png" alt="pir" width="400" height="auto"/></p>

- **Paso 3.** Haz click en la aplicación recién agregada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/26.png" alt="pir" width="600" height="auto"/></p>

- **Paso 4.** Haz click en el signo **+** en la sección **Versiones** y haz click en **Distribuir**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/27.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 2.** Selecciona los grupos que deseas distribuir y haz click en **Distribuir**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/18.png" alt="pir" width="400" height="auto"/></p>

- **Paso 3.** Establece una **Hora de distribución** y haz click en **Programar**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/19.png" alt="pir" width="400" height="auto"/></p>

Ahora los dispositivos Jetson de los grupos seleccionados recibirán este paquete de carga útil OTA e iniciarán el proceso de actualización.

Si tu dispositivo Jetson está conectado a una pantalla HDMI, verás lo siguiente una vez finalizada la instalación.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/23.jpg" alt="pir" width="1000" height="auto"/></p>

También verás el mensaje **"Reinicia el sistema para actualizar JetPack que se iniciará en 5 minutos".** una vez finalizada la instalación, si estás conectado al dispositivo Jetson a través de SSH.

Ahora se reiniciará después de 5 minutos para que comience el proceso de actualización. Esto es para darle algo de tiempo adicional al usuario para guardar cualquier trabajo no guardado. Sin embargo, puedes reiniciar el dispositivo Jetson inmediatamente después de ver el mensaje anterior.

- **Paso 4.** Después de que el dispositivo Jetson se reinicie nuevamente, verás una pantalla negra. Espera un par de minutos y luego el dispositivo se reiniciará nuevamente. A continuación, se te presentará la pantalla de configuración inicial para el nuevo sistema operativo y deberás finalizar esta configuración para ingresar al dispositivo nuevamente.

**Nota:** Se recomienda conectar el dispositivo Jetson a una pantalla HDMI y un teclado para completar la configuración anterior.

- **Paso 5.** Una vez finalizada la configuración y el dispositivo se inicie en el escritorio, ejecuta el siguiente comando para verificar si la versión de JetPack está actualizada.

```sh
cat /etc/nv_tegra_release
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/24.png" alt="pir" width="1000" height="auto"/></p>

Como puedes ver, en este caso, el L4T se ha actualizado a 32.6.1

## Desinstala Allxon DMS del dispositivo Jetson

Si deseas desinstalar Allxon DMS Agent de tu dispositivo, utiliza el siguiente comando para desactivar primero el mecanismo (servicio) de instalación automática de Allxon DMS Agent.

```sh
sudo systemctl disable dms-install.service
```

Después de eso, puedes usar el siguiente comando para desinstalar Allxon DMS Agent

```sh
sudo wget -qO - "https://get.allxon.net/linux/uninstall" | sudo bash -s
```
