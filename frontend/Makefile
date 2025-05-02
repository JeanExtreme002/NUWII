.PHONY: run  ## Run server
run:
	@docker compose up --build frontend -d

.PHONY: lint  ## Run linter
lint:
	@docker compose up --build --exit-code-from linter linter

.PHONY: test  ## Run tests
test:
	@docker compose up --build --exit-code-from test test

.PHONY: stop  ## Stop the entire project
stop:  
	@docker compose down