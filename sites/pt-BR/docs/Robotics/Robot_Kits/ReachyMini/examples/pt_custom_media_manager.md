---
description: Exemplo que demonstra como desativar o gerenciador de mídia integrado e acessar diretamente a câmera e o microfone usando OpenCV e sounddevice para pipelines personalizados.
title: Gerenciador de Mídia Personalizado
slug: /reachymini_examples_custom_media_manager
keywords:
  - mídia personalizada
  - opencv
  - sounddevice
  - acesso à câmera
  - acesso ao microfone
  - hardware direto
  - backend de mídia
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/pt-br/reachymini_examples_custom_media_manager/
---

# Gerenciador de Mídia Personalizado

Este exemplo demonstra como desativar o gerenciador de mídia integrado e acessar diretamente a câmera e o microfone usando OpenCV e sounddevice.

**Por quê?** O daemon normalmente é o proprietário do hardware de câmera e áudio. Se você precisar de acesso bruto (por exemplo, pipelines OpenCV personalizados, gravação com sounddevice ou uma biblioteca de visão de terceiros), primeiro será necessário informar ao daemon para liberar o hardware. Consulte [Arquitetura de Mídia - Desativando Mídia](/pt-br/reachymini_sdk_media-architecture#desativando-mídia--acesso-direto-ao-hardware) para mais detalhes.

**Como funciona:**
1. Conecta com `media_backend="no_media"` — isso informa automaticamente ao daemon para liberar o hardware de câmera e áudio
2. Usa OpenCV para capturar um frame diretamente da câmera
3. Usa sounddevice para gravar áudio do microfone
4. Ao sair, o daemon readquire automaticamente o hardware

> **💡 Dica:** O controle do robô (cabeça, antenas, corpo) continua funcionando normalmente enquanto a mídia está liberada. Apenas câmera e áudio são afetados.

**Requisitos:**
```bash
pip install opencv-python sounddevice soundfile
```

**Uso:**
```bash
python custom_media_manager.py
```

Veja o exemplo completo em: [custom_media_manager.py](https://github.com/pollen-robotics/reachy_mini/tree/main/examples/custom_media_manager.py)