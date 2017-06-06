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

import Counter from './counter_01';

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
          <Heading size={1}>
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
          <Heading size={1}>
            Components
          </Heading>
          <Layout>
            <Table>
              <thead>
                <TableRow>
                  <TableHeaderItem />
                  <TableHeaderItem><code>createClass</code></TableHeaderItem>
                  <TableHeaderItem><code>extends Component</code></TableHeaderItem>
                  <TableHeaderItem>Functions</TableHeaderItem>
                </TableRow>
              </thead>
              <tbody>
                <TableRow>
                  <TableItem><code>props</code></TableItem>
                  <TableItem>X</TableItem>
                  <TableItem>X</TableItem>
                  <TableItem>X</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem><code>context</code></TableItem>
                  <TableItem>X</TableItem>
                  <TableItem>X</TableItem>
                  <TableItem>X</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem><code>refs</code></TableItem>
                  <TableItem>X</TableItem>
                  <TableItem>X</TableItem>
                  <TableItem>(X)</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem><code>state</code></TableItem>
                  <TableItem>X</TableItem>
                  <TableItem>X</TableItem>
                  <TableItem />
                </TableRow>
                <TableRow>
                  <TableItem>Lifecycle methods</TableItem>
                  <TableItem>X</TableItem>
                  <TableItem>X</TableItem>
                  <TableItem />
                </TableRow>
                <TableRow>
                  <TableItem>Notes</TableItem>
                  <TableItem>Deprecated!</TableItem>
                  <TableItem />
                  <TableItem>Good default</TableItem>
                </TableRow>
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
          <Heading size={1}>
            Cat Counter
          </Heading>
          <Counter />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1} fit>
            <code>React.Component</code>
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!content!./counter_01.jsx")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            No JSX
          </Heading>
          <CodePane
            lang="js"
            source={require("raw-loader!content!./counter_no_jsx.js")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1} fit>
            <code>React.Component</code> with <Link href="https://github.com/tc39/proposal-class-public-fields">public fields (stage 2)</Link>
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!content!./counter_02.jsx")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1} fit>
            <code>React.Component</code> with Function Style <code>setState</code>
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!content!./counter_03.jsx")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1} fit>
            <code>React.Component</code> with Function Style <code>setState</code> Extracted
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!content!./counter_04.jsx")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            Exercises
          </Heading>
          <List>
            <Appear><ListItem>Copy the last cat counter example to <Link href="https://codesandbox.io/">CodeSandbox</Link></ListItem></Appear>
            <Appear><ListItem>Make it possible to add two cats at once</ListItem></Appear>
            <Appear><ListItem>*Add a reset button to restore the count to zero</ListItem></Appear>
            <Appear><ListItem>**Add multiple options. Hint: <code>[1, 2, 4].map(...)</code>. Look up React <Link href="https://facebook.github.io/react/docs/reconciliation.html"><code>key</code></Link>. Why is it needed?</ListItem></Appear>
            <Appear><ListItem>***Try <code>this.setState(..., cb)</code></ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            <code>refs</code> and Lifecycle Methods
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={4}>
            <code>React.Component</code> with a Ref
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../examples/component_09.jsx")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            Lifecycle Methods
          </Heading>
          <Image src={images.lifecycle} margin="40px auto" height="324px" />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            Exercises
          </Heading>
          <List>
            <Appear><ListItem>Implement a <code>lifecycle method</code> and see when it gets triggered</ListItem></Appear>
            <Appear><ListItem>*Implement <b>App</b> that contains multiple <b>CatCounter</b>s</ListItem></Appear>
            <Appear><ListItem>**Push counter state management to <b>App</b></ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            Stateless Functions
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={4}>
            Stateless Functions
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../examples/component_01.jsx")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={4}>
            Stateless Functions with a Shorthand
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../examples/component_02.jsx")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={4}>
            Stateless Functions Destructured
          </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../examples/component_03.jsx")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
        <Heading size={4}>
          Stateless Functions Destructured and Formatted for Readability (parens!)
        </Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../examples/component_04.jsx")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            Exercises
          </Heading>
          <List>
            <Appear><ListItem>Refactor the application into function style where possible</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition} bgColor="secondary">
          <Heading size={2} textColor="tertiary">
            Higher-Order Components
          </Heading>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1} fit>
            Why Higher-Order Components?
          </Heading>
          <List>
            <Appear><ListItem>Encapsulate a specific concern</ListItem></Appear>
            <Appear><ListItem>Examples: <code>authenticated</code> route, <code>connect</code> (pass state)</ListItem></Appear>
            <Appear><ListItem>Smaller slices to test</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={slideTransition}>
          <Heading size={1}>
            Exercises
          </Heading>
          <List>
            <Appear><ListItem>Refactor state management into a <code>stateful</code> HOC that contains <code>setState</code></ListItem></Appear>
            <Appear><ListItem>Implement <code>Provider</code> and <code>connect</code> pair to pass state through hierarchy (hint: see Redux for basic API)*</ListItem></Appear>
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
