---
description: このwikiでは、uvを使用してPythonオブジェクトを管理する方法を説明します
title: reComputerでuvを使用する
keywords:
  - Edge
  - RasberryPi 5
  - python
image: https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/uv/recomputer_r2145.webp
slug: /ja/use_uv_to_build_package_on_recomputer
last_update:
  date: 08/21/2025
  author: Jiahao

no_comments: false # for Disqus
---

# reComputerでuvを使用する

## はじめに

このwikiでは、reComputerボックスで[uv](https://github.com/astral-sh/uv)を使用する方法を説明します。uvは、Python用の高速で現代的かつ軽量なパッケージマネージャーおよびリゾルバーです。```pip```や```pip-tools```などの従来のPythonパッケージ管理ツールのドロップイン代替として設計されており、速度、効率性、使いやすさの大幅な改善を提供します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/uv/uv_speed.png" style={{width:600, height:'auto'}}/></div>

## ハードウェアの準備

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
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2145-12-p-6486.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
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
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## ソフトウェアの準備

### システムの更新

```bash
sudo date -s "$(wget -qSO- --max-redirect=0 google.com 2>&1 | grep Date: | cut -d' ' -f5-8)Z"
sudo apt update
sudo apt full-upgrade
```

### uvのインストール

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

## uvの使用

### プロジェクトの初期化

ここでは、`uv_test`を例として`uv`の使用方法を説明します。
> **注意：** PyPI上の任意のパッケージとは異なるプロジェクト名を付けてください。

```bash
uv init uv_test --package
cd uv_test
```

プロジェクトの構造を確認します

```bash
ls -la
tree
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/uv/uv_tree.png" style={{width:600, height:'auto'}}/></div>

### Python環境の作成

ここでPython環境を作成できます

```bash
uv venv 
source .venv/bin/activate
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/uv/uv_environment.png" style={{width:600, height:'auto'}}/></div>

### 依存関係の追加

`numpy`を使用して関数を構築します：

```bash
uv add numpy
```

### 関数の作成

NumPyを使用して`add.py`に`add`関数を例として書きます：

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

結果は以下の通りです：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/uv/pytest.png" style={{width:800, height:'auto'}}/></div>

### パッケージのビルド

プロジェクトを使用可能な`.whl`ファイルにビルドするには、`toml`ファイルを以下のように変更します：

パッケージをビルドします：

```bash
uv build
ls -a
```

結果は以下の通りです：

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/uv/uv_build.png" style={{width:800, height:'auto'}}/></div>

### パッケージのテスト

以下のようにパッケージをインストールします：

```
uv pip install dist/uv_test-0.1.0-py3-none-any.whl 
```

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/uv/uv_install.png" style={{width:800, height:'auto'}}/></div>

`python`スクリプトを使用してパッケージをテストします：

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

### PyPiへのパッケージのプッシュ

PyPIアカウントをお持ちでない場合は、[アカウント](https://pypi.org/account/register/)を登録し、[トークン](https://pypi.org/manage/account/token/)を作成してください。

```
uv publish
```

結果は以下のようになり、トークンを入力します：

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/uv/uv_pubilsh.png" style={{width:800, height:'auto'}}/></div>

## 結果

最後に、PyPI上でアップロードしたプロジェクトを確認できます。

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/uv/uv_result.png" style={{width:800, height:'auto'}}/></div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
