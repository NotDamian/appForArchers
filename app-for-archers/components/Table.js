import React from 'react'

export let ResultArray = []

export default function Table(props) {
    const { children } = props
    let tmpChildren = children.flat()
    let sumArr = []
    let tmp = 0
    for (let i = 0; i <= 36; i++) {
        tmp = tmp + Number(tmpChildren[i])
        if (i == 5 || i == 11 || i == 17 || i == 23 || i == 29 || i == 35) {
            sumArr.push(tmp)
        }
    }
    tmp = 0
    for (let i = 37; i <= tmpChildren.length; i++) {
        tmp = tmp + Number(tmpChildren[i])
        if (i == 42 || i == 48 || i == 54 || i == 60 || i == 66 || i == 72)
            sumArr.push(tmp)
    }

    ResultArray = sumArr
    // console.log(props)
    // console.log(children)
    // console.log(tmpChildren)
    // console.log(sumArr)
    return (
        <>
            <div className='d-flex flex-column justify-content-center flex-md-wrap flex-sm-row'>
                <table className='table table-bordered w-50 mr-5'>
                    <thead>
                        <tr className=''>
                            <th scope=''>strz.</th>
                            <th scope='col'>1</th>
                            <th scope='col'>2</th>
                            <th scope='col'>3</th>
                            <th scope='col'>Suma<br /> 3 strz. </th>
                            <th scope='col'>pkt<br />Seria</th>
                            <th scope='col'>Suma</th>
                        </tr>
                    </thead >
                    <tbody>
                        <tr>
                            <th scope='row'>3</th>
                            <td>{children[0][0]}</td>
                            <td>{children[0][1]}</td>
                            <td>{children[0][2]}</td>
                            <td>{+children[0][0] + +children[0][1] + +children[0][2]}</td>
                            <td className='table-secondary'></td>
                            <td></td>
                        </tr>
                        <tr className='border-bottom'>
                            <th scope='row'>6</th>
                            <td>{children[0][3]}</td>
                            <td>{children[0][4]}</td>
                            <td>{children[0][5]}</td>
                            <td>{+children[0][3] + +children[0][4] + +children[0][5]}</td>
                            <td>{+children[0][0] + +children[0][1] + +children[0][2] + +children[0][3] + +children[0][4] + +children[0][5]}</td>
                            <td>{sumArr[0]}</td>
                        </tr>
                        <tr>
                            <th scope='row'>9</th>
                            <td>{children[1][0]}</td>
                            <td>{children[1][1]}</td>
                            <td>{children[1][2]}</td>
                            <td>{+children[1][0] + +children[1][1] + +children[1][2]}</td>
                            <td className='table-secondary'></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope='row'>12</th>
                            <td>{children[1][3]}</td>
                            <td>{children[1][4]}</td>
                            <td>{children[1][5]}</td>
                            <td>{+children[1][3] + +children[1][4] + +children[1][5]}</td>
                            <td>{+children[1][0] + +children[1][1] + +children[1][2] + +children[1][3] + +children[1][4] + +children[1][5]}</td>
                            <td>{sumArr[1]}</td>
                        </tr>
                        <tr>
                            <th scope='row'>15</th>
                            <td>{children[2][0]}</td>
                            <td>{children[2][1]}</td>
                            <td>{children[2][2]}</td>
                            <td>{+children[2][0] + +children[2][1] + +children[2][2]}</td>
                            <td className='table-secondary'></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope='row'>18</th>
                            <td>{children[2][3]}</td>
                            <td>{children[2][4]}</td>
                            <td>{children[2][5]}</td>
                            <td>{+children[2][3] + +children[2][4] + +children[2][5]}</td>
                            <td>{+children[2][0] + +children[2][1] + +children[2][2] + +children[2][3] + +children[2][4] + +children[2][5]}</td>
                            <td>{sumArr[2]}</td>
                        </tr>
                        <tr>
                            <th scope='row'>21</th>
                            <td>{children[3][0]}</td>
                            <td>{children[3][1]}</td>
                            <td>{children[3][2]}</td>
                            <td>{+children[3][0] + +children[3][1] + +children[3][2]}</td>
                            <td className='table-secondary'></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope='row'>24</th>
                            <td>{children[3][3]}</td>
                            <td>{children[3][4]}</td>
                            <td>{children[3][5]}</td>
                            <td>{+children[3][3] + +children[3][4] + +children[3][5]}</td>
                            <td>{+children[3][0] + +children[3][1] + +children[3][2] + +children[3][3] + +children[3][4] + +children[3][5]}</td>
                            <td>{sumArr[3]}</td>
                        </tr>
                        <tr>
                            <th scope='row'>27</th>
                            <td>{children[4][0]}</td>
                            <td>{children[4][1]}</td>
                            <td>{children[4][2]}</td>
                            <td>{+children[4][0] + +children[4][1] + +children[4][2]}</td>
                            <td className='table-secondary'></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope='row'>30</th>
                            <td>{children[4][3]}</td>
                            <td>{children[4][4]}</td>
                            <td>{children[4][5]}</td>
                            <td>{+children[4][3] + +children[4][4] + +children[4][5]}</td>
                            <td>{+children[4][0] + +children[4][1] + +children[4][2] + +children[4][3] + +children[4][4] + +children[4][5]}</td>
                            <td>{sumArr[4]}</td>
                        </tr>
                        <tr>
                            <th scope='row'>33</th>
                            <td>{children[5][0]}</td>
                            <td>{children[5][1]}</td>
                            <td>{children[5][2]}</td>
                            <td>{+children[5][0] + +children[5][1] + +children[5][2]}</td>
                            <td className='table-secondary'></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope='row'>36</th>
                            <td>{children[5][3]}</td>
                            <td>{children[5][4]}</td>
                            <td>{children[5][5]}</td>
                            <td>{+children[5][3] + +children[5][4] + +children[5][5]}</td>
                            <td>{+children[5][0] + +children[5][1] + +children[5][2] + +children[5][3] + +children[5][4] + +children[5][5]}</td>
                            <td className='bg-primary'>{sumArr[5]}</td>
                        </tr>

                    </tbody>
                </table >



                <table className='table table-bordered w-50'>
                    <thead >
                        <tr className=''>
                            <th scope=''>strz.</th>
                            <th scope='col'>1</th>
                            <th scope='col'>2</th>
                            <th scope='col'>3</th>
                            <th scope='col'>Suma<br /> 3 strz. </th>
                            <th scope='col'>pkt<br />Seria</th>
                            <th scope='col'>Suma</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope='row'>3</th>
                            <td>{children[6][0]}</td>
                            <td>{children[6][1]}</td>
                            <td>{children[6][2]}</td>
                            <td>{+children[6][0] + +children[6][1] + +children[6][2]}</td>
                            <td className='table-secondary'></td>
                            <td></td>
                        </tr>
                        <tr className='border-bottom'>
                            <th scope='row'>6</th>
                            <td>{children[6][3]}</td>
                            <td>{children[6][4]}</td>
                            <td>{children[6][5]}</td>
                            <td>{+children[6][3] + +children[6][4] + +children[6][5]}</td>
                            <td>{+children[6][0] + +children[6][1] + +children[6][2] + +children[6][3] + +children[6][4] + +children[6][5]}</td>
                            <td>{sumArr[6]}</td>
                        </tr>
                        <tr>
                            <th scope='row'>9</th>
                            <td>{children[7][0]}</td>
                            <td>{children[7][1]}</td>
                            <td>{children[7][2]}</td>
                            <td>{+children[7][0] + +children[7][1] + +children[7][2]}</td>
                            <td className='table-secondary'></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope='row'>12</th>
                            <td>{children[7][3]}</td>
                            <td>{children[7][4]}</td>
                            <td>{children[7][5]}</td>
                            <td>{+children[7][3] + +children[7][4] + +children[7][5]}</td>
                            <td>{+children[7][0] + +children[7][1] + +children[7][2] + +children[7][3] + +children[7][4] + +children[7][5]}</td>
                            <td>{sumArr[7]}</td>
                        </tr>
                        <tr>
                            <th scope='row'>15</th>
                            <td>{children[8][0]}</td>
                            <td>{children[8][1]}</td>
                            <td>{children[8][2]}</td>
                            <td>{+children[8][0] + +children[8][1] + +children[8][2]}</td>
                            <td className='table-secondary'></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope='row'>18</th>
                            <td>{children[8][3]}</td>
                            <td>{children[8][4]}</td>
                            <td>{children[8][5]}</td>
                            <td>{+children[8][3] + +children[8][4] + +children[8][5]}</td>
                            <td>{+children[8][0] + +children[8][1] + +children[8][2] + +children[8][3] + +children[8][4] + +children[8][5]}</td>
                            <td>{sumArr[8]}</td>
                        </tr>
                        <tr>
                            <th scope='row'>21</th>
                            <td>{children[9][0]}</td>
                            <td>{children[9][1]}</td>
                            <td>{children[9][2]}</td>
                            <td>{+children[9][0] + +children[9][1] + +children[9][2]}</td>
                            <td className='table-secondary'></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope='row'>24</th>
                            <td>{children[9][3]}</td>
                            <td>{children[9][4]}</td>
                            <td>{children[9][5]}</td>
                            <td>{+children[9][3] + +children[9][4] + +children[9][5]}</td>
                            <td>{+children[9][0] + +children[9][1] + +children[9][2] + +children[9][3] + +children[9][4] + +children[9][5]}</td>
                            <td>{sumArr[9]}</td>
                        </tr>
                        <tr>
                            <th scope='row'>27</th>
                            <td>{children[10][0]}</td>
                            <td>{children[10][1]}</td>
                            <td>{children[10][2]}</td>
                            <td>{+children[10][0] + +children[10][1] + +children[10][2]}</td>
                            <td className='table-secondary'></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope='row'>30</th>
                            <td>{children[10][3]}</td>
                            <td>{children[10][4]}</td>
                            <td>{children[10][5]}</td>
                            <td>{+children[10][3] + +children[10][4] + +children[10][5]}</td>
                            <td>{+children[10][0] + +children[10][1] + +children[10][2] + +children[10][3] + +children[10][4] + +children[10][5]}</td>
                            <td>{sumArr[10]}</td>
                        </tr>
                        <tr>
                            <th scope='row'>33</th>
                            <td>{children[11][0]}</td>
                            <td>{children[11][1]}</td>
                            <td>{children[11][2]}</td>
                            <td>{+children[11][0] + +children[11][1] + +children[11][2]}</td>
                            <td className='table-secondary'></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope='row'>36</th>
                            <td>{children[11][3]}</td>
                            <td>{children[11][4]}</td>
                            <td>{children[11][5]}</td>
                            <td>{+children[11][3] + +children[11][4] + +children[11][5]}</td>
                            <td>{+children[11][0] + +children[11][1] + +children[11][2] + +children[11][3] + +children[11][4] + +children[11][5]}</td>
                            <td className='bg-primary'>{sumArr[11]}</td>
                        </tr>

                    </tbody>
                </table>
            </div >
            <div>
                <p>Pierwsza odległość: <span>{sumArr[5]}/360</span></p>
                <p>Druga odległość: <span>{sumArr[11]}/360</span></p>
                <p>Razem: <span>{+sumArr[5] + +sumArr[11]}/720</span></p>
            </div>
        </>
    )
}
