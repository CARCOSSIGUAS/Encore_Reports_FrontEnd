import React from 'react';

class DropDown extends React.Component {
    constructor() {
        super();
    }

    render () {
        const makeDropDown = () => {
            return this.props.items.map((item) => {
              return (
                <option key={ item.id} value={ item.id }> { item.name } </option>
              );
            });
        };
        
        return (
         <div>
             <select defaultValue="" value={ this.props.value } name={ this.props.name } onChange={ this.props.handleChange } className="form-control input-sm">
                <option value="" disabled >
                    { this.props.defaultOption }
                </option>
                { makeDropDown() }
             </select>
         </div>
        )
    }
}

export default DropDown;