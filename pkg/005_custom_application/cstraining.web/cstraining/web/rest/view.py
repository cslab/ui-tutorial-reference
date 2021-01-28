from cstraining.web.rest.main import App
from cstraining.web.rest.model import StateColors

@App.json(model=StateColors, request_method="GET")
def default_view(model, request):
    return model.get_state_colors()
