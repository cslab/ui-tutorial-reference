# -*- mode: python; coding: utf-8 -*-
#
# Copyright (C) 1990 - 2016 CONTACT Software GmbH
# All rights reserved.
# http://www.contact.de/

__docformat__ = "restructuredtext en"
__revision__ = "$Id: main.py 142800 2016-06-17 12:53:51Z js $"

import os

from cdb import rte
from cdb import sig

from cs.platform.web import static
from cs.platform.web.root import Root

from cs.web.components.configurable_ui import ConfigurableUIApp
from cs.web.components.configurable_ui import SinglePageModel


class TicketApp(ConfigurableUIApp):
    pass


@Root.mount(app=TicketApp, path="/cstraining-web")
def _mount_app():
    return TicketApp()


class TicketModel(SinglePageModel):
    page_name = "cstraining-web"


@TicketApp.path(path="", model=TicketModel)
def _get_model():
    return TicketModel()


@TicketApp.view(model=SinglePageModel, name="document_title", internal=True)
def default_document_title(self, request):
    return "Tickets"


@sig.connect(rte.APPLICATIONS_LOADED_HOOK)
def _register_libraries():
    lib = static.Library("cstraining-web", "0.0.1",
                         os.path.join(os.path.dirname(__file__), 'js', 'build'))
    lib.add_file("cstraining-web.js")
    lib.add_file("cstraining-web.js.map")
    static.Registry().add(lib)
