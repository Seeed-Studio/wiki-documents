---
description: Como compilar o módulo de driver para o BSP Jetson da Seeed
title: Como compilar o módulo de driver para o BSP Jetson da Seeed
keywords:
  - jetson
  - jetpack
  - L4T
image: https://files.seeedstudio.com/wiki/reComputer/nvidia-jetpack-6-0-stack.webp
slug: /how_to_build_the_ko_module_for_seeed_jetson
last_update:
  date: 09/24/2025
  author: Dayu
createdAt: '2025-09-26'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/how_to_build_the_ko_module_for_seeed_jetson/
---


**Quando o módulo de driver `.ko` necessário não está disponível no reComputer/reServer, você pode compilar o módulo de driver no Jetson e carregá‑lo. Este wiki demonstra as etapas específicas e observações importantes, usando o JetPack 6.2 como exemplo.**

## 1. Preparar o ambiente de trabalho

Este artigo usa **L4T 36.4.3**, que corresponde ao BSP **JetPack 6.2**, como exemplo para mostrar como compilar o módulo de driver .ko para `pl2303` (um driver relacionado a USB‑para‑serial) em **reComputer/reServer**.

:::tip
Este tutorial faz o download do código‑fonte no Jetson e compila os módulos de kernel `.ko`.
:::


Primeiro, faça o download do código‑fonte do BSP a partir do site oficial da NVIDIA de acordo com a sua versão do L4T.

Se você não tem certeza sobre a relação entre as versões do L4T e as versões do JetPack, pode consultar este link:
https://developer.nvidia.com/embedded/jetpack-archive.
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/L4T-jetpack.png
"/></div>

Procure o lançamento específico do **L4T (Linux for Tegra)** que você deseja compilar, por exemplo:
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/google_L4T.jpg"/></div>

<!-- After clicking on the web, download and prepare the sample root file system, NVIDIA's official BSP and the toolchain used for cross-compilation, as shown below.
<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/download-BSP-rootfs-toolchain.png"/></div> -->

Baixe o código‑fonte do BSP correspondente no site da NVIDIA:
<div align="center">
<img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/download-src.png"/>
</div>

Coloque o arquivo compactado do código‑fonte do BSP baixado no seu diretório de trabalho e, em seguida, execute os seguintes comandos no terminal para extraí‑lo completamente:
```python
# First extract the main file
tar -xjf public_sources.tbz2

# Enter the extracted directory
cd Linux_for_Tegra/source

# Recursively extract all .tbz2, .tar.bz2, .tar.gz, .tgz, .tar.xz files
find . -type f \( -name "*.tbz2" -o -name "*.tar.bz2" -o -name "*.tar.gz" -o -name "*.tgz" -o -name "*.tar.xz" \) -exec bash -c '
    dir=$(dirname "$1")
    filename=$(basename "$1")
    cd "$dir"
    if [[ "$filename" == *.tbz2 || "$filename" == *.tar.bz2 ]]; then
        tar -xjf "$filename"
    elif [[ "$filename" == *.tar.gz || "$filename" == *.tgz ]]; then
        tar -xzf "$filename"
    elif [[ "$filename" == *.tar.xz ]]; then
        tar -xJf "$filename"
    fi
    cd - > /dev/null
' _ {} \;
```


Depois de extrair todos os arquivos compactados, navegue até `Linux_for_Tegra/source` e localize o caminho do código‑fonte do driver com base em palavras‑chave:
```python
sudo find . -type f -name "*<keyword>*"

# For exmaple:
sudo find . -type f -name "*pl2303*"
```
<div align="center">
<img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/path-pl2303.png"/>
</div>

Crie um novo ambiente de trabalho para compilação. De acordo com o caminho do código‑fonte impresso no terminal, copie o código‑fonte do driver para esse ambiente de trabalho.

Em seguida, dentro do ambiente de trabalho, crie um `Makefile` para compilação com o seguinte conteúdo:
```cpp
obj-m   += pl2303.o
all:
	make -C /lib/modules/$(shell uname -r)/build M=$(PWD) modules
clean:
	make -C /lib/modules/$(shell uname -r)/build M=$(PWD) clean
```
Aqui, `pl2303.o` deve ser substituído pelo nome correspondente do driver que você deseja compilar.

O ambiente de trabalho será semelhante ao da figura abaixo, contendo tanto o arquivo‑fonte quanto o `Makefile`:
<div align="center">
<img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/wkspace-ko.png"/>
</div>

Antes de compilar, você precisa criar um link simbólico:
```python
# Remove existing redundant directory if it exists
sudo rm -r /lib/modules/$(uname -r)/build

# Create symbolic link
sudo ln -s /usr/src/linux-headers-$(uname -r)-ubuntu22.04_aarch64/3rdparty/canonical/linux-jammy/kernel-source /lib/modules/$(uname -r)/build
```

Após criar o link simbólico, execute o seguinte comando no seu ambiente de trabalho para compilar e obter o módulo de driver `.ko `:
```bash
make
```

Após a compilação, o arquivo `.ko` será gerado no diretório atual:
<div align="center">
<img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/compiled-ko.png"/>
</div>


Em seguida, copie o arquivo `.ko` para o caminho de destino correto:
```bash
sudo cp pl2303.ko /lib/modules/$(uname -r)/kernel/drivers/usb/serial/
```

Para módulos de driver `.ko` compilados, o prefixo do caminho de destino é sempre `/lib/modules/$(uname - r)/kernel/`. O sufixo depende do tipo de módulo de driver e pode ser deduzido a partir do caminho relativo do código‑fonte, o que fornece o caminho completo de destino: 
<div align="center">
<img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/mark_path.png"/>
</div>


Depois de copiar para o caminho de destino, carregue o módulo de driver `.ko`:
```python
sudo depmod -a
sudo modprobe pl2303
```

Quando o carregamento for bem‑sucedido, você pode executar `modinfo <driver_name>` para verificar:
<div align="center">
<img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/modinfo-pl.png"/>
</div>




## Recursos

- [Código‑fonte do L4T da Seeed](https://github.com/Seeed-Studio/Linux_for_Tegra)

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
