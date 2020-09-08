import os

from setuptools import setup


def read(file_name):
    path = os.path.join(os.path.dirname(__file__), file_name)

    try:
        file = open(path, encoding="utf-8")
    except TypeError:
        file = open(path)
    return file.read()


setup(
    name="semantic_admin",
    version=__import__("semantic_admin").VERSION,
    description="Modern theme for the Django admin interface.",
    long_description=read("README.md"),
    author="Djordje Atlialp",
    author_email="djordje@atlialp.com",
    url="https://github.com/rhazdon/django-semantic-admin",
    packages=["semantic_admin"],
    license="MIT",
    classifiers=[
        "Development Status :: 5 - Production/Stable",
        "Framework :: Django",
        "License :: Free for non-commercial use",
        "Intended Audience :: Developers",
        "Intended Audience :: System Administrators",
        "Operating System :: OS Independent",
        "Programming Language :: Python",
        "Programming Language :: Python :: 3.5",
        "Programming Language :: Python :: 3.6",
        "Programming Language :: Python :: 3.7",
        "Environment :: Web Environment",
        "Topic :: Software Development",
        "Topic :: Software Development :: User Interfaces",
    ],
    zip_safe=False,
    include_package_data=True,
    install_requires=["Django"],
)
