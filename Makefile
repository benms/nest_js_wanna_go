.PHONY: up start test

up:
	exec docker-compose up

start:
	exec npm run start:dev

test:
	exec npm run test
