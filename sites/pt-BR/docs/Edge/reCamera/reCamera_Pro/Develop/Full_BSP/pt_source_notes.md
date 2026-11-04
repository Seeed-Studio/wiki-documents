---
description: Resultados da revisão estática e status de verificação para o snapshot de código-fonte v1.0.10.
title: Revisão do Código-Fonte e Problemas Conhecidos
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - Referência
  - Documentação
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_sdk_source_notes
sku: 10003420
sidebar_position: 2
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_sdk_source_notes/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# Revisão do Código-Fonte e Problemas Conhecidos

Esta página registra itens encontrados durante uma revisão estática do SDK v1.0.10 que podem afetar compilações ou uso. A menos que estejam explicitamente marcados como verificados em hardware, as constatações são baseadas em inspeção do código-fonte e não foram necessariamente reproduzidas em um dispositivo.

| Item | Localização no código-fonte | Constatação confirmada | Impacto e ação |
| --- | --- | --- | --- |
| Caminho de empacotamento do app `install_to_userdata` | `project/build.sh`, `__PACKAGE_USERDATA()` | A verificação do diretório do app usa `userdata_app`, mas o comando de cópia ainda lê do caminho de mídia. Confirmado no código-fonte. | Arquivos esperados na imagem de userdata podem não ser copiados do diretório de saída do app. Se esse recurso for necessário, inspecione a imagem final ou o conteúdo do dispositivo; alternativamente, crie/ copie os arquivos durante a inicialização. |
| Ramificação `rkflash.sh update` | `project/rkflash.sh` | A ramificação correspondente está comentada. Confirmado no código-fonte. | Não presuma que `./rkflash.sh update` executa uma atualização. Use um comando compatível em [Flashing and Boot](/pt-br/recamera_pro_bsp_flash_boot/). |
| Imagem env em `rkflash.sh all` | `project/rkflash.sh` | A ramificação `all` não inclui `env.img`. Confirmado no código-fonte. | Após alterar a tabela de partições ou o ambiente de boot, verifique separadamente se a imagem env foi gravada e entrou em vigor. |
| Caixa do diretório de arquivo `save` | `project/build.sh`, `build_save()`; raiz `quick_start_cn.md` | `build_save()` converte o caminho `Image/...` para maiúsculas; o diretório real é `IMAGE/...`. O guia de início rápido também usa `IMAGE/`. Confirmado no código-fonte. | Procure o nome de diretório gerado pelo script atual. A referência anterior da Wiki a `Image/` estava incorreta. |
| Versão do SDK em `sdkinfo` | `project/build.sh`, `build_get_sdk_version()` | A versão vem de `.repo/manifest.xml`. Este snapshot de código-fonte não possui `.repo/`, portanto a compilação pode gravar `NONE`. Confirmado no código-fonte. | Verifique `/etc/ota_version`, o nome do BoardConfig e o arquivo de build em conjunto. Não identifique a versão apenas pelo campo SDK Version em `sdkinfo`. |
| Comentário de RTC vs. opção UTC | `project/cfg/BoardConfig_Recamera2/overlay-buildroot-hwclock/etc/init.d/S20hwclock` | O comentário do script e `hwclock --utc` parecem especificar convenções de horário diferentes. Confirmado no código-fonte; o comportamento de fuso horário precisa de verificação em hardware. | Antes de alterar o tratamento de horário, verifique o fuso horário, a convenção de RTC e o horário real após a reinicialização. |
| Alvo cross padrão para `recamera_services` | `project/app/recamera_services/Makefile` | O alvo padrão parece ser armv7; se o build de nível superior o substitui precisa ser verificado em relação ao ponto de entrada do build. Constatação estática; o binário final ainda não foi verificado. | Após uma compilação manual, execute `file` na saída e confirme que ela tem como alvo aarch64. |
| Nome do arquivo de Release Notes e descoberta automática | `project/cfg/BoardConfig_Recamera2/` e `build_info()` em `project/build.sh` | O nome de arquivo atual de Release Notes não corresponde ao padrão de nomenclatura pesquisado pelo script; o documento também é breve. Confirmado no código-fonte. | Antes da liberação, confirme manualmente que o arquivo compactado contém o registro de alterações correto. Não confie na promoção automática. |
| READMEs de `recamera_onvif` e `recamera_utils` | Diretórios de aplicação respectivos | Os arquivos README são modelos genéricos e não descrevem a compilação ou o uso deste projeto. Confirmado pela leitura dos arquivos. | Para entender o comportamento dos componentes, inspecione o Makefile, o código-fonte e os chamadores. Não trate o README de modelo como documentação do projeto. |

## Como Interpretar Estas Constatações

- **Confirmado no código-fonte:** a implementação ou configuração é diretamente visível no código-fonte citado; pode ainda não ter sido exercida em um dispositivo.
- **Precisa de verificação em hardware:** o resultado depende de hardware, firmware, configuração de runtime ou artefatos de build e deve ser reproduzido no dispositivo relevante.
- Caminhos e comportamento referem-se ao snapshot de código-fonte v1.0.10 coberto por esta Wiki. Verifique-os novamente após uma atualização do SDK; não trate estas constatações como garantias entre versões.
- Corrija esses problemas no código-fonte do SDK e reconstrua conforme necessário. Esta página registra o comportamento e o impacto atuais; ela não aplica correções.

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>