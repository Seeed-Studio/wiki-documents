---
description: Fazer flash ou migrar um dispositivo Jetson compatível da Seeed Studio para o JetPack 7.2, usando o Seeed Jetson DevelopTool para o fluxo de trabalho recomendado de flash completo e uma carga útil OTA validada baseada em imagem para implantações gerenciadas.
title: Flash e atualização OTA para JetPack 7.2
keywords:
  - JetPack 7.2
  - Jetson Linux 39.2
  - Seeed Jetson DevelopTool
  - Flash Center
  - OTA
  - NVIDIA Jetson
image: https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/ui-flash-center.png
slug: /flash_and_ota_jetpack_7.2
last_update:
  date: 07/31/2026
  author: Seeed Studio
createdAt: '2026-07-31'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/pt-br/flash_and_ota_jetpack_7.2/
---

# Flash e atualização OTA para JetPack 7.2

Este guia é a principal entrada de instalação do JetPack 7.2 para produtos NVIDIA Jetson da Seeed Studio compatíveis. Ele explica quando realizar um flash limpo, quando uma atualização OTA baseada em imagem é apropriada e como usar o **Seeed Jetson DevelopTool Flash Center** como exemplo guiado de flashing.

:::info Base do JetPack 7.2
JetPack 7.2 é baseado em **Jetson Linux 39.2**, **Ubuntu 24.04** e **kernel Linux 6.8**. Sempre selecione uma imagem criada para a combinação exata de módulo Jetson e placa carrier da Seeed.
:::

## Escolha primeiro o método de atualização

| Método | Uso recomendado | Impacto nos dados | Status no JetPack 7.2 |
| --- | --- | --- | --- |
| Flash completo com Seeed Jetson DevelopTool | Dispositivos novos, sistemas de desenvolvimento, migração de JetPack 6.x para 7.2, recuperação ou substituição de BSP | O armazenamento do sistema de destino é apagado | **Padrão recomendado** |
| Flash manual de BSP | Desenvolvimento de BSP personalizado, automação de fábrica ou solução de problemas fora da interface gráfica | O armazenamento do sistema de destino é apagado | Suportado ao usar o BSP e a configuração de placa Seeed/NVIDIA corretos |
| OTA baseada em imagem | Frotas de produção gerenciadas com imagem de origem, imagem de destino, configuração de placa, layout de partição e plano de rollback validados | Os dados de aplicação podem ser preservados se projetados e testados explicitamente | Use somente quando uma carga útil OTA do JetPack 7.2 estiver validada para o produto exato e a versão de origem |
| `apt upgrade` entre versões principais do JetPack | Não recomendado | Imprevisível | Não use como método de migração de JetPack 6.x para 7.2 |

:::caution
Para uma migração principal, como de JetPack 6.x para JetPack 7.2, use um flash completo, a menos que a Seeed publique ou valide explicitamente uma carga útil OTA para o seu produto exato, versão L4T de origem, dispositivo de armazenamento e layout de partição.
:::

## Vídeo: Fluxo de trabalho de flashing com Seeed Jetson DevelopTool

O vídeo a seguir demonstra o Seeed Jetson DevelopTool com uma plataforma NVIDIA Jetson AGX Thor. O fluxo de trabalho do Flash Center também é representativo dos produtos Seeed Jetson compatíveis, mas os modelos de dispositivo e versões de firmware disponíveis dependem do catálogo atual do DevelopTool.

<div class="video-container">
  <iframe width="800" height="450" src="https://www.youtube.com/embed/SjXyQ3abxms" title="Seeed Jetson DevelopTool with AGX Thor" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Parte 1: Flash completo com Seeed Jetson DevelopTool

### Antes de começar

- Confirme se o [seletor de flashing do JetPack](/pt-br/flash/jetpack_to_selected_product/) ou o wiki do produto lista uma imagem JetPack 7.2 / L4T 39.2 para o seu dispositivo.
- Use um host Ubuntu estável. Linux nativo é recomendado para a conexão de recuperação USB mais confiável.
- Prepare pelo menos 20 GB de armazenamento livre no host; espaço adicional pode ser necessário para pacotes BSP baixados e extraídos.
- Use um cabo USB de dados conectado diretamente à porta correta de recuperação/flashing.
- Faça backup de dados de usuário, contêineres, arquivos de calibração, configuração de aplicações, chaves de criptografia e fontes de BSP personalizados.
- Desconecte dispositivos Jetson em modo de recuperação desnecessários para que o alvo errado não possa ser selecionado.

:::warning
O flashing apaga o armazenamento do sistema Jetson selecionado. Confirme o dispositivo de destino, placa carrier, SKU do módulo e destino de armazenamento antes de começar.
:::

### Etapa 1: Instalar e iniciar o DevelopTool

Instale o pacote Python publicado:

```bash
python3 -m pip install --upgrade seeed-jetson-developer
seeed-jetson-developer
```

Como alternativa, instale a partir do código-fonte:

```bash
git clone https://github.com/Seeed-Projects/Seeed-Jetson-DevelopTool.git
cd Seeed-Jetson-DevelopTool
python3 -m pip install .
seeed-jetson-developer
```

Consulte [Instalação do DevelopTool](/pt-br/jetson_developtool_installation/) para a configuração completa do host.

### Etapa 2: Abrir o Flash Center

Abra o **Flash Center** no Seeed Jetson DevelopTool.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/ui-flash-center.png" style={{width:800, height:'auto'}}/>
</div>

### Etapa 3: Selecionar o dispositivo exato e a imagem JetPack 7.2

Selecione o produto Seeed exato ou a configuração de placa carrier e, em seguida, selecione **L4T 39.2 / JetPack 7.2** quando estiver disponível para esse alvo.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/flash-step1-select-device.png" style={{width:800, height:'auto'}}/>
</div>

:::caution
Não selecione uma placa com nome semelhante. Um módulo Jetson pode ser conectado eletricamente a diferentes placas carrier que exigem diferentes device trees, configurações de pinmux, configurações de energia e drivers de periféricos.
:::

Se L4T 39.2 não for oferecido para o produto selecionado, pare e verifique:

- [Fazer flash de BSP com JetPack para o Jetson selecionado](/pt-br/flash/jetpack_to_selected_product/)
- [Dispositivos compatíveis com DevelopTool](/pt-br/jetson_developtool_supported_devices/)
- O wiki de flashing específico do produto vinculado no [Hub de recursos do JetPack 7.2](/pt-br/jetpack_7_2_resource_hub/)

### Etapa 4: Baixar, verificar e extrair o BSP

Clique em **Download / Extract BSP**. O DevelopTool baixa o pacote de firmware, suporta downloads retomáveis, verifica o checksum quando fornecido e extrai o BSP.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeed-Jetson-DevelopTool/flash-step1-prepare-bsp.png" style={{width:800, height:'auto'}}/>
</div>

Não continue se a verificação do download ou a extração falhar. Exclua um pacote incompleto somente depois de confirmar que o DevelopTool não pode retomá-lo.

### Etapa 5: Colocar o Jetson em modo Force Recovery

Use o botão de recuperação específico do produto ou a sequência de jumpers, conecte a porta USB de recuperação e ligue ou reinicie o dispositivo conforme instruído pelo seu guia de hardware.

No host, verifique se o USB de recuperação da NVIDIA está presente:

```bash
lsusb | grep 0955
```

Os IDs de dispositivo de recuperação do Jetson Orin geralmente correspondem à família `0955:7x23`. O Jetson Thor usa um ID de recuperação diferente. O valor exato depende do módulo.

Consulte [Conectar dispositivo](/pt-br/jetson_developtool_connect_device/) para o fluxo de trabalho de recuperação USB do DevelopTool.

### Etapa 6: Detectar e confirmar o alvo

Clique em **Detect Device**. Antes de iniciar o flash, confirme:

- Produto Seeed e placa carrier selecionados
- Módulo Jetson e configuração de memória
- Imagem L4T 39.2 / JetPack 7.2
- Dispositivo de armazenamento de destino
- Dispositivo USB de recuperação
- Conclusão do backup

### Etapa 7: Iniciar o flashing

Clique em **Start Flash** e mantenha tanto o USB quanto a alimentação conectados até que o processo seja concluído.

:::warning
Não tente repetir automaticamente um flash com falha sem antes revisar o log de falha. Para erros de USB, coloque o dispositivo novamente em modo Force Recovery, reconecte-o diretamente ao host e detecte o alvo novamente.
:::

### Etapa 8: Concluir o primeiro boot

Depois que o dispositivo inicializar:

1. Conclua a configuração de primeiro boot do Ubuntu ou use o [fluxo de trabalho de inicialização remota do DevelopTool](/pt-br/jetson_developtool_remote_development/) para um dispositivo headless.
2. Configure a rede e o acesso SSH.
3. Restaure os dados da aplicação somente depois que o sistema base passar na validação.

### Etapa 9: Verificar o JetPack 7.2

Execute:

```bash
head -n 1 /etc/nv_tegra_release
cat /etc/os-release
uname -r
nvcc --version
dpkg -l | grep -E 'nvidia-jetpack|tensorrt|libnvinfer|cudnn'
```

Confirme a seguinte base:

- Jetson Linux relata a família de lançamento R39.2.
- O sistema de arquivos raiz relata Ubuntu 24.04.
- O kernel relata a linha de kernel 6.8 do JetPack 7.2 fornecida pela imagem.
- Os pacotes CUDA e TensorRT correspondem à imagem JetPack de destino.

Em seguida, valide Ethernet, Wi-Fi, câmera, GMSL, CAN, USB, M.2, GPIO, armazenamento, controle de ventoinha e os modos de energia necessários.

## Parte 2: OTA baseada em imagem do JetPack 7.2

A OTA baseada em imagem atualiza um Jetson implantado sem conectar cada dispositivo a um host de flashing. É um fluxo de trabalho de engenharia de releases, não uma atualização genérica de pacotes.

:::danger As cargas úteis atuais do repositório não são cargas úteis do JetPack 7.2
As cargas úteis OTA prontas para uso atualmente documentadas em [Implantar OTA no reComputer](/pt-br/deploy_ota_on_recomputer/) atualizam sistemas JetPack 5.1.3 para JetPack 6.2. **Não** aplique essas cargas úteis a dispositivos JetPack 7.2 nem as use como pacotes de JetPack 6.x para 7.2.
:::

### Entradas de compatibilidade OTA necessárias

Uma carga útil OTA do JetPack 7.2 deve ser gerada e validada para todos os itens a seguir:

- Produto Seeed exato e placa carrier
- SKU exato do módulo Jetson e configuração de memória
- Versão L4T de origem exata e estado do sistema de arquivos raiz
- BSP L4T 39.2 de destino exato
- Armazenamento de boot e layout de partição
- Secure Boot, criptografia de disco e configuração de chaves
- Alterações personalizadas em device tree, kernel, módulos de kernel, firmware e sistema de arquivos raiz
- Lista de preservação de dados e espaço livre disponível
- Comportamento de recuperação de perda de energia e rollback

Se qualquer uma dessas entradas for diferente, crie e valide uma carga útil separada.

### Fluxo de desenvolvimento OTA recomendado

1. Reproduza tanto a imagem de origem quanto a imagem JetPack 7.2 de destino a partir de entradas de BSP com controle de versão.
2. Faça flash em dispositivos representativos com a imagem de origem e registre partição, bootloader, armazenamento e estado de segurança.
3. Gere a carga útil OTA baseada em imagem usando as ferramentas OTA do Jetson Linux 39.2 e o pacote de suporte de placa Seeed correspondente.
4. Assine a carga útil quando o modelo de segurança de produção exigir.
5. Defina apenas os dados que devem sobreviver à atualização; faça backup deles de forma independente antes da primeira implantação em produção.
6. Teste cenários de atualização normal, download interrompido, instalação interrompida, pouco armazenamento, perda de energia e rollback.
7. Faça o rollout para um pequeno grupo canário antes de expandir a implantação.
8. Verifique Jetson Linux, slots de boot, serviços de aplicação, periféricos e versões de runtime de IA após o reboot.

As páginas existentes [Deploy OTA on reComputer](/pt-br/deploy_ota_on_recomputer/) e [Updating Jetson Linux with Image-Based OTA](/pt-br/updating_jetpack_with_ota/) são referências úteis para a estrutura de geração de pacotes e para o fluxo de trabalho `nv_ota_start.sh` no dispositivo. Seus comandos específicos de versão devem ser substituídos pelos pacotes Jetson Linux 39.2 corretos, configuração de placa e dados de partição.

### Checklist de validação OTA no dispositivo

Antes de aplicar o payload:

```bash
df -h
lsblk -f
head -n 1 /etc/nv_tegra_release
systemctl --failed
```

Após o reboot da OTA:

```bash
head -n 1 /etc/nv_tegra_release
uname -r
systemctl --failed
journalctl -b -p err
```

Também verifique dados de aplicação, identidade de rede, certificados do dispositivo, volumes de contêiner, interfaces de hardware e o watchdog de produção.

## Checklist de migração de JetPack 6.x para 7.2

- Recompilar módulos de kernel out-of-tree com os headers de kernel do JetPack 7.2.
- Recompilar drivers de câmera e GMSL para o BSP de destino.
- Recompilar extensões CUDA e aplicações nativas para CUDA 13.
- Recompilar engines TensorRT serializados no JetPack 7.2.
- Recriar ambientes Python em vez de copiar o diretório de ambiente do JetPack 6.x.
- Revalidar contêineres com o runtime de contêiner NVIDIA do JetPack 7.2.
- Restaurar os [módulos sem fio do JetPack 7.2](/pt-br/jetpack72_ax210_ax200_wifi_setup_guide/) quando exigido pelo hardware.
- Validar o modo de energia original antes de habilitar `MAXN_SUPER` ou outro modo de desempenho mais alto.
- Registrar memória, latência, throughput, temperatura e energia antes da implantação em produção.

## Solução de problemas

### DevelopTool não relata nenhum dispositivo em modo de recuperação

- Confirme se o cabo USB suporta dados.
- Use a porta USB dedicada para recuperação/gravação.
- Repita a sequência de Force Recovery específica do produto.
- Execute `lsusb | grep 0955` no host.
- Desconecte outros dispositivos Jetson em modo de recuperação.
- Prefira Ubuntu nativo se o passthrough USB do WSL2 estiver instável.

### A imagem JetPack 7.2 necessária não está listada

Não selecione outra carrier board como solução alternativa. Verifique o seletor central de gravação e o wiki do produto, depois aguarde ou solicite um BSP validado para o hardware exato.

### O dispositivo não inicializa após a gravação

- Confirme se a imagem corresponde à carrier board e ao SKU do módulo.
- Remova o jumper de Force Recovery ou solte o botão de recuperação.
- Desligue e ligue o dispositivo.
- Capture o log de boot serial UART.
- Entre novamente em modo de recuperação e revise o log de gravação do DevelopTool antes de regravar.

### A OTA falha ou não reinicia no JetPack 7.2

- Confirme se as versões de origem e destino do payload correspondem exatamente ao dispositivo.
- Confirme se há armazenamento livre suficiente para staging e instalação.
- Revise os logs da OTA antes de tentar novamente.
- Restaure a imagem completa conhecida como boa se o caminho de rollback testado não conseguir recuperar o dispositivo.

## Recursos relacionados

- [JetPack 7.2 Resource Hub](/pt-br/jetpack_7_2_resource_hub/)
- [Flash BSP with JetPack to Selected Jetson](/pt-br/flash/jetpack_to_selected_product/)
- [DevelopTool Flash Firmware](/pt-br/jetson_developtool_flash_firmware/)
- [DevelopTool Supported Devices](/pt-br/jetson_developtool_supported_devices/)
- [Deploy OTA on reComputer](/pt-br/deploy_ota_on_recomputer/)
- [Updating Jetson Linux with Image-Based OTA](/pt-br/updating_jetpack_with_ota/)
- [JetPack 7.2 Deep Dive](/pt-br/jetpack72_deep_dive/)

## Suporte técnico e discussão de produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
