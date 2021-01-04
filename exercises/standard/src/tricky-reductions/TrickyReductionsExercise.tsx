import React, {FC, useEffect, useState} from "react";

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const TrickyReductionsExercise: FC = () => {
    const [output1, setOutput1] = useState(0);
    const [output2, setOutput2] = useState(0);
    const [output3, setOutput3] = useState(0);
    const [output4, setOutput4] = useState(0);
    const [output5, setOutput5] = useState(0);
    const [output6, setOutput6] = useState(0);
    const [output7, setOutput7] = useState("0");

    useEffect(() => {
        const sumResult = 1;
        setOutput1(sumResult);

        const productResult = 1;
        setOutput2(productResult);

        const countResult = 1;
        setOutput3(countResult);

        const averageResult = 1;
        setOutput4(averageResult);

        const lastItemResult = 1;
        setOutput5(lastItemResult);

        const penultimateItemResult = 1;
        setOutput6(penultimateItemResult);

        const reverseResult = "1";
        setOutput7(reverseResult);
    });

    // --- Ignore ---
    return (
        <div>
            <h2>Output</h2>
            <ol>
                <li>Summing via reduce gives {output1}</li>
                <li>Multiplying via reduce gives {output2}</li>
                <li>Counting via reduce gives {output3}</li>
                <li>Average via reduce gives {output4}</li>
                <li>Last via reduce gives {output5}</li>
                <li>Penultimate via reduce gives {output6}</li>
                <li>Reverse via reduce gives {output7}</li>
            </ol>
        </div>
    )
};
