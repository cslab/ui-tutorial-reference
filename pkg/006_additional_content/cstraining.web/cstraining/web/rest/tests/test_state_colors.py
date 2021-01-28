from cdb.testcase import PlatformTestCase
from cs.platform.web.root import root as RootApp
from webtest import TestApp


class TestStateColorEndpoint(PlatformTestCase):

    def __init__(self, *args, **kwargs):
        super(TestStateColorEndpoint, self).__init__(*args, **kwargs)
        self.client = None

    def setUp(self):
        PlatformTestCase.setUp(self)
        self.client = TestApp(RootApp)

    def test_state_color_endpoint_valid_class(self):
        valid_class = 'cst_ticket'
        lifecycle_name = valid_class
        url = '/cstraining-web-api/state_colors/{}'.format(valid_class)
        res = self.client.get(url).json

        self.assertIn(lifecycle_name, res)
        self.assertIn('0', res.get(lifecycle_name))

    def test_state_color_endpoint_invalid_class(self):
        invalid_class = 'does_not_exist'
        url = '/cstraining-web-api/state_colors/{}'.format(invalid_class)
        res = self.client.get(url).json
        # take a look into the rest/model.py why we expect this
        self.assertEquals(res, {})