import React from 'react';
import faker from 'faker/locale/en_US';
import _ from 'lodash';

/*eslint-disable */
const lastMonth = [
    <td className="align-middle text-right text-danger">
        <i className="fa fa-fw fa-caret-down mr-1"></i>92.02%
    </td>,
    <td className="align-middle text-right text-success">
        <i className="fa fa-fw fa-caret-up mr-1"></i>23.02%
    </td>
];
/*eslint-enable */
/*eslint-disable */
const no = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10"
];
/*eslint-enable */

const TrTableStriped = () => (
    <React.Fragment>
        {
            _.times(20, (index) => (
                <tr key={ index }>
                    <td className="align-middle">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id={"cb" + index }/>
                            <label class="custom-control-label" for={"cb" + index }></label>
                        </div>
                    </td>
                    <td className="align-middle">
                        { index + 1 }
                    </td>
                    <td className="align-middle">
                        <span className="text-inverse">
                            { faker.commerce.productName() }
                        </span>
                    </td>
                    <td className="align-middle">not-shared</td>
                    { lastMonth[index%2] }
                    <td>topic</td>
                    <td>published</td>
                    <td>
                        { faker.date.weekday() }, 12 { faker.date.month() }, 2020
                    </td>
                    <td><u>View</u> <u>Edit</u> <u>Delete</u></td>
                </tr>
            ))
        }
    </React.Fragment>
)

export { TrTableStriped };