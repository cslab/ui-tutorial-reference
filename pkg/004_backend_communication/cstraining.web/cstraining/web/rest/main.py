import morepath
from cs.platform.web.root import root


class App(morepath.App):
  pass


@root.mount(app=App, path='/cstraining-web-api')
def _mount_app():
  return App()