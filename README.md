This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Deployed using Github Pages at this [link](https://kennethnguyen.github.io/instagram-post-clone/)

## Description

Using React, Redux, and Material UI to create a clone of the two versions of Instagram posts (mobile portrait and web view landscape) with a few functionality features. Front-end application only with hardcoded mock data and data persistence to local storage. The user is able to tinker around with this application as 'waterguy242' :)

Currently the portrait version is almost finished with a few details/features missing such as viewing more comments, truncating comments to not overflow the post vertically, and the replies feature.

## Features

- Add a comment
- Like a comment
- Reply to a comment
- Like a replied comment

## Post Data Design

```
   posts: [
    {
      id: int,
      creator: {
        username: string,
        location: string,
        profilePicture: string, // string path to static resource
      },
      media: string // file name to static image resource
      likes: int,
      createdAt: Date().toISOString()
      comments: [
        {
          id: int,
          postedBy: string,
          profilePicture: string, // string path to static resource
          message: string,
          liked: boolean,
          replies: [int], // id(s) of comment(s) that replied to this comment
          repliedTo: int || null, // id of comment that this comment replied to or null if not used to reply to any
        },
    },
  ]
```
## Progress Update
- There's still a few UI components and details left to be done. Since there's 2 versions with similarities, the best approach might be to create one Post component that takes in a version prop to determine whether to accomodate the version 1 or version 2 design of the Instagram post. This can save on import resources and performance when bundling/rendering the app but for the sake of time I'm going to create separate version 1 and version 2 components. After the UI, I'm going to finish the rest of the functionalities. My worries right now is how the landscape version would look since the UI components are mostly accomodated for the portrait version right now.

## Notes
- It was my first time working with Redux, but I knew about Redux + Redux Toolkit and I was familiar with state management in React from using Context API + useReducer so getting Redux set up (especially with CRA redux toolkit boilerplate) went pretty quick but there were some issues with syntax and figuring out which part of the redux store state I was working with in the reducers and from useSelector().
- The biggest hurdle with this app (so far) would have to be designing the post and thinking about all the components and how everything can tie in together. It would have been simple to hardcode everything and simplify the global state to only have the comments since it was only one instagram post, but it was a more exciting challenge to think about the scale of the app and what it would be like if this was designed to handle multiple posts later in the future.
- Having React read in static local images and adjusting Material UI's CardMedia component styles to display a (static) image took much more googling than it should have. 
- So far all the testing done has been manual, but I'd eventually like to write unit tests with Jest/React-Testing-Library to learn how to test React components

## Resources

- [Deploying React App to gh-pages](https://github.com/gitname/react-gh-pages)
- [Redux Toolkit + Redux docs](https://redux-toolkit.js.org/)
- [Persisting data to localstorage](https://dev.to/gautham495/how-to-persist-data-to-localstorage-in-react-with-hooks-6ma)
- [Material UI React framework](https://material-ui.com/)
- [Images](https://unsplash.com/)
- [Moment.js npm package to find the elpased time of the post's creation date](https://momentjs.com/)
  