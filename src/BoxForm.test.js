import { render, screen } from '@testing-library/react';
import BoxForm from "./BoxForm"
const data = {
    height: "",
    width: "",
    color: ""
}
it('renders', () => {
    render(<BoxForm formData={data}/>);
});


it("matches snapshot", () => {
    const {asFragment} = render(<BoxForm formData={data}/>);
    expect(asFragment()).toMatchSnapshot();
})