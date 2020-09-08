.PHONY: setup start

default: help

help:
	@echo 'make targets:'
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  %-13s %s\n", $$1, $$2}'
	@echo '  help          This message.'


setup:  ## Setup project.
	poetry install
	poetry run python manage.py makemigrations
	poetry run python manage.py migrate
	poetry run python manage.py createsuperuser

start:  ## Run development server.
	poetry run python manage.py runserver
