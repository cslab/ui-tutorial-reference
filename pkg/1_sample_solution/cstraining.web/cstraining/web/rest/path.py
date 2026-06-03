from cstraining.web.rest.main import App
from cstraining.web.rest.model import StateColors

@App.path(path='state_colors/{obj_class}', model=StateColors)
def get_state_color_model(app, obj_class):
    return StateColors(obj_class)
