---
description: Este guia explica como fazer backup e restaurar o sistema em um reComputer J3011 para transferir seu ambiente e software configurados para um novo dispositivo. O processo de backup inclui entrar no modo de recuperação, baixar o JetPack BSP e usar um script de backup para copiar os dados. Durante a restauração, insira um novo SSD, entre novamente no modo de recuperação e execute o comando de restauração. Este processo permite a replicação eficiente do ambiente de sistema configurado.
title: Criar backup e restauração no reComputer
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
updatedAt: '2025-09-15'
url: https://wiki.seeedstudio.com/pt-br/create_backup_and_restore_on_recomputer/
---

# Criar backup e restauração no reComputer

## Introdução

reComputer é uma caixa de borda inteligente poderosa e compacta que traz até 275TOPS de desempenho de IA moderno para a borda. Quando você tiver configurado e instalado o software e o ambiente necessários para o seu negócio no reComputer, e precisar replicar o projeto em outro novo reComputer, reinstalar o software não é eficiente. Portanto, esta página wiki usará o [reComputer J3011](https://www.seeedstudio.com/reComputer-J3011B-p-6405.html) para apresentar como fazer backup do software e do ambiente existentes na série reComputer, tornando conveniente para você restaurá-los e transplantá-los para o novo reComputer.

:::note
Nossa plataforma de teste é o reComputer J3011, JetPack 5.1.3 e JetPack 6.2 são fornecidos como referência. Selecione a seção apropriada com base na sua versão do JetPack.
:::

## Pré-requisitos

- Computador host com Ubuntu
- Cabo de transmissão de dados USB Type-C
- reComputer J3011 (com sistema operacional JetPack 5.1.3 ou JetPack 6.2)

:::info
Instale e configure o software e os aplicativos necessários no seu reComputer. Certifique-se de que essas modificações não prejudiquem a funcionalidade de inicialização do dispositivo. É recomendável reiniciar o dispositivo após fazer alterações para confirmar a estabilidade.

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/jtop.png"/></div>
Como na captura de tela acima, instalamos o software jtop, com o qual podemos usar esses comandos diretamente no terminal.
<a id="Recovery"></a>
:::

## JetPack 5.1.3
### Fazendo backup do sistema


**Passo 1.** Coloque o dispositivo em modo de recuperação consultando esta [página wiki](https://wiki.seeedstudio.com/pt-br/reComputer_J4012_Flash_Jetpack/#entrar-no-modo-de-força-de-recuperação).

**Passo 2.** Obtenha o JetPack BSP correspondente ao seu módulo Jetson. Para o JetPack 5.1.3, baixe o Jetson Linux R35.5.0 BSP no [site oficial da NVIDIA.](https://developer.nvidia.com/embedded/jetson-linux-r3550)
<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/download_bsp.jpg"/></div>

**Passo 3.** Extraia o arquivo BSP para acessar o diretório Linux_for_Tegra.

```bash
tar -xvzf jetson-linux-*.tbz2
# For Jetpack 5.1.3: tar -xvzf Jetson_Linux_R35.5.0_aarch64.tbz2
```

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/zip.jpg"/></div>

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
`xxx` é o seu `<target_board>`

```bash
ls | grep *.conf
```

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/conf_file1.jpg"/></div>
:::

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/backup_start.png"/></div>

aguarde pacientemente até que termine.
Se tudo correr bem, você verá algo semelhante à captura de tela abaixo no terminal:

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/success_back1.png"/></div>

:::note
Durante esse processo, seu dispositivo pode reiniciar muitas vezes como no processo de gravação. Não é recomendado usar máquinas virtuais ou WSL porque isso pode causar perda de conexão e fazer com que o processo de backup/restauração falhe. Você pode encontrar alguns arquivos ausentes; você pode abrir o `recomputer-orin.conf` e remover o arquivo que não existe.
Geralmente, estes são arquivos de objeto temporários de sobreposição de árvore de dispositivo; eles não afetam os resultados de backup e restauração. Mas se você fez modificações no BSP, precisará mesclar seus arquivos de sobreposição.
:::

### Restaurando o sistema

**Passo 1.** Insira um [SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html) novo e vazio no seu reComputer.

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/new_ssd.jpg"/></div>

**Passo 2.** Entre no modo de força de recuperação conforme [descrito anteriormente.](#Recovery)

**Passo 3.** No seu sistema host, navegue até o diretório do seu pacote de gravação do JetPack e execute o comando de restauração no host:  

```bash
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r recomputer-orin
```

Se tudo correr bem, você verá algo semelhante à captura de tela abaixo no terminal:
<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/finish_store1.png"/></div>

**Passo 4.** Ligue o dispositivo Jetson, use o nome de usuário e a senha que definimos anteriormente. E teste algum software que instalamos anteriormente. Se funcionar, então nossa restauração foi bem-sucedida.
<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/jtop2.png"/></div>
Como instalamos o jtop em nosso sistema anterior, podemos iniciar o jtop diretamente no terminal do novo sistema.

:::info
Além disso, os seguintes casos foram testados para backup e restauração:  

- Restaurar o backup para o SSD original.
- Restaurar o backup para um SSD diferente.  
- Restaurar o backup para a mesma placa carrier, com módulo Jetson do mesmo lote, SSDs diferentes.

:::

## JetPack 6.2
### Fazendo backup do sistema

Para o JetPack 6.2 (L4T 36.4.3), o processo de backup requer o download do firmware BSP compilado da Seeed e a compilação do código-fonte antes de realizar o backup.

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

**Passo 4.** Navegue até o diretório de código-fonte e compile o código-fonte (este processo levará algum tempo):

```bash
cd Linux_for_Tegra/source
./nvbuild.sh
```

**Passo 5.** Após a conclusão da compilação, copie e instale os componentes compilados:

```bash
./do_copy.sh
./nvbuild.sh -i
```

**Passo 6.** O diretório de trabalho agora está preparado. Navegue até o diretório `Linux_for_Tegra/`, coloque o dispositivo em modo de recuperação consultando esta [página wiki](https://wiki.seeedstudio.com/pt-br/reComputer_J4012_Flash_Jetpack/#entrar-no-modo-de-força-de-recuperação) e execute o script de backup:

```bash
cd ../
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b recomputer-orin-j401
```

:::info
-b `<target_board>` substitua pelo seu dispositivo. Para o JetPack 6.2, a placa alvo padrão é `recomputer-orin-j401`.
:::

Aguarde pacientemente até que termine. Se tudo correr bem, você verá uma mensagem de sucesso no terminal.

:::note
Durante esse processo, seu dispositivo pode reiniciar muitas vezes como no processo de gravação. Não é recomendado usar máquinas virtuais ou WSL porque isso pode causar perda de conexão e fazer com que o processo de backup/restauração falhe.
:::

### Restaurando o sistema

**Passo 1.** Insira um [SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html) novo e vazio no seu reComputer.

**Passo 2.** Entre no modo de força de recuperação conforme [descrito anteriormente.](#Recovery)

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
- Restaurar o backup para a mesma placa carrier, com módulo Jetson do mesmo lote, SSDs diferentes.
:::

## Recursos

- [Gravar o sistema JetPack OS na placa carrier J401](https://wiki.seeedstudio.com/pt-br/reComputer_J4012_Flash_Jetpack/)
- [Folha de dados do reComputer J30x](https://files.seeedstudio.com/products/NVIDIA/reComputer-J301x-datasheet.pdf)
- [Folha de dados do reComputer J40x](https://files.seeedstudio.com/products/NVIDIA/reComputer-J401x-datasheet.pdf)
- [Esquemático do reComputer J30/J40](https://files.seeedstudio.com/wiki/J401/reComputer_J401_SCH_V1.0.pdf)
- [Arquivo 3D do reComputer J30/J40](https://files.seeedstudio.com/wiki/reComputer-J4012/reComputer-J4012.stp)
- [Catálogo das séries Seeed Jetson](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Casos de sucesso de Edge AI da Seeed Studio](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Comparação das séries Seeed Jetson](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Página única dos dispositivos Seeed Jetson](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)
- [Exemplos Jetson](https://github.com/Seeed-Projects/jetson-examples)
- [reComputer-Jetson-para-Iniciantes](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners)

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
