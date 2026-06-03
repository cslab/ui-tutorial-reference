from setuptools import setup, find_namespace_packages
from setuptools_ce.build import build

setup(
    name="cstraining.web",
    version="1.0.0",
    cmdclass={"build": build},
    setup_requires=["setuptools-ce"],
    packages=find_namespace_packages(include=["cstraining.*"]),
    install_requires=['cs.platform', 'cs.web', 'cs.admin', 'cs.documents'],
    docsets=[
      "doc/training_manual/en"
    ],
    jsdoc=[
      "doc/training_manual/en"
    ],
    cdb_modules=[
        # List the package's modules in the correct (initialization) order as
        # computed by cdb.comparch topological sort. This list goes into
        # `cdb_modules.txt` in the EGG-INFO.
        "cstraining.web"
        ],
    cdb_services=[
        # List the services of this packages by their class names. This list
        # goes into `cdb_services.txt` in EGG-INFO.
        ],
    apps=["cstraining/web/js"]
)
