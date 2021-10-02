import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import BoxList from "./BoxList"

it('renders', () => {
  render(<BoxList />);
});

it("matches snapshot", () => {
    const {asFragment} = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
})
it('can add a new box', () => {
    const {getByLabelText, queryByText, container} = render(<BoxList />);

    const heightInput = getByLabelText("Height:")
    const widthInput = getByLabelText("Width:")
    const colorInput = getByLabelText("Color:")
    const submitBtn = queryByText("Add Box")

    fireEvent.change(heightInput, {target: {value: "20"}})
    fireEvent.change(widthInput, {target: {value: "20"}})
    fireEvent.change(colorInput, {target: {value: "blue"}})
    fireEvent.click(submitBtn)

    expect(container.getElementsByClassName('Box')[0]).toBeInTheDocument();
})

it('can delete a box', () => {
    const {debug, getByLabelText, queryByText, container} = render(<BoxList />);

    const heightInput = getByLabelText("Height:")
    const widthInput = getByLabelText("Width:")
    const colorInput = getByLabelText("Color:")
    const submitBtn = queryByText("Add Box")
    
    fireEvent.change(heightInput, {target: {value: "20"}})
    fireEvent.change(widthInput, {target: {value: "20"}})
    fireEvent.change(colorInput, {target: {value: "blue"}})
    fireEvent.click(submitBtn)
    let box = container.getElementsByClassName('Box')[0];
    
    expect(box).toBeInTheDocument();

    const deleteBtn = queryByText("X")
    fireEvent.click(deleteBtn);
    expect(box).not.toBeInTheDocument();
})