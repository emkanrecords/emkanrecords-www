import React from 'react'
import { shallow } from 'enzyme'
import AnimationFadeComponent from './animation-fade.component'

describe ('AnimationFadeComponent', () => {

    const component = <AnimationFadeComponent><span>child</span></AnimationFadeComponent>

    it ('should mount', () => {

        expect (shallow (component).exists ()).toBe (true)

    })

})