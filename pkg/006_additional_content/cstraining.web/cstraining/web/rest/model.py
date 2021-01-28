from cdb.platform.olc import StateDefinition, StatusInfo, Workflow


class StateColors(object):
    def __init__(self, obj_class):
        self.obj_class = obj_class

    def get_state_colors(self):
        olc_names = Workflow.KeywordQuery(objclass=self.obj_class).objektart
        result = {olc: {} for olc in olc_names}
        for state in StateDefinition.KeywordQuery(objektart=olc_names):
            cssc = StatusInfo(state.objektart,
                            state.statusnummer).getCSSColor()
            result[state.objektart][state.statusnummer] = cssc
        return result
