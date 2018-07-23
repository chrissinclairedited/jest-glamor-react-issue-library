import React from "react";
import { shallow } from "enzyme";
import Button from "../Button";

describe("<Button />", () => {
    it("runs snapshots nicely in the library", () => {
        const component = shallow(<Button onClick={() => {}}>My button</Button>);
        expect(component).toMatchSnapshot();
    });
});
