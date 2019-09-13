NAME := spare

.PHONY: up
up:
	docker-compose -p ${NAME} up -d

.PHONY: build
build:
	docker-compose -p ${NAME} build

.PHONY: stop
stop:
	docker-compose -p ${NAME} stop

.PHONY: down
down:
	docker-compose -p ${NAME} down

.PHONY: shell
shell:
	docker exec -it ${NAME}_server_1 /bin/bash

.PHONY: serve
serve:
	docker exec -it ${NAME}_server_1 python manage.py runserver 0.0.0.0:8000

.PHONY: migrate
migrate:
	docker exec -it ${NAME}_server_1 python manage.py migrate

.PHONY: superuser
superuser:
	docker exec -it ${NAME}_server_1 python manage.py createsuperuser

.PHONY: get_started
get_started:
	docker exec -it ${NAME}_server_1 python manage.py get_started --no-migrations --ignore-duplicates

.PHONY: init
init: migrate get_started

.PHONY: tests
reset_db:
	docker exec -it ${NAME}_server_1 python manage.py reset_db

.PHONY: tests
tests:
	docker exec -it ${NAME}_server_1 ./scripts/run_tests.sh

.PHONY: update.server
update.server:
	docker exec -it ${NAME}_server_1 pip install -r requirements/local.txt

.PHONY: install
install:
	docker exec -it ${NAME}_client_1 npm install

.PHONY: update.client
update.client: install

.PHONY: update
update: update.server update.client

.PHONY: client
client:
	docker exec -it ${NAME}_client_1 npm run start