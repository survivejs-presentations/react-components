// Import React
import React from "react";
import mapValues from "lodash/mapValues";

// Import Spectacle Core tags
import {
  Appear,
  //BlockQuote,
  //Cite,
  CodePane,
  Deck,
  //Fill,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  //Markdown,
  //Quote,
  Slide,
  Table,
  TableRow,
  TableHeaderItem,
  TableItem
  //Text
} from "spectacle";

import Counter from "./counter_01.jsx";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("./custom.css");

const slideTransition = ["slide"];
const images = mapValues({
  lifecycle: require("../images/lifecycle.png"),
  survivejs: require("../images/survivejs.png")
}, (v) => v.replace("/", ""));

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "black",
  tertiary: "#09b5c4",
  quartenary: "rgba(255, 219, 169, 0.43)"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={slideTransition} transitionDuration={500} theme={theme}>
        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            React Components
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            React Philosophy
          </Heading>
          <List>
            <Appear><ListItem>Model your application as a component hierarchy</ListItem></Appear>
            <Appear><ListItem>Each component can have <code>props</code> and <code>state</code></ListItem></Appear>
            <Appear><ListItem>Escape hatches through <code>lifecycle methods</code> and <code>refs</code></ListItem></Appear>
            <Appear><ListItem>React forces you to think about <code>state</code> (a good thing!)</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Components
          </Heading>
          <Layout>
            <Table>
              <thead>
                <TableRow>
                  <TableHeaderItem />
                  <TableHeaderItem><strike><code>createClass</code></strike></TableHeaderItem>
                  <TableHeaderItem><code>extends Component</code></TableHeaderItem>
                  <TableHeaderItem><u>Functions</u></TableHeaderItem>
                </TableRow>
              </thead>
              <tbody>
                <Appear>
                  <TableRow>
                    <TableItem><code>props</code></TableItem>
                    <TableItem>X</TableItem>
                    <TableItem>X</TableItem>
                    <TableItem>X</TableItem>
                  </TableRow>
                </Appear>
                <Appear>
                  <TableRow>
                    <TableItem><code>context</code></TableItem>
                    <TableItem>X</TableItem>
                    <TableItem>X</TableItem>
                    <TableItem>X</TableItem>
                  </TableRow>
                </Appear>
                <Appear>
                  <TableRow>
                    <TableItem><code>refs</code></TableItem>
                    <TableItem>X</TableItem>
                    <TableItem>X</TableItem>
                    <TableItem>X</TableItem>
                  </TableRow>
                </Appear>
                <Appear>
                  <TableRow>
                    <TableItem><code>state</code></TableItem>
                    <TableItem>X</TableItem>
                    <TableItem>X</TableItem>
                    <TableItem />
                  </TableRow>
                </Appear>
                <Appear>
                  <TableRow>
                    <TableItem>Lifecycle</TableItem>
                    <TableItem>X</TableItem>
                    <TableItem>X</TableItem>
                    <TableItem />
                  </TableRow>
                </Appear>
              </tbody>
            </Table>
          </Layout>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <code>React.Component</code>
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Cat Counter
          </Heading>
          <Counter />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://codesandbox.io/s/76gK41lrQ"><code>React.Component</code></Link>
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!content!./counter_01.jsx")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://codesandbox.io/s/NxXNAOZAK">No JSX</Link>
          </Heading>
          <CodePane
            lang="js"
            source={require("raw-loader!content!./counter_no_jsx.js")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            <Link href="https://codesandbox.io/s/JZxJgDqNg"><code>React.Component</code></Link> with <Link href="https://github.com/tc39/proposal-class-public-fields">public fields (stage 2)</Link>
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!content!./counter_02.jsx")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            <Link href="https://codesandbox.io/s/3lBqVwL5A"><code>React.Component</code></Link> with Function Style <code>setState</code>
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!content!./counter_03.jsx")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            <Link href="https://codesandbox.io/s/g5kzWv3Zl"><code>React.Component</code></Link> with Function Style <code>setState</code> Extracted
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!content!./counter_04.jsx")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Exercises
          </Heading>
          <List>
            <Appear><ListItem>0. Fork <Link href="https://codesandbox.io/s/g5kzWv3Zl">the last code example</Link> at CodeSandbox</ListItem></Appear>
            <Appear><ListItem>1. Make it possible to add two cats at once</ListItem></Appear>
            <Appear><ListItem>2. Add a reset button to restore the count to zero*</ListItem></Appear>
            <Appear><ListItem>3. Add multiple options. Hint: <code>[1, 2, 4].map(...)</code>. Look up React <Link href="https://facebook.github.io/react/docs/reconciliation.html"><code>key</code></Link>. Why is it needed?**</ListItem></Appear>
            <Appear><ListItem>4. Try <code>this.setState(..., cb)***</code></ListItem></Appear>
            <Appear><ListItem>Solutions: <Link href="https://codesandbox.io/s/g5kzWv3Zl">0</Link>, <Link href="https://codesandbox.io/s/L98PX9kMp">1</Link>, <Link href="https://codesandbox.io/s/Q1qvPRW55">2</Link>, <Link href="https://codesandbox.io/s/31J17rM7n">3</Link>, <Link href="https://codesandbox.io/s/qvEWNmJ0">4</Link></ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <code>key</code>
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!content!../examples/key_01.jsx")}
            margin="20px auto"
          />
          <Link href="https://facebook.github.io/react/docs/reconciliation.html">Read React reconciliation documentation to understand more</Link>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            Composition
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://codesandbox.io/s/qvEWNmJ0">Why composition?</Link>
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!content!../examples/composition_01.jsx")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            <Link href="https://codesandbox.io/s/X6GyyXg9v">Decomposition</Link>
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!content!../examples/composition_02.jsx")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Exercises
          </Heading>
          <List>
            <Appear><ListItem>0. Decompose the counter as in the slides</ListItem></Appear>
            <Appear><ListItem>1. Implement <b>App</b> that contains multiple <b>CatCounter</b>s</ListItem></Appear>
            <Appear><ListItem>2. Implement a generic <b>Counter</b> so you can count other things*</ListItem></Appear>
            <Appear><ListItem>3. Count total of all things in the user interface**</ListItem></Appear>
            <Appear><ListItem>Solutions: <Link href="https://codesandbox.io/s/X6GyyXg9v">0</Link>, <Link href="https://codesandbox.io/s/73AKPwX3j">1</Link>, <Link href="https://codesandbox.io/s/O7L2zM0mg">2</Link>, <Link href="https://codesandbox.io/s/X64K29kMo">3</Link></ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <code>refs</code>
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            <code>React.Component</code> with a ref
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../examples/refs_01.jsx")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            Function based component with a ref
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../examples/refs_02.jsx")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Exercises
          </Heading>
          <List>
            <Appear><ListItem>0. Capture a custom amount using an input and a <b>ref</b></ListItem></Appear>
            <Appear><ListItem>1. Do the same without a <b>ref</b>*</ListItem></Appear>
            <Appear><ListItem>Solutions: <Link href="https://codesandbox.io/s/VO7zJD0k5">0</Link> (can you see the bug?), <Link href="https://codesandbox.io/s/RoznJpjpE">1</Link></ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            Lifecycle Methods
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Image src={images.lifecycle} margin="40px auto" height="324px" />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            <code>shouldComponentUpdate(nextProps, nextState)</code>
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../examples/lifecycle_01.jsx")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Exercises
          </Heading>
          <List>
            <Appear><ListItem>0. Implement a <code>shouldComponentUpdate</code> at <b>Counter</b> so that it returns <code>false</code> and see when it gets triggered</ListItem></Appear>
            <Appear><ListItem>1. Implement a <code>componentDidMount</code> and <code>componentWillUnmount</code> to increase the count given an interval*</ListItem></Appear>
            <Appear><ListItem>2. Encapsulate timer logic within a <code>{"<Timer interval={1000} onTick={() => ...} />"}</code> component**</ListItem></Appear>
            <Appear><ListItem>Solutions: <Link href="https://codesandbox.io/s/lO8pPZ2Zl">0</Link>, <Link href="https://codesandbox.io/s/JZpQ1Gm3K">1</Link>, <Link href="https://codesandbox.io/s/66m6MVMqN">2</Link></ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            Higher-Order Components
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            Why Higher-Order Components?
          </Heading>
          <List>
            <Appear><ListItem>Encapsulate a specific concern</ListItem></Appear>
            <Appear><ListItem>Examples: <code>authenticated</code> route, <code>connect</code>, <Link href="https://www.npmjs.com/package/preconf">preconf</Link></ListItem></Appear>
            <Appear><ListItem>Smaller slices to test</ListItem></Appear>
            <Appear><ListItem><Link href="https://facebook.github.io/react/docs/higher-order-components.html">Read React Higher-Order Components to learn more</Link></ListItem></Appear>
            <Appear><ListItem>See also <Link href="https://github.com/acdlite/recompose">recompose</Link> for specific helpers</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2} fit>
            Higher-Order Component Example
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../examples/hoc_01.jsx")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={2}>
            Exercises
          </Heading>
          <List>
            <Appear><ListItem>0. Extract reset concern into <code>withReset</code> HOC that contains <b>Counter</b> reset related logic. Hint: <Link href="https://codesandbox.io/s/oYljL1Y6k">starting point</Link></ListItem></Appear>
            <Appear><ListItem>1. Extract custom value concern into <code>withCustomValue</code> HOC that contains <b>Counter</b> custom input related logic*</ListItem></Appear>
            <Appear><ListItem>2. <Link href="https://github.com/reactjs/redux/blob/master/docs/api/compose.md"><code>compose</code></Link> <code>withReset</code> and <code>withCustomValue</code> together**</ListItem></Appear>
            <Appear><ListItem>3. Extract <b>state</b> into <code>State</code> HOC that contains React state related logic. <Link href="https://medium.com/merrickchristensen/function-as-child-components-5f3920a9ace9">Hint: use function as a child</Link>***</ListItem></Appear>
            <Appear><ListItem>Solutions: <Link href="https://codesandbox.io/s/R6OWvlK30">0</Link>, <Link href="https://codesandbox.io/s/73v4G8MPr">1</Link>, <Link href="https://codesandbox.io/s/qjGPwAEwk">2</Link>, <Link href="https://codesandbox.io/s/j2GwNwQ54">3</Link></ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Link href="https://www.survivejs.com/">
            <Heading size={1}>
              SurviveJS
            </Heading>
          </Link>
          <Image src={images.survivejs} margin="0px auto 40px" height="524px"/>
        </Slide>

        <Slide transition={slideTransition} bgColor="tertiary">
          <Heading size={1} caps fit textColor="primary">
            Made in Finland by
          </Heading>
          <Link href="https://twitter.com/bebraw">
            <Heading caps fit size={2} textColor="secondary">
              Juho Vepsäläinen
            </Heading>
          </Link>
        </Slide>
      </Deck>
    );
  }
}
