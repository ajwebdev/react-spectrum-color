import React, { useReducer } from 'react';
import reactCSS from 'reactcss';
import {SketchPicker} from 'react-color';
import '../logo.svg';

function ColorPick({initalColor, children}) {

    const initialState = {
        color : initialcolor? initialcolor : '#fff',
        displayColorPicker : false
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'COLOR_CHANGE':
                return {
                    ...state, 
                    color : action.color,
                    displayColorPicker: false
                }
            case 'SHOW_COLOR' : 
            return {
                ...state,
                displayColorPicker : true
            }
        }
    }
    const [newColor, dispatch] = useReducer(reducer, initialState); 
    const styles = reactCSS({
        'default': {
          color: {
            width: '36px',
            height: '14px',
            borderRadius: '2px',
            background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
          },
          swatch: {
            padding: '5px',
            background: '#fff',
            borderRadius: '1px',
            boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
            display: 'inline-block',
            cursor: 'pointer',
          },
          popover: {
            position: 'absolute',
            zIndex: '2',
          },
          cover: {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
          },
        },
      });
return (
    <>
        <div style={ styles.swatch } onClick={ this.handleClick }>
          <div style={ styles.color } />
        </div>
        { newColor.displayColorPicker ? <div style={ styles.popover }>
          <div style={ styles.cover } onClick={  }/>
          <SketchPicker color={ color } onChange={ () => dispatch() } } />
        </div> : null }
    </>
)
}
export default ColorPick;