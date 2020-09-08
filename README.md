# Django Semantic Admin

Django Semantic Admin is an admin theme for [Django](https://www.djangoproject.com) build with [Semantic UI](https://semantic-ui.com).

Note: This project is under high development right now and not production ready yet.

## Installation

1. Install the package: `pip install django-semantic-admin`

2. Add the package to your `INSTALLED_APPS`

3. Add the path to urls 
```
urlpatterns = [
    # ...
    path("semantic_admin/", include("semantic_admin.urls")),
    # ...
]
```


## Development

1. Install build dependencies:
``` bash
yarn install

```

The easiest way to work on the admin theme is to work with the demo app. 

``` bash
cd demo
make setup
make start
```