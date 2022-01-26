# Next steps

## The way I approached the test

### The functional components

I found that the best approached for this test was to first read the problem a few times just to make sure I understand the actual problem at hand.
Secondly, I analysed the whole codebase received to understand how it works and I wrote the initial plan describing what I would do to solve the task.
After I had all of the priorities set, I started by making the components and tests folders in /src and then I created the folders and index js files for all components to be done.
I started creating the components 1 by 1, by looking at the class based component and transforming it to a functional component logic.
For all 3 components I had to check what states I will need. I have not previously worked with class based components so I had to assume the state had multiple different states which I updated. This was confirmed later on in the code in the way the methods handled the state values.
I also had to improvise and change slightly in the Todo component when I found the conditional rendering of the Todo`s text(different styling for the Todo text value if it was done or not) as I wanted to make the code a bit shorted, but I made sure it is easy to understand and efficient, by including a ternary operator.

### The tests

I have also created the tests for the components of the app. They may be a bit basic but I'm learning new other ways to test in JavaScript so I will soon write better ones.

## What I would do differently if I took the test again

If doing the test again, I will make sure to try different testing methods or to use Cypress if possible as it would make testing more comprehensive, at least for now, as I know a bit more about Cypress than Jest, this of course will change as I will improve my knowledge on Jest too.

## Improvements to the application I can suggest that could be implemented, and an estimation of how much time they would take.

### The suggested improvements

For this application, I would change the styling to have a default width which would be scalable, according to the content of the todo.
I would probably make the todo field with a max width, but not a max height and the text it contains to be wrapping, so that if you exceed the max width, the text would automatically move to the next line.
Another useful feature would be the posibility to add todos when you hit the enter key when typing the todos.

### My estimated time for the implementation of the improvements

Estimated time for both change would be around 5 minutes for me as the 2nd feature is just an addition of a small line on the inputbox and the first is just styling to be added.
