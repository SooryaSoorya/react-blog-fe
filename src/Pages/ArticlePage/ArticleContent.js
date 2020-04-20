const articles = [
    {
        name: 'aa',
        title: 'The Fastest Way to Learn React',
        content: [
            `In order to learn and test React, you should set up a React Environment on your computer. ... 
            The create-react-app is an officially supported way to create React applications.
             If you have NPM and Node.js installed, you can create a React application by first installing 
             the create-react-app.`,
            `React is a declarative, efficient, and flexible JavaScript library for building user interfaces.
             It lets you compose complex UIs from small and isolated pieces of code called “components”.
            React has a few different kinds of components, but we’ll start with React.Component subclasses:`,
            `We’ll get to the funny XML-like tags soon. We use components to tell React what we want 
            to see on the screen. When our data changes, React will efficiently update and re-render 
            our components.

            Here, ShoppingList is a React component class, or React component type.
             A component takes in parameters, called props (short for “properties”),
              and returns a hierarchy of views to display via the render method.
            
            The render method returns a description of what you want to see on the screen. 
            React takes the description and displays the result. In particular, 
            render returns a React element, which is a lightweight description of what to render. 
            Most React developers use a special syntax called “JSX” which makes these structures
             easier to write. The <div /> syntax is transformed at build time to 
             React.createElement('div'). The example above is equivalent to`,
        ]
    }, {
        name: 'learn-node',
        title: 'How to Build a Node Server in 10 Minutes',
        content: [
            `Node.js is an open-source and cross-platform JavaScript runtime environment.
             It is a popular tool for almost any kind of project!`,
            `Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser.
             This allows Node.js to be very performant.A Node.js app is run in a single process,
              without creating a new thread for every request. Node.js provides a set of 
              asynchronous I/O primitives in its standard library that prevent JavaScript 
              code from blocking and generally, libraries in Node.js are written using non-blocking 
              paradigms,
              making blocking behavior the exception rather than the norm.`,
            `When Node.js needs to perform an I/O operation, like reading from the network, 
            accessing a database or the filesystem, instead of blocking the thread and wasting
             CPU cycles waiting, Node.js will resume the operations when the response comes back.
            This allows Node.js to handle thousands of concurrent connections with a single 
            server without introducing the burden of managing thread concurrency, 
            which could be a significant source of bugs.`,
        ]
    }, {
        name: 'my-thoughts-on-resumes',
        title: 'My Thoughts on Resumes',
        content: [
            `Today is the day I talk about something which scares most people: resumes.
            In reality, I'm not sure why people have such a hard time with proin congue
            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. 
            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, 
            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut 
            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at 
            sodales purus euismod.`,
            `Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
            `Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
        ]
    },
];

export default articles;