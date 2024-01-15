<p align="center">
 <img align="center" src="https://raw.githubusercontent.com/selemondev/vscode-park-ui/master/src/images/icon.png" height="96" />
 <h1 align="center">
  Park UI
 </h1>
</p>

This VSCode Extension enables you to install [park/ui](https://park-ui.com/) components directly from your IDE ✨.

## Initialize the Park/UI CLI

![to initialize CLI open the command palette and search for park/ui: install cli command](https://raw.githubusercontent.com/selemondev/vscode-park-ui/master/src/assets/images/init-cli.png)

## Install components

![to initialize CLI open the command palette and search for park/ui: add new component](https://raw.githubusercontent.com/selemondev/vscode-park-ui/master/src/assets/images/add-new-component.png)

## Choose a component to install from the list

![choose a component to install from the list](https://raw.githubusercontent.com/selemondev/vscode-park-ui/master/src/assets/images/add-new-component-preview.png)

## Install multiple components

![install multiple components](https://raw.githubusercontent.com/selemondev/vscode-park-ui/master/src/assets/images/add-multiple-components.png)

## Choose components to install from the list
![choose components to install from the list](https://raw.githubusercontent.com/selemondev/vscode-park-ui/master/src/assets/images/add-multiple-components-preview.png)

## Open the Park-UI documentation

![open the park-ui documentation](https://raw.githubusercontent.com/selemondev/vscode-park-ui/master/src/assets/images/park-ui-docs.png)

## Navigate to a particular component's documentation page

![navigate to a particular component's documentation page](https://raw.githubusercontent.com/selemondev/vscode-park-ui/master/src/assets/images/park-ui-component-docs.png)

## Park/UI Snippets

Easily import and use park-suielte components with ease using snippets within VSCode. Just type `park-x` or `park-ui` in your jsx/tsx file and choose from an array of components to use.

![park-ui-snippets-example](https://raw.githubusercontent.com/selemondev/vscode-park-ui/master/src/assets/images/park-ui-import.png)

### How it works

| Snippet           | Description                            |
| ----------------- | -------------------------------------- |
| `park-ui-help`    | How to use park/ui snippets      |
| `park-i-[component]`| Adds imports for the component         |
| `park-ui-[component]`| Adds the markup for the jsx/tsx component|

### How to use?

1. Components

For `Alert` component, type `park-i-alert` to add imports in your jsx/tsx file, and to use the component, use `park-ui-alert`.

> Similarly, for any other component, use `park-i-[component]` to add imports and `park-ui-[component]` to use.

```tsx
// park-i-alert
import { InfoIcon } from 'lucide-react',
import type { AlertProps } from '~/components/ui/alert',
import * as Alert from '~/components/ui/alert'

// park-ui-alert
 <Alert.Root {...props}>",
    <Alert.Icon asChild>",
    <InfoIcon />",
    </Alert.Icon>",
    <Alert.Content>",
    <Alert.Title>Browser Update available</Alert.Title>",
    <Alert.Description>For the best experience, please update your browser.</Alert.Description>",
     </Alert.Content>",
</Alert.Root>"
```

### How to contribute?

Use this link - [Snippet Generation](https://snippet-generator.app/?description=https%3A%2F%2Fpark-ui.com%2Fdocs%2Ftailwind%2Fcomponents%2F&tabtrigger=park-&snippet=&mode=vscode) to generate snippets and add/update them to the `snippets` folder that is located in the `src` accordingly.


### Credits 

All credits go to the creators of these amazing projects:

- The [Panda CSS](https://github.com/chakra-ui/panda) team.
- [Ark UI](https://github.com/chakra-ui/ark) for doing all the hard work to make sure components are accessible.
- [Park UI](https://park-ui.com/) for creating this amazing project.
