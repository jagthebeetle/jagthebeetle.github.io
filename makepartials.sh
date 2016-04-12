# !/usr/bin/env bash
# TODO:
# Duplicate posts, providing a path for them that lays them out differently, 
# so these dupes can be queried for use with ng-view


for md in _posts/*.markdown
do

	sed 's/^categories:\(.*\)/categories: partials\1/; s/^layout: post/layout: angular/'\
		$md > ${md/%.markdown/-partial.markdown}
done