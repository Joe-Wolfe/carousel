import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";


// Smoke test
it("renders without crashing", function () {
    render(
        <Card
            caption="testing caption"
            src={TEST_IMAGES[0].src}
            currNum={1}
            totalNum={2}
        />
    );
});

// Snapshot test
it("matches snapshot", function () {
    const { asFragment } = render(
        <Card
            caption="testing caption"
            src={TEST_IMAGES[0].src}
            currNum={1}
            totalNum={2}
        />
    );
    expect(asFragment()).toMatchSnapshot();
});