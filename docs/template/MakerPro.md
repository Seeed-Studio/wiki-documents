---
title: MakerPro Introduction
nointro:
---

Shenzhen is like the paradise of makers. As an open-source company which based in Shenzhen, SeeedStudio has the advantage and ability to sourcing and provide all the best resources to makers all around the world. MakerPro is the section where the products are not developed by Seeed, but sourcing directly from Shenzhen. 

The following MakerPro product are available here:

## Product  List
---

Here is the list of the MakerPro Boards you can find in the Seeed WiKi. The list will be constantly updated.

{{ range .Data.Pages.ByTitle }}{{ $cat1 := trim (index (split .Params.category ",") 0) " "}}{{ $cat2 := trim (index (split .Params.category ",") 1) " "}}{{if or (eq $cat1 "MakerPro") (eq $cat2 "MakerPro") }}- [{{.Title}}](/{{.File.BaseFileName}}/){{"\n"}}{{ end }}{{ end }}
