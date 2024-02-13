python3 -m venv .venv # once per repo clone
source .venv/bin/activate # once per shell session
python3 -m pip install -U pytest # once per repo clone
pytest # run the tests
pytest -s # run the tests and see output for passed tests