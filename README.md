#KAHOLO INTERVIEW TASK

## FOLDER STRUCTURE
Well described here: https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#Folder-Structure

* config - place for environments configurations 
* fixtures - fixtures should be used as a place for external pieces of static data that can be used in the tests 
* integration - here are all the test files are located in plugins - Cypress by default will automatically include the plugins file before every single spec file it runs 
* support- great place to put reusable behavior such as custom commands or global overrides that you want applied and available to all of your spec files

### HOW TO START 
 - PRECONDITIONS
   - node.js installed
   - npm or yarn installed
   
 - STEPS 
   - open terminal
   - `cd /your/project/path`
   - `yarn install` - this command should install all dependencies from the package.json including Cypress and all libraries

### RUN TEST
- `cd /your/project/path`
- `yarn cy:open:local` - open Cypress Test Runner with list of specification using configFile =local.json
- `yarn cy:run:local` - run all tests headlessly using configFile =local.json


### ISSUES: 
:  Button to execute the command is enabled, even there is no given value 

###AUTHOR
Martyna Ole