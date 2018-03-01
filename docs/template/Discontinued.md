---
title: Discontinued Introduction
nointro:
---
Many of Seeed's products have more than one version, most of the old version is EOL now. However there are many users out there who are still using the old version. We will keep all the document for old product in this section. If there are discontinued product you are using that has no document, please contact us via techsupport@seeed.cc.

## Product  List
---
Here is the list of the BeagleBone Boards you can find in the Seeed WiKi. The list will be constantly updated.

{{ range .Data.Pages.ByTitle }}{{ $cat1 := trim (index (split .Params.category ",") 0) " "}}{{ $cat2 := trim (index (split .Params.category ",") 1) " "}}{{if or (eq $cat1 "Discontinued") (eq $cat2 "Discontinued") }}- [{{.Title}}](/{{.File.BaseFileName}}/){{"\n"}}{{ end }}{{ end }}
