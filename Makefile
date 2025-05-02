.PHONY: run  ## Run server
run:
	@cd frontend && make run

.PHONY: stop  ## Stop the entire project
stop:  
	@cd frontend && make stop