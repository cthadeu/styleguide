import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import RadioButton from '../../Form/RadioButton'
import Input from '../../Form/Input'
import CheckBox from '../../Form/CheckBox'

class SidebarFilterCheckbox extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      list: this.props.activeOptions.filter(element => element.code.indexOf(props.filter.code + '-') !== -1)
    }
  }

  handleChange = () => {
    this.props.handleChange({ [this.props.filter.code]: this.state.list })
  }

  handleAdd = option => {
    this.setState({ list: [...this.state.list, option] }, () => {
      this.handleChange()
    })
  }

  handleRemove = option => {
    this.setState({ list: this.state.list.filter(item => item.code !== option.code) }, () => {
      this.handleChange()
    })
  }

  isActive = code => {
    return undefined !== this.state.list.find(item => item.code === code)
  }

  render() {
    const { filter } = this.props

    return (
      <div>
        <ul className="list g-pa0 g-f2">
          {filter.options.map((item, index) => {
            const code = `${filter.code}-${item.title}`

            return (
              <li key={`${filter.code}${index}`}>
                <label className="inline-flex items-center g-mb2 pointer">
                  <CheckBox
                    value={item.value}
                    name={filter.code}
                    isChecked={this.isActive(code)}
                    onClick={value => {
                      if (value) {
                        this.handleAdd({ ...item, code: code })
                        return
                      }

                      this.handleRemove({ ...item, code: code })
                    }}
                  />
                  <span className="g-ml3">{item.title}</span>
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

SidebarFilterCheckbox.propTypes = {
  filter: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  activeOptions: PropTypes.array
}

export default SidebarFilterCheckbox
