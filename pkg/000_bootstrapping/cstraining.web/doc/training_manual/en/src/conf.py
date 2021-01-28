# -*- coding: utf-8 -*-
#
# This file is execfile()d with the current directory set to its containing dir.
#
# See http://sphinx.pocoo.org/config.html for details to all options.

from __future__ import absolute_import
from cdb.sphinxconf import configure

from cdb.sphinxconf import kDocCategoryUser
from cdb.sphinxconf import kDocCategoryAdmin
from cdb.sphinxconf import kDocCategoryProgramming
from cdb.sphinxconf import kDocCategoryReleaseNotes

configure(globals(),
          title=u"cstraining.web",
          language=u"en",
          # You might change the category
          # Choose one of the categories from above
          category=kDocCategoryUser,
          # You might change the default author on the pdf output start page
          # latex_author=u'document author'
          # You might change the default logo on the html output
          # html_icon=u"myicon36x36.png"
          )
