---
description: "Fazer backup e restaurar uma imagem do reComputer J3011 no JetPack 5.1.3 e 6.2: clonar o sistema para NVMe ou USB e depois gravá-lo em um novo dispositivo."
title: Criar Backup e Restauração no reComputer
keywords:
  - jetson
  - BSP
  - L4T
  - Backup
  - Restore
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/jtop2.webp
slug: /create_backup_and_restore_on_recomputer
last_update:
  date: 04/11/2025
  author: Zibo
createdAt: '2025-04-14'
updatedAt: '2026-05-08'
url: https://wiki.seeedstudio.com/pt-br/create_backup_and_restore_on_recomputer/
---

# Criar Backup e Restauração no reComputer

## Introdução

O reComputer oferece até 275 TOPS de desempenho de IA em um gabinete compacto para borda. Reinstalar manualmente uma unidade já configurada é demorado, portanto o fluxo abaixo usa `l4t_backup_restore.sh` para ler a imagem do sistema NVMe de um [reComputer J3011](https://www.seeedstudio.com/reComputer-J3011B-p-6405.html) para um host e depois gravar essa imagem em outra unidade. Tanto o JetPack 5.1.3 quanto o JetPack 6.2 são abordados.

:::note
Nossa plataforma de testes é o reComputer J3011; JetPack 5.1.3 e JetPack 6.2 são fornecidos como referência. Selecione a seção apropriada com base na sua versão do JetPack.
:::

## Pré-requisitos

- Computador host com Ubuntu
- Cabo USB Type-C para transmissão de dados
- reComputer J3011 (com sistema operacional JetPack 5.1.3 ou JetPack 6.2)

:::info
Instale e configure o software e os aplicativos necessários no seu reComputer. Certifique-se de que essas modificações não prejudiquem a funcionalidade de boot do dispositivo. Recomenda-se reiniciar o dispositivo após fazer alterações para confirmar a estabilidade.

<div align="center"><img alt="jtop em execução no terminal do reComputer, mostrando a versão do JetPack instalada" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/jtop.png"/></div>
Como na captura de tela acima, instalamos o software jtop, com o qual podemos usar esses comandos diretamente no terminal.
<a id="Recovery"></a>
:::

## JetPack 5.1.3
### Fazendo backup do sistema


**Passo 1.** Coloque o dispositivo em modo de recuperação conforme descrito nesta [página do wiki](https://wiki.seeedstudio.com/pt-br/reComputer_J4012_Flash_Jetpack/#entrar-no-modo-de-forçar-recuperação).

**Passo 2.** Obtenha o BSP do JetPack correspondente ao seu módulo Jetson. Para o JetPack 5.1.3, baixe o BSP Jetson Linux R35.5.0 no [site oficial da NVIDIA.](https://developer.nvidia.com/embedded/jetson-linux-r3550)
<div align="center"><img alt="Página de download do NVIDIA Jetson Linux R35.5.0 BSP usada para o JetPack 5.1.3" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/download_bsp.jpg"/></div>

**Passo 3.** Extraia o arquivo BSP para acessar o diretório Linux_for_Tegra.

```bash
tar -xvzf jetson-linux-*.tbz2
# For Jetpack 5.1.3: tar -xvzf Jetson_Linux_R35.5.0_aarch64.tbz2
```

<div align="center"><img alt="ls do diretório Linux_for_Tegra extraído mostrando flash.sh, apply_binaries.sh e os arquivos .conf da placa" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/zip.jpg"/></div>

**Passo 4.** Copie o conteúdo de Linux_for_Tegra para o diretório do seu pacote de gravação do JetPack (por exemplo, mfi_recomputer-orin).
:::note
"diretório do pacote de gravação" é o diretório de arquivos usado durante o processo de gravação do sistema.
:::

Use as opções `-rn` para preservar os arquivos existentes:

```bash
sudo cp -rn Linux_for_Tegra/* mfi_recomputer-orin
```

**Passo 5.** Navegue até o diretório do seu pacote de gravação do JetPack:

```bash
cd /path/to/mfi_recomputer-orin
```

**Passo 6.** Execute o script de backup, especificando seu dispositivo de armazenamento e o nome de backup desejado:

```bash
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b recomputer-orin
```

:::info
-b `<target_board>` substitua pelo seu dispositivo

:::

:::note
você pode navegar até o diretório do seu pacote de gravação do JetPack e encontrar um arquivo `xxx.conf`.
`xxx` é a sua `<target_board>`

```bash
ls | grep *.conf
```

<div align="center"><img alt="ls do diretório do pacote de gravação com recomputer-orin.conf destacado" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/conf_file1.jpg"/></div>
:::

<div align="center"><img alt="Terminal do host após iniciar o backup: l4t_initrd_flash.sh gerando a linha de comando de boot RCM" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/backup_start.png"/></div>

aguarde pacientemente até que termine.
Se tudo correr bem, você verá algo semelhante à captura de tela abaixo no terminal:

<div align="center"><img alt="Conclusão do backup com a imagem gravada no diretório do host" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/success_back1.png"/></div>

:::note
Durante esse processo, seu dispositivo pode reiniciar muitas vezes como no processo de gravação; não é recomendado usar máquinas virtuais ou WSL porque isso pode causar perda de conexão e fazer com que o processo de backup/restauração falhe. Você pode encontrar alguns arquivos ausentes; você pode abrir o `recomputer-orin.conf` e remover o arquivo que não existe.
Geralmente, estes são arquivos temporários de objeto de sobreposição de device tree; eles não afetam os resultados de backup e restauração. Mas se você fez modificações no BSP, precisará mesclar seus arquivos de sobreposição.
:::

### Restaurando o sistema

**Passo 1.** Insira um [SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html) novo e vazio no seu reComputer.

<div align="center"><img alt="SSD original ainda na placa, destacado, ao lado do novo SSD M.2 2280 vazio" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/new_ssd.jpg"/></div>

**Passo 2.** Entre no modo de forçar recuperação conforme [descrito anteriormente.](#Recovery)

**Passo 3.** No seu sistema host, navegue até o diretório do seu pacote de gravação do JetPack e execute o comando de restauração no host:  

```bash
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r recomputer-orin
```

Se tudo correr bem, você verá algo semelhante à captura de tela abaixo no terminal:
<div align="center"><img alt="Conclusão do comando de restauração com a imagem gravada de volta na unidade NVMe" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/finish_store1.png"/></div>

**Passo 4.** Ligue o dispositivo Jetson, use o nome de usuário e a senha que definimos anteriormente. E teste algum software que instalamos anteriormente. Se funcionar, então nossa restauração foi bem-sucedida.
<div align="center"><img alt="jtop disponível novamente no sistema restaurado, confirmando que a imagem inicializou" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/jtop2.png"/></div>
Como tínhamos instalado o jtop em nosso sistema anterior, podemos iniciar o jtop diretamente no terminal do novo sistema.

:::info
Além disso, os seguintes casos foram testados para backup e restauração:  

- Restaurar o backup para o SSD original.
- Restaurar o backup para um SSD diferente.  
- Restaurar o backup para a mesma carrier board, com módulo Jetson do mesmo lote, SSDs diferentes.

:::

## JetPack 6.2
### Fazendo backup do sistema

Para o JetPack 6.2 (L4T 36.4.3), o processo de backup exige o download do firmware BSP compilado da Seeed e a compilação do código-fonte antes de realizar o backup.

**Passo 1.** Baixe o firmware BSP compilado da Seeed: [L4T-36.4.3](https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/L4T36-4-3_plus.tar)

**Passo 2.** Extraia o pacote baixado e gere o conteúdo necessário usando os seguintes comandos no terminal do seu PC:

```bash
sudo tar xpf L4T36-4-3_plus.tar
# For example: sudo tar xpf L4T36-4-3_plus.tar

cd Linux_for_Tegra/
sudo ./apply_binaries.sh
cd ..
```

**Passo 3.** Configure as variáveis de ambiente no diretório extraído (onde o pacote tar.gz está localizado):

```bash
export ARCH=arm64 
export CROSS_COMPILE="$PWD/aarch64--glibc--stable-2022.08-1/bin/aarch64-buildroot-linux-gnu-"
export PATH="$PWD/aarch64--glibc--stable-2022.08-1/bin:$PATH"
export INSTALL_MOD_PATH="$PWD/Linux_for_Tegra/rootfs/"
```

**Passo 4.** Navegue até o diretório de código-fonte e compile o código-fonte (esse processo levará algum tempo):

```bash
cd Linux_for_Tegra/source
./nvbuild.sh
```

**Passo 5.** Após a conclusão da compilação, copie e instale os componentes compilados:

```bash
./do_copy.sh
./nvbuild.sh -i
```

**Passo 6.** O diretório de trabalho agora está preparado. Navegue até o diretório `Linux_for_Tegra/`, coloque o dispositivo em modo de recuperação conforme descrito nesta [página do wiki](https://wiki.seeedstudio.com/pt-br/reComputer_J4012_Flash_Jetpack/#entrar-no-modo-de-forçar-recuperação) e execute o script de backup:

```bash
cd ../
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b recomputer-orin-j401
```

:::info
-b `<target_board>` substitua pelo seu dispositivo. Para o JetPack 6.2, a placa de destino padrão é `recomputer-orin-j401`.
:::

Aguarde pacientemente até que termine. Se tudo correr bem, você verá uma mensagem de sucesso no terminal.

:::note
Durante esse processo, seu dispositivo pode reiniciar muitas vezes como no processo de gravação; não é recomendado usar máquinas virtuais ou WSL porque isso pode causar perda de conexão e fazer com que o processo de backup/restauração falhe.
:::

### Restaurando o sistema

**Passo 1.** Insira um [SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html) novo e vazio no seu reComputer.

**Passo 2.** Entre no modo de forçar recuperação conforme [descrito anteriormente.](#Recovery)

**Passo 3.** No seu sistema host, navegue até o diretório `Linux_for_Tegra/` e execute o comando de restauração no host:

```bash
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r recomputer-orin-j401
```

Se tudo correr bem, você verá uma mensagem de sucesso no terminal.

**Passo 4.** Ligue o dispositivo Jetson, use o nome de usuário e a senha que definimos anteriormente. E teste algum software que instalamos anteriormente. Se funcionar, então nossa restauração foi bem-sucedida.

:::info
Além disso, os seguintes casos foram testados para backup e restauração:

- Restaurar o backup para o SSD original.
- Restaurar o backup para um SSD diferente.
- Restaurar o backup para a mesma carrier board, com módulo Jetson do mesmo lote, SSDs diferentes.
:::

## Recursos

- [Gravar o sistema operacional JetPack na carrier board J401](https://wiki.seeedstudio.com/pt-br/reComputer_J4012_Flash_Jetpack/)
- [reComputer J30x Datasheet](https://files.seeedstudio.com/products/NVIDIA/reComputer-J301x-datasheet.pdf)
- [reComputer J40x Datasheet](https://files.seeedstudio.com/products/NVIDIA/reComputer-J401x-datasheet.pdf)
- [Esquemático do reComputer J30/J40](https://files.seeedstudio.com/wiki/J401/reComputer_J401_SCH_V1.0.pdf)
- [Arquivo 3D do reComputer J30/J40](https://files.seeedstudio.com/wiki/reComputer-J4012/reComputer-J4012.stp)
- [Catálogo da linha Seeed Jetson](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Casos de sucesso de Edge AI da Seeed Studio](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Comparação das linhas Seeed Jetson](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Visão geral dos dispositivos Seeed Jetson em uma página](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)
- [Exemplos Jetson](https://github.com/Seeed-Projects/jetson-examples)
- [reComputer-Jetson-para-Iniciantes](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners)

## FAQ

**Em qual host o backup pode ser executado?**
Um host Ubuntu com o cabo USB Type-C conectado ao reComputer. Não o execute em uma máquina virtual ou WSL — o dispositivo reinicia várias vezes durante o processo e uma conexão USB interrompida deixa uma imagem parcialmente gravada.

**O que as flags `-b` e `-r` fazem?**
`-b` lê a imagem do sistema do módulo para o diretório do pacote de gravação; `-r` grava uma imagem de volta no NVMe. Ambas usam `-e nvme0n1` para o dispositivo de armazenamento e o nome da placa de destino, que é `recomputer-orin` no JetPack 5.1.3 e `recomputer-orin-j401` no JetPack 6.2.

**O backup é interrompido com erros de arquivo ausente.**
Objetos temporários de overlay de device-tree referenciados em `recomputer-orin.conf` podem não existir. Remova essas linhas do arquivo `.conf` e execute novamente — eles não afetam a imagem a menos que você tenha modificado o BSP; nesse caso, mescle seus overlays em vez disso.

**A imagem pode ir para um SSD diferente ou para outra unidade?**
Sim. A restauração para o SSD original, para um SSD diferente e para outra unidade da mesma placa carrier e lote de módulo foi testada. Um SKU de módulo diferente é uma imagem diferente e não está coberto.

## Recursos Relacionados

- [Gravar o JetPack no reComputer J4012](/pt-br/reComputer_J4012_Flash_Jetpack/)
- [Implantar atualizações OTA no reComputer](/pt-br/deploy_ota_on_recomputer/)
- [Página do produto reComputer J3011](https://www.seeedstudio.com/reComputer-J3011B-p-6405.html)
- [Jetson Linux R35.5.0 BSP](https://developer.nvidia.com/embedded/jetson-linux-r3550)

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
