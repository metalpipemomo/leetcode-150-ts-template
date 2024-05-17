# How do I use this?

- Fork this repository on GitHub so it exists under your own GitHub account
- After cloning the project from your own repository:
    - Run ``npm install``
    - Run ``npm test`` to make sure that the testing setup works

# Structure

- Create a new folder for every leetcode question
- Each folder should contain an ``index.ts`` and ``index.test.ts`` file
    - ``index.ts`` is for creating the function required for the leetcode question
        - Make sure you export the function
    - ``index.test.ts`` is for testing the function you created by importing it along with node's testing functions
        - See ``src/repo-test/index.test.ts`` for an example
- After writing a test, you can run all tests by running ``npm test`` in the root directory