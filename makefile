MDS = $(wildcard _posts/*.markdown)

all:
	$(foreach md, $(MDS), sed 's/^categories:\(.*\)/categories: partials\1/; s/^layout: post/layout: angular/'\
		$(md) > $(md:.markdown=-partial.markdown))