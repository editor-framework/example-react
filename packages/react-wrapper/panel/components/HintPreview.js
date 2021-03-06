let React     = require('react')
let Component = React.Component

class HintPreview extends Component {

  

  render() {
    return (
      <div>
        <div class="section">
          <h3>Standard</h3>
          <div class="group">
            <ui-hint class="top">Top Arrow</ui-hint>
          </div>

          <div class="group">
            <ui-hint class="bottom">Bottom Arrow</ui-hint>
          </div>

          <div class="group">
            <ui-hint class="left">Left Arrow</ui-hint>
          </div>

          <div class="group">
            <ui-hint class="right">Right Arrow</ui-hint>
          </div>
        </div>

        <div class="section">
          <h3>Size</h3>
          <div class="group">
            <ui-hint class="right mini">Mini</ui-hint>
            <ui-hint class="right tiny">Tiny</ui-hint>
            <ui-hint class="right small">Small</ui-hint>
            <ui-hint class="right medium">Medium</ui-hint>
            <ui-hint class="right large">Large</ui-hint>
            <ui-hint class="right big">Big</ui-hint>
            <ui-hint class="right huge">Huge</ui-hint>
            <ui-hint class="right massive">Massive</ui-hint>
          </div>
        </div>

        <div class="section">
          <h3>Colored</h3>
          <div class="group">
            <ui-hint class="right red">Red</ui-hint>
            <ui-hint class="right green">Green</ui-hint>
            <ui-hint class="right blue">Blue</ui-hint>
          </div>
        </div>

        <div class="section">
          <h3>Position</h3>
          <div class="group">
            <ui-hint class="bottom" position="20%">
              Position = 20%
            </ui-hint>
          </div>

          <div class="group">
            <ui-hint class="top" position="-20px">
              Position = -20px
            </ui-hint>
          </div>

          <div class="group">
            <ui-hint class="left" position="30%">
              Hello World <br/>
              Position = 30%
            </ui-hint>
          </div>

          <div class="group">
            <ui-hint class="right" position="-15px">
              Hello World <br/>
              Position = -15px
            </ui-hint>
          </div>
        </div>

        <div class="section">
          <h3>Mixed</h3>
          <div class="group">
            <ui-hint class="bottom">
              Hello World <br/>
              <a href="http://github.com"><b>API Reference</b></a>
            </ui-hint>
          </div>
        </div>

      </div>
    )
  }
}

module.exports = HintPreview
