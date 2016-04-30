MDS = $(wildcard _posts/*.markdown)
define sedcmd
	sed 's/^categories:\(.*\)/categories: partials\1/; s/^layout: post/layout: angular/; 2i\'$$'\n''sitemap: false'$$'\n'
endef


all:
	$(foreach md, $(MDS), ${sedcmd} $(md) > $(md:.markdown=-partial.md);)