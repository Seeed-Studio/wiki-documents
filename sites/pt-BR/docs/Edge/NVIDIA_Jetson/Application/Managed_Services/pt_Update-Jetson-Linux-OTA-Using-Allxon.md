---
description: Atualize o Jetson Linux Over-the-Air usando Allxon
title: Atualizar NVIDIA Jetson por OTA usando Allxon
keywords:
  - Sorftware Allxon
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Update-Jetson-Linux-OTA-Using-Allxon
sku: 110110144,110110146,110110184,110110185,110110186,110110187
last_update:
  date: 1/13/2023
  author: jianjing Huang
createdAt: '2023-01-13'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Update-Jetson-Linux-OTA-Using-Allxon/
---

# Atualizar Jetson Linux Over-the-Air usando Allxon

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/thumb.png" alt="pir" width="1000" height="auto"/></p>

## Introdução

Em geral, a NVIDIA fornece o mecanismo "OTA Payload Package Update", que permite aos usuários atualizar seus dispositivos Jetson para versões mais recentes do JetPack. Embora pareça conveniente atualizar o sistema operacional dos dispositivos Jetson, há um esforço adicional que os usuários precisam fazer. Ou seja, os usuários precisam hospedar um servidor OTA para entregar o OTA Payload Package aos dispositivos Jetson. Será um grande esforço para os usuários lidarem com isso, além de gerar o OTA Payload Package.

Agora, você não precisa se preocupar com isso. A [Allxon](https://www.allxon.com) pode ajudá‑lo a entregar o OTA Payload Package para os dispositivos Jetson por meio do Allxon DMS Portal. Para usuários ou fabricantes responsáveis por gerar o OTA Payload Package, é muito fácil fazer o upload do OTA Payload Package. Para usuários que desejam executar a atualização do OTA Payload Package para dispositivos Jetson, também é fácil distribuir novas versões do OTA Payload Package para um conjunto de dispositivos. Tudo isso é bem explicado passo a passo neste wiki. Então, acompanhe e comece a atualizar seus dispositivos Jetson over‑the‑air usando Allxon!

## Fluxo de trabalho

O fluxo de trabalho é o seguinte:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/20.jpg" alt="pir" width="1000" height="auto"/></p>

Gostaríamos de pedir aos fabricantes ou desenvolvedores que forneçam à Allxon o OTA Payload Package para que seja feita a verificação. Por que a Allxon gostaria de fazer isso? Porque a Allxon quer garantir que o OTA Payload Package funcione para os dispositivos Jetson correspondentes. E o benefício da verificação pela Allxon é que a Allxon pode ajudá‑lo a enviar o OTA Payload Package e garantir que ele funcione. Você encontrará esta etapa mais adiante neste guia.

## Hardware compatível

A atualização por OTA Payload Package usando Allxon é compatível com o seguinte hardware:

- Kits de desenvolvimento oficiais da NVIDIA:

  - NVIDIA® Jetson Xavier™ NX Developer Kit
  - NVIDIA Jetson AGX Xavier Developer Kit
  - NVIDIA Jetson TX2 Developer Kit

- Carrier Boards da Seeed:

  - Jetson SUB Mini PC
  - A203 Carrier Board
  - A203 (Version 2) Carrier Board
  - A205 Carrier Board
  - A206 Carrier Board

**Observação:** Ao escolher SoMs para as carrier boards acima, certifique‑se de usar módulos Jetson Xavier NX ou Jetson TX2 NX. Módulos Jetson Nano não são compatíveis com este mecanismo.

## Pré-requisitos

- Qualquer um dos dispositivos Jetson acima executando JetPack (Base BSP)
- [Allxon DMS Agent instalado](https://wiki.seeedstudio.com/pt-br/Allxon-Jetson-Getting-Started) no dispositivo Jetson e pareado com o Allxon DMS Portal
- PC host com Ubuntu instalado (sistema nativo é recomendado)
- Monitor HDMI e teclado (opcional)

**Observação:** Observe que o PC host usado para este guia era uma máquina executando Ubuntu 20.04

## Primeiros passos

Este guia será dividido em 2 seções principais. A primeira seção explicará como você pode gerar um OTA Payload Package e fazer o upload para o Allxon DMS Portal. A segunda seção explicará como você realmente executa a atualização do OTA Payload Package no seu dispositivo Jetson usando o Allxon DMS Portal.

Primeiro, vamos verificar a versão atual do L4T instalada no dispositivo Jetson executando o seguinte

```sh
cat /etc/nv_tegra_release
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/21.png" alt="pir" width="1000" height="auto"/></p>

Agora vamos prosseguir para atualizar isso para L4T 32.6.1

### Gerar OTA Payload Package e enviar para o Allxon DMS Portal

Antes de começar a gerar o OTA Payload Package, aqui vão algumas informações de base:

1. O que é um OTA Payload Package?

    - OTA Payload Package é usado para atualizar dispositivos Jetson de uma versão BSP inferior para uma versão mais recente.
    - Ele precisa ser gerado com base no **BASE BSP** e no **Target BSP**.
    - Isso significa que, mesmo que o Target BSP seja o mesmo, se o BASE BSP for diferente, o OTA Payload Package será diferente.
    - Além disso, o OTA Payload Package inclui apenas o **Delta** dos arquivos, em vez de uma imagem completa do Target BSP.

2. Qual é o papel da Allxon neste mecanismo e fluxo

    - O Allxon DMS pode ajudá‑lo a entregar o OTA Payload Package aos dispositivos Jetson por meio do DMS Portal.
    - Fabricantes e desenvolvedores só precisam fazer o upload do OTA Payload Package para o Allxon DMS Portal.
    - Usuários finais só precisam atribuir o OTA Payload Package correspondente aos grupos no Allxon DMS Portal.

3. Existe algum lugar que não será apagado no dispositivo após executar a atualização do OTA Payload Package?

    - Descobrimos que os arquivos no caminho **"/ota**" não serão apagados após a atualização do OTA Payload Package.
    - Este será um local onde os usuários podem fazer backup dos dados importantes e restaurá‑los durante o processo de OTA Payload Package.

#### Preparação inicial - Base BSP

Como mencionado antes, o OTA Payload Package é gerado com base no Base BSP e no Target BSP. Portanto, precisamos preparar o Base BSP e o Target BSP antes de gerar o OTA Payload Package. Como você escolhe qual Base BSP precisa preparar? Bem, isso depende de qual dispositivo você quer atualizar. Por exemplo, se você deseja atualizar um dispositivo Xavier NX executando JetPack versão 4.4.4, então você precisa preparar o Base BSP como JetPack versão 4.4.4 para Xavier NX.

- **Passo 1.** Escolha a versão L4T [neste link](https://developer.nvidia.com/embedded/linux-tegra-archive) de acordo com a versão atualmente instalada no dispositivo Jetson

- **Passo 2.** Baixe o L4T Driver Package (BSP) e o Sample Root Filesystem de acordo com a sua placa

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/1.png" alt="pir" width="1000" height="auto"/></p>

- **Passo 3.** Coloque ambos os arquivos no mesmo diretório

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/2.png" alt="pir" width="500" height="auto"/></p>

- **Passo 4.** Abra uma janela de terminal, navegue até o diretório acima e extraia o L4T Driver Package (BSP)

```sh
sudo tar -vxjf <Base_BSP_file_name>.tbz2
```

- **Passo 5.** Navegue até o **diretório rootfs** do pacote de driver da NVIDIA extraído

```sh
cd <Base_BSP_L4T_root>/Linux_for_Tegra/rootfs
```

- **Passo 6.** Extraia o sistema de arquivos de exemplo para o diretório rootfs

```sh
sudo tar -jxpf ../../<rootfs_file_name>.tbz2
```

- **Passo 7.** Execute o script apply_binaries.sh para copiar as bibliotecas de espaço de usuário da NVIDIA para o sistema de arquivos de destino

```sh
cd ..
sudo ./apply_binaries.sh
```

#### Preparação inicial - Target BSP

Em seguida, vamos preparar o Target BSP. Este será o BSP que será atualizado no dispositivo.

- **Passo 1.** Siga do **passo 1 ao passo 7** da seção **Preparação inicial - Base BSP** acima, mas desta vez baixe os arquivos necessários de acordo com o BSP que será atualizado no dispositivo

- **Passo 2.** Navegue até o diretório **rootfs/etc/init.d** do Target BSP

```sh
cd <Target_BSP_L4T_root>/Linux_for_Tegra/rootfs/etc/init.d
```

- **Passo 3.** Crie um novo arquivo chamado **install_allxon_dms.sh**

```sh
sudo nano install_allxon_dms.sh
```

**Observação:** Você pode usar qualquer editor de texto acima. Aqui é usado o **editor de texto nano**

- **Passo 4.** Copie os seguintes códigos para o arquivo criado acima

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

- **Passo 5.** Navegue até o diretório **rootfs/etc/systemd/system** do Target BSP

```sh
cd <Target_BSP_L4T_root>/Linux_for_Tegra/rootfs/etc/systemd/system
```

- **Passo 6.** Crie um novo arquivo chamado **dms-install.service** e então copie os seguintes códigos para o arquivo

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

- **Passo 7.** Execute os seguintes comandos para alterar as permissões de arquivo e criar um link simbólico para **dms-install.service** do BSP de Destino

```sh
sudo chmod 644 ./etc/systemd/system/dms-install.service
sudo chmod 777 ./etc/init.d/install_allxon_dms.sh
sudo ln -s /etc/systemd/system/dms-install.service ./etc/systemd/system/multi-user.target.wants/dms-install.service
```

#### Mecanismo de agente de instalação automática no BSP de Destino

##### História

- Na maioria dos casos, os sistemas de arquivos serão apagados para um estado totalmente novo após executar a atualização do pacote de payload OTA, e há apenas um lugar que não será apagado, que é a pasta **"/ota"**.
- Agora, há um problema sério. Como o sistema de arquivos é apagado, não há Allxon DMS Agent no sistema. Como os dispositivos ainda podem se conectar ao Allxon DMS Portal e ajudar os usuários a fazer o gerenciamento remoto após a atualização do pacote de payload OTA?
- Além disso, se os usuários quiserem restaurar os dados do dispositivo após a atualização do pacote de payload OTA, como podemos ajudá-los a fazer isso?

##### Solução 1 - Instalação automática do Enterprise Agent

- Para permitir que os dispositivos Jetson instalem o Allxon DMS agent com edição Enterprise automaticamente após concluir a atualização do Jetpack, precisamos colocar o script **"install_allxon_dms.sh"** no diretório do sistema **"/etc/init.d/**" no pacote de payload OTA, e também colocar o serviço **"dms-install.service"** no pacote de payload OTA.
- Quando o dispositivo estiver inicializando após a atualização do pacote de payload OTA, o script será executado pelo sistema e então o Allxon DMS agent será instalado com a edição Enterprise.

##### Solução 2 - Restaurar dados do dispositivo

- Para restaurar os dados do dispositivo, os usuários devem colocar os dados que precisam ser restaurados no diretório **"/ota"** nos dispositivos Jetson antes de executar a atualização do pacote de payload OTA.
- Além disso, os usuários precisam implementar um script para fazer a restauração de dados a partir da pasta **"/ota"**, e o nome do arquivo de script deve ser **"resume_data.sh"**.
- Assim que houver um script **"resume_data.sh"** em **"/ota"**, o script **"install_allxon_dms.sh"** executará **"resume_data.sh"** para ajudar os usuários a restaurar os dados a partir da pasta **"/ota"**, e esse script será removido após a execução para evitar um loop infinito.

#### Gerar o pacote de payload OTA

Depois que o Base BSP e o BSP de Destino estiverem preparados, você só precisa usar o script que fornecemos para ajudá-lo a gerar o pacote de payload OTA. Agora, vamos fazê-lo!

- **Passo 1.** Vá para o Lançamento L4T do BSP de Destino [a partir daqui](https://developer.nvidia.com/embedded/linux-tegra-archive) e clique em **Jetson Platform Over-The-Air Update Tools** para baixá-lo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/3.png" alt="pir" width="1000" height="auto"/></p>

- **Passo 2.** Coloque o arquivo baixado **Jetson Platform Over-The-Air Update Tools"(ex. ota_tools_R32.6.1_aarch64.tbz2)** dentro da mesma pasta que **Linux_for_Tegra** para o BSP de Destino

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/4.png" alt="pir" width="500" height="auto"/></p>

- **Passo 3.** Crie um novo arquivo chamado **generate_ota_payload.sh** e coloque-o em qualquer lugar (é mais fácil simplesmente colocá-lo na mesma pasta acima)

- **Passo 4.** Copie o código a seguir para dentro do arquivo

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

- **Passo 5.** Modifique as seguintes variáveis dentro dos códigos acima

  - BASE_BSP_PATH: Caminho de diretório do Base BSP
  - TOT_BSP_PATH: Caminho de diretório do BSP de Destino
  - OTA_TOOL: Nome de arquivo da OTA Tool
  - JETSON_MODEL: Informações do modelo (Por favor, use [esta página](https://docs.nvidia.com/jetson/l4t/index.html#page/Tegra%20Linux%20Driver%20Package%20Development%20Guide/quick_start.html#wwpID0EAAPNHA) para descobrir o modelo correspondente)
  - BSP_VERSION: Versão do Base BSP
  - TARGET_FOLDER: Caminho de diretório para colocar o pacote de payload OTA gerado

- **Passo 6.** Dê permissão de execução para **generate_ota_payload.sh**

```sh
chmod 777 generate_ota_payload.sh
```

- **Passo 7.** Execute o script

```sh
sudo ./generate_ota_payload.sh
```

Agora o pacote de payload OTA será gerado como **ota_payload_package.tar.gz** dentro do **TARGET_FOLDER** que definimos antes

#### Preparar o arquivo zip do pacote de payload OTA para upload

- **Passo 1.** Copie o **Jetson Platform Over-The-Air Update Tools"(ex. ota_tools_R32.6.1_aarch64.tbz2)** baixado anteriormente e coloque-o dentro do **TARGET_FOLDER** criado antes

- **Passo 2.** Crie um arquivo chamado **run_ota_payload.sh** dentro do **TARGET_FOLDER** e copie os códigos a seguir para dentro

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

- **Passo 3.** Modifique as variáveis do script "run_ota_payload.sh" acima com base no requisito e nas condições, se necessário

  - OTA_TOOL (Apenas certifique-se se o nome do arquivo está correto ou não)
  - OTA_PAYLOAD (Apenas certifique-se se o nome do arquivo está correto ou não)
  - TARGET_VERSION (De acordo com a versão do BSP de Destino, o formato é "Rxx.x.x")

- **Passo 4.** Crie um arquivo chamado **dms-backup.service** dentro do **TARGET_FOLDER** e copie os códigos a seguir para dentro

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

- **Passo 5.** Crie um arquivo chamado **backup_agent_cache.sh** dentro do **TARGET_FOLDER** e copie os códigos a seguir para dentro

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

- **Passo 6.** Vá para o **TARGET_FOLDER** a partir de uma janela de terminal e execute o seguinte comando para criar um arquivo zip com os arquivos acima incluídos

```sh
zip ota_payload.zip *
```

Agora a **TARGET_FOLDER** ficará como abaixo com o arquivo **ota_payload.zip** gerado

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/5.png" alt="pir" width="400" height="auto"/></p>

#### Fazer upload do arquivo zip do Pacote de Carga Útil OTA

Depois de gerar o arquivo zip que será usado para fazer o Pacote de Carga Útil OTA, podemos começar a fazer o upload desse arquivo zip para o Allxon DMS Portal ou para o seu próprio armazenamento.

Se você quiser pedir à Allxon para fazer a verificação e enviar o arquivo zip, você só precisa entregar este pacote à Allxon [entrando em contato aqui](https://www.allxon.com/contact). Então você pode pular esta seção.

Se você quiser fazer o upload do arquivo zip por conta própria, siga as etapas abaixo

- **Passo 1.** Acesse o [Allxon DMS Portal](https://dms.allxon.com/) e faça login

**Nota:** Certifique-se de seguir [este wiki](https://wiki.seeedstudio.com/pt-br/Allxon-Jetson-Getting-Started) para instalar o Allxon DMS Agent no Dispositivo Jetson e pareá-lo com o Allxon DMS Portal

- **Passo 2.** Navegue até a página **Applications** e clique em **Register** para registrar um novo aplicativo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/6.png" alt="pir" width="1000" height="auto"/></p>

- **Passo 3.** Preencha as informações da seguinte forma e clique em **Next**

  - Application Name: brand_model_BaseBSP_to_TargetBSP
  - App GUID: brand_model_BaseBSP_to_TargetBSP
  - Platform: Linux

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/8.png" alt="pir" width="400" height="auto"/></p>

- **Passo 4.** Adicione uma descrição e clique em **Register**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/9.png" alt="pir" width="400" height="auto"/></p>

Agora você verá o aplicativo criado

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/10.1.png" alt="pir" width="650" height="auto"/></p>

- **Passo 5.** Clique nele e clique no sinal de **+** na seção **Versions**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/11.png" alt="pir" width="1000" height="auto"/></p>

- **Passo 6.** Adicione um número de versão e preencha o comando de instalação com base nos 2 cenários a seguir para atender às suas necessidades

1. Se você quiser enviar o arquivo zip para o Allxon DMS Portal, use os comandos de instalação abaixo.

```sh
mkdir -p /allxon_ota
unzip -o /var/lib/SyncAgent/download/"Application registered name" -d /allxon_ota/
chmod 777 /allxon_ota/run_ota_payload.sh
rm -rf /var/lib/SyncAgent/download/*
cd /allxon_ota/ && /allxon_ota/run_ota_payload.sh
shutdown -r +5 "Restart the system to upgrade the JetPack will be started in 5 mins."
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/12.png" alt="pir" width="400" height="auto"/></p>

**Nota:**: "Application registered name" deve ser alterado para o nome do aplicativo que você criou antes. Por exemplo: **"jetson-xavier-nx-devkit-emmc_4.4_to_4.6**

2. Se você quiser enviar o arquivo zip para o seu próprio armazenamento ou site, use os comandos de instalação abaixo.

```sh
mkdir -p /allxon_ota
wget -qO /allxon_ota/ota_payload.zip "ota_payload_package_download_url"
unzip -o /allxon_ota/ota_payload.zip -d /allxon_ota/
chmod 777 /allxon_ota/run_ota_payload.sh
rm /allxon_ota/ota_payload.zip
cd /allxon_ota/ && /allxon_ota/run_ota_payload.sh
shutdown -r +5 "Restart the system to upgrade the JetPack will be started in 5 mins."
```

- **Passo 7.** Selecione o arquivo **ota_payload.zip** gerado anteriormente para enviá-lo e, quando o upload terminar, clique em **Create**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/13.png" alt="pir" width="400" height="auto"/></p>

- **Passo 8.** Insira uma **Version Description** e clique em **Save** para salvar o aplicativo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/14.png" alt="pir" width="400" height="auto"/></p>

- **Passo 9.** Clique no sinal de **+** na seção **Versions** e clique em **Release**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/15.png" alt="pir" width="1000" height="auto"/></p>

- **Passo 10.** Finalmente, clique em **Release**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/16.png" alt="pir" width="400" height="auto"/></p>

Agora carregamos e publicamos com sucesso o Pacote de Carga Útil OTA no Allxon DMS Portal. O próximo passo será distribuir essa atualização para o nosso Dispositivo Jetson.

### Executar a Atualização do Pacote de Carga Útil OTA via Allxon DMS Portal

Observe o seguinte antes de continuar:

- Antes de executar a atualização do Pacote de Carga Útil OTA, certifique-se de que o dispositivo Jetson esteja conectado com cabo Ethernet durante todo o processo. Caso contrário, a atualização falhará.
- Se o processo de atualização falhar, você pode ir para **/ota_log** para encontrar o log do processo de atualização.
- Se o processo de atualização for bem-sucedido, o arquivo na pasta **/ota** será mantido.
- Certifique-se de que a eMMC ou o armazenamento interno tenha pelo menos espaço disponível de **"OTA Payload Package * 2.5"**.

Agora vamos executar a Atualização do Pacote de Carga Útil OTA via Allxon DMS Portal

- **Passo 1.** Navegue até a página **Applications** no **Allxon DMS Portal** e clique em **Register**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/6.png" alt="pir" width="1000" height="auto"/></p>

- **Passo 2.** Clique em **Existing**, selecione o Pacote de Carga Útil OTA e clique em **Register**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/25.png" alt="pir" width="400" height="auto"/></p>

- **Passo 3.** Clique no aplicativo recém-adicionado

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/26.png" alt="pir" width="600" height="auto"/></p>

- **Passo 4.** Clique no sinal de **+** na seção **Versions** e clique em **Distribute**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/27.png" alt="pir" width="1000" height="auto"/></p>

- **Passo 2.** Selecione os grupos para os quais você quer distribuir e clique em **Distribute**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/18.png" alt="pir" width="400" height="auto"/></p>

- **Passo 3.** Defina um **Distribution Time** e clique em **Schedule**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/19.png" alt="pir" width="400" height="auto"/></p>

Agora os Dispositivos Jetson nos grupos selecionados receberão este Pacote de Carga Útil OTA e iniciarão o processo de atualização.

Se o seu Dispositivo Jetson estiver conectado a um monitor HDMI, você verá o seguinte assim que a instalação for concluída.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/23.jpg" alt="pir" width="1000" height="auto"/></p>

Você também verá a mensagem **"Restart the system to upgrade the JetPack will be started in 5 mins."** assim que a instalação terminar, se você estiver conectado ao Dispositivo Jetson via SSH.

Agora ele será reiniciado após 5 minutos para que o processo de atualização seja iniciado. Isso é para dar algum tempo extra para o usuário salvar qualquer trabalho não salvo. No entanto, você pode reiniciar o Dispositivo Jetson assim que vir a mensagem acima.

- **Passo 4.** Depois que o Dispositivo Jetson iniciar novamente, você verá uma tela preta. Aguarde alguns minutos e então o dispositivo será reiniciado novamente. Em seguida, será apresentada a tela de configuração inicial do novo sistema operacional e você precisará concluir essa configuração para entrar novamente no dispositivo.

**Nota:** Recomenda-se conectar o Dispositivo Jetson a um monitor HDMI e a um teclado para concluir a configuração acima

- **Passo 5.** Depois que a configuração terminar e o dispositivo iniciar no Desktop, execute o seguinte comando para verificar se a versão do JetPack foi atualizada

```sh
cat /etc/nv_tegra_release
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/JetPack-OTA/24.png" alt="pir" width="1000" height="auto"/></p>

Como você pode ver, neste caso, o L4T foi atualizado para 32.6.1

## Desinstalar Allxon DMS do dispositivo Jetson

Se você quiser desinstalar o Allxon DMS Agent do seu dispositivo, use primeiro o comando abaixo para desativar o mecanismo (serviço) de instalação automática do Allxon DMS Agent

```sh
sudo systemctl disable dms-install.service
```

Depois disso, você pode usar o comando abaixo para desinstalar o Allxon DMS Agent

```sh
sudo wget -qO - "https://get.allxon.net/linux/uninstall" | sudo bash -s
```
