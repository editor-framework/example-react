let React     = require('react')
let Component = React.Component

class CheckboxPreview extends Component {

  render() {
    return (
      <div>
        <div class="section">
          <h3>Standard checkbox</h3>
          <div class="group g-01">
            <ui-checkbox>Check</ui-checkbox>
          </div>

          <div class="group g-02">
            <ui-checkbox disabled>Check</ui-checkbox>
            <ui-button id="focus" class="mini blue">Focus</ui-button>
          </div>

          <span id="event">event: ---</span>
        </div>

        <div class="section">
          <h3>State</h3>
          <div style="position: relative;">
            <div class="group">
              <ui-checkbox style="width: 100px;" pressed>Pressed</ui-checkbox>
              <ui-checkbox style="width: 100px;" checked pressed>Pressed</ui-checkbox>
            </div>
            <div class="group">
              <ui-checkbox style="width: 100px;" focused>Focused</ui-checkbox>
              <ui-checkbox style="width: 100px;" checked focused>Focused</ui-checkbox>
            </div>
            <div class="group">
              <ui-checkbox style="width: 100px;" disabled>Disabled</ui-checkbox>
              <ui-checkbox style="width: 100px;" checked disabled>Disabled</ui-checkbox>
            </div>
            <div class="fit"></div>
          </div>
        </div>

        <div class="section">
          <h3>Readonly</h3>
          <div class="group">
            <ui-checkbox readonly>Readonly</ui-checkbox>
          </div>

          <div class="group">
            <ui-checkbox checked readonly>Readonly</ui-checkbox>
          </div>
        </div>

        <div class="section">
          <h3>Unnavigable</h3>
          <div class="group">
            <ui-checkbox style="width: 100px;" unnavigable>Check</ui-checkbox>
          </div>

          <div class="group">
            <ui-checkbox style="width: 100px;" unnavigable disabled>Check</ui-checkbox>
            <ui-checkbox style="width: 100px;" unnavigable disabled checked>Check</ui-checkbox>
          </div>
        </div>

      </div>
    )
  }
}

module.exports = CheckboxPreview
