import { render, screen } from '@testing-library/react'
import User from './User'

const userMock = {
    first : 'djamel',
    last : 'dada'
}

describe('components/User', () =>{
    if('Renders a component', ()=>{
        render(
            <User user={userMock} />
        )

        const username = screen.getByText('djamel')
        expect(username).toBeInTheDocument()
    });
})