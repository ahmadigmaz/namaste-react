import RestaurantCard from '../RestaurantCard'
import { render, screen } from '@testing-library/react'
import MOCK_DATA from '../mocksData/RestaurantCardData.json'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import { promotedRestaurant } from '../RestaurantCard'

it("it should test the that restaurant card is rendered with data or not", ()=>{
    render(<BrowserRouter>
    <RestaurantCard ResData = {MOCK_DATA} />
    </BrowserRouter>)

    const name = screen.getByText("Millet Express");

    expect(name).toBeInTheDocument();
})
it("it should test the promoted label is rendered or not", ()=>{

    const LabelRestaurant = promotedRestaurant(RestaurantCard); 
    render(<BrowserRouter>
    <LabelRestaurant ResData = {MOCK_DATA} />
    </BrowserRouter>)

    const promotedLabel = screen.getByText("Promoted");

    expect(promotedLabel).toBeInTheDocument();
})