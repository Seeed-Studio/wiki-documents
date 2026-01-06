---
description: Este wiki te mostrará cómo usar uv para gestionar tu objeto python
title: Usar uv en reComputer
keywords:
  - Edge
  - RasberryPi 5
  - python
image: https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/uv/recomputer_r2145.webp
slug: /es/use_uv_to_build_package_on_recomputer
last_update:
  date: 08/21/2025
  author: Jiahao

no_comments: false # for Disqus
---

# Usar uv en reComputer

## Introducción

Este wiki explica cómo usar [uv](https://github.com/astral-sh/uv) en la caja reComputer. uv es un gestor de paquetes y resolvedor rápido, moderno y ligero para Python. Está diseñado para ser un reemplazo directo de las herramientas tradicionales de gestión de paquetes de Python como ```pip``` y ```pip-tools```, ofreciendo mejoras significativas en velocidad, eficiencia y usabilidad.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/uv/uv_speed.png" style={{width:600, height:'auto'}}/></div>

## Preparar Hardware

<div class="table-center">
 <table align="center">
 <tr>
 <th>reComputer R1125</th>
  <th>reComputer AI R2130</th>
  <th>reComputer AI Industrial R2145</th>
 </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991334.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-r2145.jpeg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1125-10-p-6256.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2145-12-p-6486.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer Industrial R20xx</th>
  <th>reComputer Industrial R21xx</th>
 </tr>
    <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Preparar software

### actualizar el sistema

```bash
sudo date -s "$(wget -qSO- --max-redirect=0 google.com 2>&1 | grep Date: | cut -d' ' -f5-8)Z"
sudo apt update
sudo apt full-upgrade
```

### Instalar uv

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

## Usar uv

### Inicializar el proyecto

Aquí, usamos `uv_test` como ejemplo para demostrar el uso de `uv`.
> **Nota:** Por favor, usa un nombre de proyecto diferente y asegúrate de que sea diferente de cualquier paquete en PyPI.

```bash
uv init uv_test --package
cd uv_test
```

Verificar la estructura del proyecto

```bash
ls -la
tree
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/uv/uv_tree.png" style={{width:600, height:'auto'}}/></div>

### Crear un entorno python

Aquí puedes crear un entorno python

```bash
uv venv 
source .venv/bin/activate
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/uv/uv_environment.png" style={{width:600, height:'auto'}}/></div>

### Agregar dependencias

Usar `numpy` para construir función:

```bash
uv add numpy
```

### Crear función

Usar NumPy para escribir una función `add` en `add.py` como ejemplo:

<details>
  <summary>add.py</summary>

```python
import numpy as np

def add(arr1: np.ndarray, arr2: np.ndarray) -> np.ndarray:
    """
    Adds two NumPy arrays element-wise.

    Parameters:
    arr1 (np.ndarray): The first input array.
    arr2 (np.ndarray): The second input array.

    Returns:
    np.ndarray: The element-wise sum of arr1 and arr2.

    Raises:
    ValueError: If the input arrays have different shapes and cannot be broadcasted.
    """
    # Ensure that both arrays have compatible shapes for element-wise addition
    try:
        result = np.add(arr1, arr2)
    except ValueError:
        raise ValueError("Input arrays have incompatible shapes for element-wise addition.")

    return result

if __name__ == "__main__":
    # Example usage
    arr1 = [1, 2, 3]
    arr2 = [4, 5, 6]
    print("Result of addition:", add(arr1, arr2))     

```

</details>

Los resultados son los siguientes:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/uv/pytest.png" style={{width:800, height:'auto'}}/></div>

### Construir el paquete

Para construir el proyecto en un archivo `.whl` utilizable, modifica el archivo `toml` como sigue:

Construir el paquete:

```bash
uv build
ls -a
```

Los resultados son los siguientes：

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/uv/uv_build.png" style={{width:800, height:'auto'}}/></div>

### Probar el paquete

Instalar el paquete como se muestra a continuación:

```
uv pip install dist/uv_test-0.1.0-py3-none-any.whl 
```

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/uv/uv_install.png" style={{width:800, height:'auto'}}/></div>

Usar script de `python` para probar el paquete:

<details>
  <summary>add.py</summary>

```python
from uv_test.add import add

if __name__ == "__main__":
    arr1 = [1, 2, 3]
    arr2 = [4, 5, 6]
    print("Result of addition:", add(arr1, arr2)) 
```  

</details>

### Subir el paquete a PyPi

Si no tienes una cuenta de PyPI, por favor regístrate para obtener una [cuenta](https://pypi.org/account/register/) y crea un [token](https://pypi.org/manage/account/token/).

```
uv publish
```

El resultado es como se muestra a continuación, e ingresa tu token:

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/uv/uv_pubilsh.png" style={{width:800, height:'auto'}}/></div>

## Resultado

Finalmente, puedes ver tu proyecto subido en PyPI.

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/uv/uv_result.png" style={{width:800, height:'auto'}}/></div>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
