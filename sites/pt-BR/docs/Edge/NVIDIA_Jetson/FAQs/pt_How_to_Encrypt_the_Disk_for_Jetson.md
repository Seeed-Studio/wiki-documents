---
description: Como criptografar o disco para Jetson
title: Como criptografar o disco para Jetson
keywords:
  - jetson
  - encrypt
  - L4T
image: https://files.seeedstudio.com/wiki/reComputer/nvidia-jetpack-6-0-stack.webp
slug: /how_to_encrypt_the_disk_for_jetson
last_update:
  date: 10/11/2025
  author: Dayu
createdAt: '2025-08-06'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/how_to_encrypt_the_disk_for_jetson/
---

**Este wiki usa L4T 36.4.3 e reComputer J401 como exemplos, fornecendo etapas de referência para criptografia de disco do Jetson.
O processo de criptografia do disco deve ser realizado durante o flashing. Se o seu disco precisar ser criptografado, você terá que reconfigurar e regravar o sistema.**

**Antes do flashing, certifique-se de que você tenha uma imagem-fonte devidamente construída, conforme detalhado nas etapas a seguir.**

## 1. Preparar o espaço de trabalho

Esta seção usa **L4T 36.4.3** como exemplo para demonstrar como compilar o projeto de código-fonte e construí-lo. O mesmo processo se aplica a outras versões — basta **substituir o número da versão nos comandos de exemplo subsequentes pela versão que você deseja compilar**.

Antes de começar, você precisa preparar um **host PC com Ubuntu 20.04/22.04**.

Se você não tiver certeza sobre a relação entre as versões do L4T e as versões do JetPack, pode consultar este link:
https://developer.nvidia.com/embedded/jetpack-archive.
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/L4T-jetpack.png
"/></div>

Procure pelo lançamento específico do **L4T (Linux for Tegra)** que você deseja compilar, por exemplo:
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/google_L4T.jpg"/></div>

<!-- After clicking on the web, download and prepare the sample root file system, NVIDIA's official BSP and the toolchain used for cross-compilation, as shown below.
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/download-BSP-rootfs-toolchain.png"/></div> -->

Extraia o BSP oficial da NVIDIA e você obterá um diretório chamado `Linux_for_Tegra`. Em seguida, extraia o arquivo do sistema de arquivos raiz para dentro do diretório oficial `Linux_for_Tegra`:

```bash
tar xf Jetson_Linux_r36.4.3_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_r36.4.3_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
```

Sincronize o código-fonte para compilação. Substitua o argumento após `-t` pela **versão do L4T que você deseja**:

```bash
cd Linux_for_Tegra/source/
./source_sync.sh -t jetson_36.4.3
```

Saia para o diretório raiz do seu espaço de trabalho. Faça o git clone do código-fonte do branch desejado para a sua máquina local usando o seguinte comando
(substitua `-b <branch name>` pelo branch de destino):

```bash
sudo apt update
sudo apt install git-lfs
cd ../..
mkdir -p github/Linux_for_Tegra
git clone https://github.com/Seeed-Studio/Linux_for_Tegra.git -b r36.4.3 --depth=1 github/Linux_for_Tegra
```

O código-fonte do BSP para os Jetson da Seeed está disponível **neste [repositório GitHub](https://github.com/Seeed-Studio/Linux_for_Tegra/tree/main).**
Você pode verificar os diferentes branches para encontrar a versão L4T desejada, pois cada branch corresponde a um lançamento diferente do L4T.
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/github_L4T.jpg"/></div>

Em seguida, sobrescreva o código-fonte original:

```bash
cp -r github/Linux_for_Tegra/* Linux_for_Tegra/
```

Aplique as alterações necessárias ao rootfs:

```bash
cd Linux_for_Tegra
sudo ./apply_binaries.sh
```

Instale as dependências no seu PC:

```bash
sudo apt-get update
sudo apt-get install build-essential flex bison libssl-dev
sudo apt-get install sshpass
sudo apt-get install abootimg
sudo apt-get install nfs-kernel-server
sudo apt-get install libxml2-utils
sudo apt-get install qemu-user-static
```

Prepare o trabalho para a compilação do kernel:

```bash
mkdir -p l4t-gcc
tar xf aarch64--glibc--stable-2022.08-1.tar.bz2 -C ./l4t-gcc
export ARCH=arm64
export CROSS_COMPILE=/your_path/l4t-gcc/aarch64--glibc--stable-2022.08-1/bin/aarch64-buildroot-linux-gnu-
```

Compile e construa o kernel:

```bash
cd source
./nvbuild.sh
```

Instale os novos dtbs e drivers do kernel:

```bash
./do_copy.sh
export INSTALL_MOD_PATH=/your_path/Linux_for_Tegra/rootfs/
./nvbuild.sh -i
```




## 2. Guia de geração de arquivos criptografados e flashing

Entre no diretório de código-fonte previamente preparado e compilado:
```bash
cd Linux_for_Tegra
```


Instale dependências：
```python
sudo apt-get install python3-cryptography python3-cffi-backend libxml2-utils 
sudo apt-get install python3-pycryptodome python3-crypto
sudo apt-get install cryptsetup


pip install cryptography
pip install pycrypto
pip install --user --upgrade pycryptodome
```

Gere arquivos criptografados com base em `OPTEE`. Execute os seguintes comandos para gerar os arquivos criptografados `eks_t234.img` e `sym2_t234.key`: 

```python
cd source/tegra/optee-src/nv-optee/optee/samples/hwkey-agent/host/tool/gen_ekb

openssl rand -hex 32 > sym_t234.key
openssl rand -hex 16 > sym2_t234.key
openssl rand -hex 16 > auth_t234.key
openssl rand -hex 32 > oem_k1.key

./example.sh
```
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/optee-output.png
"/></div>

Copie `eks_t234.img` e `sym2_t234.key` para os diretórios especificados na sua pasta de código-fonte: 
```python
cp eks_t234.img /your_path/cd Linux_for_Tegra/bootloader/
sudo cp sym2_t234.key /your_path/Linux_for_Tegra
```

O exemplo a seguir demonstra como gerar a imagem usando o `reComputer J401` como exemplo:
```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh \
  --network usb0 \
  --no-flash \
  --showlogs \
  -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" \
  recomputer-orin-j401 \
  internal
```
Substitua `recomputer-orin-j401` pelo nome do dispositivo que você está usando. Você precisa fornecer um `device name` válido como parâmetro, o qual pode ser encontrado verificando os nomes dos arquivos .conf no diretório raiz de `Linux_for_Tegra`. O prefixo desses nomes de arquivo corresponde aos parâmetros válidos de `device name`.
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/device_name.png
"/></div>

:::tip
Para o JetPack 5, como os caminhos dos arquivos são diferentes, você precisa modificar o parâmetro `-p` para:
`-p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml"`
:::

Portanto, os parâmetros de nome de dispositivo disponíveis para **L4T 36.4.3** são os seguintes. As séries **j40** e **j30** usam o mesmo arquivo de configuração:

- recomputer-industrial-orin-j201 (recomputer-industrial-orin-j40/j30 também usa este `device name` como parâmetro.)
- recomputer-orin-j401
- reserver-agx-orin-j501x
- reserver-agx-orin-j501x-gmsl
- reserver-industrial-orin-j401
- recomputer-orin-j40mini
- recomputer-orin-robotics-j401
- recomputer-orin-super-j401


Copie `eks_t234_sigheader.img.encrypt` para o diretório de destino:

```python
sudo cp bootloader/eks_t234_sigheader.img.encrypt ./tools/kernel_flash/images/internal/
```

No diretório Linux_for_Tegra, execute o comando a seguir para gravar o sistema de arquivos raiz criptografado.
Novamente, substitua `recomputer-orin-j401` pelo nome de dispositivo correspondente à sua placa.

```python
sudo ROOTFS_ENC=1 \
./tools/kernel_flash/l4t_initrd_flash.sh \
  --external-device nvme0n1p1 \                  
  -i ./sym2_t234.key \                            
  -c tools/kernel_flash/flash_l4t_t234_nvme_rootfs_enc.xml \  
  -S 80GiB \                                      
  -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" \  
  --showlogs \                                    
  --network usb0 \                                
  recomputer-orin-j401 internal                    
```

Durante esse processo de flashing, o armazenamento do seu dispositivo Jetson será criptografado.

:::warning
Certifique-se de manter em segurança os arquivos de criptografia gerados por `OPTEE`, pois eles serão necessários posteriormente para a descriptografia.
:::

## 3. Obter a senha de descriptografia

No diretório de código-fonte previamente construído `Linux_for_Tegra`, copie o arquivo `sym2_t234.key` para o seguinte local:

```python
cp source/tegra/optee-src/nv-optee/optee/samples/hwkey-agent/host/tool/gen_ekb/sym2_t234.key source/tegra/optee-src/nv-optee/optee/samples/luks-srv/host/tool/gen_luks_passphrase
```

Em seguida, gere a senha de descriptografia com base no `UUID` e no `BR_CID` obtidos durante o processo de flashing:

```python
cd source/tegra/optee-src/nv-optee/optee/samples/luks-srv/host/tool/gen_luks_passphrase


python3 gen_luks_passphrase.py -k sym2_t234.key -c "UUID of the disk" -u -e "BR_CID"
# For example
python gen_luks_passphrase.py -k sym2_t234.key -c "551df6eb-fa80-431c-bb54-121481e53bae" -u -e '0x80012344705E01D15C00000015020180'
```

Os valores de `UUID` e `BR_CID` podem ser encontrados nos arquivos de log em Linux_for_Tegra/initrdlog.
Localize o arquivo de log correspondente com base no carimbo de data e hora da sua operação de flashing para recuperar esses valores.

| BR CID | UUID |
|:--:|:--:|
| <img width="400" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/BR CID.png"/> | <img width="340" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/UUID.png"/> |

`gen_luks_passphrase.py` irá exibir brevemente a senha de descriptografia no terminal — certifique-se de anotá-la imediatamente antes que desapareça.

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/password.png
"/></div>

## Recursos

- [Código-fonte do L4T da Seeed](https://github.com/Seeed-Studio/Linux_for_Tegra)

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
