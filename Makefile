.PHONY: up

up:
	exec docker-compose up

start:
	exec npm run start:dev
