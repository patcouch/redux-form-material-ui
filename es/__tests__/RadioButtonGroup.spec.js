'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _expectJsx = require('expect-jsx');

var _expectJsx2 = _interopRequireDefault(_expectJsx);

var _Radio = require('material-ui/Radio');

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _testUtils = require('react-dom/test-utils');

var _testUtils2 = _interopRequireDefault(_testUtils);

var _RadioGroup = require('../RadioGroup');

var _RadioGroup2 = _interopRequireDefault(_RadioGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_expect2.default.extend(_expectJsx2.default);

describe('RadioGroup', function () {
  it('has a display name', function () {
    (0, _expect2.default)(_RadioGroup2.default.displayName).toBe('ReduxFormMaterialUIRadioGroup');
  });

  it('renders a RadioGroup', function () {
    (0, _expect2.default)(new _RadioGroup2.default({
      input: {
        name: 'myRadio',
        value: 'Foo'
      }
    }).render()).toEqualJSX(_react2.default.createElement(_Radio.RadioGroup, {
      name: 'myRadio',
      value: 'Foo',
      selectedValue: 'Foo',
      ref: 'component'
    }));
  });

  it('renders a RadioGroup with no error when not touched', function () {
    (0, _expect2.default)(new _RadioGroup2.default({
      input: {
        name: 'myRadio',
        value: 'Foo'
      },
      meta: {
        error: 'FooError'
      }
    }).render()).toEqualJSX(_react2.default.createElement(_Radio.RadioGroup, {
      name: 'myRadio',
      value: 'Foo',
      selectedValue: 'Foo',
      ref: 'component'
    }));
  });

  it('renders a RadioGroup with an error', function () {
    (0, _expect2.default)(new _RadioGroup2.default({
      input: {
        name: 'myRadio',
        value: 'Foo'
      },
      meta: {
        error: 'FooError',
        touched: true
      }
    }).render()).toEqualJSX(_react2.default.createElement(_Radio.RadioGroup, {
      name: 'myRadio',
      value: 'Foo',
      selectedValue: 'Foo',
      errorText: 'FooError',
      ref: 'component'
    }));
  });

  it('renders a RadioGroup with no warning when not touched', function () {
    (0, _expect2.default)(new _RadioGroup2.default({
      input: {
        name: 'myRadio',
        value: 'Foo'
      },
      meta: {
        warning: 'FooWarning'
      }
    }).render()).toEqualJSX(_react2.default.createElement(_Radio.RadioGroup, {
      name: 'myRadio',
      value: 'Foo',
      selectedValue: 'Foo',
      ref: 'component'
    }));
  });

  it('renders a RadioGroup with an warning', function () {
    (0, _expect2.default)(new _RadioGroup2.default({
      input: {
        name: 'myRadio',
        value: 'Foo'
      },
      meta: {
        warning: 'FooWarning',
        touched: true
      }
    }).render()).toEqualJSX(_react2.default.createElement(_Radio.RadioGroup, {
      name: 'myRadio',
      value: 'Foo',
      selectedValue: 'Foo',
      errorText: 'FooWarning',
      ref: 'component'
    }));
  });

  it('provides getRenderedComponent', function () {
    var dom = _testUtils2.default.renderIntoDocument(_react2.default.createElement(
      _MuiThemeProvider2.default,
      null,
      _react2.default.createElement(_RadioGroup2.default, { name: 'myRadio' })
    ));

    var element = _testUtils2.default.findRenderedComponentWithType(dom, _RadioGroup2.default);
    (0, _expect2.default)(element.getRenderedComponent).toBeA('function');
    (0, _expect2.default)(element.getRenderedComponent()).toExist();
  });
});