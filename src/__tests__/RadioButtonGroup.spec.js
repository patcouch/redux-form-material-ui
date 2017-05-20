import expect from 'expect'
import expectJsx from 'expect-jsx'
import { RadioGroup } from 'material-ui/Radio'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import React from 'react'
import TestUtils from 'react-dom/test-utils'
import ReduxFormMaterialUIRadioGroup from '../RadioGroup'

expect.extend(expectJsx)

describe('RadioGroup', () => {
  it('has a display name', () => {
    expect(ReduxFormMaterialUIRadioGroup.displayName).toBe(
      'ReduxFormMaterialUIRadioGroup'
    )
  })

  it('renders a RadioGroup', () => {
    expect(
      new ReduxFormMaterialUIRadioGroup({
        input: {
          name: 'myRadio',
          value: 'Foo'
        }
      }).render()
    ).toEqualJSX(
      <RadioGroup
        name="myRadio"
        value="Foo"
        selectedValue="Foo"
        ref="component"
      />
    )
  })

  it('renders a RadioGroup with no error when not touched', () => {
    expect(
      new ReduxFormMaterialUIRadioGroup({
        input: {
          name: 'myRadio',
          value: 'Foo'
        },
        meta: {
          error: 'FooError'
        }
      }).render()
    ).toEqualJSX(
      <RadioGroup
        name="myRadio"
        value="Foo"
        selectedValue="Foo"
        ref="component"
      />
    )
  })

  it('renders a RadioGroup with an error', () => {
    expect(
      new ReduxFormMaterialUIRadioGroup({
        input: {
          name: 'myRadio',
          value: 'Foo'
        },
        meta: {
          error: 'FooError',
          touched: true
        }
      }).render()
    ).toEqualJSX(
      <RadioGroup
        name="myRadio"
        value="Foo"
        selectedValue="Foo"
        errorText="FooError"
        ref="component"
      />
    )
  })

  it('renders a RadioGroup with no warning when not touched', () => {
    expect(
      new ReduxFormMaterialUIRadioGroup({
        input: {
          name: 'myRadio',
          value: 'Foo'
        },
        meta: {
          warning: 'FooWarning'
        }
      }).render()
    ).toEqualJSX(
      <RadioGroup
        name="myRadio"
        value="Foo"
        selectedValue="Foo"
        ref="component"
      />
    )
  })

  it('renders a RadioGroup with an warning', () => {
    expect(
      new ReduxFormMaterialUIRadioGroup({
        input: {
          name: 'myRadio',
          value: 'Foo'
        },
        meta: {
          warning: 'FooWarning',
          touched: true
        }
      }).render()
    ).toEqualJSX(
      <RadioGroup
        name="myRadio"
        value="Foo"
        selectedValue="Foo"
        errorText="FooWarning"
        ref="component"
      />
    )
  })

  it('provides getRenderedComponent', () => {
    const dom = TestUtils.renderIntoDocument(
      <MuiThemeProvider>
        <ReduxFormMaterialUIRadioGroup name="myRadio" />
      </MuiThemeProvider>
    )

    const element = TestUtils.findRenderedComponentWithType(
      dom,
      ReduxFormMaterialUIRadioGroup
    )
    expect(element.getRenderedComponent).toBeA('function')
    expect(element.getRenderedComponent()).toExist()
  })
})
