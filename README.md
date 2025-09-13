# Sprint 1: TypeScript CSV

### Task C: Proposing Enhancement

- #### Step 1: Brainstorm on your own.
    - Functionality:
        - Needs to be fixed to be able to parse fields that contain commas
        - Currently nothing that checks types
    - Extensibility:
        - Include functionality to ask the caller to specify whether the first row contains data or headers
        - Could check to make sure the types are correct according to what the caller wants. For example, it should only take an integer for age if the user specifies that. If an input is wrong, it could raise an error
        - It could also be extended to be able to return different types of data instead of just arrays of arrays

- #### Step 2: Use an LLM to help expand your perspective.
    - Implement functionality to allow caller to specify the delimeter
    - Support files with and without header row, and if header row exists, map rows to objects with headers as keys
    - Logic to auto detect types
    - Correctly parse multiline values
    - Enable row limits
    - Handle inconsistent row lengths
    - Handle cases where line ends with delimeter
    - Handle inconsistent spacing and quotation
    - Support automatic type conversion
    - Handle blank lines


- #### Step 3: use an LLM to help expand your perspective.

    Include a list of the top 4 enhancements or edge cases you think are most valuable to explore in the next week’s sprint. Label them clearly by category (extensibility vs. functionality), and include whether they came from you, the LLM, or both. Describe these using the User Story format—see below for a definition. 

    Include your notes from above: what were your initial ideas, what did the LLM suggest, and how did the results differ by prompt? What resonated with you, and what didn’t? (3-5 sentences.) 

    Top 4 enhancements:
    - Functionality:
        - As a user, I can parse fields that contain commas enclosed in quotes so that my fields are not limited in what characters they can include (from my ideas).
        - As a user, I can make sure my data has the correct types so that it parses correctly (from my ideas and LLM).
            - Acceptance criteria: the implementation will raise errors if user specifies necessary types and the wrong type is entered
    - Extensibility:
        - As a user, I can specify specify whether I am including a header row, and if I am, I can parse fields to map rows to objects with headers as keys so that I can organize data into objects that I specify(from my ideas and LLM).
        - As a user, I can specify the delimeter that I want to be used when parsing so that I can have more flexibility with my data (from LLM).

    My initial ideas were more centered around my specific tests, what failed during my testing, and the specifications in the assignment. The LLM had many more ideas that were more specific in some cases, but also had some overlap with my ideas. They differed by prompt in the sense that they put more focus on edge cases sometimes and missing features sometimes. A lot of the small details resonated with me, such as the delimeter specification and the inconsistent spacing handling.

### Design Choices

### 1340 Supplement

- #### 1. Correctness

- #### 2. Random, On-Demand Generation

- #### 3. Overall experience, Bugs encountered and resolved
#### Errors/Bugs:
#### Tests:
#### How To…

#### Team members and contributions (include cs logins):

#### Collaborators (cslogins of anyone you worked with on this project and/or generative AI):
#### Total estimated time it took to complete project:
#### Link to GitHub Repo:  
