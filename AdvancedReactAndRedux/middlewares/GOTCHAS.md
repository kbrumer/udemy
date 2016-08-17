- JSX must have a single root element
- comments in JSX are embedded in { }
- the default export can be imported from a package without using { }
- imports are relative to root

- connect connects the store with each component to re-render when state changes
- App should should props.children


- mapStateToProps : to connect component with existing state
    we would like to do something with some existing state within the component
    !! and have redux be aware of this

- mapDispatchToProps : to connect component with actions
    we would like to call some action somewhere using the component
    !! and have redux be aware of this

- context is used to pass between components (that may not be parent/child)
    we have to ask for it (use contextTypes)

- middlewares implement the chain of responsibility pattern (like servlet filters)
