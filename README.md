# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Type infrerence for Events 
- in src/events/EventComponent.tsx
Type infrerence for Events Inline VS seperate fucntion. 
the type inference system is not applied if we defined the function ahead of time. <br/>
Type inference is only applied inside of inline JSX when we define that callback function directly in line.

## TypeScript in class component
- in src/classes/UerSearch.tsx
In logical rendering below, receive a warning:  " Object is possibly 'undefined' " 
```
<div>
  { user.name || "No User Found"}
</div>

```
To fix it, we have to also put user && user.name
```
<div>
  {(user && user.name) || "No User Found"}
</div>

```

## TypeScript with useRef
-In src/refs/UserSearchRef.tsx, we implement when page is loaded, the text input is automatically focused, so user could type in immediately.
We use ref to ref HTML elements such as HTHLButtonElement, HTMLAnchorElement, etc. <br />
To accomodate at somepoint in time that we not assign ref to any HTMLElements, we will implement type for useRef as ahown below.
```
const inputRef = useRef<HTMLInputElement | null>(null);
```
- Warning in useEffect, Object is possibly 'null'.
```
useEffect(() => {
    inputRef.current.focus()
  })
```
Fixed by implement typed gaurd
```
useEffect(() => {
  if (!inputRef.current) return;
  inputRef.current.focus()
})
```
