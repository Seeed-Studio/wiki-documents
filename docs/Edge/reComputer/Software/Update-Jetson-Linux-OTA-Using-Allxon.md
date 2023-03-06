---
description: Update Jetson Linux Over-the-Air Using Allxon
title: Update Jetson Linux Over-the-Air Using Allxon
keywords:
- Sorftware Allxon
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Update-Jetson-Linux-OTA-Using-Allxon
last_update:
  date: 1/13/2023
  author: jianjing Huang
---


# Update Jetson Linux Over-the-Air Using Allxon

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/thumb.png" alt="pir" width="1000" height="auto"/></p>

## Introduction

Generally, NVIDIA provides "OTA Payload Package Update" mechanism which allows users to update their Jetson devices to newer versions of JetPack. Eventhough it seems convenient to update the OS of Jetson devices, there is an additional effort which users need to make. That is, users need to host an OTA server to deliver the OTA Payload Package to Jetson devices. It will be a huge effort for users to handle in addition to generating the OTA Payload Package.

Now, you do not need to worry about that. [Allxon](https://www.allxon.com) can assist you to deliver the OTA Payload Package to the Jetson devices via the Allxon DMS Portal. For users or manufactures who are in charge of generating the OTA Payload Package, it's very easy to upload the OTA Payload Package. For users who want to execute the OTA Payload Package update for Jetson devices, it is easy to distribute new versions of OTA Payload Package for fleet of devices as well. All of the above are well explained step-by-step in this wiki. So, follow along and start updating your Jetson Devices over-the-air using Allxon!

## Workflow

The workflow is as follows:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/20.jpg" alt="pir" width="1000" height="auto"/></p>

We would like to ask manufactures or developers to provide Allxon the OTA Payload Package to do verification. Why Allxon would like to do that? That is because Allxon want to ensure the OTA Payload Package is workable for corresponding Jetson devices. And the benefit of verification by Allxon is that Allxon can help you to upload the OTA Payload Package and make sure it can work. You will come across this step later in this guide.

## Hardware supported

OTA Payload Package Update using Allxon is supported by the following hardware:

- Official Development Kits by NVIDIA:

  - NVIDIA® Jetson Xavier™ NX Developer Kit
  - NVIDIA Jetson AGX Xavier Developer Kit
  - NVIDIA Jetson TX2 Developer Kit

- Carrier Boards by Seeed:

  - Jetson SUB Mini PC
  - A203 Carrier Board
  - A203 (Version 2) Carrier Board
  - A205 Carrier Board
  - A206 Carrier Board

**Note:** When choosing SoMs for the carrier boards above, make sure to use either Jetson Xavier NX or Jetson TX2 NX modules. Jetson Nano modules are not supported by this mechanism.

## Prerequisites

- Any of the above Jetson Devices running JetPack (Base BSP)
- [Allxon DMS Agent installed](https://wiki.seeedstudio.com/Allxon-Jetson-Getting-Started) on the Jetson Device and paired with Allxon DMS Portal
- Host PC with Ubuntu installed (native system is recommended)
- HDMI display and keyboard (optional)

**Note:** Please note that the host PC used for this guide was a machine running Ubuntu 20.04

## Getting started

This guide will be divided into 2 main sections. The first section will talk about how you can generate an OTA Payload Package and upload to Allxon DMS Portal. The second section will talk about how you actually perform the OTA Payload Package update to your Jetson Device using Allxon DMS Portal.

First of all, let's check the current L4T version installed on the Jetson Device by executing the following

```sh
cat /etc/nv_tegra_release
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/21.png" alt="pir" width="1000" height="auto"/></p>

Now we will proceed to update this to L4T 32.6.1

### Generate OTA Payload Package and upload to Allxon DMS Portal

Before starting to generate the OTA Payload Package, here is some background knowledge:

1. What is an OTA Payload Package?

    - OTA Payload Package is used to update Jetson devices from lower version BSP to newer version.
    - It needs to be generated based on **BASE BSP** and **Target BSP**.
    - Which means once the Target BSP is same but BASE BSP is different, the OTA Payload Package will be different.
    - Besides, the OTA Payload Package only includes the **Delta** of the files rather than a whole Target BSP image.

2. What is Allxon's role in this mechanism and flow

    - Allxon DMS can assist you to deliver the OTA Payload Package to the Jetson devices via the DMS Portal.
    - Manufactures and Developers just need to upload the OTA Payload Package to Allxon DMS Portal.
    - End-users just need to assign correspond OTA Payload Package to the groups on Allxon DMS Portal.

3. Is there any place that won't be erased on the device after executing OTA Payload Package update?

    - We found that the files under path **"/ota**" won't be erased after OTA Payload Package update.
    - It will be a place that users can backup the important data and resume them during the OTA Payload Package process.

#### Initial Preparation - Base BSP

As mentioned before, OTA Payload Package is generated based on the Base BSP and Target BSP. So we need to prepare the Base BSP and Target BSP before generating the OTA Payload Package. How do you choose which Base BSP you need to prepare? Well, it is based on which device you want to update. For example, if you want to update an Xavier NX device running JetPack version 4.4.4, then you need to prepare Base BSP as JetPack version 4.4.4 for Xavier NX.

- **Step 1.** Choose the L4T release [from here](https://developer.nvidia.com/embedded/linux-tegra-archive) according to the version currently installed on the Jetson device

- **Step 2.** Download L4T Driver Package (BSP) and Sample Root Filesystem according to your board

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/1.png" alt="pir" width="1000" height="auto"/></p>

- **Step 3.** Place both files in the same directory

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/2.png" alt="pir" width="500" height="auto"/></p>

- **Step 4.** Open a terminal window, navigate to the above directory and extract L4T Driver Package (BSP)

```sh
sudo tar -vxjf <Base_BSP_file_name>.tbz2
```

- **Step 5.** Navigate to the **rootfs directory** of the extracted NVIDIA driver package

```sh
cd <Base_BSP_L4T_root>/Linux_for_Tegra/rootfs
```

- **Step 6.** Extract the sample file system to the rootfs directory

```sh
sudo tar -jxpf ../../<rootfs_file_name>.tbz2
```

- **Step 7.** Run the apply_binaries.sh script to copy the NVIDIA user space libraries into the target file system

```sh
cd ..
sudo ./apply_binaries.sh
```

#### Initial Preparation - Target BSP

Next we will prepare the Target BSP. This will be the BSP that is going to be updated on the device.

- **Step 1.** Follow from **step 1 - step 7** from the **Initial Preparation - Base BSP** section above, but this time download the necessary files according to the BSP that is going to be updated on the device

- **Step 2.** Navigate to the **rootfs/etc/init.d directory** of Target BSP

```sh
cd <Target_BSP_L4T_root>/Linux_for_Tegra/rootfs/etc/init.d
```

- **Step 3.** Create a new file named **install_allxon_dms.sh**

```sh
sudo nano install_allxon_dms.sh
```

**Note:** You can use any text editor above. Here **nano text editor** is used

- **Step 4.** Copy the following codes to the file created above

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

- **Step 5.** Navigate to the **rootfs/etc/systemd/system** directory of Target BSP

```sh
cd <Target_BSP_L4T_root>/Linux_for_Tegra/rootfs/etc/systemd/system
```

- **Step 6.** Create a new file named **dms-install.service** and then copy the following codes to the file

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

- **Step 7.** Execute the following commands to change file permissions and create a symbolic link for **dms-install.service** of Target BSP

```sh
sudo chmod 644 ./etc/systemd/system/dms-install.service
sudo chmod 777 ./etc/init.d/install_allxon_dms.sh
sudo ln -s /etc/systemd/system/dms-install.service ./etc/systemd/system/multi-user.target.wants/dms-install.service
```

#### Auto-install Agent mechanism in Target BSP

##### Story

- In most cases, the file systems will be erased to a brand new state after executing the OTA payload package update, and there is only one place which won't be erased, and that is the **"/ota"** folder.
- Now, there is a serious problem. Because the file system is erased, there is no Allxon DMS Agent in the system. How can the devices still connect with Allxon DMS Portal and help users to do remote management after OTA payload package update?
- Besides, if the users want to resume the device data after OTA payload package update, how can we help them to do that?

##### Solution 1 - Auto-install Enterprise Agent

- In order to let the Jetson devices install the Allxon DMS agent with Enterprise edition after completing the Jetpack update automatically, we need to put the script **"install_allxon_dms.sh"** under system directory **"/etc/init.d/**" in OTA payload package, and also put the service **"dms-install.service"** in OTA payload package.
- When the device is booting up after OTA payload package update, the script will be executed by the system and then Allxon DMS agent will be installed with Enterprise edition.

##### Solution 2 - Resume Device Data

- For resuming the device data, users should put the data which needs to be resumed under **"/ota"** directory on Jetson devices before executing OTA payload package update.
- Besides, users needs to implement a script to do data resume from **"/ota"** folder, and the script file name should be **"resume_data.sh"**.
- Once there is a script **"resume_data.sh"** under **"/ota"**, the script **"install_allxon_dms.sh"** will execute **"resume_data.sh"** to help users to resume the data from **"/ota"** folder, and this script will be removed after execution to prevent an infinity loop.

#### Generate the OTA payload package

After both Base BSP and Target BSP are prepared, you only need to use the script we provide to help you to generate the OTA Payload Package. Now, let's do it!

- **Step 1.** Navigate to the L4T release of the Target BSP [from here](https://developer.nvidia.com/embedded/linux-tegra-archive) and click **Jetson Platform Over-The-Air Update Tools** to download it

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/3.png" alt="pir" width="1000" height="auto"/></p>

- **Step 2.** Place the downloaded **Jetson Platform Over-The-Air Update Tools"(ex. ota_tools_R32.6.1_aarch64.tbz2)** file inside the same folder as **Linux_for_Tegra** for the Target BSP

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/4.png" alt="pir" width="500" height="auto"/></p>

- **Step 3.** Create a new file named **generate_ota_payload.sh** and place it anywhere (it's easier to just place it under the same folder as above)

- **Step 4.** Copy the following code inside the file

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

- **Step 5.** Modify the following variables inside the codes above

  - BASE_BSP_PATH: Directory path of Base BSP
  - TOT_BSP_PATH: Directory path of Target BSP
  - OTA_TOOL: File name of OTA Tool
  - JETSON_MODEL: Model information (Please use [this page](https://docs.nvidia.com/jetson/l4t/index.html#page/Tegra%20Linux%20Driver%20Package%20Development%20Guide/quick_start.html#wwpID0EAAPNHA) to find out corresponding model)
  - BSP_VERSION: Version of Base BSP
  - TARGET_FOLDER: Directory path for putting the generated OTA Payload Package

- **Step 6.** Give **generate_ota_payload.sh** executable permission

```sh
chmod 777 generate_ota_payload.sh
```

- **Step 7.** Execute the script

```sh
sudo ./generate_ota_payload.sh
```

Now the OTA Payload package will be generated as **ota_payload_package.tar.gz** inside the **TARGET_FOLDER** we defined before

#### Prepare the OTA Payload Package zip file for uploading

- **Step 1.** Copy previously downloaded **Jetson Platform Over-The-Air Update Tools"(ex. ota_tools_R32.6.1_aarch64.tbz2)** and place it inside the **TARGET_FOLDER** created before

- **Step 2.** Create a file named **run_ota_payload.sh** inside the **TARGET_FOLDER** and copy the following codes inside

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

- **Step 3.** Modify the variables of the above "run_ota_payload.sh" script based on the requirement and conditions if necessary

  - OTA_TOOL (Just make sure the file name is correct or not)
  - OTA_PAYLOAD (Just make sure the file name is correct or not)
  - TARGET_VERSION (According to Target BSP version, format is "Rxx.x.x")

- **Step 4.** Create a file named **dms-backup.service** inside the **TARGET_FOLDER** and copy the following codes inside

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

- **Step 5.** Create a file named **backup_agent_cache.sh** inside the **TARGET_FOLDER** and copy the following codes inside

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

- **Step 6.** Navigate to **TARGET_FOLDER** from a terminal window and execute the following command to create a zip file with the above files included

```sh
zip ota_payload.zip *
```

Now the **TARGET_FOLDER** will look like below with the generated **ota_payload.zip** file

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/5.png" alt="pir" width="400" height="auto"/></p>

#### Upload the OTA Payload Package zip file

After generating the zip file which will be used to do OTA Payload Package, we can start to upload this zip file to Allxon DMS Portal or you own storage.

If you would like to ask Allxon to do verification and upload the zip file, you just need to deliver this package to Allxon by [contacting them here](https://www.allxon.com/contact). Then you can skip this section.

If you would like to upload the zip file by yourself, please follow the below steps

- **Step 1.** Visit [Allxon DMS Portal](https://dms.allxon.com/) and sign in

**Note:** Make sure you follow [this wiki](https://wiki.seeedstudio.com/Allxon-Jetson-Getting-Started) to install Allxon DMS Agent on the Jetson Device and pair it with Allxon DMS Portal

- **Step 2.** Navigate to **Applications** page and click **Register** to register for a new application

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/6.png" alt="pir" width="1000" height="auto"/></p>

- **Step 3.** Fill in the information as follows and click **Next**

  - Application Name: brand_model_BaseBSP_to_TargetBSP
  - App GUID: brand_model_BaseBSP_to_TargetBSP
  - Platform: Linux

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/8.png" alt="pir" width="400" height="auto"/></p>

- **Step 4.** Add a description and click **Register**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/9.png" alt="pir" width="400" height="auto"/></p>

Now you will see the created application

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/10.1.png" alt="pir" width="650" height="auto"/></p>

- **Step 5.** Click on it and click the **+** sign under **Versions** section

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/11.png" alt="pir" width="1000" height="auto"/></p>

- **Step 6.** Add a version number and fill the installation command based on the following 2 scenarios to suit your needs

1. If you would like to upload the zip file to Allxon DMS Portal, please use the installation commands as below.

```sh
mkdir -p /allxon_ota
unzip -o /var/lib/SyncAgent/download/"Application registered name" -d /allxon_ota/
chmod 777 /allxon_ota/run_ota_payload.sh
rm -rf /var/lib/SyncAgent/download/*
cd /allxon_ota/ && /allxon_ota/run_ota_payload.sh
shutdown -r +5 "Restart the system to upgrade the JetPack will be started in 5 mins."
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/12.png" alt="pir" width="400" height="auto"/></p>

**Note:**: "Application registered name" should be changed with the application name you created before. For example: **"jetson-xavier-nx-devkit-emmc_4.4_to_4.6**

2. If you would like to upload the zip file to your own storage or site, please use the installation commands as below.

```sh
mkdir -p /allxon_ota
wget -qO /allxon_ota/ota_payload.zip "ota_payload_package_download_url"
unzip -o /allxon_ota/ota_payload.zip -d /allxon_ota/
chmod 777 /allxon_ota/run_ota_payload.sh
rm /allxon_ota/ota_payload.zip
cd /allxon_ota/ && /allxon_ota/run_ota_payload.sh
shutdown -r +5 "Restart the system to upgrade the JetPack will be started in 5 mins."
```

- **Step 7.** Select the **ota_payload.zip** file generated before to upload it and once the upload is finished, click **Create**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/13.png" alt="pir" width="400" height="auto"/></p>

- **Step 8.** Enter a **Version Description** and click **Save** to save the application

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/14.png" alt="pir" width="400" height="auto"/></p>

- **Step 9.** Click the **+** sign under **Versions** section and click **Release**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/15.png" alt="pir" width="1000" height="auto"/></p>

- **Step 10.** Finally, click **Release**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/16.png" alt="pir" width="400" height="auto"/></p>

Now we have succesfully uploaded and released the OTA Payload Package to Allxon DMS Portal. The next step will be to distribute this update to our Jetson Device.

### Perform OTA Payload Package Update via Allxon DMS Portal

Please note the following before proceeding:

- Before executing the OTA Payload Package update, please make sure the Jetson device is connected with Ethernet cable during the whole process. Otherwise, the update will fail.
- If the upgrade process failed, you can go to **/ota_log** to find out the log of upgrade process.
- If upgrade process succeeds, the file under folder **/ota** will be kept.
- Please make sure the eMMC or internal storage has available space of **"OTA Payload Package * 2.5"** at least.

Now let's perform the OTA Payload Package Update via Allxon DMS Portal

- **Step 1.** Navigate to **Applications** page in **Allxon DMS Portal** and click **Register**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/6.png" alt="pir" width="1000" height="auto"/></p>

- **Step 2.** Click **Existing**, select the OTA Payload Package and click **Register**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/25.png" alt="pir" width="400" height="auto"/></p>

- **Step 3.** Click on the newly added application

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/26.png" alt="pir" width="600" height="auto"/></p>

- **Step 4.** Click the **+** sign under **Versions** section and click **Distribute**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/27.png" alt="pir" width="1000" height="auto"/></p>

- **Step 2.** Select the groups which you want to distribute and click **Distribute**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/18.png" alt="pir" width="400" height="auto"/></p>

- **Step 3.** Set a **Distribution Time** and click **Schedule**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/19.png" alt="pir" width="400" height="auto"/></p>

Now the Jetson Devices in the selected groups will receive this OTA Payload Package and start the upgrade process.

If your Jetson Device is connected to an HDMI display, you will see the following, once the installation is finished.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/23.jpg" alt="pir" width="1000" height="auto"/></p>

You will also see the message **"Restart the system to upgrade the JetPack will be started in 5 mins."** once the installation is finished, if you are connected to the Jetson Device via SSH.

Now it will reboot after 5 minutes for the upgrade process to start. This is to give some extra time for the user to save any unsaved work. However you can reboot the Jetson Device right after you see the above message.

- **Step 4.** After the Jetson Device boots up again, you will see a black screen. Wait a couple of minutes and then the device will reboot itself again. Next you will be presented with the initial configuration screen for the new OS, and you need to finish this setup to enter the device again.

**Note:** It is recommended to connect the Jetson Device to an HDMI diplay and a keyboard to complete the above configuration setup

- **Step 5.** After the setup is finished, and the device boots into Desktop, execute the following command to check whether JetPack version is updated

```sh
cat /etc/nv_tegra_release
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/24.png" alt="pir" width="1000" height="auto"/></p>

As you can see, in this case, the L4T has been updated to 32.6.1

## Uninstall Allxon DMS from Jetson device

If you would like to uninstall Allxon DMS Agent from your device, please use the below command to disable the auto-install Allxon DMS Agent mechanism (service) first

```sh
sudo systemctl disable dms-install.service
```

After that you can use the below command to uninstall Allxon DMS Agent

```sh
sudo wget -qO - "https://get.allxon.net/linux/uninstall" | sudo bash -s
```
