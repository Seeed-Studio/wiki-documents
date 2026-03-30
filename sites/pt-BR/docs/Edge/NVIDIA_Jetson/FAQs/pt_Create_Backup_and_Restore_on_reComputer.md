---
description: Este guia explica como fazer backup e restaurar o sistema em um reComputer J3011 para transferir seu ambiente e software configurados para um novo dispositivo. O processo de backup inclui entrar no modo de recuperação, baixar o JetPack BSP e usar um script de backup para copiar os dados. Durante a restauração, insira um novo SSD, entre novamente no modo de recuperação e execute o comando de restauração. Este processo permite a replicação eficiente do ambiente de sistema configurado.
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
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/create_backup_and_restore_on_recomputer/
---

# Criar Backup e Restauração no reComputer

## Introdução

O reComputer é uma caixa inteligente de borda poderosa e compacta que traz até 275 TOPS de desempenho moderno de IA para a borda. Quando você já configurou e instalou o software e o ambiente necessários para o seu negócio no reComputer e precisa replicar o projeto em outro reComputer novo, reinstalar o software não é eficiente. Portanto, esta página wiki usará o [reComputer J3011](https://www.seeedstudio.com/reComputer-J3011B-p-6405.html) para apresentar como fazer backup do seu software e ambiente existentes na série reComputer, tornando mais conveniente restaurá-los e transplantá-los para o novo reComputer.

:::note
Nossa plataforma de testes é o reComputer J3011, o JetPack 5.1.3 é fornecido como referência.
:::

## Pré-requisitos

- Computador host com Ubuntu
- Cabo de transmissão de dados USB Type-C
- reComputer J3011 (com sistema operacional JetPack 5.1.3)

:::info
Instale e configure os softwares e aplicativos necessários no seu reComputer. Certifique-se de que essas modificações não prejudiquem a funcionalidade de inicialização do dispositivo. É recomendável reiniciar o dispositivo após fazer alterações para confirmar a estabilidade.

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/jtop.png"/></div>
Como na captura de tela acima, instalamos o software jtop, com o qual podemos usar esses comandos diretamente no terminal.
<a id="Recovery"></a>
:::

## Fazendo Backup do Sistema

**Passo 1.** Coloque o dispositivo em modo de recuperação consultando esta [página wiki](https://wiki.seeedstudio.com/pt-br/reComputer_J4012_Flash_Jetpack/#entrar-no-modo-de-forca-de-recuperacao).

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

**Passo 6.** Execute o script de backup, especificando o dispositivo de armazenamento e o nome de backup desejado:

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

aguarde pacientemente até que seja concluído.
Se tudo correr bem, você verá algo semelhante à captura de tela abaixo no terminal:

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/success_back1.png"/></div>

:::note
Durante esse processo, seu dispositivo pode reiniciar muitas vezes, como no processo de gravação. Não é recomendado usar máquinas virtuais ou WSL porque a conexão pode ser perdida e causar falha no processo de backup/restauração. Você pode encontrar alguns arquivos ausentes; você pode abrir o `recomputer-orin.conf` e remover o arquivo que não existe.
Geralmente, estes são arquivos temporários de objeto de sobreposição de device tree; eles não afetam os resultados de backup e restauração. Mas se você fez modificações no BSP, precisará mesclar seus arquivos de sobreposição.
:::

## Restaurando o Sistema

**Passo 1.** Insira um [SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html) novo e vazio no seu reComputer.

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/new_ssd.jpg"/></div>

**Passo 2.** Entre no modo de força de recuperação conforme [descrito anteriormente.](#Recovery)

**Passo 3.** No seu sistema host, navegue até o diretório do seu pacote de gravação do JetPack e execute o comando de restauração no host:  

```bash
sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r recomputer-orin
```

Se tudo correr bem, você verá algo semelhante à captura de tela abaixo no terminal:
<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/finish_store1.png"/></div>

**Passo 4.** Ligue o dispositivo Jetson, use o nome de usuário e a senha que definimos anteriormente. E teste alguns softwares que instalamos anteriormente. Se funcionar, então nossa restauração foi bem-sucedida.
<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer_backup/jtop2.png"/></div>
Como tínhamos instalado o jtop em nosso sistema anterior, podemos iniciar o jtop diretamente no terminal do novo sistema.

:::info
Além disso, foram testados os seguintes casos de backup e restauração:  

- Restaurar o backup para o SSD original.
- Restaurar o backup para um SSD diferente.  
- Restaurar o backup para a mesma carrier board, com módulo Jetson do mesmo lote, SSDs diferentes.

:::

## Recursos

- [Gravar o sistema JetPack OS na placa carrier J401](https://wiki.seeedstudio.com/pt-br/reComputer_J4012_Flash_Jetpack/)
- [reComputer J30x Datasheet](https://files.seeedstudio.com/products/NVIDIA/reComputer-J301x-datasheet.pdf)
- [reComputer J40x Datasheet](https://files.seeedstudio.com/products/NVIDIA/reComputer-J401x-datasheet.pdf)
- [Esquemático do reComputer J30/J40](https://files.seeedstudio.com/wiki/J401/reComputer_J401_SCH_V1.0.pdf)
- [Arquivo 3D do reComputer J30/J40](https://files.seeedstudio.com/wiki/reComputer-J4012/reComputer-J4012.stp)
- [Catálogo da série Seeed Jetson](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Casos de sucesso de Edge AI da Seeed Studio](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Comparação das séries Seeed Jetson](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Dispositivos Seeed Jetson em uma página](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)
- [Exemplos para Jetson](https://github.com/Seeed-Projects/jetson-examples)
- [reComputer-Jetson-para-Iniciantes](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners)

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
