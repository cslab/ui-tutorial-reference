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

from cs.web.components.base.main import BaseApp
from cs.web.components.base.main import BaseModel


class WebApp(BaseApp):
    pass


@Root.mount(app=WebApp, path="/cstraining-web")
def _mount_app():
    return WebApp()


@WebApp.view(model=BaseModel, name="document_title", internal=True)
def default_document_title(self, request):
    return "Web"


@WebApp.view(model=BaseModel, name="app_component", internal=True)
def _setup(self, request):
    request.app.include("cstraining-web", "0.0.1")
    return "cstraining-web-MainComponent"


@WebApp.view(model=BaseModel, name="base_path", internal=True)
def get_base_path(self, request):
    return request.path


@sig.connect(rte.APPLICATIONS_LOADED_HOOK)
def _register_libraries():
    lib = static.Library("cstraining-web", "0.0.1",
                         os.path.join(os.path.dirname(__file__), 'js', 'build'))
    lib.add_file("cstraining-web.js")
    lib.add_file("cstraining-web.js.map")
    static.Registry().add(lib)
