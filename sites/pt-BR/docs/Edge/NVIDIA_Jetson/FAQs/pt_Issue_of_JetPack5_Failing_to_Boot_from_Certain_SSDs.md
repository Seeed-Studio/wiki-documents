---
description: Resolver o problema do JetPack5 não conseguir inicializar a partir de determinados SSDs
title: Resolver o problema do JetPack5 não conseguir inicializar a partir de determinados SSDs
keywords:
  - jetson
  - jetpack
  - L4T
image: https://files.seeedstudio.com/wiki/reComputer/nvidia-jetpack-6-0-stack.webp
slug: /issue_of_jetpack5_failing_to_boot_from_certain_ssd
last_update:
  date: 07/30/2025
  author: Dayu
createdAt: '2025-08-06'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/issue_of_jetpack5_failing_to_boot_from_certain_ssd/
---

**Este wiki fornece uma breve introdução aos componentes do JetPack, ajudando você a compreender rapidamente a relação entre JetPack e Jetson, e respondendo a algumas das perguntas mais frequentes.**

## 1. Problema

Se o JetPack 5 for gravado no SSD do Jetson, ainda existe uma certa probabilidade de que o sistema não consiga inicializar, mesmo que o processo de gravação seja concluído com sucesso. O seguinte erro pode ocorrer durante a inicialização:
<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/other/jetpack_boot_failure.jpg"/></div>


Este problema também foi documentado nos fóruns oficiais da NVIDIA. Ele pode ser causado por incompatibilidade do sistema de arquivos ou limpeza incompleta durante o processo de gravação, o que leva à falha de inicialização.
Até o momento, **nenhum problema semelhante foi observado ao gravar e usar o JetPack 6 em dispositivos Jetson.**


## 2. Solução
**Aqui estão duas soluções fornecidas para sua referência. Você pode escolher com base na sua situação específica:**

###  Opção A

Primeiro, remova do dispositivo Jetson o SSD que não consegue inicializar corretamente e conecte-o ao seu PC usando uma case para SSD (qualquer case compatível semelhante à mostrada na imagem abaixo). Em seguida, prossiga para formatar a unidade.
<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/Jetson/nvme-faslhing.jpg"/></div>


Em seguida, insira o seguinte comando no terminal para localizar o SSD montado no PC, que pode ser nomeado como `sda`, `sdb` etc.:
```bash
lsblk
```

Se você não tiver certeza de qual nome corresponde ao SSD que você inseriu, pode verificar o conteúdo do diretório montado:
<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/ssd-mount.jpg
"/></div>

Tomando o diretório montado na imagem como exemplo, verifique se existe uma **árvore de dispositivo específica do Jetson**:
```bash
ls /your_path/boot
# For example: ls /media/darklee/bc5769eb-36d6-4c42-86d1-565554112264/boot
```

Se for o SSD do Jetson, você verá resultados semelhantes à imagem a seguir:
<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/device-tree-example.png
"/></div>

**Você pode continuar verificando o conteúdo de outros arquivos no diretório montado do SSD para confirmar ainda mais que ele pertence ao Jetson.**

:::danger
Por favor, verifique duas vezes para garantir a exatidão antes de formatar o SSD do Jetson. Se o SSD contiver dados importantes, certifique-se de fazer backup. Tenha certeza do que está fazendo.
:::

Depois de confirmar que é o SSD do Jetson e concluir quaisquer backups necessários, prossiga com uma formatação completa do SSD。
`bs=100M`, `count=800` formata os primeiros **80GB** de espaço. **Se o seu SSD tiver uma capacidade maior, você pode aumentar o espaço formatado de acordo.**
```bash
sudo wipefs -a /dev/sda
sudo dd if=/dev/zero of=/dev/sda bs=100M count=800
```
Após a conclusão da formatação, reinstale o SSD no Jetson. Se o SSD tiver sido completamente apagado, a gravação do JetPack 5 teoricamente deverá evitar quaisquer falhas de inicialização.

Consulte este [wik](https://wiki.seeedstudio.com/pt-br/flash/jetpack_to_selected_product/) para obter instruções sobre como gravar o Jetson.



###  Opção B


Consulte este [wiki](/pt-br/how_to_build_the_source_code_project_for_seeed_jetson_bsp) para preparar o projeto de código-fonte para gravação.

Ao executar `./tools/kernel_flash/l4t_initrd_flash.sh` com o parâmetro `--erase-all`, o drive de estado sólido será completamente apagado durante o processo de gravação.


## Recursos

- [Código-fonte do L4T da Seeed](https://github.com/Seeed-Studio/Linux_for_Tegra)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

