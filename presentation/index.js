// Import React
import React from "react";

// Import Spectacle Core tags
import {
    Appear,
    BlockQuote,
    Cite,
    CodePane,
    Deck,
    Fill,
    Heading,
    Image,
    Layout,
    Link,
    ListItem,
    List,
    Markdown,
    Quote,
    Slide,
    Spectacle,
    Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
    reactjs: require("../assets/reactjs.png"),
    spackle: require("../assets/spackle.jpg"),
    discord: require("../assets/discordapp.jpg"),
};

preloader(images);

const theme = createTheme({
    primary: "#2d2d2d"
});

export default class Presentation extends React.Component {
    render() {
        return (
            <Spectacle theme={theme}>
                <Deck transition={["zoom", "slide"]} transitionDuration={500}>
                    <Slide transition={["zoom"]} bgColor="primary">
                        <Heading size={1} fit caps lineHeight={1} textColor="#61dafb">
                            React - what is it even?
                        </Heading>
                        <Image width="50%" src={images.reactjs} height="50%"/>
                    </Slide>
                    <Slide transition={["slide", "spin"]} bgColor="primary" textColor="white">
                        <Heading caps fit size={1} textColor="tertiary">
                            Massive Adoption in 3yrs!
                        </Heading>
                        <Appear >
                            <BlockQuote>React is a UI framework that takes care of updating the UI in response to state
                                changes or novelty data
                                - build big, modular, fast Web apps with JavaScript.</BlockQuote>
                        </Appear>
                        <Appear >
                            <BlockQuote>React does not officially support any older browsers...es5 shim</BlockQuote>
                        </Appear>
                    </Slide>
                    <Slide transition={["slide", "spin"]} bgColor="primary">
                        <Heading caps fit size={1} lineHeight={1} textColor="white">
                            Discord App
                        </Heading>
                        <Link href="https://discordapp.com/"><Image height="50%" width="50%"
                                                                    src={images.discord}/></Link>
                    </Slide>
                    <Slide transition={["slide", "spin"]} bgColor="primary">
                        <Heading caps size={1} lineHeight={1} textColor="white">
                            Continuum. In reality there is only one version of ReactJS - the latest version.
                        </Heading>
                    </Slide>
                    <Slide transition={["fade"]} bgColor="primary" textColor="white">
                        <Heading>MVC or WTF?</Heading>
                        <List>
                            <ListItem>Javascript (ES6 const|fat arrow|etc)</ListItem>
                            <ListItem>JSX (Facebook)</ListItem>
                            <ListItem>Virtual Dom (optimise)</ListItem>
                            <ListItem>Components (not templates!)</ListItem>
                            <ListItem>Modular (import, requires)</ListItem>
                            <ListItem>^^ Strongly enforcing UI and workflow patterns</ListItem>
                        </List>
                    </Slide>
                    <Slide transition={["fade"]} bgColor="primary" textColor="white">
                        <Heading size={1} lineHeight={1} textColor="#61dafb">
                            JSX - preprocessor step that adds XML syntax to JavaScript
                        </Heading>
                        <Appear>
                            <BlockQuote>
                                "The Rule of Least Power"
                                https://www.w3.org/2001/tag/doc/leastPower.html
                            </BlockQuote>
                        </Appear>
                    </Slide>

                    <Slide transition={["zoom", "fade"]} bgColor="primary"
                           notes="<ul><li>talk about that</li><li>and that</li></ul>">
                        <CodePane
                            lang="javascript"
                            source={require("raw!../assets/jsx.example")}
                            margin="5px auto"
                        />
                    </Slide>
                    <Slide transition={["fade"]} bgColor="primary" textColor="white">
                        <Heading size={1} lineHeight={1} textColor="#61dafb">
                            Re-rendering, not mutating
                        </Heading>
                        <BlockQuote>
                            When your component is first initialized, the render method is called, generating a
                            lightweight representation of your view. From that representation, a string of markup is
                            produced, and injected into the document. When your data changes, the render method is
                            called again. In order to perform updates as efficiently as possible, we diff the return
                            value from the previous call to render with the new one, and generate a minimal set of
                            changes to be applied to the DOM.
                        </BlockQuote>
                    </Slide>
                    <Slide transition={["fade"]} bgColor="primary" textColor="white">
                        <Heading size={1} lineHeight={1} textColor="#61dafb">
                            Components
                        </Heading>

                        <BlockQuote>
                            Instagram's
                        </BlockQuote>

                        <Link href="https://chantastic.org/react-media-object/">
                            <Text bold caps textColor="tertiary">Media Object Pattern</Text>
                        </Link>
                    </Slide>
                    <Slide transition={["slide", "spin"]} bgColor="primary" textColor="white">
                        <Heading caps fit size={1} textColor="white">
                            Module Bundling
                        </Heading>
                        <List>
                            <ListItem>Browserify</ListItem>
                            <ListItem>Rollup (tree shaking)</ListItem>
                            <ListItem>Webpack (Facebook supported)</ListItem>
                        </List>
                    </Slide>
                    <Slide transition={["slide", "spin"]} bgColor="primary" textColor="white">
                        <Heading caps fit size={1} textColor="white">
                            Single Page Application AKA Memory Leak
                        </Heading>
                    </Slide>
                    <Slide transition={["fade"]} bgColor="primary" textColor="white">
                        <Heading size={1} lineHeight={1} textColor="#61dafb">
                            ScalaTags
                        </Heading>

                        <BlockQuote>
                            Scala XML literals mistake? Scala has DSLs (code completion/ compiler)
                        </BlockQuote>

                        <Link href="http://www.lihaoyi.com/scalatags/"><Text bold caps textColor="tertiary">Scala Tags</Text></Link>

                        <CodePane
                            lang="scala"
                            source={require("raw!../assets/scalatags.example")}
                            margin="5px auto"
                        />
                    </Slide>
                </Deck>
            </Spectacle>
        );
    }
}
