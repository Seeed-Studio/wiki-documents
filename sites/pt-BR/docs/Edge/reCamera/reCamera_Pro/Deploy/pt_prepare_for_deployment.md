---
description: Uma lista de verificação pré-implantação para a reCamera Pro — verifique energia, rede, horário, armazenamento, modelo de IA e comportamento de reinicialização antes de o dispositivo ir para campo.
title: Lista de Verificação Pré-Implantação
keywords:
  - reCamera
  - reCamera Pro
  - deployment
  - checklist
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_deploy_checklist
sku: 10003420
sidebar_position: 1
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_deploy_checklist/
---

# Lista de Verificação Pré-Implantação

Execute esta lista de verificação **na bancada, antes de montar a reCamera Pro em sua localização final**. Cada item tem um critério de aprovação concreto — se um item falhar, corrija primeiro (guias vinculados) ou colete logs e entre em contato com o suporte. Um dispositivo que passa em todas as seis verificações pode ser implantado sem supervisão.

| # | Verificação | Critério de aprovação |
| --- | --- | --- |
| 1 | Energia | Dispositivo inicializa até um LED verde sólido na fonte de alimentação final |
| 2 | Rede | Interface Web acessível no endereço LAN a partir do computador de monitoramento |
| 3 | Horário | Relógio do dispositivo corresponde ao horário real e permanece correto após uma reinicialização |
| 4 | Armazenamento | Armazenamento de gravação dimensionado para a retenção de que você precisa; política de disco cheio definida |
| 5 | Modelo de IA | O modelo correto é executado e detecta seu alvo no mundo real |
| 6 | Reinicialização | Dispositivo volta automaticamente, com configurações e detecção intactas |

{/* TODO(verify): validate each check below on a real device in the field-installation orientation, and add measured pass/fail thresholds (e.g. minimum supply voltage, Wi-Fi signal level, retention days per GB) once tested. */}

## 1. Energia

- Use a fonte de alimentação DC de 12 V de fábrica (12 V, 1 A no mínimo; a fonte de fábrica é 12 V, 3 A) ou uma fonte igualmente estável na fiação **final** — não o cabo USB de bancada.
- Se estiver alimentando via Type-C, o adaptador deve suportar o protocolo PD; energia instável aparece como erros de Wi-Fi repetidos e falhas de pré-visualização.
- **Aprovado**: LED verde sólido após a inicialização, e o dispositivo permanece ligado durante uma sessão completa de pré-visualização + inferência. Consulte a seção de hardware do [guia de início rápido](/pt-br/recamera_pro_getting_started/).

## 2. Rede

- Conecte o dispositivo ao Wi-Fi/rede de produção, reserve um endereço fixo para seu MAC no roteador (ou registre o endereço atribuído) e confirme que a Interface Web abre a partir do computador que irá monitorá-lo.
- Defina o acesso de forma deliberada: habilite SSH somente se precisar, revise as configurações HTTP e altere a senha padrão.
- **Aprovado**: Interface Web acessível no endereço LAN depois que o cabo USB é desconectado. Consulte [Acessar o dispositivo via Wi-Fi](/pt-br/recamera_pro_wifi_access/) e [Rede, horário e controle de acesso](/pt-br/recamera_pro_device_info/).

## 3. Horário

- Agendamentos de gravação e carimbos de data/hora dos arquivos dependem de um relógio correto. Defina a hora do sistema (e a fonte de horário) em **Device Info → Time Settings**.
- **Aprovado**: horário exibido corresponde ao horário real, e os carimbos de data/hora dos arquivos gravados caem no diretório de data correto — inclusive após uma reinicialização.

## 4. Armazenamento

- Insira/verifique o armazenamento no qual você realmente irá gravar e, em **Recording Settings → Storage Management**: verifique o uso de disco, defina o tamanho/cota de armazenamento disponível e decida a política de disco cheio (sobrescrever mais antigos vs parar).
- **Aprovado**: cota + política definidas, e uma gravação de teste aparece em **File Preview**. Consulte [Encontrar gravações e armazenamento](/pt-br/recamera_pro_storage/).

## 5. Modelo de IA

- Carregue o modelo que você irá executar em produção (pré-carregado ou próprio), configure suas categorias de detecção e limiares, habilite a inferência e verifique se ele detecta **seu alvo real na posição de montagem real** — incluindo iluminação, ângulo e distância.
- **Aprovado**: monitoramento de inferência em tempo real mostra `class_name`/`score` corretos para o seu alvo, em um FPS aceitável. Consulte [Configuração de inferência de IA](/pt-br/recamera_pro_ai_inference/); para modelos personalizados, consulte [Escolher um caminho de implantação de modelo](/pt-br/recamera_pro_model_path/).

## 6. Reinicialização

- Reinicie o dispositivo em **Device Info → System Settings** (ou desligue e ligue a alimentação) como teste final.
- **Aprovado**: o dispositivo inicializa sozinho até um LED verde sólido, mantém seu horário, rede, senha, regras de gravação e modelo em execução — e volta a detectar sem qualquer etapa manual.

## Antes de fechar a caixa

- [Faça backup da configuração](/pt-br/recamera_pro_backup_restore/) e armazene o arquivo exportado com segurança — ele é seu caminho de recuperação mais rápido.
- Registre a versão de firmware exibida em **Device Info → System Settings** na sua lista de ativos; mantenha o guia de [atualização e recuperação de firmware](/pt-br/recamera_pro_firmware_update/) à mão.
- Anote o endereço LAN do dispositivo, a política de conta de administrador e a localização de montagem na sua própria documentação de operações.

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
