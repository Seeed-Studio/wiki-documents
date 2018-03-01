## Seeed中文文档

这里你可以找到部分Seeed产品的[中文文档](http://seeed.wiki)，由于这个站点刚建立，所以只有部分已经翻译的文档。

没有中文文档的产品，仍然需要到[英文站点](http://wiki.seeed.cc).

这个站点基于优秀的并且开源的文档系统[MkDocs](http://www.mkdocs.org/)以及主题[Material](http://squidfunk.github.io/mkdocs-material/).

## 基本操作

Git clone 这个库到本地，可以在docs文件夹里面添加文档，在docs/images添加图片，在docs/res文件夹添加资源。
添加完文档后，需要手动修改mkdocs.yml文件。

```c
# Page tree
pages:
  - Seeed.Wiki: index.md
  - Respeaker麦克风整列FAQ: respeaker_array_faq.md
  - 新添加的文档: new_docs_name.md
  - License: license.md
```
执行**mkdocs serve**进行预览没有问题后，执行**mkdocs build --clean**，编译的静态文件会出现在**site**文件夹。

Git clone [SeeedDocument.github.io](https://github.com/SeeedDocument/SeeedDocument.github.io) 到本地，把Site的内容替代原来的内容，重新上传，既可以更新网页。

注: CNAME文件不要删掉。

## 贡献

这个文档系统有Seeed维护，并且欢迎你对文档的内容分析你的贡献，贡献包括但不限于：

* 错别字或者不恰当的词汇表达
* 增加内容以使教程更加的清晰
* 上传更好的图片
* 其他必要的修改或优化

## MkDocs

**这个项目基于开源的文档系统MKDocs**


[![PyPI Downloads][pypi-dl-image]][pypi-dl-link]
[![PyPI Version][pypi-v-image]][pypi-v-link]
[![Build Status][travis-image]][travis-link]
[![Windows Build Status][appveyor-image]][appveyor-link]
[![Coverage Status][codecov-image]][codecov-link]

- View the [MkDocs documentation][mkdocs].
- Project [release notes][release-notes].
- Visit the [MkDocs wiki](https://github.com/mkdocs/mkdocs/wiki) for community
  resources, including third party themes and a list of MkDocs users.
- IRC channel: `#mkdocs` on freenode.
- Discussions and support: <https://groups.google.com/forum/#!forum/mkdocs>

[appveyor-image]: https://img.shields.io/appveyor/ci/d0ugal/mkdocs/master.png
[appveyor-link]: https://ci.appveyor.com/project/d0ugal/mkdocs
[codecov-image]: http://codecov.io/github/mkdocs/mkdocs/coverage.svg?branch=master
[codecov-link]: http://codecov.io/github/mkdocs/mkdocs?branch=master
[landscape-image]: https://landscape.io/github/mkdocs/mkdocs/master/landscape.svg?style=flat-square
[landscape-link]: https://landscape.io/github/mkdocs/mkdocs/master
[pypi-dl-image]: https://img.shields.io/pypi/dm/mkdocs.png
[pypi-dl-link]: https://pypi.python.org/pypi/mkdocs
[pypi-v-image]: https://img.shields.io/pypi/v/mkdocs.png
[pypi-v-link]: https://pypi.python.org/pypi/mkdocs
[travis-image]: https://img.shields.io/travis/mkdocs/mkdocs/master.png
[travis-link]: https://travis-ci.org/mkdocs/mkdocs

[mkdocs]: http://www.mkdocs.org
[release-notes]: http://www.mkdocs.org/about/release-notes/

协议
-------
Copyright (c) 2018-2017 Seeed Inc. (https://www.seeedstudio.com)

文档及图片
---

<img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />
这里所有的图片和文档顺从 <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>. <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"> </a>
的协议

## 联系我们

如果你有文档或者技术上的任何疑问，请联系 [techsupport@seeed.cc](techsupport@seeed.cc)
