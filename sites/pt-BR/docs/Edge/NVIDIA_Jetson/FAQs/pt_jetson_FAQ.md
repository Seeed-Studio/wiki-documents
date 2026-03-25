---
description: Jetson-FAQ
title: FAQs para uso do Jetson
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Jetson_FAQ
last_update:
  date: 7/5/2023
  author: Seraphina
createdAt: '2025-04-11'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Jetson_FAQ/
---


Este documento contém todas as perguntas frequentes relacionadas aos produtos da série Jetson. Isto será muito útil se você estiver enfrentando qualquer problema ao usar o Jetson.

#### P1: Solução de problemas de instalação

Para mais detalhes, clique [aqui](/pt-br/Troubleshooting_Installation)

#### P2: O espaço restante no eMMC do reComputer recebido é de apenas cerca de 2GB. Como resolver o problema de espaço insuficiente?

Para mais detalhes, clique [aqui](/pt-br/solution_of_insufficient_space)

#### P3: Como resolver o problema de compatibilidade entre o reComputer e a câmera VEYE?

Para mais detalhes, clique [aqui](/pt-br/Solution_for_the_Compatibility_Issue_between_reComputer_and_VEYE_Camera)

#### P4: Como resolver o problema de compatibilidade entre a câmera IMX477 e a placa carrier A603?

Para mais detalhes, clique [aqui](/pt-br/Use_IMX477_Camera_with_A603_Jetson_Carrier_Board)

#### P5: Como obter o log do sistema do reComputer J30/J40?

Para mais detalhes, clique [aqui](/pt-br/get_the_system_log_of_recomputer_j30_and_j40)

#### P6: Erros comuns durante o processo de gravação (flashing) do Jetson.

Para mais detalhes, clique [aqui](/pt-br/usb_timeout_during_flash)

#### P7: Não consigo usar a porta USB-A, a porta Ethernet ou não há exibição HDMI após gravar o dispositivo.
**R:** Verifique a integridade dos arquivos (por exemplo, fornecemos os checksums SHA256). Para algumas placas carrier (especialmente a série A60X), certifique-se de que o patch de driver foi copiado/aplicado com sucesso no diretório **Linux_for_tegra**. Há arquivos que exigem permissão de **sudo** e, ao copiar diretórios, certifique-se de que o parâmetro **-r** esteja incluído no seu comando.

#### P8: Meu sistema travou/não consegue inicializar/tela preta/perdeu drivers de periféricos depois que executei os comandos "sudo apt-get update && sudo apt-get upgrade".
**R:** Esses problemas podem ser resumidos como **"Por que não posso atualizar o sistema com apt upgrade em placas carrier personalizadas?"** A resposta curta é: **Não** execute o comando apt upgrade em placas carrier **personalizadas/de terceiros**. Além disso, evite executar quaisquer scripts que incluam comandos apt upgrade ou usar ferramentas de atualização via interface gráfica no Ubuntu. Os pacotes Debian do servidor não levam em conta o design específico das nossas placas personalizadas, e forçar a atualização pode causar incompatibilidades que podem inutilizar seu dispositivo. Este processo é compatível apenas com o devkit oficial. Para resolver esses problemas, siga nosso guia para regravar o JetPack.

#### P9: Como posso atualizar pacotes de software se vocês disseram que não posso executar apt upgrade? Haverá riscos de segurança se eu não atualizar o software?

Para mais detalhes, clique [aqui](/pt-br/upgrade_software_packages_for_jetson)

<!-- #### Q10: How to use the OTA (Over-the-Air) method to upgrade the system version of the Jetson device. 

For details, please click [here](/pt-br/updating_jetpack_with_ota) -->

#### P11: Quais modificações a Seeed faz no BSP Jetson da NVIDIA.

Para mais detalhes, clique [aqui](/pt-br/differences_of_l4t_between_seeed_and_nvidia)

#### P12: Como habilitar a interface SPI no Jetson-nano?
Para mais detalhes, clique [aqui](/pt-br/enable_spi_interface_on_jetsonnano)

#### P13: Por que às vezes, após concluir o processo de gravação no Jetson, o sistema não consegue inicializar a partir do SSD?
Este problema ocorre atualmente ao gravar o JetPack 5, e a NVIDIA o documentou oficialmente. Para a solução, clique [aqui.](/pt-br/issue_of_jetpack5_failing_to_boot_from_certain_ssd)

#### P14: Como compilar o projeto de código-fonte para o BSP Jetson da Seeed?
Para mais detalhes, clique [aqui](/pt-br/how_to_build_the_source_code_project_for_seeed_jetson_bsp)

#### P15: Por que o comando `apt upgrade` não pode ser executado no reComputer/reServer?
Os kernels e drivers do **reComputer/reServer** são personalizados. Se o comando `apt upgrade` for executado, alguns pacotes relacionados ao kernel e aos drivers podem ser substituídos pelos recursos oficiais da NVIDIA, o que pode causar problemas de compatibilidade de software. <mark>Portanto, não execute `apt upgrade` em nenhuma plataforma Jetson de terceiros.</mark>

Você pode consultar as instruções a seguir para bloquear as fontes APT relevantes. Dessa forma, se o apt upgrade for executado acidentalmente, o impacto será minimizado:
```bash
sudo apt-mark hold <package-name>

### For example: 
sudo apt-mark hold nvidia-l4t-core
```

#### P16: Se o reComputer/reServer não tiver o módulo de driver `.ko` necessário, como posso compilar um driver utilizável?

Para mais detalhes, clique [aqui](/pt-br/how_to_build_the_ko_module_for_seeed_jetson)

#### P17：Como posso montar um disco rígido externo formatado com exFAT no Jetson (JetPack 6)?

Primeiro, instale as dependências:
```
sudo apt install build-essential autoconf automake libtool pkg-config
sudo apt install git libfuse-dev
```

Em seguida, clone e compile o driver exFAT a partir do código-fonte:
```
git clone https://github.com/relan/exfat
cd exfat
autoreconf --install
./configure
make
sudo make install
```

Depois, monte manualmente o disco em um diretório local:
```
lsblk   # Check the device name of your external hard drive

sudo mkdir /media/seeed/tmp-exfat   # Create a mount point
sudo mount.exfat /dev/sda3 /media/seeed/tmp-exfat/
```

Isso monta a unidade externa formatada em exFAT em `/media/seeed/tmp-exfat/` para que ela possa ser acessada normalmente no Jetson.

#### P18：Como criptografar o disco do Jetson antes de gravar a imagem?

Para mais detalhes, clique [aqui](/pt-br/how_to_encrypt_the_disk_for_jetson)

#### P18：Como estabelecer comunicação entre o Jetson e dispositivos EtherCAT?

Para mais detalhes, clique [aqui](/pt-br/how_to_establish_the_ethercat_on_jetson)

#### P18 Não modifiquei nada relacionado ao kernel do Jetson, mas durante a inicialização o Jetson relatou um erro relacionado ao UUID e então entrou no terminal de recuperação.

Solução para este problema: clique [aqui](/pt-br/deal_the_issue_of_UUID)

## Suporte técnico

Obrigado por escolher nossos produtos! Estamos **aqui** para fornecer diferentes tipos de suporte e garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

