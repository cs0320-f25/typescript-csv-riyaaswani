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
    A CSV parser should be able to parse data in a way that the caller wants it to. By being able to parse data into objects or arrays, a CSV parser is versatile and customizable. It should also be able to identify errors in data and communicate those to the caller. Lastly, it should be able to parse data for various needs, meaning it has to be general yet effective. Tests should be checking properties like error throwing, accuracy of parsing, and flexibility of inputs.

- #### 2. Random, On-Demand Generation
    It would allow me to test my parser on many different scenarios. One of the most difficult things when testing is coming up with scenarios that test different edge cases or possible mistakes. With a function that generates random data on demand, my parser would be able to be tested very thoroughly.

- #### 3. Overall experience, Bugs encountered and resolved
    - The overall experience was pretty difficult. I felt like I had to figure most of it out without much guidance, and I'm not even sure if what I did is correct. The amount of flexibility surprised me.
#### Errors/Bugs: Some bugs on the error checking, but I figured it out eventually. Ed stem helped with figuring out my errors.
#### Tests:
#### How To…

#### Team members and contributions (include cs logins):

#### Collaborators (cslogins of anyone you worked with on this project and/or generative AI):
- discussed conceptual concepts with Anand Heintz (cs login asheintz)
#### Total estimated time it took to complete project: 6 hours
#### Link to GitHub Repo:  https://github.com/cs0320-f25/typescript-csv-riyaaswani.git
