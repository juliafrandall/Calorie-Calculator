describe('CalculatorApp', function() {
  var {
    Simulate,
    renderIntoDocument,
    findRenderedDOMComponentWithClass,
    scryRenderedDOMComponentsWithClass
  } = React.addons.TestUtils;

  var app;

  it('should be a stateful class component', function() {
    expect(React.Component.isPrototypeOf(CalculatorApp)).to.be.true;
  });

  it('should render a single CalculatorForm component', function() {
    var CalculatorForm = findRenderedDOMComponentWithClass(app, 'calculator-form');
    expect(CalculatorForm).to.exist;
  });

  it('should render a single CalculatorList component', function() {
    var CalculatorList = findRenderedDOMComponentWithClass(app, 'calculator-list');
    expect(CalculatorList).to.exist;
  });
