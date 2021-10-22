# :white_check_mark: Challenge Character Counter
**Challenge Description:**

We need to find how many times a 'character' is found in a 'string';

**Inputs**

```
String: "Hacktoberfest"
Character : "e"
```

**Result**

```
"e" appears 2 times, in "Hacktoberfest"
```

**Explanations**

We need a 'string' so we will ask the user to please provide the 'string' and store the given 'string' in a variable.

```
# get string from user and store in variable
const text = prompt("please provide string");
```

We also ask for a character from the user.

```
# get the character from a user which will be found in a given text.
const character = prompt("please provide character");
```

We need to spitted a text. "split('')" will convert string to array, e.g "hacktoberfest" > ['h', 'a', 'c', 'k', 't', 'o', 'b', 'e', 'r', 'f', 'e', 's', 't']

```
# text variable splitted in array
const textSplitted = string.split('');
```

Now we apply a filter on 'textSplitted ' and find how many times the "e" character is found in the "hacktoberfest" test. 
"filter" return founded result in an array.
```
# apply filter on splitted to find how many time character found in text variable
const charInString = textSplitted.filter((char) => char === character);
```

Now we know how many times "e" appear in "hacktoberfest"

```
# return in number
return charInString.length;
```


**Complete Code**

```
const text = prompt();
const character = prompt();
const findCharInString = (string, character) => {
    const textSplitted = string.split('');
    const charInString = textSplitted.filter((char) => char === character);
    return charInString.length;
};
alert(`"${character}" appear ${findCharInString(text, character)} times , in "${text}"`);
```