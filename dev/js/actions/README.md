# Actions

Actions are just things that happen *(seriously, that's it)*.
- most actions are book events (clicked a button, submitted a form, etc...)
- can also be other events such as an API call returning data

### Actions are (usually) made up of two parts


**type** - describes the action that occurred
```
ADD_BOOK_BUTTON_CLICKED
```

CLICK_BOOK


**payload** - *(optional)* any extra data that is needed
```
{
    id: "12",
    name: "Alchamist",
    author: "Christy"
   
}
```

## Actions vs. Action Creators

Action creators are functions that create objects, actions are the objects that get created.

**Action creator**
```
export default function () {
    return {
    id: "12",
    name: "Alchamist",
    author: "Christy"
   
}
}
```

**Action**
```
{
    id: "12",
    name: "Alchamist",
    author: "Christy"
   
}
```

## What happens next?

All actions are automatically sent to **all** reducers. It is the reducers job to determine how to handle that action
(can also just ignore it).
